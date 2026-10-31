# Extension FunctionEggtimer

- Fichier : `FunctionEggtimer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On function | `<objet> On function <p0>` |  | expression chaîne « Function name » | — |  |
| 1 | -82 | On any function | `<objet> On any function` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Queue function | `Call <p0> after <p1> event loops` |  | expression chaîne « Enter function name » ; expression numérique « Event loops » | — |  |
| 1 | 81 | Remove function from queue by name | `Cancel function <p0>` |  | expression chaîne « Function to cancel » | — |  |
| 2 | 82 | Change settings for last queued function > Repeat function X times | `Repeat function <p0> times` |  | expression numérique « Enter amount of times for the function to repeat (-1 to repeat forever) » | — |  |
| 3 | 83 | Change settings for last queued function > Set private data value | `Set private data to = <p0>` |  | expression numérique « Enter a value » | — |  |
| 4 | 84 | Change settings for last queued function > Continuous trigger untill canceled | `Continuous trigger until canceled` |  |  | — |  |
| 5 | 85 | Stop current function | `Cancel current function` |  |  | — |  |
| 6 | 86 | Call immediate function | `Call <p0> immedeatly with optional repeat delay of <p1>` |  | expression chaîne « Enter function name » ; expression numérique « Enter delay (just leave 0 if you don't plan to use the 'repeat' action for this function) » | — |  |
| 7 | 87 | Clear function queue | `Clear function queue` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of functions in queue | `QueueSize(` |  |  | — |  |
| 1 | 81 | Current function > Get function name | `LastFunction$(` |  | → chaîne | — |  |
| 2 | 82 | Current function > Get private data | `PrivateData(` |  |  | — |  |
| 3 | 83 | Current function > Get number of repeats left | `RemainingRepeats(` |  |  | — |  |
