# Extension Serial

- File: `Serial.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Data is waiting | `<object>: Data is waiting` |  |  |
| 1 | -82 | COM port is open | `<object> : COM port is open` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open serial port | `<object>: Open COM <p0> with a baud rate of <p1>` |  | numeric expression “COM Port (ex: 3)”; numeric expression “Baud (ex: 9600)” |
| 1 | 81 | Send data | `<object>: Send <p0>` |  | string expression “Send data to COM port” |
| 2 | 82 | Close serial port | `Close connection` |  |  |
| 3 | 83 | Clear last error | `Clear last error` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get data | `GetData(` |  | → string |
| 1 | 81 | Get bytes waiting | `BytesWaiting(` |  |  |
| 2 | 82 | Get last error | `LastError$(` |  | → string |
