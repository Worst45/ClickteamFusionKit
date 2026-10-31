# Extension VideoAndroid

- Fichier : `VideoAndroid.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Video at Start | `<objet>: On Video at start` |  |  | — |  |
| 1 | -82 | On Video at End | `<objet>: On Video at end` |  |  | — |  |
| 2 | -83 | On Video at Position | `<objet>: On Video position equal <p0> sec.` |  | expression numérique « Position value in seconds (exam: 11.25) » | — |  |
| 3 | -84 | On Tap over Video | `<objet>: On Tap over video` |  |  | — |  |
| 4 | -85 | Is Playing? | `<objet>: Is Playing?` |  |  | — |  |
| 5 | -86 | On Error | `<objet>: On Error` |  |  | — |  |
| 6 | -87 | On Video Prepared | `<objet>: On Video prepared` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video URL | `Video URL <p0>` |  | expression chaîne « Video URL » | — |  |
| 1 | 81 | Video Filename | `Video Filename <p0>` |  | expression chaîne « Video Filename » | — |  |
| 2 | 82 | Play Video | `Play Video` |  |  | — |  |
| 3 | 83 | Resume Video | `Resume Video` |  |  | — |  |
| 4 | 84 | Stop Video | `Stop Video` |  |  | — |  |
| 5 | 85 | Pause Video | `Pause Video` |  |  | — |  |
| 6 | 86 | Seek To ... | `Seek to <p0>` |  | expression numérique « Set Video Position in seconds(not streaming) » | — |  |
| 7 | 87 | Goto End | `Goto End` |  |  | — |  |
| 8 | 88 | Goto Beginning | `Goto Beginning` |  |  | — |  |
| 9 | 89 | Set Video Width | `Set Width <p0>` |  | expression numérique « Width Value » | — |  |
| 10 | 90 | Set Video Height | `Set Height <p0>` |  | expression numérique « Height Value » | — |  |
| 11 | 91 | Show Video | `Show Video` |  |  | — |  |
| 12 | 92 | Hide Video | `Hide Video` |  |  | — |  |
| 13 | 93 | Background Color | `Set Background Color to <p0>` |  | couleur « Background Color ... » | — |  |
| 14 | 94 | Mute Video | `Mute Video` |  |  | — |  |
| 15 | 95 | Unmute Video | `Unmute Video` |  |  | — |  |
| 16 | 96 | Set Volume | `Set Video Volume to <p0>` |  | expression numérique « Video Volume (0 - 100) » | — |  |
| 17 | 97 | Video Resource name | `Video Resource name <p0>` |  | expression chaîne « Video Resource Name (exam: video.mp4) » | — |  |
| 18 | 98 | Set Video Controller | `Set video media controller timeout to <p0> secs.` |  | expression numérique « Media Controller Timeout (0:OFF, X: value in secs) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error Number | `Error(` |  |  | — |  |
| 1 | 81 | Get Position | `GetPosition(` |  |  | — |  |
| 2 | 82 | Position to HMS | `secToHMS$(` |  | nombre → chaîne | — |  |
| 3 | 83 | Get Video Filename | `GetFilename$(` |  | → chaîne | — |  |
| 4 | 84 | Get Video URL | `GetURL$(` |  | → chaîne | — |  |
| 5 | 85 | Get Video Width | `GetVideoWidth(` |  |  | — |  |
| 6 | 86 | Get Video Height | `GetVideoHeight(` |  |  | — |  |
| 7 | 87 | Get Video Duration | `VideoDuration(` |  |  | — |  |
| 8 | 88 | Get Frame Width | `GetFrameWidth(` |  |  | — |  |
| 9 | 89 | Get Frame Height | `GetFrameHeight(` |  |  | — |  |
