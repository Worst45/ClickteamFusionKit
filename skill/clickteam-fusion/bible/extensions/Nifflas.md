# Extension Nifflas

- Fichier : `Nifflas.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On timer | `<objet> : On timer <p0>` |  | expression numérique « Timer ID » | — |  |
| 1 | -82 | Compare two numbers | `<objet> : Compare <p0> and <p1> with comparison type <p2>` |  | expression numérique « First number » ; expression numérique « Second number » ; expression numérique « Comparison type (0 = Equal, 1 = Different, 2 = Higher, 3 = Lower, 4 = Equal or higher, 5 = Equal or lower) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set random seed | `Set random seed to <p0>` |  | expression numérique « Random seed » | — |  |
| 1 | 81 | Set random seed to timer | `Set random seed to timer` |  |  | — |  |
| 2 | 82 | Set timer | `Set timer with ID <p0> to trigger every <p1> frames with offset <p2>` |  | expression numérique « Timer ID » ; expression numérique « Number of frames » ; expression numérique « Offset » | — |  |
| 3 | 83 | Remove timer | `Remove timer with ID <p0>` |  | expression numérique « Timer ID » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random | `GenerateRandom(` |  | nombre « Minimum » ; nombre « Maximum » ; nombre « Block value » | — |  |
| 1 | 81 | Random with seed | `SeedRandom(` |  | nombre « Minimum » ; nombre « Maximum » ; nombre « Block value » ; nombre « Seed » | — |  |
| 2 | 82 | Sine | `Sine(` |  | nombre « Value » ; nombre « Cycle length » ; nombre « Minimum » ; nombre « Maximum » | — |  |
| 3 | 83 | Limit | `Limit(` |  | nombre « Value » ; nombre « Minimum » ; nombre « Maximum » | — |  |
| 4 | 84 | Substr | `Substr$(` |  | chaîne « String » ; nombre « Start » ; nombre « Length » → chaîne | — |  |
| 5 | 85 | Timer value | `TimerValue(` |  | nombre « Timer ID » | — |  |
| 6 | 86 | Cosine | `Cosine(` |  | nombre « Value » ; nombre « Cycle length » ; nombre « Minimum » ; nombre « Maximum » | — |  |
| 7 | 87 | Nearest | `Nearest(` |  | nombre « Value » ; nombre « Minimum » ; nombre « Maximum » | — |  |
| 8 | 88 | Normalise | `Normalise(` |  | nombre « Value » ; nombre « Minimum » ; nombre « Maximum » ; nombre « Limit » | — |  |
| 9 | 89 | Modify range | `ModifyRange(` |  | nombre « Value » ; nombre « Current minimum » ; nombre « Current maximum » ; nombre « New minimum » ; nombre « New maximum » ; nombre « Limit » | — |  |
