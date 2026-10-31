# Extension PowerSystem

- File: `PowerSystem.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | File Features > File Extensions > Does Extension Exist? | `Extension <p0> Exists` |  | string expression “Extension” | — |  |
| 1 | -82 | File Features > File Extensions > Is on New File Menu? | `Extension <p0> is on New File Menu` |  | string expression “Extension” | — |  |
| 2 | -83 | File Features > File Extensions > Does Association Exist? | `Extension <p0> Has Association <p1>` |  | string expression “Extension”; string expression “Association” | — |  |
| 3 | -84 | File Features > File Attributes > Is File Read-Only? | `File <p0> is Read-Only` |  | string expression “Full Path to File” | — |  |
| 4 | -85 | File Features > File Attributes > Is File Hidden? | `File <p0> is Hidden` |  | string expression “Full Path to File” | — |  |
| 5 | -86 | File Features > File Attributes > Is File System? | `File <p0> is System` |  | string expression “Full Path to File” | — |  |
| 6 | -87 | Run on Startup > Is Application on List? | `Application <p0> is on Startup List` |  | string expression “Assigned Name” | — |  |
| 7 | -88 | Task Manager > Is Enabled? | `Task Manager is Enabled` |  |  | — |  |
| 8 | -89 | Mouse > Is Cursor In Zone? > On Screen | `Mouse Cursor is in Zone (<p0>, <p1>) - (<p2>, <p3>)` |  | numeric expression “Left”; numeric expression “Top”; numeric expression “Right”; numeric expression “Bottom” | — |  |
| 9 | -90 | Mouse > Is Cursor In Zone? > In Frame | `Mouse Cursor is in Zone (<p0>, <p1>) - (<p2>, <p3>) In Frame` |  | numeric expression “Left (Relative to Frame)”; numeric expression “Top (Relative to Frame)”; numeric expression “Right (Relative to Frame)”; numeric expression “Bottom (Relative to Frame)”; numeric expression “(MMF's XMouse Expression)”; numeric expression “(MMF's YMouse Expression)” | — |  |
| 10 | -91 | Mouse > Is Cursor Confined? | `Mouse Cursor is Confined` |  |  | — |  |
| 11 | -92 | Taskbar > Is Visible? | `Taskbar is Visible` |  |  | — |  |
| 12 | -93 | Taskbar > Is Enabled? | `Taskbar is Enabled` |  |  | — |  |
| 13 | -94 | Taskbar > AutoHide Enabled? | `Taskbar: AutoHide is Enabled` |  |  | — |  |
| 14 | -95 | Taskbar > Topmost Enabled? | `Taskbar: Topmost is Enabled` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File Features > File Extensions > Create/Setup File Type | `Create/Setup File Type <p0> With Description <p1> (Icon: <p2>, <p3>) (New File Menu: <p4>)` |  | string expression “File Extension”; string expression “Extension Description”; string expression “Full Path to Icon File”; numeric expression “Icon Index”; numeric expression “Add to New File Menu? (0=No, 1=Yes)” | — |  |
| 1 | 81 | File Features > File Extensions > Remove File Type | `Remove File Type <p0>` |  | string expression “File Extension” | — |  |
| 2 | 82 | File Features > File Extensions > Associations > Add Association | `Add Association <p0> for Extension <p1> (File: <p2>)` |  | string expression “Association Name”; string expression “File Extension”; string expression “Full Path to Application to Associate With Extension” | — |  |
| 3 | 83 | File Features > File Extensions > Associations > Remove Association | `Remove Association <p0> for Extension <p1>` |  | string expression “Association Name”; string expression “File Extension” | — |  |
| 4 | 84 | File Features > File Attributes > Set File Attributes | `Set Attributes for File <p0> (Read-Only: <p1>, Hidden: <p2>, System: <p3>)` |  | string expression “Full Path to File”; numeric expression “Read-Only? (0=No, 1=Yes)”; numeric expression “Hidden? (0=No, 1=Yes)”; numeric expression “System? (0=No, 1=Yes)” | — |  |
| 5 | 85 | Run on Startup > Add to Startup List | `Add <p0> to Startup List (Path: <p1>)` |  | string expression “Name to Assign Application”; string expression “Full Path to Application” | — |  |
| 6 | 86 | Run on Startup > Remove from Startup List | `Remove <p0> from Startup List` |  | string expression “Name Assigned to Application” | — |  |
| 7 | 87 | Task Manager > Enable | `Enable the Windows Task Manager` |  |  | — |  |
| 8 | 88 | Task Manager > Disable | `Disable the Windows Task Manager` |  |  | — |  |
| 9 | 89 | Clipboard > Send Image to Clipboard | `Send Image <p0> to Clipboard` |  | string expression “Full Path to Bitmap Image to Send” | — |  |
| 10 | 90 | Mouse > Set Cursor Position > On Screen | `Set Cursor Position to (<p0>, <p1>)` |  | numeric expression “X Position”; numeric expression “Y Position” | — |  |
| 11 | 91 | Mouse > Set Cursor Position > In Frame | `Set Cursor Position in Frame to (<p0>, <p1>)` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “(MMF's XMouse Expression)”; numeric expression “(MMF's YMouse Expression)” | — |  |
| 12 | 92 | Mouse > Set Cursor X Position | `Set Cursor X Position to <p0>` |  | numeric expression “X Position” | — |  |
| 13 | 93 | Mouse > Set Cursor Y Position | `Set Cursor Y Position to <p0>` |  | numeric expression “Y Position” | — |  |
| 14 | 94 | Mouse > Nudge Cursor | `Nudge Cursor Horizontally <p0> Pixels and Vertically <p1> Pixels` |  | numeric expression “Pixels to Nudge (Horizontal)”; numeric expression “Pixels to Nudge (Vertical)” | — |  |
| 15 | 95 | Mouse > Confine Cursor | `Confine Cursor from (<p0>, <p1>) to (<p2>, <p3>)` |  | numeric expression “Left Boundry”; numeric expression “Top Boundry”; numeric expression “Right Boundry”; numeric expression “Bottom Boundry” | — |  |
| 16 | 96 | Mouse > Release Cursor | `Release Confined Cursor` |  |  | — |  |
| 17 | 97 | Taskbar > Hide/Show | `Hide/Show Taskbar (<p0>)` |  | numeric expression “Enter 0 to Hide, 1 to Show” | — |  |
| 18 | 98 | Taskbar > Enable/Disable | `Enable/Disable Taskbar (<p0>)` |  | numeric expression “Enter 0 to Disable, 1 to Enable” | — |  |
| 19 | 99 | Taskbar > Set State | `Set Taskbar State to <p0>, <p1>` |  | numeric expression “Use AutoHide? (0=No, 1=Yes)”; numeric expression “Always on Top? (0=No, 1=Yes)” | — |  |
| 20 | 100 | Shutdown > Shutdown (Standard) | `Shutdown Computer With Message <p0>` |  | string expression “Message to Display”; numeric expression “Length of Grace Period in Seconds”; numeric expression “Reboot After Shutdown? (0=No, 1=Yes)”; numeric expression “Force Applications to Close? (0=No, 1=Yes)” | — |  |
| 21 | 101 | Shutdown > Shutdown (Remote) | `Shutdown Computer <p0> With Message <p1>` |  | string expression “Network Name of Computer”; string expression “Message to Display”; numeric expression “Length of Grace Period in Seconds”; numeric expression “Reboot After Shutdown? (0=No, 1=Yes)”; numeric expression “Force Applications to Close? (0=No, 1=Yes)” | — |  |
| 22 | 102 | Shutdown > Abort Shutdown | `Abort Shutdown` |  |  | — |  |
| 23 | 103 | Shutdown > Disallow Shutdown | `Disallow Shutdown` |  |  | — |  |
| 24 | 104 | Shutdown > Allow Shutdown | `Allow Shutdown` |  |  | — |  |
| 25 | 105 | Recycle Bin > Empty Specific Recycle Bin | `Empty Recycle Bin with Root Path <p0>` |  | string expression “Root Path of Recycle Bin”; numeric expression “Do Not Confirm? (0=No, 1=Yes)”; numeric expression “Do Not Show Progress? (0=No, 1=Yes)”; numeric expression “Do Not Play Sound at End? (0=No, 1=Yes)”; numeric expression “Use Application Window for Dialogs? (0=No, 1=Yes)” | — |  |
| 26 | 106 | Recycle Bin > Empty All Recycle Bins | `Empty all Recycle Bins` |  | numeric expression “Do Not Confirm? (0=No, 1=Yes)”; numeric expression “Do Not Show Progress? (0=No, 1=Yes)”; numeric expression “Do Not Play Sound at End? (0=No, 1=Yes)”; numeric expression “Use Application Window for Dialogs? (0=No, 1=Yes)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File Features > File Extensions > Extensions > Extension Description | `ExtDesc$(` |  | string “Extension” → string | — |  |
| 1 | 81 | File Features > File Extensions > Extensions > Extension Icon Info | `ExtIcon$(` |  | string “Extension” → string | — |  |
| 2 | 82 | File Features > File Extensions > Associations > Association File | `ExtAssocFile$(` |  | string “Extension”; string “Association” → string | — |  |
| 3 | 83 | File Features > File Extensions > Associations > Get Association At | `ExtAssocAt$(` |  | string “Extension”; number “Index” → string | — |  |
| 4 | 84 | File Features > File Extensions > Associations > Number of Associations | `ExtAssocNumber(` |  | string “Extension” | — |  |
| 5 | 85 | Run on Startup > Application File Path | `StartupApp$(` |  | string “Assigned Name” → string | — |  |
| 6 | 86 | Run on Startup > Get Application At | `StartupAppAt$(` |  | number “Index” → string | — |  |
| 7 | 87 | Run on Startup > Number of Applications | `StartupAppNumber(` |  |  | — |  |
| 8 | 88 | Mouse > Cursor X Position | `CursorX(` |  |  | — |  |
| 9 | 89 | Mouse > Cursor Y Position | `CursorY(` |  |  | — |  |
| 10 | 90 | Mouse > Left Boundry | `CursorBoundLeft(` |  |  | — |  |
| 11 | 91 | Mouse > Top Boundry | `CursorBoundTop(` |  |  | — |  |
| 12 | 92 | Mouse > Right Boundry | `CursorBoundRight(` |  |  | — |  |
| 13 | 93 | Mouse > Bottom Boundry | `CursorBoundBottom(` |  |  | — |  |
| 14 | 94 | Appearance > Desktop Wallpaper | `Wallpaper$(` |  |  | — |  |
| 15 | 95 | Appearance > Screensaver File | `ScrSaver$(` |  |  | — |  |
| 16 | 96 | Appearance > Screen Width | `ScreenWidth(` |  |  | — |  |
| 17 | 97 | Appearance > Screen Height | `ScreenHeight(` |  |  | — |  |
| 18 | 98 | Taskbar > Left Edge | `TskbarLeft(` |  |  | — |  |
| 19 | 99 | Taskbar > Top Edge | `TskbarTop(` |  |  | — |  |
| 20 | 100 | Taskbar > Right Edge | `TskbarRight(` |  |  | — |  |
| 21 | 101 | Taskbar > Bottom Edge | `TskbarBottom(` |  |  | — |  |
| 22 | 102 | Taskbar > Taskbar Width | `TskbarWidth(` |  |  | — |  |
| 23 | 103 | Taskbar > Taskbar Height | `TskbarHeight(` |  |  | — |  |
| 24 | 104 | Taskbar > AutoHide State | `TskbarAutoHide(` |  |  | — |  |
| 25 | 105 | Taskbar > Topmost State | `TskbarTopmost(` |  |  | — |  |
| 26 | 106 | Recycle Bin > Number of Items | `RBNumItems(` |  | string “Root Path” | — |  |
| 27 | 107 | Recycle Bin > Total Size | `RBTotalSize(` |  | string “Root Path” | — |  |
| 28 | 108 | Error String | `Error$(` |  | → string | — |  |
