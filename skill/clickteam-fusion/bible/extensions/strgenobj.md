# Extension strgenobj

- File: `strgenobj.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | String Generated? | `<object>: String Generated?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Generate String | `Generate String - Length(<p0>), Letters?(<p1>), Numbers?(<p2>), Symbols?(<p3>)` |  | numeric expression “Length Of String - (In Characters)”; numeric expression “Include Letters? - (0 = No, 1 = Yes)”; numeric expression “Include Numbers? - (0 = No, 1 = Yes)”; numeric expression “Include Symbols? - (0 = No, 1 = Yes)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last Generated String | `GetLastGeneratedString$(` |  | → string | — |  |
