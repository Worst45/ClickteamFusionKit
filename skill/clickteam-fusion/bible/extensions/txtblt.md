# Extension txtblt

- File: `txtblt.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Transparent | `<object>: Transparent` |  |  | — |  |
| 1 | -82 | Text Functions | `<object>: Text Functions` |  |  | — |  |
| 2 | -83 | Word Wrapped | `<object>: Word wrapped` |  |  | — |  |
| 3 | -84 | Multiline | `<object>: Multiline` |  |  | — |  |
| 4 | -85 | Callback > On Begin | `<object>: On Begin` |  |  | — |  |
| 5 | -86 | Callback > On End | `<object>: On End` |  |  | — |  |
| 6 | -87 | Callback > On Line Begin | `<object>: On Begin Line` |  |  | — |  |
| 7 | -88 | Callback > On Line End | `<object>: On End Line` |  |  | — |  |
| 8 | -89 | Callback > On Character | `<object>: On Char` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change Alterable Text... | `Change Text: <p0>` |  | string expression “Change the text” | — |  |
| 1 | 81 | Object > Set Position... | `Set Position <p0>, <p1>` |  | numeric expression “Set the X Position”; numeric expression “Set the Y Position” | — |  |
| 2 | 82 | Object > Set X Position... | `Set X Position: <p0>` |  | numeric expression “Set the X Position” | — |  |
| 3 | 83 | Object > Set Y Position... | `Set Y Position: <p0>` |  | numeric expression “Set the Y Position” | — |  |
| 4 | 84 | Characters > Set Character Width... | `Set Character width: <p0>` |  | numeric expression “Set Character Width” | — |  |
| 5 | 85 | Characters > Set Character Height... | `Set Character Height: <p0>` |  | numeric expression “Set Character Height” | — |  |
| 6 | 86 | Characters > Set Character Offset... | `Set Character Offset: <p0>` |  | numeric expression “Set Character Offset” | — |  |
| 7 | 87 | Characters > Set Character Map... | `Set Character Map: <p0>` |  | string expression “Set Character Map” | — |  |
| 13 | 93 | Image > Load Image... | `Load image: <p0>` |  | file name “Load an image” | — |  |
| 14 | 94 | Image > Save Image... | `Save image: <p0>` |  | file name “Save an image” | — |  |
| 15 | 95 | Image > Set Image Width... | `Set Image Width: <p0>` |  | numeric expression “Set Width of the image” | — |  |
| 16 | 96 | Image > Set Image Height... | `Set Image height: <p0>` |  | numeric expression “Set Width of the image” | — |  |
| 17 | 97 | Image > Set Image X Offset... | `Set Image X Offset: <p0>` |  | numeric expression “Set Image Drawing offset” | — |  |
| 18 | 98 | Image > Set Image Y Offset... | `Set Image Y Offset: <p0>` |  | numeric expression “Set Image Drawing offset” | — |  |
| 19 | 99 | Set Transparency > Set On | `Set Transparency On` |  |  | — |  |
| 20 | 100 | Set Transparency > Set Off | `Set Transparency Off` |  |  | — |  |
| 21 | 101 | Set Transparency > Toggle | `Toggle Transparancy` |  |  | — |  |
| 25 | 105 | Set Text Functions > Set On | `Set Text Functions On` |  |  | — |  |
| 26 | 106 | Set Text Functions > Set Off | `Set Text Functions Off` |  |  | — |  |
| 27 | 107 | Set Text Functions > Toggle | `Toggle transparancy` |  |  | — |  |
| 31 | 111 | Word Wrapping > Set On | `Set Word Wrapping On` |  |  | — |  |
| 32 | 112 | Word Wrapping > Set Off | `Set Word Wrapping Off` |  |  | — |  |
| 33 | 113 | Word Wrapping > Toggle | `Toggle Word Wrapping` |  |  | — |  |
| 34 | 114 | Text > Load Text from file... | `Load Text: <p0>` |  | file name “Filename of file to load” | — |  |
| 35 | 115 | Text > Save Text to file... | `Save Text: <p0>` |  | file name “Filename of file to save to” | — |  |
| 36 | 116 | Alignment > Set Horizontal Alignment... | `Set Horizontal Alignment to: <p0>` |  | numeric expression “Set Horizontal Alignment (0=Left,1=Center,2=Right)” | — |  |
| 37 | 117 | Alignment > Set Vertical Alignment... | `Set Vertical Alignment to: <p0>` |  | numeric expression “Set Vertical Alignment (0=Top,1=Center,2=Bottom)” | — |  |
| 38 | 118 | Margins > Set Top Margin... | `Set Top Margin: <p0>` |  | numeric expression “Set Top Margin” | — |  |
| 39 | 119 | Margins > Set Left Margin... | `Set Left Margin: <p0>` |  | numeric expression “Set Left Margin” | — |  |
| 40 | 120 | Margins > Set Right Margin... | `Set Right Margin: <p0>` |  | numeric expression “Set Right Margin” | — |  |
| 41 | 121 | Margins > Set Bottom Margin... | `Set Bottom Margin: <p0>` |  | numeric expression “Set Bottom Margin” | — |  |
| 42 | 122 | Scrolling > Set Horizontal Scrolling... | `Set Horizontal Scroll: <p0>` |  | numeric expression “Set Horizontal Scroll” | — |  |
| 43 | 123 | Scrolling > Set Vertical Scrolling... | `Set Vertical Scroll: <p0>` |  | numeric expression “Set Vertical Scroll” | — |  |
| 44 | 124 | Characters > Set Horizontal Spacing... | `Set Horizontal Character Spacing: <p0>` |  | numeric expression “Set Horizontal Character Spacing” | — |  |
| 45 | 125 | Characters > Set Vertical Spacing... | `Set Vertical Character Spacing: <p0>` |  | numeric expression “Set Vertical Character Spacing” | — |  |
| 46 | 126 | Multiline > Set On | `Set Multiline On` |  |  | — |  |
| 47 | 127 | Multiline > Set Off | `Set Multiline Off` |  |  | — |  |
| 48 | 128 | Multiline > Toggle | `Toggle Multiline` |  |  | — |  |
| 49 | 129 | Append Text... | `Append String: <p0>` |  | string expression “Append String” | — |  |
| 50 | 130 | Animation > Change Speed... | `Set Anim Speed: <p0>` |  | numeric expression “Set Anim Speed” | — |  |
| 51 | 131 | Animation > Set Animation Type... | `Set Anim Type: <p0>` |  | numeric expression “Set Anim Type” | — |  |
| 52 | 132 | Animation > Set Animation Param... | `Set Anim Param <p0> to <p1>` |  | numeric expression “Which Param”; numeric expression “Param Value” | — |  |
| 53 | 133 | Text > Set Tab Width... | `Set Tab Width` |  | numeric expression “Number of characters” | — |  |
| 54 | 134 | Text > Load Text Using Selector... | `Load Text using Selector` |  | string expression “Dialog Box Title”; string expression “File Filter - Text (*.txt)\|*.txt\|All Files(*.*)\|*.*”; numeric expression “Style (See Help docs for values - Default 6144)”; numeric expression “Default Filter”; string expression “Default Path (remember to include the file extension, *.* for all)” | — |  |
| 55 | 135 | Text > Save Text Using Selector... | `Save Text using Selector` |  | string expression “Dialog Box Title”; string expression “File Filter - Text (*.txt)\|*.txt\|All Files(*.*)\|*.*”; numeric expression “Style (See Help docs for values - Default 6144)”; numeric expression “Default Filter”; string expression “Default Path (remember to include the file extension, *.* for all)” | — |  |
| 56 | 136 | Color > Set Transparant Color... | `Set Transparent Color to: <p0>` |  | numeric expression “Set Transparent Color” | — |  |
| 57 | 137 | Color > Replace Color... | `Replace Color <p0> with <p1>` |  | numeric expression “Old Color”; numeric expression “New Color” | — |  |
| 58 | 138 | Object > Set Object Width... | `Set Width: <p0>` |  | numeric expression “Set Width” | — |  |
| 59 | 139 | Object > Set Object Height... | `Set Height: <p0>` |  | numeric expression “Set Height” | — |  |
| 60 | 140 | Callback > Character > Destination X... | `Char: New X Destination: <p0>` |  | numeric expression “Char: New X Destination” | — |  |
| 61 | 141 | Callback > Character > Destination Y... | `Char: New Y Destination: <p0>` |  | numeric expression “Char: New Y Destination” | — |  |
| 62 | 142 | Callback > Character > Source X... | `Char: Source X: <p0>` |  | numeric expression “Char: Source X” | — |  |
| 63 | 143 | Callback > Character > Source Y... | `Char: Source Y: <p0>` |  | numeric expression “Char: Source Y” | — |  |
| 64 | 144 | Callback > Character > Character Width... | `Char: Character Width: <p0>` |  | numeric expression “Char: Character Width” | — |  |
| 65 | 145 | Callback > Character > Character Height... | `Char: Character Height: <p0>` |  | numeric expression “Char: Character Height” | — |  |
| 66 | 146 | Callback > Character > Transparency... | `Char: Character Transparency: <p0>` |  | numeric expression “Char: Character Transparency” | — |  |
| 67 | 147 | Callback > Character > Character... | `Char: Character: <p0>` |  | numeric expression “Char: Character” | — |  |
| 68 | 148 | Callback > Character > Image X Offset... | `Char: Image X Offset: <p0>` |  | numeric expression “Char: Image X Offset” | — |  |
| 69 | 149 | Callback > Character > Image Y Offset... | `Char: Image Y Offset: <p0>` |  | numeric expression “Char: Image Y Offset” | — |  |
| 70 | 150 | Callback > Begin Line > X... | `Line: Destination X: <p0>` |  | numeric expression “Line: Destination X” | — |  |
| 71 | 151 | Callback > Begin Line > Y... | `Line: Destination Y: <p0>` |  | numeric expression “Line: Destination Y” | — |  |
| 72 | 152 | Callback > Begin Line > Transparency... | `Line: Transparency: <p0>` |  | numeric expression “Line: Transparency” | — |  |
| 73 | 153 | Callback > Begin Line > Image X Offset... | `Line: Image X offset: <p0>` |  | numeric expression “Line: Image X Offset” | — |  |
| 74 | 154 | Callback > Begin Line > Image Y Offset... | `Line: Image Y Offset: <p0>` |  | numeric expression “Line: Image Y Offset” | — |  |
| 75 | 155 | Balloon > Off | `Set Balloon off` |  |  | — |  |
| 76 | 156 | Balloon > Balloon... | `Set Balloon ( x: <p0>, y: <p1>, handle: <p2> other: <p3> );` |  | numeric expression “Set Balloon : X”; numeric expression “Set Balloon : Y”; numeric expression “Set Balloon : Handle”; numeric expression “Set Balloon : Other” | — |  |
| 77 | 157 | Balloon > Source... | `Set Balloon source : <p0>, <p1>` |  | numeric expression “Set Balloon source x”; numeric expression “Set Balloon source y” | — |  |
| 78 | 158 | Balloon > Size... | `Set Balloon Range: Min(<p0>, <p1>), Max(<p2>, <p3>)` |  | numeric expression “Set Balloon Minimum X”; numeric expression “Set Balloon Minimum Y”; numeric expression “Set Balloon Maximum X”; numeric expression “Set Balloon Maximum Y” | — |  |
| 79 | 159 | Send Message... | `SendMessage( Message: <p0>, Params: <p1>, <p2> )` |  | numeric expression “Message”; numeric expression “Parameter1”; numeric expression “Parameter2” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get String | `Text$(` |  | → string | — |  |
| 1 | 81 | Character > Get Character Width | `CharWidth(` |  |  | — |  |
| 2 | 82 | Character > Get Character Height | `CharHeight(` |  |  | — |  |
| 3 | 83 | Character > Get Character Offset | `CharOffset(` |  |  | — |  |
| 4 | 84 | Character > Get Character Map | `CharMap$(` |  | → string | — |  |
| 5 | 85 | Image > Get Image Width | `ImageWidth(` |  |  | — |  |
| 6 | 86 | Image > Get Image Height | `ImageHeight(` |  |  | — |  |
| 7 | 87 | Image > Get Image Filename | `ImageFilename(` |  |  | — |  |
| 9 | 89 | Alignment > Get Horizontal Alignment | `HorzAlign(` |  |  | — |  |
| 10 | 90 | Alignment > Get Vertical Alignment | `VertAlign(` |  |  | — |  |
| 11 | 91 | Margins > Get Top Margin | `MarginTop(` |  |  | — |  |
| 12 | 92 | Margins > Get Left Margin | `MarginLeft(` |  |  | — |  |
| 13 | 93 | Margins > Get Right Margin | `MarginRight(` |  |  | — |  |
| 14 | 94 | Margins > Get Bottom Margin | `MarginBottom(` |  |  | — |  |
| 15 | 95 | Scrolling > Get Horizontal Scroll | `ScrollX(` |  |  | — |  |
| 16 | 96 | Scrolling > Get Vertical Scroll | `ScrollY(` |  |  | — |  |
| 17 | 97 | Character > Get Horizontal Character Spacing | `CharXSpace(` |  |  | — |  |
| 18 | 98 | Character > Get Vertical Character Spacing | `CharYSpace(` |  |  | — |  |
| 19 | 99 | Object > Horizontal Position | `XObjPos(` |  |  | — |  |
| 20 | 100 | Object > Vertical Position | `YObjPos(` |  |  | — |  |
| 21 | 101 | Object > Get Width | `ObjWidth(` |  |  | — |  |
| 22 | 102 | Object > Get Height | `ObjHeight(` |  |  | — |  |
| 23 | 103 | Advanced > Convert to ASCII Value... | `AsciiVal(` |  | string | — |  |
| 24 | 104 | Advanced > Convert to ASCII Character... | `AsciiChar$(` |  | number → string | — |  |
| 25 | 105 | Advanced > Get Uppercase of buffer | `Upper$(` |  | → string | — |  |
| 26 | 106 | Advanced > Get Lowercase of buffer | `Lower$(` |  | → string | — |  |
| 27 | 107 | Advanced > Get Reverse of buffer | `Reverse$(` |  | → string | — |  |
| 28 | 108 | Advanced > Extract left of buffer... | `GetLeft$(` |  | number → string | — |  |
| 29 | 109 | Advanced > Extract right of buffer... | `GetRight$(` |  | number → string | — |  |
| 30 | 110 | Advanced > Extract middle of buffer... | `GetMid$(` |  | number; number → string | — |  |
| 31 | 111 | Advanced > Length of buffer | `GetLen(` |  |  | — |  |
| 32 | 112 | Advanced > Number of lines | `NumLines(` |  |  | — |  |
| 33 | 113 | Advanced > Get Line... | `GetLine$(` |  | number → string | — |  |
| 34 | 114 | Image > Get Image X Offset | `ImageXOffset(` |  |  | — |  |
| 35 | 115 | Image > Get Image Y Offset | `ImageYOffset(` |  |  | — |  |
| 36 | 116 | Animation > Get Animation Speed | `AnimSpeed(` |  |  | — |  |
| 37 | 117 | Animation > Get Animation Type | `AnimType(` |  |  | — |  |
| 38 | 118 | Animation > Get Animation Param... | `AnimParam(` |  | number | — |  |
| 39 | 119 | Text > Get Tab Width | `GetTabWidth(` |  |  | — |  |
| 40 | 120 | Text > Get Text Filename | `GetTextFilename$(` |  | → string | — |  |
| 41 | 121 | Color > Get Transparant Color | `GetTransColor(` |  |  | — |  |
| 42 | 122 | Character > Get Char From Character Map... | `GetCharFMap$(` |  | number → string | — |  |
| 43 | 123 | Callback > Current Character on line | `CBK_XCount(` |  |  | — |  |
| 44 | 124 | Callback > Current Line Number | `CBK_CurLine(` |  |  | — |  |
| 45 | 125 | Callback > Number of characters on line | `CBK_LineLen(` |  |  | — |  |
| 46 | 126 | Callback > Number of lines | `CBK_LineCount(` |  |  | — |  |
| 47 | 127 | Callback > Character > Destination X | `CCBK_DestX(` |  |  | — |  |
| 48 | 128 | Callback > Character > Destination Y | `CCBK_DestY(` |  |  | — |  |
| 49 | 129 | Callback > Character > Source X | `CCBK_SrcX(` |  |  | — |  |
| 50 | 130 | Callback > Character > Source Y | `CCBK_SrcY(` |  |  | — |  |
| 51 | 131 | Callback > Character > Character Width | `CCBK_CharWidth(` |  |  | — |  |
| 52 | 132 | Callback > Character > Character Height | `CCBK_CharHeight(` |  |  | — |  |
| 53 | 133 | Callback > Character > Transparency | `CCBK_Trans(` |  |  | — |  |
| 54 | 134 | Callback > Character > Character | `CCBK_Char(` |  |  | — |  |
| 55 | 135 | Callback > Character > Image X Offset | `CCBK_ImgX(` |  |  | — |  |
| 56 | 136 | Callback > Character > Image Y Offset | `CCBK_ImgY(` |  |  | — |  |
| 57 | 137 | Callback > Begin Line > X | `LCBK_DestX(` |  |  | — |  |
| 58 | 138 | Callback > Begin Line > Y | `LCBK_DestY(` |  |  | — |  |
| 59 | 139 | Callback > Begin Line > Transparency of line | `LCBK_Trans(` |  |  | — |  |
| 60 | 140 | Callback > Begin Line > Image X Offset | `LCBK_ImgX(` |  |  | — |  |
| 61 | 141 | Callback > Begin Line > Image Y Offset | `LCBK_ImgY(` |  |  | — |  |
| 62 | 142 | Balloon > Get X Position | `GetBalloonX(` |  |  | — |  |
| 63 | 143 | Balloon > Get Y Position | `GetBalloonY(` |  |  | — |  |
| 64 | 144 | Balloon > Get Handle | `GetBalloonHandle(` |  |  | — |  |
| 65 | 145 | Balloon > Get Flags | `GetBalloonFlags(` |  |  | — |  |
| 66 | 146 | Balloon > Min X | `GetBalloonMinX(` |  |  | — |  |
| 67 | 147 | Balloon > Min Y | `GetBalloonMinY(` |  |  | — |  |
| 68 | 148 | Balloon > Max X | `GetBalloonMaxX(` |  |  | — |  |
| 69 | 149 | Balloon > Max Y | `GetBalloonMaxY(` |  |  | — |  |
