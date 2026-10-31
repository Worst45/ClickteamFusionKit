# Extension GETMOV

- File: `GETMOV.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Did the object move? | `<object>: Did the object move?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Preform calculations | `Preform calculations for object  <p0>` |  | object “Which object?” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X speed | `Get_X_speed(` |  |  | — |  |
| 1 | 81 | Get Y speed | `Ge_Y_speed(` |  |  | — |  |
| 2 | 82 | Get overall speed | `Get_speed(` |  |  | — |  |
| 3 | 83 | Get angle | `Get_Angle(` |  |  | — |  |
| 4 | 84 | Get direction | `Get_direction(` |  |  | — |  |
