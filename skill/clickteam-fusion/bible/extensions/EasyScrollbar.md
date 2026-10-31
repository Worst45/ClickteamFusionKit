# Extension EasyScrollbar

- Fichier : `EasyScrollbar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Scroll | `<objet> On Scroll` |  |  | — |  |
| 1 | -82 | Has Focus | `<objet> Has Focus` |  |  | — |  |
| 2 | -83 | Is Enabled | `<objet> Is Enabled` |  |  | — |  |
| 3 | -84 | Is Visible | `<objet> Is Visible` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Scroll Position | `Set Scroll Position to <p0>` |  | expression numérique « Position » | — |  |
| 1 | 81 | Set Scroll Range | `Set Scroll Range from <p0> to <p1>` |  | expression numérique « Minimum » ; expression numérique « Maximum » | — |  |
| 2 | 82 | Set Small Change | `Set Small Change to <p0>` |  | expression numérique « Small Change » | — |  |
| 3 | 83 | Set Large Change | `Set Large Change to <p0>` |  | expression numérique « Large Change » | — |  |
| 4 | 84 | Control > Focus > Get Focus | `<objet> Focus On` |  |  | — |  |
| 5 | 85 | Control > Focus > Lose Focus | `<objet> Focus Off` |  |  | — |  |
| 6 | 86 | Control > Enabled > Enable | `<objet> Enable` |  |  | — |  |
| 7 | 87 | Control > Enabled > Disable | `<objet> Disable` |  |  | — |  |
| 8 | 88 | Size > Set Size | `Set Size to <p0> by <p1>` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 9 | 89 | Size > Set Width | `Set Width to <p0>` |  | expression numérique « Width » | — |  |
| 10 | 90 | Size > Set Height | `Set Height to <p0>` |  | expression numérique « Height » | — |  |
| 11 | 91 | Control > Visibility > Show | `<objet> Show` |  |  | — |  |
| 12 | 92 | Control > Visibility > Hide | `<objet> Hide` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Value | `EScrollVal(` |  |  | — |  |
| 1 | 81 | Get Minimum Value | `EScrollMinVal(` |  |  | — |  |
| 2 | 82 | Get Maximum Value | `EScrollMaxVal(` |  |  | — |  |
| 3 | 83 | Get Small Change | `EScrollSmallChange(` |  |  | — |  |
| 4 | 84 | Get Large Change | `EScrollLargeChange(` |  |  | — |  |
| 5 | 85 | Size > Get Width | `EScrollWidth(` |  |  | — |  |
| 6 | 86 | Size > Get Height | `EScrollHeight(` |  |  | — |  |
