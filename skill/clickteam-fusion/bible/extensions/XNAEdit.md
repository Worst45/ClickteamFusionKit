# Extension XNAEdit

- File: `XNAEdit.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is object visible? | `<object> is visible` |  |  | — |  |
| 1 | -82 | Is object enabled? | `<object> is enabled` |  |  | — |  |
| 2 | -83 | Has the text been modified? | `<object>: The text has been modified` |  |  | — |  |
| 3 | -84 | Has the object focus? | `<object> has focus` |  |  | — |  |
| 4 | -85 | Keyboard has just been closed | `<object>: keyboard has just been closed` |  |  | — |  |
| 5 | -86 | Editing has been cancelled | `<object>: editing has been cancelled` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Hide | `Hide` |  |  | — |  |
| 1 | 81 | Window > Show | `Show` |  |  | — |  |
| 2 | 82 | Window > Set width | `Set width to <p0>` |  | numeric expression “Enter new width” | — |  |
| 3 | 83 | Window > Set height | `Set height to <p0>` |  | numeric expression “Enter new height” | — |  |
| 4 | 84 | Text > Set text | `Set text to <p0>` |  | string expression “Enter new text” | — |  |
| 5 | 85 | Colors > Set text color | `Set text color to <p0>` |  | color “Set text color” | — |  |
| 6 | 86 | Colors > Set background color | `Set background color to <p0>` |  | color “Set background color” | — |  |
| 7 | 87 | Text > Set title | `Set title to <p0>` |  | string expression “Enter the new title” | — |  |
| 8 | 88 | Text > Set comment | `Set comment to <p0>` |  | string expression “Enter the new comment” | — |  |
| 9 | 89 | Open keyboard | `Open keyboard` |  |  | — |  |
| 10 | 90 | Window > Set enabled / disabled | `Set enabled to <p0>` |  | numeric expression “Enter 0 to disable, 1 to enable” | — |  |
| 11 | 91 | Text > Set modified flag | `Set modified flag to <p0>` |  | numeric expression “Enter 0 or 1” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get width | `Width(` |  |  | — |  |
| 1 | 81 | Size > Get height | `Height(` |  |  | — |  |
| 2 | 82 | Get text | `Text$(` |  | → string | — |  |
