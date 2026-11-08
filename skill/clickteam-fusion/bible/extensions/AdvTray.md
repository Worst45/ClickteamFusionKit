# Extension AdvTray

- File: `AdvTray.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | User Clicks a Tray Icon > With Left Button | `<object>: User Left-Clicks on Icon <p0>` |  | numeric expression “ID of Icon (Enter -1 for Any Icon)” |
| 1 | -82 | User Clicks a Tray Icon > With Middle Button | `<object>: User Middle-Clicks on Icon <p0>` |  | numeric expression “ID of Icon (Enter -1 for Any Icon)” |
| 2 | -83 | User Clicks a Tray Icon > With Right Button | `<object>: User Right-Clicks on Icon <p0>` |  | numeric expression “ID of Icon (Enter -1 for Any Icon)” |
| 3 | -84 | Mouse Cursor is Over Icon | `<object>: Mouse Cursor is Over Icon <p0>` |  | numeric expression “ID of Icon (Enter -1 for Any Icon)” |
| 4 | -85 | User Clicks a Balloon | `<object>: User Clicks a Balloon on Icon <p0>` |  | numeric expression “ID of Icon” |
| 5 | -86 | On Error | `<object>: On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add Icon | `Create a New Tray Icon with ID <p0>` |  | numeric expression “ID of Icon” |
| 1 | 81 | Remove Icon | `Remove Icon <p0>` |  | numeric expression “ID of Icon” |
| 2 | 82 | Icon Images > Application Icon > Load Application Icon | `Tray Icon <p0>: Set Icon Image to Application Icon` |  | numeric expression “ID of Icon” |
| 3 | 83 | Icon Images > System Icons > Load Information Icon | `Tray Icon <p0>: Set Icon Image to Information Icon` |  | numeric expression “ID of Icon” |
| 4 | 84 | Icon Images > System Icons > Load Exclamation Icon | `Tray Icon <p0>: Set Icon Image to Exclamation Icon` |  | numeric expression “ID of Icon” |
| 5 | 85 | Icon Images > System Icons > Load Question Icon | `Tray Icon <p0>: Set Icon Image to Question Icon` |  | numeric expression “ID of Icon” |
| 6 | 86 | Icon Images > System Icons > Load Error Icon | `Tray Icon <p0>: Set Icon Image to Error Icon` |  | numeric expression “ID of Icon” |
| 7 | 87 | Icon Images > System Icons > Load WinLogo Icon | `Tray Icon <p0>: Set Icon Image to Windows Logo Icon` |  | numeric expression “ID of Icon” |
| 8 | 88 | Icon Images > System Icons > Load Default EXE Icon | `Tray Icon <p0>: Set Icon Image to Default EXE Icon` |  | numeric expression “ID of Icon” |
| 9 | 89 | Icon Images > Icon Resources > Load Icon From File | `Tray Icon <p0>: Load Icon <p2> From <p1>` |  | numeric expression “ID of Icon”; file name “EXE/DLL/ICO File”; numeric expression “Icon Index” |
| 10 | 90 | Icon Images > Icon Resources > Load Icon From Overlay | `Tray Icon <p0>: Load From Overlay <p1>` |  | numeric expression “ID of Icon”; numeric expression “Fixed Value of Overlay Object”; color “Transparent Color” |
| 11 | 91 | Icon Images > Remove Icon | `Remove Icon Image From Tray Icon <p0>` |  | numeric expression “ID of Icon” |
| 12 | 92 | Tooltip > Set Tooltip Text | `Set Tooltip Text of Icon <p0> to <p1>` |  | numeric expression “ID of Icon”; string expression “Tooltip Text” |
| 13 | 93 | Tooltip > Remove Tooltip | `Remove Tooltip from Icon <p0>` |  | numeric expression “ID of Icon” |
| 14 | 94 | Balloons > Show Balloon Notification | `Show a Balloon Notification on Icon <p0>` |  | numeric expression “ID of Icon”; string expression “Balloon Title”; string expression “Balloon Text”; numeric expression “Icon Image (0=None, 1=Information, 2=Warning, 3=Error, 4=Same as Tray Icon)” |
| 15 | 95 | Balloons > Dismiss Balloon | `Dismiss Balloon of Icon <p0>` |  | numeric expression “ID of Icon” |
| 16 | 96 | Window > Minimize and Hide | `Minimize and Hide Application Window` |  |  |
| 17 | 97 | Window > Restore and Show | `Restore and Show Application Window` |  |  |
| 18 | 98 | Window > Minimize to Tray | `Minimize Window to System Tray` |  |  |
| 19 | 99 | Window > Restore from Tray | `Restore Window from System Tray` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | ID of Last Clicked Icon | `IDLastClick(` |  |  |
| 1 | 81 | ID of Last Hovered Icon | `IDLastHover(` |  |  |
| 2 | 82 | ID of Last Clicked Balloon | `IDLastBalloon(` |  |  |
| 3 | 83 | Number of Icons | `NumIcons(` |  |  |
| 4 | 84 | Error String | `Error$(` |  | → string |
