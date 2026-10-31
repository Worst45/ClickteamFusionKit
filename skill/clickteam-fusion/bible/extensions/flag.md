# Extension flag

- File: `flag.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to a flag | `<object>: Compare flag <p0> with <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(0 or 1)” | — |  |
| 1 | -82 | AND flags | `<object>: AND flags <p0> to <p1>` |  | numeric expression “(Zero-based)”; numeric expression “AND flags” | — |  |
| 2 | -83 | OR flags | `<object>: OR flags <p0> to <p1>` |  | numeric expression “(Zero-based)”; numeric expression “OR flags” | — |  |
| 3 | -84 | Count flags | `<object>: Number of true flags from <p0> to <p1><p2><p3>` |  | numeric expression “(Zero-based)”; numeric expression “Count flags”; string expression “Enter a comparison expression (=, <>, <, >, <=, >=)”; numeric expression “Count flags” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set a flag | `Set flag <p0> to <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(0 or 1)” | — |  |
| 1 | 81 | Toggle a flag | `Toggle flag <p0>` |  | numeric expression “(Zero-based)” | — |  |
| 2 | 82 | Set all flags | `Set all flags to <p0>` |  | numeric expression “(0 or 1)” | — |  |
| 3 | 83 | Toggle all flags | `Toggle all flags` |  |  | — |  |
| 4 | 84 | Set flags in a interval | `Set flag in interval <p0> - <p1> to <p2>` |  | numeric expression “(Zero-based)”; numeric expression “Set flags in a interval”; numeric expression “(0 or 1)” | — |  |
| 5 | 85 | Toggle flags in a interval | `Toggle flags in interval <p0> - <p1>` |  | numeric expression “(Zero-based)”; numeric expression “Toggle flags in a interval” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get a flag | `GetFlag(` |  | number | — |  |
| 1 | 81 | AND flags | `ANDFlags(` |  | number; number | — |  |
| 2 | 82 | OR flags | `ORFlags(` |  | number; number | — |  |
| 3 | 83 | Total number of flags | `NumberOfFlags(` |  |  | — |  |
| 4 | 84 | Number of true flags in interval | `NumberOfTrueFlags(` |  | number; number | — |  |
