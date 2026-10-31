// node pe-exports.js <file.dll|.mfx>...: lists the machine (x86/x64) and the exported functions
const fs = require("fs");
for (const file of process.argv.slice(2)) {
  const b = fs.readFileSync(file);
  const pe = b.readUInt32LE(0x3c);
  const machine = b.readUInt16LE(pe + 4);
  const nSections = b.readUInt16LE(pe + 6);
  const optSize = b.readUInt16LE(pe + 20);
  const opt = pe + 24;
  const is64 = b.readUInt16LE(opt) === 0x20b;
  const dataDir = opt + (is64 ? 112 : 96);
  const expRva = b.readUInt32LE(dataDir);
  const sections = [];
  for (let i = 0; i < nSections; i++) {
    const s = opt + optSize + i * 40;
    sections.push({ va: b.readUInt32LE(s + 12), size: b.readUInt32LE(s + 8), raw: b.readUInt32LE(s + 20) });
  }
  const off = rva => { const s = sections.find(s => rva >= s.va && rva < s.va + Math.max(s.size, 1)); return s ? rva - s.va + s.raw : -1; };
  const names = [];
  if (expRva) {
    const e = off(expRva);
    const n = b.readUInt32LE(e + 24), namesRva = b.readUInt32LE(e + 32);
    for (let i = 0; i < n; i++) {
      let p = off(b.readUInt32LE(off(namesRva) + i * 4)), s = "";
      while (b[p]) s += String.fromCharCode(b[p++]);
      names.push(s);
    }
  }
  console.log(`== ${file.split(/[\\/]/).pop()}  ${machine === 0x14c ? "x86" : machine === 0x8664 ? "x64" : machine.toString(16)}  ${names.length} exports`);
  console.log("   " + names.join(" "));
}
