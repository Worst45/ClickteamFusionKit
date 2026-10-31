# Extension fcKernel

- Fichier : `fcKernel.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | conditions > Selected window > Messages > On any message |  |  |  | — |  |
| 1 | -82 | conditions > Selected window > is maximized |  |  |  | — |  |
| 2 | -83 | conditions > Selected window > is minimized |  |  |  | — |  |
| 3 | -84 | conditions > Selected window > do not respond |  |  |  | — |  |
| 4 | -85 | conditions > Selected window > has the input focus |  |  |  | — |  |
| 5 | -86 | conditions > Selected window > is foreground |  |  |  | — |  |
| 6 | -87 | conditions > Mouse > Cursor is confined |  |  |  | — |  |
| 7 | -88 | conditions > Selected window > Messages > On specific message |  |  | expression numérique « Message type » | — |  |
| 8 | -89 | conditions > Selected window > Messages > Handle last message |  |  |  | — |  |
| 9 | -90 | conditions > Selected window > Messages > Handle specific message |  |  | expression numérique « Message type » | — |  |
| 10 | -91 | conditions > OS > Current User is an Admin |  |  |  | — |  |
| 11 | -92 | conditions > Selected window > is visible |  |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | actions > Mouse > Set cursor position |  |  | expression numérique « X position » ; expression numérique « Y position » | — |  |
| 1 | 81 | actions > Mouse > Swap mouse button state |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 2 | 82 | actions > Window > Select > from a title |  |  | expression chaîne « Window title » | — |  |
| 3 | 83 | actions > Window > Select > Desktop |  |  |  | — |  |
| 4 | 84 | actions > Window > Select > Parent |  |  |  | — |  |
| 5 | 85 | actions > Window > Select > from a specific method |  |  | expression numérique « Window get Method (0=First;1=Last;2=Next;3=Prev;4=Owner;5=Child) » | — |  |
| 6 | 86 | actions > Window > Select > next one |  |  |  | — |  |
| 7 | 87 | actions > Window > Select > previous one |  |  |  | — |  |
| 8 | 88 | actions > Window > Select > Foreground |  |  |  | — |  |
| 9 | 89 | actions > Window > Select > Active |  |  |  | — |  |
| 10 | 90 | actions > Window > Select > from absolute coordinates |  |  | expression numérique « X position » ; expression numérique « Y position » | — |  |
| 11 | 91 | actions > OS > exitWindows(Method) |  |  | expression numérique « Method (0=LogOff;1=ShutDown;2=Reboot) » | — |  |
| 12 | 92 | actions > OS > LogOff |  |  |  | — |  |
| 13 | 93 | actions > OS > Shutdown computer |  |  |  | — |  |
| 14 | 94 | actions > OS > Reboot computer |  |  |  | — |  |
| 15 | 95 | actions > OS > Kill Dead process |  |  |  | — |  |
| 16 | 96 | actions > Window > Messages > Post message |  |  | expression numérique « Message type » ; expression numérique « value wParam » ; expression numérique « value lParam » | — |  |
| 17 | 97 | actions > Window > Alter > Minimize |  |  |  | — |  |
| 18 | 98 | actions > Window > Alter > Enable / Disable |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 19 | 99 | actions > Window > Alter > Position and size |  |  | expression numérique « X position » ; expression numérique « Y position » ; expression numérique « Width » ; expression numérique « Height » | — |  |
| 20 | 100 | actions > Window > Alter > Open (when iconic) |  |  |  | — |  |
| 21 | 101 | actions > Mouse > Confine cursor in area |  |  | expression numérique « X position » ; expression numérique « Y position » ; expression numérique « X position » ; expression numérique « Y position » | — |  |
| 22 | 102 | actions > Mouse > Release cursor |  |  |  | — |  |
| 23 | 103 | actions > Window > Alter > Opacity value |  |  | expression numérique « Opacity (0-255) » | — |  |
| 26 | 106 | actions > Window > Alter > Bring to top |  |  |  | — |  |
| 27 | 107 | actions > Window > Alter > Title |  |  | expression chaîne « Window title » | — |  |
| 28 | 108 | actions > OS > Open OS About box |  |  | expression chaîne « Window title » ; expression chaîne « Text » | — |  |
| 29 | 109 | actions > Window > Messages > Send message |  |  | expression numérique « Message type » ; expression numérique « value wParam » ; expression numérique « value lParam » | — |  |
| 30 | 110 | actions > Window > Alter > Window Styles > Border State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 31 | 111 | actions > Window > Alter > Window Styles > Caption State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 32 | 112 | actions > Window > Alter > Window Styles > Dialog Frame State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 33 | 113 | actions > Window > Alter > Window Styles > Maximize Box State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 34 | 114 | actions > Window > Alter > Window Styles > Minimize Box State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 35 | 115 | actions > Window > Alter > Window Styles > System Menu State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 36 | 116 | actions > Window > Alter > Window Styles > Thick Frame State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 37 | 117 | actions > Window > Alter > Window Styles > Custom |  |  | expression numérique « Custom Style (See MSDN for WS_*) » | — |  |
| 38 | 118 | actions > Window > Alter > Window Extended Styles > Accept Files State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 39 | 119 | actions > Window > Alter > Window Extended Styles > Top of TaskBar State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 40 | 120 | actions > Window > Alter > Window Extended Styles > Client Edge State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 41 | 121 | actions > Window > Alter > Window Extended Styles > Context Help State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 42 | 122 | actions > Window > Alter > Window Extended Styles > Dialog Modal Frame State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 43 | 123 | actions > Window > Alter > Window Extended Styles > No Activate State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 44 | 124 | actions > Window > Alter > Window Extended Styles > Static Edge State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 45 | 125 | actions > Window > Alter > Window Extended Styles > Tool Caption State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 46 | 126 | actions > Window > Alter > Window Extended Styles > Top Most State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 47 | 127 | actions > Window > Alter > Window Extended Styles > Edge State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 48 | 128 | actions > Window > Alter > Window Extended Styles > Custom |  |  | expression numérique « Custom Style (See MSDN for WS_*) » | — |  |
| 49 | 129 | actions > Window > Messages > Start intercepting |  |  |  | — |  |
| 50 | 130 | actions > Window > Messages > Stop intercepting |  |  |  | — |  |
| 51 | 131 | actions > Mouse > Lock click state (handicap feature) |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 52 | 132 | actions > Mouse > Sonar state (circles around cursor) |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 53 | 133 | actions > Mouse > Cursor vanish state |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 54 | 134 | actions > Mouse > Cursor shadow state |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 55 | 135 | actions > OS > Set Flat menu state |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 56 | 136 | actions > OS > Set Font smoothing state |  |  | expression numérique « 0=Off , 1=On » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 57 | 137 | actions > OS > Set Wallpaper |  |  | expression chaîne « BMP picture file path » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 58 | 138 | actions > Mouse > Set mouse speed |  |  | expression numérique « Mouse speed (0-20) » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 59 | 139 | actions > Mouse > Set cursor trail length |  |  | expression numérique « Number of cursors in trail » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 60 | 140 | actions > Keyboard > Set keyboard repeat delay |  |  | expression numérique « Delay : 0 (approximately 250 ms delay) through 3 (approximately 1 second delay) » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 61 | 141 | actions > Keyboard > Set keyboard repeat speed |  |  | expression numérique « Keyboard repeat speed : 0 (approximately 2.5 repetitions per second) through 31 (approximately 30 repetitions per second) » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 62 | 142 | actions > Mouse > Set double click time |  |  | expression numérique « Milliseconds » ; expression numérique « Save setting to user OS profile ? (0=No;1=Yes) » | — |  |
| 63 | 143 | actions > Window > Alter > Flash |  |  | expression numérique « Flash method (0=Stop;1=Caption;2=Tray;3=All) » ; expression numérique « Flash timer (0=Default;1=Continuous;2=Continuous since not focused) » ; expression numérique « Number of times to flash the window (ignored when continuous) » ; expression numérique « Flash rate in milliseconds » | — |  |
| 64 | 144 | actions > Window > Alter > Give focus |  |  |  | — |  |
| 65 | 145 | actions > Window > Select > Current |  |  |  | — |  |
| 66 | 146 | actions > Window > Alter > Position only |  |  | expression numérique « X position » ; expression numérique « Y position » | — |  |
| 67 | 147 | actions > Window > Alter > Hide |  |  |  | — |  |
| 68 | 148 | actions > Window > Alter > Show |  |  |  | — |  |
| 69 | 149 | actions > Window > Select > from a class name |  |  | expression chaîne « Window Class Name » | — |  |
| 70 | 150 | actions > Window > Select > from a title and an item ID |  |  | expression chaîne « Window title » ; expression numérique « Item ID » | — |  |
| 71 | 151 | actions > Window > Select > from a class name and an item ID |  |  | expression chaîne « Window Class Name » ; expression numérique « Item ID » | — |  |
| 72 | 152 | actions > Window > Select > from an item ID in the selected window |  |  | expression numérique « Item ID » | — |  |
| 73 | 153 | actions > Window > Alter > Class Styles > Drop Shadow State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 74 | 154 | actions > Window > Alter > Class Styles > Redraw State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 75 | 155 | actions > Window > Alter > System Boxs and Menu > Remove Close Box and Menu |  |  |  | — |  |
| 76 | 156 | actions > Window > Alter > Transparency State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 77 | 157 | actions > Window > Alter > Redraw Window |  |  |  | — |  |
| 78 | 158 | actions > Window > Alter > Visibility State |  |  | expression numérique « 0=Off , 1=On » | — |  |
| 79 | 159 | actions > Window > Alter > System Boxs and Menu > Remove Maximize Box and Menu |  |  |  | — |  |
| 80 | 160 | actions > Window > Alter > System Boxs and Menu > Remove Minimize Box and Menu |  |  |  | — |  |
| 81 | 161 | actions > Window > Alter > Window Extended Styles > RTL Language State |  |  | expression numérique « 0=Off , 1=On » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Expressions > Disk > getDiskFreeSpace(path) |  |  | chaîne « Path » | — |  |
| 1 | 81 | Expressions > Disk > getDiskFreeUserSpace(path) |  |  | chaîne « Path » | — |  |
| 2 | 82 | Expressions > Disk > getDiskTotalSpace(path) |  |  | chaîne « Path » | — |  |
| 3 | 83 | Expressions > Disk > getDriveType(path) |  |  | chaîne « Path » | — |  |
| 4 | 84 | Expressions > Window > Message > getMessageWParam() |  |  |  | — |  |
| 5 | 85 | Expressions > Window > Message > getMessageLParam() |  |  |  | — |  |
| 6 | 86 | Expressions > Window > getWindowTitle$() |  |  | → chaîne | — |  |
| 7 | 87 | Expressions > Window > getClientAreaX() |  |  |  | — |  |
| 8 | 88 | Expressions > Window > getClientAreaY() |  |  |  | — |  |
| 9 | 89 | Expressions > Window > getClientAreaWidth() |  |  |  | — |  |
| 10 | 90 | Expressions > Window > getClientAreaHeight() |  |  |  | — |  |
| 11 | 91 | Expressions > Mouse > getCursorPosX() |  |  |  | — |  |
| 12 | 92 | Expressions > Mouse > getCursorPosY() |  |  |  | — |  |
| 13 | 93 | Expressions > Window > getScreenWidth() |  |  |  | — |  |
| 14 | 94 | Expressions > Window > getScreenHeight() |  |  |  | — |  |
| 15 | 95 | Expressions > Window > Message > getMessageType() |  |  |  | — |  |
| 16 | 96 | Expressions > Error > Get last error number |  |  |  | — |  |
| 17 | 97 | Expressions > Error > Get last error string |  |  | → chaîne | — |  |
| 18 | 98 | Expressions > Mouse > Get Click lock state |  |  |  | — |  |
| 19 | 99 | Expressions > Mouse > Get Cursor Sonar state |  |  |  | — |  |
| 20 | 100 | Expressions > Mouse > Get Cursor Vanish state |  |  |  | — |  |
| 21 | 101 | Expressions > Mouse > Get Cursor Shadow state |  |  |  | — |  |
| 22 | 102 | Expressions > OS > Get Flat Menu state |  |  |  | — |  |
| 23 | 103 | Expressions > OS > Get Font Smoothing state |  |  |  | — |  |
| 24 | 104 | Expressions > OS > Get Wallpaper path |  |  | → chaîne | — |  |
| 25 | 105 | Expressions > Mouse > Get Speed |  |  |  | — |  |
| 26 | 106 | Expressions > Mouse > Get Cursor Trail |  |  |  | — |  |
| 27 | 107 | Expressions > Keyboard > Get Keyboard delay |  |  |  | — |  |
| 28 | 108 | Expressions > Keyboard > Get Keyboard repeat speed |  |  |  | — |  |
| 29 | 109 | Expressions > Mouse > Get Double Click time |  |  |  | — |  |
| 30 | 110 | Expressions > OS > Get Version |  |  |  | — |  |
| 31 | 111 | Expressions > Window > getWindowX() |  |  |  | — |  |
| 32 | 112 | Expressions > Window > getWindowY() |  |  |  | — |  |
| 33 | 113 | Expressions > Window > getWindowWidth() |  |  |  | — |  |
| 34 | 114 | Expressions > Window > getWindowHeight() |  |  |  | — |  |
