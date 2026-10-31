# Extension FunctionEggtimer

- File: `FunctionEggtimer.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On function | `<object> On function <p0>` |  | string expression “Function name” | — |  |
| 1 | -82 | On any function | `<object> On any function` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Queue function | `Call <p0> after <p1> event loops` |  | string expression “Enter function name”; numeric expression “Event loops” | — |  |
| 1 | 81 | Remove function from queue by name | `Cancel function <p0>` |  | string expression “Function to cancel” | — |  |
| 2 | 82 | Change settings for last queued function > Repeat function X times | `Repeat function <p0> times` |  | numeric expression “Enter amount of times for the function to repeat (-1 to repeat forever)” | — |  |
| 3 | 83 | Change settings for last queued function > Set private data value | `Set private data to = <p0>` |  | numeric expression “Enter a value” | — |  |
| 4 | 84 | Change settings for last queued function > Continuous trigger untill canceled | `Continuous trigger until canceled` |  |  | — |  |
| 5 | 85 | Stop current function | `Cancel current function` |  |  | — |  |
| 6 | 86 | Call immediate function | `Call <p0> immedeatly with optional repeat delay of <p1>` |  | string expression “Enter function name”; numeric expression “Enter delay (just leave 0 if you don't plan to use the 'repeat' action for this function)” | — |  |
| 7 | 87 | Clear function queue | `Clear function queue` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of functions in queue | `QueueSize(` |  |  | — |  |
| 1 | 81 | Current function > Get function name | `LastFunction$(` |  | → string | — |  |
| 2 | 82 | Current function > Get private data | `PrivateData(` |  |  | — |  |
| 3 | 83 | Current function > Get number of repeats left | `RemainingRepeats(` |  |  | — |  |
