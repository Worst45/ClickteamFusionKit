# Extension Key

- File: `Key.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is key down? (Virtual Key value) | `<object>: Is key number <p0> down?` |  | numeric expression “Enter Virtual Key” | — |  |
| 1 | -82 | Is key down? (Key name) | `<object>: Is key <p0> down?` |  | string expression “Enter Key Name” | — |  |
| 2 | -83 | Is key down? (Dialog) | `<object>: Is key <p0> down?` |  | key “Select Key” | — |  |
| 3 | -84 | On key pressed (Virtual Key value) | `<object> On key number <p0> pressed` |  | numeric expression “Enter Virtual Key” | — |  |
| 4 | -85 | On key pressed (Key name) | `<object> On key <p0> pressed` |  | string expression “Enter Key Name” | — |  |
| 5 | -86 | On key pressed (Dialog) | `<object> On key <p0> pressed` |  | key “Select Key” | — |  |
| 6 | -87 | On key released (Virtual Key value) | `<object> On key number <p0> released` |  | numeric expression “Enter Virtual Key” | — |  |
| 7 | -88 | On key released (Key name) | `<object> On key <p0> released` |  | string expression “Enter Key Name” | — |  |
| 8 | -89 | On key released (Dialog) | `<object> On key <p0> released` |  | key “Select Key” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Disable input for this application | `Disable` |  |  | — |  |
| 1 | 81 | Enable input for this application | `Enable` |  |  | — |  |
| 2 | 82 | Set Player key | `Set key number <p1> in Player <p0> to <p2>` |  | numeric expression “Player Number (1-4)”; numeric expression “Key Number (0-7)”; numeric expression “Enter Virtual Key” | — |  |
| 3 | 83 | Set Player control type | `Set control type for Player <p0> to <p1>` |  | numeric expression “Player Number (1-4)”; numeric expression “Control Type (1-5)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get key as string | `GetKeyStr$(` |  | number “Enter Virtual Key” → string | — |  |
| 1 | 81 | Get key as value | `GetKeyVal(` |  | string “Enter Key Name” | — |  |
| 2 | 82 | Get last key pressed (Virtual Key value) | `GetLastKeyVal(` |  |  | — |  |
| 3 | 83 | Get last key pressed (Key name) | `GetLastKeyStr$(` |  | → string | — |  |
| 4 | 84 | Get last key released (Virtual Key value) | `GetLastRKeyVal(` |  |  | — |  |
| 5 | 85 | Get last key released (Key name) | `GetLasRtKeyStr$(` |  | → string | — |  |
| 6 | 86 | Get key from Player | `GetKeyFromPlayer(` |  | number “Player Number (1-4)”; number “Key Number (0-7)” | — |  |
| 7 | 87 | Get Player control type | `GetPlayerControlType(` |  | number “Player Number (1-4)” | — |  |
