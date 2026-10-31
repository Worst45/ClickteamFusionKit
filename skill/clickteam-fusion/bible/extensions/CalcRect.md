# Extension CalcRect

- Fichier : `CalcRect.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set font | `Set font face <p0> , size <p1> , style <p2>` |  | expression chaîne « Name of the font » ; expression numérique « Size of the font (pt) » ; expression numérique « Style - add together: 1 = bold, 2 = italic, 4 = underline » | — |  |
| 1 | 81 | Set text | `Set text to <p0>` |  | expression chaîne « Text to calculate size of » | — |  |
| 2 | 82 | Set maximum width (multiline text) | `Set max width to <p0>` |  | expression numérique « Maximum width in pixels » | — |  |
| 3 | 83 | Calculate area | `Calculate area` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get text width | `Text Width(` |  |  | — |  |
| 1 | 81 | Get text height | `Text Height(` |  |  | — |  |
