# Extension KcCursor

- Fichier : `KcCursor.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Cursor »
- Usage dans le corpus : 17 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Cursor Shape > Standard arrow and small hourglass | `Change cursor to standard arrow and small hourglass` | Changer le pointeur en flèche standard et petit sablier |  | — |  |
| 1 | 81 | Set Cursor Shape > Standard arrow | `Change cursor to standard arrow` | Changer le pointeur en flèche standard |  | 5 (3 proj.) | `Cursor : Event ID 81, 0 Parameters` |
| 2 | 82 | Set Cursor Shape > Crosshair | `Change cursor to crosshair` | Changer le pointeur en croix |  | 2 (2 proj.) | `Cursor : Event ID 82, 0 Parameters` |
| 3 | 83 | Set Cursor Shape > Text I-beam | `Change cursor to text I-beam` | Changer le pointeur en curseur texte |  | 1 (1 proj.) | `Cursor : Event ID 83, 0 Parameters` |
| 4 | 84 | Set Cursor Shape > Slashed circle | `Change cursor to slashed circle` | Changer le pointeur en cercle barré |  | 1 (1 proj.) | `Cursor : Event ID 84, 0 Parameters` |
| 5 | 85 | Set Cursor Shape > Four-pointed arrow (Windows NT only) | `Change cursor to four-pointed arrow (Windows NT only)` | Changer le pointeur en quadruple flèche (Windows NT seulement) |  | — |  |
| 6 | 86 | Set Cursor Shape > Double-pointed arrow pointing northeast and southwest | `Change cursor to double-pointed arrow pointing northeast and southwest` | Changer le pointeur en double flèche pointant nord-est et sud-ouest |  | — |  |
| 7 | 87 | Set Cursor Shape > Double-pointed arrow pointing north and south | `Change cursor to double-pointed arrow pointing north and south` | Changer le pointeur en double flèche pointant nord et sud |  | — |  |
| 8 | 88 | Set Cursor Shape > Double-pointed arrow pointing northwest and southeast | `Change cursor to double-pointed arrow pointing northwest and southeast` | Changer le pointeur en double flèche pointant nord-ouest et sud-est |  | — |  |
| 9 | 89 | Set Cursor Shape > Double-pointed arrow pointing west and east | `Change cursor to double-pointed arrow pointing west and east` | Changer le pointeur en double flèche pointant ouest et est |  | — |  |
| 10 | 90 | Set Cursor Shape > Vertical arrow | `Change cursor to vertical arrow` | Changer le pointeur en flèche verticale |  | — |  |
| 11 | 91 | Set Cursor Shape > Hourglass | `Change cursor to hourglass` | Changer le pointeur en sablier |  | 1 (1 proj.) | `Cursor : Event ID 91, 0 Parameters` |
| 12 | 92 | Set Cursor Shape > Help | `Change cursor to help pointer` | Changer le pointeur en pointeur d'aide |  | — |  |
| 13 | 93 | Set Cursor Shape > Image number | `Change cursor to image number <p0>` | Changer le pointeur en image numéro <p0> | (paramètres non fiables) | — |  |
| 14 | 94 | Set Cursor Shape > Image name | `Change cursor to <p0>` | Changer le pointeur en <p0> | (paramètres non fiables) | — |  |
| 15 | 95 | Set Cursor Shape > Hand | `Change cursor to hand` | Changer le pointeur en main |  | 1 (1 proj.) | `Cursor : Event ID 95, 0 Parameters` |
| 16 | 96 | Set Cursor Shape > Magnifying Glass | `Change cursor to magnifying glass` | Changer le pointeur en loupe |  | 1 (1 proj.) | `Cursor : Event ID 96, 0 Parameters` |
| 17 | 97 | Set Cursor Shape > Color Picker | `Change cursor to color picker` | Changer le pointeur en sélecteur de couleurs |  | 1 (1 proj.) | `Cursor : Event ID 97, 0 Parameters` |
| 18 | 98 | Set Cursor Shape > Fill | `Change cursor to fill` | Changer le pointeur en remplissage |  | 1 (1 proj.) | `Cursor : Event ID 98, 0 Parameters` |
| 19 | 99 | Set Cursor Shape > Horizontal Split | `Change cursor to horizontal split` | Changer le pointeur en séparation horizontale |  | 1 (1 proj.) | `Cursor : Event ID 99, 0 Parameters` |
| 20 | 100 | Set Cursor Shape > Vertical Split | `Change cursor to vertical split` | Changer le pointeur en séparation verticale |  | 1 (1 proj.) | `Cursor : Event ID 100, 0 Parameters` |
| 21 | 101 | Set Cursor Shape > Drag (Copy) | `Change cursor to drag (copy)` | Changer le pointeur en drag (copier) |  | — |  |
| 22 | 102 | Set Cursor Shape > Drag (Move) | `Change cursor to drag (move)` | Changer le pointeur en drag (déplacer) |  | — |  |
| 23 | 103 | Set Cursor Shape > Drag (Shortcut) | `Change cursor to drag (shortcut)` | Changer le pointeur en drag (raccourci) |  | — |  |
| 24 | 104 | Set Cursor Shape > Set shape from Active object | `Set shape from Active object <p0>` | Utiliser la forme de l'objet actif <p0> | (paramètres non fiables) | 1 (1 proj.) | `Cursor : Event ID 104, 1 Parameters { "Cherries" }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of images | `NumberOfImages(` | Nombre d'images |  | — |  |
| 1 | 81 | Current image number | `CurrentImage(` | Numéro d'image courante |  | — |  |
| 2 | 82 | Current image name | `CurrentImage$(` | Nom de l'image courante |  | — |  |
