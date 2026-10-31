# Extension FGWindow

- Fichier : `FGWindow.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window Handle | `Handle(` |  |  | — |  |
| 1 | 81 | Window Title | `Title$(` |  | → chaîne | — |  |
| 2 | 82 | X Position | `WindowX(` |  |  | — |  |
| 3 | 83 | Y Position | `WindowY(` |  |  | — |  |
| 4 | 84 | Window Width | `WindowWidth(` |  |  | — |  |
| 5 | 85 | Window Height | `WindowHeight(` |  |  | — |  |
