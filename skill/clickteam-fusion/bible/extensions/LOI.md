# Extension LOI

- File: `LOI.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | isListEmpty | `<object>: isListEmpty` |  |  |
| 1 | -82 | onError | `<object> : On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add to list | `Add <p0> to list` |  | numeric expression “Value” |
| 1 | 81 | Delete from list | `Delete item <p0> from list` |  | numeric expression “Index” |
| 2 | 82 | Change item | `Change item <p1> to <p0>` |  | numeric expression “Value”; numeric expression “Index” |
| 3 | 83 | Insert item | `Insert value <p0> at <p1>` |  | numeric expression “Value”; numeric expression “Index” |
| 4 | 84 | Reset | `Reset` |  |  |
| 5 | 85 | Sort > ASC | `Sort Asc` |  |  |
| 6 | 86 | Sort > DESC | `Sort Desc` |  |  |
| 7 | 87 | Swap two items | `Swap <p0> with <p1>` |  | numeric expression “Index”; numeric expression “Index” |
| 8 | 88 | Append File to List | `Append <p0> to List` |  | string expression “Path to file” |
| 9 | 89 | Save List to File | `Save List to <p0>` |  | string expression “Path to file” |
| 10 | 90 | Load List from File | `Load List from <p0>` |  | string expression “Path to file” |
| 11 | 91 | Increment item | `Increment item <p0>` |  | numeric expression “Index” |
| 12 | 92 | Decrement item | `Decrement item <p0>` |  | numeric expression “Index” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Size of list | `GetSize(` |  |  |
| 1 | 81 | Get last error | `GetError$(` |  | → string |
| 2 | 82 | Get value from list | `GetValue(` |  | number “Index” |
| 3 | 83 | Get value from list and delete it | `GetValueD(` |  | number “Index” |
| 4 | 84 | Get last value from list | `GetLast(` |  |  |
