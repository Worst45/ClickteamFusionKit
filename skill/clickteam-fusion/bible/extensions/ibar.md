# Extension ibar

- File: `ibar.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare the bar to a value... | `<object> Value <p0>` |  | numeric comparison “Value to compare to (Integer)” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Bar Value | `Set Bar Value to <p0>` |  | numeric expression “Value (Floats are accepted)” | — |  |
| 1 | 81 | Add to Bar Value | `Add <p0> to Bar Value` |  | numeric expression “Value (Floats are accepted)” | — |  |
| 2 | 82 | Subtract from Bar Value | `Subtract <p0> to Bar Value` |  | numeric expression “Value (Floats are accepted)” | — |  |
| 3 | 83 | Set Minimum Value | `Set Minimum Value to <p0>` |  | numeric expression “Value” | — |  |
| 4 | 84 | Set Maximum Value | `Set Maximum Value to <p0>` |  | numeric expression “Value” | — |  |
| 5 | 85 | Set Animation Speed | `Set Animation Speed to <p0>` |  | numeric expression “Animation Speed (Delay between each frame, 0=No animation)” | — |  |
| 6 | 86 | Set Count Speed | `Set Count Speed to <p0>` |  | numeric expression “Value (Floats are accepted)” | — |  |
| 7 | 87 | Set Smooth Bar State | `Set Smooth Bar State to <p0>` |  | numeric expression “State (1=Enabled, 0=Disabled)” | — |  |
| 8 | 88 | Set Animation Frame | `Set Animation Frame to <p0>` |  | numeric expression “Animation Frame (0-based)” | — |  |
| 9 | 89 | Set Bar Percentage | `Set Bar Percentage to <p0>` |  | numeric expression “Bar percentage (Float from 0.0 to 1.0)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Current Value | `currentValue(` |  |  | — |  |
| 1 | 81 | Get Minimum Value | `minValue(` |  |  | — |  |
| 2 | 82 | Get Maximum Value | `maxValue(` |  |  | — |  |
| 3 | 83 | Get Animation Speed | `animSpeed(` |  |  | — |  |
| 4 | 84 | Get Count Speed | `countSpeed(` |  |  | — |  |
| 5 | 85 | Get Smooth Bar State | `smoothState(` |  |  | — |  |
| 6 | 86 | Get Animation Frame | `animFrame(` |  |  | — |  |
| 7 | 87 | Get Current Percentage | `currentPercentage(` |  |  | — |  |
| 8 | 88 | Get Bar Cut X (Local) | `barCutX(` |  |  | — |  |
| 9 | 89 | Get Bar Cut Y (Local) | `barCutY(` |  |  | — |  |
