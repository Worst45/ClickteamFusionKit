# Extension joystick

- File: `joystick.mfx` — third-party extension (shipped with a downloaded project)
- Name(s) shown in projects: “Joypad object”
- Usage in the corpus: 161 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Buttons > Repeat while button pressed | `<object>: Repeat while pressed jopypad <p0> button <p1>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | 6 (1 proj.) |  |
| 1 | -82 | Buttons > Repeat while any button pressed | `<object>: Repeat while any button pressed on joy <p0>` |  | numeric expression “Joypad 1 or 2” | — |  |
| 2 | -83 | Joypad inplugged | `<object>: Joystick <p0> is inplugged` |  | numeric expression “Joypad 1 or 2” | 2 (1 proj.) |  |
| 3 | -84 | Joypad is ignored | `<object>: Joypad <p0> is ignored` |  | numeric expression “Joypad 1 or 2” | — |  |
| 4 | -85 | Buttons > Button is pressed | `<object>: Joypad <p0> button <p1> is pressed` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 5 | -86 | Buttons > Button is pressed down | `<object>: Joypad <p0> button <p1> is pressed down` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 6 | -87 | Buttons > Button is released | `<object>: Joypad <p0> button <p1> is released` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 7 | -88 | Buttons > Any button is pressed | `<object>: Any button on joypad <p0> is pressed` |  | numeric expression “Joypad 1 or 2” | 1 (1 proj.) |  |
| 8 | -89 | Point-Of-View > Point-of-view is forward | `<object>: Point-of-view joypad <p0> is forward` |  | numeric expression “Joypad 1 or 2” | — |  |
| 9 | -90 | Point-Of-View > Point-of-view is backward | `<object>: Point-of-view joypad <p0> is backward` |  | numeric expression “Joypad 1 or 2” | — |  |
| 10 | -91 | Point-Of-View > Point-of-view is left | `<object>: Point-of-view joypad <p0> is left` |  | numeric expression “Joypad 1 or 2” | — |  |
| 11 | -92 | Point-Of-View > Point-of-view is right | `<object>: Point-of-view joypad <p0> is right` |  | numeric expression “Joypad 1 or 2” | — |  |
| 12 | -93 | Point-Of-View > Point-of-view is centered | `<object>: Point-of-view joypad <p0> is centered` |  | numeric expression “Joypad 1 or 2” | — |  |
| 13 | -94 | Buttons > Button is changed | `<object>: Joypad <p0> button <p1> is changed` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 14 | -95 | Buttons > Button is exclusive pressed | `<object>: Joypad <p0> button <p1> is exclusive pressed` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 15 | -96 | Buttons > Button is exclusive released | `<object>: Joypad <p0> button <p1> is exclusive released` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32” | — |  |
| 16 | -97 | Buttons > Any button is released | `<object>: Any button on joypad <p0> is released` |  | numeric expression “Joypad 1 or 2” | — |  |
| 17 | -98 | Directions > Compare to joypad's direction | `<object>: Direction of the joypad <p0> is <p1>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Direction 0 - 8 counter-clockwise starting with right (8 is centered)” | — |  |
| 18 | -99 | Buttons > AND/OR > AND two buttons | `<object>: Joypad <p0> button <p1> AND <p2>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32” | — |  |
| 19 | -100 | Buttons > AND/OR > AND three buttons | `<object>: Joypad <p0> button <p1> AND <p2> AND <p3>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32” | — |  |
| 20 | -101 | Buttons > AND/OR > OR two buttons | `<object>: Joypad <p0> button <p1> OR <p2>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32” | — |  |
| 21 | -102 | Buttons > AND/OR > OR three buttons | `<object>: Joypad <p0> button <p1> OR <p2> OR <p3>` |  | numeric expression “Joypad 1 or 2”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32”; numeric expression “Button 1 to 32” | — |  |
| 22 | -103 | Check axis > Has Z-axis | `<object>: Joypad <p0> has Z-axis` |  | numeric expression “Joypad 1 or 2” | — |  |
| 23 | -104 | Check axis > Has R-axis | `<object>: Joypad <p0> has R-axis` |  | numeric expression “Joypad 1 or 2” | — |  |
| 24 | -105 | Check axis > Has U-axis | `<object>: Joypad <p0> has U-axis` |  | numeric expression “Joypad 1 or 2” | — |  |
| 25 | -106 | Check axis > Has V-axis | `<object>: Joypad <p0> has V-axis` |  | numeric expression “Joypad 1 or 2” | — |  |
| 26 | -107 | Check axis > Has Point-Of-View | `<object>: Joypad <p0> has Poin-Of-View` |  | numeric expression “Joypad 1 or 2” | — |  |
| 27 | -108 | Directions > Direction is changed | `<object>: Direction of the joypad <p0> is changed` |  | numeric expression “Joypad 1 or 2” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ignore/Restore > Ignore control | `Ignore control <p0>` |  | numeric expression “Joypad 1 or 2” | — |  |
| 1 | 81 | Ignore/Restore > Restore control | `Restore control <p0>` |  | numeric expression “Joypad 1 or 2” | — |  |
| 2 | 82 | Buttons > Reset last button pressed | `Reset last button pressed on joypad <p0>` |  | numeric expression “Joypad 1 or 2” | — |  |
| 3 | 83 | Buttons > Reset last button released | `Reset last button released on joypad <p0>` |  | numeric expression “Joypad 1 or 2” | — |  |
| -56 | 24 | ? | ? |  |  | 5 (1 proj.) |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get axis values > Raw X value | `RawX(` |  | number | 10 (1 proj.) |  |
| 1 | 81 | Get axis values > Raw Y value | `RawY(` |  | number | 10 (1 proj.) |  |
| 2 | 82 | Get axis values > Raw Z value | `RawZ(` |  | number | 16 (1 proj.) |  |
| 3 | 83 | Get axis values > Raw R value | `RawR(` |  | number | 10 (1 proj.) |  |
| 4 | 84 | Get axis values > Raw U value | `RawU(` |  | number | 10 (1 proj.) |  |
| 5 | 85 | Get axis values > Raw V value | `RawV(` |  | number | 4 (1 proj.) |  |
| 6 | 86 | Point-of-view position in degrees | `POVDegrees(` |  | number | 61 (1 proj.) |  |
| 7 | 87 | Min values > Min X value | `MinX(` |  | number | 2 (1 proj.) |  |
| 8 | 88 | Min values > Min Y value | `MinY(` |  | number | 2 (1 proj.) |  |
| 9 | 89 | Min values > Min Z value | `MinZ(` |  | number | 2 (1 proj.) |  |
| 10 | 90 | Min values > Min R value | `MinR(` |  | number | 2 (1 proj.) |  |
| 11 | 91 | Min values > Min U value | `MinU(` |  | number | 2 (1 proj.) |  |
| 12 | 92 | Min values > Min V value | `MinV(` |  | number | 2 (1 proj.) |  |
| 13 | 93 | Max values > Max X value | `MaxX(` |  | number | 2 (1 proj.) |  |
| 14 | 94 | Max values > Max Y value | `MaxY(` |  | number | 2 (1 proj.) |  |
| 15 | 95 | Max values > Max Z value | `MaxZ(` |  | number | 2 (1 proj.) |  |
| 16 | 96 | Max values > Max R value | `MaxR(` |  | number | 2 (1 proj.) |  |
| 17 | 97 | Max values > Max U value | `MaxU(` |  | number | 2 (1 proj.) |  |
| 18 | 98 | Max values > Max V value | `MaxV(` |  | number | 2 (1 proj.) |  |
| 19 | 99 | Max values > Max number of axis | `MaxAxis(` |  | number | — |  |
| 20 | 100 | Max values > Max number of buttons | `MaxButtons(` |  | number | — |  |
| 21 | 101 | Joypad direction | `JoyDir(` |  | number | — |  |
| 22 | 102 | Buttons > Last single button pressed | `LastButtonPressed(` |  | number | 2 (1 proj.) |  |
| 23 | 103 | Buttons > Last single button released | `LastButtonReleased(` |  | number | — |  |
| 24 | 104 | Number of joypads inplugged | `NrOfJoypads(` |  |  | — |  |
