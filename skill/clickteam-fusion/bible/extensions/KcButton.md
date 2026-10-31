# Extension KcButton

- File: `KcButton.mfx` — installed with Fusion
- Name(s) shown in projects: “Button”, “Bouton”
- Usage in the corpus: 363 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Box checked ? | `Checkbox <object> checked` | La case à cocher <object> est cochée |  | 50 (7 proj.) | `Checkbox 2: Event ID -81, 0 Parameters` |
| 1 | -82 | Button clicked ? | `Button <object> clicked` | Bouton <object> cliqué |  | 196 (40 proj.) | `Exit Button: Event ID -82, 0 Parameters` |
| 3 | -84 | Is visible ? | `Button <object> is visible` | Le bouton <object> est visible |  | — |  |
| 4 | -85 | Is enabled ? | `Button <object> is enabled` | Le bouton <object> est activé |  | — |  |
| 5 | -86 | Is radio button enabled ? | `Radio button <p0> of <object> is enabled` | Le bouton radio <p0> de <object> est activé | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change text | `Change text to <p0>` | Changer le texte en <p0> | (unreliable parameters) | 16 (3 proj.) | `Text Button : Event ID 80, 1 Parameters { "Thank you!" }` |
| 1 | 81 | Visibility > Make Object Reappear | `Make Object Reappear` | Faire réapparaître l'objet |  | — |  |
| 2 | 82 | Visibility > Make Object Invisible | `Make Object Invisible` | Rendre l'objet invisible |  | — |  |
| 3 | 83 | Enable | `Enable` | Activer |  | 43 (4 proj.) | `Bitmap Button : Event ID 83, 0 Parameters` |
| 4 | 84 | Disable | `Disable` | Désactiver |  | 17 (4 proj.) | `Bitmap Button : Event ID 84, 0 Parameters` |
| 6 | 86 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) | — |  |
| 7 | 87 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) | — |  |
| 8 | 88 | Set Radio button > Change text | `Change radio <p0> text to <p1>` | Changer le texte du bouton radio <p0> en <p1> | (unreliable parameters) | — |  |
| 9 | 89 | Set Radio button > Enable a radio button | `Enable radio <p0>` | Activer le bouton radio numéro <p0> | (unreliable parameters) | — |  |
| 10 | 90 | Set Radio button > Disable a radio button | `Disable radio <p0>` | Désactiver le bouton radio numéro <p0> | (unreliable parameters) | — |  |
| 11 | 91 | Set Radio button > Select a radio button | `Select radio button <p0>` | Sélectionner bouton radio numéro <p0> | (unreliable parameters) | 1 (1 proj.) | `Radio Drag Method : Event ID 91, 1 Parameters { 0 }` |
| 14 | 94 | Check | `Check` | Cocher |  | 18 (2 proj.) | `Visible : Event ID 94, 0 Parameters` |
| 15 | 95 | Uncheck | `Uncheck` | Décocher |  | 8 (1 proj.) | `Bold : Event ID 95, 0 Parameters` |
| 16 | 96 | Attach menu option | `Attach Menu Option <p0>` | Attacher option de menu <p0> | (unreliable parameters) | — |  |
| 17 | 97 | Change tooltip | `Set tooltip text to <p0>` | Fixer le texte du tooltip à <p0> | (unreliable parameters) | — |  |
| -29 | 51 | ? | ? |  |  | 2 (1 proj.) | `Text Button : Set font size to 12, border 1` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | X Size of Button | `Button X size(` | Taille en X du bouton |  | — |  |
| 1 | 81 | Y Size of Button | `Button Y size(` | Taille en Y du bouton |  | — |  |
| 4 | 84 | Value of set Radio button | `Selected Radio(` | Valeur du bouton radio concerné |  | 12 (3 proj.) | `Expression ID 84("Radio button")` |
| 5 | 85 | Text of the button | `Button Text$(` | Texte du bouton | → string (unreliable parameters) | — |  |
| 6 | 86 | Text of the tooltip | `Button Tooltip$(` | Texte de l'info-bulle | → string | — |  |
