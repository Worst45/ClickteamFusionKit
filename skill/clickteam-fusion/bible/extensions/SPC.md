# Extension SPC

- Fichier : `SPC.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play SPC | `Play SPC File` |  | nom de fichier « Play SPC File » | — |  |
| 1 | 81 | Stop Playing SPC | `Stop Playing SPC File` |  |  | — |  |
| 2 | 82 | Go Forward | `Go Forward` |  | expression numérique « Go Forward » ; expression numérique « Slow/Fast? 0 = Slow, 1 = Fast (Breaks some songs) » | — |  |
| 3 | 83 | Change Settings | `Change Settings` |  | expression numérique « Channels-1,2 (-1 to leave) » ; expression numérique « Bits-8,16,24,32 (-1 to leave) » ; expression numérique « Sample Rate-8000-192000 (-1 to leave) » | — |  |
| 4 | 84 | Set Speed | `Set Speed` |  | expression numérique « Set Speed(-1 Default) » | — |  |
| 5 | 85 | Set Length | `Set Length` |  | expression numérique « Set Length (-1 for no end) » ; expression numérique « Set Fade (0 for no end) » | — |  |
| 6 | 86 | Reset | `Reset` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Is Playing? | `Playing(` |  |  | — |  |
