# Extension AdvComment

- File: `AdvComment.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Comment (Blank) | `<p0>` |  | string expression “Comment” |
| 1 | -82 | Comment (Object) | `<object>: <p0>` |  | string expression “Comment” |
| 2 | -83 | Comments (Text) > Regular > Comment | `Comment: <p0>` |  | string expression “Comment” |
| 3 | -84 | Comments (Text) > Regular > Note | `Note: <p0>` |  | string expression “Comment” |
| 4 | -85 | Comments (Text) > Regular > Reminder | `Reminder: <p0>` |  | string expression “Comment” |
| 5 | -86 | Comments (Text) > Regular > Important | `Important: <p0>` |  | string expression “Comment” |
| 6 | -87 | Comments (Text) > Regular > About This Event | `About This Event: <p0>` |  | string expression “Comment” |
| 7 | -88 | Comments (Text) > All Caps > Comment | `COMMENT: <p0>` |  | string expression “Comment” |
| 8 | -89 | Comments (Text) > All Caps > Note | `NOTE: <p0>` |  | string expression “Comment” |
| 9 | -90 | Comments (Text) > All Caps > Reminder | `REMINDER: <p0>` |  | string expression “Comment” |
| 10 | -91 | Comments (Text) > All Caps > Important | `IMPORTANT: <p0>` |  | string expression “Comment” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Comment | `<p0>` |  | string expression “Comment” |
| 1 | 81 | Comments (Text) > Regular > Comment | `Comment: <p0>` |  | string expression “Comment” |
| 2 | 82 | Comments (Text) > Regular > Note | `Note: <p0>` |  | string expression “Comment” |
| 3 | 83 | Comments (Text) > Regular > Reminder | `Reminder: <p0>` |  | string expression “Comment” |
| 4 | 84 | Comments (Text) > Regular > Important | `Important: <p0>` |  | string expression “Comment” |
| 5 | 85 | Comments (Text) > Regular > About Action Above | `About Action Above: <p0>` |  | string expression “Comment” |
| 6 | 86 | Comments (Text) > Regular > About Action Below | `About Action Below: <p0>` |  | string expression “Comment” |
| 7 | 87 | Comments (Text) > All Caps > Comment | `COMMENT: <p0>` |  | string expression “Comment” |
| 8 | 88 | Comments (Text) > All Caps > Note | `NOTE: <p0>` |  | string expression “Comment” |
| 9 | 89 | Comments (Text) > All Caps > Reminder | `REMINDER: <p0>` |  | string expression “Comment” |
| 10 | 90 | Comments (Text) > All Caps > Important | `IMPORTANT: <p0>` |  | string expression “Comment” |
