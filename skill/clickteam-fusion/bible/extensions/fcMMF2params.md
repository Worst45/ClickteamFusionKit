# Extension fcMMF2params

- File: `fcMMF2params.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Application > Set Name | `Set Application Name to <p0>` |  | string expression “Application Name” | — |  |
| 1 | 81 | Application > Set AboutBox Text | `Set Application AboutBox Text to <p0>` |  | string expression “AboutBox Text” | — |  |
| 2 | 82 | Frame > Set Name | `Set Current Frame Name to <p0>` |  | string expression “Frame Name” | — |  |
| 3 | 83 | Application > Set Copyright | `Set Application Copyright to <p0>` |  | string expression “Application Copyright” | — |  |
| 4 | 84 | Application > Set Documentation Path | `Set Application Documentation Path to <p0>` |  | string expression “Application Documention Path” | — |  |
| 5 | 85 | Frame > Set Password | `Set Password of Frame <p0> to <p1>` |  | numeric expression “Frame number”; string expression “Frame Password” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Application > Get Name | `getAppName$(` |  | → string | — |  |
| 1 | 81 | Application > Get AboutBox text | `getAppAboutBoxText$(` |  | → string | — |  |
| 2 | 82 | Frame > Get Name | `getFrameName$(` |  | → string | — |  |
| 3 | 83 | Application > Get Copyright | `getAppCopyright$(` |  | → string | — |  |
| 4 | 84 | Application > Get Doc File | `getAppDocPath$(` |  | → string | — |  |
| 5 | 85 | Frame > Get Password of a Frame | `getFramePassword$(` |  | number “Frame number” → string | — |  |
| 6 | 86 | Frame > Get Number of Layers | `getLayersNumber(` |  |  | — |  |
| 7 | 87 | Frame > Get Maximum Number of objects | `getFrameMaxObjects(` |  |  | — |  |
| 8 | 88 | Application > Get Number of Frames | `getAppFramesNumber(` |  |  | — |  |
| 9 | 89 | Application > Get Border Color | `getAppBorderColor(` |  |  | — |  |
| 10 | 90 | Frame > Get Background Color | `getFrameBgColor(` |  |  | — |  |
| 11 | 91 | Frame > Get Height | `getFrameHeight(` |  |  | — |  |
| 12 | 92 | Frame > Get Width | `getFrameWidth(` |  |  | — |  |
| 13 | 93 | Frame > Get Number of Players | `getFramePlayersNum(` |  |  | — |  |
| 15 | 95 | Frame > Get Number of Qualifiers | `getFrameQualifiersNum(` |  |  | — |  |
