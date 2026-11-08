# Extension Ticker

- File: `Ticker.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set String | `Set String to '<p0>'` |  | string expression “String data to store...” |
| 1 | 81 | Set Number | `Set Number to '<p0>'` |  | numeric expression “Number to store...” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get > String | `GetString$(` |  | → string |
| 1 | 81 | Get > Number | `GetNumber(` |  |  |
| 2 | 82 | Set > String | `SetString$(` |  | string “String” → string |
| 3 | 83 | Set > Number | `SetNumber(` |  | number “Number” |
| 4 | 84 | Add to > String | `AddString$(` |  | string “String” → string |
| 5 | 85 | Add to > Number | `AddNumber(` |  | number “Number” |
