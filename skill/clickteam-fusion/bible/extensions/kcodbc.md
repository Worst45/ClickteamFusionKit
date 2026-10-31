# Extension kcodbc

- Fichier : `kcodbc.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « ODBC »
- Usage dans le corpus : 12 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Can get data ? | `<objet>: can get data` | <objet>: données prêtes? |  | 2 (1 proj.) | `ODBC: Event ID -81, 0 Parameters` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select data source | `Select a data source` | Sélectionner une nouvelle source de données | (paramètres non fiables) | — |  |
| 1 | 81 | Select data source via a selector | `Select a data source via a selector` | Choisir une source de données avec un sélecteur |  | — |  |
| 2 | 82 | Send SQL command | `Send SQL command <p0>` | Envoyer la commande SQL <p0> | (paramètres non fiables) | 1 (1 proj.) | `ODBC : Event ID 82, 1 Parameters { Expression ID 80("SQL STRING") }` |
| 3 | 83 | New statement | `New statement` | Nouvelle instruction |  | 1 (1 proj.) | `ODBC : Event ID 83, 0 Parameters` |
| 4 | 84 | Get row | `Get row` | Récupérer rangée |  | 2 (1 proj.) | `ODBC : Event ID 84, 0 Parameters` |
| 5 | 85 | Set row max length | `Set row max length to <p0>` | Fixer la taille maxi des rangées à <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get rows count | `RowCount(` | Récupérer le nombre de rangées |  | — |  |
| 1 | 81 | Get columns count | `ColCount(` | Récupérer le nombre de colonnes |  | — |  |
| 2 | 82 | Get name of column | `ColName$(` | Récupérer le nom d'une colonne | (paramètres non fiables) | — |  |
| 3 | 83 | Get text in column | `ColText$(` | Récupérer le texte dans une colonne | (paramètres non fiables) | 3 (1 proj.) | `Expression ID 83("ODBC")` |
| 4 | 84 | Get number in column | `ColNumber(` | Récupérer le nombre dans une colonne | (paramètres non fiables) | 3 (1 proj.) | `Expression ID 84("ODBC")` |
