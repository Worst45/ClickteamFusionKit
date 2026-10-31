# Extension xlua

- File: `xlua.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<object>: On Error` |  |  | — |  |
| 1 | -82 | On Function | `<object>: On Function <p0>` |  | string expression “Function Name” | — |  |
| 2 | -83 | On Print | `<object>: On Print` |  |  | — |  |
| 3 | -84 | MMF Interface Enabled | `<object>: MMF Interface Enabled` |  |  | — |  |
| 4 | -85 | WIN Interface Enabled | `<object>: WIN Interface Enabled` |  |  | — |  |
| 5 | -86 | Bound to Lua State | `<object>: Bound to Lua State` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run File | `Run Source File <p0>` |  | file name “File” | — |  |
| 1 | 81 | Run String | `Run Source String <p0>` |  | string expression “String” | — |  |
| 2 | 82 | Lua Functions > Push Numeric Parameter | `Push Numeric Paramter: <p0>` |  | numeric expression “Number” | — |  |
| 3 | 83 | Lua Functions > Push String Parameter | `Push String Parameter: <p0>` |  | string expression “String” | — |  |
| 4 | 84 | Lua Functions > Push Boolean Parameter | `Push Boolean Parameter: <p0>` |  | numeric expression “Boolean” | — |  |
| 5 | 85 | Lua Functions > Call Lua Function | `Call Function: <p0>` |  | string expression “String” | — |  |
| 6 | 86 | MMF Functions > Push Numeric Return Value | `Push Numeric Return Value: <p0>` |  | numeric expression “Number” | — |  |
| 7 | 87 | MMF Functions > Push String Return Value | `Push String Return Value: <p0>` |  | string expression “String” | — |  |
| 8 | 88 | MMF Functions > Push Boolean Return Value | `Push Boolean Return Value: <p0>` |  | numeric expression “Number” | — |  |
| 9 | 89 | Libraries > Open All Libraries | `Open All Libraries` |  |  | — |  |
| 10 | 90 | Libraries > Open Base | `Open Base` |  |  | — |  |
| 11 | 91 | Libraries > Open 'package' | `Open 'package'` |  |  | — |  |
| 12 | 92 | Libraries > Open 'table' | `Open 'table'` |  |  | — |  |
| 13 | 93 | Libraries > Open 'io' | `Open 'io'` |  |  | — |  |
| 14 | 94 | Libraries > Open 'os' | `Open 'os'` |  |  | — |  |
| 15 | 95 | Libraries > Open 'string' | `Open 'string'` |  |  | — |  |
| 16 | 96 | Libraries > Open 'math' | `Open 'math'` |  |  | — |  |
| 17 | 97 | Libraries > Open 'debug' | `Open 'debug'` |  |  | — |  |
| 18 | 98 | Libraries > Open 'bit' | `Open 'bit'` |  |  | — |  |
| 19 | 99 | MMF Functions > Register MMF Function | `Register MMF Function <p0> with <p1> params` |  | string expression “Function Name”; numeric expression “Minimum Parameter Count” | — |  |
| 20 | 100 | Variables > Set Numeric Variable | `Set Numeric Variable <p0> to <p1>` |  | string expression “Variable Name”; numeric expression “Numeric Value” | — |  |
| 21 | 101 | Variables > Set String Variable | `Set String Variable <p0> to <p1>` |  | string expression “Variable Name”; string expression “String Value” | — |  |
| 22 | 102 | Variables > Set Boolean Variable | `Set Boolean Variable <p0> to <p1>` |  | string expression “Variable Name”; numeric expression “Boolean Value” | — |  |
| 23 | 103 | MMF Interface > Export Object | `Export Object <p0> with ID <p1>` |  | object “Object To Export”; numeric expression “Identifier” | — |  |
| 24 | 104 | Local Storage > Set Local Value | `Set Local Storage Value <p0> = <p1>` |  | numeric expression “Identifier”; numeric expression “Value” | — |  |
| 25 | 105 | Local Storage > Set Local String | `Set Local Storage String <p0> = <p1>` |  | numeric expression “Identifier”; string expression “String Value” | — |  |
| 26 | 106 | MMF Interface > Enable | `Enable MMF Interface` |  |  | — |  |
| 27 | 107 | Libraries > Enable LuaJIT | `Enable LuaJIT` |  |  | — |  |
| 28 | 108 | Libraries > Open 'jit' | `Open 'bit'` |  |  | — |  |
| 29 | 109 | WIN Interface > Enable | `Enable WIN Interface` |  |  | — |  |
| 31 | 111 | Local Storage > Reset Local Storage | `Reset Local Storage` |  |  | — |  |
| 32 | 112 | MMF Interface > Reset Exports | `Reset MMFI Exports` |  |  | — |  |
| 33 | 113 | WIN Interface > Reset Exports | `Reset WINI Exports` |  |  | — |  |
| 34 | 114 | State > Create State | `Create Lua State <p0>` |  | numeric expression “Identifier” | — |  |
| 35 | 115 | State > Destroy State | `Destroy Lua State <p0>` |  | numeric expression “Identifier” | — |  |
| 36 | 116 | State > Bind State | `Bind Lua State <p0>` |  | numeric expression “Identifier” | — |  |
| 37 | 117 | State > Unbind State | `Unbind Lua State` |  |  | — |  |
| 38 | 118 | MMF Functions > Invoke MMF Function | `Invoke MMF Function: <p0>` |  | string expression “String” | — |  |
| 41 | 121 | Lua Functions > Push NIL | `Push NIL` |  |  | — |  |
| 42 | 122 | MMF Functions > Push NIL | `Push NIL` |  |  | — |  |
| 43 | 123 | Extensions > Bind OpenGL Object | `Bind OpenGL Object: <p0>` |  | object “OpenGL Object” | — |  |
| 44 | 124 | Libraries > Open 'gl' | `Open 'gl'` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Error String | `ErrorString$(` |  | → string | — |  |
| 1 | 81 | Lua Functions > Get Numeric Return | `LF_NumericReturn(` |  | number “1-based index” | — |  |
| 2 | 82 | Lua Functions > Get String Return | `LF_StringReturn$(` |  | number “1-based index” → string | — |  |
| 3 | 83 | Lua Functions > Get Boolean Return | `LF_BooleanReturn(` |  | number “1-based index” | — |  |
| 4 | 84 | Lua Functions > Get Return Count | `LF_ReturnCount(` |  |  | — |  |
| 5 | 85 | MMF Functions > Get Numeric Parameter | `MF_NumericParam(` |  | number “1-based index” | — |  |
| 6 | 86 | MMF Functions > Get String Parameter | `MF_StringParam$(` |  | number “1-based index” → string | — |  |
| 7 | 87 | MMF Functions > Get Boolean Parameter | `MF_BooleanParam(` |  | number “1-based index” | — |  |
| 8 | 88 | MMF Functions > Get Parameter Count | `MF_ParamCount(` |  |  | — |  |
| 9 | 89 | Variables > Get Numeric Variable | `NumericVar(` |  | string “Variable Name” | — |  |
| 10 | 90 | Variables > Get String Variable | `StringVar$(` |  | string “Variable Name” → string | — |  |
| 11 | 91 | Variables > Get Boolean Variable | `BooleanVar(` |  | string “Variable Name” | — |  |
| 12 | 92 | Local Storage > Get Local Value | `LocalVal(` |  | number “Value ID” | — |  |
| 13 | 93 | Local Storage > Get Local String | `LocalStr$(` |  | string “String ID” | — |  |
| 14 | 94 | Get Print String | `PrintString$(` |  | → string | — |  |
| 15 | 95 | Lua Functions > Call Lua Function > Numeric Return > Call with existing parameters | `LuaFunction(` |  | string “Function” | — |  |
| 16 | 96 | Lua Functions > Call Lua Function > String Return > Call with existing parameters | `LuaFunction$(` |  | string “Function” → string | — |  |
| 17 | 97 | Lua Functions > Call Lua Function > Numeric Return > Call with numeric parameter | `LuaFunctionNP(` |  | string “Function”; number “Parameter” | — |  |
| 18 | 98 | Lua Functions > Call Lua Function > Numeric Return > Call with string parameter | `LuaFunctionSP(` |  | string “Function”; string “Parameter” | — |  |
| 19 | 99 | Lua Functions > Call Lua Function > String Return > Call with numeric parameter | `LuaFunctionNP$(` |  | string “Function”; number “Parameter” → string | — |  |
| 20 | 100 | Lua Functions > Call Lua Function > String Return > Call with string parameter | `LuaFunctionSP$(` |  | string “Function”; string “Parameter” → string | — |  |
