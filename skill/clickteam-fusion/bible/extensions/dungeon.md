# Extension dungeon

- Fichier : `dungeon.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Walls > From room and wall index > Wall is empty? | `<objet>: Room <p0> wall <p1> is empty?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 1 | -82 | Walls > From room and wall index > Wall is solid? | `<objet>: Room <p0> wall <p1> is solid?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 2 | -83 | Walls > From room and wall index > Wall is normal door? | `<objet>: Room <p0> wall <p1> is normal door?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 3 | -84 | Walls > From room and wall index > Wall is secret door? | `<objet>: Room <p0> wall <p1> is secret door?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 4 | -85 | Walls > From room and wall index > Wall is concealed door? | `<objet>: Room <p0> wall <p1> is concealed door?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 5 | -86 | Walls > From room and wall index > Wall is any door? | `<objet>: Room <p0> wall <p1> is any door?` |  | expression numérique « Room index » ; expression numérique « Wall index » | — |  |
| 6 | -87 | Dungeon > Position is block? | `<objet>: (<p0>,<p1>) is block?` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 7 | -88 | Dungeon > Position is room? | `<objet>: (<p0>,<p1>) is room?` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 8 | -89 | Walls > From two positions > Wall is empty? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is empty?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 9 | -90 | Walls > From two positions > Wall is solid? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is solid?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 10 | -91 | Walls > From two positions > Wall is any door? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is any door?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 11 | -92 | Walls > From two positions > Wall is normal door? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is normal door?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 12 | -93 | Walls > From two positions > Wall is secret door? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is secret door?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 13 | -94 | Walls > From two positions > Wall is concealed door? | `<objet>: Wall between (<p0>,<p1>) (<p2>,<p3>) is concealed door?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 14 | -95 | Walls > From two positions > Compare to wall's type | `<objet>: Wall type between (<p0>,<p1>) (<p2>,<p3>) is <p4>?` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; comparaison numérique « Wall type (0: None, 1: Wall, 2: Door, 3: Secret door, 4: Concealed door) » | — |  |
| 15 | -96 | Walls > From room and wall index > Compare to wall's type | `<objet>: Room <p0> wall <p1> type is <p2>?` |  | expression numérique « Room index » ; expression numérique « Wall index » ; comparaison numérique « Wall type (0: None, 1: Wall, 2: Door, 3: Secret door, 4: Concealed door) » | — |  |
| 16 | -97 | Dungeon > Position is passage? | `<objet>: (<p0>,<p1>) is passage?` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 17 | -98 | Dungeon > Compare to block's type | `<objet>: (<p0>,<p1>) is <p2>?` |  | expression numérique « X » ; expression numérique « Y » ; comparaison numérique « Block type (1: Wall, 2: Passage, 4: Room) » | — |  |
| 18 | -99 | Dungeon > Dungeon exists | `<objet>: Dungeon exists` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Painter > Paint | `Paint` |  |  | — |  |
| 1 | 81 | Painter > Set grid size | `Set grid size to <p0> px` |  | expression numérique « Grid size (px) » | — |  |
| 2 | 82 | Painter > Paste into overlay | `Paste into overlay <p0> at (<p1>,<p2>)` |  | expression numérique « Overlay address » ; expression numérique « X » ; expression numérique « Y » | — |  |
| 3 | 83 | Painter > Set border size | `Set border size to <p0> px` |  | expression numérique « Border size (px) » | — |  |
| 4 | 84 | Dungeon > Generate | `Generate` |  |  | — |  |
| 5 | 85 | Settings > Set seed | `Set seed to <p0>` |  | expression numérique « Seed (-1 = Random) » | — |  |
| 6 | 86 | Settings > Set randomness | `Set randomness to <p0>` |  | expression numérique « Randomness (%%) » | — |  |
| 7 | 87 | Settings > Set sparseness | `Set sparseness to <p0>` |  | expression numérique « Sparseness » | — |  |
| 8 | 88 | Settings > Set deadend removal | `Set deadend removal to <p0>` |  | expression numérique « Deadend removal (%%) » | — |  |
| 9 | 89 | Settings > Set start position | `Set start position to (<p0>,<p1>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 10 | 90 | Settings > Set end position | `Set end position to (<p0>,<p1>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 11 | 91 | Settings > Set size | `Set size to (<p0>,<p1>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 12 | 92 | Painter > Set door flag | `Set door flag to <p0>` |  | expression numérique « Door flag (0 = Off, 1 = On) » | — |  |
| 13 | 93 | Painter > Set grid flag | `Set grid flag to <p0>` |  | expression numérique « Grid flag (0 = Off, 1 = On) » | — |  |
| 14 | 94 | Painter > Set wall flag | `Set wall flag to <p0>` |  | expression numérique « Wall flag (0 = Off, 1 = On) » | — |  |
| 15 | 95 | Painter > Set door color | `Set door color to <p0>` |  | couleur « Door color » | — |  |
| 16 | 96 | Painter > Set background color | `Set background color to <p0>` |  | couleur « Background color » | — |  |
| 17 | 97 | Painter > Set block color | `Set block color to <p0>` |  | couleur « Block color » | — |  |
| 18 | 98 | Painter > Set wall color | `Set wall color to <p0>` |  | couleur « Wall color » | — |  |
| 19 | 99 | Painter > Set path color | `Set path color to <p0>` |  | couleur « Path color » | — |  |
| 20 | 100 | Painter > Set room color | `Set room color to <p0>` |  | couleur « Path color » | — |  |
| 21 | 101 | Painter > Set grid color | `Set grid color to <p0>` |  | couleur « Grid color » | — |  |
| 22 | 102 | Settings > Set minimum room count | `Set minimum room count to <p0>` |  | expression numérique « Minimum number of rooms » | — |  |
| 23 | 103 | Settings > Set maximum room count | `Set maximum room count to <p0>` |  | expression numérique « Maximum number of rooms » | — |  |
| 24 | 104 | Settings > Set minimum room size | `Set minimum room size to (<p0>,<p1>)` |  | expression numérique « Minimum width » ; expression numérique « Minimum height » | — |  |
| 25 | 105 | Settings > Set maximum room size | `Set maximum room size to (<p0>,<p1>)` |  | expression numérique « Maximum width » ; expression numérique « Maximum height » | — |  |
| 26 | 106 | Settings > Set secret door percentage | `Set secret door percentage to <p0>` |  | expression numérique « Secret door percentage » (paramètres non fiables) | — |  |
| 27 | 107 | Settings > Set concealed door percentage | `Set concealed door percentage to <p0>` |  | expression numérique « Concealed door percentage » (paramètres non fiables) | — |  |
| 28 | 108 | Dungeon > Find random position | `Find random position of type(s) <p0>` |  | expression numérique « Block types, add together (1: Wall, 2: Passage, 4: Room) » | — |  |
| 29 | 109 | Dungeon > ...using seed | `Find random position of type(s) <p0> using seed <p1>` |  | expression numérique « Block types, add together (1: Wall, 2: Passage, 4: Room) » ; expression numérique « Seed » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dungeon > Graphic at | `GraphicAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 3 | 83 | Rooms > Room count | `NumRooms(` |  |  | — |  |
| 4 | 84 | Rooms > Room X | `RoomX(` |  | nombre « Index » | — |  |
| 5 | 85 | Rooms > Room Y | `RoomY(` |  | nombre « Index » | — |  |
| 6 | 86 | Dungeon > Block type at | `TypeAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 7 | 87 | Dungeon > Size > Width | `XSize(` |  |  | — |  |
| 8 | 88 | Dungeon > Size > Height | `YSize(` |  |  | — |  |
| 9 | 89 | Dungeon > Wall between | `WallBetween(` |  | nombre « X1 » ; nombre « Y1 » ; nombre « X1 » ; nombre « Y1 » | — |  |
| 10 | 90 | Rooms > Room width | `RoomXSize(` |  | nombre « Index » | — |  |
| 11 | 91 | Rooms > Room height | `RoomYSize(` |  | nombre « Index » | — |  |
| 12 | 92 | Rooms > Walls > Wall count | `NumRoomWalls(` |  | nombre « Index » | — |  |
| 13 | 93 | Rooms > Walls > Wall type | `RoomWallType(` |  | nombre « Room index » ; nombre « Wall index » | — |  |
| 14 | 94 | Rooms > Walls > Wall side 1 X | `RoomWallX1(` |  | nombre « Room index » ; nombre « Wall index » | — |  |
| 15 | 95 | Rooms > Walls > Wall side 1 Y | `RoomWallY1(` |  | nombre « Room index » ; nombre « Wall index » | — |  |
| 16 | 96 | Rooms > Walls > Wall side 2 X | `RoomWallX2(` |  | nombre « Room index » ; nombre « Wall index » | — |  |
| 17 | 97 | Rooms > Walls > Wall side 2 Y | `RoomWallY2(` |  | nombre « Room index » ; nombre « Wall index » | — |  |
| 18 | 98 | Dungeon > Size > Actual width | `XActualSize(` |  |  | — |  |
| 19 | 99 | Dungeon > Size > Actual height | `YActualSize(` |  |  | — |  |
| 20 | 100 | Dungeon > Is block at | `IsBlockAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 21 | 101 | Conversion > Actual position | `DungeonPos(` |  | nombre « On-screen position (X or Y) » | — |  |
| 22 | 102 | Conversion > On-screen position | `OnScreenPos(` |  | nombre « Actual position (X or Y) » | — |  |
| 23 | 103 | Dungeon > Found position > Position X | `FoundX(` |  |  | — |  |
| 24 | 104 | Dungeon > Found position > Position Y | `FoundY(` |  |  | — |  |
| 25 | 105 | Painter > Grid size | `GridSize(` |  |  | — |  |
| 26 | 106 | Painter > Width | `PainterWidth(` |  |  | — |  |
| 27 | 107 | Painter > Height | `PainterHeight(` |  |  | — |  |
| 28 | 108 | Conversion > Painter position | `PainterPos(` |  | nombre « On-screen position (X or Y) » | — |  |
| 29 | 109 | Painter > Border size | `BorderSize(` |  |  | — |  |
| 30 | 110 | Random > Random float [0-1] | `RandFClosed(` |  |  | — |  |
| 31 | 111 | Random > Random float (0-1) | `RandFOpen(` |  |  | — |  |
| 32 | 112 | Random > Random integer | `Rand(` |  | nombre « Minimum » ; nombre « Maximum » | — |  |
