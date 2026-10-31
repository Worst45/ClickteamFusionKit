# Extension OpenGL-ClearControl

- Fichier : `OpenGL-ClearControl.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set clear color... | `Set clear color to <p0>` |  | couleur « Set clear color... » | — |  |
| 1 | 81 | Set clear depth... | `Set clear depth to <p0>` |  | expression numérique « Set clear depth... » | — |  |
| 2 | 82 | Clear color buffer | `Clear color buffer` |  |  | — |  |
| 3 | 83 | Clear depth buffer | `Clear depth buffer` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get clear color | `ClearColor(` |  |  | — |  |
| 1 | 81 | Get clear depth | `ClearDepth(` |  |  | — |  |
