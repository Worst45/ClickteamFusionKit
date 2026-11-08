# Extension LuaPlus

- File: `LuaPlus.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On error | `<object>: On error` |  |  |
| 1 | -82 | On function | `<object> : On function <p0>` |  | string expression “Function name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Run file | `Run file <p0>` |  | file name “File to run” |
| 1 | 81 | Run string | `Run string <p0>` |  | string expression “String to run” |
| 2 | 82 | MMF functions > Register function | `Register function <p0> (minimum amount of parameters = <p1>)` |  | string expression “Function name”; numeric expression “Minimum amount of parameters” |
| 3 | 83 | MMF functions > Push string return value | `Push string return value <p0>` |  | string expression “Value” |
| 4 | 84 | MMF functions > Push numeric return value | `Push numeric return value <p0>` |  | numeric expression “Value” |
| 5 | 85 | MMF functions > Push boolean return value | `Push boolean return value <p0>` |  | numeric expression “Value (0 or 1)” |
| 6 | 86 | Lua functions > Push string parameter | `Push string parameter <p0>` |  | string expression “Value” |
| 7 | 87 | Lua functions > Push numeric parameter | `Push numeric parameter <p0>` |  | numeric expression “Value” |
| 8 | 88 | Lua functions > Push boolean parameter | `Push boolean parameter <p0>` |  | numeric expression “Value (0 or 1)” |
| 9 | 89 | Lua functions > Call function > In this thread | `Call Lua function <p0> in this thread` |  | string expression “Function name” |
| 10 | 90 | Variables > Set string variable | `Set string variable <p0> to <p1>` |  | string expression “Variable name”; string expression “Value” |
| 11 | 91 | Variables > Set numeric variable | `Set numeric variable <p0> to <p1>` |  | string expression “Variable name”; numeric expression “Value” |
| 12 | 92 | Variables > Set boolean variable | `Set boolean variable <p0> to <p1>` |  | string expression “Variable name”; numeric expression “Value (0 or 1)” |
| 13 | 93 | Stack > Push string | `Push string <p0> onto stack` |  | string expression “Value” |
| 14 | 94 | Stack > Push number | `Push number <p0> onto stack` |  | numeric expression “Value” |
| 15 | 95 | Stack > Push boolean | `Push boolean <p0> onto stack` |  | numeric expression “Value (0 or 1)” |
| 16 | 96 | Stack > Pop and discard item | `Pop and discard item from stack` |  |  |
| 17 | 97 | Stack > Clear stack | `Clear stack` |  |  |
| 18 | 98 | MMF interface > Enable | `Enable MMF interface` |  |  |
| 19 | 99 | MMF interface > Export object | `Export object <p0> to slot <p1>` |  | object “Object to export”; numeric expression “Slot” |
| 20 | 100 | Lua functions > Call function > In a new thread | `Call Lua function <p0> in a new thread` |  | string expression “Function name” |
| 21 | 101 | Lua libraries > Open base | `Open library: base` |  |  |
| 22 | 102 | Lua libraries > Open table | `Open library: table` |  |  |
| 23 | 103 | Lua libraries > Open I/O | `Open library: I/O` |  |  |
| 24 | 104 | Lua libraries > Open OS | `Open library: OS` |  |  |
| 25 | 105 | Lua libraries > Open string | `Open library: string` |  |  |
| 26 | 106 | Lua libraries > Open math | `Open library: math` |  |  |
| 27 | 107 | Lua libraries > Open debug | `Open library: debug` |  |  |
| 28 | 108 | Lua libraries > Open package | `Open library: package` |  |  |
| 29 | 109 | Lua libraries > Open all libs | `Open all libs` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get last error | `LastError$(` |  | → string |
| 1 | 81 | MMF functions > Get number of parameters | `ToMMF_ParamCount(` |  |  |
| 2 | 82 | MMF functions > Get string parameter | `ToMMF_StringParameter$(` |  | number “Index” → string |
| 3 | 83 | MMF functions > Get numeric parameter | `ToMMF_NumericParameter(` |  | number “Index” |
| 4 | 84 | MMF functions > Get boolean parameter | `ToMMF_BooleanParameter(` |  | number “Index” |
| 5 | 85 | Lua functions > Get number of return values | `FromLua_ReturnCount(` |  |  |
| 6 | 86 | Lua functions > Get string return value | `FromLua_StringReturn$(` |  | number “Index” → string |
| 7 | 87 | Lua functions > Get numeric return value | `FromLua_NumericReturn(` |  | number “Index” |
| 8 | 88 | Lua functions > Get boolean return value | `FromLua_BooleanReturn(` |  | number “Index” |
| 9 | 89 | Variables > Get string variable | `StringVariable$(` |  | string “Name” → string |
| 10 | 90 | Variables > Get numeric variable | `NumericVariable(` |  | string “Name” |
| 11 | 91 | Variables > Get boolean variable | `BooleanVariable(` |  | string “Name” |
| 12 | 92 | Stack > Pop string | `PopString$(` |  | → string |
| 13 | 93 | Stack > Pop number | `PopNumber(` |  |  |
| 14 | 94 | Stack > Pop boolean | `PopBoolean(` |  |  |
| 15 | 95 | Stack > Grab string | `GrabString$(` |  | → string (unreliable parameters) |
| 16 | 96 | Stack > Grab number | `GrabNumber(` |  | (unreliable parameters) |
| 17 | 97 | Stack > Grab boolean | `GrabBoolean(` |  | (unreliable parameters) |
| 18 | 98 | Stack > Get size | `StackSize(` |  |  |
| 19 | 99 | Lua functions > Call function > Number return > Previously pushed parameters | `LuaFunction(` |  | string “Function name” |
| 20 | 100 | Lua functions > Call function > String return > Previously pushed parameters | `LuaFunction$(` |  | string “Function name” → string |
| 21 | 101 | Lua functions > Call function > Number return > Number parameter | `LuaFunctionN(` |  | string “Function name”; number “Parameter” |
| 22 | 102 | Lua functions > Call function > Number return > String parameter | `LuaFunctionS(` |  | string “Function name”; string “Parameter” |
| 23 | 103 | Lua functions > Call function > String return > Number parameter | `LuaFunctionN$(` |  | string “Function name”; number “Parameter” → string |
| 24 | 104 | Lua functions > Call function > String return > String parameter | `LuaFunctionS$(` |  | string “Function name”; string “Parameter” → string |
