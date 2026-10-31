# Extension Binary

- Fichier : `Binary.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Bank > Bank exists | `<objet>: Bank <p0> exists` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Save binary to file | `<objet>: Save binary to file <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Load binary from file | `<objet>: Load binary from file <p0>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Add Bytes > Load file to insert at | `<objet>: Insert file <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Add Bytes > Insert string at | `<objet>: Insert string <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Add Bytes > Insert byte at | `<objet>: Insert byte <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Add Bytes > Insert short at | `<objet>: Insert short <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Add Bytes > Insert long at | `<objet>: Insert long <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Add Bytes > Load file to append | `<objet>: Append file <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Add Bytes > Append string | `<objet>: Append string <p0>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Add Bytes > Append byte | `<objet>: Append byte <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Add Bytes > Append short | `<objet>: Append short <p0>` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Add Bytes > Append long | `<objet>: Append long <p0>` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Remove Bytes > Crop to | `<objet>: Crop to <p0>, <p1> bytes` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Remove Bytes > Remove at | `<objet>: Remove at <p0>, <p1> bytes` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Replace Bytes > Load file to replace at | `<objet>: Load file <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Replace Bytes > Set string at | `<objet>: Set string <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Replace Bytes > Set byte at | `<objet>: Set byte <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Replace Bytes > Set short at | `<objet>: Set short <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Replace Bytes > Set long at | `<objet>: Set long <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Bank > Save binary to bank | `<objet>: Save binary to bank <p0>` |  | (paramètres non fiables) | — |  |
| 20 | 100 | Bank > Load binary from bank | `<objet>: Load binary from bank <p0>` |  | (paramètres non fiables) | — |  |
| 21 | 101 | Filters > Binary to ASCII > Base64 > Encode | `<objet>: Encode to Base64` |  |  | — |  |
| 22 | 102 | Filters > Binary to ASCII > Base64 > Decode | `<objet>: Decode from Base64` |  |  | — |  |
| 23 | 103 | Filters > Binary to ASCII > Quoted-Printable > Encode | `<objet>: Encode to Quoted-Printable` |  |  | — |  |
| 24 | 104 | Filters > Binary to ASCII > Quoted-Printable > Decode | `<objet>: Decode from Quoted-Printable` |  |  | — |  |
| 25 | 105 | Filters > Encryption > Blowfish > Set key | `<objet>: Set blowfish key to <p0>` |  | (paramètres non fiables) | — |  |
| 26 | 106 | Filters > Encryption > Blowfish > Create random key | `<objet>: Create random blowfish key` |  |  | — |  |
| 27 | 107 | Filters > Encryption > Blowfish > Encrypt | `<objet>: Encrypt using blowfish` |  |  | — |  |
| 28 | 108 | Filters > Encryption > Blowfish > Decrypt | `<objet>: Decrypt using blowfish` |  |  | — |  |
| 29 | 109 | Filters > Compression > Zlib > Compress | `<objet>: Zlib compress` |  |  | — |  |
| 30 | 110 | Filters > Compression > Zlib > Decompress | `<objet>: Zlib decompress` |  |  | — |  |
| 31 | 111 | Settings > String Comparisons > Case insensitive (A=a) | `<objet>: Case insensitive` |  |  | — |  |
| 32 | 112 | Settings > String Comparisons > Case sensitive (A<a) | `<objet>: Case sensitive` |  |  | — |  |
| 33 | 113 | Remove Bytes > Clear | `<objet>: Remove all` |  |  | — |  |
| 34 | 114 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with bank | `<objet>: Replace bank <p0> occurrences with bank <p1>` |  | (paramètres non fiables) | — |  |
| 35 | 115 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with string | `<objet>: Replace bank <p0> occurrences with string <p1>` |  | (paramètres non fiables) | — |  |
| 36 | 116 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with byte | `<objet>: Replace bank <p0> occurrences with byte <p1>` |  | (paramètres non fiables) | — |  |
| 37 | 117 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with short | `<objet>: Replace bank <p0> occurrences with short <p1>` |  | (paramètres non fiables) | — |  |
| 38 | 118 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with long | `<objet>: Replace bank <p0> occurrences with long <p1>` |  | (paramètres non fiables) | — |  |
| 39 | 119 | Replace Byte Sequences > Replace String Occurrences > Replace string with bank | `<objet>: Replace string <p0> occurrences with bank <p1>` |  | (paramètres non fiables) | — |  |
| 40 | 120 | Replace Byte Sequences > Replace String Occurrences > Replace string with string | `<objet>: Replace string <p0> occurrences with string <p1>` |  | (paramètres non fiables) | — |  |
| 41 | 121 | Replace Byte Sequences > Replace String Occurrences > Replace string with byte | `<objet>: Replace string <p0> occurrences with byte <p1>` |  | (paramètres non fiables) | — |  |
| 42 | 122 | Replace Byte Sequences > Replace String Occurrences > Replace string with short | `<objet>: Replace string <p0> occurrences with short <p1>` |  | (paramètres non fiables) | — |  |
| 43 | 123 | Replace Byte Sequences > Replace String Occurrences > Replace string with long | `<objet>: Replace string <p0> occurrences with long <p1>` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with bank | `<objet>: Replace byte <p0> occurrences with bank <p1>` |  | (paramètres non fiables) | — |  |
| 45 | 125 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with string | `<objet>: Replace byte <p0> occurrences with string <p1>` |  | (paramètres non fiables) | — |  |
| 46 | 126 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with byte | `<objet>: Replace byte <p0> occurrences with byte <p1>` |  | (paramètres non fiables) | — |  |
| 47 | 127 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with short | `<objet>: Replace byte <p0> occurrences with short <p1>` |  | (paramètres non fiables) | — |  |
| 48 | 128 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with long | `<objet>: Replace byte <p0> occurrences with long <p1>` |  | (paramètres non fiables) | — |  |
| 49 | 129 | Replace Byte Sequences > Replace Short Occurrences > Replace short with bank | `<objet>: Replace short <p0> occurrences with bank <p1>` |  | (paramètres non fiables) | — |  |
| 50 | 130 | Replace Byte Sequences > Replace Short Occurrences > Replace short with string | `<objet>: Replace short <p0> occurrences with string <p1>` |  | (paramètres non fiables) | — |  |
| 51 | 131 | Replace Byte Sequences > Replace Short Occurrences > Replace short with byte | `<objet>: Replace short <p0> occurrences with byte <p1>` |  | (paramètres non fiables) | — |  |
| 52 | 132 | Replace Byte Sequences > Replace Short Occurrences > Replace short with short | `<objet>: Replace short <p0> occurrences with short <p1>` |  | (paramètres non fiables) | — |  |
| 53 | 133 | Replace Byte Sequences > Replace Short Occurrences > Replace short with long | `<objet>: Replace short <p0> occurrences with long <p1>` |  | (paramètres non fiables) | — |  |
| 54 | 134 | Replace Byte Sequences > Replace Long Occurrences > Replace long with bank | `<objet>: Replace long <p0> occurrences with bank <p1>` |  | (paramètres non fiables) | — |  |
| 55 | 135 | Replace Byte Sequences > Replace Long Occurrences > Replace long with string | `<objet>: Replace long <p0> occurrences with string <p1>` |  | (paramètres non fiables) | — |  |
| 56 | 136 | Replace Byte Sequences > Replace Long Occurrences > Replace long with byte | `<objet>: Replace long <p0> occurrences with byte <p1>` |  | (paramètres non fiables) | — |  |
| 57 | 137 | Replace Byte Sequences > Replace Long Occurrences > Replace long with short | `<objet>: Replace long <p0> occurrences with short <p1>` |  | (paramètres non fiables) | — |  |
| 58 | 138 | Replace Byte Sequences > Replace Long Occurrences > Replace long with long | `<objet>: Replace long <p0> occurrences with long <p1>` |  | (paramètres non fiables) | — |  |
| 59 | 139 | Settings > Byte Ordering > Little endian | `<objet>: Byte ordering: little endian` |  |  | — |  |
| 60 | 140 | Settings > Byte Ordering > Big endian | `<objet>: Byte ordering: Big endian` |  |  | — |  |
| 61 | 141 | Bank > Swap binary and bank | `<objet>: Swap binary with bank <p0>` |  | (paramètres non fiables) | — |  |
| 62 | 142 | Bank > Save bank to file | `<objet>: Save bank <p0> to file <p1>` |  | (paramètres non fiables) | — |  |
| 63 | 143 | Bank > Load bank from file | `<objet>: Load bank <p0> from file <p1>` |  | (paramètres non fiables) | — |  |
| 64 | 144 | Bank > Remove bank | `<objet>: Remove bank <p0>` |  | (paramètres non fiables) | — |  |
| 65 | 145 | Replace Bytes > Toggle short endianess at | `<objet>: Toggle endianess of short at <p0>` |  | (paramètres non fiables) | — |  |
| 66 | 146 | Replace Bytes > Toggle long endianess at | `<objet>: Toggle endianess of long at <p0>` |  | (paramètres non fiables) | — |  |
| 67 | 147 | Bank > Select bank | `<objet>: Select bank with key <p0>` |  | (paramètres non fiables) | — |  |
| 68 | 148 | Bank > Clip binary to selected bank | `<objet>: Save binary from <p0>, <p1> bytes to selected bank` |  | (paramètres non fiables) | — |  |
| 69 | 149 | Add Bytes > Insert bank at | `<objet>: Insert bank <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 70 | 150 | Add Bytes > Append bank | `<objet>: Append bank <p0>` |  | (paramètres non fiables) | — |  |
| 71 | 151 | Replace Bytes > Set bank at | `<objet>: Set bank <p0> at <p1>` |  | (paramètres non fiables) | — |  |
| 72 | 152 | Workspace > Save workspace | `<objet>: Save workspace to file <p0>` |  | (paramètres non fiables) | — |  |
| 73 | 153 | Workspace > Load workspace | `<objet>: Load workspace from file <p0>` |  | (paramètres non fiables) | — |  |
| 74 | 154 | Workspace > Merge workspace | `<objet>: Merge workspace from file <p0>` |  | (paramètres non fiables) | — |  |
| 75 | 155 | Resize binary | `<objet>: Resize binary to <p0> bytes` |  | (paramètres non fiables) | — |  |
| 76 | 156 | Filters > Binary to ASCII > Hex > Encode | `<objet>: Encode to Hex` |  |  | — |  |
| 77 | 157 | Filters > Binary to ASCII > Hex > Decode | `<objet>: Decode from Hex` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get size | `size(` |  |  | — |  |
| 1 | 81 | Get Bytes > Get string at | `string$(` |  | nombre | — |  |
| 2 | 82 | Get Bytes > Get byte at | `byte(` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Get Bytes > Get short at | `short(` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Get Bytes > Get long at | `long(` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Bank > Number of banks | `numberOfBanks(` |  |  | — |  |
| 6 | 86 | Filters > Encryption > Blowfish > Get key | `getBlowfishKey$(` |  |  | — |  |
| 7 | 87 | Datatypes > Get size of bank | `sizeOfBank(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Datatypes > Get size of byte | `sizeOfByte(` |  |  | — |  |
| 9 | 89 | Datatypes > Get size of short | `sizeOfShort(` |  |  | — |  |
| 10 | 90 | Datatypes > Get size of long | `sizeOfLong(` |  |  | — |  |
| 11 | 91 | Count Byte Sequences > Count bank occurrences | `countBank(` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Count Byte Sequences > Count string occurrences | `countString(` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Count Byte Sequences > Count byte occurrences | `countByte(` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Count Byte Sequences > Count short occurrences | `countShort(` |  | (paramètres non fiables) | — |  |
| 15 | 95 | Count Byte Sequences > Count long occurrences | `countLong(` |  | (paramètres non fiables) | — |  |
| 16 | 96 | Find Byte Sequences > Find bank occurrence | `findBank(` |  | nombre (paramètres non fiables) | — |  |
| 17 | 97 | Find Byte Sequences > Find string occurrence | `findString(` |  | nombre (paramètres non fiables) | — |  |
| 18 | 98 | Find Byte Sequences > Find byte occurrence | `findByte(` |  | nombre | — |  |
| 19 | 99 | Find Byte Sequences > Find short occurrence | `findShort(` |  | nombre | — |  |
| 20 | 100 | Find Byte Sequences > Find long occurrence | `findLong(` |  | nombre | — |  |
| 21 | 101 | Filters > Digital Signature > Get MD5 signature | `mdFive$(` |  |  | — |  |
| 22 | 102 | Bank > Get list of bank keys | `bankList$(` |  | (paramètres non fiables) | — |  |
| 23 | 103 | Get memory location | `addr(` |  |  | — |  |
| 24 | 104 | Bank > Get memory location | `bankAddr(` |  | (paramètres non fiables) | — |  |
| 25 | 105 | Bank > Get bank key at | `bankKey$(` |  | (paramètres non fiables) | — |  |
