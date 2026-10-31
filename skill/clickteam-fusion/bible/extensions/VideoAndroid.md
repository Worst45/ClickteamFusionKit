# Extension VideoAndroid

- File: `VideoAndroid.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Video at Start | `<object>: On Video at start` |  |  | — |  |
| 1 | -82 | On Video at End | `<object>: On Video at end` |  |  | — |  |
| 2 | -83 | On Video at Position | `<object>: On Video position equal <p0> sec.` |  | numeric expression “Position value in seconds (exam: 11.25)” | — |  |
| 3 | -84 | On Tap over Video | `<object>: On Tap over video` |  |  | — |  |
| 4 | -85 | Is Playing? | `<object>: Is Playing?` |  |  | — |  |
| 5 | -86 | On Error | `<object>: On Error` |  |  | — |  |
| 6 | -87 | On Video Prepared | `<object>: On Video prepared` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video URL | `Video URL <p0>` |  | string expression “Video URL” | — |  |
| 1 | 81 | Video Filename | `Video Filename <p0>` |  | string expression “Video Filename” | — |  |
| 2 | 82 | Play Video | `Play Video` |  |  | — |  |
| 3 | 83 | Resume Video | `Resume Video` |  |  | — |  |
| 4 | 84 | Stop Video | `Stop Video` |  |  | — |  |
| 5 | 85 | Pause Video | `Pause Video` |  |  | — |  |
| 6 | 86 | Seek To ... | `Seek to <p0>` |  | numeric expression “Set Video Position in seconds(not streaming)” | — |  |
| 7 | 87 | Goto End | `Goto End` |  |  | — |  |
| 8 | 88 | Goto Beginning | `Goto Beginning` |  |  | — |  |
| 9 | 89 | Set Video Width | `Set Width <p0>` |  | numeric expression “Width Value” | — |  |
| 10 | 90 | Set Video Height | `Set Height <p0>` |  | numeric expression “Height Value” | — |  |
| 11 | 91 | Show Video | `Show Video` |  |  | — |  |
| 12 | 92 | Hide Video | `Hide Video` |  |  | — |  |
| 13 | 93 | Background Color | `Set Background Color to <p0>` |  | color “Background Color ...” | — |  |
| 14 | 94 | Mute Video | `Mute Video` |  |  | — |  |
| 15 | 95 | Unmute Video | `Unmute Video` |  |  | — |  |
| 16 | 96 | Set Volume | `Set Video Volume to <p0>` |  | numeric expression “Video Volume (0 - 100)” | — |  |
| 17 | 97 | Video Resource name | `Video Resource name <p0>` |  | string expression “Video Resource Name (exam: video.mp4)” | — |  |
| 18 | 98 | Set Video Controller | `Set video media controller timeout to <p0> secs.` |  | numeric expression “Media Controller Timeout (0:OFF, X: value in secs)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error Number | `Error(` |  |  | — |  |
| 1 | 81 | Get Position | `GetPosition(` |  |  | — |  |
| 2 | 82 | Position to HMS | `secToHMS$(` |  | number → string | — |  |
| 3 | 83 | Get Video Filename | `GetFilename$(` |  | → string | — |  |
| 4 | 84 | Get Video URL | `GetURL$(` |  | → string | — |  |
| 5 | 85 | Get Video Width | `GetVideoWidth(` |  |  | — |  |
| 6 | 86 | Get Video Height | `GetVideoHeight(` |  |  | — |  |
| 7 | 87 | Get Video Duration | `VideoDuration(` |  |  | — |  |
| 8 | 88 | Get Frame Width | `GetFrameWidth(` |  |  | — |  |
| 9 | 89 | Get Frame Height | `GetFrameHeight(` |  |  | — |  |
