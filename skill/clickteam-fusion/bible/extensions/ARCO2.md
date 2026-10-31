# Extension ARCO2

- File: `ARCO2.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Before move | `<object> Before moving the object` |  |  | — |  |
| 1 | -82 | After move | `<object> After moving the object` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Set speed | `Set The Speed Of Car To <p0>` |  | numeric expression “Speed” | — |  |
| 1 | 81 | Settings > Set rotation Speed | `Set The Rotation Speed Of Car To <p0>` |  | numeric expression “Speed” | — |  |
| 2 | 82 | Settings > Set acceleration | `Set The Acceleration Of Car To <p0>` |  | numeric expression “Speed” | — |  |
| 3 | 83 | Settings > Set deceleration | `Set The Deceleration Of Car To <p0>` |  | numeric expression “Speed” | — |  |
| 4 | 84 | Settings > Select car object | `Set <p0> as the car` |  | object “Select Object” | — |  |
| 5 | 85 | Step > Step forward | `Step forward` |  |  | — |  |
| 6 | 86 | Step > Step backward | `Step backward` |  |  | — |  |
| 7 | 87 | Rotation  > Rotate right | `Rotate Right` |  |  | — |  |
| 8 | 88 | Rotation  > Rotate left | `Rotate Left` |  |  | — |  |
| 9 | 89 | Custom > Step in amount | `Step <p0> pixels` |  | numeric expression “Amount” | — |  |
| 10 | 90 | Custom > Rotate in amount | `Rotate <p0> Deg` |  | numeric expression “Amount” | — |  |
| 11 | 91 | Custom > Set postion | `Set Postion (<p0>,<p1>)` |  | numeric expression “X”; numeric expression “Y” | — |  |
| 12 | 92 | Custom > Set angle | `Set Angle To <p0> Deg` |  | numeric expression “Amount” | — |  |
| 13 | 93 | Custom > Set current speed | `Set current speed to <p0> pixels` |  | numeric expression “Speed” | — |  |
| 14 | 94 | Stop | `Stop` |  |  | — |  |
| 15 | 95 | Bounce | `Bounce with power <p0>` |  | numeric expression “Power of bouncing” | — |  |
| 16 | 96 | Custom > Step in angle | `Step in <p0> deg` |  | numeric expression “Angle” | — |  |
| 17 | 97 | Custom > Step in angle and amount | `Step <p1> pixels in <p0> deg` |  | numeric expression “Angle”; numeric expression “Pixels” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get car X | `⡘` |  |  | — |  |
| 1 | 81 | Get car Y | `⡙` |  |  | — |  |
| 2 | 82 | Get car dir | `Dir(` |  |  | — |  |
| 3 | 83 | Get car angle | `angle(` |  |  | — |  |
| 4 | 84 | Get current speed | `cspeed(` |  |  | — |  |
| 5 | 85 | Settings > Get speed | `Speed(` |  |  | — |  |
| 6 | 86 | Settings > Get rotation speed | `RSpeed(` |  |  | — |  |
| 7 | 87 | Settings > Get acceleration | `Acc(` |  |  | — |  |
| 8 | 88 | Settings > Get deceleration | `Dec(` |  |  | — |  |
