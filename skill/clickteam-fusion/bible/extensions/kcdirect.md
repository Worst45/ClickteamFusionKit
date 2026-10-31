# Extension kcdirect

- Fichier : `kcdirect.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set the amount to rotate | `Set the amount to rotate to <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Rotate object toward a direction | `Rotate <p0> toward direction <p1>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Rotate object toward a position | `Rotate <p0> toward <p1>` |  | position « Rotate object toward a position » | — |  |
| 3 | 83 | Add a directional speed to an object | `Add speed <p0> to <p1>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Set the direction to add | `Set the direction for adding to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Convert an XY to a direction | `XY_to_Dir(` |  | nombre | — |  |
| 1 | 81 | Convert an XY to a speed | `XY_to_Speed(` |  | nombre | — |  |
| 2 | 82 | Convert a direction to an X value | `Direction_to_X(` |  | nombre | — |  |
| 3 | 83 | Convert a direction to a Y value | `Direction_to_Y(` |  | nombre | — |  |
| 4 | 84 | Turn one direction toward another | `Turn_Toward(` |  | nombre | — |  |
