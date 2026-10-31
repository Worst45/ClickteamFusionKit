# Extension Select

- Fichier : `Select.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Select by number of objects > Select first X objects | `<objet>: Select first <p1> of <p0>` |  | objet « Choose object » ; expression numérique « Enter how many to select » | — |  |
| 1 | -82 | Select by Alt Value > Single object with highest Alt Value | `<objet>: Select single <p0> with the highest Alt. Value (<p1>)` |  | objet « Choose object » ; expression numérique « Enter the Alt. Value (0-25) » | — |  |
| 2 | -83 | Select by Alt Value > Single object with lowest Alt Value | `<objet>: Select single <p0> with the lowest Alt. Value (<p1>)` |  | objet « Choose object » ; expression numérique « Enter the Alt. Value (0-25) » | — |  |
| 3 | -84 | Select by number of objects > Select last X objects | `<objet>: Select last <p1> of <p0>` |  | objet « Choose object » ; expression numérique « Enter how many to select » | — |  |
| 4 | -85 | Re-select all objects | `<objet>: Re-select all <p0>` |  | objet « Choose object » | — |  |
| 5 | -86 | Select by display order > Select frontmost object | `<objet>: Select Frontmost <p0>` |  | objet « Choose object » | — |  |
| 6 | -87 | Select by display order > Select rearmost object | `<objet>: Select Rearmost <p0>` |  | objet « Choose object » | — |  |
| 9 | -90 | Compare to n# of selected objects | `<objet>: Number of <p0> selected by previous conditions <p1>` |  | objet « Choose object » ; comparaison numérique « Compare to number of selected objects » | — |  |
| 14 | -95 | Select by number of objects > Select object at index | `<objet>: Select <p0> at index <p1>` |  | objet « Choose object » ; expression numérique « Enter index of object to select » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Count Selected Objects (Name) | `numSelectedByName(` |  | chaîne « Name of Object » | — |  |
| 1 | 81 | Count Selected Objects (Fixed Value) | `numSelectedByFixedV(` |  | nombre « Fixed Value of Object » | — |  |
