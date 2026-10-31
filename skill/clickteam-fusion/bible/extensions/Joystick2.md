# Extension Joystick2

- Fichier : `Joystick2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Joystick 2 object »
- Usage dans le corpus : 382 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Buttons > Repeat While Button Pressed | `<objet>: Repeat while pressed joystick <p0> button <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » | 6 (1 proj.) |  |
| 1 | -82 | Buttons > Repeat While Any Button Pressed | `<objet>: Repeat while any button pressed on joy <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 2 | -83 | Joystick is Attached | `<objet>: Joystick <p0> is attached` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 3 | -84 | Joystick is Ignored | `<objet>: Joystick <p0> is ignored` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 4 | -85 | Buttons > Button is Pressed | `<objet>: Joystick <p0> button <p1> is pressed` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » | — |  |
| 5 | -86 | Buttons > Button is Pressed Down | `<objet>: Joystick <p0> button <p1> is pressed down` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » | — |  |
| 6 | -87 | Buttons > Button is Released | `<objet>: Joystick <p0> button <p1> is released` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » | — |  |
| 7 | -88 | Buttons > Any Button is Pressed | `<objet>: Any button on joystick <p0> is pressed` |  | expression numérique « Joystick 1 to 16 » | 1 (1 proj.) |  |
| 8 | -89 | Point-Of-View > Point-of-view is Forward | `<objet>: Point-of-view joystick <p0> is forward` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 9 | -90 | Point-Of-View > Point-of-view is Backward | `<objet>: Point-of-view joystick <p0> is backward` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 10 | -91 | Point-Of-View > Point-of-view is Left | `<objet>: Point-of-view joystick <p0> is left` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 11 | -92 | Point-Of-View > Point-of-view is Right | `<objet>: Point-of-view joystick <p0> is right` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 12 | -93 | Point-Of-View > Point-of-view is Centered | `<objet>: Point-of-view joystick <p0> is centered` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 13 | -94 | Buttons > Button is Changed | `<objet>: Joystick <p0> button <p1> is changed` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » | — |  |
| 16 | -97 | Buttons > Any Button is Released | `<objet>: Any button on joystick <p0> is released` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 17 | -98 | Directions > Compare to Joystick Direction | `<objet>: Direction of the joystick <p0> is <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Direction 0 - 8 counter-clockwise starting with right (8 is centered) » | — |  |
| 18 | -99 | Buttons > AND/OR > AND Two Buttons | `<objet>: Joystick <p0> button <p1> AND <p2>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » | — |  |
| 19 | -100 | Buttons > AND/OR > AND Three Buttons | `<objet>: Joystick <p0> button <p1> AND <p2> AND <p3>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » | — |  |
| 20 | -101 | Buttons > AND/OR > OR Two Buttons | `<objet>: Joystick <p0> button <p1> OR <p2>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » | — |  |
| 21 | -102 | Buttons > AND/OR > OR Three Buttons | `<objet>: Joystick <p0> button <p1> OR <p2> OR <p3>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » ; expression numérique « Button 1 to 128 » | — |  |
| 22 | -103 | Check Axis > Has Z-axis | `<objet>: Joystick <p0> has Z-axis` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 23 | -104 | Check Axis > Has X-rotation | `<objet>: Joystick <p0> has X-rotation` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 24 | -105 | Check Axis > Has Y-rotation | `<objet>: Joystick <p0> has Y-rotation` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 25 | -106 | Check Axis > Has Z-rotation | `<objet>: Joystick <p0> has Z-rotation` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 26 | -107 | Check Axis > Has Point-Of-View | `<objet>: Joystick <p0> has Poin-Of-View` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 27 | -108 | Directions > Direction is Changed | `<objet>: Direction of the joystick <p0> is changed` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 28 | -109 | Force Feedback > Control has Force Feedback | `<objet>: Joystick <p0> has force feedback` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 29 | -110 | Check Axis > Has Slider | `<objet>: Joystick <p0> has slider` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 30 | -111 | Control Type > Is Gamepad | `<objet>: Controller <p0> is gamepad` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 31 | -112 | Control Type > Is Joystick | `<objet>: Controller <p0> is joystick` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 32 | -113 | Control Type > Is Steering Wheel | `<objet>: Controller <p0> is steering wheel` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 33 | -114 | Control Type > Is Xbox Controller | `<objet>: Controller <p0> is Xbox controller` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 34 | -115 | Directions > Compare to Right Stick Direction | `<objet>: Right stick direction of the joystick <p0> is <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Direction 0 - 8 counter-clockwise starting with right (8 is centered) » | — |  |
| 35 | -116 | Directions > Right Stick Direction is Changed | `<objet>: Right stick direction of the joystick <p0> is changed` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 36 | -117 | Xbox Controller Drivers are Installed | `XBox controller drivers installed` |  |  | — |  |
| -54 | -27 | ? | ? |  |  | 33 (1 proj.) |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ignore/Restore > Ignore Control | `Ignore control <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 1 | 81 | Ignore/Restore > Restore Control | `Restore control <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 4 | 84 | Force Feedback > Create from file | `Create effect from file <p1> for joystick <p0>` |  | expression numérique « Joystick 1 to 16 » ; nom de fichier « #Title#Select file#Filter#Force Feedback Effect\|*.ffe\|All files\|*.*\| » ; expression chaîne « Name to identify the effect » | — |  |
| 5 | 85 | Force Feedback > Joystick > Predefined > Create Gun Shot | `Joystick <p0> - Create effect: Gunshot, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 6 | 86 | Force Feedback > Joystick > Predefined > Create Vehicle | `Joystick <p0> - Create effect: Vehicle, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 7 | 87 | Force Feedback > Joystick > Predefined > Create Crash | `Joystick <p0> - Create effect: Crash, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 8 | 88 | Force Feedback > Stop All Effects | `Stop all effects on joystick <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 9 | 89 | Force Feedback > Gamepad > Create Soft Rumble | `Joystick <p0> - Create soft rumble, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 10 | 90 | Force Feedback > Gamepad > Create Hard Rumble | `Joystick <p0> - Create hard rumble, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 11 | 91 | Force Feedback > Gamepad > Create Custom Rumble | `Joystick <p0> - Create custom rumble, Delay: <p1> Duration: <p2>, Strong motor <p3>, Weak motor <p4>, ID: <p5>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Delay (seconds as float) before effect starts » ; expression numérique « Duration (seconds as float, or -1 for infinite) » ; expression numérique « Strong motor (or left motor if Xbox) force (range 0 to 1) » ; expression numérique « Weak motor force (or right motor if Xbox) (range 0 to 1) » ; expression chaîne « Name to identify the effect » | 45 (1 proj.) |  |
| 12 | 92 | Force Feedback > Start Effect | `Start effect <p1> on Joystick <p0>, play <p2> times` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » ; expression numérique « Number of times to play effect or -1 for infinite » | — |  |
| 13 | 93 | Force Feedback > Stop Effect | `Stop effect <p1> on Joystick <p0>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 14 | 94 | Force Feedback > Pause All Effects | `Pause all effects on joystick <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 15 | 95 | Force Feedback > Resume All Effects | `Resume all effects on joystick <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 16 | 96 | Force Feedback > Joystick > Custom > Create Constant Force | `FF: Directional Constant, Joystick <p0>, Duration <p1>, Dir <p2>, Strength <p3>, ID <p4>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Duration (seconds as float, or -1 for infinite) » ; expression numérique « Direction in degrees, 0 is north and clock wise » ; expression numérique « Strength (-10,000 through 10,000) » ; expression chaîne « Name to identify the effect » | — |  |
| 17 | 97 | Force Feedback > Joystick > Custom > Create Periodic Force | `FF: Directional Periodic, Joystick <p0>, Duration <p1>, Dir <p2>, Amplitude <p3>, Period <p4>, Type <p5>, ID <p6>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Duration (seconds as float, or -1 for infinite) » ; expression numérique « Direction in degrees, 0 is north and clock wise » ; expression numérique « Amplitude of the force (0 through 10,000) » ; expression numérique « Period (seconds as float) » ; expression numérique « Type of force (0 = Sine, 1 = Square, 2 = Triangle, 3 = Sawtooth up, 4 = Sawtooth down) » ; expression chaîne « Name to identify the effect » | — |  |
| 18 | 98 | Force Feedback > Joystick > Custom > Create Resistance Force | `FF: Directional Resistance, Joystick <p0>, Duration <p1>, Coefficient <p2>, Saturation <p3>, Type <p4>, ID <p5>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Duration (seconds as float, or -1 for infinite) » ; expression numérique « Coefficient  (-10,000 through 10,000) » ; expression numérique « Saturation (0 through 10,000) » ; expression numérique « Type of resistance (0 = Spring, 1 = Damper, 2 = Inertia) » ; expression chaîne « Name to identify the effect » | — |  |
| 20 | 100 | Force Feedback > Joystick > Custom > Create Periodic Force Advanced | `FF: Directional PeriodicEx, Joystick <p0>, Delay <p1>, Duration <p2>, Dir <p3>, Amplitude <p4>, Period <p5>, Offset <p6>, Phase <p7>, AttackTime <p8>, AttackLevel <p9>, FadeTime %A, FadeLevel %B, Type %C, ID %D` |  | (paramètres non fiables) | — |  |
| 21 | 101 | Force Feedback > Delete Effect | `Delete effect <p1> from joystick <p0>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 22 | 102 | Force Feedback > Delete All Effects | `Delete all effects from joystick <p0>` |  | expression numérique « Joystick 1 to 16 » | — |  |
| 23 | 103 | Force Feedback > Joystick > Predefined > Create Explosion | `Joystick <p0> - Create effect: Explosion, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 24 | 104 | Force Feedback > Joystick > Predefined > Create Boing | `Joystick <p0> - Create effect: Boing, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 25 | 105 | Force Feedback > Joystick > Predefined > Create Bump | `Joystick <p0> - Create effect: Bump, Dir: <p1>, ID: <p2>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Direction in degrees, 0 is north and clock wise » ; expression chaîne « Name to identify the effect » | — |  |
| 26 | 106 | Force Feedback > Joystick > Predefined > Create Minigun | `Joystick <p0> - Create effect: Minigun, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 27 | 107 | Force Feedback > Joystick > Predefined > Create Crossbow | `Joystick <p0> - Create effect: Crossbow, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 28 | 108 | Force Feedback > Joystick > Predefined > Create Dirt | `Joystick <p0> - Create effect: Dirt, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 29 | 109 | Force Feedback > Joystick > Predefined > Create Energy | `Joystick <p0> - Create effect: Energy, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 30 | 110 | Force Feedback > Joystick > Predefined > Create Laser | `Joystick <p0> - Create effect: Laser, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 31 | 111 | Force Feedback > Joystick > Predefined > Create Light saber | `Joystick <p0> - Create effect: Light saber, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 32 | 112 | Force Feedback > Joystick > Predefined > Create Offroad | `Joystick <p0> - Create effect: Offroad, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 33 | 113 | Force Feedback > Joystick > Predefined > Create Rolling | `Joystick <p0> - Create effect: Rolling, ID: <p1>` |  | expression numérique « Joystick 1 to 16 » ; expression chaîne « Name to identify the effect » | — |  |
| 34 | 114 | Map Right Stick Axes | `Map right stick axis for joystick <p0> to up/down: <p1>, left/right <p2>` |  | expression numérique « Joystick 1 to 16 » ; expression numérique « Up/down axis (0 = X, 1 = Y, 2 = Z, 3 = X Rot, 4 = YRot, 5 = X Rot, 6 = Slider) » ; expression numérique « Left/right axis (0 = X, 1 = Y, 2 = Z, 3 = X Rot, 4 = YRot, 5 = X Rot, 6 = Slider) » | — |  |
| 35 | 115 | Poll For New Devices | `Poll for new devices` |  |  | 1 (1 proj.) |  |
| -49 | 31 | ? | ? |  |  | 85 (1 proj.) |  |
| -48 | 32 | ? | ? |  |  | 1 (1 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Axis Values > Raw X Value | `RawX(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 1 | 81 | Get Axis Values > Raw Y Value | `RawY(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 2 | 82 | Get Axis Values > Raw Z Value | `RawZ(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 3 | 83 | Get Axis Values > Raw X-rotation | `Raw XRotation(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 4 | 84 | Get Axis Values > Raw Y-rotation | `Raw YRotation(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 5 | 85 | Get Axis Values > Raw Z-rotation | `Raw ZRotation(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 6 | 86 | Point-of-view Position in Degrees | `POVDegrees(` |  | nombre « Joystick 1 to 16 » | 61 (1 proj.) |  |
| 7 | 87 | Min Values > Min X Value | `MinX(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 8 | 88 | Min Values > Min Y Value | `MinY(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 9 | 89 | Min Values > Min Z Value | `MinZ(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 10 | 90 | Min Values > Min X-rotation | `Min XRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 11 | 91 | Min Values > Min Y-rotation | `Min YRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 12 | 92 | Min Values > Min Z-rotation | `Min ZRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 13 | 93 | Max Values > Max X Value | `MaxX(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 14 | 94 | Max Values > Max Y Value | `MaxY(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 15 | 95 | Max Values > Max Z Value | `MaxZ(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 16 | 96 | Max Values > Max X-rotation | `Max XRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 17 | 97 | Max Values > Max Y-rotation | `Max YRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 18 | 98 | Max Values > Max Z-rotation | `Max ZRotation(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 19 | 99 | Max Values > Max Number of Axis | `MaxAxis(` |  | nombre « Joystick 1 to 16 » | — |  |
| 20 | 100 | Max Values > Max Number of Buttons | `MaxButtons(` |  | nombre « Joystick 1 to 16 » | — |  |
| 21 | 101 | Directions > Joystick Direction | `JoyDir(` |  | nombre « Joystick 1 to 16 » | — |  |
| 22 | 102 | Buttons > Last Single Button Pressed | `LastButtonPressed(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 23 | 103 | Buttons > Last Single Button Released | `LastButtonReleased(` |  | nombre « Joystick 1 to 16 » | — |  |
| 24 | 104 | Number of Joysticks Attached | `NrOfJoysticks(` |  |  | 1 (1 proj.) |  |
| 25 | 105 | Last Error Code | `LastErrorCode(` |  |  | — |  |
| 26 | 106 | Directions > Joystick Direction (Degrees) | `JoyDeg(` |  | nombre « Joystick 1 to 16 » | — |  |
| 27 | 107 | Get Joystick Type | `Joystick Type(` |  | nombre « Joystick 1 to 16 » | — |  |
| 28 | 108 | Get Joystick Capabilities | `Joystick Capabilities(` |  | nombre « Joystick 1 to 16 » | — |  |
| 29 | 109 | Min Values > Min Slider Value | `Min slider(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 30 | 110 | Max Values > Max Slider Value | `Max slider(` |  | nombre « Joystick 1 to 16 » | 2 (1 proj.) |  |
| 31 | 111 | Get Axis Values > Raw Slider Value | `Slider value(` |  | nombre « Joystick 1 to 16 » | 10 (1 proj.) |  |
| 32 | 112 | Get Device Name | `DeviceName$(` |  | nombre « Joystick 1 to 16 » → chaîne | 2 (1 proj.) |  |
| 33 | 113 | Directions > Joystick Direction Distance (Percent) | `JoyDistance(` |  | nombre « Joystick 1 to 16 » ; nombre « Axis (0 = X, 1 = Y, 2 = Z) » | — |  |
| 34 | 114 | Directions > Right Stick Direction Distance (Percent) | `RightStickDistance(` |  | nombre « Joystick 1 to 16 » ; nombre « Axis (0 = LeftRight, 1 = UpDown) » | — |  |
| 35 | 115 | Directions > Right Stick Direction | `RightStickDir(` |  | nombre « Joystick 1 to 16 » | — |  |
| 36 | 116 | Directions > Right Stick Direction (Degrees) | `RightStickDeg(` |  | nombre « Joystick 1 to 16 » | — |  |
| 37 | 117 | Get Last Axis Changed | `LastAxisChanged(` |  | nombre « Joystick 1 to 16 » | — |  |
| 38 | 118 | Get Last Active Joystick | `LastActiveJoystick(` |  |  | — |  |
| -64 | 16 | ? | ? |  |  | 46 (1 proj.) |  |
