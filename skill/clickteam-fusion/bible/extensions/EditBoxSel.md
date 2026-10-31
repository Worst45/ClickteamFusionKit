# Extension EditBoxSel

- File: `EditBoxSel.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set caret/selection | `Set selection of <p0> to (<p1>,<p2>)` |  | object “Edit Box”; numeric expression “Selection start (0 = Whole text)”; numeric expression “Selection end (-1 = Whole text if start is 0, else same as start)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get caret/selection start | `SelStart(` |  | number “Fixed value of Edit Box” | — |  |
| 1 | 81 | Get selection end | `SelEnd(` |  | number “Fixed value of Edit Box” | — |  |
