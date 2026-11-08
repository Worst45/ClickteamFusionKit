# Extension sfunc

- File: `sfunc.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Loop | `<object> On Loop <p0>` |  | string expression “Loop Name” |
| 1 | -82 | On Local Function | `<object> On Local Function <p0>` |  | string expression “Local Function Name” |
| 2 | -83 | On Global Function | `<object> On Global Function <p0>` |  | string expression “Global Function Name” |
| 3 | -84 | Error? | `<object> Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Call Loop (start,end,step) | `Call Loop <p0> from <p1> to <p2> step <p3>` |  | string expression “Loop Name”; numeric expression “Start Value”; numeric expression “End Value”; numeric expression “Step Value” |
| 1 | 81 | Call Local Function | `Call Local Function <p0>` |  | string expression “Local Function Name” |
| 2 | 82 | Call Global Function | `Call Global Function <p0>-><p1>` |  | string expression “Target Object Name”; string expression “Global Function Name” |
| 3 | 83 | Clear Last Error | `Clear Last Error` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Loop Index | `Index(` |  | string |
| 1 | 81 | Expression | `ProcessExpression$(` |  | string → string |
| 2 | 82 | IF Expression (test,true,false) | `IF Expression(` |  | string; string; string → string |
| 3 | 83 | Quote (string) | `Quote(` |  | string → string |
| 4 | 84 | Get Error Code | `Err(` |  |  |
| 5 | 85 | Get Error Message | `ErrMsg(` |  | → string |
