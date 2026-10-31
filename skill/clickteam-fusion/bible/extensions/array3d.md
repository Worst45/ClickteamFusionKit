# Extension array3d

- File: `array3d.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | X is inside array | `X( <p0> ) is inside array` |  | numeric expression “X is inside array” | — |  |
| 1 | -82 | Y is inside array | `Y( <p0> ) is inside array` |  | numeric expression “Y is inside array” | — |  |
| 2 | -83 | Z is inside array | `Z( <p0> ) is inside array` |  | numeric expression “Z is inside array” | — |  |
| 3 | -84 | XY is inside array | `XY( <p0>, <p1> ) is inside array` |  | numeric expression “X is inside array”; numeric expression “Y is inside array” | — |  |
| 4 | -85 | XYZ is inside array | `XYZ( <p0>, <p1>, <p2> ) is inside array` |  | numeric expression “X is inside array”; numeric expression “Y is inside array”; numeric expression “Z is inside array” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Position > Set X | `Set X to <p0>` |  | numeric expression “Set X” | — |  |
| 1 | 81 | Set Position > Set Y | `Set Y to <p0>` |  | numeric expression “Set Y” | — |  |
| 2 | 82 | Set Position > Set Z | `Set Z to <p0>` |  | numeric expression “Set Z” | — |  |
| 3 | 83 | Set Position > Set XY | `Set XY to <p0>, <p1>` |  | numeric expression “Set X”; numeric expression “Set Y” | — |  |
| 4 | 84 | Set Position > Set XYZ | `Set XYZ to <p0>, <p1>, <p2>` |  | numeric expression “Set X”; numeric expression “Set Y”; numeric expression “Set Z” | — |  |
| 5 | 85 | Set Size > Set X Size | `Set X Size to <p0>,` |  | numeric expression “Set X” | — |  |
| 6 | 86 | Set Size > Set Y Size | `Set Y Size to <p0>,` |  | numeric expression “Set Y” | — |  |
| 7 | 87 | Set Size > Set Z Size | `Set Z Size to <p0>,` |  | numeric expression “Set Z” | — |  |
| 8 | 88 | Set Size > Set XY Size | `Set XY Size to <p0>, <p1>` |  | numeric expression “Set X”; numeric expression “Set Y” | — |  |
| 9 | 89 | Set Size > Set XYZ Size | `Set XYZ Size to <p0>, <p1>, <p2>` |  | numeric expression “Set X”; numeric expression “Set Y”; numeric expression “Set Z” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | 1D Array > Get Position | `GetPos(` |  |  | — |  |
| 1 | 81 | 1D Array > Get Position ( X ) | `GetPosX(` |  | number | — |  |
| 2 | 82 | 1D Array > Get Position ( X, Y ) | `GetPosXY(` |  | number; number | — |  |
| 3 | 83 | 1D Array > Get Position ( X, Y, Z ) | `GetPosXYZ(` |  | number; number; number | — |  |
| 4 | 84 | 1D Array > Get Size | `GetSize(` |  |  | — |  |
| 5 | 85 | 3D Array > Get X Position | `GetX(` |  |  | — |  |
| 6 | 86 | 3D Array > Get Y Position | `GetY(` |  |  | — |  |
| 7 | 87 | 3D Array > Get Z Position | `GetZ(` |  |  | — |  |
| 8 | 88 | 3D Array > Get X Size | `GetXSize(` |  |  | — |  |
| 9 | 89 | 3D Array > Get Y Size | `GetYSize(` |  |  | — |  |
| 10 | 90 | 3D Array > Get Z Size | `GetZSize(` |  |  | — |  |
| 11 | 91 | 1D to 3D Array > Get X from single value | `GetXSV(` |  | number | — |  |
| 12 | 92 | 1D to 3D Array > Get Y from single value | `GetYSV(` |  | number | — |  |
| 13 | 93 | 1D to 3D Array > Get Z from single value | `GetZSV(` |  | number | — |  |
