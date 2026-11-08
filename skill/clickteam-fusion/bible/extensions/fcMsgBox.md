# Extension fcMsgBox

- File: `fcMsgBox.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Events > On Abort | `<object>: (ID <p0>) On Abort` |  | numeric expression “Message Box ID” |
| 1 | -82 | Events > On Cancel | `<object>: (ID <p0>) On Cancel` |  | numeric expression “Message Box ID” |
| 2 | -83 | Events > On Continue | `<object>: (ID <p0>) On Continue` |  | numeric expression “Message Box ID” |
| 3 | -84 | Events > On Ignore | `<object>: (ID <p0>) On Ignore` |  | numeric expression “Message Box ID” |
| 4 | -85 | Events > On No | `<object>: (ID <p0>) On No` |  | numeric expression “Message Box ID” |
| 5 | -86 | Events > On OK | `<object>: (ID <p0>) On OK` |  | numeric expression “Message Box ID” |
| 6 | -87 | Events > On Retry | `<object>: (ID <p0>) On Retry` |  | numeric expression “Message Box ID” |
| 7 | -88 | Events > On Try Again | `<object>: (ID <p0>) On Try Again` |  | numeric expression “Message Box ID” |
| 8 | -89 | Events > On Yes | `<object>: (ID <p0>) On Yes` |  | numeric expression “Message Box ID” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Text > Set title | `Set title to <p0>` |  | string expression “Message Box title” |
| 1 | 81 | Text > Set text | `Set text to <p0>` |  | string expression “Message Box text” |
| 3 | 83 | Do > Message box with delayed answer | `Do message box (ID <p0>) with delayed answer` |  | numeric expression “Enter an ID for this message box” |
| 7 | 87 | Buttons > [ OK ] | `Set buttons to [ OK ]` |  |  |
| 8 | 88 | Buttons > [ OK ] [ Cancel ] | `Set buttons to [ OK ] [ Cancel ]` |  |  |
| 9 | 89 | Buttons > [ Yes ] [ No ] | `Set buttons to [ Yes ] [ No ]` |  |  |
| 10 | 90 | Buttons > [ Yes ] [ No ] [ Cancel ] | `Set buttons to [ Yes ] [ No ] [ Cancel ]` |  |  |
| 11 | 91 | Buttons > [ Retry ] [ Cancel ] | `Set buttons to [ Retry ] [ Cancel ]` |  |  |
| 12 | 92 | Buttons > [ Abort ] [ Retry ] [ Ignore ] | `Set buttons to [ Abort ] [ Retry ] [ Ignore ]` |  |  |
| 13 | 93 | Buttons > [ Cancel ] [ Try again ] [ Continue ] | `Set buttons to [ Cancel ] [ Try again ] [ Continue ]` |  |  |
| 14 | 94 | Icon > Exclamation | `Use exclamation icon` |  |  |
| 15 | 95 | Icon > Warning | `Use warning icon` |  |  |
| 16 | 96 | Icon > Information | `Use information icon` |  |  |
| 17 | 97 | Icon > Asterisk | `Use asterisk icon` |  |  |
| 18 | 98 | Icon > Question | `Use question icon` |  |  |
| 19 | 99 | Icon > Stop | `Use stop icon` |  |  |
| 20 | 100 | Icon > Error | `Use error icon` |  |  |
| 21 | 101 | Icon > Hand | `Use hand icon` |  |  |
| 22 | 102 | Buttons > Set default button number | `Set default button number to <p0>` |  | numeric expression “Default button number (1-4)” |
| 23 | 103 | Options > Set to System Modal | `Set message box to system modal` |  |  |
| 24 | 104 | Options > Set to Task Modal | `Set message box to task modal` |  |  |
| 25 | 105 | Text > Right-justified | `Set text to be right aligned` |  |  |
| 26 | 106 | Text > Right to left reading | `Set text to be read right to left` |  |  |
| 27 | 107 | Options > Set to Foreground | `Set message box to the foreground` |  |  |
| 28 | 108 | Options > Set to Topmost | `Set message box to be always at the top of other windows` |  |  |
| 31 | 111 | Parent window > Use None | `Set message box without parent window` |  |  |
| 32 | 112 | Parent window > Use Current | `Set message box parent window to current window` |  |  |
| 33 | 113 | Reset settings | `Reset settings of message box` |  |  |
| 34 | 114 | Icon > None | `Don't use icon` |  |  |
| 35 | 115 | Do > Message box with instant answer | `Do message box (ID <p0>) with instant answer` |  | numeric expression “Enter an ID for this message box” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get last message box ID | `getLastMessageBoxID(` |  |  |
| 1 | 81 | Get last message box title | `getLastMessageBoxTitle$(` |  | → string |
| 2 | 82 | Get last message box text | `getLastMessageBoxText$(` |  | → string |
| 3 | 83 | Get last message box button ID | `getLastMessageBoxButtonID(` |  |  |
| 4 | 84 | Get Application Name | `getAppName$(` |  | → string |
| 5 | 85 | Get Application About text | `getAppAbout$(` |  | → string |
