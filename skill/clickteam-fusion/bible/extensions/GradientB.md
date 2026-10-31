# Extension GradientB

- File: `GradientB.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Color 1 | `Set Color 1 to <p0>` |  | color “Color” | — |  |
| 1 | 81 | Set Color 2 | `Set Color 2 to <p0>` |  | color “Color” | — |  |
| 2 | 82 | Set Direction | `Set Direction to <p0>` |  | numeric expression “Direction ( 0 = horizontal 1 = vertical )” | — |  |
| 3 | 83 | Set Width | `Set Width to <p0>` |  | numeric expression “Width” | — |  |
| 4 | 84 | Set Height | `Set Height to <p0>` |  | numeric expression “Height” | — |  |
| 5 | 85 | Set X | `Set X to <p0>` |  | numeric expression “X” | — |  |
| 6 | 86 | Set Y | `Set Y to <p0>` |  | numeric expression “Y” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Color 1 | `Color1(` |  |  | — |  |
| 1 | 81 | Get Color 2 | `Color2(` |  |  | — |  |
| 2 | 82 | Get Width | `Width(` |  |  | — |  |
| 3 | 83 | Get Height | `Height(` |  |  | — |  |
| 4 | 84 | GetDirection | `Direction(` |  |  | — |  |
| 5 | 85 | Get X | `GetX(` |  |  | — |  |
| 6 | 86 | Get Y | `GetY(` |  |  | — |  |
