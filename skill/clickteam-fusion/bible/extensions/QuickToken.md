# Extension QuickToken

- File: `QuickToken.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Base > Base Zero | `Set Base 0` |  |  | — |  |
| 1 | 81 | Set Base > Base One | `Set Base 1` |  |  | — |  |
| 2 | 82 | No Delimeter Handling > Return Nothing (default) | `Return Nothing when no Delimeter` |  |  | — |  |
| 3 | 83 | No Delimeter Handling > Return String | `Return String when no Delimeter` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Token (Single Char Tokens) | `GetToken$(` |  | string; string; number → string | — |  |
| 1 | 81 | Other String Functions > Convert to Upper Case | `UpperCase$(` |  | string → string | — |  |
| 2 | 82 | Other String Functions > Convert to Lower Case | `LowerCase$(` |  | string → string | — |  |
| 3 | 83 | Other String Functions > Reverse String | `Reverse$(` |  | string → string | — |  |
| 4 | 84 | Number of Tokens (Single Char Tokens) | `GetNumberToken(` |  | string; string | — |  |
| 5 | 85 | Other String Functions > Trim | `Trim$(` |  | string → string | — |  |
| 6 | 86 | Other String Functions > Trim Left Only | `LTrim$(` |  | string → string | — |  |
| 7 | 87 | Other String Functions > Trim Right Only | `RTrim$(` |  | string → string | — |  |
| 8 | 88 | Constants > New Line | `Return$(` |  | → string | — |  |
| 9 | 89 | Constants > Horizontal Tab | `Tab$(` |  | → string | — |  |
| 10 | 90 | Other String Functions > Number of Certain Characters in String | `NumCharInString(` |  | string; string | — |  |
| 11 | 91 | Constants > Double Quote | `Quote$(` |  | → string | — |  |
| 12 | 92 | Constants > Copyright Symbol | `Copyright$(` |  | → string | — |  |
| 13 | 93 | Other String Functions > Replace Characters in String | `ReplaceChar$(` |  | string; string; string → string | — |  |
| 14 | 94 | Other String Functions > Remove Characters in String | `RemoveChar$(` |  | string; string → string | — |  |
| 15 | 95 | Other String Functions > Remove Repeated Characters | `RemoveRepeat$(` |  | string; string → string | — |  |
