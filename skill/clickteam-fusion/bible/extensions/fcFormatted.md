# Extension fcFormatted

- File: `fcFormatted.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Calculations > Test is true | `Last test is true` |  |  | — |  |
| 1 | -82 | Calculations > Test is false | `Last test is false` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Format Character | `Set Format Character to <p0>` |  | string expression “Format Character” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Manipulations > Get String Filled on Left | `getLeftFilled$(` |  | string “Right String”; number “Lenght” → string | — |  |
| 1 | 81 | Translations > Get French words from Integer | `getIntInFrench$(` |  | number “Integer” → string | — |  |
| 2 | 82 | Manipulations > Get Format Char X Time | `getFormatCharXTime$(` |  | number “Lenght” → string | — |  |
| 3 | 83 | Translations > Get English words from Integer | `getIntEnglish$(` |  | number “Integer” → string | — |  |
| 4 | 84 | Translations > Get Int/Roman from String | `getIntRoman$(` |  | string “Integer or Roman number” → string | — |  |
| 5 | 85 | Translations > Get Morse code from String | `getMorseCode$(` |  | string “String in lower cases” → string | — |  |
| 6 | 86 | Conversions > Get character from Int | `getCharFromInt$(` |  | number “Integer” → string | — |  |
| 7 | 87 | Conversions > Get Int from character | `getIntFromChar(` |  | string “Character” | — |  |
| 8 | 88 | Manipulations > Get String Filled on Right | `getRightFilled$(` |  | string “Left String”; number “Lenght” → string | — |  |
| 9 | 89 | Manipulations > Get String Filled on Middle | `getMiddleFilled$(` |  | string “Left String”; string “Right String”; number “Lenght” → string | — |  |
| 10 | 90 | Conversions > Get Base 10 in Base Y | `getIntInBaseX$(` |  | number “Integer”; number “Base to convert to” → string | — |  |
| 11 | 91 | Conversions > Get Base X in Base Y | `getBaseXInBaseY$(` |  | string “Number in Base X”; number “Base to convert from”; number “Base to convert to” → string | — |  |
| 12 | 92 | Manipulations > Get S (for plurial) | `getS$(` |  | number “Integer” → string | — |  |
| 13 | 93 | Calculations > Get String after a test | `getStringIf$(` |  | number “Float number”; string “Operator”; number “Float number”; string “String true”; string “String false” → string | — |  |
| 14 | 94 | Calculations > Get Result after a test | `getResultOfF(` |  | number “Float number”; string “Operator”; number “Float number” | — |  |
| 15 | 95 | Manipulations > Get String Trim | `getTrim$(` |  | string “String” → string | — |  |
| 16 | 96 | Manipulations > Get String Trim Left | `getLTrim$(` |  | string “String” → string | — |  |
| 17 | 97 | Manipulations > Get String Trim Right | `getRTrim$(` |  | string “String” → string | — |  |
| 18 | 98 | Manipulations > Get number with thousands separated | `getNumberThousandsSeparated$(` |  | string “String number” → string | — |  |
| 19 | 99 | Manipulations > Get string with X chars separated | `getStringXCharsSeparated$(` |  | string “String number”; number “Number of chars to group” → string | — |  |
| 20 | 100 | Translations > Get Short Leet from String | `getShortLeet$(` |  | string “String in lower cases” → string | — |  |
| 21 | 101 | Translations > Get Long Leet from String | `getLongLeet$(` |  | string “String in lower cases” → string | — |  |
| 22 | 102 | Translations > Get HTML from String | `getHTML$(` |  | string “String” → string | — |  |
| 23 | 103 | Calculations > Get Rounded float | `getRoundF(` |  | number “Float number”; number “Decimals” | — |  |
| 24 | 104 | Translations > Get Upper with accents | `getUpperAccents$(` |  | string “String” → string | — |  |
| 25 | 105 | Translations > Get Lower with accents | `getLowerAccents$(` |  | string “String” → string | — |  |
| 26 | 106 | Translations > Get Upper without accents | `getUpper$(` |  | string “String” → string | — |  |
| 27 | 107 | Translations > Get Lower witout accents | `getLower$(` |  | string “String” → string | — |  |
| 28 | 108 | Translations > Get String without accents | `getNoAccent$(` |  | string “String” → string | — |  |
| 29 | 109 | Translations > Get Spanish words from Integer | `getIntSpanish$(` |  | number “Integer” → string | — |  |
| 30 | 110 | Translations > Get German words from Integer | `getIntGerman$(` |  | number “Integer” → string | — |  |
| 31 | 111 | Manipulations > Get String Replace | `getStringReplace$(` |  | string “Search”; string “Replace”; string “String” → string | — |  |
