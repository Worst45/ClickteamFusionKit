# Extension StaticText

- File: `StaticText.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked with left button? | `<object>: Click with left button` | <object>: Clic avec le bouton gauche |  |
| 1 | -82 | Click > Clicked with right button? | `<object>: Click with right button` | <object>: Clic avec le bouton droit |  |
| 2 | -83 | Click > Double click? | `<object>: Double click` | <object>: Double clic |  |
| 3 | -84 | Window > Is object visible? | `<object>: Is object visible?` | <object>: L'objet est-il visible? |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Window > Hide | `<object>: Hide` | <object>: Cacher |  |
| 1 | 81 | Window > Show | `<object>: Show` | <object>: Montrer |  |
| 2 | 82 | Window > Set width | `<object>: Set width to <p0>` | <object>: Fixer la taille à <p0> | numeric expression “Enter new width” |
| 3 | 83 | Window > Set height | `<object>: Set height to <p0>` | <object>: Fixer la hauteur à <p0> | numeric expression “Enter new height” |
| 4 | 84 | Set text | `<object>: Set text to <p0>` | <object>: Fixer le texte à <p0> | string expression “Enter new text” |
| 5 | 85 | Colors > Set text color | `<object>: Set text color to <p0>` | <object>: Fixer la couleur de texte à <p0> | color “Set text color” |
| 6 | 86 | Colors > Set background color | `<object>: Set background color to <p0>` | <object>: Fixer la couleur de fond à <p0> | color “Set background color” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Size > Get width | `Width(` | Largeur |  |
| 1 | 81 | Size > Get height | `Height(` | Hauteur |  |
| 2 | 82 | Get text | `Text$(` | Récupérer le texte | → string |
