# Extension bitwisehelper

- Fichier : `bitwisehelper.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is True | `<p0> is True` |  | expression numérique « Is True » | — |  |
| 1 | -82 | Is False | `<p0> is False` |  | expression numérique « Is False » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Equal | `Equal(` |  | nombre ; nombre | — |  |
| 1 | 81 | Different | `Different(` |  | nombre ; nombre | — |  |
| 2 | 82 | Lower | `Lower(` |  | nombre ; nombre | — |  |
| 3 | 83 | LowerEqual | `LowerEqual(` |  | nombre ; nombre | — |  |
| 4 | 84 | Greater | `Greater(` |  | nombre ; nombre | — |  |
| 5 | 85 | GreaterEqual | `GreaterEqual(` |  | nombre ; nombre | — |  |
| 6 | 86 | Conditional | `Conditional(` |  | nombre ; nombre ; nombre | — |  |
| 7 | 87 | StringEqual | `StringEqual(` |  | chaîne ; chaîne | — |  |
| 8 | 88 | StringDifferent | `StringDifferent(` |  | chaîne ; chaîne | — |  |
| 9 | 89 | StringConditional | `StringConditional(` |  | nombre ; chaîne ; chaîne → chaîne | — |  |
