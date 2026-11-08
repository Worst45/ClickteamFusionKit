# Extension BinaryArray

- File: `BinaryArray.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Workspace exists | `<object> : Workspace exists` |  | string expression “Workspace name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | File > Load file > Uncompressed | `Load file <p0>` |  | file name “File path” |
| 1 | 81 | File > Save file > Uncompressed | `Save file to <p0>` |  | string expression “File path” |
| 2 | 82 | File > Load workspace file > Uncompressed | `Load workspace file <p0>` |  | file name “File path” |
| 3 | 83 | File > Save workspace file > Uncompressed | `Save all workspaces to <p0>` |  | string expression “File path” |
| 4 | 84 | Workspace > Switch | `Switch workspace to <p0>` |  | string expression “Workspace name” |
| 5 | 85 | Write > Byte | `Write byte <p1> to <p0>` |  | numeric expression “Position”; numeric expression “Value” |
| 6 | 86 | Write > Integer | `Write integer <p1> to <p0>` |  | numeric expression “Position”; numeric expression “Value” |
| 7 | 87 | Write > String | `Write string <p1> to <p0>` |  | numeric expression “Position”; string expression “Value” |
| 8 | 88 | Write > Terminated string | `Write terminated string <p1> to <p0>` |  | numeric expression “Position”; string expression “Value” |
| 9 | 89 | Write > Float | `Write float <p1> to <p0>` |  | numeric expression “Position”; numeric expression “Value” |
| 10 | 90 | Workspace > Resize | `Resize to <p0>` |  | numeric expression “Size” |
| 11 | 91 | Settings > Set virtual width/height | `Set virtual size to <p0> , <p1>` |  | numeric expression “X size”; numeric expression “Y size” |
| 12 | 92 | Workspace > Create | `Create workspace <p0>` |  | string expression “Name” |
| 13 | 93 | Workspace > Delete | `Delete workspace <p0>` |  | string expression “Name” |
| 14 | 94 | Settings > Set default size | `Set default size to <p0>` |  | numeric expression “New size” |
| 15 | 95 | Workspace > Delete all | `Delete all workspaces` |  |  |
| 16 | 96 | Workspace > Copy | `Copy current workspace to <p0>` |  | string expression “Destination name” |
| 17 | 97 | File > Load file > Compressed | `Load compressed file <p0>` |  | file name “File path” |
| 18 | 98 | File > Save file > Compressed | `Save compressed file to <p0>` |  | string expression “File path” |
| 19 | 99 | File > Load workspace file > Compressed | `Load compressed workspace file <p0>` |  | file name “File path” |
| 20 | 100 | File > Save workspace file > Compressed | `Save all workspaces compressed to <p0>` |  | string expression “File path” |
| 21 | 101 | Write > Range | `Modify range at <p0> with size <p1> to <p2>` |  | numeric expression “Position”; numeric expression “Size”; numeric expression “New value” |
| 22 | 102 | Write > Short | `Write short <p1> to <p0>` |  | numeric expression “Position”; numeric expression “Value” |
| 23 | 103 | Write > Entity | `Write entity at <p0> from <p1> with size <p2>` |  | numeric expression “Position”; numeric expression “Source position”; numeric expression “Size” |
| 24 | 104 | Settings > Use big-endian | `Use big endian` |  |  |
| 25 | 105 | Settings > Use little-endian | `Use little endian` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Read > Byte > Unsigned | `Byte(` |  | number “Position” |
| 1 | 81 | Read > Byte > Signed | `SignedByte(` |  | number “Position” |
| 2 | 82 | Read > Integer > Unsigned | `Integer(` |  | number “Position” |
| 3 | 83 | Read > String > With size | `String$(` |  | number “Position”; number “Size” → string |
| 4 | 84 | Read > String > Null terminated | `TerminatedString$(` |  | number “Position” → string |
| 5 | 85 | Combine > X/Y coordinates | `CombineXY(` |  | number “X”; number “Y” |
| 6 | 86 | Combine > X/Y/Z coordinates | `CombineXYZ(` |  | number “X”; number “Y”; number “Z” |
| 7 | 87 | Read > Float | `Float(` |  | number “Position” |
| 8 | 88 | Read > Short > Unsigned | `Short(` |  | number “Position” |
| 9 | 89 | Read > Short > Signed | `SignedShort(` |  | number “Position” |
| 10 | 90 | Get array size | `Size(` |  |  |
| 11 | 91 | Get number of workspaces | `WorkspaceCount(` |  |  |
| 12 | 92 | Read > Integer > Signed | `SignedInteger(` |  | number “Position” |
