# Extension XNA

- Fichier : `XNA.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Game is in trial mode | `Game is in trial mode` |  |  | — |  |
| 1 | -82 | Windows Phone > Back key is pressed | `<objet>: Back key is pressed` |  |  | — |  |
| 2 | -83 | Windows Phone > Application has been deactivated | `<objet>: Application has been deactivated` |  |  | — |  |
| 3 | -84 | Windows Phone > Application has been reactivated | `<objet>: Application has been reactivated` |  |  | — |  |
| 4 | -85 | Windows Phone > Music is playing in the background | `<objet>: Music is playing in the background` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open URL | `Open URL <p0>` |  | expression chaîne « Please enter the URL to open » | — |  |
| 1 | 81 | Vibrate phone | `Vibrate phone for <p0> seconds` |  | expression numérique « Enter the duration of the vibration, in seconds » | — |  |
| 2 | 82 | XBox > Assign gamepad to player | `Assign gamepad(s) <p1> to player <p0>` |  | expression numérique « Enter player number (1-4) » ; expression numérique « Enter gamepad(s) (1 for gp1, 2 for gp 2, 4 for gp 3, 8 for gp 4, or any combination) » | — |  |
| 3 | 83 | XBox > Set system player | `Set system player index to <p0>` |  | expression numérique « Enter the player index, 1, 2, 3 or 4 » | — |  |
| 4 | 84 | XBox > Open storage device selector | `Open storage device selector` |  |  | — |  |
