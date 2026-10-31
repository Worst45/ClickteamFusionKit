# Extension KcDbl

- File: `KcDbl.mfx` — installed with Fusion
- Name(s) shown in projects: “Double-Precision Calculator”
- Usage in the corpus: 5 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Format > Standard |  |  |  | — |  |
| 1 | 81 | Set Format > N digits |  | N chiffres |  | — |  |
| 2 | 82 | Set Format > N digits after decimal point |  | N chiffres après la virgule |  | 1 (1 proj.) | `Double-Precision Calculator : Event ID 82, 1 Parameters { 2 }` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add |  |  |  | 1 (1 proj.) | `Expression ID 80("Double-Precision Calculator")` |
| 1 | 81 | Subtract |  |  |  | 1 (1 proj.) | `Expression ID 81("Double-Precision Calculator")` |
| 2 | 82 | Multiply |  |  |  | 1 (1 proj.) | `Expression ID 82("Double-Precision Calculator")` |
| 3 | 83 | Divide |  |  |  | 1 (1 proj.) | `Expression ID 83("Double-Precision Calculator")` |
| 4 | 84 | Format ... > N digits |  | N chiffres |  | — |  |
| 5 | 85 | Format ... > N digits after decimal point |  | N chiffres après la virgule |  | — |  |
