# Extension Nifflas

- File: `Nifflas.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On timer | `<object> : On timer <p0>` |  | numeric expression “Timer ID” | — |  |
| 1 | -82 | Compare two numbers | `<object> : Compare <p0> and <p1> with comparison type <p2>` |  | numeric expression “First number”; numeric expression “Second number”; numeric expression “Comparison type (0 = Equal, 1 = Different, 2 = Higher, 3 = Lower, 4 = Equal or higher, 5 = Equal or lower)” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set random seed | `Set random seed to <p0>` |  | numeric expression “Random seed” | — |  |
| 1 | 81 | Set random seed to timer | `Set random seed to timer` |  |  | — |  |
| 2 | 82 | Set timer | `Set timer with ID <p0> to trigger every <p1> frames with offset <p2>` |  | numeric expression “Timer ID”; numeric expression “Number of frames”; numeric expression “Offset” | — |  |
| 3 | 83 | Remove timer | `Remove timer with ID <p0>` |  | numeric expression “Timer ID” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random | `GenerateRandom(` |  | number “Minimum”; number “Maximum”; number “Block value” | — |  |
| 1 | 81 | Random with seed | `SeedRandom(` |  | number “Minimum”; number “Maximum”; number “Block value”; number “Seed” | — |  |
| 2 | 82 | Sine | `Sine(` |  | number “Value”; number “Cycle length”; number “Minimum”; number “Maximum” | — |  |
| 3 | 83 | Limit | `Limit(` |  | number “Value”; number “Minimum”; number “Maximum” | — |  |
| 4 | 84 | Substr | `Substr$(` |  | string “String”; number “Start”; number “Length” → string | — |  |
| 5 | 85 | Timer value | `TimerValue(` |  | number “Timer ID” | — |  |
| 6 | 86 | Cosine | `Cosine(` |  | number “Value”; number “Cycle length”; number “Minimum”; number “Maximum” | — |  |
| 7 | 87 | Nearest | `Nearest(` |  | number “Value”; number “Minimum”; number “Maximum” | — |  |
| 8 | 88 | Normalise | `Normalise(` |  | number “Value”; number “Minimum”; number “Maximum”; number “Limit” | — |  |
| 9 | 89 | Modify range | `ModifyRange(` |  | number “Value”; number “Current minimum”; number “Current maximum”; number “New minimum”; number “New maximum”; number “Limit” | — |  |
