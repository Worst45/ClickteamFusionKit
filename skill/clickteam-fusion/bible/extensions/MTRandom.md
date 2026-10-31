# Extension MTRandom

- Fichier : `MTRandom.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Seed > Set seed to system time | `Set seed to system time` |  |  | — |  |
| 1 | 81 | Seed > Set seed using one number | `Set seed to <p0>` |  | expression numérique « Enter a seed from -2147483648 to 2147483647 » | — |  |
| 2 | 82 | Seed > Set seed using 2 numbers | `Set seed to ( <p0>, <p1>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » | — |  |
| 3 | 83 | Seed > Set seed using 3 numbers | `Set seed to ( <p0>, <p1>, <p2>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » ; expression numérique « Enter 3rd seed » | — |  |
| 4 | 84 | Seed > Set seed using 4 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » ; expression numérique « Enter 3rd seed » ; expression numérique « Enter 4th seed » | — |  |
| 5 | 85 | Seed > Set seed using 6 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » ; expression numérique « Enter 3rd seed » ; expression numérique « Enter 4th seed » ; expression numérique « Enter 5th seed » ; expression numérique « Enter 6th seed » | — |  |
| 6 | 86 | Seed > Set seed using 8 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>, <p7>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » ; expression numérique « Enter 3rd seed » ; expression numérique « Enter 4th seed » ; expression numérique « Enter 5th seed » ; expression numérique « Enter 6th seed » ; expression numérique « Enter 7th seed » ; expression numérique « Enter 8th seed » | — |  |
| 7 | 87 | Seed > Set seed using 10 numbers | `Set seed to ( <p0>, <p1>, <p2>, <p3>, <p4>, <p5>, <p6>, <p7>, <p8>, <p9>)` |  | expression numérique « Enter 1st seed » ; expression numérique « Enter 2nd seed » ; expression numérique « Enter 3rd seed » ; expression numérique « Enter 4th seed » ; expression numérique « Enter 5th seed » ; expression numérique « Enter 6th seed » ; expression numérique « Enter 7th seed » ; expression numérique « Enter 8th seed » ; expression numérique « Enter 9th seed » ; expression numérique « Enter 10th seed » | — |  |
| 8 | 88 | Expire one number | `Expire one number` |  |  | — |  |
| 9 | 89 | Expire X numbers | `Expire <p0> numbers` |  | expression numérique « Amount of numbers to expire » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random float, 0-1 | `RandOne(` |  |  | — |  |
| 1 | 81 | Random float, 0-1 (excludes 1) | `RandOneExc(` |  |  | — |  |
| 2 | 82 | Random float, define range | `RandExc(` |  | nombre ; nombre | — |  |
| 3 | 83 | Random float, define range (excludes upperbound) | `RandExc(` |  | nombre ; nombre | — |  |
| 4 | 84 | Random integer | `RandInt(` |  | nombre ; nombre | — |  |
| 5 | 85 | Random integer (excludes upperbound) | `RandIntExc(` |  | nombre ; nombre | — |  |
