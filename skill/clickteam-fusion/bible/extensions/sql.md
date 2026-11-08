# Extension sql

- File: `sql.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | SQL Error? | `<object> Error` |  |  |
| 1 | -82 | DB Open? | `<object> Database Open` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open File | `Open Database file (string: <p0>)` |  | string expression “Database file name” |
| 1 | 81 | Open File from selector | `Open Database file from selector` |  | file name “Database file name” |
| 2 | 82 | Close File | `Close Database file` |  |  |
| 3 | 83 | Run SQL | `Run SQL String <p0>` |  | string expression “SQL String” |
| 4 | 84 | Set Current Row | `Set Current Row <p0>` |  | numeric expression “Row Number” |
| 5 | 85 | Set Current Column | `Set Current Column <p0>` |  | numeric expression “Column Number” |
| 6 | 86 | Clear Last Error | `Clear Last Error` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Data | `Data(` |  | → string |
| 1 | 81 | Get Column Name | `ColumnName(` |  | → string |
| 2 | 82 | Get Num Rows | `Rows(` |  |  |
| 3 | 83 | Get Num Cols | `Cols(` |  |  |
| 4 | 84 | Get Error Code | `Err(` |  |  |
| 5 | 85 | Get Error Message | `ErrMsg(` |  | → string |
| 6 | 86 | Get Data from Row, Col | `DataRowCol(` |  | number; number → string |
| 7 | 87 | Get Data from Col Name | `DataColbyName(` |  | string → string |
| 8 | 88 | Get Data from Row, Col Name | `DataRowColbyName(` |  | number; string → string |
| 9 | 89 | Quote | `Quote(` |  | string → string |
| 10 | 90 | Get Current Row Index | `CurrRow(` |  |  |
| 11 | 91 | Get Current Column Index | `CurrCol(` |  |  |
