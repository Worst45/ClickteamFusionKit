# Extension fcButton

- File: `fcButton.mfx` — third-party extension (shipped with a downloaded project)
- Name(s) shown in projects: “Bouton CS”
- Usage in the corpus: 233 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Box checked ? | `Checkbox <object> checked` |  |  | — |  |
| 1 | -82 | Button clicked ? | `Button <object> clicked` |  |  | 11 (1 proj.) |  |
| 3 | -84 | Is visible ? | `Button <object> is visible` |  |  | — |  |
| 4 | -85 | Is enabled ? | `Button <object> is enabled` |  |  | — |  |
| 5 | -86 | Is radio button enabled ? | `Radio button <p0> of <object> is enabled` |  | (unreliable parameters) | — |  |
| -54 | -27 | ? | ? |  |  | 47 (1 proj.) |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change text | `Change text to <p0>` |  | (unreliable parameters) | 7 (1 proj.) |  |
| 1 | 81 | Visibility > Make Object Reappear | `Make Object Reappear` |  |  | 2 (1 proj.) |  |
| 2 | 82 | Visibility > Make Object Invisible | `Make Object Invisible` |  |  | 4 (1 proj.) |  |
| 3 | 83 | Enable | `Enable` |  |  | 3 (1 proj.) |  |
| 4 | 84 | Disable | `Disable` |  |  | 1 (1 proj.) |  |
| 6 | 86 | Size > Set Horizontal Size | `Set horizontal size to <p0>` |  | (unreliable parameters) | — |  |
| 7 | 87 | Size > Set Vertical Size | `Set vertical size to <p0>` |  | (unreliable parameters) | — |  |
| 8 | 88 | Set Radio button > Change text | `Change radio <p0> text to <p1>` |  | (unreliable parameters) | — |  |
| 9 | 89 | Set Radio button > Enable a radio button | `Enable radio n°<p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | Set Radio button > Disable a radio button | `Disable radio n°<p0>` |  | (unreliable parameters) | — |  |
| 11 | 91 | Set Radio button > Select a radio button | `Select radio button °<p0>` |  | (unreliable parameters) | — |  |
| 14 | 94 | Check | `Check` |  |  | — |  |
| 15 | 95 | Uncheck | `Uncheck` |  |  | — |  |
| 16 | 96 | Attach menu option | `Attach Menu Option <p0>` |  | (unreliable parameters) | — |  |
| 17 | 97 | Change tooltip | `Set tooltip text to <p0>` |  | (unreliable parameters) | — |  |
| 18 | 98 | Use system colors | `Use system colors: <p0>` |  | (unreliable parameters) | — |  |
| 19 | 99 | Change background | `Change background color to <p0>` |  | (unreliable parameters) | — |  |
| -49 | 31 | ? | ? |  |  | 90 (1 proj.) |  |
| -31 | 49 | ? | ? |  |  | 45 (1 proj.) |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | X Size of Button | `Button X size(` |  |  | — |  |
| 1 | 81 | Y Size of Button | `Button Y size(` |  |  | — |  |
| 4 | 84 | Value of set Radio button | `Selected Radio(` |  |  | — |  |
| 5 | 85 | Text of the button | `Button Text$(` |  | → string (unreliable parameters) | — |  |
| 6 | 86 | Text of the tooltip | `Button Tooltip$(` |  | → string | — |  |
| -64 | 16 | ? | ? |  |  | 16 (1 proj.) |  |
| -61 | 19 | ? | ? |  |  | 7 (1 proj.) |  |
