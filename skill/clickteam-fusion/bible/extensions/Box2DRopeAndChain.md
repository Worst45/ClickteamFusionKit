# Extension Box2DRopeAndChain

- File: `Box2DRopeAndChain.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On each element | `<object>: On each element, loop name <p0>` | <object>: Pour chaque élément, nom de boucle <p0> | string expression “Please enter the name of the loop” | — |  |
| 1 | -82 | An element collides > With another object | `<object>: An element collides with <p0>` | <object>: Un élément entre en collision avec <p0> | object “Please choose the object to test” | — |  |
| 2 | -83 | An element leaves the frame > On the left | `<object>: An element leaves the frame on the left` | <object>: Un élément sort du terrain à gauche |  | — |  |
| 3 | -84 | An element leaves the frame > On the right | `<object>: An element leaves the frame on the right` | <object>: Un élément sort du terrain à droite |  | — |  |
| 4 | -85 | An element leaves the frame > On the top | `<object>: An element leaves the frame on the top` | <object>: Un élément sort du terrain en haut |  | — |  |
| 5 | -86 | An element leaves the frame > On the bottom | `<object>: An element leaves the frame on the bottom` | <object>: Un élément sort du terrain en bas |  | — |  |
| 7 | -88 | An element collides > With a backdrop | `<object>: An element collides with a backdrop` | <object>: Un élément entre en collision avec un décor |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | For each element > Start loop | `For each element, loop name <p0>` | Pour chaque élément, nom de boucle <p0> | string expression “Please enter the name of the loop” | — |  |
| 1 | 81 | Stop | `Stop` | Stop |  | — |  |
| 2 | 82 | Climbing > Climb up one element | `Make <p0> climb up one element` | Faire grimper <p0> de un élément | object “Please choose the object that climbs” | — |  |
| 3 | 83 | Climbing > Climb down one element | `Make <p0> climb down one element` | Faire descendre <p0> de un élément | object “Please choose the object that climbs” | — |  |
| 4 | 84 | Climbing > Attach to rope at current element | `Attach <p0> to rope at current element, at distance <p1>` | Attacher <p0> à la corde à l'élément courant, à la distance <p1> | object “Please choose the object to attach”; numeric expression “Enter the horizontal distance to the element” | — |  |
| 5 | 85 | Climbing > Detach from rope | `Detach <p0> from rope` | Détacher <p0> de la corde | object “Please choose the object to detach” | — |  |
| 6 | 86 | For each element > Stop loop | `Stop loop` | Quitter la boucle |  | — |  |
| 7 | 87 | Cut the rope | `Cut the rope at element <p0>` | Couper la corde à l'élément <p0> | numeric expression “Enter the index of the element to cut...” | — |  |
| 8 | 88 | Climbing > Attach to rope at a given element (at action point) | `Attach <p0> to rope at element <p1>, at action point` | Attacher <p0> à la corde, élément <p1> au point d'action | object “Please choose the object to attach”; numeric expression “Enter the number of the element” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Loop index | `RCLoopIndex(` | Index de boucle |  | — |  |
| 1 | 81 | Coordinates > X coordinate of element | `RCX1(` | Coordonnée X de l'élément | number “Element number” | — |  |
| 2 | 82 | Coordinates > Y coordinate of element | `RCY1(` | Coordonnée Y de l'élément | number “Element number” | — |  |
| 3 | 83 | Coordinates > X coordinate of end of element | `RCX2(` | Coordonnée X de la fin de l'élément | number “Element number” | — |  |
| 4 | 84 | Coordinates > Y coordinate of end of element | `RCY2(` | Coordonnée Y de la fin de l'élément | number “Element number” | — |  |
| 5 | 85 | Coordinates > X coordinate of middle of element | `RCXMiddle(` | Coordonnée X du milieu de l'élément | number “Element number” | — |  |
| 6 | 86 | Coordinates > Y coordinate of middle of element | `RCYMiddle(` | Coordonnée Y du milieu de l'élément | number “Element number” | — |  |
| 7 | 87 | Angle of element | `RCAngle(` | Angle de l'élément | number “Element number” | — |  |
| 8 | 88 | Current element index | `RCElement(` | Index de l'élément courant |  | — |  |
