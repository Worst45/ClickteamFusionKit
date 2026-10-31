# Extension CircleCalc

- Fichier : `CircleCalc.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Calculate From Radius | `Calculate: Radius = <p0>` |  | expression numérique « Enter Radius » | — |  |
| 1 | 81 | Calculate From Diameter | `Calculate: Diameter = <p0>` |  | expression numérique « Enter Diameter » | — |  |
| 2 | 82 | Calculate From Circumference | `Calculate: Circumference = <p0>` |  | expression numérique « Enter Circumference » | — |  |
| 3 | 83 | Calculate From Area | `Calculate: Area = <p0>` |  | expression numérique « Enter Area » | — |  |
| 4 | 84 | Set Pi | `Set Pi to <p0>` |  | expression numérique « Enter Pi (default is 3.14) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Radius | `Radius(` |  |  | — |  |
| 1 | 81 | Get Diameter | `Diameter(` |  |  | — |  |
| 2 | 82 | Get Circumference | `Circumference(` |  |  | — |  |
| 3 | 83 | Get Area | `Area(` |  |  | — |  |
| 4 | 84 | Get Pi | `Pi(` |  |  | — |  |
