# Extension DirectoryPacker

- File: `DirectoryPacker.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | An error occured | `<object> : Error occured` |  |  | — |  |
| 1 | -82 | Packing finished | `<object> : Packing finished` |  |  | — |  |
| 2 | -83 | Unpacking finished | `<object> : Unpacking finished` |  |  | — |  |
| 3 | -84 | Packing failed | `<object> : Packing failed` |  |  | — |  |
| 4 | -85 | Unpacking failed | `<object> : Unpacking failed` |  |  | — |  |
| 5 | -86 | File is allowed | `<object> : File <p0> allowed` |  | string expression “Filename” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Pack directory | `Pack directory <p0> to <p1>` |  | string expression “Directory”; string expression “Destination filename” | — |  |
| 1 | 81 | Unpack file | `Unpack <p0> to <p1> (stop if folder exists = <p2>)` |  | file name “Packed file”; string expression “Destination directory”; numeric expression “Stop if folder exists? (0 = no, 1 = yes)” | — |  |
| 2 | 82 | Delete directory | `Delete directory <p0>` |  | string expression “Directory to delete” | — |  |
| 3 | 83 | Enable extension filter | `Enable extension filter (only allow list = <p0>)` |  | numeric expression “0 = block list, 1 = only allow list” | — |  |
| 4 | 84 | Disable extension filter | `Disable extension filter` |  |  | — |  |
| 5 | 85 | Add extension to filter list | `Add extension <p0> to filter list` |  | string expression “Extension to add” | — |  |
| 6 | 86 | Remove extension from filter list | `Remove extension <p0> from filter list` |  | string expression “Extension to remove” | — |  |
| 7 | 87 | Pack directory (this thread) | `Pack directory <p0> to <p1> in this thread` |  | string expression “Directory”; string expression “Destination filename” | — |  |
| 8 | 88 | Unpack file (this thread) | `Unpack <p0> to <p1> in this thread (stop if folder exists = <p2>)` |  | file name “Packed file”; string expression “Destination directory”; numeric expression “Stop if folder exists? (0 = no, 1 = yes)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current process | `process$(` |  | → string | — |  |
| 1 | 81 | Get current progress % | `progress(` |  |  | — |  |
| 2 | 82 | Get last error | `error$(` |  | → string | — |  |
| 3 | 83 | Get last windows error | `werr$(` |  | → string | — |  |
