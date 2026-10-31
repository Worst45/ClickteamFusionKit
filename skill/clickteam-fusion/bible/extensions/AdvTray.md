# Extension AdvTray

- Fichier : `AdvTray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | User Clicks a Tray Icon > With Left Button | `<objet>: User Left-Clicks on Icon <p0>` |  | expression numérique « ID of Icon (Enter -1 for Any Icon) » | — |  |
| 1 | -82 | User Clicks a Tray Icon > With Middle Button | `<objet>: User Middle-Clicks on Icon <p0>` |  | expression numérique « ID of Icon (Enter -1 for Any Icon) » | — |  |
| 2 | -83 | User Clicks a Tray Icon > With Right Button | `<objet>: User Right-Clicks on Icon <p0>` |  | expression numérique « ID of Icon (Enter -1 for Any Icon) » | — |  |
| 3 | -84 | Mouse Cursor is Over Icon | `<objet>: Mouse Cursor is Over Icon <p0>` |  | expression numérique « ID of Icon (Enter -1 for Any Icon) » | — |  |
| 4 | -85 | User Clicks a Balloon | `<objet>: User Clicks a Balloon on Icon <p0>` |  | expression numérique « ID of Icon » | — |  |
| 5 | -86 | On Error | `<objet>: On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add Icon | `Create a New Tray Icon with ID <p0>` |  | expression numérique « ID of Icon » | — |  |
| 1 | 81 | Remove Icon | `Remove Icon <p0>` |  | expression numérique « ID of Icon » | — |  |
| 2 | 82 | Icon Images > Application Icon > Load Application Icon | `Tray Icon <p0>: Set Icon Image to Application Icon` |  | expression numérique « ID of Icon » | — |  |
| 3 | 83 | Icon Images > System Icons > Load Information Icon | `Tray Icon <p0>: Set Icon Image to Information Icon` |  | expression numérique « ID of Icon » | — |  |
| 4 | 84 | Icon Images > System Icons > Load Exclamation Icon | `Tray Icon <p0>: Set Icon Image to Exclamation Icon` |  | expression numérique « ID of Icon » | — |  |
| 5 | 85 | Icon Images > System Icons > Load Question Icon | `Tray Icon <p0>: Set Icon Image to Question Icon` |  | expression numérique « ID of Icon » | — |  |
| 6 | 86 | Icon Images > System Icons > Load Error Icon | `Tray Icon <p0>: Set Icon Image to Error Icon` |  | expression numérique « ID of Icon » | — |  |
| 7 | 87 | Icon Images > System Icons > Load WinLogo Icon | `Tray Icon <p0>: Set Icon Image to Windows Logo Icon` |  | expression numérique « ID of Icon » | — |  |
| 8 | 88 | Icon Images > System Icons > Load Default EXE Icon | `Tray Icon <p0>: Set Icon Image to Default EXE Icon` |  | expression numérique « ID of Icon » | — |  |
| 9 | 89 | Icon Images > Icon Resources > Load Icon From File | `Tray Icon <p0>: Load Icon <p2> From <p1>` |  | expression numérique « ID of Icon » ; nom de fichier « EXE/DLL/ICO File » ; expression numérique « Icon Index » | — |  |
| 10 | 90 | Icon Images > Icon Resources > Load Icon From Overlay | `Tray Icon <p0>: Load From Overlay <p1>` |  | expression numérique « ID of Icon » ; expression numérique « Fixed Value of Overlay Object » ; couleur « Transparent Color » | — |  |
| 11 | 91 | Icon Images > Remove Icon | `Remove Icon Image From Tray Icon <p0>` |  | expression numérique « ID of Icon » | — |  |
| 12 | 92 | Tooltip > Set Tooltip Text | `Set Tooltip Text of Icon <p0> to <p1>` |  | expression numérique « ID of Icon » ; expression chaîne « Tooltip Text » | — |  |
| 13 | 93 | Tooltip > Remove Tooltip | `Remove Tooltip from Icon <p0>` |  | expression numérique « ID of Icon » | — |  |
| 14 | 94 | Balloons > Show Balloon Notification | `Show a Balloon Notification on Icon <p0>` |  | expression numérique « ID of Icon » ; expression chaîne « Balloon Title » ; expression chaîne « Balloon Text » ; expression numérique « Icon Image (0=None, 1=Information, 2=Warning, 3=Error, 4=Same as Tray Icon) » | — |  |
| 15 | 95 | Balloons > Dismiss Balloon | `Dismiss Balloon of Icon <p0>` |  | expression numérique « ID of Icon » | — |  |
| 16 | 96 | Window > Minimize and Hide | `Minimize and Hide Application Window` |  |  | — |  |
| 17 | 97 | Window > Restore and Show | `Restore and Show Application Window` |  |  | — |  |
| 18 | 98 | Window > Minimize to Tray | `Minimize Window to System Tray` |  |  | — |  |
| 19 | 99 | Window > Restore from Tray | `Restore Window from System Tray` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | ID of Last Clicked Icon | `IDLastClick(` |  |  | — |  |
| 1 | 81 | ID of Last Hovered Icon | `IDLastHover(` |  |  | — |  |
| 2 | 82 | ID of Last Clicked Balloon | `IDLastBalloon(` |  |  | — |  |
| 3 | 83 | Number of Icons | `NumIcons(` |  |  | — |  |
| 4 | 84 | Error String | `Error$(` |  | → chaîne | — |  |
