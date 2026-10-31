// Génère la bible de référence des conditions / actions / expressions Clickteam Fusion.
// node src/bible/generate.js   (ou scripts\regen-bible.ps1)
// Entrées (data\) : catalog-nebula.json (objets intégrés), extensions\installed\ et
//   extensions\third-party\ (catalogues ExtCatalog), usage.json (statistiques publiques du corpus),
//   traductions fr-fr de Fusion (dossier d'installation, sinon data\fr-cache.json).
// Sortie : skill\clickteam-fusion\bible\
const fs = require("fs"), path = require("path");

const KIT = path.resolve(__dirname, "../..");
const DATA = path.join(KIT, "data");
const OUT = path.join(KIT, "skill/clickteam-fusion/bible");
fs.mkdirSync(OUT, { recursive: true });
const FUSION = process.env.FUSION_DIR || "C:/Program Files (x86)/Clickteam Fusion Developer 2.5";
const nebula = JSON.parse(fs.readFileSync(path.join(DATA, "catalog-nebula.json"), "utf8"));
const stats = JSON.parse(fs.readFileSync(path.join(DATA, "usage.json"), "utf8"));
const EXT_CATALOG = path.join(DATA, "extensions/installed");

// ---------------------------------------------------------------- utilitaires
const md = s => String(s ?? "").replace(/\r?\n/g, " ⏎ ").replace(/\|/g, "\\|").trim();
const code = s => s ? "`" + String(s).replace(/`/g, "'").replace(/\r?\n/g, " ⏎ ").replace(/\|/g, "¦") + "`" : "";
const cut = (s, n = 140) => s && s.length > n ? s.slice(0, n - 1) + "…" : s;
const KIND = { C: "Conditions", A: "Actions", E: "Expressions" };
const KIND_OF = { condition: "C", action: "A", expression: "E" };

// Traductions officielles anglais -> français (Languages\fr-fr\Modules\*.txt, JSON avec BOM).
// Sans Fusion installé, on relit data\fr-cache.json, qui ne contient que les traductions
// effectivement utilisées lors de la dernière génération avec Fusion.
const FR_DIR = path.join(FUSION, "Languages/fr-fr/Modules");
const FR_CACHE = path.join(DATA, "fr-cache.json");
const haveFusion = fs.existsSync(FR_DIR);
const frSaved = !haveFusion && fs.existsSync(FR_CACHE) ? JSON.parse(fs.readFileSync(FR_CACHE, "utf8")) : {};
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
        // JSON non strict (virgules finales) : on les retire avant de parser
        const j = JSON.parse(fs.readFileSync(path.join(FR_DIR, file), "utf8").replace(/^﻿/, "").replace(/,(\s*[}\]])/g, "$1"));
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
// Recherche d'une traduction, mémorisée pour data\fr-cache.json
function frGet(module, en) {
  const dict = frDict(module);
  if (!dict || !en || !(en in dict)) return undefined;
  (frUsed[module.toLowerCase()] ??= {})[en] = dict[en];
  return dict[en];
}

// Types de paramètres (codes du SDK Fusion ; libellés d'après le SDK et Nebula)
const PARAM = { 1: "objet", 2: "temps", 3: "bord", 4: "direction", 5: "entier", 6: "son", 7: "musique",
  9: "création d'objet", 10: "animation", 11: "(rien)", 12: "joueur", 13: "périodicité (every)", 14: "touche",
  15: "vitesse", 16: "position", 17: "direction joystick", 18: "tir", 19: "zone", 21: "position (création)",
  22: "expression numérique", 23: "comparaison numérique", 24: "couleur", 25: "buffer", 26: "scène (frame)",
  27: "boucle de son", 28: "boucle de musique", 29: "nouvelle direction", 31: "texte/numéro", 32: "clic",
  33: "programme externe", 35: "son (condition)", 36: "musique (condition)", 37: "commentaire", 38: "titre de groupe",
  39: "groupe", 40: "nom de fichier", 41: "chaîne", 42: "comparaison de temps", 43: "coller", 44: "touche (code)",
  45: "expression chaîne", 46: "comparaison de chaînes", 47: "effet d'encre", 48: "option de menu", 49: "valeur globale",
  50: "valeur modifiable", 51: "flag", 52: "valeur globale (expr.)", 53: "valeur modifiable (expr.)", 54: "flag (expr.)",
  55: "paramètre d'extension", 56: "8 directions", 57: "mouvement", 58: "chaîne globale", 59: "chaîne globale (expr.)",
  60: "paramètres de programme", 61: "chaîne modifiable", 62: "chaîne modifiable (expr.)", 63: "nom de fichier",
  64: "effet", 68: "variables multiples", 69: "événement enfant", 72: "zone (expressions)" };
// Paramètres des expressions d'extension : 1 = nombre, 3 = chaîne (observé)
const EXP_PARAM = { 1: "nombre", 2: "nombre", 3: "chaîne" };

// Texte affiché d'une extension. Ancien format "XYtexte %s" (X=1 : le 1er %s est l'objet,
// Y = nombre de paramètres) -> placeholders <objet>, <p0>, <p1>...
// Extensions non Unicode : chaîne ANSI lue comme UTF-16 ("㄰杉潮…") -> on reprend les octets
function fixAnsi(s) {
  if (!s || !/[　-鿿가-퟿]/.test(s)) return s;
  const bytes = [];
  for (const ch of s) { const c = ch.charCodeAt(0); bytes.push(c & 0xff, c >> 8); }
  const end = bytes.indexOf(0);
  const t = Buffer.from(end >= 0 ? bytes.slice(0, end) : bytes).toString("latin1");
  return /^[\x20-\x7e\xa0-\xff\t\r\n]*$/.test(t) ? t : s;
}

function normText(raw) {
  raw = fixAnsi(raw);
  if (!raw) return "";
  let t = raw, objFirst = false;
  const m = t.match(/^([01])(\d)([\s\S]*)$/);
  if (m && /%s/.test(t)) { objFirst = m[1] === "1"; t = m[3]; }
  else if (m && m[2] !== undefined && /^[01]\d\D/.test(t)) t = m[3];
  let i = 0, first = true;
  t = t.replace(/%s/g, () => { if (first && objFirst) { first = false; return "<objet>"; } first = false; return `<p${i++}>`; });
  return t.replace(/%o/g, "<objet>").replace(/%(\d)/g, "<p$1>").trim();
}

// ---------------------------------------------------------------- statistiques
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

// ---------------------------------------------------------------- objets intégrés
const TYPE_NAME = { "-7": "Joueurs (Player)", "-6": "Clavier et souris", "-5": "Créer / sélectionner des objets",
  "-4": "Timer", "-3": "Scène (Storyboard)", "-2": "Son", "-1": "Spécial (système)", "0": "Opérateurs (expressions)" };
const OBJ_NAME = { 2: "Active (objet actif)", 3: "String (texte)", 4: "Question", 5: "Score", 6: "Lives (vies)",
  7: "Counter (compteur)", 8: "Formatted Text", 9: "Sub-Application" };

const claimed = {}; // "kind|num" -> types spécifiques (2, 7...) couverts par une entrée dédiée
const sections = {};
for (const e of nebula) {
  const k = KIND_OF[e.kind];
  if (e.objectType === "default") continue;
  let section, types = null;
  const pos = (e.when || "").match(/(?<!!\()ObjectType == (\d+)/);
  if (/^-\d$/.test(e.objectType) || e.objectType === "0") {
    section = TYPE_NAME[e.objectType];
    types = [+e.objectType];
  } else if (pos) {
    section = "Objet " + (OBJ_NAME[pos[1]] || `type ${pos[1]}`);
    types = [+pos[1]];
    (claimed[`${k}|${e.num}`] ??= new Set()).add(+pos[1]);
  } else section = "Objets (commun à tous les objets)";
  let template = e.template === "Parameters[0].ToString()" ? "[GROUP] <p0>" : e.template;
  const when = (e.when || "").split(" && ").filter(w => w && !/ObjectType/.test(w) && w !== "Num = default").join(" et ");
  (sections[section] ??= { C: [], A: [], E: [] })[k].push({ num: e.num, template, when, types, source: e.source });
}
const known = new Set();
function builtinUsage(k, entry) {
  const list = (statsBuiltin[`${k}|${entry.num}`] || []).filter(s =>
    entry.types ? entry.types.includes(s.type) : s.type >= 0 && s.type < 32 && !(claimed[`${k}|${entry.num}`]?.has(s.type)));
  list.forEach(s => known.add(`${s.kind}|${s.type}|${s.num}`));
  return usage(list);
}

// Libellés de l'éditeur (mmf2u) : clés anglaises à l'ancien format ("11%s is overlapping %s") ou
// avec %o/%0 ; comparées à Nebula après normalisation commune et sans casse
const frNorm = {};
for (const en of Object.keys(frDict("mmf2u") || {}))
  frNorm[normText(en).toLowerCase().replace(/\s+/g, " ")] ??= en;
function frBuiltin(t) {
  const key = t.toLowerCase().replace(/\s+/g, " ").trim();
  const en = frNorm[key] || frNorm[key.replace(/<op> <p(\d)>/, "<p$1>")];
  return en ? normText(frGet("mmf2u", en)) : "";
}

let frHits = 0, rowsBuiltin = 0;
const order = ["Spécial (système)", "Son", "Scène (Storyboard)", "Timer", "Créer / sélectionner des objets",
  "Clavier et souris", "Joueurs (Player)", "Objets (commun à tous les objets)"];
const sectionNames = Object.keys(sections).sort((a, b) =>
  (order.indexOf(a) + 1 || 99) - (order.indexOf(b) + 1 || 99) || a.localeCompare(b));
let b = `# Objets intégrés : conditions, actions, expressions

> Généré par \`generate.js\` à partir du catalogue de Nebula (libellés **anglais de Nebula**, proches mais pas
> identiques à ceux de l'éditeur Fusion) et de l'usage réel dans ${stats.files} projets. Voir \`README.md\`
> pour la lecture des tableaux.

`;
for (const name of sectionNames) b += `- [${name}](#${name.toLowerCase().replace(/[^a-z0-9àâçéèêëîïôûùüÿñæœ -]/g, "").replace(/ /g, "-")})\n`;
for (const name of sectionNames) {
  b += `\n## ${name}\n`;
  for (const k of ["C", "A", "E"]) {
    const list = sections[name][k];
    if (!list.length) continue;
    b += `\n### ${KIND[k]}\n\n| N° | Libellé (Nebula) | Libellé FR (éditeur) | Cas | Usage | Exemple réel |\n|---|---|---|---|---|---|\n`;
    const sorted = list.sort((x, y) => Math.abs(+x.num) - Math.abs(+y.num) || String(x.num).localeCompare(String(y.num)));
    for (const e of sorted) {
      const u = builtinUsage(k, e);
      const f = frBuiltin(e.template);
      if (f) frHits++;
      rowsBuiltin++;
      b += `| ${e.num} | ${code(e.template)} | ${md(f)} | ${md(e.when)} | ${usageCell(u)} | ${code(cut(u.example))} |\n`;
    }
  }
}
// Éléments rencontrés dans le corpus mais absents du catalogue (ou mal rendus)
const unknown = stats.builtin.filter(s => !known.has(`${s.kind}|${s.type}|${s.num}`) || s.errors);
b += `\n## Rencontrés dans les projets mais mal ou pas décodés\n\nCes combinaisons apparaissent dans le corpus avec un rendu en erreur (\`[ERROR]\`, \`[??]\`) au moins une fois.
Leur signification n'est pas connue avec certitude : demander une capture de l'éditeur.\n
| Type | Kind | N° | Occurrences (en erreur / total) | Exemple en erreur | Exemple correct |\n|---|---|---|---|---|---|\n`;
for (const s of unknown.filter(s => s.errors).sort((a, b) => b.errors - a.errors))
  b += `| ${s.type} | ${s.kind} | ${s.num} | ${s.errors} / ${s.count} | ${code(cut(s.errorExamples[0]))} | ${code(cut(s.examples[0]))} |\n`;
fs.writeFileSync(path.join(OUT, "objets-integres.md"), b);

// ---------------------------------------------------------------- extensions
fs.mkdirSync(path.join(OUT, "extensions"), { recursive: true });
// Extensions installées dans Fusion d'abord, puis les extensions tierces (dossiers d'extensions
// fournis avec des projets téléchargés)
const catalogs = {};
for (const [dir, origin] of [[EXT_CATALOG, "installée avec Fusion"], [path.join(DATA, "extensions/third-party"), "extension tierce (fournie avec un projet téléchargé)"]]) {
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".json"))) {
    const key = path.basename(f, ".json").toLowerCase();
    if (catalogs[key]) continue;
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    if (!["conditions", "actions", "expressions"].some(k => (j[k] || []).length)) continue; // rien d'exploitable
    j.origin = origin;
    catalogs[key] = j;
  }
}
const extKeys = [...new Set([...Object.keys(catalogs), ...Object.keys(statsExt).filter(k => k !== "?")])].sort();
const eventNum = (k, c) => k === "C" ? -(81 + c) : 80 + c;
const codeOf = (k, num) => k === "C" ? -num - 81 : num - 80;

const index = [];
let extRowsWithText = 0, extRows = 0;
for (const key of extKeys) {
  const cat = catalogs[key];
  const used = statsExt[key] || [];
  const names = [...new Set(used.flatMap(s => s.extNames))];
  const title = cat ? cat.file.replace(/\.mfx$/i, "") : (used[0]?.extFile || key);
  const total = used.reduce((a, s) => a + s.count, 0);
  let p = `# Extension ${title}\n\n`;
  p += `- Fichier : \`${cat ? cat.file : title + ".mfx"}\` — ${cat ? cat.origin : "**non cataloguée (extension absente lors de l'extraction) : libellés inconnus**"}\n`;
  if (names.length) p += `- Nom(s) affiché(s) dans les projets : ${names.map(n => `« ${n} »`).join(", ")}\n`;
  p += `- Usage dans le corpus : ${total ? `${total} fois` : "aucun"}\n`;
  p += `- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code\n`;
  p += `- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. \`GroupItemValue( "Ini", "Game", "sound" )\` (l'export MfaDump affiche \`Expression ID 83("Ini")"Game", "sound")\`)\n`;
  if (cat) for (const k of ["conditions", "actions", "expressions"])
    if (cat[k + "_status"]) p += `- ${k} : extraction en mode « ${cat[k + "_status"]} »${/ressources/.test(cat[k + "_status"]) ? " (numéros possiblement supposés, voir colonne Code)" : ""}\n`;
  const seenCodes = new Set();
  for (const k of ["C", "A", "E"]) {
    const list = cat ? (cat[{ C: "conditions", A: "actions", E: "expressions" }[k]] || []) : [];
    const usedK = used.filter(s => s.kind === k);
    if (!list.length && !usedK.length) continue;
    p += `\n## ${KIND[k]}\n\n| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |\n|---|---|---|---|---|---|---|---|\n`;
    for (const a of list) {
      const num = eventNum(k, a.code);
      seenCodes.add(`${k}|${num}`);
      const u = usage(usedK.filter(s => s.num === num));
      const text = normText(a.text || a.resText);
      if (text) extRowsWithText++;
      extRows++;
      const frRaw = frGet(title, fixAnsi(a.text)) || frGet(title, a.menu?.split(" > ").pop());
      const frText = typeof frRaw === "string" ? normText(frRaw) : "";
      const params = (a.paramTypes || []).map((t, i) =>
        `${(k === "E" ? EXP_PARAM : PARAM)[t] || "type " + t}${a.paramTitles?.[i] ? ` « ${fixAnsi(a.paramTitles[i])} »` : ""}`).join(" ; ")
        + (k === "E" && a.flags & 1 ? " → chaîne" : "") + (a.paramsUnreliable ? " (paramètres non fiables)" : "");
      p += `| ${a.code}${a.codeGuessed ? " (supposé)" : ""} | ${num} | ${md(a.menu)} | ${code(text)} | ${md(frText)} | ${md(params)} | ${usageCell(u)} | ${code(cut(u.example))} |\n`;
    }
    for (const s of usedK.filter(s => !seenCodes.has(`${k}|${s.num}`)).sort((x, y) => Math.abs(x.num) - Math.abs(y.num)))
      p += `| ${codeOf(k, s.num)} | ${s.num} | ? | ? |  |  | ${usageCell(usage([s]))} | ${code(cut(s.examples[0] || s.errorExamples[0]))} |\n`;
  }
  fs.writeFileSync(path.join(OUT, "extensions", `${title}.md`), p);
  index.push({ title, file: cat ? cat.file : title + ".mfx", installed: !!cat, origin: cat?.origin, names, total,
               counts: cat ? ["conditions", "actions", "expressions"].map(k => (cat[k] || []).length).join(" / ") : "?" });
}

let ix = `# Extensions\n\n${index.filter(e => e.installed).length} extensions installées cataloguées, ${index.filter(e => !e.installed).length} rencontrées dans les projets mais non installées.
Triées par usage dans le corpus.\n\n| Extension | Noms affichés | Source | C / A / E | Usage |\n|---|---|---|---|---|\n`;
for (const e of index.sort((a, b) => b.total - a.total || a.title.localeCompare(b.title)))
  ix += `| [${e.title}](${encodeURI(e.title)}.md) | ${md(e.names.join(", "))} | ${e.installed ? (/tierce/.test(e.origin) ? "tierce" : "Fusion") : "**non**"} | ${e.counts} | ${e.total || "—"} |\n`;
fs.writeFileSync(path.join(OUT, "extensions", "README.md"), ix);

console.log(`objets-integres.md : ${rowsBuiltin} lignes, ${frHits} avec libellé FR`);
console.log(`extensions : ${index.length} pages (${index.filter(e => e.installed).length} installées), ${extRows} entrées cataloguées dont ${extRowsWithText} avec texte affiché`);
// ---------------------------------------------------------------- README
const top = index.filter(e => e.total).slice(0, 12).map(e => `[${e.title}](extensions/${encodeURI(e.title)}.md) (${e.total})`).join(", ");
const paramTable = Object.entries(PARAM).map(([k, v]) => `| ${k} | ${v} |`).join("\n");
fs.writeFileSync(path.join(OUT, "README.md"), `# Bible Clickteam Fusion 2.5 : conditions, actions, expressions

Référence destinée à un LLM (ou à un développeur) qui aide sur un projet Clickteam Fusion à partir d'un
export \`MfaDump\` (\`<projet>.events.txt\`). À lire avec \`../CONTEXTE_CLICKTEAM.md\` (modèle d'exécution de
Fusion et format de l'export). Générée automatiquement par \`generate.js\` : ne pas éditer à la main.

## Contenu

- [objets-integres.md](objets-integres.md) : objets intégrés à Fusion (Spécial, Son, Scène, Timer, Clavier/souris,
  Joueurs, objets Active / String / Counter…), ${rowsBuiltin} entrées.
- [extensions/README.md](extensions/README.md) : une page par extension (${index.filter(e => e.installed).length} cataloguées : installées dans Fusion
  ou extensions tierces ; ${index.filter(e => !e.installed).length} rencontrées dans les projets mais non cataloguées).
  Les plus utilisées dans le corpus : ${top}.

## D'où viennent les informations

| Source | Fiabilité |
|---|---|
| Catalogue de **Nebula** (objets intégrés), extrait de son code source | libellés anglais propres à Nebula, proches de ceux de Fusion ; certains numéros/objets non couverts |
| Fonctions d'édition des **extensions** (\`.mfx\` installés avec Fusion, et extensions tierces fournies avec des projets téléchargés), appelées comme le fait l'éditeur | libellés, menus et paramètres officiels de l'extension ; numéros « (supposé) » quand l'extension ne fournit pas la correspondance |
| **Traductions françaises** de Fusion (\`Languages\\fr-fr\\Modules\`) | libellés officiels de l'éditeur français, quand une correspondance exacte existe (${frHits} entrées intégrées, plus les extensions traduites) |
| **Usage réel** : ${stats.files} projets (projets personnels + exemples officiels de Fusion), ${stats.rows} conditions/actions/éléments d'expression | colonne Usage = occurrences (nombre de projets) ; Exemple réel = rendu MfaDump d'une occurrence, tiré **uniquement des exemples officiels de Fusion** |

## Lire les tableaux

- **N°** : numéro de la condition/action/expression dans les événements (champ \`Num\`). Les conditions ont des
  numéros négatifs, les actions et expressions des numéros positifs. Le type d'objet (champ \`ObjectType\`) donne la
  section : -1 Spécial, -2 Son, -3 Scène, -4 Timer, -5 Créer/sélectionner, -6 Clavier/souris, -7 Joueurs,
  0 opérateurs d'expression, 2 Active, 3 String, 7 Counter…, 32 et plus = extensions (\`ObjectType - 32\` = index
  de l'extension dans le projet).
- **Extensions** : *code* = numéro interne de l'extension ; dans les événements, condition = −(81 + code),
  action et expression = 80 + code (vérifié sur des exemples réels). C'est pour cela que l'export brut affiche
  \`Event ID 89\` ou \`Expression ID 88(…)\` pour une extension : chercher 89 − 80 = code 9 dans la page de l'extension.
- **Écrire une expression dans l'éditeur** : une expression liée à un objet prend **le nom de l'objet entre
  guillemets en 1er paramètre**, avant les paramètres listés dans les tableaux (la colonne Paramètres ne le
  mentionne pas) : \`X( "hero" )\`, \`GroupItemValue( "Ini", Str$(indPack), Str$(indLevel) )\`. L'export MfaDump
  le montre entre parenthèses juste après le numéro : \`Expression ID 83("Ini")"Game", "sound")\`.
- **Placeholders** : \`<objet>\` = objet de la condition/action, \`<p0>\`, \`<p1>\`… = paramètres dans l'ordre,
  \`<op>\` = opérateur de comparaison (=, <>, <, <=, >, >=).
- **Cas** : condition supplémentaire de Nebula pour ce libellé (par exemple selon la valeur d'un paramètre).
- Une ligne avec **Usage** « — » n'a jamais été vue dans le corpus : elle existe mais est moins éprouvée.

## Types de paramètres

D'après le SDK Fusion et Nebula (quelques libellés à confirmer). Pour les **expressions d'extension**, les types
sont différents : 1 = nombre, 3 = chaîne ; « → chaîne » indique une expression qui renvoie du texte.

| Code | Type |
|---|---|
${paramTable}

## Limites connues

- Les libellés des objets intégrés sont ceux de Nebula (anglais), pas toujours mot pour mot ceux de l'éditeur.
- ${unknown.filter(s => s.errors).length} combinaisons intégrées ont été rencontrées avec un rendu en erreur au moins une fois :
  elles sont listées à la fin de [objets-integres.md](objets-integres.md).
- Extensions non cataloguées (absentes lors de l'extraction : ActiveX, Game Center, Google Play Games) :
  seuls leurs numéros et des exemples bruts sont connus. Quelques extensions n'ont rien pu livrer (échec de chargement ou menu vide).
- Certaines extensions affichent une fenêtre d'aide quand on leur demande l'intitulé d'un paramètre : leur
  extraction a pu être incomplète (repli sur les menus en ressources).
- Les extensions dont le menu dépend d'un objet réel ont été lues via les menus en ressources : numéros
  éventuellement « (supposé) ».
`);

// Cache des traductions utilisées, pour régénérer sans Fusion installé
if (haveFusion) fs.writeFileSync(FR_CACHE, JSON.stringify(frUsed, null, 1));

fs.writeFileSync(path.join(OUT, "_meta.json"), JSON.stringify({ files: stats.files, rows: stats.rows, rowsBuiltin, frHits,
  extensions: index.length, installed: index.filter(e => e.installed).length, extRows, extRowsWithText,
  unknownBuiltin: unknown.filter(s => s.errors).length }, null, 1));
