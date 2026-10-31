# Extension pathfind

- File: `pathfind.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Map > Map Position is Obstacle | `<object>: Position (<p0>, <p1>) is obstacle` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 1 | -82 | Path Found | `<object>: Path found` |  |  | — |  |
| 2 | -83 | End of Path | `<object>: End of path` |  |  | — |  |
| 3 | -84 | Fourmode is On | `<object>: 4-dir is on` |  |  | — |  |
| 4 | -85 | Compare Map > Map Position is Destination | `<object>: Position (<p0>, <p1>) is destination` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 5 | -86 | Compare Map > Map Position is Start | `<object>: Position (<p0>, <p1>) is start` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 6 | -87 | Start of Path | `<object>: Start of path` |  |  | — |  |
| 7 | -88 | Map Exists | `<object>: Map exists` |  |  | — |  |
| 8 | -89 | Line of Sight | `<object>There's a line-of-sight between (<p0>, <p1>) and (<p2>, <p3>)` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)”; numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 9 | -90 | Compare Map > Compare Map Position to Value | `<object>: Position (<p0>, <p1>) is <p2>` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)”; numeric expression “0 - 254 = path (increasing cost), 255 = obstacle, 256 = start, 257 = destination” | — |  |
| 10 | -91 | Saved Paths > End of Path | `<object>: Is saved path <p0> at end` |  | string expression “ID of the array” | — |  |
| 11 | -92 | Saved Paths > Start of Path | `<object>: Is saved path <p0> at start` |  | string expression “ID of the array” | — |  |
| 12 | -93 | Saved Paths > Test if Array Exists | `<object>: Array <p0> exists` |  | string expression “ID of the array” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Fun > Generate Maze | `Generate maze` |  |  | — |  |
| 1 | 81 | Find Path | `Find path` |  |  | — |  |
| 2 | 82 | Set Map > Set Obstacle | `Set (<p0>,<p1>) to obstacle` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 3 | 83 | Set Map > Set Path | `Set (<p0>,<p1>) to path` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 4 | 84 | Set Map > Set Destination > Set Destination | `Set destination to (<p0>, <p1>)` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 5 | 85 | Set Map > Set Start > Set Start | `Set start to (<p0>, <p1>)` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)” | — |  |
| 6 | 86 | Set Map > Clear Map | `Clear map` |  |  | — |  |
| 7 | 87 | Walk > Advance One Step | `Advance one` |  |  | — |  |
| 8 | 88 | Walk > Advance All Steps | `Advance all` |  |  | — |  |
| 9 | 89 | Walk > Reverse One Step | `Reverse one` |  |  | — |  |
| 10 | 90 | Walk > Reverse All Steps | `Reverse all` |  |  | — |  |
| 11 | 91 | Resize Map | `Resize map to <p0> x <p1>` |  | numeric expression “Width of the map”; numeric expression “Height of the map” | — |  |
| 12 | 92 | Mode > Change to 4-dir Mode | `Set to 4-dir` |  |  | — |  |
| 13 | 93 | Mode > Change to 8-dir Mode | `Set to 8-dir` |  |  | — |  |
| 14 | 94 | Mode > Change Mode | `Set mode to <p0>` |  | numeric expression “Either 4 or 8 dir mode” | — |  |
| 15 | 95 | File Actions > Save the Map | `Save map to <p0>` |  | file name “Enter filename” | — |  |
| 16 | 96 | File Actions > Load a Map | `Load map from <p0>` |  | file name “Enter filename” | — |  |
| 17 | 97 | Set Map > Fill Map | `Fill the map` |  |  | — |  |
| 18 | 98 | Set Map > Set Destination > Set Destination X | `Set destination x to <p0>` |  | numeric expression “x coordinate (0-based)” | — |  |
| 19 | 99 | Set Map > Set Destination > Set Destination Y | `Set destination y to <p0>` |  | numeric expression “y coordinate (0-based)” | — |  |
| 20 | 100 | Set Map > Set Start > Set Start X | `Set start x to <p0>` |  | numeric expression “x coordinate (0-based)” | — |  |
| 21 | 101 | Set Map > Set Start > Set Start Y | `Set start y to <p0>` |  | numeric expression “y coordinate (0-based)” | — |  |
| 22 | 102 | File Actions > Load a Map From a Bitmap | `Load map from bitmap <p0>` |  | file name “Only a 2 color, non-compressed bitmap” | — |  |
| 23 | 103 | File Actions > Save the Map to a Bitmap | `Save map to bitmap <p0>` |  | file name “Only a 2 color, non-compressed bitmap” | — |  |
| 24 | 104 | Walk > Advance N Steps | `Advance <p0> steps` |  | numeric expression “Advance N Steps” | — |  |
| 25 | 105 | Walk > Reverse N Steps | `Reverse <p0> steps` |  | numeric expression “Reverse N Steps” | — |  |
| 26 | 106 | Set Map > Set Map | `Set map position (<p0>, <p1>) to <p2>` |  | numeric expression “x coordinate (0-based)”; numeric expression “y coordinate (0-based)”; numeric expression “0 - 254 = path (increasing cost), 255 = obstacle” | — |  |
| 27 | 107 | Find Path in Zone | `Find path in zone (<p0>, <p1>) to (<p2>, <p3>)` |  | numeric expression “x coordinate of left/top corner”; numeric expression “y coordinate of left/top corner”; numeric expression “x coordinate of right/bottom corner”; numeric expression “y coordinate of right/bottom corner” | — |  |
| 28 | 108 | Set Map > Set Zone To | `Set map in zone (<p0>, <p1>) to (<p2>, <p3>) to <p4>` |  | numeric expression “x coordinate of left/top corner”; numeric expression “y coordinate of left/top corner”; numeric expression “x coordinate of right/bottom corner”; numeric expression “y coordinate of right/bottom corner”; numeric expression “0 - 254 = path (increasing cost), 255 = obstacle” | — |  |
| 29 | 109 | Costs > Set Diagonal Cost to Sqrt(2) | `Set diagonal cost to sqrt(2)` |  |  | — |  |
| 30 | 110 | Costs > Set Costs | `Set move cost to (up and counter clockwise) <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>, <p7>` |  | numeric expression “Cost direction up”; numeric expression “Cost direction up left”; numeric expression “Cost direction left”; numeric expression “Cost direction down left”; numeric expression “Cost direction down”; numeric expression “Cost direction down right”; numeric expression “Cost direction right”; numeric expression “Cost direction up right” | — |  |
| 31 | 111 | Costs > Reset Costs |  |  |  | — |  |
| 32 | 112 | Closest Path > Use Closest Path | `Use closest path` |  |  | — |  |
| 33 | 113 | Closest Path > Don't Use Closest Path | `Don't use closest path` |  |  | — |  |
| 35 | 115 | Map Generation > Generate Map From Obstacles | `Create map from obstacles, grid size <p0>` |  | numeric expression “Grid size” | — |  |
| 36 | 116 | Map Generation > Generate Map From Obstacles advanced | `Create map from obstacles, grid size <p0>, map position (xy) <p1>,<p2>, layers <p3>` |  | numeric expression “Grid size”; numeric expression “X-value of left map position”; numeric expression “Y-value of top map position”; string expression “Layers to test (zero based, separated with comma, i.e. "0,2,3" or -1 for all layes)” | — |  |
| 37 | 117 | Debug > On | `Turn on debug, grid size <p0>, map position (xy) <p1>, <p2>` |  | numeric expression “Grid size”; numeric expression “X-value of left map position”; numeric expression “Y-value of top map position” | — |  |
| 38 | 118 | Debug > Off | `Turn off debug` |  |  | — |  |
| 39 | 119 | Save Path > Save Current Path to Array | `Save path to array <p0>` |  | string expression “ID of the array” | — |  |
| 40 | 120 | Save Path > Delete an Array | `Delete array <p0>` |  | string expression “ID of the array” | — |  |
| 41 | 121 | Save Path > Advance One | `Advance one position in array <p0>` |  | string expression “ID of the array” | — |  |
| 42 | 122 | Save Path > Reverse One | `Reverse one position in array <p0>` |  | string expression “ID of the array” | — |  |
| 43 | 123 | Save Path > Go To Goal | `Set position to start in array <p0>` |  | string expression “ID of the array” | — |  |
| 44 | 124 | Save Path > Go To Start | `Set position to end in array <p0>` |  | string expression “ID of the array” | — |  |
| 45 | 125 | Map Generation > Backup Map | `Backup map` |  |  | — |  |
| 46 | 126 | Map Generation > Restore Map | `Restore map` |  |  | — |  |
| 47 | 127 | Set Map > Auto Grid Size > Set Grid Size | `Set gridsize to <p0>` |  | numeric expression “Grid size” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Map > Get a Position From the Map | `Map(` |  | number “X-pos”; number “Y-pos” | — |  |
| 1 | 81 | Get Current X-pos | `XPos(` |  |  | — |  |
| 2 | 82 | Get Current Y-pos | `YPos(` |  |  | — |  |
| 3 | 83 | Get Map > Get X-pos of Destination | `XDest(` |  |  | — |  |
| 4 | 84 | Get Map > Get Y-pos of Destination | `YDest(` |  |  | — |  |
| 5 | 85 | Get Map > Get X-pos of Start | `XStart(` |  |  | — |  |
| 6 | 86 | Get Map > Get Y-pos of Start | `YStart(` |  |  | — |  |
| 7 | 87 | Get Size > Get X-size of Map | `XMap(` |  |  | — |  |
| 8 | 88 | Get Size > Get Y-size of Map | `YMap(` |  |  | — |  |
| 9 | 89 | Get Current Mode | `DirMode(` |  |  | — |  |
| 10 | 90 | Get Distance to Destination | `Dist(` |  |  | — |  |
| 11 | 91 | Walked Direction | `Dir(` |  |  | — |  |
| 12 | 92 | Walked Direction (MMF) | `MMFDir(` |  |  | — |  |
| 13 | 93 | Walked Direction (Deg) | `DegDir(` |  |  | — |  |
| 14 | 94 | Saved Paths > Get Number of Arrays | `NumberOfArrays(` |  |  | — |  |
| 15 | 95 | Saved Paths > Get Array ID | `ArrayID$(` |  | number “Array Index” → string | — |  |
| 16 | 96 | Saved Paths > Get Path Length | `SavedPathLength(` |  | string “Array ID” | — |  |
| 17 | 97 | Saved Paths > Get X-position | `SavedPathX(` |  | string “Array ID” | — |  |
| 18 | 98 | Saved Paths > Get Y-position | `SavedPathY(` |  | string “Array ID” | — |  |
| 19 | 99 | Saved Paths > Get Start X | `SavedPathStartX(` |  | string “Array ID” | — |  |
| 20 | 100 | Saved Paths > Get Start Y | `SavedPathStartY(` |  | string “Array ID” | — |  |
| 21 | 101 | Saved Paths > Get Goal X | `SavedPathGoalX(` |  | string “Array ID” | — |  |
| 22 | 102 | Saved Paths > Get Goal Y | `SavedPathGoalY(` |  | string “Array ID” | — |  |
