# Extension wiimote

- File: `wiimote.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Wiimote > Wiimote On Connect | `<object> Wiimote - On Connect` |  |  |
| 1 | -82 | Wiimote > Wiimote On Disconnect | `<object> Wiimote - On Disconnect` |  |  |
| 2 | -83 | Extensions > Nunchuck On Connect | `<object> Nunchuck - On Connect` |  |  |
| 3 | -84 | Extensions > Classic Controller On Connect | `<object> Classic Controller - On Connect` |  |  |
| 4 | -85 | Extensions > Extension On Disconnect | `<object> Extension - On Disconnect` |  |  |
| 5 | -86 | Wiimote > Wiimote Is Connected | `<object> Wiimote (<p0>) - Is Connected?` |  | numeric expression “Wiimote ID (0-3)” |
| 6 | -87 | Wiimote > Is Searching for Wiimotes | `<object> Wiimote - Searching?` |  |  |
| 7 | -88 | Extensions > Guitar On Connect | `<object> Guitar - On Connect` |  |  |
| 8 | -89 | Extensions > Nunchuck Is Connected | `<object> Wiimote (<p0>) - Nunchuck Is Connected?` |  | numeric expression “Wiimote ID (0-3)” |
| 9 | -90 | Extensions > Classic Controller Is Connected | `<object> Wiimote (<p0>) - Classic Controller Is Connected?` |  | numeric expression “Wiimote ID (0-3)” |
| 10 | -91 | Extensions > Guitar Is Connected | `<object> Wiimote (<p0>) - Guitar Is Connected?` |  | numeric expression “Wiimote ID (0-3)” |
| 11 | -92 | Wiimote > Input > A > A is Pressed | `<object> Wiimote (<p0>) - A Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 12 | -93 | Wiimote > Input > A > A is Down | `<object> Wiimote (<p0>) - A Down` |  | numeric expression “Wiimote ID (0-3)” |
| 13 | -94 | Wiimote > Input > B > B is Pressed | `<object> Wiimote (<p0>) - B Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 14 | -95 | Wiimote > Input > B > B is Down | `<object> Wiimote (<p0>) - B Down` |  | numeric expression “Wiimote ID (0-3)” |
| 15 | -96 | Wiimote > Input > D-Pad > D-Up is Pressed | `<object> Wiimote (<p0>) - D-Up Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 16 | -97 | Wiimote > Input > D-Pad > D-Up is Down | `<object> Wiimote (<p0>) - D-Up Down` |  | numeric expression “Wiimote ID (0-3)” |
| 17 | -98 | Wiimote > Input > D-Pad > D-Down is Pressed | `<object> Wiimote (<p0>) - D-Down Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 18 | -99 | Wiimote > Input > D-Pad > D-Down is Down | `<object> Wiimote (<p0>) - D-Down Down` |  | numeric expression “Wiimote ID (0-3)” |
| 19 | -100 | Wiimote > Input > D-Pad > D-Left is Pressed | `<object> Wiimote (<p0>) - D-Left Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 20 | -101 | Wiimote > Input > D-Pad > D-Left is Down | `<object> Wiimote (<p0>) - D-Left Down` |  | numeric expression “Wiimote ID (0-3)” |
| 21 | -102 | Wiimote > Input > D-Pad > D-Right is Pressed | `<object> Wiimote (<p0>) - D-Right Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 22 | -103 | Wiimote > Input > D-Pad > D-Right is Down | `<object> Wiimote (<p0>) - D-Right Down` |  | numeric expression “Wiimote ID (0-3)” |
| 23 | -104 | Wiimote > Input > 1 > 1 is Pressed | `<object> Wiimote (<p0>) - 1 Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 24 | -105 | Wiimote > Input > 1 > 1 is Down | `<object> Wiimote (<p0>) - 1 Down` |  | numeric expression “Wiimote ID (0-3)” |
| 25 | -106 | Wiimote > Input > 2 > 2 is Pressed | `<object> Wiimote (<p0>) - 2 Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 26 | -107 | Wiimote > Input > 2 > 2 is Down | `<object> Wiimote (<p0>) - 2 Down` |  | numeric expression “Wiimote ID (0-3)” |
| 27 | -108 | Wiimote > Input > Plus > Plus is Pressed | `<object> Wiimote (<p0>) - Plus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 28 | -109 | Wiimote > Input > Plus > Plus is Down | `<object> Wiimote (<p0>) - Plus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 29 | -110 | Wiimote > Input > Minus > Minus is Pressed | `<object> Wiimote (<p0>) - Minus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 30 | -111 | Wiimote > Input > Minus > Minus is Down | `<object> Wiimote (<p0>) - Minus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 31 | -112 | Wiimote > Input > Home > Home is Pressed | `<object> Wiimote (<p0>) - Home Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 32 | -113 | Wiimote > Input > Home > Home is Down | `<object> Wiimote (<p0>) - Home Down` |  | numeric expression “Wiimote ID (0-3)” |
| 33 | -114 | Extensions > Nunchuck Input > C > C is Pressed | `<object> Wiimote (<p0>) - Nunchuck - C Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 34 | -115 | Extensions > Nunchuck Input > C > C is Down | `<object> Wiimote (<p0>) - Nunchuck - C Down` |  | numeric expression “Wiimote ID (0-3)” |
| 35 | -116 | Extensions > Nunchuck Input > Z > Z is Pressed | `<object> Wiimote (<p0>) - Nunchuck - Z Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 36 | -117 | Extensions > Nunchuck Input > Z > Z is Down | `<object> Wiimote (<p0>) - Nunchuck - Z Down` |  | numeric expression “Wiimote ID (0-3)” |
| 37 | -118 | Extensions > Guitar Input > Green > Green is Pressed | `<object> Wiimote (<p0>) - Guitar - Green Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 38 | -119 | Extensions > Guitar Input > Green > Green is Down | `<object> Wiimote (<p0>) - Guitar - Green Down` |  | numeric expression “Wiimote ID (0-3)” |
| 39 | -120 | Extensions > Guitar Input > Red > Red is Pressed | `<object> Wiimote (<p0>) - Guitar - Red Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 40 | -121 | Extensions > Guitar Input > Red > Red is Down | `<object> Wiimote (<p0>) - Guitar - Red Down` |  | numeric expression “Wiimote ID (0-3)” |
| 41 | -122 | Extensions > Guitar Input > Yellow > Yellow is Pressed | `<object> Wiimote (<p0>) - Guitar - Yellow Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 42 | -123 | Extensions > Guitar Input > Yellow > Yellow is Down | `<object> Wiimote (<p0>) - Guitar - Yellow Down` |  | numeric expression “Wiimote ID (0-3)” |
| 43 | -124 | Extensions > Guitar Input > Blue > Blue is Pressed | `<object> Wiimote (<p0>) - Guitar - Blue Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 44 | -125 | Extensions > Guitar Input > Blue > Blue is Down | `<object> Wiimote (<p0>) - Guitar - Blue Down` |  | numeric expression “Wiimote ID (0-3)” |
| 45 | -126 | Extensions > Guitar Input > Orange > Orange is Pressed | `<object> Wiimote (<p0>) - Guitar - Orange Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 46 | -127 | Extensions > Guitar Input > Orange > Orange is Down | `<object> Wiimote (<p0>) - Guitar - Orange Down` |  | numeric expression “Wiimote ID (0-3)” |
| 47 | -128 | Extensions > Guitar Input > Up > Up is Pressed | `<object> Wiimote (<p0>) - Guitar - Up Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 48 | -129 | Extensions > Guitar Input > Up > Up is Down | `<object> Wiimote (<p0>) - Guitar - Up Down` |  | numeric expression “Wiimote ID (0-3)” |
| 49 | -130 | Extensions > Guitar Input > Down > Down is Pressed | `<object> Wiimote (<p0>) - Guitar - Down Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 50 | -131 | Extensions > Guitar Input > Down > Down is Down | `<object> Wiimote (<p0>) - Guitar - Down Down` |  | numeric expression “Wiimote ID (0-3)” |
| 51 | -132 | Extensions > Guitar Input > Plus > Plus is Pressed | `<object> Wiimote (<p0>) - Guitar - Plus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 52 | -133 | Extensions > Guitar Input > Plus > Plus is Down | `<object> Wiimote (<p0>) - Guitar - Plus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 53 | -134 | Extensions > Guitar Input > Minus > Minus is Pressed | `<object> Wiimote (<p0>) - Guitar - Minus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 54 | -135 | Extensions > Guitar Input > Minus > Minus is Down | `<object> Wiimote (<p0>) - Guitar - Minus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 55 | -136 | Wiimote > IR Dot Found | `<object> Wiimote (<p0>) - IR Dot (<p1>) Found?` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “Dot ID (0-3)” |
| 56 | -137 | Wiimote > Wiimote Is Rumbling | `<object> Wiimote (<p0>) - Is Rumbling?` |  | numeric expression “Wiimote ID (0-3)” |
| 57 | -138 | Wiimote > Wiimote Is Playing a Sound | `<object> Wiimote (<p0>) - Is Playing Sound?` |  | numeric expression “Wiimote ID (0-3)” |
| 58 | -139 | Extensions > Classic Controller Input > D-Pad > D-Up is Pressed | `<object> Wiimote (<p0>) - Classic Controller - D-Up Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 59 | -140 | Extensions > Classic Controller Input > D-Pad > D-Up is Down | `<object> Wiimote (<p0>) - Classic Controller - D-Up Down` |  | numeric expression “Wiimote ID (0-3)” |
| 60 | -141 | Extensions > Classic Controller Input > D-Pad > D-Down is Pressed | `<object> Wiimote (<p0>) - Classic Controller - D-Down Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 61 | -142 | Extensions > Classic Controller Input > D-Pad > D-Down is Down | `<object> Wiimote (<p0>) - Classic Controller - D-Down Down` |  | numeric expression “Wiimote ID (0-3)” |
| 62 | -143 | Extensions > Classic Controller Input > D-Pad > D-Left is Pressed | `<object> Wiimote (<p0>) - Classic Controller - D-Left Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 63 | -144 | Extensions > Classic Controller Input > D-Pad > D-Left is Down | `<object> Wiimote (<p0>) - Classic Controller - D-Left Down` |  | numeric expression “Wiimote ID (0-3)” |
| 64 | -145 | Extensions > Classic Controller Input > D-Pad > D-Right is Pressed | `<object> Wiimote (<p0>) - Classic Controller - D-Right Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 65 | -146 | Extensions > Classic Controller Input > D-Pad > D-Right is Down | `<object> Wiimote (<p0>) - Classic Controller - D-Right Down` |  | numeric expression “Wiimote ID (0-3)” |
| 66 | -147 | Extensions > Classic Controller Input > A > A is Pressed | `<object> Wiimote (<p0>) - Classic Controller - A Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 67 | -148 | Extensions > Classic Controller Input > A > A is Down | `<object> Wiimote (<p0>) - Classic Controller - A Down` |  | numeric expression “Wiimote ID (0-3)” |
| 68 | -149 | Extensions > Classic Controller Input > B > B is Pressed | `<object> Wiimote (<p0>) - Classic Controller - B Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 69 | -150 | Extensions > Classic Controller Input > B > B is Down | `<object> Wiimote (<p0>) - Classic Controller - B Down` |  | numeric expression “Wiimote ID (0-3)” |
| 70 | -151 | Extensions > Classic Controller Input > X > X is Pressed | `<object> Wiimote (<p0>) - Classic Controller - X Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 71 | -152 | Extensions > Classic Controller Input > X > X is Down | `<object> Wiimote (<p0>) - Classic Controller - X Down` |  | numeric expression “Wiimote ID (0-3)” |
| 72 | -153 | Extensions > Classic Controller Input > Y > Y is Pressed | `<object> Wiimote (<p0>) - Classic Controller - Y Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 73 | -154 | Extensions > Classic Controller Input > Y > Y is Down | `<object> Wiimote (<p0>) - Classic Controller - Y Down` |  | numeric expression “Wiimote ID (0-3)” |
| 74 | -155 | Extensions > Classic Controller Input > Minus > Plus is Pressed | `<object> Wiimote (<p0>) - Classic Controller - Minus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 75 | -156 | Extensions > Classic Controller Input > Minus > Plus is Down | `<object> Wiimote (<p0>) - Classic Controller - Minus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 76 | -157 | Extensions > Classic Controller Input > Plus > Plus is Pressed | `<object> Wiimote (<p0>) - Classic Controller - Plus Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 77 | -158 | Extensions > Classic Controller Input > Plus > Plus is Down | `<object> Wiimote (<p0>) - Classic Controller - Plus Down` |  | numeric expression “Wiimote ID (0-3)” |
| 78 | -159 | Extensions > Classic Controller Input > Home > Home is Pressed | `<object> Wiimote (<p0>) - Classic Controller - Home Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 79 | -160 | Extensions > Classic Controller Input > Home > Home is Down | `<object> Wiimote (<p0>) - Classic Controller - Home Down` |  | numeric expression “Wiimote ID (0-3)” |
| 80 | -161 | Extensions > Classic Controller Input > ZL > ZL is Pressed | `<object> Wiimote (<p0>) - Classic Controller - ZL Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 81 | -162 | Extensions > Classic Controller Input > ZL > ZL is Down | `<object> Wiimote (<p0>) - Classic Controller - ZL Down` |  | numeric expression “Wiimote ID (0-3)” |
| 82 | -163 | Extensions > Classic Controller Input > ZR > ZR is Pressed | `<object> Wiimote (<p0>) - Classic Controller - ZR Pressed` |  | numeric expression “Wiimote ID (0-3)” |
| 83 | -164 | Extensions > Classic Controller Input > ZR > ZR is Down | `<object> Wiimote (<p0>) - Classic Controller - ZR Down` |  | numeric expression “Wiimote ID (0-3)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Wiimote > Connect Wiimote | `Connect Wiimote` |  |  |
| 1 | 81 | Wiimote > Stop Connecting Wiimote | `Stop Connecting Wiimote` |  |  |
| 2 | 82 | Wiimote > Disconnect Wiimote | `Disconnect Wiimote (<p0>)` |  | numeric expression “Wiimote ID (0-3)” |
| 3 | 83 | Wiimote > Disconnect All Wiimotes | `Disconnect All Wiimotes` |  |  |
| 4 | 84 | LEDs > Turn on LED | `Wiimote (<p0>) - Turn on LED (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “LED ID (0-3)” |
| 5 | 85 | LEDs > Turn off LED | `Wiimote (<p0>) - Turn off LED (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “LED ID (0-3)” |
| 6 | 86 | LEDs > Set LEDs | `Wiimote (<p0>) - Set LEDs (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “LED Value (Binary representation, first 4 bits)” |
| 7 | 87 | Rumble > Start Rumble | `Start Rumble for Wiimote (<p0>)` |  | numeric expression “Wiimote ID (0-3)” |
| 8 | 88 | Rumble > Stop Rumble | `Stop Rumble for Wiimote (<p0>)` |  | numeric expression “Wiimote ID (0-3)” |
| 9 | 89 | Sounds > Load Sound (16-bit Mono, WAV) | `Load Sound (<p0>) into slot (<p1>)` |  | string expression “16-bit Mono WAV”; numeric expression “Slot (0-7)” |
| 10 | 90 | Sounds > Play Sound | `Wiimote (<p0>) - Play Sound from Slot (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “Slot (0-7)” |
| 11 | 91 | Sounds > Stop Sound | `Wiimote (<p0>) - Stop Sound` |  | numeric expression “Wiimote ID (0-3)” |
| 12 | 92 | Rumble > Stop Rumble for all Wiimotes | `Stop Rumble for all Wiimotes` |  |  |
| 13 | 93 | LEDs > Toggle LED | `Wiimote (<p0>) - Toggle LED (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “LED ID (0-3)” |
| 14 | 94 | Sounds > Mute Speaker | `Wiimote (<p0>) - Mute Speaker (<p1>)` |  | numeric expression “Wiimote ID (0-3)”; numeric expression “1=mute, 0=enable” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Extensions > Nunchuk > Get Joystick X-delta | `getNunchukJoyX(` |  | number “WiimoteID” |
| 1 | 81 | Extensions > Nunchuk > Get Joystick Y-delta | `getNunchukJoyY(` |  | number “WiimoteID” |
| 2 | 82 | Extensions > Guitar > Get Joystick X-delta | `getGuitarJoyX(` |  | number “WiimoteID” |
| 3 | 83 | Extensions > Guitar > Get Joystick Y-delta | `getGuitarJoyY(` |  | number “WiimoteID” |
| 4 | 84 | Extensions > Guitar > Get Trigger Delta | `getGuitarTrigger(` |  | number “WiimoteID” |
| 5 | 85 | Wiimote > Orientation > Get Pitch | `getWiimotePitch(` |  | number “WiimoteID” |
| 6 | 86 | Wiimote > Orientation > Get Roll | `getWiimoteRoll(` |  | number “WiimoteID” |
| 7 | 87 | Wiimote > Orientation > Get X Orientation | `getWiimoteOrientationX(` |  | number “WiimoteID” |
| 8 | 88 | Wiimote > Orientation > Get Y Orientation | `getWiimoteOrientationY(` |  | number “WiimoteID” |
| 9 | 89 | Wiimote > Orientation > Get Z Orientation | `getWiimoteOrientationZ(` |  | number “WiimoteID” |
| 10 | 90 | Wiimote > Orientation > Get X Acceleration | `getWiimoteAccelerationX(` |  | number “WiimoteID” |
| 11 | 91 | Wiimote > Orientation > Get Y Acceleration | `getWiimoteAccelerationY(` |  | number “WiimoteID” |
| 12 | 92 | Wiimote > Orientation > Get Z Acceleration | `getWiimoteAccelerationZ(` |  | number “WiimoteID” |
| 13 | 93 | Wiimote > Orientation > Get Update Age | `getWiimoteUpdateAge(` |  | number “WiimoteID” |
| 14 | 94 | Extensions > Nunchuk > Get Pitch | `getNunchukPitch(` |  | number “WiimoteID” |
| 15 | 95 | Extensions > Nunchuk > Get Roll | `getNunchukRoll(` |  | number “WiimoteID” |
| 16 | 96 | Extensions > Nunchuk > Get X Orientation | `getNunchukOrientationX(` |  | number “WiimoteID” |
| 17 | 97 | Extensions > Nunchuk > Get Y Orientation | `getNunchukOrientationY(` |  | number “WiimoteID” |
| 18 | 98 | Extensions > Nunchuk > Get Z Orientation | `getNunchukOrientationZ(` |  | number “WiimoteID” |
| 19 | 99 | Extensions > Nunchuk > Get X Acceleration | `getNunchukAccelerationX(` |  | number “WiimoteID” |
| 20 | 100 | Extensions > Nunchuk > Get Y Acceleration | `getNunchukAccelerationY(` |  | number “WiimoteID” |
| 21 | 101 | Extensions > Nunchuk > Get Z Acceleration | `getNunchukAccelerationZ(` |  | number “WiimoteID” |
| 22 | 102 | Extensions > Nunchuk > Get Update Age | `getNunchukUpdateAge(` |  | number “WiimoteID” |
| 23 | 103 | Wiimote > IR Dots > Get Dot X | `getIRDotX(` |  | number “WiimoteID”; number “DotID” |
| 24 | 104 | Wiimote > IR Dots > Get Dot Y | `getIRDotY(` |  | number “WiimoteID”; number “DotID” |
| 25 | 105 | Wiimote > IR Dots > Get Dot Size | `getIRDotSize(` |  | number “WiimoteID”; number “DotID” |
| 26 | 106 | Extensions > Classic Controller > Get Left Joystick X-delta | `getClassicLeftJoyX(` |  | number “WiimoteID” |
| 27 | 107 | Extensions > Classic Controller > Get Left Joystick Y-delta | `getClassicLeftJoyY(` |  | number “WiimoteID” |
| 28 | 108 | Extensions > Classic Controller > Get Right Joystick X-delta | `getClassicRightJoyX(` |  | number “WiimoteID” |
| 29 | 109 | Extensions > Classic Controller > Get Right Joystick Y-delta | `getClassicRightJoyY(` |  | number “WiimoteID” |
| 30 | 110 | Extensions > Classic Controller > Get Left Trigger Delta | `getClassicLeftTrigger(` |  | number “WiimoteID” |
| 31 | 111 | Extensions > Classic Controller > Get Right Trigger Delta | `getClassicRightTrigger(` |  | number “WiimoteID” |
| 32 | 112 | Wiimote > Get ID of Last Connected Wiimote | `getLastWiimoteID(` |  |  |
| 33 | 113 | Wiimote > Get Battery Life | `getWiimoteBattery(` |  | number “WiimoteID” |
