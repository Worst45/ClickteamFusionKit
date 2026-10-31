# Extension ToolTip

- File: `ToolTip.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | User clicks on a link | `<object>: User has clicked on a link` | <object>: L'utilisateur a cliqué sur un lien |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set text color | `Set text color to <p0>` | Fixer la couleur du texte à <p0> | color “Please choose a new color” | — |  |
| 1 | 81 | Set background color | `Set background color to <p0>` | Fixer la couleur du fond à <p0> | color “Please choose a new color” | — |  |
| 2 | 82 | Set text | `Set text to <p0>` | Fixer le texte à <p0> | string expression “Please enter the new text” | — |  |
| 4 | 84 | Automatic mode > Set appearance timer | `Set appearance timer to <p0> ms` | Fixer le timer d'apparition à <p0> ms | numeric expression “Please enter the new delay, in milliseconds” | — |  |
| 5 | 85 | Automatic mode > Set display timer | `Set display timer to <p0> ms` | Fixer le timer d'affichage à <p0> ms | numeric expression “Please enter the new delay, in milliseconds” | — |  |
| 6 | 86 | Automatic mode > Set detection zone | `Set detection zone to <p0>` | Fixer la zone de détection à <p0> | zone “Define the new detection zone” | — |  |
| 7 | 87 | Manual mode > Display tootip | `Display tooltip at (<p0>, <p1>)` | Afficher le tooltip en (<p0>, <p1>) | numeric expression “Enter X coordinate of tooltip”; numeric expression “Enter Y coordinate of tooltip” | — |  |
| 8 | 88 | Manual mode > Close tooltip | `Close tooltip` | Fermer le tooltip |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get tooltip text | `TipText$(` | Texte du tooltip | → string | — |  |
| 2 | 82 | Get background color | `TipBackColor(` | Couleur de fond |  | — |  |
| 3 | 83 | Get text color | `TipTextColor(` | Couleur du texte |  | — |  |
| 4 | 84 | Get appearance timer | `TipAppearTimer(` | Timer d'apparition |  | — |  |
| 5 | 85 | Get display timer | `TipDisplayTimer(` | Timer d'affichage |  | — |  |
