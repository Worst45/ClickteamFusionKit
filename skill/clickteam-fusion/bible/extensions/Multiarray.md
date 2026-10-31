# Extension Multiarray

- File: `Multiarray.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Iteration | `<object> On Iteration (<p0>)` |  | string expression “Iteration ID” | — |  |
| 1 | -82 | On ID Iteration | `<object> On ID Iteration` |  |  | — |  |
| 2 | -83 | Array Exists | `<object> Array (<p0>) Exists` |  | string expression “Array Name” | — |  |
| 3 | -84 | On Error | `<object> On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Arrays > Create Array | `Create Array (<p0>)` |  | string expression “Array Name” | — |  |
| 1 | 81 | Arrays > Remove Array | `Remove Array (<p0>)` |  | string expression “Array Name” | — |  |
| 2 | 82 | Arrays > Iterate Array | `Iterate Array (<p0>) with id (<p1>)` |  | string expression “Array Name”; string expression “Iteration ID” | — |  |
| 3 | 83 | Arrays > Clear | `Clear` |  |  | — |  |
| 4 | 84 | Modify > Insert Value | `Insert Value (<p0>) at (<p1>) to array (<p2>)` |  | numeric expression “Value”; numeric expression “Array Index (-1 for end)”; string expression “Array Name” | — |  |
| 5 | 85 | Modify > Set Value | `Set Value (<p0>) at (<p1>) in Array (<p2>)` |  | numeric expression “Value”; numeric expression “Array Index”; string expression “Array Name” | — |  |
| 6 | 86 | Modify > Insert String | `Insert String (<p0>) at (<p1>) to array (<p2>)` |  | string expression “String”; numeric expression “Array Index (-1 for end)”; string expression “Array Name” | — |  |
| 7 | 87 | Modify > Set String | `Set String (<p0>) at (<p1>) in Array (<p2>)` |  | string expression “String”; numeric expression “Array Index”; string expression “Array Name” | — |  |
| 8 | 88 | Modify > Remove Element | `Remove Element (<p0>) from Array (<p1>)` |  | numeric expression “Array Index”; string expression “Array Name” | — |  |
| 9 | 89 | Files > Save Arrays | `Save Arrays to (<p0>)` |  | file name “Filename” | — |  |
| 10 | 90 | Files > Load Arrays | `Load Arrays from (<p0>)` |  | file name “Filename” | — |  |
| 11 | 91 | Arrays > Iterate Array ID's | `Iterate Array ID's` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Array > Get Value | `GetValue(` |  | string “Array Name”; number “Array Index” | — |  |
| 1 | 81 | Array > Get String | `GetString$(` |  | string “Array Name”; number “Array Index” → string | — |  |
| 2 | 82 | Array > Get Number of Elements | `GetNumElements(` |  | string “Array Name” | — |  |
| 3 | 83 | On Iteration > Get Current Index | `GetCurIndex(` |  |  | — |  |
| 4 | 84 | On Iteration > Get Current Value | `GetCurValue(` |  |  | — |  |
| 5 | 85 | On Iteration > Get Current String | `GetCurString$(` |  | → string | — |  |
| 6 | 86 | On Iteration > Get Current Array | `GetCurArray$(` |  | → string | — |  |
| 7 | 87 | On ID Iteration > Get Current Array | `GetCurID$(` |  | → string | — |  |
| 8 | 88 | On Error > Get Error String | `GetError$(` |  | → string | — |  |
