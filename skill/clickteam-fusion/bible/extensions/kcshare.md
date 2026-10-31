# Extension kcshare

- Fichier : `kcshare.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Shared Data »
- Usage dans le corpus : 12 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | is Equal | `<objet>: Condition example <p0>=<p1>` | <objet>: Condition example <p0>=<p1> | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set shared value | `Shared value <p0>=<p1>` | Valeur partagée <p0>=<p1> | (paramètres non fiables) | — |  |
| 1 | 81 | Set shared value from string | `Shared value <p0>=val(<p1>)` | Valeur partagée <p0>=val(<p1>) | (paramètres non fiables) | — |  |
| 2 | 82 | Set shared string | `Shared string <p0>=<p1>` | Chaîne partagée <p0>=<p1> | (paramètres non fiables) | 8 (4 proj.) | `Shared Data : Event ID 82, 2 Parameters { 0, "" }` |
| 3 | 83 | Set shared string from value | `Shared string <p0>=str$(<p1>)` | Chaîne partagée <p0>=str$(<p1>) | (paramètres non fiables) | — |  |
| 4 | 84 | Reset | `Reset` | Remise à zéro |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get shared value | `Shared Value(` | Valeur partagée | (paramètres non fiables) | — |  |
| 1 | 81 | Get string from shared value | `Shared Value$(` | Chaîne à partir de valeur partagée | (paramètres non fiables) | — |  |
| 2 | 82 | Get shared String | `Shared String$(` | Chaîne partagée | (paramètres non fiables) | 4 (4 proj.) | `Expression ID 82("Shared Data")` |
| 3 | 83 | Get value from shared string | `Shared String(` | Valeur à partir de chaîne partagée | (paramètres non fiables) | — |  |
