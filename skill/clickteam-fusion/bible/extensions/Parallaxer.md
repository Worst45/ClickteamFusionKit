# Extension Parallaxer

- File: `Parallaxer.mfx` — installed with Fusion
- Name(s) shown in projects: “Parallaxer”
- Usage in the corpus: 32 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set offset | `Set offset = <p0>` |  | numeric expression “Set offset value” | 12 (1 proj.) |  |
| 1 | 81 | Set width | `Set width to: <p0>` |  | numeric expression “Enter a new width in pixels:” | — |  |
| 2 | 82 | Set height | `Set height to: <p0>` |  | numeric expression “Enter a new height in pixels:” | — |  |
| 3 | 83 | Resampling > On | `Set resampling: on` |  |  | — |  |
| 4 | 84 | Resampling > Off | `Set resampling: off` |  |  | — |  |
| 5 | 85 | Set Z-Length | `Set Z-Length to: <p0>` |  | numeric expression “Enter the length of the line at the observers position. (# pixels)” | — |  |
| 6 | 86 | Load image | `Load image: <p0> append = <p1>` |  | file name “Enter a filename for an image file”; numeric expression “0 = Replace all images, 1 = Add frame to end of animation” | — |  |
| 7 | 87 | Set animation frame | `Set animation frame = <p0>` |  | numeric expression “Animation frame” | 4 (1 proj.) |  |
| 8 | 88 | Attach object | `Attach <p0> on the parallax effect` |  | object “Select the object to be attached to the parallax effect” | — |  |
| 9 | 89 | Detach object | `Detach <p0>` |  | object “Select the object that should be detached” | — |  |
| 10 | 90 | Autoscroll > On | `Set autoscroll: On` |  |  | — |  |
| 11 | 91 | Autoscroll > Off | `Set autoscroll: Off` |  |  | 4 (1 proj.) |  |
| 12 | 92 | Lower repetition limit > Set value | `Set lower repetition boundary: <p0>` |  | numeric expression “Enter a value - (must be lower than the upper boundary value)” | — |  |
| 13 | 93 | Upper repetition limit > Set value | `Set upper repetition boundary: <p0>` |  | numeric expression “Enter a value - (must be higher than the lower boundary value)” | — |  |
| 14 | 94 | Lower repetition limit > On | `Enable lower repetition boundary` |  |  | — |  |
| 15 | 95 | Lower repetition limit > Off | `Disable lower repetition boundary` |  |  | — |  |
| 16 | 96 | Upper repetition limit > On | `Enable upper repetition boundary` |  |  | — |  |
| 17 | 97 | Upper repetition limit > Off | `Disable upper repetition boundary` |  |  | — |  |
| 18 | 98 | Stationary > On | `Set stationary mode: On` |  |  | — |  |
| 19 | 99 | Stationary > Off | `Set stationary mode: Off` |  |  | — |  |
| 20 | 100 | Set center offset | `Set center offset = <p0>` |  | numeric expression “Set the offset relative to the object center at wich the effect should be centered around.” | — |  |
| 21 | 101 | Set angle | `Set angle to <p0>` |  | numeric expression “Enter an angle [0..360]” | — |  |
| -78 | 2 | ? | ? |  |  | 4 (1 proj.) |  |
| -48 | 32 | ? | ? |  |  | 4 (1 proj.) |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get offset | `Offset(` |  |  | — |  |
| 1 | 81 | Get width | `Width(` |  |  | — |  |
| 2 | 82 | Get height | `Height(` |  |  | — |  |
| 4 | 84 | Get animation frame | `AnimationFrame(` |  |  | — |  |
| 5 | 85 | Get line length at position | `LineLengthAt(` |  | number “position of line” | — |  |
| 6 | 86 | Get scroll coefficient at position | `ScrollCoeffAt(` |  | number “position of line” | — |  |
| 7 | 87 | Get lower repetition boundary | `LowerBoundary(` |  |  | — |  |
| 8 | 88 | Get upper repetition boundary | `UpperBoundary(` |  |  | — |  |
| 9 | 89 | Get center offset | `CenterOffset(` |  |  | — |  |
| 10 | 90 | Get angle | `Angle(` |  |  | — |  |
| -64 | 16 | ? | ? |  |  | 4 (1 proj.) |  |
