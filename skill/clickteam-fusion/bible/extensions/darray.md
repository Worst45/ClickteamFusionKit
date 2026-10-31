# Extension darray

- File: `darray.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > Save Array > Save to file | `<object>: Save to file <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | File > Save Array > Save as MMF1.5 array | `<object>: Save to MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 2 | 82 | File > Save Array > Save to CSV file | `<object>: Save to CSV file <p0>` |  | (unreliable parameters) | — |  |
| 3 | 83 | File > Load Array > Load from file | `<object>: Load from file <p0>` |  | (unreliable parameters) | — |  |
| 4 | 84 | File > Load Array > Load from MMF array | `<object>: Load from MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 5 | 85 | File > Load Array > Load from CSV file | `<object>: Load from CSV file <p0>` |  | (unreliable parameters) | — |  |
| 6 | 86 | Add Elements > Insert string at | `<object>: Insert string <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 7 | 87 | Add Elements > Insert value at | `<object>: Insert value <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 8 | 88 | Add Elements > Append string | `<object>: Append string <p0>` |  | (unreliable parameters) | — |  |
| 9 | 89 | Add Elements > Append value | `<object>: Append value <p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | Add Elements > Append elements from file | `<object>: Append elements from file <p0>` |  | (unreliable parameters) | — |  |
| 11 | 91 | Add Elements > Append elements from MMF array | `<object>: Append elements from MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 12 | 92 | Add Elements > Append elements from CSV file | `<object>: Append elements from CSV file <p0>` |  | (unreliable parameters) | — |  |
| 13 | 93 | Replace Elements > Set string at | `<object>: Set string <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 14 | 94 | Replace Elements > Set value at | `<object>: Set value <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 15 | 95 | Recordset (2D Array) > Rows (Records) > Select > Between > Pick column for select between | `<object>: Pick col <p0> for SELECT BETWEEN` |  | (unreliable parameters) | — |  |
| 16 | 96 | Remove Elements > Delete at | `<object>: Delete at <p0>` |  | (unreliable parameters) | — |  |
| 17 | 97 | Remove Elements > Delete all | `<object>: Delete all` |  |  | — |  |
| 18 | 98 | Save Elements > Save element to file | `<object>: Save element <p0> to file <p1>` |  | (unreliable parameters) | — |  |
| 19 | 99 | Save Elements > Append element to file | `<object>: Append element <p0> to file <p1>` |  | (unreliable parameters) | — |  |
| 20 | 100 | Keys > Set key string at | `<object>: Set key string <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 21 | 101 | Keys > Set key value at | `<object>: Set key value <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 22 | 102 | Sorting > Sort strings ascending (ABC) | `<object>: Sort strings ascending (ABC)` |  |  | — |  |
| 23 | 103 | Sorting > Sort strings descending (CBA) | `<object>: Sort strings descending (CBA)` |  |  | — |  |
| 24 | 104 | Sorting > Sort values ascending (123) | `<object>: Sort values ascending (123)` |  |  | — |  |
| 25 | 105 | Sorting > Sort values descending (321) | `<object>: Sort values descending (321)` |  |  | — |  |
| 26 | 106 | Recordset (2D Array) > Rows (Records) > Select > Between > Select rows between values | `<object>: SELECT BETWEEN <p0> AND <p1>` |  | (unreliable parameters) | — |  |
| 27 | 107 | Dimensioning > Array Dimension > Set array dimension | `<object>: Set array dimension to <p0>` |  | (unreliable parameters) | — |  |
| 28 | 108 | Dimensioning > Array Dimension > Use 2D array (dimensions: 2) | `<object>: Set array dimension to 2` |  |  | — |  |
| 29 | 109 | Dimensioning > Array Dimension > Use 3D array (dimensions: 3) | `<object>: Set array dimension to 3` |  |  | — |  |
| 30 | 110 | Dimensioning > Dimension Boundaries > Set dimension boundary | `<object>: Set dimension <p0> boundary to <p1>` |  | (unreliable parameters) | — |  |
| 31 | 111 | Dimensioning > Dimension Boundaries > Resize dimension boundary | `<object>: Resize dimension <p0> boundary to <p1>` |  | (unreliable parameters) | — |  |
| 32 | 112 | Recordset (2D Array) > Rows (Records) > Insert > Insert row from list | `<object>: Insert row from list <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 33 | 113 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows greater than or equal to | `<object>: SELECT WHERE <p0> >= <p1>` |  | (unreliable parameters) | — |  |
| 34 | 114 | Recordset (2D Array) > Rows (Records) > Append > Append row from list | `<object>: Append row from list <p0>` |  | (unreliable parameters) | — |  |
| 35 | 115 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows less than | `<object>: SELECT WHERE <p0> < <p1>` |  | (unreliable parameters) | — |  |
| 36 | 116 | Recordset (2D Array) > Rows (Records) > Update > Replace row with list | `<object>: Replace row from list <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 37 | 117 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows less than or equal to | `<object>: SELECT WHERE <p0> <= <p1>` |  | (unreliable parameters) | — |  |
| 38 | 118 | Recordset (2D Array) > Rows (Records) > Select > Between > Pick label for select between | `<object>: Pick <p0> for SELECT BETWEEN` |  | (unreliable parameters) | — |  |
| 39 | 119 | Recordset (2D Array) > Rows (Records) > Delete > Delete row | `<object>: Delete row <p0>` |  | (unreliable parameters) | — |  |
| 40 | 120 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column value ascending | `<object>: Sort rows by column <p0> value ascending` |  | (unreliable parameters) | — |  |
| 41 | 121 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column value descending | `<object>: Sort rows by column <p0> value descending` |  | (unreliable parameters) | — |  |
| 42 | 122 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column string ascending | `<object>: Sort rows by column <p0> string ascending` |  | (unreliable parameters) | — |  |
| 43 | 123 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by column string descending | `<object>: Sort rows by column <p0> string descending` |  | (unreliable parameters) | — |  |
| 44 | 124 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label value ascending | `<object>: Sort rows by label <p0> value ascending` |  | (unreliable parameters) | — |  |
| 45 | 125 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label value descending | `<object>: Sort rows by label <p0> value descending` |  | (unreliable parameters) | — |  |
| 46 | 126 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label string ascending | `<object>: Sort rows by label <p0> string ascending` |  | (unreliable parameters) | — |  |
| 47 | 127 | Recordset (2D Array) > Rows (Records) > Sorting > Sort rows by label string descending | `<object>: Sort rows by label <p0> string descending` |  | (unreliable parameters) | — |  |
| 48 | 128 | Recordset (2D Array) > Columns (Fields) > Set label | `<object>: Set label to <p0> at column <p1>` |  | (unreliable parameters) | — |  |
| 49 | 129 | Recordset (2D Array) > Rows (Records) > Select > Between > Select rows between strings | `<object>: SELECT BETWEEN <p0> AND <p1>` |  | (unreliable parameters) | — |  |
| 50 | 130 | Settings > String Comparisons > Case Insensitive (A=a) | `<object>: Case insensitive (A=a)` |  |  | — |  |
| 51 | 131 | Settings > String Comparisons > Case Sensitive (A<a) | `<object>: Case sensitive (A<a)` |  |  | — |  |
| 52 | 132 | Replace Elements > Set file at | `<object>: Set file <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 53 | 133 | Add Elements > Insert file at | `<object>: Insert file <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 54 | 134 | Add Elements > Append file | `<object>: Append file <p0>` |  | (unreliable parameters) | — |  |
| 55 | 135 | Settings > Search Mode > Literal | `<object>: Use literal search mode` |  |  | — |  |
| 56 | 136 | Settings > Search Mode > Wildcard | `<object>: Use wildcard search mode` |  |  | — |  |
| 57 | 137 | Settings > Set list delimiter | `<object>: Set list delimiter to <p0>` |  | (unreliable parameters) | — |  |
| 58 | 138 | File > Save Array > Save to INI file | `<object>: Save to INI file <p0>` |  | (unreliable parameters) | — |  |
| 59 | 139 | File > Load Array > Load from INI file | `<object>: Load from INI file <p0>` |  | (unreliable parameters) | — |  |
| 60 | 140 | Add Elements > Append elements from INI file | `<object>: Append elements from INI file <p0>` |  | (unreliable parameters) | — |  |
| 61 | 141 | Recordset (2D Array) > Rows (Records) > Select > Selection mode > AND (Exclusive) | `<object>: Select rows using AND mode` |  |  | — |  |
| 62 | 142 | Recordset (2D Array) > Rows (Records) > Select > Selection mode > OR (Inclusive) | `<object>: Select rows using OR mode` |  |  | — |  |
| 63 | 143 | Recordset (2D Array) > Rows (Records) > Select > Select all rows | `<object>: Select all rows` |  |  | — |  |
| 64 | 144 | Recordset (2D Array) > Rows (Records) > Select > Invert selection | `<object>: Invert selection of rows` |  |  | — |  |
| 65 | 145 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows matching | `<object>: SELECT WHERE col <p0> LIKE <p1>` |  | (unreliable parameters) | — |  |
| 66 | 146 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows containing | `<object>: SELECT WHERE col <p0> LIKE *<p1>*` |  | (unreliable parameters) | — |  |
| 67 | 147 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows equal to | `<object>: SELECT WHERE col <p0> = <p1>` |  | (unreliable parameters) | — |  |
| 68 | 148 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows not equal to | `<object>: SELECT WHERE col <p0> <> <p1>` |  | (unreliable parameters) | — |  |
| 69 | 149 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows greater than | `<object>: SELECT WHERE col <p0> > <p1>` |  | (unreliable parameters) | — |  |
| 70 | 150 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows greater than or equal to | `<object>: SELECT WHERE col <p0> >= <p1>` |  | (unreliable parameters) | — |  |
| 71 | 151 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows less than | `<object>: SELECT WHERE col <p0> < <p1>` |  | (unreliable parameters) | — |  |
| 72 | 152 | Recordset (2D Array) > Rows (Records) > Select > Where (column index) > Select rows less than or equal to | `<object>: SELECT WHERE col <p0> <= <p1>` |  | (unreliable parameters) | — |  |
| 73 | 153 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows matching | `<object>: SELECT WHERE <p0> LIKE <p1>` |  | (unreliable parameters) | — |  |
| 74 | 154 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows containing | `<object>: SELECT WHERE <p0> LIKE *<p1>*` |  | (unreliable parameters) | — |  |
| 75 | 155 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows equal to | `<object>: SELECT WHERE <p0> = <p1>` |  | (unreliable parameters) | — |  |
| 76 | 156 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows not equal to | `<object>: SELECT WHERE <p0> <> <p1>` |  | (unreliable parameters) | — |  |
| 77 | 157 | Recordset (2D Array) > Rows (Records) > Select > Where (label) > Select rows greater than | `<object>: SELECT WHERE <p0> > <p1>` |  | (unreliable parameters) | — |  |
| 78 | 158 | Recordset (2D Array) > Rows (Records) > Select > Start new Where | `<object>: Start new WHERE (reset selected rows)` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get size | `size(` |  |  | — |  |
| 1 | 81 | Get capacity | `capacity(` |  |  | — |  |
| 2 | 82 | Get Elements > Get string at | `get$(` |  | (unreliable parameters) | — |  |
| 3 | 83 | Get Elements > Get value at | `get(` |  | (unreliable parameters) | — |  |
| 4 | 84 | Keys > Get key string at | `key$(` |  | (unreliable parameters) | — |  |
| 5 | 85 | Keys > Get key value at | `key(` |  | (unreliable parameters) | — |  |
| 6 | 86 | Keys > Get index with key string | `indexOfKeyStr(` |  | (unreliable parameters) | — |  |
| 7 | 87 | Keys > Get index with key value | `indexOfKeyVal(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Keys > Get string with key string | `keyStr$(` |  | (unreliable parameters) | — |  |
| 9 | 89 | Keys > Get string with key value | `keyStr(` |  | (unreliable parameters) | — |  |
| 10 | 90 | Keys > Get value with key string | `keyVal$(` |  | (unreliable parameters) | — |  |
| 11 | 91 | Keys > Get value with key value | `keyVal(` |  | (unreliable parameters) | — |  |
| 12 | 92 | Searching > Find element matching string | `findStr(` |  | number (unreliable parameters) | — |  |
| 13 | 93 | Searching > Find element matching value | `findVal(` |  | number | — |  |
| 14 | 94 | Searching > Find element containing string | `containsStr(` |  | number (unreliable parameters) | — |  |
| 15 | 95 | Searching > Find element containing value | `containsVal(` |  | number | — |  |
| 16 | 96 | Lists > Get element list | `list$(` |  | (unreliable parameters) | — |  |
| 17 | 97 | Lists > Get quoted element list | `quotedList$(` |  | (unreliable parameters) | — |  |
| 18 | 98 | Lists > Get key list | `keyList$(` |  | (unreliable parameters) | — |  |
| 19 | 99 | Lists > Get quoted key list | `keyQuotedList$(` |  | (unreliable parameters) | — |  |
| 20 | 100 | Lists > Get element-key pair list | `pairList$(` |  | string (unreliable parameters) | — |  |
| 21 | 101 | Lists > Get quoted element-key pair list | `pairQuotedList$(` |  | string (unreliable parameters) | — |  |
| 22 | 102 | Totals > Get maximum value | `max(` |  |  | — |  |
| 23 | 103 | Totals > Get minimum value | `min(` |  |  | — |  |
| 24 | 104 | Totals > Get summed value | `sum(` |  |  | — |  |
| 25 | 105 | Totals > Get average value | `avg(` |  |  | — |  |
| 26 | 106 | Dimensioning > Array Dimension > Get array dimension | `dim(` |  |  | — |  |
| 27 | 107 | Dimensioning > Dimension Boundaries > Get dimension boundary | `boundary(` |  | (unreliable parameters) | — |  |
| 28 | 108 | Dimensioning > Dimension Boundaries > Get maximum value of X | `boundaryX(` |  |  | — |  |
| 29 | 109 | Dimensioning > Dimension Boundaries > Get maximum value of Y | `boundaryY(` |  |  | — |  |
| 30 | 110 | Dimensioning > Dimension Boundaries > Get maximum value of Z | `boundaryZ(` |  |  | — |  |
| 31 | 111 | Dimensioning > Dimension Boundaries > Get maximum number of columns | `boundaryCol(` |  |  | — |  |
| 32 | 112 | Dimensioning > Dimension Boundaries > Get maximum number of rows | `boundaryRow(` |  |  | — |  |
| 33 | 113 | Dimensioning > Dimension Boundaries > Get maximum number of pages | `boundaryPage(` |  |  | — |  |
| 34 | 114 | Dimensioning > Index Transforms (1D<=>nD) > Get dimension index from index | `dimIndexOfIndex$(` |  | number | — |  |
| 35 | 115 | Dimensioning > Index Transforms (1D<=>nD) > Get X (dimension: 1) from index | `XOfIndex(` |  | (unreliable parameters) | — |  |
| 36 | 116 | Dimensioning > Index Transforms (1D<=>nD) > Get Y (dimension: 2) from index | `YOfIndex(` |  | (unreliable parameters) | — |  |
| 37 | 117 | Dimensioning > Index Transforms (1D<=>nD) > Get Z (dimension: 3) from index | `ZOfIndex(` |  | (unreliable parameters) | — |  |
| 38 | 118 | Dimensioning > Index Transforms (1D<=>nD) > Get index from dimension index | `indexOfDimIndex(` |  | (unreliable parameters) | — |  |
| 39 | 119 | Dimensioning > Index Transforms (1D<=>nD) > Get index from X,Y | `indexOfXY(` |  | number | — |  |
| 40 | 120 | Recordset (2D Array) > Rows (Records) > Number of rows | `numberOfRows(` |  |  | — |  |
| 41 | 121 | Recordset (2D Array) > Rows (Records) > Get row value list | `rowList$(` |  | (unreliable parameters) | — |  |
| 42 | 122 | Recordset (2D Array) > Columns (Fields) > Number of columns | `numberOfCols(` |  |  | — |  |
| 43 | 123 | Recordset (2D Array) > Columns (Fields) > Labels (Fieldnames) > Get label | `getLabel$(` |  | (unreliable parameters) | — |  |
| 44 | 124 | Recordset (2D Array) > Columns (Fields) > Labels (Fieldnames) > Get label value list | `labelList$(` |  |  | — |  |
| 45 | 125 | Recordset (2D Array) > Columns (Fields) > Get column | `getCol(` |  | (unreliable parameters) | — |  |
| 46 | 126 | Recordset (2D Array) > Columns (Fields) > Get column value list | `columnList$(` |  | (unreliable parameters) | — |  |
| 47 | 127 | Recordset (2D Array) > Query > Get value from column, row | `getFromColumnRow(` |  | number | — |  |
| 48 | 128 | Recordset (2D Array) > Query > Get string from column, row | `getFromColumnRow$(` |  | number | — |  |
| 49 | 129 | Recordset (2D Array) > Query > Get value from label, row | `getFromLabelRow(` |  | number (unreliable parameters) | — |  |
| 50 | 130 | Recordset (2D Array) > Query > Get string from label, row | `getFromLabelRow$(` |  | number (unreliable parameters) | — |  |
| 51 | 131 | Lists > Get list delimiter | `delimiter$(` |  |  | — |  |
| 52 | 132 | Recordset (2D Array) > Query > Aggregates > Maximum value (column) | `colMax(` |  | (unreliable parameters) | — |  |
| 53 | 133 | Recordset (2D Array) > Query > Aggregates > Minimum value (column) | `colMin(` |  | (unreliable parameters) | — |  |
| 54 | 134 | Recordset (2D Array) > Query > Aggregates > Summed value (column) | `colSum(` |  | (unreliable parameters) | — |  |
| 55 | 135 | Recordset (2D Array) > Query > Aggregates > Average value (column) | `colAvg(` |  | (unreliable parameters) | — |  |
| 56 | 136 | Recordset (2D Array) > Query > Aggregates > Maximum value (label) | `labMax(` |  | (unreliable parameters) | — |  |
| 57 | 137 | Recordset (2D Array) > Query > Aggregates > Minimum value (label) | `labMin(` |  | (unreliable parameters) | — |  |
| 58 | 138 | Recordset (2D Array) > Query > Aggregates > Summed value (label) | `labSum(` |  | (unreliable parameters) | — |  |
| 59 | 139 | Recordset (2D Array) > Query > Aggregates > Average value (label) | `labAvg(` |  | (unreliable parameters) | — |  |
