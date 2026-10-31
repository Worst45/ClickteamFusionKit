# Extension ScreenDraw

- Fichier : `ScreenDraw.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Set line type | `Set line type to <p0>` |  | expression numérique « Type (0 for solid, 1 for horizontal gradient, 2 for vertical gradient or 3 for mosaic) » | — |  |
| 1 | 81 | Settings > Set line colour 1 | `Set line colour 1 to <p0>` |  | couleur « New colour » | — |  |
| 2 | 82 | Settings > Set line colour 2 | `Set line colour 2 to <p0>` |  | couleur « New colour » | — |  |
| 3 | 83 | Settings > Set line thickness | `Set line thickness to <p0>` |  | expression numérique « New thickness » | — |  |
| 4 | 84 | Settings > Set line image | `Set line image to <p0>` |  | objet « Source object » | — |  |
| 5 | 85 | Settings > Set fill type | `Set fill type to <p0>` |  | expression numérique « Type (0 for solid, 1 for horizontal gradient, 2 for vertical gradient and 3 for mosaic) » | — |  |
| 6 | 86 | Settings > Set fill colour 1 | `Set fill colour 1 to <p0>` |  | couleur « New colour » | — |  |
| 7 | 87 | Settings > Set fill colour 2 | `Set fill colour 2 to <p0>` |  | couleur « New colour » | — |  |
| 8 | 88 | Settings > Set fill image | `Set fill image to <p0>` |  | objet « Source object » | — |  |
| 9 | 89 | Settings > Enable anti-aliasing | `Enable anti-aliasing` |  |  | — |  |
| 10 | 90 | Settings > Disable anti-aliasing | `Disable anti-aliasing` |  |  | — |  |
| 11 | 91 | Draw > Pixel | `Draw pixel at <p0>, <p1> with colour <p2>` |  | expression numérique « X position » ; expression numérique « Y position » ; couleur « Colour » | — |  |
| 12 | 92 | Draw > Rectangle | `Draw rectangle at <p0>, <p1> with width <p2> and height <p3> (fill <p4>)` |  | expression numérique « X position » ; expression numérique « Y position » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « Fill? 0 = no, 1 = yes » | — |  |
| 13 | 93 | Draw > Ellipse | `Draw ellipse at <p0>, <p1> with width <p2> and height <p3> (fill <p4>)` |  | expression numérique « X position » ; expression numérique « Y position » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « Fill? 0 = no, 1 = yes » | — |  |
| 14 | 94 | Draw > Line | `Draw line from <p0>, <p1> to <p2>, <p3>` |  | expression numérique « Start X » ; expression numérique « Start Y » ; expression numérique « End X » | — |  |
| 15 | 95 | Draw > Flood fill | `Flood fill at <p0>, <p1> with colour <p2> and tolerance <p3>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Colour » ; expression numérique « Tolerance » | — |  |
| 16 | 96 | Draw > Replace colour | `Replace colour <p0> with <p1>` |  | couleur « Old colour » ; couleur « New colour » | — |  |
| 17 | 97 | Files > Save to file | `Save file <p0>` |  | expression chaîne « Filename » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get pixel | `Pixel(` |  | nombre « X » ; nombre « Y » | — |  |
