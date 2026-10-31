# Extension fcWindowLife

- File: `fcWindowLife.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Window just moved | `On Window just moved` |  |  | — |  |
| 1 | -82 | On Window move | `On Window move` |  |  | — |  |
| 2 | -83 | On Window just resized | `On Window just resized` |  |  | — |  |
| 3 | -84 | On Window resize | `On Window resize` |  |  | — |  |
| 4 | -85 | On Window Start move/resize | `On Window Start move/resize` |  |  | — |  |
| 5 | -86 | On Window End move/resize | `On Window End move/resize` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Properties > Set minimum window size | `Set Minimum window size to (<p0>,<p1>)` |  | numeric expression “Minimum Width”; numeric expression “Minimum Height” | — |  |
| 1 | 81 | Properties > Set maximum window size | `Set Maximum window size to (<p0>,<p1>)` |  | numeric expression “Maximum Width”; numeric expression “Maximum Height” | — |  |
| 2 | 82 | Properties > Use minimum size | `Use minimum window size (<p0>)` |  | numeric expression “On = 1 / Off = 0” | — |  |
| 3 | 83 | Properties > Use maximum size | `Use maximum window size (<p0>)` |  | numeric expression “On = 1 / Off = 0” | — |  |
| 4 | 84 | Properties > Use Client Area | `Use ClientArea (<p0>)` |  | numeric expression “On = 1 / Off = 0” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Properties > Get window border Width | `getWindowBorderWidth(` |  |  | — |  |
| 1 | 81 | Properties > Get window border Height | `getWindowBorderHeight(` |  |  | — |  |
| 2 | 82 | Properties > Get minimum window Width | `getMinWidth(` |  |  | — |  |
| 3 | 83 | Properties > Get minimum window Height | `getMinHeight(` |  |  | — |  |
| 4 | 84 | Properties > Get maximum window Width | `getMaxWidth(` |  |  | — |  |
| 5 | 85 | Properties > Get maximum window Height | `getMaxHeight(` |  |  | — |  |
