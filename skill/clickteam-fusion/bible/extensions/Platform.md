# Extension Platform

- Fichier : `Platform.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Platform Movement object »
- Usage dans le corpus : 171 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Collision testing (top of the event) > Test for obstacle overlap | `<objet>: Test for obstacle overlap` |  |  | 13 (8 proj.) |  |
| 1 | -82 | Collision testing (top of the event) > Test for jump through platform overlap | `<objet>: Test for jump through platform overlap` |  |  | 6 (3 proj.) |  |
| 2 | -83 | Object states > Object is standing on ground | `<objet>: Object is standing on ground` |  |  | 22 (8 proj.) |  |
| 3 | -84 | Object states > Object is jumping | `<objet>: Object is jumping` |  |  | 16 (8 proj.) |  |
| 4 | -85 | Object states > Object is falling | `<objet>: Object is falling` |  |  | 5 (5 proj.) |  |
| 5 | -86 | Movement is paused | `<objet>: Movement is paused` |  |  | — |  |
| 6 | -87 | Object states > Object is moving | `<objet>: Object is moving` |  |  | 5 (5 proj.) |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Collisions > Object does overlap with an obstacle | `Selected object overlaps an obstacle` |  |  | 22 (8 proj.) |  |
| 1 | 81 | Collisions > Object does overlap with a jump through platform | `Selected object overlaps a jump through platform` |  |  | 6 (3 proj.) |  |
| 2 | 82 | Set object | `Set object to <p0>` |  | objet « Object » | 8 (8 proj.) |  |
| 3 | 83 | On user input > User is holding right input key | `User is holding right input key` |  |  | 5 (5 proj.) |  |
| 4 | 84 | On user input > User is holding left input key | `User is holding left input key` |  |  | 5 (5 proj.) |  |
| 5 | 85 | On user input > Jump | `Jump` |  |  | 13 (8 proj.) |  |
| 6 | 86 | Variables > Set X velocity | `Set X velocity to <p0>` |  | expression numérique « X velocity » | — |  |
| 7 | 87 | Variables > Set Y velocity | `Set Y velocity to <p0>` |  | expression numérique « Y velocity » | 11 (3 proj.) |  |
| 8 | 88 | Variables > Set maximum X velocity | `Set maximum X velocity to <p0>` |  | expression numérique « Maximum X velocity » | — |  |
| 9 | 89 | Variables > Set maximum Y velocity | `Set maximum Y velocity to <p0>` |  | expression numérique « Maximum Y velocity » | — |  |
| 10 | 90 | Variables > Set X acceleration | `Set X acceleration to <p0>` |  | expression numérique « X acceleration » | — |  |
| 11 | 91 | Variables > Set X deceleration | `Set X deceleration to <p0>` |  | expression numérique « X deceleration » | — |  |
| 12 | 92 | Variables > Set gravity | `Set gravity to <p0>` |  | expression numérique « Gravity » | 6 (3 proj.) |  |
| 13 | 93 | Variables > Set jump strength | `Set jump strength to <p0>` |  | expression numérique « Jump strength » | — |  |
| 14 | 94 | Variables > Set jump hold height | `Set jump hold height to <p0>` |  | expression numérique « Jump strength » | — |  |
| 15 | 95 | Variables > Set maximum step up (in whole pixels) | `Set maximum step up to <p0>` |  | expression numérique « Maximum step up (in pixels) » | — |  |
| 16 | 96 | On user input > User is holding jump in the air | `User is holding jump in the air` |  |  | 7 (7 proj.) |  |
| 17 | 97 | Pause movement | `Pause movement` |  |  | 4 (2 proj.) |  |
| 18 | 98 | Unpause movement | `Unpause movement` |  |  | 2 (2 proj.) |  |
| 19 | 99 | Variables > Set downhill slope correction (in whole pixels) | `Set downhill slope correction to <p0>` |  | expression numérique « Downhill slope correction (in pixels) » | — |  |
| 20 | 100 | Variables > Set additional X velocity | `Set additional X velocity to <p0>` |  | expression numérique « Additional X velocity » | 12 (3 proj.) |  |
| 21 | 101 | Variables > Set additional Y velocity | `Set additional Y velocity to <p0>` |  | expression numérique « Additional Y velocity » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X velocity | `GetXVelocity(` |  |  | — |  |
| 1 | 81 | Get Y velocity | `GetYVelocity(` |  |  | — |  |
| 2 | 82 | Get maximum X velocity | `GetMaxXVelocity(` |  |  | — |  |
| 3 | 83 | Get maximum Y velocity | `GetMaxYVelocity(` |  |  | — |  |
| 4 | 84 | Get X acceleration | `GetXAccel(` |  |  | — |  |
| 5 | 85 | Get X deceleration | `GetXDecel(` |  |  | — |  |
| 6 | 86 | Get gravity | `GetGravity(` |  |  | 3 (3 proj.) |  |
| 7 | 87 | Get jump strength | `GetJumpStrength(` |  |  | — |  |
| 8 | 88 | Get jump hold height | `GetJumpHoldHeight(` |  |  | — |  |
| 9 | 89 | Get maximum step up (in whole pixels) | `GetMaxStepUp(` |  |  | — |  |
| 10 | 90 | Get downhill slope correction (in whole pixels) | `GetSlopeCorrection(` |  |  | — |  |
| 11 | 91 | Get additional X velocity | `GetAddXVelocity(` |  |  | — |  |
| 12 | 92 | Get additional Y velocity | `GetAddYVelocity(` |  |  | — |  |
