# Extension Box2DFan

- File: `Box2DFan.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is fan active? | `<object>: Is fan active?` | <object>: Le ventilateur est-il actif? |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set strength | `Set strength to <p0>` | Fixer la force du vent à <p0> | numeric expression “Enter the strength of the fan, from 0 to 500” | — |  |
| 1 | 81 | Set angle | `Set angle to <p0> degrees` | Fixer l'angle à <p0> degrés | numeric expression “Direction of the air” | — |  |
| 2 | 82 | Set width | `Set width to <p0>` | Fixer la largeur à <p0> | numeric expression “Enter the width of the object” | — |  |
| 3 | 83 | Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | numeric expression “Enter the height of the object” | — |  |
| 4 | 84 | Set fan ON/OFF | `Set fan to <p0>` | Fixer marche/arrêt à <p0> | numeric expression “Enter 1 to turn on, 0 to turn off” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Fan strength | `FanStrength(` | Force du ventilateur |  | — |  |
| 1 | 81 | Fan angle | `FanAngle(` | Angle du ventilateur |  | — |  |
| 2 | 82 | Action zone width | `FanWidth(` | Largeur de la zone d'action |  | — |  |
| 3 | 83 | Action zone height | `FanHeigth(` | Hauteur de la zone d'action |  | — |  |
