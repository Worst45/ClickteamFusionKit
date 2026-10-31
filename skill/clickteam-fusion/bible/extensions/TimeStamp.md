# Extension TimeStamp

- Fichier : `TimeStamp.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Time Stamp | `Time Stamp(` |  | nombre « Year » ; nombre « Month » ; nombre « Day » ; nombre « Hours » ; nombre « Minutes » ; nombre « Seconds » | — |  |
| 1 | 81 | Number returns > Get Year | `TSYear(` |  | nombre « TimeStamp » | — |  |
| 2 | 82 | Number returns > Get Month | `TSMonth(` |  | nombre « TimeStamp » | — |  |
| 3 | 83 | Number returns > Get Day | `TSDay(` |  | nombre « TimeStamp » | — |  |
| 4 | 84 | Number returns > Get Hours | `TSHours(` |  | nombre « TimeStamp » | — |  |
| 5 | 85 | Number returns > Get Minutes | `TSMinutes(` |  | nombre « TimeStamp » | — |  |
| 6 | 86 | Number returns > Get Seconds | `TSSeconds(` |  | nombre « TimeStamp » | — |  |
| 7 | 87 | Get Today's Stamp | `Today Stamp(` |  |  | — |  |
| 8 | 88 | Number returns > Get Day of Week | `TSDayofWeek(` |  | nombre « TimeStamp » | — |  |
| 9 | 89 | Text returns > Get Full Date/Time String | `Full Date String(` |  | nombre « TimeStamp » → chaîne | — |  |
| 10 | 90 | Number returns > Add Years | `AddYears(` |  | nombre « TimeStamp » ; nombre « Years_to_add » | — |  |
| 11 | 91 | Number returns > Add Months | `AddMonths(` |  | nombre « TimeStamp » ; nombre « Months_to_add » | — |  |
| 12 | 92 | Number returns > Add Weeks | `AddWeeks(` |  | nombre « TimeStamp » ; nombre « Weeks_to_add » | — |  |
| 13 | 93 | Number returns > Add Days | `AddDays(` |  | nombre « TimeStamp » ; nombre « Days_to_add » | — |  |
| 14 | 94 | Number returns > Add Hours | `AddHours(` |  | nombre « TimeStamp » ; nombre « Hours_to_add » | — |  |
| 15 | 95 | Number returns > Add Minutes | `AddMinutes(` |  | nombre « TimeStamp » ; nombre « Minutes_to_add » | — |  |
| 16 | 96 | Number returns > Add Seconds | `AddSeconds(` |  | nombre « TimeStamp » ; nombre « Seconds_to_add » | — |  |
| 17 | 97 | Get Timezone | `Timezone(` |  |  | — |  |
| 18 | 98 | Text returns > Get YYYYMMDD String | `TSYYYYMMDD(` |  | nombre « TimeStamp » → chaîne | — |  |
| 19 | 99 | Text returns > Get HHMMSS String | `TSHHMMSS(` |  | nombre « TimeStamp » → chaîne | — |  |
| 20 | 100 | Get Difference > Get Year Difference | `TSYearDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 21 | 101 | Get Difference > Get Month Difference | `TSMonthDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 22 | 102 | Get Difference > Get Day Difference | `TSDayDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 23 | 103 | Get Difference > Get Hours Difference | `TSHoursDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 24 | 104 | Get Difference > Get Minutes Difference | `TSMinutesDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 25 | 105 | Get Difference > Get Seconds Difference | `TSSecondsDiff(` |  | nombre « TimeStamp1 » ; nombre « TimeStamp2 » | — |  |
| 26 | 106 | Text returns > Convert TimeStamp to Text | `TS_Str$(` |  | nombre « TimeStamp » → chaîne | — |  |
| 27 | 107 | Text returns > Convert Text to TimeStamp | `TS_Val(` |  | chaîne « TimeStamp$ » | — |  |
