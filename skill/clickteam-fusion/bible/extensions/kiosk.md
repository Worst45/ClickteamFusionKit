# Extension kiosk

- Fichier : `kiosk.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start Menu > Hide | `Hide Start Button` |  |  | — |  |
| 1 | 81 | Start Menu > Show | `Show Start Button` |  |  | — |  |
| 2 | 82 | Start Menu > Disable | `Disable Start Button` |  |  | — |  |
| 3 | 83 | Start Menu > Enable | `Enable Start Button` |  |  | — |  |
| 4 | 84 | Task Bar > Hide | `Hide Task Bar` |  |  | — |  |
| 5 | 85 | Task Bar > Show | `Show Task Bar` |  |  | — |  |
| 6 | 86 | Task Bar > Disable | `Disable Task Bar` |  |  | — |  |
| 7 | 87 | Task Bar > Enable | `Enable Task Bar` |  |  | — |  |
| 8 | 88 | External Windows > Hide | `Hide Window (<p1>, <p0>)` |  | expression chaîne « Enter the name of the open window » | — |  |
| 9 | 89 | External Windows > Minimize | `Minimize Window (<p1>, <p0>)` |  | expression chaîne « Enter the name of the open window » | — |  |
| 10 | 90 | External Windows > Show | `Show Window (<p1>, <p0>)` |  | expression chaîne « Enter the name of the open window » | — |  |
| 11 | 91 | External Windows > Show maximized | `Show Window Maximized (<p1>, <p0>)` |  | expression chaîne « Enter the name of the open window » | — |  |
| 12 | 92 | Control Panel > Connections | `Open Connections Panel` |  |  | — |  |
| 13 | 93 | Control Panel > Hardware wizard | `Open Hardware Wizard Panel` |  |  | — |  |
| 14 | 94 | Control Panel > Network setup | `Open Network Setup Panel` |  |  | — |  |
| 15 | 95 | Control Panel > System | `Open System Panel` |  |  | — |  |
| 16 | 96 | Control Panel > Time  date | `Open TimeDate Panel` |  |  | — |  |
| 17 | 97 | Control Panel > Video | `Open Video Panel` |  |  | — |  |
| 18 | 98 | Frame > Disable close button | `Disable Close Button` |  |  | — |  |
| 19 | 99 | Frame > Enable close button | `Enable Close Button` |  |  | — |  |
| 20 | 100 | Desktop > Change background image... | `Change Desktop Background Image to <p0>` |  | expression chaîne « Enter the BMP filename... » | — |  |
| 21 | 101 | Desktop > Use default background Image | `Use Default Desktop Background` |  |  | — |  |
| 22 | 102 | Mouse > Swap mouse buttons ON | `Swap Mouse Buttons ON` |  |  | — |  |
| 23 | 103 | Mouse > Swap mouse buttons OFF | `Swap Mouse Buttons OFF` |  |  | — |  |
| 24 | 104 | Mouse > Hide mouse | `Hide Mouse` |  |  | — |  |
| 25 | 105 | Mouse > Show mouse | `Show Mouse` |  |  | — |  |
| 26 | 106 | System > Set system time... | `Set system time to: <p0>:<p1>:<p2>` |  | expression numérique « Hour » ; expression numérique « Minutes » ; expression numérique « Seconds » | — |  |
| 27 | 107 | Display > Change desktop resolution... | `Change resolution to: <p0>x<p1> <p2> bits - Restore On End: <p3>` |  | expression numérique « Screen width » ; expression numérique « Screen height » ; expression numérique « Screen depth » ; expression numérique « Restore when the application ends: 0-No 1-Yes » | — |  |
| 28 | 108 | Frame > Change frame transparency | `Change frame transparency to <p0>` |  | expression numérique « Percentage » | — |  |
| 29 | 109 | Screensaver > Show screensaver | `Show screensaver` |  |  | — |  |
| 30 | 110 | Desktop > Disable desktop icons | `Disable desktop icons` |  |  | — |  |
| 31 | 111 | Desktop > Enable desktop icons | `Enable desktop icons` |  |  | — |  |
