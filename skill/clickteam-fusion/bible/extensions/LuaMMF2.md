# Extension LuaMMF2

- File: `LuaMMF2.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Function | `<object> On Function <p0>` |  | string expression “Function name” |
| 1 | -82 | On Error | `<object> On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Run File | `Run File <p0>` |  | string expression “Filename” |
| 1 | 81 | Run Script | `Run Script <p0>` |  | string expression “Script” |
| 2 | 82 | MMF Functions > Set Return | `Return <p0>` |  | string expression “Return” |
| 3 | 83 | Lua Functions > Call Function | `Call Function <p0> with <p1> with <p2> returns` |  | string expression “Function name”; string expression “Parameter list”; numeric expression “Return count” |
| 4 | 84 | Public Variables > Set Public Variable by value | `Set Public Variable <p0> to value <p1>` |  | string expression “Variable”; numeric expression “Value” |
| 5 | 85 | Public Variables > Set Public Variable by string | `Set Public Variable <p0> to string <p1>` |  | string expression “Variable”; string expression “String” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | MMF Functions > Get Parameter Count | `LuaParamCount(` |  |  |
| 1 | 81 | MMF Functions > Get String Parameter | `LuaStrParam(` |  | number “Parameter index” → string |
| 2 | 82 | MMF Functions > Get Value Parameter | `LuaValParam(` |  | number “Parameter index” |
| 3 | 83 | Lua Functions > Get Return Count | `LuaRetCount(` |  |  |
| 4 | 84 | Lua Functions > Get String Return | `LuaStrRet(` |  | number “Return index” → string |
| 5 | 85 | Lua Functions > Get Value Return | `LuaValRet(` |  | number “Return index” |
| 6 | 86 | Public Variables > Get Public Variable as string | `LuaPublicS(` |  | string “Variable name” → string |
| 7 | 87 | Public Variables > Get Public Variable as value | `LuaPublicV(` |  | string “Variable name” |
| 8 | 88 | Error > Get Error Message | `LuaError(` |  | → string |
