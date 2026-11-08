# Extension kcanim

- File: `kcanim.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare to current frame | `<object>: current frame <p0>` | <object>: L'image courante <p0> | numeric comparison “Compare to current frame” |
| 1 | -82 | End of animation? | `<object>: end of animation` | <object>: Fin de l'animation |  |
| 2 | -83 | Is the animation running? | `<object> is running` | <object> est lancé |  |
| 3 | -84 | Is the animation paused? | `<object> is paused` | <object> est en pause |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Animation > Start | `Start` | Démarrer |  |
| 1 | 81 | Animation > Stop | `Stop` | Stop |  |
| 2 | 82 | Animation > Pause | `Pause` | Pause |  |
| 3 | 83 | Animation > Resume | `Resume` | Reprendre |  |
| 4 | 84 | Animation > Change frame duration | `Set frame duration to <p0> ms` | Fixer la durée d'une image à <p0> ms | numeric expression “Change frame duration” |
| 7 | 87 | Animation > Go to frame... | `Go to frame <p0>` | Aller à l'image <p0> | numeric expression “Go to frame...” |
| 8 | 88 | Animation > Next frame | `Next frame` | Image suivante |  |
| 9 | 89 | Animation > Previous frame | `Previous frame` | Image précédente |  |
| 10 | 90 | Animation > New file | `Set file to <p0>` | Fixer fichier à <p0> | file name “New file” |
| 11 | 91 | Animation > New file from selector | `New file from selector` | Nouveau fichier avec sélecteur |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Number of current frame | `current frame(` | Numéro de l'image courante |  |
| 1 | 81 | Number of frames | `total frames(` | Nombre d'images |  |
| 2 | 82 | Width of animation | `width(` | Largeur de l'animation |  |
| 3 | 83 | Height of animation | `height(` | Hauteur de l'animation |  |
| 4 | 84 | Frame duration | `frame duration(` | Durée image |  |
