# Extension animPicture

- Fichier : `animPicture.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Identifier Exists in Cache? | `<objet>: <p0> Exists in Cache` |  | expression chaîne « Identifier » | — |  |
| 1 | -82 | Is Animation Playing? | `<objet>: <p0> Animation is Playing?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cahce > Cache Tileset | `Cache Tileset (<p0>) as (<p1>), Tile size (<p2>, <p3>)` |  | nom de fichier « File to Cahce » ; expression chaîne « Identifier » ; expression numérique « Tile Width » ; expression numérique « Tile Height » | — |  |
| 1 | 81 | Cahce > Remove Image from Cache | `Uncache Image (<p0>)` |  | expression chaîne « Identifier » | — |  |
| 3 | 83 | Scale and Rotation > Set Rotoscale State | `Set Rotoscale State (<p0>)` |  | expression numérique « State (1=Enabled, 0=Disabled) » | — |  |
| 4 | 84 | Scale and Rotation > Set Angle | `Set Angle (<p0>)` |  | expression numérique « Angle » | — |  |
| 5 | 85 | Scale and Rotation > Set Scale | `Set Scale (<p0>)` |  | expression numérique « Scale » | — |  |
| 6 | 86 | Scale and Rotation > Set X-Scale | `Set X-Scale (<p0>)` |  | expression numérique « Scale » | — |  |
| 7 | 87 | Scale and Rotation > Set Y-Scale | `Set Y-Scale (<p0>)` |  | expression numérique « Scale » | — |  |
| 8 | 88 | Hotspot > Set Hotspot | `Set Hotspot (<p0>, <p1>)` |  | expression numérique « Hotspot X » ; expression numérique « Hotspot Y » | — |  |
| 9 | 89 | Hotspot > Set Hotspot X | `Set Hotspot X (<p0>)` |  | expression numérique « Hotspot X » | — |  |
| 10 | 90 | Hotspot > Set Hotspot Y | `Set Hotspot Y (<p0>)` |  | expression numérique « Hotspot Y » | — |  |
| 11 | 91 | Cahce > Cache Image from Alphachannel and Color | `Cache Image as Alphachannel of (<p0>) as (<p1>) with color (<p2>)` |  | nom de fichier « File to Cahce » ; expression chaîne « Identifier » ; couleur « Color » ; expression numérique « Inverse Alpha » | — |  |
| 12 | 92 | Cahce > Cache Image | `Cache Image (<p0>) as (<p1>)` |  | nom de fichier « File to Cahce » ; expression chaîne « Identifier » | — |  |
| 13 | 93 | Cahce > Cache Tileset from Alphachannel and Color | `Cache Tileset as Alphachannel of (<p0>) as (<p1>) with color (<p4>), Tile size (<p2>, <p3>)` |  | nom de fichier « File to Cahce » ; expression chaîne « Identifier » ; expression numérique « Tile Width » ; expression numérique « Tile Height » ; couleur « Color » ; expression numérique « Inverse Alpha » | — |  |
| 14 | 94 | Animation > Set Image | `Set Current Image to (<p0>)` |  | expression chaîne « Identifier » | — |  |
| 15 | 95 | Animation > Set Tile | `Set Current Tile to (<p0>)` |  | expression numérique « Tile ID in Tileset » | — |  |
| 16 | 96 | Animation > Animate | `Animate - Start (<p0>) - End (<p1>) - Loop Back to (<p2>) - Speed (<p3>), Loop (<p4>)` |  | expression numérique « First Tile » ; expression numérique « Last Tile » ; expression numérique « Loop Back to » ; expression numérique « Speed » ; expression numérique « Loop (0=Infinity) » | — |  |
| 17 | 97 | Animation > Pause Animation | `Pause Animation` |  |  | — |  |
| 18 | 98 | Animation > Resume Animation | `Resume Animation` |  |  | — |  |
| 19 | 99 | Cahce > Set Color of Cache | `Set Color of Cache (<p0>) to Color (<p1>)` |  | expression chaîne « Identifier » ; couleur « Color » | — |  |
| 20 | 100 | Hotspot > Center Hotspot on Object | `Center Hotspot on Object` |  |  | — |  |
| 21 | 101 | Cahce > Clear Cache | `Clear Cache` |  |  | — |  |
| 22 | 102 | Cahce > Cache Image from Overlay | `Cache Image from Overlay as (<p1>)` |  | expression numérique « Overlay Adress » ; expression chaîne « Identifier » | — |  |
| 23 | 103 | Cahce > Cache Tileset from Overlay | `Cache Tileset from Overlay as (<p1>), Tile size (<p2>, <p3>)` |  | expression numérique « Overlay Adress » ; expression chaîne « Identifier » ; expression numérique « Tile Width » ; expression numérique « Tile Height » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Animation > Get Current Image | `curImage$(` |  | → chaîne | — |  |
| 1 | 81 | Animation > Get Current Tile | `curTile(` |  |  | — |  |
| 2 | 82 | Hotspot > Get Hotspot X | `hotspotX(` |  |  | — |  |
| 3 | 83 | Hotspot > Get Hotspot Y | `hotspotY(` |  |  | — |  |
| 4 | 84 | Scale and Rotation > Get Rotoscale State | `rotoscaleState(` |  |  | — |  |
| 5 | 85 | Scale and Rotation > Get Angle | `angle(` |  |  | — |  |
| 6 | 86 | Scale and Rotation > Get X-Scale | `scaleX(` |  |  | — |  |
| 7 | 87 | Scale and Rotation > Get Y-Scale | `scaleY(` |  |  | — |  |
| 8 | 88 | Size > Get Original Width | `originalWidth(` |  |  | — |  |
| 9 | 89 | Size > Get Original Height | `originalHeight(` |  |  | — |  |
