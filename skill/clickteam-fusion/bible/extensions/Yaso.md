# Extension Yaso

- File: `Yaso.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Windows NT/2K/XP? | `Is Windows NT/2K/XP?` |  |  | — |  |
| 1 | -82 | Is connected to the internet? | `Is connected to the internet?` |  |  | — |  |
| 2 | -83 | Is wild card match? | `Does <p0> fit <p1>?` |  | string expression “String to search”; string expression “String to compare to (e.g. '*hello*')” | — |  |
| 3 | -84 | Shutdown Events > On Shutdown Aborted | `On Shutdown Aborted` |  |  | — |  |
| 4 | -85 | Associate Conditions > Has Association | `<p0> has an association for <p1>` |  | string expression “Extension (e.g. '.txt')”; string expression “Type (e.g. 'open')” | — |  |
| 5 | -86 | Associate Conditions > Has Global Association | `Has global association for <p0>` |  | string expression “Type (e.g. 'open')” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add file to list of recent documents | `Add <p0> to list of recent documents` |  | file name “Select file” | — |  |
| 1 | 81 | Connect to Internet | `Connect to Internet with title <p0>` |  | string expression “Title of dialog”; numeric expression “0 = 'Cancel' button , 1 = 'Work offline' button” | — |  |
| 2 | 82 | Shutdown Features > Allow Shutdown | `Allow shutdown` |  |  | — |  |
| 3 | 83 | Shutdown Features > Disallow Shutdown | `Disallow shutdown` |  |  | — |  |
| 4 | 84 | Shutdown Features > Set by value | `Allow shutdown = <p0> (0 = No, 1 = Yes )` |  | numeric expression “0 = Disallow , 1 = Allow” | — |  |
| 5 | 85 | Association Features > For single extension > Associate | `Associate <p0> to <p2> for type <p1> with icon <p3>` |  | string expression “Extension (e.g. '.txt')”; string expression “Type (e.g. 'open' or 'edit')”; string expression “Path of executable”; string expression “Icon path (blank to not change, '!' to use program icon)” | — |  |
| 6 | 86 | Association Features > For single extension > Un-associate | `Un-associate <p0> for type <p1>` |  | string expression “Extension (e.g. '.txt')”; string expression “Type (e.g. 'open' or 'edit')” | — |  |
| 7 | 87 | Association Features > For all file extensions > Associate | `Associate <p1> with <p0>` |  | string expression “Type (e.g. 'open')”; string expression “Path of program to associate with” | — |  |
| 8 | 88 | Association Features > For all file extensions > Un-associate | `Deassociate <p0>` |  | string expression “Type (e.g. 'open')” | — |  |
| 9 | 89 | System Folder Options > Set Error String | `Set error string in <object> to <p0>` |  | string expression “Error string (e.g. '#err')” | — |  |
| 10 | 90 | System Folder Options > Give current users path when global path cannot be found? | `Give current users path when global path cannot be found? <p0> (0 = No , 1 = Yes)` |  | numeric expression “0 = No , 1 = Yes” | — |  |
| 11 | 91 | System Folder Options > Give My Documents when other personal folder cannot be found? | `Give My Documents when other personal folder cannot be found? <p0> (0 = No , 1 = Yes)` |  | numeric expression “0 = No , 1 = Yes” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Folder Features > All users folders > Application Data | `GlobalAppData$(` |  | → string | — |  |
| 1 | 81 | Folder Features > All users folders > Favorites | `GlobalFavorites$(` |  | → string | — |  |
| 2 | 82 | Folder Features > All users folders > Desktop | `GlobalDesktop$(` |  | → string | — |  |
| 3 | 83 | Folder Features > All users folders > Templates | `GlobalTemplates$(` |  | → string | — |  |
| 4 | 84 | Folder Features > All users folders > Shared Documents | `GlobalSharedDocuments$(` |  | → string | — |  |
| 5 | 85 | Folder Features > All users folders > Program Files | `GlobalProgramFiles$(` |  | → string | — |  |
| 6 | 86 | Folder Features > All users folders > System Folder | `GlobalSystemFolder$(` |  | → string | — |  |
| 7 | 87 | Folder Features > All users folders > Windows Folder | `GlobalWindowsFolder$(` |  | → string | — |  |
| 8 | 88 | Folder Features > Current user folders > Application Data | `CurAppData$(` |  | → string | — |  |
| 9 | 89 | Folder Features > Current user folders > Recent Documents | `CurRecentDocs$(` |  | → string | — |  |
| 10 | 90 | Folder Features > Current user folders > Start Menu | `CurStartMenu$(` |  | → string | — |  |
| 11 | 91 | Folder Features > Current user folders > Programs (in Start Menu) | `CurPrograms$(` |  | → string | — |  |
| 12 | 92 | Folder Features > Current user folders > Send To | `CurSendTo$(` |  | → string | — |  |
| 13 | 93 | Folder Features > Current user folders > Start up | `CurStartUp$(` |  | → string | — |  |
| 14 | 94 | Folder Features > Current user folders > Desktop | `CurDesktop$(` |  | → string | — |  |
| 15 | 95 | Folder Features > Current user folders > Personal data folders > My Documents | `CurMyDocs$(` |  | → string | — |  |
| 16 | 96 | Folder Features > Current user folders > Personal data folders > My Pictures | `CurMyPictures$(` |  | → string | — |  |
| 17 | 97 | Folder Features > Current user folders > Personal data folders > My Music | `CurMyMusic$(` |  | → string | — |  |
| 18 | 98 | Folder Features > Current user folders > Personal data folders > My Videos | `CurMyVideos$(` |  | → string | — |  |
| 19 | 99 | Folder Features > Current user folders > Personal data folders > My Favorites | `CurMyFaves$(` |  | → string | — |  |
| 20 | 100 | Folder Features > Get Error String | `ErrStr$(` |  | → string | — |  |
| 21 | 101 | Folder Features > Get Relative Path ( From , To ) | `RelativePath$(` |  | string; string → string | — |  |
| 22 | 102 | Folder Features > Shorten Path ( Path , Length ) | `ShortenPath$(` |  | string; number → string | — |  |
| 23 | 103 | Associate Features > Get Current Association ( Extension , Type ) | `CurAssociation$(` |  | string; string → string | — |  |
| 24 | 104 | Associate Features > Get Current Global Association ( Type ) | `CurGlobalAssociation$(` |  | string → string | — |  |
| 25 | 105 | Get Current User | `CurUser$(` |  | → string | — |  |
