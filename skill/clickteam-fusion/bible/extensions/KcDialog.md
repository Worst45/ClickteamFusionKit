# Extension KcDialog

- File: `KcDialog.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | was ABORT | `<object> was ABORT` |  |  | — |  |
| 1 | -82 | was CANCEL | `<object> was CANCEL` |  |  | — |  |
| 2 | -83 | was IGNORE | `<object> was IGNORE` |  |  | — |  |
| 3 | -84 | was NO | `<object> was NO` |  |  | — |  |
| 4 | -85 | was OK | `<object> was OK` |  |  | — |  |
| 5 | -86 | was RETRY | `<object> was RETRY` |  |  | — |  |
| 6 | -87 | was YES | `<object> was YES` |  |  | — |  |
| 7 | -88 | Is Asker Text equal | `<object> Is Asker text equal  <p0>` |  | string expression “Text to compare” | — |  |
| 8 | -89 | Is Asker Text not equal | `<object> Is Asker text not equal  <p0>` |  | string expression “Text to compare” | — |  |
| 9 | -90 | was IGNORE ALL | `<object> was IGNORE ALL` |  |  | — |  |
| 10 | -91 | was NOTOAll | `<object> was NOTOALL` |  |  | — |  |
| 11 | -92 | was YESTOALL | `<object> was YESTOALL` |  |  | — |  |
| 12 | -93 | was SKIP | `<object> was SKIP` |  |  | — |  |
| 13 | -94 | was SKIP ALL | `<object> was SKIP ALL` |  |  | — |  |
| 14 | -95 | was TRY AGAIN | `<object> was TRY AGAIN` |  |  | — |  |
| 15 | -96 | was CUSTOM BUTTON #1 | `<object> was CUSTOM #1` |  |  | — |  |
| 16 | -97 | was CUSTOM BUTTON #2 | `<object> was CUSTOM #2` |  |  | — |  |
| 17 | -98 | was CUSTOM BUTTON #3 | `<object> was CUSTOM #3` |  |  | — |  |
| 18 | -99 | was CUSTOM BUTTON #4 | `<object> was CUSTOM #4` |  |  | — |  |
| 19 | -100 | was HELP | `<object> was HELP` |  |  | — |  |
| 20 | -101 | CheckBox Clicked? | `<object> CheckBox Clicked?` |  |  | — |  |
| 21 | -102 | was CONTINUE | `<object> was CONTINUE` |  |  | — |  |
| 22 | -103 | TimeOut occurred? | `<object> TimeOut Occurred?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Message Box > Set Title | `Set Title to <p0>` |  | string expression “Set Title Text” | — |  |
| 1 | 81 | Message Box > Set Message | `Set Message to <p0>` |  | string expression “Set Message Text” | — |  |
| 2 | 82 | Message Box > Set Icon... > Hand\|Stop | `Set Box Icon Hand¦Stop` |  |  | — |  |
| 3 | 83 | Message Box > Set Icon... > Question | `Set Box Icon Question` |  |  | — |  |
| 4 | 84 | Message Box > Set Icon... > Exclamation | `Set Box Icon Exclamation` |  |  | — |  |
| 5 | 85 | Message Box > Set Icon... > Information\|Asterisk | `Set Box Icon Info¦Asterisk` |  |  | — |  |
| 6 | 86 | Message Box > Set Type... > Yes/No | `Box Yes/No` |  |  | — |  |
| 7 | 87 | Message Box > Set Type... > Yes/No/Cancel | `Box Yes/No/Cancel` |  |  | — |  |
| 8 | 88 | Message Box > Set Type... > Abort/Retry/Ignore | `Box Abort/Retry/Ignore` |  |  | — |  |
| 9 | 89 | Message Box > Set Type... > Retry/Cancel | `Box Retry/Cancel` |  |  | — |  |
| 10 | 90 | Message Box > Set Type... > Ok/Cancel | `Box Ok/Cancel` |  |  | — |  |
| 11 | 91 | Message Box > Set Type... > Ok | `Box Ok` |  |  | — |  |
| 12 | 92 | Message Box > Set Default Button | `Set Default Button to <p0>` |  | numeric expression “Set Default Button to (1,2,3,4,5,6)” | — |  |
| 15 | 95 | Message Box > Clear RetMsgBox | `Clean Return MsgBox` |  |  | — |  |
| 16 | 96 | Message Box > Do MsgBox | `Do MsgBox()` |  |  | — |  |
| 17 | 97 | Asker  > Set Title | `Set Asker Title to <p0>` |  | string expression “Set Title Text” | — |  |
| 18 | 98 | Asker  > Set Message | `Set Asker Message to <p0>` |  | string expression “Set Message Text” | — |  |
| 19 | 99 | Asker  > Define as Password > On | `Set password ON for asker` |  |  | — |  |
| 20 | 100 | Asker  > Define as Password > Off | `Set password OFF for asker` |  |  | — |  |
| 21 | 101 | Asker  > Do Asker | `Do Asker()` |  |  | — |  |
| 22 | 102 | Asker  > Do AskerButton | `Do AskerButton()` |  |  | — |  |
| 23 | 103 | Asker  > Set Result | `Set Asker result to <p0>` |  | string expression “Set Result Message Text” | — |  |
| 24 | 104 | Pause Box > Set Title | `Set Pause Title to <p0>` |  | string expression “Set Title Text” | — |  |
| 25 | 105 | Pause Box > Set Button text | `Set Button Text to <p0>` |  | string expression “Set Message Text” | — |  |
| 26 | 106 | Pause Box > Do Pause | `Do Pause` |  |  | — |  |
| 27 | 107 | Other Functions > Redraw Window | `Redraw Window` |  |  | — |  |
| 28 | 108 | Message Box > Set Icon... > To Internal Image | `Set Box Icon with image# <p0>` |  | numeric expression “Set Image number” | — |  |
| 29 | 109 | Message Box > Set Style > Font Color | `Set Text Color to <p0>` |  | numeric expression “Set Font Color” | — |  |
| 30 | 110 | Message Box > Set Style > Use Choosen Font | `Use Choosen Font (<p0>)` |  | numeric expression “Use Styled Font (0:Off 1:Yes)” | — |  |
| 31 | 111 | Message Box > Set Style > Background Color | `Set Backgroung Color to <p0>` |  | numeric expression “Set Background Color” | — |  |
| 32 | 112 | Other Functions > Refresh Window | `Refresh Window` |  |  | — |  |
| 33 | 113 | Message Box > Set Style > Background Image | `Set Backgroung Image# <p0>` |  | numeric expression “Set Image number” | — |  |
| 34 | 114 | Message Box > Set Style > Reset Styles | `Reset the styles` |  |  | — |  |
| 35 | 115 | Message Box > Set Style > Set Transparency value | `Set Transparency to <p0>` |  | numeric expression “0=Transparent, 255=Opaque” | — |  |
| 36 | 116 | Message Box > Set Button Text... > Custom #1 | `Set Text to <p0> for Custom #1` |  | string expression “Button text” | — |  |
| 37 | 117 | Message Box > Set Button Text... > Custom #2 | `Set Text to <p0> for Custom #2` |  | string expression “Button text” | — |  |
| 38 | 118 | Message Box > Set Button Text... > Custom #3 | `Set Text to <p0> for Custom #3` |  | string expression “Button text” | — |  |
| 40 | 120 | Message Box > Set Button Text... > Custom #4 | `Set Text to <p0> for Custom #4` |  | string expression “Button text” | — |  |
| 41 | 121 | Message Box > Set Style > Set Time Out | `Set Time Out to <p0>` |  | numeric expression “Time in Second” | — |  |
| 42 | 122 | Message Box > Set Type... > Cancel/Try/Continue | `Box Cancel/Try/Continue` |  |  | — |  |
| 43 | 123 | Message Box > Set Type... > Continue/Abort | `Box Continue/Abort` |  |  | — |  |
| 44 | 124 | Message Box > Set Type... > Skip/SkipAll/Cancel | `Box Skip/SkipAll/Cancel` |  |  | — |  |
| 45 | 125 | Message Box > Set Type... > Ignore/IgnoreAll/Cancel | `Box Ignore/IgnoreAll/Cancel` |  |  | — |  |
| 46 | 126 | Message Box > Add Button... > Button Help | `Add Button Help` |  |  | — |  |
| 47 | 127 | Message Box > Add Button... > Button 'No To All' | `Add Button 'No to All'` |  |  | — |  |
| 48 | 128 | Message Box > Add Button... > Button 'Yes To All' | `Add Button 'Yes to All'` |  |  | — |  |
| 49 | 129 | Message Box > Add Checkbox... > Box Don't Ask me again | `Add CheckBox Don't Ask me again` |  |  | — |  |
| 50 | 130 | Message Box > Add Checkbox... > Box Don't Tell me again | `Add CheckBox Don't Tell me again` |  |  | — |  |
| 51 | 131 | Message Box > Add Checkbox... > Box Don't Show again | `Add CheckBox Don't Show again` |  |  | — |  |
| 52 | 132 | Message Box > Set Style > Set Vista Style Box | `Use Vista Style Box (<p0>)` |  | numeric expression “Use Vista Style (0:Off 1:Yes)” | — |  |
| 53 | 133 | Message Box > Set Style > Set Right Justified Buttons | `Use Right Justified (<p0>)` |  | numeric expression “Use Right Justified (0:Off 1:Yes)” | — |  |
| 54 | 134 | Message Box > Set Style > Set Disable Time | `Set Disable Time to <p0>` |  | numeric expression “Time in Second” | — |  |
| 55 | 135 | Message Box > Set Button Text... > Button Abort | `Set to <p0> for Abort Text` |  | string expression “Button text” | — |  |
| 56 | 136 | Message Box > Set Button Text... > Button Cancel | `Set to <p0> for Cancel Text` |  | string expression “Button text” | — |  |
| 57 | 137 | Message Box > Set Button Text... > Button Continue | `Set to <p0> for Continue Text` |  | string expression “Button text” | — |  |
| 58 | 138 | Message Box > Set Button Text... > Button Don't Ask me Again | `Set to <p0> for Don't Ask me Again Text` |  | string expression “Button text” | — |  |
| 59 | 139 | Message Box > Set Button Text... > Button Don't Tell me Again | `Set to <p0> for Don't Tell me Again Text` |  | string expression “Button text” | — |  |
| 60 | 140 | Message Box > Set Button Text... > Button Don't Show Again | `Set to <p0> for Don't Show Again Text` |  | string expression “Button text” | — |  |
| 61 | 141 | Message Box > Set Button Text... > Button Help | `Set to <p0> for Help Text` |  | string expression “Button text” | — |  |
| 62 | 142 | Message Box > Set Button Text... > Button Ignore | `Set to <p0> for Ignore Text` |  | string expression “Button text” | — |  |
| 63 | 143 | Message Box > Set Button Text... > Button Ignore All | `Set to <p0> for Ignore All Text` |  | string expression “Button text” | — |  |
| 64 | 144 | Message Box > Set Button Text... > Button No | `Set to <p0> for No Text` |  | string expression “Button text” | — |  |
| 65 | 145 | Message Box > Set Button Text... > Button 'No to All' | `Set to <p0> for 'No to All' Text` |  | string expression “Button text” | — |  |
| 66 | 146 | Message Box > Set Button Text... > Button Ok | `Set to <p0> for Ok Text` |  | string expression “Button text” | — |  |
| 67 | 147 | Message Box > Set Button Text... > Button Retry | `Set to <p0> for Retry Text` |  | string expression “Button text” | — |  |
| 68 | 148 | Message Box > Set Button Text... > Button Skip | `Set to <p0> for Skip Text` |  | string expression “Button text” | — |  |
| 69 | 149 | Message Box > Set Button Text... > Button SkipAll | `Set to <p0> for Skip All Text` |  | string expression “Button text” | — |  |
| 70 | 150 | Message Box > Set Button Text... > Button TryAgain | `Set to <p0> for Try Again Text` |  | string expression “Button text” | — |  |
| 71 | 151 | Message Box > Set Button Text... > Button Yes | `Set to <p0> for Yes Text` |  | string expression “Button text” | — |  |
| 72 | 152 | Message Box > Set Button Text... > Button 'Yes to All' | `Set to <p0> for 'Yes to All' Text` |  | string expression “Button text” | — |  |
| 73 | 153 | Message Box > Set Type... > Custom Buttons | `Box Custom Buttons (<p0>)` |  | numeric expression “Use Custom Buttons (0:Off 1:Yes)” | — |  |
| 74 | 154 | Message Box > Set Icon... > Filename Image | `Set Icon filename to <p0>` |  | string expression “Icon Filename” | — |  |
| 75 | 155 | Message Box > Set Style > Background Filename | `Set Background filename to <p0>` |  | string expression | — |  |
| 76 | 156 | Message Box > Set Style > Sizing, prefer width | `Sizing Prefer width` |  |  | — |  |
| 77 | 157 | Message Box > Set Style > No Sound | `No Sound` |  |  | — |  |
| 78 | 158 | Message Box > Set Style > Enable Close button | `Enable Close Button` |  |  | — |  |
| 79 | 159 | Message Box > Set Style > No Title Bar | `Hide Title Bar` |  |  | — |  |
| 80 | 160 | Message Box > Set Style > Use Aero Glass | `Use Glass with <p0> percentage of MsgBox` |  | numeric expression “Set Glass Percentage (0-100)” | — |  |
| 81 | 161 | Message Box > Set Style > No Button Frame | `Hide Frame Button` |  |  | — |  |
| 82 | 162 | Message Box > Set Show Position > Show at... | `Show at position <p0>` |  | position “Show at...” | — |  |
| 83 | 163 | Message Box > Set Style > Set Icon Title Bar | `Set Icon# <p0> in Title bar` |  | numeric expression “Image Number for Icon title” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | MsgBoxRetStr | `MsgBox$(` |  | → string | — |  |
| 1 | 81 | MsgBoxRetVal | `MsgBox(` |  |  | — |  |
| 2 | 82 | Get Asker Text | `Asker$(` |  | → string | — |  |
| 3 | 83 | RTrim Text | `RTrim$(` |  | string “String to Trim” → string | — |  |
| 4 | 84 | Str Trim Text | `StrToTrim$(` |  | string “String to Trim”; string “Trim Text” → string | — |  |
| 5 | 85 | CHR$() | `CHR$(` |  | number “ASCII number” → string | — |  |
| 6 | 86 | Replicate Chars | `Replicate$(` |  | string “String to Trim”; number “Time to repeat” → string | — |  |
