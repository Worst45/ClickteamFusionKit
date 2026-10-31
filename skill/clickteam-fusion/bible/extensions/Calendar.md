# Extension Calendar

- Fichier : `Calendar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Date/Time picker > Calendar popup shown | `<objet>: Calendar popup shown` |  |  | — |  |
| 1 | -82 | Date/Time picker > Calendar popup hidden | `<objet>: Calendar popup hidden` |  |  | — |  |
| 2 | -83 | Date/Time picker > Date cleared (checkbox unticked) | `<objet>: Date cleared` |  |  | — |  |
| 3 | -84 | Date/Time picker > Date changed | `<objet>: Date changed` |  |  | — |  |
| 4 | -85 | Month calendar > User selects specific date(s) | `<objet>: User selects a date` |  |  | — |  |
| 5 | -86 | Month calendar > User selects a new month or date(s) | `<objet>: User selects a new month or date` |  |  | — |  |
| 6 | -87 | Month calendar > X, Y in calendar? | `<objet>: (<p0>, <p1>) lies in calendar` |  | expression numérique « X position » ; expression numérique « Y position » | — |  |
| 7 | -88 | Month calendar > Specific hit-test locations > Calendar background | `<objet>: Point lies in calendar background` |  |  | — |  |
| 8 | -89 | Month calendar > Specific hit-test locations > Any date | `<objet>: Point lies on date` |  |  | — |  |
| 9 | -90 | Month calendar > Specific hit-test locations > Date in next month | `<objet>: Point lies on date in next month` |  |  | — |  |
| 10 | -91 | Month calendar > Specific hit-test locations > Date in previous month | `<objet>: Point lies on date in prev month` |  |  | — |  |
| 11 | -92 | Month calendar > Specific hit-test locations > Day name | `<objet>: Point lies on date name` |  |  | — |  |
| 12 | -93 | Month calendar > Specific hit-test locations > Week number | `<objet>: Point lies on week number` |  |  | — |  |
| 13 | -94 | Month calendar > Specific hit-test locations > Title background | `<objet>: Point lies on title background` |  |  | — |  |
| 14 | -95 | Month calendar > Specific hit-test locations > Next month button | `<objet>: Point lies on next month button` |  |  | — |  |
| 15 | -96 | Month calendar > Specific hit-test locations > Prev month button | `<objet>: Point lies on prev month button` |  |  | — |  |
| 16 | -97 | Month calendar > Specific hit-test locations > Month name in title | `<objet>: Point lies on month name` |  |  | — |  |
| 17 | -98 | Month calendar > Specific hit-test locations > Year name in title | `<objet>: Point lies on year name` |  |  | — |  |
| 18 | -99 | Month calendar > Is date bold? | `<objet>: Date <p0> is bold` |  | expression chaîne « Date » | — |  |
| 19 | -100 | Is visible? | `<objet> visible` |  |  | — |  |
| 20 | -101 | Is enabled? | `<objet> enabled` |  |  | — |  |
| 21 | -102 | Focus > Received | `<objet>: focus received` |  |  | — |  |
| 22 | -103 | Focus > Lost | `<objet>: focus lost` |  |  | — |  |
| 23 | -104 | Focus > Is focused? | `<objet> is focused` |  |  | — |  |
| 24 | -105 | Check if year is a leap year | `<objet>: <p0> is a leap year` |  | expression numérique « Year » | — |  |
| 25 | -106 | Compare two dates | `<objet>: Compare date: <p0> <p1> <p2>` |  | expression chaîne « Enter the first date » ; expression chaîne « Compare the first date to the second (one of = != < > <= >=) » ; expression chaîne « Enter the second date » | — |  |
| 26 | -107 | Mouse > Clicked | `User <p0> on <objet>` |  | clic « Select the mouse button to test » | — |  |
| 27 | -108 | Mouse > Held | `User holds the <p0> over <objet>` |  | touche (code) « Select the mouse button to test » | — |  |
| 28 | -109 | Mouse > Released | `User releases the <p0> over <objet>` |  | touche (code) « Select the mouse button to test » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position and Size > Set X position | `Set X position to <p0>` |  | expression numérique « X position » | — |  |
| 1 | 81 | Position and Size > Set Y position | `Set Y position to <p0>` |  | expression numérique « Y position » | — |  |
| 2 | 82 | Position and Size > Set width | `Set width to <p0>` |  | expression numérique « Width » | — |  |
| 3 | 83 | Position and Size > Set height | `Set height to <p0>` |  | expression numérique « Height » | — |  |
| 4 | 84 | Visibility > Show | `Show` |  |  | — |  |
| 5 | 85 | Visibility > Hide | `Hide` |  |  | — |  |
| 6 | 86 | State > Enable | `Enable` |  |  | — |  |
| 7 | 87 | State > Disable | `Disable` |  |  | — |  |
| 8 | 88 | State > Focus | `Focus` |  |  | — |  |
| 9 | 89 | State > Unfocus | `Unfocus` |  |  | — |  |
| 17 | 97 | Date/Time picker appeareance > Background color | `Set picker background color to <p1>` |  | couleur « Pick a colour » | — |  |
| 19 | 99 | Date/Time picker appeareance > Format string > Short date | `Use short date format` |  |  | — |  |
| 20 | 100 | Date/Time picker appeareance > Format string > Short date (4 digit year) | `Use short date format (4 digit year)` |  |  | — |  |
| 21 | 101 | Date/Time picker appeareance > Format string > Long date | `Use long date format` |  |  | — |  |
| 22 | 102 | Date/Time picker appeareance > Format string > Time | `Use time format` |  |  | — |  |
| 23 | 103 | Date/Time picker appeareance > Format string > Custom | `Use date format <p0>` |  | expression chaîne « Enter a date/time format string (see help for details) » | — |  |
| 24 | 104 | Date/Time picker appeareance > Clear date (if contains checkbox) | `Clear date` |  |  | — |  |
| 31 | 111 | Month calendar appeareance > Styles > Set today's date (as shown on calendar) | `Set today's date to <p0>` |  | expression chaîne « Date » | — |  |
| 32 | 112 | Month calendar appeareance > Styles > Set first day of the week | `Set first day of the week to <p0>` |  | expression numérique « 0 = Monday, 1 = Tuesday ... 6 = Sunday » | — |  |
| 33 | 113 | Month calendar appeareance > Styles > Set number of months to scroll at a time | `Scroll <p0> months at a time` |  | expression numérique « The number of months to scroll by, per scroll » | — |  |
| 34 | 114 | Month calendar appeareance > Colors / Font > Background color | `Set calendar background color to <p0>` |  | couleur « Pick a colour » | — |  |
| 35 | 115 | Month calendar appeareance > Colors / Font > Month background color | `Set calendar month background color to <p0>` |  | couleur « Pick a colour » | — |  |
| 36 | 116 | Month calendar appeareance > Colors / Font > Text color | `Set calendar text color to <p0>` |  | couleur « Pick a colour » | — |  |
| 37 | 117 | Month calendar appeareance > Colors / Font > Title background color | `Set calendar title background color to <p0>` |  | couleur « Pick a colour » | — |  |
| 38 | 118 | Month calendar appeareance > Colors / Font > Title color | `Set calendar title text color to <p0>` |  | couleur « Pick a colour » | — |  |
| 39 | 119 | Month calendar appeareance > Colors / Font > Trailing text color | `Set calendar trailing text color to <p0>` |  | couleur « Pick a colour » | — |  |
| 40 | 120 | Month calendar appeareance > Colors / Font > Set font | `Set calendar font to <p0>, size <p1>` |  | expression chaîne « Font family name » ; expression numérique « Font size in pt » | — |  |
| 41 | 121 | Multiple selection > Set maximum number of days | `Set maximum number of selectable days to <p0>` |  | expression numérique « The maximum number of selectable (consecutive) dates » | — |  |
| 42 | 122 | Multiple selection > Set selection | `Set selected date range from <p0> to <p1>` |  | expression chaîne « Enter the first date » ; expression chaîne « Enter the second date » | — |  |
| 43 | 123 | Month calendar appeareance > Display a date in bold | `Bold date <p0>` |  | expression chaîne « Date » | — |  |
| 44 | 124 | Month calendar appeareance > Remove bold state from a date | `Unbold date <p0>` |  | expression chaîne « Date » | — |  |
| 45 | 125 | Set range of allowed dates > Set minimum date | `Set minimum allowed date to <p0>` |  | expression chaîne « Date » | — |  |
| 46 | 126 | Set range of allowed dates > Set maximum date | `Set maximum allowed date to <p0>` |  | expression chaîne « Date » | — |  |
| 47 | 127 | Set selected date | `Set selected date to <p0>` |  | expression chaîne « Date » | — |  |
| 48 | 128 | Set system date | `Set system date to <p0>` |  | expression chaîne « Date » | — |  |
| 49 | 129 | Month calendar appeareance > Clear bold dates | `Clear all bold dates` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position and Size > X position | `⡘` |  |  | — |  |
| 1 | 81 | Position and Size > Y position | `⡙` |  |  | — |  |
| 2 | 82 | Position and Size > Width | `Width(` |  |  | — |  |
| 3 | 83 | Position and Size > Height | `Height(` |  |  | — |  |
| 5 | 85 | Date/Time picker > Background color | `Picker BG Color(` |  |  | — |  |
| 6 | 86 | Date/Time picker > Get current format string | `Custom Format$(` |  | → chaîne | — |  |
| 7 | 87 | Month calendar > Styles > Today's date | `Today Date$(` |  | → chaîne | — |  |
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
| 20 | 100 | Multiple selection > First date | `Selection Start$(` |  | → chaîne | — |  |
| 21 | 101 | Multiple selection > Last date | `Selection End$(` |  | → chaîne | — |  |
| 22 | 102 | Month calendar > Get displayed month range > Fully and partially visible months > First month | `First Visible Month$(` |  | → chaîne | — |  |
| 23 | 103 | Month calendar > Get displayed month range > Fully and partially visible months > Last month | `Last Visible Month$(` |  | → chaîne | — |  |
| 24 | 104 | Month calendar > Get displayed month range > Fully and partially visible months > Number of months spanned | `Visible Month Count(` |  |  | — |  |
| 25 | 105 | Month calendar > Get displayed month range > Only fully visible months > First month | `First Fully Visible Month$(` |  | → chaîne | — |  |
| 26 | 106 | Month calendar > Get displayed month range > Only fully visible months > Last month | `Last Fully Visible Month$(` |  | → chaîne | — |  |
| 27 | 107 | Month calendar > Get displayed month range > Only fully visible months > Number of months spanned | `Fully Visible Month Count(` |  |  | — |  |
| 28 | 108 | Month calendar > Bold state of a date | `Bold State(` |  | chaîne « Date » | — |  |
| 29 | 109 | Month calendar > Date specified by last hit-test condition | `Hit Test Date$(` |  | → chaîne | — |  |
| 30 | 110 | Get selected date | `Selected Date$(` |  | → chaîne | — |  |
| 31 | 111 | Get allowable date range > Minimum date | `Min Allowed Date$(` |  | → chaîne | — |  |
| 32 | 112 | Get allowable date range > Maximum date | `Max Allowed Date$(` |  | → chaîne | — |  |
| 33 | 113 | Format date > Custom date | `Format Date$(` |  | chaîne « Date » ; chaîne « Format string » → chaîne | — |  |
| 34 | 114 | Format date > Short date | `Format Short$(` |  | chaîne « Date » → chaîne | — |  |
| 35 | 115 | Format date > Long date | `Format Long$(` |  | chaîne « Date » → chaîne | — |  |
| 36 | 116 | Format date > Year/month | `Format Year Month$(` |  | chaîne « Date » → chaîne | — |  |
| 37 | 117 | Format date > Custom time | `Format Time$(` |  | chaîne « Time » ; chaîne « Format string » → chaîne | — |  |
| 38 | 118 | Format date > HH:MM:SS | `Format HMS$(` |  | chaîne « Time » → chaîne | — |  |
| 39 | 119 | Format date > HH:MM | `Format HM$(` |  | chaîne « Time » → chaîne | — |  |
| 40 | 120 | Format date > HH | `Format H$(` |  | chaîne « Time » → chaîne | — |  |
| 41 | 121 | Date manipulation > Year from date | `Year(` |  | chaîne « Date » | — |  |
| 42 | 122 | Date manipulation > Month from date | `Month(` |  | chaîne « Date » | — |  |
| 43 | 123 | Date manipulation > Day from date | `Day(` |  | chaîne « Date » | — |  |
| 44 | 124 | Date manipulation > Day of the year from date | `Day Of Year(` |  | chaîne « Date » | — |  |
| 45 | 125 | Date manipulation > Day of the week from date | `Day Of Week(` |  | chaîne « Date » | — |  |
| 46 | 126 | Date manipulation > Make date | `Date$(` |  | nombre « Year » ; nombre « Month » ; nombre « Day » → chaîne | — |  |
| 47 | 127 | Date manipulation > Hour from time | `Hour(` |  | chaîne « Date » | — |  |
| 48 | 128 | Date manipulation > Minute from time | `Minute(` |  | chaîne « Date » | — |  |
| 49 | 129 | Date manipulation > Second from time | `Second(` |  | chaîne « Date » | — |  |
| 51 | 131 | Date manipulation > Make date/time | `DateTime$(` |  | nombre « Year » ; nombre « Month » ; nombre « Day » ; nombre « Hour » ; nombre « Minute » ; nombre « Second » → chaîne | — |  |
| 53 | 133 | Durations > Add duration to a date | `Date Add$(` |  | chaîne « Date » ; nombre « Duration » → chaîne | — |  |
| 54 | 134 | Durations > Difference between two dates | `Date Diff(` |  | chaîne « Date » ; chaîne « Date » | — |  |
| 55 | 135 | Durations > Get years from duration and start date | `YearsD(` |  | nombre « Duration » ; chaîne « Date » | — |  |
| 56 | 136 | Durations > Get months from duration and start date | `MonthsD(` |  | nombre « Duration » ; chaîne « Date » | — |  |
| 57 | 137 | Durations > Get days from duration and start date | `DaysD(` |  | nombre « Duration » ; chaîne « Date » | — |  |
| 58 | 138 | Durations > Get total number of days from duration | `Total DaysD(` |  | nombre « Duration » | — |  |
| 59 | 139 | Durations > Get hours from duration | `HoursD(` |  | nombre « Duration » | — |  |
| 60 | 140 | Durations > Get minutes from duration | `MinutesD(` |  | nombre « Duration » | — |  |
| 61 | 141 | Durations > Get seconds from duration | `SecondsD(` |  | nombre « Duration » | — |  |
| 62 | 142 | Durations > Make duration | `Duration(` |  | nombre « Day » ; nombre « Hour » ; nombre « Minute » ; nombre « Second » | — |  |
| 63 | 143 | Miscellaneous date information > Golden number | `Golden Number(` |  | nombre « Year » | — |  |
| 64 | 144 | Miscellaneous date information > Epact | `Epact(` |  | nombre « Year » | — |  |
| 65 | 145 | Miscellaneous date information > Solar equation | `Solar Equation(` |  | nombre « Year » | — |  |
| 66 | 146 | Miscellaneous date information > Lunar equation | `Lunar Equation(` |  | nombre « Year » | — |  |
| 67 | 147 | Miscellaneous date information > Easter Sunday | `Easter Sunday$(` |  | nombre « Year » → chaîne | — |  |
| 68 | 148 | Miscellaneous date information > Get system date | `System Date$(` |  | → chaîne | — |  |
| 69 | 149 | Get window handle | `Window Handle(` |  |  | — |  |
| 70 | 150 | Date manipulation > Week number from date | `Week Number(` |  | chaîne « Date » | — |  |
| 71 | 151 | Date manipulation > Time zone from time | `Timezone(` |  | chaîne « Date » | — |  |
| 72 | 152 | Date manipulation > Date to local time | `To Local$(` |  | chaîne « Date » → chaîne | — |  |
| 73 | 153 | Date manipulation > Date to specified time zone | `To Timezone$(` |  | chaîne « Date » ; nombre « Minute » → chaîne | — |  |
| 74 | 154 | Date manipulation > Date to UTC | `To UTC$(` |  | chaîne « Date » → chaîne | — |  |
