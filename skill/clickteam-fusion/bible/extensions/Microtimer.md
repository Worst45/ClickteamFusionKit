# Extension Microtimer

- File: `Microtimer.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Reset custom timer | `Reset custom timer` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Seconds (float) > Since application start | `AppTimeSec(` |  |  |
| 1 | 81 | Seconds (float) > Since frame start | `FrameTimeSec(` |  |  |
| 2 | 82 | Microseconds (integer) > Since application start | `AppTimeMicro(` |  |  |
| 3 | 83 | Microseconds (integer) > Since frame start | `FrameTimeMicro(` |  |  |
| 4 | 84 | Seconds (float) > Since custom timer | `CustomTimerSec(` |  |  |
| 5 | 85 | Microseconds (integer) > Since custom timer | `CustomTimerMicro(` |  |  |
