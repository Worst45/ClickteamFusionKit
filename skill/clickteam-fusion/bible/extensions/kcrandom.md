# Extension kcrandom

- File: `kcrandom.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Random Event | `<p0> percent of the time.` |  | (unreliable parameters) | — |  |
| 1 | -82 | Random Event Group | `<object>: A <p0> percent chance in group.` |  | (unreliable parameters) | — |  |
| 2 | -83 | Custom Random Event Group | `<object>: A <p0> percent chance in group <p1>.` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New Random Seed | `New Randomizer Seed.` |  |  | — |  |
| 1 | 81 | Set Random Seed | `Set Randomizer Seed to <p0>.` |  | (unreliable parameters) | — |  |
| 2 | 82 | Activate Random Event Group | `Activate Random Event Group.` |  | (unreliable parameters) | — |  |
| 3 | 83 | Activate Custom Random Event Group | `Activate Random Event Group <p0>.` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random Number | `RandomNum(` |  | (unreliable parameters) | — |  |
| 1 | 81 | Random Number (range) | `RandomRange(` |  | number | — |  |
| 2 | 82 | Get Last Seed | `GetSeed(` |  |  | — |  |
| 3 | 83 | Random Letter | `RandomLetter$(` |  |  | — |  |
| 4 | 84 | Random Alphanumeric Character | `RandomAlphanum$(` |  |  | — |  |
| 5 | 85 | Random Character | `RandomCharacter$(` |  |  | — |  |
| 6 | 86 | Character/String functions > Ascii to Char | `AsciiToChar$(` |  | (unreliable parameters) | — |  |
| 7 | 87 | Character/String functions > Char to Ascii | `CharToAscii(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Character/String functions > To Uppercase | `toUpper$(` |  | (unreliable parameters) | — |  |
| 9 | 89 | Character/String functions > To Lowercase | `toLower$(` |  | (unreliable parameters) | — |  |
