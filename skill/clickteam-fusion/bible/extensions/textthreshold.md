# Extension textthreshold

- Fichier : `textthreshold.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Lighter Color | `Set Lighter Color to <p0>` |  | couleur « Color » | — |  |
| 1 | 81 | Set Darker Color | `Set Darker Color to <p0>` |  | couleur « Color » | — |  |
| 2 | 82 | Set Threshold Color | `Set Threshold Color to <p0>` |  | expression numérique « Level, 0-255 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get text color (Background Color) | `TextColor(` |  | nombre « Color via GetRGB » | — |  |
