# Extension MMKRandomPool

- File: `MMKRandomPool.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Number Pool Full | `<object>: Is Pool Full?` |  |  | — |  |
| 1 | -82 | Is Number Pool Empty | `<object>: Is Pool Empty?` |  |  | — |  |
| 2 | -83 | On Number Generated | `<object>: On Number Generated` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Numbers Pool > Generate a number | `Generate Number` |  |  | — |  |
| 1 | 81 | Pool Setup > Set Pool Limits | `Set limits to (<p0>-<p1>)` |  | numeric expression “Enter Min Number”; numeric expression “Enter Max Number” | — |  |
| 2 | 82 | Pool Setup > Set Randomization Seed | `Set Randomization Seed to <p0>` |  | numeric expression “Enter Randomization Seed” | — |  |
| 3 | 83 | Numbers Pool > Refill Pool | `Refill Pool` |  |  | — |  |
| 4 | 84 | Numbers Pool > Expire First X Numbers | `Expire <p0> Numbers` |  | numeric expression “Numbers to Expire” | — |  |
| 5 | 85 | Pool Setup > Shuffle | `Shuffle` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Number Generated | `Current Generated Number(` |  |  | — |  |
| 1 | 81 | Numbers Remaining | `Numbers Remaining(` |  |  | — |  |
| 2 | 82 | Numbers Utilized | `Numbers Utilized(` |  |  | — |  |
| 3 | 83 | Get New Generated Number | `Generate Number(` |  |  | — |  |
