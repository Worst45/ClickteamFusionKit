# Extension ByteArray

- File: `ByteArray.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Byte At | `Set Byte At <p0> to <p1>` |  | numeric expression “Which byte? (0-based, you may use f2dto1d and f3dto1d)”; numeric expression “Enter new value (Byte, 0-255)” | — |  |
| 1 | 81 | Save to | `Save to <p0>` |  | file name “File to save to” | — |  |
| 2 | 82 | Load from | `Load to <p0>` |  | file name “File to load from” | — |  |
| 3 | 83 | Resize to | `Resize to <p0> bytes` |  | numeric expression “Size in bytes” | — |  |
| 4 | 84 | Value used in calculations > Set X Size | `Set X size to <p0>` |  | numeric expression “Enter value” | — |  |
| 5 | 85 | Value used in calculations > Set Y Size | `Set Y size to <p0>` |  | numeric expression “Enter value” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get byte at | `getbyteat(` |  | number “Location” | — |  |
| 1 | 81 | Useful calculations > Convert a 2D position to 1D position | `f2dto1d(` |  | number “X”; number “Y” | — |  |
| 2 | 82 | Useful calculations > Convert a 3D position to 1D position | `f3dto1d(` |  | number “X”; number “Y”; number “Z” | — |  |
| 3 | 83 | Get array size | `Size(` |  |  | — |  |
