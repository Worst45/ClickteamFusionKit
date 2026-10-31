# Extension parser

- File: `parser.mfx` — third-party extension (shipped with a downloaded project)
- Name(s) shown in projects: “String Parser”
- Usage in the corpus: 192 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is URL safe? | `<object>: Is URL safe` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set source string | `<object>: Set source string to <p0>` |  | (unreliable parameters) | 40 (12 proj.) |  |
| 1 | 81 | File > Save to file | `<object>: Save to file <p0>` |  | (unreliable parameters) | — |  |
| 2 | 82 | File > Load from file | `<object>: Load from file <p0>` |  | (unreliable parameters) | — |  |
| 3 | 83 | File > Append to file | `<object>: Append to file <p0>` |  | (unreliable parameters) | — |  |
| 4 | 84 | File > Append from file | `<object>: Append from file <p0>` |  | (unreliable parameters) | — |  |
| 5 | 85 | List Tokenizing > Delimiters > Reset delimiters | `<object>: Reset delimiters` |  |  | 11 (3 proj.) |  |
| 6 | 86 | List Tokenizing > Delimiters > Add delimiter | `<object>: Add delimiter <p0>` |  | (unreliable parameters) | 2 (1 proj.) |  |
| 7 | 87 | List Tokenizing > Delimiters > Set delimiter | `<object>: Set delimiter to <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 8 | 88 | List Tokenizing > Delimiters > Delete delimiter index | `<object>: Delete delimiter at index <p0>` |  | (unreliable parameters) | — |  |
| 9 | 89 | List Tokenizing > Delimiters > Delete delimiter | `<object>: Delete delimiter <p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | List Tokenizing > Delimiters > Set default delimiter index | `<object>: Set default delimiter to index <p0>` |  | (unreliable parameters) | — |  |
| 11 | 91 | List Tokenizing > Delimiters > Set default delimiter | `<object>: Set default delimiter to <p0>` |  | (unreliable parameters) | 12 (3 proj.) |  |
| 12 | 92 | List Tokenizing > File > Save as CSV | `<object>: Save as CSV <p0>` |  | (unreliable parameters) | — |  |
| 13 | 93 | List Tokenizing > File > Load from CSV | `<object>: Load from CSV <p0>` |  | (unreliable parameters) | — |  |
| 14 | 94 | List Tokenizing > File > Save as MMF Array | `<object>: Save as MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 15 | 95 | List Tokenizing > File > Load from MMF Array | `<object>: Load from MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 16 | 96 | List Tokenizing > File > Save as Dynamic Array | `<object>: Save as Dynamic Array <p0>` |  | (unreliable parameters) | — |  |
| 17 | 97 | List Tokenizing > File > Load from Dynamic Array | `<object>: Load from Dynamic Array <p0>` |  | (unreliable parameters) | — |  |
| 18 | 98 | Settings > String Comparisons > Case Insensitive (A == a) | `<object>: Comparisons are case insensitive` |  |  | — |  |
| 19 | 99 | Settings > String Comparisons > Case Sensitive (A < a) | `<object>: Comparisons are case sensitive` |  |  | — |  |
| 20 | 100 | Settings > Search Mode > Literal | `<object>: Disable wildcards` |  |  | — |  |
| 21 | 101 | Settings > Search Mode > Wildcards | `<object>: Enable wildcards` |  |  | — |  |
| 22 | 102 | List Tokenizing > File > Save as INI | `<object>: Save as INI <p0>` |  | (unreliable parameters) | — |  |
| 23 | 103 | List Tokenizing > File > Load from INI | `<object>: Load from INI <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get string | `string$(` |  |  | — |  |
| 1 | 81 | Get length of string | `length(` |  |  | 27 (11 proj.) |  |
| 2 | 82 | Substrings > Left substring | `leftstr$(` |  | (unreliable parameters) | — |  |
| 3 | 83 | Substrings > Right substring | `rightstr$(` |  | (unreliable parameters) | — |  |
| 4 | 84 | Substrings > Middle substring | `midstr$(` |  | number | 27 (11 proj.) |  |
| 5 | 85 | Substrings > Get number of substrings | `numberOfSub(` |  | (unreliable parameters) | — |  |
| 6 | 86 | Substrings > Get index of substring | `indexOfSub(` |  | number (unreliable parameters) | — |  |
| 7 | 87 | Substrings > Get index of first substring | `firstSub(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Substrings > Get index of last substring | `lastSub(` |  | (unreliable parameters) | — |  |
| 9 | 89 | Substrings > Remove substrings | `remove$(` |  | (unreliable parameters) | — |  |
| 10 | 90 | Substrings > Replace substrings | `replace$(` |  | string (unreliable parameters) | — |  |
| 11 | 91 | Substrings > Insert substring | `insert$(` |  | number (unreliable parameters) | — |  |
| 12 | 92 | Transform > Reverse string | `reverse$(` |  |  | — |  |
| 13 | 93 | Transform > Uppercase string | `uppercase$(` |  |  | — |  |
| 14 | 94 | Transform > Lowercase string | `lowercase$(` |  |  | — |  |
| 15 | 95 | Transform > URL Encoded string | `urlEncode$(` |  |  | — |  |
| 16 | 96 | ASCII > Get ASCII character | `chr$(` |  | (unreliable parameters) | 48 (13 proj.) |  |
| 17 | 97 | ASCII > Get ASCII value | `asc(` |  | (unreliable parameters) | — |  |
| 18 | 98 | ASCII > Get ASCII value list | `ascList$(` |  | (unreliable parameters) | — |  |
| 19 | 99 | List Tokenizing > Delimiters > Get number of delimiters | `numberOfDelims(` |  |  | — |  |
| 20 | 100 | List Tokenizing > Delimiters > Get delimiter | `getDelim$(` |  | (unreliable parameters) | — |  |
| 21 | 101 | List Tokenizing > Delimiters > Get delimiter index | `getDelimIndex(` |  | (unreliable parameters) | — |  |
| 22 | 102 | List Tokenizing > Delimiters > Get default delimiter | `getDefDelim$(` |  |  | — |  |
| 23 | 103 | List Tokenizing > Delimiters > Get default delimiter index | `getDefDelimIndex(` |  |  | — |  |
| 24 | 104 | List Tokenizing > Get number of elements | `listCount(` |  |  | 7 (4 proj.) |  |
| 25 | 105 | List Tokenizing > Set element | `listSetAt$(` |  | number (unreliable parameters) | — |  |
| 26 | 106 | List Tokenizing > Insert element | `listInsertAt$(` |  | number (unreliable parameters) | — |  |
| 27 | 107 | List Tokenizing > Append element | `listAppend$(` |  | (unreliable parameters) | — |  |
| 28 | 108 | List Tokenizing > Prepend element | `listPrepend$(` |  | (unreliable parameters) | — |  |
| 29 | 109 | List Tokenizing > Get element | `listGetAt$(` |  | (unreliable parameters) | 4 (4 proj.) |  |
| 30 | 110 | List Tokenizing > Get first element | `listFirst$(` |  |  | 8 (3 proj.) |  |
| 31 | 111 | List Tokenizing > Get last element | `listLast$(` |  |  | 6 (4 proj.) |  |
| 32 | 112 | List Tokenizing > Find element matching | `listFind(` |  | number (unreliable parameters) | — |  |
| 33 | 113 | List Tokenizing > Find element containing | `listContains(` |  | number (unreliable parameters) | — |  |
| 34 | 114 | List Tokenizing > Delete element | `listDeleteAt$(` |  | (unreliable parameters) | — |  |
| 35 | 115 | List Tokenizing > Swap elements | `listSwap$(` |  | number | — |  |
| 36 | 116 | List Tokenizing > Sort elements ascending | `listSortAsc$(` |  |  | — |  |
| 37 | 117 | List Tokenizing > Sort elements descending | `listSortDesc$(` |  |  | — |  |
| 38 | 118 | List Tokenizing > Change delimiters | `listChangeDelims$(` |  | (unreliable parameters) | — |  |
| 39 | 119 | Set string, return "" | `set$(` |  | (unreliable parameters) | — |  |
| 40 | 120 | Set string, return 0 | `set(` |  | (unreliable parameters) | — |  |
| 41 | 121 | Filters > Get MD5 Signature | `mdFive$(` |  |  | — |  |
