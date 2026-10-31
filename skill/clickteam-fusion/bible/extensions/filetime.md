# Extension filetime

- File: `filetime.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | File is Open | `File is Open` |  |  | — |  |
| 1 | -82 | Error Occurred | `Error Occurred` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open File | `Set File <p0>` |  | string expression “File Path” | — |  |
| 1 | 81 | Set Created Date | `Set Created Date <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>` |  | numeric expression “Year (1601 - 30827)”; numeric expression “Month (1 - 12)”; numeric expression “Day (1-31)”; numeric expression “Hour (0-23)”; numeric expression “Minute (0-59)”; numeric expression “Second (0-59)”; numeric expression “Milliseconds (0-999)” | — |  |
| 2 | 82 | Set Last Modifed Date | `Set Last Modified Date <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>` |  | numeric expression “Year (1601 - 30827)”; numeric expression “Month (1 - 12)”; numeric expression “Day (1-31)”; numeric expression “Hour (0-23)”; numeric expression “Minute (0-59)”; numeric expression “Second (0-59)”; numeric expression “Milliseconds (0-999)” | — |  |
| 3 | 83 | Set Last Accessed Date | `Set Last Accessed Date <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>` |  | numeric expression “Year (1601 - 30827)”; numeric expression “Month (1 - 12)”; numeric expression “Day (1-31)”; numeric expression “Hour (0-23)”; numeric expression “Minute (0-59)”; numeric expression “Second (0-59)”; numeric expression “Milliseconds (0-999)” | — |  |
| 4 | 84 | Close File | `Close File` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Open File | `OpenFile$(` |  | → string | — |  |
| 1 | 81 | Created > Year | `YearCreated(` |  |  | — |  |
| 2 | 82 | Created > Month | `MonthCreated(` |  |  | — |  |
| 3 | 83 | Created > Day of Week | `DayofWeekCreated(` |  |  | — |  |
| 4 | 84 | Created > Day | `DayCreated(` |  |  | — |  |
| 5 | 85 | Created > Hour | `HourCreated(` |  |  | — |  |
| 6 | 86 | Created > Minute | `MinuteCreated(` |  |  | — |  |
| 7 | 87 | Created > Second | `SecondCreated(` |  |  | — |  |
| 8 | 88 | Created > Millisecond | `MillisecondCreated(` |  |  | — |  |
| 9 | 89 | Modifed > Year | `YearModified(` |  |  | — |  |
| 10 | 90 | Modifed > Month | `MonthModified(` |  |  | — |  |
| 11 | 91 | Modifed > Day of Week | `DayofWeekModified(` |  |  | — |  |
| 12 | 92 | Modifed > Day | `DayModified(` |  |  | — |  |
| 13 | 93 | Modifed > Hour | `HourModified(` |  |  | — |  |
| 14 | 94 | Modifed > Minute | `MinuteModified(` |  |  | — |  |
| 15 | 95 | Modifed > Second | `SecondModified(` |  |  | — |  |
| 16 | 96 | Modifed > Millisecond | `MillisecondModified(` |  |  | — |  |
| 17 | 97 | Last Accessed > Year | `YearAccessed(` |  |  | — |  |
| 18 | 98 | Last Accessed > Month | `MonthAccessed(` |  |  | — |  |
| 19 | 99 | Last Accessed > Day of Week | `DayofWeekAccessed(` |  |  | — |  |
| 20 | 100 | Last Accessed > Day | `DayAccessed(` |  |  | — |  |
| 21 | 101 | Last Accessed > Hour | `HourAccessed(` |  |  | — |  |
| 22 | 102 | Last Accessed > Minute | `MinuteAccessed(` |  |  | — |  |
| 23 | 103 | Last Accessed > Second | `SecondAccessed(` |  |  | — |  |
| 24 | 104 | Last Accessed > Millisecond | `MillisecondAccessed(` |  |  | — |  |
| 25 | 105 | Get Error | `GetError$(` |  | → string | — |  |
