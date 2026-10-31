# Extension events

- Fichier : `events.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On failure |  |  |  | — |  |
| 1 | -82 | On event |  |  |  | — |  |
| 2 | -83 | Is empty? |  |  |  | — |  |
| 3 | -84 | Is debug enabled? |  |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Event > Failure (use with caution) |  |  | expression numérique « Failure event code » ; expression numérique « Line in source code » ; expression chaîne « Failure message, user intended only, 256 chars max. » | — |  |
| 1 | 81 | Event > Error |  |  | expression numérique « Error event code » ; expression numérique « Line in source code » ; expression chaîne « Error message, user intended only. » | — |  |
| 2 | 82 | Event > Warning |  |  | expression numérique « Warning event code » ; expression numérique « Line in source code » ; expression chaîne « Warning message, user intended only. » | — |  |
| 3 | 83 | Event > Notice |  |  | expression numérique « Notice event code » ; expression numérique « Line in source code » ; expression chaîne « Notice message, user intended only. » | — |  |
| 4 | 84 | Event > Debug |  |  | expression numérique « Debug event code » ; expression numérique « Line in source code » ; expression chaîne « Debug message » | — |  |
| 5 | 85 | Pending events > Remove first (oldest) |  |  |  | — |  |
| 6 | 86 | Pending events > Remove last (newest) |  |  |  | — |  |
| 7 | 87 | Pending events > Remove all |  |  |  | — |  |
| 8 | 88 | Handling > Clear dropped events counter |  |  |  | — |  |
| 9 | 89 | Handling > Set debug enabled |  |  | expression numérique « 0 => disable, anything else => enable. By default edittime=1, runtime=0. » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of events pending |  |  |  | — |  |
| 1 | 81 | Number of events dropped |  |  |  | — |  |
| 2 | 82 | First event (oldest) > Get frame |  |  |  | — |  |
| 3 | 83 | First event (oldest) > Get line |  |  |  | — |  |
| 4 | 84 | First event (oldest) > Get code |  |  |  | — |  |
| 5 | 85 | First event (oldest) > Get message |  |  | → chaîne | — |  |
| 6 | 86 | First event (oldest) > Get severity |  |  |  | — |  |
| 7 | 87 | Last event (newest) > Get frame |  |  |  | — |  |
| 8 | 88 | Last event (newest) > Get line |  |  |  | — |  |
| 9 | 89 | Last event (newest) > Get code |  |  |  | — |  |
| 10 | 90 | Last event (newest) > Get message |  |  | → chaîne | — |  |
| 11 | 91 | Last event (newest) > Get severity |  |  |  | — |  |
| 12 | 92 | First event (oldest) > Get (sub-)app path |  |  | → chaîne | — |  |
| 13 | 93 | Last event (newest) > Get (sub-)app path |  |  | → chaîne | — |  |
