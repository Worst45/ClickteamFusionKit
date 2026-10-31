# Extension NumUpDown

- Fichier : `NumUpDown.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has entry zone just been modified? | `<objet> : Has just been modified` |  |  | — |  |
| 1 | -82 | Does entry zone have input focus? | `<objet> : Have input focus` |  |  | — |  |
| 2 | -83 | Is entry zone enabled? | `<objet> : is enabled` |  |  | — |  |
| 3 | -84 | Is entry zone read-only? | `<objet> : is read-only` |  |  | — |  |
| 4 | -85 | Is entry zone visible? | `<objet> : is visible` |  |  | — |  |
| 5 | -86 | Numeric > Value changed? | `<objet> : Value changed` |  |  | — |  |
| 6 | -87 | Numeric > Is left aligned? | `<objet> : Left aligned` |  |  | — |  |
| 7 | -88 | Numeric > Is horizontal? | `<objet> : Horizontal` |  |  | — |  |
| 8 | -89 | Numeric > Wraps? | `<objet> : Wraps` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Numeric > Set Value | `Set Value to <p0>` |  | expression numérique « Enter value » | — |  |
| 1 | 81 | Numeric > Set Minimum Range | `Set Minimum Range to <p0>` |  | expression numérique « Enter Minimum Range » | — |  |
| 2 | 82 | Numeric > Set Maximum Range | `Set Maximum Range to <p0>` |  | expression numérique « Enter Maximum Range » | — |  |
| 3 | 83 | Control > Focus > On | `Set focus On` |  |  | — |  |
| 4 | 84 | Control > Focus > Off | `Set focus Off` |  |  | — |  |
| 5 | 85 | Control > Enabled > On | `Highlight` |  |  | — |  |
| 6 | 86 | Control > Enabled > Off | `Dehighlight` |  |  | — |  |
| 7 | 87 | Control > Read only > On | `Set read only On` |  |  | — |  |
| 8 | 88 | Control > Read only > Off | `Set read only Off` |  |  | — |  |
| 9 | 89 | Control > Force text modified flag > On | `Text modified flag on` |  |  | — |  |
| 10 | 90 | Control > Force text modified flag > Off | `Text modified flag off` |  |  | — |  |
| 11 | 91 | Control > Set background color | `Set background colour to <p0>` |  | couleur « Set background colour » | — |  |
| 12 | 92 | Size > Set Horizontal Size | `Set horizontal size to <p0>` |  | expression numérique « Set Horizontal Size » | — |  |
| 13 | 93 | Size > Set Vertical Size | `Set vertical size to <p0>` |  | expression numérique « Set Vertical Size » | — |  |
| 14 | 94 | Visibility > Make Object Invisible | `Hide` |  |  | — |  |
| 15 | 95 | Visibility > Make Object Reappear | `Show` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Numeric > Get Value | `Value(` |  |  | — |  |
| 1 | 81 | Numeric > Get Minimum Range | `MinRange(` |  |  | — |  |
| 2 | 82 | Numeric > Get Maximum Range | `MaxRange(` |  |  | — |  |
| 3 | 83 | Colour > Get Text Colour | `TextColour(` |  |  | — |  |
| 4 | 84 | Colour > Get Background Colour | `BackgroundColour(` |  |  | — |  |
| 5 | 85 | Size > Get Horizontal Size | `XSize(` |  |  | — |  |
| 6 | 86 | Size > Get Vertical Size | `YSize(` |  |  | — |  |
