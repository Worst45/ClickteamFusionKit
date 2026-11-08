# Extension FlashTooltip

- File: `FlashTooltip.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Tooltip is Visible | `<object> Tooltip Is Visible` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Show Tooltip | `Show Tooltip (<p0>) Alpha (<p1>)` |  | string expression “Tooltip Text”; numeric expression “Alpha” |
| 1 | 81 | Hide Tooltip | `Hide Tooltip` |  |  |
| 2 | 82 | Set X | `Set X (<p0>)` |  | numeric expression “X Coordinate” |
| 3 | 83 | Set Y | `Set Y (<p0>)` |  | numeric expression “Y Coordinate” |
| 4 | 84 | Set Background Color | `Set Background Color (<p0>)` |  | color “Background Color” |
| 5 | 85 | Set Font | `Set Font (<p0>)` |  | string expression “Font” |
| 6 | 86 | Set Font Size | `Set Font Size (<p0>)` |  | numeric expression “Font Size” |
| 7 | 87 | Set Font Color | `Set Font Color (<p0>)` |  | color “Font Color” |
| 8 | 88 | Set Corner Radius | `Set Corner Radius (<p0>)` |  | numeric expression “Corner Radius” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Last Tooltip Text | `LastTooltipText$(` |  | → string |
| 1 | 81 | Tooltip X | `TooltipX(` |  |  |
| 2 | 82 | Tooltip Y | `TooltipY(` |  |  |
