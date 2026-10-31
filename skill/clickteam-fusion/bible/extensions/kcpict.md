# Extension kcpict

- File: `kcpict.mfx` — installed with Fusion
- Name(s) shown in projects: “Picture”
- Usage in the corpus: 2 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | A picture is loaded ? | `<p0>: a picture is loaded` | <object>: une image est chargée |  | — |  |
| 1 | -82 | Is visible ? | `<object>: visible` | <object>: visible |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New picture | `New picture : <p0>` | Nouvelle image : <p0> | (unreliable parameters) | 1 (1 proj.) | `Picture : Event ID 80, 1 Parameters { Apppath$ + ".\pictures\" + string$("Filename...") + ".pcx" }` |
| 1 | 81 | New picture from selector | `New picture from selector` | Nouvelle image avec sélecteur |  | — |  |
| 2 | 82 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 3 | 83 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 4 | 84 | Image resize on | `Image resize on` | Redimensionnement image ON |  | 1 (1 proj.) | `Picture : Event ID 84, 0 Parameters` |
| 5 | 85 | Image resize off | `Image resize off` | Redimensionnement image OFF |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get picture name | `poPictureName$(` | Nom de l'image |  | — |  |
| 1 | 81 | Get picture original x size | `poOrgWidth(` | Taille en X originale |  | — |  |
| 2 | 82 | Get picture original y size | `poOrgHeight(` | Taille en Y originale |  | — |  |
| 3 | 83 | Get picture screen x size | `poScreenWidth(` | Taille en X à l'écran |  | — |  |
| 4 | 84 | Get picture screen y size | `poScreenHeight(` | Taille en Y à l'écran |  | — |  |
| 5 | 85 | Get X position | `poX(` | Position en X |  | — |  |
| 6 | 86 | Get Y position | `poY(` | Position en Y |  | — |  |
