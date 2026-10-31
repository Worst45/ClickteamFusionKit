# Extension ARCO2

- Fichier : `ARCO2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Before move | `<objet> Before moving the object` |  |  | — |  |
| 1 | -82 | After move | `<objet> After moving the object` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Set speed | `Set The Speed Of Car To <p0>` |  | expression numérique « Speed » | — |  |
| 1 | 81 | Settings > Set rotation Speed | `Set The Rotation Speed Of Car To <p0>` |  | expression numérique « Speed » | — |  |
| 2 | 82 | Settings > Set acceleration | `Set The Acceleration Of Car To <p0>` |  | expression numérique « Speed » | — |  |
| 3 | 83 | Settings > Set deceleration | `Set The Deceleration Of Car To <p0>` |  | expression numérique « Speed » | — |  |
| 4 | 84 | Settings > Select car object | `Set <p0> as the car` |  | objet « Select Object » | — |  |
| 5 | 85 | Step > Step forward | `Step forward` |  |  | — |  |
| 6 | 86 | Step > Step backward | `Step backward` |  |  | — |  |
| 7 | 87 | Rotation  > Rotate right | `Rotate Right` |  |  | — |  |
| 8 | 88 | Rotation  > Rotate left | `Rotate Left` |  |  | — |  |
| 9 | 89 | Custom > Step in amount | `Step <p0> pixels` |  | expression numérique « Amount » | — |  |
| 10 | 90 | Custom > Rotate in amount | `Rotate <p0> Deg` |  | expression numérique « Amount » | — |  |
| 11 | 91 | Custom > Set postion | `Set Postion (<p0>,<p1>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 12 | 92 | Custom > Set angle | `Set Angle To <p0> Deg` |  | expression numérique « Amount » | — |  |
| 13 | 93 | Custom > Set current speed | `Set current speed to <p0> pixels` |  | expression numérique « Speed » | — |  |
| 14 | 94 | Stop | `Stop` |  |  | — |  |
| 15 | 95 | Bounce | `Bounce with power <p0>` |  | expression numérique « Power of bouncing » | — |  |
| 16 | 96 | Custom > Step in angle | `Step in <p0> deg` |  | expression numérique « Angle » | — |  |
| 17 | 97 | Custom > Step in angle and amount | `Step <p1> pixels in <p0> deg` |  | expression numérique « Angle » ; expression numérique « Pixels » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get car X | `⡘` |  |  | — |  |
| 1 | 81 | Get car Y | `⡙` |  |  | — |  |
| 2 | 82 | Get car dir | `Dir(` |  |  | — |  |
| 3 | 83 | Get car angle | `angle(` |  |  | — |  |
| 4 | 84 | Get current speed | `cspeed(` |  |  | — |  |
| 5 | 85 | Settings > Get speed | `Speed(` |  |  | — |  |
| 6 | 86 | Settings > Get rotation speed | `RSpeed(` |  |  | — |  |
| 7 | 87 | Settings > Get acceleration | `Acc(` |  |  | — |  |
| 8 | 88 | Settings > Get deceleration | `Dec(` |  |  | — |  |
