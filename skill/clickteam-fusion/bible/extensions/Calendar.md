# Extension Calendar

- File: `Calendar.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Date/Time picker > Calendar popup shown | `<object>: Calendar popup shown` |  |  | — |  |
| 1 | -82 | Date/Time picker > Calendar popup hidden | `<object>: Calendar popup hidden` |  |  | — |  |
| 2 | -83 | Date/Time picker > Date cleared (checkbox unticked) | `<object>: Date cleared` |  |  | — |  |
| 3 | -84 | Date/Time picker > Date changed | `<object>: Date changed` |  |  | — |  |
| 4 | -85 | Month calendar > User selects specific date(s) | `<object>: User selects a date` |  |  | — |  |
| 5 | -86 | Month calendar > User selects a new month or date(s) | `<object>: User selects a new month or date` |  |  | — |  |
| 6 | -87 | Month calendar > X, Y in calendar? | `<object>: (<p0>, <p1>) lies in calendar` |  | numeric expression “X position”; numeric expression “Y position” | — |  |
| 7 | -88 | Month calendar > Specific hit-test locations > Calendar background | `<object>: Point lies in calendar background` |  |  | — |  |
| 8 | -89 | Month calendar > Specific hit-test locations > Any date | `<object>: Point lies on date` |  |  | — |  |
| 9 | -90 | Month calendar > Specific hit-test locations > Date in next month | `<object>: Point lies on date in next month` |  |  | — |  |
| 10 | -91 | Month calendar > Specific hit-test locations > Date in previous month | `<object>: Point lies on date in prev month` |  |  | — |  |
| 11 | -92 | Month calendar > Specific hit-test locations > Day name | `<object>: Point lies on date name` |  |  | — |  |
| 12 | -93 | Month calendar > Specific hit-test locations > Week number | `<object>: Point lies on week number` |  |  | — |  |
| 13 | -94 | Month calendar > Specific hit-test locations > Title background | `<object>: Point lies on title background` |  |  | — |  |
| 14 | -95 | Month calendar > Specific hit-test locations > Next month button | `<object>: Point lies on next month button` |  |  | — |  |
| 15 | -96 | Month calendar > Specific hit-test locations > Prev month button | `<object>: Point lies on prev month button` |  |  | — |  |
| 16 | -97 | Month calendar > Specific hit-test locations > Month name in title | `<object>: Point lies on month name` |  |  | — |  |
| 17 | -98 | Month calendar > Specific hit-test locations > Year name in title | `<object>: Point lies on year name` |  |  | — |  |
| 18 | -99 | Month calendar > Is date bold? | `<object>: Date <p0> is bold` |  | string expression “Date” | — |  |
| 19 | -100 | Is visible? | `<object> visible` |  |  | — |  |
| 20 | -101 | Is enabled? | `<object> enabled` |  |  | — |  |
| 21 | -102 | Focus > Received | `<object>: focus received` |  |  | — |  |
| 22 | -103 | Focus > Lost | `<object>: focus lost` |  |  | — |  |
| 23 | -104 | Focus > Is focused? | `<object> is focused` |  |  | — |  |
| 24 | -105 | Check if year is a leap year | `<object>: <p0> is a leap year` |  | numeric expression “Year” | — |  |
| 25 | -106 | Compare two dates | `<object>: Compare date: <p0> <p1> <p2>` |  | string expression “Enter the first date”; string expression “Compare the first date to the second (one of = != < > <= >=)”; string expression “Enter the second date” | — |  |
| 26 | -107 | Mouse > Clicked | `User <p0> on <object>` |  | click “Select the mouse button to test” | — |  |
| 27 | -108 | Mouse > Held | `User holds the <p0> over <object>` |  | key (code) “Select the mouse button to test” | — |  |
| 28 | -109 | Mouse > Released | `User releases the <p0> over <object>` |  | key (code) “Select the mouse button to test” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position and Size > Set X position | `Set X position to <p0>` |  | numeric expression “X position” | — |  |
| 1 | 81 | Position and Size > Set Y position | `Set Y position to <p0>` |  | numeric expression “Y position” | — |  |
| 2 | 82 | Position and Size > Set width | `Set width to <p0>` |  | numeric expression “Width” | — |  |
| 3 | 83 | Position and Size > Set height | `Set height to <p0>` |  | numeric expression “Height” | — |  |
| 4 | 84 | Visibility > Show | `Show` |  |  | — |  |
| 5 | 85 | Visibility > Hide | `Hide` |  |  | — |  |
| 6 | 86 | State > Enable | `Enable` |  |  | — |  |
| 7 | 87 | State > Disable | `Disable` |  |  | — |  |
| 8 | 88 | State > Focus | `Focus` |  |  | — |  |
| 9 | 89 | State > Unfocus | `Unfocus` |  |  | — |  |
| 17 | 97 | Date/Time picker appeareance > Background color | `Set picker background color to <p1>` |  | color “Pick a colour” | — |  |
| 19 | 99 | Date/Time picker appeareance > Format string > Short date | `Use short date format` |  |  | — |  |
| 20 | 100 | Date/Time picker appeareance > Format string > Short date (4 digit year) | `Use short date format (4 digit year)` |  |  | — |  |
| 21 | 101 | Date/Time picker appeareance > Format string > Long date | `Use long date format` |  |  | — |  |
| 22 | 102 | Date/Time picker appeareance > Format string > Time | `Use time format` |  |  | — |  |
| 23 | 103 | Date/Time picker appeareance > Format string > Custom | `Use date format <p0>` |  | string expression “Enter a date/time format string (see help for details)” | — |  |
| 24 | 104 | Date/Time picker appeareance > Clear date (if contains checkbox) | `Clear date` |  |  | — |  |
| 31 | 111 | Month calendar appeareance > Styles > Set today's date (as shown on calendar) | `Set today's date to <p0>` |  | string expression “Date” | — |  |
| 32 | 112 | Month calendar appeareance > Styles > Set first day of the week | `Set first day of the week to <p0>` |  | numeric expression “0 = Monday, 1 = Tuesday ... 6 = Sunday” | — |  |
| 33 | 113 | Month calendar appeareance > Styles > Set number of months to scroll at a time | `Scroll <p0> months at a time` |  | numeric expression “The number of months to scroll by, per scroll” | — |  |
| 34 | 114 | Month calendar appeareance > Colors / Font > Background color | `Set calendar background color to <p0>` |  | color “Pick a colour” | — |  |
| 35 | 115 | Month calendar appeareance > Colors / Font > Month background color | `Set calendar month background color to <p0>` |  | color “Pick a colour” | — |  |
| 36 | 116 | Month calendar appeareance > Colors / Font > Text color | `Set calendar text color to <p0>` |  | color “Pick a colour” | — |  |
| 37 | 117 | Month calendar appeareance > Colors / Font > Title background color | `Set calendar title background color to <p0>` |  | color “Pick a colour” | — |  |
| 38 | 118 | Month calendar appeareance > Colors / Font > Title color | `Set calendar title text color to <p0>` |  | color “Pick a colour” | — |  |
| 39 | 119 | Month calendar appeareance > Colors / Font > Trailing text color | `Set calendar trailing text color to <p0>` |  | color “Pick a colour” | — |  |
| 40 | 120 | Month calendar appeareance > Colors / Font > Set font | `Set calendar font to <p0>, size <p1>` |  | string expression “Font family name”; numeric expression “Font size in pt” | — |  |
| 41 | 121 | Multiple selection > Set maximum number of days | `Set maximum number of selectable days to <p0>` |  | numeric expression “The maximum number of selectable (consecutive) dates” | — |  |
| 42 | 122 | Multiple selection > Set selection | `Set selected date range from <p0> to <p1>` |  | string expression “Enter the first date”; string expression “Enter the second date” | — |  |
| 43 | 123 | Month calendar appeareance > Display a date in bold | `Bold date <p0>` |  | string expression “Date” | — |  |
| 44 | 124 | Month calendar appeareance > Remove bold state from a date | `Unbold date <p0>` |  | string expression “Date” | — |  |
| 45 | 125 | Set range of allowed dates > Set minimum date | `Set minimum allowed date to <p0>` |  | string expression “Date” | — |  |
| 46 | 126 | Set range of allowed dates > Set maximum date | `Set maximum allowed date to <p0>` |  | string expression “Date” | — |  |
| 47 | 127 | Set selected date | `Set selected date to <p0>` |  | string expression “Date” | — |  |
| 48 | 128 | Set system date | `Set system date to <p0>` |  | string expression “Date” | — |  |
| 49 | 129 | Month calendar appeareance > Clear bold dates | `Clear all bold dates` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position and Size > X position | `⡘` |  |  | — |  |
| 1 | 81 | Position and Size > Y position | `⡙` |  |  | — |  |
| 2 | 82 | Position and Size > Width | `Width(` |  |  | — |  |
| 3 | 83 | Position and Size > Height | `Height(` |  |  | — |  |
| 5 | 85 | Date/Time picker > Background color | `Picker BG Color(` |  |  | — |  |
| 6 | 86 | Date/Time picker > Get current format string | `Custom Format$(` |  | → string | — |  |
| 7 | 87 | Month calendar > Styles > Today's date | `Today Date$(` |  | → string | — |  |
| 8 | 88 | Month calendar > Styles > First day of the week | `First Day Of Week(` |  |  | — |  |
| 9 | 89 | Month calendar > Styles > Number of months to scroll at a time | `Month Scroll(` |  |  | — |  |
| 10 | 90 | Month calendar > Window > Maximum width of 'today' text | `Max Today Width(` |  |  | — |  |
| 11 | 91 | Month calendar > Window > Minimum width | `Min Width(` |  |  | — |  |
| 12 | 92 | Month calendar > Window > Minimum height | `Min Height(` |  |  | — |  |
| 13 | 93 | Month calendar > Colors > Background color | `Cal BG Color(` |  |  | — |  |
| 14 | 94 | Month calendar > Colors > Month background color | `Cal Month BG Color(` |  |  | — |  |
| 15 | 95 | Month calendar > Colors > Text color | `Cal Text Color(` |  |  | — |  |
| 16 | 96 | Month calendar > Colors > Title background color | `Cal Title BG Color(` |  |  | — |  |
| 17 | 97 | Month calendar > Colors > Title color | `Cal Title Text Color(` |  |  | — |  |
| 18 | 98 | Month calendar > Colors > Trailing text color | `Cal Trailing Text Color(` |  |  | — |  |
| 19 | 99 | Multiple selection > Maximum number of days | `Max Selected Days(` |  |  | — |  |
| 20 | 100 | Multiple selection > First date | `Selection Start$(` |  | → string | — |  |
| 21 | 101 | Multiple selection > Last date | `Selection End$(` |  | → string | — |  |
| 22 | 102 | Month calendar > Get displayed month range > Fully and partially visible months > First month | `First Visible Month$(` |  | → string | — |  |
| 23 | 103 | Month calendar > Get displayed month range > Fully and partially visible months > Last month | `Last Visible Month$(` |  | → string | — |  |
| 24 | 104 | Month calendar > Get displayed month range > Fully and partially visible months > Number of months spanned | `Visible Month Count(` |  |  | — |  |
| 25 | 105 | Month calendar > Get displayed month range > Only fully visible months > First month | `First Fully Visible Month$(` |  | → string | — |  |
| 26 | 106 | Month calendar > Get displayed month range > Only fully visible months > Last month | `Last Fully Visible Month$(` |  | → string | — |  |
| 27 | 107 | Month calendar > Get displayed month range > Only fully visible months > Number of months spanned | `Fully Visible Month Count(` |  |  | — |  |
| 28 | 108 | Month calendar > Bold state of a date | `Bold State(` |  | string “Date” | — |  |
| 29 | 109 | Month calendar > Date specified by last hit-test condition | `Hit Test Date$(` |  | → string | — |  |
| 30 | 110 | Get selected date | `Selected Date$(` |  | → string | — |  |
| 31 | 111 | Get allowable date range > Minimum date | `Min Allowed Date$(` |  | → string | — |  |
| 32 | 112 | Get allowable date range > Maximum date | `Max Allowed Date$(` |  | → string | — |  |
| 33 | 113 | Format date > Custom date | `Format Date$(` |  | string “Date”; string “Format string” → string | — |  |
| 34 | 114 | Format date > Short date | `Format Short$(` |  | string “Date” → string | — |  |
| 35 | 115 | Format date > Long date | `Format Long$(` |  | string “Date” → string | — |  |
| 36 | 116 | Format date > Year/month | `Format Year Month$(` |  | string “Date” → string | — |  |
| 37 | 117 | Format date > Custom time | `Format Time$(` |  | string “Time”; string “Format string” → string | — |  |
| 38 | 118 | Format date > HH:MM:SS | `Format HMS$(` |  | string “Time” → string | — |  |
| 39 | 119 | Format date > HH:MM | `Format HM$(` |  | string “Time” → string | — |  |
| 40 | 120 | Format date > HH | `Format H$(` |  | string “Time” → string | — |  |
| 41 | 121 | Date manipulation > Year from date | `Year(` |  | string “Date” | — |  |
| 42 | 122 | Date manipulation > Month from date | `Month(` |  | string “Date” | — |  |
| 43 | 123 | Date manipulation > Day from date | `Day(` |  | string “Date” | — |  |
| 44 | 124 | Date manipulation > Day of the year from date | `Day Of Year(` |  | string “Date” | — |  |
| 45 | 125 | Date manipulation > Day of the week from date | `Day Of Week(` |  | string “Date” | — |  |
| 46 | 126 | Date manipulation > Make date | `Date$(` |  | number “Year”; number “Month”; number “Day” → string | — |  |
| 47 | 127 | Date manipulation > Hour from time | `Hour(` |  | string “Date” | — |  |
| 48 | 128 | Date manipulation > Minute from time | `Minute(` |  | string “Date” | — |  |
| 49 | 129 | Date manipulation > Second from time | `Second(` |  | string “Date” | — |  |
| 51 | 131 | Date manipulation > Make date/time | `DateTime$(` |  | number “Year”; number “Month”; number “Day”; number “Hour”; number “Minute”; number “Second” → string | — |  |
| 53 | 133 | Durations > Add duration to a date | `Date Add$(` |  | string “Date”; number “Duration” → string | — |  |
| 54 | 134 | Durations > Difference between two dates | `Date Diff(` |  | string “Date”; string “Date” | — |  |
| 55 | 135 | Durations > Get years from duration and start date | `YearsD(` |  | number “Duration”; string “Date” | — |  |
| 56 | 136 | Durations > Get months from duration and start date | `MonthsD(` |  | number “Duration”; string “Date” | — |  |
| 57 | 137 | Durations > Get days from duration and start date | `DaysD(` |  | number “Duration”; string “Date” | — |  |
| 58 | 138 | Durations > Get total number of days from duration | `Total DaysD(` |  | number “Duration” | — |  |
| 59 | 139 | Durations > Get hours from duration | `HoursD(` |  | number “Duration” | — |  |
| 60 | 140 | Durations > Get minutes from duration | `MinutesD(` |  | number “Duration” | — |  |
| 61 | 141 | Durations > Get seconds from duration | `SecondsD(` |  | number “Duration” | — |  |
| 62 | 142 | Durations > Make duration | `Duration(` |  | number “Day”; number “Hour”; number “Minute”; number “Second” | — |  |
| 63 | 143 | Miscellaneous date information > Golden number | `Golden Number(` |  | number “Year” | — |  |
| 64 | 144 | Miscellaneous date information > Epact | `Epact(` |  | number “Year” | — |  |
| 65 | 145 | Miscellaneous date information > Solar equation | `Solar Equation(` |  | number “Year” | — |  |
| 66 | 146 | Miscellaneous date information > Lunar equation | `Lunar Equation(` |  | number “Year” | — |  |
| 67 | 147 | Miscellaneous date information > Easter Sunday | `Easter Sunday$(` |  | number “Year” → string | — |  |
| 68 | 148 | Miscellaneous date information > Get system date | `System Date$(` |  | → string | — |  |
| 69 | 149 | Get window handle | `Window Handle(` |  |  | — |  |
| 70 | 150 | Date manipulation > Week number from date | `Week Number(` |  | string “Date” | — |  |
| 71 | 151 | Date manipulation > Time zone from time | `Timezone(` |  | string “Date” | — |  |
| 72 | 152 | Date manipulation > Date to local time | `To Local$(` |  | string “Date” → string | — |  |
| 73 | 153 | Date manipulation > Date to specified time zone | `To Timezone$(` |  | string “Date”; number “Minute” → string | — |  |
| 74 | 154 | Date manipulation > Date to UTC | `To UTC$(` |  | string “Date” → string | — |  |
