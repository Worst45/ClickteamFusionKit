# Extension fcWindowLife

- Fichier : `fcWindowLife.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Window just moved | `On Window just moved` |  |  | — |  |
| 1 | -82 | On Window move | `On Window move` |  |  | — |  |
| 2 | -83 | On Window just resized | `On Window just resized` |  |  | — |  |
| 3 | -84 | On Window resize | `On Window resize` |  |  | — |  |
| 4 | -85 | On Window Start move/resize | `On Window Start move/resize` |  |  | — |  |
| 5 | -86 | On Window End move/resize | `On Window End move/resize` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Properties > Set minimum window size | `Set Minimum window size to (<p0>,<p1>)` |  | expression numérique « Minimum Width » ; expression numérique « Minimum Height » | — |  |
| 1 | 81 | Properties > Set maximum window size | `Set Maximum window size to (<p0>,<p1>)` |  | expression numérique « Maximum Width » ; expression numérique « Maximum Height » | — |  |
| 2 | 82 | Properties > Use minimum size | `Use minimum window size (<p0>)` |  | expression numérique « On = 1 / Off = 0 » | — |  |
| 3 | 83 | Properties > Use maximum size | `Use maximum window size (<p0>)` |  | expression numérique « On = 1 / Off = 0 » | — |  |
| 4 | 84 | Properties > Use Client Area | `Use ClientArea (<p0>)` |  | expression numérique « On = 1 / Off = 0 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Properties > Get window border Width | `getWindowBorderWidth(` |  |  | — |  |
| 1 | 81 | Properties > Get window border Height | `getWindowBorderHeight(` |  |  | — |  |
| 2 | 82 | Properties > Get minimum window Width | `getMinWidth(` |  |  | — |  |
| 3 | 83 | Properties > Get minimum window Height | `getMinHeight(` |  |  | — |  |
| 4 | 84 | Properties > Get maximum window Width | `getMaxWidth(` |  |  | — |  |
| 5 | 85 | Properties > Get maximum window Height | `getMaxHeight(` |  |  | — |  |
