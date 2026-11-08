# Extension SciNew

- File: `SciNew.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Can undo ? | `<object>: can undo ?` |  |  |
| 1 | -82 | Can redo ? | `<object>: can redo ?` |  |  |
| 2 | -83 | Notifications > On any notification | `<object>: on any notification` |  |  |
| 3 | -84 | Notifications > On character added | `<object>: on character added` |  |  |
| 4 | -85 | Notifications > On text modified | `<object>: on text modified` |  |  |
| 5 | -86 | Notifications > On margin clicked | `<object>: on margin clicked` |  |  |
| 6 | -87 | Notifications > On zoom | `<object>: on zoom` |  |  |
| 7 | -88 | Notifications > On double-clicked | `<object>: on double-clicked` |  |  |
| 8 | -89 | Notifications > On command key pressed | `<object>: on command key pressed` |  |  |
| 9 | -90 | Notifications > On hotspot clicked | `<object>: on hotspot clicked` |  |  |
| 10 | -91 | Notifications > On hotspot double-clicked | `<object>: on hotspot double-clicked` |  |  |
| 11 | -92 | Notifications > On indicator clicked | `<object>: on indicator clicked` |  |  |
| 12 | -93 | Notifications > On indicator released | `<object>: on indicator released` |  |  |
| 13 | -94 | Notifications > On calltip clicked | `<object>: on calltip clicked` |  |  |
| 14 | -95 | Notifications > On savepoint reached | `<object>: on savepoint reached` |  |  |
| 15 | -96 | Notifications > On savepoint left | `<object>: on savepoint left` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Control > Set text | `Set text to <p0>` |  | string expression “Text” |
| 1 | 81 | Control > Lexer > Set lexer by ID | `Set lexer ID to <p0>` |  | numeric expression “Lexer ID” |
| 2 | 82 | Send message | `Send Message <p0>(<p1>,<p2>)` |  | numeric expression “Message”; numeric expression “WPARAM”; numeric expression “LPARAM” |
| 3 | 83 | Style > Reset all to default (style 32) | `Reset all styles to default (style 32)` |  |  |
| 4 | 84 | Style > Set font face | `Set font face of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; string expression “Font face” |
| 5 | 85 | Style > Set font size | `Set font size of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Font size” |
| 6 | 86 | Style > Set foreground color | `Set foreground color of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; color “Color” |
| 7 | 87 | Style > Set background color | `Set background color of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; color “Color” |
| 8 | 88 | Style > Set bold state | `Set bold state of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Bold state (0/1)” |
| 9 | 89 | Style > Set italic state | `Set italic state of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Italic state (0/1)” |
| 10 | 90 | Style > Set underline state | `Set underline state of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Underline state (0/1)” |
| 11 | 91 | Style > Set case | `Set case of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Case 0 = unchanged, 1 = upper case, 2 = lower case” |
| 12 | 92 | Style > Set keywords | `Set keyword list <p0>` |  | numeric expression “Keyword list”; string expression “Keywords” |
| 13 | 93 | Style > Special > Selection > Set alpha | `Set selection alpha to <p0>` |  | numeric expression “Alpha (0-255, 256 = no alpha)” |
| 14 | 94 | Style > Special > Selection > Set foreground color | `Set selection foreground color to <p1> , Use = <p0>` |  | numeric expression “Use color (0/1)”; color “Color” |
| 15 | 95 | Style > Special > Selection > Set background color | `Set selection background color to <p1> , Use = <p0>` |  | numeric expression “Use color (0/1)”; color “Color” |
| 16 | 96 | Style > Special > Current line > Set background color | `Set line background color to <p0>` |  | color “Color” |
| 17 | 97 | Style > Special > Current line > Set alpha | `Set line color alpha to <p0>` |  | numeric expression “Alpha (0-255, 256 = no alpha)” |
| 18 | 98 | Control > Margins > Set width | `Set width of margin <p0> to <p1> px` |  | numeric expression “Margin ID (0-4)”; numeric expression “Width in pixels” |
| 19 | 99 | Control > Margins > Set type | `Set type of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Type: 0 = Symbol ; 1 = Line number” |
| 20 | 100 | Control > Margins > Set mask | `Set mask of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Bitmask, 0xFE000000 = Folding icons” |
| 21 | 101 | Control > Margins > Set sensitivity | `Set sensitivity of margin <p0> to <p1>` |  | numeric expression “Margin ID (0-4)”; numeric expression “Sensitivity: 0 = Makes it easy to select multiple lines ; 1 = Handles clicks on margin” |
| 22 | 102 | Set property | `Set property <p0> to <p1>` |  | string expression “Property (e.g. fold, fold.compact, fold.comment, fold.preprocessor)”; string expression “Value” |
| 23 | 103 | Control > Lexer > Set lexer by name | `Set lexer to <p0>` |  | string expression “Lexer (cpp, html, lua, pascal, perl, python, ruby, sql, tex, vb...)” |
| 24 | 104 | Window > Set focus | `Set focus to <p0>` |  | numeric expression “Set focus (0/1)” |
| 25 | 105 | Window > Set read-only | `Set read-only to <p0>` |  | numeric expression “Set read-only (0/1)” |
| 26 | 106 | Window > Size > Set width | `Set width to <p0>` |  | numeric expression “Width” |
| 27 | 107 | Window > Size > Set height | `Set height to <p0>` |  | numeric expression “Height” |
| 28 | 108 | Control > Container > Scrollbars > Show horizontal scrollbar | `Set horizontal scrollbar to <p0>` |  | numeric expression “Show horizontal scrollbar (0/1)” |
| 29 | 109 | Control > Container > Scrollbars > Show vertical scrollbar | `Set vertical scrollbar to <p0>` |  | numeric expression “Show vertical scrollbar (0/1)” |
| 30 | 110 | Block > Cut | `Cut block` |  |  |
| 31 | 111 | Block > Copy | `Copy block` |  |  |
| 32 | 112 | Block > Paste | `Paste block` |  |  |
| 33 | 113 | Block > Clear | `Clear block` |  |  |
| 34 | 114 | Block > Replace selection | `Replace selection with <p0>` |  | string expression “String to replace with” |
| 35 | 115 | Block > Select text | `Select characters <p0> to <p1>` |  | numeric expression “First character”; numeric expression “Second character” |
| 36 | 116 | Block > Select all | `Select all` |  |  |
| 37 | 117 | Block > Unselect block | `Unselect block` |  |  |
| 38 | 118 | Control > History > Undo | `Undo` |  |  |
| 39 | 119 | Control > History > Redo | `Redo` |  |  |
| 40 | 120 | Control > History > Clear undo buffer | `Clear undo buffer` |  |  |
| 41 | 121 | Control > Caret > Go to character | `Go to character <p0>` |  | numeric expression “Character” |
| 42 | 122 | Control > Caret > Go to line | `Go to line <p0>` |  | numeric expression “Line” |
| 43 | 123 | Control > Toggle fold | `Toggle fold at line <p0>` |  | numeric expression “Line” |
| 44 | 124 | Control > Miscellaneous > Set fold flags | `Set fold flags to <p0>` |  | numeric expression “Flags (See help)” |
| 45 | 125 | Control > Zoom > Zoom in | `Zoom in` |  |  |
| 46 | 126 | Control > Zoom > Zoom out | `Zoom out` |  |  |
| 47 | 127 | Control > Zoom > Set zoom | `Set zoom to <p0>` |  | numeric expression “Zoom” |
| 48 | 128 | Style > Special > Indicators > Set style | `Set style of indicator <p0> to <p1>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “Style (See help)” |
| 49 | 129 | Style > Special > Indicators > Set color | `Set color of indicator <p0> to <p1>` |  | numeric expression “Indicator ID (0-31)”; color “Color” |
| 50 | 130 | Control > Indicators > Fill range | `Fill range <p1>,<p2> with indicator <p0>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “First character”; numeric expression “Second character” |
| 51 | 131 | Control > Indicators > Clear range | `Remove indicator <p0> from range <p1>,<p2>` |  | numeric expression “Indicator ID (0-31)”; numeric expression “First character”; numeric expression “Second character” |
| 52 | 132 | Control > Indicators > Clear | `Remove indicator <p0>` |  | numeric expression “Indicator ID (0-31)” |
| 53 | 133 | Control > Calltips > Show calltip | `Show calltip with caption <p1> at <p0>` |  | numeric expression “Character”; string expression “Caption” |
| 54 | 134 | Control > Calltips > Cancel calltip | `Cancel calltip` |  |  |
| 55 | 135 | Style > Special > Calltips > Set foreground color | `Set foreground color of calltip to <p0>` |  | color “Color” |
| 56 | 136 | Style > Special > Calltips > Set background color | `Set background color of calltip to <p0>` |  | color “Color” |
| 57 | 137 | Control > Miscellaneous > Set wrap mode | `Set wrap mode to <p0>` |  | numeric expression “Wrap mode: 0 = No wrapping, 1 = wrap words, 2 = wrap characters” |
| 58 | 138 | Control > Miscellaneous > Set tab width | `Set tab width to <p0> spaces` |  | numeric expression “Tab width in number of spaces” |
| 59 | 139 | Style > Set visibility | `Set visibility of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Visibility (0/1)” |
| 60 | 140 | Style > Set changeability | `Set changeability state of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Changeability (0/1)” |
| 61 | 141 | Style > Set hotspot state | `Set hotspot state of style <p0> to <p1>` |  | numeric expression “Style ID (-1 = all normal, -2 = all non-special (Style->Special), See help for more)”; numeric expression “Hotspot state (0/1)” |
| 62 | 142 | Style > Special > Active hotspots > Set foreground color | `Set foreground color of active hotspots to <p1>, Use = <p0>` |  | numeric expression “Use color (0/1)”; color “Color” |
| 63 | 143 | Style > Special > Active hotspots > Set background color | `Set background color of active hotspots to <p1>, Use = <p0>` |  | numeric expression “Use color (0/1)”; color “Color” |
| 64 | 144 | Style > Special > Active hotspots > Set underline state | `Set underline state of active hotspots to <p0>` |  | numeric expression “Hotspot state (0/1)” |
| 65 | 145 | Control > Miscellaneous > Set savepoint | `Set savepoint` |  |  |
| 66 | 146 | Command keys > Assign command key | `Assign command <p2> to key <p0> with modifier <p1>` |  | numeric expression “Key (See help)”; numeric expression “Modifier (See help)”; numeric expression “Scintilla command (That has no params)” |
| 67 | 147 | Command keys > Clear command key | `Clear command of key <p0> with modifier <p1>` |  | numeric expression “Key (See help)”; numeric expression “Modifier (See help)” |
| 68 | 148 | Command keys > Clear all command keys | `Clear all commands` |  |  |
| 69 | 149 | Control > Autocompletion > Show list | `Show autocompletion list` |  | numeric expression “Length of the word entered”; string expression “List (Seperated by spaces)” |
| 70 | 150 | Control > Autocompletion > Cancel list | `Cancel autocompletion list` |  |  |
| 71 | 151 | File > Open | `Open file <p0>` |  | file name “File” |
| 72 | 152 | File > Save | `Save to file <p0>` |  | file name “File” |
| 73 | 153 | Control > Margins > Markers > Load folding preset | `Load folding icons preset <p0>` |  | numeric expression “Preset: 0 = Arrows, 1 = Plus/Minus, 2 = Circle tree, 3 = Box tree” |
| 74 | 154 | Control > Margins > Markers > Set symbol | `Set symbol of marker <p0> to <p1>` |  | numeric expression “Marker ID (0-31)”; numeric expression “Symbol (See help, 25 for pixmap)” |
| 75 | 155 | Control > Margins > Markers > Set pixmap | `Set pix map of marker <p0>` |  | numeric expression “Marker ID (0-31)”; string expression “X Pixmap” |
| 76 | 156 | Control > Margins > Markers > Set foreground color | `Set foreground color of marker <p0> to <p1>` |  | numeric expression “Marker ID (0-31, -1 = all)”; color “Color” |
| 77 | 157 | Control > Margins > Markers > Set background color | `Set background color of marker <p0> to <p1>` |  | numeric expression “Marker ID (0-31, -1 = all)”; color “Color” |
| 78 | 158 | Control > Margins > Markers > Set alpha | `Set alpha of marker <p0> to <p1>` |  | numeric expression “Marker ID (0-31, -1 = all)”; numeric expression “Alpha (0-255)” |
| 79 | 159 | Control > Margins > Markers > Add marker | `Add marker <p1> to line <p0>` |  | numeric expression “Line”; numeric expression “Marker ID (0-31)” |
| 80 | 160 | Control > Margins > Markers > Delete marker | `Delete marker <p1> from line <p0>` |  | numeric expression “Line”; numeric expression “Marker ID (0-31)” |
| 81 | 161 | Control > Miscellaneous > Set popup menu | `Set use of popup edit menu to <p0>` |  | numeric expression “Use popup (0/1)” |
| 82 | 162 | Control > Scrolling > Scroll to caret | `Scroll to caret` |  |  |
| 84 | 164 | Style > Load preset > C++ > Microsoft Visual C++ | `Load MS Visual C++ preset` |  |  |
| 85 | 165 | Style > Load preset > HTML > Firefox source code viewer | `Load Firefox source code viewer preset` |  |  |
| 86 | 166 | Style > Special > Selection > Load native colors | `Load native selection colors` |  |  |
| 87 | 167 | Style > Load preset > Lua > lua-users.org highlighter | `Load lua-users.org highlighter preset` |  |  |
| 88 | 168 | Control > Autocompletion > Trigger autocompletion | `Trigger autocompletion` |  |  |
| 89 | 169 | Control > Autocompletion > Maximal size > Set width | `Set maximal width in characters of autocompletion list to <p0>` |  | numeric expression “Number of characters” |
| 90 | 170 | Control > Autocompletion > Maximal size > Set height | `Set maximal height in rows of autocompletion list to <p0>` |  | numeric expression “Number of rows” |
| 91 | 171 | Control > Autocompletion > Select item | `Select item that matches <p0> in autocompletion list` |  | string expression “Text” |
| 92 | 172 | Style > Reset default style | `Reset default style` |  |  |
| 93 | 173 | Control > Brace lighting > Highlight braces | `Highlight braces at <p0> and <p1>` |  | numeric expression “First character”; numeric expression “Second character (-1 to find automaticly)” |
| 94 | 174 | Control > Brace lighting > Badlight braces | `Badlight brace at <p0>` |  | numeric expression “Character (-1 to remove highlighting)” |
| 95 | 175 | Control > Find and replace > Find text | `Find text <p1>, Flags = <p0>, Set target = <p2>, Select = <p3>` |  | numeric expression “Search flags (See help)”; string expression “Pattern / Text”; numeric expression “Set search target automatically (0/1)”; numeric expression “Select find automatically (0/1)” |
| 96 | 176 | Control > Find and replace > Set target | `Set search target to <p0>,<p1>` |  | numeric expression “First character”; numeric expression “Second character” |
| 97 | 177 | Control > Find and replace > Find in target | `Find text <p1> in target, Flags = <p0>` |  | numeric expression “Search flags (See help)”; string expression “Pattern / Text” |
| 98 | 178 | Control > Find and replace > Replace target | `Replace target with <p0>` |  | string expression “Text” |
| 99 | 179 | Control > Find and replace > Replace target using Regexp | `Replace target with <p0> using Regexp` |  | string expression “Pattern (Use \1 - \9 to access tagged matches)” |
| 100 | 180 | Control > Find and replace > Find text in range | `Find text <p1> in range (<p4>,<p5>), Flags = <p0>, Set target = <p2>, Select = <p3>` |  | numeric expression “Search flags (See help)”; string expression “Pattern / Text”; numeric expression “Set search target automatically (0/1)”; numeric expression “Select find automatically (0/1)”; numeric expression “First character”; numeric expression “Last character” |
| 101 | 181 | Control > Lexer > Set lexer by DLL | `Replace target by <p0> using Regexp` |  | string expression “File path” |
| 102 | 182 | Style > Special > Fold margin > Set background color | `Set fold margin background color to <p0> (Highlight = <p1>)` |  | color “Color (-1 to use default)”; color “Highlight color (-1 to use default)” |
| 103 | 183 | Control > Margins > Set blank margin width | `Set width of blank margin <p0> to <p1> px` |  | numeric expression “Which margin (0 = Left, 1 = Right)”; numeric expression “Width in pixels” |
| 104 | 184 | Control > Miscellaneous > Set indentation level at | `Set indentation level of line <p0> to <p1>` |  | numeric expression “Line”; numeric expression “Indentation level” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Text > Get text | `Text$(` |  | → string |
| 1 | 81 | Get lexer | `Lexer(` |  |  |
| 2 | 82 | Text > Get line | `Line$(` |  | number “Line number (0-based)” → string |
| 3 | 83 | Text > Get number of lines | `Lines(` |  |  |
| 4 | 84 | Caret and selection > Get caret position | `CaretChar(` |  |  |
| 5 | 85 | Conversion > Column from character | `Char2Col(` |  | number “Character” |
| 6 | 86 | Conversion > Character from line | `Line2Char(` |  | number “Line” |
| 7 | 87 | Conversion > Line from character | `Char2Line(` |  | number “Character” |
| 8 | 88 | Conversion > Character from coordinates | `Coor2Char(` |  | number “X coordinate”; number “Y coordinate” |
| 9 | 89 | Conversion > X coordinate from character | `CharX(` |  | number “Character” |
| 10 | 90 | Conversion > Y coordinate from character | `CharY(` |  | number “Character” |
| 11 | 91 | On notification > Get code | `NotifyCode(` |  |  |
| 12 | 92 | On notification > On command key pressed > Get key modifier | `NotifyMod(` |  |  |
| 13 | 93 | On notification > On (anything) clicked > Get position | `NotifyPos(` |  |  |
| 14 | 94 | On notification > On margin clicked > Get margin | `NotifyMargin(` |  |  |
| 15 | 95 | On notification > On command key pressed > Get key | `NotifyChar(` |  |  |
| 16 | 96 | Caret and selection > Get selection | `Sel$(` |  | → string |
| 17 | 97 | Caret and selection > Get selection start | `SelStart(` |  |  |
| 18 | 98 | Caret and selection > Get selection end | `SelEnd(` |  |  |
| 19 | 99 | On notification > On text modified > Get modification type | `NotifyModType(` |  |  |
| 20 | 100 | On notification > On text modified > Get text | `NotifyText$(` |  | → string |
| 21 | 101 | On notification > On text modified > Get length | `NotifyLen(` |  |  |
| 22 | 102 | On notification > On text modified > Get line | `NotifyLine(` |  |  |
| 23 | 103 | On notification > On text modified > Get number of lines added | `NotifyLinesAdded(` |  |  |
| 24 | 104 | On notification > On text modified > Get current fold level | `NotifyCurFoldLvl(` |  |  |
| 25 | 105 | On notification > On text modified > Get previous fold level | `NotifyPrevFoldLvl(` |  |  |
| 27 | 107 | Miscellaneous > Get fold at | `Fold(` |  | number “Line” |
| 28 | 108 | Miscellaneous > Get markers at | `Marker(` |  | number “Line” |
| 29 | 109 | Style > Get style at | `Style(` |  | number “Character” |
| 30 | 110 | Text > Get character at | `Char$(` |  | number “Character” → string |
| 31 | 111 | Caret and selection > Get caret line | `CaretLine(` |  |  |
| 32 | 112 | Style > Get ID from string | `SID(` |  | string “Keyword” |
| 34 | 114 | Find and replace > Get last find's start | `FindStart(` |  |  |
| 35 | 115 | Find and replace > Get last find's end | `FindEnd(` |  |  |
| 36 | 116 | Miscellaneous > Get indentation level at | `Indent(` |  | number “Line number (0-based)” |
| 37 | 117 | Text > Get length | `Length(` |  |  |
| 38 | 118 | Text > Get range | `Range$(` |  | number “First character”; number “Second character” → string |
