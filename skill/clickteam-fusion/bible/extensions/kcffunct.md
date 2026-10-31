# Extension kcffunct

- File: `kcffunct.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Function Trigger | `<object>: Function <p0>()` |  | (unreliable parameters) | — |  |
| 1 | -82 | Is Returning String | `<object>: Is Returning String` |  |  | — |  |
| 2 | -83 | Is Returning Number | `<object>: Is Returning Number` |  |  | — |  |
| 3 | -84 | Is Not Returning (Action triggered) | `<object>: Not Returning` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run Function | `Run Function <p0>()` |  | (unreliable parameters) | — |  |
| 1 | 81 | Run Function with... > Number parameter | `Run Function <p0>( <p1> )` |  | (unreliable parameters) | — |  |
| 2 | 82 | Run Function with... > String parameter | `Run Function <p0>( <p1> )` |  | (unreliable parameters) | — |  |
| 3 | 83 | Return Number | `Set return to <p0>` |  | (unreliable parameters) | — |  |
| 4 | 84 | Return String | `Set return to <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run Function, returning Number | `Function(` |  | (unreliable parameters) | — |  |
| 1 | 81 | Run Function, returning String | `Function$(` |  | (unreliable parameters) | — |  |
| 2 | 82 | Run Function with... > Number parameter, returning Number | `FunctionN(` |  | number (unreliable parameters) | — |  |
| 3 | 83 | Run Function with... > String parameter, returning Number | `FunctionS(` |  | string (unreliable parameters) | — |  |
| 4 | 84 | Run Function with... > Number parameter, returning String | `FunctionN$(` |  | number (unreliable parameters) | — |  |
| 5 | 85 | Run Function with... > String parameter, returning String | `FunctionS$(` |  | string (unreliable parameters) | — |  |
| 6 | 86 | Get Parameter Number | `Parameter(` |  |  | — |  |
| 7 | 87 | Get Parameter String | `Parameter$(` |  |  | — |  |
| 8 | 88 | Get Current Function | `Current Function$(` |  |  | — |  |
| 9 | 89 | Get Return Number | `Return(` |  |  | — |  |
| 10 | 90 | Get Return String | `Return$(` |  |  | — |  |
