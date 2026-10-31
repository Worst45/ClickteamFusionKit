# Extension FlashDraw

- Fichier : `FlashDraw.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Line Style > Set Line Thickness | `Set Line Thickness(<p0>)` |  | expression numérique « Line Thickness » | — |  |
| 1 | 81 | Line Style > Set Line Color | `Set Line Color(<p0>)` |  | expression chaîne « Line Color (Hexadecimal) - (Example: 0xFF0000) » | — |  |
| 2 | 82 | Line Style > Set Line Alpha | `Set Line Alpha(<p0>)` |  | expression numérique « Line Alpha (0 = Transparent, 1 = Solid) » | — |  |
| 3 | 83 | Line Style > Set Line Pixel Hinting | `Set Line Pixel Hinting(<p0>)` |  | expression numérique « Line Pixel Hinting (0 = False, 1 = True) » | — |  |
| 4 | 84 | Line Style > Set Line Scale Mode | `Set Line Scale Mode(<p0>)` |  | expression numérique « Line Scale Mode (0 = Normal, 1 = None, 2 = Vertical, 3 = Horizontal) » | — |  |
| 5 | 85 | Line Style > Set Line Caps | `Set Line Caps(<p0>)` |  | expression numérique « Line Caps (0 = None, 1 = Round, 2 = Square) » | — |  |
| 6 | 86 | Line Style > Set Line Joints | `Set Line Joints(<p0>)` |  | expression numérique « Line Joints (0 = Round, 1 = Bevel, 2 = Miter) » | — |  |
| 7 | 87 | Line Style > Set Line Miter Limit | `Set Line Miter Limit(<p0>)` |  | expression numérique « Line Miter Limit (1 - 255) » | — |  |
| 8 | 88 | Draw Line | `Draw Line - Start X(<p0>), Start Y(<p1>), End X(<p2>), End Y(<p3>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « End X Coordinate » ; expression numérique « End Y Coordinate » | — |  |
| 9 | 89 | Draw Bezier Curve | `Draw Bezier Curve - Start X(<p0>), Start Y(<p1>), End X(<p2>), End Y(<p3>), Anchor X(<p4>), Anchor Y(<p5>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « End X Coordinate » ; expression numérique « End Y Coordinate » ; expression numérique « Anchor X Coordinate » ; expression numérique « Anchor Y Coordinate » | — |  |
| 10 | 90 | Draw Rectangle | `Draw Rectangle - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « Width » ; expression numérique « Height » | — |  |
| 11 | 91 | Draw Rounded Rectangle | `Draw Rounded Rectangle - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>), Corner Width(<p4>), Corner Height(<p5>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « Corner Width » ; expression numérique « Corner Height » | — |  |
| 12 | 92 | Draw Circle | `Draw Circle - Start X(<p0>), Start Y(<p1>), Radius(<p2>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « Radius » | — |  |
| 13 | 93 | Draw Ellipse | `Draw Ellipse - Start X(<p0>), Start Y(<p1>), Width(<p2>), Height(<p3>)` |  | expression numérique « Start X Coordinate » ; expression numérique « Start Y Coordinate » ; expression numérique « Width » ; expression numérique « Height » | — |  |
| 14 | 94 | Clear > Clear All Lines | `Clear All Lines` |  |  | — |  |
| 15 | 95 | Clear > Clear All Bezier Curves | `Clear All Bezier Curves` |  |  | — |  |
| 16 | 96 | Clear > Clear All Rectangles | `Clear All Rectangles` |  |  | — |  |
| 17 | 97 | Clear > Clear All Rounded Rectangles | `Clear All Rounded Rectangles` |  |  | — |  |
| 18 | 98 | Clear > Clear All Circles | `Clear All Circles` |  |  | — |  |
| 19 | 99 | Clear > Clear All Ellipses | `Clear All Ellipses` |  |  | — |  |
| 20 | 100 | Clear > Clear Stage | `Clear Stage` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Line Thickness | `GetLineThickness(` |  |  | — |  |
| 1 | 81 | Get Line Color | `GetLineColor(` |  |  | — |  |
| 2 | 82 | Get Line Alpha | `GetLineAlpha(` |  |  | — |  |
| 3 | 83 | Get Line Pixel Hinting | `GetLinePixelHinting(` |  |  | — |  |
| 4 | 84 | Get Line Scale Mode | `GetLineScaleMode(` |  |  | — |  |
| 5 | 85 | Get Line Caps | `GetLineCaps(` |  |  | — |  |
| 6 | 86 | Get Line Joints | `GetLineJoints(` |  |  | — |  |
| 7 | 87 | Get Line Miter Limit | `GetLineMiterLimit(` |  |  | — |  |
