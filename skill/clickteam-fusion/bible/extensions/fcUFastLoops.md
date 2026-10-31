# Extension fcUFastLoops

- File: `fcUFastLoops.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Standard fast loop > On fast loop standard (ID) | `On standard fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 1 | -82 | Chunked fast loop > On fast loop chunked (ID) | `On chunked fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 2 | -83 | Every X events loops | `Every <p0> events loops` |  | numeric expression “Number of events loops (main loops)” | — |  |
| 3 | -84 | Standard fast loop > On fast loop standard (Name) | `On standard fastloop <p0>` |  | string expression “Name of the fast loop” | — |  |
| 4 | -85 | Chunked fast loop > On fast loop chunked (Name) | `On chunked fastloop <p0>` |  | string expression “Name of the fast loop” | — |  |
| 5 | -86 | Function > On function (Name) | `On function <p0>` |  | string expression “Name of the fast loop” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Standard fast loop > by ID > Start | `Start standard fastloop #<p0> for <p1> loops` |  | numeric expression “ID of the fast loop”; numeric expression “Total number of loops for the fast loop” | — |  |
| 1 | 81 | Chunked fast loop > by ID > Start (loops/chunk) | `Start chunked fastloop #<p0> for <p1> loops at <p2> loops/chunk` |  | numeric expression “ID of the fast loop”; numeric expression “Total number of loops for the fast loop”; numeric expression “Total number of loops per chunk” | — |  |
| 2 | 82 | Standard fast loop > by ID > Stop | `Stop standard fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 3 | 83 | Chunked fast loop > by ID > Stop | `Stop chunked fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 4 | 84 | Chunked fast loop > by ID > Start (chunks) | `Start chunked fastloop #<p0> for <p1> loops during <p2> chunks` |  | numeric expression “ID of the fast loop”; numeric expression “Total number of loops for the fast loop”; numeric expression “Total number of chunks” | — |  |
| 5 | 85 | Chunked fast loop > by ID > Pause | `Pause chunked fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 6 | 86 | Chunked fast loop > by ID > Resume | `Resume chunked fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 7 | 87 | Chunked fast loop > by ID > Step one chunk | `Step forward chunked fastloop #<p0>` |  | numeric expression “ID of the fast loop” | — |  |
| 8 | 88 | Chunked fast loop > by ID > Set Index | `Set index of chunked fastloop #<p0> to <p1>` |  | numeric expression “ID of the fast loop”; numeric expression “New index” | — |  |
| 9 | 89 | Standard fast loop > by ID > Set Index | `Set index of standard fastloop #<p0> to <p1>` |  | numeric expression “ID of the fast loop”; numeric expression “New index” | — |  |
| 10 | 90 | Standard fast loop > by Name > Start | `Start standard fastloop <p0> for <p1> loops` |  | string expression “Name of the fast loop”; numeric expression “Total number of loops for the fast loop” | — |  |
| 11 | 91 | Chunked fast loop > by Name > Start (loops/chunk) | `Start chunked fastloop <p0> for <p1> loops at <p2> loops/chunk` |  | string expression “Name of the fast loop”; numeric expression “Total number of loops for the fast loop”; numeric expression “Total number of loops per chunk” | — |  |
| 12 | 92 | Chunked fast loop > by Name > Start (chunks) | `Start chunked fastloop <p0> for <p1> loops during <p2> chunks` |  | string expression “Name of the fast loop”; numeric expression “Total number of loops for the fast loop”; numeric expression “Total number of chunks” | — |  |
| 13 | 93 | Function > by Name > Call | `Call function <p0>` |  | string expression “Name of the fast loop” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Standard fast loop > Get current ID | `getStdFastloopID(` |  |  | — |  |
| 1 | 81 | Standard fast loop > Get current index | `getStdFastloopIndex(` |  |  | — |  |
| 2 | 82 | Standard fast loop > Get current total loops | `getStdFastloopLoops(` |  |  | — |  |
| 3 | 83 | Chunked fast loop > Get current ID | `getChunkedFastloopID(` |  |  | — |  |
| 4 | 84 | Chunked fast loop > Get current index | `getChunkedFastloopIndex(` |  |  | — |  |
| 5 | 85 | Chunked fast loop > Get current total loops | `getChunkedFastloopLoops(` |  |  | — |  |
| 6 | 86 | Chunked fast loop > Get number of loops of a chunk | `getChunkedFastloopChunk(` |  |  | — |  |
| 7 | 87 | Chunked fast loop > Get number of ellapsed chunks | `getChunkedFastloopEllapsedChunks(` |  |  | — |  |
| 8 | 88 | Standard fast loop > Get current Name | `getStdFastloopName$(` |  | → string | — |  |
| 9 | 89 | Chunked fast loop > Get current Name | `getChunkedFastloopName$(` |  | → string | — |  |
| 10 | 90 | Function > Get current Name | `getFunctionName$(` |  | → string | — |  |
