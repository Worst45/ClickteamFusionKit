# Extension Get

- File: `Get.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On get complete | `<object>: On get complete` |  |  |
| 1 | -82 | Is get pending? | `<object>: Get is pending` |  |  |
| 2 | -83 | On get timeout | `<object>: On get timeout` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get URL | `Get URL <p0>` |  | string expression “URL String” |
| 1 | 81 | Add POST data | `Add POST data <p0> = <p1>` |  | string expression “Name”; string expression “Value” |
| 2 | 82 | Special Config ... > Set Custom Header | `Set custom header to <p0>` |  | string expression “Custom Header String” |
| 3 | 83 | Special Config ... > Set User | `Set user to <p0>` |  | string expression “User String” |
| 4 | 84 | Special Config ... > Set Password | `Set password to <p0>` |  | string expression “Password String” |
| 5 | 85 | Special Config ... > Set Timeout | `Set timeout to <p0> msecs.` |  | numeric expression “timeout in millisecs.” |
| 6 | 86 | Special Config ... > Set User Agent | `Set user agent to <p0>` |  | string expression “User Agent String” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get received | `Received$(` |  | → string |
| 1 | 81 | URL encode | `URLEncode$(` |  | string → string |
| 2 | 82 | Response Code | `ResponseCode(` |  |  |
