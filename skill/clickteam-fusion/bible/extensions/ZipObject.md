# Extension ZipObject

- File: `ZipObject.mfx` — installed with Fusion
- Name(s) shown in projects: “Zip Object”
- Usage in the corpus: 44 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Zip Open? | `<object> Is Zip Open` |  |  | — |  |
| 1 | -82 | Is Slot A File? | `<object> Is Slot: <p0> a file?` |  | numeric expression “Slot Number” | — |  |
| 2 | -83 | Threads Enabled? | `<object> Are Threads Enabled?` |  |  | — |  |
| 3 | -84 | ZIP > File Added | `<object> File Added Sucessfully` |  |  | — |  |
| 4 | -85 | ZIP > Folder Added | `<object> Folder Added Sucessfully` |  |  | — |  |
| 6 | -87 | UnZIP > File Unzipped | `<object> File Unzipped Sucessfully` |  |  | — |  |
| 7 | -88 | Errors > Error: Password Needed | `<object> Error: Needs Password` |  |  | — |  |
| 8 | -89 | Errors > Error: Corrupt Archive | `<object> Error: Corrupt Archive` |  |  | — |  |
| 9 | -90 | Errors > Error: File Doesn't Exist | `<object> Error: File Doesn't Exist` |  |  | — |  |
| 11 | -92 | UnZIP > On Archive Progress | `<object> On Unzip Progress` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open Zip | `Open Zip: <p0>` |  | string expression “Zip Path” | 14 (1 proj.) |  |
| 1 | 81 | Set Password | `Set Password: <p0>` |  | string expression “Password” | — |  |
| 2 | 82 | ZIP > Add File | `Add File: <p0>` |  | string expression “File Path” | 4 (1 proj.) |  |
| 3 | 83 | ZIP > Add File As | `Add File: <p0> As: <p0>` |  | string expression “File Path”; string expression “Destination Name/Path” | — |  |
| 4 | 84 | ZIP > Add File From String | `Add File From String: <p0> As: <p0>` |  | string expression “String”; string expression “Destination Name/Path” | — |  |
| 5 | 85 | ZIP > Add Folder | `Add Folder: <p0>` |  | string expression “Folder Path” | — |  |
| 7 | 87 | UnZIP > Unzip File | `Unzip File: <p0> To: <p1>` |  | numeric expression “File Slot”; string expression “Destination Path” | — |  |
| 8 | 88 | UnZIP > Unzip Archive | `Unzip To: <p0>` |  | string expression “Destination Path” | 12 (1 proj.) |  |
| 9 | 89 | Close Zip | `Close Zip` |  |  | 14 (1 proj.) |  |
| 10 | 90 | Threading > Disable Threads | `Disable Threads` |  |  | — |  |
| 11 | 91 | Threading > Enable Threads | `Enable Threads` |  |  | — |  |
| 12 | 92 | Show Error | `Show The Current Error` |  |  | — |  |
| 13 | 93 | CRC32 > Calculate File | `Generate CRC32 Checksum For: <p0>` |  | string expression “File To Generate CRC32 For” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Open Zip Filename | `get Zip Filename$(` |  | → string | — |  |
| 1 | 81 | Get Open Zip Size | `get Zip Size(` |  |  | — |  |
| 2 | 82 | Get Password | `get Password$(` |  | → string | — |  |
| 3 | 83 | Get Number Of Files | `get Number Of Files(` |  |  | — |  |
| 4 | 84 | Files > Get Name At | `get Name At$(` |  | number → string | — |  |
| 5 | 85 | Files > Get Compressed Size At | `get Compressed Size At(` |  | number | — |  |
| 6 | 86 | Files > Get Uncompressed Size At | `get Uncompressed Size At(` |  | number | — |  |
| 7 | 87 | Files > Get Access Time At | `get Access Time At$(` |  | number → string | — |  |
| 8 | 88 | Files > Get Modified Time At | `get Modified Time At$(` |  | number → string | — |  |
| 9 | 89 | Files > Get Created Time At | `get Created Time At$(` |  | number → string | — |  |
| 10 | 90 | Get File As String | `get File At$(` |  | number → string | — |  |
| 11 | 91 | Get Error | `get Error$(` |  | → string | — |  |
| 12 | 92 | CRC32 > Calculate String | `get CRC String$(` |  | string → string | — |  |
| 13 | 93 | Files > Get CRC32 Value | `get CRC At$(` |  | number → string | — |  |
| 14 | 94 | CRC32 > Get File CRC32 | `get Output CRC$(` |  | → string | — |  |
| 15 | 95 | Find File By Name | `find File(` |  | string | — |  |
| 16 | 96 | Progress > Get Unzip Position | `get Unzip Progress(` |  |  | — |  |
