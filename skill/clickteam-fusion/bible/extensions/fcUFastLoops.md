# Extension fcUFastLoops

- Fichier : `fcUFastLoops.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Standard fast loop > On fast loop standard (ID) | `On standard fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 1 | -82 | Chunked fast loop > On fast loop chunked (ID) | `On chunked fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 2 | -83 | Every X events loops | `Every <p0> events loops` |  | expression numérique « Number of events loops (main loops) » | — |  |
| 3 | -84 | Standard fast loop > On fast loop standard (Name) | `On standard fastloop <p0>` |  | expression chaîne « Name of the fast loop » | — |  |
| 4 | -85 | Chunked fast loop > On fast loop chunked (Name) | `On chunked fastloop <p0>` |  | expression chaîne « Name of the fast loop » | — |  |
| 5 | -86 | Function > On function (Name) | `On function <p0>` |  | expression chaîne « Name of the fast loop » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Standard fast loop > by ID > Start | `Start standard fastloop #<p0> for <p1> loops` |  | expression numérique « ID of the fast loop » ; expression numérique « Total number of loops for the fast loop » | — |  |
| 1 | 81 | Chunked fast loop > by ID > Start (loops/chunk) | `Start chunked fastloop #<p0> for <p1> loops at <p2> loops/chunk` |  | expression numérique « ID of the fast loop » ; expression numérique « Total number of loops for the fast loop » ; expression numérique « Total number of loops per chunk » | — |  |
| 2 | 82 | Standard fast loop > by ID > Stop | `Stop standard fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 3 | 83 | Chunked fast loop > by ID > Stop | `Stop chunked fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 4 | 84 | Chunked fast loop > by ID > Start (chunks) | `Start chunked fastloop #<p0> for <p1> loops during <p2> chunks` |  | expression numérique « ID of the fast loop » ; expression numérique « Total number of loops for the fast loop » ; expression numérique « Total number of chunks » | — |  |
| 5 | 85 | Chunked fast loop > by ID > Pause | `Pause chunked fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 6 | 86 | Chunked fast loop > by ID > Resume | `Resume chunked fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 7 | 87 | Chunked fast loop > by ID > Step one chunk | `Step forward chunked fastloop #<p0>` |  | expression numérique « ID of the fast loop » | — |  |
| 8 | 88 | Chunked fast loop > by ID > Set Index | `Set index of chunked fastloop #<p0> to <p1>` |  | expression numérique « ID of the fast loop » ; expression numérique « New index » | — |  |
| 9 | 89 | Standard fast loop > by ID > Set Index | `Set index of standard fastloop #<p0> to <p1>` |  | expression numérique « ID of the fast loop » ; expression numérique « New index » | — |  |
| 10 | 90 | Standard fast loop > by Name > Start | `Start standard fastloop <p0> for <p1> loops` |  | expression chaîne « Name of the fast loop » ; expression numérique « Total number of loops for the fast loop » | — |  |
| 11 | 91 | Chunked fast loop > by Name > Start (loops/chunk) | `Start chunked fastloop <p0> for <p1> loops at <p2> loops/chunk` |  | expression chaîne « Name of the fast loop » ; expression numérique « Total number of loops for the fast loop » ; expression numérique « Total number of loops per chunk » | — |  |
| 12 | 92 | Chunked fast loop > by Name > Start (chunks) | `Start chunked fastloop <p0> for <p1> loops during <p2> chunks` |  | expression chaîne « Name of the fast loop » ; expression numérique « Total number of loops for the fast loop » ; expression numérique « Total number of chunks » | — |  |
| 13 | 93 | Function > by Name > Call | `Call function <p0>` |  | expression chaîne « Name of the fast loop » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Standard fast loop > Get current ID | `getStdFastloopID(` |  |  | — |  |
| 1 | 81 | Standard fast loop > Get current index | `getStdFastloopIndex(` |  |  | — |  |
| 2 | 82 | Standard fast loop > Get current total loops | `getStdFastloopLoops(` |  |  | — |  |
| 3 | 83 | Chunked fast loop > Get current ID | `getChunkedFastloopID(` |  |  | — |  |
| 4 | 84 | Chunked fast loop > Get current index | `getChunkedFastloopIndex(` |  |  | — |  |
| 5 | 85 | Chunked fast loop > Get current total loops | `getChunkedFastloopLoops(` |  |  | — |  |
| 6 | 86 | Chunked fast loop > Get number of loops of a chunk | `getChunkedFastloopChunk(` |  |  | — |  |
| 7 | 87 | Chunked fast loop > Get number of ellapsed chunks | `getChunkedFastloopEllapsedChunks(` |  |  | — |  |
| 8 | 88 | Standard fast loop > Get current Name | `getStdFastloopName$(` |  | → chaîne | — |  |
| 9 | 89 | Chunked fast loop > Get current Name | `getChunkedFastloopName$(` |  | → chaîne | — |  |
| 10 | 90 | Function > Get current Name | `getFunctionName$(` |  | → chaîne | — |  |
