# Extension sbprogress

- Fichier : `sbprogress.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Progress Bar Style | `<objet> Set Progress Bar Style (<p0>)` |  | expression numérique « Set Progress Bar Style (0 = None, 1 = Marquee, 2 = Normal, 3 = Paused, 4 = Error) » | — |  |
| 1 | 81 | Set Progress Bar Value | `<objet> Set Progress Bar Value to <p0>` |  | expression numérique « Set The Progress Bar Value (Rounding will occur if the number isn't between 0-100 inclusive) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Version of Windows via Registry | `WinVer$(` |  | → chaîne | — |  |
| 1 | 81 | Get Version of Windows through Build Number | `WinVerBuild$(` |  | → chaîne | — |  |
