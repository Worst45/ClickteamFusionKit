# Extension MobileFont

- Fichier : `MobileFont.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set color | `Set color to <p0>` | Changer la couleur en <p0> | couleur « Choose the new color » | — |  |
| 1 | 81 | Set leading | `Set interline to <p0>` | Fixer l'interligne à <p0> | expression numérique « Enter the new leading value. Can be negative. » | — |  |
| 2 | 82 | Set tracking space | `Set inter-character space to <p0>` | Fixed l'espace inter-caractère à <p0> | expression numérique « Enter the new tracking space. Can be negative. » | — |  |
| 3 | 83 | Set display priority | `Set display priority to <p0>` | Changer la priorité d'affichage à <p0> | expression numérique « Enter 0 to display from left to right, 1 from right to left » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get leading | `leading(` | Retrouver l'interligne |  | — |  |
| 1 | 81 | Get tracking | `tracking(` | Retrouver l'approche |  | — |  |
| 2 | 82 | Get display priority | `priority(` | Retrouver la priorité d'affichage |  | — |  |
