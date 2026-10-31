# Extension DirectoryPacker

- Fichier : `DirectoryPacker.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | An error occured | `<objet> : Error occured` |  |  | — |  |
| 1 | -82 | Packing finished | `<objet> : Packing finished` |  |  | — |  |
| 2 | -83 | Unpacking finished | `<objet> : Unpacking finished` |  |  | — |  |
| 3 | -84 | Packing failed | `<objet> : Packing failed` |  |  | — |  |
| 4 | -85 | Unpacking failed | `<objet> : Unpacking failed` |  |  | — |  |
| 5 | -86 | File is allowed | `<objet> : File <p0> allowed` |  | expression chaîne « Filename » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Pack directory | `Pack directory <p0> to <p1>` |  | expression chaîne « Directory » ; expression chaîne « Destination filename » | — |  |
| 1 | 81 | Unpack file | `Unpack <p0> to <p1> (stop if folder exists = <p2>)` |  | nom de fichier « Packed file » ; expression chaîne « Destination directory » ; expression numérique « Stop if folder exists? (0 = no, 1 = yes) » | — |  |
| 2 | 82 | Delete directory | `Delete directory <p0>` |  | expression chaîne « Directory to delete » | — |  |
| 3 | 83 | Enable extension filter | `Enable extension filter (only allow list = <p0>)` |  | expression numérique « 0 = block list, 1 = only allow list » | — |  |
| 4 | 84 | Disable extension filter | `Disable extension filter` |  |  | — |  |
| 5 | 85 | Add extension to filter list | `Add extension <p0> to filter list` |  | expression chaîne « Extension to add » | — |  |
| 6 | 86 | Remove extension from filter list | `Remove extension <p0> from filter list` |  | expression chaîne « Extension to remove » | — |  |
| 7 | 87 | Pack directory (this thread) | `Pack directory <p0> to <p1> in this thread` |  | expression chaîne « Directory » ; expression chaîne « Destination filename » | — |  |
| 8 | 88 | Unpack file (this thread) | `Unpack <p0> to <p1> in this thread (stop if folder exists = <p2>)` |  | nom de fichier « Packed file » ; expression chaîne « Destination directory » ; expression numérique « Stop if folder exists? (0 = no, 1 = yes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current process | `process$(` |  | → chaîne | — |  |
| 1 | 81 | Get current progress % | `progress(` |  |  | — |  |
| 2 | 82 | Get last error | `error$(` |  | → chaîne | — |  |
| 3 | 83 | Get last windows error | `werr$(` |  | → chaîne | — |  |
