# Extension kcmouse

- Fichier : `kcmouse.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare Actual Mouse X | `Actual Mouse X position <p0>` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Compare Actual Mouse Y | `Actual Mouse Y position <p0>` |  | (paramètres non fiables) | — |  |
| 2 | -83 | Compare Distance rolled | `Distance Mouse Rolled <p0>` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Actual Mouse X | `Set Actual Mouse X to <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Set Actual Mouse Y | `Set Actual Mouse Y to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Actual Mouse X Position | `MouseX(` |  |  | — |  |
| 1 | 81 | Get Actual Mouse Y Position | `MouseY(` |  |  | — |  |
| 2 | 82 | Get Distance Rolled | `MouseRoll(` |  |  | — |  |
