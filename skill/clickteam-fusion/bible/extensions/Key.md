# Extension Key

- Fichier : `Key.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is key down? (Virtual Key value) | `<objet>: Is key number <p0> down?` |  | expression numérique « Enter Virtual Key » | — |  |
| 1 | -82 | Is key down? (Key name) | `<objet>: Is key <p0> down?` |  | expression chaîne « Enter Key Name » | — |  |
| 2 | -83 | Is key down? (Dialog) | `<objet>: Is key <p0> down?` |  | touche « Select Key » | — |  |
| 3 | -84 | On key pressed (Virtual Key value) | `<objet> On key number <p0> pressed` |  | expression numérique « Enter Virtual Key » | — |  |
| 4 | -85 | On key pressed (Key name) | `<objet> On key <p0> pressed` |  | expression chaîne « Enter Key Name » | — |  |
| 5 | -86 | On key pressed (Dialog) | `<objet> On key <p0> pressed` |  | touche « Select Key » | — |  |
| 6 | -87 | On key released (Virtual Key value) | `<objet> On key number <p0> released` |  | expression numérique « Enter Virtual Key » | — |  |
| 7 | -88 | On key released (Key name) | `<objet> On key <p0> released` |  | expression chaîne « Enter Key Name » | — |  |
| 8 | -89 | On key released (Dialog) | `<objet> On key <p0> released` |  | touche « Select Key » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Disable input for this application | `Disable` |  |  | — |  |
| 1 | 81 | Enable input for this application | `Enable` |  |  | — |  |
| 2 | 82 | Set Player key | `Set key number <p1> in Player <p0> to <p2>` |  | expression numérique « Player Number (1-4) » ; expression numérique « Key Number (0-7) » ; expression numérique « Enter Virtual Key » | — |  |
| 3 | 83 | Set Player control type | `Set control type for Player <p0> to <p1>` |  | expression numérique « Player Number (1-4) » ; expression numérique « Control Type (1-5) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get key as string | `GetKeyStr$(` |  | nombre « Enter Virtual Key » → chaîne | — |  |
| 1 | 81 | Get key as value | `GetKeyVal(` |  | chaîne « Enter Key Name » | — |  |
| 2 | 82 | Get last key pressed (Virtual Key value) | `GetLastKeyVal(` |  |  | — |  |
| 3 | 83 | Get last key pressed (Key name) | `GetLastKeyStr$(` |  | → chaîne | — |  |
| 4 | 84 | Get last key released (Virtual Key value) | `GetLastRKeyVal(` |  |  | — |  |
| 5 | 85 | Get last key released (Key name) | `GetLasRtKeyStr$(` |  | → chaîne | — |  |
| 6 | 86 | Get key from Player | `GetKeyFromPlayer(` |  | nombre « Player Number (1-4) » ; nombre « Key Number (0-7) » | — |  |
| 7 | 87 | Get Player control type | `GetPlayerControlType(` |  | nombre « Player Number (1-4) » | — |  |
