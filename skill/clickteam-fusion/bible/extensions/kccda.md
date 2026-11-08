# Extension kccda

- File: `kccda.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare to track's elapsed time | `<object>:time position within track <p0>` | <object>: position temps dans la piste <p0> | (unreliable parameters) |
| 1 | -82 | Compare to time position | `<object>:time position <p0>` | <object>: la position temps <p0> | (unreliable parameters) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Play a track and continue | `Play from track <p0>` | Jouer a partir de la piste <p0> | (unreliable parameters) |
| 1 | 81 | Stop | `Stop` | Stop |  |
| 2 | 82 | Pause | `Pause` | Pause |  |
| 3 | 83 | Resume | `Resume` | Reprendre |  |
| 4 | 84 | Previous track | `Previous track` | Piste précédente |  |
| 5 | 85 | Next track | `Next track` | Piste suivante |  |
| 6 | 86 | Play at position | `Play at <p0>` | Jouer à <p0> | (unreliable parameters) |
| 7 | 87 | Open door | `Open door` | Ouvrir le tiroir |  |
| 8 | 88 | Close door | `Close door` | Fermer le tiroir |  |
| 9 | 89 | Play a track | `Play track <p0>` | Jouer piste <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Number of current track | `Track(` | Numéro de la piste courante |  |
| 1 | 81 | Number of tracks | `Maxtrack(` | Nombre de pistes |  |
| 2 | 82 | Position in current track (1/1000s) | `PosInTrack(` | Position dans la piste courante (1/1000s) |  |
| 3 | 83 | Length of current track (1/1000s) | `Track Length(` | Longueur de la piste courante (1/1000s) |  |
| 4 | 84 | Position in disk (1/1000s) | `Position(` | Position dans le disque (1/1000s) |  |
| 5 | 85 | Length of disk (1/1000s) | `Length(` | Longueur du disque (1/1000s) |  |
| 6 | 86 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  |
