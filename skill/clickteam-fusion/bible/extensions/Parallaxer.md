# Extension Parallaxer

- Fichier : `Parallaxer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Parallaxer »
- Usage dans le corpus : 32 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set offset | `Set offset = <p0>` |  | expression numérique « Set offset value » | 12 (1 proj.) |  |
| 1 | 81 | Set width | `Set width to: <p0>` |  | expression numérique « Enter a new width in pixels: » | — |  |
| 2 | 82 | Set height | `Set height to: <p0>` |  | expression numérique « Enter a new height in pixels: » | — |  |
| 3 | 83 | Resampling > On | `Set resampling: on` |  |  | — |  |
| 4 | 84 | Resampling > Off | `Set resampling: off` |  |  | — |  |
| 5 | 85 | Set Z-Length | `Set Z-Length to: <p0>` |  | expression numérique « Enter the length of the line at the observers position. (# pixels) » | — |  |
| 6 | 86 | Load image | `Load image: <p0> append = <p1>` |  | nom de fichier « Enter a filename for an image file » ; expression numérique « 0 = Replace all images, 1 = Add frame to end of animation » | — |  |
| 7 | 87 | Set animation frame | `Set animation frame = <p0>` |  | expression numérique « Animation frame » | 4 (1 proj.) |  |
| 8 | 88 | Attach object | `Attach <p0> on the parallax effect` |  | objet « Select the object to be attached to the parallax effect » | — |  |
| 9 | 89 | Detach object | `Detach <p0>` |  | objet « Select the object that should be detached » | — |  |
| 10 | 90 | Autoscroll > On | `Set autoscroll: On` |  |  | — |  |
| 11 | 91 | Autoscroll > Off | `Set autoscroll: Off` |  |  | 4 (1 proj.) |  |
| 12 | 92 | Lower repetition limit > Set value | `Set lower repetition boundary: <p0>` |  | expression numérique « Enter a value - (must be lower than the upper boundary value) » | — |  |
| 13 | 93 | Upper repetition limit > Set value | `Set upper repetition boundary: <p0>` |  | expression numérique « Enter a value - (must be higher than the lower boundary value) » | — |  |
| 14 | 94 | Lower repetition limit > On | `Enable lower repetition boundary` |  |  | — |  |
| 15 | 95 | Lower repetition limit > Off | `Disable lower repetition boundary` |  |  | — |  |
| 16 | 96 | Upper repetition limit > On | `Enable upper repetition boundary` |  |  | — |  |
| 17 | 97 | Upper repetition limit > Off | `Disable upper repetition boundary` |  |  | — |  |
| 18 | 98 | Stationary > On | `Set stationary mode: On` |  |  | — |  |
| 19 | 99 | Stationary > Off | `Set stationary mode: Off` |  |  | — |  |
| 20 | 100 | Set center offset | `Set center offset = <p0>` |  | expression numérique « Set the offset relative to the object center at wich the effect should be centered around. » | — |  |
| 21 | 101 | Set angle | `Set angle to <p0>` |  | expression numérique « Enter an angle [0..360] » | — |  |
| -78 | 2 | ? | ? |  |  | 4 (1 proj.) |  |
| -48 | 32 | ? | ? |  |  | 4 (1 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get offset | `Offset(` |  |  | — |  |
| 1 | 81 | Get width | `Width(` |  |  | — |  |
| 2 | 82 | Get height | `Height(` |  |  | — |  |
| 4 | 84 | Get animation frame | `AnimationFrame(` |  |  | — |  |
| 5 | 85 | Get line length at position | `LineLengthAt(` |  | nombre « position of line » | — |  |
| 6 | 86 | Get scroll coefficient at position | `ScrollCoeffAt(` |  | nombre « position of line » | — |  |
| 7 | 87 | Get lower repetition boundary | `LowerBoundary(` |  |  | — |  |
| 8 | 88 | Get upper repetition boundary | `UpperBoundary(` |  |  | — |  |
| 9 | 89 | Get center offset | `CenterOffset(` |  |  | — |  |
| 10 | 90 | Get angle | `Angle(` |  |  | — |  |
| -64 | 16 | ? | ? |  |  | 4 (1 proj.) |  |
