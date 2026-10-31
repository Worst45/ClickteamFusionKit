# Extension PlatSwing

- File: `PlatSwing.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is chain swingging? | `Chain <p0> is swinging` |  | numeric expression “Chain index” | — |  |
| 1 | -82 | On Swing | `On Swing <p0>` |  | numeric expression “Chain index” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add Anchor | `Add Anchor <p0>` |  | object “Anchor Object” | — |  |
| 1 | 81 | Add Link | `Add Link  <p0>` |  | object “Link Object” | — |  |
| 2 | 82 | Add Platform | `Add Platform  <p0>` |  | object “Platform Object” | — |  |
| 3 | 83 | Anchor > Set Anchor X | `Set Anchor X at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “X Position” | — |  |
| 4 | 84 | Anchor > Set Anchor Y | `Set Anchor Y at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “Y Position” | — |  |
| 5 | 85 | Chain > Set Mass | `Set Mass at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “Mass” | — |  |
| 6 | 86 | Chain > Set Angle | `Set Angle at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “Angle” | — |  |
| 8 | 88 | Chain > Set Link Spacing | `Set Link Spacing at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “Link Spacing” | — |  |
| 9 | 89 | Swing > Start All | `Start All` |  |  | — |  |
| 10 | 90 | Swing > Start Chain | `Start Chain at index <p0>` |  | numeric expression “Chain Index” | — |  |
| 11 | 91 | Swing > Stop All | `Stop All` |  |  | — |  |
| 12 | 92 | Swing > Stop Chain | `Stop Chain at index <p0>` |  | numeric expression “Chain Index” | — |  |
| 13 | 93 | Swing > Update All | `Update All` |  |  | — |  |
| 14 | 94 | Swing > Update Chain | `Update Chain at index <p0>` |  | numeric expression “Chain Index” | — |  |
| 15 | 95 | Chain > Set Acceleration | `Set Acceleration at index <p0> to <p1>` |  | numeric expression “Chain Index”; numeric expression “Acceleration” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of chains | `ChainNum(` |  |  | — |  |
| 1 | 81 | Get number of links per chain | `ChainLinks(` |  |  | — |  |
| 2 | 82 | Anchor > Get Anchor X | `AnchorX(` |  | number | — |  |
| 3 | 83 | Anchor > Get Anchor Y | `AnchorY(` |  | number | — |  |
| 4 | 84 | Chain > Get Platform Mass | `PlatformMass(` |  | number | — |  |
| 5 | 85 | Chain > Get Chain Angle | `ChainAngle(` |  | number | — |  |
| 6 | 86 | Chain > Get Chain Speed | `ChainSpeed(` |  | number | — |  |
| 7 | 87 | Link > Get Link Spacing | `LinkSpacing(` |  | number | — |  |
| 8 | 88 | Platform > Get Platform X | `PlatformX(` |  | number | — |  |
| 9 | 89 | Platform > Get Platform Y | `PlatformY(` |  | number | — |  |
| 10 | 90 | Chain > Get Chain Index | `ChainIndex(` |  | number | — |  |
| 11 | 91 | Chain > Get DeltaX | `DeltaX(` |  | number | — |  |
| 12 | 92 | Chain > Get DeltaY | `DeltaY(` |  | number | — |  |
| 13 | 93 | Chain > Get Chain Acceleration | `ChainAccel(` |  | number | — |  |
| 14 | 94 | Link > Get Link Index | `LinkIndex(` |  | number | — |  |
| 15 | 95 | Link > Get Link X | `LinkX(` |  | number; number | — |  |
| 16 | 96 | Link > Get Link Y | `LinkY(` |  | number; number | — |  |
