# Extension Memory

- File: `Memory.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | This process > Write byte | `Write byte <p0> to <p1> in this process` |  | numeric expression “Byte to write”; numeric expression “Address” |
| 1 | 81 | This process > Write short | `Write short <p0> to <p1> in this process` |  | numeric expression “Short to write”; numeric expression “Address” |
| 2 | 82 | This process > Write integer | `Write integer <p0> to <p1> in this process` |  | numeric expression “Integer to write”; numeric expression “Address” |
| 3 | 83 | This process > Write float | `Write float <p0> to <p1> in this process` |  | numeric expression “Float to write”; numeric expression “Address” |
| 4 | 84 | This process > Write string | `Write string <p0> to <p1> in this process` |  | string expression “String to write”; numeric expression “Address” |
| 5 | 85 | This process > Write entity | `Write entity at <p0> with size <p1> to <p2> in this process` |  | numeric expression “Source address”; numeric expression “Size”; numeric expression “Destination address” |
| 6 | 86 | This process > Create thread | `Create thread at <p0> with parameter <p1>` |  | numeric expression “Address”; numeric expression “Parameter” |
| 7 | 87 | Other processes > Open by name | `Open process <p0>` |  | string expression “Process name” |
| 8 | 88 | Other processes > Close | `Close process` |  |  |
| 9 | 89 | Other processes > Write byte | `Write byte <p0> to <p1> in another process` |  | numeric expression “Byte to write”; numeric expression “Address” |
| 10 | 90 | Other processes > Write short | `Write short <p0> to <p1> in another process` |  | numeric expression “Short to write”; numeric expression “Address” |
| 11 | 91 | Other processes > Write integer | `Write integer <p0> to <p1> in another process` |  | numeric expression “Integer to write”; numeric expression “Address” |
| 12 | 92 | Other processes > Write float | `Write float <p0> to <p1> in another process` |  | numeric expression “Float to write”; numeric expression “Address” |
| 13 | 93 | Other processes > Write string | `Write string <p0> to <p1> in another process` |  | string expression “String to write”; numeric expression “Address” |
| 14 | 94 | Other processes > Write entity | `Write entity at <p0> with size <p1> to <p2> in another process` |  | numeric expression “Source address”; numeric expression “Size”; numeric expression “Destination address” |
| 15 | 95 | Other processes > Create thread | `Create thread at <p0> with parameter <p1> in another process` |  | numeric expression “Address”; numeric expression “Parameter” |
| 16 | 96 | This process > Make memory executable | `Make memory at <p0> (size <p1>) executable in this process` |  | numeric expression “Address”; numeric expression “Size” |
| 17 | 97 | Other processes > Make memory executable | `Make memory at <p0> (size <p1>) executable in another process` |  | numeric expression “Address”; numeric expression “Size” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | This process > Read byte | `ReadByte(` |  | number “Address” |
| 1 | 81 | This process > Read short | `ReadShort(` |  | number “Address” |
| 2 | 82 | This process > Read integer | `ReadInteger(` |  | number “Address” |
| 3 | 83 | This process > Read float | `ReadFloat(` |  | number “Address” |
| 4 | 84 | This process > Read string | `ReadString$(` |  | number “Address” → string |
| 5 | 85 | Other processes > Read byte | `ReadProcessByte(` |  | number “Address” |
| 6 | 86 | Other processes > Read short | `ReadProcessShort(` |  | number “Address” |
| 7 | 87 | Other processes > Read integer | `ReadProcessInteger(` |  | number “Address” |
| 8 | 88 | Other processes > Read float | `ReadProcessFloat(` |  | number “Address” |
| 9 | 89 | Other processes > Read string | `ReadProcessString$(` |  | number “Address” → string |
| 10 | 90 | This process > Allocate memory | `Allocate(` |  | number “Size” |
| 11 | 91 | Other processes > Allocate memory | `ProcessAllocate(` |  | number “Size” |
