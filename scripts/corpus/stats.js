// Usage statistics over every .events.jsonl of the corpus (work\corpus\).
// node stats.js [corpus folder]
//   -> work\corpus\_stats.json : LOCAL only (projects, examples from every project). These statistics
//      describe a workspace: they are not published (the bible has no usage column).
// Keys: built-in "kind|type|num", extensions "mfx file|kind|num" (C condition, A action, E expression)
const fs = require("fs"), path = require("path");

const KIT = path.resolve(__dirname, "../..");
const CORPUS = path.resolve(process.argv[2] || path.join(KIT, "work/corpus"));
const isPublicSource = project => /^fusion_/.test(project);

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name.endsWith(".events.jsonl")) yield p;
  }
}

const isError = t => /^\[ERROR\]|^\[\?\?|Could not find ObjectType/.test(t);
const builtin = {}, ext = {};
let rows = 0, files = 0;
for (const file of walk(CORPUS)) {
  files++;
  const project = path.relative(CORPUS, file).replace(/\.events\.jsonl$/, "").replace(/\\/g, "/");
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    if (!line.trim()) continue;
    const r = JSON.parse(line);
    rows++;
    const isExt = r.type >= 32;
    const map = isExt ? ext : builtin;
    const key = isExt ? `${r.extFile}|${r.kind}|${r.num}` : `${r.kind}|${r.type}|${r.num}`;
    const s = map[key] ??= { kind: r.kind, type: r.type, num: r.num, extFile: r.extFile ?? null, extNames: new Set(),
                              count: 0, projects: new Set(), errors: 0, examples: [], publicExamples: [],
                              errorExamples: [], publicErrorExamples: [] };
    s.count++;
    s.projects.add(project);
    if (r.ext) s.extNames.add(r.ext);
    const text = (r.text || "").slice(0, 220);
    const pub = isPublicSource(project);
    const add = (list, max) => { if (list.length < max && !list.includes(text)) list.push(text); };
    if (isError(text)) {
      s.errors++;
      add(s.errorExamples, 2);
      if (pub) add(s.publicErrorExamples, 2);
    } else {
      add(s.examples, 3);
      if (pub) add(s.publicExamples, 3);
    }
  }
}

const full = m => Object.values(m).map(s => ({ ...s, extNames: [...s.extNames], projects: s.projects.size,
                                              projectList: [...s.projects].slice(0, 5) }))
                                 .sort((a, b) => b.count - a.count);
const result = { files, rows, builtin: full(builtin), extensions: full(ext) };
fs.writeFileSync(path.join(CORPUS, "_stats.json"), JSON.stringify(result, null, 1));

const sum = (l, f) => l.reduce((a, s) => a + f(s), 0);
console.log(`${files} files, ${rows} rows (C/A/E) -> ${path.join(CORPUS, "_stats.json")}`);
for (const k of ["C", "A", "E"]) {
  const b = result.builtin.filter(s => s.kind == k), e = result.extensions.filter(s => s.kind == k);
  console.log(`  ${k}: built-in ${b.length} distinct / ${sum(b, s => s.count)} uses (${sum(b, s => s.errors)} with errors); extensions ${e.length} distinct / ${sum(e, s => s.count)} uses`);
}
const errs = result.builtin.filter(s => s.errors).sort((a, b) => b.errors - a.errors);
if (errs.length) {
  console.log("--- built-in with errors (faulty occurrences):");
  errs.forEach(s => console.log(`  ${s.kind} ${s.type}/${s.num}  ${s.errors}/${s.count}  ${s.errorExamples[0]}`));
}
