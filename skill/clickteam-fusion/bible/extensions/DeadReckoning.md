# Extension DeadReckoning

- File: `DeadReckoning.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add object | `Add object: <p0>` |  | object “Object to add” | — |  |
| 1 | 81 | Remove object | `Remove object: <p0>` |  | object “Object to remove” | — |  |
| 2 | 82 | Update position | `Update position of <p0> to: <p1>, <p2>` |  | object “Object to update”; numeric expression “X-coordinate”; numeric expression “Y-coordinate” | — |  |
| 3 | 83 | Update X | `Update X of <p0> to: <p1>` |  | object “Object to update”; numeric expression “X-coordinate” | — |  |
| 4 | 84 | Update Y | `Update Y of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Y-coordinate” | — |  |
| 5 | 85 | Update direction | `Update direction of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Direction” | — |  |
| 6 | 86 | Update angle | `Update angle of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Angle” | — |  |
| 7 | 87 | Movement hints > Set X position | `Set X of <p0> to: <p1>` |  | object “Object to update”; numeric expression “X-coordinate” | — |  |
| 8 | 88 | Movement hints > Set Y position | `Set Y of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Y-coordinate” | — |  |
| 9 | 89 | Movement hints > Set direction | `Set direction of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Direction” | — |  |
| 10 | 90 | Movement hints > Set angle | `Set angle of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Angle” | — |  |
| 11 | 91 | Movement hints > Set X speed | `Set X speed of <p0> to: <p1>` |  | object “Object to update”; numeric expression “X speed” | — |  |
| 12 | 92 | Movement hints > Set Y speed | `Set Y speed of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Y speed” | — |  |
| 13 | 93 | Movement hints > Set direction speed | `Set direction speed of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Direction speed” | — |  |
| 14 | 94 | Movement hints > Set angle speed | `Set angle speed of <p0> to: <p1>` |  | object “Object to update”; numeric expression “Angle speed” | — |  |
| 15 | 95 | Movement hints > Object was stopped | `<p0> was stopped` |  | object “Object that was stopped” | — |  |
| 16 | 96 | Movement hints > Object bounced | `<p0> bounced` |  | object “Object that bounced” | — |  |
| 17 | 97 | Object options > All variables > Set extrapolation mode | `Set extrapolation mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Linear, 1 = Cubic” | — |  |
| 18 | 98 | Object options > All variables > Use acceleration? | `Set acceleration mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Off, 1 = On” | — |  |
| 19 | 99 | Object options > All variables > Set smoothing | `Set movement smoothing of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “Smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind)” | — |  |
| 20 | 100 | Object options > X movement > Set extrapolation mode | `Set X movement extrapolation mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Linear, 1 = Cubic” | — |  |
| 21 | 101 | Object options > X movement > Use acceleration? | `Set X movement acceleration mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Off, 1 = On” | — |  |
| 22 | 102 | Object options > X movement > Set smoothing | `Set X movement smoothing of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “X smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind)” | — |  |
| 23 | 103 | Object options > Y movement > Set extrapolation mode | `Set Y movement extrapolation mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Linear, 1 = Cubic” | — |  |
| 24 | 104 | Object options > Y movement > Use acceleration? | `Set Y movement acceleration mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Off, 1 = On” | — |  |
| 25 | 105 | Object options > Y movement > Set smoothing | `Set Y movement smoothing of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “Y smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind)” | — |  |
| 26 | 106 | Object options > Direction changing > Set extrapolation mode | `Set direction extrapolation mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Linear, 1 = Cubic” | — |  |
| 27 | 107 | Object options > Direction changing > Use acceleration? | `Set direction acceleration mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Off, 1 = On” | — |  |
| 28 | 108 | Object options > Direction changing > Set smoothing | `Set direction smoothing of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “Direction smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind)” | — |  |
| 29 | 109 | Object options > Angle changing > Set extrapolation mode | `Set angle extrapolation mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Linear, 1 = Cubic” | — |  |
| 30 | 110 | Object options > Angle changing > Use acceleration? | `Set angle acceleration mode of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “0 = Off, 1 = On” | — |  |
| 31 | 111 | Object options > Angle changing > Set smoothing | `Set angle smoothing of <p0> to: <p1>` |  | object “Select an object...”; numeric expression “Angle smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number  of controlled objects | `NumObjects(` |  |  | — |  |
| 1 | 81 | Predicted X of object | `PredictedX(` |  | number “Fixed value of the object” | — |  |
| 2 | 82 | Predicted Y of object | `PredictedY(` |  | number “Fixed value of the object” | — |  |
| 3 | 83 | Predicted direction of object | `PredictedDirection(` |  | number “Fixed value of the object” | — |  |
| 4 | 84 | Predicted angle of object | `PredictedAngle(` |  | number “Fixed value of the object” | — |  |
| 5 | 85 | X speed of object | `XSpeed(` |  | number “Fixed value of the object” | — |  |
| 6 | 86 | Y speed of object | `YSpeed(` |  | number “Fixed value of the object” | — |  |
| 7 | 87 | Direction speed of object | `DirectionSpeed(` |  | number “Fixed value of the object” | — |  |
| 8 | 88 | Angle speed of object | `AngleSpeed(` |  | number “Fixed value of the object” | — |  |
| 9 | 89 | X movement smoothing of object | `XSmoothing(` |  | number “Fixed value of the object” | — |  |
| 10 | 90 | Y movement smoothing of object | `YSmoothing(` |  | number “Fixed value of the object” | — |  |
| 11 | 91 | Direction smoothing of object | `DirSmoothing(` |  | number “Fixed value of the object” | — |  |
| 12 | 92 | Angle smoothing of object | `AngleSmoothing(` |  | number “Fixed value of the object” | — |  |
| 13 | 93 | Current moved speed of object | `MovedSpeed(` |  | number “Fixed value of the object” | — |  |
| 14 | 94 | Current moved direction of object | `MovedDirection(` |  | number “Fixed value of the object” | — |  |
| 15 | 95 | Current moved angle of object | `MovedAngle(` |  | number “Fixed value of the object” | — |  |
