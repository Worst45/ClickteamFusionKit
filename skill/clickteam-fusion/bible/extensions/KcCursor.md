# Extension KcCursor

- File: `KcCursor.mfx` — installed with Fusion
- Exporters: available in HTML5; **not in Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Cursor Shape > Standard arrow and small hourglass | `Change cursor to standard arrow and small hourglass` | Changer le pointeur en flèche standard et petit sablier |  |
| 1 | 81 | Set Cursor Shape > Standard arrow | `Change cursor to standard arrow` | Changer le pointeur en flèche standard |  |
| 2 | 82 | Set Cursor Shape > Crosshair | `Change cursor to crosshair` | Changer le pointeur en croix |  |
| 3 | 83 | Set Cursor Shape > Text I-beam | `Change cursor to text I-beam` | Changer le pointeur en curseur texte |  |
| 4 | 84 | Set Cursor Shape > Slashed circle | `Change cursor to slashed circle` | Changer le pointeur en cercle barré |  |
| 5 | 85 | Set Cursor Shape > Four-pointed arrow (Windows NT only) | `Change cursor to four-pointed arrow (Windows NT only)` | Changer le pointeur en quadruple flèche (Windows NT seulement) |  |
| 6 | 86 | Set Cursor Shape > Double-pointed arrow pointing northeast and southwest | `Change cursor to double-pointed arrow pointing northeast and southwest` | Changer le pointeur en double flèche pointant nord-est et sud-ouest |  |
| 7 | 87 | Set Cursor Shape > Double-pointed arrow pointing north and south | `Change cursor to double-pointed arrow pointing north and south` | Changer le pointeur en double flèche pointant nord et sud |  |
| 8 | 88 | Set Cursor Shape > Double-pointed arrow pointing northwest and southeast | `Change cursor to double-pointed arrow pointing northwest and southeast` | Changer le pointeur en double flèche pointant nord-ouest et sud-est |  |
| 9 | 89 | Set Cursor Shape > Double-pointed arrow pointing west and east | `Change cursor to double-pointed arrow pointing west and east` | Changer le pointeur en double flèche pointant ouest et est |  |
| 10 | 90 | Set Cursor Shape > Vertical arrow | `Change cursor to vertical arrow` | Changer le pointeur en flèche verticale |  |
| 11 | 91 | Set Cursor Shape > Hourglass | `Change cursor to hourglass` | Changer le pointeur en sablier |  |
| 12 | 92 | Set Cursor Shape > Help | `Change cursor to help pointer` | Changer le pointeur en pointeur d'aide |  |
| 13 | 93 | Set Cursor Shape > Image number | `Change cursor to image number <p0>` | Changer le pointeur en image numéro <p0> | (unreliable parameters) |
| 14 | 94 | Set Cursor Shape > Image name | `Change cursor to <p0>` | Changer le pointeur en <p0> | (unreliable parameters) |
| 15 | 95 | Set Cursor Shape > Hand | `Change cursor to hand` | Changer le pointeur en main |  |
| 16 | 96 | Set Cursor Shape > Magnifying Glass | `Change cursor to magnifying glass` | Changer le pointeur en loupe |  |
| 17 | 97 | Set Cursor Shape > Color Picker | `Change cursor to color picker` | Changer le pointeur en sélecteur de couleurs |  |
| 18 | 98 | Set Cursor Shape > Fill | `Change cursor to fill` | Changer le pointeur en remplissage |  |
| 19 | 99 | Set Cursor Shape > Horizontal Split | `Change cursor to horizontal split` | Changer le pointeur en séparation horizontale |  |
| 20 | 100 | Set Cursor Shape > Vertical Split | `Change cursor to vertical split` | Changer le pointeur en séparation verticale |  |
| 21 | 101 | Set Cursor Shape > Drag (Copy) | `Change cursor to drag (copy)` | Changer le pointeur en drag (copier) |  |
| 22 | 102 | Set Cursor Shape > Drag (Move) | `Change cursor to drag (move)` | Changer le pointeur en drag (déplacer) |  |
| 23 | 103 | Set Cursor Shape > Drag (Shortcut) | `Change cursor to drag (shortcut)` | Changer le pointeur en drag (raccourci) |  |
| 24 | 104 | Set Cursor Shape > Set shape from Active object | `Set shape from Active object <p0>` | Utiliser la forme de l'objet actif <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Number of images | `NumberOfImages(` | Nombre d'images |  |
| 1 | 81 | Current image number | `CurrentImage(` | Numéro d'image courante |  |
| 2 | 82 | Current image name | `CurrentImage$(` | Nom de l'image courante |  |
