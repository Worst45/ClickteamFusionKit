# Extension kcstore

- Fichier : `kcstore.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare a value | `<objet>: Value Number <p0> is <p1>` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Compare a flag | `<objet>: Flag <p0> state is <p1>` |  | (paramètres non fiables) | — |  |
| 2 | -83 | Is flag on? | `<objet>: Flag <p0> is on` |  | (paramètres non fiables) | — |  |
| 3 | -84 | Is flag off? | `<objet>: Flag <p0> is off` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Values > Change a Value | `Set Value Number <p0> to <p1>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Values > Add to a Value | `Add <p0> to Value Number <p1>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Values > Subtract from a Value | `Subtract <p0> from Value Number <p1>` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Values > Multiply a Value by | `Multiply Value Number <p0> by <p1>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Values > Divide a Value by | `Divide Value Number <p0> by <p1>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Strings > Change a String | `Set String Number <p0> to <p1>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Values > Put Value into Mod | `Put Value Number <p0> into Mod <p1>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Flags > Set flag on | `Set Flag Number <p0> on` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Flags > Set flag off | `Set Flag Number <p0> off` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Flags > Toggle flag | `Toggle Flag Number <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Flags > Reset all | `Reset all flags` |  |  | — |  |
| 11 | 91 | Flags > Toggle all | `Toggle all flags` |  |  | — |  |
| 12 | 92 | Storage > Save | `Save to file <p0>` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Storage > Load | `Load from file <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Value | `GetValue(` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Get String | `GetString$(` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Get Flag State | `GetFlagState(` |  | (paramètres non fiables) | — |  |
