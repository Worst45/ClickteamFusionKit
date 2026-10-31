# Extension WargameMap

- Fichier : `WargameMap.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to cost of movement for a tile | `<objet> : Cost of tile at <p0> , <p1> is <p2>` |  | expression numérique « Tile X coordinate » ; expression numérique « Tile Y coordinate » ; comparaison numérique « Compare to the movement cost » | — |  |
| 1 | -82 | Is tile impassable? | `<objet> : Tile at <p0> , <p1> is impassable` |  | expression numérique « Tile X coordinate » ; expression numérique « Tile Y coordinate » | — |  |
| 2 | -83 | Does a valid path exist? | `<objet> : A valid path exists` |  |  | — |  |
| 3 | -84 | Compare to the total cost... > of the entire path | `<objet> : Total cost of the path <p0>` |  | comparaison numérique « Compare to the movement cost » | — |  |
| 4 | -85 | Compare to the number of movements in the path | `<objet> : Number of movements in the path <p0>` |  | comparaison numérique « Compare to the number of movements in the path » | — |  |
| 5 | -86 | Compare to the total cost... > from the beginning to a specified movement | `<objet> : Total cost from beginning to point <p0> is <p1>` |  | expression numérique « Index of movement » ; comparaison numérique « Compare to the movement cost » | — |  |
| 6 | -87 | Compare to the direction of a specified movement | `<objet> : Direction of point <p0> <p1>` |  | expression numérique « Index of movement » ; comparaison numérique « Compare to the direction of this movement » | — |  |
| 7 | -88 | Compare to the total cost... > from the beginning to the current movement | `<objet> : Total cost from beginning to current point is <p0>` |  | comparaison numérique « Compare to the movement cost » | — |  |
| 8 | -89 | Compare to the direction of the current movement | `<objet> : Direction of current point <p0>` |  | comparaison numérique « Compare to the direction of this movement » | — |  |
| 9 | -90 | End of path reached? | `<objet> : End of path reached` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set map width | `Set map width to <p0>` |  | expression numérique « Width of the map » | — |  |
| 1 | 81 | Set map height | `Set map height to <p0>` |  | expression numérique « Height of the map » | — |  |
| 2 | 82 | Set the cost of movement for a tile | `Set the cost of the tile at <p0> , <p1> to <p2>` |  | expression numérique « Tile X coordinate » ; expression numérique « Tile Y coordinate » ; expression numérique « The movement cost of this tile » | — |  |
| 3 | 83 | Calculate a path | `Calculate a path starting from <p0> , <p1> to <p2> , <p3>` |  | expression numérique « Starting tile's X coordinate » ; expression numérique « Starting tile's Y coordinate » ; expression numérique « Destination tile's X coordinate » ; expression numérique « Destination tile's Y coordinate » | — |  |
| 4 | 84 | Next movement in path | `Advance to the next movement` |  |  | — |  |
| 5 | 85 | Previous movement in path | `Go back to the previous movement` |  |  | — |  |
| 6 | 86 | Reset movement to start of path | `Reset the movement to the start of the path` |  |  | — |  |
| 7 | 87 | Calculate line-of-sight path | `Calculate line-of-sight path from <p0> , <p1> to <p2> , <p3>` |  | expression numérique « Starting tile's X coordinate » ; expression numérique « Starting tile's Y coordinate » ; expression numérique « Destination tile's X coordinate » ; expression numérique « Destination tile's Y coordinate » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Map properties > Map width | `Map Width(` |  |  | — |  |
| 1 | 81 | Map properties > Map height | `Map Height(` |  |  | — |  |
| 2 | 82 | Map properties > Cost of movement for a tile | `Cost of Tile(` |  | nombre « Tile X coordinate » ; nombre « Tile Y coordinate » | — |  |
| 3 | 83 | Total cost... > of the entire path | `Cost of Path(` |  |  | — |  |
| 4 | 84 | Number of movements in the path | `Length of Path(` |  |  | — |  |
| 5 | 85 | Total cost... > from the beginning to a specified movement | `Cost to Movement(` |  | nombre « Index of movement » | — |  |
| 6 | 86 | Specified movement > Direction | `Movement Direction(` |  | nombre « Index of movement » | — |  |
| 7 | 87 | Specified movement > X coordinate | `Movement X(` |  | nombre « Index of movement » | — |  |
| 8 | 88 | Specified movement > Y coordinate | `Movement Y(` |  | nombre « Index of movement » | — |  |
| 9 | 89 | Start and Destination tiles > X coordinate of the starting point | `Start X(` |  |  | — |  |
| 10 | 90 | Start and Destination tiles > Y coordinate of the starting point | `Start Y(` |  |  | — |  |
| 11 | 91 | Start and Destination tiles > X coordinate of the destination point | `Dest X(` |  |  | — |  |
| 12 | 92 | Start and Destination tiles > Y coordinate of the destination point | `Dest Y(` |  |  | — |  |
| 13 | 93 | Current movement > Index | `Current Index(` |  |  | — |  |
| 14 | 94 | Total cost... > from the beginning to the current movement | `Cost to Current(` |  |  | — |  |
| 15 | 95 | Current movement > Direction | `Current Direction(` |  |  | — |  |
| 16 | 96 | Current movement > X coordinate | `Current X(` |  |  | — |  |
| 17 | 97 | Current movement > Y coordinate | `Current Y(` |  |  | — |  |
| 18 | 98 | Specified movement > Cost of movement | `Movement Cost(` |  | nombre « Index of movement » | — |  |
| 19 | 99 | Current movement > Cost of movement | `Current Cost(` |  |  | — |  |
