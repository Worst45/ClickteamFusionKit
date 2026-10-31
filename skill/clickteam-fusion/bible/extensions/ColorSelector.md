# Extension ColorSelector

- Fichier : `ColorSelector.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Window > Is Enabled? | `<objet>: Is Enabled` |  |  | — |  |
| 1 | -82 | Window > Is Visible? | `<objet>: Is Visible` |  |  | — |  |
| 2 | -83 | Window > Has Focus? | `<objet>: Has Focus` |  |  | — |  |
| 3 | -84 | Color Selection Changed | `<objet>: Color Selection Changed` |  |  | — |  |
| 4 | -85 | Color Picker Dropdown | `<objet>: Color Picker Dropdown` |  |  | — |  |
| 5 | -86 | Color Picker Closeup | `<objet>: Color Picker Closeup` |  |  | — |  |
| 6 | -87 | Is Popup Visible? | `<objet>: Popup is Visible` |  |  | — |  |
| 7 | -88 | Is Color None? | `<objet>: Color is None` |  |  | — |  |
| 8 | -89 | Top Button Hit | `<objet>: Top Button Hit` |  |  | — |  |
| 9 | -90 | Bottom Button Hit | `<objet>: Bottom Button Hit` |  |  | — |  |
| 10 | -91 | Is Color Default? | `<objet>: Color is Default` |  |  | — |  |
| 11 | -92 | Color Dialog > Closed by OK | `<objet>: Color Dialog Closed by OK` |  |  | — |  |
| 12 | -93 | Color Dialog > Closed by Cancel | `<objet>: Color Dialog Closed by Cancel` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Style > Button | `Use Button Style` |  |  | — |  |
| 1 | 81 | Style > Combo Box | `Use Combo Box Style` |  |  | — |  |
| 2 | 82 | Style > Set Tracking Selection On | `Set Tracking Selection On` |  |  | — |  |
| 3 | 83 | Style > Set Tracking Selection Off | `Set Tracking Selection Off` |  |  | — |  |
| 4 | 84 | Window > Set X Position | `Set X Position to <p0>` |  | expression numérique « X Position » | — |  |
| 5 | 85 | Window > Set Y Position | `Set Y Position to <p0>` |  | expression numérique « Y Position » | — |  |
| 6 | 86 | Window > Set Width | `Set Width to <p0>` |  | expression numérique « Width » | — |  |
| 7 | 87 | Window > Set Height | `Set Height to <p0>` |  | expression numérique « Height » | — |  |
| 9 | 89 | Window > Enable | `Enable` |  |  | — |  |
| 10 | 90 | Window > Disable | `Disable` |  |  | — |  |
| 11 | 91 | Window > Show | `Show` |  |  | — |  |
| 12 | 92 | Window > Hide | `Hide` |  |  | — |  |
| 13 | 93 | Combo Box Options > Fill Combo Box With Color | `Fill Combo Box With Color` |  |  | — |  |
| 14 | 94 | Combo Box Options > Have Combo Box Show Color and Text | `Have Combo Box Show Color and Text` |  |  | — |  |
| 15 | 95 | Combo Box Options > Set Combo Box Text Format if Name Can Be Found | `Set Combo Box Text Format if Name Can Be Found to <p0>` |  | expression chaîne « Format, %n = name, %r = Red, %g = Green, %b = Blue » | — |  |
| 16 | 96 | Combo Box Options > Set Combo Box Text Format if Name Cannot Be Found | `Set Combo Box Text Format if Name Cannot Be Found to <p0>` |  | expression chaîne « Format, %r = Red, %g = Green, %b = Blue » | — |  |
| 17 | 97 | Combo Box Options > Set Font | `Set Font to <p0>, Size <p1>` |  | expression chaîne « Font Name » ; expression numérique « Size » | — |  |
| 18 | 98 | Additional Buttons > Top Button > Set Function > Nothing | `Set Top Button Function to Nothing` |  |  | — |  |
| 19 | 99 | Additional Buttons > Top Button > Set Function > Set Color | `Set Top Button Function to Set Color` |  |  | — |  |
| 20 | 100 | Additional Buttons > Top Button > Set Color > None | `Set Top Button Color to None` |  |  | — |  |
| 21 | 101 | Additional Buttons > Top Button > Set Color > Custom | `Set Top Button Color to <p0>` |  | couleur « Color » | — |  |
| 22 | 102 | Additional Buttons > Top Button > Display > Show Color Box | `Set Top Button to Show a Color Box` |  |  | — |  |
| 23 | 103 | Additional Buttons > Top Button > Display > Do Not Show Color Box | `Set Top Button to Not Show a Color Box` |  |  | — |  |
| 24 | 104 | Additional Buttons > Top Button > Display > Set Text | `Set Top Button Text to <p0>` |  | expression chaîne « Text » | — |  |
| 25 | 105 | Additional Buttons > Bottom Button > Set Text | `Set Bottom Button Text to <p0>` |  | expression chaîne « Text » | — |  |
| 26 | 106 | Color Buttons > Set Number of Rows | `Set Number of Rows of Color Buttons to <p0>` |  | expression numérique « Rows » | — |  |
| 27 | 107 | Color Buttons > Set Number of Columns | `Set Number of Columns of Color Buttons to <p0>` |  | expression numérique « Columns » | — |  |
| 28 | 108 | Color Buttons > Set Color of Button | `Set Color of Button ( <p0>, <p1> ) to <p2>` |  | expression numérique « Row » ; expression numérique « Column » ; couleur « Color » | — |  |
| 29 | 109 | Color Buttons > Save Settings | `Save Color Button Settings to <p0>` |  | nom de fichier « File » | — |  |
| 30 | 110 | Color Buttons > Load Settings | `Load Color Button Settings from <p0>` |  | nom de fichier « File » | — |  |
| 31 | 111 | Color Buttons > Load 8x5 Default | `Load Color Button 8x5 Default` |  |  | — |  |
| 32 | 112 | Color Buttons > Load 8x2 Default | `Load Color Button 8x2 Default` |  |  | — |  |
| 33 | 113 | Color Names > Set/Add Color Name | `Set/Add Color <p0> Name to <p1>` |  | couleur « Color » ; expression chaîne « Name » | — |  |
| 34 | 114 | Color Names > Remove Color Name | `Remove Name for Color <p0>` |  | couleur « Color » | — |  |
| 35 | 115 | Color Names > Save Color Name Settings | `Save Color Name Settings to <p0>` |  | nom de fichier « File » | — |  |
| 36 | 116 | Color Names > Load Color Name Settings | `Load Color Name Settings from <p0>` |  | nom de fichier « File » | — |  |
| 37 | 117 | Color Names > Load Default Color Name Settings | `Load Default Color Name Settings` |  |  | — |  |
| 38 | 118 | Set Selected Color | `Set Selected Color to <p0>` |  | couleur « Color » | — |  |
| 39 | 119 | Set Selected Color to None | `Set Selected Color to None` |  |  | — |  |
| 40 | 120 | Additional Buttons > Bottom Button > Set Function > Nothing | `Set Top Button Function to Nothing` |  |  | — |  |
| 41 | 121 | Additional Buttons > Bottom Button > Set Function > Open Color Dialog | `Set Top Button Function to Open Color Dialog` |  |  | — |  |
| 42 | 122 | Color Dialog > Open Color Dialog | `Show Color Dialog` |  |  | — |  |
| 43 | 123 | Color Dialog > Set Custom Color | `Set Custom Color <p0> of Color Dialog to <p1>` |  | expression numérique « Custom Color (0 - 15) » ; couleur « Color » | — |  |
| 44 | 124 | Color Dialog > Set Display Information | `Set Display Information of Color Dialog to <p0>` |  | expression numérique « Display Info Flags (Add Together from Expressions) » | — |  |
| 45 | 125 | Show Color Popup | `Show Color Popup` |  |  | — |  |
| 46 | 126 | Hide Color Popup | `Hide Color Popup` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Get X Position | `getX(` |  |  | — |  |
| 1 | 81 | Window > Get Y Position | `getY(` |  |  | — |  |
| 2 | 82 | Window > Get Width | `getW(` |  |  | — |  |
| 3 | 83 | Window > Get Height | `getH(` |  |  | — |  |
| 4 | 84 | Get Selected Color | `getColor(` |  |  | — |  |
| 5 | 85 | Get Combo Box Text | `getText$(` |  | → chaîne | — |  |
| 6 | 86 | Get Color of Box | `getColorBox(` |  | nombre ; nombre | — |  |
| 7 | 87 | Get Color from Name | `getColorFromName(` |  | chaîne | — |  |
| 8 | 88 | Get Name from Color | `getNameFromColor$(` |  | nombre → chaîne | — |  |
| 9 | 89 | Window > Get Button Window Handle | `hwnd(` |  |  | — |  |
| 10 | 90 | Window > Get Popup Window Handle | `hwndPopup(` |  |  | — |  |
| 11 | 91 | Color Dialog > Display Info Flags > Display All Available Colors | `fAllColors(` |  |  | — |  |
| 12 | 92 | Color Dialog > Display Info Flags > Display Only Solid Colors on Low-Color Resolutions | `fSolidColors(` |  |  | — |  |
| 13 | 93 | Color Dialog > Display Info Flags > Disable Opening of Custom Colors | `fDisableCustom(` |  |  | — |  |
| 14 | 94 | Color Dialog > Display Info Flags > Custom Colors is Open | `fCustomOpen(` |  |  | — |  |
| 15 | 95 | Color Dialog > Get Custom Color | `getDlgCustomColor(` |  | nombre | — |  |
