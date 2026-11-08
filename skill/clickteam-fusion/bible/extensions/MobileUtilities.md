# Extension MobileUtilities

- File: `MobileUtilities.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Left key > Left key pressed | `Left key pressed (F10)` | Lors de l'appui sur la touche gauche (F10) |  |
| 1 | -82 | Right key > Right key pressed | `Right key pressed (F11)` | Lors de l'appui sur la touche droite (F11) |  |
| 2 | -83 | Left key > Left key down | `Left key down (F10)` | Touche gauche enfoncée (F10) |  |
| 3 | -84 | Right key > Right key down | `Right key down (F11)` | Touche droite enfoncée (F11) |  |
| 4 | -85 | Screen orientation has changed | `Screen orientation has changed` | L'orientation de l'écran a changé |  |
| 5 | -86 | Is application running on Mobile | `Application running on mobile` | L'application fonctionne sur mobile |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set window rotation | `Set window rotation to <p0>` | Fixer la rotation de la fenêtre à <p0> | numeric expression “0: no rotation, 1: 90 clockwise, 2: 90 anti-clockwise” |
| 1 | 81 | Refresh display | `Refresh display` | Rafraichir l'affichage |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get screen orientation | `Orientation(` | Orientation de l'écran |  |
| 1 | 81 | Get window rotation | `Rotation(` | Orientation de la fenêtre |  |
| 2 | 82 | Get screen width | `Width(` | Largeur de l'écran |  |
| 3 | 83 | Get screen height | `Height(` | Hauteur de l'écran |  |
