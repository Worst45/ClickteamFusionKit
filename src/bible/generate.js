// Generates the reference "bible" of Clickteam Fusion conditions / actions / expressions.
// node src/bible/generate.js   (or scripts\regen-bible.ps1)
// Inputs (data\): catalog-nebula.json (built-in objects), extensions\installed\ and
//   extensions\third-party\ (ExtCatalog catalogs), extensions\overrides.json (hand-checked labels),
//   platforms.json (runtimes of the HTML5 / Android exporters, src/bible/platforms.js),
//   lang\fr-unofficial.json (hand-written French labels), Fusion's fr-fr translations (install
//   folder, otherwise data\fr-cache.json).
// No usage statistics: they come from the projects of a workspace and stay local (work\corpus\).
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
const PLATFORMS_FILE = path.join(DATA, "platforms.json");
const platforms = fs.existsSync(PLATFORMS_FILE) ? readJson(PLATFORMS_FILE) : null;
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

// ---------------------------------------------------------------- platforms
// Exporters whose runtime was read (HTML5, Android); Windows runs every built-in entry
const RUNTIMES = platforms ? Object.keys(platforms.builtin || {}) : [];
const builtinSets = Object.fromEntries(RUNTIMES.map(r =>
  [r, Object.fromEntries(["C", "A", "E"].map(k => [k, new Set(platforms.builtin[r][k] || [])]))]));
// Runtimes whose table lacks a built-in entry. typeKey: object type, or "*" (Nebula gives no type:
// found if the runtime has the number for any object type)
function builtinMissing(k, typeKey, nums) {
  if (typeKey === "0") return []; // expression operators: not in these tables
  return RUNTIMES.filter(r => {
    const set = builtinSets[r][k];
    return !nums.some(num => typeKey === "*"
      ? set.has(`*|${num}`) || [...set].some(x => x.endsWith(`|${num}`) && +x.split("|")[0] >= 2)
      : set.has(`${typeKey}|${num}`) || (+typeKey >= 2 && set.has(`*|${num}`)));
  });
}
// Extension names compared like platforms.js does
const extPlatformKey = f => f.toLowerCase().replace(/-/g, "_");
// "HTML5, Android" / "not in the HTML5 and Android exporters" / null when not checked
function extExporters(key) {
  if (!platforms || !RUNTIMES.length) return null;
  const list = platforms.extensions?.[extPlatformKey(key)];
  if (!list) return null;
  const checked = Object.entries(platforms.runtimes || {}).filter(([, v]) => v).map(([r]) => r);
  return { yes: list.filter(r => checked.includes(r)), no: checked.filter(r => !list.includes(r)) };
}

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

// Table embedded into MfaDump (used in both languages despite its name):
// - builtin: key "C|type|num" ("*" = any object type not covered by a dedicated entry) -> [EN, FR] pairs
// - ext:     key "ext|<mfx file>|C|num" -> FR template of an extension condition/action
// - extEn:   same key -> EN template (the French editor shows it too when the extension is not translated)
// - extExpr: key "ext|<mfx file>|num" -> [expression name as typed in the editor ("GroupItemValue("),
//            number of parameters or -1 when unreliable]
const frTable = { builtin: {}, ext: {}, extEn: {}, extExpr: {} };

let frOfficial = 0, frUnofficial = 0, rowsBuiltin = 0, builtinNotIn = 0;
const frMissing = new Set(); // conditions/actions without French label (to add to fr-unofficial.json)
const order = ["Special (system)", "Sound", "Storyboard (frame)", "Timer", "Create / pick objects",
  "Keyboard and mouse", "Players", "Objects (common to all objects)"];
const sectionNames = Object.keys(sections).sort((a, b) =>
  (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99) || a.localeCompare(b));
let b = `# Built-in objects: conditions, actions, expressions

> Generated by \`src/bible/generate.js\` from Nebula's catalog (**English labels from Nebula**, close to
> but not always identical to the editor's). French: label of the French editor, or *(unofficial)*
> translation. **Not in**: exporters whose runtime does not have the entry (${RUNTIMES.join(", ") || "not checked"}):
> do not use it in a game built for them. See \`README.md\` to read the tables.

`;
for (const name of sectionNames) b += `- [${name}](#${anchor(name)})\n`;
for (const name of sectionNames) {
  b += `\n## ${name}\n`;
  for (const k of ["C", "A", "E"]) {
    const list = sections[name][k];
    if (!list.length) continue;
    b += `\n### ${KIND[k]}\n\n| No. | Label (EN, Nebula) | Label (FR) | Case | Not in |\n|---|---|---|---|---|\n`;
    const sorted = list.sort((x, y) => Math.abs(+x.num) - Math.abs(+y.num) || String(x.num).localeCompare(String(y.num)));
    for (const e of sorted) {
      const missing = builtinMissing(k, e.typeKey, String(e.num).split(" | ").filter(n => /^-?\d+$/.test(n)));
      if (missing.length) builtinNotIn++;
      // Expressions are function names: identical in every editor language
      const fr = k === "E" ? null : frBuiltin(e.template, k);
      if (fr?.official) frOfficial++; else if (fr) frUnofficial++;
      else if (k !== "E") frMissing.add(e.template);
      rowsBuiltin++;
      const frCell = k === "E" ? "*(same)*" : fr ? md(fr.text) + (fr.official ? "" : " *(unofficial)*") : "";
      b += `| ${e.num} | ${code(e.template)} | ${frCell} | ${md(e.when)} | ${missing.join(", ")} |\n`;
      // MfaDump: [EN template, FR template] pairs per condition/action; it matches the EN template
      // against Nebula's text to fill the FR one (variants with a `when` are separate pairs)
      if (fr)
        for (const num of String(e.num).split(" | ").filter(n => /^-?\d+$/.test(n)))
          (frTable.builtin[`${k}|${e.typeKey}|${num}`] ??= []).push([e.template, fr.text]);
    }
  }
}
b += `\n## Not decoded\n\nA line \`[ERROR] Could not find ObjectType …\` or \`[?? type …]\` in an export is a combination Nebula
does not know: ask for a screenshot of the event in the editor rather than guessing.\n`;
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
const extKeys = Object.keys(catalogs).sort();
// Hand-checked labels replacing unusable catalog texts (data\extensions\overrides.json)
const OVERRIDES_FILE = path.join(DATA, "extensions/overrides.json");
const overrides = fs.existsSync(OVERRIDES_FILE) ? readJson(OVERRIDES_FILE) : {};
// Display texts that are not labels: extensions refusing to run outside their host
const unusableText = t => !t || /not compatible with this version/i.test(t);
const eventNum = (k, c) => k === "C" ? -(81 + c) : 80 + c;
const codeOf = (k, num) => k === "C" ? -num - 81 : num - 80;

for (const f of fs.readdirSync(path.join(OUT, "extensions"))) fs.rmSync(path.join(OUT, "extensions", f));
const index = [];
let extRowsWithText = 0, extRows = 0, extFr = 0;
for (const key of extKeys) {
  const cat = catalogs[key];
  const title = cat.file.replace(/\.(mfx|mvx)$/i, "");
  const exp = extExporters(key);
  let p = `# Extension ${title}\n\n`;
  p += `- File: \`${cat.file}\` — ${cat.origin}\n`;
  p += `- Exporters: ${!exp ? "not checked (extension not installed where the runtimes were read)"
    : (exp.yes.length ? `available in ${exp.yes.join(", ")}` : "") + (exp.yes.length && exp.no.length ? "; " : "")
      + (exp.no.length ? `**not in ${exp.no.join(" / ")}**` : "")
      + " (Windows: not checked; an extension in no other exporter is usually Windows only)"}\n`;
  p += `- Numbers in events: condition = −(81 + code), action / expression = 80 + code\n`;
  p += `- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. \`GroupItemValue( "Ini", "Game", "sound" )\` (the MfaDump export writes it this way; an extension missing from the catalog shows \`Expression ID 83("Ini")\` instead)\n`;
  for (const k of ["conditions", "actions", "expressions"])
    if (cat[k + "_status"]) p += `- ${k}: extracted in “${cat[k + "_status"]}” mode${/ressources|resource/.test(cat[k + "_status"]) ? " (numbers possibly guessed, see the Code column)" : ""}\n`;
  const seenCodes = new Set();
  for (const k of ["C", "A", "E"]) {
    const list = cat[{ C: "conditions", A: "actions", E: "expressions" }[k]] || [];
    const ovK = Object.keys(overrides[key] || {}).filter(o => o.startsWith(k + "|"));
    if (!list.length && !ovK.length) continue;
    p += `\n## ${KIND[k]}\n\n| Code | Event no. | Menu | Display text (EN) | FR | Parameters |\n|---|---|---|---|---|---|\n`;
    for (const a of list) {
      const num = eventNum(k, a.code);
      seenCodes.add(`${k}|${num}`);
      const ov = overrides[key]?.[`${k}|${num}`];
      const text = ov?.en ?? normText(a.text || a.resText);
      if (text) extRowsWithText++;
      extRows++;
      const frRaw = ov?.fr ?? (frGet(title, fixAnsi(a.text)) || frGet(title, a.menu?.split(" > ").pop()));
      const frText = typeof frRaw === "string" ? normText(frRaw) : "";
      if (frText) {
        extFr++;
        if (k !== "E" && (ov?.fr || /<object>|<p\d>/.test(frText) || frRaw === frGet(title, fixAnsi(a.text))))
          frTable.ext[`ext|${key}|${k}|${num}`] = frText;
      }
      if (k === "E") {
        const name = fixAnsi(a.text || a.resText)?.trim();
        if (name && !unusableText(name))
          frTable.extExpr[`ext|${key}|${num}`] = [name.endsWith("(") ? name : name + "(", a.paramsUnreliable ? -1 : (a.paramTypes || []).length];
      } else if (!unusableText(text))
        frTable.extEn[`ext|${key}|${k}|${num}`] = text;
      const params = (a.paramTypes || []).map((t, i) =>
        `${(k === "E" ? EXP_PARAM : PARAM)[t] || "type " + t}${a.paramTitles?.[i] ? ` “${fixAnsi(a.paramTitles[i])}”` : ""}`).join("; ")
        + (k === "E" && a.flags & 1 ? " → string" : "") + (a.paramsUnreliable ? " (unreliable parameters)" : "");
      p += `| ${a.code}${a.codeGuessed ? " (guessed)" : ""} | ${num} | ${md(a.menu)} | ${code(text)} | ${md(frText)} | ${md(params)} |\n`;
    }
    // Hand-checked entries missing from the catalog
    for (const [ok, ov] of Object.entries(overrides[key] || {})) {
      const [ovKind, ovNum] = ok.split("|");
      if (ovKind !== k || seenCodes.has(ok)) continue;
      const num = +ovNum;
      seenCodes.add(ok);
      if (ov.en) frTable.extEn[`ext|${key}|${k}|${num}`] = ov.en;
      if (ov.fr) frTable.ext[`ext|${key}|${k}|${num}`] = ov.fr;
      p += `| ${codeOf(k, num)} | ${num} | ${md(ov.menu)} | ${code(ov.en)} | ${md(ov.fr)} | (checked by hand) |\n`;
    }
  }
  write(path.join(OUT, "extensions", `${title}.md`), p);
  index.push({ title, origin: cat.origin, exp,
               counts: ["conditions", "actions", "expressions"].map(k => (cat[k] || []).length).join(" / ") });
}

const yesNo = (exp, r) => !exp ? "?" : exp.yes.includes(r) ? "yes" : exp.no.includes(r) ? "**no**" : "?";
let ix = `# Extensions\n\n${index.length} cataloged extensions. FR column of each page: label of the French editor when
Clickteam translated the extension. **${RUNTIMES.join(" / ") || "Exporters"}**: whether the extension exists in that exporter's
runtime (“?” = not checked: extension not installed where the runtimes were read). An extension in no other
exporter usually works only on Windows: do not suggest it for a game built for another target.\n\n| Extension | Source | ${RUNTIMES.join(" | ")} | C / A / E |\n|---|---|${RUNTIMES.map(() => "---|").join("")}---|\n`;
for (const e of index.sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" })))
  ix += `| [${e.title}](${encodeURI(e.title)}.md) | ${/third-party/.test(e.origin) ? "third-party" : "Fusion"} | ${RUNTIMES.map(r => yesNo(e.exp, r)).join(" | ")} | ${e.counts} |\n`;
write(path.join(OUT, "extensions", "README.md"), ix);

// ---------------------------------------------------------------- README
const paramTable = Object.entries(PARAM).map(([k, v]) => `| ${k} | ${v} |`).join("\n");
write(path.join(OUT, "README.md"), `# Clickteam Fusion 2.5 bible: conditions, actions, expressions

Reference for an LLM (or a developer) helping on a Clickteam Fusion project from a \`MfaDump\` export
(\`<project>.events.txt\`). Read together with \`../FUSION_CONTEXT.md\` (Fusion's runtime model and the
export format). Generated by \`src/bible/generate.js\`: do not edit by hand.

## Contents

- [built-in-objects.md](built-in-objects.md): objects built into Fusion (Special, Sound, Storyboard, Timer,
  Keyboard/mouse, Players, Active / String / Counter objects…), ${rowsBuiltin} entries.
- [extensions/README.md](extensions/README.md): one page per extension (${index.length} cataloged: installed with
  Fusion or third-party), with the exporters that have it.

## Exporters (Windows, HTML5, Android…)

A game is built for one or more targets. Before suggesting a condition, action, expression or extension,
**check that it exists for the user's targets** (ask them if unknown):

- built-in entries: column **Not in** of [built-in-objects.md](built-in-objects.md) (${builtinNotIn} entries are missing from
  at least one runtime among ${RUNTIMES.join(", ") || "none read"});
- extensions: columns ${RUNTIMES.join(" / ") || "of the exporters"} of [extensions/README.md](extensions/README.md), and the
  **Exporters** line of each page.

Read from the runtimes of a Fusion install (\`data/platforms.json\`, \`src/bible/platforms.js\`): an entry
or extension missing from an exporter's runtime is probably not supported there. Windows runs every
built-in entry; iOS and Mac were not checked (exporters not installed).

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
| **Runtimes** of the HTML5 and Android exporters (\`Data\\Runtime\`) | tables of the built-in entries they implement, and the extensions they hold |

## Reading the tables

- **No.**: number of the condition/action/expression in events (\`Num\` field). Conditions have negative
  numbers, actions and expressions positive ones. The object type (\`ObjectType\`) gives the section:
  -1 Special, -2 Sound, -3 Storyboard, -4 Timer, -5 Create/pick, -6 Keyboard/mouse, -7 Players,
  0 expression operators, 2 Active, 3 String, 7 Counter…, 32 and more = extensions (\`ObjectType - 32\` =
  index of the extension in the project).
- **Extensions**: *code* = internal number of the extension; in events, condition = −(81 + code),
  action and expression = 80 + code (checked on real examples). MfaDump uses these tables to name
  them; for an extension missing from the catalog, the export shows \`Event ID 89\` or
  \`Expression ID 88(…)\`: look for 89 − 80 = code 9 in its page.
- **Overrides**: rows marked “(checked by hand)” come from \`data/extensions/overrides.json\`, for
  extensions whose catalog extraction gave no usable text.
- **Placeholders**: \`<object>\` = object of the condition/action, \`<p0>\`, \`<p1>\`… = parameters in order,
  \`<op>\` = comparison operator (=, <>, <, <=, >, >=).
- **Case**: extra condition of Nebula for this label (e.g. depending on a parameter value).
- **Not in**: exporters whose runtime does not implement the entry.

## Parameter types

From the Fusion SDK and Nebula (a few names to be confirmed). **Extension expressions** use different
types: 1 = number, 3 = string; “→ string” marks an expression returning text.

| Code | Type |
|---|---|
${paramTable}

## Known limits

- Built-in labels are Nebula's (English), not always word for word the editor's.
- Extensions not cataloged (missing during extraction: ActiveX, Game Center, Google Play Games…) have no
  page: the export shows their raw numbers. A few extensions gave nothing (load failure or empty menu).
- Exporters are read from the files of their runtimes: an entry handled outside these tables could be
  reported missing by mistake. When in doubt, ask the user to check in the editor for their target.
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
console.log(`extensions: ${index.length} pages, ${extRows} entries, ${extRowsWithText} with display text, ${extFr} with FR; built-in entries missing from an exporter: ${builtinNotIn}`);
console.log(`data/lang/fr.json: ${Object.keys(frTable.builtin).length} built-in + ${Object.keys(frTable.ext).length} extension labels (FR), ${Object.keys(frTable.extEn).length} (EN), ${Object.keys(frTable.extExpr).length} extension expression names`);
write(path.join(OUT, "_meta.json"), JSON.stringify({ rowsBuiltin, frOfficial, frUnofficial, builtinNotIn,
  extensions: index.length, extRows, extRowsWithText, extFr, runtimes: RUNTIMES }, null, 1) + "\n");
