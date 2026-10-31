# Extension Yaso

- Fichier : `Yaso.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Windows NT/2K/XP? | `Is Windows NT/2K/XP?` |  |  | — |  |
| 1 | -82 | Is connected to the internet? | `Is connected to the internet?` |  |  | — |  |
| 2 | -83 | Is wild card match? | `Does <p0> fit <p1>?` |  | expression chaîne « String to search » ; expression chaîne « String to compare to (e.g. '*hello*') » | — |  |
| 3 | -84 | Shutdown Events > On Shutdown Aborted | `On Shutdown Aborted` |  |  | — |  |
| 4 | -85 | Associate Conditions > Has Association | `<p0> has an association for <p1>` |  | expression chaîne « Extension (e.g. '.txt') » ; expression chaîne « Type (e.g. 'open') » | — |  |
| 5 | -86 | Associate Conditions > Has Global Association | `Has global association for <p0>` |  | expression chaîne « Type (e.g. 'open') » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add file to list of recent documents | `Add <p0> to list of recent documents` |  | nom de fichier « Select file » | — |  |
| 1 | 81 | Connect to Internet | `Connect to Internet with title <p0>` |  | expression chaîne « Title of dialog » ; expression numérique « 0 = 'Cancel' button , 1 = 'Work offline' button » | — |  |
| 2 | 82 | Shutdown Features > Allow Shutdown | `Allow shutdown` |  |  | — |  |
| 3 | 83 | Shutdown Features > Disallow Shutdown | `Disallow shutdown` |  |  | — |  |
| 4 | 84 | Shutdown Features > Set by value | `Allow shutdown = <p0> (0 = No, 1 = Yes )` |  | expression numérique « 0 = Disallow , 1 = Allow » | — |  |
| 5 | 85 | Association Features > For single extension > Associate | `Associate <p0> to <p2> for type <p1> with icon <p3>` |  | expression chaîne « Extension (e.g. '.txt') » ; expression chaîne « Type (e.g. 'open' or 'edit') » ; expression chaîne « Path of executable » ; expression chaîne « Icon path (blank to not change, '!' to use program icon) » | — |  |
| 6 | 86 | Association Features > For single extension > Un-associate | `Un-associate <p0> for type <p1>` |  | expression chaîne « Extension (e.g. '.txt') » ; expression chaîne « Type (e.g. 'open' or 'edit') » | — |  |
| 7 | 87 | Association Features > For all file extensions > Associate | `Associate <p1> with <p0>` |  | expression chaîne « Type (e.g. 'open') » ; expression chaîne « Path of program to associate with » | — |  |
| 8 | 88 | Association Features > For all file extensions > Un-associate | `Deassociate <p0>` |  | expression chaîne « Type (e.g. 'open') » | — |  |
| 9 | 89 | System Folder Options > Set Error String | `Set error string in <objet> to <p0>` |  | expression chaîne « Error string (e.g. '#err') » | — |  |
| 10 | 90 | System Folder Options > Give current users path when global path cannot be found? | `Give current users path when global path cannot be found? <p0> (0 = No , 1 = Yes)` |  | expression numérique « 0 = No , 1 = Yes » | — |  |
| 11 | 91 | System Folder Options > Give My Documents when other personal folder cannot be found? | `Give My Documents when other personal folder cannot be found? <p0> (0 = No , 1 = Yes)` |  | expression numérique « 0 = No , 1 = Yes » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Folder Features > All users folders > Application Data | `GlobalAppData$(` |  | → chaîne | — |  |
| 1 | 81 | Folder Features > All users folders > Favorites | `GlobalFavorites$(` |  | → chaîne | — |  |
| 2 | 82 | Folder Features > All users folders > Desktop | `GlobalDesktop$(` |  | → chaîne | — |  |
| 3 | 83 | Folder Features > All users folders > Templates | `GlobalTemplates$(` |  | → chaîne | — |  |
| 4 | 84 | Folder Features > All users folders > Shared Documents | `GlobalSharedDocuments$(` |  | → chaîne | — |  |
| 5 | 85 | Folder Features > All users folders > Program Files | `GlobalProgramFiles$(` |  | → chaîne | — |  |
| 6 | 86 | Folder Features > All users folders > System Folder | `GlobalSystemFolder$(` |  | → chaîne | — |  |
| 7 | 87 | Folder Features > All users folders > Windows Folder | `GlobalWindowsFolder$(` |  | → chaîne | — |  |
| 8 | 88 | Folder Features > Current user folders > Application Data | `CurAppData$(` |  | → chaîne | — |  |
| 9 | 89 | Folder Features > Current user folders > Recent Documents | `CurRecentDocs$(` |  | → chaîne | — |  |
| 10 | 90 | Folder Features > Current user folders > Start Menu | `CurStartMenu$(` |  | → chaîne | — |  |
| 11 | 91 | Folder Features > Current user folders > Programs (in Start Menu) | `CurPrograms$(` |  | → chaîne | — |  |
| 12 | 92 | Folder Features > Current user folders > Send To | `CurSendTo$(` |  | → chaîne | — |  |
| 13 | 93 | Folder Features > Current user folders > Start up | `CurStartUp$(` |  | → chaîne | — |  |
| 14 | 94 | Folder Features > Current user folders > Desktop | `CurDesktop$(` |  | → chaîne | — |  |
| 15 | 95 | Folder Features > Current user folders > Personal data folders > My Documents | `CurMyDocs$(` |  | → chaîne | — |  |
| 16 | 96 | Folder Features > Current user folders > Personal data folders > My Pictures | `CurMyPictures$(` |  | → chaîne | — |  |
| 17 | 97 | Folder Features > Current user folders > Personal data folders > My Music | `CurMyMusic$(` |  | → chaîne | — |  |
| 18 | 98 | Folder Features > Current user folders > Personal data folders > My Videos | `CurMyVideos$(` |  | → chaîne | — |  |
| 19 | 99 | Folder Features > Current user folders > Personal data folders > My Favorites | `CurMyFaves$(` |  | → chaîne | — |  |
| 20 | 100 | Folder Features > Get Error String | `ErrStr$(` |  | → chaîne | — |  |
| 21 | 101 | Folder Features > Get Relative Path ( From , To ) | `RelativePath$(` |  | chaîne ; chaîne → chaîne | — |  |
| 22 | 102 | Folder Features > Shorten Path ( Path , Length ) | `ShortenPath$(` |  | chaîne ; nombre → chaîne | — |  |
| 23 | 103 | Associate Features > Get Current Association ( Extension , Type ) | `CurAssociation$(` |  | chaîne ; chaîne → chaîne | — |  |
| 24 | 104 | Associate Features > Get Current Global Association ( Type ) | `CurGlobalAssociation$(` |  | chaîne → chaîne | — |  |
| 25 | 105 | Get Current User | `CurUser$(` |  | → chaîne | — |  |
