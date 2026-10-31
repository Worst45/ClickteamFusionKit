# Extension Keyboard

- File: `Keyboard.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Upon key down | `<object>: Upon key <p0> down` |  | numeric expression “Key number” | — |  |
| 1 | -82 | Upon key up | `<object>: Upon key <p0> up` |  | numeric expression “Key number” | — |  |
| 2 | -83 | Repeat while key is pressed | `<object>: Repeat while key <p0> is pressed` |  | numeric expression “Key number” | — |  |
| 3 | -84 | Upon any key down | `<object>: Upon any key down` |  |  | — |  |
| 4 | -85 | Upon any key up | `<object>: Upon any key up` |  |  | — |  |
| 5 | -86 | Repeat while any key is pressed | `<object>: Repeat while any key is pressed` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last key pressed | `LastKeyPressed(` |  |  | — |  |
| 1 | 81 | Last key released | `LastKeyReleased(` |  |  | — |  |
| 2 | 82 | Key string | `KeyString$(` |  | number “Key value” → string | — |  |
| 3 | 83 | Key value | `KeyValue(` |  | string “Key string” | — |  |
