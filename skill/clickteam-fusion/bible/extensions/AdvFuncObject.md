# Extension AdvFuncObject

- File: `AdvFuncObject.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Function | `<object>: On Function <p0>` |  | string expression “Function Name” |
| 1 | -82 | Call Function | `<object>: Function <p0>` |  | string expression “Function Name”; numeric expression “Clear Parameters after Function? 0 = yes, anything else = no” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add/Set String Parameter | `Set String Parameter <p0> to <p1>` |  | string expression “String Parameter Name”; string expression “String Parameter” |
| 1 | 81 | Add/Set Integer Parameter | `Set Integer Parameter <p0> to <p1>` |  | string expression “Integer Parameter Name”; numeric expression “Integer Parameter” |
| 2 | 82 | Add/Set Float Parameter | `Set Float Parameter <p0> to <p1>` |  | string expression “Float Parameter Name”; numeric expression “Float Parameter” |
| 3 | 83 | Call Function | `Call Function <p0> (Don't Clear Params = <p1>)` |  | string expression “Function Name”; numeric expression “Clear Parameters after Function? 0 = yes, anything else = no” |
| 4 | 84 | Set Integer Return Value | `Set Integer Return to <p0>` |  | numeric expression “Integer Return Value” |
| 5 | 85 | Set Float Return Value | `Set Float Return to <p0>` |  | numeric expression “Float Return Value” |
| 6 | 86 | Set String Return Value | `Set String Return to <p0>` |  | string expression “String Return Value” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Name of Current Function | `Current Function$(` |  | → string |
| 1 | 81 | Get Number of Integer Parameters | `Integer Params(` |  |  |
| 2 | 82 | Get Number of Float Parameters | `Float Params(` |  |  |
| 3 | 83 | Get Number of String Parameters | `String Params(` |  |  |
| 4 | 84 | Call Integer Function | `Integer Function(` |  | string “Function Name”; number “Clear Parameters after Function? 0 = yes, anything else = no” |
| 5 | 85 | Call Float Function | `Float Function(` |  | string “Function Name”; number “Clear Parameters after Function? 0 = yes, anything else = no” |
| 6 | 86 | Call String Function | `String Function$(` |  | string “Function Name”; number “Clear Parameters after Function? 0 = yes, anything else = no” → string |
| 7 | 87 | Get Integer Parameter | `Integer Parameter(` |  | string “Parameter Name” |
| 8 | 88 | Get Float Parameter | `Float Parameter(` |  | string “Parameter Name” |
| 9 | 89 | Get String Parameter | `String Parameter$(` |  | string “Parameter Name” → string |
| 10 | 90 | Get Integer Return Value | `Integer Return(` |  |  |
| 11 | 91 | Get Float Return Value | `Float Return(` |  |  |
| 12 | 92 | Get String Return Value | `String Return$(` |  | → string |
| 13 | 93 | Set Integer Parameter | `Set Integer Parameter(` |  | string “Integer Parameter Name”; number “Integer Parameter” |
| 14 | 94 | Set Integer Parameter$ | `Set Integer Parameter$(` |  | string “Integer Parameter Name”; number “Integer Parameter” → string |
| 15 | 95 | Set Float Parameter | `Set Float Parameter(` |  | string “Float Parameter Name”; number “Float Parameter” |
| 16 | 96 | Set Float Parameter$ | `Set Float Parameter$(` |  | string “Float Parameter Name”; number “Float Parameter” → string |
| 17 | 97 | Set String Parameter | `Set String Parameter(` |  | string “String Parameter Name”; string “String Parameter” |
| 18 | 98 | Set String Parameter$ | `Set String Parameter$(` |  | string “String Parameter Name”; string “String Parameter” → string |
