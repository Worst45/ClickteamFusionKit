# Extension ColorDialog

- Fichier : `ColorDialog.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Dialog is Closed by OK | `<objet>: Closed by OK` |  |  | — |  |
| 1 | -82 | Dialog is Closed by Cancel | `<objet>: Closed by Cancel` |  |  | — |  |
| 2 | -83 | Has an Error Occurred? | `<objet>: On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open Dialog > Open the Color Dialog | `Open Color Dialog` |  |  | — |  |
| 1 | 81 | Open Dialog > Open the Color Dialog at Position | `Open Color Dialog at ( <p0> , <p1> )` |  | expression numérique « Enter X Position, (0,0) is Top Left of Monitor Display » ; expression numérique « Enter Y Position, (0,0) is Top Left of Monitor Display » | — |  |
| 2 | 82 | Settings > Restore Custom Colors on Cancel | `Set 'Restore Custom Colors on Cancel' to State <p0>` |  | expression numérique | — |  |
| 3 | 83 | Settings > Dialog Fully Open by Default | `Set 'Dialog Fully Open by Default' to State <p0>` |  | expression numérique | — |  |
| 4 | 84 | Settings > Cannot Fully Open Dialog | `Set 'Cannot Fully Open Dialog' to State <p0>` |  | expression numérique | — |  |
| 5 | 85 | Settings > Round to Solid Colors (256 color mode) | `Set 'Round to Solid Colors (256 color mode)' to State <p0>` |  | expression numérique | — |  |
| 6 | 86 | Custom Colors > Set a Custom Color by RGB | `Set Custom Color <p0> to RGB( <p1> , <p2> , <p3> )` |  | expression numérique « Enter Index of Custom Color (1-16) » ; expression numérique « Enter Red Value (0-255) » ; expression numérique « Enter Green Value (0-255) » ; expression numérique « Enter Blue Value (0-255) » | — |  |
| 7 | 87 | Custom Colors > Set a Custom Color by Color Reference | `Set Custom Color <p0> to Color <p1>` |  | expression numérique « Enter Index of Custom Color (1-16) » ; expression numérique « Enter Color Reference, Use GetRGB(R,G,B) » | — |  |
| 8 | 88 | Custom Colors > Back-up Current Custom Colors | `Back-up Custom Colors` |  |  | — |  |
| 9 | 89 | Custom Colors > Restore Current Custom Colors | `Restore Custom Colors` |  |  | — |  |
| 10 | 90 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  | — |  |
| 11 | 91 | Selected Color > Set Selected Color by RGB | `Set Selected Color to RGB( <p0>, <p1> , <p2> )` |  | expression numérique « Enter Red Value (0-255) » ; expression numérique « Enter Green Value (0-255) » ; expression numérique « Enter Blue Value (0-255) » | — |  |
| 12 | 92 | Selected Color > Set Selected Color by Color Reference | `Set Selected Color to Color <p0>` |  | expression numérique « Enter Color Reference, Use GetRGB(R,G,B) » | — |  |
| 13 | 93 | Settings > Set Dialog Window's Title | `Set Color Dialog Window's Title to <p0>` |  | expression chaîne « Enter Title for Color Dialog Window » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Selected Color | `SelectedColor(` |  |  | — |  |
| 1 | 81 | Get a Custom Color | `CustomColor(` |  | nombre | — |  |
| 2 | 82 | Settings > Get State of 'Restore Custom Colors on Cancel' | `RestoreState(` |  |  | — |  |
| 3 | 83 | Settings > Get State of 'Dialog Fully Open by Default' | `FullOpenState(` |  |  | — |  |
| 4 | 84 | Settings > Get State of 'Cannot Fully Open Dialog' | `NoFullOpenState(` |  |  | — |  |
| 5 | 85 | Settings > Get State of 'Round to Solid Colors (256 color mode)' | `SolidColorsState(` |  |  | — |  |
| 6 | 86 | Errors > Get Error Code | `ErrorCode(` |  |  | — |  |
| 7 | 87 | Errors > Get Expression Error Code | `ExpressionErrorCode(` |  |  | — |  |
| 8 | 88 | Settings > Get Dialog Window's Title | `DialogTitle$(` |  | → chaîne | — |  |
| 9 | 89 | Get Last State of Dialog Openness | `DialogLastOpen(` |  |  | — |  |
| 10 | 90 | Color Conversions > Reference <-> RGB Values > Convert RGB values to Color Reference | `RGBToRef(` |  | nombre ; nombre ; nombre | — |  |
| 11 | 91 | Color Conversions > Reference <-> RGB Values > Get Red Value from Color Reference | `RefToRed(` |  | nombre | — |  |
| 12 | 92 | Color Conversions > Reference <-> RGB Values > Get Green Value from Color Reference | `RefToGreen(` |  | nombre | — |  |
| 13 | 93 | Color Conversions > Reference <-> RGB Values > Get Blue Value from Color Reference | `RefToBlue(` |  | nombre | — |  |
| 14 | 94 | Color Conversions > Reference <-> Color Names > Get Name of Color from Color Reference | `RefToName$(` |  | nombre → chaîne | — |  |
| 15 | 95 | Color Conversions > RGB Values <-> Color Names > Get Name of Color from RGB Values | `RGBToName$(` |  | nombre ; nombre ; nombre → chaîne | — |  |
| 16 | 96 | Color Conversions > Reference <-> Color Names > Get Color Reference from Name of Color | `NameToRef(` |  | chaîne | — |  |
| 17 | 97 | Color Conversions > Reference <-> Hex String > Convert Color Reference to Hex String | `RefToHex$(` |  | nombre → chaîne | — |  |
| 18 | 98 | Color Conversions > Hex String <-> RGB Values > Convert RGB values to Hex String | `RGBToHex$(` |  | nombre ; nombre ; nombre → chaîne | — |  |
| 19 | 99 | Color Conversions > Reference <-> Hex String > Convert Hex String to Color Reference | `HexToRef(` |  | chaîne | — |  |
| 20 | 100 | Color Conversions > Hex String <-> RGB Values > Get Red Value from Hex String | `HexToRed(` |  | chaîne | — |  |
| 21 | 101 | Color Conversions > Hex String <-> RGB Values > Get Green Value from Hex String | `HexToGreen(` |  | chaîne | — |  |
| 22 | 102 | Color Conversions > Hex String <-> RGB Values > Get Blue Value from Hex String | `HexToBlue(` |  | chaîne | — |  |
