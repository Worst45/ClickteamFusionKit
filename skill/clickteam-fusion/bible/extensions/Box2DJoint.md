# Extension Box2DJoint

- Fichier : `Box2DJoint.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set angle limits | `Set angle limits to <p0> (lower angle) and <p1> (upper angle)` | Fixer les limites à <p0> (angle minimal) et <p1> (angle maximal) | expression numérique « Enter the lower limit angle, in degrees (0 - 360) » ; expression numérique « Enter the higher limit angle, in degrees (0 - 360) » | — |  |
| 1 | 81 | Set joint motor | `Set motor to <p0> (torque) and <p1> (strength)` | Fixer le moteur à <p0> (couple) et <p1> (vitesse) | expression numérique « Enter the torque of the motor » ; expression numérique « Enter the speed of the motor (-250 - 250) » | — |  |
| 2 | 82 | Destroy joint | `Destroy joint` | Détruire l'articulation |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Lower angle limit | `LAngle(` | Limite basse de l'angle |  | — |  |
| 1 | 81 | Upper angle limit | `UAngle(` | Limite haute de l'angle |  | — |  |
| 2 | 82 | Motor torque | `Torque(` | Couple du moteur |  | — |  |
| 3 | 83 | Motor speed | `Speed(` | Vitesse du moteur |  | — |  |
