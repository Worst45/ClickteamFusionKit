# Extension base64

- File: `base64.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Evaluated condition | `<object>: <p0> == <p1>` |  | numeric expression “First number”; numeric expression “Second number” | — |  |
| 1 | -82 | Triggered condition | `<object> : On trigger` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | This is a submenu > Trigger condition | `Trigger condition` |  |  | — |  |
| 1 | 81 | Dummy action | `Dummy action` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encode | `encode$(` |  | string “String to encode” → string | — |  |
| 1 | 81 | Decode | `decode$(` |  | string “String to decode” → string | — |  |
