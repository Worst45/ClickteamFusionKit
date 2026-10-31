# Extension fts

- File: `fts.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set time/date data | `Set time/date data: <p0> , <p1> , <p2> , <p3> , <p4> ,  <p5>` |  | numeric expression “Year 1900 ->”; numeric expression “Month”; numeric expression “Day of month”; numeric expression “Hour 0-24”; numeric expression “Minute”; numeric expression “Secound” | — |  |
| 1 | 81 | Set local | `Set local to <p0>` |  | string expression “Country code” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Formatted time string small | `ftss$(` |  | string → string | — |  |
| 1 | 81 | Formatted time string | `fts$(` |  | string; number; number; number; number; number; number → string | — |  |
