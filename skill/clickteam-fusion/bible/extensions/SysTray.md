# Extension SysTray

- File: `SysTray.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is an Icon Displayed in Tray? | `<object>: Icon <p0> is Displayed in Tray` |  | numeric expression “Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.)” | — |  |
| 1 | -82 | Mouse Clicks > User Clicks an Icon | `<object>: User <p0> on Icon <p1>` |  | click “User Clicks an Icon”; numeric expression “Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.)” | — |  |
| 2 | -83 | Has an Error Occured? | `<object>: On Error` |  |  | — |  |
| 3 | -84 | Intercept System Commands > On Minimize Command | `<object>: On Minimize Command` |  |  | — |  |
| 4 | -85 | Intercept System Commands > On Maximize Command | `<object>: On Maximize Command` |  |  | — |  |
| 5 | -86 | Intercept System Commands > On Close Command | `<object>: On Close Command` |  |  | — |  |
| 6 | -87 | Intercept System Commands > On Task Bar Command | `<object>: On Task Bar Command` |  |  | — |  |
| 7 | -88 | Intercept System Commands > On Specific System Command | `<object>: On System Command <p0>` |  | numeric expression “Enter the System Command Type Number” | — |  |
| 8 | -89 | Mouse Clicks > User Releases Left-Click on Icon | `<object>: User Releases Left-Click on Icon <p0>` |  | numeric expression “Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.)” | — |  |
| 9 | -90 | Mouse Clicks > User Releases Middle-Click on Icon | `<object>: User Releases Middle-Click on Icon <p0>` |  | numeric expression “Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.)” | — |  |
| 10 | -91 | Mouse Clicks > User Releases Right-Click on Icon | `<object>: User Releases Right-Click on Icon <p0>` |  | numeric expression “Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.)” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show Icon in Tray | `Show Icon <p0> in Tray` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 1 | 81 | Change Tray Icon > Default Application Icon | `Change Icon <p0> to Default Application Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 2 | 82 | Change Tray Icon > Asterisk Icon | `Change Icon <p0> to Asterisk Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 3 | 83 | Change Tray Icon > Hand-Shaped Icon | `Change Icon <p0> to Hand-Shaped Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 4 | 84 | Change Tray Icon > Exclamation Point Icon | `Change Icon <p0> to Exclamation Point Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 5 | 85 | Change Tray Icon > Question Mark Icon | `Change Icon <p0> to Question Mark Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 6 | 86 | Change Tray Icon > Windows Logo Icon | `Change Icon <p0> to Windows Logo Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 7 | 87 | Remove Icon from Tray | `Remove Icon <p0> from Tray` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 8 | 88 | Tool Tip > Show Tool Tip | `Show Tool Tip for Icon <p0>` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 9 | 89 | Tool Tip > Hide Tool Tip (broken) | `Hide Tool Tip for Icon <p0> (broken)` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 10 | 90 | Tool Tip > Set Tool Tip | `Set Tool Tip for Icon <p0> to <p1>` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)”; string expression “Enter Tool Tip Text” | — |  |
| 11 | 91 | Load Icon Image from ICO File | `Load At Most <p3> Image(s) from <p0> Starting with Icon <p2> into Icon Images Staring with <p1>` |  | string expression “Enter File Path of Icon (ICO) File”; numeric expression “Enter ID of First Icon Image to Store Image into (1 = first icon image, 2 = second, etc.)”; numeric expression “Enter First Icon to Read from File (1 = first icon, 2 = second, etc.)”; numeric expression “Enter Maximum Number of Icons to Read from File” | — |  |
| 12 | 92 | Change Tray Icon > One of the Stored Icon Images | `Change Icon <p0> to Icon Image <p1>` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)”; numeric expression “Enter the Icon Image ID (1 = first icon image, 2 = second, etc.)” | — |  |
| 13 | 93 | Halt System Commands > Halt Minimize Command | `Halt Minimize Command` |  |  | — |  |
| 14 | 94 | Halt System Commands > Halt Maximize Command | `Halt Maximize Command` |  |  | — |  |
| 15 | 95 | Halt System Commands > Halt Close Command | `Halt Close Command` |  |  | — |  |
| 16 | 96 | Halt System Commands > Halt Task Bar Command | `Halt Task Bar Command` |  |  | — |  |
| 17 | 97 | Halt System Commands > Halt this System Command | `Halt this System Command` |  |  | — |  |
| 18 | 98 | Load Icon Image from EXE or DLL File | `Load At Most <p3> Image(s) from <p0> Starting with Icon <p2> into Icon Images Staring with <p1> using Format <p4>` |  | string expression “Enter File Path of EXE or DLL File”; numeric expression “Enter ID of First Icon Image to Store Image into (1 = first icon image, 2 = second, etc.)”; numeric expression “Enter First Icon to Read from File (1 = first icon, 2 = second, etc.)”; numeric expression “Enter Maximum Number of Pairs of Icons to Read from File”; numeric expression “Enter the Format Number (consult help files for various formats)” | — |  |
| 19 | 99 | Application's Icons > Load Small Icon from Application | `Load Small Icon from Application into Icon Image <p0>` |  | numeric expression “Enter the Icon Image ID (1 = first icon image, 2 = second, etc.)” | — |  |
| 20 | 100 | Application's Icons > Load Big Icon from Application | `Load Big Icon from Application into Icon Image <p0>` |  | numeric expression “Enter the Icon Image ID (1 = first icon image, 2 = second, etc.)” | — |  |
| 21 | 101 | Application's Icons > Change Application's Small Icon | `Change Application's Small Icon to Icon Image <p0>` |  | numeric expression “Enter the Icon Image ID (1 = first icon image, 2 = second, etc.)” | — |  |
| 22 | 102 | Application's Icons > Change Application's Big Icon | `Change Application's Big Icon to Icon Image <p0>` |  | numeric expression “Enter the Icon Image ID (1 = first icon image, 2 = second, etc.)” | — |  |
| 23 | 103 | Application's Icons > Reset Application's Small Icon | `Reset Application's Small Icon` |  |  | — |  |
| 24 | 104 | Application's Icons > Reset Application's Big Icon | `Reset Application's Big Icon` |  |  | — |  |
| 25 | 105 | Change Tray Icon > This Application's Default Small Icon | `Change Icon <p0> to this Applications Default Small Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |
| 26 | 106 | Change Tray Icon > This Application's Default Big Icon | `Change Icon <p0> to this Applications Default Big Icon` |  | numeric expression “Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get ID of Icon Associated with Last Event | `GetEventIcon(` |  |  | — |  |
| 1 | 81 | Get Current Error Message | `GetCurrentError$(` |  | → string | — |  |
