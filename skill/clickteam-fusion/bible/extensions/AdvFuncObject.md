# Extension AdvFuncObject

- Fichier : `AdvFuncObject.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<objet>: On Function <p0>` |  | expression chaîne « Function Name » | — |  |
| 1 | -82 | Call Function | `<objet>: Function <p0>` |  | expression chaîne « Function Name » ; expression numérique « Clear Parameters after Function? 0 = yes, anything else = no » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add/Set String Parameter | `Set String Parameter <p0> to <p1>` |  | expression chaîne « String Parameter Name » ; expression chaîne « String Parameter » | — |  |
| 1 | 81 | Add/Set Integer Parameter | `Set Integer Parameter <p0> to <p1>` |  | expression chaîne « Integer Parameter Name » ; expression numérique « Integer Parameter » | — |  |
| 2 | 82 | Add/Set Float Parameter | `Set Float Parameter <p0> to <p1>` |  | expression chaîne « Float Parameter Name » ; expression numérique « Float Parameter » | — |  |
| 3 | 83 | Call Function | `Call Function <p0> (Don't Clear Params = <p1>)` |  | expression chaîne « Function Name » ; expression numérique « Clear Parameters after Function? 0 = yes, anything else = no » | — |  |
| 4 | 84 | Set Integer Return Value | `Set Integer Return to <p0>` |  | expression numérique « Integer Return Value » | — |  |
| 5 | 85 | Set Float Return Value | `Set Float Return to <p0>` |  | expression numérique « Float Return Value » | — |  |
| 6 | 86 | Set String Return Value | `Set String Return to <p0>` |  | expression chaîne « String Return Value » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Name of Current Function | `Current Function$(` |  | → chaîne | — |  |
| 1 | 81 | Get Number of Integer Parameters | `Integer Params(` |  |  | — |  |
| 2 | 82 | Get Number of Float Parameters | `Float Params(` |  |  | — |  |
| 3 | 83 | Get Number of String Parameters | `String Params(` |  |  | — |  |
| 4 | 84 | Call Integer Function | `Integer Function(` |  | chaîne « Function Name » ; nombre « Clear Parameters after Function? 0 = yes, anything else = no » | — |  |
| 5 | 85 | Call Float Function | `Float Function(` |  | chaîne « Function Name » ; nombre « Clear Parameters after Function? 0 = yes, anything else = no » | — |  |
| 6 | 86 | Call String Function | `String Function$(` |  | chaîne « Function Name » ; nombre « Clear Parameters after Function? 0 = yes, anything else = no » → chaîne | — |  |
| 7 | 87 | Get Integer Parameter | `Integer Parameter(` |  | chaîne « Parameter Name » | — |  |
| 8 | 88 | Get Float Parameter | `Float Parameter(` |  | chaîne « Parameter Name » | — |  |
| 9 | 89 | Get String Parameter | `String Parameter$(` |  | chaîne « Parameter Name » → chaîne | — |  |
| 10 | 90 | Get Integer Return Value | `Integer Return(` |  |  | — |  |
| 11 | 91 | Get Float Return Value | `Float Return(` |  |  | — |  |
| 12 | 92 | Get String Return Value | `String Return$(` |  | → chaîne | — |  |
| 13 | 93 | Set Integer Parameter | `Set Integer Parameter(` |  | chaîne « Integer Parameter Name » ; nombre « Integer Parameter » | — |  |
| 14 | 94 | Set Integer Parameter$ | `Set Integer Parameter$(` |  | chaîne « Integer Parameter Name » ; nombre « Integer Parameter » → chaîne | — |  |
| 15 | 95 | Set Float Parameter | `Set Float Parameter(` |  | chaîne « Float Parameter Name » ; nombre « Float Parameter » | — |  |
| 16 | 96 | Set Float Parameter$ | `Set Float Parameter$(` |  | chaîne « Float Parameter Name » ; nombre « Float Parameter » → chaîne | — |  |
| 17 | 97 | Set String Parameter | `Set String Parameter(` |  | chaîne « String Parameter Name » ; chaîne « String Parameter » | — |  |
| 18 | 98 | Set String Parameter$ | `Set String Parameter$(` |  | chaîne « String Parameter Name » ; chaîne « String Parameter » → chaîne | — |  |
