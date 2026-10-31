# Extension sleep

- Fichier : `sleep.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Sleep on | `Sleep is on` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Wait Period | `Set Wait to <p0>` |  | expression numérique « (Wait Period) Milliseconds (1000 = 1 second) » | — |  |
| 1 | 81 | Sleep App | `Sleep App for <p0> ms` |  | expression numérique « (Sleep App) Milliseconds (1000 = 1 second) » | — |  |
| 2 | 82 | Sleep On | `Sleep On` |  |  | — |  |
| 3 | 83 | Sleep Off | `Sleep Off` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Wait Period | `GetWait(` |  |  | — |  |
