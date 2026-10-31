# Extension Flame

- File: `Flame.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cool Map > Set Offset | `Set Offset of cool map to  <p0>, <p1>` |  | numeric expression “X Offset”; numeric expression “Y Offset” | — |  |
| 1 | 81 | Cool Map > Set Velocity | `Set Velocity of cool map to <p0> at a bearing of <p1> degrees` |  | numeric expression “Speed”; numeric expression “Bearing ( 0 = North, 90 = East, 180 = South, 270 = West )” | — |  |
| 2 | 82 | Cool Map > Set Cool Map from object | `Copy <p0>'s image and use as Cold map` |  | object “Select cool map object” | — |  |
| 3 | 83 | Flame Gradient > Set Gradient from object ( vertical ) | `Copy <p0>'s image and use as Gradient map` |  | object “Select gradient map object” | — |  |
| 4 | 84 | Flame Gradient > Set Gradient Size | `Set gradient size to <p0>` |  | numeric expression “Size” | — |  |
| 5 | 85 | Flame Gradient > Place a gradient | `Set gradient from <p0> to <p1> to <p2> fading to <p3>` |  | numeric expression “Starting Coordinate”; numeric expression “Ending Coordinate”; color “Starting Colour”; color “End Colour” | — |  |
| 6 | 86 | Alpha Gradient > Set Gradient Size | `Set gradient's min to <p0>` |  | numeric expression “Size” | — |  |
| 7 | 87 | Set on fire > Set Strength of object next on fire | `Set strength factor to <p0>` |  | numeric expression “Strength( 1 = Normal, 0.5 = Weaker, 2 = Stronger )” | — |  |
| 8 | 88 | Alpha Gradient > Place a gradient | `Set gradient from <p0> to <p1> to <p2> fading to <p3>` |  | numeric expression “Starting Coordinate”; numeric expression “Ending Coordinate”; color “Starting Colour”; color “End Colour” | — |  |
| 9 | 89 | Set on fire > Object | `Set Object <p0> on fire with effect <p1>` |  | object “Object”; numeric expression “Ink ( 0-Set, 1-Add, 2-Subtract, 3-Max, 4-Min ) + Hotness ( 0-Solid, 5-Lightness)” | — |  |
| 10 | 90 | Flame > Manually Update | `Update` |  |  | — |  |
| 11 | 91 | Flame > Set Bearing | `Set Direction to <p0>` |  | numeric expression “Bearing ( 0 = North, 90 = East, 180 = South, 270 = West )” | — |  |
| 12 | 92 | Flame > Set Size | `Set Size to <p0> by <p1>` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 13 | 93 | Flame > Scroll | `Scroll the flame (<p0> , <p1>)` |  | numeric expression “X Scroll”; numeric expression “Y Scroll” | — |  |
| 14 | 94 | Hotspot > Custom... | `Set Hotspot to (<p0>,<p1>)` |  | numeric expression; numeric expression | — |  |
| 15 | 95 | Hotspot > Top-left | `Set Hotspot to top-left` |  |  | — |  |
| 17 | 97 | Hotspot > Top-center | `Set Hotspot to top-right` |  |  | — |  |
| 18 | 98 | Hotspot > Left-center | `Set Hotspot to left-center` |  |  | — |  |
| 19 | 99 | Hotspot > Center | `Set Hotspot to center` |  |  | — |  |
| 20 | 100 | Hotspot > Right-center | `Set Hotspot to right-center` |  |  | — |  |
| 21 | 101 | Hotspot > Bottom-left | `Set Hotspot to bottom-left` |  |  | — |  |
| 22 | 102 | Hotspot > Bottom-center | `Set Hotspot to bottom-center` |  |  | — |  |
| 23 | 103 | Hotspot > Bottom-right | `Set Hotspot to bottom-right` |  |  | — |  |
| 24 | 104 | Flame > Set Speed | `Set flame speed to <p0>` |  | numeric expression “Flame Speed ( can use decimals )” | — |  |
| 25 | 105 | Flame > Clear | `Clear Flame` |  |  | — |  |
| 26 | 106 | Flame > Auto Update ?.. | `Auto Update ? <p0> ( 0 = no : 1=yes)` |  | numeric expression “Auto Update ? ( 0 = no : 1=yes) ” | — |  |
| 27 | 107 | Flame > Auto Scroll on move ?.. | `Scroll on move ? <p0> ( 0 = no : 1=yes)` |  | numeric expression “Scroll on move ? ( 0 = no : 1=yes) ” | — |  |
| 28 | 108 | Cool Map > Set Strength | `Set Cool Map strength to <p0>` |  | numeric expression “Strength( 1 = Normal, 0.5 = Weaker, 2 = Stronger )” | — |  |
| 29 | 109 | Alpha Gradient > Set Gradient from object ( vertical ) | `Copy <p0>'s image and use as Alpha Map` |  | object “Select object” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Test heat of pixel ( real co-ordinates ) | `HeatTest(` |  | number; number | — |  |
| 1 | 81 | Get Cold Offset's X position | `ColdXOffset(` |  |  | — |  |
| 2 | 82 | Get Cold Offset's Y position | `ColdYOffset(` |  |  | — |  |
| 3 | 83 | Get Gradient Size | `GetGradSize(` |  |  | — |  |
| 5 | 85 | Get Alpha Size | `GetGradMax(` |  |  | — |  |
