# Extension Drag

- File: `Drag.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Any Object Selected | `<object>: Is an Object Selected?` |  |  | — |  |
| 1 | -82 | Is Specific Object Selected | `<object>: Is Object <p0> Selected?` |  | numeric expression “Fixed Value to Test” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Selection > Select Object | `Select <p0>` |  | object “Object to Select”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 1 | 81 | Selection > Select None | `Select None` |  |  | — |  |
| 2 | 82 | Selection > Toggle Selection | `Perform Toogle Select Using <p0>` |  | object “Object to Select”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 3 | 83 | Offset > Set Offset | `Set Offset to (<p0>, <p1>)` |  | numeric expression “X Offset”; numeric expression “Y Offset” | — |  |
| 4 | 84 | Offset > Set X Offset | `Set X Offset to <p0>` |  | numeric expression “X Offset” | — |  |
| 5 | 85 | Offset > Set Y Offset | `Set Y Offset to <p0>` |  | numeric expression “Y Offset” | — |  |
| 6 | 86 | Updating > Normal Update | `Update` |  | numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 7 | 87 | Updating > Simple Update | `Update (Simple)` |  | numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 8 | 88 | Updating > Snap to Grid | `Update and Snap to Grid (Cell Width = <p0>, Cell Height = <p1>) (Hotspot X = <p2>, Hotspot Y = <p3>)` |  | numeric expression “Width of Grid Cells”; numeric expression “Height of Grid Cells”; numeric expression “X Position of Hotspot”; numeric expression “Y Position of Hotspot”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 9 | 89 | Updating > Single Axis > X-Axis Only | `Update (X-Axis Only)` |  | numeric expression “Mouse X (Use XMouse Expression)” | — |  |
| 10 | 90 | Updating > Single Axis > Y-Axis Only | `Update (Y-Axis Only)` |  | numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 11 | 91 | Updating > Limitation > Use Boundries | `Update and use Boundries (<p0>, <p1>) - (<p2>, <p3>)` |  | numeric expression “Minimum X”; numeric expression “Minimum Y”; numeric expression “Maximum X”; numeric expression “Maximum Y”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 12 | 92 | Updating > Limitation > Limit X Only | `Update and Limit X Position (<p0>, <p1>) (Update Y Position = <p2>)` |  | numeric expression “Minimum X”; numeric expression “Maximum X”; numeric expression “Update Y Position? (0 = No, Anything Else = Yes)”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |
| 13 | 93 | Updating > Limitation > Limit Y Only | `Update and Limit Y Position (<p0>, <p1>) (Update X Position = <p2>)` |  | numeric expression “Minimum Y”; numeric expression “Maximum Y”; numeric expression “Update X Position? (0 = No, Anything Else = Yes)”; numeric expression “Mouse X (Use XMouse Expression)”; numeric expression “Mouse Y (Use YMouse Expression)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Offset > Get X Offset | `XOffset(` |  |  | — |  |
| 1 | 81 | Offset > Get Y Offset | `YOffset(` |  |  | — |  |
| 2 | 82 | Selection > X Position | `SelX(` |  |  | — |  |
| 3 | 83 | Selection > Y Position | `SelY(` |  |  | — |  |
| 4 | 84 | Selection > X Hotspot | `SelXHotspot(` |  |  | — |  |
| 5 | 85 | Selection > Y Hotspot | `SelYHotspot(` |  |  | — |  |
| 6 | 86 | Selection > Fixed Value | `SelFixed(` |  |  | — |  |
