# Extension kcpop

- File: `kcpop.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Ok button clicked | `<object>: OK button Clicked` |  |  | — |  |
| 1 | -82 | Cancel button clicked | `<object>: Cancel button Clicked` |  |  | — |  |
| 2 | -83 | Yes button clicked | `<object>: Yes button Clicked` |  |  | — |  |
| 3 | -84 | No button clicked | `<object>: No button Clicked` |  |  | — |  |
| 4 | -85 | Abort button clicked | `<object>: Abort button Clicked` |  |  | — |  |
| 5 | -86 | Retry button clicked | `<object>: Retry button Clicked` |  |  | — |  |
| 6 | -87 | Ignore button clicked | `<object>: Ignore button Clicked` |  |  | — |  |
| 7 | -88 | Compare last Message | `<object>: Last Message <p0>` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ok button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (OK-Normal)` |  | (unreliable parameters) | — |  |
| 1 | 81 | Ok button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Exclamation)` |  | (unreliable parameters) | — |  |
| 2 | 82 | Ok button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Information)` |  | (unreliable parameters) | — |  |
| 3 | 83 | Ok button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Question mark)` |  | (unreliable parameters) | — |  |
| 4 | 84 | Ok button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (OK-Stop sign)` |  | (unreliable parameters) | — |  |
| 5 | 85 | Ok and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Normal)` |  | (unreliable parameters) | — |  |
| 6 | 86 | Ok and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Exclamation)` |  | (unreliable parameters) | — |  |
| 7 | 87 | Ok and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Information)` |  | (unreliable parameters) | — |  |
| 8 | 88 | Ok and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Question mark)` |  | (unreliable parameters) | — |  |
| 9 | 89 | Ok and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (OK/Cancel-Stop sign)` |  | (unreliable parameters) | — |  |
| 10 | 90 | Yes and No button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Normal)` |  | (unreliable parameters) | — |  |
| 11 | 91 | Yes and No button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Exclamation)` |  | (unreliable parameters) | — |  |
| 12 | 92 | Yes and No button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Information)` |  | (unreliable parameters) | — |  |
| 13 | 93 | Yes and No button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Question mark)` |  | (unreliable parameters) | — |  |
| 14 | 94 | Yes and No button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No-Stop sign)` |  | (unreliable parameters) | — |  |
| 15 | 95 | Yes, No, and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Normal)` |  | (unreliable parameters) | — |  |
| 16 | 96 | Yes, No, and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Exclamation)` |  | (unreliable parameters) | — |  |
| 17 | 97 | Yes, No, and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Information)` |  | (unreliable parameters) | — |  |
| 18 | 98 | Yes, No, and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Question mark)` |  | (unreliable parameters) | — |  |
| 19 | 99 | Yes, No, and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Yes/No/Cancel-Stop sign)` |  | (unreliable parameters) | — |  |
| 20 | 100 | Retry and Cancel button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Normal)` |  | (unreliable parameters) | — |  |
| 21 | 101 | Retry and Cancel button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Exclamation)` |  | (unreliable parameters) | — |  |
| 22 | 102 | Retry and Cancel button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Information)` |  | (unreliable parameters) | — |  |
| 23 | 103 | Retry and Cancel button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Question mark)` |  | (unreliable parameters) | — |  |
| 24 | 104 | Retry and Cancel button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Retry/Cancel-Stop sign)` |  | (unreliable parameters) | — |  |
| 25 | 105 | Abort, Retry, and Ignore button Messages > Regular | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Normal)` |  | (unreliable parameters) | — |  |
| 26 | 106 | Abort, Retry, and Ignore button Messages > Exclamation Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Exclamation)` |  | (unreliable parameters) | — |  |
| 27 | 107 | Abort, Retry, and Ignore button Messages > Information Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Information)` |  | (unreliable parameters) | — |  |
| 28 | 108 | Abort, Retry, and Ignore button Messages > Question Mark Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Question mark)` |  | (unreliable parameters) | — |  |
| 29 | 109 | Abort, Retry, and Ignore button Messages > Stop Sign Icon | `Popup Message. Text=<p0> Title=<p1> (Abort/Retry/Ignore-Stop sign)` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last Message | `lastmsg$(` |  |  | — |  |
