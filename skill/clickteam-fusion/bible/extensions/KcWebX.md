# Extension KcWebX

- File: `KcWebX.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Loaded? | `<object>: Web loaded?` |  |  | — |  |
| 1 | -82 | Still Navigating? | `<object>: Web still navigating?` |  |  | — |  |
| 2 | -83 | Download Begin? | `<object>: Download Begin?` |  |  | — |  |
| 3 | -84 | Download Complete? | `<object>: Download Complete?` |  |  | — |  |
| 4 | -85 | Clicked? | `<object>: Web clicked?` |  |  | — |  |
| 5 | -86 | On Submit? | `<object>: On Submit?` |  |  | — |  |
| 6 | -87 | Title Change? | `<object>: Web title change?` |  |  | — |  |
| 7 | -88 | Status Change? | `<object>: Web status changed?` |  |  | — |  |
| 8 | -89 | Navigate Error occured | `<object>: Navigate error occur?` |  |  | — |  |
| 9 | -90 | Web has focus? | `<object>: Has focus?` |  |  | — |  |
| 10 | -91 | On Elements Read? | `<object>: On Elements Read?` |  |  | — |  |
| 11 | -92 | On URLs Read? | `<object>: On URLs Read?` |  |  | — |  |
| 12 | -93 | On Progress? | `<object>: On Progress?` |  |  | — |  |
| 13 | -94 | On Found Text? | `<object>: On Found Text?` |  |  | — |  |
| 14 | -95 | On Image saved? | `<object>: On Image saved?` |  |  | — |  |
| 15 | -96 | Web Scrollbars needed? | `<object>: Web scrollbars needed?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Navigation > Set URL | `<object>: Set URL=<p0>, referrer=<p1>` |  | string expression “URL address”; string expression “Referrer address” | — |  |
| 1 | 81 | Navigation > Set Web Block | `<object>: Set Block to <p0>` |  | string expression “Block Web page” | — |  |
| 2 | 82 | Navigation > Go | `<object>: Go with mode <p0>` |  | numeric expression “Mode (0=Normal, 1=No History 2=New Window) can be added” | — |  |
| 3 | 83 | Navigation > Go Back | `<object>: Go Back` |  |  | — |  |
| 4 | 84 | Navigation > Go Foward | `<object>: Go Foward` |  |  | — |  |
| 5 | 85 | Navigation > Go Home | `<object>: Go Home` |  |  | — |  |
| 6 | 86 | Navigation > Go Search | `<object>: Go Search` |  |  | — |  |
| 7 | 87 | Navigation > Refresh | `<object>: Refresh with mode <p0>` |  | numeric expression “Refresh Mode (0=Normal, 1=IfExpired, 3=Completely)” | — |  |
| 8 | 88 | Navigation > Stop | `<object>: Stop` |  |  | — |  |
| 9 | 89 | Visibility/Size > Show Web | `<object>: Show Web` |  |  | — |  |
| 10 | 90 | Visibility/Size > Hide Web | `<object>: Hide Web` |  |  | — |  |
| 13 | 93 | Visibility/Size > Set Width | `<object>: Set width to <p0>` |  | numeric expression “width (X) size to” | — |  |
| 14 | 94 | Visibility/Size > Set Height | `<object>: Set height to <p0>` |  | numeric expression “height (Y) size to” | — |  |
| 15 | 95 | Visibility/Size > Resize to frame | `<object>: resize to frame` |  |  | — |  |
| 16 | 96 | Set Options > Show Scrollbars | `<object>: Set Scrollbars <p0>` |  | numeric expression “Show Scrollbars (0=Yes, 1=No)” | — |  |
| 17 | 97 | Set Options > Show Menu | `<object>: Show menu=<p0>` |  | numeric expression “Show Menu (0=Off, 1=On)” | — |  |
| 18 | 98 | Elements > Read Elements | `<object>: Read Total Elements type=<p0>` |  | string expression “Types: A=Anchors, P=Paragraphs, UL:OL=Lists, IMG=Images, FORM=Forms, SCRIPT=Scripts, INPUT=Inputs, SELECT=Selects” | — |  |
| 19 | 99 | Elements > Read URLs | `<object>: Read URLs` |  |  | — |  |
| 20 | 100 | Set Options > Status Text | `<object>: Set status bar to <p0>` |  | string expression “Status Text” | — |  |
| 21 | 101 | Utilities > Download URL | `<object>: URL2FILE(<p0>, <p1>)` |  | string expression “URL to download”; string expression “Destination file” | — |  |
| 22 | 102 | Forms > Do Submit | `<object>: Do Submit form with <p0>` |  | string expression “Form or Button name, submit type checked” | — |  |
| 23 | 103 | Forms > Do Reset | `<object>: Do Reset form with <p0>` |  | string expression “Form or Button name, reset type checked” | — |  |
| 24 | 104 | Print and Save ... > Page Setup > Page Setup | `<object>: Page Set Up` |  |  | — |  |
| 25 | 105 | Print and Save ... > Page Setup > Page Footer | `<object>: Page Footer <p0>` |  | string expression “Page footer” | — |  |
| 26 | 106 | Print and Save ... > Page Setup > Page Header | `<object>: Page Header <p0>` |  | string expression “Page header” | — |  |
| 27 | 107 | Print and Save ... > Print Preview | `<object>: Print Preview, Shrink to fit=<p0> and template <p1>` |  | numeric expression “Shrink to fit (0=Off, 1=On, 2=No Change)”; string expression “Print Template to use” | — |  |
| 28 | 108 | Print and Save ... > Print Web Page | `<object>: Print Page, Shrink to fit=<p0> and template <p1>` |  | numeric expression “Shrink to fit (0=Off, 1=On, 2=No Change)”; string expression “Print Template to use” | — |  |
| 29 | 109 | Print and Save ... > Save Page as | `<object>: Save as <p0>, mode <p1>` |  | string expression “File Name”; numeric expression “Type Mode (0=html complete, 1=archive, 2=hmtl only, 3=txt only)” | — |  |
| 30 | 110 | Do Scripts | `<object>: Do Scripts <p0> with <p1>` |  | string expression “Script to execute name”; string expression “Arguments” | — |  |
| 31 | 111 | Navigation > Navigation Internal Mode | `<object>: Navigation internal mode <p0>` |  | numeric expression “Navigate Mode (0=Free, 1=Controlled, 2=Half Controlled)” | — |  |
| 32 | 112 | Forms > Reset local Submit | `Reset submit` |  |  | — |  |
| 33 | 113 | Set Options > Normal Zoom | `<object>: Set Zoom to <p0>` |  | numeric expression “Zoom (0=Smallest, 1=Smaller, 2=Medium, 3=Larger, 4=Largest)” | — |  |
| 34 | 114 | Elements > Click Button Id | `<object>: Do Click button <p0>` |  | string expression “Button name” | — |  |
| 35 | 115 | Forms > Find Submit and Do | `<object>: Find Submit #:<p0> and do` |  | numeric expression “Submit number (1-based)” | — |  |
| 36 | 116 | Utilities > Delete URL from History | `<object>: Delete URL=<p0>` |  | string expression “URL to delete from history” | — |  |
| 37 | 117 | Elements > Set Value text | `<object>: Set value of <p0> to text <p1>` |  | string expression “Element name”; string expression “Set value text” | — |  |
| 38 | 118 | Elements > Set Check value | `<object>: Set check value of <p0> to <p1>` |  | string expression “Element name”; numeric expression “Set check or radio (0=Off 1=On)” | — |  |
| 39 | 119 | Elements > Set Selection Id | `<object>: Set Select <p0> to Id <p1>` |  | string expression “Element name”; numeric expression “Set selection id value” | — |  |
| 40 | 120 | Utilities > Find Text | `<object>: Find occurrence#:<p0> of text <p1>, option <p2> and read <p3> of type '<p4>'` |  | numeric expression “Find occurrence number”; string expression “Text to be found”; numeric expression “Modes: 0:Only Found, 1:Highlight, 2:Read, 3:Highlight and Read”; numeric expression “Number of types to be read”; string expression “Type to be read: c=character, w=word, s=sentence, t=textedit” | — |  |
| 41 | 121 | Elements > Set Focus Id | `<object>: Set Focus, Id <p0>` |  | string expression “Element name” | — |  |
| 42 | 122 | Set Options > Optical Zoom | `<object>: Set Optical Zoom to <p0>` |  | numeric expression “Zoom percentage %” | — |  |
| 43 | 123 | Utilities > Image of URL | `<object>: Save URL Image to <p0>` |  | string expression “Image Filename” | — |  |
| 44 | 124 | Utilities > Add URL to Favorites | `<object>: Add URL to Favorites` |  |  | — |  |
| 45 | 125 | Elements > Set Focus by XY | `<object>: Select element at x=<p0>, y=<p1>` |  | numeric expression “X position in pixel”; numeric expression “Y position in pixel” | — |  |
| 46 | 126 | Elements > Set Attributes by Index | `<object>: Set Attributes <p1> with <p2> and index=<p0>` |  | numeric expression “Index number”; string expression “Attribute”; string expression “With this” | — |  |
| 47 | 127 | Elements > Set Styles by Index | `<object>: Set Style <p1> with <p2> and index=<p0>` |  | numeric expression “Index number”; string expression “Style attribute”; string expression “With this” | — |  |
| 48 | 128 | Scroll Web by... | `<object>: Scroll web horizontally by <p0> and vertically by <p1>, pixels` |  | numeric expression “Value to horizontal scroll in pixel”; numeric expression “Value to vertical scroll in pixel” | — |  |
| 49 | 129 | Utilities > Remove URL from Favorites | `<object>: Remove URL from Favorites` |  |  | — |  |
| 50 | 130 | Redraw Web | `<object>: Redraw Web` |  |  | — |  |
| 51 | 131 | Set Options > Toogle Toolbar | `<object>: Toogle toolbar` |  |  | — |  |
| 52 | 132 | Print and Save ... > Maximize Preview Window | `<object>: Maximize Preview Window` |  |  | — |  |
| 53 | 133 | Utilities > Set URL to Zone | `<object>: Set Security to zone <p0>` |  | numeric expression “Zone Names: Local=0, Intranet=1, Trusted=2, Internet=3, Restricted=4” | — |  |
| 54 | 134 | Utilities > Delete IE Cache | `<object>: Delete IE Cache` |  |  | — |  |
| 55 | 135 | Utilities > Delete IE History | `<object>: Delete IE History` |  |  | — |  |
| 56 | 136 | Securities > Create Site Zone | `<object>: Create Zone:<p1> for URL:<p0>` |  | string expression “URL String”; numeric expression “Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted)” | — |  |
| 57 | 137 | Securities > Delete Site Zone | `<object>: Delete Zone:<p1> for URL:<p0>` |  | string expression “URL String”; numeric expression “Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted)” | — |  |
| 58 | 138 | Securities > Override Certificates | `<object>: Override Certifificate for URL:<p0> mode:<p1>` |  | string expression “URL String”; numeric expression “Mode (1=On, 0=Off)” | — |  |
| 59 | 139 | Securities > Read Security | `<object>: Read Security` |  |  | — |  |
| 60 | 140 | Securities > Change Security | `<object>: Change Security of zone: <p0>, value:<p1> to <p2>` |  | numeric expression “Zone (0=Local machine, 1=Intranet, 2=Trusted, 3=Internet, 4=Untrusted)”; numeric expression “Numerical Value referring to policy”; numeric expression “Value (0: Enable, 1: Prompt, 3: Disable)” | — |  |
| 61 | 141 | Securities > Reset Security | `<object>: Reset Security for URL:<p0>` |  | string expression “URL String” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Elements > Get Type | `Element Type$(` |  | string → string | — |  |
| 1 | 81 | Elements > Get Text | `Text_Elem$(` |  | string → string | — |  |
| 2 | 82 | Get Last Click | `Clicked$(` |  | → string | — |  |
| 3 | 83 | Get Item | `Item$(` |  | string → string | — |  |
| 4 | 84 | Get Title | `Title$(` |  | → string | — |  |
| 5 | 85 | Get Status | `Status$(` |  | → string | — |  |
| 6 | 86 | Elements > Get Value | `Value_Elem$(` |  | string → string | — |  |
| 7 | 87 | Elements > Get Checked | `Check_Elem(` |  | string | — |  |
| 8 | 88 | Get Navigation Error | `Nav_Error(` |  |  | — |  |
| 9 | 89 | Elements > Get Select Id | `Select_ID_Elem(` |  | string | — |  |
| 10 | 90 | Scripting > Last Script Error | `Script_Error(` |  |  | — |  |
| 11 | 91 | Scripting > Last Integer Script Return | `Int_Script(` |  |  | — |  |
| 12 | 92 | Scripting > Last Float Script Return | `Float_Script(` |  |  | — |  |
| 13 | 93 | Scripting > Last String Script Return | `Str_Script(` |  | → string | — |  |
| 14 | 94 | Actual Progress | `Progress(` |  |  | — |  |
| 15 | 95 | Elements > Get # of Elements type | `TotalElemReaded(` |  |  | — |  |
| 16 | 96 | Elements > Get Element Name | `ElementName$(` |  | number → string | — |  |
| 17 | 97 | Get Total # of URLs | `TotalURLs(` |  |  | — |  |
| 18 | 98 | Get URL | `URL$(` |  | number → string | — |  |
| 19 | 99 | Get Location URL | `LocationURL$(` |  | → string | — |  |
| 20 | 100 | Get Page Width | `PageWidth(` |  |  | — |  |
| 21 | 101 | Get Page Height | `PageHeight(` |  |  | — |  |
| 22 | 102 | Get Text Found | `FoundText$(` |  | → string | — |  |
| 23 | 103 | Get Web Version | `WebVersion(` |  |  | — |  |
| 24 | 104 | Get Screen Width | `ScreenWidth(` |  |  | — |  |
| 25 | 105 | Get Screen Height | `ScreenHeight(` |  |  | — |  |
| 26 | 106 | Get Optical Zoom | `OpticalZoomVal(` |  |  | — |  |
| 27 | 107 | Get Window Width | `WindowWidth(` |  |  | — |  |
| 28 | 108 | Get Window Height | `WindowHeight(` |  |  | — |  |
| 29 | 109 | Elements > Total # of Elements | `AllElements(` |  |  | — |  |
| 30 | 110 | Elements > Get Attribute by Index | `GetAttribute$(` |  | number; string → string | — |  |
| 31 | 111 | Elements > Get Tag Name by Index | `GetTagName$(` |  | number → string | — |  |
| 32 | 112 | Elements > Get Style by Index | `GetStyle$(` |  | number; string → string | — |  |
| 33 | 113 | Get Security Zone URL | `GetURLSecMap(` |  | string | — |  |
| 34 | 114 | Get Zone Action Policy | `GetActionPolicy(` |  | number; number | — |  |
