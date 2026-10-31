# Extension niffzip

- Fichier : `niffzip.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compression complete | `<objet> : Compression complete` |  |  | — |  |
| 1 | -82 | Compression failed | `<objet> : Compression failed` |  |  | — |  |
| 2 | -83 | Extraction complete | `<objet> : Extraction complete` |  |  | — |  |
| 3 | -84 | Extraction failed | `<objet> : Extraction failed` |  |  | — |  |
| 4 | -85 | Deletion complete | `<objet> : Deletion complete` |  |  | — |  |
| 5 | -86 | Deletion failed | `<objet> : Deletion failed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Compress directory | `Compress <p0> to <p1> (keep directory name: <p2>)` |  | expression chaîne « Directory to compress » ; expression chaîne « Archive to compress to » ; expression numérique « Keep directory name in zip (1 = yes, 0 = no) » | — |  |
| 1 | 81 | Extract file | `Extract <p0> to <p1>` |  | expression chaîne « Archive path » ; expression chaîne « Destination path » | — |  |
| 2 | 82 | Delete directory | `Delete directory <p0>` |  | expression chaîne « Directory to delete » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current progress % | `progress(` |  |  | — |  |
| 1 | 81 | Name of archive | `archive$(` |  | → chaîne | — |  |
| 2 | 82 | Get last error | `error$(` |  | → chaîne | — |  |
