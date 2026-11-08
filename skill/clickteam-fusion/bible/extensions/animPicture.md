# Extension animPicture

- File: `animPicture.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Identifier Exists in Cache? | `<object>: <p0> Exists in Cache` |  | string expression “Identifier” |
| 1 | -82 | Is Animation Playing? | `<object>: <p0> Animation is Playing?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Cahce > Cache Tileset | `Cache Tileset (<p0>) as (<p1>), Tile size (<p2>, <p3>)` |  | file name “File to Cahce”; string expression “Identifier”; numeric expression “Tile Width”; numeric expression “Tile Height” |
| 1 | 81 | Cahce > Remove Image from Cache | `Uncache Image (<p0>)` |  | string expression “Identifier” |
| 3 | 83 | Scale and Rotation > Set Rotoscale State | `Set Rotoscale State (<p0>)` |  | numeric expression “State (1=Enabled, 0=Disabled)” |
| 4 | 84 | Scale and Rotation > Set Angle | `Set Angle (<p0>)` |  | numeric expression “Angle” |
| 5 | 85 | Scale and Rotation > Set Scale | `Set Scale (<p0>)` |  | numeric expression “Scale” |
| 6 | 86 | Scale and Rotation > Set X-Scale | `Set X-Scale (<p0>)` |  | numeric expression “Scale” |
| 7 | 87 | Scale and Rotation > Set Y-Scale | `Set Y-Scale (<p0>)` |  | numeric expression “Scale” |
| 8 | 88 | Hotspot > Set Hotspot | `Set Hotspot (<p0>, <p1>)` |  | numeric expression “Hotspot X”; numeric expression “Hotspot Y” |
| 9 | 89 | Hotspot > Set Hotspot X | `Set Hotspot X (<p0>)` |  | numeric expression “Hotspot X” |
| 10 | 90 | Hotspot > Set Hotspot Y | `Set Hotspot Y (<p0>)` |  | numeric expression “Hotspot Y” |
| 11 | 91 | Cahce > Cache Image from Alphachannel and Color | `Cache Image as Alphachannel of (<p0>) as (<p1>) with color (<p2>)` |  | file name “File to Cahce”; string expression “Identifier”; color “Color”; numeric expression “Inverse Alpha” |
| 12 | 92 | Cahce > Cache Image | `Cache Image (<p0>) as (<p1>)` |  | file name “File to Cahce”; string expression “Identifier” |
| 13 | 93 | Cahce > Cache Tileset from Alphachannel and Color | `Cache Tileset as Alphachannel of (<p0>) as (<p1>) with color (<p4>), Tile size (<p2>, <p3>)` |  | file name “File to Cahce”; string expression “Identifier”; numeric expression “Tile Width”; numeric expression “Tile Height”; color “Color”; numeric expression “Inverse Alpha” |
| 14 | 94 | Animation > Set Image | `Set Current Image to (<p0>)` |  | string expression “Identifier” |
| 15 | 95 | Animation > Set Tile | `Set Current Tile to (<p0>)` |  | numeric expression “Tile ID in Tileset” |
| 16 | 96 | Animation > Animate | `Animate - Start (<p0>) - End (<p1>) - Loop Back to (<p2>) - Speed (<p3>), Loop (<p4>)` |  | numeric expression “First Tile”; numeric expression “Last Tile”; numeric expression “Loop Back to”; numeric expression “Speed”; numeric expression “Loop (0=Infinity)” |
| 17 | 97 | Animation > Pause Animation | `Pause Animation` |  |  |
| 18 | 98 | Animation > Resume Animation | `Resume Animation` |  |  |
| 19 | 99 | Cahce > Set Color of Cache | `Set Color of Cache (<p0>) to Color (<p1>)` |  | string expression “Identifier”; color “Color” |
| 20 | 100 | Hotspot > Center Hotspot on Object | `Center Hotspot on Object` |  |  |
| 21 | 101 | Cahce > Clear Cache | `Clear Cache` |  |  |
| 22 | 102 | Cahce > Cache Image from Overlay | `Cache Image from Overlay as (<p1>)` |  | numeric expression “Overlay Adress”; string expression “Identifier” |
| 23 | 103 | Cahce > Cache Tileset from Overlay | `Cache Tileset from Overlay as (<p1>), Tile size (<p2>, <p3>)` |  | numeric expression “Overlay Adress”; string expression “Identifier”; numeric expression “Tile Width”; numeric expression “Tile Height” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Animation > Get Current Image | `curImage$(` |  | → string |
| 1 | 81 | Animation > Get Current Tile | `curTile(` |  |  |
| 2 | 82 | Hotspot > Get Hotspot X | `hotspotX(` |  |  |
| 3 | 83 | Hotspot > Get Hotspot Y | `hotspotY(` |  |  |
| 4 | 84 | Scale and Rotation > Get Rotoscale State | `rotoscaleState(` |  |  |
| 5 | 85 | Scale and Rotation > Get Angle | `angle(` |  |  |
| 6 | 86 | Scale and Rotation > Get X-Scale | `scaleX(` |  |  |
| 7 | 87 | Scale and Rotation > Get Y-Scale | `scaleY(` |  |  |
| 8 | 88 | Size > Get Original Width | `originalWidth(` |  |  |
| 9 | 89 | Size > Get Original Height | `originalHeight(` |  |  |
