# Extension LineSurface

- Fichier : `LineSurface.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set centre coordinate | `Set centre coordinates to <p0>, <p1>` |  | expression numérique « X coordinate » ; expression numérique « Y coordinate » | — |  |
| 1 | 81 | Draw line | `Draw line from <p0>, <p1> to <p2>, <p3> with thickness <p4> and colour <p5>` |  | expression numérique « Start X coordinate » ; expression numérique « Start Y coordinate » ; expression numérique « End X coordinate » ; expression numérique « End Y coordinate » ; expression numérique « Thickness » ; couleur « Colour » | — |  |
| 2 | 82 | Clear surface | `Clear surface` |  |  | — |  |
