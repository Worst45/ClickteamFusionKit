// Which runtimes (export targets) support each extension and each built-in condition / action /
// expression, read from a Fusion install. Writes data\platforms.json (used by generate.js).
// node src/bible/platforms.js <Fusion folder> <folder with the Android runtime's Java sources>
//   (scripts\update-catalogs.ps1 extracts Actions\CAct.java, Conditions\CCnd.java and
//   Expressions\CExp.java from Data\Runtime\Android\RuntimeAndroid.zip)
//
// - Extensions: present in the runtime folder of an exporter = available there (Windows:
//   Data\Runtime\Unicode\<file>.mfx or Data\Runtime\<file>.mfx, HTML5: Data\Runtime\Html5\<file>.js, Android:
//   Data\Runtime\Android\<file>.zip, iOS: Data\Runtime\iPhone\<file>.ext). An exporter is counted
//   only when its runtime is installed (iOS needs more than a few .ext files).
// - Built-in conditions / actions / expressions: the HTML5 and Android runtimes create them in a
//   switch on (number << 16) | (object type & 0xFFFF); the actions common to every object are in a
//   second switch on (c & 0xFFFF0000), i.e. on the number only. Windows supports all of them.
const fs = require("fs"), path = require("path");
const [fusion, androidSrc] = process.argv.slice(2);
if (!fusion) { console.error("usage: platforms.js <Fusion folder> [<Android Java sources>]"); process.exit(1); }
const RT = path.join(fusion, "Data/Runtime");
const KIT = path.resolve(__dirname, "../..");

// ---------------------------------------------------------------- built-in
// Keys "type|num" (type = signed object type), or "*|num" for the entries common to all objects
function readTable(file) {
  if (!file || !fs.existsSync(file)) return null;
  const src = fs.readFileSync(file, "utf8");
  // Regions of the "common to all objects" switches: from `switch (c & 0xFFFF0000)` to its default
  const common = [];
  for (const m of src.matchAll(/switch\s*\(\s*c\s*&\s*0xFFFF0000\s*\)/g)) {
    const end = src.indexOf("default:", m.index);
    common.push([m.index, end < 0 ? src.length : end]);
  }
  const inCommon = i => common.some(([a, b]) => i > a && i < b);
  const keys = new Set();
  for (const m of src.matchAll(/case\s+([^:]+?)\s*:/g)) {
    const expr = m[1].trim();
    if (!/^[\s()0-9xXa-fA-F+\-<|]+$/.test(expr)) continue; // constants by name: not a table entry
    const isCommon = inCommon(m.index);
    if (!isCommon && !expr.includes("<<")) continue;     // plain numbers outside the tables
    let v;
    try { v = Function(`"use strict"; return (${expr});`)(); } catch { continue; }
    if (!Number.isInteger(v)) continue;
    const num = v >> 16;
    const type = (v & 0xFFFF) << 16 >> 16;
    keys.add(isCommon || !expr.includes("|") ? `*|${num}` : `${type}|${num}`);
  }
  return [...keys].sort();
}

const html5 = path.join(RT, "Html5");
const builtin = {};
const sources = {
  HTML5: { C: path.join(html5, "Conditions.js"), A: path.join(html5, "Actions.js"), E: path.join(html5, "Expressions.js") },
  Android: androidSrc ? {
    C: path.join(androidSrc, "Conditions/CCnd.java"), A: path.join(androidSrc, "Actions/CAct.java"),
    E: path.join(androidSrc, "Expressions/CExp.java") } : {},
};
for (const [runtime, files] of Object.entries(sources)) {
  const t = {};
  for (const k of ["C", "A", "E"]) {
    const keys = readTable(files[k]);
    if (keys) t[k] = keys;
  }
  if (Object.keys(t).length === 3) builtin[runtime] = t;
}

// ---------------------------------------------------------------- extensions
// Names compared case-insensitively, "-" and "_" alike (clickteam-vector.mfx / clickteam_vector.js)
const lower = f => f.toLowerCase().replace(/-/g, "_");
function listExt(dir, ext) {
  const d = path.join(RT, dir);
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d).filter(f => lower(f).endsWith(ext)).map(f => lower(f.slice(0, -ext.length)));
}
// Windows is not listed: an extension's editor DLL is also its Windows runtime when Data\Runtime has
// no file for it, and mobile-only extensions have a Windows file that may do nothing. For HTML5 and
// Android, no file in the exporter's runtime means the extension does not exist there.
const perRuntime = {
  HTML5: listExt("Html5", ".js"),
  Android: listExt("Android", ".zip"),
  iOS: listExt("iPhone", ".ext"),
};
// Extensions installed in the editor of this Fusion: only they can be judged (the runtime folders
// also hold the runtime's own files; an extension not installed here is "not checked")
const editorDir = path.join(fusion, "Extensions");
const known = new Set(["", "Unicode"].flatMap(d => fs.existsSync(path.join(editorDir, d))
  ? fs.readdirSync(path.join(editorDir, d)).filter(f => /\.(mfx|mvx)$/i.test(f)).map(f => lower(f.replace(/\.(mfx|mvx)$/i, ""))) : []));
// An exporter counts as installed when its runtime holds a real set of extensions
const installed = Object.fromEntries(Object.entries(perRuntime).map(([r, l]) => [r, l.filter(f => known.has(f)).length >= 20]));
const extensions = {};
for (const f of [...known].sort())
  extensions[f] = Object.entries(perRuntime).filter(([r, l]) => installed[r] && l.includes(f)).map(([r]) => r);

const out = {
  _comment: "Generated by src/bible/platforms.js from a Fusion install (scripts/update-catalogs.ps1). " +
    "runtimes: exporters installed when it was generated; extensions: runtimes that hold the extension; " +
    "builtin: entries found in the HTML5 / Android runtimes' tables (keys 'type|num', '*|num' = common to all objects). " +
    "Windows runs every built-in entry.",
  runtimes: installed,
  extensions: Object.fromEntries(Object.entries(extensions).sort()),
  builtin,
};
const file = path.join(KIT, "data/platforms.json");
fs.writeFileSync(file, JSON.stringify(out, null, 1) + "\n");
console.log(`data/platforms.json: runtimes ${Object.entries(installed).filter(([, v]) => v).map(([k]) => k).join(", ")}; ` +
  `${Object.keys(extensions).length} extensions; built-in tables: ` +
  Object.entries(builtin).map(([r, t]) => `${r} C${t.C.length}/A${t.A.length}/E${t.E.length}`).join(", "));
