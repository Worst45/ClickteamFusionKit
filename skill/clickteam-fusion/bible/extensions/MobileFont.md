# Extension MobileFont

- File: `MobileFont.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set color | `Set color to <p0>` | Changer la couleur en <p0> | color “Choose the new color” | — |  |
| 1 | 81 | Set leading | `Set interline to <p0>` | Fixer l'interligne à <p0> | numeric expression “Enter the new leading value. Can be negative.” | — |  |
| 2 | 82 | Set tracking space | `Set inter-character space to <p0>` | Fixed l'espace inter-caractère à <p0> | numeric expression “Enter the new tracking space. Can be negative.” | — |  |
| 3 | 83 | Set display priority | `Set display priority to <p0>` | Changer la priorité d'affichage à <p0> | numeric expression “Enter 0 to display from left to right, 1 from right to left” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get leading | `leading(` | Retrouver l'interligne |  | — |  |
| 1 | 81 | Get tracking | `tracking(` | Retrouver l'approche |  | — |  |
| 2 | 82 | Get display priority | `priority(` | Retrouver la priorité d'affichage |  | — |  |
