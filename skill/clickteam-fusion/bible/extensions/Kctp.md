# Extension Kctp

- File: `Kctp.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare number of days since first use |  | Comparer au nombre de jours depuis la première utilisation |  | — |  |
| 1 | -82 | Never used? |  | Jamais utilisé? |  | — |  |
| 2 | -83 | Data Integrity Problem? |  | Problème d'intégrité des données |  | — |  |
| 3 | -84 | Compare number of days since highest use |  | Comparer au nombre de jours depuis la plus grande utilisation |  | — |  |
| 4 | -85 | Is Trial Period Expired? |  | La période d'essai est achevée? |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Read Info |  | Lire les informations |  | — |  |
| 1 | 81 | Reset Info |  | RAZ informations |  | — |  |
| 2 | 82 | Display Message |  | Afficher message |  | — |  |
| 3 | 83 | Set Private Data |  | Changer donnée privée |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Number of days since first use |  | Nombre de jours depuis la première utilisation |  | — |  |
| 1 | 81 | Number of days since highest use |  | Nombre de jours depuis la plus grande utilisation |  | — |  |
| 2 | 82 | Private Data |  | Donnée privée |  | — |  |
