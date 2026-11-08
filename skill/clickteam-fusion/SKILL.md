---
name: clickteam-fusion
description: Help with a Clickteam Fusion 2.5 project (.mfa file) — read its events (conditions, actions, expressions) with MfaDump, understand the logic, debug, and suggest changes to make in the Fusion editor. Use it whenever Clickteam Fusion, Multimedia Fusion, a .mfa file or Fusion's event editor comes up, in any language (e.g. French "éditeur d'événements", "scène", "jeu Fusion").
---

# Clickteam Fusion 2.5: entry point

This file is the **entry point** for helping with a Clickteam Fusion project. It says what to do and
points to the detailed documents. Open those only when they are useful.

The files below are in the same folder as this `SKILL.md`: the `skill/clickteam-fusion/` folder of the
**ClickteamFusionKit** (installed as a Claude Code skill through a link to this folder):

| File | Content | When to open it |
|---|---|---|
| `MfaDump.exe` | exports the events of a `.mfa` file as text, in English or French (built by the kit's `scripts\build.ps1`) | always, to read a project |
| `FUSION_CONTEXT.md` | Fusion's execution model (ticks, fast loops, object selection, groups, timers) and the export format | before analyzing logic or a bug |
| `bible/README.md` | how to read the reference: numbering, placeholders, parameter types | before looking up a condition/action |
| `bible/built-in-objects.md` | every condition / action / expression of the built-in objects, with English and French editor labels, real usage and examples | to know what exists natively |
| `bible/extensions/README.md` + one page per extension | conditions / actions / expressions of 417 extensions | when the project uses an extension |
| `../../docs/INTERNALS.md` | how the kit is built and maintained (MfaDump, Nebula, catalogs, bible) | only to change the tooling |

## 0. Language

Answer in the **user's language**, and name conditions, actions and menus with the labels **of their
Fusion editor**.

- **French-speaking user**: export with `--lang fr` (the default on a French Windows). Conditions and
  actions then appear with the French editor's labels (`SI` / `FAIRE` lines, `Mettre le drapeau 0 sur
  ON`, `Toujours`…). Write your explanations and step-by-step instructions in French, with the "Label
  (FR)" column of the bible (labels marked *(unofficial)* are translations by the kit, not the
  editor's: say so if the user cannot find them).
- **Otherwise**: export with `--lang en` and use the English labels.
- If the language of the user's editor is unclear (they may write in French with an English editor),
  ask once, or give both labels: `Toujours (Always)`.
- Expression names (`X(`, `Str$(`, `LoopIndex(`) are the same in every language.

## 1. Reading a project

A `.mfa` file is binary and undocumented: do not try to read it directly.

```
MfaDump.exe "path\project.mfa"                 -> path\project.events.txt
MfaDump.exe --lang fr "project.mfa" "out.txt"  -> chosen output, in French
MfaDump.exe a.mfa b.mfa ...                    -> one .events.txt per project (or drag and drop on the exe)
MfaDump.exe --assets "path\project.mfa"        -> also path\project.assets\ (images, sounds...)
```

- MfaDump **never modifies** the `.mfa` (it reads it into memory). It runs without installing .NET.
- Language: `--lang en|fr`, else the `MFADUMP_LANG` variable, else the Windows display language.
- If you cannot run programs, ask the user to drop their `.mfa` on `MfaDump.exe` and send you the
  resulting `.events.txt`.
- The export contains: window size and FPS, global values, the global events (`GLOBAL EVENTS` block,
  run after each frame's own events), then per frame: a `== Frame ==` block (size,
  background, flags, layers with parallax / visibility), the objects (named alterable values, strings
  and flags; animations, movements, text/counter settings; for extension objects the name, version and
  readable text of their settings; behaviours with their events), `== Placed objects ==` (where each
  object starts, and on which layer), the object groups (qualifiers) and the events:
  `=== GROUP “…” ===`, the author's comments `// …`, `#n`, `IF` (conditions) and `DO` (actions) lines,
  `[DISABLED]`. `#n` is the **line number shown in the editor**; it also appears on group headers
  and on the first line of each comment, so "line 120" can be found directly. Child events are
  indented under their parent. In French: `GROUPE`, `SI`, `FAIRE`, `[DÉSACTIVÉ]`.
- In French, a line that has no safe translation stays in English (about 5% of the lines: mostly
  comparisons, positions, and extensions without a catalog).
- After each change made by the user in Fusion: ask them to **save**, run MfaDump again and check.
- Statistics option: environment variable `MFADUMP_JSONL=1` → `<project>.events.jsonl`, one line per
  condition (`C`), action (`A`) and expression item (`E`), always in English.
- **Assets** (`--assets`): also extracts the project's images (PNG, named by image number), icons,
  sounds, music and embedded binary files into `<project>.assets\`, with `index.txt`: which object /
  animation / direction uses which images, and the list of sounds. Not needed to understand the logic
  (slower: every image is decompressed); use it when the question is about the graphics or sounds
  (which image an object shows, a sound file to check), or to look at an image yourself. The text
  export is the same with or without it.

## 2. Understanding what you read

Read `FUSION_CONTEXT.md` (sections 1 to 7 for the engine, 8 for the export). The essentials:

- On every tick, Fusion evaluates **all active events from top to bottom**; order matters.
- A **fast loop** (`Start loop` / `On loop`) runs entirely within the tick, like a `for` loop.
- Conditions **select** the instances that the actions apply to.
- Groups that are activated/deactivated often act as a state machine.
- `Every X` follows its own clock: a classic source of pauses of varying length.
- Flags are numbered from 0, as in the editor; the export adds their name: `Flag 3 «landed»`.

## 3. Finding a condition / action / expression

- **Built-in objects** (Special, Sound, Storyboard, Timer, Mouse/keyboard, Players, Active, String,
  Counter…): `bible/built-in-objects.md`, sorted by object then Conditions / Actions / Expressions,
  with the French label next to the English one.
- **Extensions**: the export names their conditions, actions and expressions from the extension
  catalog (`Ini : Set current file to "game.ini"`, `GroupItemValue("Ini", "Game", "sound")`). The
  objects list gives each extension's file (`Ini (Extension kcini)`). An extension missing from the
  catalog still shows raw numbers: `Object : Event ID 89, …` or `Expression ID 88("Object")`. Then open
  `bible/extensions/README.md`, find the extension, and: action / expression = 80 + code (89 → code 9),
  condition = −(81 + code) (−82 → code 1).
- In French, an extension that Clickteam did not translate shows **its English text**, in the export
  as in the editor.
- A `[ERROR]` or `[??]` line: a combination Nebula does not know; ask for a **screenshot of the event**
  rather than guessing.

## 4. Suggesting changes

MfaDump is read-only: the `.mfa` is not modified by a program. Give **step-by-step instructions for the
Fusion editor**:

- which event (`#n`, group), which condition or action to add/remove, on which object;
- name flags and values **by their name** (and number), with the editor's label;
- explain why (event order, selection, timer…), then have the user check with a new export.

### Writing an expression as in the editor

In the editor, an expression tied to an object takes **the object's name in quotes as its first
parameter**, then its parameters. The bible does not repeat this in its Parameters column. The export
already uses this syntax (`GroupItemValue("Ini", Str$(indPack), Str$(indLevel))`, `X("hero")`), except
for an extension missing from the catalog, which must be **translated** before giving it to the user:

| MfaDump export (extension without catalog) | To type in the editor |
|---|---|
| `Expression ID 83("Ini")` followed by `Str$(indPack), Str$(indLevel))` | `GroupItemValue( "Ini", Str$(indPack), Str$(indLevel) )` |

The expression's name comes from the "Display text" column of the extension's page
(`GroupItemValue(`, code 83 − 80 = 3).

### Prefer native features over extensions

**Do not suggest adding an extension when Fusion's built-in objects and events can do the same
thing.** Many extensions only work on some platforms (Windows only, HTML5 only, Android/iOS…): adding
one can **block building** the game for another target, and the user has to install it.

- First look for a native solution in `bible/built-in-objects.md`: alterable values and strings, flags,
  global values, fast loops, groups, qualifiers, timers, built-in movements…
- If the project **already** uses an extension, you can use it (it is installed and accepted).
- If an extension is really needed: say so explicitly, explain why native features are not enough, and
  **ask the user** about their target platforms before adopting it.

### Target platforms (Windows, HTML5, Android…)

A game is built for one or more targets, and many conditions, actions and extensions exist only on some
of them. **Before suggesting one, check that it exists for the user's targets** (ask them once if
unknown):

- built-in entries: column **Not in** of `bible/built-in-objects.md` (e.g. music, menu bar and clipboard
  are missing from HTML5; mouse wheel and full screen from Android);
- extensions: columns HTML5 / Android of `bible/extensions/README.md`, and the **Exporters** line of
  each page. An extension in no other exporter usually works only on Windows.
- If something the user wants does not exist for a target, say so and give an alternative that does.

### Features of the paid "Fusion 2.5+" DLC

**Child events** (events nested under another event) and **including another frame** (frame property
"Include another frame") need the paid Fusion 2.5+ DLC. Do not suggest them to a user who has not
bought it: the editor would not offer them.

- If the export already contains child events (events indented under another one) or an
  `includes frame:` line, the user has the DLC: you can use these features.
- Otherwise, ask whether they have Fusion 2.5+ before suggesting one, and give a solution without it
  (a group, a flag, conditions repeated in each event; the shared events copied in each frame).

### The user's good practices

Conventions to follow in every suggestion (object names, structure). This section grows with the
projects.

- **Prefix "special" objects** by type, to find them easily: `lbl` (text / label), `str` (String),
  `counter` (Counter), etc. E.g. `counterLines`, `strScore`. In a French project, keep the user's
  French prefixes (`compteur`, e.g. `compteurLignes`). This does not apply to backdrops or ordinary
  active objects (`Blue piece`, `Border`…).
- **Keep the general game state in a parameters object** (an invisible Active, e.g. `Params`): speeds,
  intermediate score, level, game states… rather than scattering them. Global values are reserved for
  what must survive a frame change.
- **Actors carry their own state**: the active objects needed by the engine (camera, player…) and by the
  behavior of enemies and other entities **must** have their own values / flags (e.g. `isShooting`,
  `hp`, `state`), not in `Params`.
- **Comment**: suggest comment lines to separate the main blocks of events and to explain a non-obvious
  trick (e.g. `// NES-style draw of the next piece`). Give the exact text and location, in the user's
  language. A comment takes a line number: count it in the shifts, or have it added as the last step.
- **Display-only** objects (HUD: counters, strings, labels) do not store state: they copy the values of
  the parameters object or of the actors.

### Line numbers that move

Adding or removing an event (or a comment, or a group: they also take a number) **shifts every `#n`
number below it**. When a suggestion has several steps:

- Give the numbers **as they will be when the user does the step**, taking into account the
  insertions/deletions of the previous steps, with the notation **`#35 + 2 → #37`** (number in the
  export + shift → actual number in the editor).
- When possible, order the changes **from bottom to top**: the numbers above do not move.
- Also identify each event by its content (group, first condition) in addition to its number.

## 5. Limits to keep in mind

- **Improve the docs without waiting to be asked**: every pitfall found while working (behavior of
  Fusion, of the export, of the editor) goes into `FUSION_CONTEXT.md` §7b; every user preference goes
  into "The user's good practices" above.
  - These files are the **single source**: edit the ones in this folder directly (the installed skill
    is a link to it). Then commit in the kit's repository. Write them in English.
  - A verified rule is written "**(verified)**", **without a project name**: the docs are general. The
    project and location where it was verified go into the kit's `work/provenance.md` (local file, not
    committed).
  - **Never edit the files in `bible/` by hand**: they are **regenerated** by `src/bible/generate.js`
    (`scripts\regen-bible.ps1`), and any manual addition would be lost. If some knowledge must appear
    in the bible, change the texts in `generate.js`, or the French labels in
    `data/lang/fr-unofficial.json`, then regenerate and rebuild MfaDump.
- Points marked **(to verify)** in `FUSION_CONTEXT.md` are hypotheses, not certainties.
- The English labels of the built-in objects are Nebula's, close to but not identical to the editor's.
- A few parameters are still badly decoded (raw or truncated text): when in doubt, ask for a
  screenshot.
- MfaDump is validated on 162 projects (Fusion 2.5 builds 280-296, MMF2 builds 241-258, several frames,
  extensions).
