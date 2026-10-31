# Extension clickteam-movement-controller

- Fichier : `clickteam-movement-controller.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Clickteam Movement Controller »
- Usage dans le corpus : 158 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Circular movement > Set centre X | `Set centre X to <p0>` | Fixer X centre | expression numérique « X coordinate » | — |  |
| 1 | 81 | Circular movement > Set centre Y | `Set centre Y to <p0>` | Fixer Y centre | expression numérique « Y coordinate » | — |  |
| 2 | 82 | Circular movement > Set angular velocity | `Set angular velocity to <p0>` | Fixer la vitesse angulaire à <p0> | expression numérique « Enter angluar velocity » | — |  |
| 3 | 83 | Circular movement > Set current angle | `Set current angle to <p0>` | Fixer langle courant | expression numérique « Angle in degrees » | — |  |
| 4 | 84 | Circular movement > Set radius | `Set radius to <p0>` | Fixer le rayon à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 5 | 85 | Circular movement > Set spiral velocity | `Set spiral velocity to <p0>` | Fixer la vitesse de spirale à <p0> | expression numérique « Enter spiral velocity » | — |  |
| 6 | 86 | Circular movement > Set minimum radius | `Set minimum radius to <p0>` | Fixer le rayon minimal à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 7 | 87 | Circular movement > Set maximum radius | `Set maximum radius to <p0>` | Fixer le rayon maximal à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 8 | 88 | Circular movement > On spiral completion > Stop | `Set completion action to stop` | Fixer l'action de fin à stop |  | — |  |
| 9 | 89 | Circular movement > On spiral completion > Reset | `Set completion action to reset` | Fixer l'action de fin à remise à zéro |  | — |  |
| 10 | 90 | Circular movement > On spiral completion > Reverse spiral velocity | `Set completion action to reverse velocity` | Fixer l'action de fin à inverse la vitesse |  | — |  |
| 11 | 91 | Circular movement > On spiral completion > Reverse movement | `Set completion action to reverse movement` | Fixer l'action de fin à inverser le mouvement |  | — |  |
| 12 | 92 | Regular Polygon movement > Set centre X | `Set centre X to <p0>` | Fixer X centre | expression numérique « X coordinate » | — |  |
| 13 | 93 | Regular Polygon movement > Set centre Y | `Set centre Y to <p0>` | Fixer Y centre | expression numérique « Y coordinate » | — |  |
| 14 | 94 | Regular Polygon movement > Set number of sides | `Set number of sides to <p0>` | Fixer le nombre de côtés à <p0> | expression numérique « Enter the number of sides (minimum of 3) » | — |  |
| 15 | 95 | Regular Polygon movement > Set radius | `Set radius to <p0>` | Fixer le rayon à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 16 | 96 | Regular Polygon movement > Set rotation angle | `Set rotation angle to <p0>` | Fixer l'angle de rotation à <p0> | expression numérique « Angle in degrees » | — |  |
| 17 | 97 | Regular Polygon movement > Set velocity | `Set velocity to <p0>` | Fixer la vitesse à <p0> | expression numérique « Speed » | — |  |
| 18 | 98 | Sinewave movement > Set speed | `Set speed to <p0>` | Fixer la vitesse à <p0> | expression numérique « Speed » | — |  |
| 19 | 99 | Sinewave movement > Set start X | `Set start X to <p0>` | Fixer X début à <p0> | expression numérique « X coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 99, 1 Parameters { X("Bob") }` |
| 20 | 100 | Sinewave movement > Set start Y | `Set start Y to <p0>` | Fixer Y début à <p0> | expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 100, 1 Parameters { Y("Bob") }` |
| 21 | 101 | Sinewave movement > Set final X | `Set final X to <p0>` | Fixer X final à <p0> | expression numérique « X coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 101, 1 Parameters { XMouse }` |
| 22 | 102 | Sinewave movement > Set final Y | `Set final Y to <p0>` | Fixer Y final à <p0> | expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 102, 1 Parameters { YMouse }` |
| 23 | 103 | Sinewave movement > Set amplitude | `Set amplitude to <p0>` | Fixer l'amplitude à 0 | expression numérique « Enter amount in pixels » | — |  |
| 24 | 104 | Sinewave movement > Set angular velocity | `Set angular velocity to <p0>` | Fixer la vitesse angulaire à <p0> | expression numérique « Enter angluar velocity » | — |  |
| 25 | 105 | Sinewave movement > Set starting angle | `Set starting angle to <p0>` | Fixer langle de début à <p0> | expression numérique « Angle in degrees » | — |  |
| 26 | 106 | Sinewave movement > Set current angle | `Set current angle to <p0>` | Fixer langle courant | expression numérique « Angle in degrees » | — |  |
| 27 | 107 | Sinewave movement > Restart movement | `Restart movement` | Relancer le mouvement |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 107, 0 Parameters` |
| 28 | 108 | Sinewave movement > On sinewave completion > Stop | `Set completion action stop` | Fixer l'action de fin à stop |  | — |  |
| 29 | 109 | Sinewave movement > On sinewave completion > Reset | `Set completion action reset` | Fixer l'action de fin à remise à zéro |  | — |  |
| 30 | 110 | Sinewave movement > On sinewave completion > Bounce | `Set completion action bounce` | Fixer l'action de fin à rebond |  | — |  |
| 31 | 111 | Sinewave movement > On sinewave completion > Reverse | `Set completion action reverse` | Fixer l'action de fin à inverser |  | — |  |
| 32 | 112 | Simple Ellipse movement > Set centre X | `Set centre X to <p0>` | Fixer X centre | expression numérique « X coordinate » | 4 (1 proj.) | `Clickteam Movement Controller : Event ID 112, 1 Parameters { XMouse }` |
| 33 | 113 | Simple Ellipse movement > Set centre Y | `Set centre Y to <p0>` | Fixer Y centre | expression numérique « Y coordinate » | 4 (1 proj.) | `Clickteam Movement Controller : Event ID 113, 1 Parameters { YMouse }` |
| 34 | 114 | Simple Ellipse movement > Set radius X | `Set radius X to <p0>` | Fixer le rayon en X à <p0> | expression numérique « Enter amount in pixels » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 114, 1 Parameters { (0.8 - 0.2 * Sin(Expression ID 111("Clickteam Movement Controller")Fixed("Eart…` |
| 35 | 115 | Simple Ellipse movement > Set radius Y | `Set radius Y to <p0>` | Fixer le rayon en Y à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 36 | 116 | Simple Ellipse movement > Set angular velocity | `Set angular velocity to <p0>` | Fixer la vitesse angulaire à <p0> | expression numérique « Enter angluar velocity » | 6 (1 proj.) | `Clickteam Movement Controller : Event ID 116, 1 Parameters { Expression ID 110("Clickteam Movement Controller")this) * 1.1 }` |
| 37 | 117 | Simple Ellipse movement > Set current angle | `Set current angle to <p0>` | Fixer langle courant | expression numérique « Angle in degrees » | — |  |
| 38 | 118 | Simple Ellipse movement > Set offset angle | `Set offset angle to <p0>` | Fixer le décalage d'angle à <p0> | expression numérique « Angle in degrees » | — |  |
| 39 | 119 | Invaders movement > Set speed | `Set speed to <p0>` | Fixer la vitesse à <p0> | expression numérique « Speed » | — |  |
| 40 | 120 | Invaders movement > Set step size x | `Set step size x to <p0>` | Fixer le pas en X à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 41 | 121 | Invaders movement > Set step size y | `Set step size y to <p0>` | Fixer le pas en Y à <p0> | expression numérique « Enter amount in pixels » | — |  |
| 42 | 122 | Invaders movement > Set left border position | `Set left border to <p0>` | Fixer la bordure de gauche à <p0> | expression numérique « X coordinate » | — |  |
| 43 | 123 | Invaders movement > Set right border position | `Set right border to <p0>` | Fixer la bordure de droite à <p0> | expression numérique « X coordinate » | — |  |
| 44 | 124 | Vector movement > Position > Set X | `Set X to <p0>` | Fixer X à <p0> | expression numérique « X coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 124, 1 Parameters { 320 }` |
| 45 | 125 | Vector movement > Position > Set Y | `Set Y to <p0>` | Fixer Y à <p0> | expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 125, 1 Parameters { 100 }` |
| 46 | 126 | Vector movement > Position > Set position | `Set position to <p0>,<p1>` | Fixer la position à <p0>,<p1> | expression numérique « X coordinate » ; expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 126, 2 Parameters { 320, 200 }` |
| 47 | 127 | Vector movement > Position > Move towards angle | `Move <p1> pixels towards angle <p0>` | Bouger de <p1> pixels vers l'angle <p0> | expression numérique « Angle in degrees » ; expression numérique « Enter amount in pixels » | — |  |
| 48 | 128 | Vector movement > Position > Move towards point | `Move <p2> pixels towards point <p0>,<p1>` | Bouger de <p2> pixels vers le point <p0>,<p1> | expression numérique « X coordinate » ; expression numérique « Y coordinate » ; expression numérique « Enter amount in pixels » | — |  |
| 49 | 129 | Vector movement > Position > Move towards object | `Move <p1> pixels towards object <p0>` | Bouger de <p1> pixels vers l'objet <p0> | objet « Select an object » ; expression numérique « Enter amount in pixels » | — |  |
| 50 | 130 | Vector movement > Direction > Set direction towards angle | `Set direction towards angle <p0>` | Fixer la direction vers l'angle <p0> | expression numérique « Angle in degrees » | 4 (1 proj.) | `Clickteam Movement Controller : Event ID 130, 1 Parameters { Random(360) }` |
| 51 | 131 | Vector movement > Direction > Set direction towards point | `Set direction towards point <p0>, <p1>` | Fixer la direction vers le point <p0>, <p1> | expression numérique « X coordinate » ; expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 131, 2 Parameters { x("Local Variables"), y("Local Variables") }` |
| 52 | 132 | Vector movement > Direction > Set direction towards object | `Set direction towards object <p0>` | Fixer la direction vers l'objet <p0> | objet « Select an object » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 132, 1 Parameters { Target Cow }` |
| 53 | 133 | Vector movement > Direction > Rotate towards angle | `Rotate towards angle <p0> by <p1> degrees` | Tourner vers l'angle <p0> par <p1> degrés | expression numérique « Angle in degrees » ; expression numérique « Enter amount in degrees (between 0 and 359) » | — |  |
| 54 | 134 | Vector movement > Direction > Rotate towards point | `Rotate towards point <p0>,<p1>  by <p2> degrees` | Tourner vers le point <p0>,<p1> par <p2> degrés | expression numérique « X coordinate » ; expression numérique « Y coordinate » ; expression numérique « Enter amount in degrees (between 0 and 359) » | — |  |
| 55 | 135 | Vector movement > Direction > Rotate towards object | `Rotate towards object <p0>  by <p1> degrees` | Tourner vers l'objet <p0> par <p1> degrés | objet « Select an object » ; expression numérique « Enter amount in degrees (between 0 and 359) » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 135, 2 Parameters { Leader, 1 }` |
| 56 | 136 | Vector movement > Speed > Set speed | `Set speed to <p0>` | Fixer la vitesse à <p0> | expression numérique « Speed » | 9 (1 proj.) | `Clickteam Movement Controller : Event ID 136, 1 Parameters { 100 }` |
| 57 | 137 | Vector movement > Speed > Set speed x-component | `Set speed x-component to <p0>` | Fixer la composante X de la vitesse à <p0> | expression numérique « Speed » | 2 (1 proj.) | `Clickteam Movement Controller : Event ID 137, 1 Parameters { Expression ID 124("Clickteam Movement Controller")this) - 5 }` |
| 58 | 138 | Vector movement > Speed > Set speed y-component | `Set speed y-component to <p0>` | Fixer la composante en Y de la vitesse à <p0> | expression numérique « Speed » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 138, 1 Parameters { Expression ID 125("Clickteam Movement Controller")this) - 10 }` |
| 59 | 139 | Vector movement > Speed > Add dir speed towards angle | `Add dir speed of <p1> towards angle <p0>` | Ajouter la vitesse de rotation <p1> vers l'angle <p0> | expression numérique « Angle in degrees » ; expression numérique « Speed » | — |  |
| 60 | 140 | Vector movement > Speed > Add dir speed towards point | `Add dir speed of <p2> towards point <p0>,<p1>` | Ajouter la vitesse de rotation <p2> vers le point <p0>,<p1> | expression numérique « X coordinate » ; expression numérique « Y coordinate » ; expression numérique « Speed » | — |  |
| 61 | 141 | Vector movement > Speed > Add dir speed towards object | `Add dir speed of <p1> towards object <p0>` | Ajouter la vitesse de rotation <p1> vers l'objet <p0> | objet « Select an object » ; expression numérique « Speed » | — |  |
| 62 | 142 | Vector movement > Speed > Set minimum speed | `Set minimum speed to <p0>` | Fixer la vitesse minimale à <p0> | expression numérique « Speed » | — |  |
| 63 | 143 | Vector movement > Speed > Set maximum speed | `Set maximum speed to <p0>` | Fixer la vitesse maximale à <p0> | expression numérique « Speed » | — |  |
| 64 | 144 | Vector movement > Gravity / Acceleration > Set gravity strength | `Set gravity strength to <p0>` | Fixer la force de la gravité à <p0> | expression numérique « Enter gravity strength » | 5 (1 proj.) | `Clickteam Movement Controller : Event ID 144, 1 Parameters { 8000 / Expression ID 135("Clickteam Movement Controller")this, Fixed("Magnet")…` |
| 65 | 145 | Vector movement > Gravity / Acceleration > Set gravity towards angle | `Set gravity towards angle <p0>` | Tourner la gravité vers l'angle <p0> | expression numérique « Angle in degrees » | 4 (1 proj.) | `Clickteam Movement Controller : Event ID 145, 1 Parameters { GravityDirection("Local Variables") }` |
| 66 | 146 | Vector movement > Gravity / Acceleration > Set gravity towards point | `Set gravity towards point <p0>,<p1>` | Tourner la gravité vers le point <p0>,<p1> | expression numérique « X coordinate » ; expression numérique « Y coordinate » | — |  |
| 67 | 147 | Vector movement > Gravity / Acceleration > Set gravity towards object | `Set gravity towards object <p0>` | Tourner la gravité vers l'objet <p0> | objet « Select an object » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 147, 1 Parameters { Magnet }` |
| 69 | 149 | Vector movement > Forced bounce | `Force bounce off angle <p0>` | Force l'angle de rebond à <p0> | expression numérique « Angle in degrees » | 7 (1 proj.) | `Clickteam Movement Controller : Event ID 149, 1 Parameters { 0 }` |
| 70 | 150 | Presentation movement > Next | `Next` | Suivant |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 150, 0 Parameters` |
| 71 | 151 | Presentation movement > Previous | `Previous` | Précédent |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 151, 0 Parameters` |
| 72 | 152 | Presentation movement > Reset to start | `Reset to start` | Remise au début |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 152, 0 Parameters` |
| 73 | 153 | Presentation movement > Reset to end | `Reset to end` | Remise à la fin |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 153, 0 Parameters` |
| 74 | 154 | Set object | `Set object to <p0>` | Fixer l'objet à <p0> | objet « Select an object » | 30 (4 proj.) | `Clickteam Movement Controller : Event ID 154, 1 Parameters { Active }` |
| 75 | 155 | Set object from fixed value | `Set object with fixed value <p0>` | Fixer l'objet dont la valeur fixe est <p0> | expression numérique « fixed value » | — |  |
| 76 | 156 | Spaceship movement > Set reactor power | `Set reactor power of <p0> to <p1>` | Fixer la puissance du réacteur à <p0> | expression numérique « Enter the power of the reactor (1-200) » | — |  |
| 77 | 157 | Spaceship movement > Set speed | `Set speed of <p0> to <p1>` | Fixer la vitesse à <p0> | expression numérique « Speed » | — |  |
| 78 | 158 | Spaceship movement > Set direction | `Set direction of <p0> to <p1>` | Fixer la direction à <p0> | nouvelle direction « Set direction » | — |  |
| 79 | 159 | Spaceship movement > Set deceleration | `Set deceleration of <p0> to <p1>` | Fixer la décélération à <p0> | expression numérique « Enter the deceleration factor (1-100) » | — |  |
| 80 | 160 | Spaceship movement > Set rotation speed | `Set rotation speed of <p0> to <p1>` | Fixer la vitesse de rotation à <p0> | expression numérique « Enter the rotation speed (1-100) » | — |  |
| 81 | 161 | Spaceship movement > Set gravity | `Set gravity of <p0> to <p1>` | Fixer la gravité à <p0> | expression numérique « Enter the gravity (1-100) » | — |  |
| 82 | 162 | Spaceship movement > Set gravity direction | `Set gravity direction of <p0> to <p1>` | Fixer la direction de la gravité à <p0> | nouvelle direction « Set gravity direction » | — |  |
| 83 | 163 | Spaceship movement > Control > Apply reactor | `Apply reactor` | Faire marcher le réacteur |  | — |  |
| 84 | 164 | Spaceship movement > Control > Rotate right | `Rotate right` | Tourner à droite |  | — |  |
| 85 | 165 | Spaceship movement > Control > Rotate left | `Rotate left` | Tourner à gauche |  | — |  |
| 86 | 166 | Drag and Drop movement > Method > Left mouse button down | `Left mouse button down` | Bouton gauche souris pressé |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 166, 0 Parameters` |
| 87 | 167 | Drag and Drop movement > Method > Right mouse button down | `Right mouse button down` | Bouton droite souris pressé |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 167, 0 Parameters` |
| 88 | 168 | Drag and Drop movement > Method > Left mouse button click | `Left mouse button click` | Clic bouton gauche souris |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 168, 0 Parameters` |
| 89 | 169 | Drag and Drop movement > Method > Right mouse button click | `Right mouse button click` | Clic bouton droite souris |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 169, 0 Parameters` |
| 90 | 170 | Drag and Drop movement > Method > None (user controlled) | `None (user controlled)` | Aucune (contrôlé par utilisateur) |  | — |  |
| 91 | 171 | Drag and Drop movement > Limit drag area > Enable | `Limit drag area` | Zone limite de déplacement |  | — |  |
| 92 | 172 | Drag and Drop movement > Limit drag area > Disable | `Remove drag area limit` | Désactiver zone autorisée |  | — |  |
| 93 | 173 | Drag and Drop movement > Limit drag area > Drop object when dragged outside area | `Drop object when dragged outside area` | Lâcher objet quand tiré hors zone |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 173, 0 Parameters` |
| 94 | 174 | Drag and Drop movement > Limit drag area > Do not drop object | `Do not drop object when dragged outside area` | Ne pas lâcher objet quand tiré hors zone |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 174, 0 Parameters` |
| 95 | 175 | Drag and Drop movement > Limit drag area > Always force object within allowed area | `Always force object within allowed area` | Toujours garder l'objet dans la zone délimitée |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 175, 0 Parameters` |
| 96 | 176 | Drag and Drop movement > Limit drag area > Do not force position | `Do not force object's position` | Ne pas forcer position objet dans zone autorisée |  | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 176, 0 Parameters` |
| 97 | 177 | Drag and Drop movement > Limit drag area > Set allowed area | `Set allowed drag area to <p0>` | Zone autorisée = <p0> | zone « Select a position » | — |  |
| 98 | 178 | Drag and Drop movement > Limit drag area > Set left boundary of allowed area | `Set allowed drag area's left boundary to <p0>` | Définir limite gauche zone autorisée à <p0> | expression numérique « X coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 178, 1 Parameters { X Left("Active System Box") }` |
| 99 | 179 | Drag and Drop movement > Limit drag area > Set top boundary of allowed area | `Set allowed drag area's top boundary to <p0>` | Définir limite haute zone autorisée à <p0> | expression numérique « Y coordinate » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 179, 1 Parameters { Y Top("Active System Box") }` |
| 100 | 180 | Drag and Drop movement > Limit drag area > Set width of allowed area | `Set allowed drag area's width to <p0>` | Définir largeur zone autorisée à <p0> | expression numérique « Width » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 180, 1 Parameters { Expression ID 111("Active System Box") }` |
| 101 | 181 | Drag and Drop movement > Limit drag area > Set height of allowed area | `Set allowed drag area's height to <p0>` | Définir hauteur zone autorisée à <p0> | expression numérique « Height » | 1 (1 proj.) | `Clickteam Movement Controller : Event ID 181, 1 Parameters { Expression ID 112("Active System Box") }` |
| 102 | 182 | Drag and Drop movement > Snap to grid > Enable | `Snap to grid` | Aimantation à la grille |  | — |  |
| 103 | 183 | Drag and Drop movement > Snap to grid > Disable | `Do not snap to grid` | Ne pas aimanter à la grille |  | — |  |
| 104 | 184 | Drag and Drop movement > Snap to grid > Set grid origin | `Set grid origin to <p0>` | Fixer l'origine de la grille à <p0> | position « Select a position » | — |  |
| 105 | 185 | Drag and Drop movement > Snap to grid > Set origin X | `Set grid origin X to <p0>` | Fixer l'origine en X de la grille à <p0> | expression numérique « X coordinate » | — |  |
| 106 | 186 | Drag and Drop movement > Snap to grid > Set origin Y | `Set grid origin Y to <p0>` | Fixer l'origine en Y de la grille à <p0> | expression numérique « Y coordinate » | — |  |
| 107 | 187 | Drag and Drop movement > Snap to grid > Set grid width | `Set grid width to <p0>` | Fixer la largeur de la grille à <p0> | expression numérique « Width » | — |  |
| 108 | 188 | Drag and Drop movement > Snap to grid > Set grid height | `Set grid height to <p0>` | Fixer la hauteur de la grille à <p0> | expression numérique « Height » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Circular movement > Get centre X | `CIR_CentreX(` | X centre | nombre « fixed value » | — |  |
| 1 | 81 | Circular movement > Get centre Y | `CIR_CentreY(` | Y centre | nombre « fixed value » | — |  |
| 2 | 82 | Circular movement > Get angular velocity | `CIR_AngularVel(` | Vitesse angulaire | nombre « fixed value » | — |  |
| 3 | 83 | Circular movement > Get current angle | `CIR_CurrentAngle(` | Angle courant | nombre « fixed value » | — |  |
| 4 | 84 | Circular movement > Get radius | `CIR_Radius(` | Rayon | nombre « fixed value » | — |  |
| 5 | 85 | Circular movement > Get spiral velocity | `CIR_SpiralVel(` | Vitesse de spirale | nombre « fixed value » | — |  |
| 6 | 86 | Circular movement > Get minimum radius | `CIR_MinRadius(` | Rayon minimal | nombre « fixed value » | — |  |
| 7 | 87 | Circular movement > Get maximum radius | `CIR_MaxRadius(` | rayon maximal | nombre « fixed value » | — |  |
| 8 | 88 | Circular movement > Count objects with movement | `CIR_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 9 | 89 | Regular Polygon movement > Get centre X | `RPO_CentreX(` | X centre | nombre « fixed value » | — |  |
| 10 | 90 | Regular Polygon movement > Get centre Y | `RPO_CentreY(` | Y centre | nombre « fixed value » | — |  |
| 11 | 91 | Regular Polygon movement > Get number of sides | `RPO_NumSides(` | Nombre de côtés | nombre « fixed value » | — |  |
| 12 | 92 | Regular Polygon movement > Get radius | `RPO_Radius(` | Rayon | nombre « fixed value » | — |  |
| 13 | 93 | Regular Polygon movement > Get rotation angle | `RPO_RotRadius(` | Angle de rotation | nombre « fixed value » | — |  |
| 14 | 94 | Regular Polygon movement > Get velocity | `RPO_Velocity(` | Vitesse | nombre « fixed value » | — |  |
| 15 | 95 | Regular Polygon movement > Count objects with movement | `RPO_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 16 | 96 | Sinewave movement > Get speed | `SIN_Speed(` | Vitesse | nombre « fixed value » | — |  |
| 17 | 97 | Sinewave movement > Get start X | `SIN_StartX(` | X début | nombre « fixed value » | — |  |
| 18 | 98 | Sinewave movement > Get start Y | `SIN_StartY(` | Y début | nombre « fixed value » | — |  |
| 19 | 99 | Sinewave movement > Get final X | `SIN_FinalX(` | X final | nombre « fixed value » | — |  |
| 20 | 100 | Sinewave movement > Get final Y | `SIN_FinalY(` | Y final | nombre « fixed value » | — |  |
| 21 | 101 | Sinewave movement > Get amplitude | `SIN_Amplitude(` | Amplitude | nombre « fixed value » | — |  |
| 22 | 102 | Sinewave movement > Get angular velocity | `SIN_AngularVel(` | Vitesse angulaire | nombre « fixed value » | — |  |
| 23 | 103 | Sinewave movement > Get starting angle | `SIN_StartAngle(` | Angle de début | nombre « fixed value » | — |  |
| 24 | 104 | Sinewave movement > Get current angle | `SIN_CurrentAngle(` | Angle courant | nombre « fixed value » | — |  |
| 25 | 105 | Sinewave movement > Count objects with movement | `SIN_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 26 | 106 | Simple Ellipse movement > Get centre X | `ELL_CentreX(` | X centre | nombre « fixed value » | — |  |
| 27 | 107 | Simple Ellipse movement > Get centre Y | `ELL_CentreY(` | Y centre | nombre « fixed value » | — |  |
| 28 | 108 | Simple Ellipse movement > Get radius X | `ELL_RadiusX(` | Rayon en X | nombre « fixed value » | — |  |
| 29 | 109 | Simple Ellipse movement > Get radius Y | `ELL_RadiusY(` | Rayon en Y | nombre « fixed value » | — |  |
| 30 | 110 | Simple Ellipse movement > Get angular velocity | `ELL_AngularVel(` | Vitesse angulaire | nombre « fixed value » | 6 (1 proj.) | `Expression ID 110("Clickteam Movement Controller")` |
| 31 | 111 | Simple Ellipse movement > Get current angle | `ELL_CurrentAngle(` | Angle courant | nombre « fixed value » | 19 (1 proj.) | `Expression ID 111("Clickteam Movement ControllerNEW")` |
| 32 | 112 | Simple Ellipse movement > Get offset angle | `ELL_OffsetAngle(` | Décalage angulaire | nombre « fixed value » | — |  |
| 33 | 113 | Simple Ellipse movement > Count objects with movement | `ELL_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 34 | 114 | Invaders movement > Get speed | `INV_Speed(` | Vitesse | nombre « fixed value » | — |  |
| 35 | 115 | Invaders movement > Get step size x | `INV_StepSizeX(` | Pas en X | nombre « fixed value » | — |  |
| 36 | 116 | Invaders movement > Get step size y | `INV_StepSizeY(` | Pas en Y | nombre « fixed value » | — |  |
| 37 | 117 | Invaders movement > Get left border | `INV_LeftBorder(` | Bordure de gauche | nombre « fixed value » | — |  |
| 38 | 118 | Invaders movement > Get right border | `INV_RightBorder(` | Bordure de droite | nombre « fixed value » | — |  |
| 39 | 119 | Invaders movement > Count objects with movement | `INV_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 40 | 120 | Vector movement > Get X | `VEC_X(` | X | nombre « fixed value » | — |  |
| 41 | 121 | Vector movement > Get Y | `VEC_Y(` | Y | nombre « fixed value » | — |  |
| 42 | 122 | Vector movement > Get direction | `VEC_Dir(` | Direction | nombre « fixed value » | — |  |
| 43 | 123 | Vector movement > Get speed | `VEC_Speed(` | Vitesse | nombre « fixed value » | 6 (1 proj.) | `Expression ID 123("Clickteam Movement Controller")` |
| 44 | 124 | Vector movement > Get speed x-component | `VEC_SpeedX(` | Composante X de la vitesse | nombre « fixed value » | 2 (1 proj.) | `Expression ID 124("Clickteam Movement Controller")` |
| 45 | 125 | Vector movement > Get speed y-component | `VEC_SpeedY(` | Composante Y de la vitesse | nombre « fixed value » | 1 (1 proj.) | `Expression ID 125("Clickteam Movement Controller")` |
| 46 | 126 | Vector movement > Get minimum speed | `VEC_MinSpeed(` | Vitesse minimale | nombre « fixed value » | — |  |
| 47 | 127 | Vector movement > Get maximum speed | `VEC_MaxSpeed(` | Vitesse maximale | nombre « fixed value » | — |  |
| 48 | 128 | Vector movement > Get gravity strength | `VEC_Gravity(` | Force de la gravité | nombre « fixed value » | 3 (1 proj.) | `Expression ID 128("Clickteam Movement Controller")` |
| 49 | 129 | Vector movement > Get gravity direction | `VEC_GravityDir(` | Direction de la gravité | nombre « fixed value » | — |  |
| 51 | 131 | Vector movement > Count objects with movement | `VEC_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 52 | 132 | Presentation movement > Get current index | `PRE_CurrentIndex(` | Index courant |  | 2 (1 proj.) | `Expression ID 132("Clickteam Movement Controller")` |
| 53 | 133 | Presentation movement > Get last index | `PRE_LastIndex(` | Dernier index |  | — |  |
| 54 | 134 | Presentation movement > Count objects with movement | `PRE_Count(` | Compter les objets avec ce mouvement |  | — |  |
| 55 | 135 | General Expressions > Distance between two objects | `DistObjects(` | Disptance entre deux objets | nombre « fixed value » ; nombre « fixed value » | 5 (1 proj.) | `Expression ID 135("Clickteam Movement Controller")` |
| 56 | 136 | General Expressions > Distance between two points | `DistPoints(` | Distance entre deux points | nombre « X coordinate » ; nombre « Y coordinate » ; nombre « X coordinate » ; nombre « Y coordinate » | 2 (1 proj.) | `Expression ID 136("Clickteam Movement Controller")` |
| 57 | 137 | General Expressions > Angle between two objects | `AngleObjects(` | Angle entre deux objets | nombre « fixed value » ; nombre « fixed value » | 2 (1 proj.) | `Expression ID 137("Clickteam Movement Controller")` |
| 58 | 138 | General Expressions > Angle between two points | `AnglePoints(` | Angle entre deux points | nombre « X coordinate » ; nombre « Y coordinate » ; nombre « X coordinate » ; nombre « Y coordinate » | 1 (1 proj.) | `Expression ID 138("Clickteam Movement Controller")` |
| 59 | 139 | General Expressions > Convert angle to direction | `AngleToDir(` | Convertir une angle en direction | nombre « Angle in degrees » | — |  |
| 60 | 140 | General Expressions > Convert direction to angle | `DirToAngle(` | Convertir une direction en angle | nombre « Direction » | — |  |
| 61 | 141 | Spaceship movement > Get gravity | `SP_Gravity(` | Gravité | nombre « fixed value » | — |  |
| 62 | 142 | Spaceship movement > Get gravity direction | `SP_GravityDir(` | Direction de la gravité | nombre « fixed value » | — |  |
| 63 | 143 | Spaceship movement > Get deceleration | `SP_Deceleration(` | Décélération | nombre « fixed value » | — |  |
| 64 | 144 | Spaceship movement > Get rotation speed | `SP_RotationSpeed(` | Vitesse de rotation | nombre « fixed value » | — |  |
| 65 | 145 | Spaceship movement > Get thrust power | `SP_ThrustPower(` | Puissance du réacteur | nombre « fixed value » | — |  |
| 66 | 146 | Spaceship movement > Count objects with movement | `SP_Count(` | Compter les objets avec ce mouvement | nombre « fixed value » | — |  |
| 67 | 147 | Drag and Drop movement > Allowed area left boundary | `DD_AreaX(` | Limite gauche zone autorisée | nombre « fixed value » | 1 (1 proj.) | `Expression ID 147("Clickteam Movement Controller")` |
| 68 | 148 | Drag and Drop movement > Allowed area top boundary | `DD_AreaY(` | Limite haute zone autorisée | nombre « fixed value » | 1 (1 proj.) | `Expression ID 148("Clickteam Movement Controller")` |
| 69 | 149 | Drag and Drop movement > Allowed area width | `DD_AreaW(` | Largeur zone autorisée | nombre « fixed value » | 1 (1 proj.) | `Expression ID 149("Clickteam Movement Controller")` |
| 70 | 150 | Drag and Drop movement > Allowed area height | `DD_AreaH(` | Hauteur zone autorisée | nombre « fixed value » | 1 (1 proj.) | `Expression ID 150("Clickteam Movement Controller")` |
| 71 | 151 | Drag and Drop movement > Grid origin X | `DD_GridX(` | X origine grille | nombre « fixed value » | — |  |
| 72 | 152 | Drag and Drop movement > Grid origin Y | `DD_GridY(` | Y origine grille | nombre « fixed value » | — |  |
| 73 | 153 | Drag and Drop movement > Grid width | `DD_GridW(` | Largeur grille | nombre « fixed value » | — |  |
| 74 | 154 | Drag and Drop movement > Grid height | `DD_GridH(` | Hauteur grille | nombre « fixed value » | — |  |
