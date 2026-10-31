# Extension ibar

- Fichier : `ibar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare the bar to a value... | `<objet> Value <p0>` |  | comparaison numérique « Value to compare to (Integer) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Bar Value | `Set Bar Value to <p0>` |  | expression numérique « Value (Floats are accepted) » | — |  |
| 1 | 81 | Add to Bar Value | `Add <p0> to Bar Value` |  | expression numérique « Value (Floats are accepted) » | — |  |
| 2 | 82 | Subtract from Bar Value | `Subtract <p0> to Bar Value` |  | expression numérique « Value (Floats are accepted) » | — |  |
| 3 | 83 | Set Minimum Value | `Set Minimum Value to <p0>` |  | expression numérique « Value » | — |  |
| 4 | 84 | Set Maximum Value | `Set Maximum Value to <p0>` |  | expression numérique « Value » | — |  |
| 5 | 85 | Set Animation Speed | `Set Animation Speed to <p0>` |  | expression numérique « Animation Speed (Delay between each frame, 0=No animation) » | — |  |
| 6 | 86 | Set Count Speed | `Set Count Speed to <p0>` |  | expression numérique « Value (Floats are accepted) » | — |  |
| 7 | 87 | Set Smooth Bar State | `Set Smooth Bar State to <p0>` |  | expression numérique « State (1=Enabled, 0=Disabled) » | — |  |
| 8 | 88 | Set Animation Frame | `Set Animation Frame to <p0>` |  | expression numérique « Animation Frame (0-based) » | — |  |
| 9 | 89 | Set Bar Percentage | `Set Bar Percentage to <p0>` |  | expression numérique « Bar percentage (Float from 0.0 to 1.0) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Current Value | `currentValue(` |  |  | — |  |
| 1 | 81 | Get Minimum Value | `minValue(` |  |  | — |  |
| 2 | 82 | Get Maximum Value | `maxValue(` |  |  | — |  |
| 3 | 83 | Get Animation Speed | `animSpeed(` |  |  | — |  |
| 4 | 84 | Get Count Speed | `countSpeed(` |  |  | — |  |
| 5 | 85 | Get Smooth Bar State | `smoothState(` |  |  | — |  |
| 6 | 86 | Get Animation Frame | `animFrame(` |  |  | — |  |
| 7 | 87 | Get Current Percentage | `currentPercentage(` |  |  | — |  |
| 8 | 88 | Get Bar Cut X (Local) | `barCutX(` |  |  | — |  |
| 9 | 89 | Get Bar Cut Y (Local) | `barCutY(` |  |  | — |  |
