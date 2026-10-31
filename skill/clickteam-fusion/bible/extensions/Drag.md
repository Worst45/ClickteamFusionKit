# Extension Drag

- Fichier : `Drag.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Any Object Selected | `<objet>: Is an Object Selected?` |  |  | — |  |
| 1 | -82 | Is Specific Object Selected | `<objet>: Is Object <p0> Selected?` |  | expression numérique « Fixed Value to Test » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Selection > Select Object | `Select <p0>` |  | objet « Object to Select » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 1 | 81 | Selection > Select None | `Select None` |  |  | — |  |
| 2 | 82 | Selection > Toggle Selection | `Perform Toogle Select Using <p0>` |  | objet « Object to Select » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 3 | 83 | Offset > Set Offset | `Set Offset to (<p0>, <p1>)` |  | expression numérique « X Offset » ; expression numérique « Y Offset » | — |  |
| 4 | 84 | Offset > Set X Offset | `Set X Offset to <p0>` |  | expression numérique « X Offset » | — |  |
| 5 | 85 | Offset > Set Y Offset | `Set Y Offset to <p0>` |  | expression numérique « Y Offset » | — |  |
| 6 | 86 | Updating > Normal Update | `Update` |  | expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 7 | 87 | Updating > Simple Update | `Update (Simple)` |  | expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 8 | 88 | Updating > Snap to Grid | `Update and Snap to Grid (Cell Width = <p0>, Cell Height = <p1>) (Hotspot X = <p2>, Hotspot Y = <p3>)` |  | expression numérique « Width of Grid Cells » ; expression numérique « Height of Grid Cells » ; expression numérique « X Position of Hotspot » ; expression numérique « Y Position of Hotspot » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 9 | 89 | Updating > Single Axis > X-Axis Only | `Update (X-Axis Only)` |  | expression numérique « Mouse X (Use XMouse Expression) » | — |  |
| 10 | 90 | Updating > Single Axis > Y-Axis Only | `Update (Y-Axis Only)` |  | expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 11 | 91 | Updating > Limitation > Use Boundries | `Update and use Boundries (<p0>, <p1>) - (<p2>, <p3>)` |  | expression numérique « Minimum X » ; expression numérique « Minimum Y » ; expression numérique « Maximum X » ; expression numérique « Maximum Y » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 12 | 92 | Updating > Limitation > Limit X Only | `Update and Limit X Position (<p0>, <p1>) (Update Y Position = <p2>)` |  | expression numérique « Minimum X » ; expression numérique « Maximum X » ; expression numérique « Update Y Position? (0 = No, Anything Else = Yes) » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |
| 13 | 93 | Updating > Limitation > Limit Y Only | `Update and Limit Y Position (<p0>, <p1>) (Update X Position = <p2>)` |  | expression numérique « Minimum Y » ; expression numérique « Maximum Y » ; expression numérique « Update X Position? (0 = No, Anything Else = Yes) » ; expression numérique « Mouse X (Use XMouse Expression) » ; expression numérique « Mouse Y (Use YMouse Expression) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Offset > Get X Offset | `XOffset(` |  |  | — |  |
| 1 | 81 | Offset > Get Y Offset | `YOffset(` |  |  | — |  |
| 2 | 82 | Selection > X Position | `SelX(` |  |  | — |  |
| 3 | 83 | Selection > Y Position | `SelY(` |  |  | — |  |
| 4 | 84 | Selection > X Hotspot | `SelXHotspot(` |  |  | — |  |
| 5 | 85 | Selection > Y Hotspot | `SelYHotspot(` |  |  | — |  |
| 6 | 86 | Selection > Fixed Value | `SelFixed(` |  |  | — |  |
