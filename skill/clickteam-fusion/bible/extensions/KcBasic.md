# Extension KcBasic

- File: `KcBasic.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Program Running | `<object>:Is Program Running?` |  |  | — |  |
| 1 | -82 | Check for Error | `<object>:Was an Error?` |  |  | — |  |
| 2 | -83 | Everything OK? | `<object>:All OK?` |  |  | — |  |
| 3 | -84 | On Tag? | `<object>:On Tag <p0>?` |  | string expression “Variable name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load from ... | `Load program from <p0>` |  | string expression “Program in string buffer ” | — |  |
| 1 | 81 | Run | `Run` |  |  | — |  |
| 2 | 82 | Run from line ... | `Run from line: <p0>` |  | numeric expression “From Line Number” | — |  |
| 3 | 83 | Set integer variable | `SetIntVar(<p0>)=<p1>` |  | string expression “Name of Variable Integer”; numeric expression “Set value integer” | — |  |
| 4 | 84 | Set string variable | `SetStrVar$(<p0>)=<p1>` |  | string expression “Name of Variable String”; string expression “Set value string” | — |  |
| 5 | 85 | Clear variables | `Clear Variables` |  |  | — |  |
| 6 | 86 | Clear program | `Clear Program & Variables` |  |  | — |  |
| 7 | 87 | Execute Command | `Execute Command <p0>` |  | string expression “Command String” | — |  |
| 8 | 88 | Load from file | `Load Program from file <p0>` |  | file name “Load from file” | — |  |
| 9 | 89 | Load program block | `Load Program block` |  |  | — |  |
| 10 | 90 | Set float variable | `SetFloatVar(<p0>)=<p1>` |  | string expression “Name of Variable Float”; numeric expression “Set value float” | — |  |
| 11 | 91 | Re-Run | `Re-Run Program` |  |  | — |  |
| 12 | 92 | Re-Run from line ... | `Re-Run from line: <p0>` |  | numeric expression “From Line Number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Integer Variable | `GetVarInt(` |  | string “Variable name” | — |  |
| 1 | 81 | Get Float Variable | `GetVarFloat(` |  | string “Variable name” | — |  |
| 2 | 82 | Get String Variable | `GetVarStr$(` |  | string “Variable name” → string | — |  |
| 3 | 83 | Error Number | `ErrorNum(` |  |  | — |  |
| 4 | 84 | String Error | `ErrorStr$(` |  | → string | — |  |
| 5 | 85 | GOSUB Integer Variable | `GOSUB_Int(` |  | number “From Line Number” | — |  |
| 6 | 86 | GOSUB Float Variable | `GOSUB_Float(` |  | number “From Line Number” | — |  |
| 7 | 87 | GOSUB String Variable | `GOSUB_Str$(` |  | number “From Line Number” → string | — |  |
