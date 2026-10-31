# Extension GETMOV

- Fichier : `GETMOV.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Did the object move? | `<objet>: Did the object move?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Preform calculations | `Preform calculations for object  <p0>` |  | objet « Which object? » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X speed | `Get_X_speed(` |  |  | — |  |
| 1 | 81 | Get Y speed | `Ge_Y_speed(` |  |  | — |  |
| 2 | 82 | Get overall speed | `Get_speed(` |  |  | — |  |
| 3 | 83 | Get angle | `Get_Angle(` |  |  | — |  |
| 4 | 84 | Get direction | `Get_direction(` |  |  | — |  |
