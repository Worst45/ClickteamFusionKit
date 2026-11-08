# Extension funcloop

- File: `funcloop.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Function | `<object> : On function <p0>` |  | string expression “Function name” |
| 1 | -82 | On loop | `<object> : On loop <p0>` |  | string expression “Loop name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Call function | `<object> :  Call <p0> ( )` |  | string expression “Function name” |
| 1 | 81 | Call function ( Int ) | `<object> :  Call <p0> ( <p1> )` |  | string expression “Function name”; numeric expression “Int argument” |
| 2 | 82 | Call function ( Int, Int ) | `<object> :  Call <p0> ( <p1>, <p2> )` |  | string expression “Function name”; numeric expression “Int argument”; numeric expression “Int argument” |
| 3 | 83 | Call function ( String ) | `<object> :  Call <p0> ( <p1> )` |  | string expression “Function name”; string expression “String argument” |
| 4 | 84 | Call function ( String, String ) | `<object> :  Call <p0> ( <p1>, <p2> )` |  | string expression “Function name”; string expression “String argument”; string expression “String argument” |
| 5 | 85 | Call function ( Int, String ) | `<object> :  Call <p0> ( <p1>, <p2> )` |  | string expression “Function name”; numeric expression “Int argument”; string expression “String argument” |
| 6 | 86 | Function Arugments > Add int argument | `<object> :  Add int argument <p0>` |  | numeric expression “Int argument” |
| 7 | 87 | Function Arugments > Add float argument | `<object> :  Add float argument <p0>` |  | numeric expression “Float argument” |
| 8 | 88 | Function Arugments > Add string argument | `<object> :  Add string argument <p0>` |  | string expression “String argument” |
| 9 | 89 | Return > Return | `<object>: Return` |  |  |
| 10 | 90 | Return > Return an int | `<object>: Return <p0>` |  | numeric expression “Int to return” |
| 11 | 91 | Return > Return a float | `<object>: Return <p0>` |  | numeric expression “Float to return” |
| 12 | 92 | Return > Return a string | `<object>: Return <p0>` |  | string expression “String to return” |
| 13 | 93 | Start a loop | `<object> : Start loop <p0> and run <p1> times` |  | string expression “Loop name”; numeric expression “Number of loops” |
| 14 | 94 | Stop curent loop | `<object> : Stop loop` |  |  |
| 15 | 95 | Set loop index | `<object>: Set loop index to <p0>` |  | numeric expression “Index to set” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get loop index of a loop | `indexOf(` |  | string |
| 1 | 81 | Get current loop index | `index(` |  |  |
| 2 | 82 | Get int argument A | `intArgA(` |  |  |
| 3 | 83 | Get int argument B | `intArgB(` |  |  |
| 4 | 84 | Get string argument A | `strArgA(` |  | → string |
| 5 | 85 | Get string argument B | `strArgB(` |  | → string |
| 6 | 86 | Get value argument at | `valArgAt(` |  | number |
| 7 | 87 | Get string argument at | `stringArgAt(` |  | number → string |
| 8 | 88 | Get return value | `retValue(` |  |  |
| 9 | 89 | Get return string | `retString(` |  | → string |
