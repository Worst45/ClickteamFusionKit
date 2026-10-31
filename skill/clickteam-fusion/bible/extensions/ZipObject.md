# Extension ZipObject

- Fichier : `ZipObject.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Zip Object »
- Usage dans le corpus : 44 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Zip Open? | `<objet> Is Zip Open` |  |  | — |  |
| 1 | -82 | Is Slot A File? | `<objet> Is Slot: <p0> a file?` |  | expression numérique « Slot Number » | — |  |
| 2 | -83 | Threads Enabled? | `<objet> Are Threads Enabled?` |  |  | — |  |
| 3 | -84 | ZIP > File Added | `<objet> File Added Sucessfully` |  |  | — |  |
| 4 | -85 | ZIP > Folder Added | `<objet> Folder Added Sucessfully` |  |  | — |  |
| 6 | -87 | UnZIP > File Unzipped | `<objet> File Unzipped Sucessfully` |  |  | — |  |
| 7 | -88 | Errors > Error: Password Needed | `<objet> Error: Needs Password` |  |  | — |  |
| 8 | -89 | Errors > Error: Corrupt Archive | `<objet> Error: Corrupt Archive` |  |  | — |  |
| 9 | -90 | Errors > Error: File Doesn't Exist | `<objet> Error: File Doesn't Exist` |  |  | — |  |
| 11 | -92 | UnZIP > On Archive Progress | `<objet> On Unzip Progress` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open Zip | `Open Zip: <p0>` |  | expression chaîne « Zip Path » | 14 (1 proj.) |  |
| 1 | 81 | Set Password | `Set Password: <p0>` |  | expression chaîne « Password » | — |  |
| 2 | 82 | ZIP > Add File | `Add File: <p0>` |  | expression chaîne « File Path » | 4 (1 proj.) |  |
| 3 | 83 | ZIP > Add File As | `Add File: <p0> As: <p0>` |  | expression chaîne « File Path » ; expression chaîne « Destination Name/Path » | — |  |
| 4 | 84 | ZIP > Add File From String | `Add File From String: <p0> As: <p0>` |  | expression chaîne « String » ; expression chaîne « Destination Name/Path » | — |  |
| 5 | 85 | ZIP > Add Folder | `Add Folder: <p0>` |  | expression chaîne « Folder Path » | — |  |
| 7 | 87 | UnZIP > Unzip File | `Unzip File: <p0> To: <p1>` |  | expression numérique « File Slot » ; expression chaîne « Destination Path » | — |  |
| 8 | 88 | UnZIP > Unzip Archive | `Unzip To: <p0>` |  | expression chaîne « Destination Path » | 12 (1 proj.) |  |
| 9 | 89 | Close Zip | `Close Zip` |  |  | 14 (1 proj.) |  |
| 10 | 90 | Threading > Disable Threads | `Disable Threads` |  |  | — |  |
| 11 | 91 | Threading > Enable Threads | `Enable Threads` |  |  | — |  |
| 12 | 92 | Show Error | `Show The Current Error` |  |  | — |  |
| 13 | 93 | CRC32 > Calculate File | `Generate CRC32 Checksum For: <p0>` |  | expression chaîne « File To Generate CRC32 For » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Open Zip Filename | `get Zip Filename$(` |  | → chaîne | — |  |
| 1 | 81 | Get Open Zip Size | `get Zip Size(` |  |  | — |  |
| 2 | 82 | Get Password | `get Password$(` |  | → chaîne | — |  |
| 3 | 83 | Get Number Of Files | `get Number Of Files(` |  |  | — |  |
| 4 | 84 | Files > Get Name At | `get Name At$(` |  | nombre → chaîne | — |  |
| 5 | 85 | Files > Get Compressed Size At | `get Compressed Size At(` |  | nombre | — |  |
| 6 | 86 | Files > Get Uncompressed Size At | `get Uncompressed Size At(` |  | nombre | — |  |
| 7 | 87 | Files > Get Access Time At | `get Access Time At$(` |  | nombre → chaîne | — |  |
| 8 | 88 | Files > Get Modified Time At | `get Modified Time At$(` |  | nombre → chaîne | — |  |
| 9 | 89 | Files > Get Created Time At | `get Created Time At$(` |  | nombre → chaîne | — |  |
| 10 | 90 | Get File As String | `get File At$(` |  | nombre → chaîne | — |  |
| 11 | 91 | Get Error | `get Error$(` |  | → chaîne | — |  |
| 12 | 92 | CRC32 > Calculate String | `get CRC String$(` |  | chaîne → chaîne | — |  |
| 13 | 93 | Files > Get CRC32 Value | `get CRC At$(` |  | nombre → chaîne | — |  |
| 14 | 94 | CRC32 > Get File CRC32 | `get Output CRC$(` |  | → chaîne | — |  |
| 15 | 95 | Find File By Name | `find File(` |  | chaîne | — |  |
| 16 | 96 | Progress > Get Unzip Position | `get Unzip Progress(` |  |  | — |  |
