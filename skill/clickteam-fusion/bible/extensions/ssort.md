# Extension ssort

- Fichier : `ssort.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Array has been sorted | `<objet>: Array has been sorted` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change values > Set string | `Set <p0> to <p1>` |  | expression numérique « Remember the base » ; expression chaîne « Set string » | — |  |
| 1 | 81 | Change array > Sort array increasing order(CS) | `Sort array increasing from <p0> to <p1>(CS)` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |
| 2 | 82 | Change array > Resize array | `Resize array to <p0>` |  | expression numérique « Resize to... » | — |  |
| 3 | 83 | Change values > Clear arrays | `Clear arrays` |  |  | — |  |
| 4 | 84 | Change values > Add string | `Add to <p0> with <p1>` |  | expression numérique « Remember the base » ; expression chaîne « Add string » | — |  |
| 5 | 85 | Change array > Sort array decreasing order(CS) | `Sort array decreasing from <p0> to <p1>(CS)` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |
| 6 | 86 | Change array > Expand array | `Expand array to <p0>` |  | expression numérique « Resize to... » | — |  |
| 7 | 87 | Change values > Set string in range | `Set position <p0> - <p1> to <p2>` |  | expression numérique « Resize to... » ; expression numérique « Set string in range » ; expression chaîne « Set string in range » | — |  |
| 8 | 88 | Autosort > Autosort increasing on | `Set autosort increasing on` |  |  | — |  |
| 9 | 89 | Autosort > Autosort increasing off | `Set autosort increasing off` |  |  | — |  |
| 10 | 90 | Autosort > Autosort decreasing on | `Set autosort decreasing on` |  |  | — |  |
| 11 | 91 | Autosort > Autosort decreasing off | `Set autosort decreasing off` |  |  | — |  |
| 12 | 92 | Change array > Sort array increasing order(NCS) | `Sort array increasing from <p0> to <p1>(NCS)` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |
| 13 | 93 | Change array > Sort array decreasing order(NCS) | `Sort array decreasing from <p0> to <p1>(NCS)` |  | expression numérique « From... (Remember the base) » ; expression numérique « To... » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value > Get string from unsorted array | `GetString$(` |  | nombre → chaîne | — |  |
| 1 | 81 | Get value > Get string from sorted array | `GetSort$(` |  | nombre → chaîne | — |  |
| 2 | 82 | Get value > Get value from address array | `GetAddress(` |  | nombre | — |  |
| 3 | 83 | Get arraysize | `ArraySize(` |  |  | — |  |
| 4 | 84 | Find value > Find string in unsorted array(CS) | `FindUnsortedCS(` |  | chaîne | — |  |
| 5 | 85 | Find value > Find string in sorted array(CS) | `FindSortedCS(` |  | chaîne | — |  |
| 6 | 86 | Find value > Find value in address array | `FindIndex(` |  | nombre | — |  |
| 7 | 87 | Number of sorted items | `NoItems(` |  |  | — |  |
| 8 | 88 | Get base | `GetBase(` |  |  | — |  |
| 9 | 89 | Find value > Find string in unsorted array(NCS) | `FindUnsortedNCS(` |  | chaîne | — |  |
| 10 | 90 | Find value > Find string in sorted array(NCS) | `FindSortedNCS(` |  | chaîne | — |  |
