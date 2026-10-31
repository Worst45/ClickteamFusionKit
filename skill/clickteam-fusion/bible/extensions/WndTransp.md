# Extension WndTransp

- File: `WndTransp.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Transparency | `Set Transparency value to <p0>` |  | numeric expression “Enter the Transparency value (between 0 = Transparent and 255 = Opaque)” | — |  |
| 1 | 81 | Set Alpha Color | `Set Alpha color to <p0>` |  | color “Set Alpha Color” | — |  |
| 2 | 82 | Set Use for Sub-Apps | `Set Sub-Apps use to <p0>` |  | numeric expression | — |  |
