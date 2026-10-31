# Extension InAndOutController

- File: `InAndOutController.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set object | `Set object to <p0>` | Fixer l'objet à <p0> | object “Select an object” | — |  |
| 1 | 81 | Set object from fixed value | `Set object with fixed value <p0>` | Fixer l'objet à la valeur non modifiable <p0> | numeric expression “fixed value” | — |  |
| 2 | 82 | Position object at start | `Position object at start` | Positionner l'objet au début |  | — |  |
| 3 | 83 | Position object at end | `Position object at end` | Positionner l'objet à la fin |  | — |  |
| 4 | 84 | Move object in | `Move object in` | Faire entrer l'objet |  | — |  |
| 5 | 85 | Move object out | `Move object out` | Faire sortir l'objet |  | — |  |
