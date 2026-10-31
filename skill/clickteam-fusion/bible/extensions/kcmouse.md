# Extension kcmouse

- File: `kcmouse.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Actual Mouse X | `Actual Mouse X position <p0>` |  | (unreliable parameters) | — |  |
| 1 | -82 | Compare Actual Mouse Y | `Actual Mouse Y position <p0>` |  | (unreliable parameters) | — |  |
| 2 | -83 | Compare Distance rolled | `Distance Mouse Rolled <p0>` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Actual Mouse X | `Set Actual Mouse X to <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Set Actual Mouse Y | `Set Actual Mouse Y to <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Actual Mouse X Position | `MouseX(` |  |  | — |  |
| 1 | 81 | Get Actual Mouse Y Position | `MouseY(` |  |  | — |  |
| 2 | 82 | Get Distance Rolled | `MouseRoll(` |  |  | — |  |
