# Extension MTRandom

- File: `MTRandom.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Seed > Set seed to system time | `Set seed to system time` |  |  | — |  |
| 1 | 81 | Seed > Set seed using one number | `Set seed to <p0>` |  | numeric expression “Enter a seed from -2147483648 to 2147483647” | — |  |
| 2 | 82 | Seed > Set seed using 2 numbers | `Set seed to ( <p0>, <p1>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed” | — |  |
| 3 | 83 | Seed > Set seed using 3 numbers | `Set seed to ( <p0>, <p1>, <p2>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed”; numeric expression “Enter 3rd seed” | — |  |
| 4 | 84 | Seed > Set seed using 4 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed”; numeric expression “Enter 3rd seed”; numeric expression “Enter 4th seed” | — |  |
| 5 | 85 | Seed > Set seed using 6 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed”; numeric expression “Enter 3rd seed”; numeric expression “Enter 4th seed”; numeric expression “Enter 5th seed”; numeric expression “Enter 6th seed” | — |  |
| 6 | 86 | Seed > Set seed using 8 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>, <p7>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed”; numeric expression “Enter 3rd seed”; numeric expression “Enter 4th seed”; numeric expression “Enter 5th seed”; numeric expression “Enter 6th seed”; numeric expression “Enter 7th seed”; numeric expression “Enter 8th seed” | — |  |
| 7 | 87 | Seed > Set seed using 10 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>, <p7>, <p8>, <p9>)` |  | numeric expression “Enter 1st seed”; numeric expression “Enter 2nd seed”; numeric expression “Enter 3rd seed”; numeric expression “Enter 4th seed”; numeric expression “Enter 5th seed”; numeric expression “Enter 6th seed”; numeric expression “Enter 7th seed”; numeric expression “Enter 8th seed”; numeric expression “Enter 9th seed”; numeric expression “Enter 10th seed” | — |  |
| 8 | 88 | Expire one number | `Expire one number` |  |  | — |  |
| 9 | 89 | Expire X numbers | `Expire <p0> numbers` |  | numeric expression “Amount of numbers to expire” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random float, 0-1 | `RandOne(` |  |  | — |  |
| 1 | 81 | Random float, 0-1 (excludes 1) | `RandOneExc(` |  |  | — |  |
| 2 | 82 | Random float, define range | `RandExc(` |  | number; number | — |  |
| 3 | 83 | Random float, define range (excludes upperbound) | `RandExc(` |  | number; number | — |  |
| 4 | 84 | Random integer | `RandInt(` |  | number; number | — |  |
| 5 | 85 | Random integer (excludes upperbound) | `RandIntExc(` |  | number; number | — |  |
