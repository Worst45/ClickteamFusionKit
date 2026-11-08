# Extension Easing

- File: `Easing.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Any object stopped moving? | `<object>: Any object stopped moving` |  |  | — |  |
| 1 | -82 | Object stopped moving? | `<object>: Object stopped moving: <p0>` |  | object “Select object to test” | — |  |
| 2 | -83 | Is object moving? | `<object>: If <p0> is moving` |  | object “Select object to test” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move object | `Move <p0> using <p1> to [<p2>,<p3>] over <p5> <p4>` |  | object “Select object to move” (unreliable parameters) | — |  |
| 1 | 81 | Stop object | `Stop <p0>` |  | object “Select object to stop” | — |  |
| 2 | 82 | Stop all objects | `Stop all objects` |  |  | — |  |
| 3 | 83 | Reverse object | `Reverse movement of <p0>` |  | object “Select object to move” | — |  |
| 4 | 84 | Default parameters > Set default amplitude | `Set default amplitude = <p0>` |  | numeric expression “Set amplitude value (Default = 1.0)” | — |  |
| 5 | 85 | Default parameters > Set default overshoot | `Set default overshoot = <p0>` |  | numeric expression “Set overshoot value (Default = 1.5)” | — |  |
| 6 | 86 | Default parameters > Set default period | `Set default period = <p0>` |  | numeric expression “Set period value (Default = 0.4)” | — |  |
| 7 | 87 | Object parameters > Set amplitude of object | `Set amplitude of <p0> to <p1>` |  | object “Select obejct”; numeric expression “Set amplitude value (Default = 1.0)” | — |  |
| 8 | 88 | Object parameters > Set overshoot of object | `Set overshoot of <p0> to <p1>` |  | object “Select obejct”; numeric expression “Set overshoot value (Default = 1.5)” | — |  |
| 9 | 89 | Object parameters > Set period of object | `Set period of <p0> to <p1>` |  | object “Select obejct”; numeric expression “Set period value (Default = 0.4)” | — |  |
| 10 | 90 | Move object (nummeric parameters) | `Move <p0> using mode=<p1> functionA=<p2> functionB=<p3> to [<p4>,<p5>] using time-mode <p6> over <p7> time units` |  | numeric expression “Fixed value of the object to move”; numeric expression “Easing mode (0=In, 1=Out, 2=InOut, 3=OutIn)”; numeric expression “First function: (0=Linear, 1=quadratic, 2=cubic, 3=quint, 4=sine, ... )”; numeric expression “Second function: (0=Linear, 1=quadratic, 2=cubic, 3=quint, 4=sine, ... )”; numeric expression “Enter target X coordinate”; numeric expression “Enter target Y coordinate”; numeric expression “Time mode (0=milliseconds, 1=event loops)”; numeric expression “Time” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of controlled objects | `GetNumControlled(` |  |  | — |  |
| 1 | 81 | Get fixed value of recently stopped object | `GetStoppedFixed(` |  |  | — |  |
| 2 | 82 | Easing value [0..1] > Ease-In (function, step) | `EaseIn(` |  | number “function”; number “step” | — |  |
| 3 | 83 | Easing value [0..1] > Ease-Out (function, step) | `EaseOut(` |  | number “function”; number “step” | — |  |
| 4 | 84 | Easing value [0..1] > Ease-InOut (functionA, functionB, step) | `EaseInOut(` |  | number “function A”; number “function B”; number “step” | — |  |
| 5 | 85 | Easing value [0..1] > Ease-OutIn (functionA, functionB, step) | `EaseOutIn(` |  | number “function A”; number “function B”; number “step” | — |  |
| 6 | 86 | Between two values > Ease-In (valueA, valueB, function, step) | `EaseInBetween(` |  | number “value A”; number “value B”; number “function”; number “step” | — |  |
| 7 | 87 | Between two values > Ease-Out (valueA, valueB, function, step) | `EaseOutBetween(` |  | number “value A”; number “value B”; number “function”; number “step” | — |  |
| 8 | 88 | Between two values > Ease-InOut (valueA, valueB, functionA, functionB, step) | `EaseInOutBetween(` |  | number “value A”; number “value B”; number “function A”; number “function B”; number “step” | — |  |
| 9 | 89 | Between two values > Ease-OutIn (valueA, valueB, functionA, functionB, step) | `EaseOutInBetween(` |  | number “value A”; number “value B”; number “function A”; number “function B”; number “step” | — |  |
| 10 | 90 | Parameters of object > Get amplitude of object | `GetObjectAmplitude(` |  | number “fixed value” | — |  |
| 11 | 91 | Parameters of object > Get overshoot of object | `GetObjectOvershoot(` |  | number “fixed value” | — |  |
| 12 | 92 | Parameters of object > Get period of object | `GetObjectPeriod(` |  | number “fixed value” | — |  |
| 13 | 93 | Default parameters > Get default amplitude | `GetDefaultAmplitude(` |  |  | — |  |
| 14 | 94 | Default parameters > Get default overshoot | `GetDefaultOvershoot(` |  |  | — |  |
| 15 | 95 | Default parameters > Get default period | `GetDefaultPeriod(` |  |  | — |  |
