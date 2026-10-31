# Extension PowerSystem

- Fichier : `PowerSystem.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | File Features > File Extensions > Does Extension Exist? | `Extension <p0> Exists` |  | expression chaîne « Extension » | — |  |
| 1 | -82 | File Features > File Extensions > Is on New File Menu? | `Extension <p0> is on New File Menu` |  | expression chaîne « Extension » | — |  |
| 2 | -83 | File Features > File Extensions > Does Association Exist? | `Extension <p0> Has Association <p1>` |  | expression chaîne « Extension » ; expression chaîne « Association » | — |  |
| 3 | -84 | File Features > File Attributes > Is File Read-Only? | `File <p0> is Read-Only` |  | expression chaîne « Full Path to File » | — |  |
| 4 | -85 | File Features > File Attributes > Is File Hidden? | `File <p0> is Hidden` |  | expression chaîne « Full Path to File » | — |  |
| 5 | -86 | File Features > File Attributes > Is File System? | `File <p0> is System` |  | expression chaîne « Full Path to File » | — |  |
| 6 | -87 | Run on Startup > Is Application on List? | `Application <p0> is on Startup List` |  | expression chaîne « Assigned Name » | — |  |
| 7 | -88 | Task Manager > Is Enabled? | `Task Manager is Enabled` |  |  | — |  |
| 8 | -89 | Mouse > Is Cursor In Zone? > On Screen | `Mouse Cursor is in Zone (<p0>, <p1>) - (<p2>, <p3>)` |  | expression numérique « Left » ; expression numérique « Top » ; expression numérique « Right » ; expression numérique « Bottom » | — |  |
| 9 | -90 | Mouse > Is Cursor In Zone? > In Frame | `Mouse Cursor is in Zone (<p0>, <p1>) - (<p2>, <p3>) In Frame` |  | expression numérique « Left (Relative to Frame) » ; expression numérique « Top (Relative to Frame) » ; expression numérique « Right (Relative to Frame) » ; expression numérique « Bottom (Relative to Frame) » ; expression numérique « (MMF's XMouse Expression) » ; expression numérique « (MMF's YMouse Expression) » | — |  |
| 10 | -91 | Mouse > Is Cursor Confined? | `Mouse Cursor is Confined` |  |  | — |  |
| 11 | -92 | Taskbar > Is Visible? | `Taskbar is Visible` |  |  | — |  |
| 12 | -93 | Taskbar > Is Enabled? | `Taskbar is Enabled` |  |  | — |  |
| 13 | -94 | Taskbar > AutoHide Enabled? | `Taskbar: AutoHide is Enabled` |  |  | — |  |
| 14 | -95 | Taskbar > Topmost Enabled? | `Taskbar: Topmost is Enabled` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File Features > File Extensions > Create/Setup File Type | `Create/Setup File Type <p0> With Description <p1> (Icon: <p2>, <p3>) (New File Menu: <p4>)` |  | expression chaîne « File Extension » ; expression chaîne « Extension Description » ; expression chaîne « Full Path to Icon File » ; expression numérique « Icon Index » ; expression numérique « Add to New File Menu? (0=No, 1=Yes) » | — |  |
| 1 | 81 | File Features > File Extensions > Remove File Type | `Remove File Type <p0>` |  | expression chaîne « File Extension » | — |  |
| 2 | 82 | File Features > File Extensions > Associations > Add Association | `Add Association <p0> for Extension <p1> (File: <p2>)` |  | expression chaîne « Association Name » ; expression chaîne « File Extension » ; expression chaîne « Full Path to Application to Associate With Extension » | — |  |
| 3 | 83 | File Features > File Extensions > Associations > Remove Association | `Remove Association <p0> for Extension <p1>` |  | expression chaîne « Association Name » ; expression chaîne « File Extension » | — |  |
| 4 | 84 | File Features > File Attributes > Set File Attributes | `Set Attributes for File <p0> (Read-Only: <p1>, Hidden: <p2>, System: <p3>)` |  | expression chaîne « Full Path to File » ; expression numérique « Read-Only? (0=No, 1=Yes) » ; expression numérique « Hidden? (0=No, 1=Yes) » ; expression numérique « System? (0=No, 1=Yes) » | — |  |
| 5 | 85 | Run on Startup > Add to Startup List | `Add <p0> to Startup List (Path: <p1>)` |  | expression chaîne « Name to Assign Application » ; expression chaîne « Full Path to Application » | — |  |
| 6 | 86 | Run on Startup > Remove from Startup List | `Remove <p0> from Startup List` |  | expression chaîne « Name Assigned to Application » | — |  |
| 7 | 87 | Task Manager > Enable | `Enable the Windows Task Manager` |  |  | — |  |
| 8 | 88 | Task Manager > Disable | `Disable the Windows Task Manager` |  |  | — |  |
| 9 | 89 | Clipboard > Send Image to Clipboard | `Send Image <p0> to Clipboard` |  | expression chaîne « Full Path to Bitmap Image to Send » | — |  |
| 10 | 90 | Mouse > Set Cursor Position > On Screen | `Set Cursor Position to (<p0>, <p1>)` |  | expression numérique « X Position » ; expression numérique « Y Position » | — |  |
| 11 | 91 | Mouse > Set Cursor Position > In Frame | `Set Cursor Position in Frame to (<p0>, <p1>)` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « (MMF's XMouse Expression) » ; expression numérique « (MMF's YMouse Expression) » | — |  |
| 12 | 92 | Mouse > Set Cursor X Position | `Set Cursor X Position to <p0>` |  | expression numérique « X Position » | — |  |
| 13 | 93 | Mouse > Set Cursor Y Position | `Set Cursor Y Position to <p0>` |  | expression numérique « Y Position » | — |  |
| 14 | 94 | Mouse > Nudge Cursor | `Nudge Cursor Horizontally <p0> Pixels and Vertically <p1> Pixels` |  | expression numérique « Pixels to Nudge (Horizontal) » ; expression numérique « Pixels to Nudge (Vertical) » | — |  |
| 15 | 95 | Mouse > Confine Cursor | `Confine Cursor from (<p0>, <p1>) to (<p2>, <p3>)` |  | expression numérique « Left Boundry » ; expression numérique « Top Boundry » ; expression numérique « Right Boundry » ; expression numérique « Bottom Boundry » | — |  |
| 16 | 96 | Mouse > Release Cursor | `Release Confined Cursor` |  |  | — |  |
| 17 | 97 | Taskbar > Hide/Show | `Hide/Show Taskbar (<p0>)` |  | expression numérique « Enter 0 to Hide, 1 to Show » | — |  |
| 18 | 98 | Taskbar > Enable/Disable | `Enable/Disable Taskbar (<p0>)` |  | expression numérique « Enter 0 to Disable, 1 to Enable » | — |  |
| 19 | 99 | Taskbar > Set State | `Set Taskbar State to <p0>, <p1>` |  | expression numérique « Use AutoHide? (0=No, 1=Yes) » ; expression numérique « Always on Top? (0=No, 1=Yes) » | — |  |
| 20 | 100 | Shutdown > Shutdown (Standard) | `Shutdown Computer With Message <p0>` |  | expression chaîne « Message to Display » ; expression numérique « Length of Grace Period in Seconds » ; expression numérique « Reboot After Shutdown? (0=No, 1=Yes) » ; expression numérique « Force Applications to Close? (0=No, 1=Yes) » | — |  |
| 21 | 101 | Shutdown > Shutdown (Remote) | `Shutdown Computer <p0> With Message <p1>` |  | expression chaîne « Network Name of Computer » ; expression chaîne « Message to Display » ; expression numérique « Length of Grace Period in Seconds » ; expression numérique « Reboot After Shutdown? (0=No, 1=Yes) » ; expression numérique « Force Applications to Close? (0=No, 1=Yes) » | — |  |
| 22 | 102 | Shutdown > Abort Shutdown | `Abort Shutdown` |  |  | — |  |
| 23 | 103 | Shutdown > Disallow Shutdown | `Disallow Shutdown` |  |  | — |  |
| 24 | 104 | Shutdown > Allow Shutdown | `Allow Shutdown` |  |  | — |  |
| 25 | 105 | Recycle Bin > Empty Specific Recycle Bin | `Empty Recycle Bin with Root Path <p0>` |  | expression chaîne « Root Path of Recycle Bin » ; expression numérique « Do Not Confirm? (0=No, 1=Yes) » ; expression numérique « Do Not Show Progress? (0=No, 1=Yes) » ; expression numérique « Do Not Play Sound at End? (0=No, 1=Yes) » ; expression numérique « Use Application Window for Dialogs? (0=No, 1=Yes) » | — |  |
| 26 | 106 | Recycle Bin > Empty All Recycle Bins | `Empty all Recycle Bins` |  | expression numérique « Do Not Confirm? (0=No, 1=Yes) » ; expression numérique « Do Not Show Progress? (0=No, 1=Yes) » ; expression numérique « Do Not Play Sound at End? (0=No, 1=Yes) » ; expression numérique « Use Application Window for Dialogs? (0=No, 1=Yes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File Features > File Extensions > Extensions > Extension Description | `ExtDesc$(` |  | chaîne « Extension » → chaîne | — |  |
| 1 | 81 | File Features > File Extensions > Extensions > Extension Icon Info | `ExtIcon$(` |  | chaîne « Extension » → chaîne | — |  |
| 2 | 82 | File Features > File Extensions > Associations > Association File | `ExtAssocFile$(` |  | chaîne « Extension » ; chaîne « Association » → chaîne | — |  |
| 3 | 83 | File Features > File Extensions > Associations > Get Association At | `ExtAssocAt$(` |  | chaîne « Extension » ; nombre « Index » → chaîne | — |  |
| 4 | 84 | File Features > File Extensions > Associations > Number of Associations | `ExtAssocNumber(` |  | chaîne « Extension » | — |  |
| 5 | 85 | Run on Startup > Application File Path | `StartupApp$(` |  | chaîne « Assigned Name » → chaîne | — |  |
| 6 | 86 | Run on Startup > Get Application At | `StartupAppAt$(` |  | nombre « Index » → chaîne | — |  |
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
| 26 | 106 | Recycle Bin > Number of Items | `RBNumItems(` |  | chaîne « Root Path » | — |  |
| 27 | 107 | Recycle Bin > Total Size | `RBTotalSize(` |  | chaîne « Root Path » | — |  |
| 28 | 108 | Error String | `Error$(` |  | → chaîne | — |  |
