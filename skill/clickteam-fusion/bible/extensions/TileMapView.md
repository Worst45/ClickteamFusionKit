# Extension TileMapView

- File: `TileMapView.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Collisions > Object is overlapping layer ? | `<object>: <p0> is overlapping layer <p1>` |  | object “Object”; numeric expression “Layer index” | — |  |
| 1 | -82 | Before rendering > On tile | `<object>: On tile` |  |  | — |  |
| 2 | -83 | Collisions > Pixel is solid ? | `<object>: Point (<p0>, <p1>) is solid on layer <p2>` |  | numeric expression “X coordinate”; numeric expression “Y coordinate”; numeric expression “Layer index” | — |  |
| 3 | -84 | Before rendering > On any layer | `<object>: On layer` |  |  | — |  |
| 4 | -85 | Before rendering > On specific layer | `<object>: On layer <p0>` |  | numeric comparison “Layer index” | — |  |
| 5 | -86 | Collisions > Filters (place above overlap condition) > Sub-layer value is... | `<object> ¦ Sub-layer <p0> is <p1>` |  | numeric expression “Sub-layer index”; numeric expression “Value” | — |  |
| 6 | -87 | Collisions > Filters (place above overlap condition) > Tile value > X is... | `<object> ¦ Tileset X is <p0>` |  | numeric expression “Tileset X” | — |  |
| 7 | -88 | Collisions > Filters (place above overlap condition) > Tile value > Y is... | `<object> ¦ Tileset Y is <p0>` |  | numeric expression “Tileset Y” | — |  |
| 8 | -89 | Collisions > Rectangle is overlapping layer ? | `<object>: Rect (<p0>, <p1>)(<p2>, <p3>) is overlapping layer <p4>` |  | numeric expression “Top-left pixel X”; numeric expression “Top-left pixel Y”; numeric expression “Bottom-right pixel X”; numeric expression “Bottom-right pixel Y”; numeric expression “Layer index” | — |  |
| 9 | -90 | Collisions > Filters (place above overlap condition) > Tile value > Value is within range... | `<object> ¦ Tile value is within (<p0>,<p1>)(<p2>,<p3>)` |  | numeric expression “Top-left tileset X”; numeric expression “Top-left tileset Y”; numeric expression “Bottom-right tileset X”; numeric expression “Bottom-right tileset Y” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Display > Set scroll position | `Set scroll position to (<p0>, <p1>)` |  | numeric expression “Scroll X”; numeric expression “Scroll Y” | — |  |
| 1 | 81 | Display > Set size | `Set display size to (<p0>, <p1>)` |  | numeric expression “Display width (pixels)”; numeric expression “Display height (pixels)” | — |  |
| 2 | 82 | Display > Set background color | `Set background color to <p0>` |  | color “Background color” | — |  |
| 3 | 83 | On tile > Set offset | `Set tile offset to (<p0>, <p1>)` |  | numeric expression “X offset (pixels)”; numeric expression “Y offset (pixels)” | — |  |
| 4 | 84 | Callbacks > Tile > Enable | `Enable tile callbacks` |  |  | — |  |
| 5 | 85 | Callbacks > Tile > Disable | `Disable tile callbacks` |  |  | — |  |
| 6 | 86 | On tile > Set tile value | `Set tile to (<p0>, <p1>)` |  | numeric expression “Tileset X”; numeric expression “Tileset Y” | — |  |
| 7 | 87 | Callbacks > Tile > Set tile render overflow | `Set callback tile overflow to (<p0>, <p1>)` |  | numeric expression “Number of extra tile columns to render on each side (Default: 0)”; numeric expression “Number of extra tile rows to render on each side (Default: 0)” | — |  |
| 8 | 88 | On tile > HWA only > Set angle | `Set tile angle to <p0>` |  | numeric expression “Angle (0-1)” | — |  |
| 9 | 89 | On tile > HWA only > Set X scale | `Set tile X scale to <p0>` |  | numeric expression “X scale (1.0 = Default)” | — |  |
| 10 | 90 | On tile > HWA only > Set Y scale | `Set tile Y scale to <p0>` |  | numeric expression “Y scale (1.0 = Default)” | — |  |
| 11 | 91 | On tile > Set opacity | `Set tile opacity to <p0>` |  | numeric expression “Opacity (0-1, 1 = Default)” | — |  |
| 12 | 92 | On tile > HWA only > Set tint | `Set tile tint to <p0>` |  | color “Tint (White = Default)” | — |  |
| 13 | 93 | Collisions > Set collision margin | `Set collision margin to (<p0>, <p1>, <p2>, <p3>)` |  | numeric expression “Extra pixels to the left”; numeric expression “Extra pixels to the top”; numeric expression “Extra pixels to the right”; numeric expression “Extra pixels to the bottom” | — |  |
| 14 | 94 | Display > Set layers to draw | `Set layers to draw to (<p0>, <p1>)` |  | numeric expression “Minimum layer index”; numeric expression “Maximum layer index” | — |  |
| 15 | 95 | On tile > Set tileset | `Set tile tileset index to <p0>` |  | numeric expression “Tileset index (0-255)” | — |  |
| 16 | 96 | Animation > Set timer | `Set animation timer to <p0>` |  | numeric expression “Time in seconds (float)” | — |  |
| 17 | 97 | Animation > Advance timer | `Advance animation timer by <p0>` |  | numeric expression “Time in seconds (float)” | — |  |
| 18 | 98 | Callbacks > Layer > Enable | `Enable layer callbacks` |  |  | — |  |
| 19 | 99 | Callbacks > Layer > Disable | `Disable layer callbacks` |  |  | — |  |
| 20 | 100 | On layer > Settings > Set opacity | `Set layer opacity to <p0>` |  | numeric expression “Opacity (0.0-1.0)” | — |  |
| 21 | 101 | On layer > Settings > Set tileset | `Set layer tileset to <p0>` |  | numeric expression “Tileset index (0-255)” | — |  |
| 22 | 102 | On layer > Settings > Set offset | `Set layer offset to (<p0>,<p1>)` |  | numeric expression “Offset X (pixels)”; numeric expression “Offset Y (pixels)” | — |  |
| 23 | 103 | On layer > Settings > Set visible | `Set layer visible to <p0>` |  | numeric expression “Visible (0: No, 1: Yes)” | — |  |
| 24 | 104 | On layer > Settings > Sub-layer links > To tileset | `Set layer tileset link to <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 25 | 105 | On layer > Settings > Sub-layer links > Set X scale | `Set layer X scale link to <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 26 | 106 | On layer > Settings > Sub-layer links > Set Y scale | `Set layer Y scale link to <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 27 | 107 | On layer > Settings > Sub-layer links > Set angle | `Set layer angle link to <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 28 | 108 | On layer > Settings > Sub-layer links > Set animation | `Set layer animation link to <p0>` |  | numeric expression “Sub-layer index” | — |  |
| 29 | 109 | Animation > Set speed | `Set animation <p0> speed to <p1>` |  | numeric expression “Animation index (0-255, 0: Default)”; numeric expression “Speed in frames per second” | — |  |
| 30 | 110 | Animation > Set width | `Set animation <p0> width to <p1>` |  | numeric expression “Animation index (0-255, 0: Default)”; numeric expression “Number of tiles to use horizontally” | — |  |
| 31 | 111 | Animation > Set height | `Set animation <p0> height to <p1>` |  | numeric expression “Animation index (0-255, 0: Default)”; numeric expression “Number of tiles to use vertically” | — |  |
| 32 | 112 | Animation > Set mode | `Set animation <p0> mode to <p1>` |  | numeric expression “Animation index (0-255, 0: Default)”; numeric expression “Mode (0: Loop, 1: Ping-Pong, 2: Once)” | — |  |
| 33 | 113 | Animation > Set order | `Set animation <p0> order to <p1>` |  | numeric expression “Animation index (0-255, 0: Default)”; numeric expression “Order (0: Row-major (Rows first), 1: Column-major (Columns first)” | — |  |
| 35 | 115 | Display > Set zoom | `Set zoom to <p0>` |  | numeric expression “Zoom (1.0: 100%)” | — |  |
| 36 | 116 | Display > Set zoom origin | `Set zoom origin to (<p0>, <p1>)` |  | numeric expression “Zoom X origin (0: Left, 0.5: Center, 1: Right)”; numeric expression “Zoom Y origin (0: Top, 0.5: Center, 1: Bottom)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Viewport render position > X | `LayerViewportX(` |  | number “Layer index” | — |  |
| 1 | 81 | Coordinates > Viewport render position > Y | `LayerViewportY(` |  | number “Layer index” | — |  |
| 2 | 82 | Callbacks > On tile > X position | `CallbackTileX(` |  |  | — |  |
| 3 | 83 | Callbacks > On tile > Y position | `CallbackTileY(` |  |  | — |  |
| 4 | 84 | Callbacks > On tile > Tileset X | `CallbackTilesetX(` |  |  | — |  |
| 5 | 85 | Callbacks > On tile > Tileset Y | `CallbackTilesetY(` |  |  | — |  |
| 6 | 86 | Coordinates > On-screen to layer position > X | `Screen2LayerX(` |  | number “Layer index”; number “On-screen X” | — |  |
| 7 | 87 | Coordinates > On-screen to layer position > Y | `Screen2LayerY(` |  | number “Layer index”; number “On-screen Y” | — |  |
| 8 | 88 | Coordinates > Layer to on-screen position > X | `Layer2ScreenX(` |  | number “Layer index”; number “Tile X” | — |  |
| 9 | 89 | Coordinates > Layer to on-screen position > Y | `Layer2ScreenY(` |  | number “Layer index”; number “Tile X” | — |  |
| 10 | 90 | Animation timer | `AnimTimer(` |  |  | — |  |
| 11 | 91 | Callbacks > On layer > Layer index | `CallbackLayerIndex(` |  |  | — |  |
