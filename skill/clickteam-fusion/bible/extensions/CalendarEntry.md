# Extension CalendarEntry

- Fichier : `CalendarEntry.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Entry Written? | `<objet>: On Entry written?` |  |  | — |  |
| 1 | -82 | Is Entry Fail? | `<objet>: On Entry failed?` |  |  | — |  |
| 2 | -83 | On Read Calendars? | `<objet>: On Reads Calendars?` |  |  | — |  |
| 3 | -84 | On Read Events? | `<objet>: On Reads Events?` |  |  | — |  |
| 4 | -85 | Error ocurred? | `<objet>: On Error Ocurred?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Use Calendar | `Use Calendar_id = <p0>` |  | expression numérique « Calendar Number » | — |  |
| 1 | 81 | Event Data > Set Event Title | `Set Event Title to <p0>` |  | expression chaîne « Title String » | — |  |
| 2 | 82 | Event Data > Set Event Location | `Set Event Location to <p0>` |  | expression chaîne « Location String » | — |  |
| 3 | 83 | Event Data > Set Event Notes | `Set Event Notes to <p0>` |  | expression chaîne « Notes Text » | — |  |
| 4 | 84 | Event Data > Set Event Start Date | `Set Event Start Date, D:<p0> M:<p1> Y:<p2>` |  | expression numérique « Day Number » ; expression numérique « Month Number » ; expression numérique « Year Number » | — |  |
| 5 | 85 | Event Data > Set Event Start Time | `Set Event Start Time, H:<p0> M:<p1>` |  | expression numérique « Hours Number » ; expression numérique « Minutes Number » | — |  |
| 6 | 86 | Event Data > Set Event End Date | `Set Event End Date, D:<p0> M:<p1> Y:<p2>` |  | expression numérique « Day Number » ; expression numérique « Month Number » ; expression numérique « Year Number » | — |  |
| 7 | 87 | Event Data > Set Event End Time | `Set Event End Time, H:<p0> M:<p1>` |  | expression numérique « Hours Number » ; expression numérique « Minutes Number » | — |  |
| 8 | 88 | Event Data > Set Event Duration | `Set Event Duration to <p0>` |  | expression numérique « Duration time in sec. » | — |  |
| 9 | 89 | Event Data > Set Event All day | `Set Event All day to <p0>` |  | expression numérique « All day (0: no 1: yes) » | — |  |
| 10 | 90 | Event Data > Set Event Timezone | `Set Event Timezone to <p0>` |  | expression chaîne « Set Timezone string » | — |  |
| 11 | 91 | Event Configuration > Set Event Access | `Set Event Access to <p0>` |  | expression numérique « Access only android ( 0:default 1:confidential 2:private 3:public ) » | — |  |
| 12 | 92 | Event Configuration > Set Event Availability | `Set Event Availability to <p0>` |  | expression numérique « Availability  (0: no 1: yes) » | — |  |
| 13 | 93 | Event Reminder Rules > Set Reminder Frequency | `Set Reminder Frequency to <p0>` |  | expression numérique « Frequency ( 0:NO USED 1:MINUTELY 2:HOURLY 3:DAILY 4:WEEKLY 5:MONTHLY 6:YEARLY ) » | — |  |
| 14 | 94 | Event Reminder Rules > Set Reminder Interval | `Set Reminder Interval to <p0>` |  | expression numérique « Interval time according frequency » | — |  |
| 15 | 95 | Event Reminder Rules > Set Reminder Count | `Set Reminder Count to <p0>` |  | expression numérique « Number of time to repeat event » | — |  |
| 16 | 96 | Event Reminder Rules > Set Reminder By Minutes | `Set Reminder By Minute to <p0>` |  | expression chaîne « String setting minutes value to reminder (exam. 0,20,40) » | — |  |
| 17 | 97 | Event Reminder Rules > Set Reminder By Hours | `Set Reminder By Hour to <p0>` |  | expression chaîne « String setting hours value to reminder (exam. 9,10,14) » | — |  |
| 18 | 98 | Event Reminder Rules > Set Reminder By Days | `Set Reminder By Days to <p0>` |  | expression chaîne « String setting days value to reminder (exam. TU,TH,SU) » | — |  |
| 19 | 99 | Event Reminder Rules > Set Reminder By Months | `Set Reminder By Months to <p0>` |  | expression chaîne « String setting months value to reminder (exam. 1,4,7,12) » | — |  |
| 20 | 100 | Event Reminder Rules > Set Reminder By MonthDay | `Set Reminder By MonthDay to <p0>` |  | expression chaîne « String setting month days value to reminder (exam. 1,15,17,22) » | — |  |
| 21 | 101 | Do Event Entry | `Write Event Entry with alarm to <p0>` |  | expression numérique « Alarm (0: no 1: yes) » | — |  |
| 22 | 102 | Read ... > All Calendars | `Read Calendars` |  |  | — |  |
| 23 | 103 | Read ... > All Events Saved | `Read Events` |  |  | — |  |
| 24 | 104 | Delete ... > An Event Id | `Delete Event with Id: <p0> and Calendar Id: <p1>` |  | expression numérique « Event Id Number » ; expression numérique « Calendar Id Number » | — |  |
| 25 | 105 | Delete ... > All Events of a Calendar | `Delete All Events of Calendar Id: <p0>` |  | expression numérique « Calendar Id Number » | — |  |
| 26 | 106 | Specials ... > Create a Local Calendar | `Create Local Calendar with Name: <p0>, Display Name: <p1> and Owner Account: <p2>` |  | expression chaîne « Calendar Name String » ; expression chaîne « Display Calendar name » ; expression chaîne « Owner account (used in the device) » | — |  |
| 27 | 107 | Event Reminder Rules > Set Reminder Minutes | `Set Minutes for reminders to <p0>` |  | expression numérique « Minutes for reminder (default: 10 min) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `GetError(` |  |  | — |  |
| 1 | 81 | Get Calendar Numbers | `GetCalendarsQty(` |  |  | — |  |
| 2 | 82 | Get Calendar Name | `GetCalendarName$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 3 | 83 | Get Events Numbers | `GetEventsQty(` |  |  | — |  |
| 4 | 84 | Get Event Id | `GetEventId(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 5 | 85 | Get Event Title | `GetEventTitle$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 6 | 86 | Get Event Location | `GetEventLocation$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 7 | 87 | Get Event Notes | `GetEventNotes$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 8 | 88 | Get Event Start Date | `GetEventStartDate$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 9 | 89 | Get Event Start Time | `GetEventStartTime$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 10 | 90 | Get Event End Date | `GetEventEndDate$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 11 | 91 | Get Event End Time | `GetEventEndTime$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 12 | 92 | Get Event Duration | `GetEventDuration$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 13 | 93 | Get Event AllDay | `GetEventAllDay(` |  | nombre « Index (one-based) » | — |  |
| 14 | 94 | Get Event Timezone | `GetEventTimezone$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 15 | 95 | Get Event Alarm | `GetEventAlarm(` |  | nombre « Index (one-based) » | — |  |
| 16 | 96 | Get Reminder Frequency | `GetRemFrequency$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 17 | 97 | Get Reminder Interval | `GetRemInterval(` |  | nombre « Index (one-based) » | — |  |
| 18 | 98 | Get Reminder Count | `GetRemCount(` |  | nombre « Index (one-based) » | — |  |
| 19 | 99 | Get Reminder ByMinutes | `GetRemByMinute$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 20 | 100 | Get Reminder ByHours | `GetRemByHour$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 21 | 101 | Get Reminder ByDays | `GetRemByDay$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 22 | 102 | Get Reminder ByMonths | `GetRemByMonth$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 23 | 103 | Get Reminder ByMonthDay | `GetRemByMonthDay$(` |  | nombre « Index (one-based) » → chaîne | — |  |
| 24 | 104 | Get Sec from TimeString | `GetSecFromTimeStr(` |  | chaîne « TimeStr as MM/DD/YYY HH:MM:SS » | — |  |
| 25 | 105 | Get TimeString from Sec | `GetTimeStrFromSec$(` |  | nombre « Seconds » → chaîne | — |  |
| 26 | 106 | Get Default Timezone | `GetDefaultTimeZone$(` |  | → chaîne | — |  |
| 27 | 107 | Get Timezone from ID | `GetTimeZoneFromID$(` |  | chaîne « TimeZone difference » → chaîne | — |  |
| 28 | 108 | Make a Date String | `MakeDateStr$(` |  | nombre « Month » ; nombre « Day » ; nombre « Year » → chaîne | — |  |
| 29 | 109 | Make an Hour String | `MakeHourStr$(` |  | nombre « Hour » ; nombre « Minute » ; nombre « Seconds » → chaîne | — |  |
