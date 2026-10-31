# Extension OpenGL-ClearControl

- File: `OpenGL-ClearControl.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set clear color... | `Set clear color to <p0>` |  | color “Set clear color...” | — |  |
| 1 | 81 | Set clear depth... | `Set clear depth to <p0>` |  | numeric expression “Set clear depth...” | — |  |
| 2 | 82 | Clear color buffer | `Clear color buffer` |  |  | — |  |
| 3 | 83 | Clear depth buffer | `Clear depth buffer` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get clear color | `ClearColor(` |  |  | — |  |
| 1 | 81 | Get clear depth | `ClearDepth(` |  |  | — |  |
