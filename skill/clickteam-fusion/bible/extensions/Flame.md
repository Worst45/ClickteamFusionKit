# Extension Flame

- Fichier : `Flame.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cool Map > Set Offset | `Set Offset of cool map to  <p0>, <p1>` |  | expression numérique « X Offset » ; expression numérique « Y Offset » | — |  |
| 1 | 81 | Cool Map > Set Velocity | `Set Velocity of cool map to <p0> at a bearing of <p1> degrees` |  | expression numérique « Speed » ; expression numérique « Bearing ( 0 = North, 90 = East, 180 = South, 270 = West ) » | — |  |
| 2 | 82 | Cool Map > Set Cool Map from object | `Copy <p0>'s image and use as Cold map` |  | objet « Select cool map object » | — |  |
| 3 | 83 | Flame Gradient > Set Gradient from object ( vertical ) | `Copy <p0>'s image and use as Gradient map` |  | objet « Select gradient map object » | — |  |
| 4 | 84 | Flame Gradient > Set Gradient Size | `Set gradient size to <p0>` |  | expression numérique « Size » | — |  |
| 5 | 85 | Flame Gradient > Place a gradient | `Set gradient from <p0> to <p1> to <p2> fading to <p3>` |  | expression numérique « Starting Coordinate » ; expression numérique « Ending Coordinate » ; couleur « Starting Colour » ; couleur « End Colour » | — |  |
| 6 | 86 | Alpha Gradient > Set Gradient Size | `Set gradient's min to <p0>` |  | expression numérique « Size » | — |  |
| 7 | 87 | Set on fire > Set Strength of object next on fire | `Set strength factor to <p0>` |  | expression numérique « Strength( 1 = Normal, 0.5 = Weaker, 2 = Stronger ) » | — |  |
| 8 | 88 | Alpha Gradient > Place a gradient | `Set gradient from <p0> to <p1> to <p2> fading to <p3>` |  | expression numérique « Starting Coordinate » ; expression numérique « Ending Coordinate » ; couleur « Starting Colour » ; couleur « End Colour » | — |  |
| 9 | 89 | Set on fire > Object | `Set Object <p0> on fire with effect <p1>` |  | objet « Object » ; expression numérique « Ink ( 0-Set, 1-Add, 2-Subtract, 3-Max, 4-Min ) + Hotness ( 0-Solid, 5-Lightness) » | — |  |
| 10 | 90 | Flame > Manually Update | `Update` |  |  | — |  |
| 11 | 91 | Flame > Set Bearing | `Set Direction to <p0>` |  | expression numérique « Bearing ( 0 = North, 90 = East, 180 = South, 270 = West ) » | — |  |
| 12 | 92 | Flame > Set Size | `Set Size to <p0> by <p1>` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 13 | 93 | Flame > Scroll | `Scroll the flame (<p0> , <p1>)` |  | expression numérique « X Scroll » ; expression numérique « Y Scroll » | — |  |
| 14 | 94 | Hotspot > Custom... | `Set Hotspot to (<p0>,<p1>)` |  | expression numérique ; expression numérique | — |  |
| 15 | 95 | Hotspot > Top-left | `Set Hotspot to top-left` |  |  | — |  |
| 17 | 97 | Hotspot > Top-center | `Set Hotspot to top-right` |  |  | — |  |
| 18 | 98 | Hotspot > Left-center | `Set Hotspot to left-center` |  |  | — |  |
| 19 | 99 | Hotspot > Center | `Set Hotspot to center` |  |  | — |  |
| 20 | 100 | Hotspot > Right-center | `Set Hotspot to right-center` |  |  | — |  |
| 21 | 101 | Hotspot > Bottom-left | `Set Hotspot to bottom-left` |  |  | — |  |
| 22 | 102 | Hotspot > Bottom-center | `Set Hotspot to bottom-center` |  |  | — |  |
| 23 | 103 | Hotspot > Bottom-right | `Set Hotspot to bottom-right` |  |  | — |  |
| 24 | 104 | Flame > Set Speed | `Set flame speed to <p0>` |  | expression numérique « Flame Speed ( can use decimals ) » | — |  |
| 25 | 105 | Flame > Clear | `Clear Flame` |  |  | — |  |
| 26 | 106 | Flame > Auto Update ?.. | `Auto Update ? <p0> ( 0 = no : 1=yes)` |  | expression numérique « Auto Update ? ( 0 = no : 1=yes)  » | — |  |
| 27 | 107 | Flame > Auto Scroll on move ?.. | `Scroll on move ? <p0> ( 0 = no : 1=yes)` |  | expression numérique « Scroll on move ? ( 0 = no : 1=yes)  » | — |  |
| 28 | 108 | Cool Map > Set Strength | `Set Cool Map strength to <p0>` |  | expression numérique « Strength( 1 = Normal, 0.5 = Weaker, 2 = Stronger ) » | — |  |
| 29 | 109 | Alpha Gradient > Set Gradient from object ( vertical ) | `Copy <p0>'s image and use as Alpha Map` |  | objet « Select object » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Test heat of pixel ( real co-ordinates ) | `HeatTest(` |  | nombre ; nombre | — |  |
| 1 | 81 | Get Cold Offset's X position | `ColdXOffset(` |  |  | — |  |
| 2 | 82 | Get Cold Offset's Y position | `ColdYOffset(` |  |  | — |  |
| 3 | 83 | Get Gradient Size | `GetGradSize(` |  |  | — |  |
| 5 | 85 | Get Alpha Size | `GetGradMax(` |  |  | — |  |
