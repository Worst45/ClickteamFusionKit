# Extension fcButton

- Fichier : `fcButton.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Bouton CS »
- Usage dans le corpus : 233 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Box checked ? | `Checkbox <objet> checked` |  |  | — |  |
| 1 | -82 | Button clicked ? | `Button <objet> clicked` |  |  | 11 (1 proj.) |  |
| 3 | -84 | Is visible ? | `Button <objet> is visible` |  |  | — |  |
| 4 | -85 | Is enabled ? | `Button <objet> is enabled` |  |  | — |  |
| 5 | -86 | Is radio button enabled ? | `Radio button <p0> of <objet> is enabled` |  | (paramètres non fiables) | — |  |
| -54 | -27 | ? | ? |  |  | 47 (1 proj.) |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change text | `Change text to <p0>` |  | (paramètres non fiables) | 7 (1 proj.) |  |
| 1 | 81 | Visibility > Make Object Reappear | `Make Object Reappear` |  |  | 2 (1 proj.) |  |
| 2 | 82 | Visibility > Make Object Invisible | `Make Object Invisible` |  |  | 4 (1 proj.) |  |
| 3 | 83 | Enable | `Enable` |  |  | 3 (1 proj.) |  |
| 4 | 84 | Disable | `Disable` |  |  | 1 (1 proj.) |  |
| 6 | 86 | Size > Set Horizontal Size | `Set horizontal size to <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Size > Set Vertical Size | `Set vertical size to <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Set Radio button > Change text | `Change radio <p0> text to <p1>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Set Radio button > Enable a radio button | `Enable radio n°<p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Set Radio button > Disable a radio button | `Disable radio n°<p0>` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Set Radio button > Select a radio button | `Select radio button °<p0>` |  | (paramètres non fiables) | — |  |
| 14 | 94 | Check | `Check` |  |  | — |  |
| 15 | 95 | Uncheck | `Uncheck` |  |  | — |  |
| 16 | 96 | Attach menu option | `Attach Menu Option <p0>` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Change tooltip | `Set tooltip text to <p0>` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Use system colors | `Use system colors: <p0>` |  | (paramètres non fiables) | — |  |
| 19 | 99 | Change background | `Change background color to <p0>` |  | (paramètres non fiables) | — |  |
| -49 | 31 | ? | ? |  |  | 90 (1 proj.) |  |
| -31 | 49 | ? | ? |  |  | 45 (1 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | X Size of Button | `Button X size(` |  |  | — |  |
| 1 | 81 | Y Size of Button | `Button Y size(` |  |  | — |  |
| 4 | 84 | Value of set Radio button | `Selected Radio(` |  |  | — |  |
| 5 | 85 | Text of the button | `Button Text$(` |  | → chaîne (paramètres non fiables) | — |  |
| 6 | 86 | Text of the tooltip | `Button Tooltip$(` |  | → chaîne | — |  |
| -64 | 16 | ? | ? |  |  | 16 (1 proj.) |  |
| -61 | 19 | ? | ? |  |  | 7 (1 proj.) |  |
