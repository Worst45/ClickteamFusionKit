// NebulaCatalog <racine Nebula.Core> <sortie.json>
// Pour chaque `return` des méthodes de rendu de Nebula, remonte les switch/if englobants
// et produit une entrée { kind, objectType, num, when, template, source }.
using System.Text.Json;
using System.Text.RegularExpressions;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;

string root = args[0];
string output = args[1];
string ev = Path.Combine(root, "Data", "Chunks", "FrameChunks", "Events");
var targets = new[]
{
    (kind: "condition", file: Path.Combine(ev, "Condition.cs"), method: "GetString"),
    (kind: "action", file: Path.Combine(ev, "Action.cs"), method: "ToString"),
    (kind: "expression", file: Path.Combine(ev, "Parameters", "ParameterExpression.cs"), method: "ToString"),
};

var entries = new List<Entry>();
foreach (var t in targets)
{
    var tree = CSharpSyntaxTree.ParseText(File.ReadAllText(t.file));
    var method = tree.GetRoot().DescendantNodes().OfType<MethodDeclarationSyntax>()
        .First(m => m.Identifier.Text == t.method && m.Body != null && m.Body.DescendantNodes().OfType<SwitchStatementSyntax>().Any());
    foreach (var ret in method.Body.DescendantNodes().OfType<ReturnStatementSyntax>())
    {
        if (ret.Expression == null)
            continue;
        string objType = null, num = null;
        var when = new List<string>();
        SyntaxNode child = ret;
        for (SyntaxNode n = ret.Parent; n != null && n != method.Body; child = n, n = n.Parent)
        {
            // `if (X) return A; return B;` : B ne s'applique que si les if précédents sont faux
            if (n is BlockSyntax or SwitchSectionSyntax)
            {
                var statements = n is BlockSyntax b ? b.Statements : ((SwitchSectionSyntax)n).Statements;
                foreach (var prev in statements.TakeWhile(s => s != child))
                    if (prev is IfStatementSyntax pif && pif.Else == null && pif.Statement is ReturnStatementSyntax)
                        when.Add($"!({pif.Condition})");
            }

            if (n is SwitchSectionSyntax section && section.Parent is SwitchStatementSyntax sw)
            {
                string gov = sw.Expression.ToString();
                string labels = string.Join(" | ", section.Labels.Select(LabelText));
                if (gov == "ObjectType" && objType == null) objType = labels;
                else if (gov == "Num" && num == null) num = labels;
                else when.Add($"{gov} = {labels}");
            }
            else if (n is IfStatementSyntax ifs)
            {
                when.Add(child == ifs.Else ? $"!({ifs.Condition})" : ifs.Condition.ToString());
            }
        }
        string raw = ret.Expression.ToString();
        if (raw.Contains("[ERROR]") || num == null && objType == null)
            continue;
        entries.Add(new Entry
        {
            kind = t.kind,
            objectType = objType ?? "?",
            num = num ?? "?",
            when = when.Count > 0 ? string.Join(" && ", when.AsEnumerable().Reverse()) : null,
            template = Simplify(raw),
            source = $"{Path.GetFileName(t.file)}:{ret.GetLocation().GetLineSpan().StartLinePosition.Line + 1}",
        });
    }
}

File.WriteAllText(output, JsonSerializer.Serialize(entries, new JsonSerializerOptions
{
    WriteIndented = true,
    Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping
}));
Console.WriteLine($"{entries.Count} entrées -> {output}");
foreach (var g in entries.GroupBy(e => e.kind))
    Console.WriteLine($"  {g.Key}: {g.Count()}");

static string LabelText(SwitchLabelSyntax l) => l switch
{
    CaseSwitchLabelSyntax c => c.Value.ToString(),
    CasePatternSwitchLabelSyntax p => p.Pattern.ToString(),
    DefaultSwitchLabelSyntax => "default",
    _ => l.ToString()
};

// Rend le gabarit lisible : interpolations Nebula -> <placeholders>
static string Simplify(string s)
{
    s = s.Trim();
    if (s.StartsWith("Header + "))
        s = s["Header + ".Length..];
    if (s.StartsWith("$\"") && s.EndsWith("\""))
        s = s[2..^1];
    else if (s.StartsWith("\"") && s.EndsWith("\""))
        s = s[1..^1];
    s = Regex.Replace(s, @"\{GetObjectName\(\)\}", "<objet>");
    s = Regex.Replace(s, @"\{GetComparison\([^{}]*?\.Comparison\)\}", "<op>");
    s = Regex.Replace(s, @"\{Parameters\[(\d+)\](\.Data)?\}", "<p$1>");
    s = Regex.Replace(s, @"\{GetGlobalValueName\(Parameters\[(\d+)\]\.Data\)\}", "<valeur globale p$1>");
    s = Regex.Replace(s, @"\{GetGlobalStringName\(Parameters\[(\d+)\]\.Data\)\}", "<chaîne globale p$1>");
    s = Regex.Replace(s, @"\{GetObjectAlterableValueName\(Parameters\[(\d+)\]\.Data\)\}", "<valeur modifiable p$1>");
    s = Regex.Replace(s, @"\{GetObjectAlterableStringName\(Parameters\[(\d+)\]\.Data\)\}", "<chaîne modifiable p$1>");
    s = Regex.Replace(s, @"\{GetAlterableValueName\(Parameters\[(\d+)\]\.Data\)\}", "<valeur modifiable p$1>");
    s = Regex.Replace(s, @"\{GetZone\((\d+)[^}]*\}", "<zone p$1>");
    s = Regex.Replace(s, @"\{GetKeyboardKey\([^}]*\}", "<touche>");
    s = Regex.Replace(s, @"\{GetJoystickString\([^}]*\}", "<direction joystick>");
    s = Regex.Replace(s, @"\{GetMenuItemName\([^}]*\}", "<option de menu>");
    s = Regex.Replace(s, @"\{GetObjectAnimation\([^}]*\}", "<animation>");
    s = Regex.Replace(s, @"\{GetDirection\([^}]*\}", "<direction>");
    s = Regex.Replace(s, @"\{GetFrameName\([^}]*\}", "<frame>");
    s = Regex.Replace(s, @"\{ObjectInfo \+ 1\}", "<n° joueur>");
    s = s.Replace("\\\"", "\"");
    return s;
}

class Entry
{
    public string kind { get; set; }
    public string objectType { get; set; }
    public string num { get; set; }
    public string when { get; set; }
    public string template { get; set; }
    public string source { get; set; }
}
