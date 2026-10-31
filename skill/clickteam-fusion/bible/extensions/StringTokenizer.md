# Extension StringTokenizer

- File: `StringTokenizer.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Split string | `Split string <p0> with delimiters <p1> (1D)` |  | string expression “String”; string expression “Delimiters” | — |  |
| 1 | 81 | Split string (2D) | `Split string <p0> with delimiters <p1> and <p2> (2D)` |  | string expression “String”; string expression “X delimiters”; string expression “Y delimiters” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of elements | `ElementCount(` |  |  | — |  |
| 1 | 81 | Get element | `Element$(` |  | number “Index (0 based)” → string | — |  |
| 2 | 82 | Get element (2D) | `Element2D$(` |  | number “X index (0 based)”; number “Y index (0 based)” → string | — |  |
| 3 | 83 | Number of X elements (2D) | `ElementCountX(` |  |  | — |  |
| 4 | 84 | Number of Y elements (2D) | `ElementCountY(` |  | number “X index (0 based)” | — |  |
