# Extension XBOXGamepad

- Fichier : `XBOXGamepad.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Gamepad is connected | `<objet>: Gamepad of player <p0> is connected` | <objet>: La manette du joueur <p0> est connectée | expression numérique « Player number, from 0 to 3 » | — |  |
| 1 | -82 | Buttons > Button A is pressed | `<objet>: Button A of player <p0> is pressed` | <objet>: Le bouton A du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 2 | -83 | Buttons > Button B is pressed | `<objet>: Button B of player <p0> is pressed` | <objet>: Le bouton B du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 3 | -84 | Buttons > Button X is pressed | `<objet>: Button X of player <p0> is pressed` | <objet>: Le bouton X du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 4 | -85 | Buttons > Button Y is pressed | `<objet>: Button Y of player <p0> is pressed` | <objet>: Le bouton Y du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 5 | -86 | Buttons > Back button is pressed | `<objet>: Back button of player <p0> is pressed` | <objet>: Le bouton back du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 7 | -88 | Shoulders > Left shoulder is pressed | `<objet>: Left shoulder of player <p0> is pressed` | <objet>: Le bouton arrière gauche du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 8 | -89 | Sticks > Left stick is pressed | `<objet>: Left stick of player <p0> is pressed` | <objet>: Le stick gauche du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 9 | -90 | Shoulders > Right shoulder is pressed | `<objet>: Right shoulder of player <p0> is pressed` | <objet>: Le bouton arrière droit du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 10 | -91 | Sticks > Right stick is pressed | `<objet>: Right stick of player <p0> is pressed` | <objet>: Le stick droit du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 11 | -92 | Buttons > Start is pressed | `<objet>: Start button of player <p0> is pressed` | <objet>: Le bouton start du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 12 | -93 | Direction pad > DPad up is pressed | `<objet>: DPad up button of player <p0> is pressed` | <objet>: Le bouton haut du pad du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 13 | -94 | Direction pad > DPad down is pressed | `<objet>: DPad down button of player <p0> is pressed` | <objet>: Le bouton bas du pad du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 14 | -95 | Direction pad > DPad left is pressed | `<objet>: DPad left button of player <p0> is pressed` | <objet>: Le bouton gauche du pad du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 15 | -96 | Direction pad > DPad right is pressed | `<objet>: DPad right button of player <p0> is pressed` | <objet>: Le bouton droit du pad du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |
| 16 | -97 | Button is pressed | `Button <p1> of players <p0> is pressed` | Le bouton #<p1> des joueurs <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » ; expression numérique « Enter the button number » | — |  |
| 17 | -98 | Any button is pressed | `<objet>: Any button of player <p0> is pressed` | <objet>: N'importe quel bouton du joueur <p0> est enfoncé | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Vibrate | `Vibrate gamepad of player <p0>, left motor <p1>, right motor <p2>, duration <p3>` | Faire vibrer la manette du joueur <p0>, moteur gauche <p1>, moteur droit <p2>, durée <p3> | expression numérique « Number of the players, 1 for p1, 2 for p2, 4 for p3, 8 for p4 or any combination » ; expression numérique « Left motor (0-100) » ; expression numérique « Right motor (0-100) » ; expression numérique « Enter duration, in 1/1000th of second » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sticks > Left > Get horizontal position | `StickLeftH(` | Position horizontale | nombre « Player numbers » | — |  |
| 1 | 81 | Sticks > Left > Get vertical position | `StickLeftV(` | Position verticale | nombre « Player numbers » | — |  |
| 2 | 82 | Sticks > Right > Get horizontal position | `StickRightH(` | Position horizontale | nombre « Player numbers » | — |  |
| 3 | 83 | Sticks > Right > Get vertical position | `StickRightV(` | Position verticale | nombre « Player numbers » | — |  |
| 4 | 84 | Triggers > Get position of left trigger | `TriggerLeft(` | Position gachette gauche | nombre « Player numbers » | — |  |
| 5 | 85 | Triggers > Get position of right trigger | `TriggerRight(` | Position gachette droite | nombre « Player numbers » | — |  |
| 6 | 86 | Buttons > Button A pressed | `ButtonA(` | Bouton A | nombre « Player numbers » | — |  |
| 7 | 87 | Buttons > Button B pressed | `ButtonB(` | Bouton B | nombre « Player numbers » | — |  |
| 8 | 88 | Buttons > Button X pressed | `ButtonX(` | Bouton X | nombre « Player numbers » | — |  |
| 9 | 89 | Buttons > Button Y pressed | `ButtonY(` | Bouton Y | nombre « Player numbers » | — |  |
| 10 | 90 | Buttons > Back button pressed | `ButtonBack(` | Bouton back | nombre « Player numbers » | — |  |
| 12 | 92 | Shoulders > Left shoulder pressed | `ButtonLS(` | Bouton arrière gauche | nombre « Player numbers » | — |  |
| 13 | 93 | Sticks > Left > Stick pressed | `ButtonLStick(` | Bouton stick | nombre « Player numbers » | — |  |
| 14 | 94 | Shoulders > Right shoulder pressed | `ButtonRS(` | Bouton arrière droit | nombre « Player numbers » | — |  |
| 15 | 95 | Sticks > Right > Stick pressed | `ButtonRightStick(` | Bouton stick | nombre « Player numbers » | — |  |
| 16 | 96 | Buttons > Start pressed | `ButtonStart(` | Bouton start | nombre « Player numbers » | — |  |
| 17 | 97 | Direction pad > DPad up pressed | `ButtonDPADUp(` | Bouton pad directionnel haut | nombre « Player numbers » | — |  |
| 18 | 98 | Direction pad > DPad down pressed | `ButtonDPADDown(` | Bouton pad directionnel bas | nombre « Player numbers » | — |  |
| 19 | 99 | Direction pad > DPad left pressed | `ButtonDPADLeft(` | Bouton pad directionnel gauche | nombre « Player numbers » | — |  |
| 20 | 100 | Direction pad > DPad right pressed | `ButtonDPADRight(` | Bouton pad directionnel droirt | nombre « Player numbers » | — |  |
| 21 | 101 | Given button pressed | `Buttons(` | Un bouton spécifique est pressé | nombre « Player numbers » ; nombre « Button number » | — |  |
| 22 | 102 | Find pressed button | `FindButton(` | Trouver le bouton enfoncé | nombre « Player numbers » | — |  |
