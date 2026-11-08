# Extension while

- File: `while.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Start While | `Start While <p0>` |  | numeric expression “ID” |
| 1 | -82 | End While | `End While` |  |  |
| 2 | -83 | Sub While | `Sub While <p0>` |  | numeric expression “ID” |
| 3 | -84 | Nest While | `Nest While <p0>, <p1>` |  | numeric expression “Old ID”; numeric expression “New ID” |
| 4 | -85 | Limit Loops | `Limit Loops to <p0>` |  | numeric expression “Max Loops” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Loop Index | `Set Loop Index to <p0>` |  | numeric expression “Loop Index” |
| 1 | 81 | Kill Current Loop | `Kill Current Loop` |  |  |
| 2 | 82 | Set Current ID (CAUTION!) | `Set Current ID to <p0>` |  | numeric expression “New ID” |
| 3 | 83 | Trigger > Start While | `Trigger Start While, ID <p0>, Index <p1>` |  | numeric expression “ID”; numeric expression “Loop Index” |
| 4 | 84 | Trigger > Sub While | `Trigger Sub While, ID <p0>, Index <p1>` |  | numeric expression “ID”; numeric expression “Loop Index” |
| 5 | 85 | Trigger > Nest While | `Trigger Nest While, ID <p0>, Index <p1>` |  | numeric expression “Old ID”; numeric expression “Loop Index” |
| 6 | 86 | Set Nest Depth (CAUTION!) | `Set NestDepth to <p0>` |  | numeric expression “NestDepth” |
| 7 | 87 | Dialog Box Options > Auto Triggers > Start While On | `Start While On` |  |  |
| 8 | 88 | Dialog Box Options > Auto Triggers > Start While Off | `Start While Off` |  |  |
| 9 | 89 | Dialog Box Options > Auto Triggers > Sub While On | `Sub While On` |  |  |
| 10 | 90 | Dialog Box Options > Auto Triggers > Sub While Off | `Sub While Off` |  |  |
| 11 | 91 | Dialog Box Options > Auto Triggers > Nest While On | `Nest While On` |  |  |
| 12 | 92 | Dialog Box Options > Auto Triggers > Nest while Off | `Nest While Off` |  |  |
| 13 | 93 | Dialog Box Options > Set Max Loops | `Set Max Loops to <p0>` |  | numeric expression “Max Loops (0: Unlimited)” |
| 14 | 94 | Dialog Box Options > Set Max Nest Depth | `Set Max Nest Depth to <p0>` |  | numeric expression “Max Nest Depth (0: Unlimited)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Loop Index | `GetLoopIndex(` |  |  |
| 1 | 81 | Get Current ID | `GetCurrentID(` |  |  |
| 2 | 82 | Get Current Nest Depth | `GetNestDepth(` |  |  |
| 3 | 83 | Dialog Box Options > Get Start While State | `GetStartWhileState(` |  |  |
| 4 | 84 | Dialog Box Options > Get Sub While State | `GetSubWhileState(` |  |  |
| 5 | 85 | Dialog Box Options > Get Nest While State | `GetNestWhileState(` |  |  |
| 6 | 86 | Dialog Box Options > Get Max Loops | `GetMaxLoops(` |  |  |
| 7 | 87 | Dialog Box Options > Get Max Nest Depth | `GetMaxNestDepth(` |  |  |
