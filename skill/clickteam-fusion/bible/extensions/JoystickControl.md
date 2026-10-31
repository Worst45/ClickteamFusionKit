# Extension JoystickControl

- File: `JoystickControl.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Accelerometer > Start accelerometer joystick | `Start accelerometer joystick` | Lancer le joystick accéléromètre |  | — |  |
| 1 | 81 | Accelerometer > Stop accelerometer joystick | `Stop accelerometer joystick` | Arrêter le joystick accéléromètre |  | — |  |
| 2 | 82 | Touch joystick > Start/stop touch joystick | `Start/stop touch joystick <p0> (joystick), <p1> (button 1), <p2> (button 2), <p3> (left handed)` | Lancer/arrêter le joystick tactile <p0> (joystick), <p1> (bouton 1), <p2> (bouton 2), <p3> (gaucher) | numeric expression “Enter 1 to display joystick, 0 to hide it”; numeric expression “Enter 1 to display button 1, 0 to hide it”; numeric expression “Enter 1 to display button 2, 0 to hide it”; numeric expression “Enter 1 for left handed” | — |  |
| 3 | 83 | Touch joystick > Set joystick position | `Set joystick position to <p0>` | Fixer la position du joystick à <p0> | position “Set joystick position” | — |  |
| 4 | 84 | Touch joystick > Set button 1 position | `Set button 1 position to <p0>` | Fixer la position du bouton 1 à <p0> | position “Set button 1 position” | — |  |
| 5 | 85 | Touch joystick > Set button 2 position | `Set button 2 position to <p0>` | Fixer la position du bouton 2 à <p0> | position “Set button 2 position” | — |  |
| 6 | 86 | Touch joystick > Set joystick X coordinate | `Set X joystick to <p0>` | Fixer la coordonnée X du joystick à <p0> | numeric expression “Set joystick X coordinate” | — |  |
| 7 | 87 | Touch joystick > Set joystick Y coordinate | `Set Y joystick to <p0>` | Fixer la coordonnée Y du joystick à <p0> | numeric expression “Set joystick Y coordinate” | — |  |
| 8 | 88 | Touch joystick > Set button 1 X coordinate | `Set X button 1 to <p0>` | Fixer la coordonnée X du bouton 1 à <p0> | numeric expression “Set button 1 X coordinate” | — |  |
| 9 | 89 | Touch joystick > Set button 1 Y coordinate | `Set Y button 1 to <p0>` | Fixer la coordonnée Y du bouton 1 à <p0> | numeric expression “Set button 1 Y coordinate” | — |  |
| 10 | 90 | Touch joystick > Set button 2 X coordinate | `Set X button 2 to <p0>` | Fixer la coordonnée X du bouton 2 à <p0> | numeric expression “Set button 2 X coordinate” | — |  |
| 11 | 91 | Touch joystick > Set button 2 Y coordinate | `Set Y button 2 to <p0>` | Fixer la coordonnée Y du bouton 2 à <p0> | numeric expression “Set button 2 Y coordinate” | — |  |
| 12 | 92 | Set joystick mask | `Set joystick mask to <p0>` | Fixer le masque du joystick à <p0> | numeric expression “Enter the binary mask. 0001:top 0010:bottom 0100:left 1000:right 10000:fire1 100000:fire2” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Touch joystick > X Coordinate | `XJoystick(` | Coordonnée X |  | — |  |
| 1 | 81 | Touch joystick > Y Coordinate | `YJoystick(` | Coordonnée Y |  | — |  |
| 2 | 82 | Button 1 > X Coordinate | `XFireOne(` | Coordonnée X |  | — |  |
| 3 | 83 | Button 1 > Y Coordinate | `YFireOne(` | Coordonnée Y |  | — |  |
| 4 | 84 | Button 2 > X Coordinate | `XFireTwo(` | Coordonnée X |  | — |  |
| 5 | 85 | Button 2 > Y Coordinate | `YFireTwo(` | Coordonnée Y |  | — |  |
