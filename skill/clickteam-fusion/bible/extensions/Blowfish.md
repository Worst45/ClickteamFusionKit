# Extension Blowfish

- File: `Blowfish.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Errors > Has an Error Occured? | `<object>: On Error` |  |  | — |  |
| 1 | -82 | Encryption Keys > Does a Specific Key Exist? | `<object>: Key <p0> Exists` |  | string expression “Enter the Encryption Key” | — |  |
| 2 | -83 | Character Filter > Is a Specific Character Being Filtered? | `<object>: Character <p0> is Being Filtered` |  | string expression “Enter the Character” | — |  |
| 3 | -84 | Character Filter > Is a Specific Character (by Code) Being Filtered? | `<object>: Character with Code <p0> is Being Filtered` |  | numeric expression “Enter the Character Code” | — |  |
| 4 | -85 | Settings > Is Set to Pad End of Files with Zeros? | `<object>: Set to Pad End of Files with Zeros` |  |  | — |  |
| 5 | -86 | Settings > Is Filtering of Characters with Codes 0 to 31 Enabled? | `<object>: Filtering of Characters with Codes 0 to 31 is Enabled` |  |  | — |  |
| 6 | -87 | Files > Has File Finished Being Encrypted/Decrypted? | `<object>: File is Done Being Encrypted/Decrypted` |  |  | — |  |
| 7 | -88 | Files > Is File Being Encrypted/Decrypted? | `<object>: File is Being Encrypted/Decrypted` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encryption Keys > Add an Encryption Key | `Add Key <p0>` |  | string expression “Enter the Encryption Key” | — |  |
| 1 | 81 | Encryption Keys > Remove an Encryption Key | `Remove Key <p0>` |  | string expression “Enter the Encryption Key” | — |  |
| 2 | 82 | Character Filter > Add Characters to Filter | `Add Characters <p0> to the Filter` |  | string expression “Enter the Characters” | — |  |
| 3 | 83 | Character Filter > Add a Character to Filter by Code | `Add Character with Code <p0> to the Filter` |  | numeric expression “Enter the Character Code” | — |  |
| 4 | 84 | Character Filter > Remove Characters from Filter | `Remove Characters <p0> from the Filter` |  | string expression “Enter the Characters” | — |  |
| 5 | 85 | Character Filter > Remove a Character from Filter by Code | `Remove Character with Code <p0> from the Filter` |  | numeric expression “Enter the Character Code” | — |  |
| 6 | 86 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  | — |  |
| 7 | 87 | Files > Encrypt a File | `Encrypt File <p1> with Key <p0>` |  | string expression “Enter the Encryption Key”; string expression “Enter the File” | — |  |
| 8 | 88 | Files > Decrypt a File | `Decrypt File <p1> with Key <p0>` |  | string expression “Enter the Encryption Key”; string expression “Enter the File” | — |  |
| 9 | 89 | Settings > Do not Pad End of Files with Zeros | `Do not Pad End of Files with Zeros` |  |  | — |  |
| 10 | 90 | Settings > Pad End of Files with Zeros | `Pad End of Files with Zeros` |  |  | — |  |
| 11 | 91 | Settings > Enable Filtering of Characters with Codes 0 to 31 | `Enable Filtering of Characters with Codes 0 to 31` |  |  | — |  |
| 12 | 92 | Settings > Disable Filtering of Characters with Codes 0 to 31 | `Disable Filtering of Characters with Codes 0 to 31` |  |  | — |  |
| 13 | 93 | Files > Set File Work Time Interval | `Set File Work Time Interval to <p0> Milliseconds` |  | numeric expression “Enter the File Work Time Interval in Milliseconds (0 to Disable)” | — |  |
| 14 | 94 | Files > Set File Work Percentage Interval | `Set File Work Percentage Interval to <p0> %%` |  | numeric expression “Enter the File Work Percentage Interval (0 to Disable)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encrypting > Encrypt an Integer | `EncryptInteger(` |  | string; number; number; number | — |  |
| 1 | 81 | Floats > Convert a Float to an Integer | `ConvertToInteger(` |  | number | — |  |
| 2 | 82 | Encrypting > Encrypt a String | `EncryptString$(` |  | string; string → string | — |  |
| 3 | 83 | Decrypting > Decrypt an Integer | `DecryptInteger(` |  | string; number; number; number | — |  |
| 4 | 84 | Floats > Convert an Integer Back to a Float | `ConvertToFloat(` |  | number | — |  |
| 5 | 85 | Decrypting > Decrypt a String | `DecryptString$(` |  | string; string → string | — |  |
| 6 | 86 | Filtering > Filter a String | `FilterString$(` |  | string → string | — |  |
| 7 | 87 | Filtering > Defilter a String | `DefilterString$(` |  | string → string | — |  |
| 8 | 88 | Errors > Get Current Error Code | `ErrorCode(` |  |  | — |  |
| 9 | 89 | Errors > Get Current Expression Error Code | `ExpressionErrorCode(` |  |  | — |  |
| 10 | 90 | Encryption Keys > Create a Random Key | `RandomKey$(` |  | number → string | — |  |
| 11 | 91 | Files > Get File Work Time Interval | `FileTimeInterval(` |  |  | — |  |
| 12 | 92 | Files > Get File Work Progress | `FileProgress(` |  |  | — |  |
| 13 | 93 | Files > Get File Work Percentage Interval | `FilePercentInterval(` |  |  | — |  |
| 14 | 94 | Files > Get File Size | `FileSize(` |  |  | — |  |
