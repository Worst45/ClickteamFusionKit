# Extension YouTube

- File: `YouTube.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Chromeless Player > On Error | `On Error - Player (<p0>)` |  | string expression “Player ID - (1-6)” |
| 1 | -82 | Embedded Player > On Error | `On Error - Embedded Player` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Chromeless Player > Load Video | `Load Video - ID(<p1>) Into Player (<p0>)` |  | string expression “Player Slot - (1-6)”; string expression “Video ID - (11 Digit Code From URL)” |
| 1 | 81 | Chromeless Player > Play Video | `Play Video - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 2 | 82 | Chromeless Player > Pause Video | `Pause Video - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 3 | 83 | Chromeless Player > Stop Video | `Stop Video - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 4 | 84 | Chromeless Player > Mute Video | `Mute Video - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 5 | 85 | Chromeless Player > UnMute Video | `UnMute Video - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 6 | 86 | Chromeless Player > Set Video Volume | `Set Video Volume - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “Volume - (0 = Min, Max = 100)” |
| 7 | 87 | Chromeless Player > Seek To Video Position | `Seek To Video Position - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “Position (In Seconds)” |
| 8 | 88 | Chromeless Player > Set X Position | `Set X Position - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “X Position” |
| 9 | 89 | Chromeless Player > Set Y Position | `Set Y Position - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “Y Position” |
| 10 | 90 | Chromeless Player > Set Width | `Set Width - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “Width” |
| 11 | 91 | Chromeless Player > Set Height | `Set Height - (<p1>) - Player(<p0>)` |  | string expression “Player Slot - (1-6)”; numeric expression “Height” |
| 12 | 92 | Chromeless Player > Destroy | `Destroy - Player(<p0>)` |  | string expression “Player Slot - (1-6)” |
| 13 | 93 | Embedded Player > Load Video | `Load Video - ID(<p1>) Into Embedded Player` |  | string expression “Video ID - (11 Digit Code From URL)” |
| 14 | 94 | Embedded Player > Destroy | `Destroy - Embedded Player` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Chromeless Player > Video Url | `GetVideoUrl$(` |  | string “Player ID - (1-6)” → string |
| 1 | 81 | Chromeless Player > Video Embed Code | `GetVideoEmbedCode$(` |  | string “Player ID - (1-6)” → string |
| 2 | 82 | Chromeless Player > Video State | `GetVideoState$(` |  | string “Player ID - (1-6)” → string |
| 3 | 83 | Chromeless Player > Video Quality | `GetVideoQuality$(` |  | string “Player ID - (1-6)” → string |
| 4 | 84 | Chromeless Player > Current Time | `GetCurrentTime$(` |  | string “Player ID - (1-6)” |
| 5 | 85 | Chromeless Player > Video Duration | `GetVideoDuration$(` |  | string “Player ID - (1-6)” |
| 6 | 86 | Chromeless Player > Bytes Loaded | `GetBytesLoaded$(` |  | string “Player ID - (1-6)” |
| 7 | 87 | Chromeless Player > Bytes Total | `GetBytesTotal$(` |  | string “Player ID - (1-6)” |
| 8 | 88 | Chromeless Player > Bytes Started From | `GetBytesStartedFrom$(` |  | string “Player ID - (1-6)” |
| 9 | 89 | Chromeless Player > Get Last Error | `GetLastError$(` |  | string “Player ID - (1-6)” → string |
| 10 | 90 | Embedded Player > Video Url | `GetEmbeddedVideoUrl$(` |  | → string |
| 11 | 91 | Embedded Player > Get Last Error | `GetLastEmbeddedError$(` |  | → string |
