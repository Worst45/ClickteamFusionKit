# Extension txtblt

- Fichier : `txtblt.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Transparent | `<objet>: Transparent` |  |  | — |  |
| 1 | -82 | Text Functions | `<objet>: Text Functions` |  |  | — |  |
| 2 | -83 | Word Wrapped | `<objet>: Word wrapped` |  |  | — |  |
| 3 | -84 | Multiline | `<objet>: Multiline` |  |  | — |  |
| 4 | -85 | Callback > On Begin | `<objet>: On Begin` |  |  | — |  |
| 5 | -86 | Callback > On End | `<objet>: On End` |  |  | — |  |
| 6 | -87 | Callback > On Line Begin | `<objet>: On Begin Line` |  |  | — |  |
| 7 | -88 | Callback > On Line End | `<objet>: On End Line` |  |  | — |  |
| 8 | -89 | Callback > On Character | `<objet>: On Char` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change Alterable Text... | `Change Text: <p0>` |  | expression chaîne « Change the text » | — |  |
| 1 | 81 | Object > Set Position... | `Set Position <p0>, <p1>` |  | expression numérique « Set the X Position » ; expression numérique « Set the Y Position » | — |  |
| 2 | 82 | Object > Set X Position... | `Set X Position: <p0>` |  | expression numérique « Set the X Position » | — |  |
| 3 | 83 | Object > Set Y Position... | `Set Y Position: <p0>` |  | expression numérique « Set the Y Position » | — |  |
| 4 | 84 | Characters > Set Character Width... | `Set Character width: <p0>` |  | expression numérique « Set Character Width » | — |  |
| 5 | 85 | Characters > Set Character Height... | `Set Character Height: <p0>` |  | expression numérique « Set Character Height » | — |  |
| 6 | 86 | Characters > Set Character Offset... | `Set Character Offset: <p0>` |  | expression numérique « Set Character Offset » | — |  |
| 7 | 87 | Characters > Set Character Map... | `Set Character Map: <p0>` |  | expression chaîne « Set Character Map » | — |  |
| 13 | 93 | Image > Load Image... | `Load image: <p0>` |  | nom de fichier « Load an image » | — |  |
| 14 | 94 | Image > Save Image... | `Save image: <p0>` |  | nom de fichier « Save an image » | — |  |
| 15 | 95 | Image > Set Image Width... | `Set Image Width: <p0>` |  | expression numérique « Set Width of the image » | — |  |
| 16 | 96 | Image > Set Image Height... | `Set Image height: <p0>` |  | expression numérique « Set Width of the image » | — |  |
| 17 | 97 | Image > Set Image X Offset... | `Set Image X Offset: <p0>` |  | expression numérique « Set Image Drawing offset » | — |  |
| 18 | 98 | Image > Set Image Y Offset... | `Set Image Y Offset: <p0>` |  | expression numérique « Set Image Drawing offset » | — |  |
| 19 | 99 | Set Transparency > Set On | `Set Transparency On` |  |  | — |  |
| 20 | 100 | Set Transparency > Set Off | `Set Transparency Off` |  |  | — |  |
| 21 | 101 | Set Transparency > Toggle | `Toggle Transparancy` |  |  | — |  |
| 25 | 105 | Set Text Functions > Set On | `Set Text Functions On` |  |  | — |  |
| 26 | 106 | Set Text Functions > Set Off | `Set Text Functions Off` |  |  | — |  |
| 27 | 107 | Set Text Functions > Toggle | `Toggle transparancy` |  |  | — |  |
| 31 | 111 | Word Wrapping > Set On | `Set Word Wrapping On` |  |  | — |  |
| 32 | 112 | Word Wrapping > Set Off | `Set Word Wrapping Off` |  |  | — |  |
| 33 | 113 | Word Wrapping > Toggle | `Toggle Word Wrapping` |  |  | — |  |
| 34 | 114 | Text > Load Text from file... | `Load Text: <p0>` |  | nom de fichier « Filename of file to load » | — |  |
| 35 | 115 | Text > Save Text to file... | `Save Text: <p0>` |  | nom de fichier « Filename of file to save to » | — |  |
| 36 | 116 | Alignment > Set Horizontal Alignment... | `Set Horizontal Alignment to: <p0>` |  | expression numérique « Set Horizontal Alignment (0=Left,1=Center,2=Right) » | — |  |
| 37 | 117 | Alignment > Set Vertical Alignment... | `Set Vertical Alignment to: <p0>` |  | expression numérique « Set Vertical Alignment (0=Top,1=Center,2=Bottom) » | — |  |
| 38 | 118 | Margins > Set Top Margin... | `Set Top Margin: <p0>` |  | expression numérique « Set Top Margin » | — |  |
| 39 | 119 | Margins > Set Left Margin... | `Set Left Margin: <p0>` |  | expression numérique « Set Left Margin » | — |  |
| 40 | 120 | Margins > Set Right Margin... | `Set Right Margin: <p0>` |  | expression numérique « Set Right Margin » | — |  |
| 41 | 121 | Margins > Set Bottom Margin... | `Set Bottom Margin: <p0>` |  | expression numérique « Set Bottom Margin » | — |  |
| 42 | 122 | Scrolling > Set Horizontal Scrolling... | `Set Horizontal Scroll: <p0>` |  | expression numérique « Set Horizontal Scroll » | — |  |
| 43 | 123 | Scrolling > Set Vertical Scrolling... | `Set Vertical Scroll: <p0>` |  | expression numérique « Set Vertical Scroll » | — |  |
| 44 | 124 | Characters > Set Horizontal Spacing... | `Set Horizontal Character Spacing: <p0>` |  | expression numérique « Set Horizontal Character Spacing » | — |  |
| 45 | 125 | Characters > Set Vertical Spacing... | `Set Vertical Character Spacing: <p0>` |  | expression numérique « Set Vertical Character Spacing » | — |  |
| 46 | 126 | Multiline > Set On | `Set Multiline On` |  |  | — |  |
| 47 | 127 | Multiline > Set Off | `Set Multiline Off` |  |  | — |  |
| 48 | 128 | Multiline > Toggle | `Toggle Multiline` |  |  | — |  |
| 49 | 129 | Append Text... | `Append String: <p0>` |  | expression chaîne « Append String » | — |  |
| 50 | 130 | Animation > Change Speed... | `Set Anim Speed: <p0>` |  | expression numérique « Set Anim Speed » | — |  |
| 51 | 131 | Animation > Set Animation Type... | `Set Anim Type: <p0>` |  | expression numérique « Set Anim Type » | — |  |
| 52 | 132 | Animation > Set Animation Param... | `Set Anim Param <p0> to <p1>` |  | expression numérique « Which Param » ; expression numérique « Param Value » | — |  |
| 53 | 133 | Text > Set Tab Width... | `Set Tab Width` |  | expression numérique « Number of characters » | — |  |
| 54 | 134 | Text > Load Text Using Selector... | `Load Text using Selector` |  | expression chaîne « Dialog Box Title » ; expression chaîne « File Filter - Text (*.txt)\|*.txt\|All Files(*.*)\|*.* » ; expression numérique « Style (See Help docs for values - Default 6144) » ; expression numérique « Default Filter » ; expression chaîne « Default Path (remember to include the file extension, *.* for all) » | — |  |
| 55 | 135 | Text > Save Text Using Selector... | `Save Text using Selector` |  | expression chaîne « Dialog Box Title » ; expression chaîne « File Filter - Text (*.txt)\|*.txt\|All Files(*.*)\|*.* » ; expression numérique « Style (See Help docs for values - Default 6144) » ; expression numérique « Default Filter » ; expression chaîne « Default Path (remember to include the file extension, *.* for all) » | — |  |
| 56 | 136 | Color > Set Transparant Color... | `Set Transparent Color to: <p0>` |  | expression numérique « Set Transparent Color » | — |  |
| 57 | 137 | Color > Replace Color... | `Replace Color <p0> with <p1>` |  | expression numérique « Old Color » ; expression numérique « New Color » | — |  |
| 58 | 138 | Object > Set Object Width... | `Set Width: <p0>` |  | expression numérique « Set Width » | — |  |
| 59 | 139 | Object > Set Object Height... | `Set Height: <p0>` |  | expression numérique « Set Height » | — |  |
| 60 | 140 | Callback > Character > Destination X... | `Char: New X Destination: <p0>` |  | expression numérique « Char: New X Destination » | — |  |
| 61 | 141 | Callback > Character > Destination Y... | `Char: New Y Destination: <p0>` |  | expression numérique « Char: New Y Destination » | — |  |
| 62 | 142 | Callback > Character > Source X... | `Char: Source X: <p0>` |  | expression numérique « Char: Source X » | — |  |
| 63 | 143 | Callback > Character > Source Y... | `Char: Source Y: <p0>` |  | expression numérique « Char: Source Y » | — |  |
| 64 | 144 | Callback > Character > Character Width... | `Char: Character Width: <p0>` |  | expression numérique « Char: Character Width » | — |  |
| 65 | 145 | Callback > Character > Character Height... | `Char: Character Height: <p0>` |  | expression numérique « Char: Character Height » | — |  |
| 66 | 146 | Callback > Character > Transparency... | `Char: Character Transparency: <p0>` |  | expression numérique « Char: Character Transparency » | — |  |
| 67 | 147 | Callback > Character > Character... | `Char: Character: <p0>` |  | expression numérique « Char: Character » | — |  |
| 68 | 148 | Callback > Character > Image X Offset... | `Char: Image X Offset: <p0>` |  | expression numérique « Char: Image X Offset » | — |  |
| 69 | 149 | Callback > Character > Image Y Offset... | `Char: Image Y Offset: <p0>` |  | expression numérique « Char: Image Y Offset » | — |  |
| 70 | 150 | Callback > Begin Line > X... | `Line: Destination X: <p0>` |  | expression numérique « Line: Destination X » | — |  |
| 71 | 151 | Callback > Begin Line > Y... | `Line: Destination Y: <p0>` |  | expression numérique « Line: Destination Y » | — |  |
| 72 | 152 | Callback > Begin Line > Transparency... | `Line: Transparency: <p0>` |  | expression numérique « Line: Transparency » | — |  |
| 73 | 153 | Callback > Begin Line > Image X Offset... | `Line: Image X offset: <p0>` |  | expression numérique « Line: Image X Offset » | — |  |
| 74 | 154 | Callback > Begin Line > Image Y Offset... | `Line: Image Y Offset: <p0>` |  | expression numérique « Line: Image Y Offset » | — |  |
| 75 | 155 | Balloon > Off | `Set Balloon off` |  |  | — |  |
| 76 | 156 | Balloon > Balloon... | `Set Balloon ( x: <p0>, y: <p1>, handle: <p2> other: <p3> );` |  | expression numérique « Set Balloon : X » ; expression numérique « Set Balloon : Y » ; expression numérique « Set Balloon : Handle » ; expression numérique « Set Balloon : Other » | — |  |
| 77 | 157 | Balloon > Source... | `Set Balloon source : <p0>, <p1>` |  | expression numérique « Set Balloon source x » ; expression numérique « Set Balloon source y » | — |  |
| 78 | 158 | Balloon > Size... | `Set Balloon Range: Min(<p0>, <p1>), Max(<p2>, <p3>)` |  | expression numérique « Set Balloon Minimum X » ; expression numérique « Set Balloon Minimum Y » ; expression numérique « Set Balloon Maximum X » ; expression numérique « Set Balloon Maximum Y » | — |  |
| 79 | 159 | Send Message... | `SendMessage( Message: <p0>, Params: <p1>, <p2> )` |  | expression numérique « Message » ; expression numérique « Parameter1 » ; expression numérique « Parameter2 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get String | `Text$(` |  | → chaîne | — |  |
| 1 | 81 | Character > Get Character Width | `CharWidth(` |  |  | — |  |
| 2 | 82 | Character > Get Character Height | `CharHeight(` |  |  | — |  |
| 3 | 83 | Character > Get Character Offset | `CharOffset(` |  |  | — |  |
| 4 | 84 | Character > Get Character Map | `CharMap$(` |  | → chaîne | — |  |
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
| 23 | 103 | Advanced > Convert to ASCII Value... | `AsciiVal(` |  | chaîne | — |  |
| 24 | 104 | Advanced > Convert to ASCII Character... | `AsciiChar$(` |  | nombre → chaîne | — |  |
| 25 | 105 | Advanced > Get Uppercase of buffer | `Upper$(` |  | → chaîne | — |  |
| 26 | 106 | Advanced > Get Lowercase of buffer | `Lower$(` |  | → chaîne | — |  |
| 27 | 107 | Advanced > Get Reverse of buffer | `Reverse$(` |  | → chaîne | — |  |
| 28 | 108 | Advanced > Extract left of buffer... | `GetLeft$(` |  | nombre → chaîne | — |  |
| 29 | 109 | Advanced > Extract right of buffer... | `GetRight$(` |  | nombre → chaîne | — |  |
| 30 | 110 | Advanced > Extract middle of buffer... | `GetMid$(` |  | nombre ; nombre → chaîne | — |  |
| 31 | 111 | Advanced > Length of buffer | `GetLen(` |  |  | — |  |
| 32 | 112 | Advanced > Number of lines | `NumLines(` |  |  | — |  |
| 33 | 113 | Advanced > Get Line... | `GetLine$(` |  | nombre → chaîne | — |  |
| 34 | 114 | Image > Get Image X Offset | `ImageXOffset(` |  |  | — |  |
| 35 | 115 | Image > Get Image Y Offset | `ImageYOffset(` |  |  | — |  |
| 36 | 116 | Animation > Get Animation Speed | `AnimSpeed(` |  |  | — |  |
| 37 | 117 | Animation > Get Animation Type | `AnimType(` |  |  | — |  |
| 38 | 118 | Animation > Get Animation Param... | `AnimParam(` |  | nombre | — |  |
| 39 | 119 | Text > Get Tab Width | `GetTabWidth(` |  |  | — |  |
| 40 | 120 | Text > Get Text Filename | `GetTextFilename$(` |  | → chaîne | — |  |
| 41 | 121 | Color > Get Transparant Color | `GetTransColor(` |  |  | — |  |
| 42 | 122 | Character > Get Char From Character Map... | `GetCharFMap$(` |  | nombre → chaîne | — |  |
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
