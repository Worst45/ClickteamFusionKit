// Analyse du lot : succès/échec par version de format MFA et par endroit du plantage Nebula.
// node analyse.js [dossier du corpus]   (par défaut work\corpus du kit)
const fs = require("fs"), path = require("path");
const CORPUS = path.resolve(process.argv[2] || path.join(__dirname, "../../work/corpus"));
// Dossiers sources écrits par run-corpus.ps1 (libellé -> dossier)
let rootList = JSON.parse(fs.readFileSync(path.join(CORPUS, "roots.json"), "utf8").replace(/^﻿/, ""));
if (!Array.isArray(rootList)) rootList = [rootList];
const roots = Object.fromEntries(rootList.map(r => [r.Label, r.Path]));

const rows = fs.readFileSync(path.join(CORPUS, "index.csv"), "utf8").replace(/^﻿/, "").trim().split(/\r?\n/);
const header = JSON.parse("[" + rows[0] + "]");
const res = [];
for (const line of rows.slice(1)) {
  const v = JSON.parse("[" + line.replace(/\\/g, "\\\\") + "]");
  const r = Object.fromEntries(header.map((k, i) => [k, v[i]]));
  if (r.status === "DUP") continue;
  const id = String(r.id).padStart(3, "0");
  const logFile = path.join(CORPUS, "_logs", `${id}.log`);
  const log = fs.existsSync(logFile) ? fs.readFileSync(logFile, "utf8") : "";
  const err = log.match(/^ERREUR sur .*? : (.*)$/m);
  const site = (log.match(/^\s+at (Nebula\.[^(]+)/m) || [])[1] || "";
  let hdr = "?", build = "?";
  try {
    const b = Buffer.alloc(16), fd = fs.openSync(path.join(roots[r.source], r.path), "r");
    fs.readSync(fd, b, 0, 16, 0); fs.closeSync(fd);
    hdr = b.toString("latin1", 0, 4); build = b.readInt32LE(12);
  } catch (e) {}
  res.push({ id, src: r.source, file: r.path, ok: r.status === "OK", status: r.status, err: err ? err[1].slice(0, 70) : "",
             site: site.replace("Nebula.Core.Data.", "").trim(), hdr, build });
}
const count = f => res.reduce((o, r) => (o[f(r)] = (o[f(r)] || 0) + 1, o), {});
console.log("OK/KO :", count(r => r.ok ? "OK" : r.status));
const hb = {};
res.forEach(r => { const k = `${r.hdr} build ${r.build}`; hb[k] = hb[k] || { ok: 0, ko: 0 }; hb[k][r.ok ? "ok" : "ko"]++; });
console.log("Par en-tête + build :", hb);
console.log("Sites de plantage :", count(r => r.ok ? "-" : r.site));
fs.writeFileSync(path.join(CORPUS, "_analyse.json"), JSON.stringify(res, null, 1));
