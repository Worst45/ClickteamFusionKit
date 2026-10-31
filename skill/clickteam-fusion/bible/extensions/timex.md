# Extension timex

- Fichier : `timex.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare time > Every... | `<objet>: Every <p0> millisecond` |  | expression numérique « (In milliseconds) » | — |  |
| 1 | -82 | Compare time > Time equal to... | `<objet>: Time equal to <p0> milliseconds` |  | expression numérique « (In milliseconds) » | — |  |
| 2 | -83 | Compare time > Time greater than... | `<objet>: Time greater then <p0> milliseconds` |  | expression numérique « (In milliseconds) » | — |  |
| 3 | -84 | Compare time > Time less than... | `<objet>: Time less then <p0> milliseconds` |  | expression numérique « (In milliseconds) » | — |  |
| 4 | -85 | Global timers > Timer is counting? | `<objet>: Timer <p0> is counting` |  | expression numérique « (Zero-based) » | — |  |
| 5 | -86 | Global timers > Timer greater than... | `<objet>: Timer <p0> is greater than <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (In milliseconds) » | — |  |
| 6 | -87 | Global timers > Timer lower than... | `<objet>: Timer <p0> is lower than <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (In milliseconds) » | — |  |
| 7 | -88 | Global timers > Timer equal to... | `<objet>: Timer <p0> is equal to <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (In milliseconds) » | — |  |
| 8 | -89 | Global timers > Timer different from... | `<objet>: Timer <p0> is different from <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (In milliseconds) » | — |  |
| 9 | -90 | Compare time > Time different from... | `<objet>: Time different from <p0> milliseconds` |  | expression numérique « (In milliseconds) » | — |  |
| 10 | -91 | Is paused? | `<objet>: Is paused?` |  |  | — |  |
| 11 | -92 | MMF loop > Every Nth loop | `<objet>: Every <p0>th loop` |  | expression numérique « Every Nth loop » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Pause > Pause application for... | `Pause for <p0> milliseconds, hide cursor = <p1>` |  | expression numérique « (In milliseconds) » ; expression numérique « Hide cursor? (1 = true, 0 = false) » | — |  |
| 1 | 81 | Global timers > Start timer | `Start timer <p0>` |  | expression numérique « (Zero-based) » | — |  |
| 2 | 82 | Global timers > Stop timer | `Stop timer <p0>` |  | expression numérique « (Zero-based) » | — |  |
| 3 | 83 | Global timers > Set timer | `Set timer <p0> to <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (In milliseconds) » | — |  |
| 4 | 84 | Global timers > Reset timer | `Reset timer <p0>` |  | expression numérique « (Zero-based) » | — |  |
| 5 | 85 | Pause > Pause application | `Pause application, hide cursor = <p0>` |  | expression numérique « Hide cursor? (1 = true, 0 = false) » | — |  |
| 6 | 86 | Pause > Set unpausing character | `Set unpausing character to <p0>` |  | expression chaîne « Set unpausing character » | — |  |
| 7 | 87 | Reset gametime | `Reset gametime` |  |  | — |  |
| 8 | 88 | Global timers > Start all timers | `Start all timers` |  |  | — |  |
| 9 | 89 | Global timers > Stop all timers | `Stop all timers` |  |  | — |  |
| 10 | 90 | Global timers > Set all timers | `Set all timers to <p0>` |  | expression numérique « (In milliseconds) » | — |  |
| 11 | 91 | Global timers > Reset all timers | `Reset all timers` |  |  | — |  |
| 12 | 92 | Pause > Store pausing character | `Store pausing charcter <p0>` |  | expression chaîne « Store pausing character » | — |  |
| 13 | 93 | Global timers > Toggle timer | `Toggle timer <p0>` |  | expression numérique « (Zero-based) » | — |  |
| 14 | 94 | Global timers > Toggle all timers | `Toggle all timers` |  |  | — |  |
| 15 | 95 | Set gametime | `Set gametime` |  | expression numérique « (In milliseconds) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Compare time > Time since Windows started | `WindowsStartedSince(` |  |  | — |  |
| 1 | 81 | Compare time > Time since the game started | `GameStartedSince(` |  |  | — |  |
| 2 | 82 | Get global timer | `GetTimer(` |  | nombre | — |  |
| 3 | 83 | Pause > Get unpausing key as string | `UnpausingKey$(` |  | → chaîne | — |  |
| 4 | 84 | Pause > Get unpausing key as value | `UnpausingKey(` |  |  | — |  |
| 5 | 85 | Pause > Get pausing key as string | `PausingKey$(` |  | → chaîne | — |  |
| 6 | 86 | Pause > Get pausing key as value | `PausingKey(` |  |  | — |  |
| 7 | 87 | Get total number of timers | `NumberOfTimers(` |  |  | — |  |
| 8 | 88 | Date > Get year | `Year(` |  |  | — |  |
| 9 | 89 | Date > Get month | `Month(` |  |  | — |  |
| 10 | 90 | Date > Get month (name) | `Month$(` |  | → chaîne | — |  |
| 11 | 91 | Date > Get day of the year | `YearDay(` |  |  | — |  |
| 12 | 92 | Date > Get day of the month | `MonthDay(` |  |  | — |  |
| 13 | 93 | Date > Get day of the week | `WeekDay(` |  |  | — |  |
| 14 | 94 | Date > Get day of the week (name) | `WeekDayName(` |  | → chaîne | — |  |
| 15 | 95 | Date > Get hour | `GetHour(` |  |  | — |  |
| 16 | 96 | Date > Get minutes | `GetMin(` |  |  | — |  |
| 17 | 97 | Date > Get seconds | `GetSec(` |  |  | — |  |
