# Extension ToolTip

- Fichier : `ToolTip.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | User clicks on a link | `<objet>: User has clicked on a link` | <objet>: L'utilisateur a cliqué sur un lien |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set text color | `Set text color to <p0>` | Fixer la couleur du texte à <p0> | couleur « Please choose a new color » | — |  |
| 1 | 81 | Set background color | `Set background color to <p0>` | Fixer la couleur du fond à <p0> | couleur « Please choose a new color » | — |  |
| 2 | 82 | Set text | `Set text to <p0>` | Fixer le texte à <p0> | expression chaîne « Please enter the new text » | — |  |
| 4 | 84 | Automatic mode > Set appearance timer | `Set appearance timer to <p0> ms` | Fixer le timer d'apparition à <p0> ms | expression numérique « Please enter the new delay, in milliseconds » | — |  |
| 5 | 85 | Automatic mode > Set display timer | `Set display timer to <p0> ms` | Fixer le timer d'affichage à <p0> ms | expression numérique « Please enter the new delay, in milliseconds » | — |  |
| 6 | 86 | Automatic mode > Set detection zone | `Set detection zone to <p0>` | Fixer la zone de détection à <p0> | zone « Define the new detection zone » | — |  |
| 7 | 87 | Manual mode > Display tootip | `Display tooltip at (<p0>, <p1>)` | Afficher le tooltip en (<p0>, <p1>) | expression numérique « Enter X coordinate of tooltip » ; expression numérique « Enter Y coordinate of tooltip » | — |  |
| 8 | 88 | Manual mode > Close tooltip | `Close tooltip` | Fermer le tooltip |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get tooltip text | `TipText$(` | Texte du tooltip | → chaîne | — |  |
| 2 | 82 | Get background color | `TipBackColor(` | Couleur de fond |  | — |  |
| 3 | 83 | Get text color | `TipTextColor(` | Couleur du texte |  | — |  |
| 4 | 84 | Get appearance timer | `TipAppearTimer(` | Timer d'apparition |  | — |  |
| 5 | 85 | Get display timer | `TipDisplayTimer(` | Timer d'affichage |  | — |  |
