# Extension adshow

- Fichier : `adshow.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Active Direct Show »
- Usage dans le corpus : 4 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Playing | `<objet>: Is Playing ?` | <objet>: En train de jouer? |  | — |  |
| 1 | -82 | Compare Time Position | `<objet>: Compare Time Position (<p0>)` | <objet>: Comparer à la position temps (<p0>) | comparaison de temps « Position (ms) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load | `<objet>: Load Video (<p0>)` | <objet>: Charger vidéo (<p0>) | nom de fichier « Pathname » | 1 (1 proj.) |  |
| 1 | 81 | Close | `<objet>: Close Video` | <objet>: Fermer la vidéo |  | — |  |
| 2 | 82 | Play | `<objet>: Play Video` | <objet>: Jouer vidéo |  | 1 (1 proj.) |  |
| 3 | 83 | Stop | `<objet>: Stop Video` | <objet>: Arrêter la vidéo |  | 2 (1 proj.) |  |
| 4 | 84 | Size > Set Width | `<objet>: Set Width (<p0>)` | <objet>: Fixer la largeur (<p0>) | expression numérique « Width » | — |  |
| 5 | 85 | Size > Set Height | `<objet>: Set Height (<p0>)` | <objet>: Fixer hauteur (<p0>) | expression numérique « Height » | — |  |
| 6 | 86 | Set Position | `<objet>: Set Position (<p0>)` | <objet>: Fixer la position (<p0>) | expression numérique « Position (ms) » | — |  |
| 7 | 87 | Mute Audio | `<objet>: Mute Audio` | <objet>: Couper le son |  | — |  |
| 8 | 88 | Resume Audio | `<objet>: Resume Audio` | <objet>: Remettre le son |  | — |  |
| 9 | 89 | Set Rate | `<objet>: Set Rate (<p0>)` | <objet>: Fixer la vitesse (<p0>) | expression numérique « Speed Ratio (100 is normal, for 2x enter 200) » | — |  |
| 10 | 90 | Set Volume | `<objet>: Set Volume (<p0>)` | <objet>: Fixer le volume (<p0>) | expression numérique « Volume: 0 to 1000 » | — |  |
| 11 | 91 | Set Loop > On | `<objet>: Set Loop On` | <objet>: Boucle ON |  | — |  |
| 12 | 92 | Set Loop > Off | `<objet>: Set Loop Off` | <objet>: Boucle OFF |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get Width | `GetWidth(` | Largeur |  | — |  |
| 1 | 81 | Size > Get Height | `GetHeight(` | Hauteur |  | — |  |
| 2 | 82 | Get Duration | `GetDuration(` | Durée |  | — |  |
| 3 | 83 | Get Current Position | `GetPosition(` | Position courante |  | — |  |
| 4 | 84 | Size > Get Source Width | `GetSourceWidth(` | Largeur de la source |  | — |  |
| 5 | 85 | Size > Get Source Height | `GetSourceHeight(` | Hauteur de la source |  | — |  |
| 6 | 86 | Get Rate | `GetRate(` | Vitesse |  | — |  |
| 7 | 87 | Get Volume | `GetVolume(` | Volume |  | — |  |
