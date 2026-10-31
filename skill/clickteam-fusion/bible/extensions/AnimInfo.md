# Extension AnimInfo

- File: `AnimInfo.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Animation > Current Animation | `Anim(` |  | number “Fixed Value of Object” | — |  |
| 1 | 81 | Animation > Animation State | `AnimState(` |  | number “Fixed Value of Object” | — |  |
| 2 | 82 | Animation > Current Direction | `CurrentDir(` |  | number “Fixed Value of Object” | — |  |
| 3 | 83 | Animation > Previous Direction | `PreviousDir(` |  | number “Fixed Value of Object” | — |  |
| 4 | 84 | Animation > Direction Offset | `DirOffset(` |  | number “Fixed Value of Object”; number “Direction Number” | — |  |
| 5 | 85 | Speed > Current Speed | `CurrentSpeed(` |  | number “Fixed Value of Object” | — |  |
| 6 | 86 | Speed > Minimum Speed | `MinSpeed(` |  | number “Fixed Value of Object” | — |  |
| 7 | 87 | Speed > Maximum Speed | `MaxSpeed(` |  | number “Fixed Value of Object” | — |  |
| 8 | 88 | Speed > Speed Counter | `SpeedCounter(` |  | number “Fixed Value of Object” | — |  |
| 9 | 89 | Frame > Current Frame | `CurrentFrame(` |  | number “Fixed Value of Object” | — |  |
| 10 | 90 | Frame > Number of Frames | `TotalFrames(` |  | number “Fixed Value of Object” | — |  |
| 11 | 91 | Looping > Repeat Count | `LoopRepeatCount(` |  | number “Fixed Value of Object” | — |  |
| 12 | 92 | Looping > Loop Frame | `LoopFrame(` |  | number “Fixed Value of Object” | — |  |
| 13 | 93 | Force Flags > Animation Forced | `AnimForced(` |  | number “Fixed Value of Object” | — |  |
| 14 | 94 | Force Flags > Direction Forced | `DirForced(` |  | number “Fixed Value of Object” | — |  |
| 15 | 95 | Force Flags > Speed Forced | `SpeedForced(` |  | number “Fixed Value of Object” | — |  |
| 16 | 96 | Force Flags > Frame Forced | `FrameForced(` |  | number “Fixed Value of Object” | — |  |
