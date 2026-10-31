# Extension FlashTooltip

- Fichier : `FlashTooltip.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Tooltip is Visible | `<objet> Tooltip Is Visible` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Show Tooltip | `Show Tooltip (<p0>) Alpha (<p1>)` |  | expression chaîne « Tooltip Text » ; expression numérique « Alpha » | — |  |
| 1 | 81 | Hide Tooltip | `Hide Tooltip` |  |  | — |  |
| 2 | 82 | Set X | `Set X (<p0>)` |  | expression numérique « X Coordinate » | — |  |
| 3 | 83 | Set Y | `Set Y (<p0>)` |  | expression numérique « Y Coordinate » | — |  |
| 4 | 84 | Set Background Color | `Set Background Color (<p0>)` |  | couleur « Background Color » | — |  |
| 5 | 85 | Set Font | `Set Font (<p0>)` |  | expression chaîne « Font » | — |  |
| 6 | 86 | Set Font Size | `Set Font Size (<p0>)` |  | expression numérique « Font Size » | — |  |
| 7 | 87 | Set Font Color | `Set Font Color (<p0>)` |  | couleur « Font Color » | — |  |
| 8 | 88 | Set Corner Radius | `Set Corner Radius (<p0>)` |  | expression numérique « Corner Radius » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last Tooltip Text | `LastTooltipText$(` |  | → chaîne | — |  |
| 1 | 81 | Tooltip X | `TooltipX(` |  |  | — |  |
| 2 | 82 | Tooltip Y | `TooltipY(` |  |  | — |  |
