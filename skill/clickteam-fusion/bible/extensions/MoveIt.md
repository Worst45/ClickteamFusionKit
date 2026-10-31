# Extension MoveIt

- Fichier : `MoveIt.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Object finished moving | `<objet>: Object finished moving` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move objects > Move objects in queue with speed | `Move objects to target <p0>, <p1> with speed <p2>` |  | expression numérique « Target X » ; expression numérique « Target Y » ; expression numérique « Speed » | — |  |
| 1 | 81 | Move objects > Move objects in queue with time | `Move objects to target <p0>, <p1>   in <p2>  event cycles` |  | expression numérique « Target X » ; expression numérique « Target Y » ; expression numérique « Time -  event cycles ( 50 event cycles = 1 sec depending on framerate ) » | — |  |
| 2 | 82 | Stop movement of objects > Stop movement by using fixed value | `Stop movement for object with fixed value <p0>` |  | expression numérique « Fixed value » | — |  |
| 3 | 83 | Stop movement of objects > Stop movement by using index value | `Stop movement for object with index value <p0>` |  | expression numérique « Index value » | — |  |
| 4 | 84 | Stop movement of objects > Stop movement by using selector | `Stop movement for objects <p0>` |  | objet « Object » | — |  |
| 5 | 85 | Move objects > Add objects to queue | `Add objects <p0> to queue` |  | objet « Select an object » | — |  |
| 6 | 86 | Move objects > Clear queue | `Clear queue` |  |  | — |  |
| 7 | 87 | Stop movement of objects > Stop all | `Stop all` |  |  | — |  |
| 8 | 88 | Force movement update | `Force movement update` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of objects moving | `GetNumMoving(` |  |  | — |  |
| 1 | 81 | From fixed value > Get index value | `GetFixed(` |  | nombre | — |  |
| 2 | 82 | From fixed value > Get total distance for object | `GetDistance(` |  | nombre | — |  |
| 3 | 83 | From fixed value > Get remaining distance for object | `GetRemaining(` |  | nombre | — |  |
| 4 | 84 | From fixed value > Get angle of object | `GetAngle(` |  | nombre | — |  |
| 5 | 85 | From fixed value > Get direction of object | `GetDirection(` |  | nombre | — |  |
| 6 | 86 | From index > Get fixed value | `IndexFixed(` |  | nombre | — |  |
| 7 | 87 | From index > Get total distance | `IndexTotalDistance(` |  | nombre | — |  |
| 8 | 88 | From index > Get remaining distance | `IndexRemainingDistance(` |  | nombre | — |  |
| 9 | 89 | From index > Get angle | `IndexAngle(` |  | nombre | — |  |
| 10 | 90 | From index > Get direction | `IndexDir(` |  | nombre | — |  |
| 11 | 91 | On object stopped moving > Get fixed value | `OnStoppedFixed(` |  |  | — |  |
