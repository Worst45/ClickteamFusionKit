# Extension ctrlx95

- File: `ctrlx95.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Keyboard > Repeat while key pressed | `<object>: Repeat while pressing <p0>` |  | string expression “Enter the key as string (e.g. "space")” | — |  |
| 1 | -82 | Keyboard > Key pressed | `<object>: Key <p0> is pressed` |  | string expression “Enter the key as string (e.g. "space")” | — |  |
| 2 | -83 | Keyboard > Key down | `<object>: Key <p0> is down` |  | string expression “Enter the key as string (e.g. "space")” | — |  |
| 3 | -84 | Keyboard > Key up | `<object>: Key <p0> is up` |  | string expression “Enter the key as string (e.g. "space")” | — |  |
| 4 | -85 | Keyboard > Repeat while any key pressed | `<object>: Repeat while any key pressed` |  |  | — |  |
| 5 | -86 | Keyboard > Repeat while key (value) pressed | `<object>: Repeat while pressing number <p0>` |  | numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 6 | -87 | Keyboard > Key (value) pressed | `<object>: Key number <p0> is pressed` |  | numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 7 | -88 | Keyboard > Key (value) down | `<object>: Key number <p0> is down` |  | numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 8 | -89 | Keyboard > Key (value) up | `<object>: Key number <p0> is up` |  | numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 9 | -90 | Keyboard > Any key down | `<object>: Any key is down` |  |  | — |  |
| 10 | -91 | Keyboard > Any key up | `<object>: Any key is up` |  |  | — |  |
| 11 | -92 | Enable/Disable > Alt+F4 is disabled | `<object>: Alt+F4 is disabled` |  |  | — |  |
| 12 | -93 | Enable/Disable > Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del are disabled | `<object>: Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del are disabled` |  |  | — |  |
| 13 | -94 | Enable/Disable > Key is disabled | `<object>: Key <p0> is disabled` |  | string expression “Enter the key as string (e.g. "space")” | — |  |
| 14 | -95 | Enable/Disable > Key (value) is disabled | `<object>: Key number <p0> is disabled` |  | numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 15 | -96 | Keystate > Caps Lock is on | `<object>: Caps Lock is on` |  |  | — |  |
| 16 | -97 | Keystate > Num Lock is on | `<object>: Num Lock is on` |  |  | — |  |
| 17 | -98 | Keystate > Scroll Lock is on | `<object>: Scroll Lock is on` |  |  | — |  |
| 18 | -99 | Enable/Disable > All keys are disabled | `<object>: All keys are disabled` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Reset last key pressed | `Reset last key pressed` |  |  | — |  |
| 1 | 81 | Player > Set up (value) | `Set up for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 2 | 82 | Player > Set down (value) | `Set down for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 3 | 83 | Player > Set left (value) | `Set left for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 4 | 84 | Player > Set right (value) | `Set right for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 5 | 85 | Player > Set fire 1 (value) | `Set fire 1 for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 6 | 86 | Player > Set fire 2 (value) | `Set fire 2 for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; numeric expression “Enter a value for the key (e.g. 32 for "space")” | — |  |
| 7 | 87 | Player > Set up | `Set up for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 8 | 88 | Player > Set down | `Set down for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 9 | 89 | Player > Set left | `Set left for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 10 | 90 | Player > Set right | `Set right for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 11 | 91 | Player > Set fire 1 | `Set fire 1 for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 12 | 92 | Player > Set fire 2 | `Set fire 2 for player <p0> to <p1>` |  | numeric expression “Select player: Player 1 = 1, Player 2 = 2 etc.”; string expression “Enter the key as string (e.g. "space")” | — |  |
| 13 | 93 | Enable/Disable > Disable Alt+F4 | `Disable Alt+F4` |  |  | — |  |
| 14 | 94 | Enable/Disable > Enable Alt+F4 | `Enable Alt+F4` |  |  | — |  |
| 15 | 95 | Enable/Disable > Disable Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del | `Disable Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del` |  |  | — |  |
| 16 | 96 | Enable/Disable > Enable Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del | `Enable Alt+Tab, Ctrl+Esc and Ctrl+Alt+Del` |  |  | — |  |
| 17 | 97 | Enable/Disable > Disable key | `Disable key <p0>` |  | string expression “Disables/Enables a key in this exstension.” | — |  |
| 18 | 98 | Enable/Disable > Disable key (value) | `Disable key number <p0>` |  | numeric expression “Disables/Enables a key in this exstension.” | — |  |
| 19 | 99 | Enable/Disable > Enable key | `Enable key <p0>` |  | string expression “Disables/Enables a key in this exstension.” | — |  |
| 20 | 100 | Enable/Disable > Enable key (value) | `Enable key number <p0>` |  | numeric expression “Disables/Enables a key in this exstension.” | — |  |
| 21 | 101 | Keystate > Set Caps Lock on | `Set Caps Lock on` |  |  | — |  |
| 22 | 102 | Keystate > Set Caps Lock off | `Set Caps Lock off` |  |  | — |  |
| 23 | 103 | Keystate > Set Num Lock on | `Set Num Lock on` |  |  | — |  |
| 24 | 104 | Keystate > Set Num Lock off | `Set Num Lock off` |  |  | — |  |
| 25 | 105 | Keystate > Set Scroll Lock on | `Set Scroll Lock on` |  |  | — |  |
| 26 | 106 | Keystate > Set Scroll Lock off | `Set Scroll Lock off` |  |  | — |  |
| 27 | 107 | Enable/Disable > Disable all keys | `Disable all keys` |  |  | — |  |
| 28 | 108 | Enable/Disable > Enable all keys | `Enable all keys` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Keyboard > Get last key pressed as string | `LastKeyPressed$(` |  | → string | — |  |
| 1 | 81 | Keyboard > Get last key pressed as value | `LastKeyPressed(` |  |  | — |  |
| 2 | 82 | Conversion > Key to int | `KeyToInt(` |  | string | — |  |
| 3 | 83 | Conversion > Int to key | `IntToKey$(` |  | number → string | — |  |
| 4 | 84 | Player > Get up key | `GetUp$(` |  | number → string | — |  |
| 5 | 85 | Player > Get down key | `GetDown$(` |  | number → string | — |  |
| 6 | 86 | Player > Get left key | `GetLeft$(` |  | number → string | — |  |
| 7 | 87 | Player > Get right key | `GetRight$(` |  | number → string | — |  |
| 8 | 88 | Player > Get fire 1 key | `GetFireOne$(` |  | number → string | — |  |
| 9 | 89 | Player > Get fire 2 key | `GetFireTwo$(` |  | number → string | — |  |
| 10 | 90 | Player > Get up key as value | `GetUp(` |  | number | — |  |
| 11 | 91 | Player > Get down key as value | `GetDown(` |  | number | — |  |
| 12 | 92 | Player > Get left key as value | `GetLeft(` |  | number | — |  |
| 13 | 93 | Player > Get right key as value | `GetRight(` |  | number | — |  |
| 14 | 94 | Player > Get fire 1 key as value | `GetFireOne(` |  | number | — |  |
| 15 | 95 | Player > Get fire 2 key as value | `GetFireTwo(` |  | number | — |  |
