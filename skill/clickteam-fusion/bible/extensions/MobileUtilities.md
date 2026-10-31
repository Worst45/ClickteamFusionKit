# Extension MobileUtilities

- Fichier : `MobileUtilities.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Left key > Left key pressed | `Left key pressed (F10)` | Lors de l'appui sur la touche gauche (F10) |  | — |  |
| 1 | -82 | Right key > Right key pressed | `Right key pressed (F11)` | Lors de l'appui sur la touche droite (F11) |  | — |  |
| 2 | -83 | Left key > Left key down | `Left key down (F10)` | Touche gauche enfoncée (F10) |  | — |  |
| 3 | -84 | Right key > Right key down | `Right key down (F11)` | Touche droite enfoncée (F11) |  | — |  |
| 4 | -85 | Screen orientation has changed | `Screen orientation has changed` | L'orientation de l'écran a changé |  | — |  |
| 5 | -86 | Is application running on Mobile | `Application running on mobile` | L'application fonctionne sur mobile |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set window rotation | `Set window rotation to <p0>` | Fixer la rotation de la fenêtre à <p0> | expression numérique « 0: no rotation, 1: 90 clockwise, 2: 90 anti-clockwise » | — |  |
| 1 | 81 | Refresh display | `Refresh display` | Rafraichir l'affichage |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get screen orientation | `Orientation(` | Orientation de l'écran |  | — |  |
| 1 | 81 | Get window rotation | `Rotation(` | Orientation de la fenêtre |  | — |  |
| 2 | 82 | Get screen width | `Width(` | Largeur de l'écran |  | — |  |
| 3 | 83 | Get screen height | `Height(` | Hauteur de l'écran |  | — |  |
