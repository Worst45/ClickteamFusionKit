# Extension cypher

- Fichier : `cypher.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Error Occurred | `Error Occurred` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encryption > Encrypt File | `Encrypt File <p0>, <p1>` |  | expression chaîne « Input File » ; expression chaîne « Output File (Leave blank to overwrite Input File) » | — |  |
| 1 | 81 | Encryption > Decrypt File | `Decrypt File <p0>, <p1>` |  | expression chaîne « Input File » ; expression chaîne « Output File (Leave blank to overwrite Input File) » | — |  |
| 2 | 82 | Encryption > Encrypt Memory | `Encrypt Memory <p0>, <p1>` |  | expression numérique « Memory Address » ; expression numérique « Size in Bytes » | — |  |
| 3 | 83 | Encryption > Decrypt Memory | `Decrypt Memory <p0>, <p1>` |  | expression numérique « Memory Address » ; expression numérique « Size in Bytes » | — |  |
| 4 | 84 | Key > Set Key | `Set Key to <p0>` |  | expression chaîne « Key » | — |  |
| 5 | 85 | Key > Set Key from Memory Address | `Set Key from Memory Address <p0>, <p1>` |  | expression numérique « Memory Address » ; expression numérique « Size in Bytes » | — |  |
| 6 | 86 | Key > Read Key from File | `Read Key from File <p0>` |  | expression chaîne « Key File » | — |  |
| 7 | 87 | Key > Read Key from File (advanced) | `Read Key from File (advanced) <p0>, <p1>, <p2>` |  | expression chaîne « Key File » ; expression numérique « Starting Byte » ; expression numérique « Number of Bytes to Read » | — |  |
| 8 | 88 | Benchmark > Benchmark Encryption | `Benchmark Encryption` |  |  | — |  |
| 9 | 89 | Benchmark > Benchmark Decryption | `Benchmark Decryption` |  |  | — |  |
| 10 | 90 | Benchmark > Reset Benchmark Results | `Reset Benchmark Results` |  |  | — |  |
| 11 | 91 | Test > Test Trees for Errors | `Test Trees for Errors` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encrypt > Encrypt Short | `EncShort(` |  | nombre | — |  |
| 1 | 81 | Encrypt > Decrypt Short | `DecShort(` |  | nombre | — |  |
| 2 | 82 | Encrypt > Encrypt Long | `EncLong(` |  | nombre | — |  |
| 3 | 83 | Encrypt > Decrypt Long | `DecLong(` |  | nombre | — |  |
| 4 | 84 | Encrypt > Encrypt Float | `EncFloat(` |  | nombre | — |  |
| 5 | 85 | Encrypt > Decrypt Float | `DecFloat(` |  | nombre | — |  |
| 6 | 86 | Encrypt > Encrypt String | `EncStr$(` |  | chaîne → chaîne | — |  |
| 7 | 87 | Encrypt > Decrypt String | `DecStr$(` |  | chaîne → chaîne | — |  |
| 8 | 88 | Benchmark > Get Benchmark for Encryption | `BenchEnc(` |  |  | — |  |
| 9 | 89 | Benchmark > Get Benchmark for Decryption | `BenchDec(` |  |  | — |  |
| 10 | 90 | Error > Get Error Code | `ErrorCode(` |  |  | — |  |
| 11 | 91 | Error > Get Error String | `ErrorStr$(` |  | → chaîne | — |  |
| 12 | 92 | Error > Get Error String from Code | `ErrorStrCode$(` |  | nombre → chaîne | — |  |
