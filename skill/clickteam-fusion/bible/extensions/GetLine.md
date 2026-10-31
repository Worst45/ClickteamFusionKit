# Extension GetLine

- File: `GetLine.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is File Opened? | `<object> : File is opened` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > Open File... | `Open File <p0>` |  | string expression “Choose the file full path...” | — |  |
| 1 | 81 | File > Close File | `Close File` |  |  | — |  |
| 2 | 82 | First Line | `First Line` |  |  | — |  |
| 3 | 83 | Previous Line | `Previous Line` |  |  | — |  |
| 4 | 84 | Next Line | `Next Line` |  |  | — |  |
| 5 | 85 | Last Line | `Last Line` |  |  | — |  |
| 6 | 86 | Go To Line... | `Go To Line <p0>` |  | numeric expression “Enter the line number” | — |  |
| 7 | 87 | Filter Lines > Filter Lines With Text... | `Filter lines with text <p0>` |  | string expression “Enter the text to search...” | — |  |
| 8 | 88 | Filter Lines > First Line With Text | `First line with text` |  |  | — |  |
| 9 | 89 | Filter Lines > Previous Line With Text | `Previous line with text` |  |  | — |  |
| 10 | 90 | Filter Lines > Next Line With Text | `Next line with text` |  |  | — |  |
| 11 | 91 | Filter Lines > Last Line With Text | `Last line with text` |  |  | — |  |
| 12 | 92 | Filter Lines > Reset Filter | `Reset filter` |  |  | — |  |
| 13 | 93 | Replace Words > Replace Word in Current Line... | `Replace word <p0> with <p1> in the current line` |  | string expression “Type the word to be replaced”; string expression “Type the new word to replace” | — |  |
| 14 | 94 | Replace Words > Reset Words | `Reset words` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of Lines | `NumLines(` |  |  | — |  |
| 1 | 81 | Current Line Number | `CurLine(` |  |  | — |  |
| 2 | 82 | Number of Characters | `NumChars(` |  |  | — |  |
| 3 | 83 | Current Character Number | `CurChar(` |  |  | — |  |
| 4 | 84 | Current Line Text | `CurLine$(` |  | → string | — |  |
| 5 | 85 | Previous Line Text | `PrevLine$(` |  | → string | — |  |
| 6 | 86 | Next Line Text | `NextLine$(` |  | → string | — |  |
| 7 | 87 | Count Words in Line | `CountWords(` |  |  | — |  |
| 8 | 88 | Count Lines With Text | `CountLinesWithText(` |  |  | — |  |
