# Extension kcdirect

- File: `kcdirect.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set the amount to rotate | `Set the amount to rotate to <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Rotate object toward a direction | `Rotate <p0> toward direction <p1>` |  | (unreliable parameters) | — |  |
| 2 | 82 | Rotate object toward a position | `Rotate <p0> toward <p1>` |  | position “Rotate object toward a position” | — |  |
| 3 | 83 | Add a directional speed to an object | `Add speed <p0> to <p1>` |  | (unreliable parameters) | — |  |
| 4 | 84 | Set the direction to add | `Set the direction for adding to <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Convert an XY to a direction | `XY_to_Dir(` |  | number | — |  |
| 1 | 81 | Convert an XY to a speed | `XY_to_Speed(` |  | number | — |  |
| 2 | 82 | Convert a direction to an X value | `Direction_to_X(` |  | number | — |  |
| 3 | 83 | Convert a direction to a Y value | `Direction_to_Y(` |  | number | — |  |
| 4 | 84 | Turn one direction toward another | `Turn_Toward(` |  | number | — |  |
