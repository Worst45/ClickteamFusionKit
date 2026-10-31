# Extension GoogleMaps

- Fichier : `GoogleMaps.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Map Is Ready | `<objet> Map Is Ready` |  |  | — |  |
| 1 | -82 | Map Is Visible | `<objet> Map Is Visible` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Map Key | `Set Map Key (<p0>)` |  | expression chaîne « Map Key » | — |  |
| 1 | 81 | Map Options > Continuous Zoom | `Continuous Zoom (<p0>)` |  | expression numérique « Continuous Zoom (0 = False, 1 = True) » | — |  |
| 2 | 82 | Map Options > Controlled By Keyboard | `Controlled By Keyboard (<p0>)` |  | expression numérique « Controlled By Keyboard (0 = False, 1 = True) » | — |  |
| 3 | 83 | Map Options > Crosshairs | `Crosshairs (<p0>)` |  | expression numérique « Crosshairs (0 = False, 1 = True) » | — |  |
| 4 | 84 | Map Options > Dragging | `Dragging (<p0>)` |  | expression numérique « Dragging (0 = False, 1 = True) » | — |  |
| 5 | 85 | Map Options > Scroll Wheel Zoom | `Scroll Wheel Zoom (<p0>)` |  | expression numérique « Scroll Wheel Zoom (0 = False, 1 = True) » | — |  |
| 6 | 86 | Map Options > Initial Map Type | `Initial Map Type (<p0>)` |  | expression numérique « Initial Map Type (0 = Normal, 1 = Physical, 2 = Satellite, 3 = Hybrid) » | — |  |
| 7 | 87 | Create Map | `Create Map (<p0>,<p1>)(<p2>,<p3>)` |  | expression numérique « X Coordinate » ; expression numérique « Y Coordinate » ; expression numérique « Map Width » ; expression numérique « Map Height » | — |  |
| 8 | 88 | Controls > Add Zoom Control | `Add Zoom Control` |  |  | — |  |
| 9 | 89 | Controls > Add Overview Map Control | `Add Overview Map Control` |  |  | — |  |
| 10 | 90 | Controls > Add Map Type Control | `Add Map Type Control` |  |  | — |  |
| 11 | 91 | Controls > Add Navigation Control | `Add Navigation Control` |  |  | — |  |
| 12 | 92 | Controls > Add Position Control | `Add Position Control` |  |  | — |  |
| 13 | 93 | Controls > Add Scale Control | `Add Scale Control` |  |  | — |  |
| 14 | 94 | Controls > Remove Zoom Control | `Remove Zoom Control` |  |  | — |  |
| 15 | 95 | Controls > Remove Overview Map Control | `Remove Overview Map Control` |  |  | — |  |
| 16 | 96 | Controls > Remove Map Type Control | `Remove Map Type Control` |  |  | — |  |
| 17 | 97 | Controls > Remove Navigation Control | `Remove Navigation Control` |  |  | — |  |
| 18 | 98 | Controls > Remove Position Control | `Remove Position Control` |  |  | — |  |
| 19 | 99 | Controls > Remove Scale Control | `Remove Scale Control` |  |  | — |  |
| 20 | 100 | Set Map Center (Location) | `Set Map Center (<p0>,<p1>)` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 21 | 101 | Add Marker Overlay | `Add Marker Overlay (<p0>,<p1>)` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 22 | 102 | Add Polyline Overlay | `Add Polyline Overlay (<p0>,<p1>)(<p2>,<p3>)` |  | expression numérique « From (Latitude) » ; expression numérique « From (Longitude) » ; expression numérique « To (Latitude) » ; expression numérique « To (Logitude) » | — |  |
| 23 | 103 | Add Info Window Overlay | `Add Info Window Overlay (<p0>,<p1>)(<p2>,<p3>)` |  | expression numérique « Latitude » ; expression numérique « Longitude » ; expression chaîne « Info Title » ; expression chaîne « Info Text » | — |  |
| 24 | 104 | Clear Overlays | `Clear Overlays` |  |  | — |  |
| 25 | 105 | Pan To | `Pan To (<p0>,<p1>)` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 26 | 106 | Show Map | `Show Map` |  |  | — |  |
| 27 | 107 | Hide Map | `Hide Map` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Map X | `MapX(` |  |  | — |  |
| 1 | 81 | Map Y | `MapY(` |  |  | — |  |
| 2 | 82 | Map Width | `MapWidth(` |  |  | — |  |
| 3 | 83 | Map Height | `MapHeight(` |  |  | — |  |
