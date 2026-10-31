# Extension IntegerSplit

- File: `IntegerSplit.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | LOWORD | `LOWORD(` |  | number “Integer” | — |  |
| 1 | 81 | HIWORD | `HIWORD(` |  | number “Integer” | — |  |
| 2 | 82 | MAKELONG | `MAKELONG(` |  | number “First short”; number “Second short” | — |  |
