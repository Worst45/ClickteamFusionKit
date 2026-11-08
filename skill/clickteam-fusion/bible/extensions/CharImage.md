# Extension CharImage

- File: `CharImage.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Line breaks at RC/LF | `<object>: Line breaks at RC/LF` |  |  |
| 1 | -82 | Word Wraps | `<object>: Word Wraps` |  |  |
| 2 | -83 | Available Characters Contain | `<object>: Available Characters Contain: <p0>` |  | string expression “Enter one or more Characters” |
| 3 | -84 | Available Characters Contain Char... | `<object>: Available Characters Contain Char: <p0>` |  | numeric expression “Enter A Char (ASCII value)” |
| 4 | -85 | On Draw > On Text | `<object>: On Text Draw` |  |  |
| 5 | -86 | On Draw > On Line | `<object>: On Line Draw` |  |  |
| 6 | -87 | On Draw > On Character | `<object>: On Character Draw` |  |  |
| 7 | -88 | Formats > Is Alpha Channel Off on Unformated Text At | `<object>: Alpha Channel Off is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 8 | -89 | Formats > Ink Effects > Is Transparent Effect on Unformated Text At | `<object>: Transparent Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 9 | -90 | Formats > Ink Effects > Is Invert Effect on Unformated Text At | `<object>: Invert Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 10 | -91 | Formats > Ink Effects > Is XOr Effect of Unformated Text At | `<object>: XOr Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 11 | -92 | Formats > Ink Effects > Is And Effect of Unformated Text At | `<object>: And Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 12 | -93 | Formats > Ink Effects > Is Or Effect of Unformated Text At | `<object>: Or Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 13 | -94 | Formats > Ink Effects > Is Mono Effect of Unformated Text At | `<object>: Mono Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 14 | -95 | Formats > Ink Effects > Is Add Effect of Unformated Text At | `<object>: Add Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 15 | -96 | Formats > Ink Effects > Is Subtract Effect of Unformated Text At | `<object>: Subtract Effect is on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |
| 16 | -97 | Formats > Is Line of Character proceeded by a RC/LF on Unformatted Text At | `<object>: Line of Character proceeded by a RC/LF on Unformated Text At: <p0>` |  | numeric expression “Enter Index of Character within Unformatted Text” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Text... | `Set Text: <p0>` |  | string expression “Enter Text” |
| 1 | 81 | Set Unformatted Text... | `Set Unformatted Text: <p0>` |  | string expression “Enter Unformatted Text” |
| 2 | 82 | Set Page Width... | `Set Page Width: <p0>` |  | numeric expression “Enter Width” |
| 3 | 83 | Set Page Height... | `Set Page Height: <p0>` |  | numeric expression “Enter Height” |
| 4 | 84 | Line breaks at RC/LF > On | `Line breaks at RC/LF: On` |  |  |
| 5 | 85 | Line breaks at RC/LF > Off | `Line breaks at RC/LF: Off` |  |  |
| 6 | 86 | Line breaks at RC/LF > Set | `Line breaks at RC/LF: <p0>` |  | numeric expression “Set Line breaks at RC/LF (0 = Off, 1 = On)” |
| 7 | 87 | Word Wrap > On | `Word Wrap: On` |  |  |
| 8 | 88 | Word Wrap > Off | `Word Wrap: Off` |  |  |
| 9 | 89 | Word Wrap > Set | `Word Wrap: <p0>` |  | numeric expression “Set Word Wrap (0 = Off, 1 = On)” |
| 10 | 90 | Set Available Characters... | `Set Characters: <p0>` |  | string expression “Enter Available Characters” |
| 11 | 91 | Add Available Char... | `Add Available Char: <p0>` |  | numeric expression “Enter Available Char (ASCII Value)” |
| 12 | 92 | On Draw Changes > Set X Offset... | `Set On Draw X Offset: <p0>` |  | numeric expression “Enter X Offset” |
| 13 | 93 | On Draw Changes > Set Y Offset... | `Set On Draw Y Offset: <p0>` |  | numeric expression “Enter Y Offset” |
| 14 | 94 | On Draw Changes > Set Alpha Channel Off of Current Character... | `Set Alpha Channel Off of Current Character` |  |  |
| 15 | 95 | On Draw Changes > Ink Effects > Set Transparent Effect of Current Character... | `Set Transparent Effect of Current Character, Coefficient: <p0>` |  | numeric expression “Enter Transparency Coefficient (0 - 128)” |
| 16 | 96 | On Draw Changes > Ink Effects > Set Invert Effect of Current Character... | `Set Invert Effect of Current Character` |  |  |
| 17 | 97 | On Draw Changes > Ink Effects > Set XOr Effect of Current Character... | `Set XOr Effect of Current Character` |  |  |
| 18 | 98 | On Draw Changes > Ink Effects > Set And Effect of Current Character... | `Set And Effect of Current Character` |  |  |
| 19 | 99 | On Draw Changes > Ink Effects > Set Or Effect of Current Character... | `Set Or Effect of Current Character` |  |  |
| 20 | 100 | On Draw Changes > Ink Effects > Set Mono Effect of Current Character... | `Set Mono Effect of Current Character` |  |  |
| 21 | 101 | On Draw Changes > Ink Effects > Set Add Effect of Current Character... | `Set Add Effect of Current Character` |  |  |
| 22 | 102 | On Draw Changes > Ink Effects > Set Subtract Effect of Current Character... | `Set Subtract Effect of Current Character` |  |  |
| 23 | 103 | Formats > Set Alias Index of Unformated Text... | `Set Alias Index of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | numeric expression “Enter Alias Index”; numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 24 | 104 | Formats > Set Tracking of Unformated Text... | `Set Tracking of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | numeric expression “Enter Tracking”; numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 25 | 105 | Formats > Set Alpha Channel Off of Unformated Text... | `Set Alpha Channel Off of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 26 | 106 | Formats > Ink Effects > Set Transparent Effect of Unformated Text... | `Set Transparent Effect of Unformated Text: <p0> (at: <p1>, length: <p2>)` |  | numeric expression “Enter Transparency Coefficient (0 - 128)”; numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 27 | 107 | Formats > Ink Effects > Set Invert Effect of Unformated Text... | `Set Invert Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 28 | 108 | Formats > Ink Effects > Set XOr Effect of Unformated Text... | `Set XOr Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 29 | 109 | Formats > Ink Effects > Set And Effect of Unformated Text... | `Set And Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 30 | 110 | Formats > Ink Effects > Set Or Effect of Unformated Text... | `Set Or Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 31 | 111 | Formats > Ink Effects > Set Mono Effect of Unformated Text... | `Set Mono Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 32 | 112 | Formats > Ink Effects > Set Add Effect of Unformated Text... | `Set Add Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 33 | 113 | Formats > Ink Effects > Set Subtract Effect of Unformated Text... | `Set Subtract Effect of Unformated Text (at: <p1>, length: <p2>)` |  | numeric expression “Enter Position in Unformatted Text”; numeric expression “Enter Length” |
| 34 | 114 | Formats > Set Horizontal Alignment of Unformated Text... | `Set Horizontal Alignment of Unformated Text: <p0> (at: <p1>)` |  | string expression “Enter Horizontal Alignment (left, centre, right, justify)”; numeric expression “Enter Position in Unformatted Text” |
| 35 | 115 | Formats > Set Vertical Alignment of Unformated Text... | `Set Vertical Alignment of Unformated Text: <p0> (at: <p1>)` |  | string expression “Enter Vertical Alignment (top, centre, bottom)”; numeric expression “Enter Position in Unformatted Text” |
| 36 | 116 | Formats > Set Leading of Unformated Text... | `Set Leading of Unformated Text: <p0> (at: <p1>)` |  | numeric expression “Enter Leading”; numeric expression “Enter Position in Unformatted Text” |
| 37 | 117 | Aliases > Add Alias... | `Add Alias (<p0>)` |  | string expression “Enter Name of Alias” |
| 38 | 118 | Aliases > Insert Alias... | `Insert Alias (<p0>) at: <p1>` |  | string expression “Enter Name of Alias”; numeric expression “Insert At” |
| 39 | 119 | Aliases > Delete Alias | `Delete Alias at: <p0>` |  | numeric expression “Delete At” |
| 40 | 120 | Aliases > Copy Alias... | `Copy Alias from: <p0> to: <p1>` |  | numeric expression “Enter From Alias”; numeric expression “Enter To Alias” |
| 41 | 121 | Aliases > By Character > Set Clipping X... | `Set Alias <p0>'s X Clipping for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter X Clipping Coordinate” |
| 42 | 122 | Aliases > By Character > Set Clipping Y... | `Set Alias <p0>'s Y Clipping for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter Y Clipping Coordinate” |
| 43 | 123 | Aliases > By Character > Set Clipping Width... | `Set Alias <p0>'s Clipping Width for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter Clipping Width” |
| 44 | 124 | Aliases > By Character > Set Clipping Height... | `Set Alias <p0>'s Clipping Height for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter Clipping Height” |
| 45 | 125 | Aliases > By Character > Set Character Width... | `Set Alias <p0>'s Character Width for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter Character Width” |
| 46 | 126 | Aliases > By Character > Set Character Height... | `Set Alias <p0>'s Character Height for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; numeric expression “Enter Character Height” |
| 47 | 127 | Aliases > By Character > Load Image from File... | `Set Alias <p0>'s Image for Character: <p1> to: <p2>` |  | numeric expression “Enter Alias”; string expression “Enter A Character”; file name “Enter Image Filename”; numeric expression “X Coordinate of hot spot (100000 for centre, 110000 for right)”; numeric expression “Y Coordinate of hot spot (100000 for centre, 110000 for bottom)” |
| 48 | 128 | Aliases > By Char > Set Clipping X... | `Set Alias <p0>'s X Clipping for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter X Clipping Coordinate” |
| 49 | 129 | Aliases > By Char > Set Clipping Y... | `Set Alias <p0>'s Y Clipping for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter Y Clipping Coordinate” |
| 50 | 130 | Aliases > By Char > Set Clipping Width... | `Set Alias <p0>'s Clipping Width for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter Clipping Width” |
| 51 | 131 | Aliases > By Char > Set Clipping Height... | `Set Alias <p0>'s Clipping Height for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter Clipping Height” |
| 52 | 132 | Aliases > By Char > Set Character Width... | `Set Alias <p0>'s Character Width for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter Character Width” |
| 53 | 133 | Aliases > By Char > Set Character Height... | `Set Alias <p0>'s Character Height for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; numeric expression “Enter Character Height” |
| 54 | 134 | Aliases > By Char > Load Image from File... | `Set Alias <p0>'s Image for Char (<p1>) to: <p2>` |  | numeric expression “Enter Alias”; numeric expression “Enter Char (ASCII value)”; file name “Enter Image Filename”; numeric expression “X Coordinate of hot spot (100000 for centre, 110000 for right)”; numeric expression “Y Coordinate of hot spot (100000 for centre, 110000 for bottom)” |
| 55 | 135 | Aliases > Load Basic Glyph Map from Image File... | `Load Basic Glyph Map into Alias: <p0> from Image File: <p1> (widths: <p2>, heights: <p3>, HotSpots: X: <p4>, Y: <p5>)` |  | numeric expression “Enter Alias”; file name “Enter Image Filename”; numeric expression “Enter Width of each Character Image”; numeric expression “Enter Height of each Character Image”; numeric expression “X Coordinate of hot spots (100000 for centre, 110000 for right)”; numeric expression “Y Coordinate of hot spots (100000 for centre, 110000 for bottom)” |
| 56 | 136 | Aliases > Load Character Images from Folder... | `Load Character Images into Alias: <p0> from Folder: <p1>` |  | numeric expression “Enter Alias”; string expression “Enter Path of folder containing images” |
| 57 | 137 | Set Object Width... | `Set Object Width: <p0>` |  | numeric expression “Enter Width” |
| 58 | 138 | Set Object Height... | `Set Object Height: <p0>` |  | numeric expression “Enter Height” |
| 59 | 139 | Aliases > Set Name... | `Set Alias <p0>'s Name to: <p1>` |  | numeric expression “Enter Alias”; string expression “Enter Name” |
| 60 | 140 | Redraw | `Redraw` |  |  |
| 61 | 141 | On Draw Changes > Set Alias Index of Current Character... | `Set Alias of Current Character to: <p0>` |  | numeric expression “Enter Alias Index” |
| 62 | 142 | On Draw Changes > Set Tracking of Current Character... | `Set Tracking of Current Character to: <p0>` |  | numeric expression “Enter Tracking” |
| 63 | 143 | On Draw Changes > Set Horizontal Alignment of Current RC/LF Line... | `Set Horizontal Alignment of Current RC/LF Line to: <p0>` |  | string expression “Enter Horizontal Alignment (left, centre, right, justify)” |
| 64 | 144 | On Draw Changes > Set Vertical Alignment of Current RC/LF Line... | `Set Vertical Alignment of Current RC/LF Line to: <p0>` |  | string expression “Enter Vertical Alignment (top, centre, bottom)” |
| 65 | 145 | On Draw Changes > Set Leading of Current Line... | `Set Leading of Current Line to: <p0>` |  | numeric expression “Enter Leading” |
| 66 | 146 | Load Text from File... | `Load Text from File: <p0>` |  | file name “Enter Text File” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Object Width | `ObjectWidth(` |  |  |
| 1 | 81 | Get Object Height | `ObjectHeight(` |  |  |
| 2 | 82 | Get Text | `Text$(` |  | → string |
| 3 | 83 | Get Unformated Text | `UnformattedText$(` |  | → string |
| 4 | 84 | Get Unformated Char At | `UnformattedCharAt(` |  | number “Enter Char Position within Unformatted Text” |
| 5 | 85 | Get Unformated Length | `UnformattedLength(` |  |  |
| 6 | 86 | Get Page Width | `PageWidth(` |  |  |
| 7 | 87 | Get Page Height | `PageHeight(` |  |  |
| 8 | 88 | Get Available Characters | `AvailableCharacters$(` |  | → string |
| 9 | 89 | Get Available Char Quantity | `AvailableCharQty(` |  |  |
| 10 | 90 | Get Available Char At | `AvailableCharAt(` |  | number “Enter Available Char Index” |
| 11 | 91 | On Draw Changes > Get X Offset | `OnDrawXOffset(` |  |  |
| 12 | 92 | On Draw Changes > Get Y Offset | `OnDrawYOffset(` |  |  |
| 13 | 93 | On Draw Changes > Get Unformatted Current Character Index | `OnDrawCurrentCharIndex(` |  |  |
| 14 | 94 | Drawing > Get X Coordinate of Character Image in Unformatted Text At | `XPosDrawnCharImageUnTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 15 | 95 | Drawing > Get Y Coordinate of Character Image in Unformatted Text At | `YPosDrawnCharImageUnTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 16 | 96 | Drawing > Get Hotspot Inclusive X Coordinate of Character Image in Unformatted Text At | `XPosHotDrawnCharImageUnTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 17 | 97 | Drawing > Get Hotspot Inclusive Y Coordinate of Character Image in Unformatted Text At | `YPosHotDrawnCharImageUnTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 18 | 98 | Formats > Get Alias Index of Unformated Text At | `AliasUnformattedTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 19 | 99 | Formats > Get Tracking of Unformated Text At | `TrackingUnformattedTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 20 | 100 | Formats > Ink Effects > Get Transparent Coefficient of Unformated Text At | `TransCoeffUnformattedTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 21 | 101 | Formats > Get Horizontal Alignment of Unformated Text At | `HorAlignUnformattedTextAt$(` |  | number “Enter Index of Character within Unformatted Text” → string |
| 22 | 102 | Formats > Get Vertical Alignment of Unformated Text At | `VerAlignUnformattedTextAt$(` |  | number “Enter Index of Character within Unformatted Text” → string |
| 23 | 103 | Formats > Get Leading of Unformated Text At | `LeadingUnformattedTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 24 | 104 | Aliases > Get Name of Alias | `AliasName$(` |  | number “Enter Index of Alias” → string |
| 25 | 105 | Aliases > Get Index of Alias | `AliasIndex(` |  | string “Enter Name of Alias” |
| 26 | 106 | Aliases > Get Quantity of Aliases | `AliasQty(` |  |  |
| 27 | 107 | Formats > Get Line of Character from Unformatted Text At | `LineUnformattedTextAt(` |  | number “Enter Index of Character within Unformatted Text” |
| 28 | 108 | Aliases > By Character > Get Clipping X | `ClipXCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 29 | 109 | Aliases > By Character > Get Clipping Y | `ClipYCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 30 | 110 | Aliases > By Character > Get Clipping Width | `ClipWidthCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 31 | 111 | Aliases > By Character > Get Clipping Height | `ClipHeightCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 32 | 112 | Aliases > By Character > Get Character Width | `CharWidthCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 33 | 113 | Aliases > By Character > Get Character Height | `CharHeightCharacter(` |  | number “Enter Alias Index”; string “Enter A Character” |
| 34 | 114 | Aliases > By Char > Get Clipping X | `ClipXChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
| 35 | 115 | Aliases > By Char > Get Clipping Y | `ClipYChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
| 36 | 116 | Aliases > By Char > Get Clipping Width | `ClipWidthChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
| 37 | 117 | Aliases > By Char > Get Clipping Height | `ClipHeightChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
| 38 | 118 | Aliases > By Char > Get Character Width | `CharWidthChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
| 39 | 119 | Aliases > By Char > Get Character Height | `CharHeightChar(` |  | number “Enter Alias Index”; number “Enter A Char (ASCII value)” |
