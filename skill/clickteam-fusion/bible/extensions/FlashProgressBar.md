# Extension FlashProgressBar

- File: `FlashProgressBar.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Progress Bar Is Visible | `<object> Progress Bar Is Visible` |  |  |
| 1 | -82 | Progress Bar Is Full | `<object> Progress Bar Is Full` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Create Progress Bar | `Create Progress Bar` |  |  |
| 1 | 81 | Set X | `Set X (<p0>)` |  | numeric expression “X Coordinate” |
| 2 | 82 | Set Y | `Set Y (<p0>)` |  | numeric expression “Y Coordinate” |
| 3 | 83 | Set Width | `Set Width (<p0>)` |  | numeric expression “Width” |
| 4 | 84 | Set Height | `Set Height (<p0>)` |  | numeric expression “Height” |
| 5 | 85 | Set Bar Color | `Set Bar Color (<p0>)` |  | color “Bar Color” |
| 6 | 86 | Set Background Color | `Set Background Color (<p0>)` |  | color “Background Color” |
| 7 | 87 | Set Status Text Color | `Set Status Text Color (<p0>)` |  | color “Status Text Color” |
| 8 | 88 | Set Alpha | `Set Alpha (<p0>)` |  | numeric expression “Alpha” |
| 9 | 89 | Set Current Value | `Set Current Value (<p0>)` |  | numeric expression “Current Value” |
| 10 | 90 | Set Minimum Value | `Set Minimum Value (<p0>)` |  | numeric expression “Minimum Value” |
| 11 | 91 | Set Maximum Value | `Set Maximum Value (<p0>)` |  | numeric expression “Maximum Value” |
| 12 | 92 | Set Status Text | `Set Status Text (<p0>)` |  | string expression “Status Text” |
| 13 | 93 | Show Progress Bar | `Show Progress Bar` |  |  |
| 14 | 94 | Hide Progress Bar | `Hide Progress Bar` |  |  |
| 15 | 95 | Destroy Progress Bar | `Destroy Progress Bar` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Status Text | `StatusText$(` |  | → string |
| 1 | 81 | Get X | `GetX(` |  |  |
| 2 | 82 | Get Y | `GetY(` |  |  |
| 3 | 83 | Get Width | `GetWidth(` |  |  |
| 4 | 84 | Get Height | `GetHeight(` |  |  |
| 5 | 85 | Get Alpha | `GetAlpha(` |  |  |
| 6 | 86 | Get Current Value | `GetCurrentValue(` |  |  |
| 7 | 87 | Get Minimum Value | `GetMinimumValue(` |  |  |
| 8 | 88 | Get Maximum Value | `GetMaximumValue(` |  |  |
