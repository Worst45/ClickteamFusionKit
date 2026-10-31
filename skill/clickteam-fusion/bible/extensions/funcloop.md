# Extension funcloop

- Fichier : `funcloop.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<objet> : On function <p0>` |  | expression chaîne « Function name » | — |  |
| 1 | -82 | On loop | `<objet> : On loop <p0>` |  | expression chaîne « Loop name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Call function | `<objet> :  Call <p0> ( )` |  | expression chaîne « Function name » | — |  |
| 1 | 81 | Call function ( Int ) | `<objet> :  Call <p0> ( <p1> )` |  | expression chaîne « Function name » ; expression numérique « Int argument » | — |  |
| 2 | 82 | Call function ( Int, Int ) | `<objet> :  Call <p0> ( <p1>, <p2> )` |  | expression chaîne « Function name » ; expression numérique « Int argument » ; expression numérique « Int argument » | — |  |
| 3 | 83 | Call function ( String ) | `<objet> :  Call <p0> ( <p1> )` |  | expression chaîne « Function name » ; expression chaîne « String argument » | — |  |
| 4 | 84 | Call function ( String, String ) | `<objet> :  Call <p0> ( <p1>, <p2> )` |  | expression chaîne « Function name » ; expression chaîne « String argument » ; expression chaîne « String argument » | — |  |
| 5 | 85 | Call function ( Int, String ) | `<objet> :  Call <p0> ( <p1>, <p2> )` |  | expression chaîne « Function name » ; expression numérique « Int argument » ; expression chaîne « String argument » | — |  |
| 6 | 86 | Function Arugments > Add int argument | `<objet> :  Add int argument <p0>` |  | expression numérique « Int argument » | — |  |
| 7 | 87 | Function Arugments > Add float argument | `<objet> :  Add float argument <p0>` |  | expression numérique « Float argument » | — |  |
| 8 | 88 | Function Arugments > Add string argument | `<objet> :  Add string argument <p0>` |  | expression chaîne « String argument » | — |  |
| 9 | 89 | Return > Return | `<objet>: Return` |  |  | — |  |
| 10 | 90 | Return > Return an int | `<objet>: Return <p0>` |  | expression numérique « Int to return » | — |  |
| 11 | 91 | Return > Return a float | `<objet>: Return <p0>` |  | expression numérique « Float to return » | — |  |
| 12 | 92 | Return > Return a string | `<objet>: Return <p0>` |  | expression chaîne « String to return » | — |  |
| 13 | 93 | Start a loop | `<objet> : Start loop <p0> and run <p1> times` |  | expression chaîne « Loop name » ; expression numérique « Number of loops » | — |  |
| 14 | 94 | Stop curent loop | `<objet> : Stop loop` |  |  | — |  |
| 15 | 95 | Set loop index | `<objet>: Set loop index to <p0>` |  | expression numérique « Index to set » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get loop index of a loop | `indexOf(` |  | chaîne | — |  |
| 1 | 81 | Get current loop index | `index(` |  |  | — |  |
| 2 | 82 | Get int argument A | `intArgA(` |  |  | — |  |
| 3 | 83 | Get int argument B | `intArgB(` |  |  | — |  |
| 4 | 84 | Get string argument A | `strArgA(` |  | → chaîne | — |  |
| 5 | 85 | Get string argument B | `strArgB(` |  | → chaîne | — |  |
| 6 | 86 | Get value argument at | `valArgAt(` |  | nombre | — |  |
| 7 | 87 | Get string argument at | `stringArgAt(` |  | nombre → chaîne | — |  |
| 8 | 88 | Get return value | `retValue(` |  |  | — |  |
| 9 | 89 | Get return string | `retString(` |  | → chaîne | — |  |
