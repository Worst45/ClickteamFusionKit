# Extension fcKernel

- File: `fcKernel.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | conditions > Selected window > Messages > On any message |  |  |  | — |  |
| 1 | -82 | conditions > Selected window > is maximized |  |  |  | — |  |
| 2 | -83 | conditions > Selected window > is minimized |  |  |  | — |  |
| 3 | -84 | conditions > Selected window > do not respond |  |  |  | — |  |
| 4 | -85 | conditions > Selected window > has the input focus |  |  |  | — |  |
| 5 | -86 | conditions > Selected window > is foreground |  |  |  | — |  |
| 6 | -87 | conditions > Mouse > Cursor is confined |  |  |  | — |  |
| 7 | -88 | conditions > Selected window > Messages > On specific message |  |  | numeric expression “Message type” | — |  |
| 8 | -89 | conditions > Selected window > Messages > Handle last message |  |  |  | — |  |
| 9 | -90 | conditions > Selected window > Messages > Handle specific message |  |  | numeric expression “Message type” | — |  |
| 10 | -91 | conditions > OS > Current User is an Admin |  |  |  | — |  |
| 11 | -92 | conditions > Selected window > is visible |  |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | actions > Mouse > Set cursor position |  |  | numeric expression “X position”; numeric expression “Y position” | — |  |
| 1 | 81 | actions > Mouse > Swap mouse button state |  |  | numeric expression “0=Off , 1=On” | — |  |
| 2 | 82 | actions > Window > Select > from a title |  |  | string expression “Window title” | — |  |
| 3 | 83 | actions > Window > Select > Desktop |  |  |  | — |  |
| 4 | 84 | actions > Window > Select > Parent |  |  |  | — |  |
| 5 | 85 | actions > Window > Select > from a specific method |  |  | numeric expression “Window get Method (0=First;1=Last;2=Next;3=Prev;4=Owner;5=Child)” | — |  |
| 6 | 86 | actions > Window > Select > next one |  |  |  | — |  |
| 7 | 87 | actions > Window > Select > previous one |  |  |  | — |  |
| 8 | 88 | actions > Window > Select > Foreground |  |  |  | — |  |
| 9 | 89 | actions > Window > Select > Active |  |  |  | — |  |
| 10 | 90 | actions > Window > Select > from absolute coordinates |  |  | numeric expression “X position”; numeric expression “Y position” | — |  |
| 11 | 91 | actions > OS > exitWindows(Method) |  |  | numeric expression “Method (0=LogOff;1=ShutDown;2=Reboot)” | — |  |
| 12 | 92 | actions > OS > LogOff |  |  |  | — |  |
| 13 | 93 | actions > OS > Shutdown computer |  |  |  | — |  |
| 14 | 94 | actions > OS > Reboot computer |  |  |  | — |  |
| 15 | 95 | actions > OS > Kill Dead process |  |  |  | — |  |
| 16 | 96 | actions > Window > Messages > Post message |  |  | numeric expression “Message type”; numeric expression “value wParam”; numeric expression “value lParam” | — |  |
| 17 | 97 | actions > Window > Alter > Minimize |  |  |  | — |  |
| 18 | 98 | actions > Window > Alter > Enable / Disable |  |  | numeric expression “0=Off , 1=On” | — |  |
| 19 | 99 | actions > Window > Alter > Position and size |  |  | numeric expression “X position”; numeric expression “Y position”; numeric expression “Width”; numeric expression “Height” | — |  |
| 20 | 100 | actions > Window > Alter > Open (when iconic) |  |  |  | — |  |
| 21 | 101 | actions > Mouse > Confine cursor in area |  |  | numeric expression “X position”; numeric expression “Y position”; numeric expression “X position”; numeric expression “Y position” | — |  |
| 22 | 102 | actions > Mouse > Release cursor |  |  |  | — |  |
| 23 | 103 | actions > Window > Alter > Opacity value |  |  | numeric expression “Opacity (0-255)” | — |  |
| 26 | 106 | actions > Window > Alter > Bring to top |  |  |  | — |  |
| 27 | 107 | actions > Window > Alter > Title |  |  | string expression “Window title” | — |  |
| 28 | 108 | actions > OS > Open OS About box |  |  | string expression “Window title”; string expression “Text” | — |  |
| 29 | 109 | actions > Window > Messages > Send message |  |  | numeric expression “Message type”; numeric expression “value wParam”; numeric expression “value lParam” | — |  |
| 30 | 110 | actions > Window > Alter > Window Styles > Border State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 31 | 111 | actions > Window > Alter > Window Styles > Caption State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 32 | 112 | actions > Window > Alter > Window Styles > Dialog Frame State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 33 | 113 | actions > Window > Alter > Window Styles > Maximize Box State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 34 | 114 | actions > Window > Alter > Window Styles > Minimize Box State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 35 | 115 | actions > Window > Alter > Window Styles > System Menu State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 36 | 116 | actions > Window > Alter > Window Styles > Thick Frame State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 37 | 117 | actions > Window > Alter > Window Styles > Custom |  |  | numeric expression “Custom Style (See MSDN for WS_*)” | — |  |
| 38 | 118 | actions > Window > Alter > Window Extended Styles > Accept Files State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 39 | 119 | actions > Window > Alter > Window Extended Styles > Top of TaskBar State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 40 | 120 | actions > Window > Alter > Window Extended Styles > Client Edge State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 41 | 121 | actions > Window > Alter > Window Extended Styles > Context Help State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 42 | 122 | actions > Window > Alter > Window Extended Styles > Dialog Modal Frame State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 43 | 123 | actions > Window > Alter > Window Extended Styles > No Activate State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 44 | 124 | actions > Window > Alter > Window Extended Styles > Static Edge State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 45 | 125 | actions > Window > Alter > Window Extended Styles > Tool Caption State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 46 | 126 | actions > Window > Alter > Window Extended Styles > Top Most State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 47 | 127 | actions > Window > Alter > Window Extended Styles > Edge State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 48 | 128 | actions > Window > Alter > Window Extended Styles > Custom |  |  | numeric expression “Custom Style (See MSDN for WS_*)” | — |  |
| 49 | 129 | actions > Window > Messages > Start intercepting |  |  |  | — |  |
| 50 | 130 | actions > Window > Messages > Stop intercepting |  |  |  | — |  |
| 51 | 131 | actions > Mouse > Lock click state (handicap feature) |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 52 | 132 | actions > Mouse > Sonar state (circles around cursor) |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 53 | 133 | actions > Mouse > Cursor vanish state |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 54 | 134 | actions > Mouse > Cursor shadow state |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 55 | 135 | actions > OS > Set Flat menu state |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 56 | 136 | actions > OS > Set Font smoothing state |  |  | numeric expression “0=Off , 1=On”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 57 | 137 | actions > OS > Set Wallpaper |  |  | string expression “BMP picture file path”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 58 | 138 | actions > Mouse > Set mouse speed |  |  | numeric expression “Mouse speed (0-20)”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 59 | 139 | actions > Mouse > Set cursor trail length |  |  | numeric expression “Number of cursors in trail”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 60 | 140 | actions > Keyboard > Set keyboard repeat delay |  |  | numeric expression “Delay : 0 (approximately 250 ms delay) through 3 (approximately 1 second delay)”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 61 | 141 | actions > Keyboard > Set keyboard repeat speed |  |  | numeric expression “Keyboard repeat speed : 0 (approximately 2.5 repetitions per second) through 31 (approximately 30 repetitions per second)”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 62 | 142 | actions > Mouse > Set double click time |  |  | numeric expression “Milliseconds”; numeric expression “Save setting to user OS profile ? (0=No;1=Yes)” | — |  |
| 63 | 143 | actions > Window > Alter > Flash |  |  | numeric expression “Flash method (0=Stop;1=Caption;2=Tray;3=All)”; numeric expression “Flash timer (0=Default;1=Continuous;2=Continuous since not focused)”; numeric expression “Number of times to flash the window (ignored when continuous)”; numeric expression “Flash rate in milliseconds” | — |  |
| 64 | 144 | actions > Window > Alter > Give focus |  |  |  | — |  |
| 65 | 145 | actions > Window > Select > Current |  |  |  | — |  |
| 66 | 146 | actions > Window > Alter > Position only |  |  | numeric expression “X position”; numeric expression “Y position” | — |  |
| 67 | 147 | actions > Window > Alter > Hide |  |  |  | — |  |
| 68 | 148 | actions > Window > Alter > Show |  |  |  | — |  |
| 69 | 149 | actions > Window > Select > from a class name |  |  | string expression “Window Class Name” | — |  |
| 70 | 150 | actions > Window > Select > from a title and an item ID |  |  | string expression “Window title”; numeric expression “Item ID” | — |  |
| 71 | 151 | actions > Window > Select > from a class name and an item ID |  |  | string expression “Window Class Name”; numeric expression “Item ID” | — |  |
| 72 | 152 | actions > Window > Select > from an item ID in the selected window |  |  | numeric expression “Item ID” | — |  |
| 73 | 153 | actions > Window > Alter > Class Styles > Drop Shadow State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 74 | 154 | actions > Window > Alter > Class Styles > Redraw State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 75 | 155 | actions > Window > Alter > System Boxs and Menu > Remove Close Box and Menu |  |  |  | — |  |
| 76 | 156 | actions > Window > Alter > Transparency State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 77 | 157 | actions > Window > Alter > Redraw Window |  |  |  | — |  |
| 78 | 158 | actions > Window > Alter > Visibility State |  |  | numeric expression “0=Off , 1=On” | — |  |
| 79 | 159 | actions > Window > Alter > System Boxs and Menu > Remove Maximize Box and Menu |  |  |  | — |  |
| 80 | 160 | actions > Window > Alter > System Boxs and Menu > Remove Minimize Box and Menu |  |  |  | — |  |
| 81 | 161 | actions > Window > Alter > Window Extended Styles > RTL Language State |  |  | numeric expression “0=Off , 1=On” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Expressions > Disk > getDiskFreeSpace(path) |  |  | string “Path” | — |  |
| 1 | 81 | Expressions > Disk > getDiskFreeUserSpace(path) |  |  | string “Path” | — |  |
| 2 | 82 | Expressions > Disk > getDiskTotalSpace(path) |  |  | string “Path” | — |  |
| 3 | 83 | Expressions > Disk > getDriveType(path) |  |  | string “Path” | — |  |
| 4 | 84 | Expressions > Window > Message > getMessageWParam() |  |  |  | — |  |
| 5 | 85 | Expressions > Window > Message > getMessageLParam() |  |  |  | — |  |
| 6 | 86 | Expressions > Window > getWindowTitle$() |  |  | → string | — |  |
| 7 | 87 | Expressions > Window > getClientAreaX() |  |  |  | — |  |
| 8 | 88 | Expressions > Window > getClientAreaY() |  |  |  | — |  |
| 9 | 89 | Expressions > Window > getClientAreaWidth() |  |  |  | — |  |
| 10 | 90 | Expressions > Window > getClientAreaHeight() |  |  |  | — |  |
| 11 | 91 | Expressions > Mouse > getCursorPosX() |  |  |  | — |  |
| 12 | 92 | Expressions > Mouse > getCursorPosY() |  |  |  | — |  |
| 13 | 93 | Expressions > Window > getScreenWidth() |  |  |  | — |  |
| 14 | 94 | Expressions > Window > getScreenHeight() |  |  |  | — |  |
| 15 | 95 | Expressions > Window > Message > getMessageType() |  |  |  | — |  |
| 16 | 96 | Expressions > Error > Get last error number |  |  |  | — |  |
| 17 | 97 | Expressions > Error > Get last error string |  |  | → string | — |  |
| 18 | 98 | Expressions > Mouse > Get Click lock state |  |  |  | — |  |
| 19 | 99 | Expressions > Mouse > Get Cursor Sonar state |  |  |  | — |  |
| 20 | 100 | Expressions > Mouse > Get Cursor Vanish state |  |  |  | — |  |
| 21 | 101 | Expressions > Mouse > Get Cursor Shadow state |  |  |  | — |  |
| 22 | 102 | Expressions > OS > Get Flat Menu state |  |  |  | — |  |
| 23 | 103 | Expressions > OS > Get Font Smoothing state |  |  |  | — |  |
| 24 | 104 | Expressions > OS > Get Wallpaper path |  |  | → string | — |  |
| 25 | 105 | Expressions > Mouse > Get Speed |  |  |  | — |  |
| 26 | 106 | Expressions > Mouse > Get Cursor Trail |  |  |  | — |  |
| 27 | 107 | Expressions > Keyboard > Get Keyboard delay |  |  |  | — |  |
| 28 | 108 | Expressions > Keyboard > Get Keyboard repeat speed |  |  |  | — |  |
| 29 | 109 | Expressions > Mouse > Get Double Click time |  |  |  | — |  |
| 30 | 110 | Expressions > OS > Get Version |  |  |  | — |  |
| 31 | 111 | Expressions > Window > getWindowX() |  |  |  | — |  |
| 32 | 112 | Expressions > Window > getWindowY() |  |  |  | — |  |
| 33 | 113 | Expressions > Window > getWindowWidth() |  |  |  | — |  |
| 34 | 114 | Expressions > Window > getWindowHeight() |  |  |  | — |  |
