# Extension globalfunction

- Fichier : `globalfunction.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<objet> : On Function <p0>` |  | expression chaîne « Function name » | — |  |
| 1 | -82 | A function is waiting | `<objet> : A function is waiting` |  |  | — |  |
| 2 | -83 | Arguments > Argument is a number | `<objet> : Argument <p0> is a number` |  | expression numérique « Argument number (1-based) » | — |  |
| 3 | -84 | Arguments > Argument is a string | `<objet> : Argument <p0> is a string` |  | expression numérique « Argument number (1-based) » | — |  |
| 4 | -85 | Arguments > Argument is binary data | `<objet> : Argument <p0> is binary data` |  | expression numérique « Argument number (1-based) » | — |  |
| 5 | -86 | Another app is visible | `<objet> : An app is visilble using name <p0>` |  | expression chaîne « Visible name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Send function > Add number argument | `<objet> : Add number argument <p0>` |  | expression numérique « Number parameter » | — |  |
| 1 | 81 | Send function > Add string argument | `<objet> : Add string argument <p0>` |  | expression chaîne « String parameter » | — |  |
| 2 | 82 | Send function > Add binary argument | `<objet> : Add binary argument of size <p0> from address <p1>` |  | expression numérique « Size of binary in bytes » ; expression numérique « Memory address of binary » | — |  |
| 3 | 83 | Send function > Send function within app | `<objet> : Send function <p0> within app to target <p1>` |  | expression chaîne « Function name » ; expression chaîne « Target name » | — |  |
| 4 | 84 | Send function > Send function to another app | `<objet> : Send function <p0> to target <p1> in app <p2>` |  | expression chaîne « Function name » ; expression chaîne « Target name » ; expression chaîne « Target application's visible name » | — |  |
| 5 | 85 | Visibility to other apps > Make app visible to other apps | `<objet> : Make app visible using name <p0>` |  | expression chaîne « Visible name » | — |  |
| 6 | 86 | Visibility to other apps > Remove visibility to other apps | `<objet> : Remove visibility` |  |  | — |  |
| 7 | 87 | Visibility to other apps > Disallow making this app visible | `<objet> : Disallow making this app visible` |  |  | — |  |
| 8 | 88 | Function checking > Auto check for new functions | `<objet> : Auto check for new functions` |  |  | — |  |
| 9 | 89 | Function checking > Turn off Auto checking for new functions | `<objet> : Turn off Auto checking for new functions` |  |  | — |  |
| 10 | 90 | Function checking > Check for new functions | `<objet> : Check for new functions` |  |  | — |  |
| 11 | 91 | On function > End function | `<objet> : End function` |  |  | — |  |
| 12 | 92 | On function > Dump binary data argument to memory | `<objet> : Dump data argument at <p0> of size <p1> bytes to address <p2>` |  | expression numérique « Argument number (1-based) » ; expression numérique « Size of memory buffer » ; expression numérique « Memory address of buffer to dump data to » | — |  |
| 13 | 93 | Save Files > Save functions to file | `<objet> : Save functions to <p0>` |  | nom de fichier « File path » | — |  |
| 14 | 94 | Save Files > Load and add functions from file | `<objet> : Load functions from <p0>` |  | nom de fichier « File path » | — |  |
| 15 | 95 | Change name | `<objet> : Change name to <p0>` |  | expression chaîne « Give new name for GFO » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | On Function > Number of arguments | `numArguments(` |  |  | — |  |
| 1 | 81 | On Function > Get number argument | `getNumArgument(` |  | nombre | — |  |
| 2 | 82 | On Function > Get string argument | `getStrArgument$(` |  | nombre → chaîne | — |  |
| 3 | 83 | On Function > Get size of binary data argument | `SizeDataArgument$(` |  | nombre | — |  |
| 4 | 84 | Get unique process ID | `ProcessID(` |  |  | — |  |
