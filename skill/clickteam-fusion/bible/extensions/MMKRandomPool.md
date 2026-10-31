# Extension MMKRandomPool

- Fichier : `MMKRandomPool.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Number Pool Full | `<objet>: Is Pool Full?` |  |  | — |  |
| 1 | -82 | Is Number Pool Empty | `<objet>: Is Pool Empty?` |  |  | — |  |
| 2 | -83 | On Number Generated | `<objet>: On Number Generated` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Numbers Pool > Generate a number | `Generate Number` |  |  | — |  |
| 1 | 81 | Pool Setup > Set Pool Limits | `Set limits to (<p0>-<p1>)` |  | expression numérique « Enter Min Number » ; expression numérique « Enter Max Number » | — |  |
| 2 | 82 | Pool Setup > Set Randomization Seed | `Set Randomization Seed to <p0>` |  | expression numérique « Enter Randomization Seed » | — |  |
| 3 | 83 | Numbers Pool > Refill Pool | `Refill Pool` |  |  | — |  |
| 4 | 84 | Numbers Pool > Expire First X Numbers | `Expire <p0> Numbers` |  | expression numérique « Numbers to Expire » | — |  |
| 5 | 85 | Pool Setup > Shuffle | `Shuffle` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Number Generated | `Current Generated Number(` |  |  | — |  |
| 1 | 81 | Numbers Remaining | `Numbers Remaining(` |  |  | — |  |
| 2 | 82 | Numbers Utilized | `Numbers Utilized(` |  |  | — |  |
| 3 | 83 | Get New Generated Number | `Generate Number(` |  |  | — |  |
