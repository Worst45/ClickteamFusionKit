# Extension WaitFor

- File: `WaitFor.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Fractional Chance | `<object>: <p0> chances` |  | numeric expression “Fraction/percent” |
| 1 | -82 | Wait For > Wait Before | `<object> : Wait For <p0> loops before (ID = <p1>)` |  | numeric expression “Number of Loops”; numeric expression “ID (between 1 and 98)” |
| 2 | -83 | Wait For > Wait After | `<object> : Wait For <p0> loops after (ID = <p1>)` |  | numeric expression “Number of Loops”; numeric expression “ID (between 1 and 98)” |
| 3 | -84 | Wait For > Delay | `<object> : Delay <p0> loops before allowing (ID = <p1>)` |  | numeric expression “Number of Loops”; numeric expression “ID (between 1 and 98)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Generate Chance | `Generate Chance from <p0> to <p1>` |  | numeric expression “Lowest Number”; numeric expression “Highest Number” |
| 1 | 81 | Loop the Delay | `Loop the Delay (ID = <p0>)` |  | numeric expression “ID” |
