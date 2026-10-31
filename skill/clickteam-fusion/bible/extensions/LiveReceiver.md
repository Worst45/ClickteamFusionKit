# Extension LiveReceiver

- File: `LiveReceiver.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Data received | `<object> : Data received` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start download (POST) | `Start download from <p0> with POST string <p1>` |  | string expression “URL”; string expression “POST string (id=value##id2=value2##id3=value3)” | — |  |
| 1 | 81 | Start download (GET) | `Start download from <p0>` |  | string expression “URL” | — |  |
| 2 | 82 | Set cookie file | `Set cookie file to <p0>` |  | file name “Cookie file” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get received data | `Received$(` |  | → string | — |  |
