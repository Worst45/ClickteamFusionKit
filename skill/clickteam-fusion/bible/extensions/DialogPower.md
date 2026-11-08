# Extension DialogPower

- File: `DialogPower.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Success > Color Chooser | `<object>: On Color Chooser <p0> Success` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 1 | -82 | On Success > Font Dialog | `<object>: On Font Dialog <p0> Success` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 2 | -83 | On Success > Icon Picker | `<object>: On Icon Picker <p0> Success` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 3 | -84 | On Success > Open File Dialog | `<object>: On Open File Dialog <p0> Success` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 4 | -85 | On Success > Save File Dialog | `<object>: On Save File Dialog <p0> Success` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 5 | -86 | On Cancel > Color Chooser | `<object>: On Color Chooser <p0> Cancel` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 6 | -87 | On Cancel > Font Dialog | `<object>: On Font Dialog <p0> Cancel` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 7 | -88 | On Cancel > Icon Picker | `<object>: On Icon Picker <p0> Cancel` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 8 | -89 | On Cancel > Open File Dialog | `<object>: On Open File Dialog <p0> Cancel` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 9 | -90 | On Cancel > Save File Dialog | `<object>: On Save File Dialog <p0> Cancel` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 10 | -91 | On Close > MessageBox | `<object>: On MessageBox <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 11 | -92 | On Close > Color Chooser | `<object>: On Color Chooser <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 12 | -93 | On Close > Font Dialog | `<object>: On Font Dialog <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 13 | -94 | On Close > Icon Picker | `<object>: On Icon Picker <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 14 | -95 | On Close > AboutBox | `<object>: On AboutBox <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 15 | -96 | On Close > Open File Dialog | `<object>: On Open File Dialog <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 16 | -97 | On Close > Save File Dialog | `<object>: On Save File Dialog <p0> Close` |  | numeric expression “ID (Enter -1 for Any ID)” |
| 17 | -98 | Dialog Info > Font Dialog > Bold Selected? | `<object>: Font Dialog: Bold Selected?` |  |  |
| 18 | -99 | Dialog Info > Font Dialog > Italic Selected? | `<object>: Font Dialog: Italic Selected?` |  |  |
| 19 | -100 | Dialog Info > Font Dialog > Underline Selected? | `<object>: Font Dialog: Underline Selected?` |  |  |
| 20 | -101 | Dialog Info > Font Dialog > Strikeout Selected? | `<object>: Font Dialog: Strikeout Selected?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Show Dialog > Show MessageBox | `Show MessageBox Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; string expression “Text”; string expression “Title”; numeric expression “Buttons (0=OK, 1=OK-Cancel, 2=Yes-No, 3=Yes-No-Cancel, 4=Retry-Cancel, 5=Abort-Retry-Ignore, 6=Cancel-TryAgain-Continue)”; numeric expression “Icon (0=None, 1=Exclamation, 2=Information, 3=Question, 4=Error)”; numeric expression “Default Button (1-4)”; numeric expression “Right-to-Left Reading? (0=No, 1=Yes)”; numeric expression “Right-Justified? (0=No, 1=Yes)”; numeric expression “Modality (0=Application, 1=Task, 2=System)” |
| 1 | 81 | Show Dialog > Show Color Chooser | `Show Color Chooser Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; numeric expression “Initial Color (Use GetRGB Function)”; numeric expression “Define Custom Colors? (-1=Disabled, 0=Closed at Start, 1=Open at Start)” |
| 2 | 82 | Show Dialog > Show Font Dialog | `Show Font Dialog Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; numeric expression “Initial Text Color (Use GetRGB Function)”; numeric expression “Minimum Size (Size Limit Only)”; numeric expression “Maximum Size (Size Limit Only)”; numeric expression “Use Effects? (0=No, 1=Yes)”; numeric expression “Use Size Limits? (0=No, 1=Yes)”; numeric expression “Show Only TrueType Fonts? (0=No, 1=Yes)”; numeric expression “Screen Fonts? (0=No, 1=Yes)”; numeric expression “Printer Fonts? (0=No, 1=Yes)”; numeric expression “Show Scripts? (0=No, 1=Yes)” (unreliable parameters) |
| 3 | 83 | Show Dialog > Show Icon Picker | `Show Icon Picker Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; numeric expression “Initial Selection Index (0-Based)”; string expression “Full Path to Initial Resource File” |
| 4 | 84 | Show Dialog > Show AboutBox | `Show AboutBox Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; string expression “Text of Title and Box (See Help for More)”; string expression “Other Stuff” |
| 5 | 85 | Show Dialog > Show Open File Dialog | `Show Open File Dialog Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; numeric expression “Allow Multi-Select? (0=No, 1=Yes)”; numeric expression “Path Must Exist? (0=No, 1=Yes)”; numeric expression “File Must Exist? (0=No, 1=Yes)”; numeric expression “Hide Read-Only Checkbox? (0=No, 1=Yes)”; numeric expression “Get Shortcut Paths? (0=No, 1=Yes)”; numeric expression “Show Hidden and System Files? (0=No, 1=Yes)”; numeric expression “Create Prompt? (0=No, 1=Yes)”; numeric expression “Don't Add to Recent Documents? (0=No, 1=Yes)”; numeric expression “No Network Button? (0=No, 1=Yes)”; numeric expression “Display Help Button? (0=No, 1=Yes)” |
| 6 | 86 | Show Dialog > Show Save File Dialog | `Show Save File Dialog Using Window Handle <p0>` |  | numeric expression “Window Handle of Parent Window”; numeric expression “ID to use (Positive Integer)”; numeric expression “Allow Multi-Select? (0=No, 1=Yes)”; numeric expression “Path Must Exist? (0=No, 1=Yes)”; numeric expression “File Must Exist? (0=No, 1=Yes)”; numeric expression “Hide Read-Only Checkbox? (0=No, 1=Yes)”; numeric expression “Get Shortcut Paths? (0=No, 1=Yes)”; numeric expression “Show Hidden and System Files? (0=No, 1=Yes)”; numeric expression “Overwrite File Prompt? (0=No, 1=Yes)”; numeric expression “Don't Add to Recent Documents? (0=No, 1=Yes)”; numeric expression “No Network Button? (0=No, 1=Yes)”; numeric expression “Display Help Button? (0=No, 1=Yes)” |
| 7 | 87 | Dialog Info > Color Chooser > Set Custom Color | `Color Chooser: Set Custom Color <p0> to <p1>` |  | numeric expression “Index of Custom Color (0-15)”; numeric expression “Color (Use GetRGB Function)” |
| 8 | 88 | Dialog Info > Color Chooser > Reset Custom Colors | `Color Chooser: Reset Custom Colors` |  |  |
| 9 | 89 | Dialog Info > Font Dialog > Set TypeFace Name | `Font Dialog: Set TypeFace Name to <p0>` |  | string expression “TypeFace Name” |
| 10 | 90 | Dialog Info > Font Dialog > Set Character Set | `Font Dialog: Set Character Set to <p0>` |  | numeric expression “Character Set (See Expressions)” |
| 11 | 91 | Dialog Info > Font Dialog > Set Bold State | `Font Dialog: Set Bold State to <p0>` |  | numeric expression “Bold? (0=No, 1=Yes)” |
| 12 | 92 | Dialog Info > Font Dialog > Set Italic State | `Font Dialog: Set Italic State to <p0>` |  | numeric expression “Italic? (0=No, 1=Yes)” |
| 13 | 93 | Dialog Info > Font Dialog > Set Underline State | `Font Dialog: Set Underline State to <p0>` |  | numeric expression “Underline? (0=No, 1=Yes)” |
| 14 | 94 | Dialog Info > Font Dialog > Set Strikeout State | `Font Dialog: Set Strikeout State to <p0>` |  | numeric expression “Strikeout? (0=No, 1=Yes)” |
| 15 | 95 | Dialog Info > Font Dialog > Reset Information | `Font Dialog: Reset Saved Information` |  |  |
| 16 | 96 | Dialog Info > File Dialog > Set Dialog Title | `File Dialog: Set Dialog Title to <p0>` |  | string expression “Title” |
| 17 | 97 | Dialog Info > File Dialog > Set Initial Directory | `File Dialog: Set Initial Directory to <p0>` |  | string expression “Folder Path of Initial Directory” |
| 18 | 98 | Dialog Info > File Dialog > Set Default Extension | `File Dialog: Set Default Extension to <p0>` |  | string expression “Default Extension (No Dot)” |
| 19 | 99 | Dialog Info > File Dialog > Add Extension Filter | `File Dialog: Add Filter <p0> for <p1>` |  | string expression “Filter Description”; string expression “Extensions (*.xxx;*.yyy;*.zzz)” |
| 20 | 100 | Dialog Info > File Dialog > Clear Extension Filters | `File Dialog: Clear Filter List` |  |  |
| 21 | 101 | Dialog Info > File Dialog > Set Default Filter | `File Dialog: Set Default Filter Index to <p0>` |  | numeric expression “Index (1-Based)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Window Handles > Main | `MainHwnd(` |  |  |
| 1 | 81 | Window Handles > Desktop | `DesktopHwnd(` |  |  |
| 2 | 82 | Window Handles > Taskbar | `TaskbarHwnd(` |  |  |
| 3 | 83 | Window Handles > Foreground | `FrgrndHwnd(` |  |  |
| 4 | 84 | Window Handles > Highest | `HighestHwnd(` |  | number “Window Handle” |
| 5 | 85 | Window Handles > Lowest | `LowestHwnd(` |  | number “Window Handle” |
| 6 | 86 | Window Handles > Owner | `OwnerHwnd(` |  | number “Window Handle” |
| 7 | 87 | Window Handles > Child | `ChildHwnd(` |  | number “Window Handle” |
| 8 | 88 | Window Handles > Next | `NextHwnd(` |  | number “Window Handle” |
| 9 | 89 | Window Handles > Previous | `PrevHwnd(` |  | number “Window Handle” |
| 10 | 90 | Window Handles > Enabled Popup | `EnPopupHwnd(` |  | number “Window Handle” |
| 11 | 91 | Returned Values > Returned Number 1 | `RetNumber1(` |  |  |
| 12 | 92 | Returned Values > Returned Number 2 | `RetNumber2(` |  |  |
| 13 | 93 | Returned Values > Returned String 1 | `RetString1$(` |  | → string |
| 14 | 94 | Returned Values > Returned String 2 | `RetString2$(` |  | → string |
| 15 | 95 | Dialog Info > MessageBox > OK Button | `MBOK(` |  |  |
| 16 | 96 | Dialog Info > MessageBox > Cancel Button | `MBCancel(` |  |  |
| 17 | 97 | Dialog Info > MessageBox > Yes Button | `MBYes(` |  |  |
| 18 | 98 | Dialog Info > MessageBox > No Button | `MBNo(` |  |  |
| 19 | 99 | Dialog Info > MessageBox > Retry Button | `MBRetry(` |  |  |
| 20 | 100 | Dialog Info > MessageBox > Abort Button | `MBAbort(` |  |  |
| 21 | 101 | Dialog Info > MessageBox > Ignore Button | `MBIgnore(` |  |  |
| 22 | 102 | Dialog Info > MessageBox > Try Again Button | `MBTryAgain(` |  |  |
| 23 | 103 | Dialog Info > MessageBox > Continue Button | `MBContinue(` |  |  |
| 24 | 104 | Dialog Info > Color Chooser > Get Custom Color | `CCCustColor(` |  | number “Index (0-15)” |
| 25 | 105 | Dialog Info > Font Dialog > TypeFace Name | `FDTypeFace$(` |  | → string |
| 26 | 106 | Dialog Info > Font Dialog > Character Set | `FDCharSet(` |  |  |
| 27 | 107 | Dialog Info > Font Dialog > Bold State | `FDBold(` |  |  |
| 28 | 108 | Dialog Info > Font Dialog > Italic State | `FDItalic(` |  |  |
| 29 | 109 | Dialog Info > Font Dialog > Underline State | `FDUndrln(` |  |  |
| 30 | 110 | Dialog Info > Font Dialog > Strikeout State | `FDStrOut(` |  |  |
| 31 | 111 | Dialog Info > Font Dialog > Character Sets > ANSI (Standard) | `FDCharANSI(` |  |  |
| 32 | 112 | Dialog Info > Font Dialog > Character Sets > Baltic | `FDCharBaltic(` |  |  |
| 33 | 113 | Dialog Info > Font Dialog > Character Sets > Chinese | `FDCharChinese(` |  |  |
| 34 | 114 | Dialog Info > Font Dialog > Character Sets > East Europe | `FDCharEuro(` |  |  |
| 35 | 115 | Dialog Info > Font Dialog > Character Sets > Great Britain | `FDCharGrBrit(` |  |  |
| 36 | 116 | Dialog Info > Font Dialog > Character Sets > Greek | `FDCharGreek(` |  |  |
| 37 | 117 | Dialog Info > Font Dialog > Character Sets > Hangul | `FDCharHangul(` |  |  |
| 38 | 118 | Dialog Info > Font Dialog > Character Sets > Mac | `FDCharMac(` |  |  |
| 39 | 119 | Dialog Info > Font Dialog > Character Sets > OEM | `FDCharOEM(` |  |  |
| 40 | 120 | Dialog Info > Font Dialog > Character Sets > Russian | `FDCharRuss(` |  |  |
| 41 | 121 | Dialog Info > Font Dialog > Character Sets > Shift | `FDCharShift(` |  |  |
| 42 | 122 | Dialog Info > Font Dialog > Character Sets > Symbol | `FDCharSymb(` |  |  |
| 43 | 123 | Dialog Info > Font Dialog > Character Sets > Turkish | `FDCharTurk(` |  |  |
| 44 | 124 | Dialog Info > Font Dialog > Character Sets > Vietnamese | `FDCharViet(` |  |  |
| 45 | 125 | ID of Last Dialog | `LastID(` |  |  |
