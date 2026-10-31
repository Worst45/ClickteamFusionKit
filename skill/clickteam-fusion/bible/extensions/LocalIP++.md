# Extension LocalIP++

- File: `LocalIP++.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Adapter Enumerated | `<object> : On Adapter Enumerated` |  |  | — |  |
| 1 | -82 | On Error | `<object> : On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Enumerate Network Adapters | `Enumerate Network Adapters` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get IP of Enumerated Device | `EnumeratedDeviceIP$(` |  | → string | — |  |
| 1 | 81 | Get Error Code | `LastErrorCode(` |  |  | — |  |
| 2 | 82 | Get Host Name | `GetHostName$(` |  | → string | — |  |
