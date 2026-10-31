# Extension Box2DTreadmill

- File: `Box2DTreadmill.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is treadmill active? | `<object>: Is treadmill active?` | <object> : Le tapis roulant est-il actif? |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set speed | `Set speed to <p0>` | Fixer la vitesse à <p0> | numeric expression “Enter the speed of the treadmill, from 0 to 100” | — |  |
| 1 | 81 | Set angle | `Set angle to <p0> degrees` | Fixer l'angle à <p0> degrés | numeric expression “Direction of the treadmill” | — |  |
| 2 | 82 | Set width | `Set width to <p0>` | Fixer la largeur à <p0> | numeric expression “Enter the width of the object” | — |  |
| 3 | 83 | Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | numeric expression “Enter the height of the object” | — |  |
| 4 | 84 | Set treadmill ON/OFF | `Set treadmill to <p0>` | Fixer marche/arrêt à <p0> | numeric expression “Enter 1 to turn on, 0 to turn off” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Treadmill speed | `TreadmillSpeed(` | Vitesse du tapis roulant |  | — |  |
| 1 | 81 | Treadmill angle | `TreadmillAngle(` | Angle du tapis roulant |  | — |  |
| 2 | 82 | Action zone width | `TreadmillWidth(` | Largeur de la zone d'action |  | — |  |
| 3 | 83 | Action zone height | `TreadmillHeigth(` | Hauteur de la zone d'action |  | — |  |
