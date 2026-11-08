# Extension Joystick2

- File: `Joystick2.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Buttons > Repeat While Button Pressed | `<object>: Repeat while pressed joystick <p0> button <p1>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128” |
| 1 | -82 | Buttons > Repeat While Any Button Pressed | `<object>: Repeat while any button pressed on joy <p0>` |  | numeric expression “Joystick 1 to 16” |
| 2 | -83 | Joystick is Attached | `<object>: Joystick <p0> is attached` |  | numeric expression “Joystick 1 to 16” |
| 3 | -84 | Joystick is Ignored | `<object>: Joystick <p0> is ignored` |  | numeric expression “Joystick 1 to 16” |
| 4 | -85 | Buttons > Button is Pressed | `<object>: Joystick <p0> button <p1> is pressed` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128” |
| 5 | -86 | Buttons > Button is Pressed Down | `<object>: Joystick <p0> button <p1> is pressed down` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128” |
| 6 | -87 | Buttons > Button is Released | `<object>: Joystick <p0> button <p1> is released` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128” |
| 7 | -88 | Buttons > Any Button is Pressed | `<object>: Any button on joystick <p0> is pressed` |  | numeric expression “Joystick 1 to 16” |
| 8 | -89 | Point-Of-View > Point-of-view is Forward | `<object>: Point-of-view joystick <p0> is forward` |  | numeric expression “Joystick 1 to 16” |
| 9 | -90 | Point-Of-View > Point-of-view is Backward | `<object>: Point-of-view joystick <p0> is backward` |  | numeric expression “Joystick 1 to 16” |
| 10 | -91 | Point-Of-View > Point-of-view is Left | `<object>: Point-of-view joystick <p0> is left` |  | numeric expression “Joystick 1 to 16” |
| 11 | -92 | Point-Of-View > Point-of-view is Right | `<object>: Point-of-view joystick <p0> is right` |  | numeric expression “Joystick 1 to 16” |
| 12 | -93 | Point-Of-View > Point-of-view is Centered | `<object>: Point-of-view joystick <p0> is centered` |  | numeric expression “Joystick 1 to 16” |
| 13 | -94 | Buttons > Button is Changed | `<object>: Joystick <p0> button <p1> is changed` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128” |
| 16 | -97 | Buttons > Any Button is Released | `<object>: Any button on joystick <p0> is released` |  | numeric expression “Joystick 1 to 16” |
| 17 | -98 | Directions > Compare to Joystick Direction | `<object>: Direction of the joystick <p0> is <p1>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Direction 0 - 8 counter-clockwise starting with right (8 is centered)” |
| 18 | -99 | Buttons > AND/OR > AND Two Buttons | `<object>: Joystick <p0> button <p1> AND <p2>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128” |
| 19 | -100 | Buttons > AND/OR > AND Three Buttons | `<object>: Joystick <p0> button <p1> AND <p2> AND <p3>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128” |
| 20 | -101 | Buttons > AND/OR > OR Two Buttons | `<object>: Joystick <p0> button <p1> OR <p2>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128” |
| 21 | -102 | Buttons > AND/OR > OR Three Buttons | `<object>: Joystick <p0> button <p1> OR <p2> OR <p3>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128”; numeric expression “Button 1 to 128” |
| 22 | -103 | Check Axis > Has Z-axis | `<object>: Joystick <p0> has Z-axis` |  | numeric expression “Joystick 1 to 16” |
| 23 | -104 | Check Axis > Has X-rotation | `<object>: Joystick <p0> has X-rotation` |  | numeric expression “Joystick 1 to 16” |
| 24 | -105 | Check Axis > Has Y-rotation | `<object>: Joystick <p0> has Y-rotation` |  | numeric expression “Joystick 1 to 16” |
| 25 | -106 | Check Axis > Has Z-rotation | `<object>: Joystick <p0> has Z-rotation` |  | numeric expression “Joystick 1 to 16” |
| 26 | -107 | Check Axis > Has Point-Of-View | `<object>: Joystick <p0> has Poin-Of-View` |  | numeric expression “Joystick 1 to 16” |
| 27 | -108 | Directions > Direction is Changed | `<object>: Direction of the joystick <p0> is changed` |  | numeric expression “Joystick 1 to 16” |
| 28 | -109 | Force Feedback > Control has Force Feedback | `<object>: Joystick <p0> has force feedback` |  | numeric expression “Joystick 1 to 16” |
| 29 | -110 | Check Axis > Has Slider | `<object>: Joystick <p0> has slider` |  | numeric expression “Joystick 1 to 16” |
| 30 | -111 | Control Type > Is Gamepad | `<object>: Controller <p0> is gamepad` |  | numeric expression “Joystick 1 to 16” |
| 31 | -112 | Control Type > Is Joystick | `<object>: Controller <p0> is joystick` |  | numeric expression “Joystick 1 to 16” |
| 32 | -113 | Control Type > Is Steering Wheel | `<object>: Controller <p0> is steering wheel` |  | numeric expression “Joystick 1 to 16” |
| 33 | -114 | Control Type > Is Xbox Controller | `<object>: Controller <p0> is Xbox controller` |  | numeric expression “Joystick 1 to 16” |
| 34 | -115 | Directions > Compare to Right Stick Direction | `<object>: Right stick direction of the joystick <p0> is <p1>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Direction 0 - 8 counter-clockwise starting with right (8 is centered)” |
| 35 | -116 | Directions > Right Stick Direction is Changed | `<object>: Right stick direction of the joystick <p0> is changed` |  | numeric expression “Joystick 1 to 16” |
| 36 | -117 | Xbox Controller Drivers are Installed | `XBox controller drivers installed` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Ignore/Restore > Ignore Control | `Ignore control <p0>` |  | numeric expression “Joystick 1 to 16” |
| 1 | 81 | Ignore/Restore > Restore Control | `Restore control <p0>` |  | numeric expression “Joystick 1 to 16” |
| 4 | 84 | Force Feedback > Create from file | `Create effect from file <p1> for joystick <p0>` |  | numeric expression “Joystick 1 to 16”; file name “#Title#Select file#Filter#Force Feedback Effect\|*.ffe\|All files\|*.*\|”; string expression “Name to identify the effect” |
| 5 | 85 | Force Feedback > Joystick > Predefined > Create Gun Shot | `Joystick <p0> - Create effect: Gunshot, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 6 | 86 | Force Feedback > Joystick > Predefined > Create Vehicle | `Joystick <p0> - Create effect: Vehicle, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 7 | 87 | Force Feedback > Joystick > Predefined > Create Crash | `Joystick <p0> - Create effect: Crash, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 8 | 88 | Force Feedback > Stop All Effects | `Stop all effects on joystick <p0>` |  | numeric expression “Joystick 1 to 16” |
| 9 | 89 | Force Feedback > Gamepad > Create Soft Rumble | `Joystick <p0> - Create soft rumble, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 10 | 90 | Force Feedback > Gamepad > Create Hard Rumble | `Joystick <p0> - Create hard rumble, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 11 | 91 | Force Feedback > Gamepad > Create Custom Rumble | `Joystick <p0> - Create custom rumble, Delay: <p1> Duration: <p2>, Strong motor <p3>, Weak motor <p4>, ID: <p5>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Delay (seconds as float) before effect starts”; numeric expression “Duration (seconds as float, or -1 for infinite)”; numeric expression “Strong motor (or left motor if Xbox) force (range 0 to 1)”; numeric expression “Weak motor force (or right motor if Xbox) (range 0 to 1)”; string expression “Name to identify the effect” |
| 12 | 92 | Force Feedback > Start Effect | `Start effect <p1> on Joystick <p0>, play <p2> times` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect”; numeric expression “Number of times to play effect or -1 for infinite” |
| 13 | 93 | Force Feedback > Stop Effect | `Stop effect <p1> on Joystick <p0>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 14 | 94 | Force Feedback > Pause All Effects | `Pause all effects on joystick <p0>` |  | numeric expression “Joystick 1 to 16” |
| 15 | 95 | Force Feedback > Resume All Effects | `Resume all effects on joystick <p0>` |  | numeric expression “Joystick 1 to 16” |
| 16 | 96 | Force Feedback > Joystick > Custom > Create Constant Force | `FF: Directional Constant, Joystick <p0>, Duration <p1>, Dir <p2>, Strength <p3>, ID <p4>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Duration (seconds as float, or -1 for infinite)”; numeric expression “Direction in degrees, 0 is north and clock wise”; numeric expression “Strength (-10,000 through 10,000)”; string expression “Name to identify the effect” |
| 17 | 97 | Force Feedback > Joystick > Custom > Create Periodic Force | `FF: Directional Periodic, Joystick <p0>, Duration <p1>, Dir <p2>, Amplitude <p3>, Period <p4>, Type <p5>, ID <p6>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Duration (seconds as float, or -1 for infinite)”; numeric expression “Direction in degrees, 0 is north and clock wise”; numeric expression “Amplitude of the force (0 through 10,000)”; numeric expression “Period (seconds as float)”; numeric expression “Type of force (0 = Sine, 1 = Square, 2 = Triangle, 3 = Sawtooth up, 4 = Sawtooth down)”; string expression “Name to identify the effect” |
| 18 | 98 | Force Feedback > Joystick > Custom > Create Resistance Force | `FF: Directional Resistance, Joystick <p0>, Duration <p1>, Coefficient <p2>, Saturation <p3>, Type <p4>, ID <p5>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Duration (seconds as float, or -1 for infinite)”; numeric expression “Coefficient  (-10,000 through 10,000)”; numeric expression “Saturation (0 through 10,000)”; numeric expression “Type of resistance (0 = Spring, 1 = Damper, 2 = Inertia)”; string expression “Name to identify the effect” |
| 20 | 100 | Force Feedback > Joystick > Custom > Create Periodic Force Advanced | `FF: Directional PeriodicEx, Joystick <p0>, Delay <p1>, Duration <p2>, Dir <p3>, Amplitude <p4>, Period <p5>, Offset <p6>, Phase <p7>, AttackTime <p8>, AttackLevel <p9>, FadeTime %A, FadeLevel %B, Type %C, ID %D` |  | (unreliable parameters) |
| 21 | 101 | Force Feedback > Delete Effect | `Delete effect <p1> from joystick <p0>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 22 | 102 | Force Feedback > Delete All Effects | `Delete all effects from joystick <p0>` |  | numeric expression “Joystick 1 to 16” |
| 23 | 103 | Force Feedback > Joystick > Predefined > Create Explosion | `Joystick <p0> - Create effect: Explosion, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 24 | 104 | Force Feedback > Joystick > Predefined > Create Boing | `Joystick <p0> - Create effect: Boing, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 25 | 105 | Force Feedback > Joystick > Predefined > Create Bump | `Joystick <p0> - Create effect: Bump, Dir: <p1>, ID: <p2>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Direction in degrees, 0 is north and clock wise”; string expression “Name to identify the effect” |
| 26 | 106 | Force Feedback > Joystick > Predefined > Create Minigun | `Joystick <p0> - Create effect: Minigun, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 27 | 107 | Force Feedback > Joystick > Predefined > Create Crossbow | `Joystick <p0> - Create effect: Crossbow, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 28 | 108 | Force Feedback > Joystick > Predefined > Create Dirt | `Joystick <p0> - Create effect: Dirt, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 29 | 109 | Force Feedback > Joystick > Predefined > Create Energy | `Joystick <p0> - Create effect: Energy, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 30 | 110 | Force Feedback > Joystick > Predefined > Create Laser | `Joystick <p0> - Create effect: Laser, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 31 | 111 | Force Feedback > Joystick > Predefined > Create Light saber | `Joystick <p0> - Create effect: Light saber, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 32 | 112 | Force Feedback > Joystick > Predefined > Create Offroad | `Joystick <p0> - Create effect: Offroad, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 33 | 113 | Force Feedback > Joystick > Predefined > Create Rolling | `Joystick <p0> - Create effect: Rolling, ID: <p1>` |  | numeric expression “Joystick 1 to 16”; string expression “Name to identify the effect” |
| 34 | 114 | Map Right Stick Axes | `Map right stick axis for joystick <p0> to up/down: <p1>, left/right <p2>` |  | numeric expression “Joystick 1 to 16”; numeric expression “Up/down axis (0 = X, 1 = Y, 2 = Z, 3 = X Rot, 4 = YRot, 5 = X Rot, 6 = Slider)”; numeric expression “Left/right axis (0 = X, 1 = Y, 2 = Z, 3 = X Rot, 4 = YRot, 5 = X Rot, 6 = Slider)” |
| 35 | 115 | Poll For New Devices | `Poll for new devices` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Axis Values > Raw X Value | `RawX(` |  | number “Joystick 1 to 16” |
| 1 | 81 | Get Axis Values > Raw Y Value | `RawY(` |  | number “Joystick 1 to 16” |
| 2 | 82 | Get Axis Values > Raw Z Value | `RawZ(` |  | number “Joystick 1 to 16” |
| 3 | 83 | Get Axis Values > Raw X-rotation | `Raw XRotation(` |  | number “Joystick 1 to 16” |
| 4 | 84 | Get Axis Values > Raw Y-rotation | `Raw YRotation(` |  | number “Joystick 1 to 16” |
| 5 | 85 | Get Axis Values > Raw Z-rotation | `Raw ZRotation(` |  | number “Joystick 1 to 16” |
| 6 | 86 | Point-of-view Position in Degrees | `POVDegrees(` |  | number “Joystick 1 to 16” |
| 7 | 87 | Min Values > Min X Value | `MinX(` |  | number “Joystick 1 to 16” |
| 8 | 88 | Min Values > Min Y Value | `MinY(` |  | number “Joystick 1 to 16” |
| 9 | 89 | Min Values > Min Z Value | `MinZ(` |  | number “Joystick 1 to 16” |
| 10 | 90 | Min Values > Min X-rotation | `Min XRotation(` |  | number “Joystick 1 to 16” |
| 11 | 91 | Min Values > Min Y-rotation | `Min YRotation(` |  | number “Joystick 1 to 16” |
| 12 | 92 | Min Values > Min Z-rotation | `Min ZRotation(` |  | number “Joystick 1 to 16” |
| 13 | 93 | Max Values > Max X Value | `MaxX(` |  | number “Joystick 1 to 16” |
| 14 | 94 | Max Values > Max Y Value | `MaxY(` |  | number “Joystick 1 to 16” |
| 15 | 95 | Max Values > Max Z Value | `MaxZ(` |  | number “Joystick 1 to 16” |
| 16 | 96 | Max Values > Max X-rotation | `Max XRotation(` |  | number “Joystick 1 to 16” |
| 17 | 97 | Max Values > Max Y-rotation | `Max YRotation(` |  | number “Joystick 1 to 16” |
| 18 | 98 | Max Values > Max Z-rotation | `Max ZRotation(` |  | number “Joystick 1 to 16” |
| 19 | 99 | Max Values > Max Number of Axis | `MaxAxis(` |  | number “Joystick 1 to 16” |
| 20 | 100 | Max Values > Max Number of Buttons | `MaxButtons(` |  | number “Joystick 1 to 16” |
| 21 | 101 | Directions > Joystick Direction | `JoyDir(` |  | number “Joystick 1 to 16” |
| 22 | 102 | Buttons > Last Single Button Pressed | `LastButtonPressed(` |  | number “Joystick 1 to 16” |
| 23 | 103 | Buttons > Last Single Button Released | `LastButtonReleased(` |  | number “Joystick 1 to 16” |
| 24 | 104 | Number of Joysticks Attached | `NrOfJoysticks(` |  |  |
| 25 | 105 | Last Error Code | `LastErrorCode(` |  |  |
| 26 | 106 | Directions > Joystick Direction (Degrees) | `JoyDeg(` |  | number “Joystick 1 to 16” |
| 27 | 107 | Get Joystick Type | `Joystick Type(` |  | number “Joystick 1 to 16” |
| 28 | 108 | Get Joystick Capabilities | `Joystick Capabilities(` |  | number “Joystick 1 to 16” |
| 29 | 109 | Min Values > Min Slider Value | `Min slider(` |  | number “Joystick 1 to 16” |
| 30 | 110 | Max Values > Max Slider Value | `Max slider(` |  | number “Joystick 1 to 16” |
| 31 | 111 | Get Axis Values > Raw Slider Value | `Slider value(` |  | number “Joystick 1 to 16” |
| 32 | 112 | Get Device Name | `DeviceName$(` |  | number “Joystick 1 to 16” → string |
| 33 | 113 | Directions > Joystick Direction Distance (Percent) | `JoyDistance(` |  | number “Joystick 1 to 16”; number “Axis (0 = X, 1 = Y, 2 = Z)” |
| 34 | 114 | Directions > Right Stick Direction Distance (Percent) | `RightStickDistance(` |  | number “Joystick 1 to 16”; number “Axis (0 = LeftRight, 1 = UpDown)” |
| 35 | 115 | Directions > Right Stick Direction | `RightStickDir(` |  | number “Joystick 1 to 16” |
| 36 | 116 | Directions > Right Stick Direction (Degrees) | `RightStickDeg(` |  | number “Joystick 1 to 16” |
| 37 | 117 | Get Last Axis Changed | `LastAxisChanged(` |  | number “Joystick 1 to 16” |
| 38 | 118 | Get Last Active Joystick | `LastActiveJoystick(` |  |  |
