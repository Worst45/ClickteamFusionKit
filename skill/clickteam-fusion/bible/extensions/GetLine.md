# Extension GetLine

- Fichier : `GetLine.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is File Opened? | `<objet> : File is opened` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > Open File... | `Open File <p0>` |  | expression chaîne « Choose the file full path... » | — |  |
| 1 | 81 | File > Close File | `Close File` |  |  | — |  |
| 2 | 82 | First Line | `First Line` |  |  | — |  |
| 3 | 83 | Previous Line | `Previous Line` |  |  | — |  |
| 4 | 84 | Next Line | `Next Line` |  |  | — |  |
| 5 | 85 | Last Line | `Last Line` |  |  | — |  |
| 6 | 86 | Go To Line... | `Go To Line <p0>` |  | expression numérique « Enter the line number » | — |  |
| 7 | 87 | Filter Lines > Filter Lines With Text... | `Filter lines with text <p0>` |  | expression chaîne « Enter the text to search... » | — |  |
| 8 | 88 | Filter Lines > First Line With Text | `First line with text` |  |  | — |  |
| 9 | 89 | Filter Lines > Previous Line With Text | `Previous line with text` |  |  | — |  |
| 10 | 90 | Filter Lines > Next Line With Text | `Next line with text` |  |  | — |  |
| 11 | 91 | Filter Lines > Last Line With Text | `Last line with text` |  |  | — |  |
| 12 | 92 | Filter Lines > Reset Filter | `Reset filter` |  |  | — |  |
| 13 | 93 | Replace Words > Replace Word in Current Line... | `Replace word <p0> with <p1> in the current line` |  | expression chaîne « Type the word to be replaced » ; expression chaîne « Type the new word to replace » | — |  |
| 14 | 94 | Replace Words > Reset Words | `Reset words` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of Lines | `NumLines(` |  |  | — |  |
| 1 | 81 | Current Line Number | `CurLine(` |  |  | — |  |
| 2 | 82 | Number of Characters | `NumChars(` |  |  | — |  |
| 3 | 83 | Current Character Number | `CurChar(` |  |  | — |  |
| 4 | 84 | Current Line Text | `CurLine$(` |  | → chaîne | — |  |
| 5 | 85 | Previous Line Text | `PrevLine$(` |  | → chaîne | — |  |
| 6 | 86 | Next Line Text | `NextLine$(` |  | → chaîne | — |  |
| 7 | 87 | Count Words in Line | `CountWords(` |  |  | — |  |
| 8 | 88 | Count Lines With Text | `CountLinesWithText(` |  |  | — |  |
