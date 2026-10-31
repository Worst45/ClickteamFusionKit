# Extension 360Movement

- File: `360Movement.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is movement paused? | `<object>: Movement is paused` |  |  | — |  |
| 1 | -82 | On collision test | `<object>: On collision test` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set object... | `Set object: <p0>` |  | object “Select object...” | — |  |
| 1 | 81 | Pause movement | `Pause movement` |  |  | — |  |
| 2 | 82 | Resume movement | `Resume movement` |  |  | — |  |
| 3 | 83 | Variables > Set max speed... | `Set max speed to <p0>` |  | numeric expression “Set max speed... ( in 1/256 units )” | — |  |
| 4 | 84 | Variables > Set acceleration... | `Set acceleration to <p0>` |  | numeric expression “Set acceleration... ( in 1/256 units )” | — |  |
| 5 | 85 | Variables > Set deceleration... | `Set deceleration to <p0>` |  | numeric expression “Set deceleration... ( in 1/256 units )” | — |  |
| 6 | 86 | Variables > Set X velocity... | `Set X velocity to <p0>` |  | numeric expression “X velocity... ( in 1/256 units )” | — |  |
| 7 | 87 | Variables > Set Y velocity... | `Set Y velocity to <p0>` |  | numeric expression “X velocity... ( in 1/256 units )” | — |  |
| 8 | 88 | Variables > Set additional X velocity... | `Set additional X velocity to <p0>` |  | numeric expression “Additional X velocity... ( in 1/256 units )” | — |  |
| 9 | 89 | Variables > Set additional Y velocity... | `Set additional Y velocity to <p0>` |  | numeric expression “Additional Y velocity... ( in 1/256 units )” | — |  |
| 10 | 90 | Input > User input... | `User input ( angle = <p0>, weight = <p1> )` |  | numeric expression “Angle... ( in degrees )”; numeric expression “Weight... ( 0 - 256 )” | — |  |
| 11 | 91 | Input > Directly set angle and speed... | `Directly set angle and speed ( angle = <p0>, speed = <p1> )` |  | numeric expression “Angle... ( in degrees )”; numeric expression “Speed... ( in 1/256 units )” | — |  |
| 12 | 92 | Collision > Report collision | `Report collision` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get max speed | `MaxSpeed(` |  |  | — |  |
| 1 | 81 | Get acceleration | `Acceleration(` |  |  | — |  |
| 2 | 82 | Get deceleration | `Deceleration(` |  |  | — |  |
| 3 | 83 | Get movement angle | `MovementAngle(` |  |  | — |  |
| 4 | 84 | Get movement speed | `MovementSpeed(` |  |  | — |  |
| 5 | 85 | Get X velocity | `XVelocity(` |  |  | — |  |
| 6 | 86 | Get Y velocity | `YVelocity(` |  |  | — |  |
| 7 | 87 | Get additional X velocity | `AddXVelocity(` |  |  | — |  |
| 8 | 88 | Get additional Y velocity | `AddYVelocity(` |  |  | — |  |
