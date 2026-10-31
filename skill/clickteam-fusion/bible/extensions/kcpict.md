# Extension kcpict

- Fichier : `kcpict.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Picture »
- Usage dans le corpus : 2 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | A picture is loaded ? | `<p0>: a picture is loaded` | <objet>: une image est chargée |  | — |  |
| 1 | -82 | Is visible ? | `<objet>: visible` | <objet>: visible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New picture | `New picture : <p0>` | Nouvelle image : <p0> | (paramètres non fiables) | 1 (1 proj.) | `Picture : Event ID 80, 1 Parameters { Apppath$ + ".\pictures\" + string$("Filename...") + ".pcx" }` |
| 1 | 81 | New picture from selector | `New picture from selector` | Nouvelle image avec sélecteur |  | — |  |
| 2 | 82 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 3 | 83 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 4 | 84 | Image resize on | `Image resize on` | Redimensionnement image ON |  | 1 (1 proj.) | `Picture : Event ID 84, 0 Parameters` |
| 5 | 85 | Image resize off | `Image resize off` | Redimensionnement image OFF |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get picture name | `poPictureName$(` | Nom de l'image |  | — |  |
| 1 | 81 | Get picture original x size | `poOrgWidth(` | Taille en X originale |  | — |  |
| 2 | 82 | Get picture original y size | `poOrgHeight(` | Taille en Y originale |  | — |  |
| 3 | 83 | Get picture screen x size | `poScreenWidth(` | Taille en X à l'écran |  | — |  |
| 4 | 84 | Get picture screen y size | `poScreenHeight(` | Taille en Y à l'écran |  | — |  |
| 5 | 85 | Get X position | `poX(` | Position en X |  | — |  |
| 6 | 86 | Get Y position | `poY(` | Position en Y |  | — |  |
