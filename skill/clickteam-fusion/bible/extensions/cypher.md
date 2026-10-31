# Extension cypher

- File: `cypher.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Error Occurred | `Error Occurred` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encryption > Encrypt File | `Encrypt File <p0>, <p1>` |  | string expression “Input File”; string expression “Output File (Leave blank to overwrite Input File)” | — |  |
| 1 | 81 | Encryption > Decrypt File | `Decrypt File <p0>, <p1>` |  | string expression “Input File”; string expression “Output File (Leave blank to overwrite Input File)” | — |  |
| 2 | 82 | Encryption > Encrypt Memory | `Encrypt Memory <p0>, <p1>` |  | numeric expression “Memory Address”; numeric expression “Size in Bytes” | — |  |
| 3 | 83 | Encryption > Decrypt Memory | `Decrypt Memory <p0>, <p1>` |  | numeric expression “Memory Address”; numeric expression “Size in Bytes” | — |  |
| 4 | 84 | Key > Set Key | `Set Key to <p0>` |  | string expression “Key” | — |  |
| 5 | 85 | Key > Set Key from Memory Address | `Set Key from Memory Address <p0>, <p1>` |  | numeric expression “Memory Address”; numeric expression “Size in Bytes” | — |  |
| 6 | 86 | Key > Read Key from File | `Read Key from File <p0>` |  | string expression “Key File” | — |  |
| 7 | 87 | Key > Read Key from File (advanced) | `Read Key from File (advanced) <p0>, <p1>, <p2>` |  | string expression “Key File”; numeric expression “Starting Byte”; numeric expression “Number of Bytes to Read” | — |  |
| 8 | 88 | Benchmark > Benchmark Encryption | `Benchmark Encryption` |  |  | — |  |
| 9 | 89 | Benchmark > Benchmark Decryption | `Benchmark Decryption` |  |  | — |  |
| 10 | 90 | Benchmark > Reset Benchmark Results | `Reset Benchmark Results` |  |  | — |  |
| 11 | 91 | Test > Test Trees for Errors | `Test Trees for Errors` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encrypt > Encrypt Short | `EncShort(` |  | number | — |  |
| 1 | 81 | Encrypt > Decrypt Short | `DecShort(` |  | number | — |  |
| 2 | 82 | Encrypt > Encrypt Long | `EncLong(` |  | number | — |  |
| 3 | 83 | Encrypt > Decrypt Long | `DecLong(` |  | number | — |  |
| 4 | 84 | Encrypt > Encrypt Float | `EncFloat(` |  | number | — |  |
| 5 | 85 | Encrypt > Decrypt Float | `DecFloat(` |  | number | — |  |
| 6 | 86 | Encrypt > Encrypt String | `EncStr$(` |  | string → string | — |  |
| 7 | 87 | Encrypt > Decrypt String | `DecStr$(` |  | string → string | — |  |
| 8 | 88 | Benchmark > Get Benchmark for Encryption | `BenchEnc(` |  |  | — |  |
| 9 | 89 | Benchmark > Get Benchmark for Decryption | `BenchDec(` |  |  | — |  |
| 10 | 90 | Error > Get Error Code | `ErrorCode(` |  |  | — |  |
| 11 | 91 | Error > Get Error String | `ErrorStr$(` |  | → string | — |  |
| 12 | 92 | Error > Get Error String from Code | `ErrorStrCode$(` |  | number → string | — |  |
