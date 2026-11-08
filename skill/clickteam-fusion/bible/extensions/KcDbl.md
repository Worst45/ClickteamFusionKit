# Extension KcDbl

- File: `KcDbl.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Format > Standard |  |  |  |
| 1 | 81 | Set Format > N digits |  | N chiffres |  |
| 2 | 82 | Set Format > N digits after decimal point |  | N chiffres après la virgule |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add |  |  |  |
| 1 | 81 | Subtract |  |  |  |
| 2 | 82 | Multiply |  |  |  |
| 3 | 83 | Divide |  |  |  |
| 4 | 84 | Format ... > N digits |  | N chiffres |  |
| 5 | 85 | Format ... > N digits after decimal point |  | N chiffres après la virgule |  |
