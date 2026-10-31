# Extension YouTube

- Fichier : `YouTube.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Chromeless Player > On Error | `On Error - Player (<p0>)` |  | expression chaîne « Player ID - (1-6) » | — |  |
| 1 | -82 | Embedded Player > On Error | `On Error - Embedded Player` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Chromeless Player > Load Video | `Load Video - ID(<p1>) Into Player (<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression chaîne « Video ID - (11 Digit Code From URL) » | — |  |
| 1 | 81 | Chromeless Player > Play Video | `Play Video - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 2 | 82 | Chromeless Player > Pause Video | `Pause Video - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 3 | 83 | Chromeless Player > Stop Video | `Stop Video - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 4 | 84 | Chromeless Player > Mute Video | `Mute Video - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 5 | 85 | Chromeless Player > UnMute Video | `UnMute Video - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 6 | 86 | Chromeless Player > Set Video Volume | `Set Video Volume - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « Volume - (0 = Min, Max = 100) » | — |  |
| 7 | 87 | Chromeless Player > Seek To Video Position | `Seek To Video Position - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « Position (In Seconds) » | — |  |
| 8 | 88 | Chromeless Player > Set X Position | `Set X Position - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « X Position » | — |  |
| 9 | 89 | Chromeless Player > Set Y Position | `Set Y Position - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « Y Position » | — |  |
| 10 | 90 | Chromeless Player > Set Width | `Set Width - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « Width » | — |  |
| 11 | 91 | Chromeless Player > Set Height | `Set Height - (<p1>) - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » ; expression numérique « Height » | — |  |
| 12 | 92 | Chromeless Player > Destroy | `Destroy - Player(<p0>)` |  | expression chaîne « Player Slot - (1-6) » | — |  |
| 13 | 93 | Embedded Player > Load Video | `Load Video - ID(<p1>) Into Embedded Player` |  | expression chaîne « Video ID - (11 Digit Code From URL) » | — |  |
| 14 | 94 | Embedded Player > Destroy | `Destroy - Embedded Player` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Chromeless Player > Video Url | `GetVideoUrl$(` |  | chaîne « Player ID - (1-6) » → chaîne | — |  |
| 1 | 81 | Chromeless Player > Video Embed Code | `GetVideoEmbedCode$(` |  | chaîne « Player ID - (1-6) » → chaîne | — |  |
| 2 | 82 | Chromeless Player > Video State | `GetVideoState$(` |  | chaîne « Player ID - (1-6) » → chaîne | — |  |
| 3 | 83 | Chromeless Player > Video Quality | `GetVideoQuality$(` |  | chaîne « Player ID - (1-6) » → chaîne | — |  |
| 4 | 84 | Chromeless Player > Current Time | `GetCurrentTime$(` |  | chaîne « Player ID - (1-6) » | — |  |
| 5 | 85 | Chromeless Player > Video Duration | `GetVideoDuration$(` |  | chaîne « Player ID - (1-6) » | — |  |
| 6 | 86 | Chromeless Player > Bytes Loaded | `GetBytesLoaded$(` |  | chaîne « Player ID - (1-6) » | — |  |
| 7 | 87 | Chromeless Player > Bytes Total | `GetBytesTotal$(` |  | chaîne « Player ID - (1-6) » | — |  |
| 8 | 88 | Chromeless Player > Bytes Started From | `GetBytesStartedFrom$(` |  | chaîne « Player ID - (1-6) » | — |  |
| 9 | 89 | Chromeless Player > Get Last Error | `GetLastError$(` |  | chaîne « Player ID - (1-6) » → chaîne | — |  |
| 10 | 90 | Embedded Player > Video Url | `GetEmbeddedVideoUrl$(` |  | → chaîne | — |  |
| 11 | 91 | Embedded Player > Get Last Error | `GetLastEmbeddedError$(` |  | → chaîne | — |  |
