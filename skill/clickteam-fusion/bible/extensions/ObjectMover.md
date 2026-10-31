# Extension ObjectMover

- File: `ObjectMover.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is enabled? | `<object> is enabled` | <object> est activé |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Set width | `Set width to <p0>` | Fixer la largeur à <p0> | numeric expression “Enter new width” | — |  |
| 1 | 81 | Size > Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | numeric expression “Enter new height” | — |  |
| 2 | 82 | Activation > Enable | `Enable` | Activer |  | — |  |
| 3 | 83 | Activation > Disable | `Disable` | Désactiver |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get width | `Width(` | Largeur |  | — |  |
| 1 | 81 | Get height | `Height(` | Hauteur |  | — |  |
