# Extension Get

- File: `Get.mfx` — installed with Fusion
- Name(s) shown in projects: “Get Object”
- Usage in the corpus: 21 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On get complete | `<object>: On get complete` |  |  | 2 (1 proj.) | `Get Object 2: Event ID -81, 0 Parameters` |
| 1 | -82 | Is get pending? | `<object>: Get is pending` |  |  | 1 (1 proj.) | `Get Object 2: Event ID -82, 0 Parameters` |
| 2 | -83 | On get timeout | `<object>: On get timeout` |  |  | 1 (1 proj.) | `Get Object 2: Event ID -83, 0 Parameters` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get URL | `Get URL <p0>` |  | string expression “URL String” | 5 (1 proj.) | `Get Object 2 : Event ID 80, 1 Parameters { "http://posttestserver.com/post.php" }` |
| 1 | 81 | Add POST data | `Add POST data <p0> = <p1>` |  | string expression “Name”; string expression “Value” | 4 (1 proj.) | `Get Object 2 : Event ID 81, 2 Parameters { "realname", "power boy washington" }` |
| 2 | 82 | Special Config ... > Set Custom Header | `Set custom header to <p0>` |  | string expression “Custom Header String” | — |  |
| 3 | 83 | Special Config ... > Set User | `Set user to <p0>` |  | string expression “User String” | 1 (1 proj.) | `Get Object 2 : Event ID 83, 1 Parameters { "admin" }` |
| 4 | 84 | Special Config ... > Set Password | `Set password to <p0>` |  | string expression “Password String” | 1 (1 proj.) | `Get Object 2 : Event ID 84, 1 Parameters { "init0" }` |
| 5 | 85 | Special Config ... > Set Timeout | `Set timeout to <p0> msecs.` |  | numeric expression “timeout in millisecs.” | 1 (1 proj.) | `Get Object 2 : Event ID 85, 1 Parameters { value("Counter 2") }` |
| 6 | 86 | Special Config ... > Set User Agent | `Set user agent to <p0>` |  | string expression “User Agent String” | 1 (1 proj.) | `Get Object 2 : Event ID 86, 1 Parameters { string$("String") }` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get received | `Received$(` |  | → string | 2 (1 proj.) | `Expression ID 80("Get Object 2")` |
| 1 | 81 | URL encode | `URLEncode$(` |  | string → string | — |  |
| 2 | 82 | Response Code | `ResponseCode(` |  |  | 2 (1 proj.) | `Expression ID 82("Get Object 2")` |
