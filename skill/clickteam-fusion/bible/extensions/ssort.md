# Extension ssort

- File: `ssort.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Array has been sorted | `<object>: Array has been sorted` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change values > Set string | `Set <p0> to <p1>` |  | numeric expression “Remember the base”; string expression “Set string” | — |  |
| 1 | 81 | Change array > Sort array increasing order(CS) | `Sort array increasing from <p0> to <p1>(CS)` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |
| 2 | 82 | Change array > Resize array | `Resize array to <p0>` |  | numeric expression “Resize to...” | — |  |
| 3 | 83 | Change values > Clear arrays | `Clear arrays` |  |  | — |  |
| 4 | 84 | Change values > Add string | `Add to <p0> with <p1>` |  | numeric expression “Remember the base”; string expression “Add string” | — |  |
| 5 | 85 | Change array > Sort array decreasing order(CS) | `Sort array decreasing from <p0> to <p1>(CS)` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |
| 6 | 86 | Change array > Expand array | `Expand array to <p0>` |  | numeric expression “Resize to...” | — |  |
| 7 | 87 | Change values > Set string in range | `Set position <p0> - <p1> to <p2>` |  | numeric expression “Resize to...”; numeric expression “Set string in range”; string expression “Set string in range” | — |  |
| 8 | 88 | Autosort > Autosort increasing on | `Set autosort increasing on` |  |  | — |  |
| 9 | 89 | Autosort > Autosort increasing off | `Set autosort increasing off` |  |  | — |  |
| 10 | 90 | Autosort > Autosort decreasing on | `Set autosort decreasing on` |  |  | — |  |
| 11 | 91 | Autosort > Autosort decreasing off | `Set autosort decreasing off` |  |  | — |  |
| 12 | 92 | Change array > Sort array increasing order(NCS) | `Sort array increasing from <p0> to <p1>(NCS)` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |
| 13 | 93 | Change array > Sort array decreasing order(NCS) | `Sort array decreasing from <p0> to <p1>(NCS)` |  | numeric expression “From... (Remember the base)”; numeric expression “To...” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value > Get string from unsorted array | `GetString$(` |  | number → string | — |  |
| 1 | 81 | Get value > Get string from sorted array | `GetSort$(` |  | number → string | — |  |
| 2 | 82 | Get value > Get value from address array | `GetAddress(` |  | number | — |  |
| 3 | 83 | Get arraysize | `ArraySize(` |  |  | — |  |
| 4 | 84 | Find value > Find string in unsorted array(CS) | `FindUnsortedCS(` |  | string | — |  |
| 5 | 85 | Find value > Find string in sorted array(CS) | `FindSortedCS(` |  | string | — |  |
| 6 | 86 | Find value > Find value in address array | `FindIndex(` |  | number | — |  |
| 7 | 87 | Number of sorted items | `NoItems(` |  |  | — |  |
| 8 | 88 | Get base | `GetBase(` |  |  | — |  |
| 9 | 89 | Find value > Find string in unsorted array(NCS) | `FindUnsortedNCS(` |  | string | — |  |
| 10 | 90 | Find value > Find string in sorted array(NCS) | `FindSortedNCS(` |  | string | — |  |
