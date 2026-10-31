# Extension ObjectMover

- Fichier : `ObjectMover.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is enabled? | `<objet> is enabled` | <objet> est activé |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Set width | `Set width to <p0>` | Fixer la largeur à <p0> | expression numérique « Enter new width » | — |  |
| 1 | 81 | Size > Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | expression numérique « Enter new height » | — |  |
| 2 | 82 | Activation > Enable | `Enable` | Activer |  | — |  |
| 3 | 83 | Activation > Disable | `Disable` | Désactiver |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get width | `Width(` | Largeur |  | — |  |
| 1 | 81 | Get height | `Height(` | Hauteur |  | — |  |
