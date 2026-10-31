# Extension GradientB

- Fichier : `GradientB.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Color 1 | `Set Color 1 to <p0>` |  | couleur « Color » | — |  |
| 1 | 81 | Set Color 2 | `Set Color 2 to <p0>` |  | couleur « Color » | — |  |
| 2 | 82 | Set Direction | `Set Direction to <p0>` |  | expression numérique « Direction ( 0 = horizontal 1 = vertical ) » | — |  |
| 3 | 83 | Set Width | `Set Width to <p0>` |  | expression numérique « Width » | — |  |
| 4 | 84 | Set Height | `Set Height to <p0>` |  | expression numérique « Height » | — |  |
| 5 | 85 | Set X | `Set X to <p0>` |  | expression numérique « X » | — |  |
| 6 | 86 | Set Y | `Set Y to <p0>` |  | expression numérique « Y » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Color 1 | `Color1(` |  |  | — |  |
| 1 | 81 | Get Color 2 | `Color2(` |  |  | — |  |
| 2 | 82 | Get Width | `Width(` |  |  | — |  |
| 3 | 83 | Get Height | `Height(` |  |  | — |  |
| 4 | 84 | GetDirection | `Direction(` |  |  | — |  |
| 5 | 85 | Get X | `GetX(` |  |  | — |  |
| 6 | 86 | Get Y | `GetY(` |  |  | — |  |
