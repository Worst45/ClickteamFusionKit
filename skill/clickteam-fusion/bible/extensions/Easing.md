# Extension Easing

- Fichier : `Easing.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Any object stopped moving? | `<objet>: Any object stopped moving` |  |  | — |  |
| 1 | -82 | Object stopped moving? | `<objet>: Object stopped moving: <p0>` |  | objet « Select object to test » | — |  |
| 2 | -83 | Is object moving? | `<objet>: If <p0> is moving` |  | objet « Select object to test » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Move object | `Move <p0> using <p1> to [<p2>,<p3>] over <p5> <p4>` |  | objet « Select object to move » (paramètres non fiables) | — |  |
| 1 | 81 | Stop object | `Stop <p0>` |  | objet « Select object to stop » | — |  |
| 2 | 82 | Stop all objects | `Stop all objects` |  |  | — |  |
| 3 | 83 | Reverse object | `Reverse movement of <p0>` |  | objet « Select object to move » | — |  |
| 4 | 84 | Default parameters > Set default amplitude | `Set default amplitude = <p0>` |  | expression numérique « Set amplitude value (Default = 1.0) » | — |  |
| 5 | 85 | Default parameters > Set default overshoot | `Set default overshoot = <p0>` |  | expression numérique « Set overshoot value (Default = 1.5) » | — |  |
| 6 | 86 | Default parameters > Set default period | `Set default period = <p0>` |  | expression numérique « Set period value (Default = 0.4) » | — |  |
| 7 | 87 | Object parameters > Set amplitude of object | `Set amplitude of <p0> to <p1>` |  | objet « Select obejct » ; expression numérique « Set amplitude value (Default = 1.0) » | — |  |
| 8 | 88 | Object parameters > Set overshoot of object | `Set overshoot of <p0> to <p1>` |  | objet « Select obejct » ; expression numérique « Set overshoot value (Default = 1.5) » | — |  |
| 9 | 89 | Object parameters > Set period of object | `Set period of <p0> to <p1>` |  | objet « Select obejct » ; expression numérique « Set period value (Default = 0.4) » | — |  |
| 10 | 90 | Move object (nummeric parameters) | `Move <p0> using mode=<p1> functionA=<p2> functionB=<p3> to [<p4>,<p5>] using time-mode <p6> over <p7> time units` |  | expression numérique « Fixed value of the object to move » ; expression numérique « Easing mode (0=In, 1=Out, 2=InOut, 3=OutIn) » ; expression numérique « First function: (0=Linear, 1=quadratic, 2=cubic, 3=quint, 4=sine, ... ) » ; expression numérique « Second function: (0=Linear, 1=quadratic, 2=cubic, 3=quint, 4=sine, ... ) » ; expression numérique « Enter target X coordinate » ; expression numérique « Enter target Y coordinate » ; expression numérique « Time mode (0=milliseconds, 1=event loops) » ; expression numérique « Time » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of controlled objects | `GetNumControlled(` |  |  | — |  |
| 1 | 81 | Get fixed value of recently stopped object | `GetStoppedFixed(` |  |  | — |  |
| 2 | 82 | Easing value [0..1] > Ease-In (function, step) | `EaseIn(` |  | nombre « function » ; nombre « step » | — |  |
| 3 | 83 | Easing value [0..1] > Ease-Out (function, step) | `EaseOut(` |  | nombre « function » ; nombre « step » | — |  |
| 4 | 84 | Easing value [0..1] > Ease-InOut (functionA, functionB, step) | `EaseInOut(` |  | nombre « function A » ; nombre « function B » ; nombre « step » | — |  |
| 5 | 85 | Easing value [0..1] > Ease-OutIn (functionA, functionB, step) | `EaseOutIn(` |  | nombre « function A » ; nombre « function B » ; nombre « step » | — |  |
| 6 | 86 | Between two values > Ease-In (valueA, valueB, function, step) | `EaseInBetween(` |  | nombre « value A » ; nombre « value B » ; nombre « function » ; nombre « step » | — |  |
| 7 | 87 | Between two values > Ease-Out (valueA, valueB, function, step) | `EaseOutBetween(` |  | nombre « value A » ; nombre « value B » ; nombre « function » ; nombre « step » | — |  |
| 8 | 88 | Between two values > Ease-InOut (valueA, valueB, functionA, functionB, step) | `EaseInOutBetween(` |  | nombre « value A » ; nombre « value B » ; nombre « function A » ; nombre « function B » ; nombre « step » | — |  |
| 9 | 89 | Between two values > Ease-OutIn (valueA, valueB, functionA, functionB, step) | `EaseOutInBetween(` |  | nombre « value A » ; nombre « value B » ; nombre « function A » ; nombre « function B » ; nombre « step » | — |  |
| 10 | 90 | Parameters of object > Get amplitude of object | `GetObjectAmplitude(` |  | nombre « fixed value » | — |  |
| 11 | 91 | Parameters of object > Get overshoot of object | `GetObjectOvershoot(` |  | nombre « fixed value » | — |  |
| 12 | 92 | Parameters of object > Get period of object | `GetObjectPeriod(` |  | nombre « fixed value » | — |  |
| 13 | 93 | Default parameters > Get default amplitude | `GetDefaultAmplitude(` |  |  | — |  |
| 14 | 94 | Default parameters > Get default overshoot | `GetDefaultOvershoot(` |  |  | — |  |
| 15 | 95 | Default parameters > Get default period | `GetDefaultPeriod(` |  |  | — |  |
