# Extension Microphone

- File: `Microphone.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Recording done | `<object>: Recording done` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Listen | `Listen for <p0> seconds` |  | numeric expression “Number of seconds” | — |  |
| 1 | 81 | Play from memory | `Play memory buffer at left <p0>, right <p1> with size <p2>` |  | numeric expression “Left address”; numeric expression “Right address”; numeric expression “Size” | — |  |
| 2 | 82 | Save to file | `Save to file <p0>` |  | string expression “Filename” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Left buffer address | `LeftBufferAddress(` |  |  | — |  |
| 1 | 81 | Right buffer address | `RightBufferAddress(` |  |  | — |  |
| 2 | 82 | Buffer size | `BufferSize(` |  |  | — |  |
