# Extension bitwisehelper

- File: `bitwisehelper.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is True | `<p0> is True` |  | numeric expression “Is True” | — |  |
| 1 | -82 | Is False | `<p0> is False` |  | numeric expression “Is False” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Equal | `Equal(` |  | number; number | — |  |
| 1 | 81 | Different | `Different(` |  | number; number | — |  |
| 2 | 82 | Lower | `Lower(` |  | number; number | — |  |
| 3 | 83 | LowerEqual | `LowerEqual(` |  | number; number | — |  |
| 4 | 84 | Greater | `Greater(` |  | number; number | — |  |
| 5 | 85 | GreaterEqual | `GreaterEqual(` |  | number; number | — |  |
| 6 | 86 | Conditional | `Conditional(` |  | number; number; number | — |  |
| 7 | 87 | StringEqual | `StringEqual(` |  | string; string | — |  |
| 8 | 88 | StringDifferent | `StringDifferent(` |  | string; string | — |  |
| 9 | 89 | StringConditional | `StringConditional(` |  | number; string; string → string | — |  |
