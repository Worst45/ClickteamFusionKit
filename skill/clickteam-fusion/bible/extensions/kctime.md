# Extension kctime

- File: `kctime.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare Computer Time | `Computer Time is <p0> second(s).` |  | (unreliable parameters) |
| 1 | -82 | Compare Timer | `<object>: Timer <p0> is <p1> second(s).` |  | (unreliable parameters) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Reset Timer | `Reset timer <p0>` |  | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Computer Time | `CTime(` |  |  |
| 1 | 81 | Get Timer | `GetTimer(` |  | (unreliable parameters) |
| 2 | 82 | String Returns > Get Full Date and Time | `FullDate$(` |  | (unreliable parameters) |
| 3 | 83 | String Returns > Get Three Letter Day | `Day$(` |  | (unreliable parameters) |
| 4 | 84 | String Returns > Get Three Letter Month | `Month$(` |  | (unreliable parameters) |
| 5 | 85 | String Returns > Get Two Letter Day Number | `DayNumber$(` |  | (unreliable parameters) |
| 6 | 86 | String Returns > Get Two Letter Hour (24) | `Hours$(` |  | (unreliable parameters) |
| 7 | 87 | String Returns > Get Two Letter Hour (12) | `HourAMPM$(` |  | (unreliable parameters) |
| 8 | 88 | String Returns > Get Two Letter Minute | `Minutes$(` |  | (unreliable parameters) |
| 9 | 89 | String Returns > Get Two Letter Second | `Seconds$(` |  | (unreliable parameters) |
| 10 | 90 | String Returns > Get Four Letter Year | `Year$(` |  | (unreliable parameters) |
| 11 | 91 | String Returns > Get Two Letter AM/PM | `AmPm$(` |  | (unreliable parameters) |
| 12 | 92 | String Returns > Get Seven Letter Hour:Minute[AM/PM] | `Time$(` |  | (unreliable parameters) |
| 13 | 93 | String Returns > Get Ten Letter Hour:Minute:Second[AM/PM] | `FullTime$(` |  | (unreliable parameters) |
| 14 | 94 | Number Returns > Get Day | `Day(` |  | (unreliable parameters) |
| 15 | 95 | Number Returns > Get Hour | `GetHours(` |  | (unreliable parameters) |
| 16 | 96 | Number Returns > Get Minute | `GetMinutes(` |  | (unreliable parameters) |
| 17 | 97 | Number Returns > Get Second | `GetSeconds(` |  | (unreliable parameters) |
| 18 | 98 | Number Returns > Get Year | `Year(` |  | (unreliable parameters) |
