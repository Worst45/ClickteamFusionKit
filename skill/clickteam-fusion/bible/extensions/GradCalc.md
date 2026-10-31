# Extension GradCalc

- Fichier : `GradCalc.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Gradient Size | `Set Gradient Size <p0> x <p1>` |  | expression numérique « Enter gradient width » ; expression numérique « Enter gradient height » | — |  |
| 1 | 81 | Set Colour 1 | `Set Colour 1 to <p0>` |  | couleur « Enter colour 1 » | — |  |
| 2 | 82 | Set Colour 2 | `Set Colour 2 to <p0>` |  | couleur « Enter colour 2 » | — |  |
| 3 | 83 | Set Colour 3 | `Set Colour 3 to <p0>` |  | couleur « Enter colour 3 » | — |  |
| 4 | 84 | Set Colour 4 | `Set Colour 4 to <p0>` |  | couleur « Enter colour 4 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | 2 Colour (Horizontal) > Get RGB | `GetRGBH(` |  | nombre ; nombre | — |  |
| 1 | 81 | 2 Colour (Horizontal) > Get R | `GetRH(` |  | nombre ; nombre | — |  |
| 2 | 82 | 2 Colour (Horizontal) > Get B | `GetGH(` |  | nombre ; nombre | — |  |
| 3 | 83 | 2 Colour (Horizontal) > Get B | `GetBH(` |  | nombre ; nombre | — |  |
| 4 | 84 | 2 Colour (Vertical) > Get RGB | `GetRGBV(` |  | nombre ; nombre | — |  |
| 5 | 85 | 2 Colour (Vertical) > Get R | `GetRV(` |  | nombre ; nombre | — |  |
| 6 | 86 | 2 Colour (Vertical) > Get G | `GetGV(` |  | nombre ; nombre | — |  |
| 7 | 87 | 2 Colour (Vertical) > Get B | `GetBV(` |  | nombre ; nombre | — |  |
| 8 | 88 | 4 Colour > Get RGB | `GetGRGB(` |  | nombre ; nombre | — |  |
| 9 | 89 | 4 Colour > Get R | `GetR(` |  | nombre ; nombre | — |  |
| 10 | 90 | 4 Colour > Get G | `GetG(` |  | nombre ; nombre | — |  |
| 11 | 91 | 4 Colour > Get B | `GetB(` |  | nombre ; nombre | — |  |
