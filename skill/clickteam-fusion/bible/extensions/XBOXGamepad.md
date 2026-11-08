# Extension XBOXGamepad

- File: `XBOXGamepad.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Gamepad is connected | `<object>: Gamepad of player <p0> is connected` | <object>: La manette du joueur <p0> est connectée | numeric expression “Player number, from 0 to 3” |
| 1 | -82 | Buttons > Button A is pressed | `<object>: Button A of player <p0> is pressed` | <object>: Le bouton A du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 2 | -83 | Buttons > Button B is pressed | `<object>: Button B of player <p0> is pressed` | <object>: Le bouton B du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 3 | -84 | Buttons > Button X is pressed | `<object>: Button X of player <p0> is pressed` | <object>: Le bouton X du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 4 | -85 | Buttons > Button Y is pressed | `<object>: Button Y of player <p0> is pressed` | <object>: Le bouton Y du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 5 | -86 | Buttons > Back button is pressed | `<object>: Back button of player <p0> is pressed` | <object>: Le bouton back du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 7 | -88 | Shoulders > Left shoulder is pressed | `<object>: Left shoulder of player <p0> is pressed` | <object>: Le bouton arrière gauche du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 8 | -89 | Sticks > Left stick is pressed | `<object>: Left stick of player <p0> is pressed` | <object>: Le stick gauche du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 9 | -90 | Shoulders > Right shoulder is pressed | `<object>: Right shoulder of player <p0> is pressed` | <object>: Le bouton arrière droit du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 10 | -91 | Sticks > Right stick is pressed | `<object>: Right stick of player <p0> is pressed` | <object>: Le stick droit du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 11 | -92 | Buttons > Start is pressed | `<object>: Start button of player <p0> is pressed` | <object>: Le bouton start du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 12 | -93 | Direction pad > DPad up is pressed | `<object>: DPad up button of player <p0> is pressed` | <object>: Le bouton haut du pad du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 13 | -94 | Direction pad > DPad down is pressed | `<object>: DPad down button of player <p0> is pressed` | <object>: Le bouton bas du pad du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 14 | -95 | Direction pad > DPad left is pressed | `<object>: DPad left button of player <p0> is pressed` | <object>: Le bouton gauche du pad du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 15 | -96 | Direction pad > DPad right is pressed | `<object>: DPad right button of player <p0> is pressed` | <object>: Le bouton droit du pad du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |
| 16 | -97 | Button is pressed | `Button <p1> of players <p0> is pressed` | Le bouton #<p1> des joueurs <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination”; numeric expression “Enter the button number” |
| 17 | -98 | Any button is pressed | `<object>: Any button of player <p0> is pressed` | <object>: N'importe quel bouton du joueur <p0> est enfoncé | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Vibrate | `Vibrate gamepad of player <p0>, left motor <p1>, right motor <p2>, duration <p3>` | Faire vibrer la manette du joueur <p0>, moteur gauche <p1>, moteur droit <p2>, durée <p3> | numeric expression “Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination”; numeric expression “Left motor (0-100)”; numeric expression “Right motor (0-100)”; numeric expression “Enter duration, in 1/1000th of second” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Sticks > Left > Get horizontal position | `StickLeftH(` | Position horizontale | number “Player numbers” |
| 1 | 81 | Sticks > Left > Get vertical position | `StickLeftV(` | Position verticale | number “Player numbers” |
| 2 | 82 | Sticks > Right > Get horizontal position | `StickRightH(` | Position horizontale | number “Player numbers” |
| 3 | 83 | Sticks > Right > Get vertical position | `StickRightV(` | Position verticale | number “Player numbers” |
| 4 | 84 | Triggers > Get position of left trigger | `TriggerLeft(` | Position gachette gauche | number “Player numbers” |
| 5 | 85 | Triggers > Get position of right trigger | `TriggerRight(` | Position gachette droite | number “Player numbers” |
| 6 | 86 | Buttons > Button A pressed | `ButtonA(` | Bouton A | number “Player numbers” |
| 7 | 87 | Buttons > Button B pressed | `ButtonB(` | Bouton B | number “Player numbers” |
| 8 | 88 | Buttons > Button X pressed | `ButtonX(` | Bouton X | number “Player numbers” |
| 9 | 89 | Buttons > Button Y pressed | `ButtonY(` | Bouton Y | number “Player numbers” |
| 10 | 90 | Buttons > Back button pressed | `ButtonBack(` | Bouton back | number “Player numbers” |
| 12 | 92 | Shoulders > Left shoulder pressed | `ButtonLS(` | Bouton arrière gauche | number “Player numbers” |
| 13 | 93 | Sticks > Left > Stick pressed | `ButtonLStick(` | Bouton stick | number “Player numbers” |
| 14 | 94 | Shoulders > Right shoulder pressed | `ButtonRS(` | Bouton arrière droit | number “Player numbers” |
| 15 | 95 | Sticks > Right > Stick pressed | `ButtonRightStick(` | Bouton stick | number “Player numbers” |
| 16 | 96 | Buttons > Start pressed | `ButtonStart(` | Bouton start | number “Player numbers” |
| 17 | 97 | Direction pad > DPad up pressed | `ButtonDPADUp(` | Bouton pad directionnel haut | number “Player numbers” |
| 18 | 98 | Direction pad > DPad down pressed | `ButtonDPADDown(` | Bouton pad directionnel bas | number “Player numbers” |
| 19 | 99 | Direction pad > DPad left pressed | `ButtonDPADLeft(` | Bouton pad directionnel gauche | number “Player numbers” |
| 20 | 100 | Direction pad > DPad right pressed | `ButtonDPADRight(` | Bouton pad directionnel droirt | number “Player numbers” |
| 21 | 101 | Given button pressed | `Buttons(` | Un bouton spécifique est pressé | number “Player numbers”; number “Button number” |
| 22 | 102 | Find pressed button | `FindButton(` | Trouver le bouton enfoncé | number “Player numbers” |
