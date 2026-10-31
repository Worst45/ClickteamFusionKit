# Extension StaticText

- File: `StaticText.mfx` — installed with Fusion
- Name(s) shown in projects: “Texte Statique”
- Usage in the corpus: 92 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked with left button? | `<object>: Click with left button` | <object>: Clic avec le bouton gauche |  | 2 (2 proj.) |  |
| 1 | -82 | Click > Clicked with right button? | `<object>: Click with right button` | <object>: Clic avec le bouton droit |  | — |  |
| 2 | -83 | Click > Double click? | `<object>: Double click` | <object>: Double clic |  | — |  |
| 3 | -84 | Window > Is object visible? | `<object>: Is object visible?` | <object>: L'objet est-il visible? |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Hide | `<object>: Hide` | <object>: Cacher |  | — |  |
| 1 | 81 | Window > Show | `<object>: Show` | <object>: Montrer |  | 3 (3 proj.) |  |
| 2 | 82 | Window > Set width | `<object>: Set width to <p0>` | <object>: Fixer la taille à <p0> | numeric expression “Enter new width” | — |  |
| 3 | 83 | Window > Set height | `<object>: Set height to <p0>` | <object>: Fixer la hauteur à <p0> | numeric expression “Enter new height” | — |  |
| 4 | 84 | Set text | `<object>: Set text to <p0>` | <object>: Fixer le texte à <p0> | string expression “Enter new text” | 50 (13 proj.) |  |
| 5 | 85 | Colors > Set text color | `<object>: Set text color to <p0>` | <object>: Fixer la couleur de texte à <p0> | color “Set text color” | — |  |
| 6 | 86 | Colors > Set background color | `<object>: Set background color to <p0>` | <object>: Fixer la couleur de fond à <p0> | color “Set background color” | — |  |
| -79 | 1 | ? | ? |  |  | 12 (5 proj.) |  |
| -56 | 24 | ? | ? |  |  | 18 (5 proj.) |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get width | `Width(` | Largeur |  | — |  |
| 1 | 81 | Size > Get height | `Height(` | Hauteur |  | — |  |
| 2 | 82 | Get text | `Text$(` | Récupérer le texte | → string | 5 (3 proj.) |  |
| -64 | 16 | ? | ? |  |  | 2 (2 proj.) |  |
