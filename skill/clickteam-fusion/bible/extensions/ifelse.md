# Extension ifelse

- File: `ifelse.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Start IF | `Start IF` |  |  | — |  |
| 1 | -82 | End IF | `End IF` |  |  | — |  |
| 2 | -83 | Else | `Else` |  |  | — |  |
| 3 | -84 | Else IF | `Else IF` |  |  | — |  |
| 4 | -85 | Start Nested IF | `Start Nested IF <p0>` |  | numeric expression “Nest Depth” | — |  |
| 5 | -86 | End Nested IF (No parameters) | `End Nested IF` |  |  | — |  |
| 6 | -87 | Nested Else | `Nested Else <p0>` |  | numeric expression “Nest Depth” | — |  |
| 7 | -88 | Nested ElseIF | `Nested ElseIF <p0>` |  | numeric expression “Nest Depth” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Force IF (Else will not run) | `Force IF` |  |  | — |  |
| 1 | 81 | Force Else (Else will run) | `Force Else` |  |  | — |  |
| 2 | 82 | Set Nest Depth | `Set Nest Depth to <p0>` |  | numeric expression “Set Nest Depth” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last IF (1 is true, 0 is false) | `GetIF(` |  |  | — |  |
| 1 | 81 | Get Nest Depth | `NestDepth(` |  |  | — |  |
