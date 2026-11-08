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
│   ├── extensions\overrides.json hand-checked labels of extensions badly extracted
│   ├── platforms.json        exporters (HTML5, Android) of the extensions and built-in entries
│   ├── fr-cache.json         French labels of Fusion that are used (to regenerate without Fusion)
│   └── lang\                 fr-unofficial.json (hand-written labels), fr.json (generated, embedded in MfaDump)
├── scripts\                  build.ps1, install-skill.ps1, regen-bible.ps1, update-catalogs.ps1, corpus\
├── work\                     LOCAL: exports, full statistics, provenance of the rules
└── tools\                    LOCAL: .NET SDK, portable Node, built maintenance tools
```

License: Nebula's original repository has no license. The kit contains only its own code and fetches
Nebula from GitHub (submodule). Do not publish binaries that include Nebula.

Privacy: anything that comes from the projects of a workspace stays in `work\` (ignored by git),
**usage statistics included**: they describe a workspace, not Fusion, so the bible has no usage column
and nothing is computed from projects in `data\`. The docs say "(verified)" without naming a project;
the provenance goes into `work\provenance.md`.

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

**The fork's `README.md`**: "What this fork brings" stays a list of quick bullet points on the main
features, for a human who only wants to know what the fork adds to the original project. Never replace
it with a block of text. Each change is described in "Detailed changes" below it; touch the bullet
points only for a new main feature.

| Commit | Content |
|---|---|
| `eadb1c4` | MFA object references (EventObject handles, resolved centrally in `FrameEvents.GetMFAObject` / `GetMFAQualifierName` / `GetMFAObjectName`); rendering of groups (`-1/-10`, `-1/-11`) and `Skip` (`-1/0`); `GroupLookupTable` for MFAs; `ParameterComment` (code 37: font, colors, `TextID` → `FrameEvents.Comments`, byte-exact rewrite); zones from expressions (code 72 + 4 expressions, `ACEventBase.GetZone`); flag names (`MFAAltFlags`); `GetCommitHash` in single-file publish |
| `ea4f12b` | Compatibility: MFU2 builds 280-291 (field after the frame password = MFA string), MMF2 241-258 (no language ID after the build, no "Is Unicode" integer for extensions), variable-size installer settings block, menu bar, missing icons, tolerant object conversion, **object numbers specific to each frame** (`Frame.MFAItems`) |
| `00e3b90` | "Jump to frame": parameter 26 is a 32-bit integer in build 296; in an MFA, the frame is found by its `Handle` (`FrameHandles` maps index → handle there, the opposite of an exe) |
| `4818229` | Global values / strings in an expression: the index is `ExpressionCommon.Value` (the old computation always gave 0) |
| `69a5b8f` | Decimal numbers: `ByteReader.ReadDouble` read the fixed-point format of some non-Windows exports whenever `NebulaCore.Windows` was false, so always for an MFA; rendering in the invariant culture |
| `4b55799` | A round decimal is shown with `.0` (`1.0`) to tell it apart from an integer |
| `8ea6657` | `Parameter.Raw`: raw bytes of each parameter (debugging) |
| `d97ca8c` | Menu options: `ACEventBase.GetMenuItem` searches every sub-menu (it stopped after the first one, so `Options > Display > item` was lost when `Options > Sounds` came first); an unknown id renders as `[menu id N]` |
| `cb8d749` | Objects of an included frame: `GetMFAObject` also looks in `Frame.GetIncludedFrames()` (each frame once). An object found nowhere takes its EventObject's name instead of "Unknown Object". MfaDump also takes the names of flags, values and strings from the included frames' objects (`CollectNames`) |
| `5ec049c` | Timer condition -3 = the older "Timer equals" (runtime `CND_TIMER`; the editor's labels list "Timer equals" at -3 and -7). It was `[ERROR] Could not find ObjectType -4, Num -3` (115 lines on 567 projects) |
| `3ce67c8` | MFA frame chunk 0x31 = included frame (`Frame.FrameInclude`): 16 bytes in build 296, `1, 0, <handle of the included frame or -1>, -1`; the handle was checked against the frame handles of a project (written as int before the frame name). MfaDump shows it in `== Frame ==`. The other two fields are not understood |
| `9203ead`, `c0b7ad1` | Contribution of csando (Nebula PR #1) and its review: alterable value/string letters from index 26 (`BA`… instead of `[`); `FrameEvents.IsBehaviour` (behaviour events name objects from their own table) and `LastIdentifier`; Sub-Application actions 88 Show / 89 Hide; special expressions 67-71 = `RuntimeName$`, `ReplaceString$(`, `Sign(`, `Lerp(`, `InvLerp(` (numbers from Fusion's HTML5 runtime `Data\Runtime\Html5\Expressions.js`, names from the editor; there is no 66) |
| `8c454da` | `FrameEvents.ReadMFA`: end of the `Evts` / `STVE` block computed before reading the size (4 bytes too early), and nothing realigned the reader after the block. `STVE` blocks end with 2 zero bytes that are not an event (meaning unknown; `Evts` blocks have none): out of step, the identifier loop ran to the end of the file, then looped forever (`ReadAscii` returns `""`) or read past the end. Now: stop when fewer than 14 bytes (event header) remain, seek to the end of the block, error at the end of the data. `WriteMFA` does not write these 2 bytes back (MfaDump never writes). Public regression reference: Fusion's `Examples\Sub App\scrolling.mfa` (its global events' comments were empty) |
| `24f3b52` | Directions: `ACEventBase.GetDirectionMask` lists the 32-bit mask (bit n = direction n, counter-clockwise wheel, 0 = right, 8 = up, 16 = left, 24 = down) as `16 (left)` / `{0 (right), 16 (left)}` instead of dots; also used by `ParameterShoot`. MfaDump translates the names in French (`Tr.FrenchDirections`) |
| `84056db` | Extension expressions: resolver `ParameterExpression.ExtensionExpressionInfo` (name + parameter count, set by MfaDump from the catalog); `ParameterExpressions.ToString` writes `Name("object", p1, p2)` when the next tokens are parameters (any token but an operator, `,` or `)`; a leading ` - ` counts as a parameter only if the catalog says the expression has some) |

## 3. MfaDump (`src\MfaDump\Program.cs`)

C# program with top-level statements.

1. **Arguments**: `MfaDump [--lang en|fr] <file.mfa> [output.txt]`, or several `.mfa` files (drag and
   drop). With several files, the exe **relaunches itself once per file**, because Nebula keeps static
   state. Language: `--lang`, else `MFADUMP_LANG`, else the Windows display language (`fr` or `en`).
2. **Loading**: `NebulaCore.Init()`, then `MFAFileReader.LoadGame(new ByteReader(bytes))`. The file is
   read into memory and never opened for writing.
3. **Rendering** (`DumpEvents`): Nebula's text (`Condition.ToString()` / `Action.ToString()`). MfaDump
   only formats it: groups (`=== GROUP “name” ===`, indentation), comments (`// text`), hidden `Skip`
   actions, `[DISABLED]`, `#n` on groups and comments. Child events: an event with the `HasChildren`
   flag opens a level of indentation, closed by the next event whose only condition is `-1/-42` (the
   editor's "New condition" line: counted in `#n`, not printed); a group end closes the levels opened
   inside it.
   - Per frame (`DumpFrameInfo`, `DumpPlaced`): size, background, flags, layers; instances of the
     frame editor with position and layer.
   - Per object (`DumpObjectExtras`, `DumpObjectKind`): alterable strings and flags, extension data
     (readable text only, `ReadableRuns`), animations, movements (`MovementType`), String paragraphs,
     counter settings.
   - Behaviours (`DumpBehaviourEvents`): data starting with `KLBEDAEH` holds the same blocks as a
     frame's events after 12 bytes; read with Nebula's `FrameEvents` (`IsBehaviour = true`: object names
     come from the behaviour's own `EventObjects`). The name tables of the frame are saved and restored
     around it. Identical blocks are printed once.
4. **Readable names** (`CollectNames` + `WithNames`): `Flag N «name»`, names of the alterable values and
   strings (also inside expressions, and from the object named in the line: `ByHostName`, for
   behaviour events). A qualifier takes the names of its first member. Object tables are **per frame**
   (`frame.MFAItems`).
5. **Extensions, in both languages**: from the embedded `data\lang\fr.json` (despite its name, it also
   holds English data):
   - `extEn` (EN templates of extension conditions/actions) replaces Nebula's raw
     `Obj : Event ID n, …`. In French, `ext` (FR template) is used first, then `extEn`: the French
     editor shows the English text of an untranslated extension. For actions, a leading `<object>:`
     is dropped (the object is already in the `Obj : ` header); a condition template without
     `<object>` gets `<object>: ` in front.
   - `extExpr` (`ext|<mfx>|num` → [name, parameter count or -1]) is given to Nebula through
     `ParameterExpression.ExtensionExpressionInfo`, which writes `GroupItemValue("Ini", "Game", "x")`.
   - The objects list shows each extension's `.mfx` file (`Ini (Extension kcini)`).
6. **French** (`L` for the interface strings, `Tr` for conditions and actions), from the embedded
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
   - The `.jsonl` (statistics) keeps Nebula's English text: `Event ID n` for extension
     conditions/actions, but extension expressions inside parameters are named (the resolver is
     global). `stats.js` only uses this text as examples.
7. **Writing** in UTF-8 with BOM. An isolated error → `[?? type T, num N : Exception]`, without stopping.

Options (environment variables):
- `MFADUMP_JSONL=1`: also writes `<output>.jsonl`, one line per condition (`C`), action (`A`) and
  expression item (`E`): frame, event number, type, number, extension (name and `.mfx` file), object,
  parameters, text. Used by the corpus.
- `MFADUMP_RAW=<code>`: under each condition / action that has a parameter with this code, shows all
  its parameters with their raw bytes. This is how comments (37), zones (72), globals and decimals were
  decoded.
- `MFADUMP_EVENTFLAGS=1`: shows each event's flags (`HasChildren`, `HasParent`…) and the raw fields of
  conditions that Nebula cannot name.
- `MFADUMP_BEHAVIOUR_HEX=1` (or a byte limit, 2000 by default): dumps each behaviour's data as hex,
  identical blocks once. `MFADUMP_BEHAVIOUR_EVENTS=0`: does not read the behaviours' events.

Test bench `src\NebulaTest`: raw Nebula rendering of a `.mfa` **or a built `.exe`** of the same
project. Build it against another version of Nebula with `-p:NebulaDir=<folder>` to compare
before/after. `-p:DefineConstants=RAW` + `NEBULATEST_RAW=<code>` shows the raw bytes and runs the
`ParameterComment` round-trip test. `NEBULATEST_HANDLES=1` lists the object numbers per frame.

## 4. Catalogs and bible

1. **Corpus** (`scripts\corpus\run-corpus.ps1`) exports, with `MFADUMP_JSONL=1` and `--lang en`, every
   `.mfa` of the sources into `work\corpus\`. Sources are `-Sources 'label=folder'`, plus Fusion's
   examples and tutorials under the labels `fusion_examples` / `fusion_tutorials`. Files are
   deduplicated by SHA1 (`index.csv`), one process per file, `-Jobs N` at a time (default: number of
   logical CPUs, about 3.6x faster than one at a time; each slot runs its own copy of the exe, see
   `config.json` in §5). `analyse.js` sorts the failures by format version (header `MFU2` / `MMF2` and
   build) and by crash site. `stats.js` writes `work\corpus\_stats.json` (local only): it shows whether
   a change decodes more than before.
   - **Before committing a change of MfaDump or Nebula**: `python -I scripts\corpus\compare-builds.py
     <old MfaDump.exe> <new MfaDump.exe> <folder of .mfa> <out folder>` runs both builds on every
     distinct `.mfa`, in parallel (`-j N`), and compares failures, timeouts, lines, IF/DO lines,
     `[??]` / `[ERROR]` lines and size. No file may get worse; changed exports are then reviewed by hand.
     About 4 minutes for 585 projects on 8 logical CPUs (17 one at a time).
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
4. **Exporters** (`src\bible\platforms.js`, run by `update-catalogs.ps1`) → `data\platforms.json`:
   - extensions: present in `Data\Runtime\Html5\<file>.js` / `Data\Runtime\Android\<file>.zip` of the
     Fusion install = available in that exporter. Only extensions installed in that editor are judged;
     Windows is not judged (the editor DLL doubles as the Windows runtime, and mobile-only extensions
     ship a Windows file that may do nothing); iOS / Mac only when their exporter is installed.
   - built-in entries: the HTML5 runtime (`Conditions.js`, `Actions.js`, `Expressions.js`) and the
     Android one (`CCnd.java`, `CAct.java`, `CExp.java` in `RuntimeAndroid.zip`) create them in a
     `switch` on `(num << 16) | (type & 0xFFFF)`; the entries common to all objects are in a second
     `switch (c & 0xFFFF0000)`. The bible's **Not in** column lists the runtimes that lack an entry.
5. **Bible** (`src\bible\generate.js`, through `scripts\regen-bible.ps1`) combines the catalogs,
   `data\platforms.json` and the French labels → `skill\clickteam-fusion\bible\` and `data\lang\fr.json`.
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

- MfaDump is published self-contained, as a single file, with **ReadyToRun and without compression**
  (about 90 MB). Measured against the former compressed build (37 MB): 2.5x faster on small projects,
  where startup and JIT dominate, and 35-39% on large ones; output identical. A compressed bundle is
  decompressed at every launch. Rejected: trimming (breaks `MFADUMP_JSONL` unless JSON reflection is
  re-enabled, and Nebula uses reflection), `InvariantGlobalization` (changes sort orders in the
  export), framework-dependent + ReadyToRun (crashes at load).
- Nebula writes a `config.json` next to the exe at every start (ignored by git). Several processes of
  the **same** exe file race on it (random "type initializer for Parameters" failures): parallel runs
  use one copy of the exe per worker.
- `NebulaCore.Init()` calls `ZLibInit.GlobalInit("zlibwapi.dll")` although only `zlib1.dll` ships.
  Reading the events works anyway. If a project fails on decompression, start there.

## 6. Ideas for later

- Decode the remaining built-in combinations (end of `bible\built-in-objects.md`).
- Align the built-in English labels with the editor's (today they are Nebula's).
- French: render `<value>` placeholders (positions, directions) in French instead of Nebula's English
  ("at (0,0) from Obj").
