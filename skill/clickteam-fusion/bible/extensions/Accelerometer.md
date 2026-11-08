# Extension Accelerometer

- File: `Accelerometer.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Device orientation changed | `Device orientation changed` | Changement d'orientation |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Direct values > X acceleration | `XDirect(` | Accélération X |  |
| 1 | 81 | Direct values > Y acceleration | `YDirect(` | Accélération Y |  |
| 2 | 82 | Direct values > Z acceleration | `ZDirect(` | Accélération Z |  |
| 3 | 83 | Gravity isolated values > X acceleration | `XGravity(` | Accélération X |  |
| 4 | 84 | Gravity isolated values > Y acceleration | `YGravity(` | Accélération Y |  |
| 5 | 85 | Gravity isolated values > Z acceleration | `ZGravity(` | Accélération Z |  |
| 6 | 86 | Instantaneous values > X acceleration | `XInstant(` | Accélération X |  |
| 7 | 87 | Instantaneous values > Y acceleration | `YInstant(` | Accélération Y |  |
| 8 | 88 | Instantaneous values > Z acceleration | `ZInstant(` | Accélération Z |  |
| 9 | 89 | Device orientation | `Orientation(` | Orientation |  |
