# Extension niffzip

- File: `niffzip.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compression complete | `<object> : Compression complete` |  |  |
| 1 | -82 | Compression failed | `<object> : Compression failed` |  |  |
| 2 | -83 | Extraction complete | `<object> : Extraction complete` |  |  |
| 3 | -84 | Extraction failed | `<object> : Extraction failed` |  |  |
| 4 | -85 | Deletion complete | `<object> : Deletion complete` |  |  |
| 5 | -86 | Deletion failed | `<object> : Deletion failed` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Compress directory | `Compress <p0> to <p1> (keep directory name: <p2>)` |  | string expression “Directory to compress”; string expression “Archive to compress to”; numeric expression “Keep directory name in zip (1 = yes, 0 = no)” |
| 1 | 81 | Extract file | `Extract <p0> to <p1>` |  | string expression “Archive path”; string expression “Destination path” |
| 2 | 82 | Delete directory | `Delete directory <p0>` |  | string expression “Directory to delete” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get current progress % | `progress(` |  |  |
| 1 | 81 | Name of archive | `archive$(` |  | → string |
| 2 | 82 | Get last error | `error$(` |  | → string |
