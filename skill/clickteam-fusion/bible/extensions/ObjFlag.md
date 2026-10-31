# Extension ObjFlag

- File: `ObjFlag.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set flag | `Set flag <p1> of <p0> to <p2>` |  | object “Object”; numeric expression “Flag (0-31)”; numeric expression “Value (0-1)” | — |  |
| 1 | 81 | Set all flags | `Set flags of <p0> to <p1>` |  | object “Object”; numeric expression “Flags (bitmask)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get all flags | `Flags(` |  | number “Fixed value” | — |  |
