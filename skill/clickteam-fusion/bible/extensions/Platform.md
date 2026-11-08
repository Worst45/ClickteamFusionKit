# Extension Platform

- File: `Platform.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Collision testing (top of the event) > Test for obstacle overlap | `<object>: Test for obstacle overlap` |  |  |
| 1 | -82 | Collision testing (top of the event) > Test for jump through platform overlap | `<object>: Test for jump through platform overlap` |  |  |
| 2 | -83 | Object states > Object is standing on ground | `<object>: Object is standing on ground` |  |  |
| 3 | -84 | Object states > Object is jumping | `<object>: Object is jumping` |  |  |
| 4 | -85 | Object states > Object is falling | `<object>: Object is falling` |  |  |
| 5 | -86 | Movement is paused | `<object>: Movement is paused` |  |  |
| 6 | -87 | Object states > Object is moving | `<object>: Object is moving` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Collisions > Object does overlap with an obstacle | `Selected object overlaps an obstacle` |  |  |
| 1 | 81 | Collisions > Object does overlap with a jump through platform | `Selected object overlaps a jump through platform` |  |  |
| 2 | 82 | Set object | `Set object to <p0>` |  | object “Object” |
| 3 | 83 | On user input > User is holding right input key | `User is holding right input key` |  |  |
| 4 | 84 | On user input > User is holding left input key | `User is holding left input key` |  |  |
| 5 | 85 | On user input > Jump | `Jump` |  |  |
| 6 | 86 | Variables > Set X velocity | `Set X velocity to <p0>` |  | numeric expression “X velocity” |
| 7 | 87 | Variables > Set Y velocity | `Set Y velocity to <p0>` |  | numeric expression “Y velocity” |
| 8 | 88 | Variables > Set maximum X velocity | `Set maximum X velocity to <p0>` |  | numeric expression “Maximum X velocity” |
| 9 | 89 | Variables > Set maximum Y velocity | `Set maximum Y velocity to <p0>` |  | numeric expression “Maximum Y velocity” |
| 10 | 90 | Variables > Set X acceleration | `Set X acceleration to <p0>` |  | numeric expression “X acceleration” |
| 11 | 91 | Variables > Set X deceleration | `Set X deceleration to <p0>` |  | numeric expression “X deceleration” |
| 12 | 92 | Variables > Set gravity | `Set gravity to <p0>` |  | numeric expression “Gravity” |
| 13 | 93 | Variables > Set jump strength | `Set jump strength to <p0>` |  | numeric expression “Jump strength” |
| 14 | 94 | Variables > Set jump hold height | `Set jump hold height to <p0>` |  | numeric expression “Jump strength” |
| 15 | 95 | Variables > Set maximum step up (in whole pixels) | `Set maximum step up to <p0>` |  | numeric expression “Maximum step up (in pixels)” |
| 16 | 96 | On user input > User is holding jump in the air | `User is holding jump in the air` |  |  |
| 17 | 97 | Pause movement | `Pause movement` |  |  |
| 18 | 98 | Unpause movement | `Unpause movement` |  |  |
| 19 | 99 | Variables > Set downhill slope correction (in whole pixels) | `Set downhill slope correction to <p0>` |  | numeric expression “Downhill slope correction (in pixels)” |
| 20 | 100 | Variables > Set additional X velocity | `Set additional X velocity to <p0>` |  | numeric expression “Additional X velocity” |
| 21 | 101 | Variables > Set additional Y velocity | `Set additional Y velocity to <p0>` |  | numeric expression “Additional Y velocity” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get X velocity | `GetXVelocity(` |  |  |
| 1 | 81 | Get Y velocity | `GetYVelocity(` |  |  |
| 2 | 82 | Get maximum X velocity | `GetMaxXVelocity(` |  |  |
| 3 | 83 | Get maximum Y velocity | `GetMaxYVelocity(` |  |  |
| 4 | 84 | Get X acceleration | `GetXAccel(` |  |  |
| 5 | 85 | Get X deceleration | `GetXDecel(` |  |  |
| 6 | 86 | Get gravity | `GetGravity(` |  |  |
| 7 | 87 | Get jump strength | `GetJumpStrength(` |  |  |
| 8 | 88 | Get jump hold height | `GetJumpHoldHeight(` |  |  |
| 9 | 89 | Get maximum step up (in whole pixels) | `GetMaxStepUp(` |  |  |
| 10 | 90 | Get downhill slope correction (in whole pixels) | `GetSlopeCorrection(` |  |  |
| 11 | 91 | Get additional X velocity | `GetAddXVelocity(` |  |  |
| 12 | 92 | Get additional Y velocity | `GetAddYVelocity(` |  |  |
