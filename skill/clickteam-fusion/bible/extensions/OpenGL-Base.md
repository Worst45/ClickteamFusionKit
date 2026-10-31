# Extension OpenGL-Base

- Fichier : `OpenGL-Base.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is visible? | `<objet>: Is visible` |  |  | — |  |
| 1 | -82 | Is double buffered? | `<objet>: Is double buffered` |  |  | — |  |
| 2 | -83 | Has stereo buffers? | `<objet>: Has stereo buffers` |  |  | — |  |
| 3 | -84 | On create window success | `<objet>: On create window success` |  |  | — |  |
| 4 | -85 | On create window failure | `<objet>: On create window failure` |  |  | — |  |
| 5 | -86 | On redraw | `<objet>: On redraw` |  |  | — |  |
| 6 | -87 | Is V-Sync supported? | `<objet>: V-Sync is supported` |  |  | — |  |
| 7 | -88 | Is V-Sync enabled? | `<objet>: V-Sync is enabled` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Position > Set X coordinate... | `Set X position to <p0>` |  | expression numérique « Set X coordinate... » | — |  |
| 1 | 81 | Position > Set Y coordinate... | `Set Y position to <p0>` |  | expression numérique « Set Y coordinate... » | — |  |
| 2 | 82 | Size > Set width... | `Set width to <p0>` |  | expression numérique « Set width... » | — |  |
| 3 | 83 | Size > Set height... | `Set height to <p0>` |  | expression numérique « Set height... » | — |  |
| 4 | 84 | Visibility > Show | `Show window` |  |  | — |  |
| 5 | 85 | Visibility > Hide | `Hide window` |  |  | — |  |
| 6 | 86 | Pixel format descriptor > Double buffer... | `Double buffer: <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Pixel format descriptor > Stereo buffer... | `Stereo buffer: <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Pixel format descriptor > Color bits... | `Color bits: <p0>` |  | expression numérique « Color bits... » | — |  |
| 9 | 89 | Pixel format descriptor > Alpha bits... | `Alpha bits: <p0>` |  | expression numérique « Alpha bits... » | — |  |
| 10 | 90 | Pixel format descriptor > Depth bits... | `Depth bits: <p0>` |  | expression numérique « Depth bits... » | — |  |
| 11 | 91 | Pixel format descriptor > Accum bits... | `Accum bits: <p0>` |  | expression numérique « Accum bits... » | — |  |
| 12 | 92 | Pixel format descriptor > Stencil bits... | `Stencil bits: <p0>` |  | expression numérique « Stencil bits... » | — |  |
| 13 | 93 | Create window | `Create window` |  |  | — |  |
| 14 | 94 | Make current | `Make current` |  |  | — |  |
| 15 | 95 | Auto swap buffers > Enable | `Enable auto swap buffers` |  |  | — |  |
| 16 | 96 | Auto swap buffers > Disable | `Disable auto swap buffers` |  |  | — |  |
| 17 | 97 | Swap buffers | `Swap buffers` |  |  | — |  |
| 18 | 98 | Auto redraw > Enable | `Enable auto redraw` |  |  | — |  |
| 19 | 99 | Auto redraw > Disable | `Disable auto redraw` |  |  | — |  |
| 20 | 100 | Force redraw | `Force redraw` |  |  | — |  |
| 21 | 101 | V-Sync > Enable | `Enable V-Sync` |  |  | — |  |
| 22 | 102 | V-Sync > Disable | `Disable V-Sync` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get X position | `⡘` |  |  | — |  |
| 1 | 81 | Get Y position | `⡙` |  |  | — |  |
| 2 | 82 | Get width | `Width(` |  |  | — |  |
| 3 | 83 | Get height | `Height(` |  |  | — |  |
| 4 | 84 | Pixel format descriptor > Get color bits | `ColorBits(` |  |  | — |  |
| 5 | 85 | Pixel format descriptor > Get alpha bits | `AlphaBits(` |  |  | — |  |
| 6 | 86 | Pixel format descriptor > Get depth bits | `DepthBits(` |  |  | — |  |
| 7 | 87 | Pixel format descriptor > Get accum bits | `AccumBits(` |  |  | — |  |
| 8 | 88 | Pixel format descriptor > Get stencil bits | `StencilBits(` |  |  | — |  |
| 9 | 89 | Handles > Get window handle | `hWnd(` |  |  | — |  |
| 10 | 90 | Handles > Get device context handle | `hDC(` |  |  | — |  |
| 11 | 91 | Handles > Get rendering context handle | `hRC(` |  |  | — |  |
| 12 | 92 | Error > Get error number | `Error(` |  |  | — |  |
| 13 | 93 | Error > Get error string | `ErrorString$(` |  | → chaîne | — |  |
