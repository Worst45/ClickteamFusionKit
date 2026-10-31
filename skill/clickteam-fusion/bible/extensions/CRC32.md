# Extension CRC32

- File: `CRC32.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | CRC32 of string (numeric) | `CRC32(` |  | string “String” | — |  |
| 1 | 81 | CRC32 of string (text) | `CRC32$(` |  | string “String” → string | — |  |
| 2 | 82 | CRC32 of file (numeric) | `FileCRC32(` |  | string “Filename” | — |  |
| 3 | 83 | CRC32 of file (text) | `FileCRC32$(` |  | string “Filename” → string | — |  |
