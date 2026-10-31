# Extension sql

- Fichier : `sql.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | SQL Error? | `<objet> Error` |  |  | — |  |
| 1 | -82 | DB Open? | `<objet> Database Open` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open File | `Open Database file (string: <p0>)` |  | expression chaîne « Database file name » | — |  |
| 1 | 81 | Open File from selector | `Open Database file from selector` |  | nom de fichier « Database file name » | — |  |
| 2 | 82 | Close File | `Close Database file` |  |  | — |  |
| 3 | 83 | Run SQL | `Run SQL String <p0>` |  | expression chaîne « SQL String » | — |  |
| 4 | 84 | Set Current Row | `Set Current Row <p0>` |  | expression numérique « Row Number » | — |  |
| 5 | 85 | Set Current Column | `Set Current Column <p0>` |  | expression numérique « Column Number » | — |  |
| 6 | 86 | Clear Last Error | `Clear Last Error` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Data | `Data(` |  | → chaîne | — |  |
| 1 | 81 | Get Column Name | `ColumnName(` |  | → chaîne | — |  |
| 2 | 82 | Get Num Rows | `Rows(` |  |  | — |  |
| 3 | 83 | Get Num Cols | `Cols(` |  |  | — |  |
| 4 | 84 | Get Error Code | `Err(` |  |  | — |  |
| 5 | 85 | Get Error Message | `ErrMsg(` |  | → chaîne | — |  |
| 6 | 86 | Get Data from Row, Col | `DataRowCol(` |  | nombre ; nombre → chaîne | — |  |
| 7 | 87 | Get Data from Col Name | `DataColbyName(` |  | chaîne → chaîne | — |  |
| 8 | 88 | Get Data from Row, Col Name | `DataRowColbyName(` |  | nombre ; chaîne → chaîne | — |  |
| 9 | 89 | Quote | `Quote(` |  | chaîne → chaîne | — |  |
| 10 | 90 | Get Current Row Index | `CurrRow(` |  |  | — |  |
| 11 | 91 | Get Current Column Index | `CurrCol(` |  |  | — |  |
