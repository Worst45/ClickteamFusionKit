# Extension flag

- Fichier : `flag.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to a flag | `<objet>: Compare flag <p0> with <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (0 or 1) » | — |  |
| 1 | -82 | AND flags | `<objet>: AND flags <p0> to <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « AND flags » | — |  |
| 2 | -83 | OR flags | `<objet>: OR flags <p0> to <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « OR flags » | — |  |
| 3 | -84 | Count flags | `<objet>: Number of true flags from <p0> to <p1><p2><p3>` |  | expression numérique « (Zero-based) » ; expression numérique « Count flags » ; expression chaîne « Enter a comparison expression (=, <>, <, >, <=, >=) » ; expression numérique « Count flags » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set a flag | `Set flag <p0> to <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « (0 or 1) » | — |  |
| 1 | 81 | Toggle a flag | `Toggle flag <p0>` |  | expression numérique « (Zero-based) » | — |  |
| 2 | 82 | Set all flags | `Set all flags to <p0>` |  | expression numérique « (0 or 1) » | — |  |
| 3 | 83 | Toggle all flags | `Toggle all flags` |  |  | — |  |
| 4 | 84 | Set flags in a interval | `Set flag in interval <p0> - <p1> to <p2>` |  | expression numérique « (Zero-based) » ; expression numérique « Set flags in a interval » ; expression numérique « (0 or 1) » | — |  |
| 5 | 85 | Toggle flags in a interval | `Toggle flags in interval <p0> - <p1>` |  | expression numérique « (Zero-based) » ; expression numérique « Toggle flags in a interval » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get a flag | `GetFlag(` |  | nombre | — |  |
| 1 | 81 | AND flags | `ANDFlags(` |  | nombre ; nombre | — |  |
| 2 | 82 | OR flags | `ORFlags(` |  | nombre ; nombre | — |  |
| 3 | 83 | Total number of flags | `NumberOfFlags(` |  |  | — |  |
| 4 | 84 | Number of true flags in interval | `NumberOfTrueFlags(` |  | nombre ; nombre | — |  |
