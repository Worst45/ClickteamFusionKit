# Extension EasyGrid

- File: `EasyGrid.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | X,Y is over cell | `<object> : <p0>, <p1> is over cell <p2>, <p3>` |  | numeric expression “Enter X co-ordinate”; numeric expression “Enter Y co-ordinate”; numeric expression “Enter column of cell”; numeric expression “Enter row of cell” | — |  |
| 1 | -82 | X is in column | `<object> : <p0> is over column <p1>` |  | numeric expression “Enter X co-ordinate”; numeric expression “Enter column number” | — |  |
| 2 | -83 | Y is in row | `<object> : <p0> is over row <p1>` |  | numeric expression “Enter Y co-ordinate”; numeric expression “Enter row number” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Set cell width | `Set cell width to <p0>` |  | numeric expression “Enter cell width” | — |  |
| 1 | 81 | Cells > Set cell height | `Set cell height to <p0>` |  | numeric expression “Enter cell height” | — |  |
| 2 | 82 | Cells > Set cell size | `Set cell size to <p0>x <p1>` |  | numeric expression “Enter cell width”; numeric expression “Enter cell height” | — |  |
| 3 | 83 | Grid > Limit rows | `Limit rows to <p0>` |  | numeric expression “Enter number of rows” | — |  |
| 4 | 84 | Grid > Limit columns | `Limit columns to <p0>` |  | numeric expression “Enter number or columns” | — |  |
| 5 | 85 | Grid > Set Grid Origin | `Set grid origin to <p0>, <p1>` |  | numeric expression “Enter X co-ordinate”; numeric expression “Enter Y co-ordinate” | — |  |
| 6 | 86 | Cells > Set cell value | `Set value of cell ( <p0>, <p1>) to <p2>` |  | numeric expression “Enter cell column”; numeric expression “Enter cell row”; numeric expression “Enter value” | — |  |
| 7 | 87 | Cells > Clear all cells | `Clear all cells` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Get cell width | `CellWidth(` |  |  | — |  |
| 1 | 81 | Cells > Get cell height | `CellHeight(` |  |  | — |  |
| 2 | 82 | Grid > Get Grid X origin | `GridXorigin(` |  |  | — |  |
| 3 | 83 | Grid > Get Grid Y origin | `GridYorigin(` |  |  | — |  |
| 4 | 84 | Grid > Get row limit | `RowLimit(` |  |  | — |  |
| 5 | 85 | Grid > Get column limit | `ColLimit(` |  |  | — |  |
| 6 | 86 | Positions > Conversions > Get X co-ordinate of column | `XofCol(` |  | number | — |  |
| 7 | 87 | Positions > Conversions > Get Y co-ordinate of row | `YofRow(` |  | number | — |  |
| 8 | 88 | Positions > Conversions > Get column from X co-ordinate | `ColofX(` |  | number | — |  |
| 9 | 89 | Positions > Conversions > Get row from Y co-ordinate | `RowofY(` |  | number | — |  |
| 10 | 90 | Positions > Snap > Snap X co-ordinate to grid | `SnapX(` |  | number | — |  |
| 11 | 91 | Positions > Snap > Snap Y co-ordinate to grid | `SnapY(` |  | number | — |  |
| 12 | 92 | Cells > Get cell value | `GetCellValue(` |  | number; number | — |  |
