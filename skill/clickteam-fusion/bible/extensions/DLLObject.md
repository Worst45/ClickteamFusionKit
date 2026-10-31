# Extension DLLObject

- File: `DLLObject.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<object> On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load DLL | `Load <p0>` |  | string expression “Load DLL” | — |  |
| 1 | 81 | Unload DLL | `Unload DLL` |  |  | — |  |
| 2 | 82 | Call Function | `Call Function <p0>` |  | string expression “Call Function” | — |  |
| 3 | 83 | Return Value > No Return Value | `No Return Value` |  |  | — |  |
| 4 | 84 | Return Value > Return Integer | `Return Integer` |  |  | — |  |
| 5 | 85 | Return Value > Return String | `Return String` |  |  | — |  |
| 6 | 86 | Return Value > Return Float | `Return Float` |  |  | — |  |
| 7 | 87 | Arguments > No Arguments (clear all) | `Reset Argument List` |  |  | — |  |
| 8 | 88 | Arguments > Set Argument to Integer | `Set Argument <p0> to (<p1>) (Integer)` |  | numeric expression “Which argument? (1 based)”; numeric expression “Argument value” | — |  |
| 9 | 89 | Arguments > Set Argument to Float | `Set Argument <p0> to (<p1>) (Float)` |  | numeric expression “Which argument? (1 based)”; numeric expression “Argument value” | — |  |
| 10 | 90 | Arguments > Set Argument to String | `Set Argument <p0> to (<p1>) (String)` |  | numeric expression “Which argument? (1 based)”; string expression “Argument value” | — |  |
| 11 | 91 | Arguments > Add Argument Integer | `Add Integer Argument (<p0>)` |  | numeric expression “Argument value” | — |  |
| 12 | 92 | Arguments > Add Argument Float | `Add Float Argument (<p0>)` |  | numeric expression “Argument value” | — |  |
| 13 | 93 | Arguments > Add Argument String | `Add String Argument (<p0>)` |  | string expression “Argument value” | — |  |
| 16 | 96 | Arguments > Set Argument to Integer Buffer | `Set Argument <p0> to Integer Buffer (<p1>)` |  | numeric expression “Which argument? (1 based)”; numeric expression “Argument value” | — |  |
| 17 | 97 | Arguments > Add Argument Integer Buffer | `Add Integer Buffer Argument (<p0>)` |  | numeric expression “Argument value” | — |  |
| 19 | 99 | Calling Convention > __cdecl (C/C++ DLLs) | `Function uses __cdecl convention` |  |  | — |  |
| 20 | 100 | Calling Convention > __stdcall (Win32, default) | `Function uses __stdcall convention` |  |  | — |  |
| 22 | 102 | Arguments > Set Argument to Float Buffer | `Set Argument <p0> to Float Buffer (<p1>)` |  | numeric expression “Which argument? (1 based)”; numeric expression “Argument value” | — |  |
| 23 | 103 | Arguments > Add Argument Float Buffer | `Add Float Buffer Argument (<p0>)` |  | numeric expression “Argument value” | — |  |
| 24 | 104 | Arguments > Set Argument to Double Buffer | `Set Argument <p0> to Double Buffer (<p1>)` |  | numeric expression “Which argument? (1 based)”; string expression “Argument value” | — |  |
| 25 | 105 | Arguments > Add Argument Double Buffer | `Add Double Buffer Argument (<p0>)` |  | string expression “Argument value” | — |  |
| 26 | 106 | Arguments > Set Argument to String Buffer | `Set Argument <p0> to String Buffer (<p2> bytes, initial value <p1> )` |  | numeric expression “Which argument? (1 based)”; string expression “Argument value”; numeric expression “Size in bytes” | — |  |
| 27 | 107 | Arguments > Add Argument String Buffer | `Add String Buffer Argument (<p1> bytes, initial value <p0> )` |  | string expression “Argument value”; numeric expression “Size in bytes” | — |  |
| 28 | 108 | Arguments > Set Argument to Double | `Set Argument <p0> to (<p1>) (Double)` |  | numeric expression “Which argument? (1 based)”; string expression “Argument value” | — |  |
| 29 | 109 | Arguments > Add Argument Double | `Add Double Argument (<p0>)` |  | string expression “Argument value” | — |  |
| 30 | 110 | Return Value > Return Double | `Return Double` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Arguments > Integer | `GetArgInt(` |  | number “argument id” | — |  |
| 1 | 81 | Arguments > Float | `GetArgFloat(` |  | number “argument id” | — |  |
| 2 | 82 | Arguments > String | `GetArgString$(` |  | number “argument id” → string | — |  |
| 3 | 83 | Return Value > Integer | `GetReturnInt(` |  |  | — |  |
| 4 | 84 | Return Value > Float | `GetReturnFloat(` |  |  | — |  |
| 5 | 85 | Return Value > String | `GetReturnString$(` |  | → string | — |  |
| 6 | 86 | On Error > Get Error Message | `GetErrorMessage$(` |  | → string | — |  |
| 15 | 95 | Function > Return Integer | `ReturnInt(` |  | string “function name” | — |  |
| 16 | 96 | Function > Return Float | `ReturnFloat(` |  | string “function name” | — |  |
| 17 | 97 | Function > Return String | `ReturnString$(` |  | string “function name” → string | — |  |
| 18 | 98 | Window Handle > Get Main Handle | `GetMainHwnd(` |  |  | — |  |
| 19 | 99 | Window Handle > Get Frame Handle | `GetFrameHwnd(` |  |  | — |  |
| 20 | 100 | Return Value > Double | `GetReturnDouble$(` |  | → string | — |  |
| 21 | 101 | Arguments > Double | `GetArgDouble$(` |  | number “argument id” → string | — |  |
| 22 | 102 | Function > Return Double | `ReturnDouble$(` |  | string “function name” → string | — |  |
