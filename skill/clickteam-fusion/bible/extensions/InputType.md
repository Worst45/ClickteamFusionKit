# Extension InputType

- File: `InputType.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Keyboard Visible? | `<object>: Is Keyboard Visible?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set TEXT Keyboard to ... | `Set Keyboard as TEXT type, with subtype <p0> and IMEOptions <p1> to object <p2>` |  | numeric expression “Subtype value (0:Default, 1:Uppercase, 2:Capitalized, 4:Autocorrection, 8:AutoComplete)”; numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 1 | 81 | Set NUMERIC Keyboard to ... | `Set Keyboard as NUMERIC type, with subtype <p0> and IMEOptions <p1> to object <p2>` |  | numeric expression “Subtype Value (0:Default, 1:Signed, 2:Decimal, 4:Password)”; numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 2 | 82 | Set PHONE Keyboard to ... | `Set Keyboard as PHONE type, with IMEOptions <p0> to object <p1>` |  | numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 3 | 83 | Set URI input type to ... | `Set Keyboard as URI type, with IMEOptions <p0> to object <p1>` |  | numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 4 | 84 | Set EMAIL Keyboard to ... | `Set Keyboard as EMAIL type, with IMEOptions <p0> to object <p1>` |  | numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 5 | 85 | Set POSTAL Keyboard to ... | `Set Keyboard as POSTAL type, with IMEOptions <p0> to object <p1>` |  | numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 6 | 86 | Set DATETIME Keyboard to ... | `Set Keyboard as DATETIME type, with subtype <p0> and IMEOptions <p1> to object <p2>` |  | numeric expression “Input Type Value (0: General, 1:Date, 2:Time)”; numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 7 | 87 | Set SYSTEM Keyboard to ... | `Set Keyboard as SYSTEM type, with IMEOptions <p0> to object <p1>` |  | numeric expression “Action Id (0:Default, 1:Go, 2:Send, 3:Search, 4:Previous, 5:None)”; object “Object” | — |  |
| 8 | 88 | Resize Edit Object to Fit in ... > Size | `Move Edit object <p0> to (<p1>, <p2>) and set size to (<p3>, <p4>)` |  | object “Edit Object”; numeric expression “X position”; numeric expression “Y position”; numeric expression “Width”; numeric expression “Height” | — |  |
| 9 | 89 | Resize Edit Object to Fit in ... > Object | `Resize Edit object <p0> to fit in object <p1> with padding (<p2>, <p3>)` |  | object “Edit Object”; object “Reference Object (active)”; numeric expression “Horizontal padding”; numeric expression “Vertical padding” | — |  |
| 10 | 90 | Hint > Color and Alpha | `Set Edit object <p0> hint color to <p1> and alpha to <p2>` |  | object “Edit Object”; color “Hint Color”; numeric expression “Alpha Value (0:Transparent 1:Opaque)” | — |  |
| 11 | 91 | Hint > Text | `Set Edit object <p0> hint text to <p1>` |  | object “Edit Object”; string expression “Hint Text” | — |  |
| 12 | 92 | Set Keyboard by masks ... > Set Type using numeric mask | `Set Type numeric mask to <p0>` |  | numeric expression “Type numeric mask (see help)” | — |  |
| 13 | 93 | Set Keyboard by masks ... > Set IME Options using numeric mask | `Set IME numeric mask to <p0>` |  | numeric expression “IME numeric mask (see help)” | — |  |
| 14 | 94 | Set Keyboard by masks ... > Set Keyboard to Edit object using numeric masks | `Set Keyboard to object <p0> using numeric masks` |  | object “Object” | — |  |
| 15 | 95 | Set Keyboard by masks ... > Set Type using string mask | `Set Type string mask to <p0>` |  | string expression “Type string options, separated by commas (see help)” | — |  |
| 16 | 96 | Set Keyboard by masks ... > Set IME Options using string mask | `Set IME string mask to <p0>` |  | string expression “IME string options, separated by commas (see help)” | — |  |
| 17 | 97 | Set Keyboard by masks ... > Set Keyboard to Edit object using string masks | `Set Keyboard to object <p0> using string masks` |  | object “Object” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Keyboard Type | `LastKBType(` |  |  | — |  |
| 1 | 81 | Last Keyboard SubType | `LastKBSubType(` |  |  | — |  |
| 2 | 82 | Resize Edit Object to Fit > Font size in SP | `FitFontSizeInSP(` |  |  | — |  |
