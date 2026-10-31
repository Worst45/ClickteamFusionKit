# Extension CalcRect

- File: `CalcRect.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set font | `Set font face <p0> , size <p1> , style <p2>` |  | string expression “Name of the font”; numeric expression “Size of the font (pt)”; numeric expression “Style - add together: 1 = bold, 2 = italic, 4 = underline” | — |  |
| 1 | 81 | Set text | `Set text to <p0>` |  | string expression “Text to calculate size of” | — |  |
| 2 | 82 | Set maximum width (multiline text) | `Set max width to <p0>` |  | numeric expression “Maximum width in pixels” | — |  |
| 3 | 83 | Calculate area | `Calculate area` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get text width | `Text Width(` |  |  | — |  |
| 1 | 81 | Get text height | `Text Height(` |  |  | — |  |
