# Extension kcinput

- File: `kcinput.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | OK Button Clicked | `<object>: OK Button Clicked` |  |  |
| 1 | -82 | Cancel Button Clicked | `<object>: Cancel Button Clicked` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Dialogs > Open Input String Dialog | `Open Input Dialog (String, Title=<p0>, Description=<p1>)` |  | (unreliable parameters) |
| 1 | 81 | Dialogs > Open Input Number Dialog | `Open Input Dialog (Number, Title=<p0>, Description=<p1>)` |  | (unreliable parameters) |
| 2 | 82 | Dialogs > Open Input Username and Password Dialog | `Open Input Dialog (Username/Password, Title=<p0>, Description=<p1>)` |  | (unreliable parameters) |
| 3 | 83 | Dialogs > Open Input Multiline Dialog | `Open Input Dialog (Multiline, Title=<p0>, Description=<p1>)` |  | (unreliable parameters) |
| 4 | 84 | Dialogs > Open Input Multiline Dialog (With Horizontal Scrollbar) | `Open Input Dialog (Multiline+HS, Title=<p0>, Description=<p1>)` |  | (unreliable parameters) |
| 5 | 85 | Change Control's values > Set Input String | `Set Input String to <p0>` |  | (unreliable parameters) |
| 6 | 86 | Change Control's values > Set Input Number | `Set Input Number to <p0>` |  | (unreliable parameters) |
| 7 | 87 | Change Control's values > Set Input2 String (Password Box) | `Set Input2 String to <p0>` |  | (unreliable parameters) |
| 8 | 88 | Change Control's values > Set Input Character Limit | `Set Input Limit to <p0>` |  | (unreliable parameters) |
| 9 | 89 | Change Control's values > Set Input2 Character Limit (Password Box) | `Set Input2 Limit to <p0>` |  | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Input String | `Input$(` |  |  |
| 1 | 81 | Get Input Number | `Input(` |  |  |
| 2 | 82 | Get Input2 String (Password) | `Input Pass$(` |  |  |
