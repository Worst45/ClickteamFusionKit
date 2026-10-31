# Extension kcanim

- Fichier : `kcanim.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Animation »
- Usage dans le corpus : 25 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to current frame | `<objet>: current frame <p0>` | <objet>: L'image courante <p0> | comparaison numérique « Compare to current frame » | 5 (2 proj.) | `mock2: Event ID -81, 1 Parameters { 50 }` |
| 1 | -82 | End of animation? | `<objet>: end of animation` | <objet>: Fin de l'animation |  | 5 (3 proj.) | `title3: Event ID -82, 0 Parameters` |
| 2 | -83 | Is the animation running? | `<objet> is running` | <objet> est lancé |  | — |  |
| 3 | -84 | Is the animation paused? | `<objet> is paused` | <objet> est en pause |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Animation > Start | `Start` | Démarrer |  | 3 (2 proj.) | `mock2 : Event ID 80, 0 Parameters` |
| 1 | 81 | Animation > Stop | `Stop` | Stop |  | 1 (1 proj.) | `zebintro : Event ID 81, 0 Parameters` |
| 2 | 82 | Animation > Pause | `Pause` | Pause |  | 2 (2 proj.) | `mock2 : Event ID 82, 0 Parameters` |
| 3 | 83 | Animation > Resume | `Resume` | Reprendre |  | 2 (2 proj.) | `mock2 : Event ID 83, 0 Parameters` |
| 4 | 84 | Animation > Change frame duration | `Set frame duration to <p0> ms` | Fixer la durée d'une image à <p0> ms | expression numérique « Change frame duration » | — |  |
| 7 | 87 | Animation > Go to frame... | `Go to frame <p0>` | Aller à l'image <p0> | expression numérique « Go to frame... » | 4 (2 proj.) | `mock2 : Event ID 87, 1 Parameters { 0 }` |
| 8 | 88 | Animation > Next frame | `Next frame` | Image suivante |  | — |  |
| 9 | 89 | Animation > Previous frame | `Previous frame` | Image précédente |  | — |  |
| 10 | 90 | Animation > New file | `Set file to <p0>` | Fixer fichier à <p0> | nom de fichier « New file » | 2 (1 proj.) | `mock2 : Event ID 90, 1 Parameters { Apppath$ + "MM8.FLC" }` |
| 11 | 91 | Animation > New file from selector | `New file from selector` | Nouveau fichier avec sélecteur |  | — |  |
| 5 | 85 | ? | ? |  |  | 1 (1 proj.) | `romeo : Event ID 85, 0 Parameters` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of current frame | `current frame(` | Numéro de l'image courante |  | — |  |
| 1 | 81 | Number of frames | `total frames(` | Nombre d'images |  | — |  |
| 2 | 82 | Width of animation | `width(` | Largeur de l'animation |  | — |  |
| 3 | 83 | Height of animation | `height(` | Hauteur de l'animation |  | — |  |
| 4 | 84 | Frame duration | `frame duration(` | Durée image |  | — |  |
