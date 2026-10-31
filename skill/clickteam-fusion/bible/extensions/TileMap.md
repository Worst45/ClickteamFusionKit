# Extension TileMap

- Fichier : `TileMap.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Input/Output > File loaded | `<objet>: File loaded` |  |  | — |  |
| 1 | -82 | Input/Output > File saved | `<objet>: File saved` |  |  | — |  |
| 2 | -83 | Input/Output > Loading file failed | `<objet>: Loading file failed` |  |  | — |  |
| 3 | -84 | Input/Output > Saving file failed | `<objet>: Saving file failed` |  |  | — |  |
| 4 | -85 | Properties > On map property | `<objet>: On map property` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | <Map> | `Set layer tile size to (<p0>,<p1>)` |  | expression numérique « Tile width (pixels) » ; expression numérique « Tile height (pixels) » | — |  |
| 1 | 81 | Settings > Resize | `Resize layer to (<p0>, <p1>)` |  | expression numérique « Layer width (tiles) » ; expression numérique « Layer height (tiles) » | — |  |
| 2 | 82 | Settings > Set scroll speed | `Set layer scroll speed to (<p0>, <p1>)` |  | expression numérique « X speed (1.0 = normal) » ; expression numérique « Y speed (1.0 = normal) » | — |  |
| 3 | 83 | Settings > Assign image path | `Assign file path <p0> to tileset` |  | nom de fichier « File path (Relative file path, e.g. "./Tileset.png" or custom identifier) » | — |  |
| 4 | 84 | Settings > Set image from file | `Set tileset image from file <p0>` |  | nom de fichier « File path » | — |  |
| 5 | 85 | Tileset source > Set fill pattern | `Set cursor fill pattern to (<p0>, <p1>)` |  | expression numérique « X pattern (0: Wrap, 1: Repeat, 2: Box, 3: Random) » ; expression numérique « Y pattern (0: Wrap, 1: Repeat, 2: Box, 3: Random) » | — |  |
| 6 | 86 | Tiles > With cursor > Clear tiles | `Clear tiles at cursor` |  |  | — |  |
| 7 | 87 | Tiles > Set tile | `Set layer tile at (<p0>, <p1>) to (<p2>, <p3>)` |  | expression numérique « Tile X » ; expression numérique « Tile Y » ; expression numérique « Tileset X (-1: Empty) » ; expression numérique « Tileset Y (-1: Empty) » | — |  |
| 8 | 88 | Layers > Set current layer | `Set current layer to <p0>` |  | expression numérique « Layer index » | — |  |
| 9 | 89 | Settings > Set wrapping | `Set layer wrapping to (<p0>,<p1>)` |  | expression numérique « Wrap X (0: No, 1: Yes) » ; expression numérique « Wrap Y (0: No, 1: Yes) » | — |  |
| 10 | 90 | Settings > Set offset | `Set layer offset to (<p0>,<p1>)` |  | expression numérique « Offset X (pixels) » ; expression numérique « Offset Y (pixels) » | — |  |
| 11 | 91 | Attach viewport | `Attach viewport <p0>` |  | objet « Viewport object » | — |  |
| 12 | 92 | Tilesets > Add tileset | `Add new tileset` |  |  | — |  |
| 14 | 94 | Settings > Set image from Surface | `Set tileset image from Surface <p0> image <p1>` |  | objet « Surface » ; expression numérique « Image index » | — |  |
| 15 | 95 | Settings > Set collision tileset | `Set layer collision tileset to <p0>` |  | expression numérique « Tileset index (0-255, -1: Same as normal tileset) » | — |  |
| 16 | 96 | Tiles > With cursor > Copy tiles to... > Surface | `Copy layer tiles to Surface <p0> image <p1>` |  | objet « Surface » ; expression numérique « Image index » | — |  |
| 17 | 97 | Tiles > With cursor > Paste tiles from... > Surface | `Paste layer tiles from Surface <p0> image <p1>` |  | objet « Surface » ; expression numérique « Image index » | — |  |
| 18 | 98 | Settings > Set visible | `Set layer visible to <p0>` |  | expression numérique « Visible (0: No, 1: Yes) » | — |  |
| 19 | 99 | Settings > Set opacity | `Set layer opacity to <p0>` |  | expression numérique « Opacity (0.0-1.0) » | — |  |
| 20 | 100 | Tileset source > Select range | `Select tileset range (<p0>, <p1>) => (<p2>, <p3>) for cursor` |  | expression numérique « Top-left tileset X » ; expression numérique « Top-left tileset Y » ; expression numérique « Bottom-right tileset X » ; expression numérique « Bottom-right tileset Y » | — |  |
| 21 | 101 | Input / Output > Load from file | `Load map from file <p0>` |  | nom de fichier « File » | — |  |
| 22 | 102 | Input / Output > Save to file | `Save map to file <p0>` |  | nom de fichier « File » | — |  |
| 23 | 103 | Tiles > Clear tile | `Clear layer tile at (<p0>, <p1>)` |  | expression numérique « Tile X » ; expression numérique « Tile Y » | — |  |
| 24 | 104 | Tiles > Fill area with tile | `Fill layer area (<p0>, <p1>) => (<p2>, <p3>) with tile (<p4>, <p5>)` |  | expression numérique « Top-left tile X » ; expression numérique « Top-left tile Y » ; expression numérique « Bottom-right tile X » ; expression numérique « Bottom-right tile Y » ; expression numérique « Tileset X (-1: Empty) » ; expression numérique « Tileset Y (-1: Empty) » | — |  |
| 25 | 105 | Tilesets > Add tilesets from Surface | `Add tilesets from Surface <p0>` |  | objet « Surface » | — |  |
| 26 | 106 | Input / Output > Set compression level | `Set file compression level to <p0>` |  | expression numérique « Compression level (0-10, 0: None, 6: Default, 10: Best but slowest) » | — |  |
| 27 | 107 | Settings > Set transparent color | `Set tileset transparent color to <p0>` |  | couleur « Transparent color » | — |  |
| 28 | 108 | Tiles > With cursor > Place tiles | `Place tiles at cursor` |  |  | — |  |
| 29 | 109 | Layers > Add layer | `Add layer with size (<p0>, <p1>)` |  | expression numérique « Layer width (tiles) » ; expression numérique « Layer height (tiles) » | — |  |
| 30 | 110 | Tilesets > Set current tileset | `Set current tileset to <p0>` |  | expression numérique « Tileset index » | — |  |
| 31 | 111 | Detach viewport | `Detach viewport <p0>` |  | objet « Viewport object » | — |  |
| 32 | 112 | Tiles > With cursor > Place tiles at position... | `Place tiles at (<p0>, <p1>)` |  | expression numérique « Tile X » ; expression numérique « Tile Y » | — |  |
| 33 | 113 | Layer source > Resize | `Resize cursor to (<p0>, <p1>)` |  | expression numérique « Width in tiles » ; expression numérique « Height in tiles » | — |  |
| 34 | 114 | Tilesets > Swap two tilesets | `Swap tilesets <p0> and <p1>` |  | expression numérique « Tileset A (0-255) » ; expression numérique « Tileset B (0-255) » | — |  |
| 35 | 115 | Layer source > Move | `Move cursor to (<p0>, <p1>)` |  | expression numérique « Tile X » ; expression numérique « Tile Y » | — |  |
| 36 | 116 | Tileset source > Select single | `Select tileset tile (<p0>, <p1>) for cursor` |  | expression numérique « Tileset X (-1: Empty) » ; expression numérique « Tileset Y (-1: Empty) » | — |  |
| 37 | 117 | Settings > Set tileset | `Set layer tileset to <p0>` |  | expression numérique « Tileset index (0-255) » | — |  |
| 38 | 118 | Tiles > With cursor > Paste tiles from... > Another location | `Paste layer tiles from (<p0>, <p1>)` |  | expression numérique « Tile X » ; expression numérique « Tile Y » | — |  |
| 39 | 119 | Layer source > Maximize to current layer | `Maximize cursor` |  |  | — |  |
| 40 | 120 | Input / Output > Set block options | `Set file block options to <p0>` |  | expression numérique « Blocks to load/save, add together (1: Properties, 2: Layers, 4: Tilesets, Default: 2) » | — |  |
| 41 | 121 | Tilesets > Delete tileset | `Delete tileset <p0>` |  | expression numérique « Tileset index » | — |  |
| 42 | 122 | Layers > Delete layer | `Delete layer <p0>` |  | expression numérique « Layer index » | — |  |
| 43 | 123 | Tilesets > Delete all tilesets | `Delete all tilesets` |  |  | — |  |
| 44 | 124 | Layers > Delete all layers | `Delete all layers` |  |  | — |  |
| 45 | 125 | Tiles > Clear layer | `Clear layer` |  |  | — |  |
| 46 | 126 | Tiles > Fill with tile | `Fill layer with tile (<p0>, <p1>)` |  | expression numérique « Tileset X (-1: Empty) » ; expression numérique « Tileset Y (-1: Empty) » | — |  |
| 47 | 127 | Layer source > Select range | `Select (<p0>, <p1>) => (<p2>, <p3>) with cursor` |  | expression numérique « Top-left tile X » ; expression numérique « Top-left tile Y » ; expression numérique « Bottom-right tile X » ; expression numérique « Bottom-right tile Y » | — |  |
| 48 | 128 | Sub-layers > Add sub-layer... > Small (one byte) | `Add small sub-layer` |  |  | — |  |
| 49 | 129 | Sub-layers > With cursor > Fill with integer | `Fill sub-layer <p0> cells at cursor with <p1>` |  | expression numérique « Sub-layer index » ; expression numérique « Value » | — |  |
| 50 | 130 | Input / Output > Set tileset origin | `Set tileset origin to <p0>` |  | expression numérique « Origin (0: Absolute, 1: Application folder, 2: Map file folder, 3: User path, 4: Custom (no physical file) » | — |  |
| 51 | 131 | Input / Output > Set tileset user path | `Set tileset user path to <p0>` |  | expression chaîne « User path (used for the 'User path' tileset path mode) » | — |  |
| 52 | 132 | Properties > Set integer | `Set map property <p0> to integer <p1>` |  | expression chaîne « Property name » ; expression numérique « Integer value » | — |  |
| 53 | 133 | Properties > Set float | `Set map property <p0> to float <p1>` |  | expression chaîne « Property name » ; expression numérique « Float value » | — |  |
| 54 | 134 | Properties > Set string | `Set map property <p0> to <p1>` |  | expression chaîne « Property name » ; expression chaîne « String value » | — |  |
| 55 | 135 | Properties > Delete | `Delete map property <p0>` |  | expression chaîne « Property name » | — |  |
| 56 | 136 | Properties > Delete all | `Delete all map properties` |  |  | — |  |
| 57 | 137 | Properties > Iterate | `Iterate over map properties` |  |  | — |  |
| 58 | 138 | Sub-layers > Add sub-layer... > With default value... > Custom | `Add sub-layer with cell size <p0> and default value <p1>` |  | expression numérique « Cell size in bytes » ; expression numérique « Default value, used for new and blank tiles » | — |  |
| 59 | 139 | Sub-layers > Set integer | `Set sub-layer <p0> value at (<p1>, <p2>) to <p3>` |  | expression numérique « Sub-layer index » ; expression numérique « Cell X » ; expression numérique « Cell Y » ; expression numérique « Value » | — |  |
| 60 | 140 | Sub-layers > Add sub-layer... > Medium (two bytes) | `Add medium sub-layer` |  |  | — |  |
| 61 | 141 | Sub-layers > Add sub-layer... > Large (four bytes) | `Add large sub-layer` |  |  | — |  |
| 62 | 142 | Sub-layers > Add sub-layer... > With default value... > Small | `Add small sub-layer with default value <p0>` |  | expression numérique « Default value, used for new and blank tiles » | — |  |
| 63 | 143 | Sub-layers > Add sub-layer... > Custom | `Add sub-layer with cell size <p0>` |  | expression numérique « Cell size in bytes (E.g. 1: Small, 2: Medium, 4: Large) » | — |  |
| 64 | 144 | Sub-layers > Set float | `Set sub-layer <p0> value at (<p1>, <p2>) to float <p3>` |  | expression numérique « Sub-layer index » ; expression numérique « Cell X » ; expression numérique « Cell Y » ; expression numérique « Float value » | — |  |
| 65 | 145 | Sub-layers > Fill with integer | `Fill sub-layer <p0> with value <p1>` |  | expression numérique « Sub-layer index » ; expression numérique « Value » | — |  |
| 66 | 146 | Sub-layers > Fill with float | `Fill sub-layer <p0> with float value <p1>` |  | expression numérique « Sub-layer index » ; expression numérique « Float value » | — |  |
| 67 | 147 | Sub-layers > Clear | `Clear sub-layer <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 68 | 148 | Settings > Sub-layer links > Set animation index | `Link animation index to sub-layer <p0>` |  | expression numérique « Animation sub-layer index (-1: None) » | — |  |
| 69 | 149 | Settings > Sub-layer links > Set tileset | `Link tileset index to sub-layer <p0>` |  | expression numérique « Tileset sub-layer index (-1: None) » | — |  |
| 70 | 150 | Sub-layers > With cursor > Fill with float | `Fill sub-layer <p0> cells at cursor with <p1>` |  | expression numérique « Sub-layer index » ; expression numérique « Value » | — |  |
| 71 | 151 | Sub-layers > Randomize | `Randomize sub-layer <p0> with range [<p1>,<p2>]` |  | expression numérique « Sub-layer index » ; expression numérique « Inclusive minimum » ; expression numérique « Inclusive maximum » | — |  |
| 72 | 152 | Settings > Sub-layer links > Set animation frame offset | `Link anim frame offset to sub-layer <p0>` |  | expression numérique « Animation frame offset sub-layer index (-1: None) » | — |  |
| 73 | 153 | Layers > Insert layer | `Insert layer with size (<p1>, <p2>) at <p0>` |  | expression numérique « Layer index to insert at » ; expression numérique « Layer width (tiles) » ; expression numérique « Layer height (tiles) » | — |  |
| 74 | 154 | Sub-layers > Delete all | `Delete all sub-layers` |  |  | — |  |
| 75 | 155 | Sub-layers > Delete sub-layer | `Delete sub-layer <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 76 | 156 | Tiles > Replace tile | `Replace tile (<p0>, <p1>) by (<p2>, <p3>)` |  | expression numérique « Tileset X of tile to replace » ; expression numérique « Tileset Y of tile to replace » ; expression numérique « New tileset X (-1: Empty) » ; expression numérique « New tileset Y (-1: Empty) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Tilesets > Width | `TilesetWidth(` |  | nombre « Tileset index » | — |  |
| 1 | 81 | Tilesets > Height | `TilesetHeight(` |  | nombre « Tileset index » | — |  |
| 2 | 82 | Layers > Size > Width | `LayerWidth(` |  | nombre « Layer index » | — |  |
| 3 | 83 | Layers > Size > Height | `LayerHeight(` |  | nombre « Layer index » | — |  |
| 4 | 84 | Layers > Wrapping > X | `LayerWrapX(` |  | nombre « Layer index » | — |  |
| 5 | 85 | Layers > Wrapping > Y | `LayerWrapY(` |  | nombre « Layer index » | — |  |
| 6 | 86 | Layers > Offset > X | `LayerOffsetX(` |  | nombre « Layer index » | — |  |
| 7 | 87 | Layers > Offset > Y | `LayerOffsetY(` |  | nombre « Layer index » | — |  |
| 8 | 88 | Layers > Scroll speed > X | `LayerScrollX(` |  | nombre « Layer index » | — |  |
| 9 | 89 | Layers > Scroll speed > Y | `LayerScrollY(` |  | nombre « Layer index » | — |  |
| 10 | 90 | Layers > Tile size > Width | `LayerTileWidth(` |  | nombre « Layer index » | — |  |
| 11 | 91 | Layers > Tile size > Height | `LayerTileHeight(` |  | nombre « Layer index » | — |  |
| 12 | 92 | Layers > Tile at position... > Tileset X | `LayerTilesetX(` |  | nombre « Layer index » ; nombre « Tile X » ; nombre « Tile Y » | — |  |
| 13 | 93 | Layers > Tile at position... > Tileset Y | `LayerTilesetY(` |  | nombre « Layer index » ; nombre « Tile X » ; nombre « Tile Y » | — |  |
| 14 | 94 | Layers > Tile at position... > Compound value | `LayerTile(` |  | nombre « Layer index » ; nombre « Tile X » ; nombre « Tile Y » | — |  |
| 15 | 95 | Layers > Count | `LayerCount(` |  |  | — |  |
| 16 | 96 | Tilesets > Count | `TilesetCount(` |  |  | — |  |
| 18 | 98 | Tilesets > Absolute path | `TilesetAbsPath$(` |  | nombre « Tileset index » → chaîne | — |  |
| 19 | 99 | Properties > Integer value | `MapIntProp(` |  | chaîne « Property name » | — |  |
| 20 | 100 | Properties > Float value | `MapFloatProp(` |  | chaîne « Property name » | — |  |
| 21 | 101 | Properties > String value | `MapStrProp$(` |  | chaîne « Property name » → chaîne | — |  |
| 22 | 102 | Properties > Iterated property | `MapIterProp$(` |  | → chaîne | — |  |
| 24 | 104 | Layers > Sub-layers > Integer at position | `SubLayerIntVal(` |  | nombre « Layer index » ; nombre « Sub-layer index » ; nombre « Tile X » ; nombre « Tile Y » | — |  |
| 25 | 105 | Layers > Sub-layers > Float at position | `SubLayerFloatVal(` |  | nombre « Layer index » ; nombre « Sub-layer index » ; nombre « Tile X » ; nombre « Tile Y » | — |  |
| 26 | 106 | Layers > Sub-layers > Count | `SubLayerCellSize(` |  | nombre « Layer index » ; nombre « Sub-layer index » | — |  |
| 27 | 107 | Layers > Sub-layers > Cell size | `CursorX(` |  |  | — |  |
| 28 | 108 | Tile cursor > X | `CursorY(` |  |  | — |  |
| 29 | 109 | Tile cursor > Y | `CursorWidth(` |  |  | — |  |
| 30 | 110 | Tile cursor > Width | `CursorHeight(` |  |  | — |  |
