# Extension ultimatefullscreen

- Fichier : `ultimatefullscreen.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Ultimate Fullscreen »
- Usage dans le corpus : 20 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is fullscreen | `<objet>: Is fullscreen` |  |  | 4 (1 proj.) |  |
| 1 | -82 | Is windowed | `<objet>: Is windowed` |  |  | — |  |
| 2 | -83 | On fullscreen | `<objet>: On fullscreen` |  |  | — |  |
| 3 | -84 | On windowed | `<objet>: On windowed` |  |  | — |  |
| 4 | -85 | On change window mode | `<objet>: On change window mode` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Go fullscreen | `Go fullscreen` |  |  | 4 (1 proj.) |  |
| 1 | 81 | Go windowed | `Go windowed` |  |  | 12 (1 proj.) |  |
| 2 | 82 | Misc. > Apply fullscreen settings to windowed size | `Apply fullscreen settings to windowed size` |  |  | — |  |
| 3 | 83 | Misc. > Don't apply fullscreen settings to windowed size (default) | `Don't apply fullscreen settings to windowed size` |  |  | — |  |
| 4 | 84 | Automatic adjustments > Set fullscreen type | `Set fullscreen type to <p0>` |  | expression numérique « Fullscreen type: 0=Best fit, 1=Best pixel perfect fit (integer-only scale), 2=One-to-one, 3=Match width(vert-), 4=Match height(hor+), 5=Manual settings » | — |  |
| 5 | 85 | Automatic adjustments > Set game scale | `Set game scale to <p0>` |  | expression numérique « Game scale (1.0=default) » | — |  |
| 6 | 86 | Manual adjustments > Set manual fullscreen position | `Set manual fullscreen position to (<p0>, <p1>)` |  | expression numérique « Manual fullscreen X coordinate » ; expression numérique « Manual fullscreen Y coordinate » | — |  |
| 7 | 87 | Manual adjustments > Set manual fullscreen size | `Set manual fullscreen size to (<p0>, <p1>)` |  | expression numérique « Manual fullscreen width » ; expression numérique « Manual fullscreen height » | — |  |
| 8 | 88 | Manual adjustments > Reset manual fullscreen settings to default | `Reset manual fullscreen settings to default` |  |  | — |  |
| 9 | 89 | Misc. > Listen for screen maximize (default) | `Listen for screen maximize` |  |  | — |  |
| 10 | 90 | Misc. > Don't listen for screen maximize | `Don't listen for screen maximize` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Game rectangle > Game rectangle X (after scaling) | `GameRectX(` |  |  | — |  |
| 1 | 81 | Game rectangle > Game rectangle Y (after scaling) | `GameRectY(` |  |  | — |  |
| 2 | 82 | Game rectangle > Game rectangle width  (after scaling) | `GameRectWidth(` |  |  | — |  |
| 3 | 83 | Game rectangle > Game rectangle height (after scaling) | `GameRectHeight(` |  |  | — |  |
| 4 | 84 | Manual settings > Manual Game rectangle X | `ManualGameRectX(` |  |  | — |  |
| 5 | 85 | Manual settings > Manual Game rectangle Y | `ManualGameRectY(` |  |  | — |  |
| 6 | 86 | Manual settings > Manual Game rectangle width | `ManualGameRectWidth(` |  |  | — |  |
| 7 | 87 | Manual settings > Manual Game rectangle height | `ManualGameRectHeight(` |  |  | — |  |
| 8 | 88 | Cropping > Cropped game width  (before scaling) | `CroppedGameWidth(` |  |  | — |  |
| 9 | 89 | Cropping > Cropped game height (before scaling) | `CroppedGameHeight(` |  |  | — |  |
| 10 | 90 | Fullscreen type | `FullscreenType(` |  |  | — |  |
| 11 | 91 | Game scale | `GameScale(` |  |  | — |  |
