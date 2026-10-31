// NebulaTest <fichier.mfa|.exe> <sortie.txt>
// Écrit, pour chaque frame, chaque condition/action telle que Nebula la rend (ToString),
// afin de comparer le comportement avant/après les patchs de Nebula.Core.
using System.Text;
using Nebula;
using Nebula.Core.Data.Chunks.FrameChunks;
using Nebula.Core.Data.Chunks.FrameChunks.Events;
using Nebula.Core.FileReaders;
using Nebula.Core.Memory;

string input = Path.GetFullPath(args[0]);
string output = Path.GetFullPath(args[1]);
Directory.SetCurrentDirectory(AppContext.BaseDirectory);
NebulaCore.Init();

IFileReader reader = Path.GetExtension(input).ToLower() == ".mfa" ? new MFAFileReader() : new EXEFileReader();
NebulaCore.CurrentReader = reader;
NebulaCore.FilePath = input;
using (var bytes = new ByteReader(File.ReadAllBytes(input)))
    reader.LoadGame(bytes, input);

var sb = new StringBuilder();
// NEBULATEST_HANDLES=1 : liste, par frame, les numéros d'objets (pour vérifier s'ils sont propres à chaque frame)
if (Environment.GetEnvironmentVariable("NEBULATEST_HANDLES") == "1" && reader is MFAFileReader mfaReader)
{
    var byHandle = new Dictionary<int, HashSet<string>>();
    foreach (Frame f in mfaReader.Package.Frames)
        foreach (var oi in f.MFAFrameInfo.Objects)
            (byHandle.TryGetValue(oi.Handle, out var set) ? set : byHandle[oi.Handle] = new()).Add($"{oi.Name} (type {oi.ObjectType})");
    var conflicts = byHandle.Where(kv => kv.Value.Count > 1).ToList();
    Console.WriteLine($"{mfaReader.Package.Frames.Count} frames, {byHandle.Count} numéros, {conflicts.Count} numéros portés par des objets différents");
    foreach (var kv in conflicts.Take(5))
        Console.WriteLine($"  {kv.Key}: {string.Join(" | ", kv.Value.Take(4))}");
}
foreach (Frame frame in reader.getPackageData().Frames)
{
    sb.AppendLine($"=== FRAME {frame.FrameName}");
    if (frame.FrameEvents == null)
        continue;
    int n = 0;
    foreach (Event evt in frame.FrameEvents.Events)
    {
        n++;
        sb.AppendLine($"#{n}");
        foreach (Condition c in evt.Conditions)
        {
            sb.AppendLine($"  C[{c.ObjectType}/{c.Num}] {Safe(() => c.ToString())}");
#if RAW
            foreach (Parameter p in c.Parameters.Where(p => p.Code.ToString() == Environment.GetEnvironmentVariable("NEBULATEST_RAW")))
                sb.AppendLine($"    RAW[{p.Code}] len={p.Raw.Length} {Convert.ToHexString(p.Raw)}");
            // Aller-retour : WriteMFA doit reproduire exactement les octets lus
            foreach (Parameter p in c.Parameters.Where(p => p.Data is Nebula.Core.Data.Chunks.FrameChunks.Events.Parameters.ParameterComment))
            {
                var ms = new MemoryStream();
                var w = new ByteWriter(ms);
                p.Data.WriteMFA(w);
                w.Flush();
                bool same = ms.ToArray().SequenceEqual(p.Raw.Skip(2));
                sb.AppendLine($"    ROUNDTRIP[{p.Code}] {(same ? "OK" : "DIFF")}");
            }
#endif
        }
        foreach (Nebula.Core.Data.Chunks.FrameChunks.Events.Action a in evt.Actions)
            sb.AppendLine($"  A[{a.ObjectType}/{a.Num}] {Safe(() => a.ToString())}");
    }
}
File.WriteAllText(output, sb.ToString(), new UTF8Encoding(true));
Console.WriteLine($"OK -> {output}");

static string Safe(Func<string> f)
{
    try { return f(); }
    catch (Exception ex) { return $"<EXCEPTION {ex.GetType().Name}: {ex.Message}>"; }
}
