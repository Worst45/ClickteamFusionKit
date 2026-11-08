# Extension scintilla

- File: `scintilla.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Control > Can undo ? | `<object>: Can undo ?` |  |  |
| 1 | -82 | Control > Can redo ? | `<object>: Can redo ?` |  |  |
| 2 | -83 | Notifications > Any notification | `<object>: Any notification` |  |  |
| 3 | -84 | Notifications > Character added | `<object>: Character <p0> added` |  | string expression “Character (Blank = any character, \n = New line)” |
| 4 | -85 | Notifications > Text modified | `<object>: Text modified` |  |  |
| 5 | -86 | Notifications > Margin clicked | `<object>: Margin clicked` |  |  |
| 6 | -87 | Notifications > Zoomed | `<object>: Zoomed` |  |  |
| 7 | -88 | Notifications > Double-clicked | `<object>: Double-clicked` |  |  |
| 8 | -89 | Notifications > Key pressed | `<object>: Key pressed` |  |  |
| 9 | -90 | Notifications > Hotspot clicked | `<object>: Hotspot clicked` |  |  |
| 10 | -91 | Notifications > Hotspot double-clicked | `<object>: Hotspot double-clicked` |  |  |
| 11 | -92 | Notifications > Indicator clicked | `<object>: Indicator clicked` |  |  |
| 12 | -93 | Notifications > Indicator released | `<object>: Indicator released` |  |  |
| 13 | -94 | Notifications > Calltip clicked | `<object>: Calltip clicked` |  |  |
| 14 | -95 | Notifications > Savepoint reached | `<object>: Savepoint reached` |  |  |
| 15 | -96 | Notifications > Savepoint left | `<object>: Savepoint left` |  |  |
| 16 | -97 | Notifications > Styling needed | `<object>: Styling needed` |  |  |
| 17 | -98 | Notifications > Painted | `<object>: Painted` |  |  |
| 18 | -99 | Control > Has focus ? | `<object>: Has focus ?` |  |  |
| 19 | -100 | Control > Can paste ? | `<object>: Can paste ?` |  |  |
| 20 | -101 | Notifications > Context-menu requested | `<object>: Context-menu requested` |  |  |
| 21 | -102 | Notifications > Text change attempted | `<object>: Text change attempted` |  |  |
| 22 | -103 | Notifications > UI updated | `<object>: UI updated` |  |  |
| 23 | -104 | Notifications > Autocompletion selected | `<object>: Autocompletion selected` |  |  |
| 24 | -105 | Notifications > Autocompletion cancelled | `<object>: Autocompletion cancelled` |  |  |
| 25 | -106 | Control > Overtype is enabled ? | `<object>: Overtype is enabled` |  |  |
| 26 | -107 | Notifications > Dwell start | `<object>: Dwell start` |  |  |
| 27 | -108 | Notifications > Dwell end | `<object>: Dwell end` |  |  |
| 28 | -109 | Search  Replace > Text found | `<object>: Text found` |  |  |
| 29 | -110 | Search  Replace > Text search failed | `<object>: Text search failed` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Text > Set text | `Set text to <p0>` |  | string expression “Text” |
| 1 | 81 | Style > Color | `Set color of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; color “Color” |
| 2 | 82 | Style > Background color | `Set background color of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; color “Color” |
| 3 | 83 | Style > Keywords | `Set keywords <p0> to <p1>` |  | numeric expression “Keywords ID”; string expression “Keywords” |
| 4 | 84 | Window > Send message | `Send message <p0>(<p1>, <p2>)` |  | numeric expression “Message”; numeric expression “WPARAM”; numeric expression “LPARAM” |
| 5 | 85 | Style > Bold state | `Set bold state of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Bold state (0, 1)” |
| 6 | 86 | Style > Italic state | `Set italic state of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Italic state (0, 1)” |
| 7 | 87 | Style > Underline state | `Set underline state of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Underline state (0, 1)” |
| 8 | 88 | Style > Case | `Set case of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Case (0: Unchanged, 1: Upper case, 2: Lower case)” |
| 9 | 89 | Style > Visibility | `Set visibility of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Visibility (0, 1)” |
| 10 | 90 | Style > Changeability | `Set changeability of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Changeability (0, 1)” |
| 11 | 91 | Style > Hotspot state | `Set hotspot state of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Hotspot state (0, 1)” |
| 12 | 92 | Style > Font face | `Set font face of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; string expression “Font face (E.g. Arial)” |
| 13 | 93 | Style > Font size | `Set font size of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “Font size” |
| 14 | 94 | Documents > Create document | `Create document` |  |  |
| 15 | 95 | Documents > Set current document | `Set current document to <p0>` |  | numeric expression “Index” |
| 16 | 96 | Documents > Delete document | `Delete document <p0>` |  | numeric expression “Index” |
| 17 | 97 | Block > Cut | `Cut block` |  |  |
| 18 | 98 | Block > Copy | `Copy block` |  |  |
| 19 | 99 | Block > Paste | `Paste block` |  |  |
| 20 | 100 | Block > Clear | `Clear block` |  |  |
| 21 | 101 | Block > Replace selection | `Replace selection with <p0>` |  | string expression “String to replace with” |
| 22 | 102 | Block > Select text | `Select characters <p0> to <p1>` |  | numeric expression “First character”; numeric expression “Second character” |
| 23 | 103 | Block > Select all | `Select all` |  |  |
| 24 | 104 | Block > Unselect block | `Unselect block` |  |  |
| 30 | 110 | Control > Autocompletion > Show list | `Show autocompletion list` |  | numeric expression “Number of characters already entered”; string expression “Space-separated list” |
| 33 | 113 | Control > Caret > Go to position | `Go to position <p0>` |  | numeric expression “Position” |
| 34 | 114 | Control > Caret > Go to line | `Go to line <p0>` |  | numeric expression “Line” |
| 35 | 115 | Control > History > Undo | `Undo` |  |  |
| 36 | 116 | Control > History > Redo | `Redo` |  |  |
| 37 | 117 | Control > History > Clear undo buffer | `Empty undo buffer` |  |  |
| 38 | 118 | Control > Folding > Toggle fold at | `Toggle fold at line <p0>` |  | numeric expression “Line” |
| 39 | 119 | Control > Zoom > Zoom in | `Zoom in` |  |  |
| 40 | 120 | Control > Zoom > Zoom out | `Zoom out` |  |  |
| 41 | 121 | Control > Zoom > Set zoom | `Set zoom to <p0>` |  | numeric expression “Zoom” |
| 42 | 122 | Control > Margins > Set width | `Set width of margin <p0> to <p1> px` |  | numeric expression “Margin ID (0-4)”; numeric expression “Width (px)” |
| 43 | 123 | Control > Margins > Set type | `Set type of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Type (0: Symbol, 1: Line number, 2: Text, 3: Right-aligned text)” |
| 44 | 124 | Control > Margins > Set symbol mask | `Set mask of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Bitmask, 0xFE000000 = Folding icons” |
| 45 | 125 | Control > Margins > Set sensitivity | `Set sensitivity of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Sensitivity (0: Select multiple lines easily, 1: Handle clicks on margin)” |
| 46 | 126 | Control > Calltips > Show calltip | `Show calltip with caption <p1> at <p0>` |  | numeric expression “Character”; string expression “Caption” |
| 47 | 127 | Control > Calltips > Cancel calltip | `Cancel calltip` |  |  |
| 48 | 128 | Window > Set width | `Set width to <p0>` |  | numeric expression “Width” |
| 49 | 129 | Window > Set height | `Set height to <p0>` |  | numeric expression “Height” |
| 50 | 130 | I/O > Open | `Open file <p0>` |  | file name “File” |
| 51 | 131 | I/O > Save | `Save to file <p0>` |  | file name “File” |
| 52 | 132 | Window > Set read-only | `Set read-only to <p0>` |  | numeric expression “Read-only (0, 1)” |
| 53 | 133 | Window > Set visible | `Set visible to <p0>` |  | numeric expression “Visible (0, 1)” |
| 54 | 134 | Window > Grab focus | `Grab focus` |  |  |
| 55 | 135 | I/O > Export to HTML | `Export to HTML: <p0>` |  | file name “File” |
| 56 | 136 | Control > History > Begin undo action | `Begin undo action` |  |  |
| 57 | 137 | Control > History > End undo action | `End undo action` |  |  |
| 58 | 138 | Control > Scrolling > Scroll | `Scroll <p0> columns and <p1> lines` |  | numeric expression “Columns”; numeric expression “Lines” |
| 59 | 139 | Control > Scrolling > Scroll to caret | `Scroll to caret` |  |  |
| 60 | 140 | Control > Scrolling > Set end at last lines | `Set scrolling end at last line to <p0>` |  | numeric expression “End at last line (0, 1)” |
| 61 | 141 | Control > Scrolling > Set scroll width | `Set scroll width to <p0>` |  | numeric expression “Scroll width” |
| 62 | 142 | Control > Scrolling > Set scroll width tracking | `Set scroll width tracking to <p0>` |  | numeric expression “Scroll width tracking (0, 1)” |
| 63 | 143 | Control > Search  Replace > Advanced > Set target > Set target from selection | `Set target from selection` |  |  |
| 64 | 144 | Control > Search  Replace > Advanced > Set target > Set target start | `Set target start to <p0>` |  | numeric expression “Target start” |
| 65 | 145 | Control > Search  Replace > Advanced > Set target > Set target end | `Set target end to <p0>` |  | numeric expression “Target end” |
| 66 | 146 | Control > Search  Replace > Set search flags | `Set search flags to <p0>` |  | numeric expression “Search flags, add together (2: Whole word, 4: Match case, 8: Word start, 16: Regexp, 32: Posix)” |
| 67 | 147 | Control > Search  Replace > Advanced > Search in target | `Search <p0> in target` |  | string expression “String” |
| 68 | 148 | Control > Search  Replace > Advanced > Replace target | `Replace target with <p0>` |  | string expression “String” |
| 69 | 149 | Control > Search  Replace > Advanced > Replace target using Regexp | `Replace target with <p0> using Regexp` |  | string expression “Regexp format” |
| 70 | 150 | Control > Search  Replace > Simple > Search anchor | `Search anchor` |  |  |
| 71 | 151 | Control > Search  Replace > Simple > Search next | `Search next match for <p0>` |  | string expression “String” |
| 72 | 152 | Control > Search  Replace > Simple > Search previous | `Search previous match for <p0>` |  | string expression “String” |
| 73 | 153 | Control > Search  Replace > Advanced > Set target > Set target | `Set target to <p0>, <p1>` |  | numeric expression “Target start”; numeric expression “Target end” |
| 74 | 154 | Control > Autocompletion > Set maximum size | `Set maximum size to <p0> columns, <p1> rows` |  | numeric expression “Columns”; numeric expression “Rows” |
| 75 | 155 | Control > Autocompletion > Autocomplete | `Autocomplete` |  | (unreliable parameters) |
| 76 | 156 | Control > Autocompletion > Set choose single | `Set choose single to <p0>` |  | numeric expression “Automatically choose single (0, 1)” |
| 77 | 157 | Control > Whitespace > Set visibility | `Set whitespace visibility to <p0>` |  | numeric expression “Visibility (0: None, 1: Always, 2:First character only)” |
| 78 | 158 | Control > Whitespace > Set color | `Set whitespace color to <p1> (Use: <p0>)` |  | numeric expression “Use color (0, 1)”; color “Color” |
| 79 | 159 | Control > Whitespace > Set background color | `Set whitespace background color to <p1> (Use: <p0>)` |  | numeric expression “Use color (0, 1)”; color “Background color” |
| 80 | 160 | Control > Whitespace > Set characters | `Set whitespace characters to <p0>` |  | string expression “Whitespace characters” |
| 81 | 161 | Control > Misc. > Set overtype | `Set overtype to <p0>` |  | numeric expression “Overtype (0, 1)” |
| 82 | 162 | Control > Lexer > Set lexer by ID | `Set lexer by ID <p0>` |  | numeric expression “Lexer ID” |
| 83 | 163 | Control > Lexer > Set lexer by name | `Set lexer by name <p0>` |  | string expression “Lexer name” |
| 84 | 164 | Text > Insert text | `Insert <p1> at <p0>` |  | numeric expression “Position (-1: End)”; string expression “Text” |
| 85 | 165 | Control > Calltips > Set highlighted region | `Set highlighted region of calltip to <p0>, <p1>` |  | numeric expression “Start position”; numeric expression “End position” |
| 87 | 167 | Control > Autocompletion > Set case sensitivity | `Set autocompletion's case sensitivity to <p0>` |  | numeric expression “Case sensitivity (0, 1)” |
| 88 | 168 | Control > Autocompletion > Select item | `Select <p0> in autocompletion list` |  | string expression “String to select” |
| 89 | 169 | Control > Autocompletion > Cancel list | `Cancel autocompletion list` |  |  |
| 90 | 170 | Control > Indicators > Set style | `Set style of indicator <p0> to <p1>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “Style (0: Plain, 1:Squiggly, 2: T shapes, 3: Diagonal hatching, 4:Strike out, 5: None, 6: Box, 7: Rounded box” |
| 91 | 171 | Control > Indicators > Set color | `Set color of indicator <p0> to <p1>` |  | numeric expression “Indicator ID (0-31)”; color “Color” |
| 92 | 172 | Control > Indicators > Fill range | `Fill range <p1>, <p2> with indicator <p0>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “Start position”; numeric expression “End position” |
| 93 | 173 | Control > Indicators > Clear range | `Clear range <p1>, <p2> from indicator <p0>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “Start position”; numeric expression “End position” |
| 95 | 175 | Control > Misc. > Highlight braces | `Highlight braces at <p0>` |  | numeric expression “Position” |
| 96 | 176 | Control > Command keys > Assign | `Assign command <p2> to key <p0> with modifier <p1>` |  | string expression “Key (See <Reference> in expressions, or use character, like "A")”; numeric expression “Modifier (Add together, Shift: 1, Ctrl: 2, Alt: 4)”; numeric expression “Command (See commands in expressions)” |
| 97 | 177 | Control > Command keys > Clear | `Clear key <p0> with modifier <p1>` |  | string expression “Key (See <Reference> in expressions, or use character, like "A")”; numeric expression “Modifier (Add together, Shift: 1, Ctrl: 2, Alt: 4)” |
| 98 | 178 | Control > Command keys > Clear all | `Clear all command keys` |  |  |
| 99 | 179 | Control > Autocompletion > Set separator | `Set autocompletion's separator to <p0>` |  | string expression “Separator” |
| 100 | 180 | Control > Container > Set styling | `Set next <p0> characters' style to <p1>` |  | numeric expression “Length”; numeric expression “Style ID” |
| 101 | 181 | Control > Container > Start styling | `Start styling at <p0> using mask <p1>` |  | numeric expression “Position”; numeric expression “Mask; if you're unsure, use 31” |
| 102 | 182 | Control > Container > Set line state | `Set state of line <p0> to <p1>` |  | numeric expression “Line”; numeric expression “State” |
| 103 | 183 | Control > Container > Set styling extended | `Set next <p0> characters' style to <p1> extended` |  | numeric expression “Length”; numeric expression “Style ID” |
| 104 | 184 | Control > Autocompletion > Set auto hide | `Set autocompletion's auto hide to <p0>` |  | numeric expression “Auto hide (0, 1)” |
| 105 | 185 | Control > Autocompletion > Set drop rest | `Set autocompletion's drop rest to <p0>` |  | numeric expression “Drop rest (0, 1)” |
| 106 | 186 | Control > Selection > Set color | `Set selection color to <p0>, <p1>` |  | color “Foreground color (-1: Deactivate)”; color “Background color (-1: Deactivate)” |
| 107 | 187 | Control > Caret > Set color | `Set caret color to <p0>` |  | color “Color” |
| 108 | 188 | Control > Caret > Set stickiness | `Set caret stickiness to <p0>` |  | numeric expression “Stickiness (0, 1)” |
| 109 | 189 | Control > Caret > Set period | `Set caret period to <p0> ms` |  | numeric expression “Period (ms)” |
| 110 | 190 | Control > Caret > Set width | `Set caret width to <p0> px` |  | numeric expression “Width (px)” |
| 111 | 191 | Control > Caret > Set style | `Set caret style to <p0>` |  | numeric expression “Style (0: Invisible, 1: Line, 2: Block)” |
| 112 | 192 | Control > Selection > Set alpha | `Set selection alpha to <p0>` |  | numeric expression “Alpha (0: Transparent - 255: Opaque, 256: No alpha)” |
| 113 | 193 | Control > Caret > Set line visibility | `Set caret line visibility to <p0>` |  | numeric expression “Visibility (0, 1)” |
| 114 | 194 | Control > Caret > Set line color | `Set caret line color to <p0>` |  | color “Color” |
| 115 | 195 | Control > Caret > Set line alpha | `Set caret line alpha to <p0>` |  | numeric expression “Alpha (0: Transparent - 255: Opaque, 256: No alpha)” |
| 116 | 196 | Style > Reset default | `Reset default style` |  |  |
| 117 | 197 | Style > Clear all | `Clear all styles to default` |  |  |
| 118 | 198 | Control > Selection > Set anchor | `Set anchor to <p0>` |  | numeric expression “Anchor position” |
| 119 | 199 | Documents > Set savepoint | `Set save point` |  |  |
| 120 | 200 | Control > Caret > Move caret inside view | `Move caret inside view` |  |  |
| 121 | 201 | Style > Property | `Set property <p0> to <p1>` |  | string expression “Property”; string expression “Value” |
| 122 | 202 | Control > Lexer > Load lexer from DLL | `Load lexer from DLL <p0>` |  | file name “Lexer DLL” |
| 123 | 203 | Control > Selection > Set visibility | `Set selection visibility to <p0>` |  | numeric expression “Visibility (0, 1)” |
| 125 | 205 | Control > Selection > Set mode | `Set selection mode to <p0>` |  | numeric expression “Mode (0: Stream, 1: Rectangle, 2: Lines)” |
| 126 | 206 | Style > EOL filled | `Set EOL filled of <p0> to <p1>` |  | string expression “Styles - Keywords support: ASM,C++,CSS,HTML,INI,Lua,Python,SQL,VB,XML (See <Reference> in expressions)”; numeric expression “End of line filled (0, 1)” |
| 127 | 207 | Control > Selection > Set EOL filled | `Set selection EOL filled to <p0>` |  | numeric expression “End of line filled (0, 1)” |
| 128 | 208 | Control > Margins > Set text | `Set text of margin at line <p0> to <p1>` |  | numeric expression “Line”; string expression “Text” |
| 129 | 209 | Control > Margins > Set style | `Set style of margin at line <p0> to <p1>` |  | numeric expression “Line”; numeric expression “Style ID” |
| 130 | 210 | Control > Margins > Set style offset | `Set margin style offset to <p0>` |  | numeric expression “Offset” |
| 131 | 211 | Control > Margins > Clear all text margins | `Clear all text margins` |  |  |
| 132 | 212 | Control > History > Set undo collection | `Set undo collection to <p0>` |  | numeric expression “Undo collection (0, 1)” |
| 133 | 213 | Control > Lexer > Colorize | `Colorize from <p0> to <p1>` |  | numeric expression “First character”; numeric expression “Second character” |
| 134 | 214 | Control > Misc. > Set word characters | `Set word characters to <p0>` |  | string expression “Word characters” |
| 135 | 215 | Text > Add styled text | `Add text <p1> with style <p0>` |  | numeric expression “Style”; string expression “Text” |
| 136 | 216 | Control > Command keys > Load default | `Load default command keys` |  |  |
| 137 | 217 | Text > Insert styled text | `Insert <p2> with style <p1> at <p0>` |  | numeric expression “Position (-1: End)”; numeric expression “Style”; string expression “Text” |
| 138 | 218 | Text > Add text | `Add text <p0>` |  | string expression “Text” |
| 139 | 219 | Control > Printing > Set color mode | `Set print color mode to <p0>` |  | numeric expression “Color mode (0: Normal, 1: Invert light, 2: Black on white, 3: Color on white, 4: Color on white default background)” |
| 140 | 220 | Control > Printing > Set wrap mode | `Set print wrap mode to <p0>` |  | numeric expression “Wrap mode (0: None, 1: Word, 2: Character)” |
| 141 | 221 | Control > Printing > Set magnification | `Set print magnification to <p0>` |  | numeric expression “Magnification (In number of points to add)” |
| 144 | 224 | Style > Clear document style | `Clear document style` |  |  |
| 145 | 225 | Control > Long lines > Set edge color | `Set edge color to <p0>` |  | color “Edge color” |
| 146 | 226 | Control > Long lines > Set edge column | `Set edge column to <p0>` |  | numeric expression “Column to display the marker at” |
| 147 | 227 | Control > Long lines > Set edge mode | `Set edge mode to <p0>` |  | numeric expression “Edge mode (0: None, 1: Line, 2: Background)” |
| 148 | 228 | Control > Folding > Set fold at | `Set fold at line <p0> to <p1>` |  | numeric expression “Line”; numeric expression “Fold (0: Closed, 1: Expanded)” |
| 149 | 229 | Control > Folding > Set fold flags | `Set fold flags to <p0>` |  | numeric expression “Fold flags, add together (1: Boxes, 2: Above expanded, 4: Above otherwise, 8: Below expanded, 16: Below otherwise, 64: Debug fold level)” |
| 150 | 230 | Control > Folding > Show lines | `Show lines <p0> to <p1>` |  | numeric expression “First line”; numeric expression “Last line” |
| 151 | 231 | Control > Folding > Hide lines | `Hide lines <p0> to <p1>` |  | numeric expression “First line”; numeric expression “Last line” |
| 152 | 232 | Control > Folding > Ensure visibility | `Ensure visibility of line <p0>` |  | numeric expression “Line to show” |
| 153 | 233 | Control > Misc. > Set mouse dwell time | `Set mouse dwell time to <p0> ms` |  | numeric expression “Dwell time in milliseconds (-1: Forever)” |
| 154 | 234 | Control > Search  Replace > Simple > Find text | `Search text <p0> in range (<p1>,<p2>)` |  | string expression “String”; numeric expression “Start position”; numeric expression “End position (-1: End)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Content > Text | `Text$(` |  | → string |
| 1 | 81 | Advanced > Pointer to string | `pStr(` |  | string “String” |
| 2 | 82 | Documents > Last created document | `LastDoc(` |  |  |
| 3 | 83 | Documents > Current document | `CurrentDoc(` |  |  |
| 4 | 84 | Caret  Positions > Caret | `Caret(` |  |  |
| 5 | 85 | Caret  Positions > Word start | `WordStart(` |  | number; number “Only word characters?” |
| 6 | 86 | Caret  Positions > Word end | `WordEnd(` |  | number; number “Only word characters?” |
| 7 | 87 | Notifications > Code | `NotifyCode(` |  |  |
| 8 | 88 | Notifications > On key pressed > Key modifier | `NotifyMod(` |  |  |
| 9 | 89 | Notifications > On (anything) clicked > Position | `NotifyPos(` |  |  |
| 10 | 90 | Notifications > On margin clicked > Margin | `NotifyMargin(` |  |  |
| 11 | 91 | Notifications > On key pressed > Key | `NotifyChar(` |  |  |
| 12 | 92 | Notifications > On character added > Character | `NotifyChar$(` |  | → string |
| 13 | 93 | Notifications > On text modified > Text | `NotifyModType(` |  |  |
| 15 | 95 | Notifications > On text modified > Length | `NotifyLen(` |  |  |
| 16 | 96 | Notifications > On text modified > Line | `NotifyLine(` |  |  |
| 17 | 97 | Notifications > On text modified > Number of lines added | `NotifyLinesAdded(` |  |  |
| 18 | 98 | Notifications > On text modified > Current fold level | `NotifyCurFoldLvl(` |  |  |
| 19 | 99 | Notifications > On text modified > Previous fold level | `NotifyPrevFoldLvl(` |  |  |
| 20 | 100 | Container > End styled | `EndStyled(` |  |  |
| 21 | 101 | Caret  Positions > Conversion > Position to column | `Pos2Col(` |  | number “Position” |
| 22 | 102 | Caret  Positions > Conversion > Line to Position | `Line2Pos(` |  | number “Line” |
| 23 | 103 | Caret  Positions > Conversion > Position to line | `Pos2Line(` |  | number “Position” |
| 24 | 104 | Caret  Positions > Selection start | `SelStart(` |  |  |
| 25 | 105 | Caret  Positions > Selection end | `SelEnd(` |  |  |
| 26 | 106 | Content > Line count | `Lines(` |  |  |
| 27 | 107 | Content > Line length | `LineLen(` |  | number “Line” |
| 28 | 108 | Content > Character | `Char$(` |  | number “Character” → string |
| 29 | 109 | Style > Style at position | `Style(` |  | number “Character” |
| 30 | 110 | Content > Line | `Line$(` |  | number “Line” → string |
| 31 | 111 | Documents > Number of documents | `NumDocs(` |  |  |
| 32 | 112 | Window > HWND | `HWND(` |  |  |
| 33 | 113 | Advanced > Send message | `SendMessage(` |  | number “Message”; number “WPARAM”; number “LPARAM” |
| 34 | 114 | Caret  Positions > Caret line | `CatLine(` |  |  |
| 35 | 115 | Caret  Positions > First visible line | `VisibleLine(` |  |  |
| 36 | 116 | Caret  Positions > Conversion > Point to position | `Point2Pos(` |  | number “X”; number “Y” |
| 37 | 117 | Caret  Positions > Conversion > Position to point X | `Pos2PX(` |  | number “Position” |
| 38 | 118 | Caret  Positions > Conversion > Position to point Y | `Pos2PY(` |  | number “Position” |
| 39 | 119 | System color | `SysColor(` |  | string “Name” |
| 40 | 120 | Window > Width | `Width(` |  |  |
| 41 | 121 | Window > Height | `Height(` |  |  |
| 42 | 122 | Style > Style ID | `StyleID(` |  | string “Style” |
| 43 | 123 | Content > Character value | `Char(` |  | number “Character” |
| 44 | 124 | Content > Range | `Range$(` |  | number “First position”; number “Second position” → string |
| 45 | 125 | Style > Width of styled text | `TextWidth(` |  | number “Style ID”; string “Text” |
| 46 | 126 | Content > Selection | `Selection$(` |  | → string |
| 47 | 127 | Content > Length | `Length(` |  |  |
| 48 | 128 | Container > Maximum line state | `MaxLineState(` |  |  |
| 49 | 129 | Container > Line state | `LineState(` |  | number “Line” |
| 50 | 130 | Content > Sub-string | `SubStr$(` |  | number “Start position”; number “Length” → string |
| 51 | 131 | Caret  Positions > Conversion > Line end position | `LineEndPos(` |  | number “Line” |
| 52 | 132 | Caret  Positions > Lines on screen | `LinesOnScreen(` |  |  |
| 53 | 133 | Documents > Modified flag | `DocModified(` |  |  |
| 54 | 134 | Commands > Caret > Down > Move | `LineDown(` |  |  |
| 55 | 135 | Commands > Caret > Down > Extend | `LineDownE(` |  |  |
| 56 | 136 | Commands > Caret > Down > Rectangle extend | `LineDownRE(` |  |  |
| 57 | 137 | Commands > Caret > Down > Scroll | `LineScrollDown(` |  |  |
| 58 | 138 | Commands > Caret > Up > Move | `LineUp(` |  |  |
| 59 | 139 | Commands > Caret > Up > Extend | `LineUpE(` |  |  |
| 60 | 140 | Commands > Caret > Up > Rectangle extend | `LineUpRE(` |  |  |
| 61 | 141 | Commands > Caret > Up > Scroll | `LineScrollUp(` |  |  |
| 62 | 142 | Commands > Caret > Paragraph > Down > Move | `ParaDown(` |  |  |
| 63 | 143 | Commands > Caret > Paragraph > Down > Extend | `ParaDownE(` |  |  |
| 64 | 144 | Commands > Caret > Paragraph > Up > Move | `ParaUp(` |  |  |
| 65 | 145 | Commands > Caret > Paragraph > Up > Extend | `ParaUpE(` |  |  |
| 66 | 146 | Commands > Caret > Left > Move | `CharLeft(` |  |  |
| 67 | 147 | Commands > Caret > Left > Extend | `CharLeftE(` |  |  |
| 68 | 148 | Commands > Caret > Left > Rectangle extend | `CharLeftRE(` |  |  |
| 69 | 149 | Commands > Caret > Right > Move | `CharRight(` |  |  |
| 70 | 150 | Commands > Caret > Right > Extend | `CharRightE(` |  |  |
| 71 | 151 | Commands > Caret > Right > Rectangle extend | `CharRightRE(` |  |  |
| 72 | 152 | Commands > Caret > Word > Left > Move | `WordLeft(` |  |  |
| 73 | 153 | Commands > Caret > Word > Left > Extend | `WordLeftE(` |  |  |
| 74 | 154 | Commands > Caret > Word > Left > End move | `WordLeftEnd(` |  |  |
| 75 | 155 | Commands > Caret > Word > Left > End extend | `WordLeftEndE(` |  |  |
| 76 | 156 | Commands > Caret > Word > Left > Part move | `WordPartLeft(` |  |  |
| 77 | 157 | Commands > Caret > Word > Left > Part extend | `WordPartLeftE(` |  |  |
| 78 | 158 | Commands > Caret > Word > Right > Move | `WordRight(` |  |  |
| 79 | 159 | Commands > Caret > Word > Right > Extend | `WordRightE(` |  |  |
| 80 | 160 | Commands > Caret > Word > Right > End move | `WordRightEnd(` |  |  |
| 81 | 161 | Commands > Caret > Word > Right > End extend | `WordRightEndE(` |  |  |
| 82 | 162 | Commands > Caret > Word > Right > Part move | `WordPartRight(` |  |  |
| 83 | 163 | Commands > Caret > Word > Right > Part extend | `WordPartRightE(` |  |  |
| 84 | 164 | Commands > Line > Copy | `LineCopy(` |  |  |
| 85 | 165 | Commands > Line > Cut | `LineCut(` |  |  |
| 86 | 166 | Commands > Line > Delete | `LineDelete(` |  |  |
| 87 | 167 | Commands > Line > Transpose | `LineTranspose(` |  |  |
| 88 | 168 | Commands > Line > Duplicate | `LineDuplicate(` |  |  |
| 89 | 169 | Commands > Misc. > New line | `LineNew(` |  |  |
| 90 | 170 | Commands > Caret > Line start > Move | `Home(` |  |  |
| 91 | 171 | Commands > Caret > Line start > Extend | `HomeE(` |  |  |
| 92 | 172 | Commands > Caret > Line start > Rectangle extend | `HomeRE(` |  |  |
| 93 | 173 | Commands > Caret > Line start > Display move | `HomeDisplay(` |  |  |
| 94 | 174 | Commands > Caret > Line start > Display extend | `HomeDisplayE(` |  |  |
| 95 | 175 | Commands > Caret > Line start > Wrap move | `HomeWrap(` |  |  |
| 96 | 176 | Commands > Caret > Line start > Wrap extend | `HomeWrapE(` |  |  |
| 97 | 177 | Commands > Caret > Indent start > Move | `VCHome(` |  |  |
| 98 | 178 | Commands > Caret > Indent start > Extend | `VCHomeE(` |  |  |
| 99 | 179 | Commands > Caret > Indent start > Rectangle extend | `VCHomeRE(` |  |  |
| 100 | 180 | Commands > Caret > Indent start > Wrap move | `VCHomeWrap(` |  |  |
| 101 | 181 | Commands > Caret > Indent start > Wrap extend | `VCHomeWrapE(` |  |  |
| 102 | 182 | Commands > Caret > Line end > Move | `LineEnd(` |  |  |
| 103 | 183 | Commands > Caret > Line end > Extend | `LineEndE(` |  |  |
| 104 | 184 | Commands > Caret > Line end > Rectangle extend | `LineEndRE(` |  |  |
| 105 | 185 | Commands > Caret > Line end > Display move | `LineEndDisplay(` |  |  |
| 106 | 186 | Commands > Caret > Line end > Display extend | `LineEndDisplayE(` |  |  |
| 107 | 187 | Commands > Caret > Line end > Wrap move | `LineEndWrap(` |  |  |
| 108 | 188 | Commands > Caret > Line end > Wrap extend | `LineEndWrapE(` |  |  |
| 109 | 189 | Commands > Caret > Document > Start move | `DocStart(` |  |  |
| 110 | 190 | Commands > Caret > Document > Start extend | `DocStartE(` |  |  |
| 111 | 191 | Commands > Caret > Document > End move | `DocEnd(` |  |  |
| 112 | 192 | Commands > Caret > Document > End extend | `DocEndE(` |  |  |
| 113 | 193 | Commands > Caret > Page > Up > Move | `PageUp(` |  |  |
| 114 | 194 | Commands > Caret > Page > Up > Extend | `PageUpE(` |  |  |
| 115 | 195 | Commands > Caret > Page > Up > Rectangle extend | `PageUpRE(` |  |  |
| 116 | 196 | Commands > Caret > Page > Down > Move | `PageDown(` |  |  |
| 117 | 197 | Commands > Caret > Page > Down > Extend | `PageDownE(` |  |  |
| 118 | 198 | Commands > Caret > Page > Down > Rectangle extend | `PageDownRE(` |  |  |
| 119 | 199 | Commands > Caret > Page > Up > Move | `StutteredPageUp(` |  |  |
| 120 | 200 | Commands > Caret > Page > Up > Extend | `StutteredPageUpE(` |  |  |
| 121 | 201 | Commands > Caret > Page > Down > Move | `StutteredPageDown(` |  |  |
| 122 | 202 | Commands > Caret > Page > Down > Extend | `StutteredPageDownE(` |  |  |
| 123 | 203 | Commands > Delete > Back | `DeleteBack(` |  |  |
| 124 | 204 | Commands > Delete > Back not line | `DeleteBackNotLine(` |  |  |
| 125 | 205 | Commands > Delete > Word left | `DelWordLeft(` |  |  |
| 126 | 206 | Commands > Delete > Word right | `DelWordRight(` |  |  |
| 127 | 207 | Commands > Delete > Line left | `DelWordRightEnd(` |  |  |
| 129 | 209 | Commands > Delete > Line right | `DelLineRight(` |  |  |
| 130 | 210 | Commands > Misc. > Lower case | `LowerCase(` |  |  |
| 131 | 211 | Commands > Misc. > Upper case | `UpperCase(` |  |  |
| 132 | 212 | Commands > Misc. > Edit toggle overtype | `EditToggleOvertype(` |  |  |
| 133 | 213 | Commands > Misc. > Selection duplicate | `SelectionDuplicate(` |  |  |
| 134 | 214 | Commands > Misc. > Back tab | `BackTab(` |  |  |
| 135 | 215 | Commands > Misc. > Cancel | `Cancel(` |  |  |
| 136 | 216 | Commands > Misc. > Tab | `Tab(` |  |  |
| 137 | 217 | Commands > Misc. > Form feed | `FormFeed(` |  |  |
| 138 | 218 | Style > Style settings > Color | `StFore(` |  | number “Style ID” |
| 139 | 219 | Style > Style settings > Background color | `StBack(` |  | number “Style ID” |
| 140 | 220 | Style > Style settings > Font face | `StFont(` |  | number “Style ID” → string |
| 141 | 221 | Style > Style settings > Font size | `StSize(` |  | number “Style ID” |
| 142 | 222 | Style > Style settings > Bold state | `StBold(` |  | number “Style ID” |
| 143 | 223 | Style > Style settings > Italic state | `StItalic(` |  | number “Style ID” |
| 144 | 224 | Style > Style settings > Underline state | `StUnderline(` |  | number “Style ID” |
| 145 | 225 | Style > Style settings > Case | `StCase(` |  | number “Style ID” |
| 146 | 226 | Style > Style settings > Changeability | `StChangeable(` |  | number “Style ID” |
| 147 | 227 | Style > Style settings > EOL filled | `StEOLFill(` |  | number “Style ID” |
| 148 | 228 | Style > Style settings > Hotspot state | `StHotspot(` |  | number “Style ID” |
| 149 | 229 | Style > Style settings > Visibility | `StVisible(` |  | number “Style ID” |
| 150 | 230 | Style > Length of style | `StyleLength(` |  | number “Position” |
| 152 | 232 | Caret  Positions > Conversion > Visible from document line | `VisFromDocLine(` |  | number “Document line” |
| 153 | 233 | Caret  Positions > Conversion > Document line from visible | `DocFromVisLine(` |  | number “Visible line” |
| 154 | 234 | Notifications > On (anything) clicked > Line | `NotifyLine(` |  |  |
| 155 | 235 | Search  Replace > Found start | `FoundStart(` |  |  |
| 156 | 236 | Search  Replace > Found end | `FoundEnd(` |  |  |
| 157 | 237 | Search  Replace > Inline search | `SearchText(` |  | number “Flags”; number “String” |
| 158 | 238 | Search  Replace > Target start | `TargetStart(` |  |  |
| 159 | 239 | Search  Replace > Target end | `TargetEnd(` |  |  |
