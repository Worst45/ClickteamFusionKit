# Extension ifelse

- Fichier : `ifelse.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Start IF | `Start IF` |  |  | — |  |
| 1 | -82 | End IF | `End IF` |  |  | — |  |
| 2 | -83 | Else | `Else` |  |  | — |  |
| 3 | -84 | Else IF | `Else IF` |  |  | — |  |
| 4 | -85 | Start Nested IF | `Start Nested IF <p0>` |  | expression numérique « Nest Depth » | — |  |
| 5 | -86 | End Nested IF (No parameters) | `End Nested IF` |  |  | — |  |
| 6 | -87 | Nested Else | `Nested Else <p0>` |  | expression numérique « Nest Depth » | — |  |
| 7 | -88 | Nested ElseIF | `Nested ElseIF <p0>` |  | expression numérique « Nest Depth » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Force IF (Else will not run) | `Force IF` |  |  | — |  |
| 1 | 81 | Force Else (Else will run) | `Force Else` |  |  | — |  |
| 2 | 82 | Set Nest Depth | `Set Nest Depth to <p0>` |  | expression numérique « Set Nest Depth » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last IF (1 is true, 0 is false) | `GetIF(` |  |  | — |  |
| 1 | 81 | Get Nest Depth | `NestDepth(` |  |  | — |  |
