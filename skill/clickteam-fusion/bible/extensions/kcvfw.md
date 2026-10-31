# Extension kcvfw

- Fichier : `kcvfw.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is AVI at start position ? | `<objet>: start of video` | <objet>: début de vidéo |  | — |  |
| 1 | -82 | Is AVI at end position ? | `<objet>: end of video` | <objet>: fin de la vidéo |  | — |  |
| 2 | -83 | Mouse clicks within the AVI window ? | `21User <p0> within <p1>` | L'utilisateur <p0> au milieu de <objet> | (paramètres non fiables) | — |  |
| 3 | -84 | Compare to current frame ? | `<objet>: current frame <p0>` | <objet>: L'image courante <p0> | (paramètres non fiables) | — |  |
| 4 | -85 | Compare to current time position ? | `<objet>: current time <p0>` | <objet>: le temps courant <p0> | (paramètres non fiables) | — |  |
| 5 | -86 | Check whether a file is open ? | `<objet>: file is opened` | <objet>: le fichier est ouvert |  | — |  |
| 6 | -87 | Is visible ? | `<objet>: visible` | <objet>: visible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play > Forward | `Play video` | Jouer la vidéo |  | — |  |
| 1 | 81 | Stop | `Stop video` | Arrêter la vidéo |  | — |  |
| 2 | 82 | Pause | `Pause video` | Mettre la vidéo en pause |  | — |  |
| 3 | 83 | Resume | `Resume video` | Reprendre la vidéo |  | — |  |
| 4 | 84 | Play > Backward | `Play video backward` | Jouer la vidéo en arrière |  | — |  |
| 5 | 85 | Play > Step by Step (in frames) | `Play <p0> frames` | Jouer <p0> images | (paramètres non fiables) | — |  |
| 6 | 86 | Play > A new file | `New file <p0>` | Nouveau fichier <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Play > A new file via a file selector | `New file from selector` | Nouveau fichier avec sélecteur |  | — |  |
| 8 | 88 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 9 | 89 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 10 | 90 | Set AVI Play Position to... > Beginning | `Goto beginning` | Aller au début |  | — |  |
| 11 | 91 | Set AVI Play Position to... > End | `Goto end` | Aller à la fin |  | — |  |
| 12 | 92 | Set AVI Play Position to... > A Frame Number | `Goto frame <p0>` | Aller à l'image <p0> | (paramètres non fiables) | — |  |
| 13 | 93 | Set AVI Play Position to... > A Time Position | `Goto time <p0>` | Aller au temps <p0> | (paramètres non fiables) | — |  |
| 15 | 95 | Size > Set Horizontal size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | — |  |
| 16 | 96 | Size > Set Vertical size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current frame number | `Video Frame(` | Numéro d'image courante |  | — |  |
| 1 | 81 | Total number of frames | `Video Total Frames(` | Nombre total d'images |  | — |  |
| 2 | 82 | Current time position | `Video Time(` | Position temps courante |  | — |  |
| 3 | 83 | Total time | `Video Total Time(` | Durée totale |  | — |  |
| 4 | 84 | Horizontal size | `Video X Size(` | Ligne horizontale |  | — |  |
| 5 | 85 | Vertical size | `Video Y Size(` | Taille verticale |  | — |  |
| 6 | 86 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  | — |  |
