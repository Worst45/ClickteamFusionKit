# Extension shutdown

- File: `shutdown.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Shutdown | `Shutdown` |  |  | — |  |
| 1 | 81 | Power Off | `Power Off` |  |  | — |  |
| 2 | 82 | Restart | `Restart` |  |  | — |  |
| 3 | 83 | Log Off | `Log Off` |  |  | — |  |
