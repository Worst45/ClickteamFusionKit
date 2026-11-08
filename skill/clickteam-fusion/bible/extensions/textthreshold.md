# Extension textthreshold

- File: `textthreshold.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Lighter Color | `Set Lighter Color to <p0>` |  | color “Color” |
| 1 | 81 | Set Darker Color | `Set Darker Color to <p0>` |  | color “Color” |
| 2 | 82 | Set Threshold Color | `Set Threshold Color to <p0>` |  | numeric expression “Level, 0-255” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get text color (Background Color) | `TextColor(` |  | number “Color via GetRGB” |
