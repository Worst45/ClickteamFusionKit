# Extension Ticker

- Fichier : `Ticker.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set String | `Set String to '<p0>'` |  | expression chaîne « String data to store... » | — |  |
| 1 | 81 | Set Number | `Set Number to '<p0>'` |  | expression numérique « Number to store... » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get > String | `GetString$(` |  | → chaîne | — |  |
| 1 | 81 | Get > Number | `GetNumber(` |  |  | — |  |
| 2 | 82 | Set > String | `SetString$(` |  | chaîne « String » → chaîne | — |  |
| 3 | 83 | Set > Number | `SetNumber(` |  | nombre « Number » | — |  |
| 4 | 84 | Add to > String | `AddString$(` |  | chaîne « String » → chaîne | — |  |
| 5 | 85 | Add to > Number | `AddNumber(` |  | nombre « Number » | — |  |
