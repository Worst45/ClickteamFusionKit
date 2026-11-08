# Extension FlashMP3

- File: `FlashMP3.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | MP3 Is Playing | `<object> MP3 Is Playing` |  |  |
| 1 | -82 | MP3 Is Not Playing | `<object> MP3 Is Not Playing` |  |  |
| 2 | -83 | On Error | `<object> On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Load MP3 | `Load MP3 (<p0>)` |  | string expression “MP3 File URL” |
| 1 | 81 | Play | `Play (<p0> Times)` |  | numeric expression “Loop Times (0 = Play Once, 3 = Loop 3 Times, -1 = Unlimited Loop)” |
| 2 | 82 | Stop | `Stop` |  |  |
| 3 | 83 | Pause | `Pause` |  |  |
| 4 | 84 | Set Position | `Set Position (<p0>)` |  | numeric expression “Position (In Milliseconds)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get MP3 Position | `GetMP3Position(` |  |  |
| 1 | 81 | Get Current File | `GetCurrentFile$(` |  | → string |
| 2 | 82 | Get Current File Size | `GetCurrentFileSize(` |  |  |
| 3 | 83 | Get Current File Buffered | `GetCurrentFileBuffered(` |  |  |
| 4 | 84 | Get Last Error | `GetLastError$(` |  | → string |
