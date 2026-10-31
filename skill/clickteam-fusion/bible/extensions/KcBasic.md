# Extension KcBasic

- Fichier : `KcBasic.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Program Running | `<objet>:Is Program Running?` |  |  | — |  |
| 1 | -82 | Check for Error | `<objet>:Was an Error?` |  |  | — |  |
| 2 | -83 | Everything OK? | `<objet>:All OK?` |  |  | — |  |
| 3 | -84 | On Tag? | `<objet>:On Tag <p0>?` |  | expression chaîne « Variable name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load from ... | `Load program from <p0>` |  | expression chaîne « Program in string buffer  » | — |  |
| 1 | 81 | Run | `Run` |  |  | — |  |
| 2 | 82 | Run from line ... | `Run from line: <p0>` |  | expression numérique « From Line Number » | — |  |
| 3 | 83 | Set integer variable | `SetIntVar(<p0>)=<p1>` |  | expression chaîne « Name of Variable Integer » ; expression numérique « Set value integer » | — |  |
| 4 | 84 | Set string variable | `SetStrVar$(<p0>)=<p1>` |  | expression chaîne « Name of Variable String » ; expression chaîne « Set value string » | — |  |
| 5 | 85 | Clear variables | `Clear Variables` |  |  | — |  |
| 6 | 86 | Clear program | `Clear Program & Variables` |  |  | — |  |
| 7 | 87 | Execute Command | `Execute Command <p0>` |  | expression chaîne « Command String » | — |  |
| 8 | 88 | Load from file | `Load Program from file <p0>` |  | nom de fichier « Load from file » | — |  |
| 9 | 89 | Load program block | `Load Program block` |  |  | — |  |
| 10 | 90 | Set float variable | `SetFloatVar(<p0>)=<p1>` |  | expression chaîne « Name of Variable Float » ; expression numérique « Set value float » | — |  |
| 11 | 91 | Re-Run | `Re-Run Program` |  |  | — |  |
| 12 | 92 | Re-Run from line ... | `Re-Run from line: <p0>` |  | expression numérique « From Line Number » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Integer Variable | `GetVarInt(` |  | chaîne « Variable name » | — |  |
| 1 | 81 | Get Float Variable | `GetVarFloat(` |  | chaîne « Variable name » | — |  |
| 2 | 82 | Get String Variable | `GetVarStr$(` |  | chaîne « Variable name » → chaîne | — |  |
| 3 | 83 | Error Number | `ErrorNum(` |  |  | — |  |
| 4 | 84 | String Error | `ErrorStr$(` |  | → chaîne | — |  |
| 5 | 85 | GOSUB Integer Variable | `GOSUB_Int(` |  | nombre « From Line Number » | — |  |
| 6 | 86 | GOSUB Float Variable | `GOSUB_Float(` |  | nombre « From Line Number » | — |  |
| 7 | 87 | GOSUB String Variable | `GOSUB_Str$(` |  | nombre « From Line Number » → chaîne | — |  |
