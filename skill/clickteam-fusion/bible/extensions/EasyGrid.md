# Extension EasyGrid

- Fichier : `EasyGrid.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | X,Y is over cell | `<objet> : <p0>, <p1> is over cell <p2>, <p3>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter column of cell » ; expression numérique « Enter row of cell » | — |  |
| 1 | -82 | X is in column | `<objet> : <p0> is over column <p1>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter column number » | — |  |
| 2 | -83 | Y is in row | `<objet> : <p0> is over row <p1>` |  | expression numérique « Enter Y co-ordinate » ; expression numérique « Enter row number » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Set cell width | `Set cell width to <p0>` |  | expression numérique « Enter cell width » | — |  |
| 1 | 81 | Cells > Set cell height | `Set cell height to <p0>` |  | expression numérique « Enter cell height » | — |  |
| 2 | 82 | Cells > Set cell size | `Set cell size to <p0>x <p1>` |  | expression numérique « Enter cell width » ; expression numérique « Enter cell height » | — |  |
| 3 | 83 | Grid > Limit rows | `Limit rows to <p0>` |  | expression numérique « Enter number of rows » | — |  |
| 4 | 84 | Grid > Limit columns | `Limit columns to <p0>` |  | expression numérique « Enter number or columns » | — |  |
| 5 | 85 | Grid > Set Grid Origin | `Set grid origin to <p0>, <p1>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » | — |  |
| 6 | 86 | Cells > Set cell value | `Set value of cell ( <p0>, <p1>) to <p2>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 7 | 87 | Cells > Clear all cells | `Clear all cells` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Get cell width | `CellWidth(` |  |  | — |  |
| 1 | 81 | Cells > Get cell height | `CellHeight(` |  |  | — |  |
| 2 | 82 | Grid > Get Grid X origin | `GridXorigin(` |  |  | — |  |
| 3 | 83 | Grid > Get Grid Y origin | `GridYorigin(` |  |  | — |  |
| 4 | 84 | Grid > Get row limit | `RowLimit(` |  |  | — |  |
| 5 | 85 | Grid > Get column limit | `ColLimit(` |  |  | — |  |
| 6 | 86 | Positions > Conversions > Get X co-ordinate of column | `XofCol(` |  | nombre | — |  |
| 7 | 87 | Positions > Conversions > Get Y co-ordinate of row | `YofRow(` |  | nombre | — |  |
| 8 | 88 | Positions > Conversions > Get column from X co-ordinate | `ColofX(` |  | nombre | — |  |
| 9 | 89 | Positions > Conversions > Get row from Y co-ordinate | `RowofY(` |  | nombre | — |  |
| 10 | 90 | Positions > Snap > Snap X co-ordinate to grid | `SnapX(` |  | nombre | — |  |
| 11 | 91 | Positions > Snap > Snap Y co-ordinate to grid | `SnapY(` |  | nombre | — |  |
| 12 | 92 | Cells > Get cell value | `GetCellValue(` |  | nombre ; nombre | — |  |
