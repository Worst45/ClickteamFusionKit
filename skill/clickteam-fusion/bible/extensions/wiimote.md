# Extension wiimote

- Fichier : `wiimote.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Wiimote > Wiimote On Connect | `<objet> Wiimote - On Connect` |  |  | — |  |
| 1 | -82 | Wiimote > Wiimote On Disconnect | `<objet> Wiimote - On Disconnect` |  |  | — |  |
| 2 | -83 | Extensions > Nunchuck On Connect | `<objet> Nunchuck - On Connect` |  |  | — |  |
| 3 | -84 | Extensions > Classic Controller On Connect | `<objet> Classic Controller - On Connect` |  |  | — |  |
| 4 | -85 | Extensions > Extension On Disconnect | `<objet> Extension - On Disconnect` |  |  | — |  |
| 5 | -86 | Wiimote > Wiimote Is Connected | `<objet> Wiimote (<p0>) - Is Connected?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 6 | -87 | Wiimote > Is Searching for Wiimotes | `<objet> Wiimote - Searching?` |  |  | — |  |
| 7 | -88 | Extensions > Guitar On Connect | `<objet> Guitar - On Connect` |  |  | — |  |
| 8 | -89 | Extensions > Nunchuck Is Connected | `<objet> Wiimote (<p0>) - Nunchuck Is Connected?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 9 | -90 | Extensions > Classic Controller Is Connected | `<objet> Wiimote (<p0>) - Classic Controller Is Connected?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 10 | -91 | Extensions > Guitar Is Connected | `<objet> Wiimote (<p0>) - Guitar Is Connected?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 11 | -92 | Wiimote > Input > A > A is Pressed | `<objet> Wiimote (<p0>) - A Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 12 | -93 | Wiimote > Input > A > A is Down | `<objet> Wiimote (<p0>) - A Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 13 | -94 | Wiimote > Input > B > B is Pressed | `<objet> Wiimote (<p0>) - B Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 14 | -95 | Wiimote > Input > B > B is Down | `<objet> Wiimote (<p0>) - B Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 15 | -96 | Wiimote > Input > D-Pad > D-Up is Pressed | `<objet> Wiimote (<p0>) - D-Up Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 16 | -97 | Wiimote > Input > D-Pad > D-Up is Down | `<objet> Wiimote (<p0>) - D-Up Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 17 | -98 | Wiimote > Input > D-Pad > D-Down is Pressed | `<objet> Wiimote (<p0>) - D-Down Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 18 | -99 | Wiimote > Input > D-Pad > D-Down is Down | `<objet> Wiimote (<p0>) - D-Down Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 19 | -100 | Wiimote > Input > D-Pad > D-Left is Pressed | `<objet> Wiimote (<p0>) - D-Left Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 20 | -101 | Wiimote > Input > D-Pad > D-Left is Down | `<objet> Wiimote (<p0>) - D-Left Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 21 | -102 | Wiimote > Input > D-Pad > D-Right is Pressed | `<objet> Wiimote (<p0>) - D-Right Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 22 | -103 | Wiimote > Input > D-Pad > D-Right is Down | `<objet> Wiimote (<p0>) - D-Right Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 23 | -104 | Wiimote > Input > 1 > 1 is Pressed | `<objet> Wiimote (<p0>) - 1 Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 24 | -105 | Wiimote > Input > 1 > 1 is Down | `<objet> Wiimote (<p0>) - 1 Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 25 | -106 | Wiimote > Input > 2 > 2 is Pressed | `<objet> Wiimote (<p0>) - 2 Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 26 | -107 | Wiimote > Input > 2 > 2 is Down | `<objet> Wiimote (<p0>) - 2 Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 27 | -108 | Wiimote > Input > Plus > Plus is Pressed | `<objet> Wiimote (<p0>) - Plus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 28 | -109 | Wiimote > Input > Plus > Plus is Down | `<objet> Wiimote (<p0>) - Plus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 29 | -110 | Wiimote > Input > Minus > Minus is Pressed | `<objet> Wiimote (<p0>) - Minus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 30 | -111 | Wiimote > Input > Minus > Minus is Down | `<objet> Wiimote (<p0>) - Minus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 31 | -112 | Wiimote > Input > Home > Home is Pressed | `<objet> Wiimote (<p0>) - Home Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 32 | -113 | Wiimote > Input > Home > Home is Down | `<objet> Wiimote (<p0>) - Home Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 33 | -114 | Extensions > Nunchuck Input > C > C is Pressed | `<objet> Wiimote (<p0>) - Nunchuck - C Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 34 | -115 | Extensions > Nunchuck Input > C > C is Down | `<objet> Wiimote (<p0>) - Nunchuck - C Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 35 | -116 | Extensions > Nunchuck Input > Z > Z is Pressed | `<objet> Wiimote (<p0>) - Nunchuck - Z Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 36 | -117 | Extensions > Nunchuck Input > Z > Z is Down | `<objet> Wiimote (<p0>) - Nunchuck - Z Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 37 | -118 | Extensions > Guitar Input > Green > Green is Pressed | `<objet> Wiimote (<p0>) - Guitar - Green Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 38 | -119 | Extensions > Guitar Input > Green > Green is Down | `<objet> Wiimote (<p0>) - Guitar - Green Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 39 | -120 | Extensions > Guitar Input > Red > Red is Pressed | `<objet> Wiimote (<p0>) - Guitar - Red Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 40 | -121 | Extensions > Guitar Input > Red > Red is Down | `<objet> Wiimote (<p0>) - Guitar - Red Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 41 | -122 | Extensions > Guitar Input > Yellow > Yellow is Pressed | `<objet> Wiimote (<p0>) - Guitar - Yellow Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 42 | -123 | Extensions > Guitar Input > Yellow > Yellow is Down | `<objet> Wiimote (<p0>) - Guitar - Yellow Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 43 | -124 | Extensions > Guitar Input > Blue > Blue is Pressed | `<objet> Wiimote (<p0>) - Guitar - Blue Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 44 | -125 | Extensions > Guitar Input > Blue > Blue is Down | `<objet> Wiimote (<p0>) - Guitar - Blue Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 45 | -126 | Extensions > Guitar Input > Orange > Orange is Pressed | `<objet> Wiimote (<p0>) - Guitar - Orange Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 46 | -127 | Extensions > Guitar Input > Orange > Orange is Down | `<objet> Wiimote (<p0>) - Guitar - Orange Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 47 | -128 | Extensions > Guitar Input > Up > Up is Pressed | `<objet> Wiimote (<p0>) - Guitar - Up Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 48 | -129 | Extensions > Guitar Input > Up > Up is Down | `<objet> Wiimote (<p0>) - Guitar - Up Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 49 | -130 | Extensions > Guitar Input > Down > Down is Pressed | `<objet> Wiimote (<p0>) - Guitar - Down Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 50 | -131 | Extensions > Guitar Input > Down > Down is Down | `<objet> Wiimote (<p0>) - Guitar - Down Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 51 | -132 | Extensions > Guitar Input > Plus > Plus is Pressed | `<objet> Wiimote (<p0>) - Guitar - Plus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 52 | -133 | Extensions > Guitar Input > Plus > Plus is Down | `<objet> Wiimote (<p0>) - Guitar - Plus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 53 | -134 | Extensions > Guitar Input > Minus > Minus is Pressed | `<objet> Wiimote (<p0>) - Guitar - Minus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 54 | -135 | Extensions > Guitar Input > Minus > Minus is Down | `<objet> Wiimote (<p0>) - Guitar - Minus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 55 | -136 | Wiimote > IR Dot Found | `<objet> Wiimote (<p0>) - IR Dot (<p1>) Found?` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « Dot ID (0-3) » | — |  |
| 56 | -137 | Wiimote > Wiimote Is Rumbling | `<objet> Wiimote (<p0>) - Is Rumbling?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 57 | -138 | Wiimote > Wiimote Is Playing a Sound | `<objet> Wiimote (<p0>) - Is Playing Sound?` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 58 | -139 | Extensions > Classic Controller Input > D-Pad > D-Up is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - D-Up Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 59 | -140 | Extensions > Classic Controller Input > D-Pad > D-Up is Down | `<objet> Wiimote (<p0>) - Classic Controller - D-Up Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 60 | -141 | Extensions > Classic Controller Input > D-Pad > D-Down is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - D-Down Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 61 | -142 | Extensions > Classic Controller Input > D-Pad > D-Down is Down | `<objet> Wiimote (<p0>) - Classic Controller - D-Down Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 62 | -143 | Extensions > Classic Controller Input > D-Pad > D-Left is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - D-Left Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 63 | -144 | Extensions > Classic Controller Input > D-Pad > D-Left is Down | `<objet> Wiimote (<p0>) - Classic Controller - D-Left Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 64 | -145 | Extensions > Classic Controller Input > D-Pad > D-Right is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - D-Right Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 65 | -146 | Extensions > Classic Controller Input > D-Pad > D-Right is Down | `<objet> Wiimote (<p0>) - Classic Controller - D-Right Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 66 | -147 | Extensions > Classic Controller Input > A > A is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - A Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 67 | -148 | Extensions > Classic Controller Input > A > A is Down | `<objet> Wiimote (<p0>) - Classic Controller - A Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 68 | -149 | Extensions > Classic Controller Input > B > B is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - B Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 69 | -150 | Extensions > Classic Controller Input > B > B is Down | `<objet> Wiimote (<p0>) - Classic Controller - B Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 70 | -151 | Extensions > Classic Controller Input > X > X is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - X Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 71 | -152 | Extensions > Classic Controller Input > X > X is Down | `<objet> Wiimote (<p0>) - Classic Controller - X Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 72 | -153 | Extensions > Classic Controller Input > Y > Y is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - Y Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 73 | -154 | Extensions > Classic Controller Input > Y > Y is Down | `<objet> Wiimote (<p0>) - Classic Controller - Y Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 74 | -155 | Extensions > Classic Controller Input > Minus > Plus is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - Minus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 75 | -156 | Extensions > Classic Controller Input > Minus > Plus is Down | `<objet> Wiimote (<p0>) - Classic Controller - Minus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 76 | -157 | Extensions > Classic Controller Input > Plus > Plus is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - Plus Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 77 | -158 | Extensions > Classic Controller Input > Plus > Plus is Down | `<objet> Wiimote (<p0>) - Classic Controller - Plus Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 78 | -159 | Extensions > Classic Controller Input > Home > Home is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - Home Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 79 | -160 | Extensions > Classic Controller Input > Home > Home is Down | `<objet> Wiimote (<p0>) - Classic Controller - Home Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 80 | -161 | Extensions > Classic Controller Input > ZL > ZL is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - ZL Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 81 | -162 | Extensions > Classic Controller Input > ZL > ZL is Down | `<objet> Wiimote (<p0>) - Classic Controller - ZL Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 82 | -163 | Extensions > Classic Controller Input > ZR > ZR is Pressed | `<objet> Wiimote (<p0>) - Classic Controller - ZR Pressed` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 83 | -164 | Extensions > Classic Controller Input > ZR > ZR is Down | `<objet> Wiimote (<p0>) - Classic Controller - ZR Down` |  | expression numérique « Wiimote ID (0-3) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Wiimote > Connect Wiimote | `Connect Wiimote` |  |  | — |  |
| 1 | 81 | Wiimote > Stop Connecting Wiimote | `Stop Connecting Wiimote` |  |  | — |  |
| 2 | 82 | Wiimote > Disconnect Wiimote | `Disconnect Wiimote (<p0>)` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 3 | 83 | Wiimote > Disconnect All Wiimotes | `Disconnect All Wiimotes` |  |  | — |  |
| 4 | 84 | LEDs > Turn on LED | `Wiimote (<p0>) - Turn on LED (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « LED ID (0-3) » | — |  |
| 5 | 85 | LEDs > Turn off LED | `Wiimote (<p0>) - Turn off LED (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « LED ID (0-3) » | — |  |
| 6 | 86 | LEDs > Set LEDs | `Wiimote (<p0>) - Set LEDs (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « LED Value (Binary representation, first 4 bits) » | — |  |
| 7 | 87 | Rumble > Start Rumble | `Start Rumble for Wiimote (<p0>)` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 8 | 88 | Rumble > Stop Rumble | `Stop Rumble for Wiimote (<p0>)` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 9 | 89 | Sounds > Load Sound (16-bit Mono, WAV) | `Load Sound (<p0>) into slot (<p1>)` |  | expression chaîne « 16-bit Mono WAV » ; expression numérique « Slot (0-7) » | — |  |
| 10 | 90 | Sounds > Play Sound | `Wiimote (<p0>) - Play Sound from Slot (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « Slot (0-7) » | — |  |
| 11 | 91 | Sounds > Stop Sound | `Wiimote (<p0>) - Stop Sound` |  | expression numérique « Wiimote ID (0-3) » | — |  |
| 12 | 92 | Rumble > Stop Rumble for all Wiimotes | `Stop Rumble for all Wiimotes` |  |  | — |  |
| 13 | 93 | LEDs > Toggle LED | `Wiimote (<p0>) - Toggle LED (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « LED ID (0-3) » | — |  |
| 14 | 94 | Sounds > Mute Speaker | `Wiimote (<p0>) - Mute Speaker (<p1>)` |  | expression numérique « Wiimote ID (0-3) » ; expression numérique « 1=mute, 0=enable » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Extensions > Nunchuk > Get Joystick X-delta | `getNunchukJoyX(` |  | nombre « WiimoteID » | — |  |
| 1 | 81 | Extensions > Nunchuk > Get Joystick Y-delta | `getNunchukJoyY(` |  | nombre « WiimoteID » | — |  |
| 2 | 82 | Extensions > Guitar > Get Joystick X-delta | `getGuitarJoyX(` |  | nombre « WiimoteID » | — |  |
| 3 | 83 | Extensions > Guitar > Get Joystick Y-delta | `getGuitarJoyY(` |  | nombre « WiimoteID » | — |  |
| 4 | 84 | Extensions > Guitar > Get Trigger Delta | `getGuitarTrigger(` |  | nombre « WiimoteID » | — |  |
| 5 | 85 | Wiimote > Orientation > Get Pitch | `getWiimotePitch(` |  | nombre « WiimoteID » | — |  |
| 6 | 86 | Wiimote > Orientation > Get Roll | `getWiimoteRoll(` |  | nombre « WiimoteID » | — |  |
| 7 | 87 | Wiimote > Orientation > Get X Orientation | `getWiimoteOrientationX(` |  | nombre « WiimoteID » | — |  |
| 8 | 88 | Wiimote > Orientation > Get Y Orientation | `getWiimoteOrientationY(` |  | nombre « WiimoteID » | — |  |
| 9 | 89 | Wiimote > Orientation > Get Z Orientation | `getWiimoteOrientationZ(` |  | nombre « WiimoteID » | — |  |
| 10 | 90 | Wiimote > Orientation > Get X Acceleration | `getWiimoteAccelerationX(` |  | nombre « WiimoteID » | — |  |
| 11 | 91 | Wiimote > Orientation > Get Y Acceleration | `getWiimoteAccelerationY(` |  | nombre « WiimoteID » | — |  |
| 12 | 92 | Wiimote > Orientation > Get Z Acceleration | `getWiimoteAccelerationZ(` |  | nombre « WiimoteID » | — |  |
| 13 | 93 | Wiimote > Orientation > Get Update Age | `getWiimoteUpdateAge(` |  | nombre « WiimoteID » | — |  |
| 14 | 94 | Extensions > Nunchuk > Get Pitch | `getNunchukPitch(` |  | nombre « WiimoteID » | — |  |
| 15 | 95 | Extensions > Nunchuk > Get Roll | `getNunchukRoll(` |  | nombre « WiimoteID » | — |  |
| 16 | 96 | Extensions > Nunchuk > Get X Orientation | `getNunchukOrientationX(` |  | nombre « WiimoteID » | — |  |
| 17 | 97 | Extensions > Nunchuk > Get Y Orientation | `getNunchukOrientationY(` |  | nombre « WiimoteID » | — |  |
| 18 | 98 | Extensions > Nunchuk > Get Z Orientation | `getNunchukOrientationZ(` |  | nombre « WiimoteID » | — |  |
| 19 | 99 | Extensions > Nunchuk > Get X Acceleration | `getNunchukAccelerationX(` |  | nombre « WiimoteID » | — |  |
| 20 | 100 | Extensions > Nunchuk > Get Y Acceleration | `getNunchukAccelerationY(` |  | nombre « WiimoteID » | — |  |
| 21 | 101 | Extensions > Nunchuk > Get Z Acceleration | `getNunchukAccelerationZ(` |  | nombre « WiimoteID » | — |  |
| 22 | 102 | Extensions > Nunchuk > Get Update Age | `getNunchukUpdateAge(` |  | nombre « WiimoteID » | — |  |
| 23 | 103 | Wiimote > IR Dots > Get Dot X | `getIRDotX(` |  | nombre « WiimoteID » ; nombre « DotID » | — |  |
| 24 | 104 | Wiimote > IR Dots > Get Dot Y | `getIRDotY(` |  | nombre « WiimoteID » ; nombre « DotID » | — |  |
| 25 | 105 | Wiimote > IR Dots > Get Dot Size | `getIRDotSize(` |  | nombre « WiimoteID » ; nombre « DotID » | — |  |
| 26 | 106 | Extensions > Classic Controller > Get Left Joystick X-delta | `getClassicLeftJoyX(` |  | nombre « WiimoteID » | — |  |
| 27 | 107 | Extensions > Classic Controller > Get Left Joystick Y-delta | `getClassicLeftJoyY(` |  | nombre « WiimoteID » | — |  |
| 28 | 108 | Extensions > Classic Controller > Get Right Joystick X-delta | `getClassicRightJoyX(` |  | nombre « WiimoteID » | — |  |
| 29 | 109 | Extensions > Classic Controller > Get Right Joystick Y-delta | `getClassicRightJoyY(` |  | nombre « WiimoteID » | — |  |
| 30 | 110 | Extensions > Classic Controller > Get Left Trigger Delta | `getClassicLeftTrigger(` |  | nombre « WiimoteID » | — |  |
| 31 | 111 | Extensions > Classic Controller > Get Right Trigger Delta | `getClassicRightTrigger(` |  | nombre « WiimoteID » | — |  |
| 32 | 112 | Wiimote > Get ID of Last Connected Wiimote | `getLastWiimoteID(` |  |  | — |  |
| 33 | 113 | Wiimote > Get Battery Life | `getWiimoteBattery(` |  | nombre « WiimoteID » | — |  |
