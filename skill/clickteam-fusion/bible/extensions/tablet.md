# Extension tablet

- File: `tablet.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Support > Tablet is Wacom | `<object>: Tablet is Wacom` |  |  | — |  |
| 1 | -82 | Support > Tilt is supported | `<object>: Tilt is supported` |  |  | — |  |
| 2 | -83 | On message | `<object>: On message` |  |  | — |  |
| 3 | -84 | Is initialized | `<object>: Is initialized` |  |  | — |  |
| 4 | -85 | Input > Is holding down 1st button | `<object>: First button is being held down` |  |  | — |  |
| 5 | -86 | Input > Is holding down 2nd button | `<object>: Second button is being held down` |  |  | — |  |
| 6 | -87 | Input > Is pressing | `<object>: Is pressing` |  |  | — |  |
| 7 | -88 | Input > Is using mouse | `<object>: Is using mouse` |  |  | — |  |
| 8 | -89 | Input > Is using pen or airbrush | `<object>: Is using pen or airbrush` |  |  | — |  |
| 9 | -90 | Input > Is using eraser | `<object>: Is using eraser` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Connect to tablet | `Connect to tablet` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Device name | `Device$(` |  | → string | — |  |
| 1 | 81 | Orientation > Maximum | `OrMax(` |  | number “0:Azimuth, 1:Altitude, 2:Twist” | — |  |
| 2 | 82 | Orientation > Minimum | `OrMin(` |  | number “0:Azimuth, 1:Altitude, 2:Twist” | — |  |
| 3 | 83 | Orientation > Units | `OrUnits(` |  | number “0:Azimuth, 1:Altitude, 2:Twist” | — |  |
| 4 | 84 | Pressure > Value | `Pressure(` |  |  | — |  |
| 5 | 85 | Cursor | `Cursor(` |  |  | — |  |
| 6 | 86 | Orientation > Azimuth | `Azimuth(` |  |  | — |  |
| 7 | 87 | Orientation > Altitude | `Altitude(` |  |  | — |  |
| 8 | 88 | Orientation > Twist | `Twist(` |  |  | — |  |
| 9 | 89 | Tangent Pressure > Value | `TanPressure(` |  |  | — |  |
| 10 | 90 | Button map | `Buttons(` |  |  | — |  |
| 11 | 91 | Serial number | `Serial(` |  |  | — |  |
| 12 | 92 | Position > X | `PX(` |  |  | — |  |
| 13 | 93 | Position > Y | `PY(` |  |  | — |  |
| 14 | 94 | Position > Z | `PZ(` |  |  | — |  |
| 15 | 95 | Rotation > Pitch | `Pitch(` |  |  | — |  |
| 16 | 96 | Rotation > Roll | `Roll(` |  |  | — |  |
| 17 | 97 | Rotation > Yaw | `Yaw(` |  |  | — |  |
| 18 | 98 | Pressure > Minimum | `PrMin(` |  |  | — |  |
| 19 | 99 | Pressure > Maximum | `PrMax(` |  |  | — |  |
| 20 | 100 | Tangent Pressure > Minimum | `TanPrMin(` |  |  | — |  |
| 21 | 101 | Tangent Pressure > Maximum | `TanPrMax(` |  |  | — |  |
| 22 | 102 | Rotation > Minimum | `RoMin(` |  | number “0:Pitch, 1:Roll, 2:Yaw” | — |  |
| 23 | 103 | Rotation > Maximum | `RoMax(` |  | number “0:Pitch, 1:Roll, 2:Yaw” | — |  |
| 24 | 104 | Rotation > Units | `RoUnits(` |  | number “0:Pitch, 1:Roll, 2:Yaw” | — |  |
| 25 | 105 | Position > Minimum | `PMin(` |  | number “0:X, 1:Y, 2:Z” | — |  |
| 26 | 106 | Position > Maximum | `PMax(` |  | number “0:X, 1:Y, 2:Z” | — |  |
| 27 | 107 | Orientation > Resolution | `OrRes(` |  | number “0:Azimuth, 1:Altitude, 2:Twist” | — |  |
| 28 | 108 | Rotation > Resolution | `RoRes(` |  | number “0:Pitch, 1:Roll, 2:Yaw” | — |  |
| 29 | 109 | Packet map | `Packet(` |  |  | — |  |
| 30 | 110 | Usage time | `Time(` |  |  | — |  |
