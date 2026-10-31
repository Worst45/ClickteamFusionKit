# Extension sort

- File: `sort.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to unsorted array | `<object>: Value number <p0> <p1>` |  | numeric expression “Remember the base”; numeric comparison “Compare to unsorted array” | — |  |
| 1 | -82 | Compare to sorted array | `<object>: Sorted value number <p0> <p1>` |  | numeric expression “Remember the base”; numeric comparison “Compare to sorted array” | — |  |
| 2 | -83 | Compare to sorted address array | `<object>: Address value number <p0> <p1>` |  | numeric expression “Remember the base”; numeric comparison “Compare to sorted address array” | — |  |
| 3 | -84 | Array has been sorted | `<object>: Array has been sorted` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change values > Set value | `Set <p0> to <p1>` |  | numeric expression “Remember the base”; numeric expression “Set value” | — |  |
| 1 | 81 | Change array > Sort array increasing order | `Sort array increasing from <p0> to <p1>` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |
| 2 | 82 | Change array > Resize array | `Resize array to <p0>` |  | numeric expression “Resize to...” | — |  |
| 3 | 83 | Change values > Clear arrays | `Clear arrays` |  |  | — |  |
| 4 | 84 | Change values > Add value | `Add to <p0> with <p1>` |  | numeric expression “Remember the base”; numeric expression “Add value” | — |  |
| 5 | 85 | Change values > Sub value | `Sub from <p0> with <p1>` |  | numeric expression “Remember the base”; numeric expression “Sub value” | — |  |
| 6 | 86 | Change array > Sort array decreasing order | `Sort array decreasing from <p0> to <p1>` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |
| 7 | 87 | Change array > Expand array | `Expand array to <p0>` |  | numeric expression “Resize to...” | — |  |
| 8 | 88 | Change values > Set value in range | `Set position <p0> - <p1> to <p2>` |  | numeric expression “Resize to...”; numeric expression “Set value in range”; numeric expression “Set value in range” | — |  |
| 9 | 89 | Autosort > Autosort increasing on | `Set autosort increasing on` |  |  | — |  |
| 10 | 90 | Autosort > Autosort increasing off | `Set autosort increasing off` |  |  | — |  |
| 11 | 91 | Autosort > Autosort decreasing on | `Set autosort decreasing on` |  |  | — |  |
| 12 | 92 | Autosort > Autosort decreasing off | `Set autosort decreasing off` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value > Get value from unsorted array | `GetValue(` |  | number | — |  |
| 1 | 81 | Get value > Get value from sorted array | `GetSort(` |  | number | — |  |
| 2 | 82 | Get value > Get value from address array | `GetAddress(` |  | number | — |  |
| 3 | 83 | Get arraysize | `ArraySize(` |  |  | — |  |
| 4 | 84 | Find value > Find value in unsorted array | `FindUnsorted(` |  | number | — |  |
| 5 | 85 | Find value > Find value in sorted array | `FindSorted(` |  | number | — |  |
| 6 | 86 | Find value > Find value in address array | `FindIndex(` |  | number | — |  |
| 7 | 87 | Number of sorted items | `NoItems(` |  |  | — |  |
| 8 | 88 | Get base | `GetBase(` |  |  | — |  |
