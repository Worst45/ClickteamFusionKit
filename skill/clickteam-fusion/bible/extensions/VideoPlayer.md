# Extension VideoPlayer

- File: `VideoPlayer.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Create Video Player | `Create Video Player (<p0>,<p1>)` |  | numeric expression “Player Width”; numeric expression “Player Height” | — |  |
| 1 | 81 | Load Video | `Load Video (<p0>)` |  | string expression “Video URL” | — |  |
| 2 | 82 | Load Preview Image | `Load Preview Image (<p0>)` |  | string expression “Preview Image URL” | — |  |
| 3 | 83 | Set X Position | `Set X Position (<p0>)` |  | numeric expression “Player X Position” | — |  |
| 4 | 84 | Set Y Position | `Set Y Position (<p0>)` |  | numeric expression “Player Y Position” | — |  |
| 5 | 85 | Show Player | `Show Player` |  |  | — |  |
| 6 | 86 | Hide Player | `Hide Player` |  |  | — |  |
| 7 | 87 | Set Volume | `Set Volume (<p0>)` |  | numeric expression “Player Volume” | — |  |
| 8 | 88 | Control > Play Video | `Play Video` |  |  | — |  |
| 9 | 89 | Control > Pause Video | `Pause Video` |  |  | — |  |
| 10 | 90 | Control > Stop Video | `Stop Video` |  |  | — |  |
| 11 | 91 | Control > Seek To Position | `Seek To Position` |  | numeric expression “Video Position (Percentage)” | — |  |
| 12 | 92 | Options > Double Clicks | `Double Clicks (<p0>)` |  | numeric expression “Enabled? (0 = False, 1 = True)” | — |  |
| 13 | 93 | Options > Placement | `Placement (<p0>)` |  | numeric expression “Control Placement (0 = Below Video, 1 = Over Video)” | — |  |
| 14 | 94 | Options > Auto Hide Controls | `Auto Hide Controls (<p0>)` |  | numeric expression “Auto Hide Controls? (0 = False, 1 = True)” | — |  |
| 15 | 95 | Options > Auto Play | `Auto Play (<p0>)` |  | numeric expression “Auto Play? (0 = False, 1 = True)” | — |  |
| 16 | 96 | Options > Fade Out Time | `Fade Out Time (<p0>)` |  | numeric expression “Controls Fade Out Time (in Milliseconds)” | — |  |
| 17 | 97 | Options > Left Control Padding | `Left Control Padding (<p0>)` |  | numeric expression “Control Padding Left Side (in Pixels)” | — |  |
| 18 | 98 | Options > Right Control Padding | `Right Control Padding (<p0>)` |  | numeric expression “Control Padding Right Side (in Pixels)” | — |  |
| 19 | 99 | Main Bar > Bar Background Color | `Bar Background Color (<p0>)` |  | color “Bar Background Color” | — |  |
| 20 | 100 | Main Bar > Bar Background Alpha | `Bar Background Alpha (<p0>)` |  | numeric expression “Bar Background Alpha” | — |  |
| 21 | 101 | Main Bar > Bar Knob Outline Color | `Bar Knob Outline Color (<p0>)` |  | color “Bar Knob Outline Color” | — |  |
| 22 | 102 | Main Bar > Bar Knob Outline Alpha | `Bar Knob Outline Alpha (<p0>)` |  | numeric expression “Bar Knob Outline Alpha” | — |  |
| 23 | 103 | Main Bar > Bar Loading Background Color | `Bar Loading Background Color (<p0>)` |  | color “Bar Loading Background Color” | — |  |
| 24 | 104 | Main Bar > Bar Playing Background Color | `Bar Playing Background Color (<p0>)` |  | color “Bar Playing Background Color” | — |  |
| 25 | 105 | Background > Background Top Color | `Background Top Color (<p0>)` |  | color “Background Top Color” | — |  |
| 26 | 106 | Background > Background Top Alpha | `Background Top Alpha (<p0>)` |  | numeric expression “Background Top Alpha” | — |  |
| 27 | 107 | Background > Background Bottom Color | `Background Bottom Color (<p0>)` |  | color “Background Bottom Color” | — |  |
| 28 | 108 | Background > Background Bottom Alpha | `Background Bottom Alpha (<p0>)` |  | numeric expression “Background Bottom Alpha” | — |  |
| 29 | 109 | Controls > Controls Background Color | `Controls Background Color (<p0>)` |  | color “Controls Background Color” | — |  |
| 30 | 110 | Controls > Controls Background Alpha | `Controls Background Alpha (<p0>)` |  | numeric expression “Controls Background Alpha” | — |  |
| 31 | 111 | Controls > Controls Icon Color | `Controls Icon Color (<p0>)` |  | color “Controls Icon Color” | — |  |
| 32 | 112 | Controls > Controls RollOver Glow Color | `Controls RollOver Glow Color (<p0>)` |  | color “Controls RollOver Color” | — |  |
| 33 | 113 | Controls > Controls RollOver Glow Alpha | `Controls RollOver Glow Alpha (<p0>)` |  | numeric expression “Controls RollOver Glow Alpha” | — |  |
| 34 | 114 | Timer And Icon > Play Icon Color | `Play Icon Color (<p0>)` |  | color “Play Icon Color” | — |  |
| 35 | 115 | Timer And Icon > Play Icon Alpha | `Play Icon Alpha (<p0>)` |  | numeric expression “Play Icon Alpha” | — |  |
| 36 | 116 | Timer And Icon > Timer Background Color | `Timer Background Color (<p0>)` |  | color “Timer Background Color” | — |  |
| 37 | 117 | Timer And Icon > Timer Background Alpha | `Timer Background Alpha (<p0>)` |  | numeric expression “Timer Background Alpha” | — |  |
| 38 | 118 | Timer And Icon > Timer CountUp Color | `Timer CountUp Color (<p0>)` |  | color “Timer CountUp Color” | — |  |
| 39 | 119 | Timer And Icon > Timer CountDown Color | `Timer CountDown Color (<p0>)` |  | color “Timer CountDown Color” | — |  |
