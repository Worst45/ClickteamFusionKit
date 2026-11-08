# Extension Box2DJoint

- File: `Box2DJoint.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set angle limits | `Set angle limits to <p0> (lower angle) and <p1> (upper angle)` | Fixer les limites à <p0> (angle minimal) et <p1> (angle maximal) | numeric expression “Enter the lower limit angle, in degrees (0 - 360)”; numeric expression “Enter the higher limit angle, in degrees (0 - 360)” |
| 1 | 81 | Set joint motor | `Set motor to <p0> (torque) and <p1> (strength)` | Fixer le moteur à <p0> (couple) et <p1> (vitesse) | numeric expression “Enter the torque of the motor”; numeric expression “Enter the speed of the motor (-250 - 250)” |
| 2 | 82 | Destroy joint | `Destroy joint` | Détruire l'articulation |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Lower angle limit | `LAngle(` | Limite basse de l'angle |  |
| 1 | 81 | Upper angle limit | `UAngle(` | Limite haute de l'angle |  |
| 2 | 82 | Motor torque | `Torque(` | Couple du moteur |  |
| 3 | 83 | Motor speed | `Speed(` | Vitesse du moteur |  |
