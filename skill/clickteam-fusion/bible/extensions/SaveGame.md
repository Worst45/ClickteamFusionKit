# Extension SaveGame

- File: `SaveGame.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On create and load object (type) | `<object>: On create and load object - type <p0>` |  | numeric expression “Object type” | — |  |
| 1 | -82 | On create and load object | `<object>: On create and load object` |  |  | — |  |
| 2 | -83 | On save file successful | `<object>: On save file successful` |  |  | — |  |
| 3 | -84 | On load file successful | `<object>: On load file successful` |  |  | — |  |
| 4 | -85 | On save file failed | `<object>: On save file failed` |  |  | — |  |
| 5 | -86 | On load file failed | `<object>: On load file failed` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Save object to memory | `Save <p0> as object type <p1> to memory` |  | object “Choose an ACTIVE OBJECT”; numeric expression “Object type” | — |  |
| 1 | 81 | Save memory to disk | `Save memory to <p0>` |  | file name “Filename” | — |  |
| 2 | 82 | Load file into memory | `Load <p0> to memory` |  | file name “Filename” | — |  |
| 3 | 83 | Create and load objects from memory | `Create and load objects from memory` |  |  | — |  |
| 4 | 84 | Clear memory (see docs) | `Clear memory` |  |  | — |  |
| 5 | 85 | Set string | `Set string <p0> to <p1>` |  | string expression “String name”; string expression “String” | — |  |
| 6 | 86 | Set value | `Set value <p0> to <p1>` |  | string expression “Value name”; numeric expression “Value” | — |  |
| 7 | 87 | On create and load object: Setup created object | `Setup <p0>` |  | object “Choose an ACTIVE OBJECT” | — |  |
| 8 | 88 | Set auto-clear on | `Set auto-clear on` |  |  | — |  |
| 9 | 89 | Set auto-clear off | `Set auto-clear off` |  |  | — |  |
| 10 | 90 | Setup existing object from memory | `Setup <p0> from memory` |  | object | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | On create and load object: Get type | `GetObjType(` |  |  | — |  |
| 1 | 81 | Get string | `GetStr$(` |  | string → string | — |  |
| 2 | 82 | Get value | `GetVal(` |  | string | — |  |
| 3 | 83 | On create and load object: Get fixed value (of original object) | `GetFixed(` |  |  | — |  |
