# Extension kctime

- Fichier : `kctime.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Computer Time | `Computer Time is <p0> second(s).` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Compare Timer | `<objet>: Timer <p0> is <p1> second(s).` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Reset Timer | `Reset timer <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Computer Time | `CTime(` |  |  | — |  |
| 1 | 81 | Get Timer | `GetTimer(` |  | (paramètres non fiables) | — |  |
| 2 | 82 | String Returns > Get Full Date and Time | `FullDate$(` |  | (paramètres non fiables) | — |  |
| 3 | 83 | String Returns > Get Three Letter Day | `Day$(` |  | (paramètres non fiables) | — |  |
| 4 | 84 | String Returns > Get Three Letter Month | `Month$(` |  | (paramètres non fiables) | — |  |
| 5 | 85 | String Returns > Get Two Letter Day Number | `DayNumber$(` |  | (paramètres non fiables) | — |  |
| 6 | 86 | String Returns > Get Two Letter Hour (24) | `Hours$(` |  | (paramètres non fiables) | — |  |
| 7 | 87 | String Returns > Get Two Letter Hour (12) | `HourAMPM$(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | String Returns > Get Two Letter Minute | `Minutes$(` |  | (paramètres non fiables) | — |  |
| 9 | 89 | String Returns > Get Two Letter Second | `Seconds$(` |  | (paramètres non fiables) | — |  |
| 10 | 90 | String Returns > Get Four Letter Year | `Year$(` |  | (paramètres non fiables) | — |  |
| 11 | 91 | String Returns > Get Two Letter AM/PM | `AmPm$(` |  | (paramètres non fiables) | — |  |
| 12 | 92 | String Returns > Get Seven Letter Hour:Minute[AM/PM] | `Time$(` |  | (paramètres non fiables) | — |  |
| 13 | 93 | String Returns > Get Ten Letter Hour:Minute:Second[AM/PM] | `FullTime$(` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Number Returns > Get Day | `Day(` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Number Returns > Get Hour | `GetHours(` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Number Returns > Get Minute | `GetMinutes(` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Number Returns > Get Second | `GetSeconds(` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Number Returns > Get Year | `Year(` |  | (paramètres non fiables) | — |  |
