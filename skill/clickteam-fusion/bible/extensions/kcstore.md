# Extension kcstore

- File: `kcstore.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare a value | `<object>: Value Number <p0> is <p1>` |  | (unreliable parameters) | — |  |
| 1 | -82 | Compare a flag | `<object>: Flag <p0> state is <p1>` |  | (unreliable parameters) | — |  |
| 2 | -83 | Is flag on? | `<object>: Flag <p0> is on` |  | (unreliable parameters) | — |  |
| 3 | -84 | Is flag off? | `<object>: Flag <p0> is off` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Values > Change a Value | `Set Value Number <p0> to <p1>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Values > Add to a Value | `Add <p0> to Value Number <p1>` |  | (unreliable parameters) | — |  |
| 2 | 82 | Values > Subtract from a Value | `Subtract <p0> from Value Number <p1>` |  | (unreliable parameters) | — |  |
| 3 | 83 | Values > Multiply a Value by | `Multiply Value Number <p0> by <p1>` |  | (unreliable parameters) | — |  |
| 4 | 84 | Values > Divide a Value by | `Divide Value Number <p0> by <p1>` |  | (unreliable parameters) | — |  |
| 5 | 85 | Strings > Change a String | `Set String Number <p0> to <p1>` |  | (unreliable parameters) | — |  |
| 6 | 86 | Values > Put Value into Mod | `Put Value Number <p0> into Mod <p1>` |  | (unreliable parameters) | — |  |
| 7 | 87 | Flags > Set flag on | `Set Flag Number <p0> on` |  | (unreliable parameters) | — |  |
| 8 | 88 | Flags > Set flag off | `Set Flag Number <p0> off` |  | (unreliable parameters) | — |  |
| 9 | 89 | Flags > Toggle flag | `Toggle Flag Number <p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | Flags > Reset all | `Reset all flags` |  |  | — |  |
| 11 | 91 | Flags > Toggle all | `Toggle all flags` |  |  | — |  |
| 12 | 92 | Storage > Save | `Save to file <p0>` |  | (unreliable parameters) | — |  |
| 13 | 93 | Storage > Load | `Load from file <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Value | `GetValue(` |  | (unreliable parameters) | — |  |
| 1 | 81 | Get String | `GetString$(` |  | (unreliable parameters) | — |  |
| 2 | 82 | Get Flag State | `GetFlagState(` |  | (unreliable parameters) | — |  |
