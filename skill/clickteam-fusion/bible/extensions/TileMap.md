# Extension TileMap

- File: `TileMap.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Input/Output > File loaded | `<object>: File loaded` |  |  | — |  |
| 1 | -82 | Input/Output > File saved | `<object>: File saved` |  |  | — |  |
| 2 | -83 | Input/Output > Loading file failed | `<object>: Loading file failed` |  |  | — |  |
| 3 | -84 | Input/Output > Saving file failed | `<object>: Saving file failed` |  |  | — |  |
| 4 | -85 | Properties > On map property | `<object>: On map property` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | <Map> | `Set layer tile size to (<p0>,<p1>)` |  | numeric expression “Tile width (pixels)”; numeric expression “Tile height (pixels)” | — |  |
| 1 | 81 | Settings > Resize | `Resize layer to (<p0>, <p1>)` |  | numeric expression “Layer width (tiles)”; numeric expression “Layer height (tiles)” | — |  |
| 2 | 82 | Settings > Set scroll speed | `Set layer scroll speed to (<p0>, <p1>)` |  | numeric expression “X speed (1.0 = normal)”; numeric expression “Y speed (1.0 = normal)” | — |  |
| 3 | 83 | Settings > Assign image path | `Assign file path <p0> to tileset` |  | file name “File path (Relative file path, e.g. "./Tileset.png" or custom identifier)” | — |  |
| 4 | 84 | Settings > Set image from file | `Set tileset image from file <p0>` |  | file name “File path” | — |  |
| 5 | 85 | Tileset source > Set fill pattern | `Set cursor fill pattern to (<p0>, <p1>)` |  | numeric expression “X pattern (0: Wrap, 1: Repeat, 2: Box, 3: Random)”; numeric expression “Y pattern (0: Wrap, 1: Repeat, 2: Box, 3: Random)” | — |  |
| 6 | 86 | Tiles > With cursor > Clear tiles | `Clear tiles at cursor` |  |  | — |  |
| 7 | 87 | Tiles > Set tile | `Set layer tile at (<p0>, <p1>) to (<p2>, <p3>)` |  | numeric expression “Tile X”; numeric expression “Tile Y”; numeric expression “Tileset X (-1: Empty)”; numeric expression “Tileset Y (-1: Empty)” | — |  |
| 8 | 88 | Layers > Set current layer | `Set current layer to <p0>` |  | numeric expression “Layer index” | — |  |
| 9 | 89 | Settings > Set wrapping | `Set layer wrapping to (<p0>,<p1>)` |  | numeric expression “Wrap X (0: No, 1: Yes)”; numeric expression “Wrap Y (0: No, 1: Yes)” | — |  |
| 10 | 90 | Settings > Set offset | `Set layer offset to (<p0>,<p1>)` |  | numeric expression “Offset X (pixels)”; numeric expression “Offset Y (pixels)” | — |  |
| 11 | 91 | Attach viewport | `Attach viewport <p0>` |  | object “Viewport object” | — |  |
| 12 | 92 | Tilesets > Add tileset | `Add new tileset` |  |  | — |  |
| 14 | 94 | Settings > Set image from Surface | `Set tileset image from Surface <p0> image <p1>` |  | object “Surface”; numeric expression “Image index” | — |  |
| 15 | 95 | Settings > Set collision tileset | `Set layer collision tileset to <p0>` |  | numeric expression “Tileset index (0-255, -1: Same as normal tileset)” | — |  |
| 16 | 96 | Tiles > With cursor > Copy tiles to... > Surface | `Copy layer tiles to Surface <p0> image <p1>` |  | object “Surface”; numeric expression “Image index” | — |  |
| 17 | 97 | Tiles > With cursor > Paste tiles from... > Surface | `Paste layer tiles from Surface <p0> image <p1>` |  | object “Surface”; numeric expression “Image index” | — |  |
| 18 | 98 | Settings > Set visible | `Set layer visible to <p0>` |  | numeric expression “Visible (0: No, 1: Yes)” | — |  |
| 19 | 99 | Settings > Set opacity | `Set layer opacity to <p0>` |  | numeric expression “Opacity (0.0-1.0)” | — |  |
| 20 | 100 | Tileset source > Select range | `Select tileset range (<p0>, <p1>) => (<p2>, <p3>) for cursor` |  | numeric expression “Top-left tileset X”; numeric expression “Top-left tileset Y”; numeric expression “Bottom-right tileset X”; numeric expression “Bottom-right tileset Y” | — |  |
| 21 | 101 | Input / Output > Load from file | `Load map from file <p0>` |  | file name “File” | — |  |
| 22 | 102 | Input / Output > Save to file | `Save map to file <p0>` |  | file name “File” | — |  |
| 23 | 103 | Tiles > Clear tile | `Clear layer tile at (<p0>, <p1>)` |  | numeric expression “Tile X”; numeric expression “Tile Y” | — |  |
| 24 | 104 | Tiles > Fill area with tile | `Fill layer area (<p0>, <p1>) => (<p2>, <p3>) with tile (<p4>, <p5>)` |  | numeric expression “Top-left tile X”; numeric expression “Top-left tile Y”; numeric expression “Bottom-right tile X”; numeric expression “Bottom-right tile Y”; numeric expression “Tileset X (-1: Empty)”; numeric expression “Tileset Y (-1: Empty)” | — |  |
| 25 | 105 | Tilesets > Add tilesets from Surface | `Add tilesets from Surface <p0>` |  | object “Surface” | — |  |
| 26 | 106 | Input / Output > Set compression level | `Set file compression level to <p0>` |  | numeric expression “Compression level (0-10, 0: None, 6: Default, 10: Best but slowest)” | — |  |
| 27 | 107 | Settings > Set transparent color | `Set tileset transparent color to <p0>` |  | color “Transparent color” | — |  |
| 28 | 108 | Tiles > With cursor > Place tiles | `Place tiles at cursor` |  |  | — |  |
| 29 | 109 | Layers > Add layer | `Add layer with size (<p0>, <p1>)` |  | numeric expression “Layer width (tiles)”; numeric expression “Layer height (tiles)” | — |  |
| 30 | 110 | Tilesets > Set current tileset | `Set current tileset to <p0>` |  | numeric expression “Tileset index” | — |  |
| 31 | 111 | Detach viewport | `Detach viewport <p0>` |  | object “Viewport object” | — |  |
| 32 | 112 | Tiles > With cursor > Place tiles at position... | `Place tiles at (<p0>, <p1>)` |  | numeric expression “Tile X”; numeric expression “Tile Y” | — |  |
| 33 | 113 | Layer source > Resize | `Resize cursor to (<p0>, <p1>)` |  | numeric expression “Width in tiles”; numeric expression “Height in tiles” | — |  |
| 34 | 114 | Tilesets > Swap two tilesets | `Swap tilesets <p0> and <p1>` |  | numeric expression “Tileset A (0-255)”; numeric expression “Tileset B (0-255)” | — |  |
| 35 | 115 | Layer source > Move | `Move cursor to (<p0>, <p1>)` |  | numeric expression “Tile X”; numeric expression “Tile Y” | — |  |
| 36 | 116 | Tileset source > Select single | `Select tileset tile (<p0>, <p1>) for cursor` |  | numeric expression “Tileset X (-1: Empty)”; numeric expression “Tileset Y (-1: Empty)” | — |  |
| 37 | 117 | Settings > Set tileset | `Set layer tileset to <p0>` |  | numeric expression “Tileset index (0-255)” | — |  |
| 38 | 118 | Tiles > With cursor > Paste tiles from... > Another location | `Paste layer tiles from (<p0>, <p1>)` |  | numeric expression “Tile X”; numeric expression “Tile Y” | — |  |
| 39 | 119 | Layer source > Maximize to current layer | `Maximize cursor` |  |  | — |  |
| 40 | 120 | Input / Output > Set block options | `Set file block options to <p0>` |  | numeric expression “Blocks to load/save, add together (1: Properties, 2: Layers, 4: Tilesets, Default: 2)” | — |  |
| 41 | 121 | Tilesets > Delete tileset | `Delete tileset <p0>` |  | numeric expression “Tileset index” | — |  |
| 42 | 122 | Layers > Delete layer | `Delete layer <p0>` |  | numeric expression “Layer index” | — |  |
| 43 | 123 | Tilesets > Delete all tilesets | `Delete all tilesets` |  |  | — |  |
| 44 | 124 | Layers > Delete all layers | `Delete all layers` |  |  | — |  |
| 45 | 125 | Tiles > Clear layer | `Clear layer` |  |  | — |  |
| 46 | 126 | Tiles > Fill with tile | `Fill layer with tile (<p0>, <p1>)` |  | numeric expression “Tileset X (-1: Empty)”; numeric expression “Tileset Y (-1: Empty)” | — |  |
| 47 | 127 | Layer source > Select range | `Select (<p0>, <p1>) => (<p2>, <p3>) with cursor` |  | numeric expression “Top-left tile X”; numeric expression “Top-left tile Y”; numeric expression “Bottom-right tile X”; numeric expression “Bottom-right tile Y” | — |  |
| 48 | 128 | Sub-layers > Add sub-layer... > Small (one byte) | `Add small sub-layer` |  |  | — |  |
| 49 | 129 | Sub-layers > With cursor > Fill with integer | `Fill sub-layer <p0> cells at cursor with <p1>` |  | numeric expression “Sub-layer index”; numeric expression “Value” | — |  |
| 50 | 130 | Input / Output > Set tileset origin | `Set tileset origin to <p0>` |  | numeric expression “Origin (0: Absolute, 1: Application folder, 2: Map file folder, 3: User path, 4: Custom (no physical file)” | — |  |
| 51 | 131 | Input / Output > Set tileset user path | `Set tileset user path to <p0>` |  | string expression “User path (used for the 'User path' tileset path mode)” | — |  |
| 52 | 132 | Properties > Set integer | `Set map property <p0> to integer <p1>` |  | string expression “Property name”; numeric expression “Integer value” | — |  |
| 53 | 133 | Properties > Set float | `Set map property <p0> to float <p1>` |  | string expression “Property name”; numeric expression “Float value” | — |  |
| 54 | 134 | Properties > Set string | `Set map property <p0> to <p1>` |  | string expression “Property name”; string expression “String value” | — |  |
| 55 | 135 | Properties > Delete | `Delete map property <p0>` |  | string expression “Property name” | — |  |
| 56 | 136 | Properties > Delete all | `Delete all map properties` |  |  | — |  |
| 57 | 137 | Properties > Iterate | `Iterate over map properties` |  |  | — |  |
| 58 | 138 | Sub-layers > Add sub-layer... > With default value... > Custom | `Add sub-layer with cell size <p0> and default value <p1>` |  | numeric expression “Cell size in bytes”; numeric expression “Default value, used for new and blank tiles” | — |  |
| 59 | 139 | Sub-layers > Set integer | `Set sub-layer <p0> value at (<p1>, <p2>) to <p3>` |  | numeric expression “Sub-layer index”; numeric expression “Cell X”; numeric expression “Cell Y”; numeric expression “Value” | — |  |
| 60 | 140 | Sub-layers > Add sub-layer... > Medium (two bytes) | `Add medium sub-layer` |  |  | — |  |
| 61 | 141 | Sub-layers > Add sub-layer... > Large (four bytes) | `Add large sub-layer` |  |  | — |  |
| 62 | 142 | Sub-layers > Add sub-layer... > With default value... > Small | `Add small sub-layer with default value <p0>` |  | numeric expression “Default value, used for new and blank tiles” | — |  |
| 63 | 143 | Sub-layers > Add sub-layer... > Custom | `Add sub-layer with cell size <p0>` |  | numeric expression “Cell size in bytes (E.g. 1: Small, 2: Medium, 4: Large)” | — |  |
| 64 | 144 | Sub-layers > Set float | `Set sub-layer <p0> value at (<p1>, <p2>) to float <p3>` |  | numeric expression “Sub-layer index”; numeric expression “Cell X”; numeric expression “Cell Y”; numeric expression “Float value” | — |  |
| 65 | 145 | Sub-layers > Fill with integer | `Fill sub-layer <p0> with value <p1>` |  | numeric expression “Sub-layer index”; numeric expression “Value” | — |  |
| 66 | 146 | Sub-layers > Fill with float | `Fill sub-layer <p0> with float value <p1>` |  | numeric expression “Sub-layer index”; numeric expression “Float value” | — |  |
| 67 | 147 | Sub-layers > Clear | `Clear sub-layer <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 68 | 148 | Settings > Sub-layer links > Set animation index | `Link animation index to sub-layer <p0>` |  | numeric expression “Animation sub-layer index (-1: None)” | — |  |
| 69 | 149 | Settings > Sub-layer links > Set tileset | `Link tileset index to sub-layer <p0>` |  | numeric expression “Tileset sub-layer index (-1: None)” | — |  |
| 70 | 150 | Sub-layers > With cursor > Fill with float | `Fill sub-layer <p0> cells at cursor with <p1>` |  | numeric expression “Sub-layer index”; numeric expression “Value” | — |  |
| 71 | 151 | Sub-layers > Randomize | `Randomize sub-layer <p0> with range [<p1>,<p2>]` |  | numeric expression “Sub-layer index”; numeric expression “Inclusive minimum”; numeric expression “Inclusive maximum” | — |  |
| 72 | 152 | Settings > Sub-layer links > Set animation frame offset | `Link anim frame offset to sub-layer <p0>` |  | numeric expression “Animation frame offset sub-layer index (-1: None)” | — |  |
| 73 | 153 | Layers > Insert layer | `Insert layer with size (<p1>, <p2>) at <p0>` |  | numeric expression “Layer index to insert at”; numeric expression “Layer width (tiles)”; numeric expression “Layer height (tiles)” | — |  |
| 74 | 154 | Sub-layers > Delete all | `Delete all sub-layers` |  |  | — |  |
| 75 | 155 | Sub-layers > Delete sub-layer | `Delete sub-layer <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 76 | 156 | Tiles > Replace tile | `Replace tile (<p0>, <p1>) by (<p2>, <p3>)` |  | numeric expression “Tileset X of tile to replace”; numeric expression “Tileset Y of tile to replace”; numeric expression “New tileset X (-1: Empty)”; numeric expression “New tileset Y (-1: Empty)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Tilesets > Width | `TilesetWidth(` |  | number “Tileset index” | — |  |
| 1 | 81 | Tilesets > Height | `TilesetHeight(` |  | number “Tileset index” | — |  |
| 2 | 82 | Layers > Size > Width | `LayerWidth(` |  | number “Layer index” | — |  |
| 3 | 83 | Layers > Size > Height | `LayerHeight(` |  | number “Layer index” | — |  |
| 4 | 84 | Layers > Wrapping > X | `LayerWrapX(` |  | number “Layer index” | — |  |
| 5 | 85 | Layers > Wrapping > Y | `LayerWrapY(` |  | number “Layer index” | — |  |
| 6 | 86 | Layers > Offset > X | `LayerOffsetX(` |  | number “Layer index” | — |  |
| 7 | 87 | Layers > Offset > Y | `LayerOffsetY(` |  | number “Layer index” | — |  |
| 8 | 88 | Layers > Scroll speed > X | `LayerScrollX(` |  | number “Layer index” | — |  |
| 9 | 89 | Layers > Scroll speed > Y | `LayerScrollY(` |  | number “Layer index” | — |  |
| 10 | 90 | Layers > Tile size > Width | `LayerTileWidth(` |  | number “Layer index” | — |  |
| 11 | 91 | Layers > Tile size > Height | `LayerTileHeight(` |  | number “Layer index” | — |  |
| 12 | 92 | Layers > Tile at position... > Tileset X | `LayerTilesetX(` |  | number “Layer index”; number “Tile X”; number “Tile Y” | — |  |
| 13 | 93 | Layers > Tile at position... > Tileset Y | `LayerTilesetY(` |  | number “Layer index”; number “Tile X”; number “Tile Y” | — |  |
| 14 | 94 | Layers > Tile at position... > Compound value | `LayerTile(` |  | number “Layer index”; number “Tile X”; number “Tile Y” | — |  |
| 15 | 95 | Layers > Count | `LayerCount(` |  |  | — |  |
| 16 | 96 | Tilesets > Count | `TilesetCount(` |  |  | — |  |
| 18 | 98 | Tilesets > Absolute path | `TilesetAbsPath$(` |  | number “Tileset index” → string | — |  |
| 19 | 99 | Properties > Integer value | `MapIntProp(` |  | string “Property name” | — |  |
| 20 | 100 | Properties > Float value | `MapFloatProp(` |  | string “Property name” | — |  |
| 21 | 101 | Properties > String value | `MapStrProp$(` |  | string “Property name” → string | — |  |
| 22 | 102 | Properties > Iterated property | `MapIterProp$(` |  | → string | — |  |
| 24 | 104 | Layers > Sub-layers > Integer at position | `SubLayerIntVal(` |  | number “Layer index”; number “Sub-layer index”; number “Tile X”; number “Tile Y” | — |  |
| 25 | 105 | Layers > Sub-layers > Float at position | `SubLayerFloatVal(` |  | number “Layer index”; number “Sub-layer index”; number “Tile X”; number “Tile Y” | — |  |
| 26 | 106 | Layers > Sub-layers > Count | `SubLayerCellSize(` |  | number “Layer index”; number “Sub-layer index” | — |  |
| 27 | 107 | Layers > Sub-layers > Cell size | `CursorX(` |  |  | — |  |
| 28 | 108 | Tile cursor > X | `CursorY(` |  |  | — |  |
| 29 | 109 | Tile cursor > Y | `CursorWidth(` |  |  | — |  |
| 30 | 110 | Tile cursor > Width | `CursorHeight(` |  |  | — |  |
