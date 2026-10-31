# Extension MoveSafely2

- File: `MoveSafely2.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Safety procedure | `On Safety` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Safety Procedure > Prepare | `Prepare Safety` |  |  | — |  |
| 1 | 81 | Safety Procedure > Commence | `Commence Safety Procedure` |  |  | — |  |
| 2 | 82 | Safety Procedure > Stop ( Push out of obstacle ) | `Stop Safety Procedure and push out` |  |  | — |  |
| 3 | 83 | Add a new protected object/s | `Add object (<p0>) to protection` |  | object “Select Object”; numeric expression “Pixel Distance of each 'step'” | — |  |
| 4 | 84 | Safety Procedure > Stop ( Keep in obstacle        ) | `Stop Safety Procedure and keep in obstacle` |  |  | — |  |
| 6 | 86 | Release all objects | `Release protected objects` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current object X | `GetX` |  |  | — |  |
| 1 | 81 | Get current object Y | `GetY` |  |  | — |  |
| 2 | 82 | Get current object Fixed Value | `GetFixed(` |  |  | — |  |
| 3 | 83 | Get Number of loops | `Numberofobjects(` |  |  | — |  |
| 4 | 84 | Get loop index | `Getloopindex(` |  |  | — |  |
