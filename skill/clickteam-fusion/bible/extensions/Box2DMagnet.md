# Extension Box2DMagnet

- Fichier : `Box2DMagnet.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is magnet active? | `<objet>: Is magnet active?` | <objet> : L'aimant est-il actif? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set strength | `Set strength to <p0>` | Fixer la force du vent à <p0> | expression numérique « Enter the strength of the magnet, from 0 to 100 » | — |  |
| 1 | 81 | Set angle | `Set angle to <p0>` | Fixer l'angle à <p0> degrés | nouvelle direction « Directions of the magnet » | — |  |
| 2 | 82 | Set width | `Set width to <p0>` | Fixer la largeur à <p0> | expression numérique « Enter the width of the object » | — |  |
| 3 | 83 | Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | expression numérique « Enter the height of the object » | — |  |
| 4 | 84 | Set magnet ON/OFF | `Set magnet to <p0>` | Fixer marche/arrêt à <p0> | expression numérique « Enter 1 to turn on, 0 to turn off » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Magnet strength | `MagnetStrength(` | Force de l'aimant |  | — |  |
| 1 | 81 | Action zone width | `MagnetWidth(` | Largeur de la zone d'action |  | — |  |
| 2 | 82 | Action zone height | `MagnetHeigth(` | Hauteur de la zone d'action |  | — |  |
