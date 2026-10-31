# ClickteamFusionKit

## Why this project?

Clickteam Fusion lets you make games without writing code: the logic lives in an event editor, as
lines of "IF conditions → DO actions". That is great for getting started, but it has a downside: a
project is a binary `.mfa` file that no AI assistant can read. When a game freezes, a collision
misbehaves or a level gets complicated, you are left on your own with hundreds of events to check
by hand.

ClickteamFusionKit closes that gap. It **extracts every condition, action and expression** of a
project into plain text. An AI assistant (Claude, or any other LLM) can then read the whole logic,
understand how the events interact (order, object selection, groups, loops, timers), find what
causes a bug, and **recommend changes** as step-by-step instructions to apply in the Fusion editor,
with the editor's own labels, in English or in French. Your project is only read, never modified:
you stay in control of every change.

## What's inside

Tools that let an LLM analyze a **Clickteam Fusion 2.5** project (`.mfa`):

- **MfaDump** exports the events of a `.mfa` file (conditions, actions, expressions, groups and
  comments) as readable text, in English or in French (`--lang en|fr`). It only reads: the `.mfa` file
  is never modified.
- **The bible** is a reference of every known condition, action and expression (built-in objects and
  410 extensions), with the labels of the English and French editors.
- **The `clickteam-fusion` skill** is the LLM's entry point. It explains how to read a project,
  understand the Fusion engine and suggest changes. It answers in the user's language, using the
  labels of their editor.

MfaDump is built on [Nebula](https://github.com/AITYunivers/NebulaFD), Yunivers' Fusion decompiler,
through the fork [Worst45/NebulaFD](https://github.com/Worst45/NebulaFD), branch
`mfa-dump-enhanced`. The fork fixes `.mfa` reading: old formats, multi-frame projects, comments,
groups, zones, global values, decimal numbers… The original repository has no license, so this kit
contains **source code only** and fetches Nebula from GitHub at build time.

## Installation (Windows)

```powershell
git clone --recurse-submodules https://github.com/Worst45/ClickteamFusionKit.git
cd ClickteamFusionKit
powershell -ExecutionPolicy Bypass -File scripts\install-skill.ps1
```

`install-skill.ps1` builds MfaDump if needed, then installs the skill for Claude Code. The skill is a
link to `skill\clickteam-fusion\`, so it always follows the kit.

There is nothing else to install:
- **.NET**: if the .NET 8 SDK is missing, `build.ps1` installs it into `tools\dotnet\` (local to the
  kit, about 300 MB). The resulting `MfaDump.exe` is standalone.
- **Nebula**: a git submodule. Without git (kit downloaded as a zip), `build.ps1` downloads the fork.
- **Node.js**: only needed to regenerate the bible. If it is missing, `regen-bible.ps1` downloads the
  official portable version into `tools\node\`.

## Usage

- **With Claude Code**: talk about your Fusion project and the `clickteam-fusion` skill loads by itself.
- **With another LLM**: give it the `skill\clickteam-fusion\` folder (entry point: `SKILL.md`).
- **By hand**: drop a `.mfa` file on `skill\clickteam-fusion\MfaDump.exe`. You get
  `<project>.events.txt` next to the `.mfa`, in the language of Windows. From a command line:
  `MfaDump --lang fr project.mfa`.

## Layout

| Folder | Content |
|---|---|
| `skill\clickteam-fusion\` | everything needed to **use** the kit: `SKILL.md`, `MfaDump.exe` (built), `FUSION_CONTEXT.md`, `bible\` |
| `src\` | sources: `MfaDump`, `NebulaCatalog` (built-in objects catalog), `ExtCatalog` (extensions catalog, 32-bit), `NebulaTest` (test bench), `bible\generate.js` |
| `external\NebulaFD\` | submodule: the Nebula fork |
| `data\` | extracted catalogs, French labels and **public** usage statistics (no personal project names) |
| `scripts\` | `build.ps1`, `install-skill.ps1`, `regen-bible.ps1`, `update-catalogs.ps1`, `corpus\` |
| `docs\INTERNALS.md` | how it works inside, and maintenance |
| `work\` | **local, not committed**: project exports, full statistics, provenance of the rules |
| `tools\` | **local, not committed**: .NET SDK, portable Node, built maintenance tools |

## Updating

```powershell
scripts\regen-bible.ps1              # regenerates the bible and the French labels from data\
scripts\regen-bible.ps1 -Corpus -Sources 'mine=C:\Games\my-games'   # re-analyzes projects first
scripts\build.ps1                    # rebuilds MfaDump (after a change in src\, Nebula or data\lang)
scripts\build.ps1 -All               # + maintenance tools (catalogs, test bench)
scripts\update-catalogs.ps1          # re-extracts the catalogs (Nebula, Fusion's extensions)
```

Details: `docs\INTERNALS.md`.
