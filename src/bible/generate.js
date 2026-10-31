// Generates the reference "bible" of Clickteam Fusion conditions / actions / expressions.
// node src/bible/generate.js   (or scripts\regen-bible.ps1)
// Inputs (data\): catalog-nebula.json (built-in objects), extensions\installed\ and
//   extensions\third-party\ (ExtCatalog catalogs), usage.json (public corpus statistics),
//   lang\fr-unofficial.json (hand-written French labels), Fusion's fr-fr translations (install
//   folder, otherwise data\fr-cache.json).
// Outputs: skill\clickteam-fusion\bible\ (bilingual EN/FR) and data\lang\fr.json (translation
//   table embedded into MfaDump for its French output).
const fs = require("fs"), path = require("path");

const KIT = path.resolve(__dirname, "../..");
const DATA = path.join(KIT, "data");
const OUT = path.join(KIT, "skill/clickteam-fusion/bible");
fs.mkdirSync(path.join(OUT, "extensions"), { recursive: true });
fs.mkdirSync(path.join(DATA, "lang"), { recursive: true });
const FUSION = process.env.FUSION_DIR || "C:/Program Files (x86)/Clickteam Fusion Developer 2.5";
const readJson = f => JSON.parse(fs.readFileSync(f, "utf8").replace(/^\uFEFF/, ""));
const nebula = readJson(path.join(DATA, "catalog-nebula.json"));
const stats = readJson(path.join(DATA, "usage.json"));
const UNOFFICIAL_FILE = path.join(DATA, "lang/fr-unofficial.json");
const unofficial = fs.existsSync(UNOFFICIAL_FILE) ? readJson(UNOFFICIAL_FILE) : {};
const write = (f, s) => fs.writeFileSync(f, s.replace(/\r\n/g, "\n"));

// ---------------------------------------------------------------- helpers
const md = s => String(s ?? "").replace(/\r?\n/g, " ⏎ ").replace(/\|/g, "\\|").trim();
const code = s => s ? "`" + String(s).replace(/`/g, "'").replace(/\r?\n/g, " ⏎ ").replace(/\|/g, "¦") + "`" : "";
const cut = (s, n = 140) => s && s.length > n ? s.slice(0, n - 1) + "…" : s;
const KIND = { C: "Conditions", A: "Actions", E: "Expressions" };
const KIND_OF = { condition: "C", action: "A", expression: "E" };
const anchor = s => s.toLowerCase().replace(/[^a-z0-9 -]/g, "").trim().replace(/ /g, "-");

// Official English -> French translations (Languages\fr-fr\Modules\*.txt, JSON with BOM).
// Without Fusion installed, data\fr-cache.json is used instead: it only holds the translations
// actually used by the last generation made with Fusion installed.
const FR_DIR = path.join(FUSION, "Languages/fr-fr/Modules");
const FR_CACHE = path.join(DATA, "fr-cache.json");
const haveFusion = fs.existsSync(FR_DIR);
const frSaved = !haveFusion && fs.existsSync(FR_CACHE) ? readJson(FR_CACHE) : {};
const frUsed = {};
const frDicts = {};
function frDict(module) {
  const key = module.toLowerCase();
  if (key in frDicts) return frDicts[key];
  let dict = null;
  if (haveFusion) {
    const file = fs.readdirSync(FR_DIR).find(f => f.toLowerCase() === key + ".txt");
    if (file) {
      try {
        // Not strict JSON (trailing commas): removed before parsing
        const j = JSON.parse(fs.readFileSync(path.join(FR_DIR, file), "utf8").replace(/^\uFEFF/, "").replace(/,(\s*[}\]])/g, "$1"));
        dict = {};
        for (const [section, v] of Object.entries(j))
          if (v && typeof v === "object" && (section === "general" || section.startsWith("menu_") || section.startsWith("string")))
            for (const [en, fr] of Object.entries(v))
              if (typeof fr === "string") dict[en] = fr;
      } catch (e) { dict = null; }
    }
  } else dict = frSaved[key] || null;
  return frDicts[key] = dict;
}
// Looks a translation up and remembers it for data\fr-cache.json
function frGet(module, en) {
  const dict = frDict(module);
  if (!dict || !en || !(en in dict)) return undefined;
  (frUsed[module.toLowerCase()] ??= {})[en] = dict[en];
  return dict[en];
}

// Parameter types (Fusion SDK codes; names from the SDK and Nebula)
const PARAM = { 1: "object", 2: "time", 3: "border", 4: "direction", 5: "integer", 6: "sound", 7: "music",
  9: "object creation", 10: "animation", 11: "(none)", 12: "player", 13: "every", 14: "key",
  15: "speed", 16: "position", 17: "joystick direction", 18: "shoot", 19: "zone", 21: "position (creation)",
  22: "numeric expression", 23: "numeric comparison", 24: "color", 25: "buffer", 26: "frame",
  27: "sound loop", 28: "music loop", 29: "new direction", 31: "text/number", 32: "click",
  33: "external program", 35: "sound (condition)", 36: "music (condition)", 37: "comment", 38: "group title",
  39: "group", 40: "file name", 41: "string", 42: "time comparison", 43: "paste", 44: "key (code)",
  45: "string expression", 46: "string comparison", 47: "ink effect", 48: "menu option", 49: "global value",
  50: "alterable value", 51: "flag", 52: "global value (expr.)", 53: "alterable value (expr.)", 54: "flag (expr.)",
  55: "extension parameter", 56: "8 directions", 57: "movement", 58: "global string", 59: "global string (expr.)",
  60: "program parameters", 61: "alterable string", 62: "alterable string (expr.)", 63: "file name",
  64: "effect", 68: "multiple variables", 69: "child event", 72: "zone (expressions)" };
// Parameters of extension expressions: 1 = number, 3 = string (observed)
const EXP_PARAM = { 1: "number", 2: "number", 3: "string" };

// Non-unicode extensions: ANSI string read as UTF-16 (CJK-looking text) -> take the bytes back
function fixAnsi(s) {
  if (!s || !/[\u3000-\u9fff\uac00-\ud7ff]/.test(s)) return s;
  const bytes = [];
  for (const ch of s) { const c = ch.charCodeAt(0); bytes.push(c & 0xff, c >> 8); }
  const end = bytes.indexOf(0);
  const t = Buffer.from(end >= 0 ? bytes.slice(0, end) : bytes).toString("latin1");
  return /^[\x20-\x7e\xa0-\xff\t\r\n]*$/.test(t) ? t : s;
}

// Display text of an extension or of the editor. Old format "XYtext %s" (X = 1: the first %s is
// the object, Y = number of parameters), new format "%o", "%0"... -> <object>, <p0>, <p1>...
function normText(raw) {
  raw = fixAnsi(raw);
  if (!raw) return "";
  let t = raw, objFirst = false;
  const m = t.match(/^([01])(\d)([\s\S]*)$/);
  if (m && /%s/.test(t)) { objFirst = m[1] === "1"; t = m[3]; }
  else if (m && /^[01]\d\D/.test(t)) t = m[3];
  let i = 0, first = true;
  t = t.replace(/%s/g, () => { if (first && objFirst) { first = false; return "<object>"; } first = false; return `<p${i++}>`; });
  return t.replace(/%o/g, "<object>").replace(/%(\d)/g, "<p$1>").trim();
}

// ---------------------------------------------------------------- statistics
const statsBuiltin = {};
for (const s of stats.builtin) (statsBuiltin[`${s.kind}|${s.num}`] ??= []).push(s);
const statsExt = {};
for (const s of stats.extensions) (statsExt[(s.extFile || "?").toLowerCase()] ??= []).push(s);

function usage(list) {
  if (!list || !list.length) return { count: 0, projects: 0, example: "", errors: 0 };
  const count = list.reduce((a, s) => a + s.count, 0);
  const best = list.reduce((a, s) => (s.examples.length && s.count > (a?.count ?? -1) ? s : a), null);
  return { count, projects: Math.max(...list.map(s => s.projects)), example: best?.examples[0] ?? "",
           errors: list.reduce((a, s) => a + s.errors, 0), errorExample: list.find(s => s.errorExamples.length)?.errorExamples[0] };
}
const usageCell = u => u.count ? `${u.count} (${u.projects} proj.)` : "—";

// ---------------------------------------------------------------- built-in objects
const TYPE_NAME = { "-7": "Players", "-6": "Keyboard and mouse", "-5": "Create / pick objects",
  "-4": "Timer", "-3": "Storyboard (frame)", "-2": "Sound", "-1": "Special (system)", "0": "Operators (expressions)" };
const OBJ_NAME = { 2: "Active", 3: "String", 4: "Question & Answer", 5: "Score", 6: "Lives",
  7: "Counter", 8: "Formatted Text", 9: "Sub-Application" };

// Entries for which Nebula returns code (computed value) or builds the text in several steps:
// explicit template
const CODE_TEMPLATE = {
  "condition|-1|-10": "[GROUP] <group name>",
  "condition|-1|-9": "[COMMENT] <text>",
  "condition|-6|-5": "User clicks with <mouse button> button",
  "condition|-6|-6": "User clicks with <mouse button> button within zone <zone p1>",
  "condition|-6|-7": "User clicks with <mouse button> button on <p1>",
  "condition|-6|-8": "Repeat while <mouse button> mouse-key is pressed",
  "expression|-1|0": "<integer> (e.g. 3)",
  "expression|-1|3": "<string> (e.g. \"text\")",
  "expression|-1|23": "<decimal> (e.g. 1.0, 2.5)",
  "expression|-1|24": "<global value name>",
  "expression|-1|50": "<global string name>",
};

const claimed = {}; // "kind|num" -> specific object types (2, 7...) covered by a dedicated entry
const sections = {};
for (const e of nebula) {
  const k = KIND_OF[e.kind];
  if (e.objectType === "default") continue;
  let section, types = null, typeKey;
  const pos = (e.when || "").match(/(?<!!\()ObjectType == (\d+)/);
  if (/^-\d$/.test(e.objectType) || e.objectType === "0") {
    section = TYPE_NAME[e.objectType];
    types = [+e.objectType];
    typeKey = e.objectType;
  } else if (pos) {
    section = "Object " + (OBJ_NAME[pos[1]] || `type ${pos[1]}`);
    types = [+pos[1]];
    typeKey = pos[1];
    (claimed[`${k}|${e.num}`] ??= new Set()).add(+pos[1]);
  } else {
    section = "Objects (common to all objects)";
    typeKey = "*";
  }
  const template = CODE_TEMPLATE[`${e.kind}|${e.objectType}|${e.num}`] ?? e.template;
  const when = (e.when || "").split(" && ").filter(w => w && !/ObjectType/.test(w) && w !== "Num = default").join(" and ");
  (sections[section] ??= { C: [], A: [], E: [] })[k].push({ num: e.num, template, when, types, typeKey });
}
const known = new Set();
function builtinUsage(k, entry) {
  const list = (statsBuiltin[`${k}|${entry.num}`] || []).filter(s =>
    entry.types ? entry.types.includes(s.type) : s.type >= 0 && s.type < 32 && !(claimed[`${k}|${entry.num}`]?.has(s.type)));
  list.forEach(s => known.add(`${s.kind}|${s.type}|${s.num}`));
  return usage(list);
}

// Editor labels (mmf2u): English keys in the old format ("11%s is overlapping %s") or with
// %o/%0; compared with Nebula's templates after the same normalization, case-insensitively
const frNorm = {};
for (const en of Object.keys(frDict("mmf2u") || {}))
  frNorm[normText(en).toLowerCase().replace(/\s+/g, " ")] ??= en;
// French label of a built-in template: { text, official } or null
function frBuiltin(t, kind) {
  const key = t.toLowerCase().replace(/\s+/g, " ").trim();
  const en = frNorm[key] || frNorm[key.replace(/<op> <p(\d)>/, "<p$1>")];
  if (en) return { text: normText(frGet("mmf2u", en)), official: true };
  if (unofficial[t]) return { text: unofficial[t], official: false };
  return null;
}

// Translation table embedded into MfaDump: key "C|type|num" ("*" = any object type not covered
// by a dedicated entry), or "ext|<mfx file>|C|num"
const frTable = { builtin: {}, ext: {} };

let frOfficial = 0, frUnofficial = 0, rowsBuiltin = 0;
const frMissing = new Set(); // conditions/actions without French label (to add to fr-unofficial.json)
const order = ["Special (system)", "Sound", "Storyboard (frame)", "Timer", "Create / pick objects",
  "Keyboard and mouse", "Players", "Objects (common to all objects)"];
const sectionNames = Object.keys(sections).sort((a, b) =>
  (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99) || a.localeCompare(b));
let b = `# Built-in objects: conditions, actions, expressions

> Generated by \`src/bible/generate.js\` from Nebula's catalog (**English labels from Nebula**, close to
> but not always identical to the editor's) and the actual usage in ${stats.files} projects. French:
> label of the French editor, or *(unofficial)* translation. See \`README.md\` to read the tables.

`;
for (const name of sectionNames) b += `- [${name}](#${anchor(name)})\n`;
for (const name of sectionNames) {
  b += `\n## ${name}\n`;
  for (const k of ["C", "A", "E"]) {
    const list = sections[name][k];
    if (!list.length) continue;
    b += `\n### ${KIND[k]}\n\n| No. | Label (EN, Nebula) | Label (FR) | Case | Usage | Real example |\n|---|---|---|---|---|---|\n`;
    const sorted = list.sort((x, y) => Math.abs(+x.num) - Math.abs(+y.num) || String(x.num).localeCompare(String(y.num)));
    for (const e of sorted) {
      const u = builtinUsage(k, e);
      // Expressions are function names: identical in every editor language
      const fr = k === "E" ? null : frBuiltin(e.template, k);
      if (fr?.official) frOfficial++; else if (fr) frUnofficial++;
      else if (k !== "E") frMissing.add(e.template);
      rowsBuiltin++;
      const frCell = k === "E" ? "*(same)*" : fr ? md(fr.text) + (fr.official ? "" : " *(unofficial)*") : "";
      b += `| ${e.num} | ${code(e.template)} | ${frCell} | ${md(e.when)} | ${usageCell(u)} | ${code(cut(u.example))} |\n`;
      // MfaDump: [EN template, FR template] pairs per condition/action; it matches the EN template
      // against Nebula's text to fill the FR one (variants with a `when` are separate pairs)
      if (fr)
        for (const num of String(e.num).split(" | ").filter(n => /^-?\d+$/.test(n)))
          (frTable.builtin[`${k}|${e.typeKey}|${num}`] ??= []).push([e.template, fr.text]);
    }
  }
}
// Seen in the corpus but missing from the catalog, or badly rendered
const unknown = stats.builtin.filter(s => !known.has(`${s.kind}|${s.type}|${s.num}`) || s.errors);
b += `\n## Seen in projects but badly or not decoded\n\nThese combinations appear in the corpus with an error rendering (\`[ERROR]\`, \`[??]\`) at least once.
Their meaning is not known for sure: ask for a screenshot of the editor.\n
| Type | Kind | No. | Occurrences (errors / total) | Error example | Correct example |\n|---|---|---|---|---|---|\n`;
for (const s of unknown.filter(s => s.errors).sort((a, b) => b.errors - a.errors))
  b += `| ${s.type} | ${s.kind} | ${s.num} | ${s.errors} / ${s.count} | ${code(cut(s.errorExamples[0]))} | ${code(cut(s.examples[0]))} |\n`;
write(path.join(OUT, "built-in-objects.md"), b);

// ---------------------------------------------------------------- extensions
// Extensions installed with Fusion first, then third-party extensions (extension folders shipped
// with downloaded projects)
const catalogs = {};
for (const [dir, origin] of [[path.join(DATA, "extensions/installed"), "installed with Fusion"],
                             [path.join(DATA, "extensions/third-party"), "third-party extension (shipped with a downloaded project)"]]) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".json"))) {
    const key = path.basename(f, ".json").toLowerCase();
    if (catalogs[key]) continue;
    const j = readJson(path.join(dir, f));
    if (!["conditions", "actions", "expressions"].some(k => (j[k] || []).length)) continue; // nothing usable
    j.origin = origin;
    catalogs[key] = j;
  }
}
const extKeys = [...new Set([...Object.keys(catalogs), ...Object.keys(statsExt).filter(k => k !== "?")])].sort();
const eventNum = (k, c) => k === "C" ? -(81 + c) : 80 + c;
const codeOf = (k, num) => k === "C" ? -num - 81 : num - 80;

for (const f of fs.readdirSync(path.join(OUT, "extensions"))) fs.rmSync(path.join(OUT, "extensions", f));
const index = [];
let extRowsWithText = 0, extRows = 0, extFr = 0;
for (const key of extKeys) {
  const cat = catalogs[key];
  const used = statsExt[key] || [];
  const names = [...new Set(used.flatMap(s => s.extNames))];
  const title = cat ? cat.file.replace(/\.mfx$/i, "") : (used[0]?.extFile || key);
  const total = used.reduce((a, s) => a + s.count, 0);
  let p = `# Extension ${title}\n\n`;
  p += `- File: \`${cat ? cat.file : title + ".mfx"}\` — ${cat ? cat.origin : "**not cataloged (extension missing during extraction): labels unknown**"}\n`;
  if (names.length) p += `- Name(s) shown in projects: ${names.map(n => `“${n}”`).join(", ")}\n`;
  p += `- Usage in the corpus: ${total ? `${total} times` : "none"}\n`;
  p += `- Numbers in events: condition = −(81 + code), action / expression = 80 + code\n`;
  p += `- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. \`GroupItemValue( "Ini", "Game", "sound" )\` (the MfaDump export shows \`Expression ID 83("Ini")"Game", "sound")\`)\n`;
  if (cat) for (const k of ["conditions", "actions", "expressions"])
    if (cat[k + "_status"]) p += `- ${k}: extracted in “${cat[k + "_status"]}” mode${/ressources|resource/.test(cat[k + "_status"]) ? " (numbers possibly guessed, see the Code column)" : ""}\n`;
  const seenCodes = new Set();
  for (const k of ["C", "A", "E"]) {
    const list = cat ? (cat[{ C: "conditions", A: "actions", E: "expressions" }[k]] || []) : [];
    const usedK = used.filter(s => s.kind === k);
    if (!list.length && !usedK.length) continue;
    p += `\n## ${KIND[k]}\n\n| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |\n|---|---|---|---|---|---|---|---|\n`;
    for (const a of list) {
      const num = eventNum(k, a.code);
      seenCodes.add(`${k}|${num}`);
      const u = usage(usedK.filter(s => s.num === num));
      const text = normText(a.text || a.resText);
      if (text) extRowsWithText++;
      extRows++;
      const frRaw = frGet(title, fixAnsi(a.text)) || frGet(title, a.menu?.split(" > ").pop());
      const frText = typeof frRaw === "string" ? normText(frRaw) : "";
      if (frText) {
        extFr++;
        if (k !== "E" && /<object>|<p\d>/.test(frText) || k !== "E" && frRaw === frGet(title, fixAnsi(a.text)))
          frTable.ext[`ext|${key}|${k}|${num}`] = frText;
      }
      const params = (a.paramTypes || []).map((t, i) =>
        `${(k === "E" ? EXP_PARAM : PARAM)[t] || "type " + t}${a.paramTitles?.[i] ? ` “${fixAnsi(a.paramTitles[i])}”` : ""}`).join("; ")
        + (k === "E" && a.flags & 1 ? " → string" : "") + (a.paramsUnreliable ? " (unreliable parameters)" : "");
      p += `| ${a.code}${a.codeGuessed ? " (guessed)" : ""} | ${num} | ${md(a.menu)} | ${code(text)} | ${md(frText)} | ${md(params)} | ${usageCell(u)} | ${code(cut(u.example))} |\n`;
    }
    for (const s of usedK.filter(s => !seenCodes.has(`${k}|${s.num}`)).sort((x, y) => Math.abs(x.num) - Math.abs(y.num)))
      p += `| ${codeOf(k, s.num)} | ${s.num} | ? | ? |  |  | ${usageCell(usage([s]))} | ${code(cut(s.examples[0] || s.errorExamples[0]))} |\n`;
  }
  write(path.join(OUT, "extensions", `${title}.md`), p);
  index.push({ title, file: cat ? cat.file : title + ".mfx", installed: !!cat, origin: cat?.origin, names, total,
               counts: cat ? ["conditions", "actions", "expressions"].map(k => (cat[k] || []).length).join(" / ") : "?" });
}

let ix = `# Extensions\n\n${index.filter(e => e.installed).length} cataloged extensions, ${index.filter(e => !e.installed).length} seen in projects but not cataloged.
Sorted by usage in the corpus. FR column: label of the French editor when Clickteam translated the extension.\n\n| Extension | Names shown | Source | C / A / E | Usage |\n|---|---|---|---|---|\n`;
for (const e of index.sort((a, b) => b.total - a.total || a.title.localeCompare(b.title)))
  ix += `| [${e.title}](${encodeURI(e.title)}.md) | ${md(e.names.join(", "))} | ${e.installed ? (/third-party/.test(e.origin) ? "third-party" : "Fusion") : "**none**"} | ${e.counts} | ${e.total || "—"} |\n`;
write(path.join(OUT, "extensions", "README.md"), ix);

// ---------------------------------------------------------------- README
const top = index.filter(e => e.total).slice(0, 12).map(e => `[${e.title}](extensions/${encodeURI(e.title)}.md) (${e.total})`).join(", ");
const paramTable = Object.entries(PARAM).map(([k, v]) => `| ${k} | ${v} |`).join("\n");
write(path.join(OUT, "README.md"), `# Clickteam Fusion 2.5 bible: conditions, actions, expressions

Reference for an LLM (or a developer) helping on a Clickteam Fusion project from a \`MfaDump\` export
(\`<project>.events.txt\`). Read together with \`../FUSION_CONTEXT.md\` (Fusion's runtime model and the
export format). Generated by \`src/bible/generate.js\`: do not edit by hand.

## Contents

- [built-in-objects.md](built-in-objects.md): objects built into Fusion (Special, Sound, Storyboard, Timer,
  Keyboard/mouse, Players, Active / String / Counter objects…), ${rowsBuiltin} entries.
- [extensions/README.md](extensions/README.md): one page per extension (${index.filter(e => e.installed).length} cataloged: installed with
  Fusion or third-party; ${index.filter(e => !e.installed).length} seen in projects but not cataloged).
  Most used in the corpus: ${top}.

## Languages

- **EN** labels come from Nebula (built-in objects) or from the extensions themselves.
- **FR** labels are those of the **French Fusion editor** when Clickteam provides them
  (${frOfficial} built-in conditions/actions, plus translated extensions), otherwise a translation marked
  *(unofficial)* (${frUnofficial} built-in entries). **Expressions** are function names, identical in every
  editor language (*(same)*).
- Talk to the user in **their language**, with the labels of **their editor**. MfaDump can export in French
  (\`--lang fr\`) with the same FR labels.

## Where the information comes from

| Source | Reliability |
|---|---|
| **Nebula**'s catalog (built-in objects), extracted from its source code | Nebula's English labels, close to Fusion's; some numbers/objects not covered |
| Edit-time functions of the **extensions** (\`.mfx\` installed with Fusion, and third-party extensions shipped with downloaded projects), called like the editor does | official labels, menus and parameters of the extension; numbers “(guessed)” when the extension does not provide the mapping |
| Fusion's **French translations** (\`Languages\\fr-fr\\Modules\`) | official labels of the French editor, when an exact match exists |
| **Actual usage**: ${stats.files} projects (personal projects + Fusion's official examples), ${stats.rows} conditions/actions/expression items | Usage column = occurrences (number of projects); Real example = MfaDump rendering of one occurrence, taken **only from Fusion's official examples** |

## Reading the tables

- **No.**: number of the condition/action/expression in events (\`Num\` field). Conditions have negative
  numbers, actions and expressions positive ones. The object type (\`ObjectType\`) gives the section:
  -1 Special, -2 Sound, -3 Storyboard, -4 Timer, -5 Create/pick, -6 Keyboard/mouse, -7 Players,
  0 expression operators, 2 Active, 3 String, 7 Counter…, 32 and more = extensions (\`ObjectType - 32\` =
  index of the extension in the project).
- **Extensions**: *code* = internal number of the extension; in events, condition = −(81 + code),
  action and expression = 80 + code (checked on real examples). That is why the raw export shows
  \`Event ID 89\` or \`Expression ID 88(…)\` for an extension: look for 89 − 80 = code 9 in its page.
- **Placeholders**: \`<object>\` = object of the condition/action, \`<p0>\`, \`<p1>\`… = parameters in order,
  \`<op>\` = comparison operator (=, <>, <, <=, >, >=).
- **Case**: extra condition of Nebula for this label (e.g. depending on a parameter value).
- A row with **Usage** “—” was never seen in the corpus: it exists but is less proven.

## Parameter types

From the Fusion SDK and Nebula (a few names to be confirmed). **Extension expressions** use different
types: 1 = number, 3 = string; “→ string” marks an expression returning text.

| Code | Type |
|---|---|
${paramTable}

## Known limits

- Built-in labels are Nebula's (English), not always word for word the editor's.
- ${unknown.filter(s => s.errors).length} built-in combinations were seen with an error rendering at least once: they are listed at
  the end of [built-in-objects.md](built-in-objects.md).
- Extensions not cataloged (missing during extraction: ActiveX, Game Center, Google Play Games): only
  their numbers and raw examples are known. A few extensions gave nothing (load failure or empty menu).
- Some extensions open a help window when asked for a parameter title: their extraction may be
  incomplete (fallback on resource menus).
- Extensions whose menu depends on a real object were read from their resource menus: numbers possibly
  “(guessed)”.
`);

// Table for MfaDump (embedded at build time) and cache of the translations used
write(path.join(DATA, "lang/fr.json"), JSON.stringify(frTable, null, 1) + "\n");
fs.mkdirSync(path.join(KIT, "work"), { recursive: true });
write(path.join(KIT, "work/fr-missing.json"), JSON.stringify([...frMissing].sort(), null, 1) + "\n");
if (haveFusion) write(FR_CACHE, JSON.stringify(frUsed, null, 1) + "\n");

console.log(`built-in-objects.md: ${rowsBuiltin} rows, FR ${frOfficial} official + ${frUnofficial} unofficial`);
console.log(`extensions: ${index.length} pages (${index.filter(e => e.installed).length} cataloged), ${extRows} entries, ${extRowsWithText} with display text, ${extFr} with FR`);
console.log(`data/lang/fr.json: ${Object.keys(frTable.builtin).length} built-in + ${Object.keys(frTable.ext).length} extension labels`);
write(path.join(OUT, "_meta.json"), JSON.stringify({ files: stats.files, rows: stats.rows, rowsBuiltin, frOfficial, frUnofficial,
  extensions: index.length, installed: index.filter(e => e.installed).length, extRows, extRowsWithText, extFr,
  unknownBuiltin: unknown.filter(s => s.errors).length }, null, 1) + "\n");
