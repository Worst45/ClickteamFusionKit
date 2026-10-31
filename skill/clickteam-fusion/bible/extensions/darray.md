# Extension darray

- Fichier : `darray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > Save Array > Save to file | `<objet>: Save to file <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | File > Save Array > Save as MMF1.5 array | `<objet>: Save to MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | File > Save Array > Save to CSV file | `<objet>: Save to CSV file <p0>` |  | (paramètres non fiables) | — |  |
| 3 | 83 | File > Load Array > Load from file | `<objet>: Load from file <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | File > Load Array > Load from MMF array | `<objet>: Load from MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | File > Load Array > Load from CSV file | `<objet>: Load from CSV file <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Add Elements > Insert string at | `<objet>: Insert string <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Add Elements > Insert value at | `<objet>: Insert value <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Add Elements > Append string | `<objet>: Append string <p0>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Add Elements > Append value | `<objet>: Append value <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Add Elements > Append elements from file | `<objet>: Append elements from file <p0>` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Add Elements > Append elements from MMF array | `<objet>: Append elements from MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Add Elements > Append elements from CSV file | `<objet>: Append elements from CSV file <p0>` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Replace Elements > Set string at | `<objet>: Set string <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Replace Elements > Set value at | `<objet>: Set value <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Recordset (2D Array) > Rows (Records) > Select > Between > Pick column for select between | `<objet>: Pick col <p0> for SELECT BETWEEN` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Remove Elements > Delete at | `<objet>: Delete at <p0>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Remove Elements > Delete all | `<objet>: Delete all` |  |  | — |  |
| 18 | 98 | Save Elements > Save element to file | `<objet>: Save element <p0> to file <p1>` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Save Elements > Append element to file | `<objet>: Append element <p0> to file <p1>` |  | (paramètres non fiables) | — |  |
| 20 | 100 | Keys > Set key string at | `<objet>: Set key string <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 21 | 101 | Keys > Set key value at | `<objet>: Set key value <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 22 | 102 | Sorting > Sort strings ascending (ABC) | `<objet>: Sort strings ascending (ABC)` |  |  | — |  |
| 23 | 103 | Sorting > Sort strings descending (CBA) | `<objet>: Sort strings descending (CBA)` |  |  | — |  |
| 24 | 104 | Sorting > Sort values ascending (123) | `<objet>: Sort values ascending (123)` |  |  | — |  |
| 25 | 105 | Sorting > Sort values descending (321) | `<objet>: Sort values descending (321)` |  |  | — |  |
| 26 | 106 | Recordset (2D Array) > Rows (Records) > Select > Between > Select rows between values | `<objet>: SELECT BETWEEN <p0> AND <p1>` |  | (paramètres non fiables) | — |  |
| 27 | 107 | Dimensioning > Array Dimension > Set array dimension | `<objet>: Set array dimension to <p0>` |  | (paramètres non fiables) | — |  |
| 28 | 108 | Dimensioning > Array Dimension > Use 2D array (dimensions: 2) | `<objet>: Set array dimension to 2` |  |  | — |  |
| 29 | 109 | Dimensioning > Array Dimension > Use 3D array (dimensions: 3) | `<objet>: Set array dimension to 3` |  |  | — |  |
| 30 | 110 | Dimensioning > Dimension Boundaries > Set dimension boundary | `<objet>: Set dimension <p0> boundary to <p1>` |  | (paramètres non fiables) | — |  |
| 31 | 111 | Dimensioning > Dimension Boundaries > Resize dimension boundary | `<objet>: Resize dimension <p0> boundary to <p1>` |  | (paramètres non fiables) | — |  |
| 32 | 112 | Recordset (2D Array) > Rows (Records) > Insert > Insert row from list | `<objet>: Insert row from list <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 33 | 113 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows greater than or equal to | `<objet>: SELECT WHERE <p0> >= <p1>` |  | (paramètres non fiables) | — |  |
| 34 | 114 | Recordset (2D Array) > Rows (Records) > Append > Append row from list | `<objet>: Append row from list <p0>` |  | (paramètres non fiables) | — |  |
| 35 | 115 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows less than | `<objet>: SELECT WHERE <p0> < <p1>` |  | (paramètres non fiables) | — |  |
| 36 | 116 | Recordset (2D Array) > Rows (Records) > Update > Replace row with list | `<objet>: Replace row from list <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 37 | 117 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows less than or equal to | `<objet>: SELECT WHERE <p0> <= <p1>` |  | (paramètres non fiables) | — |  |
| 38 | 118 | Recordset (2D Array) > Rows (Records) > Select > Between > Pick label for select between | `<objet>: Pick <p0> for SELECT BETWEEN` |  | (paramètres non fiables) | — |  |
| 39 | 119 | Recordset (2D Array) > Rows (Records) > Delete > Delete row | `<objet>: Delete row <p0>` |  | (paramètres non fiables) | — |  |
| 40 | 120 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column value ascending | `<objet>: Sort rows by column <p0> value ascending` |  | (paramètres non fiables) | — |  |
| 41 | 121 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column value descending | `<objet>: Sort rows by column <p0> value descending` |  | (paramètres non fiables) | — |  |
| 42 | 122 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column string ascending | `<objet>: Sort rows by column <p0> string ascending` |  | (paramètres non fiables) | — |  |
| 43 | 123 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column string descending | `<objet>: Sort rows by column <p0> string descending` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label value ascending | `<objet>: Sort rows by label <p0> value ascending` |  | (paramètres non fiables) | — |  |
| 45 | 125 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label value descending | `<objet>: Sort rows by label <p0> value descending` |  | (paramètres non fiables) | — |  |
| 46 | 126 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label string ascending | `<objet>: Sort rows by label <p0> string ascending` |  | (paramètres non fiables) | — |  |
| 47 | 127 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label string descending | `<objet>: Sort rows by label <p0> string descending` |  | (paramètres non fiables) | — |  |
| 48 | 128 | Recordset (2D Array) > Columns (Fields) > Set label | `<objet>: Set label to <p0> at column <p1>` |  | (paramètres non fiables) | — |  |
| 49 | 129 | Recordset (2D Array) > Rows (Records) > Select > Between > Select rows between strings | `<objet>: SELECT BETWEEN <p0> AND <p1>` |  | (paramètres non fiables) | — |  |
| 50 | 130 | Settings > String Comparisons > Case Insensitive (A=a) | `<objet>: Case insensitive (A=a)` |  |  | — |  |
| 51 | 131 | Settings > String Comparisons > Case Sensitive (A<a) | `<objet>: Case sensitive (A<a)` |  |  | — |  |
| 52 | 132 | Replace Elements > Set file at | `<objet>: Set file <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 53 | 133 | Add Elements > Insert file at | `<objet>: Insert file <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 54 | 134 | Add Elements > Append file | `<objet>: Append file <p0>` |  | (paramètres non fiables) | — |  |
| 55 | 135 | Settings > Search Mode > Literal | `<objet>: Use literal search mode` |  |  | — |  |
| 56 | 136 | Settings > Search Mode > Wildcard | `<objet>: Use wildcard search mode` |  |  | — |  |
| 57 | 137 | Settings > Set list delimiter | `<objet>: Set list delimiter to <p0>` |  | (paramètres non fiables) | — |  |
| 58 | 138 | File > Save Array > Save to INI file | `<objet>: Save to INI file <p0>` |  | (paramètres non fiables) | — |  |
| 59 | 139 | File > Load Array > Load from INI file | `<objet>: Load from INI file <p0>` |  | (paramètres non fiables) | — |  |
| 60 | 140 | Add Elements > Append elements from INI file | `<objet>: Append elements from INI file <p0>` |  | (paramètres non fiables) | — |  |
| 61 | 141 | Recordset (2D Array) > Rows (Records) > Select > Selection mode > AND (Exclusive) | `<objet>: Select rows using AND mode` |  |  | — |  |
| 62 | 142 | Recordset (2D Array) > Rows (Records) > Select > Selection mode > OR (Inclusive) | `<objet>: Select rows using OR mode` |  |  | — |  |
| 63 | 143 | Recordset (2D Array) > Rows (Records) > Select > Select all rows | `<objet>: Select all rows` |  |  | — |  |
| 64 | 144 | Recordset (2D Array) > Rows (Records) > Select > Invert selection | `<objet>: Invert selection of rows` |  |  | — |  |
| 65 | 145 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows matching | `<objet>: SELECT WHERE col <p0> LIKE <p1>` |  | (paramètres non fiables) | — |  |
| 66 | 146 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows containing | `<objet>: SELECT WHERE col <p0> LIKE *<p1>*` |  | (paramètres non fiables) | — |  |
| 67 | 147 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows equal to | `<objet>: SELECT WHERE col <p0> = <p1>` |  | (paramètres non fiables) | — |  |
| 68 | 148 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows not equal to | `<objet>: SELECT WHERE col <p0> <> <p1>` |  | (paramètres non fiables) | — |  |
| 69 | 149 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows greater than | `<objet>: SELECT WHERE col <p0> > <p1>` |  | (paramètres non fiables) | — |  |
| 70 | 150 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows greater than or equal to | `<objet>: SELECT WHERE col <p0> >= <p1>` |  | (paramètres non fiables) | — |  |
| 71 | 151 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows less than | `<objet>: SELECT WHERE col <p0> < <p1>` |  | (paramètres non fiables) | — |  |
| 72 | 152 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows less than or equal to | `<objet>: SELECT WHERE col <p0> <= <p1>` |  | (paramètres non fiables) | — |  |
| 73 | 153 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows matching | `<objet>: SELECT WHERE <p0> LIKE <p1>` |  | (paramètres non fiables) | — |  |
| 74 | 154 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows containing | `<objet>: SELECT WHERE <p0> LIKE *<p1>*` |  | (paramètres non fiables) | — |  |
| 75 | 155 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows equal to | `<objet>: SELECT WHERE <p0> = <p1>` |  | (paramètres non fiables) | — |  |
| 76 | 156 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows not equal to | `<objet>: SELECT WHERE <p0> <> <p1>` |  | (paramètres non fiables) | — |  |
| 77 | 157 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows greater than | `<objet>: SELECT WHERE <p0> > <p1>` |  | (paramètres non fiables) | — |  |
| 78 | 158 | Recordset (2D Array) > Rows (Records) > Select > Start new Where | `<objet>: Start new WHERE (reset selected rows)` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get size | `size(` |  |  | — |  |
| 1 | 81 | Get capacity | `capacity(` |  |  | — |  |
| 2 | 82 | Get Elements > Get string at | `get$(` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Get Elements > Get value at | `get(` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Keys > Get key string at | `key$(` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Keys > Get key value at | `key(` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Keys > Get index with key string | `indexOfKeyStr(` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Keys > Get index with key value | `indexOfKeyVal(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Keys > Get string with key string | `keyStr$(` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Keys > Get string with key value | `keyStr(` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Keys > Get value with key string | `keyVal$(` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Keys > Get value with key value | `keyVal(` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Searching > Find element matching string | `findStr(` |  | nombre (paramètres non fiables) | — |  |
| 13 | 93 | Searching > Find element matching value | `findVal(` |  | nombre | — |  |
| 14 | 94 | Searching > Find element containing string | `containsStr(` |  | nombre (paramètres non fiables) | — |  |
| 15 | 95 | Searching > Find element containing value | `containsVal(` |  | nombre | — |  |
| 16 | 96 | Lists > Get element list | `list$(` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Lists > Get quoted element list | `quotedList$(` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Lists > Get key list | `keyList$(` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Lists > Get quoted key list | `keyQuotedList$(` |  | (paramètres non fiables) | — |  |
| 20 | 100 | Lists > Get element-key pair list | `pairList$(` |  | chaîne (paramètres non fiables) | — |  |
| 21 | 101 | Lists > Get quoted element-key pair list | `pairQuotedList$(` |  | chaîne (paramètres non fiables) | — |  |
| 22 | 102 | Totals > Get maximum value | `max(` |  |  | — |  |
| 23 | 103 | Totals > Get minimum value | `min(` |  |  | — |  |
| 24 | 104 | Totals > Get summed value | `sum(` |  |  | — |  |
| 25 | 105 | Totals > Get average value | `avg(` |  |  | — |  |
| 26 | 106 | Dimensioning > Array Dimension > Get array dimension | `dim(` |  |  | — |  |
| 27 | 107 | Dimensioning > Dimension Boundaries > Get dimension boundary | `boundary(` |  | (paramètres non fiables) | — |  |
| 28 | 108 | Dimensioning > Dimension Boundaries > Get maximum value of X | `boundaryX(` |  |  | — |  |
| 29 | 109 | Dimensioning > Dimension Boundaries > Get maximum value of Y | `boundaryY(` |  |  | — |  |
| 30 | 110 | Dimensioning > Dimension Boundaries > Get maximum value of Z | `boundaryZ(` |  |  | — |  |
| 31 | 111 | Dimensioning > Dimension Boundaries > Get maximum number of columns | `boundaryCol(` |  |  | — |  |
| 32 | 112 | Dimensioning > Dimension Boundaries > Get maximum number of rows | `boundaryRow(` |  |  | — |  |
| 33 | 113 | Dimensioning > Dimension Boundaries > Get maximum number of pages | `boundaryPage(` |  |  | — |  |
| 34 | 114 | Dimensioning > Index Transforms (1D<=>nD) > Get dimension index from index | `dimIndexOfIndex$(` |  | nombre | — |  |
| 35 | 115 | Dimensioning > Index Transforms (1D<=>nD) > Get X (dimension: 1) from index | `XOfIndex(` |  | (paramètres non fiables) | — |  |
| 36 | 116 | Dimensioning > Index Transforms (1D<=>nD) > Get Y (dimension: 2) from index | `YOfIndex(` |  | (paramètres non fiables) | — |  |
| 37 | 117 | Dimensioning > Index Transforms (1D<=>nD) > Get Z (dimension: 3) from index | `ZOfIndex(` |  | (paramètres non fiables) | — |  |
| 38 | 118 | Dimensioning > Index Transforms (1D<=>nD) > Get index from dimension index | `indexOfDimIndex(` |  | (paramètres non fiables) | — |  |
| 39 | 119 | Dimensioning > Index Transforms (1D<=>nD) > Get index from X,Y | `indexOfXY(` |  | nombre | — |  |
| 40 | 120 | Recordset (2D Array) > Rows (Records) > Number of rows | `numberOfRows(` |  |  | — |  |
| 41 | 121 | Recordset (2D Array) > Rows (Records) > Get row value list | `rowList$(` |  | (paramètres non fiables) | — |  |
| 42 | 122 | Recordset (2D Array) > Columns (Fields) > Number of columns | `numberOfCols(` |  |  | — |  |
| 43 | 123 | Recordset (2D Array) > Columns (Fields) > Labels (Fieldnames) > Get label | `getLabel$(` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Recordset (2D Array) > Columns (Fields) > Labels (Fieldnames) > Get label value list | `labelList$(` |  |  | — |  |
| 45 | 125 | Recordset (2D Array) > Columns (Fields) > Get column | `getCol(` |  | (paramètres non fiables) | — |  |
| 46 | 126 | Recordset (2D Array) > Columns (Fields) > Get column value list | `columnList$(` |  | (paramètres non fiables) | — |  |
| 47 | 127 | Recordset (2D Array) > Query > Get value from column, row | `getFromColumnRow(` |  | nombre | — |  |
| 48 | 128 | Recordset (2D Array) > Query > Get string from column, row | `getFromColumnRow$(` |  | nombre | — |  |
| 49 | 129 | Recordset (2D Array) > Query > Get value from label, row | `getFromLabelRow(` |  | nombre (paramètres non fiables) | — |  |
| 50 | 130 | Recordset (2D Array) > Query > Get string from label, row | `getFromLabelRow$(` |  | nombre (paramètres non fiables) | — |  |
| 51 | 131 | Lists > Get list delimiter | `delimiter$(` |  |  | — |  |
| 52 | 132 | Recordset (2D Array) > Query > Aggregates > Maximum value (column) | `colMax(` |  | (paramètres non fiables) | — |  |
| 53 | 133 | Recordset (2D Array) > Query > Aggregates > Minimum value (column) | `colMin(` |  | (paramètres non fiables) | — |  |
| 54 | 134 | Recordset (2D Array) > Query > Aggregates > Summed value (column) | `colSum(` |  | (paramètres non fiables) | — |  |
| 55 | 135 | Recordset (2D Array) > Query > Aggregates > Average value (column) | `colAvg(` |  | (paramètres non fiables) | — |  |
| 56 | 136 | Recordset (2D Array) > Query > Aggregates > Maximum value (label) | `labMax(` |  | (paramètres non fiables) | — |  |
| 57 | 137 | Recordset (2D Array) > Query > Aggregates > Minimum value (label) | `labMin(` |  | (paramètres non fiables) | — |  |
| 58 | 138 | Recordset (2D Array) > Query > Aggregates > Summed value (label) | `labSum(` |  | (paramètres non fiables) | — |  |
| 59 | 139 | Recordset (2D Array) > Query > Aggregates > Average value (label) | `labAvg(` |  | (paramètres non fiables) | — |  |
