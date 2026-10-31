# Extension activeshape

- Fichier : `activeshape.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Shape Type > Shape is a rectangle | `<objet> is a rectangle` |  |  | — |  |
| 1 | -82 | Shape Type > Shape is an ellipse | `<objet> is an ellipse` |  |  | — |  |
| 2 | -83 | Shape Type > Shape is a polygon | `<objet> is a polygon` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Size... | `Set Size to (<p0>, <p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 1 | 81 | Display Options > Set Primary Fill Color | `Set primary fill color to <p0>` |  | couleur « System Color Index » | — |  |
| 2 | 82 | Display Options > Set Line Color | `Set line color to <p0>` |  | couleur « System Color Index » | — |  |
| 3 | 83 | Display Options > Set Line Weight | `Set line weight to <p0>` |  | expression numérique « Line Weight » | — |  |
| 4 | 84 | Display Options > Set Secondary Fill Color | `Set secondary fill color to <p0>` |  | couleur « System Color Index » | — |  |
| 5 | 85 | Display Options > Set Gradient Direction | `Set gradient (Direction = <p0>)` |  | expression numérique « 0 = Horizontal, 1 = Vertical » | — |  |
| 6 | 86 | Set Shape > Rectangle | `Set shape to Rectangle` |  |  | — |  |
| 7 | 87 | Set Shape > Ellipse | `Set shape to Ellipse` |  |  | — |  |
| 8 | 88 | Set Shape > Polygon | `Set shape to Polygon` |  |  | — |  |
| 9 | 89 | Set Fill > Solid Color | `Set fill to Solid Color` |  |  | — |  |
| 10 | 90 | Set Fill > Gradient | `Set fill to Gradient` |  |  | — |  |
| 11 | 91 | Set Fill > Pattern | `Set fill to Pattern` |  |  | — |  |
| 12 | 92 | Set Shape > Load Point Set | `Load point set (<p0>)` |  | expression chaîne « Point set » | — |  |
| 13 | 93 | Scale / Angle > Set Angle | `Set angle to <p0> (Quality = <p1>)` |  | expression numérique « Enter angle in degrees between 0 and 359 » ; expression numérique « Enter 0 (maximum speed), or 1 (maximum quality) » | — |  |
| 14 | 94 | Hot Spot > Custom... | `Set Hot Spot to (<p0>, <p1>)` |  | expression numérique « X coordinate » ; expression numérique « Y coordinate » | — |  |
| 15 | 95 | Hot Spot > Top-left | `Set Hot Spot to top-left` |  |  | — |  |
| 16 | 96 | Hot Spot > Top-center | `Set Hot Spot to top-center` |  |  | — |  |
| 17 | 97 | Hot Spot > Top-right | `Set Hot Spot to top-right` |  |  | — |  |
| 18 | 98 | Hot Spot > Left-center | `Set Hot Spot to left-center` |  |  | — |  |
| 19 | 99 | Hot Spot > Center | `Set Hot Spot to center` |  |  | — |  |
| 20 | 100 | Hot Spot > Right-center | `Set Hot Spot to right-center` |  |  | — |  |
| 21 | 101 | Hot Spot > Bottom-left | `Set Hot Spot to bottom-left` |  |  | — |  |
| 22 | 102 | Hot Spot > Bottom-center | `Set Hot Spot to bottom-center` |  |  | — |  |
| 23 | 103 | Hot Spot > Bottom-right | `Set Hot Spot to bottom-right` |  |  | — |  |
| 24 | 104 | Scale / Angle > Set Scale | `Set scale to <p0> (Quality = <p1>)` |  | expression numérique « Enter scale value - 1.0 = normal dimension » ; expression numérique « Enter 0 (maximum speed), or 1 (maximum quality) » | — |  |
| 25 | 105 | Scale / Angle > Set X Scale | `Set X scale to <p0> (Quality = <p1>)` |  | expression numérique « Enter scale value - 1.0 = normal dimension » ; expression numérique « Enter 0 (maximum speed), or 1 (maximum quality) » | — |  |
| 26 | 106 | Scale / Angle > Set Y Scale | `Set Y scale to <p0> (Quality = <p1>)` |  | expression numérique « Enter scale value - 1.0 = normal dimension » ; expression numérique « Enter 0 (maximum speed), or 1 (maximum quality) » | — |  |
| 27 | 107 | Set Fill > Image | `Set fill to Image (Quality = <p0>)` |  | expression numérique « Enter 0 (no resampling), 1 (resample image), or 2 (resample image + edge) » | — |  |
| 28 | 108 | Set Text | `Set Text (<p0>)` |  | expression chaîne « Text » | — |  |
| 29 | 109 | Text Extras > Horizontal Alignment > Left | `Set horizontal text alignment to Left` |  |  | — |  |
| 30 | 110 | Text Extras > Horizontal Alignment > Center | `Set horizontal text alignment to Center` |  |  | — |  |
| 31 | 111 | Text Extras > Horizontal Alignment > Right | `Set horizontal text alignment to Right` |  |  | — |  |
| 32 | 112 | Text Extras > Vertical Alignment > Top | `Set vertical text alignment to Top` |  |  | — |  |
| 33 | 113 | Text Extras > Vertical Alignment > Center | `Set vertical text alignment to Center` |  |  | — |  |
| 34 | 114 | Text Extras > Vertical Alignment > Bottom | `Set vertical text alignment to Bottom` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Shape Size > Shape Width | `Width(` |  |  | — |  |
| 1 | 81 | Shape Size > Shape Height | `Height(` |  |  | — |  |
| 2 | 82 | Display Options > Primary Fill Color | `FillColor(` |  |  | — |  |
| 3 | 83 | Display Options > Line Color | `LineColor(` |  |  | — |  |
| 4 | 84 | Display Options > Line Weight | `LineWeight(` |  |  | — |  |
| 5 | 85 | Display Options > Secondary Fill Color | `FillColor2(` |  |  | — |  |
| 6 | 86 | Text | `Text$(` |  |  | — |  |
