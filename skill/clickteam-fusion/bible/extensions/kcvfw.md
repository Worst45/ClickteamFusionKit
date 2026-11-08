# Extension kcvfw

- File: `kcvfw.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is AVI at start position ? | `<object>: start of video` | <object>: début de vidéo |  |
| 1 | -82 | Is AVI at end position ? | `<object>: end of video` | <object>: fin de la vidéo |  |
| 2 | -83 | Mouse clicks within the AVI window ? | `21User <p0> within <p1>` | L'utilisateur <p0> au milieu de <object> | (unreliable parameters) |
| 3 | -84 | Compare to current frame ? | `<object>: current frame <p0>` | <object>: L'image courante <p0> | (unreliable parameters) |
| 4 | -85 | Compare to current time position ? | `<object>: current time <p0>` | <object>: le temps courant <p0> | (unreliable parameters) |
| 5 | -86 | Check whether a file is open ? | `<object>: file is opened` | <object>: le fichier est ouvert |  |
| 6 | -87 | Is visible ? | `<object>: visible` | <object>: visible |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Play > Forward | `Play video` | Jouer la vidéo |  |
| 1 | 81 | Stop | `Stop video` | Arrêter la vidéo |  |
| 2 | 82 | Pause | `Pause video` | Mettre la vidéo en pause |  |
| 3 | 83 | Resume | `Resume video` | Reprendre la vidéo |  |
| 4 | 84 | Play > Backward | `Play video backward` | Jouer la vidéo en arrière |  |
| 5 | 85 | Play > Step by Step (in frames) | `Play <p0> frames` | Jouer <p0> images | (unreliable parameters) |
| 6 | 86 | Play > A new file | `New file <p0>` | Nouveau fichier <p0> | (unreliable parameters) |
| 7 | 87 | Play > A new file via a file selector | `New file from selector` | Nouveau fichier avec sélecteur |  |
| 8 | 88 | Visibility > Make Object Invisible | `Hide` | Cacher |  |
| 9 | 89 | Visibility > Make Object Reappear | `Show` | Montrer |  |
| 10 | 90 | Set AVI Play Position to... > Beginning | `Goto beginning` | Aller au début |  |
| 11 | 91 | Set AVI Play Position to... > End | `Goto end` | Aller à la fin |  |
| 12 | 92 | Set AVI Play Position to... > A Frame Number | `Goto frame <p0>` | Aller à l'image <p0> | (unreliable parameters) |
| 13 | 93 | Set AVI Play Position to... > A Time Position | `Goto time <p0>` | Aller au temps <p0> | (unreliable parameters) |
| 15 | 95 | Size > Set Horizontal size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) |
| 16 | 96 | Size > Set Vertical size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Current frame number | `Video Frame(` | Numéro d'image courante |  |
| 1 | 81 | Total number of frames | `Video Total Frames(` | Nombre total d'images |  |
| 2 | 82 | Current time position | `Video Time(` | Position temps courante |  |
| 3 | 83 | Total time | `Video Total Time(` | Durée totale |  |
| 4 | 84 | Horizontal size | `Video X Size(` | Ligne horizontale |  |
| 5 | 85 | Vertical size | `Video Y Size(` | Taille verticale |  |
| 6 | 86 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  |
