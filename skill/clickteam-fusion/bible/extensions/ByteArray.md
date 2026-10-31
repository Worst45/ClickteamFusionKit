# Extension ByteArray

- Fichier : `ByteArray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Byte At | `Set Byte At <p0> to <p1>` |  | expression numérique « Which byte? (0-based, you may use f2dto1d and f3dto1d) » ; expression numérique « Enter new value (Byte, 0-255) » | — |  |
| 1 | 81 | Save to | `Save to <p0>` |  | nom de fichier « File to save to » | — |  |
| 2 | 82 | Load from | `Load to <p0>` |  | nom de fichier « File to load from » | — |  |
| 3 | 83 | Resize to | `Resize to <p0> bytes` |  | expression numérique « Size in bytes » | — |  |
| 4 | 84 | Value used in calculations > Set X Size | `Set X size to <p0>` |  | expression numérique « Enter value » | — |  |
| 5 | 85 | Value used in calculations > Set Y Size | `Set Y size to <p0>` |  | expression numérique « Enter value » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get byte at | `getbyteat(` |  | nombre « Location » | — |  |
| 1 | 81 | Useful calculations > Convert a 2D position to 1D position | `f2dto1d(` |  | nombre « X » ; nombre « Y » | — |  |
| 2 | 82 | Useful calculations > Convert a 3D position to 1D position | `f3dto1d(` |  | nombre « X » ; nombre « Y » ; nombre « Z » | — |  |
| 3 | 83 | Get array size | `Size(` |  |  | — |  |
