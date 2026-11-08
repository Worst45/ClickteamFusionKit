# Extension SPC

- File: `SPC.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Play SPC | `Play SPC File` |  | file name “Play SPC File” |
| 1 | 81 | Stop Playing SPC | `Stop Playing SPC File` |  |  |
| 2 | 82 | Go Forward | `Go Forward` |  | numeric expression “Go Forward”; numeric expression “Slow/Fast? 0 = Slow, 1 = Fast (Breaks some songs)” |
| 3 | 83 | Change Settings | `Change Settings` |  | numeric expression “Channels-1,2 (-1 to leave)”; numeric expression “Bits-8,16,24,32 (-1 to leave)”; numeric expression “Sample Rate-8000-192000 (-1 to leave)” |
| 4 | 84 | Set Speed | `Set Speed` |  | numeric expression “Set Speed(-1 Default)” |
| 5 | 85 | Set Length | `Set Length` |  | numeric expression “Set Length (-1 for no end)”; numeric expression “Set Fade (0 for no end)” |
| 6 | 86 | Reset | `Reset` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Is Playing? | `Playing(` |  |  |
