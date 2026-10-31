# Extension Explorer

- File: `Explorer.mfx` — installed with Fusion
- Name(s) shown in projects: “Explorer”
- Usage in the corpus: 20 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Folder changed | `<object>: Folder Changed` | <object>: Dossier changé |  | 1 (1 proj.) | `Explorer: Event ID -81, 0 Parameters` |
| 1 | -82 | ? | ? |  |  | 2 (1 proj.) | `Explorer: Event ID -82, 0 Parameters` |
| 2 | -83 | ? | ? |  |  | 1 (1 proj.) | `Explorer: Event ID -83, 0 Parameters` |
| 3 | -84 | ? | ? |  |  | 1 (1 proj.) | `Explorer: Event ID -84, 1 Parameters { Expression ID 91("Explorer")LoopIndex("GetSel")) }` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select Folder | `Select Folder: <p0>` | Choisir dossier: <p0> | string expression “Enter folder name” | — |  |
| 1 | 81 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 81, 0 Parameters` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 82, 0 Parameters` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 83, 0 Parameters` |
| 4 | 84 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 84, 0 Parameters` |
| 5 | 85 | ? | ? |  |  | 1 (1 proj.) | `Explorer : Event ID 85, 0 Parameters` |
| 14 | 94 | ? | ? |  |  | 2 (1 proj.) | `Explorer : Event ID 94, 1 Parameters { Expression ID 80("Edit") }` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Folder | `ExplGetCurFolder$(` | Dossier courant | → string | 1 (1 proj.) | `Expression ID 80("Explorer")` |
| 1 | 81 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 81("Explorer")` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 82("Explorer")` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 83("Explorer")` |
| 10 | 90 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 90("Explorer")` |
| 11 | 91 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 91("Explorer")` |
