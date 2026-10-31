# Extension waterSurface

- File: `waterSurface.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ripples > Spawn Ripple | `Spawn Ripple at (<p0>, <p1>) - Strength (<p2>) - Dir (<p3>, <p4>)` |  | numeric expression “x”; numeric expression “y”; numeric expression “strength”; numeric expression “xDir”; numeric expression “yDir” | — |  |
| 1 | 81 | Waves > Set Wave Speed | `Set Wave Speed (<p0>)` |  | numeric expression “Wave Speed (default = 4.0)” | — |  |
| 2 | 82 | Waves > Set Horizontal Wave Strength | `Set Horizontal Wave Strength (<p0>)` |  | numeric expression “Wave Strength (float)” | — |  |
| 3 | 83 | Waves > Set Vertical Wave Strength | `Set Vertical Wave Strength (<p0>)` |  | numeric expression “Wave Strength (float)” | — |  |
| 4 | 84 | Appearance > Set Water Tint | `Set Water Tint (<p0>)` |  | color “Color” | — |  |
| 5 | 85 | Ripples > Set Falloff | `Set Ripple Falloff (<p0>)` |  | numeric expression “Falloff (1-8)” | — |  |
| 6 | 86 | Ripples > Use Ripples | `Use Ripples (<p0>)` |  | numeric expression “State (1=on, 0=off)” | — |  |
| 7 | 87 | Waves > Use Waves | `Use Waves (<p0>)` |  | numeric expression “State (1=on, 0=off)” | — |  |
| 8 | 88 | Waves > Set Horizontal Wave Length | `Set Horizontal Wave Length (<p0>)` |  | numeric expression “Length (1-6)” | — |  |
| 9 | 89 | Waves > Set Vertical Wave Length | `Set Vertical Wave Length (<p0>)` |  | numeric expression “Length (1-6)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Temp | `xxx_temp(` |  |  | — |  |
