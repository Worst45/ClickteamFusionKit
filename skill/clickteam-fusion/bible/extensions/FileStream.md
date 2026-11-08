# Extension FileStream

- File: `FileStream.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Error | `<object>: On Error` |  |  |
| 1 | -82 | File is Open | `<object>: File in Slot <p0> is Open` |  | numeric expression “Slot to Check” |
| 2 | -83 | File is OK | `<object>: File in Slot <p0> is OK` |  | numeric expression “Slot to Check” |
| 3 | -84 | File Exists/has Read Access | `<object>: File path <p0> exists/is readable` |  | string expression “File to check for Existence/Read Access” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open File Stream | `Open File Stream on <p0> in Slot <p1> with flags <p2>` |  | string expression “File to Open”; numeric expression “Slot to open File in (will close old stream in slot)”; numeric expression “Flags (add together): 1 = read, 2 = write, 4 = clear file contents, 8 = append to file” |
| 1 | 81 | Close File Stream | `Close File Stream on <p0>` |  | numeric expression “Slot to Close” |
| 2 | 82 | Set Byte | `Set Byte to <p2> at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; numeric expression “New Value of Byte” |
| 3 | 83 | Set Short | `Set Short to <p2> at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; numeric expression “New Value of Short” |
| 4 | 84 | Set Int | `Set Int to <p2> at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; numeric expression “New Value of Int” |
| 5 | 85 | Set Float | `Set Float to <p2> at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; numeric expression “New Value of Float” |
| 6 | 86 | Set Double | `Set Double to <p2> at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; numeric expression “New Value of Double” |
| 7 | 87 | Set String | `Set String to <p2> (Null Terminate = <p3>) at <p1> in Slot <p0>` |  | numeric expression “Slot”; numeric expression “Position in File (be careful not to exceed the file size)”; string expression “New Value of String”; numeric expression “Null Terminate? 0 = No, anything else = Yes” |
| 8 | 88 | Clear Error State | `Clear Error State in Slot <p0>` |  | numeric expression “Slot” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Signed Byte | `ByteAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 1 | 81 | Get Signed Short | `ShortAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 2 | 82 | Get Int | `IntAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 3 | 83 | Get Float | `FloatAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 4 | 84 | Get Double | `DoubleAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 5 | 85 | Get String | `StringAt$(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)”; number “Length (-1 for Null Terminated)” → string |
| 6 | 86 | Get Read Cursor Position | `ReadCursorPos(` |  | number “Slot” |
| 7 | 87 | Get Write Cursor Position | `WriteCursorPos(` |  | number “Slot” |
| 8 | 88 | Get File Size | `FileSize(` |  | number “Slot” |
| 9 | 89 | Get Unsigned Byte | `UnsignedByteAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
| 10 | 90 | Get Unsigned Short | `UnsignedShortAt(` |  | number “Slot”; number “Position in File (be careful not to exceed the file size)” |
