# Extension SecToHMS

- File: `SecToHMS.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Convert Seconds ... | `Set Seconds to convert to: <p0>` |  | numeric expression “Please enter the number of Seconds to be converted” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Hours ... | `GetHours(` |  |  | — |  |
| 1 | 81 | Get Minutes ... | `GetMinutes(` |  |  | — |  |
| 2 | 82 | Get Seconds ... | `GetSeconds(` |  |  | — |  |
