# Extension timex

- File: `timex.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare time > Every... | `<object>: Every <p0> millisecond` |  | numeric expression “(In milliseconds)” | — |  |
| 1 | -82 | Compare time > Time equal to... | `<object>: Time equal to <p0> milliseconds` |  | numeric expression “(In milliseconds)” | — |  |
| 2 | -83 | Compare time > Time greater than... | `<object>: Time greater then <p0> milliseconds` |  | numeric expression “(In milliseconds)” | — |  |
| 3 | -84 | Compare time > Time less than... | `<object>: Time less then <p0> milliseconds` |  | numeric expression “(In milliseconds)” | — |  |
| 4 | -85 | Global timers > Timer is counting? | `<object>: Timer <p0> is counting` |  | numeric expression “(Zero-based)” | — |  |
| 5 | -86 | Global timers > Timer greater than... | `<object>: Timer <p0> is greater than <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(In milliseconds)” | — |  |
| 6 | -87 | Global timers > Timer lower than... | `<object>: Timer <p0> is lower than <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(In milliseconds)” | — |  |
| 7 | -88 | Global timers > Timer equal to... | `<object>: Timer <p0> is equal to <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(In milliseconds)” | — |  |
| 8 | -89 | Global timers > Timer different from... | `<object>: Timer <p0> is different from <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(In milliseconds)” | — |  |
| 9 | -90 | Compare time > Time different from... | `<object>: Time different from <p0> milliseconds` |  | numeric expression “(In milliseconds)” | — |  |
| 10 | -91 | Is paused? | `<object>: Is paused?` |  |  | — |  |
| 11 | -92 | MMF loop > Every Nth loop | `<object>: Every <p0>th loop` |  | numeric expression “Every Nth loop” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Pause > Pause application for... | `Pause for <p0> milliseconds, hide cursor = <p1>` |  | numeric expression “(In milliseconds)”; numeric expression “Hide cursor? (1 = true, 0 = false)” | — |  |
| 1 | 81 | Global timers > Start timer | `Start timer <p0>` |  | numeric expression “(Zero-based)” | — |  |
| 2 | 82 | Global timers > Stop timer | `Stop timer <p0>` |  | numeric expression “(Zero-based)” | — |  |
| 3 | 83 | Global timers > Set timer | `Set timer <p0> to <p1>` |  | numeric expression “(Zero-based)”; numeric expression “(In milliseconds)” | — |  |
| 4 | 84 | Global timers > Reset timer | `Reset timer <p0>` |  | numeric expression “(Zero-based)” | — |  |
| 5 | 85 | Pause > Pause application | `Pause application, hide cursor = <p0>` |  | numeric expression “Hide cursor? (1 = true, 0 = false)” | — |  |
| 6 | 86 | Pause > Set unpausing character | `Set unpausing character to <p0>` |  | string expression “Set unpausing character” | — |  |
| 7 | 87 | Reset gametime | `Reset gametime` |  |  | — |  |
| 8 | 88 | Global timers > Start all timers | `Start all timers` |  |  | — |  |
| 9 | 89 | Global timers > Stop all timers | `Stop all timers` |  |  | — |  |
| 10 | 90 | Global timers > Set all timers | `Set all timers to <p0>` |  | numeric expression “(In milliseconds)” | — |  |
| 11 | 91 | Global timers > Reset all timers | `Reset all timers` |  |  | — |  |
| 12 | 92 | Pause > Store pausing character | `Store pausing charcter <p0>` |  | string expression “Store pausing character” | — |  |
| 13 | 93 | Global timers > Toggle timer | `Toggle timer <p0>` |  | numeric expression “(Zero-based)” | — |  |
| 14 | 94 | Global timers > Toggle all timers | `Toggle all timers` |  |  | — |  |
| 15 | 95 | Set gametime | `Set gametime` |  | numeric expression “(In milliseconds)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Compare time > Time since Windows started | `WindowsStartedSince(` |  |  | — |  |
| 1 | 81 | Compare time > Time since the game started | `GameStartedSince(` |  |  | — |  |
| 2 | 82 | Get global timer | `GetTimer(` |  | number | — |  |
| 3 | 83 | Pause > Get unpausing key as string | `UnpausingKey$(` |  | → string | — |  |
| 4 | 84 | Pause > Get unpausing key as value | `UnpausingKey(` |  |  | — |  |
| 5 | 85 | Pause > Get pausing key as string | `PausingKey$(` |  | → string | — |  |
| 6 | 86 | Pause > Get pausing key as value | `PausingKey(` |  |  | — |  |
| 7 | 87 | Get total number of timers | `NumberOfTimers(` |  |  | — |  |
| 8 | 88 | Date > Get year | `Year(` |  |  | — |  |
| 9 | 89 | Date > Get month | `Month(` |  |  | — |  |
| 10 | 90 | Date > Get month (name) | `Month$(` |  | → string | — |  |
| 11 | 91 | Date > Get day of the year | `YearDay(` |  |  | — |  |
| 12 | 92 | Date > Get day of the month | `MonthDay(` |  |  | — |  |
| 13 | 93 | Date > Get day of the week | `WeekDay(` |  |  | — |  |
| 14 | 94 | Date > Get day of the week (name) | `WeekDayName(` |  | → string | — |  |
| 15 | 95 | Date > Get hour | `GetHour(` |  |  | — |  |
| 16 | 96 | Date > Get minutes | `GetMin(` |  |  | — |  |
| 17 | 97 | Date > Get seconds | `GetSec(` |  |  | — |  |
