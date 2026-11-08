# Extension PingPong

- File: `PingPong.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On pong | `<object> : On pong` |  |  |
| 1 | -82 | On ping failed | `<object> : On ping failed` |  |  |
| 2 | -83 | Ping in progress? | `<object> : Ping in progress?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Ping | `Ping <p0>, <p1> max attempts, <p2> ms timeout` |  | string expression “IP address or website”; numeric expression “Maximum number of attempts”; numeric expression “Attempt timeout in ms” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Resolve IP | `ResolveIP$(` |  | string “Website address” → string |
| 1 | 81 | On pong > Elapsed milliseconds | `PingElapsedMS(` |  |  |
| 2 | 82 | On pong > Status code | `PingStatusCode(` |  |  |
| 3 | 83 | On pong > Resolved IP address | `PingResolvedIP$(` |  | → string |
