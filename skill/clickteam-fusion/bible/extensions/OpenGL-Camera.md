# Extension OpenGL-Camera

- Fichier : `OpenGL-Camera.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Perspective > Set FOV... | `Set FOV to <p0>` |  | expression numérique « Set angle... » | — |  |
| 1 | 81 | Perspective > Set near clipping distance... | `Set near clipping distance to <p0>` |  | expression numérique « Set distance... » | — |  |
| 2 | 82 | Perspective > Set far clipping distance... | `Set far clipping distance to <p0>` |  | expression numérique « Set distance... » | — |  |
| 3 | 83 | Position > Set X coordinate... | `Set X position to <p0>` |  | expression numérique « Set X coordinate... » | — |  |
| 4 | 84 | Position > Set Y coordinate... | `Set Y position to <p0>` |  | expression numérique « Set Y coordinate... » | — |  |
| 5 | 85 | Position > Set Z coordinate... | `Set Z position to <p0>` |  | expression numérique « Set Z coordinate... » | — |  |
| 6 | 86 | Orientation > Set pitch... | `Set pitch to <p0>` |  | expression numérique « Set angle... » | — |  |
| 7 | 87 | Orientation > Set yaw... | `Set yaw to <p0>` |  | expression numérique « Set angle... » | — |  |
| 8 | 88 | Orientation > Set roll... | `Set roll to <p0>` |  | expression numérique « Set angle... » | — |  |
| 9 | 89 | Orientation > Look at... | `Look at <p0>, <p1>, <p2>` |  | expression numérique « Set X coordinate... » ; expression numérique « Set Y coordinate... » ; expression numérique « Set Z coordinate... » | — |  |
| 10 | 90 | Move > Forward... | `Move forward <p0> units` |  | expression numérique « Set distance... » | — |  |
| 11 | 91 | Move > Backwards... | `Move backwards <p0> units` |  | expression numérique « Set distance... » | — |  |
| 12 | 92 | Move > Left... | `Move left <p0> units` |  | expression numérique « Set distance... » | — |  |
| 13 | 93 | Move > Right... | `Move right <p0> units` |  | expression numérique « Set distance... » | — |  |
| 14 | 94 | Move > Up... | `Move up <p0> units` |  | expression numérique « Set distance... » | — |  |
| 15 | 95 | Move > Down... | `Move down <p0> units` |  | expression numérique « Set distance... » | — |  |
| 16 | 96 | Apply camera | `Apply camera` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Perspective > Get FOV | `FOV(` |  |  | — |  |
| 1 | 81 | Perspective > Get near clipping distance | `Near(` |  |  | — |  |
| 2 | 82 | Perspective > Get far clipping distance | `Far(` |  |  | — |  |
| 3 | 83 | Get X position | `⡘` |  |  | — |  |
| 4 | 84 | Get Y position | `⡙` |  |  | — |  |
| 5 | 85 | Get Z position | `⡚` |  |  | — |  |
| 6 | 86 | Get pitch | `Pitch(` |  |  | — |  |
| 7 | 87 | Get yaw | `Yaw(` |  |  | — |  |
| 8 | 88 | Get roll | `Roll(` |  |  | — |  |
