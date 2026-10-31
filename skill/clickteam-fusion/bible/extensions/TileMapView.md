# Extension TileMapView

- Fichier : `TileMapView.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Collisions > Object is overlapping layer ? | `<objet>: <p0> is overlapping layer <p1>` |  | objet « Object » ; expression numérique « Layer index » | — |  |
| 1 | -82 | Before rendering > On tile | `<objet>: On tile` |  |  | — |  |
| 2 | -83 | Collisions > Pixel is solid ? | `<objet>: Point (<p0>, <p1>) is solid on layer <p2>` |  | expression numérique « X coordinate » ; expression numérique « Y coordinate » ; expression numérique « Layer index » | — |  |
| 3 | -84 | Before rendering > On any layer | `<objet>: On layer` |  |  | — |  |
| 4 | -85 | Before rendering > On specific layer | `<objet>: On layer <p0>` |  | comparaison numérique « Layer index » | — |  |
| 5 | -86 | Collisions > Filters (place above overlap condition) > Sub-layer value is... | `<objet> ¦ Sub-layer <p0> is <p1>` |  | expression numérique « Sub-layer index » ; expression numérique « Value » | — |  |
| 6 | -87 | Collisions > Filters (place above overlap condition) > Tile value > X is... | `<objet> ¦ Tileset X is <p0>` |  | expression numérique « Tileset X » | — |  |
| 7 | -88 | Collisions > Filters (place above overlap condition) > Tile value > Y is... | `<objet> ¦ Tileset Y is <p0>` |  | expression numérique « Tileset Y » | — |  |
| 8 | -89 | Collisions > Rectangle is overlapping layer ? | `<objet>: Rect (<p0>, <p1>)(<p2>, <p3>) is overlapping layer <p4>` |  | expression numérique « Top-left pixel X » ; expression numérique « Top-left pixel Y » ; expression numérique « Bottom-right pixel X » ; expression numérique « Bottom-right pixel Y » ; expression numérique « Layer index » | — |  |
| 9 | -90 | Collisions > Filters (place above overlap condition) > Tile value > Value is within range... | `<objet> ¦ Tile value is within (<p0>,<p1>)(<p2>,<p3>)` |  | expression numérique « Top-left tileset X » ; expression numérique « Top-left tileset Y » ; expression numérique « Bottom-right tileset X » ; expression numérique « Bottom-right tileset Y » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Display > Set scroll position | `Set scroll position to (<p0>, <p1>)` |  | expression numérique « Scroll X » ; expression numérique « Scroll Y » | — |  |
| 1 | 81 | Display > Set size | `Set display size to (<p0>, <p1>)` |  | expression numérique « Display width (pixels) » ; expression numérique « Display height (pixels) » | — |  |
| 2 | 82 | Display > Set background color | `Set background color to <p0>` |  | couleur « Background color » | — |  |
| 3 | 83 | On tile > Set offset | `Set tile offset to (<p0>, <p1>)` |  | expression numérique « X offset (pixels) » ; expression numérique « Y offset (pixels) » | — |  |
| 4 | 84 | Callbacks > Tile > Enable | `Enable tile callbacks` |  |  | — |  |
| 5 | 85 | Callbacks > Tile > Disable | `Disable tile callbacks` |  |  | — |  |
| 6 | 86 | On tile > Set tile value | `Set tile to (<p0>, <p1>)` |  | expression numérique « Tileset X » ; expression numérique « Tileset Y » | — |  |
| 7 | 87 | Callbacks > Tile > Set tile render overflow | `Set callback tile overflow to (<p0>, <p1>)` |  | expression numérique « Number of extra tile columns to render on each side (Default: 0) » ; expression numérique « Number of extra tile rows to render on each side (Default: 0) » | — |  |
| 8 | 88 | On tile > HWA only > Set angle | `Set tile angle to <p0>` |  | expression numérique « Angle (0-1) » | — |  |
| 9 | 89 | On tile > HWA only > Set X scale | `Set tile X scale to <p0>` |  | expression numérique « X scale (1.0 = Default) » | — |  |
| 10 | 90 | On tile > HWA only > Set Y scale | `Set tile Y scale to <p0>` |  | expression numérique « Y scale (1.0 = Default) » | — |  |
| 11 | 91 | On tile > Set opacity | `Set tile opacity to <p0>` |  | expression numérique « Opacity (0-1, 1 = Default) » | — |  |
| 12 | 92 | On tile > HWA only > Set tint | `Set tile tint to <p0>` |  | couleur « Tint (White = Default) » | — |  |
| 13 | 93 | Collisions > Set collision margin | `Set collision margin to (<p0>, <p1>, <p2>, <p3>)` |  | expression numérique « Extra pixels to the left » ; expression numérique « Extra pixels to the top » ; expression numérique « Extra pixels to the right » ; expression numérique « Extra pixels to the bottom » | — |  |
| 14 | 94 | Display > Set layers to draw | `Set layers to draw to (<p0>, <p1>)` |  | expression numérique « Minimum layer index » ; expression numérique « Maximum layer index » | — |  |
| 15 | 95 | On tile > Set tileset | `Set tile tileset index to <p0>` |  | expression numérique « Tileset index (0-255) » | — |  |
| 16 | 96 | Animation > Set timer | `Set animation timer to <p0>` |  | expression numérique « Time in seconds (float) » | — |  |
| 17 | 97 | Animation > Advance timer | `Advance animation timer by <p0>` |  | expression numérique « Time in seconds (float) » | — |  |
| 18 | 98 | Callbacks > Layer > Enable | `Enable layer callbacks` |  |  | — |  |
| 19 | 99 | Callbacks > Layer > Disable | `Disable layer callbacks` |  |  | — |  |
| 20 | 100 | On layer > Settings > Set opacity | `Set layer opacity to <p0>` |  | expression numérique « Opacity (0.0-1.0) » | — |  |
| 21 | 101 | On layer > Settings > Set tileset | `Set layer tileset to <p0>` |  | expression numérique « Tileset index (0-255) » | — |  |
| 22 | 102 | On layer > Settings > Set offset | `Set layer offset to (<p0>,<p1>)` |  | expression numérique « Offset X (pixels) » ; expression numérique « Offset Y (pixels) » | — |  |
| 23 | 103 | On layer > Settings > Set visible | `Set layer visible to <p0>` |  | expression numérique « Visible (0: No, 1: Yes) » | — |  |
| 24 | 104 | On layer > Settings > Sub-layer links > To tileset | `Set layer tileset link to <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 25 | 105 | On layer > Settings > Sub-layer links > Set X scale | `Set layer X scale link to <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 26 | 106 | On layer > Settings > Sub-layer links > Set Y scale | `Set layer Y scale link to <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 27 | 107 | On layer > Settings > Sub-layer links > Set angle | `Set layer angle link to <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 28 | 108 | On layer > Settings > Sub-layer links > Set animation | `Set layer animation link to <p0>` |  | expression numérique « Sub-layer index » | — |  |
| 29 | 109 | Animation > Set speed | `Set animation <p0> speed to <p1>` |  | expression numérique « Animation index (0-255, 0: Default) » ; expression numérique « Speed in frames per second » | — |  |
| 30 | 110 | Animation > Set width | `Set animation <p0> width to <p1>` |  | expression numérique « Animation index (0-255, 0: Default) » ; expression numérique « Number of tiles to use horizontally » | — |  |
| 31 | 111 | Animation > Set height | `Set animation <p0> height to <p1>` |  | expression numérique « Animation index (0-255, 0: Default) » ; expression numérique « Number of tiles to use vertically » | — |  |
| 32 | 112 | Animation > Set mode | `Set animation <p0> mode to <p1>` |  | expression numérique « Animation index (0-255, 0: Default) » ; expression numérique « Mode (0: Loop, 1: Ping-Pong, 2: Once) » | — |  |
| 33 | 113 | Animation > Set order | `Set animation <p0> order to <p1>` |  | expression numérique « Animation index (0-255, 0: Default) » ; expression numérique « Order (0: Row-major (Rows first), 1: Column-major (Columns first) » | — |  |
| 35 | 115 | Display > Set zoom | `Set zoom to <p0>` |  | expression numérique « Zoom (1.0: 100%) » | — |  |
| 36 | 116 | Display > Set zoom origin | `Set zoom origin to (<p0>, <p1>)` |  | expression numérique « Zoom X origin (0: Left, 0.5: Center, 1: Right) » ; expression numérique « Zoom Y origin (0: Top, 0.5: Center, 1: Bottom) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Viewport render position > X | `LayerViewportX(` |  | nombre « Layer index » | — |  |
| 1 | 81 | Coordinates > Viewport render position > Y | `LayerViewportY(` |  | nombre « Layer index » | — |  |
| 2 | 82 | Callbacks > On tile > X position | `CallbackTileX(` |  |  | — |  |
| 3 | 83 | Callbacks > On tile > Y position | `CallbackTileY(` |  |  | — |  |
| 4 | 84 | Callbacks > On tile > Tileset X | `CallbackTilesetX(` |  |  | — |  |
| 5 | 85 | Callbacks > On tile > Tileset Y | `CallbackTilesetY(` |  |  | — |  |
| 6 | 86 | Coordinates > On-screen to layer position > X | `Screen2LayerX(` |  | nombre « Layer index » ; nombre « On-screen X » | — |  |
| 7 | 87 | Coordinates > On-screen to layer position > Y | `Screen2LayerY(` |  | nombre « Layer index » ; nombre « On-screen Y » | — |  |
| 8 | 88 | Coordinates > Layer to on-screen position > X | `Layer2ScreenX(` |  | nombre « Layer index » ; nombre « Tile X » | — |  |
| 9 | 89 | Coordinates > Layer to on-screen position > Y | `Layer2ScreenY(` |  | nombre « Layer index » ; nombre « Tile X » | — |  |
| 10 | 90 | Animation timer | `AnimTimer(` |  |  | — |  |
| 11 | 91 | Callbacks > On layer > Layer index | `CallbackLayerIndex(` |  |  | — |  |
