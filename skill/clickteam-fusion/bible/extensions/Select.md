# Extension Select

- File: `Select.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Select by number of objects > Select first X objects | `<object>: Select first <p1> of <p0>` |  | object “Choose object”; numeric expression “Enter how many to select” | — |  |
| 1 | -82 | Select by Alt Value > Single object with highest Alt Value | `<object>: Select single <p0> with the highest Alt. Value (<p1>)` |  | object “Choose object”; numeric expression “Enter the Alt. Value (0-25)” | — |  |
| 2 | -83 | Select by Alt Value > Single object with lowest Alt Value | `<object>: Select single <p0> with the lowest Alt. Value (<p1>)` |  | object “Choose object”; numeric expression “Enter the Alt. Value (0-25)” | — |  |
| 3 | -84 | Select by number of objects > Select last X objects | `<object>: Select last <p1> of <p0>` |  | object “Choose object”; numeric expression “Enter how many to select” | — |  |
| 4 | -85 | Re-select all objects | `<object>: Re-select all <p0>` |  | object “Choose object” | — |  |
| 5 | -86 | Select by display order > Select frontmost object | `<object>: Select Frontmost <p0>` |  | object “Choose object” | — |  |
| 6 | -87 | Select by display order > Select rearmost object | `<object>: Select Rearmost <p0>` |  | object “Choose object” | — |  |
| 9 | -90 | Compare to n# of selected objects | `<object>: Number of <p0> selected by previous conditions <p1>` |  | object “Choose object”; numeric comparison “Compare to number of selected objects” | — |  |
| 14 | -95 | Select by number of objects > Select object at index | `<object>: Select <p0> at index <p1>` |  | object “Choose object”; numeric expression “Enter index of object to select” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Count Selected Objects (Name) | `numSelectedByName(` |  | string “Name of Object” | — |  |
| 1 | 81 | Count Selected Objects (Fixed Value) | `numSelectedByFixedV(` |  | number “Fixed Value of Object” | — |  |
