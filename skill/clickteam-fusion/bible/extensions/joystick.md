# Extension joystick

- Fichier : `joystick.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Joypad object »
- Usage dans le corpus : 161 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Buttons > Repeat while button pressed | `<objet>: Repeat while pressed jopypad <p0> button <p1>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | 6 (1 proj.) |  |
| 1 | -82 | Buttons > Repeat while any button pressed | `<objet>: Repeat while any button pressed on joy <p0>` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 2 | -83 | Joypad inplugged | `<objet>: Joystick <p0> is inplugged` |  | expression numérique « Joypad 1 or 2 » | 2 (1 proj.) |  |
| 3 | -84 | Joypad is ignored | `<objet>: Joypad <p0> is ignored` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 4 | -85 | Buttons > Button is pressed | `<objet>: Joypad <p0> button <p1> is pressed` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 5 | -86 | Buttons > Button is pressed down | `<objet>: Joypad <p0> button <p1> is pressed down` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 6 | -87 | Buttons > Button is released | `<objet>: Joypad <p0> button <p1> is released` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 7 | -88 | Buttons > Any button is pressed | `<objet>: Any button on joypad <p0> is pressed` |  | expression numérique « Joypad 1 or 2 » | 1 (1 proj.) |  |
| 8 | -89 | Point-Of-View > Point-of-view is forward | `<objet>: Point-of-view joypad <p0> is forward` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 9 | -90 | Point-Of-View > Point-of-view is backward | `<objet>: Point-of-view joypad <p0> is backward` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 10 | -91 | Point-Of-View > Point-of-view is left | `<objet>: Point-of-view joypad <p0> is left` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 11 | -92 | Point-Of-View > Point-of-view is right | `<objet>: Point-of-view joypad <p0> is right` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 12 | -93 | Point-Of-View > Point-of-view is centered | `<objet>: Point-of-view joypad <p0> is centered` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 13 | -94 | Buttons > Button is changed | `<objet>: Joypad <p0> button <p1> is changed` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 14 | -95 | Buttons > Button is exclusive pressed | `<objet>: Joypad <p0> button <p1> is exclusive pressed` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 15 | -96 | Buttons > Button is exclusive released | `<objet>: Joypad <p0> button <p1> is exclusive released` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » | — |  |
| 16 | -97 | Buttons > Any button is released | `<objet>: Any button on joypad <p0> is released` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 17 | -98 | Directions > Compare to joypad's direction | `<objet>: Direction of the joypad <p0> is <p1>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Direction 0 - 8 counter-clockwise starting with right (8 is centered) » | — |  |
| 18 | -99 | Buttons > AND/OR > AND two buttons | `<objet>: Joypad <p0> button <p1> AND <p2>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » | — |  |
| 19 | -100 | Buttons > AND/OR > AND three buttons | `<objet>: Joypad <p0> button <p1> AND <p2> AND <p3>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » | — |  |
| 20 | -101 | Buttons > AND/OR > OR two buttons | `<objet>: Joypad <p0> button <p1> OR <p2>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » | — |  |
| 21 | -102 | Buttons > AND/OR > OR three buttons | `<objet>: Joypad <p0> button <p1> OR <p2> OR <p3>` |  | expression numérique « Joypad 1 or 2 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » ; expression numérique « Button 1 to 32 » | — |  |
| 22 | -103 | Check axis > Has Z-axis | `<objet>: Joypad <p0> has Z-axis` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 23 | -104 | Check axis > Has R-axis | `<objet>: Joypad <p0> has R-axis` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 24 | -105 | Check axis > Has U-axis | `<objet>: Joypad <p0> has U-axis` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 25 | -106 | Check axis > Has V-axis | `<objet>: Joypad <p0> has V-axis` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 26 | -107 | Check axis > Has Point-Of-View | `<objet>: Joypad <p0> has Poin-Of-View` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 27 | -108 | Directions > Direction is changed | `<objet>: Direction of the joypad <p0> is changed` |  | expression numérique « Joypad 1 or 2 » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ignore/Restore > Ignore control | `Ignore control <p0>` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 1 | 81 | Ignore/Restore > Restore control | `Restore control <p0>` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 2 | 82 | Buttons > Reset last button pressed | `Reset last button pressed on joypad <p0>` |  | expression numérique « Joypad 1 or 2 » | — |  |
| 3 | 83 | Buttons > Reset last button released | `Reset last button released on joypad <p0>` |  | expression numérique « Joypad 1 or 2 » | — |  |
| -56 | 24 | ? | ? |  |  | 5 (1 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get axis values > Raw X value | `RawX(` |  | nombre | 10 (1 proj.) |  |
| 1 | 81 | Get axis values > Raw Y value | `RawY(` |  | nombre | 10 (1 proj.) |  |
| 2 | 82 | Get axis values > Raw Z value | `RawZ(` |  | nombre | 16 (1 proj.) |  |
| 3 | 83 | Get axis values > Raw R value | `RawR(` |  | nombre | 10 (1 proj.) |  |
| 4 | 84 | Get axis values > Raw U value | `RawU(` |  | nombre | 10 (1 proj.) |  |
| 5 | 85 | Get axis values > Raw V value | `RawV(` |  | nombre | 4 (1 proj.) |  |
| 6 | 86 | Point-of-view position in degrees | `POVDegrees(` |  | nombre | 61 (1 proj.) |  |
| 7 | 87 | Min values > Min X value | `MinX(` |  | nombre | 2 (1 proj.) |  |
| 8 | 88 | Min values > Min Y value | `MinY(` |  | nombre | 2 (1 proj.) |  |
| 9 | 89 | Min values > Min Z value | `MinZ(` |  | nombre | 2 (1 proj.) |  |
| 10 | 90 | Min values > Min R value | `MinR(` |  | nombre | 2 (1 proj.) |  |
| 11 | 91 | Min values > Min U value | `MinU(` |  | nombre | 2 (1 proj.) |  |
| 12 | 92 | Min values > Min V value | `MinV(` |  | nombre | 2 (1 proj.) |  |
| 13 | 93 | Max values > Max X value | `MaxX(` |  | nombre | 2 (1 proj.) |  |
| 14 | 94 | Max values > Max Y value | `MaxY(` |  | nombre | 2 (1 proj.) |  |
| 15 | 95 | Max values > Max Z value | `MaxZ(` |  | nombre | 2 (1 proj.) |  |
| 16 | 96 | Max values > Max R value | `MaxR(` |  | nombre | 2 (1 proj.) |  |
| 17 | 97 | Max values > Max U value | `MaxU(` |  | nombre | 2 (1 proj.) |  |
| 18 | 98 | Max values > Max V value | `MaxV(` |  | nombre | 2 (1 proj.) |  |
| 19 | 99 | Max values > Max number of axis | `MaxAxis(` |  | nombre | — |  |
| 20 | 100 | Max values > Max number of buttons | `MaxButtons(` |  | nombre | — |  |
| 21 | 101 | Joypad direction | `JoyDir(` |  | nombre | — |  |
| 22 | 102 | Buttons > Last single button pressed | `LastButtonPressed(` |  | nombre | 2 (1 proj.) |  |
| 23 | 103 | Buttons > Last single button released | `LastButtonReleased(` |  | nombre | — |  |
| 24 | 104 | Number of joypads inplugged | `NrOfJoypads(` |  |  | — |  |
