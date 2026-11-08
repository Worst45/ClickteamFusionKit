# Extension binqload

- File: `binqload.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Error | `On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Load File | `Load File ( <p0> , <p1> , <p2> , <p3> )` |  | string expression “File”; numeric expression “Memory Address”; numeric expression “Starting Byte”; numeric expression “Number of Bytes to Read (-1 to read to end of file)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get File Size | `GetFileSize(` |  | string |
| 1 | 81 | GetError | `GetError$(` |  | → string |
