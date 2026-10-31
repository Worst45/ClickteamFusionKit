# Extension PingPong

- Fichier : `PingPong.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On pong | `<objet> : On pong` |  |  | — |  |
| 1 | -82 | On ping failed | `<objet> : On ping failed` |  |  | — |  |
| 2 | -83 | Ping in progress? | `<objet> : Ping in progress?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ping | `Ping <p0>, <p1> max attempts, <p2> ms timeout` |  | expression chaîne « IP address or website » ; expression numérique « Maximum number of attempts » ; expression numérique « Attempt timeout in ms » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Resolve IP | `ResolveIP$(` |  | chaîne « Website address » → chaîne | — |  |
| 1 | 81 | On pong > Elapsed milliseconds | `PingElapsedMS(` |  |  | — |  |
| 2 | 82 | On pong > Status code | `PingStatusCode(` |  |  | — |  |
| 3 | 83 | On pong > Resolved IP address | `PingResolvedIP$(` |  | → chaîne | — |  |
