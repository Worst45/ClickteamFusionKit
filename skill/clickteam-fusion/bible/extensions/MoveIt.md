# Extension MoveIt

- File: `MoveIt.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Object finished moving | `<object>: Object finished moving` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move objects > Move objects in queue with speed | `Move objects to target <p0>, <p1> with speed <p2>` |  | numeric expression “Target X”; numeric expression “Target Y”; numeric expression “Speed” | — |  |
| 1 | 81 | Move objects > Move objects in queue with time | `Move objects to target <p0>, <p1>   in <p2>  event cycles` |  | numeric expression “Target X”; numeric expression “Target Y”; numeric expression “Time -  event cycles ( 50 event cycles = 1 sec depending on framerate )” | — |  |
| 2 | 82 | Stop movement of objects > Stop movement by using fixed value | `Stop movement for object with fixed value <p0>` |  | numeric expression “Fixed value” | — |  |
| 3 | 83 | Stop movement of objects > Stop movement by using index value | `Stop movement for object with index value <p0>` |  | numeric expression “Index value” | — |  |
| 4 | 84 | Stop movement of objects > Stop movement by using selector | `Stop movement for objects <p0>` |  | object “Object” | — |  |
| 5 | 85 | Move objects > Add objects to queue | `Add objects <p0> to queue` |  | object “Select an object” | — |  |
| 6 | 86 | Move objects > Clear queue | `Clear queue` |  |  | — |  |
| 7 | 87 | Stop movement of objects > Stop all | `Stop all` |  |  | — |  |
| 8 | 88 | Force movement update | `Force movement update` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of objects moving | `GetNumMoving(` |  |  | — |  |
| 1 | 81 | From fixed value > Get index value | `GetFixed(` |  | number | — |  |
| 2 | 82 | From fixed value > Get total distance for object | `GetDistance(` |  | number | — |  |
| 3 | 83 | From fixed value > Get remaining distance for object | `GetRemaining(` |  | number | — |  |
| 4 | 84 | From fixed value > Get angle of object | `GetAngle(` |  | number | — |  |
| 5 | 85 | From fixed value > Get direction of object | `GetDirection(` |  | number | — |  |
| 6 | 86 | From index > Get fixed value | `IndexFixed(` |  | number | — |  |
| 7 | 87 | From index > Get total distance | `IndexTotalDistance(` |  | number | — |  |
| 8 | 88 | From index > Get remaining distance | `IndexRemainingDistance(` |  | number | — |  |
| 9 | 89 | From index > Get angle | `IndexAngle(` |  | number | — |  |
| 10 | 90 | From index > Get direction | `IndexDir(` |  | number | — |  |
| 11 | 91 | On object stopped moving > Get fixed value | `OnStoppedFixed(` |  |  | — |  |
