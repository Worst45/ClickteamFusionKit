# Extension DialogPower

- Fichier : `DialogPower.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Success > Color Chooser | `<objet>: On Color Chooser <p0> Success` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 1 | -82 | On Success > Font Dialog | `<objet>: On Font Dialog <p0> Success` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 2 | -83 | On Success > Icon Picker | `<objet>: On Icon Picker <p0> Success` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 3 | -84 | On Success > Open File Dialog | `<objet>: On Open File Dialog <p0> Success` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 4 | -85 | On Success > Save File Dialog | `<objet>: On Save File Dialog <p0> Success` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 5 | -86 | On Cancel > Color Chooser | `<objet>: On Color Chooser <p0> Cancel` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 6 | -87 | On Cancel > Font Dialog | `<objet>: On Font Dialog <p0> Cancel` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 7 | -88 | On Cancel > Icon Picker | `<objet>: On Icon Picker <p0> Cancel` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 8 | -89 | On Cancel > Open File Dialog | `<objet>: On Open File Dialog <p0> Cancel` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 9 | -90 | On Cancel > Save File Dialog | `<objet>: On Save File Dialog <p0> Cancel` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 10 | -91 | On Close > MessageBox | `<objet>: On MessageBox <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 11 | -92 | On Close > Color Chooser | `<objet>: On Color Chooser <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 12 | -93 | On Close > Font Dialog | `<objet>: On Font Dialog <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 13 | -94 | On Close > Icon Picker | `<objet>: On Icon Picker <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 14 | -95 | On Close > AboutBox | `<objet>: On AboutBox <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 15 | -96 | On Close > Open File Dialog | `<objet>: On Open File Dialog <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 16 | -97 | On Close > Save File Dialog | `<objet>: On Save File Dialog <p0> Close` |  | expression numérique « ID (Enter -1 for Any ID) » | — |  |
| 17 | -98 | Dialog Info > Font Dialog > Bold Selected? | `<objet>: Font Dialog: Bold Selected?` |  |  | — |  |
| 18 | -99 | Dialog Info > Font Dialog > Italic Selected? | `<objet>: Font Dialog: Italic Selected?` |  |  | — |  |
| 19 | -100 | Dialog Info > Font Dialog > Underline Selected? | `<objet>: Font Dialog: Underline Selected?` |  |  | — |  |
| 20 | -101 | Dialog Info > Font Dialog > Strikeout Selected? | `<objet>: Font Dialog: Strikeout Selected?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show Dialog > Show MessageBox | `Show MessageBox Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression chaîne « Text » ; expression chaîne « Title » ; expression numérique « Buttons (0=OK, 1=OK-Cancel, 2=Yes-No, 3=Yes-No-Cancel, 4=Retry-Cancel, 5=Abort-Retry-Ignore, 6=Cancel-TryAgain-Continue) » ; expression numérique « Icon (0=None, 1=Exclamation, 2=Information, 3=Question, 4=Error) » ; expression numérique « Default Button (1-4) » ; expression numérique « Right-to-Left Reading? (0=No, 1=Yes) » ; expression numérique « Right-Justified? (0=No, 1=Yes) » ; expression numérique « Modality (0=Application, 1=Task, 2=System) » | — |  |
| 1 | 81 | Show Dialog > Show Color Chooser | `Show Color Chooser Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression numérique « Initial Color (Use GetRGB Function) » ; expression numérique « Define Custom Colors? (-1=Disabled, 0=Closed at Start, 1=Open at Start) » | — |  |
| 2 | 82 | Show Dialog > Show Font Dialog | `Show Font Dialog Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression numérique « Initial Text Color (Use GetRGB Function) » ; expression numérique « Minimum Size (Size Limit Only) » ; expression numérique « Maximum Size (Size Limit Only) » ; expression numérique « Use Effects? (0=No, 1=Yes) » ; expression numérique « Use Size Limits? (0=No, 1=Yes) » ; expression numérique « Show Only TrueType Fonts? (0=No, 1=Yes) » ; expression numérique « Screen Fonts? (0=No, 1=Yes) » ; expression numérique « Printer Fonts? (0=No, 1=Yes) » ; expression numérique « Show Scripts? (0=No, 1=Yes) » (paramètres non fiables) | — |  |
| 3 | 83 | Show Dialog > Show Icon Picker | `Show Icon Picker Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression numérique « Initial Selection Index (0-Based) » ; expression chaîne « Full Path to Initial Resource File » | — |  |
| 4 | 84 | Show Dialog > Show AboutBox | `Show AboutBox Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression chaîne « Text of Title and Box (See Help for More) » ; expression chaîne « Other Stuff » | — |  |
| 5 | 85 | Show Dialog > Show Open File Dialog | `Show Open File Dialog Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression numérique « Allow Multi-Select? (0=No, 1=Yes) » ; expression numérique « Path Must Exist? (0=No, 1=Yes) » ; expression numérique « File Must Exist? (0=No, 1=Yes) » ; expression numérique « Hide Read-Only Checkbox? (0=No, 1=Yes) » ; expression numérique « Get Shortcut Paths? (0=No, 1=Yes) » ; expression numérique « Show Hidden and System Files? (0=No, 1=Yes) » ; expression numérique « Create Prompt? (0=No, 1=Yes) » ; expression numérique « Don't Add to Recent Documents? (0=No, 1=Yes) » ; expression numérique « No Network Button? (0=No, 1=Yes) » ; expression numérique « Display Help Button? (0=No, 1=Yes) » | — |  |
| 6 | 86 | Show Dialog > Show Save File Dialog | `Show Save File Dialog Using Window Handle <p0>` |  | expression numérique « Window Handle of Parent Window » ; expression numérique « ID to use (Positive Integer) » ; expression numérique « Allow Multi-Select? (0=No, 1=Yes) » ; expression numérique « Path Must Exist? (0=No, 1=Yes) » ; expression numérique « File Must Exist? (0=No, 1=Yes) » ; expression numérique « Hide Read-Only Checkbox? (0=No, 1=Yes) » ; expression numérique « Get Shortcut Paths? (0=No, 1=Yes) » ; expression numérique « Show Hidden and System Files? (0=No, 1=Yes) » ; expression numérique « Overwrite File Prompt? (0=No, 1=Yes) » ; expression numérique « Don't Add to Recent Documents? (0=No, 1=Yes) » ; expression numérique « No Network Button? (0=No, 1=Yes) » ; expression numérique « Display Help Button? (0=No, 1=Yes) » | — |  |
| 7 | 87 | Dialog Info > Color Chooser > Set Custom Color | `Color Chooser: Set Custom Color <p0> to <p1>` |  | expression numérique « Index of Custom Color (0-15) » ; expression numérique « Color (Use GetRGB Function) » | — |  |
| 8 | 88 | Dialog Info > Color Chooser > Reset Custom Colors | `Color Chooser: Reset Custom Colors` |  |  | — |  |
| 9 | 89 | Dialog Info > Font Dialog > Set TypeFace Name | `Font Dialog: Set TypeFace Name to <p0>` |  | expression chaîne « TypeFace Name » | — |  |
| 10 | 90 | Dialog Info > Font Dialog > Set Character Set | `Font Dialog: Set Character Set to <p0>` |  | expression numérique « Character Set (See Expressions) » | — |  |
| 11 | 91 | Dialog Info > Font Dialog > Set Bold State | `Font Dialog: Set Bold State to <p0>` |  | expression numérique « Bold? (0=No, 1=Yes) » | — |  |
| 12 | 92 | Dialog Info > Font Dialog > Set Italic State | `Font Dialog: Set Italic State to <p0>` |  | expression numérique « Italic? (0=No, 1=Yes) » | — |  |
| 13 | 93 | Dialog Info > Font Dialog > Set Underline State | `Font Dialog: Set Underline State to <p0>` |  | expression numérique « Underline? (0=No, 1=Yes) » | — |  |
| 14 | 94 | Dialog Info > Font Dialog > Set Strikeout State | `Font Dialog: Set Strikeout State to <p0>` |  | expression numérique « Strikeout? (0=No, 1=Yes) » | — |  |
| 15 | 95 | Dialog Info > Font Dialog > Reset Information | `Font Dialog: Reset Saved Information` |  |  | — |  |
| 16 | 96 | Dialog Info > File Dialog > Set Dialog Title | `File Dialog: Set Dialog Title to <p0>` |  | expression chaîne « Title » | — |  |
| 17 | 97 | Dialog Info > File Dialog > Set Initial Directory | `File Dialog: Set Initial Directory to <p0>` |  | expression chaîne « Folder Path of Initial Directory » | — |  |
| 18 | 98 | Dialog Info > File Dialog > Set Default Extension | `File Dialog: Set Default Extension to <p0>` |  | expression chaîne « Default Extension (No Dot) » | — |  |
| 19 | 99 | Dialog Info > File Dialog > Add Extension Filter | `File Dialog: Add Filter <p0> for <p1>` |  | expression chaîne « Filter Description » ; expression chaîne « Extensions (*.xxx;*.yyy;*.zzz) » | — |  |
| 20 | 100 | Dialog Info > File Dialog > Clear Extension Filters | `File Dialog: Clear Filter List` |  |  | — |  |
| 21 | 101 | Dialog Info > File Dialog > Set Default Filter | `File Dialog: Set Default Filter Index to <p0>` |  | expression numérique « Index (1-Based) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window Handles > Main | `MainHwnd(` |  |  | — |  |
| 1 | 81 | Window Handles > Desktop | `DesktopHwnd(` |  |  | — |  |
| 2 | 82 | Window Handles > Taskbar | `TaskbarHwnd(` |  |  | — |  |
| 3 | 83 | Window Handles > Foreground | `FrgrndHwnd(` |  |  | — |  |
| 4 | 84 | Window Handles > Highest | `HighestHwnd(` |  | nombre « Window Handle » | — |  |
| 5 | 85 | Window Handles > Lowest | `LowestHwnd(` |  | nombre « Window Handle » | — |  |
| 6 | 86 | Window Handles > Owner | `OwnerHwnd(` |  | nombre « Window Handle » | — |  |
| 7 | 87 | Window Handles > Child | `ChildHwnd(` |  | nombre « Window Handle » | — |  |
| 8 | 88 | Window Handles > Next | `NextHwnd(` |  | nombre « Window Handle » | — |  |
| 9 | 89 | Window Handles > Previous | `PrevHwnd(` |  | nombre « Window Handle » | — |  |
| 10 | 90 | Window Handles > Enabled Popup | `EnPopupHwnd(` |  | nombre « Window Handle » | — |  |
| 11 | 91 | Returned Values > Returned Number 1 | `RetNumber1(` |  |  | — |  |
| 12 | 92 | Returned Values > Returned Number 2 | `RetNumber2(` |  |  | — |  |
| 13 | 93 | Returned Values > Returned String 1 | `RetString1$(` |  | → chaîne | — |  |
| 14 | 94 | Returned Values > Returned String 2 | `RetString2$(` |  | → chaîne | — |  |
| 15 | 95 | Dialog Info > MessageBox > OK Button | `MBOK(` |  |  | — |  |
| 16 | 96 | Dialog Info > MessageBox > Cancel Button | `MBCancel(` |  |  | — |  |
| 17 | 97 | Dialog Info > MessageBox > Yes Button | `MBYes(` |  |  | — |  |
| 18 | 98 | Dialog Info > MessageBox > No Button | `MBNo(` |  |  | — |  |
| 19 | 99 | Dialog Info > MessageBox > Retry Button | `MBRetry(` |  |  | — |  |
| 20 | 100 | Dialog Info > MessageBox > Abort Button | `MBAbort(` |  |  | — |  |
| 21 | 101 | Dialog Info > MessageBox > Ignore Button | `MBIgnore(` |  |  | — |  |
| 22 | 102 | Dialog Info > MessageBox > Try Again Button | `MBTryAgain(` |  |  | — |  |
| 23 | 103 | Dialog Info > MessageBox > Continue Button | `MBContinue(` |  |  | — |  |
| 24 | 104 | Dialog Info > Color Chooser > Get Custom Color | `CCCustColor(` |  | nombre « Index (0-15) » | — |  |
| 25 | 105 | Dialog Info > Font Dialog > TypeFace Name | `FDTypeFace$(` |  | → chaîne | — |  |
| 26 | 106 | Dialog Info > Font Dialog > Character Set | `FDCharSet(` |  |  | — |  |
| 27 | 107 | Dialog Info > Font Dialog > Bold State | `FDBold(` |  |  | — |  |
| 28 | 108 | Dialog Info > Font Dialog > Italic State | `FDItalic(` |  |  | — |  |
| 29 | 109 | Dialog Info > Font Dialog > Underline State | `FDUndrln(` |  |  | — |  |
| 30 | 110 | Dialog Info > Font Dialog > Strikeout State | `FDStrOut(` |  |  | — |  |
| 31 | 111 | Dialog Info > Font Dialog > Character Sets > ANSI (Standard) | `FDCharANSI(` |  |  | — |  |
| 32 | 112 | Dialog Info > Font Dialog > Character Sets > Baltic | `FDCharBaltic(` |  |  | — |  |
| 33 | 113 | Dialog Info > Font Dialog > Character Sets > Chinese | `FDCharChinese(` |  |  | — |  |
| 34 | 114 | Dialog Info > Font Dialog > Character Sets > East Europe | `FDCharEuro(` |  |  | — |  |
| 35 | 115 | Dialog Info > Font Dialog > Character Sets > Great Britain | `FDCharGrBrit(` |  |  | — |  |
| 36 | 116 | Dialog Info > Font Dialog > Character Sets > Greek | `FDCharGreek(` |  |  | — |  |
| 37 | 117 | Dialog Info > Font Dialog > Character Sets > Hangul | `FDCharHangul(` |  |  | — |  |
| 38 | 118 | Dialog Info > Font Dialog > Character Sets > Mac | `FDCharMac(` |  |  | — |  |
| 39 | 119 | Dialog Info > Font Dialog > Character Sets > OEM | `FDCharOEM(` |  |  | — |  |
| 40 | 120 | Dialog Info > Font Dialog > Character Sets > Russian | `FDCharRuss(` |  |  | — |  |
| 41 | 121 | Dialog Info > Font Dialog > Character Sets > Shift | `FDCharShift(` |  |  | — |  |
| 42 | 122 | Dialog Info > Font Dialog > Character Sets > Symbol | `FDCharSymb(` |  |  | — |  |
| 43 | 123 | Dialog Info > Font Dialog > Character Sets > Turkish | `FDCharTurk(` |  |  | — |  |
| 44 | 124 | Dialog Info > Font Dialog > Character Sets > Vietnamese | `FDCharViet(` |  |  | — |  |
| 45 | 125 | ID of Last Dialog | `LastID(` |  |  | — |  |
