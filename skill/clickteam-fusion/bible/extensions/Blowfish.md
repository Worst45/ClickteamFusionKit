# Extension Blowfish

- Fichier : `Blowfish.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Errors > Has an Error Occured? | `<objet>: On Error` |  |  | — |  |
| 1 | -82 | Encryption Keys > Does a Specific Key Exist? | `<objet>: Key <p0> Exists` |  | expression chaîne « Enter the Encryption Key » | — |  |
| 2 | -83 | Character Filter > Is a Specific Character Being Filtered? | `<objet>: Character <p0> is Being Filtered` |  | expression chaîne « Enter the Character » | — |  |
| 3 | -84 | Character Filter > Is a Specific Character (by Code) Being Filtered? | `<objet>: Character with Code <p0> is Being Filtered` |  | expression numérique « Enter the Character Code » | — |  |
| 4 | -85 | Settings > Is Set to Pad End of Files with Zeros? | `<objet>: Set to Pad End of Files with Zeros` |  |  | — |  |
| 5 | -86 | Settings > Is Filtering of Characters with Codes 0 to 31 Enabled? | `<objet>: Filtering of Characters with Codes 0 to 31 is Enabled` |  |  | — |  |
| 6 | -87 | Files > Has File Finished Being Encrypted/Decrypted? | `<objet>: File is Done Being Encrypted/Decrypted` |  |  | — |  |
| 7 | -88 | Files > Is File Being Encrypted/Decrypted? | `<objet>: File is Being Encrypted/Decrypted` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encryption Keys > Add an Encryption Key | `Add Key <p0>` |  | expression chaîne « Enter the Encryption Key » | — |  |
| 1 | 81 | Encryption Keys > Remove an Encryption Key | `Remove Key <p0>` |  | expression chaîne « Enter the Encryption Key » | — |  |
| 2 | 82 | Character Filter > Add Characters to Filter | `Add Characters <p0> to the Filter` |  | expression chaîne « Enter the Characters » | — |  |
| 3 | 83 | Character Filter > Add a Character to Filter by Code | `Add Character with Code <p0> to the Filter` |  | expression numérique « Enter the Character Code » | — |  |
| 4 | 84 | Character Filter > Remove Characters from Filter | `Remove Characters <p0> from the Filter` |  | expression chaîne « Enter the Characters » | — |  |
| 5 | 85 | Character Filter > Remove a Character from Filter by Code | `Remove Character with Code <p0> from the Filter` |  | expression numérique « Enter the Character Code » | — |  |
| 6 | 86 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  | — |  |
| 7 | 87 | Files > Encrypt a File | `Encrypt File <p1> with Key <p0>` |  | expression chaîne « Enter the Encryption Key » ; expression chaîne « Enter the File » | — |  |
| 8 | 88 | Files > Decrypt a File | `Decrypt File <p1> with Key <p0>` |  | expression chaîne « Enter the Encryption Key » ; expression chaîne « Enter the File » | — |  |
| 9 | 89 | Settings > Do not Pad End of Files with Zeros | `Do not Pad End of Files with Zeros` |  |  | — |  |
| 10 | 90 | Settings > Pad End of Files with Zeros | `Pad End of Files with Zeros` |  |  | — |  |
| 11 | 91 | Settings > Enable Filtering of Characters with Codes 0 to 31 | `Enable Filtering of Characters with Codes 0 to 31` |  |  | — |  |
| 12 | 92 | Settings > Disable Filtering of Characters with Codes 0 to 31 | `Disable Filtering of Characters with Codes 0 to 31` |  |  | — |  |
| 13 | 93 | Files > Set File Work Time Interval | `Set File Work Time Interval to <p0> Milliseconds` |  | expression numérique « Enter the File Work Time Interval in Milliseconds (0 to Disable) » | — |  |
| 14 | 94 | Files > Set File Work Percentage Interval | `Set File Work Percentage Interval to <p0> %%` |  | expression numérique « Enter the File Work Percentage Interval (0 to Disable) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encrypting > Encrypt an Integer | `EncryptInteger(` |  | chaîne ; nombre ; nombre ; nombre | — |  |
| 1 | 81 | Floats > Convert a Float to an Integer | `ConvertToInteger(` |  | nombre | — |  |
| 2 | 82 | Encrypting > Encrypt a String | `EncryptString$(` |  | chaîne ; chaîne → chaîne | — |  |
| 3 | 83 | Decrypting > Decrypt an Integer | `DecryptInteger(` |  | chaîne ; nombre ; nombre ; nombre | — |  |
| 4 | 84 | Floats > Convert an Integer Back to a Float | `ConvertToFloat(` |  | nombre | — |  |
| 5 | 85 | Decrypting > Decrypt a String | `DecryptString$(` |  | chaîne ; chaîne → chaîne | — |  |
| 6 | 86 | Filtering > Filter a String | `FilterString$(` |  | chaîne → chaîne | — |  |
| 7 | 87 | Filtering > Defilter a String | `DefilterString$(` |  | chaîne → chaîne | — |  |
| 8 | 88 | Errors > Get Current Error Code | `ErrorCode(` |  |  | — |  |
| 9 | 89 | Errors > Get Current Expression Error Code | `ExpressionErrorCode(` |  |  | — |  |
| 10 | 90 | Encryption Keys > Create a Random Key | `RandomKey$(` |  | nombre → chaîne | — |  |
| 11 | 91 | Files > Get File Work Time Interval | `FileTimeInterval(` |  |  | — |  |
| 12 | 92 | Files > Get File Work Progress | `FileProgress(` |  |  | — |  |
| 13 | 93 | Files > Get File Work Percentage Interval | `FilePercentInterval(` |  |  | — |  |
| 14 | 94 | Files > Get File Size | `FileSize(` |  |  | — |  |
