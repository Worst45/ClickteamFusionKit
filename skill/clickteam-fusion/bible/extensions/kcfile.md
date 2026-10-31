# Extension kcfile

- File: `kcfile.mfx` — installed with Fusion
- Name(s) shown in projects: “File”, “Fichier”
- Usage in the corpus: 158 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Last action OK | `<object>: Last action OK` | <object>: Dernière action OK |  | 6 (2 proj.) | `File: Event ID -81, 0 Parameters` |
| 1 | -82 | Name exists | `<object>: <p0> exists` | <object>: <p0> existe | (unreliable parameters) | 14 (2 proj.) | `File: Event ID -82, 1 Parameters { Expression ID 80("Download Path") }` |
| 2 | -83 | File is readable | `<object>: <p0> is readable` | <object>: <p0> peut être lu | (unreliable parameters) | — |  |
| 3 | -84 | File is writeable | `<object>: <p0> is writable` | <object>: <p0> peut être écrit | (unreliable parameters) | — |  |
| 4 | -85 | Name is a file | `<object>: <p0> is a file` | <object>: <p0> est un fichier | (unreliable parameters) | — |  |
| 5 | -86 | Name is a directory | `<object>: <p0> is a directory` | <object>: <p0> est un répertoire | (unreliable parameters) | 2 (1 proj.) |  |
| 6 | -87 | File Selector > On OK | `<object>: On OK` | <object>: Bouton OK appuyé |  | — |  |
| 7 | -88 | File Selector > On Cancel | `<object>: On Cancel` | <object>: Bouton Annuler appuyé |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Directory Actions > Change the current directory | `Current directory <p0>` | Répertoire courant <p0> | (unreliable parameters) | 1 (1 proj.) | `File : Event ID 80, 1 Parameters { Apppath$ }` |
| 1 | 81 | Directory Actions > Set directory to original | `Set directory to original` | Fixer le répertoire à l'original |  | — |  |
| 2 | 82 | Directory Actions > Create a directory | `Create the directory <p0>` | Créer le répertoire <p0> | (unreliable parameters) | 3 (2 proj.) | `File : Event ID 82, 1 Parameters { Expression ID 80("Download Path") }` |
| 3 | 83 | Directory Actions > Delete a directory | `Delete the directory <p0>` | Détruire le répertoire <p0> | (unreliable parameters) | — |  |
| 4 | 84 | File Actions > Create a file | `Create the file <p0>` | Créer le fichier <p0> | (unreliable parameters) | — |  |
| 5 | 85 | File Actions > Delete a file | `Delete the file <p0>` | Détruire le fichier <p0> | (unreliable parameters) | 30 (1 proj.) |  |
| 6 | 86 | Directory Actions > Rename a directory | `Rename <p0> as <p1>` | renommer <p0> en <p1> | (unreliable parameters) | — |  |
| 7 | 87 | File Actions > Append a file to a file | `Append <p0> to <p1>` | Ajouter <p0> à <p1> | (unreliable parameters) | — |  |
| 8 | 88 | File Actions > Copy a file | `Copy <p0> to <p1>` | Copier <p0> à <p1> | (unreliable parameters) | — |  |
| 9 | 89 | File Actions > Move a file | `Move <p0> to <p1>` | Bouger <p0> vers <p1> | (unreliable parameters) | — |  |
| 10 | 90 | File Actions > Append text to a file | `Append <p0> to <p1>` | Ajouter <p0> à <p1> | (unreliable parameters) | — |  |
| 11 | 91 | Clear the last error | `Clear last error` | Effacer la dernière erreur |  | 35 (2 proj.) | `File : Event ID 91, 0 Parameters` |
| 12 | 92 | File Actions > Run application | `<object>: Run application <p0> <p1>` | <object>: Lancer application <p0> <p1> | (unreliable parameters) | 5 (2 proj.) | `File : Event ID 92, 2 Parameters { Appdrive$ + Appdir$ + "receive.exe", "" }` |
| 13 | 93 | File Selector > Set title | `Set file selector title to <p0>` | Fixer le titre du sélecteur de fichier à <p0> | (unreliable parameters) | — |  |
| 14 | 94 | File Selector > Set style | `Set file selector style to <p0>` | Fixer le style du sélecteur de fichier à <p0> | (unreliable parameters) | 2 (1 proj.) | `File : Event ID 94, 1 Parameters { Expression ID 98("File") }` |
| 16 | 96 | File Selector > Set extension filter | `Set file selector filters to <p0>, and use number <p1>` | Fixer les filtres du sélecteur à <p0>, et utiliser le numéro <p1> | (unreliable parameters) | 8 (3 proj.) | `File : Event ID 96, 2 Parameters { "List File¦*.lst", 0 }` |
| 17 | 97 | File Selector > Set default extension | `Set file selector default extension to <p0>` | Fixer l'extension par défaut du sélecteur à <p0> | (unreliable parameters) | 2 (1 proj.) | `File : Event ID 97, 1 Parameters { ".rtf" }` |
| 18 | 98 | File Selector > Open load selector | `Open load file selector on <p0>` | Ouvrir le sélecteur de chargement sur <p0> | (unreliable parameters) | 7 (4 proj.) | `File : Event ID 98, 1 Parameters { Appdrive$ + Appdir$ + "*.lst" }` |
| 19 | 99 | File Selector > Open save selector | `Open save file selector on <p0>` | Ouvrir le sélecteur d'enregistrement sur <p0> | (unreliable parameters) | 7 (3 proj.) | `File : Event ID 99, 1 Parameters { "" }` |
| 20 | 100 | File Selector > Set Selection Mode > Single | `Set single-selection mode` | Mode simple sélection |  | 3 (1 proj.) | `File : Event ID 100, 0 Parameters` |
| 21 | 101 | File Selector > Set Selection Mode > Multiple | `Set multiple-selection mode` | Mode multiple sélections |  | — |  |
| 22 | 102 | File Selector > Open directory selector | `Open directory selector on <p0>` | Ouvrir le sélecteur de répertoire sur <p0> | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File Attributes > Size of a file | `Sizeof(` | Taille d'un fichier | (unreliable parameters) | — |  |
| 1 | 81 | File Attributes > Creation date | `CreationDate$(` | Date de création | (unreliable parameters) | — |  |
| 2 | 82 | File Attributes > Modification date | `ChangeDate$(` | Date de modification | (unreliable parameters) | — |  |
| 3 | 83 | File Attributes > Last access date | `AccessDate$(` | Date de dernier accès | (unreliable parameters) | — |  |
| 4 | 84 | Names > Drive name | `DriveName$(` | Nom de lecteur | (unreliable parameters) | — |  |
| 5 | 85 | Names > Directory name | `DirectoryName$(` | Nom de répertoire | (unreliable parameters) | — |  |
| 6 | 86 | Names > File title | `FileName$(` | Titre du fichier | (unreliable parameters) | 4 (1 proj.) | `Expression ID 86("File")` |
| 7 | 87 | Names > Extension name | `ExtensionName$(` | Nom de l'extension | (unreliable parameters) | 8 (1 proj.) | `Expression ID 87("File")` |
| 8 | 88 | Names > Total pathway of a file | `TotalName$(` | Cheminement complet vers un fichier | (unreliable parameters) | — |  |
| 9 | 89 | Directories > Current directory | `CurrentDirectory$(` | Répertoire courant |  | — |  |
| 10 | 90 | File Version > Most significant number | `VersionMS(` | Nombre le plus significatif | (unreliable parameters) | — |  |
| 11 | 91 | File Version > Less significant number | `VersionLS(` | Nombre le moins significatif | (unreliable parameters) | — |  |
| 12 | 92 | Last error code | `LastError(` | Dernier code d'erreur |  | — |  |
| 13 | 93 | Names > Temporary filename | `TempFileName$(` | Nom de fichier temporaire | (unreliable parameters) | — |  |
| 14 | 94 | Directories > Windows directory | `WindowsDirectory$(` | Répertoire Windows |  | 1 (1 proj.) | `Expression ID 94("File")` |
| 15 | 95 | File selector > Get result pathname | `FileSelReturn$(` | Cheminement resultant |  | 18 (4 proj.) | `Expression ID 95("File")` |
| 16 | 96 | File selector > Allow create file prompt | `AllowCreatePrompt(` | Autorise la demande "créer fichier" |  | — |  |
| 17 | 97 | File selector > Allow non existant file | `AllowBadFile(` | Autorise les fichiers non-existants |  | — |  |
| 18 | 98 | File selector > Allow directory change | `AllowChangeDir(` | Autorise le changement de répertoire |  | 2 (1 proj.) | `Expression ID 98("File")` |
| 20 | 100 | File selector > No overwrite prompt | `NoOverwritePrompt(` | Pas de boîte "écraser" |  | — |  |
| 21 | 101 | File selector > Allow non existant path | `AllowBadPath(` | Autorise les chemins non-existants |  | — |  |
| 22 | 102 | File selector > Get selected filter | `GetDefaultFilter(` | Filtre par défaut |  | — |  |
| 23 | 103 | File selector > Multi-selection > Get number of pathnames | `NumSelFiles(` | Nombre de cheminements |  | — |  |
| 24 | 104 | File selector > Multi-selection > Get pathname at... | `FileSelReturnAt$(` | Retrouve le cheminement numéro... | (unreliable parameters) | — |  |
| 25 | 105 | Directories > Get CDROM Directory From Label | `CDDriveFromLabel$(` | Retrouve le répertoire du CD-ROM | (unreliable parameters) | — |  |
| 26 | 106 | Directories > System directory | `SystemDirectory$(` | Répertoire système |  | — |  |
| 27 | 107 | Directories > My Documents directory | `MyDocsDirectory$(` | Répertoire Mes Documents |  | — |  |
| 28 | 108 | Directories > Application Data directory | `AppDataDirectory$(` | Répertoire Application Data |  | — |  |
| 29 | 109 | Directories > User directory | `UserDirectory$(` | Répertoire Utilisateur Courant |  | — |  |
| 30 | 110 | Directories > All Users directory | `AllUsersDirectory$(` | Répertoire All Users |  | — |  |
| 31 | 111 | Directories > All Users Documents Directory | `AllUsersDocumentsDirectory$(` | Répertoire Documents Tous Utilisateurs |  | — |  |
| 32 | 112 | Directories > All Users Application Data Directory | `AllUsersAppDataDirectory$(` | Répertoire Application Data Tous Utilisateurs |  | — |  |
