// MfaDump : lit un projet Clickteam Fusion (.mfa) via Nebula.Core (lecture seule)
// et écrit les objets, valeurs et événements de chaque frame dans un fichier texte.
// Usage : MfaDump <fichier.mfa> [sortie.txt]
//         MfaDump <a.mfa> <b.mfa> ...   (ou glisser-déposer des .mfa sur l'exe)
using System.Diagnostics;
using System.Text;
using System.Text.RegularExpressions;
using Nebula;
using Nebula.Core.Data.Chunks.FrameChunks;
using Nebula.Core.Data.Chunks.FrameChunks.Events;
using Nebula.Core.Data.Chunks.FrameChunks.Events.Parameters;
using Nebula.Core.Data.Chunks.MFAChunks;
using Nebula.Core.Data.Chunks.MFAChunks.MFAObjectChunks;
using Nebula.Core.Data.Chunks.ObjectChunks;
using Nebula.Core.Data.Chunks.ObjectChunks.ObjectCommon;
using Nebula.Core.Data.PackageReaders;
using Nebula.Core.FileReaders;
using Nebula.Core.Memory;
using FAction = Nebula.Core.Data.Chunks.FrameChunks.Events.Action;

// Lancé depuis l'Explorateur (double-clic, glisser-déposer) : la console vient d'être créée,
// on attendra une touche avant de la fermer pour que le message reste lisible.
bool ownConsole = !Console.IsOutputRedirected && Console.CursorLeft == 0 && Console.CursorTop == 0;

if (args.Length < 1)
{
    Console.WriteLine("MfaDump : exporte les événements d'un projet Clickteam Fusion (.mfa) en texte.");
    Console.WriteLine("Usage : MfaDump <fichier.mfa> [sortie.txt]");
    Console.WriteLine("        MfaDump <a.mfa> <b.mfa> ...   (ou glisser-déposer des .mfa sur MfaDump.exe)");
    Console.WriteLine("Le fichier .mfa n'est jamais modifié. Sortie par défaut : <projet>.events.txt à côté du .mfa.");
    return Exit(1);
}

// Plusieurs .mfa : Nebula garde un état global, on relance un processus par fichier
if (args.Length > 1 && args.All(a => a.EndsWith(".mfa", StringComparison.OrdinalIgnoreCase)))
{
    int failures = 0;
    foreach (string file in args)
    {
        var psi = new ProcessStartInfo(Environment.ProcessPath!) { UseShellExecute = false };
        psi.ArgumentList.Add(file);
        using var child = Process.Start(psi)!;
        child.WaitForExit();
        if (child.ExitCode != 0)
            failures++;
    }
    return Exit(failures == 0 ? 0 : 1);
}

string input = Path.GetFullPath(args[0]);
string output = args.Length > 1 ? Path.GetFullPath(args[1]) : Path.ChangeExtension(input, ".events.txt");

try
{
    Run(input, output);
    Console.WriteLine($"OK -> {output}");
    return Exit(0);
}
catch (Exception ex)
{
    Console.WriteLine($"ERREUR sur {input} : {ex.Message}");
    Console.WriteLine(ex.StackTrace);
    return Exit(1);
}

int Exit(int code)
{
    if (ownConsole)
    {
        Console.WriteLine("Appuyez sur une touche pour fermer...");
        Console.ReadKey(true);
    }
    return code;
}

static void Run(string input, string output)
{
    // Nebula charge zlibwapi.dll et écrit ses logs relativement au dossier courant
    Directory.SetCurrentDirectory(AppContext.BaseDirectory);
    NebulaCore.Init();

    var reader = new MFAFileReader();
    NebulaCore.CurrentReader = reader;
    NebulaCore.FilePath = input;
    // Lecture seule : on charge tout en mémoire plutôt que d'ouvrir le fichier en ReadWrite comme Nebula
    using (var bytes = new ByteReader(File.ReadAllBytes(input)))
        reader.LoadGame(bytes, input);

    MFAPackageData pkg = reader.Package;
    var sb = new StringBuilder();

    sb.AppendLine($"Application : {pkg.AppName}  (build Fusion {pkg.ProductBuild})");
    sb.AppendLine($"Fenêtre : {pkg.AppHeader.AppWidth}x{pkg.AppHeader.AppHeight}, {pkg.AppHeader.FrameRate} FPS");
    sb.AppendLine();

    // MFADUMP_JSONL=1 : écrit aussi <sortie>.jsonl, une ligne par condition/action (statistiques)
    if (Environment.GetEnvironmentVariable("MFADUMP_JSONL") == "1")
    {
        Out.Jsonl = new StreamWriter(Path.ChangeExtension(output, ".jsonl"), false, new UTF8Encoding(false));
        Out.Extensions = pkg.Extensions.Exts.ToDictionary(e => e.Key, e => (e.Value.Name, Path.GetFileNameWithoutExtension(e.Value.FileName)));
    }

    DumpNames(sb, "Valeurs globales", pkg.GlobalValueNames.Names);
    DumpNames(sb, "Chaînes globales", pkg.GlobalStringNames.Names);

    if (pkg.GlobalEvents.Events.Count > 0)
    {
        sb.AppendLine("################ ÉVÉNEMENTS GLOBAUX ################");
        Out.Frame = "(global)";
        CollectNames(pkg.GlobalEvents, pkg.FrameItems.Items);
        DumpEvents(sb, pkg.GlobalEvents);
    }

    foreach (Frame frame in pkg.Frames)
    {
        sb.AppendLine($"################ FRAME : {frame.FrameName} ################");
        sb.AppendLine();
        Out.Frame = frame.FrameName;
        Names.FlagsByItem.Clear(); // numéros d'objets propres à chaque frame
        sb.AppendLine("== Objets ==");
        foreach (MFAObjectInfo oi in frame.MFAFrameInfo.Objects)
        {
            sb.Append($"  {oi.Name} ({TypeName(oi.ObjectType)})");
            if (oi.ObjectLoader is MFAObjectLoader loader)
            {
                var vals = loader.AlterableValues;
                var named = vals.Names
                    .Select((n, i) => (n, i)).Where(x => !string.IsNullOrEmpty(x.n))
                    .Select(x => $"{x.n}={vals.AlterableValues.ElementAtOrDefault(x.i)}");
                if (named.Any())
                    sb.Append("  valeurs: " + string.Join(", ", named));
            }
            sb.AppendLine();
            if (oi.AltFlags != null)
                Names.FlagsByItem[oi.Handle] = oi.AltFlags.AlterableFlags.Select(f => f.Name).ToArray();
        }
        sb.AppendLine();

        var qualifiers = CollectNames(frame.FrameEvents, frame.MFAItems);
        if (qualifiers.Count > 0)
        {
            sb.AppendLine("== Groupes d'objets (qualifiers) ==");
            foreach (var q in qualifiers)
                sb.AppendLine($"  {q.Key} : {(q.Value.Count > 0 ? string.Join(", ", q.Value) : "?")}");
            sb.AppendLine();
        }

        sb.AppendLine("== Événements ==");
        DumpEvents(sb, frame.FrameEvents);
    }

    File.WriteAllText(output, sb.ToString(), new UTF8Encoding(true));
    Out.Jsonl?.Dispose();
}

// Prépare les noms de flags et de valeurs par EventObject (objet ou qualifier), pour l'affichage.
// Un qualifier prend les noms de son premier membre. Renvoie les membres de chaque qualifier.
static Dictionary<string, List<string>> CollectNames(FrameEvents evts, Dictionary<int, ObjectInfo> items)
{
    var qualifiers = new Dictionary<string, List<string>>();
    Names.FlagsByEventObject.Clear();
    Names.ValuesByEventObject.Clear();
    if (evts == null)
        return qualifiers;

    foreach (EventObject eo in evts.EventObjects.Values)
    {
        ObjectInfo real = null;
        if (eo.ObjectType == 1)
            items.TryGetValue((int)eo.ItemHandle, out real);
        else if (eo.ObjectType == 3)
        {
            int qid = eo.SystemQualifier & 0x7FFF;
            var members = items.Values
                .Where(o => o.Properties is ObjectCommon oc && oc.Qualifiers.Any(q => q != -1 && (q & 0x7FFF) == qid))
                .ToList();
            qualifiers[eo.Name] = members.Select(m => m.Name).ToList();
            real = members.FirstOrDefault();
        }
        if (real != null && Names.FlagsByItem.TryGetValue(real.Header.Handle, out var flags))
            Names.FlagsByEventObject[eo.Handle] = flags;
        if (real?.Properties is ObjectCommon common)
        {
            Names.ValuesByEventObject[eo.Handle] = common.ObjectAlterableValues.Names;
            Names.ValuesByObjectName[eo.Name] = common.ObjectAlterableValues.Names;
        }
    }
    return qualifiers;
}

static void DumpNames(StringBuilder sb, string title, string[] names)
{
    if (names == null || !names.Any(n => !string.IsNullOrEmpty(n)))
        return;
    sb.AppendLine($"== {title} ==");
    for (int i = 0; i < names.Length; i++)
        if (!string.IsNullOrEmpty(names[i]))
            sb.AppendLine($"  {i}: {names[i]}");
    sb.AppendLine();
}

static void DumpEvents(StringBuilder sb, FrameEvents evts)
{
    if (evts == null || evts.Events.Count == 0)
    {
        sb.AppendLine("  (aucun)");
        sb.AppendLine();
        return;
    }

    string rawCode = Environment.GetEnvironmentVariable("MFADUMP_RAW");
    int indent = 0;
    int n = 0;
    foreach (Event evt in evts.Events)
    {
        n++;
        Condition first = evt.Conditions.FirstOrDefault();
        string pad() => new string(' ', 2 + indent * 4);

        // Début de groupe
        if (IsSys(first, -10) && first.Parameters.FirstOrDefault()?.Data is ParameterGroup group)
        {
            string state = group.GroupFlags["InactiveOnStart"] ? "  (désactivé au démarrage)" : "";
            sb.AppendLine($"{pad()}=== GROUPE « {group.Name} » ==={state}");
            indent++;
            continue;
        }
        // Fin de groupe
        if (IsSys(first, -11))
        {
            indent = Math.Max(0, indent - 1);
            sb.AppendLine($"{pad()}=== fin de groupe ===");
            sb.AppendLine();
            continue;
        }
        // Commentaire
        if (IsSys(first, -9) && first.Parameters.FirstOrDefault()?.Data is ParameterComment comment)
        {
            foreach (string line in comment.ToString().Replace("\r", "").Split('\n'))
                sb.AppendLine($"{pad()}// {line}");
            continue;
        }

        string flags = evt.EventFlags["Inactive"] ? "  [DÉSACTIVÉ]" : "";
        sb.AppendLine($"{pad()}#{n}{flags}");
        foreach (Condition c in evt.Conditions)
        {
            string text = WithNames(c, Safe(() => c.ToString(), c.ObjectType, c.Num));
            sb.AppendLine($"{pad()}  SI    {text}");
            Out.Record("C", n, c, text);
            // Debug : MFADUMP_RAW=<code> affiche les paramètres (et leurs octets bruts) des conditions et actions qui ont ce code
            if (rawCode != null && c.Parameters.Any(p => p.Code.ToString() == rawCode))
                foreach (var p in c.Parameters)
                    sb.AppendLine($"{pad()}        RAW[{p.Code}] {p.Data?.GetType().Name} = {Safe(() => p.ToString(), 0, 0)} | {Convert.ToHexString(p.Raw)}");
        }
        foreach (FAction a in evt.Actions)
        {
            if (a.ObjectType == -1 && a.Num == 0)
                continue; // action vide insérée par Fusion
            string text = WithNames(a, Safe(() => a.ToString(), a.ObjectType, a.Num));
            sb.AppendLine($"{pad()}  FAIRE {text}");
            Out.Record("A", n, a, text);
            if (rawCode != null && a.Parameters.Any(p => p.Code.ToString() == rawCode))
                foreach (var p in a.Parameters)
                    sb.AppendLine($"{pad()}        RAW[{p.Code}] {p.Data?.GetType().Name} = {Safe(() => p.ToString(), 0, 0)} | {Convert.ToHexString(p.Raw)}");
        }
    }
    sb.AppendLine();
}

static bool IsSys(Condition c, int num) => c != null && c.ObjectType == -1 && c.Num == num;

// Noms lisibles : Alterable Value F("Obj") -> testPosY("Obj") ; Alterable Value A (de l'objet
// de la condition/action) -> rotation ; Flag N -> Flag N «nom»
static string WithNames(ACEventBase x, string text)
{
    text = Regex.Replace(text, @"Alterable Value ([A-Z])\(""([^""]+)""\)", m =>
    {
        int i = m.Groups[1].Value[0] - 'A';
        return Names.ValuesByObjectName.TryGetValue(m.Groups[2].Value, out var vn) && i < vn.Length && !string.IsNullOrEmpty(vn[i])
            ? $"{vn[i]}(\"{m.Groups[2].Value}\")" : m.Value;
    });

    if (x.ObjectType < 0)
        return text;

    if (Names.ValuesByEventObject.TryGetValue(x.ObjectInfo, out var values))
        text = Regex.Replace(text, @"Alterable Value ([A-Z])(?![A-Z(])", m =>
        {
            int i = m.Groups[1].Value[0] - 'A';
            return i < values.Length && !string.IsNullOrEmpty(values[i]) ? values[i] : m.Value;
        });

    if (Names.FlagsByEventObject.TryGetValue(x.ObjectInfo, out var flags))
        text = Regex.Replace(text, @"Flag (\d+)", m =>
        {
            int i = int.Parse(m.Groups[1].Value);
            return i < flags.Length && !string.IsNullOrEmpty(flags[i]) ? $"Flag {i} «{flags[i]}»" : m.Value;
        });
    return text;
}

static string Safe(Func<string> f, short type, short num)
{
    try { return f(); }
    catch (Exception ex) { return $"[?? type {type}, num {num} : {ex.GetType().Name}]"; }
}

static string TypeName(int t) => t switch
{
    0 => "Quick Backdrop",
    1 => "Backdrop",
    2 => "Active",
    3 => "String",
    4 => "Question",
    5 => "Score",
    6 => "Lives",
    7 => "Counter",
    8 => "Formatted Text",
    9 => "Sub-Application",
    _ => $"Extension {t}"
};

static class Out
{
    public static StreamWriter Jsonl;
    // Index d'extension -> (nom affiché, fichier .mfx sans extension)
    public static Dictionary<int, (string name, string file)> Extensions = new();
    public static string Frame = "";
    static readonly System.Text.Json.JsonSerializerOptions JsonOpts = new() { Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping };

    // Une ligne par condition/action ("C"/"A"), puis une par élément des expressions de ses paramètres ("E")
    public static void Record(string kind, int ev, ACEventBase x, string text)
    {
        if (Jsonl == null)
            return;
        string obj = null;
        if (x.ObjectType >= 0)
            try { obj = x.GetObjectName(); } catch { }
        var (ext, extFile) = ExtOf(x.ObjectType);
        Write(new
        {
            frame = Frame, ev, kind, type = x.ObjectType, num = x.Num, ext, extFile, obj,
            neg = x is Condition c && c.OtherFlags["Negated"],
            pars = x.Parameters.Select(p => p.Code).ToArray(),
            text
        });
        foreach (var exprs in x.Parameters.Select(p => p.Data).OfType<ParameterExpressions>())
            foreach (var e in exprs.Expressions)
            {
                var (eExt, eFile) = ExtOf(e.ObjectType);
                string eText;
                try { eText = e.ToString(); } catch (Exception ex) { eText = $"[?? {ex.GetType().Name}]"; }
                Write(new { frame = Frame, ev, kind = "E", type = e.ObjectType, num = e.Num, ext = eExt, extFile = eFile, text = eText });
            }
    }

    static (string, string) ExtOf(int type) =>
        type >= 32 && Extensions.TryGetValue(type - 32, out var e) ? e : (null, null);

    static void Write(object o) => Jsonl.WriteLine(System.Text.Json.JsonSerializer.Serialize(o, JsonOpts));
}

static class Names
{
    public static readonly Dictionary<int, string[]> FlagsByItem = new();
    public static readonly Dictionary<int, string[]> FlagsByEventObject = new();
    public static readonly Dictionary<int, string[]> ValuesByEventObject = new();
    public static readonly Dictionary<string, string[]> ValuesByObjectName = new();
}

