# Extension TimeString

- File: `TimeString.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get TimeString | `TimeString$(` |  | string “Format (See Help)” → string |
| 1 | 81 | Create TimeString | `CustomTimeString$(` |  | string “Format (See Help)”; number “Year”; number “Day of the Year (0-365)”; number “Month (0-11)”; number “Day of the Month (1-31)”; number “Day of the Week (0-6)”; number “Hour (0-23)”; number “Minute (0-59)”; number “Second (0-59)” → string |
