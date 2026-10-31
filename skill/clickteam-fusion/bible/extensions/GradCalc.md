# Extension GradCalc

- File: `GradCalc.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Gradient Size | `Set Gradient Size <p0> x <p1>` |  | numeric expression “Enter gradient width”; numeric expression “Enter gradient height” | — |  |
| 1 | 81 | Set Colour 1 | `Set Colour 1 to <p0>` |  | color “Enter colour 1” | — |  |
| 2 | 82 | Set Colour 2 | `Set Colour 2 to <p0>` |  | color “Enter colour 2” | — |  |
| 3 | 83 | Set Colour 3 | `Set Colour 3 to <p0>` |  | color “Enter colour 3” | — |  |
| 4 | 84 | Set Colour 4 | `Set Colour 4 to <p0>` |  | color “Enter colour 4” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | 2 Colour (Horizontal) > Get RGB | `GetRGBH(` |  | number; number | — |  |
| 1 | 81 | 2 Colour (Horizontal) > Get R | `GetRH(` |  | number; number | — |  |
| 2 | 82 | 2 Colour (Horizontal) > Get B | `GetGH(` |  | number; number | — |  |
| 3 | 83 | 2 Colour (Horizontal) > Get B | `GetBH(` |  | number; number | — |  |
| 4 | 84 | 2 Colour (Vertical) > Get RGB | `GetRGBV(` |  | number; number | — |  |
| 5 | 85 | 2 Colour (Vertical) > Get R | `GetRV(` |  | number; number | — |  |
| 6 | 86 | 2 Colour (Vertical) > Get G | `GetGV(` |  | number; number | — |  |
| 7 | 87 | 2 Colour (Vertical) > Get B | `GetBV(` |  | number; number | — |  |
| 8 | 88 | 4 Colour > Get RGB | `GetGRGB(` |  | number; number | — |  |
| 9 | 89 | 4 Colour > Get R | `GetR(` |  | number; number | — |  |
| 10 | 90 | 4 Colour > Get G | `GetG(` |  | number; number | — |  |
| 11 | 91 | 4 Colour > Get B | `GetB(` |  | number; number | — |  |
