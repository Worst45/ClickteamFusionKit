# Extension edetect

- File: `edetect.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Detect | `<object> On Detect` |  |  |
| 1 | -82 | Check for collision in a detector | `Detector number <p0> is overlaping an obscale` |  | numeric expression “Detector id” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Select object | `Select <p0> as detect object` |  | object “Select object” |
| 1 | 81 | Detect in offset | `Detect overlaps <p0> , <p1> pixels from the object for detector number <p2>` |  | numeric expression “X offset”; numeric expression “Y offset”; numeric expression “Detector ID” |
| 2 | 82 | On detection > Object is overlapping an obstcale | `Object is overlapping an obscale` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | On detection > Detector ID | `detector(` |  |  |
