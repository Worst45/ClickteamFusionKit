# Extension ObjResize

- Fichier : `ObjResize.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Any Object Selected | `<objet>: Is an Object Selected?` |  |  | — |  |
| 1 | -82 | Is Specific Object Selected | `<objet>: Is Object <p0> Selected?` |  | expression numérique « Fixed Value to Test » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Use Selection > Select Object | `Select <p0>` |  | objet « Object to Select » | — |  |
| 1 | 81 | Use Selection > Select None | `Select None` |  |  | — |  |
| 2 | 82 | Use Selection > Set Size | `Set Size of Selected Object to (<p0>, <p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 3 | 83 | Use Selection > Set Width | `Set Width of Selected Object to <p0> (Proportion: <p1>)` |  | expression numérique « Width » ; expression numérique « Proportionally Set Height? (0=No, 1=Yes) » | — |  |
| 4 | 84 | Use Selection > Set Height | `Set Height of Selected Object to <p0> (Proportion: <p1>)` |  | expression numérique « Height » ; expression numérique « Proportionally Set Width? (0=No, 1=Yes) » | — |  |
| 5 | 85 | Use QuickSizing > Set Width | `Set Width of Object <p0> to <p1>` |  | objet « Object to Resize » ; expression numérique « Width » | — |  |
| 6 | 86 | Use QuickSizing > Set Height | `Set Height of Object <p0> to <p1>` |  | objet « Object to Resize » ; expression numérique « Height » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Selected Object > Get X Size | `SelXSize(` |  |  | — |  |
| 1 | 81 | Selected Object > Get Y Size | `SelYSize(` |  |  | — |  |
| 2 | 82 | Selected Object > Get X Scale | `SelXScale(` |  |  | — |  |
| 3 | 83 | Selected Object > Get Y Scale | `SelYScale(` |  |  | — |  |
| 4 | 84 | Selected Object > Get Original X Size | `SelOrigXSize(` |  |  | — |  |
| 5 | 85 | Selected Object > Get Original Y Size | `SelOrigYSize(` |  |  | — |  |
| 6 | 86 | Selected Object > Get Fixed Value | `SelFixed(` |  |  | — |  |
