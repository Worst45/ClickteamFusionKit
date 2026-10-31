# Extension sleep

- File: `sleep.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Sleep on | `Sleep is on` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Wait Period | `Set Wait to <p0>` |  | numeric expression “(Wait Period) Milliseconds (1000 = 1 second)” | — |  |
| 1 | 81 | Sleep App | `Sleep App for <p0> ms` |  | numeric expression “(Sleep App) Milliseconds (1000 = 1 second)” | — |  |
| 2 | 82 | Sleep On | `Sleep On` |  |  | — |  |
| 3 | 83 | Sleep Off | `Sleep Off` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Wait Period | `GetWait(` |  |  | — |  |
