# Extension Box2DTreadmill

- Fichier : `Box2DTreadmill.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is treadmill active? | `<objet>: Is treadmill active?` | <objet> : Le tapis roulant est-il actif? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set speed | `Set speed to <p0>` | Fixer la vitesse à <p0> | expression numérique « Enter the speed of the treadmill, from 0 to 100 » | — |  |
| 1 | 81 | Set angle | `Set angle to <p0> degrees` | Fixer l'angle à <p0> degrés | expression numérique « Direction of the treadmill » | — |  |
| 2 | 82 | Set width | `Set width to <p0>` | Fixer la largeur à <p0> | expression numérique « Enter the width of the object » | — |  |
| 3 | 83 | Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | expression numérique « Enter the height of the object » | — |  |
| 4 | 84 | Set treadmill ON/OFF | `Set treadmill to <p0>` | Fixer marche/arrêt à <p0> | expression numérique « Enter 1 to turn on, 0 to turn off » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Treadmill speed | `TreadmillSpeed(` | Vitesse du tapis roulant |  | — |  |
| 1 | 81 | Treadmill angle | `TreadmillAngle(` | Angle du tapis roulant |  | — |  |
| 2 | 82 | Action zone width | `TreadmillWidth(` | Largeur de la zone d'action |  | — |  |
| 3 | 83 | Action zone height | `TreadmillHeigth(` | Hauteur de la zone d'action |  | — |  |
