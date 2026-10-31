# Extension Flocking

- File: `Flocking.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On looped boid | `<object>: On loop <p0> for boid <p1>` |  | string expression “Enter a name for the loop”; object “Select an object” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add object as boid | `Add <p0> as boid type <p1>` |  | object “Select an object”; numeric expression “Boid type number” | — |  |
| 1 | 81 | Remove object | `Remove <p0>` |  | object “Select an object” | — |  |
| 2 | 82 | Set boid type attributes > Set idle speed | `Boid <p0>: Set idle speed <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a speed (in pixels per time unit)” | — |  |
| 3 | 83 | Set boid type attributes > Set min speed | `Boid <p0>: Set min speed: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a min speed (in pixels per time unit) Can be negative for reverse movement” | — |  |
| 4 | 84 | Set boid type attributes > Set max speed | `Boid <p0>: Set max speed: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a max speed (in pixels per time unit)” | — |  |
| 5 | 85 | Set boid type attributes > Set acceleration | `Boid <p0>: Set acceleration: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter an acceleration (max change in pixels per time unit)” | — |  |
| 6 | 86 | Set boid type attributes > Set deceleration | `Boid <p0>: Set deceleration: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a deceleration (max change in pixels per time unit)” | — |  |
| 7 | 87 | Set boid type attributes > Set max turn speed | `Boid <p0>: Set turn speed: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a max turn speed (max angles per time unit)” | — |  |
| 8 | 88 | Set boid type attributes > Set view radius | `Boid <p0>: Set view radius: <p1>` |  | numeric expression “Boid type number”; numeric expression “Radius” | — |  |
| 9 | 89 | Set boid type attributes > Set avoidance radius | `Boid <p0>: Set avoidance radius: <p1>` |  | numeric expression “Boid type number”; numeric expression “Radius” | — |  |
| 10 | 90 | Set boid type attributes > Set movement randomization | `Boid <p0>: Set movement randomization: <p1>` |  | numeric expression “Boid type number”; numeric expression “Enter a movement randomization value” | — |  |
| 11 | 91 | Set boid type attributes > Set separation weight | `Boid <p0>: Set separation weight: <p1>` |  | numeric expression “Boid type number”; numeric expression “Weight” | — |  |
| 12 | 92 | Set boid type attributes > Set alignment weight | `Boid <p0>: Set alignment weight: <p1>` |  | numeric expression “Boid type number”; numeric expression “Weight” | — |  |
| 13 | 93 | Set boid type attributes > Set cohesion weight | `Boid <p0>: Set cohesion weight: <p1>` |  | numeric expression “Boid type number”; numeric expression “Weight” | — |  |
| 14 | 94 | Set boid type attributes > Set angle/direction setting | `Boid <p0>: Set angle/dir setting to: <p1>` |  | numeric expression “Boid type number”; numeric expression “Set angle/dir setting (0=use angles, 1=use directions, 2=don't rotate)” | — |  |
| 15 | 95 | Set boid type attributes > Set speed dependant turn setting | `Boid <p0>: Set speed dependant turn setting: <p1>` |  | numeric expression “Boid type number”; numeric expression “Should turn speed depend on the boid speed? (0=NO, 1=YES)” | — |  |
| 16 | 96 | Set boid type attributes > Avoid obstacles? | `Boid <p0>: Set avoid obstacles setting: <p1>` |  | numeric expression “Boid type number”; numeric expression “Avoid obstacles? (0=NO, 1=YES)” | — |  |
| 17 | 97 | Control boids > All of type > Attract towards position | `Attract all boids of type <p0> towards (<p1>,<p2>) weight: <p3>` |  | numeric expression “Boid type number”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Weight” | — |  |
| 18 | 98 | Control boids > All of type > Chase away from position | `Chase all boids of type <p0> away from (<p1>,<p2>) weight: <p3>` |  | numeric expression “Boid type number”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Weight” | — |  |
| 19 | 99 | Control boids > All of type > Apply force (xy-direction) | `To boid type <p0>, apply force (<p1>,<p2>)` |  | numeric expression “Boid type number”; numeric expression “X-Speed”; numeric expression “Y-Speed” | — |  |
| 20 | 100 | Control boids > Within radius > Attract toward position | `Attract all boids of type <p0> towards (<p1>,<p2>) within radius <p3> weight: <p4>` |  | numeric expression “Boid type number”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Radius”; numeric expression “Weight” | — |  |
| 21 | 101 | Control boids > Within radius > Chase away from position | `Chase all boids of type <p0> away from (<p1>,<p2>) within radius <p3> weight: <p4>` |  | numeric expression “Boid type number”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Radius”; numeric expression “Weight” | — |  |
| 22 | 102 | Control boids > Within radius > Apply force (xy-direction) | `To boid type <p0>, apply force (<p4>,<p5>) within radius <p3> from (<p1>,<p2>)` |  | numeric expression “Boid type number”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Radius”; numeric expression “X-Speed”; numeric expression “Y-Speed” | — |  |
| 23 | 103 | Control boids > Individual boids > Attract towards position | `Attract <p0> towards (<p1>,<p2>) weight: <p3>` |  | object “Select an object”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Weight” | — |  |
| 24 | 104 | Control boids > Individual boids > Chase away from position | `Chase <p0> away from (<p1>,<p2>) weight: <p3>` |  | object “Select an object”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Weight” | — |  |
| 25 | 105 | Control boids > Individual boids > Apply force (xy-direction) | `Apply force (<p1>,<p2>) to <p0>` |  | object “Select an object”; numeric expression “X-Speed”; numeric expression “Y-Speed” | — |  |
| 26 | 106 | Loop boids > Loop neighbour boids | `Loop through neighbouring boids to <p1> within radius <p2> with loop name <p0>` |  | string expression “Enter a name for the loop”; object “Select an object”; numeric expression “Radius” | — |  |
| 27 | 107 | Loop boids > Loop boids in radius | `Loop through all boids within radius <p3> from position [<p1>, <p2>] with loop name <p0>` |  | string expression “Enter a name for the loop”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Radius” | — |  |
| 28 | 108 | Loop boids > Loop boids in rectangle | `Loop through all boids within rectangle x:<p1> y:<p2> w:<p3> h:<p4> with loop name <p0>` |  | string expression “Enter a name for the loop”; numeric expression “X-position”; numeric expression “Y-Position”; numeric expression “Width in pixels”; numeric expression “Height in pixels” | — |  |
| 29 | 109 | Loop boids > Loop all boids | `Loop through all boids with loop name <p0>` |  | string expression “Enter a name for the loop” | — |  |
| 30 | 110 | Loop boids > Loop all boids of type | `Loop through all boids of type <p1> with loop name <p0>` |  | string expression “Enter a name for the loop”; numeric expression “Boid type number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | From boid type > Get idle speed | `IdleSpeed(` |  | number “boid-type” | — |  |
| 1 | 81 | From boid type > Get min speed | `MinSpeed(` |  | number “boid-type” | — |  |
| 2 | 82 | From boid type > Get max speed | `MaxSpeed(` |  | number “boid-type” | — |  |
| 3 | 83 | From boid type > Get acceleration | `Acceleration(` |  | number “boid-type” | — |  |
| 4 | 84 | From boid type > Get deceleration | `Deceleration(` |  | number “boid-type” | — |  |
| 5 | 85 | From boid type > Get turn speed | `TurnSpeed(` |  | number “boid-type” | — |  |
| 7 | 87 | From boid type > Get avoidance radius | `AvoidanceRadius(` |  | number “boid-type” | — |  |
| 8 | 88 | From boid type > Get movement randomization | `MovementRandomization(` |  | number “boid-type” | — |  |
| 9 | 89 | From boid type > Get view radius | `ViewRadius(` |  | number “boid-type” | — |  |
| 10 | 90 | From boid type > Get separation weight | `SeparationWeight(` |  | number “boid-type” | — |  |
| 11 | 91 | From boid type > Get alignment weight | `AlignmentWeight(` |  | number “boid-type” | — |  |
| 12 | 92 | From boid type > Get cohesion weight | `CohesionWeight(` |  | number “boid-type” | — |  |
| 13 | 93 | From object > Get angle | `AngleFromFixed(` |  | number “fixed value” | — |  |
| 14 | 94 | From object > Get speed | `SpeedFromFixed(` |  | number “fixed value” | — |  |
| 15 | 95 | From object > Get x-speed | `XSpeedFromFixed(` |  | number “fixed value” | — |  |
| 16 | 96 | From object > Get y-speed | `YSpeedFromFixed(` |  | number “fixed value” | — |  |
| 17 | 97 | From object > Get target X | `TargetXFromFixed(` |  | number “fixed value” | — |  |
| 18 | 98 | From object > Get target Y | `TargetYFromFixed(` |  | number “fixed value” | — |  |
| 19 | 99 | From currently looped boid > Get angle | `AngleFromCurrent(` |  |  | — |  |
| 20 | 100 | From currently looped boid > Get speed | `SpeedFromCurrent(` |  |  | — |  |
| 21 | 101 | From currently looped boid > Get x-speed | `XSpeedFromCurrent(` |  |  | — |  |
| 22 | 102 | From currently looped boid > Get y-speed | `YSpeedFromCurrent(` |  |  | — |  |
| 23 | 103 | From currently looped boid > Get target X | `TargetXFromCurrent(` |  |  | — |  |
| 24 | 104 | From currently looped boid > Get target Y | `TargetYFromCurrent(` |  |  | — |  |
