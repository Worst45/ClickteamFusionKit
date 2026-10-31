# Extension while

- Fichier : `while.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Start While | `Start While <p0>` |  | expression numérique « ID » | — |  |
| 1 | -82 | End While | `End While` |  |  | — |  |
| 2 | -83 | Sub While | `Sub While <p0>` |  | expression numérique « ID » | — |  |
| 3 | -84 | Nest While | `Nest While <p0>, <p1>` |  | expression numérique « Old ID » ; expression numérique « New ID » | — |  |
| 4 | -85 | Limit Loops | `Limit Loops to <p0>` |  | expression numérique « Max Loops » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Loop Index | `Set Loop Index to <p0>` |  | expression numérique « Loop Index » | — |  |
| 1 | 81 | Kill Current Loop | `Kill Current Loop` |  |  | — |  |
| 2 | 82 | Set Current ID (CAUTION!) | `Set Current ID to <p0>` |  | expression numérique « New ID » | — |  |
| 3 | 83 | Trigger > Start While | `Trigger Start While, ID <p0>, Index <p1>` |  | expression numérique « ID » ; expression numérique « Loop Index » | — |  |
| 4 | 84 | Trigger > Sub While | `Trigger Sub While, ID <p0>, Index <p1>` |  | expression numérique « ID » ; expression numérique « Loop Index » | — |  |
| 5 | 85 | Trigger > Nest While | `Trigger Nest While, ID <p0>, Index <p1>` |  | expression numérique « Old ID » ; expression numérique « Loop Index » | — |  |
| 6 | 86 | Set Nest Depth (CAUTION!) | `Set NestDepth to <p0>` |  | expression numérique « NestDepth » | — |  |
| 7 | 87 | Dialog Box Options > Auto Triggers > Start While On | `Start While On` |  |  | — |  |
| 8 | 88 | Dialog Box Options > Auto Triggers > Start While Off | `Start While Off` |  |  | — |  |
| 9 | 89 | Dialog Box Options > Auto Triggers > Sub While On | `Sub While On` |  |  | — |  |
| 10 | 90 | Dialog Box Options > Auto Triggers > Sub While Off | `Sub While Off` |  |  | — |  |
| 11 | 91 | Dialog Box Options > Auto Triggers > Nest While On | `Nest While On` |  |  | — |  |
| 12 | 92 | Dialog Box Options > Auto Triggers > Nest while Off | `Nest While Off` |  |  | — |  |
| 13 | 93 | Dialog Box Options > Set Max Loops | `Set Max Loops to <p0>` |  | expression numérique « Max Loops (0: Unlimited) » | — |  |
| 14 | 94 | Dialog Box Options > Set Max Nest Depth | `Set Max Nest Depth to <p0>` |  | expression numérique « Max Nest Depth (0: Unlimited) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Loop Index | `GetLoopIndex(` |  |  | — |  |
| 1 | 81 | Get Current ID | `GetCurrentID(` |  |  | — |  |
| 2 | 82 | Get Current Nest Depth | `GetNestDepth(` |  |  | — |  |
| 3 | 83 | Dialog Box Options > Get Start While State | `GetStartWhileState(` |  |  | — |  |
| 4 | 84 | Dialog Box Options > Get Sub While State | `GetSubWhileState(` |  |  | — |  |
| 5 | 85 | Dialog Box Options > Get Nest While State | `GetNestWhileState(` |  |  | — |  |
| 6 | 86 | Dialog Box Options > Get Max Loops | `GetMaxLoops(` |  |  | — |  |
| 7 | 87 | Dialog Box Options > Get Max Nest Depth | `GetMaxNestDepth(` |  |  | — |  |
