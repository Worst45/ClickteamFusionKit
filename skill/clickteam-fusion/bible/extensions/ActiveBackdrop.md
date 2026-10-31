# Extension ActiveBackdrop

- Fichier : `ActiveBackdrop.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is object visible | `<objet>: is visible` | <objet>: est visible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set image | `Set image to <p0>` | Fixer l'image à <p0> | expression numérique « Enter the image number (starting at 0) » | — |  |
| 1 | 81 | Set X coordinate | `Set X coordinate to <p0>` | Fixer la coordonnée X à <p0> | expression numérique « Enter the X coordinate » | — |  |
| 2 | 82 | Set Y coordinate | `Set Y coordinate to <p0>` | Fixer la coordonnée Y à <p0> | expression numérique « Enter the Y coordinate » | — |  |
| 3 | 83 | Show | `Show` | Montrer |  | — |  |
| 4 | 84 | Hide | `Hide` | Cacher |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get image number | `Image(` | Numéro de l'image |  | — |  |
| 1 | 81 | Get X coordinate | `X(` | Coordonnée X |  | — |  |
| 2 | 82 | Get Y coordinate | `Y(` | Coordonnée Y |  | — |  |
