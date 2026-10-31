# Extension FlashFx

- Fichier : `FlashFx.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stage > On stage event | `<objet>: On stage event <p0>` |  | expression chaîne « Event (mouseUp, mouseDown, rollOut, rollOver, keyUp, keyDown...) » | — |  |
| 1 | -82 | Stage > Compare to property | `<objet>: Event <p0> = <p1>` |  | expression chaîne « Event property » ; expression chaîne « Value » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stage > Set scale mode | `Set stage scale mode to <p0>` |  | expression chaîne « Scale mode (exactFit, noBorder, noScale, showAll) » | — |  |
| 1 | 81 | Stage > Set display state | `Set stage display state to <p0>` |  | expression chaîne « Display state (normal, fullScreen) » | — |  |
| 2 | 82 | Stage > Set align | `Set stage alignment to <p0>` |  | expression chaîne « Alignment (Default: Center, Combine L, R, T, B) » | — |  |
| 3 | 83 | Stage > Add event listener | `Add stage event listener <p0>` |  | expression chaîne « Event (mouseUp, mouseDown, rollOut, rollOver, keyUp, keyDown...) » | — |  |
| 5 | 85 | Object > Set blend mode | `Set blend mode of <p0> to <p1>` |  | objet « Object » ; expression chaîne « Blend mode (normal, layer, multiply, screen, lighten, darken, difference, add, subtract, invert, alpha, erase, overlay, hardlight) » | — |  |
