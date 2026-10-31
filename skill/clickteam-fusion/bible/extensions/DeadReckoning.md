# Extension DeadReckoning

- Fichier : `DeadReckoning.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add object | `Add object: <p0>` |  | objet « Object to add » | — |  |
| 1 | 81 | Remove object | `Remove object: <p0>` |  | objet « Object to remove » | — |  |
| 2 | 82 | Update position | `Update position of <p0> to: <p1>, <p2>` |  | objet « Object to update » ; expression numérique « X-coordinate » ; expression numérique « Y-coordinate » | — |  |
| 3 | 83 | Update X | `Update X of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « X-coordinate » | — |  |
| 4 | 84 | Update Y | `Update Y of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Y-coordinate » | — |  |
| 5 | 85 | Update direction | `Update direction of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Direction » | — |  |
| 6 | 86 | Update angle | `Update angle of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Angle » | — |  |
| 7 | 87 | Movement hints > Set X position | `Set X of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « X-coordinate » | — |  |
| 8 | 88 | Movement hints > Set Y position | `Set Y of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Y-coordinate » | — |  |
| 9 | 89 | Movement hints > Set direction | `Set direction of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Direction » | — |  |
| 10 | 90 | Movement hints > Set angle | `Set angle of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Angle » | — |  |
| 11 | 91 | Movement hints > Set X speed | `Set X speed of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « X speed » | — |  |
| 12 | 92 | Movement hints > Set Y speed | `Set Y speed of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Y speed » | — |  |
| 13 | 93 | Movement hints > Set direction speed | `Set direction speed of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Direction speed » | — |  |
| 14 | 94 | Movement hints > Set angle speed | `Set angle speed of <p0> to: <p1>` |  | objet « Object to update » ; expression numérique « Angle speed » | — |  |
| 15 | 95 | Movement hints > Object was stopped | `<p0> was stopped` |  | objet « Object that was stopped » | — |  |
| 16 | 96 | Movement hints > Object bounced | `<p0> bounced` |  | objet « Object that bounced » | — |  |
| 17 | 97 | Object options > All variables > Set extrapolation mode | `Set extrapolation mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Linear, 1 = Cubic » | — |  |
| 18 | 98 | Object options > All variables > Use acceleration? | `Set acceleration mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Off, 1 = On » | — |  |
| 19 | 99 | Object options > All variables > Set smoothing | `Set movement smoothing of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « Smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind) » | — |  |
| 20 | 100 | Object options > X movement > Set extrapolation mode | `Set X movement extrapolation mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Linear, 1 = Cubic » | — |  |
| 21 | 101 | Object options > X movement > Use acceleration? | `Set X movement acceleration mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Off, 1 = On » | — |  |
| 22 | 102 | Object options > X movement > Set smoothing | `Set X movement smoothing of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « X smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind) » | — |  |
| 23 | 103 | Object options > Y movement > Set extrapolation mode | `Set Y movement extrapolation mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Linear, 1 = Cubic » | — |  |
| 24 | 104 | Object options > Y movement > Use acceleration? | `Set Y movement acceleration mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Off, 1 = On » | — |  |
| 25 | 105 | Object options > Y movement > Set smoothing | `Set Y movement smoothing of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « Y smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind) » | — |  |
| 26 | 106 | Object options > Direction changing > Set extrapolation mode | `Set direction extrapolation mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Linear, 1 = Cubic » | — |  |
| 27 | 107 | Object options > Direction changing > Use acceleration? | `Set direction acceleration mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Off, 1 = On » | — |  |
| 28 | 108 | Object options > Direction changing > Set smoothing | `Set direction smoothing of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « Direction smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind) » | — |  |
| 29 | 109 | Object options > Angle changing > Set extrapolation mode | `Set angle extrapolation mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Linear, 1 = Cubic » | — |  |
| 30 | 110 | Object options > Angle changing > Use acceleration? | `Set angle acceleration mode of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « 0 = Off, 1 = On » | — |  |
| 31 | 111 | Object options > Angle changing > Set smoothing | `Set angle smoothing of <p0> to: <p1>` |  | objet « Select an object... » ; expression numérique « Angle smoothing amount.  0 = Off,  5.0 = heavy smoothing (but will lag behind) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number  of controlled objects | `NumObjects(` |  |  | — |  |
| 1 | 81 | Predicted X of object | `PredictedX(` |  | nombre « Fixed value of the object » | — |  |
| 2 | 82 | Predicted Y of object | `PredictedY(` |  | nombre « Fixed value of the object » | — |  |
| 3 | 83 | Predicted direction of object | `PredictedDirection(` |  | nombre « Fixed value of the object » | — |  |
| 4 | 84 | Predicted angle of object | `PredictedAngle(` |  | nombre « Fixed value of the object » | — |  |
| 5 | 85 | X speed of object | `XSpeed(` |  | nombre « Fixed value of the object » | — |  |
| 6 | 86 | Y speed of object | `YSpeed(` |  | nombre « Fixed value of the object » | — |  |
| 7 | 87 | Direction speed of object | `DirectionSpeed(` |  | nombre « Fixed value of the object » | — |  |
| 8 | 88 | Angle speed of object | `AngleSpeed(` |  | nombre « Fixed value of the object » | — |  |
| 9 | 89 | X movement smoothing of object | `XSmoothing(` |  | nombre « Fixed value of the object » | — |  |
| 10 | 90 | Y movement smoothing of object | `YSmoothing(` |  | nombre « Fixed value of the object » | — |  |
| 11 | 91 | Direction smoothing of object | `DirSmoothing(` |  | nombre « Fixed value of the object » | — |  |
| 12 | 92 | Angle smoothing of object | `AngleSmoothing(` |  | nombre « Fixed value of the object » | — |  |
| 13 | 93 | Current moved speed of object | `MovedSpeed(` |  | nombre « Fixed value of the object » | — |  |
| 14 | 94 | Current moved direction of object | `MovedDirection(` |  | nombre « Fixed value of the object » | — |  |
| 15 | 95 | Current moved angle of object | `MovedAngle(` |  | nombre « Fixed value of the object » | — |  |
