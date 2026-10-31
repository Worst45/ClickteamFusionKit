# Extension CalendarEntry

- File: `CalendarEntry.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Entry Written? | `<object>: On Entry written?` |  |  | — |  |
| 1 | -82 | Is Entry Fail? | `<object>: On Entry failed?` |  |  | — |  |
| 2 | -83 | On Read Calendars? | `<object>: On Reads Calendars?` |  |  | — |  |
| 3 | -84 | On Read Events? | `<object>: On Reads Events?` |  |  | — |  |
| 4 | -85 | Error ocurred? | `<object>: On Error Ocurred?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Use Calendar | `Use Calendar_id = <p0>` |  | numeric expression “Calendar Number” | — |  |
| 1 | 81 | Event Data > Set Event Title | `Set Event Title to <p0>` |  | string expression “Title String” | — |  |
| 2 | 82 | Event Data > Set Event Location | `Set Event Location to <p0>` |  | string expression “Location String” | — |  |
| 3 | 83 | Event Data > Set Event Notes | `Set Event Notes to <p0>` |  | string expression “Notes Text” | — |  |
| 4 | 84 | Event Data > Set Event Start Date | `Set Event Start Date, D:<p0> M:<p1> Y:<p2>` |  | numeric expression “Day Number”; numeric expression “Month Number”; numeric expression “Year Number” | — |  |
| 5 | 85 | Event Data > Set Event Start Time | `Set Event Start Time, H:<p0> M:<p1>` |  | numeric expression “Hours Number”; numeric expression “Minutes Number” | — |  |
| 6 | 86 | Event Data > Set Event End Date | `Set Event End Date, D:<p0> M:<p1> Y:<p2>` |  | numeric expression “Day Number”; numeric expression “Month Number”; numeric expression “Year Number” | — |  |
| 7 | 87 | Event Data > Set Event End Time | `Set Event End Time, H:<p0> M:<p1>` |  | numeric expression “Hours Number”; numeric expression “Minutes Number” | — |  |
| 8 | 88 | Event Data > Set Event Duration | `Set Event Duration to <p0>` |  | numeric expression “Duration time in sec.” | — |  |
| 9 | 89 | Event Data > Set Event All day | `Set Event All day to <p0>` |  | numeric expression “All day (0: no 1: yes)” | — |  |
| 10 | 90 | Event Data > Set Event Timezone | `Set Event Timezone to <p0>` |  | string expression “Set Timezone string” | — |  |
| 11 | 91 | Event Configuration > Set Event Access | `Set Event Access to <p0>` |  | numeric expression “Access only android ( 0:default 1:confidential 2:private 3:public )” | — |  |
| 12 | 92 | Event Configuration > Set Event Availability | `Set Event Availability to <p0>` |  | numeric expression “Availability  (0: no 1: yes)” | — |  |
| 13 | 93 | Event Reminder Rules > Set Reminder Frequency | `Set Reminder Frequency to <p0>` |  | numeric expression “Frequency ( 0:NO USED 1:MINUTELY 2:HOURLY 3:DAILY 4:WEEKLY 5:MONTHLY 6:YEARLY )” | — |  |
| 14 | 94 | Event Reminder Rules > Set Reminder Interval | `Set Reminder Interval to <p0>` |  | numeric expression “Interval time according frequency” | — |  |
| 15 | 95 | Event Reminder Rules > Set Reminder Count | `Set Reminder Count to <p0>` |  | numeric expression “Number of time to repeat event” | — |  |
| 16 | 96 | Event Reminder Rules > Set Reminder By Minutes | `Set Reminder By Minute to <p0>` |  | string expression “String setting minutes value to reminder (exam. 0,20,40)” | — |  |
| 17 | 97 | Event Reminder Rules > Set Reminder By Hours | `Set Reminder By Hour to <p0>` |  | string expression “String setting hours value to reminder (exam. 9,10,14)” | — |  |
| 18 | 98 | Event Reminder Rules > Set Reminder By Days | `Set Reminder By Days to <p0>` |  | string expression “String setting days value to reminder (exam. TU,TH,SU)” | — |  |
| 19 | 99 | Event Reminder Rules > Set Reminder By Months | `Set Reminder By Months to <p0>` |  | string expression “String setting months value to reminder (exam. 1,4,7,12)” | — |  |
| 20 | 100 | Event Reminder Rules > Set Reminder By MonthDay | `Set Reminder By MonthDay to <p0>` |  | string expression “String setting month days value to reminder (exam. 1,15,17,22)” | — |  |
| 21 | 101 | Do Event Entry | `Write Event Entry with alarm to <p0>` |  | numeric expression “Alarm (0: no 1: yes)” | — |  |
| 22 | 102 | Read ... > All Calendars | `Read Calendars` |  |  | — |  |
| 23 | 103 | Read ... > All Events Saved | `Read Events` |  |  | — |  |
| 24 | 104 | Delete ... > An Event Id | `Delete Event with Id: <p0> and Calendar Id: <p1>` |  | numeric expression “Event Id Number”; numeric expression “Calendar Id Number” | — |  |
| 25 | 105 | Delete ... > All Events of a Calendar | `Delete All Events of Calendar Id: <p0>` |  | numeric expression “Calendar Id Number” | — |  |
| 26 | 106 | Specials ... > Create a Local Calendar | `Create Local Calendar with Name: <p0>, Display Name: <p1> and Owner Account: <p2>` |  | string expression “Calendar Name String”; string expression “Display Calendar name”; string expression “Owner account (used in the device)” | — |  |
| 27 | 107 | Event Reminder Rules > Set Reminder Minutes | `Set Minutes for reminders to <p0>` |  | numeric expression “Minutes for reminder (default: 10 min)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `GetError(` |  |  | — |  |
| 1 | 81 | Get Calendar Numbers | `GetCalendarsQty(` |  |  | — |  |
| 2 | 82 | Get Calendar Name | `GetCalendarName$(` |  | number “Index (one-based)” → string | — |  |
| 3 | 83 | Get Events Numbers | `GetEventsQty(` |  |  | — |  |
| 4 | 84 | Get Event Id | `GetEventId(` |  | number “Index (one-based)” → string | — |  |
| 5 | 85 | Get Event Title | `GetEventTitle$(` |  | number “Index (one-based)” → string | — |  |
| 6 | 86 | Get Event Location | `GetEventLocation$(` |  | number “Index (one-based)” → string | — |  |
| 7 | 87 | Get Event Notes | `GetEventNotes$(` |  | number “Index (one-based)” → string | — |  |
| 8 | 88 | Get Event Start Date | `GetEventStartDate$(` |  | number “Index (one-based)” → string | — |  |
| 9 | 89 | Get Event Start Time | `GetEventStartTime$(` |  | number “Index (one-based)” → string | — |  |
| 10 | 90 | Get Event End Date | `GetEventEndDate$(` |  | number “Index (one-based)” → string | — |  |
| 11 | 91 | Get Event End Time | `GetEventEndTime$(` |  | number “Index (one-based)” → string | — |  |
| 12 | 92 | Get Event Duration | `GetEventDuration$(` |  | number “Index (one-based)” → string | — |  |
| 13 | 93 | Get Event AllDay | `GetEventAllDay(` |  | number “Index (one-based)” | — |  |
| 14 | 94 | Get Event Timezone | `GetEventTimezone$(` |  | number “Index (one-based)” → string | — |  |
| 15 | 95 | Get Event Alarm | `GetEventAlarm(` |  | number “Index (one-based)” | — |  |
| 16 | 96 | Get Reminder Frequency | `GetRemFrequency$(` |  | number “Index (one-based)” → string | — |  |
| 17 | 97 | Get Reminder Interval | `GetRemInterval(` |  | number “Index (one-based)” | — |  |
| 18 | 98 | Get Reminder Count | `GetRemCount(` |  | number “Index (one-based)” | — |  |
| 19 | 99 | Get Reminder ByMinutes | `GetRemByMinute$(` |  | number “Index (one-based)” → string | — |  |
| 20 | 100 | Get Reminder ByHours | `GetRemByHour$(` |  | number “Index (one-based)” → string | — |  |
| 21 | 101 | Get Reminder ByDays | `GetRemByDay$(` |  | number “Index (one-based)” → string | — |  |
| 22 | 102 | Get Reminder ByMonths | `GetRemByMonth$(` |  | number “Index (one-based)” → string | — |  |
| 23 | 103 | Get Reminder ByMonthDay | `GetRemByMonthDay$(` |  | number “Index (one-based)” → string | — |  |
| 24 | 104 | Get Sec from TimeString | `GetSecFromTimeStr(` |  | string “TimeStr as MM/DD/YYY HH:MM:SS” | — |  |
| 25 | 105 | Get TimeString from Sec | `GetTimeStrFromSec$(` |  | number “Seconds” → string | — |  |
| 26 | 106 | Get Default Timezone | `GetDefaultTimeZone$(` |  | → string | — |  |
| 27 | 107 | Get Timezone from ID | `GetTimeZoneFromID$(` |  | string “TimeZone difference” → string | — |  |
| 28 | 108 | Make a Date String | `MakeDateStr$(` |  | number “Month”; number “Day”; number “Year” → string | — |  |
| 29 | 109 | Make an Hour String | `MakeHourStr$(` |  | number “Hour”; number “Minute”; number “Seconds” → string | — |  |
