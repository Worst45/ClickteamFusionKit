// node pe-imports.js <file>...: lists the imported DLLs
const fs = require("fs");
for (const file of process.argv.slice(2)) {
  const b = fs.readFileSync(file), pe = b.readUInt32LE(0x3c), n = b.readUInt16LE(pe + 6), os = b.readUInt16LE(pe + 20), opt = pe + 24;
  const is64 = b.readUInt16LE(opt) === 0x20b, dd = opt + (is64 ? 112 : 96), impRva = b.readUInt32LE(dd + 8);
  const secs = []; for (let i = 0; i < n; i++) { const s = opt + os + i * 40; secs.push({ va: b.readUInt32LE(s + 12), sz: Math.max(b.readUInt32LE(s + 8), b.readUInt32LE(s + 16)), raw: b.readUInt32LE(s + 20) }); }
  const off = r => { const s = secs.find(s => r >= s.va && r < s.va + s.sz); return s ? r - s.va + s.raw : -1; };
  const dlls = []; for (let d = off(impRva); b.readUInt32LE(d + 12); d += 20) { let p = off(b.readUInt32LE(d + 12)), s = ""; while (b[p]) s += String.fromCharCode(b[p++]); dlls.push(s); }
  console.log(file.split(/[\/]/).pop() + ": " + dlls.join(", "));
}
