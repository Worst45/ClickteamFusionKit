# Extension Archive

- Fichier : `Archive.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<objet>: On Error` |  |  | — |  |
| 1 | -82 | Archive Is Open? | `<objet>: Archive Is Open?` |  |  | — |  |
| 2 | -83 | All Progress Finished? | `<objet>: All Progress Finished?` |  |  | — |  |
| 3 | -84 | Files > File Added To Archive? | `<objet>: File Added To Archive?` |  |  | — |  |
| 4 | -85 | Files > Folder Added To Archive? | `<objet>: Folder Added To Archive?` |  |  | — |  |
| 5 | -86 | Files > File Removed From Archive? | `<objet>: File Removed From Archive?` |  |  | — |  |
| 6 | -87 | Files > File Extracted From Archive? | `<objet>: File Extracted From Archive?` |  |  | — |  |
| 7 | -88 | Files > File Deleted From Disk? | `<objet>: File Deleted From Disk?` |  |  | — |  |
| 8 | -89 | Files > FileName List Generated? | `<objet>: FileName List Generated?` |  |  | — |  |
| 9 | -90 | File Queue > File Added To Queue? | `<objet>: File Added To Queue?` |  |  | — |  |
| 10 | -91 | File Queue > Folder Added To Queue? | `<objet>: Folder Added To Queue?` |  |  | — |  |
| 11 | -92 | File Queue > Queue Cleared? | `<objet>: Queue Cleared?` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Error | `LastError$(` |  | → chaîne | — |  |
| 1 | 81 | Get Current Password | `GetCurrentPassword$(` |  | → chaîne | — |  |
| 2 | 82 | File Info > Last File Queued | `LastFileQueued$(` |  | → chaîne | — |  |
| 3 | 83 | File Info > Last Folder Queued | `LastQueuedFolder$(` |  | → chaîne | — |  |
| 4 | 84 | File Info > Last File Added | `LastFileAdded$(` |  | → chaîne | — |  |
| 5 | 85 | File Info > Last Folder Added | `LastFolderAdded$(` |  | → chaîne | — |  |
| 6 | 86 | File Info > Last File Removed | `LastFileRemoved$(` |  | → chaîne | — |  |
| 7 | 87 | File Info > Last File Extracted | `LastFileExtracted$(` |  | → chaîne | — |  |
| 8 | 88 | File Info > Last File Deleted | `LastFileDeleted$(` |  | → chaîne | — |  |
| 9 | 89 | FileName From Index | `FileNameFromIndex$(` |  | chaîne « Archive FilePath » ; nombre « Index » → chaîne | — |  |
| 10 | 90 | Get Archive Size | `GetArchiveSize(` |  | chaîne « Archive FilePath » | — |  |
| 11 | 91 | File Queue > Number Of Files In Queue | `NumberOfFilesInQueue(` |  |  | — |  |
| 12 | 92 | File Queue > Number Of Folders In Queue | `NumberOfFoldersInQueue(` |  |  | — |  |
| 13 | 93 | File Queue > Number Of Files In Archive | `NumberOfFilesInArchive(` |  | chaîne « Archive FilePath » | — |  |
