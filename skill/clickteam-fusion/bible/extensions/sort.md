# Extension sort

- Fichier : `sort.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to unsorted array | `<objet>: Value number <p0> <p1>` |  | expression numérique « Remember the base » ; comparaison numérique « Compare to unsorted array » | — |  |
| 1 | -82 | Compare to sorted array | `<objet>: Sorted value number <p0> <p1>` |  | expression numérique « Remember the base » ; comparaison numérique « Compare to sorted array » | — |  |
| 2 | -83 | Compare to sorted address array | `<objet>: Address value number <p0> <p1>` |  | expression numérique « Remember the base » ; comparaison numérique « Compare to sorted address array » | — |  |
| 3 | -84 | Array has been sorted | `<objet>: Array has been sorted` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change values > Set value | `Set <p0> to <p1>` |  | expression numérique « Remember the base » ; expression numérique « Set value » | — |  |
| 1 | 81 | Change array > Sort array increasing order | `Sort array increasing from <p0> to <p1>` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |
| 2 | 82 | Change array > Resize array | `Resize array to <p0>` |  | expression numérique « Resize to... » | — |  |
| 3 | 83 | Change values > Clear arrays | `Clear arrays` |  |  | — |  |
| 4 | 84 | Change values > Add value | `Add to <p0> with <p1>` |  | expression numérique « Remember the base » ; expression numérique « Add value » | — |  |
| 5 | 85 | Change values > Sub value | `Sub from <p0> with <p1>` |  | expression numérique « Remember the base » ; expression numérique « Sub value » | — |  |
| 6 | 86 | Change array > Sort array decreasing order | `Sort array decreasing from <p0> to <p1>` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |
| 7 | 87 | Change array > Expand array | `Expand array to <p0>` |  | expression numérique « Resize to... » | — |  |
| 8 | 88 | Change values > Set value in range | `Set position <p0> - <p1> to <p2>` |  | expression numérique « Resize to... » ; expression numérique « Set value in range » ; expression numérique « Set value in range » | — |  |
| 9 | 89 | Autosort > Autosort increasing on | `Set autosort increasing on` |  |  | — |  |
| 10 | 90 | Autosort > Autosort increasing off | `Set autosort increasing off` |  |  | — |  |
| 11 | 91 | Autosort > Autosort decreasing on | `Set autosort decreasing on` |  |  | — |  |
| 12 | 92 | Autosort > Autosort decreasing off | `Set autosort decreasing off` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value > Get value from unsorted array | `GetValue(` |  | nombre | — |  |
| 1 | 81 | Get value > Get value from sorted array | `GetSort(` |  | nombre | — |  |
| 2 | 82 | Get value > Get value from address array | `GetAddress(` |  | nombre | — |  |
| 3 | 83 | Get arraysize | `ArraySize(` |  |  | — |  |
| 4 | 84 | Find value > Find value in unsorted array | `FindUnsorted(` |  | nombre | — |  |
| 5 | 85 | Find value > Find value in sorted array | `FindSorted(` |  | nombre | — |  |
| 6 | 86 | Find value > Find value in address array | `FindIndex(` |  | nombre | — |  |
| 7 | 87 | Number of sorted items | `NoItems(` |  |  | — |  |
| 8 | 88 | Get base | `GetBase(` |  |  | — |  |
