# Extension events

- File: `events.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On failure |  |  |  |
| 1 | -82 | On event |  |  |  |
| 2 | -83 | Is empty? |  |  |  |
| 3 | -84 | Is debug enabled? |  |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Event > Failure (use with caution) |  |  | numeric expression “Failure event code”; numeric expression “Line in source code”; string expression “Failure message, user intended only, 256 chars max.” |
| 1 | 81 | Event > Error |  |  | numeric expression “Error event code”; numeric expression “Line in source code”; string expression “Error message, user intended only.” |
| 2 | 82 | Event > Warning |  |  | numeric expression “Warning event code”; numeric expression “Line in source code”; string expression “Warning message, user intended only.” |
| 3 | 83 | Event > Notice |  |  | numeric expression “Notice event code”; numeric expression “Line in source code”; string expression “Notice message, user intended only.” |
| 4 | 84 | Event > Debug |  |  | numeric expression “Debug event code”; numeric expression “Line in source code”; string expression “Debug message” |
| 5 | 85 | Pending events > Remove first (oldest) |  |  |  |
| 6 | 86 | Pending events > Remove last (newest) |  |  |  |
| 7 | 87 | Pending events > Remove all |  |  |  |
| 8 | 88 | Handling > Clear dropped events counter |  |  |  |
| 9 | 89 | Handling > Set debug enabled |  |  | numeric expression “0 => disable, anything else => enable. By default edittime=1, runtime=0.” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Number of events pending |  |  |  |
| 1 | 81 | Number of events dropped |  |  |  |
| 2 | 82 | First event (oldest) > Get frame |  |  |  |
| 3 | 83 | First event (oldest) > Get line |  |  |  |
| 4 | 84 | First event (oldest) > Get code |  |  |  |
| 5 | 85 | First event (oldest) > Get message |  |  | → string |
| 6 | 86 | First event (oldest) > Get severity |  |  |  |
| 7 | 87 | Last event (newest) > Get frame |  |  |  |
| 8 | 88 | Last event (newest) > Get line |  |  |  |
| 9 | 89 | Last event (newest) > Get code |  |  |  |
| 10 | 90 | Last event (newest) > Get message |  |  | → string |
| 11 | 91 | Last event (newest) > Get severity |  |  |  |
| 12 | 92 | First event (oldest) > Get (sub-)app path |  |  | → string |
| 13 | 93 | Last event (newest) > Get (sub-)app path |  |  | → string |
