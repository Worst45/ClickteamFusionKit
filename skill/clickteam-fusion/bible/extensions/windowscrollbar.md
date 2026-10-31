# Extension windowscrollbar

- Fichier : `windowscrollbar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<objet> on error` |  |  | — |  |
| 1 | -82 | HSB (horizontal scrollbar) > On scroll | `<objet> on HSB scroll` |  |  | — |  |
| 2 | -83 | VSB (vertical scrollbar) > On scroll | `<objet> on VSB scroll` |  |  | — |  |
| 3 | -84 | HSB (horizontal scrollbar) > Need HSB? | `<objet> need HSB?` |  |  | — |  |
| 4 | -85 | VSB (vertical scrollbar) > Need VSB? | `<objet> need VSB?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HSB (horizontal scrollbar) > Show HSB | `<objet> show HSB <p0> (boolean)` |  | expression numérique « 0 == hide, anything else == show » | — |  |
| 1 | 81 | VSB (vertical scrollbar) > Show VSB | `<objet> show VSB <p0> (boolean)` |  | expression numérique « 0 == hide, anything else == show » | — |  |
| 2 | 82 | HSB (horizontal scrollbar) > Set HSB pos | `<objet> set HSB pos to <p0>` |  | expression numérique « Position » | — |  |
| 3 | 83 | VSB (vertical scrollbar) > Set VSB pos | `<objet> set VSB pos to <p0>` |  | expression numérique « Position » | — |  |
| 4 | 84 | HSB (horizontal scrollbar) > Set HSB range | `<objet> set HSB range from <p0> to <p1>` |  | expression numérique « Min (left) » ; expression numérique « Max (right) » | — |  |
| 5 | 85 | VSB (vertical scrollbar) > Set VSB range | `<objet> set VSB range from <p0> to <p1>` |  | expression numérique « Min (top) » ; expression numérique « Max (bottom) » | — |  |
| 6 | 86 | HSB (horizontal scrollbar) > Set HSB page | `<objet> set HSB page to <p0>` |  | expression numérique « Page » | — |  |
| 7 | 87 | VSB (vertical scrollbar) > Set VSB page | `<objet> set VSB page to <p0>` |  | expression numérique « Page » | — |  |
| 8 | 88 | Clear last error | `<objet> clear last error` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HSB (horizontal scrollbar) > Get HSB pos | `getHSBPos(` |  |  | — |  |
| 1 | 81 | VSB (vertical scrollbar) > Get VSB pos | `getVSBPos(` |  |  | — |  |
| 2 | 82 | HSB (horizontal scrollbar) > Get HSB page | `getHSBPage(` |  |  | — |  |
| 3 | 83 | VSB (vertical scrollbar) > Get VSB page | `getVSBPage(` |  |  | — |  |
| 4 | 84 | HSB (horizontal scrollbar) > Get HSB min | `getHSBMin(` |  |  | — |  |
| 5 | 85 | VSB (vertical scrollbar) > Get VSB min | `getVSBMin(` |  |  | — |  |
| 6 | 86 | HSB (horizontal scrollbar) > Get HSB max | `getHSBMax(` |  |  | — |  |
| 7 | 87 | VSB (vertical scrollbar) > Get VSB max | `getVSBMax(` |  |  | — |  |
| 8 | 88 | Get last error | `getLastError(` |  |  | — |  |
| 9 | 89 | HSB (horizontal scrollbar) > Get HSB height | `getHSBHeight(` |  |  | — |  |
| 10 | 90 | VSB (vertical scrollbar) > Get VSB width | `getVSBWidth(` |  |  | — |  |
