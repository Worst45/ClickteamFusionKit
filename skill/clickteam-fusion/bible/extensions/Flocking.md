# Extension Flocking

- Fichier : `Flocking.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On looped boid | `<objet>: On loop <p0> for boid <p1>` |  | expression chaîne « Enter a name for the loop » ; objet « Select an object » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add object as boid | `Add <p0> as boid type <p1>` |  | objet « Select an object » ; expression numérique « Boid type number » | — |  |
| 1 | 81 | Remove object | `Remove <p0>` |  | objet « Select an object » | — |  |
| 2 | 82 | Set boid type attributes > Set idle speed | `Boid <p0>: Set idle speed <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a speed (in pixels per time unit) » | — |  |
| 3 | 83 | Set boid type attributes > Set min speed | `Boid <p0>: Set min speed: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a min speed (in pixels per time unit) Can be negative for reverse movement » | — |  |
| 4 | 84 | Set boid type attributes > Set max speed | `Boid <p0>: Set max speed: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a max speed (in pixels per time unit) » | — |  |
| 5 | 85 | Set boid type attributes > Set acceleration | `Boid <p0>: Set acceleration: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter an acceleration (max change in pixels per time unit) » | — |  |
| 6 | 86 | Set boid type attributes > Set deceleration | `Boid <p0>: Set deceleration: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a deceleration (max change in pixels per time unit) » | — |  |
| 7 | 87 | Set boid type attributes > Set max turn speed | `Boid <p0>: Set turn speed: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a max turn speed (max angles per time unit) » | — |  |
| 8 | 88 | Set boid type attributes > Set view radius | `Boid <p0>: Set view radius: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Radius » | — |  |
| 9 | 89 | Set boid type attributes > Set avoidance radius | `Boid <p0>: Set avoidance radius: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Radius » | — |  |
| 10 | 90 | Set boid type attributes > Set movement randomization | `Boid <p0>: Set movement randomization: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Enter a movement randomization value » | — |  |
| 11 | 91 | Set boid type attributes > Set separation weight | `Boid <p0>: Set separation weight: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Weight » | — |  |
| 12 | 92 | Set boid type attributes > Set alignment weight | `Boid <p0>: Set alignment weight: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Weight » | — |  |
| 13 | 93 | Set boid type attributes > Set cohesion weight | `Boid <p0>: Set cohesion weight: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Weight » | — |  |
| 14 | 94 | Set boid type attributes > Set angle/direction setting | `Boid <p0>: Set angle/dir setting to: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Set angle/dir setting (0=use angles, 1=use directions, 2=don't rotate) » | — |  |
| 15 | 95 | Set boid type attributes > Set speed dependant turn setting | `Boid <p0>: Set speed dependant turn setting: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Should turn speed depend on the boid speed? (0=NO, 1=YES) » | — |  |
| 16 | 96 | Set boid type attributes > Avoid obstacles? | `Boid <p0>: Set avoid obstacles setting: <p1>` |  | expression numérique « Boid type number » ; expression numérique « Avoid obstacles? (0=NO, 1=YES) » | — |  |
| 17 | 97 | Control boids > All of type > Attract towards position | `Attract all boids of type <p0> towards (<p1>,<p2>) weight: <p3>` |  | expression numérique « Boid type number » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Weight » | — |  |
| 18 | 98 | Control boids > All of type > Chase away from position | `Chase all boids of type <p0> away from (<p1>,<p2>) weight: <p3>` |  | expression numérique « Boid type number » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Weight » | — |  |
| 19 | 99 | Control boids > All of type > Apply force (xy-direction) | `To boid type <p0>, apply force (<p1>,<p2>)` |  | expression numérique « Boid type number » ; expression numérique « X-Speed » ; expression numérique « Y-Speed » | — |  |
| 20 | 100 | Control boids > Within radius > Attract toward position | `Attract all boids of type <p0> towards (<p1>,<p2>) within radius <p3> weight: <p4>` |  | expression numérique « Boid type number » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Radius » ; expression numérique « Weight » | — |  |
| 21 | 101 | Control boids > Within radius > Chase away from position | `Chase all boids of type <p0> away from (<p1>,<p2>) within radius <p3> weight: <p4>` |  | expression numérique « Boid type number » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Radius » ; expression numérique « Weight » | — |  |
| 22 | 102 | Control boids > Within radius > Apply force (xy-direction) | `To boid type <p0>, apply force (<p4>,<p5>) within radius <p3> from (<p1>,<p2>)` |  | expression numérique « Boid type number » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Radius » ; expression numérique « X-Speed » ; expression numérique « Y-Speed » | — |  |
| 23 | 103 | Control boids > Individual boids > Attract towards position | `Attract <p0> towards (<p1>,<p2>) weight: <p3>` |  | objet « Select an object » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Weight » | — |  |
| 24 | 104 | Control boids > Individual boids > Chase away from position | `Chase <p0> away from (<p1>,<p2>) weight: <p3>` |  | objet « Select an object » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Weight » | — |  |
| 25 | 105 | Control boids > Individual boids > Apply force (xy-direction) | `Apply force (<p1>,<p2>) to <p0>` |  | objet « Select an object » ; expression numérique « X-Speed » ; expression numérique « Y-Speed » | — |  |
| 26 | 106 | Loop boids > Loop neighbour boids | `Loop through neighbouring boids to <p1> within radius <p2> with loop name <p0>` |  | expression chaîne « Enter a name for the loop » ; objet « Select an object » ; expression numérique « Radius » | — |  |
| 27 | 107 | Loop boids > Loop boids in radius | `Loop through all boids within radius <p3> from position [<p1>, <p2>] with loop name <p0>` |  | expression chaîne « Enter a name for the loop » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Radius » | — |  |
| 28 | 108 | Loop boids > Loop boids in rectangle | `Loop through all boids within rectangle x:<p1> y:<p2> w:<p3> h:<p4> with loop name <p0>` |  | expression chaîne « Enter a name for the loop » ; expression numérique « X-position » ; expression numérique « Y-Position » ; expression numérique « Width in pixels » ; expression numérique « Height in pixels » | — |  |
| 29 | 109 | Loop boids > Loop all boids | `Loop through all boids with loop name <p0>` |  | expression chaîne « Enter a name for the loop » | — |  |
| 30 | 110 | Loop boids > Loop all boids of type | `Loop through all boids of type <p1> with loop name <p0>` |  | expression chaîne « Enter a name for the loop » ; expression numérique « Boid type number » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | From boid type > Get idle speed | `IdleSpeed(` |  | nombre « boid-type » | — |  |
| 1 | 81 | From boid type > Get min speed | `MinSpeed(` |  | nombre « boid-type » | — |  |
| 2 | 82 | From boid type > Get max speed | `MaxSpeed(` |  | nombre « boid-type » | — |  |
| 3 | 83 | From boid type > Get acceleration | `Acceleration(` |  | nombre « boid-type » | — |  |
| 4 | 84 | From boid type > Get deceleration | `Deceleration(` |  | nombre « boid-type » | — |  |
| 5 | 85 | From boid type > Get turn speed | `TurnSpeed(` |  | nombre « boid-type » | — |  |
| 7 | 87 | From boid type > Get avoidance radius | `AvoidanceRadius(` |  | nombre « boid-type » | — |  |
| 8 | 88 | From boid type > Get movement randomization | `MovementRandomization(` |  | nombre « boid-type » | — |  |
| 9 | 89 | From boid type > Get view radius | `ViewRadius(` |  | nombre « boid-type » | — |  |
| 10 | 90 | From boid type > Get separation weight | `SeparationWeight(` |  | nombre « boid-type » | — |  |
| 11 | 91 | From boid type > Get alignment weight | `AlignmentWeight(` |  | nombre « boid-type » | — |  |
| 12 | 92 | From boid type > Get cohesion weight | `CohesionWeight(` |  | nombre « boid-type » | — |  |
| 13 | 93 | From object > Get angle | `AngleFromFixed(` |  | nombre « fixed value » | — |  |
| 14 | 94 | From object > Get speed | `SpeedFromFixed(` |  | nombre « fixed value » | — |  |
| 15 | 95 | From object > Get x-speed | `XSpeedFromFixed(` |  | nombre « fixed value » | — |  |
| 16 | 96 | From object > Get y-speed | `YSpeedFromFixed(` |  | nombre « fixed value » | — |  |
| 17 | 97 | From object > Get target X | `TargetXFromFixed(` |  | nombre « fixed value » | — |  |
| 18 | 98 | From object > Get target Y | `TargetYFromFixed(` |  | nombre « fixed value » | — |  |
| 19 | 99 | From currently looped boid > Get angle | `AngleFromCurrent(` |  |  | — |  |
| 20 | 100 | From currently looped boid > Get speed | `SpeedFromCurrent(` |  |  | — |  |
| 21 | 101 | From currently looped boid > Get x-speed | `XSpeedFromCurrent(` |  |  | — |  |
| 22 | 102 | From currently looped boid > Get y-speed | `YSpeedFromCurrent(` |  |  | — |  |
| 23 | 103 | From currently looped boid > Get target X | `TargetXFromCurrent(` |  |  | — |  |
| 24 | 104 | From currently looped boid > Get target Y | `TargetYFromCurrent(` |  |  | — |  |
