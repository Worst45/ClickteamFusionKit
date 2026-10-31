# Extension StringRepeater

- File: `StringRepeater.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Repeat string | `RepeatString$(` |  | string “String to repeat”; number “Number of times” → string | — |  |
| 1 | 81 | Repeat characters | `RepeatCharacters$(` |  | string “Characters to repeat”; number “Length” → string | — |  |
