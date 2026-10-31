# Extension SecToHMS

- Fichier : `SecToHMS.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Convert Seconds ... | `Set Seconds to convert to: <p0>` |  | expression numérique « Please enter the number of Seconds to be converted » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Hours ... | `GetHours(` |  |  | — |  |
| 1 | 81 | Get Minutes ... | `GetMinutes(` |  |  | — |  |
| 2 | 82 | Get Seconds ... | `GetSeconds(` |  |  | — |  |
