# Extension ScreenDraw

- File: `ScreenDraw.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Set line type | `Set line type to <p0>` |  | numeric expression “Type (0 for solid, 1 for horizontal gradient, 2 for vertical gradient or 3 for mosaic)” | — |  |
| 1 | 81 | Settings > Set line colour 1 | `Set line colour 1 to <p0>` |  | color “New colour” | — |  |
| 2 | 82 | Settings > Set line colour 2 | `Set line colour 2 to <p0>` |  | color “New colour” | — |  |
| 3 | 83 | Settings > Set line thickness | `Set line thickness to <p0>` |  | numeric expression “New thickness” | — |  |
| 4 | 84 | Settings > Set line image | `Set line image to <p0>` |  | object “Source object” | — |  |
| 5 | 85 | Settings > Set fill type | `Set fill type to <p0>` |  | numeric expression “Type (0 for solid, 1 for horizontal gradient, 2 for vertical gradient and 3 for mosaic)” | — |  |
| 6 | 86 | Settings > Set fill colour 1 | `Set fill colour 1 to <p0>` |  | color “New colour” | — |  |
| 7 | 87 | Settings > Set fill colour 2 | `Set fill colour 2 to <p0>` |  | color “New colour” | — |  |
| 8 | 88 | Settings > Set fill image | `Set fill image to <p0>` |  | object “Source object” | — |  |
| 9 | 89 | Settings > Enable anti-aliasing | `Enable anti-aliasing` |  |  | — |  |
| 10 | 90 | Settings > Disable anti-aliasing | `Disable anti-aliasing` |  |  | — |  |
| 11 | 91 | Draw > Pixel | `Draw pixel at <p0>, <p1> with colour <p2>` |  | numeric expression “X position”; numeric expression “Y position”; color “Colour” | — |  |
| 12 | 92 | Draw > Rectangle | `Draw rectangle at <p0>, <p1> with width <p2> and height <p3> (fill <p4>)` |  | numeric expression “X position”; numeric expression “Y position”; numeric expression “Width”; numeric expression “Height”; numeric expression “Fill? 0 = no, 1 = yes” | — |  |
| 13 | 93 | Draw > Ellipse | `Draw ellipse at <p0>, <p1> with width <p2> and height <p3> (fill <p4>)` |  | numeric expression “X position”; numeric expression “Y position”; numeric expression “Width”; numeric expression “Height”; numeric expression “Fill? 0 = no, 1 = yes” | — |  |
| 14 | 94 | Draw > Line | `Draw line from <p0>, <p1> to <p2>, <p3>` |  | numeric expression “Start X”; numeric expression “Start Y”; numeric expression “End X” | — |  |
| 15 | 95 | Draw > Flood fill | `Flood fill at <p0>, <p1> with colour <p2> and tolerance <p3>` |  | numeric expression “X”; numeric expression “Y”; color “Colour”; numeric expression “Tolerance” | — |  |
| 16 | 96 | Draw > Replace colour | `Replace colour <p0> with <p1>` |  | color “Old colour”; color “New colour” | — |  |
| 17 | 97 | Files > Save to file | `Save file <p0>` |  | string expression “Filename” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get pixel | `Pixel(` |  | number “X”; number “Y” | — |  |
