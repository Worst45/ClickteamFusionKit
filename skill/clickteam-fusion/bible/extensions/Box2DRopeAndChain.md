# Extension Box2DRopeAndChain

- Fichier : `Box2DRopeAndChain.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On each element | `<objet>: On each element, loop name <p0>` | <objet>: Pour chaque élément, nom de boucle <p0> | expression chaîne « Please enter the name of the loop » | — |  |
| 1 | -82 | An element collides > With another object | `<objet>: An element collides with <p0>` | <objet>: Un élément entre en collision avec <p0> | objet « Please choose the object to test » | — |  |
| 2 | -83 | An element leaves the frame > On the left | `<objet>: An element leaves the frame on the left` | <objet>: Un élément sort du terrain à gauche |  | — |  |
| 3 | -84 | An element leaves the frame > On the right | `<objet>: An element leaves the frame on the right` | <objet>: Un élément sort du terrain à droite |  | — |  |
| 4 | -85 | An element leaves the frame > On the top | `<objet>: An element leaves the frame on the top` | <objet>: Un élément sort du terrain en haut |  | — |  |
| 5 | -86 | An element leaves the frame > On the bottom | `<objet>: An element leaves the frame on the bottom` | <objet>: Un élément sort du terrain en bas |  | — |  |
| 7 | -88 | An element collides > With a backdrop | `<objet>: An element collides with a backdrop` | <objet>: Un élément entre en collision avec un décor |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | For each element > Start loop | `For each element, loop name <p0>` | Pour chaque élément, nom de boucle <p0> | expression chaîne « Please enter the name of the loop » | — |  |
| 1 | 81 | Stop | `Stop` | Stop |  | — |  |
| 2 | 82 | Climbing > Climb up one element | `Make <p0> climb up one element` | Faire grimper <p0> de un élément | objet « Please choose the object that climbs » | — |  |
| 3 | 83 | Climbing > Climb down one element | `Make <p0> climb down one element` | Faire descendre <p0> de un élément | objet « Please choose the object that climbs » | — |  |
| 4 | 84 | Climbing > Attach to rope at current element | `Attach <p0> to rope at current element, at distance <p1>` | Attacher <p0> à la corde à l'élément courant, à la distance <p1> | objet « Please choose the object to attach » ; expression numérique « Enter the horizontal distance to the element » | — |  |
| 5 | 85 | Climbing > Detach from rope | `Detach <p0> from rope` | Détacher <p0> de la corde | objet « Please choose the object to detach » | — |  |
| 6 | 86 | For each element > Stop loop | `Stop loop` | Quitter la boucle |  | — |  |
| 7 | 87 | Cut the rope | `Cut the rope at element <p0>` | Couper la corde à l'élément <p0> | expression numérique « Enter the index of the element to cut... » | — |  |
| 8 | 88 | Climbing > Attach to rope at a given element (at action point) | `Attach <p0> to rope at element <p1>, at action point` | Attacher <p0> à la corde, élément <p1> au point d'action | objet « Please choose the object to attach » ; expression numérique « Enter the number of the element » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Loop index | `RCLoopIndex(` | Index de boucle |  | — |  |
| 1 | 81 | Coordinates > X coordinate of element | `RCX1(` | Coordonnée X de l'élément | nombre « Element number » | — |  |
| 2 | 82 | Coordinates > Y coordinate of element | `RCY1(` | Coordonnée Y de l'élément | nombre « Element number » | — |  |
| 3 | 83 | Coordinates > X coordinate of end of element | `RCX2(` | Coordonnée X de la fin de l'élément | nombre « Element number » | — |  |
| 4 | 84 | Coordinates > Y coordinate of end of element | `RCY2(` | Coordonnée Y de la fin de l'élément | nombre « Element number » | — |  |
| 5 | 85 | Coordinates > X coordinate of middle of element | `RCXMiddle(` | Coordonnée X du milieu de l'élément | nombre « Element number » | — |  |
| 6 | 86 | Coordinates > Y coordinate of middle of element | `RCYMiddle(` | Coordonnée Y du milieu de l'élément | nombre « Element number » | — |  |
| 7 | 87 | Angle of element | `RCAngle(` | Angle de l'élément | nombre « Element number » | — |  |
| 8 | 88 | Current element index | `RCElement(` | Index de l'élément courant |  | — |  |
