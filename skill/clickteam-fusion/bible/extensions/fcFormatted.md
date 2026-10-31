# Extension fcFormatted

- Fichier : `fcFormatted.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Calculations > Test is true | `Last test is true` |  |  | — |  |
| 1 | -82 | Calculations > Test is false | `Last test is false` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Format Character | `Set Format Character to <p0>` |  | expression chaîne « Format Character » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Manipulations > Get String Filled on Left | `getLeftFilled$(` |  | chaîne « Right String » ; nombre « Lenght » → chaîne | — |  |
| 1 | 81 | Translations > Get French words from Integer | `getIntInFrench$(` |  | nombre « Integer » → chaîne | — |  |
| 2 | 82 | Manipulations > Get Format Char X Time | `getFormatCharXTime$(` |  | nombre « Lenght » → chaîne | — |  |
| 3 | 83 | Translations > Get English words from Integer | `getIntEnglish$(` |  | nombre « Integer » → chaîne | — |  |
| 4 | 84 | Translations > Get Int/Roman from String | `getIntRoman$(` |  | chaîne « Integer or Roman number » → chaîne | — |  |
| 5 | 85 | Translations > Get Morse code from String | `getMorseCode$(` |  | chaîne « String in lower cases » → chaîne | — |  |
| 6 | 86 | Conversions > Get character from Int | `getCharFromInt$(` |  | nombre « Integer » → chaîne | — |  |
| 7 | 87 | Conversions > Get Int from character | `getIntFromChar(` |  | chaîne « Character » | — |  |
| 8 | 88 | Manipulations > Get String Filled on Right | `getRightFilled$(` |  | chaîne « Left String » ; nombre « Lenght » → chaîne | — |  |
| 9 | 89 | Manipulations > Get String Filled on Middle | `getMiddleFilled$(` |  | chaîne « Left String » ; chaîne « Right String » ; nombre « Lenght » → chaîne | — |  |
| 10 | 90 | Conversions > Get Base 10 in Base Y | `getIntInBaseX$(` |  | nombre « Integer » ; nombre « Base to convert to » → chaîne | — |  |
| 11 | 91 | Conversions > Get Base X in Base Y | `getBaseXInBaseY$(` |  | chaîne « Number in Base X » ; nombre « Base to convert from » ; nombre « Base to convert to » → chaîne | — |  |
| 12 | 92 | Manipulations > Get S (for plurial) | `getS$(` |  | nombre « Integer » → chaîne | — |  |
| 13 | 93 | Calculations > Get String after a test | `getStringIf$(` |  | nombre « Float number » ; chaîne « Operator » ; nombre « Float number » ; chaîne « String true » ; chaîne « String false » → chaîne | — |  |
| 14 | 94 | Calculations > Get Result after a test | `getResultOfF(` |  | nombre « Float number » ; chaîne « Operator » ; nombre « Float number » | — |  |
| 15 | 95 | Manipulations > Get String Trim | `getTrim$(` |  | chaîne « String » → chaîne | — |  |
| 16 | 96 | Manipulations > Get String Trim Left | `getLTrim$(` |  | chaîne « String » → chaîne | — |  |
| 17 | 97 | Manipulations > Get String Trim Right | `getRTrim$(` |  | chaîne « String » → chaîne | — |  |
| 18 | 98 | Manipulations > Get number with thousands separated | `getNumberThousandsSeparated$(` |  | chaîne « String number » → chaîne | — |  |
| 19 | 99 | Manipulations > Get string with X chars separated | `getStringXCharsSeparated$(` |  | chaîne « String number » ; nombre « Number of chars to group » → chaîne | — |  |
| 20 | 100 | Translations > Get Short Leet from String | `getShortLeet$(` |  | chaîne « String in lower cases » → chaîne | — |  |
| 21 | 101 | Translations > Get Long Leet from String | `getLongLeet$(` |  | chaîne « String in lower cases » → chaîne | — |  |
| 22 | 102 | Translations > Get HTML from String | `getHTML$(` |  | chaîne « String » → chaîne | — |  |
| 23 | 103 | Calculations > Get Rounded float | `getRoundF(` |  | nombre « Float number » ; nombre « Decimals » | — |  |
| 24 | 104 | Translations > Get Upper with accents | `getUpperAccents$(` |  | chaîne « String » → chaîne | — |  |
| 25 | 105 | Translations > Get Lower with accents | `getLowerAccents$(` |  | chaîne « String » → chaîne | — |  |
| 26 | 106 | Translations > Get Upper without accents | `getUpper$(` |  | chaîne « String » → chaîne | — |  |
| 27 | 107 | Translations > Get Lower witout accents | `getLower$(` |  | chaîne « String » → chaîne | — |  |
| 28 | 108 | Translations > Get String without accents | `getNoAccent$(` |  | chaîne « String » → chaîne | — |  |
| 29 | 109 | Translations > Get Spanish words from Integer | `getIntSpanish$(` |  | nombre « Integer » → chaîne | — |  |
| 30 | 110 | Translations > Get German words from Integer | `getIntGerman$(` |  | nombre « Integer » → chaîne | — |  |
| 31 | 111 | Manipulations > Get String Replace | `getStringReplace$(` |  | chaîne « Search » ; chaîne « Replace » ; chaîne « String » → chaîne | — |  |
