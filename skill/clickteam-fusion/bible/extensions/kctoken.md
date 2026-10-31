# Extension kctoken

- Fichier : `kctoken.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Token | `<objet>: Token <p0> <p1>` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Compare Number of Tokens | `<objet>: Number of Tokens <p0>` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Fixed parsing Characters | `Set Fixed Parsing Characters to <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Set Fixed String | `Set Fixed String to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Token with Fixed Parsing Characters | `GetToken$(` |  | nombre (paramètres non fiables) | — |  |
| 1 | 81 | Get Token with Fixed String | `GetTokenStr$(` |  | nombre (paramètres non fiables) | — |  |
| 2 | 82 | Get String with Fixed Parsing Characters replaced with | `GetRepToken$(` |  | chaîne (paramètres non fiables) | — |  |
| 3 | 83 | Get Fixed String with Parsing Characters replaced with | `GetRepTokenStr$(` |  | chaîne (paramètres non fiables) | — |  |
| 4 | 84 | Remove Parsing Character(s) from a string | `RemoveChr$(` |  | chaîne (paramètres non fiables) | — |  |
| 5 | 85 | Repeat string | `RepeatStr$(` |  | nombre (paramètres non fiables) | — |  |
| 6 | 86 | Get Number of Tokens | `CountToken(` |  | chaîne (paramètres non fiables) | — |  |
