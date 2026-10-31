# Extension 3DActives

- File: `3DActives.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move an object | `Move <p0> to 3D( <p1> , <p2> ,<p3> )` |  | object “Select Object”; numeric expression “X (Float Allowed)”; numeric expression “Y (Float Allowed)”; numeric expression “Z (Float Allowed)” | — |  |
| 1 | 81 | Rotate the camara | `Rotate the camara to <p0> , <p1> , <p2>` |  | numeric expression “X (Float, 0-360)”; numeric expression “Y (Float, 0-360)”; numeric expression “Z (Float, 0-360)” | — |  |
| 2 | 82 | Settings > Set Prespective Value | `Set Prespective Value to <p0>` |  | numeric expression “Value (Floats allowed)” | — |  |
| 3 | 83 | Settings > Enable scaling | `Enable scaling` |  |  | — |  |
| 4 | 84 | Settings > Disable scaling | `Disable scaling` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X position of last moved object | `LastX(` |  |  | — |  |
| 1 | 81 | Get Y position of last moved object | `LastY(` |  |  | — |  |
| 2 | 82 | Get Z position of last moved object | `LastZ(` |  |  | — |  |
| 3 | 83 | Get X angle of the camara | `CamX(` |  |  | — |  |
| 4 | 84 | Get Y angle of the camara | `CamY(` |  |  | — |  |
| 5 | 85 | Get Z angle of the camara | `CamZ(` |  |  | — |  |
