# Extension Pixel

- File: `Pixel.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare Color | `<object> : When pixel at <p0> , <p1> is equal to <p2>` |  | numeric expression “X Position”; numeric expression “Y Position”; color “Color” |
| 1 | -82 | Compare Red | `<object> : When selected pixel's Red <p0>` |  | numeric comparison “Red” |
| 2 | -83 | Compare Green | `<object> : When selected pixel's Green <p0>` |  | numeric comparison “Green” |
| 3 | -84 | Compare Blue | `<object> : When selected pixel's Blue <p0>` |  | numeric comparison “Blue” |
| 4 | -85 | Select pixel to compare (Only in compare R/G/B) | `<object>: The pixel to compare is <p0> , <p1>` |  | numeric expression “X Position”; numeric expression “Y Position” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Pixel | `Set Pixel at <p0> , <p1> to <p2>` |  | numeric expression “X Position”; numeric expression “Y Position”; color “Color” |
| 1 | 81 | Set Red | `Set Red at <p0> , <p1> to <p2>` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Red” |
| 2 | 82 | Set Green | `Set Green at <p0> , <p1> to <p2>` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Green” |
| 3 | 83 | Set Blue | `Set Blue at <p0> , <p1> to <p2>` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Blue” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get color at | `GetPixel(` |  | number “X”; number “Y” |
| 1 | 81 | Get Red at | `GetRedAt(` |  | number “X”; number “Y” |
| 2 | 82 | Get Green at | `GetGreenAt(` |  | number “X”; number “Y” |
| 3 | 83 | Get Blue at | `GetBlueAt(` |  | number “X”; number “Y” |
