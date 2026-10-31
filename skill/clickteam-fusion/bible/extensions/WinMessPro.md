# Extension WinMessPro

- File: `WinMessPro.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is There a Message for the Window? | `<object>: On Message of Type <p0>` |  | numeric expression “Enter the Window Message Type” | — |  |
| 1 | -82 | Does Window have Focus? | `<object>: Window <p0> has Focus` |  | numeric expression “Enter the Window Handle” | — |  |
| 2 | -83 | Has an Error Occured? | `<object>: On Error` |  |  | — |  |
| 3 | -84 | Is Window Visible? | `<object>: Window <p0> is Visible` |  | numeric expression “Enter the Window Handle” | — |  |
| 4 | -85 | Does Menu Item have a Submenu? | `<object>: Menu Item <p1> of Window or Menu <p0> has a Submenu` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item” | — |  |
| 5 | -86 | Does Window have a Visible Menu? | `<object>: Window <p0> has a Visible Menu` |  | numeric expression “Enter the Window Handle” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window Status > Set Window Caption Text | `Set Caption Text of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; string expression “Enter the Window Caption Text” | — |  |
| 1 | 81 | Errors > Clear Expression Error | `Clear Expression Error` |  |  | — |  |
| 2 | 82 | Start Intercepting Messages | `Start Intercepting Messages` |  |  | — |  |
| 3 | 83 | Stop Intercepting Messages | `Stop Intercepting Messages` |  |  | — |  |
| 4 | 84 | Message Handling > Set Current Message as Handled | `Set Current Message as Handled` |  |  | — |  |
| 5 | 85 | Message Handling > Set Current Message as Caught | `Set Current Message as Caught` |  |  | — |  |
| 6 | 86 | Message Handling > Set Current Message to be Handled by Windows | `Set Current Message to be Handled by Windows` |  |  | — |  |
| 7 | 87 | Message Generating > Send Message to the Window | `SendMessage( <p0> , <p1> , <p2> , <p3> )` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Window Message Type”; numeric expression “Enter the wParam”; numeric expression “Enter the lParam” | — |  |
| 8 | 88 | Message Generating > Post Message to the Window | `PostMessage( <p0> , <p1> , <p2> , <p3> )` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Window Message Type”; numeric expression “Enter the wParam”; numeric expression “Enter the lParam” | — |  |
| 9 | 89 | Window Flashing > Flash Window | `Flash Window <p0>` |  | numeric expression “Enter the Window Handle” | — |  |
| 10 | 90 | Window Flashing > Restore Window from Flashed State | `Restore Window <p0> from Flashed State` |  | numeric expression “Enter the Window Handle” | — |  |
| 11 | 91 | Window Style > Set Window Caption State (Enabling Turns on Border Until Disabled) | `Set Caption State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 12 | 92 | Window Style > Set Dialog Border Style State (Turns off Caption) | `Set Dialog Border Style State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 13 | 93 | Window Style > Set Maximize Button State | `Set Maximize Button State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 14 | 94 | Window Style > Set Minimize Button State | `Set Minimize Button State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 15 | 95 | Window Style > Set Thick Frame State | `Set Thick Frame State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 16 | 96 | Window Style > Set Window System Menu State (Enabling Turns on Caption) | `Set System Menu State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 17 | 97 | Window Style > Set Window Border State (Disabling Turns off Caption) | `Set Window Border State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 18 | 98 | Window Style > Set Custom Window Style | `Set Window Style of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Window Style” | — |  |
| 19 | 99 | Extended Window Style > Set Taskbar State | `Set Taskbar State to of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 20 | 100 | Extended Window Style > Set Sunken Border State | `Set Sunken Border State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 21 | 101 | Extended Window Style > Set Help Context Button State (Enabling Turns off Min and Max Buttons) | `Set Help Context Button State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 22 | 102 | Extended Window Style > Set Double Border State | `Set Double Border State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 23 | 103 | Extended Window Style > Set 3D Border State | `Set 3-D Border State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 24 | 104 | Extended Window Style > Set Tool Window State | `Set Tool Window State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 25 | 105 | Extended Window Style > Set Raised Border State | `Set Raised Border State of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 26 | 106 | Extended Window Style > Set Custom Extended Window Style | `Set Extended Window Style of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Window Style” | — |  |
| 27 | 107 | Window Status > Set Window Z Order | `Set Z Order of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Code or Handle of Window to Go Above” | — |  |
| 28 | 108 | Window Status > Set Window Position | `Set Position of Window <p0> to ( <p1> , <p2> )` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the X Position”; numeric expression “Enter the Y Position” | — |  |
| 29 | 109 | Window Status > Set Window Size | `Set Size of Window <p0> to <p1> by <p2>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Width”; numeric expression “Enter the Height” | — |  |
| 30 | 110 | Window Status > Set Window Visibility | `Set Visibility of Window <p0> to <p1>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Visibility (0 = Hidden; 1 = Visible)” | — |  |
| 31 | 111 | Window Menu > Add an Item to the Menu Before Another Item | `Add <p3> with ID <p2> Before Menu Item <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID to Add New Item Before”; numeric expression “Enter the Menu Item ID of the Item”; string expression “Enter the Text of the Item” | — |  |
| 32 | 112 | Window Menu > Add a Separator to the Menu Before an Item | `Add Separator with ID <p2> Before Menu Item <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID to Add New Item Before”; numeric expression “Enter the Menu Item ID of the Item” | — |  |
| 33 | 113 | Window Menu > Change a Menu Item's Text | `Change Menu Item with ID <p1> of Window or Menu <p0> to <p2>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item”; string expression “Enter the Text of the Item” | — |  |
| 34 | 114 | Window Menu > Set an Item's Checked State | `Set Menu Item with ID <p1> of Window or Menu <p0> to Checked State <p2>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 35 | 115 | Window Menu > Set an Item's Enabled State | `Set Menu Item with ID <p1> of Window or Menu <p0> to Enabled State <p2>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 36 | 116 | Window Menu > Set an Item's Highlighted State | `Set Menu Item with ID <p1> of Window or Menu <p0> to Highlighted State <p2>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item”; numeric expression “Enter the State (0 = Off; Anything Else = On)” | — |  |
| 37 | 117 | Window Menu > Delete an Item from the Menu | `Delete Menu Item with ID <p1> from Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Menu Item ID of the Item” | — |  |
| 38 | 118 | Window Menu > Add an Item to a Submenu | `Add <p4> with ID <p3> in Position <p2> of Submenu <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the ID of the Submenu”; numeric expression “Enter the Position in the Submenu (0-based)”; numeric expression “Enter the Menu Item ID of the Item”; string expression “Enter the Text of the Item” | — |  |
| 39 | 119 | Window Menu > Delete a Submenu from a Menu Item | `Delete Submenu from Menu Item with ID <p1> from Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the ID of the Submenu” | — |  |
| 40 | 120 | Window Status > Set Window Client Size | `Set Client Size of Window <p0> to <p1> by <p2>` |  | numeric expression “Enter the Window Handle”; numeric expression “Enter the Width”; numeric expression “Enter the Height” | — |  |
| 41 | 121 | Window Menu > Add a Separator to a Submenu | `Add Separator with ID <p3> in Position <p2> of Submenu <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the ID of the Submenu”; numeric expression “Enter the Position in the Submenu (0-based)”; numeric expression “Enter the Menu Item ID of the Item” | — |  |
| 42 | 122 | Window Menu > Reset the System Menu of a Window | `Reset the System Menu of Window <p0>` |  | numeric expression “Enter the Window Handle” | — |  |
| 43 | 123 | Window Menu > Add an Item to a Menu by Position | `Add <p3> with ID <p2> in Position <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Position in the Menu (0-based)”; numeric expression “Enter the Menu Item ID of the Item”; string expression “Enter the Text of the Item” | — |  |
| 44 | 124 | Window Menu > Add a Separator to a Menu by Position | `Add Separator with ID <p2> in Position <p1> of Window or Menu <p0>` |  | numeric expression “Enter the Window or Menu Handle”; numeric expression “Enter the Position in the Menu (0-based)”; numeric expression “Enter the Menu Item ID of the Item” | — |  |
| 45 | 125 | Window Menu > Redraw the Menu Bar of a Window | `Redraw the Menu Bar of Window <p0>` |  | numeric expression “Enter the Window Handle” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window Data > Get Window Caption Text | `CaptionText$(` |  | number → string | — |  |
| 1 | 81 | Messages > Get Type of Last/Current Message | `MessageType(` |  |  | — |  |
| 2 | 82 | Messages > Get wParam of Last/Current Message | `wParam(` |  |  | — |  |
| 3 | 83 | Messages > Get lParam of Last/Current Message | `lParam(` |  |  | — |  |
| 4 | 84 | Window Data > Get Window Style | `WindowStyle(` |  | number | — |  |
| 5 | 85 | Window Data > Get Extended Window Style | `WindowStyleEx(` |  | number | — |  |
| 6 | 86 | Window Data > Get Main Window Handle | `MainWindowHandle(` |  |  | — |  |
| 7 | 87 | Messages > Get Window Handle of Last/Current Message | `LastWindowHandle(` |  |  | — |  |
| 8 | 88 | Errors > Get Last Error Code | `ErrorCode(` |  |  | — |  |
| 9 | 89 | Errors > Get Last Expression Error Code | `ExpressionErrorCode(` |  |  | — |  |
| 10 | 90 | Window Data > Get Edit Window Handle | `EditWindowHandle(` |  |  | — |  |
| 11 | 91 | Window Data > Get Related Window Handle | `RelatedWindowHandle(` |  | number; number | — |  |
| 12 | 92 | Window Data > Get X Position of Window | `XPosition(` |  | number | — |  |
| 13 | 93 | Window Data > Get Y Position of Window | `YPosition(` |  | number | — |  |
| 14 | 94 | Window Data > Get Width of Window | `Width(` |  | number | — |  |
| 15 | 95 | Window Data > Get Height of Window | `Height(` |  | number | — |  |
| 16 | 96 | Window Data > Get Visibility of Window | `Visibility(` |  | number | — |  |
| 17 | 97 | Errors > Get Last Windows Error Code | `WindowsErrorCode(` |  |  | — |  |
| 18 | 98 | Menu Data > Get Text of a Menu Item | `MenuItemText$(` |  | number; number → string | — |  |
| 19 | 99 | Menu Data > Get Checked State of a Menu Item | `MenuItemChecked(` |  | number; number | — |  |
| 20 | 100 | Menu Data > Get Enabled State of a Menu Item | `MenuItemEnabled(` |  | number; number | — |  |
| 21 | 101 | Menu Data > Get Highlighted State of a Menu Item | `MenuItemHighlighted(` |  | number; number | — |  |
| 22 | 102 | Window Data > Get Client Width of Window | `ClientWidth(` |  | number | — |  |
| 23 | 103 | Window Data > Get Client Height of Window | `ClientHeight(` |  | number | — |  |
| 24 | 104 | Window Data > Get Window Handle of Window with Focus | `WindowWithFocus(` |  |  | — |  |
| 25 | 105 | Menu Data > Get Menu Handle of a Window | `WindowMenuHandle(` |  | number | — |  |
| 26 | 106 | Menu Data > Get System Menu Handle of a Window | `SystemMenuHandle(` |  | number | — |  |
| 28 | 108 | Miscellaneous > HIWORD | `HIWORD(` |  | number | — |  |
| 29 | 109 | Miscellaneous > LOWORD | `LOWORD(` |  | number | — |  |
| 30 | 110 | Miscellaneous > Get Environment Variable | `EnvironmentVar$(` |  | string → string | — |  |
