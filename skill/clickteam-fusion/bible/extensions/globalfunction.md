# Extension globalfunction

- File: `globalfunction.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<object> : On Function <p0>` |  | string expression “Function name” | — |  |
| 1 | -82 | A function is waiting | `<object> : A function is waiting` |  |  | — |  |
| 2 | -83 | Arguments > Argument is a number | `<object> : Argument <p0> is a number` |  | numeric expression “Argument number (1-based)” | — |  |
| 3 | -84 | Arguments > Argument is a string | `<object> : Argument <p0> is a string` |  | numeric expression “Argument number (1-based)” | — |  |
| 4 | -85 | Arguments > Argument is binary data | `<object> : Argument <p0> is binary data` |  | numeric expression “Argument number (1-based)” | — |  |
| 5 | -86 | Another app is visible | `<object> : An app is visilble using name <p0>` |  | string expression “Visible name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Send function > Add number argument | `<object> : Add number argument <p0>` |  | numeric expression “Number parameter” | — |  |
| 1 | 81 | Send function > Add string argument | `<object> : Add string argument <p0>` |  | string expression “String parameter” | — |  |
| 2 | 82 | Send function > Add binary argument | `<object> : Add binary argument of size <p0> from address <p1>` |  | numeric expression “Size of binary in bytes”; numeric expression “Memory address of binary” | — |  |
| 3 | 83 | Send function > Send function within app | `<object> : Send function <p0> within app to target <p1>` |  | string expression “Function name”; string expression “Target name” | — |  |
| 4 | 84 | Send function > Send function to another app | `<object> : Send function <p0> to target <p1> in app <p2>` |  | string expression “Function name”; string expression “Target name”; string expression “Target application's visible name” | — |  |
| 5 | 85 | Visibility to other apps > Make app visible to other apps | `<object> : Make app visible using name <p0>` |  | string expression “Visible name” | — |  |
| 6 | 86 | Visibility to other apps > Remove visibility to other apps | `<object> : Remove visibility` |  |  | — |  |
| 7 | 87 | Visibility to other apps > Disallow making this app visible | `<object> : Disallow making this app visible` |  |  | — |  |
| 8 | 88 | Function checking > Auto check for new functions | `<object> : Auto check for new functions` |  |  | — |  |
| 9 | 89 | Function checking > Turn off Auto checking for new functions | `<object> : Turn off Auto checking for new functions` |  |  | — |  |
| 10 | 90 | Function checking > Check for new functions | `<object> : Check for new functions` |  |  | — |  |
| 11 | 91 | On function > End function | `<object> : End function` |  |  | — |  |
| 12 | 92 | On function > Dump binary data argument to memory | `<object> : Dump data argument at <p0> of size <p1> bytes to address <p2>` |  | numeric expression “Argument number (1-based)”; numeric expression “Size of memory buffer”; numeric expression “Memory address of buffer to dump data to” | — |  |
| 13 | 93 | Save Files > Save functions to file | `<object> : Save functions to <p0>` |  | file name “File path” | — |  |
| 14 | 94 | Save Files > Load and add functions from file | `<object> : Load functions from <p0>` |  | file name “File path” | — |  |
| 15 | 95 | Change name | `<object> : Change name to <p0>` |  | string expression “Give new name for GFO” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | On Function > Number of arguments | `numArguments(` |  |  | — |  |
| 1 | 81 | On Function > Get number argument | `getNumArgument(` |  | number | — |  |
| 2 | 82 | On Function > Get string argument | `getStrArgument$(` |  | number → string | — |  |
| 3 | 83 | On Function > Get size of binary data argument | `SizeDataArgument$(` |  | number | — |  |
| 4 | 84 | Get unique process ID | `ProcessID(` |  |  | — |  |
