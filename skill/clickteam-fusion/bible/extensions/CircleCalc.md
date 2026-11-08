# Extension CircleCalc

- File: `CircleCalc.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Calculate From Radius | `Calculate: Radius = <p0>` |  | numeric expression “Enter Radius” |
| 1 | 81 | Calculate From Diameter | `Calculate: Diameter = <p0>` |  | numeric expression “Enter Diameter” |
| 2 | 82 | Calculate From Circumference | `Calculate: Circumference = <p0>` |  | numeric expression “Enter Circumference” |
| 3 | 83 | Calculate From Area | `Calculate: Area = <p0>` |  | numeric expression “Enter Area” |
| 4 | 84 | Set Pi | `Set Pi to <p0>` |  | numeric expression “Enter Pi (default is 3.14)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Radius | `Radius(` |  |  |
| 1 | 81 | Get Diameter | `Diameter(` |  |  |
| 2 | 82 | Get Circumference | `Circumference(` |  |  |
| 3 | 83 | Get Area | `Area(` |  |  |
| 4 | 84 | Get Pi | `Pi(` |  |  |
