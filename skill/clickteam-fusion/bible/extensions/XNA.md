# Extension XNA

- File: `XNA.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Game is in trial mode | `Game is in trial mode` |  |  | — |  |
| 1 | -82 | Windows Phone > Back key is pressed | `<object>: Back key is pressed` |  |  | — |  |
| 2 | -83 | Windows Phone > Application has been deactivated | `<object>: Application has been deactivated` |  |  | — |  |
| 3 | -84 | Windows Phone > Application has been reactivated | `<object>: Application has been reactivated` |  |  | — |  |
| 4 | -85 | Windows Phone > Music is playing in the background | `<object>: Music is playing in the background` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open URL | `Open URL <p0>` |  | string expression “Please enter the URL to open” | — |  |
| 1 | 81 | Vibrate phone | `Vibrate phone for <p0> seconds` |  | numeric expression “Enter the duration of the vibration, in seconds” | — |  |
| 2 | 82 | XBox > Assign gamepad to player | `Assign gamepad(s) <p1> to player <p0>` |  | numeric expression “Enter player number (1-4)”; numeric expression “Enter gamepad(s) (1 for gp1, 2 for gp 2, 4 for gp 3, 8 for gp 4, or any combination)” | — |  |
| 3 | 83 | XBox > Set system player | `Set system player index to <p0>` |  | numeric expression “Enter the player index, 1, 2, 3 or 4” | — |  |
| 4 | 84 | XBox > Open storage device selector | `Open storage device selector` |  |  | — |  |
