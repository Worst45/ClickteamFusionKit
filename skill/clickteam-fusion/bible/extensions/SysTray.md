# Extension SysTray

- Fichier : `SysTray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is an Icon Displayed in Tray? | `<objet>: Icon <p0> is Displayed in Tray` |  | expression numérique « Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.) » | — |  |
| 1 | -82 | Mouse Clicks > User Clicks an Icon | `<objet>: User <p0> on Icon <p1>` |  | clic « User Clicks an Icon » ; expression numérique « Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.) » | — |  |
| 2 | -83 | Has an Error Occured? | `<objet>: On Error` |  |  | — |  |
| 3 | -84 | Intercept System Commands > On Minimize Command | `<objet>: On Minimize Command` |  |  | — |  |
| 4 | -85 | Intercept System Commands > On Maximize Command | `<objet>: On Maximize Command` |  |  | — |  |
| 5 | -86 | Intercept System Commands > On Close Command | `<objet>: On Close Command` |  |  | — |  |
| 6 | -87 | Intercept System Commands > On Task Bar Command | `<objet>: On Task Bar Command` |  |  | — |  |
| 7 | -88 | Intercept System Commands > On Specific System Command | `<objet>: On System Command <p0>` |  | expression numérique « Enter the System Command Type Number » | — |  |
| 8 | -89 | Mouse Clicks > User Releases Left-Click on Icon | `<objet>: User Releases Left-Click on Icon <p0>` |  | expression numérique « Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.) » | — |  |
| 9 | -90 | Mouse Clicks > User Releases Middle-Click on Icon | `<objet>: User Releases Middle-Click on Icon <p0>` |  | expression numérique « Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.) » | — |  |
| 10 | -91 | Mouse Clicks > User Releases Right-Click on Icon | `<objet>: User Releases Right-Click on Icon <p0>` |  | expression numérique « Enter the Icon ID (0 = any icon, 1 = first icon, 2 = second, etc.) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show Icon in Tray | `Show Icon <p0> in Tray` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 1 | 81 | Change Tray Icon > Default Application Icon | `Change Icon <p0> to Default Application Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 2 | 82 | Change Tray Icon > Asterisk Icon | `Change Icon <p0> to Asterisk Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 3 | 83 | Change Tray Icon > Hand-Shaped Icon | `Change Icon <p0> to Hand-Shaped Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 4 | 84 | Change Tray Icon > Exclamation Point Icon | `Change Icon <p0> to Exclamation Point Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 5 | 85 | Change Tray Icon > Question Mark Icon | `Change Icon <p0> to Question Mark Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 6 | 86 | Change Tray Icon > Windows Logo Icon | `Change Icon <p0> to Windows Logo Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 7 | 87 | Remove Icon from Tray | `Remove Icon <p0> from Tray` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 8 | 88 | Tool Tip > Show Tool Tip | `Show Tool Tip for Icon <p0>` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 9 | 89 | Tool Tip > Hide Tool Tip (broken) | `Hide Tool Tip for Icon <p0> (broken)` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 10 | 90 | Tool Tip > Set Tool Tip | `Set Tool Tip for Icon <p0> to <p1>` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » ; expression chaîne « Enter Tool Tip Text » | — |  |
| 11 | 91 | Load Icon Image from ICO File | `Load At Most <p3> Image(s) from <p0> Starting with Icon <p2> into Icon Images Staring with <p1>` |  | expression chaîne « Enter File Path of Icon (ICO) File » ; expression numérique « Enter ID of First Icon Image to Store Image into (1 = first icon image, 2 = second, etc.) » ; expression numérique « Enter First Icon to Read from File (1 = first icon, 2 = second, etc.) » ; expression numérique « Enter Maximum Number of Icons to Read from File » | — |  |
| 12 | 92 | Change Tray Icon > One of the Stored Icon Images | `Change Icon <p0> to Icon Image <p1>` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » ; expression numérique « Enter the Icon Image ID (1 = first icon image, 2 = second, etc.) » | — |  |
| 13 | 93 | Halt System Commands > Halt Minimize Command | `Halt Minimize Command` |  |  | — |  |
| 14 | 94 | Halt System Commands > Halt Maximize Command | `Halt Maximize Command` |  |  | — |  |
| 15 | 95 | Halt System Commands > Halt Close Command | `Halt Close Command` |  |  | — |  |
| 16 | 96 | Halt System Commands > Halt Task Bar Command | `Halt Task Bar Command` |  |  | — |  |
| 17 | 97 | Halt System Commands > Halt this System Command | `Halt this System Command` |  |  | — |  |
| 18 | 98 | Load Icon Image from EXE or DLL File | `Load At Most <p3> Image(s) from <p0> Starting with Icon <p2> into Icon Images Staring with <p1> using Format <p4>` |  | expression chaîne « Enter File Path of EXE or DLL File » ; expression numérique « Enter ID of First Icon Image to Store Image into (1 = first icon image, 2 = second, etc.) » ; expression numérique « Enter First Icon to Read from File (1 = first icon, 2 = second, etc.) » ; expression numérique « Enter Maximum Number of Pairs of Icons to Read from File » ; expression numérique « Enter the Format Number (consult help files for various formats) » | — |  |
| 19 | 99 | Application's Icons > Load Small Icon from Application | `Load Small Icon from Application into Icon Image <p0>` |  | expression numérique « Enter the Icon Image ID (1 = first icon image, 2 = second, etc.) » | — |  |
| 20 | 100 | Application's Icons > Load Big Icon from Application | `Load Big Icon from Application into Icon Image <p0>` |  | expression numérique « Enter the Icon Image ID (1 = first icon image, 2 = second, etc.) » | — |  |
| 21 | 101 | Application's Icons > Change Application's Small Icon | `Change Application's Small Icon to Icon Image <p0>` |  | expression numérique « Enter the Icon Image ID (1 = first icon image, 2 = second, etc.) » | — |  |
| 22 | 102 | Application's Icons > Change Application's Big Icon | `Change Application's Big Icon to Icon Image <p0>` |  | expression numérique « Enter the Icon Image ID (1 = first icon image, 2 = second, etc.) » | — |  |
| 23 | 103 | Application's Icons > Reset Application's Small Icon | `Reset Application's Small Icon` |  |  | — |  |
| 24 | 104 | Application's Icons > Reset Application's Big Icon | `Reset Application's Big Icon` |  |  | — |  |
| 25 | 105 | Change Tray Icon > This Application's Default Small Icon | `Change Icon <p0> to this Applications Default Small Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |
| 26 | 106 | Change Tray Icon > This Application's Default Big Icon | `Change Icon <p0> to this Applications Default Big Icon` |  | expression numérique « Enter the Icon ID (0 = all icons, 1 = first icon, 2 = second, etc.) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get ID of Icon Associated with Last Event | `GetEventIcon(` |  |  | — |  |
| 1 | 81 | Get Current Error Message | `GetCurrentError$(` |  | → chaîne | — |  |
