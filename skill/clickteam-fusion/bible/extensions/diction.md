# Extension diction

- File: `diction.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Word exists | `<object>: Word <p0> exists` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add word | `<object>: Add word <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Remove word | `<object>: Remove word <p0>` |  | (unreliable parameters) | — |  |
| 2 | 82 | Remove all words | `<object>: Remove all words` |  |  | — |  |
| 3 | 83 | File > Save as CSV | `<object>: Save as CSV <p0>` |  | (unreliable parameters) | — |  |
| 4 | 84 | File > Load from CSV | `<object>: Load from CSV <p0>` |  | (unreliable parameters) | — |  |
| 5 | 85 | File > Save as MMF Array | `<object>: Save as MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 6 | 86 | File > Load from MMF Array | `<object>: Load from MMF Array <p0>` |  | (unreliable parameters) | — |  |
| 7 | 87 | File > Save as Dynamic Array | `<object>: Save as Dynamic Array <p0>` |  | (unreliable parameters) | — |  |
| 8 | 88 | File > Load from Dynamic Array | `<object>: Load from Dynamic Array <p0>` |  | (unreliable parameters) | — |  |
| 9 | 89 | File > Save as INI | `<object>: Save as INI <p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | File > Load from INI | `<object>: Load from INI <p0>` |  | (unreliable parameters) | — |  |
| 11 | 91 | Settings > Hash Table > Set table size | `<object>: Set table size to <p0>` |  | (unreliable parameters) | — |  |
| 12 | 92 | Settings > String Comparisons > Case Insensitive (A == a) | `<object>: Comparisons are case insensitive` |  |  | — |  |
| 13 | 93 | Settings > String Comparisons > Case Sensitive (A < a) | `<object>: Comparisons are case sensitive` |  |  | — |  |
| 14 | 94 | Settings > Search Mode > Literal | `<object>: Disable wildcards` |  |  | — |  |
| 15 | 95 | Settings > Search Mode > Wildcards | `<object>: Enable wildcards` |  |  | — |  |
| 16 | 96 | Settings > Duplicate Words > Disallow duplicates | `<object>: Disallow duplicates` |  |  | — |  |
| 17 | 97 | Settings > Duplicate Words > Allow duplicates | `<object>: Allow duplicates` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of words | `countWords(` |  |  | — |  |
| 1 | 81 | Get hash table size | `tableSize(` |  |  | — |  |
