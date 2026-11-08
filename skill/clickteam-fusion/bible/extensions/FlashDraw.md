# Extension FlashDraw

- File: `FlashDraw.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Line Style > Set Line Thickness | `Set Line Thickness(<p0>)` |  | numeric expression “Line Thickness” |
| 1 | 81 | Line Style > Set Line Color | `Set Line Color(<p0>)` |  | string expression “Line Color (Hexadecimal) - (Example: 0xFF0000)” |
| 2 | 82 | Line Style > Set Line Alpha | `Set Line Alpha(<p0>)` |  | numeric expression “Line Alpha (0 = Transparent, 1 = Solid)” |
| 3 | 83 | Line Style > Set Line Pixel Hinting | `Set Line Pixel Hinting(<p0>)` |  | numeric expression “Line Pixel Hinting (0 = False, 1 = True)” |
| 4 | 84 | Line Style > Set Line Scale Mode | `Set Line Scale Mode(<p0>)` |  | numeric expression “Line Scale Mode (0 = Normal, 1 = None, 2 = Vertical, 3 = Horizontal)” |
| 5 | 85 | Line Style > Set Line Caps | `Set Line Caps(<p0>)` |  | numeric expression “Line Caps (0 = None, 1 = Round, 2 = Square)” |
| 6 | 86 | Line Style > Set Line Joints | `Set Line Joints(<p0>)` |  | numeric expression “Line Joints (0 = Round, 1 = Bevel, 2 = Miter)” |
| 7 | 87 | Line Style > Set Line Miter Limit | `Set Line Miter Limit(<p0>)` |  | numeric expression “Line Miter Limit (1 - 255)” |
| 8 | 88 | Draw Line | `Draw Line - Start X(<p0>), Start Y(<p1>), End X(<p2>), End Y(<p3>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “End X Coordinate”; numeric expression “End Y Coordinate” |
| 9 | 89 | Draw Bezier Curve | `Draw Bezier Curve - Start X(<p0>), Start Y(<p1>), End X(<p2>), End Y(<p3>), Anchor X(<p4>), Anchor Y(<p5>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “End X Coordinate”; numeric expression “End Y Coordinate”; numeric expression “Anchor X Coordinate”; numeric expression “Anchor Y Coordinate” |
| 10 | 90 | Draw Rectangle | `Draw Rectangle - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “Width”; numeric expression “Height” |
| 11 | 91 | Draw Rounded Rectangle | `Draw Rounded Rectangle - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>), Corner Width(<p4>), Corner Height(<p5>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “Width”; numeric expression “Height”; numeric expression “Corner Width”; numeric expression “Corner Height” |
| 12 | 92 | Draw Circle | `Draw Circle - Start X(<p0>), Start Y(<p1>), Radius(<p2>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “Radius” |
| 13 | 93 | Draw Ellipse | `Draw Ellipse - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>)` |  | numeric expression “Start X Coordinate”; numeric expression “Start Y Coordinate”; numeric expression “Width”; numeric expression “Height” |
| 14 | 94 | Clear > Clear All Lines | `Clear All Lines` |  |  |
| 15 | 95 | Clear > Clear All Bezier Curves | `Clear All Bezier Curves` |  |  |
| 16 | 96 | Clear > Clear All Rectangles | `Clear All Rectangles` |  |  |
| 17 | 97 | Clear > Clear All Rounded Rectangles | `Clear All Rounded Rectangles` |  |  |
| 18 | 98 | Clear > Clear All Circles | `Clear All Circles` |  |  |
| 19 | 99 | Clear > Clear All Ellipses | `Clear All Ellipses` |  |  |
| 20 | 100 | Clear > Clear Stage | `Clear Stage` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Line Thickness | `GetLineThickness(` |  |  |
| 1 | 81 | Get Line Color | `GetLineColor(` |  |  |
| 2 | 82 | Get Line Alpha | `GetLineAlpha(` |  |  |
| 3 | 83 | Get Line Pixel Hinting | `GetLinePixelHinting(` |  |  |
| 4 | 84 | Get Line Scale Mode | `GetLineScaleMode(` |  |  |
| 5 | 85 | Get Line Caps | `GetLineCaps(` |  |  |
| 6 | 86 | Get Line Joints | `GetLineJoints(` |  |  |
| 7 | 87 | Get Line Miter Limit | `GetLineMiterLimit(` |  |  |
