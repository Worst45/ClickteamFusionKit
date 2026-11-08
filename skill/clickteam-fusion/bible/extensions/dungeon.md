# Extension dungeon

- File: `dungeon.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Walls > From room and wall index > Wall is empty? | `<object>: Room <p0> wall <p1> is empty?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 1 | -82 | Walls > From room and wall index > Wall is solid? | `<object>: Room <p0> wall <p1> is solid?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 2 | -83 | Walls > From room and wall index > Wall is normal door? | `<object>: Room <p0> wall <p1> is normal door?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 3 | -84 | Walls > From room and wall index > Wall is secret door? | `<object>: Room <p0> wall <p1> is secret door?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 4 | -85 | Walls > From room and wall index > Wall is concealed door? | `<object>: Room <p0> wall <p1> is concealed door?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 5 | -86 | Walls > From room and wall index > Wall is any door? | `<object>: Room <p0> wall <p1> is any door?` |  | numeric expression “Room index”; numeric expression “Wall index” |
| 6 | -87 | Dungeon > Position is block? | `<object>: (<p0>,<p1>) is block?` |  | numeric expression “X”; numeric expression “Y” |
| 7 | -88 | Dungeon > Position is room? | `<object>: (<p0>,<p1>) is room?` |  | numeric expression “X”; numeric expression “Y” |
| 8 | -89 | Walls > From two positions > Wall is empty? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is empty?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 9 | -90 | Walls > From two positions > Wall is solid? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is solid?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 10 | -91 | Walls > From two positions > Wall is any door? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is any door?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 11 | -92 | Walls > From two positions > Wall is normal door? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is normal door?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 12 | -93 | Walls > From two positions > Wall is secret door? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is secret door?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 13 | -94 | Walls > From two positions > Wall is concealed door? | `<object>: Wall between (<p0>,<p1>) (<p2>,<p3>) is concealed door?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” |
| 14 | -95 | Walls > From two positions > Compare to wall's type | `<object>: Wall type between (<p0>,<p1>) (<p2>,<p3>) is <p4>?` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric comparison “Wall type (0: None, 1: Wall, 2: Door, 3: Secret door, 4: Concealed door)” |
| 15 | -96 | Walls > From room and wall index > Compare to wall's type | `<object>: Room <p0> wall <p1> type is <p2>?` |  | numeric expression “Room index”; numeric expression “Wall index”; numeric comparison “Wall type (0: None, 1: Wall, 2: Door, 3: Secret door, 4: Concealed door)” |
| 16 | -97 | Dungeon > Position is passage? | `<object>: (<p0>,<p1>) is passage?` |  | numeric expression “X”; numeric expression “Y” |
| 17 | -98 | Dungeon > Compare to block's type | `<object>: (<p0>,<p1>) is <p2>?` |  | numeric expression “X”; numeric expression “Y”; numeric comparison “Block type (1: Wall, 2: Passage, 4: Room)” |
| 18 | -99 | Dungeon > Dungeon exists | `<object>: Dungeon exists` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Painter > Paint | `Paint` |  |  |
| 1 | 81 | Painter > Set grid size | `Set grid size to <p0> px` |  | numeric expression “Grid size (px)” |
| 2 | 82 | Painter > Paste into overlay | `Paste into overlay <p0> at (<p1>,<p2>)` |  | numeric expression “Overlay address”; numeric expression “X”; numeric expression “Y” |
| 3 | 83 | Painter > Set border size | `Set border size to <p0> px` |  | numeric expression “Border size (px)” |
| 4 | 84 | Dungeon > Generate | `Generate` |  |  |
| 5 | 85 | Settings > Set seed | `Set seed to <p0>` |  | numeric expression “Seed (-1 = Random)” |
| 6 | 86 | Settings > Set randomness | `Set randomness to <p0>` |  | numeric expression “Randomness (%%)” |
| 7 | 87 | Settings > Set sparseness | `Set sparseness to <p0>` |  | numeric expression “Sparseness” |
| 8 | 88 | Settings > Set deadend removal | `Set deadend removal to <p0>` |  | numeric expression “Deadend removal (%%)” |
| 9 | 89 | Settings > Set start position | `Set start position to (<p0>,<p1>)` |  | numeric expression “X”; numeric expression “Y” |
| 10 | 90 | Settings > Set end position | `Set end position to (<p0>,<p1>)` |  | numeric expression “X”; numeric expression “Y” |
| 11 | 91 | Settings > Set size | `Set size to (<p0>,<p1>)` |  | numeric expression “X”; numeric expression “Y” |
| 12 | 92 | Painter > Set door flag | `Set door flag to <p0>` |  | numeric expression “Door flag (0 = Off, 1 = On)” |
| 13 | 93 | Painter > Set grid flag | `Set grid flag to <p0>` |  | numeric expression “Grid flag (0 = Off, 1 = On)” |
| 14 | 94 | Painter > Set wall flag | `Set wall flag to <p0>` |  | numeric expression “Wall flag (0 = Off, 1 = On)” |
| 15 | 95 | Painter > Set door color | `Set door color to <p0>` |  | color “Door color” |
| 16 | 96 | Painter > Set background color | `Set background color to <p0>` |  | color “Background color” |
| 17 | 97 | Painter > Set block color | `Set block color to <p0>` |  | color “Block color” |
| 18 | 98 | Painter > Set wall color | `Set wall color to <p0>` |  | color “Wall color” |
| 19 | 99 | Painter > Set path color | `Set path color to <p0>` |  | color “Path color” |
| 20 | 100 | Painter > Set room color | `Set room color to <p0>` |  | color “Path color” |
| 21 | 101 | Painter > Set grid color | `Set grid color to <p0>` |  | color “Grid color” |
| 22 | 102 | Settings > Set minimum room count | `Set minimum room count to <p0>` |  | numeric expression “Minimum number of rooms” |
| 23 | 103 | Settings > Set maximum room count | `Set maximum room count to <p0>` |  | numeric expression “Maximum number of rooms” |
| 24 | 104 | Settings > Set minimum room size | `Set minimum room size to (<p0>,<p1>)` |  | numeric expression “Minimum width”; numeric expression “Minimum height” |
| 25 | 105 | Settings > Set maximum room size | `Set maximum room size to (<p0>,<p1>)` |  | numeric expression “Maximum width”; numeric expression “Maximum height” |
| 26 | 106 | Settings > Set secret door percentage | `Set secret door percentage to <p0>` |  | numeric expression “Secret door percentage” (unreliable parameters) |
| 27 | 107 | Settings > Set concealed door percentage | `Set concealed door percentage to <p0>` |  | numeric expression “Concealed door percentage” (unreliable parameters) |
| 28 | 108 | Dungeon > Find random position | `Find random position of type(s) <p0>` |  | numeric expression “Block types, add together (1: Wall, 2: Passage, 4: Room)” |
| 29 | 109 | Dungeon > ...using seed | `Find random position of type(s) <p0> using seed <p1>` |  | numeric expression “Block types, add together (1: Wall, 2: Passage, 4: Room)”; numeric expression “Seed” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Dungeon > Graphic at | `GraphicAt(` |  | number “X”; number “Y” |
| 3 | 83 | Rooms > Room count | `NumRooms(` |  |  |
| 4 | 84 | Rooms > Room X | `RoomX(` |  | number “Index” |
| 5 | 85 | Rooms > Room Y | `RoomY(` |  | number “Index” |
| 6 | 86 | Dungeon > Block type at | `TypeAt(` |  | number “X”; number “Y” |
| 7 | 87 | Dungeon > Size > Width | `XSize(` |  |  |
| 8 | 88 | Dungeon > Size > Height | `YSize(` |  |  |
| 9 | 89 | Dungeon > Wall between | `WallBetween(` |  | number “X1”; number “Y1”; number “X1”; number “Y1” |
| 10 | 90 | Rooms > Room width | `RoomXSize(` |  | number “Index” |
| 11 | 91 | Rooms > Room height | `RoomYSize(` |  | number “Index” |
| 12 | 92 | Rooms > Walls > Wall count | `NumRoomWalls(` |  | number “Index” |
| 13 | 93 | Rooms > Walls > Wall type | `RoomWallType(` |  | number “Room index”; number “Wall index” |
| 14 | 94 | Rooms > Walls > Wall side 1 X | `RoomWallX1(` |  | number “Room index”; number “Wall index” |
| 15 | 95 | Rooms > Walls > Wall side 1 Y | `RoomWallY1(` |  | number “Room index”; number “Wall index” |
| 16 | 96 | Rooms > Walls > Wall side 2 X | `RoomWallX2(` |  | number “Room index”; number “Wall index” |
| 17 | 97 | Rooms > Walls > Wall side 2 Y | `RoomWallY2(` |  | number “Room index”; number “Wall index” |
| 18 | 98 | Dungeon > Size > Actual width | `XActualSize(` |  |  |
| 19 | 99 | Dungeon > Size > Actual height | `YActualSize(` |  |  |
| 20 | 100 | Dungeon > Is block at | `IsBlockAt(` |  | number “X”; number “Y” |
| 21 | 101 | Conversion > Actual position | `DungeonPos(` |  | number “On-screen position (X or Y)” |
| 22 | 102 | Conversion > On-screen position | `OnScreenPos(` |  | number “Actual position (X or Y)” |
| 23 | 103 | Dungeon > Found position > Position X | `FoundX(` |  |  |
| 24 | 104 | Dungeon > Found position > Position Y | `FoundY(` |  |  |
| 25 | 105 | Painter > Grid size | `GridSize(` |  |  |
| 26 | 106 | Painter > Width | `PainterWidth(` |  |  |
| 27 | 107 | Painter > Height | `PainterHeight(` |  |  |
| 28 | 108 | Conversion > Painter position | `PainterPos(` |  | number “On-screen position (X or Y)” |
| 29 | 109 | Painter > Border size | `BorderSize(` |  |  |
| 30 | 110 | Random > Random float [0-1] | `RandFClosed(` |  |  |
| 31 | 111 | Random > Random float (0-1) | `RandFOpen(` |  |  |
| 32 | 112 | Random > Random integer | `Rand(` |  | number “Minimum”; number “Maximum” |
