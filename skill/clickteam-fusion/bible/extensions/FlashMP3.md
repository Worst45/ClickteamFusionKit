# Extension FlashMP3

- Fichier : `FlashMP3.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | MP3 Is Playing | `<objet> MP3 Is Playing` |  |  | — |  |
| 1 | -82 | MP3 Is Not Playing | `<objet> MP3 Is Not Playing` |  |  | — |  |
| 2 | -83 | On Error | `<objet> On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load MP3 | `Load MP3 (<p0>)` |  | expression chaîne « MP3 File URL » | — |  |
| 1 | 81 | Play | `Play (<p0> Times)` |  | expression numérique « Loop Times (0 = Play Once, 3 = Loop 3 Times, -1 = Unlimited Loop) » | — |  |
| 2 | 82 | Stop | `Stop` |  |  | — |  |
| 3 | 83 | Pause | `Pause` |  |  | — |  |
| 4 | 84 | Set Position | `Set Position (<p0>)` |  | expression numérique « Position (In Milliseconds) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get MP3 Position | `GetMP3Position(` |  |  | — |  |
| 1 | 81 | Get Current File | `GetCurrentFile$(` |  | → chaîne | — |  |
| 2 | 82 | Get Current File Size | `GetCurrentFileSize(` |  |  | — |  |
| 3 | 83 | Get Current File Buffered | `GetCurrentFileBuffered(` |  |  | — |  |
| 4 | 84 | Get Last Error | `GetLastError$(` |  | → chaîne | — |  |
