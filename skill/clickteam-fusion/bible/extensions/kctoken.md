# Extension kctoken

- File: `kctoken.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare Token | `<object>: Token <p0> <p1>` |  | (unreliable parameters) |
| 1 | -82 | Compare Number of Tokens | `<object>: Number of Tokens <p0>` |  | (unreliable parameters) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Fixed parsing Characters | `Set Fixed Parsing Characters to <p0>` |  | (unreliable parameters) |
| 1 | 81 | Set Fixed String | `Set Fixed String to <p0>` |  | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Token with Fixed Parsing Characters | `GetToken$(` |  | number (unreliable parameters) |
| 1 | 81 | Get Token with Fixed String | `GetTokenStr$(` |  | number (unreliable parameters) |
| 2 | 82 | Get String with Fixed Parsing Characters replaced with | `GetRepToken$(` |  | string (unreliable parameters) |
| 3 | 83 | Get Fixed String with Parsing Characters replaced with | `GetRepTokenStr$(` |  | string (unreliable parameters) |
| 4 | 84 | Remove Parsing Character(s) from a string | `RemoveChr$(` |  | string (unreliable parameters) |
| 5 | 85 | Repeat string | `RepeatStr$(` |  | number (unreliable parameters) |
| 6 | 86 | Get Number of Tokens | `CountToken(` |  | string (unreliable parameters) |
