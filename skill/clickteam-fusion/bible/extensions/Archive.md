# Extension Archive

- File: `Archive.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<object>: On Error` |  |  | — |  |
| 1 | -82 | Archive Is Open? | `<object>: Archive Is Open?` |  |  | — |  |
| 2 | -83 | All Progress Finished? | `<object>: All Progress Finished?` |  |  | — |  |
| 3 | -84 | Files > File Added To Archive? | `<object>: File Added To Archive?` |  |  | — |  |
| 4 | -85 | Files > Folder Added To Archive? | `<object>: Folder Added To Archive?` |  |  | — |  |
| 5 | -86 | Files > File Removed From Archive? | `<object>: File Removed From Archive?` |  |  | — |  |
| 6 | -87 | Files > File Extracted From Archive? | `<object>: File Extracted From Archive?` |  |  | — |  |
| 7 | -88 | Files > File Deleted From Disk? | `<object>: File Deleted From Disk?` |  |  | — |  |
| 8 | -89 | Files > FileName List Generated? | `<object>: FileName List Generated?` |  |  | — |  |
| 9 | -90 | File Queue > File Added To Queue? | `<object>: File Added To Queue?` |  |  | — |  |
| 10 | -91 | File Queue > Folder Added To Queue? | `<object>: Folder Added To Queue?` |  |  | — |  |
| 11 | -92 | File Queue > Queue Cleared? | `<object>: Queue Cleared?` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `LastError$(` |  | → string | — |  |
| 1 | 81 | Get Current Password | `GetCurrentPassword$(` |  | → string | — |  |
| 2 | 82 | File Info > Last File Queued | `LastFileQueued$(` |  | → string | — |  |
| 3 | 83 | File Info > Last Folder Queued | `LastQueuedFolder$(` |  | → string | — |  |
| 4 | 84 | File Info > Last File Added | `LastFileAdded$(` |  | → string | — |  |
| 5 | 85 | File Info > Last Folder Added | `LastFolderAdded$(` |  | → string | — |  |
| 6 | 86 | File Info > Last File Removed | `LastFileRemoved$(` |  | → string | — |  |
| 7 | 87 | File Info > Last File Extracted | `LastFileExtracted$(` |  | → string | — |  |
| 8 | 88 | File Info > Last File Deleted | `LastFileDeleted$(` |  | → string | — |  |
| 9 | 89 | FileName From Index | `FileNameFromIndex$(` |  | string “Archive FilePath”; number “Index” → string | — |  |
| 10 | 90 | Get Archive Size | `GetArchiveSize(` |  | string “Archive FilePath” | — |  |
| 11 | 91 | File Queue > Number Of Files In Queue | `NumberOfFilesInQueue(` |  |  | — |  |
| 12 | 92 | File Queue > Number Of Folders In Queue | `NumberOfFoldersInQueue(` |  |  | — |  |
| 13 | 93 | File Queue > Number Of Files In Archive | `NumberOfFilesInArchive(` |  | string “Archive FilePath” | — |  |
