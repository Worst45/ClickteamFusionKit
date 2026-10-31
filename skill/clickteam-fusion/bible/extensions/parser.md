# Extension parser

- Fichier : `parser.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « String Parser »
- Usage dans le corpus : 192 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is URL safe? | `<objet>: Is URL safe` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set source string | `<objet>: Set source string to <p0>` |  | (paramètres non fiables) | 40 (12 proj.) |  |
| 1 | 81 | File > Save to file | `<objet>: Save to file <p0>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | File > Load from file | `<objet>: Load from file <p0>` |  | (paramètres non fiables) | — |  |
| 3 | 83 | File > Append to file | `<objet>: Append to file <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | File > Append from file | `<objet>: Append from file <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | List Tokenizing > Delimiters > Reset delimiters | `<objet>: Reset delimiters` |  |  | 11 (3 proj.) |  |
| 6 | 86 | List Tokenizing > Delimiters > Add delimiter | `<objet>: Add delimiter <p0>` |  | (paramètres non fiables) | 2 (1 proj.) |  |
| 7 | 87 | List Tokenizing > Delimiters > Set delimiter | `<objet>: Set delimiter to <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | List Tokenizing > Delimiters > Delete delimiter index | `<objet>: Delete delimiter at index <p0>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | List Tokenizing > Delimiters > Delete delimiter | `<objet>: Delete delimiter <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | List Tokenizing > Delimiters > Set default delimiter index | `<objet>: Set default delimiter to index <p0>` |  | (paramètres non fiables) | — |  |
| 11 | 91 | List Tokenizing > Delimiters > Set default delimiter | `<objet>: Set default delimiter to <p0>` |  | (paramètres non fiables) | 12 (3 proj.) |  |
| 12 | 92 | List Tokenizing > File > Save as CSV | `<objet>: Save as CSV <p0>` |  | (paramètres non fiables) | — |  |
| 13 | 93 | List Tokenizing > File > Load from CSV | `<objet>: Load from CSV <p0>` |  | (paramètres non fiables) | — |  |
| 14 | 94 | List Tokenizing > File > Save as MMF Array | `<objet>: Save as MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 15 | 95 | List Tokenizing > File > Load from MMF Array | `<objet>: Load from MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 16 | 96 | List Tokenizing > File > Save as Dynamic Array | `<objet>: Save as Dynamic Array <p0>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | List Tokenizing > File > Load from Dynamic Array | `<objet>: Load from Dynamic Array <p0>` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Settings > String Comparisons > Case Insensitive (A == a) | `<objet>: Comparisons are case insensitive` |  |  | — |  |
| 19 | 99 | Settings > String Comparisons > Case Sensitive (A < a) | `<objet>: Comparisons are case sensitive` |  |  | — |  |
| 20 | 100 | Settings > Search Mode > Literal | `<objet>: Disable wildcards` |  |  | — |  |
| 21 | 101 | Settings > Search Mode > Wildcards | `<objet>: Enable wildcards` |  |  | — |  |
| 22 | 102 | List Tokenizing > File > Save as INI | `<objet>: Save as INI <p0>` |  | (paramètres non fiables) | — |  |
| 23 | 103 | List Tokenizing > File > Load from INI | `<objet>: Load from INI <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get string | `string$(` |  |  | — |  |
| 1 | 81 | Get length of string | `length(` |  |  | 27 (11 proj.) |  |
| 2 | 82 | Substrings > Left substring | `leftstr$(` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Substrings > Right substring | `rightstr$(` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Substrings > Middle substring | `midstr$(` |  | nombre | 27 (11 proj.) |  |
| 5 | 85 | Substrings > Get number of substrings | `numberOfSub(` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Substrings > Get index of substring | `indexOfSub(` |  | nombre (paramètres non fiables) | — |  |
| 7 | 87 | Substrings > Get index of first substring | `firstSub(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Substrings > Get index of last substring | `lastSub(` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Substrings > Remove substrings | `remove$(` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Substrings > Replace substrings | `replace$(` |  | chaîne (paramètres non fiables) | — |  |
| 11 | 91 | Substrings > Insert substring | `insert$(` |  | nombre (paramètres non fiables) | — |  |
| 12 | 92 | Transform > Reverse string | `reverse$(` |  |  | — |  |
| 13 | 93 | Transform > Uppercase string | `uppercase$(` |  |  | — |  |
| 14 | 94 | Transform > Lowercase string | `lowercase$(` |  |  | — |  |
| 15 | 95 | Transform > URL Encoded string | `urlEncode$(` |  |  | — |  |
| 16 | 96 | ASCII > Get ASCII character | `chr$(` |  | (paramètres non fiables) | 48 (13 proj.) |  |
| 17 | 97 | ASCII > Get ASCII value | `asc(` |  | (paramètres non fiables) | — |  |
| 18 | 98 | ASCII > Get ASCII value list | `ascList$(` |  | (paramètres non fiables) | — |  |
| 19 | 99 | List Tokenizing > Delimiters > Get number of delimiters | `numberOfDelims(` |  |  | — |  |
| 20 | 100 | List Tokenizing > Delimiters > Get delimiter | `getDelim$(` |  | (paramètres non fiables) | — |  |
| 21 | 101 | List Tokenizing > Delimiters > Get delimiter index | `getDelimIndex(` |  | (paramètres non fiables) | — |  |
| 22 | 102 | List Tokenizing > Delimiters > Get default delimiter | `getDefDelim$(` |  |  | — |  |
| 23 | 103 | List Tokenizing > Delimiters > Get default delimiter index | `getDefDelimIndex(` |  |  | — |  |
| 24 | 104 | List Tokenizing > Get number of elements | `listCount(` |  |  | 7 (4 proj.) |  |
| 25 | 105 | List Tokenizing > Set element | `listSetAt$(` |  | nombre (paramètres non fiables) | — |  |
| 26 | 106 | List Tokenizing > Insert element | `listInsertAt$(` |  | nombre (paramètres non fiables) | — |  |
| 27 | 107 | List Tokenizing > Append element | `listAppend$(` |  | (paramètres non fiables) | — |  |
| 28 | 108 | List Tokenizing > Prepend element | `listPrepend$(` |  | (paramètres non fiables) | — |  |
| 29 | 109 | List Tokenizing > Get element | `listGetAt$(` |  | (paramètres non fiables) | 4 (4 proj.) |  |
| 30 | 110 | List Tokenizing > Get first element | `listFirst$(` |  |  | 8 (3 proj.) |  |
| 31 | 111 | List Tokenizing > Get last element | `listLast$(` |  |  | 6 (4 proj.) |  |
| 32 | 112 | List Tokenizing > Find element matching | `listFind(` |  | nombre (paramètres non fiables) | — |  |
| 33 | 113 | List Tokenizing > Find element containing | `listContains(` |  | nombre (paramètres non fiables) | — |  |
| 34 | 114 | List Tokenizing > Delete element | `listDeleteAt$(` |  | (paramètres non fiables) | — |  |
| 35 | 115 | List Tokenizing > Swap elements | `listSwap$(` |  | nombre | — |  |
| 36 | 116 | List Tokenizing > Sort elements ascending | `listSortAsc$(` |  |  | — |  |
| 37 | 117 | List Tokenizing > Sort elements descending | `listSortDesc$(` |  |  | — |  |
| 38 | 118 | List Tokenizing > Change delimiters | `listChangeDelims$(` |  | (paramètres non fiables) | — |  |
| 39 | 119 | Set string, return "" | `set$(` |  | (paramètres non fiables) | — |  |
| 40 | 120 | Set string, return 0 | `set(` |  | (paramètres non fiables) | — |  |
| 41 | 121 | Filters > Get MD5 Signature | `mdFive$(` |  |  | — |  |
