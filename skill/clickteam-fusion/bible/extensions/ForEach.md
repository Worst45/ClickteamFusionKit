# Extension ForEach

- Fichier : `ForEach.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On ForEach loop | `<objet> : On ForEach loop: <p0>` |  | expression chaîne « Enter ForEach loop's name » | — |  |
| 1 | -82 | ForEach loop is paused | `<objet> : ForEach loop: <p0> is paused` |  | expression chaîne « Enter ForEach loop's name » | — |  |
| 2 | -83 | Object is part of ForEach loop | `<objet> : Object <p0> is part of ForEach loop: <p1>` |  | objet « Select object... » ; expression chaîne « Enter ForEach loop's name » | — |  |
| 3 | -84 | Groups > Object is part of group | `<objet> : Object <p0> is part of group: <p1>` |  | objet « Select object... » ; expression chaîne « Enter group's name » | — |  |
| 4 | -85 | On ForEach loop for object | `<objet> : On ForEach loop: <p0> for object <p1>` |  | expression chaîne « Enter ForEach loop's name » ; objet « Select object... » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start ForEach loop for object... | `Start ForEach loop: <p0> for object <p1>` |  | expression chaîne « Enter ForEach loop's name » ; objet « Select object... » | — |  |
| 1 | 81 | Pause ForEach loop... | `Pause ForEach loop: <p0>` |  | expression chaîne « Enter ForEach loop's name » | — |  |
| 2 | 82 | Resume ForEach loop... | `Resume ForEach loop: <p0>` |  | expression chaîne « Enter ForEach loop's name » | — |  |
| 3 | 83 | Set ForEach loop's iteration... | `Set ForEach loop: <p0>'s iteration to: <p1>` |  | expression chaîne « Enter ForEach loop's name » ; expression numérique « Enter iteration index of loop » | — |  |
| 4 | 84 | Groups > Start ForEach loop for group... | `Start ForEach loop: <p0> for group: <p1>` |  | expression chaîne « Enter ForEach loop's name » ; expression chaîne « Enter group's name » | — |  |
| 5 | 85 | Groups > Add object(s) to group... | `Add object(s) <p0> to group: <p1>` |  | objet « Select object... » ; expression chaîne « Enter group's name » | — |  |
| 6 | 86 | Groups > Add object to group by Fixed Value... | `Add object's Fixed Value: <p0> to group: <p1>` |  | expression numérique « Enter an object's Fixed Value » ; expression chaîne « Enter group's name » | — |  |
| 7 | 87 | Groups > Remove object(s) from group... | `Remove object(s) <p0> from group: <p1>` |  | objet « Select object... » ; expression chaîne « Enter group's name » | — |  |
| 8 | 88 | Groups > Remove object from group by Fixed Value... | `Remove object's Fixed Value: <p0> from group: <p1>` |  | expression numérique « Enter an object's Fixed Value » ; expression chaîne « Enter group's name » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get ForEach loop's current iterating Fixed Value | `LoopFV(` |  | chaîne « Enter ForEach loop's name » | — |  |
| 1 | 81 | Get ForEach's current iteration | `LoopIteration(` |  | chaîne « Enter ForEach loop's name » | — |  |
| 2 | 82 | Get ForEach's maximum iteration | `LoopMaxIteration(` |  | chaîne « Enter ForEach loop's name » | — |  |
| 3 | 83 | Groups > Get number of objects in group | `GroupSize(` |  | chaîne « Enter group's name » | — |  |
