# Extension UHSD

- File: `UHSD.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has an Error Occured? | `<object>: On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add a Field | `Add Field <p0> with Data <p1>` |  | string expression “Enter the Name of the Field”; string expression “Enter the Data to be Stored in the Field” | — |  |
| 1 | 81 | Set a Field | `Set Data of Field <p0> to <p1>` |  | string expression “Enter the Name of the Field”; string expression “Enter the Data to be Stored in the Field” | — |  |
| 2 | 82 | Set Encryption Key | `Set Encryption Key to <p0>` |  | string expression “Enter the Encryption Key” | — |  |
| 3 | 83 | Set Fields to be Encrypted | `Encrypt <p0> and <p1> into <p2>` |  | string expression “Enter the First Field to Encrypt (Order Matters)”; string expression “Enter the Second Field to Encrypt (Order Matters)”; string expression “Enter the Field in Which to Store the Encrypted Fields” | — |  |
| 4 | 84 | Set Address of Add.cgi | `Set Address of Add.cgi to <p0>` |  | string expression “Enter the Address of Add.cgi (http://www.domain.com/folders/add.cgi)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Data from a Field | `FieldData$(` |  | string → string | — |  |
| 1 | 81 | Generate Query String | `QueryString$(` |  | → string | — |  |
| 2 | 82 | Generate Full URL | `URL$(` |  | → string | — |  |
| 3 | 83 | Get Current Error Code | `ErrorCode(` |  |  | — |  |
