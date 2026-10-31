# Extension FlashProgressBar

- Fichier : `FlashProgressBar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Progress Bar Is Visible | `<objet> Progress Bar Is Visible` |  |  | — |  |
| 1 | -82 | Progress Bar Is Full | `<objet> Progress Bar Is Full` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Create Progress Bar | `Create Progress Bar` |  |  | — |  |
| 1 | 81 | Set X | `Set X (<p0>)` |  | expression numérique « X Coordinate » | — |  |
| 2 | 82 | Set Y | `Set Y (<p0>)` |  | expression numérique « Y Coordinate » | — |  |
| 3 | 83 | Set Width | `Set Width (<p0>)` |  | expression numérique « Width » | — |  |
| 4 | 84 | Set Height | `Set Height (<p0>)` |  | expression numérique « Height » | — |  |
| 5 | 85 | Set Bar Color | `Set Bar Color (<p0>)` |  | couleur « Bar Color » | — |  |
| 6 | 86 | Set Background Color | `Set Background Color (<p0>)` |  | couleur « Background Color » | — |  |
| 7 | 87 | Set Status Text Color | `Set Status Text Color (<p0>)` |  | couleur « Status Text Color » | — |  |
| 8 | 88 | Set Alpha | `Set Alpha (<p0>)` |  | expression numérique « Alpha » | — |  |
| 9 | 89 | Set Current Value | `Set Current Value (<p0>)` |  | expression numérique « Current Value » | — |  |
| 10 | 90 | Set Minimum Value | `Set Minimum Value (<p0>)` |  | expression numérique « Minimum Value » | — |  |
| 11 | 91 | Set Maximum Value | `Set Maximum Value (<p0>)` |  | expression numérique « Maximum Value » | — |  |
| 12 | 92 | Set Status Text | `Set Status Text (<p0>)` |  | expression chaîne « Status Text » | — |  |
| 13 | 93 | Show Progress Bar | `Show Progress Bar` |  |  | — |  |
| 14 | 94 | Hide Progress Bar | `Hide Progress Bar` |  |  | — |  |
| 15 | 95 | Destroy Progress Bar | `Destroy Progress Bar` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Status Text | `StatusText$(` |  | → chaîne | — |  |
| 1 | 81 | Get X | `GetX(` |  |  | — |  |
| 2 | 82 | Get Y | `GetY(` |  |  | — |  |
| 3 | 83 | Get Width | `GetWidth(` |  |  | — |  |
| 4 | 84 | Get Height | `GetHeight(` |  |  | — |  |
| 5 | 85 | Get Alpha | `GetAlpha(` |  |  | — |  |
| 6 | 86 | Get Current Value | `GetCurrentValue(` |  |  | — |  |
| 7 | 87 | Get Minimum Value | `GetMinimumValue(` |  |  | — |  |
| 8 | 88 | Get Maximum Value | `GetMaximumValue(` |  |  | — |  |
