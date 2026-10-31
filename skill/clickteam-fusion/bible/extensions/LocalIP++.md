# Extension LocalIP++

- Fichier : `LocalIP++.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Adapter Enumerated | `<objet> : On Adapter Enumerated` |  |  | — |  |
| 1 | -82 | On Error | `<objet> : On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Enumerate Network Adapters | `Enumerate Network Adapters` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get IP of Enumerated Device | `EnumeratedDeviceIP$(` |  | → chaîne | — |  |
| 1 | 81 | Get Error Code | `LastErrorCode(` |  |  | — |  |
| 2 | 82 | Get Host Name | `GetHostName$(` |  | → chaîne | — |  |
