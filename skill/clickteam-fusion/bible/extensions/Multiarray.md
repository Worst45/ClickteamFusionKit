# Extension Multiarray

- Fichier : `Multiarray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Iteration | `<objet> On Iteration (<p0>)` |  | expression chaîne « Iteration ID » | — |  |
| 1 | -82 | On ID Iteration | `<objet> On ID Iteration` |  |  | — |  |
| 2 | -83 | Array Exists | `<objet> Array (<p0>) Exists` |  | expression chaîne « Array Name » | — |  |
| 3 | -84 | On Error | `<objet> On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Arrays > Create Array | `Create Array (<p0>)` |  | expression chaîne « Array Name » | — |  |
| 1 | 81 | Arrays > Remove Array | `Remove Array (<p0>)` |  | expression chaîne « Array Name » | — |  |
| 2 | 82 | Arrays > Iterate Array | `Iterate Array (<p0>) with id (<p1>)` |  | expression chaîne « Array Name » ; expression chaîne « Iteration ID » | — |  |
| 3 | 83 | Arrays > Clear | `Clear` |  |  | — |  |
| 4 | 84 | Modify > Insert Value | `Insert Value (<p0>) at (<p1>) to array (<p2>)` |  | expression numérique « Value » ; expression numérique « Array Index (-1 for end) » ; expression chaîne « Array Name » | — |  |
| 5 | 85 | Modify > Set Value | `Set Value (<p0>) at (<p1>) in Array (<p2>)` |  | expression numérique « Value » ; expression numérique « Array Index » ; expression chaîne « Array Name » | — |  |
| 6 | 86 | Modify > Insert String | `Insert String (<p0>) at (<p1>) to array (<p2>)` |  | expression chaîne « String » ; expression numérique « Array Index (-1 for end) » ; expression chaîne « Array Name » | — |  |
| 7 | 87 | Modify > Set String | `Set String (<p0>) at (<p1>) in Array (<p2>)` |  | expression chaîne « String » ; expression numérique « Array Index » ; expression chaîne « Array Name » | — |  |
| 8 | 88 | Modify > Remove Element | `Remove Element (<p0>) from Array (<p1>)` |  | expression numérique « Array Index » ; expression chaîne « Array Name » | — |  |
| 9 | 89 | Files > Save Arrays | `Save Arrays to (<p0>)` |  | nom de fichier « Filename » | — |  |
| 10 | 90 | Files > Load Arrays | `Load Arrays from (<p0>)` |  | nom de fichier « Filename » | — |  |
| 11 | 91 | Arrays > Iterate Array ID's | `Iterate Array ID's` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Array > Get Value | `GetValue(` |  | chaîne « Array Name » ; nombre « Array Index » | — |  |
| 1 | 81 | Array > Get String | `GetString$(` |  | chaîne « Array Name » ; nombre « Array Index » → chaîne | — |  |
| 2 | 82 | Array > Get Number of Elements | `GetNumElements(` |  | chaîne « Array Name » | — |  |
| 3 | 83 | On Iteration > Get Current Index | `GetCurIndex(` |  |  | — |  |
| 4 | 84 | On Iteration > Get Current Value | `GetCurValue(` |  |  | — |  |
| 5 | 85 | On Iteration > Get Current String | `GetCurString$(` |  | → chaîne | — |  |
| 6 | 86 | On Iteration > Get Current Array | `GetCurArray$(` |  | → chaîne | — |  |
| 7 | 87 | On ID Iteration > Get Current Array | `GetCurID$(` |  | → chaîne | — |  |
| 8 | 88 | On Error > Get Error String | `GetError$(` |  | → chaîne | — |  |
