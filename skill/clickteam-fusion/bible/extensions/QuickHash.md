# Extension QuickHash

- File: `QuickHash.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set file | `Set current file to: <p0>` |  | string expression “Current file” | — |  |
| 6 | 86 | GHash > GHash | `Perform a GHash hash` |  |  | — |  |
| 7 | 87 | GOST > GOST-Hash | `Perform a GOST-Hash hash` |  |  | — |  |
| 8 | 88 | MD > MD2 | `Perform a MD2 hash` |  |  | — |  |
| 9 | 89 | MD > MD4 | `Perform a MD4 hash` |  |  | — |  |
| 10 | 90 | MD > MD5 | `Perform a MD5 hash` |  |  | — |  |
| 11 | 91 | SHA > SHA-1 | `Perform a SHA-1 hash` |  |  | — |  |
| 12 | 92 | SHA > SHA-2-256 | `Perform a SHA-2 256bit hash` |  |  | — |  |
| 13 | 93 | SHA > SHA-2-384 | `Perform a SHA-2 384bit hash` |  |  | — |  |
| 14 | 94 | SHA > SHA-2-512 | `Perform a SHA-2 512bit hash` |  |  | — |  |
| 15 | 95 | Tiger > Tiger | `Perform a Tiger hash` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get hash | `get Hash$(` |  | → string | — |  |
| 1 | 81 | Get hash length | `get Hash Length(` |  |  | — |  |
| 2 | 82 | MD > MD2 | `get MDTwo Hash$(` |  | string → string | — |  |
| 3 | 83 | MD > MD4 | `get MDFour Hash$(` |  | string → string | — |  |
| 4 | 84 | SHA > SHA-1 | `get SHAOne Hash$(` |  | string → string | — |  |
| 5 | 85 | MD > MD5 | `get MDFive Hash$(` |  | string → string | — |  |
