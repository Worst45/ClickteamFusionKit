# Extension KcDbl

- Fichier : `KcDbl.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Double-Precision Calculator »
- Usage dans le corpus : 5 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Format > Standard |  |  |  | — |  |
| 1 | 81 | Set Format > N digits |  | N chiffres |  | — |  |
| 2 | 82 | Set Format > N digits after decimal point |  | N chiffres après la virgule |  | 1 (1 proj.) | `Double-Precision Calculator : Event ID 82, 1 Parameters { 2 }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add |  |  |  | 1 (1 proj.) | `Expression ID 80("Double-Precision Calculator")` |
| 1 | 81 | Subtract |  |  |  | 1 (1 proj.) | `Expression ID 81("Double-Precision Calculator")` |
| 2 | 82 | Multiply |  |  |  | 1 (1 proj.) | `Expression ID 82("Double-Precision Calculator")` |
| 3 | 83 | Divide |  |  |  | 1 (1 proj.) | `Expression ID 83("Double-Precision Calculator")` |
| 4 | 84 | Format ... > N digits |  | N chiffres |  | — |  |
| 5 | 85 | Format ... > N digits after decimal point |  | N chiffres après la virgule |  | — |  |
