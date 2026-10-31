# Extension Binary

- File: `Binary.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Bank > Bank exists | `<object>: Bank <p0> exists` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Save binary to file | `<object>: Save binary to file <p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Load binary from file | `<object>: Load binary from file <p0>` |  | (unreliable parameters) | — |  |
| 2 | 82 | Add Bytes > Load file to insert at | `<object>: Insert file <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 3 | 83 | Add Bytes > Insert string at | `<object>: Insert string <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 4 | 84 | Add Bytes > Insert byte at | `<object>: Insert byte <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 5 | 85 | Add Bytes > Insert short at | `<object>: Insert short <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 6 | 86 | Add Bytes > Insert long at | `<object>: Insert long <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 7 | 87 | Add Bytes > Load file to append | `<object>: Append file <p0>` |  | (unreliable parameters) | — |  |
| 8 | 88 | Add Bytes > Append string | `<object>: Append string <p0>` |  | (unreliable parameters) | — |  |
| 9 | 89 | Add Bytes > Append byte | `<object>: Append byte <p0>` |  | (unreliable parameters) | — |  |
| 10 | 90 | Add Bytes > Append short | `<object>: Append short <p0>` |  | (unreliable parameters) | — |  |
| 11 | 91 | Add Bytes > Append long | `<object>: Append long <p0>` |  | (unreliable parameters) | — |  |
| 12 | 92 | Remove Bytes > Crop to | `<object>: Crop to <p0>, <p1> bytes` |  | (unreliable parameters) | — |  |
| 13 | 93 | Remove Bytes > Remove at | `<object>: Remove at <p0>, <p1> bytes` |  | (unreliable parameters) | — |  |
| 14 | 94 | Replace Bytes > Load file to replace at | `<object>: Load file <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 15 | 95 | Replace Bytes > Set string at | `<object>: Set string <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 16 | 96 | Replace Bytes > Set byte at | `<object>: Set byte <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 17 | 97 | Replace Bytes > Set short at | `<object>: Set short <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 18 | 98 | Replace Bytes > Set long at | `<object>: Set long <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 19 | 99 | Bank > Save binary to bank | `<object>: Save binary to bank <p0>` |  | (unreliable parameters) | — |  |
| 20 | 100 | Bank > Load binary from bank | `<object>: Load binary from bank <p0>` |  | (unreliable parameters) | — |  |
| 21 | 101 | Filters > Binary to ASCII > Base64 > Encode | `<object>: Encode to Base64` |  |  | — |  |
| 22 | 102 | Filters > Binary to ASCII > Base64 > Decode | `<object>: Decode from Base64` |  |  | — |  |
| 23 | 103 | Filters > Binary to ASCII > Quoted-Printable > Encode | `<object>: Encode to Quoted-Printable` |  |  | — |  |
| 24 | 104 | Filters > Binary to ASCII > Quoted-Printable > Decode | `<object>: Decode from Quoted-Printable` |  |  | — |  |
| 25 | 105 | Filters > Encryption > Blowfish > Set key | `<object>: Set blowfish key to <p0>` |  | (unreliable parameters) | — |  |
| 26 | 106 | Filters > Encryption > Blowfish > Create random key | `<object>: Create random blowfish key` |  |  | — |  |
| 27 | 107 | Filters > Encryption > Blowfish > Encrypt | `<object>: Encrypt using blowfish` |  |  | — |  |
| 28 | 108 | Filters > Encryption > Blowfish > Decrypt | `<object>: Decrypt using blowfish` |  |  | — |  |
| 29 | 109 | Filters > Compression > Zlib > Compress | `<object>: Zlib compress` |  |  | — |  |
| 30 | 110 | Filters > Compression > Zlib > Decompress | `<object>: Zlib decompress` |  |  | — |  |
| 31 | 111 | Settings > String Comparisons > Case insensitive (A=a) | `<object>: Case insensitive` |  |  | — |  |
| 32 | 112 | Settings > String Comparisons > Case sensitive (A<a) | `<object>: Case sensitive` |  |  | — |  |
| 33 | 113 | Remove Bytes > Clear | `<object>: Remove all` |  |  | — |  |
| 34 | 114 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with bank | `<object>: Replace bank <p0> occurrences with bank <p1>` |  | (unreliable parameters) | — |  |
| 35 | 115 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with string | `<object>: Replace bank <p0> occurrences with string <p1>` |  | (unreliable parameters) | — |  |
| 36 | 116 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with byte | `<object>: Replace bank <p0> occurrences with byte <p1>` |  | (unreliable parameters) | — |  |
| 37 | 117 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with short | `<object>: Replace bank <p0> occurrences with short <p1>` |  | (unreliable parameters) | — |  |
| 38 | 118 | Replace Byte Sequences > Replace Bank Occurrences > Replace bank with long | `<object>: Replace bank <p0> occurrences with long <p1>` |  | (unreliable parameters) | — |  |
| 39 | 119 | Replace Byte Sequences > Replace String Occurrences > Replace string with bank | `<object>: Replace string <p0> occurrences with bank <p1>` |  | (unreliable parameters) | — |  |
| 40 | 120 | Replace Byte Sequences > Replace String Occurrences > Replace string with string | `<object>: Replace string <p0> occurrences with string <p1>` |  | (unreliable parameters) | — |  |
| 41 | 121 | Replace Byte Sequences > Replace String Occurrences > Replace string with byte | `<object>: Replace string <p0> occurrences with byte <p1>` |  | (unreliable parameters) | — |  |
| 42 | 122 | Replace Byte Sequences > Replace String Occurrences > Replace string with short | `<object>: Replace string <p0> occurrences with short <p1>` |  | (unreliable parameters) | — |  |
| 43 | 123 | Replace Byte Sequences > Replace String Occurrences > Replace string with long | `<object>: Replace string <p0> occurrences with long <p1>` |  | (unreliable parameters) | — |  |
| 44 | 124 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with bank | `<object>: Replace byte <p0> occurrences with bank <p1>` |  | (unreliable parameters) | — |  |
| 45 | 125 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with string | `<object>: Replace byte <p0> occurrences with string <p1>` |  | (unreliable parameters) | — |  |
| 46 | 126 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with byte | `<object>: Replace byte <p0> occurrences with byte <p1>` |  | (unreliable parameters) | — |  |
| 47 | 127 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with short | `<object>: Replace byte <p0> occurrences with short <p1>` |  | (unreliable parameters) | — |  |
| 48 | 128 | Replace Byte Sequences > Replace Byte Occurrences > Replace char with long | `<object>: Replace byte <p0> occurrences with long <p1>` |  | (unreliable parameters) | — |  |
| 49 | 129 | Replace Byte Sequences > Replace Short Occurrences > Replace short with bank | `<object>: Replace short <p0> occurrences with bank <p1>` |  | (unreliable parameters) | — |  |
| 50 | 130 | Replace Byte Sequences > Replace Short Occurrences > Replace short with string | `<object>: Replace short <p0> occurrences with string <p1>` |  | (unreliable parameters) | — |  |
| 51 | 131 | Replace Byte Sequences > Replace Short Occurrences > Replace short with byte | `<object>: Replace short <p0> occurrences with byte <p1>` |  | (unreliable parameters) | — |  |
| 52 | 132 | Replace Byte Sequences > Replace Short Occurrences > Replace short with short | `<object>: Replace short <p0> occurrences with short <p1>` |  | (unreliable parameters) | — |  |
| 53 | 133 | Replace Byte Sequences > Replace Short Occurrences > Replace short with long | `<object>: Replace short <p0> occurrences with long <p1>` |  | (unreliable parameters) | — |  |
| 54 | 134 | Replace Byte Sequences > Replace Long Occurrences > Replace long with bank | `<object>: Replace long <p0> occurrences with bank <p1>` |  | (unreliable parameters) | — |  |
| 55 | 135 | Replace Byte Sequences > Replace Long Occurrences > Replace long with string | `<object>: Replace long <p0> occurrences with string <p1>` |  | (unreliable parameters) | — |  |
| 56 | 136 | Replace Byte Sequences > Replace Long Occurrences > Replace long with byte | `<object>: Replace long <p0> occurrences with byte <p1>` |  | (unreliable parameters) | — |  |
| 57 | 137 | Replace Byte Sequences > Replace Long Occurrences > Replace long with short | `<object>: Replace long <p0> occurrences with short <p1>` |  | (unreliable parameters) | — |  |
| 58 | 138 | Replace Byte Sequences > Replace Long Occurrences > Replace long with long | `<object>: Replace long <p0> occurrences with long <p1>` |  | (unreliable parameters) | — |  |
| 59 | 139 | Settings > Byte Ordering > Little endian | `<object>: Byte ordering: little endian` |  |  | — |  |
| 60 | 140 | Settings > Byte Ordering > Big endian | `<object>: Byte ordering: Big endian` |  |  | — |  |
| 61 | 141 | Bank > Swap binary and bank | `<object>: Swap binary with bank <p0>` |  | (unreliable parameters) | — |  |
| 62 | 142 | Bank > Save bank to file | `<object>: Save bank <p0> to file <p1>` |  | (unreliable parameters) | — |  |
| 63 | 143 | Bank > Load bank from file | `<object>: Load bank <p0> from file <p1>` |  | (unreliable parameters) | — |  |
| 64 | 144 | Bank > Remove bank | `<object>: Remove bank <p0>` |  | (unreliable parameters) | — |  |
| 65 | 145 | Replace Bytes > Toggle short endianess at | `<object>: Toggle endianess of short at <p0>` |  | (unreliable parameters) | — |  |
| 66 | 146 | Replace Bytes > Toggle long endianess at | `<object>: Toggle endianess of long at <p0>` |  | (unreliable parameters) | — |  |
| 67 | 147 | Bank > Select bank | `<object>: Select bank with key <p0>` |  | (unreliable parameters) | — |  |
| 68 | 148 | Bank > Clip binary to selected bank | `<object>: Save binary from <p0>, <p1> bytes to selected bank` |  | (unreliable parameters) | — |  |
| 69 | 149 | Add Bytes > Insert bank at | `<object>: Insert bank <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 70 | 150 | Add Bytes > Append bank | `<object>: Append bank <p0>` |  | (unreliable parameters) | — |  |
| 71 | 151 | Replace Bytes > Set bank at | `<object>: Set bank <p0> at <p1>` |  | (unreliable parameters) | — |  |
| 72 | 152 | Workspace > Save workspace | `<object>: Save workspace to file <p0>` |  | (unreliable parameters) | — |  |
| 73 | 153 | Workspace > Load workspace | `<object>: Load workspace from file <p0>` |  | (unreliable parameters) | — |  |
| 74 | 154 | Workspace > Merge workspace | `<object>: Merge workspace from file <p0>` |  | (unreliable parameters) | — |  |
| 75 | 155 | Resize binary | `<object>: Resize binary to <p0> bytes` |  | (unreliable parameters) | — |  |
| 76 | 156 | Filters > Binary to ASCII > Hex > Encode | `<object>: Encode to Hex` |  |  | — |  |
| 77 | 157 | Filters > Binary to ASCII > Hex > Decode | `<object>: Decode from Hex` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get size | `size(` |  |  | — |  |
| 1 | 81 | Get Bytes > Get string at | `string$(` |  | number | — |  |
| 2 | 82 | Get Bytes > Get byte at | `byte(` |  | (unreliable parameters) | — |  |
| 3 | 83 | Get Bytes > Get short at | `short(` |  | (unreliable parameters) | — |  |
| 4 | 84 | Get Bytes > Get long at | `long(` |  | (unreliable parameters) | — |  |
| 5 | 85 | Bank > Number of banks | `numberOfBanks(` |  |  | — |  |
| 6 | 86 | Filters > Encryption > Blowfish > Get key | `getBlowfishKey$(` |  |  | — |  |
| 7 | 87 | Datatypes > Get size of bank | `sizeOfBank(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Datatypes > Get size of byte | `sizeOfByte(` |  |  | — |  |
| 9 | 89 | Datatypes > Get size of short | `sizeOfShort(` |  |  | — |  |
| 10 | 90 | Datatypes > Get size of long | `sizeOfLong(` |  |  | — |  |
| 11 | 91 | Count Byte Sequences > Count bank occurrences | `countBank(` |  | (unreliable parameters) | — |  |
| 12 | 92 | Count Byte Sequences > Count string occurrences | `countString(` |  | (unreliable parameters) | — |  |
| 13 | 93 | Count Byte Sequences > Count byte occurrences | `countByte(` |  | (unreliable parameters) | — |  |
| 14 | 94 | Count Byte Sequences > Count short occurrences | `countShort(` |  | (unreliable parameters) | — |  |
| 15 | 95 | Count Byte Sequences > Count long occurrences | `countLong(` |  | (unreliable parameters) | — |  |
| 16 | 96 | Find Byte Sequences > Find bank occurrence | `findBank(` |  | number (unreliable parameters) | — |  |
| 17 | 97 | Find Byte Sequences > Find string occurrence | `findString(` |  | number (unreliable parameters) | — |  |
| 18 | 98 | Find Byte Sequences > Find byte occurrence | `findByte(` |  | number | — |  |
| 19 | 99 | Find Byte Sequences > Find short occurrence | `findShort(` |  | number | — |  |
| 20 | 100 | Find Byte Sequences > Find long occurrence | `findLong(` |  | number | — |  |
| 21 | 101 | Filters > Digital Signature > Get MD5 signature | `mdFive$(` |  |  | — |  |
| 22 | 102 | Bank > Get list of bank keys | `bankList$(` |  | (unreliable parameters) | — |  |
| 23 | 103 | Get memory location | `addr(` |  |  | — |  |
| 24 | 104 | Bank > Get memory location | `bankAddr(` |  | (unreliable parameters) | — |  |
| 25 | 105 | Bank > Get bank key at | `bankKey$(` |  | (unreliable parameters) | — |  |
