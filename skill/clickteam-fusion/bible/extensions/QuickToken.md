# Extension QuickToken

- Fichier : `QuickToken.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Base > Base Zero | `Set Base 0` |  |  | — |  |
| 1 | 81 | Set Base > Base One | `Set Base 1` |  |  | — |  |
| 2 | 82 | No Delimeter Handling > Return Nothing (default) | `Return Nothing when no Delimeter` |  |  | — |  |
| 3 | 83 | No Delimeter Handling > Return String | `Return String when no Delimeter` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Token (Single Char Tokens) | `GetToken$(` |  | chaîne ; chaîne ; nombre → chaîne | — |  |
| 1 | 81 | Other String Functions > Convert to Upper Case | `UpperCase$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Other String Functions > Convert to Lower Case | `LowerCase$(` |  | chaîne → chaîne | — |  |
| 3 | 83 | Other String Functions > Reverse String | `Reverse$(` |  | chaîne → chaîne | — |  |
| 4 | 84 | Number of Tokens (Single Char Tokens) | `GetNumberToken(` |  | chaîne ; chaîne | — |  |
| 5 | 85 | Other String Functions > Trim | `Trim$(` |  | chaîne → chaîne | — |  |
| 6 | 86 | Other String Functions > Trim Left Only | `LTrim$(` |  | chaîne → chaîne | — |  |
| 7 | 87 | Other String Functions > Trim Right Only | `RTrim$(` |  | chaîne → chaîne | — |  |
| 8 | 88 | Constants > New Line | `Return$(` |  | → chaîne | — |  |
| 9 | 89 | Constants > Horizontal Tab | `Tab$(` |  | → chaîne | — |  |
| 10 | 90 | Other String Functions > Number of Certain Characters in String | `NumCharInString(` |  | chaîne ; chaîne | — |  |
| 11 | 91 | Constants > Double Quote | `Quote$(` |  | → chaîne | — |  |
| 12 | 92 | Constants > Copyright Symbol | `Copyright$(` |  | → chaîne | — |  |
| 13 | 93 | Other String Functions > Replace Characters in String | `ReplaceChar$(` |  | chaîne ; chaîne ; chaîne → chaîne | — |  |
| 14 | 94 | Other String Functions > Remove Characters in String | `RemoveChar$(` |  | chaîne ; chaîne → chaîne | — |  |
| 15 | 95 | Other String Functions > Remove Repeated Characters | `RemoveRepeat$(` |  | chaîne ; chaîne → chaîne | — |  |
