# Extension StringTokenizer

- Fichier : `StringTokenizer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Split string | `Split string <p0> with delimiters <p1> (1D)` |  | expression chaîne « String » ; expression chaîne « Delimiters » | — |  |
| 1 | 81 | Split string (2D) | `Split string <p0> with delimiters <p1> and <p2> (2D)` |  | expression chaîne « String » ; expression chaîne « X delimiters » ; expression chaîne « Y delimiters » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of elements | `ElementCount(` |  |  | — |  |
| 1 | 81 | Get element | `Element$(` |  | nombre « Index (0 based) » → chaîne | — |  |
| 2 | 82 | Get element (2D) | `Element2D$(` |  | nombre « X index (0 based) » ; nombre « Y index (0 based) » → chaîne | — |  |
| 3 | 83 | Number of X elements (2D) | `ElementCountX(` |  |  | — |  |
| 4 | 84 | Number of Y elements (2D) | `ElementCountY(` |  | nombre « X index (0 based) » | — |  |
