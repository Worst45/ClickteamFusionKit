# Extension kcodbc

- File: `kcodbc.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Can get data ? | `<object>: can get data` | <object>: données prêtes? |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Select data source | `Select a data source` | Sélectionner une nouvelle source de données | (unreliable parameters) |
| 1 | 81 | Select data source via a selector | `Select a data source via a selector` | Choisir une source de données avec un sélecteur |  |
| 2 | 82 | Send SQL command | `Send SQL command <p0>` | Envoyer la commande SQL <p0> | (unreliable parameters) |
| 3 | 83 | New statement | `New statement` | Nouvelle instruction |  |
| 4 | 84 | Get row | `Get row` | Récupérer rangée |  |
| 5 | 85 | Set row max length | `Set row max length to <p0>` | Fixer la taille maxi des rangées à <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get rows count | `RowCount(` | Récupérer le nombre de rangées |  |
| 1 | 81 | Get columns count | `ColCount(` | Récupérer le nombre de colonnes |  |
| 2 | 82 | Get name of column | `ColName$(` | Récupérer le nom d'une colonne | (unreliable parameters) |
| 3 | 83 | Get text in column | `ColText$(` | Récupérer le texte dans une colonne | (unreliable parameters) |
| 4 | 84 | Get number in column | `ColNumber(` | Récupérer le nombre dans une colonne | (unreliable parameters) |
