# Extension MultipleTouch

- File: `MultipleTouch.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 1 | -82 | Touch > A touch has been released (number) | `<object>: A touch has ended, number <p0>` | <object>: Une touche s'est terminée, numéro <p0> | numeric expression “Enter the number of the touch (0 based)” | — |  |
| 2 | -83 | Touch > A new touch has started | `<object>: A new touch has occured` | <object>: Une nouvelle touche a commencé |  | — |  |
| 3 | -84 | Touch > A touch has been released | `<object>: A touch has ended` | <object>: Une touche s'est terminée |  | — |  |
| 4 | -85 | Touch > A touch has moved (number) | `<object>: A touch has moved, number <p0>` | <object>: Une touche a bougé, numéro <p0> | numeric expression “Enter the number of the touch (0 based)” | — |  |
| 5 | -86 | Touch > A touch is active (number) | `<object>: Touch <p0> is active` | <object>: La touche <p0> est active | numeric expression “Enter the number of the touch (0 based)” | — |  |
| 6 | -87 | Touch > A new touch on an object has started | `<object>: A new touch on object <p0> has started` | <object>: Une nouvelle touche sur l'objet <p0> a commencé | object “Please choose the object” | — |  |
| 7 | -88 | Touch > A touch on an object is active (number) | `<object>: Touch <p0> is active on object <p1>` | <object>: La touche <p0> est active sur l'objet <p1> | numeric expression “Enter the number of the touch (0 based)”; object “Please choose the object” | — |  |
| 8 | -89 | Pinch > A new pinch has started | `<object>: A new pinch has started` | <object>: Un nouveau pincement a commencé |  | — |  |
| 9 | -90 | Pinch > A pinch is active | `<object>: A pinch is active` | <object>: Un pincement est actif |  | — |  |
| 10 | -91 | Gesture recognition > A new gesture has been recognised | `<object>: A new gesture has been recognised` | <object>: Un nouveau geste vient d'être reconnu |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Touch > Set drag X origin | `Set drag X origin of touch <p0> to <p1>` | Fixer l'origine en X du tirer-déplacer de la touche <p0> à <p1> | numeric expression “Enter the number of the touch (0 based)”; numeric expression “Enter the new coordinate” | — |  |
| 1 | 81 | Touch > Set drag Y origin | `Set drag Y origin of touch <p0> to <p1>` | Fixer l'origine en Y du tirer-déplacer de la touche <p0> à <p1> | numeric expression “Enter the number of the touch (0 based)”; numeric expression “Enter the new coordinate” | — |  |
| 2 | 82 | Gesture recognition > Recognize | `Recognise gesture, number of touches <p0>` | Reconnaître un geste, nombre de touches <p0> | numeric expression “Enter the number of touches to recognise (depth)” | — |  |
| 3 | 83 | Gesture recognition > Set recognition ON/OFF | `Set recognition to <p0>, touches recorded <p1>` | Fixer la reconnaissance à <p0>, touches enregistrées <p1> | numeric expression “Enter 1 to turn ON, 0 to turn OFF”; numeric expression “Enter the number of touches to recognise (depth)” | — |  |
| 4 | 84 | Gesture recognition > Set recognition zone | `Set recognition zone to <p0>` | Fixer la zone de reconnaissance à <p0> | zone “Enter the recognition zone” | — |  |
| 5 | 85 | Gesture recognition > Set recognition zone (coordinates) | `Set recognition zone to (<p0>, <p1>), width <p2>, height <p3>` | Fixer la zone de reconnaissance à (<p0>, <p1>), largeur <p2>, hauteur <p3> | numeric expression “Enter the recognition zone X coordinate”; numeric expression “Enter the recognition zone Y coordinate”; numeric expression “Enter the recognition zone width”; numeric expression “Enter the recognition zone height” | — |  |
| 6 | 86 | Gesture recognition > Load gesture definition file | `Load gesture definition file <p0>` | Charger le fichier de définition de gestes <p0> | file name | — |  |
| 7 | 87 | Gesture recognition > Recognize specific gesture | `Recognise gesture <p0>, number of touches <p1>` | Reconnaître geste <p0>, nombre de touches <p1> | string expression “Enter the name of the gesture”; numeric expression “Enter the number of touches to recognise (depth)” | — |  |
| 8 | 88 | Gesture recognition > Clear gestures | `Clear gestures` | Effacer les gestes |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Touch > Get number of touches | `Number(` | Nombre de touches |  | — |  |
| 1 | 81 | Touch > Get last touch | `LastTouch(` | Dernière touche |  | — |  |
| 2 | 82 | Touch > Get touch X | `XTouch(` | X touche | number “Number of the touch (0 based)” | — |  |
| 3 | 83 | Touch > Get touch Y | `YTouch(` | Y touche | number “Number of the touch (0 based)” | — |  |
| 4 | 84 | Touch > Get last new touch | `LastNewTouch(` | Dernière nouvelle touche |  | — |  |
| 5 | 85 | Touch > Get last end touch | `LastEndTouch(` | Dernière touche terminée |  | — |  |
| 6 | 86 | Drag > Get X origin | `XTouchOrigin(` | X origine | number “Number of the touch (0 based)” | — |  |
| 7 | 87 | Drag > Get Y origin | `YTouchOrigin(` | Y origine | number “Number of the touch (0 based)” | — |  |
| 8 | 88 | Drag > Get X delta | `XTouchDelta(` | Delta X | number “Number of the touch (0 based)” | — |  |
| 9 | 89 | Drag > Get Y delta | `YTouchDelta(` | Delta Y | number “Number of the touch (0 based)” | — |  |
| 10 | 90 | Drag > Get angle | `AngleTouch(` | Angle | number “Number of the touch (0 based)” | — |  |
| 11 | 91 | Drag > Get distance | `DistanceTouch(` | Distance | number “Number of the touch (0 based)” | — |  |
| 12 | 92 | Pinch > Get pinch distance | `pinchDistance(` | Distance du pincement |  | — |  |
| 13 | 93 | Pinch > Get pinch angle | `pinchAngle(` | Angle du pincement |  | — |  |
| 14 | 94 | Pinch > Get pinch percentage | `pinchPercent(` | Pourcentage du pincement |  | — |  |
| 15 | 95 | Gesture recognition > Get recognised gesture name | `RecName$(` | Nom du geste reconnu | → string | — |  |
| 16 | 96 | Gesture recognition > Get recognised gesture percentage | `RecPercent(` | Pourcentage de reconnaissance |  | — |  |
