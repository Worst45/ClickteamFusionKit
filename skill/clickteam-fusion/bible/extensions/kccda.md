# Extension kccda

- Fichier : `kccda.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « CD-Audio »
- Usage dans le corpus : 92 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to track's elapsed time | `<objet>:time position within track <p0>` | <objet>: position temps dans la piste <p0> | (paramètres non fiables) | — |  |
| 1 | -82 | Compare to time position | `<objet>:time position <p0>` | <objet>: la position temps <p0> | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play a track and continue | `Play from track <p0>` | Jouer a partir de la piste <p0> | (paramètres non fiables) | 1 (1 proj.) | `CD-Audio : Event ID 80, 1 Parameters { value("Track number") }` |
| 1 | 81 | Stop | `Stop` | Stop |  | 44 (2 proj.) | `CD-Audio : Event ID 81, 0 Parameters` |
| 2 | 82 | Pause | `Pause` | Pause |  | 1 (1 proj.) | `CD-Audio : Event ID 82, 0 Parameters` |
| 3 | 83 | Resume | `Resume` | Reprendre |  | 1 (1 proj.) | `CD-Audio : Event ID 83, 0 Parameters` |
| 4 | 84 | Previous track | `Previous track` | Piste précédente |  | 1 (1 proj.) | `CD-Audio : Event ID 84, 0 Parameters` |
| 5 | 85 | Next track | `Next track` | Piste suivante |  | 1 (1 proj.) | `CD-Audio : Event ID 85, 0 Parameters` |
| 6 | 86 | Play at position | `Play at <p0>` | Jouer à <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Open door | `Open door` | Ouvrir le tiroir |  | 1 (1 proj.) | `CD-Audio : Event ID 87, 0 Parameters` |
| 8 | 88 | Close door | `Close door` | Fermer le tiroir |  | 2 (1 proj.) | `CD-Audio : Event ID 88, 0 Parameters` |
| 9 | 89 | Play a track | `Play track <p0>` | Jouer piste <p0> | (paramètres non fiables) | 23 (2 proj.) | `CD-Audio : Event ID 89, 1 Parameters { 2 }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of current track | `Track(` | Numéro de la piste courante |  | 13 (2 proj.) | `Expression ID 80("CD-Audio")` |
| 1 | 81 | Number of tracks | `Maxtrack(` | Nombre de pistes |  | — |  |
| 2 | 82 | Position in current track (1/1000s) | `PosInTrack(` | Position dans la piste courante (1/1000s) |  | 4 (2 proj.) | `Expression ID 82("CD-Audio")` |
| 3 | 83 | Length of current track (1/1000s) | `Track Length(` | Longueur de la piste courante (1/1000s) |  | — |  |
| 4 | 84 | Position in disk (1/1000s) | `Position(` | Position dans le disque (1/1000s) |  | — |  |
| 5 | 85 | Length of disk (1/1000s) | `Length(` | Longueur du disque (1/1000s) |  | — |  |
| 6 | 86 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  | — |  |
