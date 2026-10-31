# Extension kcffunct

- Fichier : `kcffunct.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Function Trigger | `<objet>: Function <p0>()` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Is Returning String | `<objet>: Is Returning String` |  |  | — |  |
| 2 | -83 | Is Returning Number | `<objet>: Is Returning Number` |  |  | — |  |
| 3 | -84 | Is Not Returning (Action triggered) | `<objet>: Not Returning` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run Function | `Run Function <p0>()` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Run Function with... > Number parameter | `Run Function <p0>( <p1> )` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Run Function with... > String parameter | `Run Function <p0>( <p1> )` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Return Number | `Set return to <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Return String | `Set return to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run Function, returning Number | `Function(` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Run Function, returning String | `Function$(` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Run Function with... > Number parameter, returning Number | `FunctionN(` |  | nombre (paramètres non fiables) | — |  |
| 3 | 83 | Run Function with... > String parameter, returning Number | `FunctionS(` |  | chaîne (paramètres non fiables) | — |  |
| 4 | 84 | Run Function with... > Number parameter, returning String | `FunctionN$(` |  | nombre (paramètres non fiables) | — |  |
| 5 | 85 | Run Function with... > String parameter, returning String | `FunctionS$(` |  | chaîne (paramètres non fiables) | — |  |
| 6 | 86 | Get Parameter Number | `Parameter(` |  |  | — |  |
| 7 | 87 | Get Parameter String | `Parameter$(` |  |  | — |  |
| 8 | 88 | Get Current Function | `Current Function$(` |  |  | — |  |
| 9 | 89 | Get Return Number | `Return(` |  |  | — |  |
| 10 | 90 | Get Return String | `Return$(` |  |  | — |  |
