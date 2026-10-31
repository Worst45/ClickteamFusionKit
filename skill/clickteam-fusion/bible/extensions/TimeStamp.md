# Extension TimeStamp

- File: `TimeStamp.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Time Stamp | `Time Stamp(` |  | number “Year”; number “Month”; number “Day”; number “Hours”; number “Minutes”; number “Seconds” | — |  |
| 1 | 81 | Number returns > Get Year | `TSYear(` |  | number “TimeStamp” | — |  |
| 2 | 82 | Number returns > Get Month | `TSMonth(` |  | number “TimeStamp” | — |  |
| 3 | 83 | Number returns > Get Day | `TSDay(` |  | number “TimeStamp” | — |  |
| 4 | 84 | Number returns > Get Hours | `TSHours(` |  | number “TimeStamp” | — |  |
| 5 | 85 | Number returns > Get Minutes | `TSMinutes(` |  | number “TimeStamp” | — |  |
| 6 | 86 | Number returns > Get Seconds | `TSSeconds(` |  | number “TimeStamp” | — |  |
| 7 | 87 | Get Today's Stamp | `Today Stamp(` |  |  | — |  |
| 8 | 88 | Number returns > Get Day of Week | `TSDayofWeek(` |  | number “TimeStamp” | — |  |
| 9 | 89 | Text returns > Get Full Date/Time String | `Full Date String(` |  | number “TimeStamp” → string | — |  |
| 10 | 90 | Number returns > Add Years | `AddYears(` |  | number “TimeStamp”; number “Years_to_add” | — |  |
| 11 | 91 | Number returns > Add Months | `AddMonths(` |  | number “TimeStamp”; number “Months_to_add” | — |  |
| 12 | 92 | Number returns > Add Weeks | `AddWeeks(` |  | number “TimeStamp”; number “Weeks_to_add” | — |  |
| 13 | 93 | Number returns > Add Days | `AddDays(` |  | number “TimeStamp”; number “Days_to_add” | — |  |
| 14 | 94 | Number returns > Add Hours | `AddHours(` |  | number “TimeStamp”; number “Hours_to_add” | — |  |
| 15 | 95 | Number returns > Add Minutes | `AddMinutes(` |  | number “TimeStamp”; number “Minutes_to_add” | — |  |
| 16 | 96 | Number returns > Add Seconds | `AddSeconds(` |  | number “TimeStamp”; number “Seconds_to_add” | — |  |
| 17 | 97 | Get Timezone | `Timezone(` |  |  | — |  |
| 18 | 98 | Text returns > Get YYYYMMDD String | `TSYYYYMMDD(` |  | number “TimeStamp” → string | — |  |
| 19 | 99 | Text returns > Get HHMMSS String | `TSHHMMSS(` |  | number “TimeStamp” → string | — |  |
| 20 | 100 | Get Difference > Get Year Difference | `TSYearDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 21 | 101 | Get Difference > Get Month Difference | `TSMonthDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 22 | 102 | Get Difference > Get Day Difference | `TSDayDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 23 | 103 | Get Difference > Get Hours Difference | `TSHoursDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 24 | 104 | Get Difference > Get Minutes Difference | `TSMinutesDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 25 | 105 | Get Difference > Get Seconds Difference | `TSSecondsDiff(` |  | number “TimeStamp1”; number “TimeStamp2” | — |  |
| 26 | 106 | Text returns > Convert TimeStamp to Text | `TS_Str$(` |  | number “TimeStamp” → string | — |  |
| 27 | 107 | Text returns > Convert Text to TimeStamp | `TS_Val(` |  | string “TimeStamp$” | — |  |
