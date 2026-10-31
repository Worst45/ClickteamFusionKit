# Extension fcFolder

- File: `fcFolder.mfx` — third-party extension (shipped with a downloaded project)
- Name(s) shown in projects: “File-Folder object”
- Usage in the corpus: 4 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Check if > Specified File is an Executable | `File <p0> is Executable` |  | string expression “Absolute Full Path toward an Item” | — |  |
| 1 | -82 | Check if > Specified File is Slow | `File <p0> is a high-latency network connection` |  | string expression “Absolute Full Path toward a File” | — |  |
| 2 | -83 | Hard-drive > On Error while Deleting Folder | `<object>: On Error while Deleting Folder` |  |  | — |  |
| 3 | -84 | Hard-drive > On Error while Deleting File | `<object>: On Error while Deleting File` |  |  | — |  |
| 4 | -85 | Check if > Specified File has Informations | `File <p0> has informations available` |  | string expression “Absolute Full Path toward a File” | — |  |
| 5 | -86 | Hard-drive > Browsing loop > On Item | `<object>: On Item while browsing loop <p0>` |  |  | — |  |
| 6 | -87 | Hard-drive > Browsing loop > On Folder Start | `<object>: On Folder Begin while browsing loop <p0>` |  |  | — |  |
| 7 | -88 | Hard-drive > Browsing loop > On File | `<object>: On File while browsing loop <p0>` |  |  | 2 (1 proj.) |  |
| 8 | -89 | Hard-drive > Browsing loop > On End | `<object>: On browsing loop end <p0>` |  |  | — |  |
| 9 | -90 | Misc > String match a wildcard | `<p1> match wildcard <p0>` |  | string expression “Search string (example: "*mySe?rch.*" )”; string expression “String to test (example: "mySearch.txt" )” | — |  |
| 10 | -91 | Hard-drive > Browsing loop > On Error | `<object>: On Error while Browsing loop <p0>` |  |  | — |  |
| 11 | -92 | Hard-drive > Browsing loop > On Folder End | `<object>: On Folder End while browsing loop <p0>` |  |  | — |  |
| 12 | -93 | Check if > Specified File is a Click Extension | `File <p0> is a Click Extension` |  | string expression “Absolute Full Path toward a File” | — |  |
| 13 | -94 | Hard-drive > On Error while Moving File | `<object>: On Error while Moving File` |  |  | — |  |
| 14 | -95 | Hard-drive > On Error while Copying File | `<object>: On Error while Copying File` |  |  | — |  |
| 15 | -96 | Check if > Specified File exists | `File <p0> exists` |  | string expression “Absolute Full Path toward a File” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Commands > Open an Item | `Open File/Folder <p0>` |  | string expression “Absolute Full Path toward an Item” | — |  |
| 1 | 81 | Hard-drive > Delete a Folder and sub-folders | `Delete Folder <p0>` |  | string expression “Absolute Full Path toward a Folder” | — |  |
| 2 | 82 | Commands > Explore a Folder | `Explore this path <p0>` |  | string expression “Absolute Full Path toward a Folder” | — |  |
| 3 | 83 | Commands > Edit a File | `Edit File <p0>` |  | string expression “Absolute Full Path toward a File” | — |  |
| 4 | 84 | Commands > Open OS Search | `Launch OS Search with path <p0>` |  | string expression “Absolute Full Path toward a Folder” | — |  |
| 5 | 85 | Commands > Print a File | `Print File <p0>` |  | string expression “Absolute Full Path toward a File” | — |  |
| 6 | 86 | Hard-drive > Delete a File | `Delete File <p0>` |  | string expression “Absolute Full Path toward a File” | — |  |
| 7 | 87 | Hard-drive > Empty a Folder and sub-folders | `Empty Folder <p0>` |  | string expression “Absolute Full Path toward a Folder” | — |  |
| 8 | 88 | Hard-drive > Browsing loop > Start browsing a Folder | `Start browsing Folder <p0> (ID <p1>)` |  | string expression “Absolute Full Path toward a Folder”; numeric expression “Browsing loop ID” | 1 (1 proj.) |  |
| 9 | 89 | Hard-drive > Browsing loop > Start browsing a Folder and sub-folders | `Start browsing Folder and subfolders <p0> (ID <p1>)` |  | string expression “Absolute Full Path toward a Folder”; numeric expression “Browsing loop ID” | — |  |
| 10 | 90 | Hard-drive > Browsing loop > End browsing | `Stop browsing` |  |  | — |  |
| 11 | 91 | Misc > Use Default Web Browser | `Open URL <p0> with default navigator` |  | string expression “Path toward an Item or an URL to open with default web browser” | — |  |
| 12 | 92 | Misc > Create a Shortcut | `Create Shortcut <p2> toward <p0>` |  | string expression “Absolute Full Path toward an Item”; string expression “Command line arguments passed to shortcut's target”; string expression “File name of the actual shortcut file being created (*.lnk)”; string expression “Description of the linked item”; numeric expression “Open style (0 = Default , 1 = Normal , 2 = Minimized , 3 = Maximized)”; string expression “Working directory”; string expression “File name of the icon file used for the shortcut”; numeric expression “Index of the icon in the icon file (0 based)” | — |  |
| 13 | 93 | Hard-drive > Move a File | `Move File <p0> to <p1>` |  | string expression “Absolute Full Path toward Source File”; string expression “Absolute Full Path toward Destination File” | — |  |
| 14 | 94 | Hard-drive > Copy a File | `Copy File <p0> to <p1> (<p2>)` |  | string expression “Absolute Full Path toward Source File”; string expression “Absolute Full Path toward Destination File”; numeric expression “Do not copy if destination File exists ? (0=Off, 1=On)” | — |  |
| 15 | 95 | Hard-drive > Create folders with a path | `Create folders of the path <p0>` |  | string expression “Absolute Full Path toward a Folder” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Windows > Get File Information | `getFileInfo$(` |  | string “Absolute Full Path toward a File”; string “Information Name” → string | — |  |
| 1 | 81 | Windows > Get Long Path | `getLongPath$(` |  | string “Absolute Full Path toward an Item” → string | — |  |
| 2 | 82 | Windows > Get Short Path (8.3) | `getShortPath$(` |  | string “Absolute Full Path toward an Item” → string | — |  |
| 3 | 83 | Browsing loop > Get Current Browsed Path | `getCurrentBrowsedPath$(` |  | → string | 1 (1 proj.) |  |
| 4 | 84 | Misc > Get default Web Browser Path | `getWebBrowserPath$(` |  | → string | — |  |
| 5 | 85 | Browsing loop > Get Current Browsed Index | `getCurrentBrowsedIndex(` |  |  | — |  |
| 6 | 86 | Browsing loop > Get Current Browsing Loop ID | `getCurrentBrowsingLoopID(` |  |  | — |  |
