# Extension Accelerometer

- Fichier : `Accelerometer.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Device orientation changed | `Device orientation changed` | Changement d'orientation |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Direct values > X acceleration | `XDirect(` | Accélération X |  | — |  |
| 1 | 81 | Direct values > Y acceleration | `YDirect(` | Accélération Y |  | — |  |
| 2 | 82 | Direct values > Z acceleration | `ZDirect(` | Accélération Z |  | — |  |
| 3 | 83 | Gravity isolated values > X acceleration | `XGravity(` | Accélération X |  | — |  |
| 4 | 84 | Gravity isolated values > Y acceleration | `YGravity(` | Accélération Y |  | — |  |
| 5 | 85 | Gravity isolated values > Z acceleration | `ZGravity(` | Accélération Z |  | — |  |
| 6 | 86 | Instantaneous values > X acceleration | `XInstant(` | Accélération X |  | — |  |
| 7 | 87 | Instantaneous values > Y acceleration | `YInstant(` | Accélération Y |  | — |  |
| 8 | 88 | Instantaneous values > Z acceleration | `ZInstant(` | Accélération Z |  | — |  |
| 9 | 89 | Device orientation | `Orientation(` | Orientation |  | — |  |
