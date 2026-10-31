# ClickteamFusionKit: internals and maintenance

This document is for an LLM or a developer who needs to **rebuild, fix or extend** the kit. To **use**
the tools, see `skill/clickteam-fusion/SKILL.md`. For the Fusion engine and the export format, see
`skill/clickteam-fusion/FUSION_CONTEXT.md`.

## 1. Overview

```
ClickteamFusionKit\
├── skill\clickteam-fusion\   to use: SKILL.md, MfaDump.exe (built), FUSION_CONTEXT.md, bible\
├── src\
│   ├── MfaDump\              exports the events of a .mfa (C#, .NET 8)
│   ├── NebulaCatalog\        catalog of the built-in objects, extracted from Nebula's code (Roslyn)
│   ├── ExtCatalog\           catalog of the .mfx extensions (32-bit)
│   ├── NebulaTest\           test bench: raw Nebula rendering of a .mfa or a .exe
│   └── bible\generate.js     bible generator
├── external\NebulaFD\        submodule: fork Worst45/NebulaFD, branch mfa-dump-enhanced
├── data\                     inputs of the bible (committed, public)
│   ├── catalog-nebula.json   built-in objects
│   ├── extensions\installed\ catalogs of the extensions installed with Fusion
│   ├── extensions\third-party\ catalogs of third-party extensions
│   ├── usage.json            public usage statistics (counters + Fusion's official examples)
│   ├── fr-cache.json         French labels of Fusion that are used (to regenerate without Fusion)
│   └── lang\                 fr-unofficial.json (hand-written labels), fr.json (generated, embedded in MfaDump)
├── scripts\                  build.ps1, install-skill.ps1, regen-bible.ps1, update-catalogs.ps1, corpus\
├── work\                     LOCAL: exports, full statistics, provenance of the rules
└── tools\                    LOCAL: .NET SDK, portable Node, built maintenance tools
```

License: Nebula's original repository has no license. The kit contains only its own code and fetches
Nebula from GitHub (submodule). Do not publish binaries that include Nebula.

Privacy: anything that contains personal project names stays in `work\` (ignored by git).
`data\usage.json` and the bible contain only counters and examples taken from Fusion's official
examples. The docs say "(verified)" without naming a project; the provenance goes into
`work\provenance.md`.

Language: code, comments, docs and the bible are in English. French appears only as data: Fusion's
French labels, `data\lang\`, MfaDump's French output, and the "FR" column of the bible.

## 2. The Nebula fork

[Nebula](https://github.com/AITYunivers/NebulaFD) (C#, `net6.0`) decompiles Fusion games. Its
`Nebula.Core` library also reads `.mfa` files. The fork starts from upstream commit `a24d4d1`
(2026-09-20). The original author refuses contributions made with an LLM (PR #65 was declined):
**do not offer these fixes upstream again**. To bring in upstream changes:
`git -C external\NebulaFD fetch https://github.com/AITYunivers/NebulaFD.git 2024-nebula`, merge into
`mfa-dump-enhanced`, retest with `NebulaTest`, push to the fork, then commit the new submodule pointer
in the kit.

| Commit | Content |
|---|---|
| `eadb1c4` | MFA object references (EventObject handles, resolved centrally in `FrameEvents.GetMFAObject` / `GetMFAQualifierName` / `GetMFAObjectName`); rendering of groups (`-1/-10`, `-1/-11`) and `Skip` (`-1/0`); `GroupLookupTable` for MFAs; `ParameterComment` (code 37: font, colors, `TextID` → `FrameEvents.Comments`, byte-exact rewrite); zones from expressions (code 72 + 4 expressions, `ACEventBase.GetZone`); flag names (`MFAAltFlags`); `GetCommitHash` in single-file publish |
| `ea4f12b` | Compatibility: MFU2 builds 280-291 (field after the frame password = MFA string), MMF2 241-258 (no language ID after the build, no "Is Unicode" integer for extensions), variable-size installer settings block, menu bar, missing icons, tolerant object conversion, **object numbers specific to each frame** (`Frame.MFAItems`) |
| `00e3b90` | "Jump to frame": parameter 26 is a 32-bit integer in build 296; in an MFA, the frame is found by its `Handle` (`FrameHandles` maps index → handle there, the opposite of an exe) |
| `4818229` | Global values / strings in an expression: the index is `ExpressionCommon.Value` (the old computation always gave 0) |
| `69a5b8f` | Decimal numbers: `ByteReader.ReadDouble` read the fixed-point format of some non-Windows exports whenever `NebulaCore.Windows` was false, so always for an MFA; rendering in the invariant culture |
| `4b55799` | A round decimal is shown with `.0` (`1.0`) to tell it apart from an integer |
| `8ea6657` | `Parameter.Raw`: raw bytes of each parameter (debugging) |

## 3. MfaDump (`src\MfaDump\Program.cs`)

C# program with top-level statements.

1. **Arguments**: `MfaDump [--lang en|fr] <file.mfa> [output.txt]`, or several `.mfa` files (drag and
   drop). With several files, the exe **relaunches itself once per file**, because Nebula keeps static
   state. Language: `--lang`, else `MFADUMP_LANG`, else the Windows display language (`fr` or `en`).
2. **Loading**: `NebulaCore.Init()`, then `MFAFileReader.LoadGame(new ByteReader(bytes))`. The file is
   read into memory and never opened for writing.
3. **Rendering** (`DumpEvents`): Nebula's text (`Condition.ToString()` / `Action.ToString()`). MfaDump
   only formats it: groups (`=== GROUP “name” ===`, indentation), comments (`// text`), hidden `Skip`
   actions, `[DISABLED]`.
4. **Readable names** (`CollectNames` + `WithNames`): `Flag N «name»`, names of the alterable values. A
   qualifier takes the names of its first member. Object tables are **per frame** (`frame.MFAItems`).
5. **French** (`L` for the interface strings, `Tr` for conditions and actions), from the embedded
   `data\lang\fr.json`:
   - Built-in objects: `[EN template, FR template]` pairs per `kind|type|num` (or `kind|*|num` for the
     actions and conditions common to all objects). The EN template (from Nebula's catalog) is matched
     against Nebula's English line. Each placeholder captures its text, which then fills the FR
     template. `<object>` is matched literally (object names contain spaces) and `<op>` against the
     comparison operators. French editor labels put the operator inside the compared parameter
     (`<p1>` = `< 2`), so the operator is added when the FR template has no `<op>`.
   - Otherwise (extensions, or no EN template matches), the placeholders are rendered from the
     parameters (`Placeholder`): object, value names, zones, keys, mouse buttons, joystick, etc.
   - A line that cannot be rendered safely stays in English. On 60 test projects, about 95% of the
     lines are translated; the rest are mostly comparisons that read the same in both
     languages, and generic "Event ID" lines of extensions without a catalog.
   - The `.jsonl` (statistics) always keeps the English text.
6. **Writing** in UTF-8 with BOM. An isolated error → `[?? type T, num N : Exception]`, without stopping.

Options (environment variables):
- `MFADUMP_JSONL=1`: also writes `<output>.jsonl`, one line per condition (`C`), action (`A`) and
  expression item (`E`): frame, event number, type, number, extension (name and `.mfx` file), object,
  parameters, text. Used by the corpus.
- `MFADUMP_RAW=<code>`: under each condition / action that has a parameter with this code, shows all
  its parameters with their raw bytes. This is how comments (37), zones (72), globals and decimals were
  decoded.

Test bench `src\NebulaTest`: raw Nebula rendering of a `.mfa` **or a built `.exe`** of the same
project. Build it against another version of Nebula with `-p:NebulaDir=<folder>` to compare
before/after. `-p:DefineConstants=RAW` + `NEBULATEST_RAW=<code>` shows the raw bytes and runs the
`ParameterComment` round-trip test. `NEBULATEST_HANDLES=1` lists the object numbers per frame.

## 4. Catalogs and bible

1. **Corpus** (`scripts\corpus\run-corpus.ps1`) exports, with `MFADUMP_JSONL=1` and `--lang en`, every
   `.mfa` of the sources into `work\corpus\`. Sources are `-Sources 'label=folder'`, plus Fusion's
   examples and tutorials under the labels `fusion_examples` / `fusion_tutorials`. Files are
   deduplicated by SHA1 (`index.csv`), one process per file. `analyse.js` sorts the failures by format
   version (header `MFU2` / `MMF2` and build) and by crash site. `stats.js` writes
   `work\corpus\_stats.json` (full, local) and `data\usage.json` (public: only the examples of the
   `fusion_*` sources).
2. **Built-in objects** (`NebulaCatalog`): Roslyn analyzes `Condition.GetString`, `Action.ToString` and
   `ParameterExpression.ToString`. For each `return`, the chain of enclosing `switch`/`if` gives the
   object type, the number and the special cases → `data\catalog-nebula.json`. Code interpolations
   become placeholders (`<object>`, `<op>`, `<pN>`, `<alterable value pN>`, `<zone pN>`, `<key>`… and
   `<value>` for anything else): see the header of `src\NebulaCatalog\Program.cs`.
3. **Extensions** (`ExtCatalog`, 32-bit because `.mfx` files are 32-bit DLLs of the Fusion SDK): loads
   each extension and calls its edit-time functions as the editor does: `Get{Condition,Action,
   Expression}Menu`, `…CodeFromMenu`, `…String`, `…Infos`, `…Title` / `GetExpressionParam`.
   - A fake `mV` structure whose every slot points to `mov eax, 0x20000128 ; ret` passes the
     `mvGetVersion()` compatibility check.
   - One process per extension and per type, 4 attempts: the extension's menu; without text; menus read
     from the resources (convention: actions 25000+, conditions 26000+, expressions 27000+); without
     text. Without `…CodeFromMenu`, the code is guessed from the identifier (`codeGuessed`).
   - Non-Unicode extensions: ANSI texts, re-decoded by the generator (`fixAnsi`).
   - Some extensions open help windows during the extraction (harmless).
   - Mapping to events (verified): condition = −(81 + code), action / expression = 80 + code.
   - **Security**: ExtCatalog runs the code of the `.mfx` files. Use it only on trusted extensions
     (`update-catalogs.ps1 -ThirdParty <folder>`).
4. **Bible** (`src\bible\generate.js`, through `scripts\regen-bible.ps1`) combines the catalogs,
   `data\usage.json` and the French labels → `skill\clickteam-fusion\bible\` and `data\lang\fr.json`.
   French labels come from:
   - Fusion's translations (`Languages\fr-fr\Modules\*.txt`, non-strict JSON English → French), or
     `data\fr-cache.json` when Fusion is not installed (only the labels actually used);
   - otherwise `data\lang\fr-unofficial.json`, hand-written and marked *(unofficial)* in the bible.
     Labels still missing are listed in `work\fr-missing.json`: translate them there.

   **Never edit the bible by hand.** After a regeneration, rebuild MfaDump (`build.ps1`) so that it
   embeds the new `fr.json`.

## 5. Building

`scripts\build.ps1` (see the script header) fetches Nebula (submodule, or zip without git), uses the
system .NET 8+ SDK or installs one into `tools\dotnet\`, and publishes a standalone `MfaDump.exe` into
`skill\clickteam-fusion\`. `-All` also publishes `NebulaCatalog`, `ExtCatalog` and `NebulaTest` into
`tools\bin\`.

- Nebula writes a `config.json` next to the exe. It does no harm (ignored by git).
- `NebulaCore.Init()` calls `ZLibInit.GlobalInit("zlibwapi.dll")` although only `zlib1.dll` ships.
  Reading the events works anyway. If a project fails on decompression, start there.

## 6. Ideas for later

- Decode the remaining built-in combinations (end of `bible\built-in-objects.md`).
- Decode the direction parameter (`Set direction to ...........`).
- Align the built-in English labels with the editor's (today they are Nebula's).
- French: render `<value>` placeholders (positions, directions) in French instead of Nebula's English
  ("at (0,0) from Obj").
