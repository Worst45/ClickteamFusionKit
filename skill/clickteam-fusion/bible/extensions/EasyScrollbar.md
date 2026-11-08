# Extension EasyScrollbar

- File: `EasyScrollbar.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Scroll | `<object> On Scroll` |  |  |
| 1 | -82 | Has Focus | `<object> Has Focus` |  |  |
| 2 | -83 | Is Enabled | `<object> Is Enabled` |  |  |
| 3 | -84 | Is Visible | `<object> Is Visible` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Scroll Position | `Set Scroll Position to <p0>` |  | numeric expression “Position” |
| 1 | 81 | Set Scroll Range | `Set Scroll Range from <p0> to <p1>` |  | numeric expression “Minimum”; numeric expression “Maximum” |
| 2 | 82 | Set Small Change | `Set Small Change to <p0>` |  | numeric expression “Small Change” |
| 3 | 83 | Set Large Change | `Set Large Change to <p0>` |  | numeric expression “Large Change” |
| 4 | 84 | Control > Focus > Get Focus | `<object> Focus On` |  |  |
| 5 | 85 | Control > Focus > Lose Focus | `<object> Focus Off` |  |  |
| 6 | 86 | Control > Enabled > Enable | `<object> Enable` |  |  |
| 7 | 87 | Control > Enabled > Disable | `<object> Disable` |  |  |
| 8 | 88 | Size > Set Size | `Set Size to <p0> by <p1>` |  | numeric expression “Width”; numeric expression “Height” |
| 9 | 89 | Size > Set Width | `Set Width to <p0>` |  | numeric expression “Width” |
| 10 | 90 | Size > Set Height | `Set Height to <p0>` |  | numeric expression “Height” |
| 11 | 91 | Control > Visibility > Show | `<object> Show` |  |  |
| 12 | 92 | Control > Visibility > Hide | `<object> Hide` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Value | `EScrollVal(` |  |  |
| 1 | 81 | Get Minimum Value | `EScrollMinVal(` |  |  |
| 2 | 82 | Get Maximum Value | `EScrollMaxVal(` |  |  |
| 3 | 83 | Get Small Change | `EScrollSmallChange(` |  |  |
| 4 | 84 | Get Large Change | `EScrollLargeChange(` |  |  |
| 5 | 85 | Size > Get Width | `EScrollWidth(` |  |  |
| 6 | 86 | Size > Get Height | `EScrollHeight(` |  |  |
