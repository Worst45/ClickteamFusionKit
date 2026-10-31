// ExtCatalog --all <output folder> <.mfx folder>...
//   For each Fusion extension (32-bit DLL): lists its conditions, actions and expressions by
//   walking the editor menus, as Fusion does. One process per extension and per type (an
//   extension that crashes does not stop the others); after a crash, new attempt without the
//   display text (menu + parameters only). Result: <output folder>\<extension>.json
// ExtCatalog <extension.mfx> <output.json> <Condition|Action|Expression>   (worker process)
//   Variables: EXTCAT_NOSTRING=1 (no Get*String), EXTCAT_VERSION (hex, default 20000128),
//   EXTCAT_TRACE=1 (call trace on stderr), EXTCAT_RUNTIME (folder of mmfs2.dll)
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;

var jsonOptions = new JsonSerializerOptions
{
    WriteIndented = true,
    Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
};
string[] kinds = { "Condition", "Action", "Expression" };

if (args.Length >= 3 && args[0] == "--all")
{
    string outDir = Path.GetFullPath(args[1]);
    Directory.CreateDirectory(outDir);
    string tmp = Path.Combine(outDir, "_tmp");
    Directory.CreateDirectory(tmp);
    // EXTCAT_ONLY=name1,name2: process only these extensions
    var only = Environment.GetEnvironmentVariable("EXTCAT_ONLY")?.Split(',').Select(s => s.Trim().ToLowerInvariant()).ToHashSet();
    foreach (string mfx in args.Skip(2).SelectMany(d => Directory.GetFiles(d, "*.mfx"))
                 .Where(f => only == null || only.Contains(Path.GetFileNameWithoutExtension(f).ToLowerInvariant())).OrderBy(Path.GetFileName))
    {
        string name = Path.GetFileNameWithoutExtension(mfx);
        var merged = new JsonObject { ["file"] = Path.GetFileName(mfx), ["path"] = mfx };
        var status = new List<string>();
        foreach (string kind in kinds)
        {
            string part = Path.Combine(tmp, $"{name}.{kind}.json");
            // Successive attempts: the extension's menu, then the menus read from the DLL resources
            // (extensions whose menu needs a real object), with then without the display text
            string mode = "failed";
            // An empty menu (no real object) also triggers the next attempt; the most complete one is kept
            int best = -1;
            foreach (var (resMenu, noString, label) in new[] { (false, false, "ok"), (false, true, "no text"),
                                                               (true, false, "resource menu"), (true, true, "resource menu, no text") })
            {
                string attempt = part + ".try";
                if (!RunWorker(mfx, attempt, kind, noString, resMenu))
                    continue;
                int n = JsonNode.Parse(File.ReadAllText(attempt)) is JsonArray a ? a.Count : 0;
                if (n > best)
                {
                    best = n;
                    mode = label;
                    File.Copy(attempt, part, true);
                }
                File.Delete(attempt);
                if (n > 0)
                    break;
            }
            if (File.Exists(part))
            {
                merged[kind.ToLower() + "s"] = JsonNode.Parse(File.ReadAllText(part));
                File.Delete(part);
            }
            if (mode != "ok")
                merged[kind.ToLower() + "s_status"] = mode;
            int count = merged[kind.ToLower() + "s"] is JsonArray arr ? arr.Count : -1;
            status.Add($"{kind[0]}={(count >= 0 ? count : "-")}{(mode == "ok" ? "" : $" ({mode})")}");
        }
        // Same extension in Unicode and old versions: keep the most complete one
        string outFile = Path.Combine(outDir, name + ".json");
        static int Total(JsonNode n) => new[] { "conditions", "actions", "expressions" }.Sum(k => n?[k] is JsonArray a ? a.Count : 0);
        if (File.Exists(outFile) && Total(JsonNode.Parse(File.ReadAllText(outFile))) >= Total(merged))
            status.Add("(less complete duplicate, ignored)");
        else
            File.WriteAllText(outFile, merged.ToJsonString(jsonOptions));
        Console.WriteLine($"{Path.GetFileName(mfx),-40} {string.Join("  ", status)}");
    }
    Directory.Delete(tmp, true);
    return 0;
}

// Worker process: one extension, one type
{
    string path = Path.GetFullPath(args[0]);
    string output = Path.GetFullPath(args[1]);
    string kind = args[2];
    Native.SetDllDirectory(Environment.GetEnvironmentVariable("EXTCAT_RUNTIME")
        ?? @"C:\Program Files (x86)\Clickteam Fusion Developer 2.5\Data\Runtime\Unicode");
    Directory.SetCurrentDirectory(Path.GetDirectoryName(path)!);

    IntPtr lib = Native.LoadLibraryW(path);
    if (lib == IntPtr.Zero)
    {
        Console.WriteLine($"LoadLibrary failed ({Marshal.GetLastWin32Error()})");
        return 2;
    }
    var list = Ext.Read(lib, kind, Environment.GetEnvironmentVariable("EXTCAT_NOSTRING") != "1",
                        Environment.GetEnvironmentVariable("EXTCAT_RESMENU") == "1");
    File.WriteAllText(output, JsonSerializer.Serialize(list, jsonOptions));
    return 0;
}

static bool RunWorker(string mfx, string output, string kind, bool noString, bool resMenu)
{
    if (File.Exists(output))
        File.Delete(output);
    var psi = new ProcessStartInfo(Environment.ProcessPath!) { UseShellExecute = false, RedirectStandardOutput = true, RedirectStandardError = true };
    psi.ArgumentList.Add(mfx);
    psi.ArgumentList.Add(output);
    psi.ArgumentList.Add(kind);
    psi.Environment["EXTCAT_NOSTRING"] = noString ? "1" : "0";
    psi.Environment["EXTCAT_RESMENU"] = resMenu ? "1" : "0";
    using var p = Process.Start(psi)!;
    p.StandardOutput.ReadToEndAsync();
    p.StandardError.ReadToEndAsync();
    if (!p.WaitForExit(20000))
    {
        p.Kill();
        return false;
    }
    return p.ExitCode == 0 && File.Exists(output);
}

class Ace
{
    public int code { get; set; }
    public string menu { get; set; }
    public string text { get; set; }
    public int menuId { get; set; }
    public string resText { get; set; }
    public int flags { get; set; }
    public List<short> paramTypes { get; set; }
    public List<string> paramTitles { get; set; }
    public bool paramsUnreliable { get; set; }
    public bool codeGuessed { get; set; }
}

static unsafe class Ext
{
    // Fake mv structure (editor environment). Extensions check their compatibility through the
    // mvGetVersion() function of this structure: every slot therefore points to a tiny native
    // function that returns a version number (EXTCAT_VERSION, hexadecimal).
    static readonly IntPtr MV = Marshal.AllocHGlobal(4096);
    static Ext()
    {
        uint version = Convert.ToUInt32(Environment.GetEnvironmentVariable("EXTCAT_VERSION") ?? "20000128", 16);
        var slots = new Span<uint>((void*)MV, 1024);
        if (version == 0)
        {
            slots.Clear();
            return;
        }
        // mov eax, version ; ret
        byte* stub = (byte*)Native.VirtualAlloc(IntPtr.Zero, 16, 0x3000, 0x40);
        stub[0] = 0xB8;
        *(uint*)(stub + 1) = version;
        stub[5] = 0xC3;
        slots.Fill((uint)stub);
    }
    static void Trace(string s) { if (Environment.GetEnvironmentVariable("EXTCAT_TRACE") == "1") { Console.Error.WriteLine(s); Console.Error.Flush(); } }

    // Fusion SDK signatures (Edittime.cpp), stdcall convention, Unicode strings (Unicode build)
    public static List<Ace> Read(IntPtr lib, string kind, bool withString, bool resMenu)
    {
        var list = new List<Ace>();
        // Without a menu function, only the menus in the resources can be read
        bool hasMenu = NativeLibrary.TryGetExport(lib, $"Get{kind}Menu", out IntPtr menuExport);
        if (!hasMenu && !resMenu)
            return list;
        var getMenu = (delegate* unmanaged[Stdcall]<IntPtr, IntPtr, IntPtr, IntPtr>)menuExport;
        var codeFromMenu = (delegate* unmanaged[Stdcall]<IntPtr, short, short>)Optional(lib, $"Get{kind}CodeFromMenu");
        var getString = (delegate* unmanaged[Stdcall]<IntPtr, short, char*, short, void>)Optional(lib, $"Get{kind}String");
        var getInfos = (delegate* unmanaged[Stdcall]<IntPtr, short, short*>)Optional(lib, $"Get{kind}Infos");
        int baseId = kind switch { "Action" => 25000, "Condition" => 26000, _ => 27000 };
        IntPtr titleExport = NativeLibrary.TryGetExport(lib, kind == "Expression" ? "GetExpressionParam" : $"Get{kind}Title", out var t) ? t : IntPtr.Zero;
        var getTitle = (delegate* unmanaged[Stdcall]<IntPtr, short, short, char*, short, void>)titleExport;

        Trace($"{kind}Menu");
        IEnumerable<(int id, string path)> items;
        if (resMenu)
        {
            // SDK convention: actions 25000+, conditions 26000+, expressions 27000+
            items = Native.ResourceMenus(lib).SelectMany(m => Native.MenuItems(m, ""))
                          .Where(i => i.id >= baseId && i.id < baseId + 1000).ToList();
        }
        else
        {
            IntPtr menu = getMenu(MV, IntPtr.Zero, IntPtr.Zero);
            if (menu == IntPtr.Zero)
                return list;
            items = Native.MenuItems(menu, "");
        }
        var seen = new HashSet<int>();
        foreach (var (id, menuPath) in items)
        {
            Trace($"{kind}CodeFromMenu {id}");
            // Without Get*CodeFromMenu, number guessed from the SDK identifier convention
            bool guessed = codeFromMenu == null;
            short code = guessed ? (short)(id - baseId) : codeFromMenu(MV, (short)id);
            if (code < 0 || !seen.Add(code))
                continue;
            var ace = new Ace { code = code, codeGuessed = guessed, menuId = id, resText = Native.LoadStr(lib, id), menu = menuPath, paramTypes = new(), paramTitles = new() };
            char* buf = stackalloc char[1024];
            buf[0] = '\0';
            if (withString && getString != null)
            {
                Trace($"{kind}String {code}");
                getString(MV, code, buf, 1023);
                ace.text = new string(buf);
            }
            Trace($"{kind}Infos {code}");
            short* infos = getInfos != null ? getInfos(MV, code) : null;
            if (infos != null)
            {
                // infosEventsV2: code, flags, nParams, then nParams parameter types.
                // Safeguard: beyond 12 parameters or with a type outside the known range
                // (1-100), the structure is not the expected one.
                ace.flags = infos[1];
                int n = infos[2];
                if (n < 0 || n > 12)
                {
                    ace.paramsUnreliable = true;
                    n = 0;
                }
                for (int i = 0; i < n; i++)
                {
                    if (infos[3 + i] <= 0 || infos[3 + i] > 100)
                    {
                        ace.paramsUnreliable = true;
                        break;
                    }
                    ace.paramTypes.Add(infos[3 + i]);
                    if (getTitle != null)
                    {
                        buf[0] = '\0';
                        Trace($"{kind}Title {code}/{i}");
                        getTitle(MV, code, (short)i, buf, 1023);
                        ace.paramTitles.Add(new string(buf));
                    }
                }
            }
            list.Add(ace);
        }
        return list.OrderBy(a => a.code).ToList();
    }

    static IntPtr Optional(IntPtr lib, string name) =>
        NativeLibrary.TryGetExport(lib, name, out var p) ? p : IntPtr.Zero;
}

static class Native
{
    [DllImport("kernel32", CharSet = CharSet.Unicode, SetLastError = true)]
    public static extern IntPtr LoadLibraryW(string path);

    [DllImport("kernel32", CharSet = CharSet.Unicode, SetLastError = true)]
    public static extern bool SetDllDirectory(string path);

    [DllImport("kernel32")] public static extern IntPtr VirtualAlloc(IntPtr addr, UIntPtr size, uint type, uint protect);
    public static IntPtr VirtualAlloc(IntPtr addr, int size, uint type, uint protect) => VirtualAlloc(addr, (UIntPtr)size, type, protect);

    [DllImport("user32")] static extern int GetMenuItemCount(IntPtr menu);
    [DllImport("user32")] static extern IntPtr GetSubMenu(IntPtr menu, int pos);
    [DllImport("user32")] static extern uint GetMenuItemID(IntPtr menu, int pos);
    [DllImport("user32", CharSet = CharSet.Unicode)] static extern int GetMenuStringW(IntPtr menu, uint item, StringBuilder buf, int max, uint flags);

    [DllImport("user32", CharSet = CharSet.Unicode)] static extern int LoadStringW(IntPtr inst, uint id, StringBuilder buf, int max);
    public static string LoadStr(IntPtr inst, int id) { var sb = new StringBuilder(1024); return LoadStringW(inst, (uint)id, sb, 1024) > 0 ? sb.ToString() : null; }

    const uint MF_BYPOSITION = 0x400;

    [DllImport("user32")] static extern IntPtr LoadMenuW(IntPtr inst, IntPtr name);
    delegate bool EnumResNameProc(IntPtr module, IntPtr type, IntPtr name, IntPtr param);
    [DllImport("kernel32")] static extern bool EnumResourceNamesW(IntPtr module, IntPtr type, EnumResNameProc proc, IntPtr param);

    // All the menus (RT_MENU = 4) in the DLL resources
    public static List<IntPtr> ResourceMenus(IntPtr lib)
    {
        var menus = new List<IntPtr>();
        EnumResourceNamesW(lib, (IntPtr)4, (m, t, name, p) =>
        {
            IntPtr menu = LoadMenuW(lib, name);
            if (menu != IntPtr.Zero)
                menus.Add(menu);
            return true;
        }, IntPtr.Zero);
        return menus;
    }

    // Walks the menu recursively: (item id, path "Menu > Submenu > Item")
    public static IEnumerable<(int id, string path)> MenuItems(IntPtr menu, string prefix)
    {
        int n = GetMenuItemCount(menu);
        for (int i = 0; i < n; i++)
        {
            var sb = new StringBuilder(512);
            GetMenuStringW(menu, (uint)i, sb, 512, MF_BYPOSITION);
            string label = sb.ToString().Replace("&", "");
            string path = prefix.Length > 0 ? $"{prefix} > {label}" : label;
            IntPtr sub = GetSubMenu(menu, i);
            if (sub != IntPtr.Zero)
            {
                foreach (var item in MenuItems(sub, path))
                    yield return item;
                continue;
            }
            uint id = GetMenuItemID(menu, i);
            if (id != 0 && id != 0xFFFFFFFF && label.Length > 0)
                yield return ((int)id, path);
        }
    }
}
