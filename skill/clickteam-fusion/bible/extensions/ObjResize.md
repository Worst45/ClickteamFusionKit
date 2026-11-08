# Extension ObjResize

- File: `ObjResize.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is Any Object Selected | `<object>: Is an Object Selected?` |  |  |
| 1 | -82 | Is Specific Object Selected | `<object>: Is Object <p0> Selected?` |  | numeric expression “Fixed Value to Test” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Use Selection > Select Object | `Select <p0>` |  | object “Object to Select” |
| 1 | 81 | Use Selection > Select None | `Select None` |  |  |
| 2 | 82 | Use Selection > Set Size | `Set Size of Selected Object to (<p0>, <p1>)` |  | numeric expression “Width”; numeric expression “Height” |
| 3 | 83 | Use Selection > Set Width | `Set Width of Selected Object to <p0> (Proportion: <p1>)` |  | numeric expression “Width”; numeric expression “Proportionally Set Height? (0=No, 1=Yes)” |
| 4 | 84 | Use Selection > Set Height | `Set Height of Selected Object to <p0> (Proportion: <p1>)` |  | numeric expression “Height”; numeric expression “Proportionally Set Width? (0=No, 1=Yes)” |
| 5 | 85 | Use QuickSizing > Set Width | `Set Width of Object <p0> to <p1>` |  | object “Object to Resize”; numeric expression “Width” |
| 6 | 86 | Use QuickSizing > Set Height | `Set Height of Object <p0> to <p1>` |  | object “Object to Resize”; numeric expression “Height” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Selected Object > Get X Size | `SelXSize(` |  |  |
| 1 | 81 | Selected Object > Get Y Size | `SelYSize(` |  |  |
| 2 | 82 | Selected Object > Get X Scale | `SelXScale(` |  |  |
| 3 | 83 | Selected Object > Get Y Scale | `SelYScale(` |  |  |
| 4 | 84 | Selected Object > Get Original X Size | `SelOrigXSize(` |  |  |
| 5 | 85 | Selected Object > Get Original Y Size | `SelOrigYSize(` |  |  |
| 6 | 86 | Selected Object > Get Fixed Value | `SelFixed(` |  |  |
