# Extension ActiveBackdrop

- File: `ActiveBackdrop.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is object visible | `<object>: is visible` | <object>: est visible |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set image | `Set image to <p0>` | Fixer l'image à <p0> | numeric expression “Enter the image number (starting at 0)” |
| 1 | 81 | Set X coordinate | `Set X coordinate to <p0>` | Fixer la coordonnée X à <p0> | numeric expression “Enter the X coordinate” |
| 2 | 82 | Set Y coordinate | `Set Y coordinate to <p0>` | Fixer la coordonnée Y à <p0> | numeric expression “Enter the Y coordinate” |
| 3 | 83 | Show | `Show` | Montrer |  |
| 4 | 84 | Hide | `Hide` | Cacher |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get image number | `Image(` | Numéro de l'image |  |
| 1 | 81 | Get X coordinate | `X(` | Coordonnée X |  |
| 2 | 82 | Get Y coordinate | `Y(` | Coordonnée Y |  |
