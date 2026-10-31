# Extension WebView2

- File: `WebView2.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Load complete | `<object>: On Load complete` |  |  | — |  |
| 1 | -82 | On Status Change | `<object>: On Status Change` |  |  | — |  |
| 2 | -83 | Started loading | `<object>: Started Loading?` |  |  | — |  |
| 3 | -84 | On Navigate | `<object>: On Navigate` |  |  | — |  |
| 4 | -85 | On Click | `<object>: On Click` |  |  | — |  |
| 5 | -86 | On Error | `<object>: On Error` |  |  | — |  |
| 6 | -87 | On Progress | `<object>: On Progress` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load URL | `Load URL=<p0>` |  | string expression “URL string” | — |  |
| 1 | 81 | Load HTML | `Load HTML=<p0>` |  | string expression “HTML  string” | — |  |
| 2 | 82 | Navigation > Go Forward | `Go Forward` |  |  | — |  |
| 3 | 83 | Navigation > Go Back | `Go Back` |  |  | — |  |
| 4 | 84 | Navigation > Stop | `Stop` |  |  | — |  |
| 5 | 85 | Navigation > Refresh | `Refresh` |  |  | — |  |
| 6 | 86 | Javascript > Execute Snippet | `Execute Snippet=<p0> with Arguments=<p1>` |  | string expression “Function or Procedure name”; string expression “Arguments string separated by comma, example: 1.23,'hello'” | — |  |
| 9 | 89 | Size/Control > Hide Web | `Hide Web` |  |  | — |  |
| 10 | 90 | Size/Control > Show Web | `Show Web` |  |  | — |  |
| 11 | 91 | Size/Control > Set X Position | `Set X position to <p0>` |  | numeric expression “Set X Position” | — |  |
| 12 | 92 | Size/Control > Set Y Position | `Set Y position to <p0>` |  | numeric expression “Set Y Position” | — |  |
| 13 | 93 | Size/Control > Set Horizontal Size | `Set Horizontal size to <p0>` |  | numeric expression “Set Horizontal size” | — |  |
| 14 | 94 | Size/Control > Set Vertical Size | `Set Vertical size to <p0>` |  | numeric expression “Set Vertical size” | — |  |
| 15 | 95 | Special Control > Resize to Fit | `Resize HTML to fit=<p0>` |  | numeric expression “Values (1: Enabled, 0: Disabled)” | — |  |
| 16 | 96 | Special Control > Set inline HTML5 playback | `Allow inline playback of HTML5 media?=<p0>` |  | numeric expression “Values (1: Enabled, 0: Disabled)” | — |  |
| 17 | 97 | Special Features > Load local document | `Load local HTML=<p0>, with MIME-type: <p1> and directory: <p2>` |  | string expression “HTML String”; string expression “Type/Mime String (exam: txt/html, text/plain)”; string expression “Directory String (optional)” | — |  |
| 18 | 98 | Scroll > Scroll to Top | `Scroll to Top` |  |  | — |  |
| 19 | 99 | Scroll > Scroll to End | `Scroll to End` |  |  | — |  |
| 20 | 100 | Scroll > Scroll to X, Y position | `Scroll to X=<p0>, Y=<p1>` |  | numeric expression “Set X Position”; numeric expression “Set Y Position” | — |  |
| 21 | 101 | Set Optical Zoom | `Set Optical Zoom <p0>` |  | numeric expression “Set Zoom Level (0.10 .... 4.00)” | — |  |
| 22 | 102 | Grab Image | `Grab Image to filename <p0>` |  | string expression “Filename string with extension (.jpg, .png, bmp allowed)” | — |  |
| 23 | 103 | Insert HTML Code | `InsertHTML to ElemId=<p0> at=<p1> with=<p2>` |  | numeric expression “Element ID, ejem: HTML=1”; numeric expression “Where to Insert(0:beforeBegin, 1:afterBegin 2: beforeEnd 3:afterEnd)”; string expression “HTML code to insert” | — |  |
| 24 | 104 | Navigation > Mode | `Navigation mode=<p0>` |  | numeric expression “Navigation Mode(0: Default, 1: Internal)” | — |  |
| 25 | 105 | Special Control > Set User Agent | `Set User-Agent to <p0>` |  | string expression “User Agent String” | — |  |
| 26 | 106 | Download URL to file | `Download File <p0>, to dir <p1> with name <p2>` |  | string expression “URL to download”; string expression “Destination Dir”; string expression “File name” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Error Value | `GetErrorVal(` |  |  | — |  |
| 1 | 81 | Get Status String | `GetStatusStr$(` |  | → string | — |  |
| 2 | 82 | Get Current URL | `GetCurrentURL$(` |  | → string | — |  |
| 3 | 83 | Get Navigate URL | `GetNavigateURL$(` |  | → string | — |  |
| 4 | 84 | Get Clicked link | `GetLastClicked$(` |  | → string | — |  |
| 5 | 85 | Get HTML Source | `GetHTMLSource$(` |  | → string | — |  |
| 7 | 87 | Javascript > Call Function and return int | `CallFunctionInt(` |  | string “Function Name”; string “Argument String” | — |  |
| 8 | 88 | Javascript > Call Function and return float | `CallFunctionFloat(` |  | string “Function Name”; string “Argument String” | — |  |
| 9 | 89 | Javascript > Call Function and return string | `CallFunctionStr$(` |  | string “Function Name”; string “Argument String” → string | — |  |
| 10 | 90 | Get Web page width | `GetPageWidth(` |  |  | — |  |
| 11 | 91 | Get Web page height | `GetPageHeight(` |  |  | — |  |
| 12 | 92 | Get Web optical zoom | `GetOpticalZoom(` |  |  | — |  |
| 13 | 93 | Get Form item | `GetFormItem$(` |  | string “tag name” → string | — |  |
| 14 | 94 | Get Html-Tag Id | `GetTagId(` |  | string “Tag Name” | — |  |
| 15 | 95 | DOM Elements > Get Inner text by Id | `GetInnerTextbyId$(` |  | string “id_name”; string “Tag_name”; number “Index” → string | — |  |
| 16 | 96 | DOM Elements > Get Inner text by Classname | `GetInnerTextbyClass$(` |  | string “class_name”; string “Tag_name”; number “Index” → string | — |  |
| 17 | 97 | Get Web Progress | `WebProgress(` |  |  | — |  |
| 18 | 98 | Get User Agent | `GetUserAgent$(` |  | → string | — |  |
