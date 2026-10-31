# Extension kchisc

- Fichier : `kchisc.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Hi-Score », « Hi-Scores »
- Usage dans le corpus : 7 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has player a hiscore? | `<p0> has a hiscore` | <p0> a un hi-score | (paramètres non fiables) | 3 (3 proj.) | `Hi-Score: Event ID -81, 1 Parameters { 0 }` |
| 1 | -82 | Is visible ? | `Hiscore table <objet> is visible` | Le tableau de hi-scores <objet> est visible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ask for a player's name | `Ask <p0> name` | Demander le nom de <p0> | (paramètres non fiables) | 1 (1 proj.) | `Hi-Score : Event ID 80, 1 Parameters { 0 }` |
| 1 | 81 | Visibility > Make object invisible | `Hide` | Cacher |  | — |  |
| 2 | 82 | Visibility > Make object reappear | `Show` | Montrer |  | — |  |
| 3 | 83 | Reset | `Reset` | Remise à zéro |  | — |  |
| 4 | 84 | Change one name | `Change name <p0> to <p1>` | Changer le nom <p0> en <p1> | (paramètres non fiables) | 1 (1 proj.) | `High Scores : Event ID 84, 2 Parameters { value("Names & numbers"), Expression ID 81("Ini") }` |
| 5 | 85 | Change one score | `Change score <p0> to <p1>` | Changer le score <p0> en <p1> | (paramètres non fiables) | 1 (1 proj.) | `High Scores : Event ID 85, 2 Parameters { value("Names & numbers"), Expression ID 80("Ini") }` |
| 6 | 86 | Position > Select position... | `Set position to <p0>` | Fixer la position à <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Position > Set Horizontal Position | `Set horizontal position to <p0>` | Fixer la position horizontale à <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Position > Set Vertical Position | `Set vertical position to <p0>` | Fixer la position verticale à <p0> | (paramètres non fiables) | — |  |
| 9 | 89 | Insert a hiscore | `Insert hiscore <p0> and name <p1>` | Insérer hi-score <p0> et le nom <p1> | (paramètres non fiables) | — |  |
| 10 | 90 | File > Set current file | `Set current file to <p0>` | Fixer fichier courant à <p0> | (paramètres non fiables) | 1 (1 proj.) | `High Scores : Event ID 90, 1 Parameters { Apppath$ + "scores.ini" }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Hiscore value | `Hiscore(` | Valeur d'un hi-score | (paramètres non fiables) | — |  |
| 1 | 81 | Hiscore name | `Hiscore name$(` | Nom d'un hi-score | (paramètres non fiables) | — |  |
| 2 | 82 | X Position of hiscore table | `Hiscore X pos(` | Position en X du tableau de hi-scores |  | — |  |
| 3 | 83 | Y Position of hiscore table | `Hiscore Y pos(` | Position en Y du tableau de hi-scores |  | — |  |
