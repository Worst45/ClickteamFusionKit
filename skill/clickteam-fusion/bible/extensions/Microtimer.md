# Extension Microtimer

- Fichier : `Microtimer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Reset custom timer | `Reset custom timer` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Seconds (float) > Since application start | `AppTimeSec(` |  |  | — |  |
| 1 | 81 | Seconds (float) > Since frame start | `FrameTimeSec(` |  |  | — |  |
| 2 | 82 | Microseconds (integer) > Since application start | `AppTimeMicro(` |  |  | — |  |
| 3 | 83 | Microseconds (integer) > Since frame start | `FrameTimeMicro(` |  |  | — |  |
| 4 | 84 | Seconds (float) > Since custom timer | `CustomTimerSec(` |  |  | — |  |
| 5 | 85 | Microseconds (integer) > Since custom timer | `CustomTimerMicro(` |  |  | — |  |
