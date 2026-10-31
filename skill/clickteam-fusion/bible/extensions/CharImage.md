# Extension CharImage

- Fichier : `CharImage.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Line breaks at RC/LF | `<objet>: Line breaks at RC/LF` |  |  | — |  |
| 1 | -82 | Word Wraps | `<objet>: Word Wraps` |  |  | — |  |
| 2 | -83 | Available Characters Contain | `<objet>: Available Characters Contain: <p0>` |  | expression chaîne « Enter one or more Characters » | — |  |
| 3 | -84 | Available Characters Contain Char... | `<objet>: Available Characters Contain Char: <p0>` |  | expression numérique « Enter A Char (ASCII value) » | — |  |
| 4 | -85 | On Draw > On Text | `<objet>: On Text Draw` |  |  | — |  |
| 5 | -86 | On Draw > On Line | `<objet>: On Line Draw` |  |  | — |  |
| 6 | -87 | On Draw > On Character | `<objet>: On Character Draw` |  |  | — |  |
| 7 | -88 | Formats > Is Alpha Channel Off on Unformated Text At | `<objet>: Alpha Channel Off is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 8 | -89 | Formats > Ink Effects > Is Transparent Effect on Unformated Text At | `<objet>: Transparent Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 9 | -90 | Formats > Ink Effects > Is Invert Effect on Unformated Text At | `<objet>: Invert Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 10 | -91 | Formats > Ink Effects > Is XOr Effect of Unformated Text At | `<objet>: XOr Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 11 | -92 | Formats > Ink Effects > Is And Effect of Unformated Text At | `<objet>: And Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 12 | -93 | Formats > Ink Effects > Is Or Effect of Unformated Text At | `<objet>: Or Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 13 | -94 | Formats > Ink Effects > Is Mono Effect of Unformated Text At | `<objet>: Mono Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 14 | -95 | Formats > Ink Effects > Is Add Effect of Unformated Text At | `<objet>: Add Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 15 | -96 | Formats > Ink Effects > Is Subtract Effect of Unformated Text At | `<objet>: Subtract Effect is on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |
| 16 | -97 | Formats > Is Line of Character proceeded by a RC/LF on Unformatted Text At | `<objet>: Line of Character proceeded by a RC/LF on Unformated Text At: <p0>` |  | expression numérique « Enter Index of Character within Unformatted Text » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Text... | `Set Text: <p0>` |  | expression chaîne « Enter Text » | — |  |
| 1 | 81 | Set Unformatted Text... | `Set Unformatted Text: <p0>` |  | expression chaîne « Enter Unformatted Text » | — |  |
| 2 | 82 | Set Page Width... | `Set Page Width: <p0>` |  | expression numérique « Enter Width » | — |  |
| 3 | 83 | Set Page Height... | `Set Page Height: <p0>` |  | expression numérique « Enter Height » | — |  |
| 4 | 84 | Line breaks at RC/LF > On | `Line breaks at RC/LF: On` |  |  | — |  |
| 5 | 85 | Line breaks at RC/LF > Off | `Line breaks at RC/LF: Off` |  |  | — |  |
| 6 | 86 | Line breaks at RC/LF > Set | `Line breaks at RC/LF: <p0>` |  | expression numérique « Set Line breaks at RC/LF (0 = Off, 1 = On) » | — |  |
| 7 | 87 | Word Wrap > On | `Word Wrap: On` |  |  | — |  |
| 8 | 88 | Word Wrap > Off | `Word Wrap: Off` |  |  | — |  |
| 9 | 89 | Word Wrap > Set | `Word Wrap: <p0>` |  | expression numérique « Set Word Wrap (0 = Off, 1 = On) » | — |  |
| 10 | 90 | Set Available Characters... | `Set Characters: <p0>` |  | expression chaîne « Enter Available Characters » | — |  |
| 11 | 91 | Add Available Char... | `Add Available Char: <p0>` |  | expression numérique « Enter Available Char (ASCII Value) » | — |  |
| 12 | 92 | On Draw Changes > Set X Offset... | `Set On Draw X Offset: <p0>` |  | expression numérique « Enter X Offset » | — |  |
| 13 | 93 | On Draw Changes > Set Y Offset... | `Set On Draw Y Offset: <p0>` |  | expression numérique « Enter Y Offset » | — |  |
| 14 | 94 | On Draw Changes > Set Alpha Channel Off of Current Character... | `Set Alpha Channel Off of Current Character` |  |  | — |  |
| 15 | 95 | On Draw Changes > Ink Effects > Set Transparent Effect of Current Character... | `Set Transparent Effect of Current Character, Coefficient: <p0>` |  | expression numérique « Enter Transparency Coefficient (0 - 128) » | — |  |
| 16 | 96 | On Draw Changes > Ink Effects > Set Invert Effect of Current Character... | `Set Invert Effect of Current Character` |  |  | — |  |
| 17 | 97 | On Draw Changes > Ink Effects > Set XOr Effect of Current Character... | `Set XOr Effect of Current Character` |  |  | — |  |
| 18 | 98 | On Draw Changes > Ink Effects > Set And Effect of Current Character... | `Set And Effect of Current Character` |  |  | — |  |
| 19 | 99 | On Draw Changes > Ink Effects > Set Or Effect of Current Character... | `Set Or Effect of Current Character` |  |  | — |  |
| 20 | 100 | On Draw Changes > Ink Effects > Set Mono Effect of Current Character... | `Set Mono Effect of Current Character` |  |  | — |  |
| 21 | 101 | On Draw Changes > Ink Effects > Set Add Effect of Current Character... | `Set Add Effect of Current Character` |  |  | — |  |
| 22 | 102 | On Draw Changes > Ink Effects > Set Subtract Effect of Current Character... | `Set Subtract Effect of Current Character` |  |  | — |  |
| 23 | 103 | Formats > Set Alias Index of Unformated Text... | `Set Alias Index of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | expression numérique « Enter Alias Index » ; expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 24 | 104 | Formats > Set Tracking of Unformated Text... | `Set Tracking of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | expression numérique « Enter Tracking » ; expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 25 | 105 | Formats > Set Alpha Channel Off of Unformated Text... | `Set Alpha Channel Off of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 26 | 106 | Formats > Ink Effects > Set Transparent Effect of Unformated Text... | `Set Transparent Effect of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | expression numérique « Enter Transparency Coefficient (0 - 128) » ; expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 27 | 107 | Formats > Ink Effects > Set Invert Effect of Unformated Text... | `Set Invert Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 28 | 108 | Formats > Ink Effects > Set XOr Effect of Unformated Text... | `Set XOr Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 29 | 109 | Formats > Ink Effects > Set And Effect of Unformated Text... | `Set And Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 30 | 110 | Formats > Ink Effects > Set Or Effect of Unformated Text... | `Set Or Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 31 | 111 | Formats > Ink Effects > Set Mono Effect of Unformated Text... | `Set Mono Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 32 | 112 | Formats > Ink Effects > Set Add Effect of Unformated Text... | `Set Add Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 33 | 113 | Formats > Ink Effects > Set Subtract Effect of Unformated Text... | `Set Subtract Effect of Unformated Text (at: <p1>, length: <p2>)` |  | expression numérique « Enter Position in Unformatted Text » ; expression numérique « Enter Length » | — |  |
| 34 | 114 | Formats > Set Horizontal Alignment of Unformated Text... | `Set Horizontal Alignment of Unformated Text: <p0> (at: <p1>)` |  | expression chaîne « Enter Horizontal Alignment (left, centre, right, justify) » ; expression numérique « Enter Position in Unformatted Text » | — |  |
| 35 | 115 | Formats > Set Vertical Alignment of Unformated Text... | `Set Vertical Alignment of Unformated Text: <p0> (at: <p1>)` |  | expression chaîne « Enter Vertical Alignment (top, centre, bottom) » ; expression numérique « Enter Position in Unformatted Text » | — |  |
| 36 | 116 | Formats > Set Leading of Unformated Text... | `Set Leading of Unformated Text: <p0> (at: <p1>)` |  | expression numérique « Enter Leading » ; expression numérique « Enter Position in Unformatted Text » | — |  |
| 37 | 117 | Aliases > Add Alias... | `Add Alias (<p0>)` |  | expression chaîne « Enter Name of Alias » | — |  |
| 38 | 118 | Aliases > Insert Alias... | `Insert Alias (<p0>) at: <p1>` |  | expression chaîne « Enter Name of Alias » ; expression numérique « Insert At » | — |  |
| 39 | 119 | Aliases > Delete Alias | `Delete Alias at: <p0>` |  | expression numérique « Delete At » | — |  |
| 40 | 120 | Aliases > Copy Alias... | `Copy Alias from: <p0> to: <p1>` |  | expression numérique « Enter From Alias » ; expression numérique « Enter To Alias » | — |  |
| 41 | 121 | Aliases > By Character > Set Clipping X... | `Set Alias <p0>'s X Clipping for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter X Clipping Coordinate » | — |  |
| 42 | 122 | Aliases > By Character > Set Clipping Y... | `Set Alias <p0>'s Y Clipping for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter Y Clipping Coordinate » | — |  |
| 43 | 123 | Aliases > By Character > Set Clipping Width... | `Set Alias <p0>'s Clipping Width for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter Clipping Width » | — |  |
| 44 | 124 | Aliases > By Character > Set Clipping Height... | `Set Alias <p0>'s Clipping Height for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter Clipping Height » | — |  |
| 45 | 125 | Aliases > By Character > Set Character Width... | `Set Alias <p0>'s Character Width for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter Character Width » | — |  |
| 46 | 126 | Aliases > By Character > Set Character Height... | `Set Alias <p0>'s Character Height for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; expression numérique « Enter Character Height » | — |  |
| 47 | 127 | Aliases > By Character > Load Image from File... | `Set Alias <p0>'s Image for Character: <p1> to: <p2>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter A Character » ; nom de fichier « Enter Image Filename » ; expression numérique « X Coordinate of hot spot (100000 for centre, 110000 for right) » ; expression numérique « Y Coordinate of hot spot (100000 for centre, 110000 for bottom) » | — |  |
| 48 | 128 | Aliases > By Char > Set Clipping X... | `Set Alias <p0>'s X Clipping for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter X Clipping Coordinate » | — |  |
| 49 | 129 | Aliases > By Char > Set Clipping Y... | `Set Alias <p0>'s Y Clipping for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter Y Clipping Coordinate » | — |  |
| 50 | 130 | Aliases > By Char > Set Clipping Width... | `Set Alias <p0>'s Clipping Width for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter Clipping Width » | — |  |
| 51 | 131 | Aliases > By Char > Set Clipping Height... | `Set Alias <p0>'s Clipping Height for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter Clipping Height » | — |  |
| 52 | 132 | Aliases > By Char > Set Character Width... | `Set Alias <p0>'s Character Width for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter Character Width » | — |  |
| 53 | 133 | Aliases > By Char > Set Character Height... | `Set Alias <p0>'s Character Height for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; expression numérique « Enter Character Height » | — |  |
| 54 | 134 | Aliases > By Char > Load Image from File... | `Set Alias <p0>'s Image for Char (<p1>) to: <p2>` |  | expression numérique « Enter Alias » ; expression numérique « Enter Char (ASCII value) » ; nom de fichier « Enter Image Filename » ; expression numérique « X Coordinate of hot spot (100000 for centre, 110000 for right) » ; expression numérique « Y Coordinate of hot spot (100000 for centre, 110000 for bottom) » | — |  |
| 55 | 135 | Aliases > Load Basic Glyph Map from Image File... | `Load Basic Glyph Map into Alias: <p0> from Image File: <p1> (widths: <p2>, heights: <p3>, HotSpots: X: <p4>, Y: <p5>)` |  | expression numérique « Enter Alias » ; nom de fichier « Enter Image Filename » ; expression numérique « Enter Width of each Character Image » ; expression numérique « Enter Height of each Character Image » ; expression numérique « X Coordinate of hot spots (100000 for centre, 110000 for right) » ; expression numérique « Y Coordinate of hot spots (100000 for centre, 110000 for bottom) » | — |  |
| 56 | 136 | Aliases > Load Character Images from Folder... | `Load Character Images into Alias: <p0> from Folder: <p1>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter Path of folder containing images » | — |  |
| 57 | 137 | Set Object Width... | `Set Object Width: <p0>` |  | expression numérique « Enter Width » | — |  |
| 58 | 138 | Set Object Height... | `Set Object Height: <p0>` |  | expression numérique « Enter Height » | — |  |
| 59 | 139 | Aliases > Set Name... | `Set Alias <p0>'s Name to: <p1>` |  | expression numérique « Enter Alias » ; expression chaîne « Enter Name » | — |  |
| 60 | 140 | Redraw | `Redraw` |  |  | — |  |
| 61 | 141 | On Draw Changes > Set Alias Index of Current Character... | `Set Alias of Current Character to: <p0>` |  | expression numérique « Enter Alias Index » | — |  |
| 62 | 142 | On Draw Changes > Set Tracking of Current Character... | `Set Tracking of Current Character to: <p0>` |  | expression numérique « Enter Tracking » | — |  |
| 63 | 143 | On Draw Changes > Set Horizontal Alignment of Current RC/LF Line... | `Set Horizontal Alignment of Current RC/LF Line to: <p0>` |  | expression chaîne « Enter Horizontal Alignment (left, centre, right, justify) » | — |  |
| 64 | 144 | On Draw Changes > Set Vertical Alignment of Current RC/LF Line... | `Set Vertical Alignment of Current RC/LF Line to: <p0>` |  | expression chaîne « Enter Vertical Alignment (top, centre, bottom) » | — |  |
| 65 | 145 | On Draw Changes > Set Leading of Current Line... | `Set Leading of Current Line to: <p0>` |  | expression numérique « Enter Leading » | — |  |
| 66 | 146 | Load Text from File... | `Load Text from File: <p0>` |  | nom de fichier « Enter Text File » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Object Width | `ObjectWidth(` |  |  | — |  |
| 1 | 81 | Get Object Height | `ObjectHeight(` |  |  | — |  |
| 2 | 82 | Get Text | `Text$(` |  | → chaîne | — |  |
| 3 | 83 | Get Unformated Text | `UnformattedText$(` |  | → chaîne | — |  |
| 4 | 84 | Get Unformated Char At | `UnformattedCharAt(` |  | nombre « Enter Char Position within Unformatted Text » | — |  |
| 5 | 85 | Get Unformated Length | `UnformattedLength(` |  |  | — |  |
| 6 | 86 | Get Page Width | `PageWidth(` |  |  | — |  |
| 7 | 87 | Get Page Height | `PageHeight(` |  |  | — |  |
| 8 | 88 | Get Available Characters | `AvailableCharacters$(` |  | → chaîne | — |  |
| 9 | 89 | Get Available Char Quantity | `AvailableCharQty(` |  |  | — |  |
| 10 | 90 | Get Available Char At | `AvailableCharAt(` |  | nombre « Enter Available Char Index » | — |  |
| 11 | 91 | On Draw Changes > Get X Offset | `OnDrawXOffset(` |  |  | — |  |
| 12 | 92 | On Draw Changes > Get Y Offset | `OnDrawYOffset(` |  |  | — |  |
| 13 | 93 | On Draw Changes > Get Unformatted Current Character Index | `OnDrawCurrentCharIndex(` |  |  | — |  |
| 14 | 94 | Drawing > Get X Coordinate of Character Image in Unformatted Text At | `XPosDrawnCharImageUnTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 15 | 95 | Drawing > Get Y Coordinate of Character Image in Unformatted Text At | `YPosDrawnCharImageUnTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 16 | 96 | Drawing > Get Hotspot Inclusive X Coordinate of Character Image in Unformatted Text At | `XPosHotDrawnCharImageUnTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 17 | 97 | Drawing > Get Hotspot Inclusive Y Coordinate of Character Image in Unformatted Text At | `YPosHotDrawnCharImageUnTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 18 | 98 | Formats > Get Alias Index of Unformated Text At | `AliasUnformattedTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 19 | 99 | Formats > Get Tracking of Unformated Text At | `TrackingUnformattedTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 20 | 100 | Formats > Ink Effects > Get Transparent Coefficient of Unformated Text At | `TransCoeffUnformattedTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 21 | 101 | Formats > Get Horizontal Alignment of Unformated Text At | `HorAlignUnformattedTextAt$(` |  | nombre « Enter Index of Character within Unformatted Text » → chaîne | — |  |
| 22 | 102 | Formats > Get Vertical Alignment of Unformated Text At | `VerAlignUnformattedTextAt$(` |  | nombre « Enter Index of Character within Unformatted Text » → chaîne | — |  |
| 23 | 103 | Formats > Get Leading of Unformated Text At | `LeadingUnformattedTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 24 | 104 | Aliases > Get Name of Alias | `AliasName$(` |  | nombre « Enter Index of Alias » → chaîne | — |  |
| 25 | 105 | Aliases > Get Index of Alias | `AliasIndex(` |  | chaîne « Enter Name of Alias » | — |  |
| 26 | 106 | Aliases > Get Quantity of Aliases | `AliasQty(` |  |  | — |  |
| 27 | 107 | Formats > Get Line of Character from Unformatted Text At | `LineUnformattedTextAt(` |  | nombre « Enter Index of Character within Unformatted Text » | — |  |
| 28 | 108 | Aliases > By Character > Get Clipping X | `ClipXCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 29 | 109 | Aliases > By Character > Get Clipping Y | `ClipYCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 30 | 110 | Aliases > By Character > Get Clipping Width | `ClipWidthCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 31 | 111 | Aliases > By Character > Get Clipping Height | `ClipHeightCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 32 | 112 | Aliases > By Character > Get Character Width | `CharWidthCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 33 | 113 | Aliases > By Character > Get Character Height | `CharHeightCharacter(` |  | nombre « Enter Alias Index » ; chaîne « Enter A Character » | — |  |
| 34 | 114 | Aliases > By Char > Get Clipping X | `ClipXChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
| 35 | 115 | Aliases > By Char > Get Clipping Y | `ClipYChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
| 36 | 116 | Aliases > By Char > Get Clipping Width | `ClipWidthChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
| 37 | 117 | Aliases > By Char > Get Clipping Height | `ClipHeightChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
| 38 | 118 | Aliases > By Char > Get Character Width | `CharWidthChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
| 39 | 119 | Aliases > By Char > Get Character Height | `CharHeightChar(` |  | nombre « Enter Alias Index » ; nombre « Enter A Char (ASCII value) » | — |  |
