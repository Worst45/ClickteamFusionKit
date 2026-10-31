# Extension 3DActives

- Fichier : `3DActives.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move an object | `Move <p0> to 3D( <p1> , <p2> ,<p3> )` |  | objet « Select Object » ; expression numérique « X (Float Allowed) » ; expression numérique « Y (Float Allowed) » ; expression numérique « Z (Float Allowed) » | — |  |
| 1 | 81 | Rotate the camara | `Rotate the camara to <p0> , <p1> , <p2>` |  | expression numérique « X (Float, 0-360) » ; expression numérique « Y (Float, 0-360) » ; expression numérique « Z (Float, 0-360) » | — |  |
| 2 | 82 | Settings > Set Prespective Value | `Set Prespective Value to <p0>` |  | expression numérique « Value (Floats allowed) » | — |  |
| 3 | 83 | Settings > Enable scaling | `Enable scaling` |  |  | — |  |
| 4 | 84 | Settings > Disable scaling | `Disable scaling` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X position of last moved object | `LastX(` |  |  | — |  |
| 1 | 81 | Get Y position of last moved object | `LastY(` |  |  | — |  |
| 2 | 82 | Get Z position of last moved object | `LastZ(` |  |  | — |  |
| 3 | 83 | Get X angle of the camara | `CamX(` |  |  | — |  |
| 4 | 84 | Get Y angle of the camara | `CamY(` |  |  | — |  |
| 5 | 85 | Get Z angle of the camara | `CamZ(` |  |  | — |  |
