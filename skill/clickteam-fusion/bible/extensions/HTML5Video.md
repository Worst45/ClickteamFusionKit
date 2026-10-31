# Extension HTML5Video

- File: `HTML5Video.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | An error has occured | `An error has occured` | Une erreur s'est-elle produite? |  | — |  |
| 1 | -82 | Is playing? | `Video is playing` | La vidéo est en train de jouer |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Pause | `Pause` | Pause |  | — |  |
| 1 | 81 | Seek | `Seek to #<p0> ms` | Positionner à <p0> ms | numeric expression “Enter a time in milliseconds” | — |  |
| 2 | 82 | Set URL | `Set URL to <p0>` | Fixer l'URL à <p0> | string expression “Enter an URL of a video file” | — |  |
| 3 | 83 | Set width | `Set width to <p0>` | Fixer la largeur à <p0> | numeric expression “Enter the new width” | — |  |
| 4 | 84 | Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | numeric expression “Enter the new height” | — |  |
| 5 | 85 | Play | `Play` | Lancer |  | — |  |
| 6 | 86 | Set volume | `Set volume to <p0>` | Fixer le volume à <p0> | numeric expression “Enter the volume (0 to 100)” | — |  |
| 7 | 87 | Set looping | `Set looping to <p0>` | Fixer le nombre de boucles à <p0> | numeric expression “Enter the number of loops (-1 for infinite)” | — |  |
| 8 | 88 | Set playrate | `Set video playrate to <p0>` | Fixer la vitesse de la vidéo à <p0> | numeric expression “New playrate. 1=normal, 0.5=half speed, 2=double speed etc.” | — |  |
| 9 | 89 | Set controls | `Set controls to <p0>` | Fixer les contrôles à <p0> | numeric expression “Enter 1 to display the controls, 0 to hide them” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Object's width | `Width(` | Largeur de l'objet |  | — |  |
| 1 | 81 | Object's height | `Height(` | Hauteur de l'objet |  | — |  |
| 2 | 82 | Video original width | `OriginalWidth(` | Largeur originale de la vidéo |  | — |  |
| 3 | 83 | Video original height | `OriginalHeight(` | Hauteur originale de la vidéo |  | — |  |
| 4 | 84 | Playrate | `PlayRate(` | Vitesse |  | — |  |
| 5 | 85 | Current URL | `URL$(` | URL courante | → string | — |  |
| 7 | 87 | Current time (ms) | `Time(` | Position temps (ms) |  | — |  |
| 8 | 88 | Loaded video time (ms) | `LoadedLength(` | Longueur vidéo chargée (ms) |  | — |  |
| 9 | 89 | Total duration (ms) | `Length(` | Durée totale (ms) |  | — |  |
| 10 | 90 | Can play mime type | `CanPlay$(` | Peut-on jouer un type Mime? | string “Mime type” → string | — |  |
