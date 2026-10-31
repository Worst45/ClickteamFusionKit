# Extension Online

- File: `Online.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is the index to the X dimension at end? | `<object>: Index to the X dimension at end` |  |  | — |  |
| 1 | -82 | Is the index to the Y dimension at end? | `<object>: Index to the Y dimension at end` |  |  | — |  |
| 2 | -83 | Is the index to the Z dimension at end? | `<object>: Index to the Z dimension at end` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change Current Position > Set X dimension index to... | `Set X dimension index to <p0>` |  | numeric expression “Set X dimension index to...” | — |  |
| 1 | 81 | Change Current Position > Set Y dimension index to... | `Set Y dimension index to <p0>` |  | numeric expression “Set Y dimension index to...” | — |  |
| 2 | 82 | Change Current Position > Set Z dimension index to... | `Set Z dimension index to <p0>` |  | numeric expression “Set Z dimension index to...” | — |  |
| 3 | 83 | Change Current Position > Add 1 to X dimension index | `Add 1 to X dimension index` |  |  | — |  |
| 4 | 84 | Change Current Position > Add 1 to Y dimension index | `Add 1 to Y dimension index` |  |  | — |  |
| 5 | 85 | Change Current Position > Add 1 to Z dimension index | `Add 1 to Z dimension index` |  |  | — |  |
| 6 | 86 | Write > Write Value to current position | `Write Value <p0> to current array position` |  | numeric expression “Write Value to current position” | — |  |
| 7 | 87 | Write > Write String to current position | `Write String <p0> to current array position` |  | string expression “Write String to current position” | — |  |
| 8 | 88 | Clear array | `Clear array` |  |  | — |  |
| 9 | 89 | Files > Load array from file | `Load array from file <p0>` |  | file name “Please select an array file” | — |  |
| 10 | 90 | Files > Load array from file via a file selector | `Load array from file via a file selector` |  |  | — |  |
| 11 | 91 | Files > Save array to file | `Save array to file <p0>` |  | file name “Please select an array file” | — |  |
| 12 | 92 | Files > Save array to file via a file selector | `Save array to file via a file selector` |  |  | — |  |
| 13 | 93 | Write > Write Value to X | `Write Value <p0> to (<p1>)` |  | numeric expression “Enter value to write”; numeric expression “Enter X index” | — |  |
| 14 | 94 | Write > Write Value to XY | `Write Value <p0> to (<p1>, <p2>)` |  | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” | — |  |
| 15 | 95 | Write > Write Value to XYZ | `Write Value <p0> to (<p1>, <p2>, <p3>)` |  | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” | — |  |
| 16 | 96 | Write > Write String to X | `Write String <p0> to (<p1>)` |  | string expression “Enter string to write”; numeric expression “Enter X index” | — |  |
| 17 | 97 | Write > Write String to XY | `Write String <p0> to (<p1>, <p2>)` |  | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” | — |  |
| 18 | 98 | Write > Write String to XYZ | `Write String <p0> to (<p1>, <p2>, <p3>)` |  | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current position of X index | `index x(` |  |  | — |  |
| 1 | 81 | Current position of Y index | `index y(` |  |  | — |  |
| 2 | 82 | Current position of Z index | `index z(` |  |  | — |  |
| 3 | 83 | Read Value from current position | `current value(` |  |  | — |  |
| 4 | 84 | Read String from current position | `current str$(` |  | → string | — |  |
| 5 | 85 | Read Value from X position | `ValueAtX(` |  | number “Enter X offset” | — |  |
| 6 | 86 | Read Value from XY position | `ValueAtXY(` |  | number “Enter X offset”; number “Enter Y offset” | — |  |
| 7 | 87 | Read Value from XYZ position | `ValueAtXYZ(` |  | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” | — |  |
| 8 | 88 | Read String from X position | `StrAtX(` |  | number “Enter X offset” → string | — |  |
| 9 | 89 | Read String from XY position | `StrAtXY(` |  | number “Enter X offset”; number “Enter Y offset” → string | — |  |
| 10 | 90 | Read String from XYZ position | `StrAtXYZ(` |  | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” → string | — |  |
| 11 | 91 | X dimension | `DimX(` |  |  | — |  |
| 12 | 92 | Y dimension | `DimY(` |  |  | — |  |
| 13 | 93 | Z dimension | `DimZ(` |  |  | — |  |
