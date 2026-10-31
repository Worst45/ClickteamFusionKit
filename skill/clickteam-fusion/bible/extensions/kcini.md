# Extension kcini

- File: `kcini.mfx` — installed with Fusion
- Name(s) shown in projects: “Ini”
- Usage in the corpus: 219 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set current group | `Set current group to <p0>` | Fixer groupe courant à <p0> | string expression “Set current group” | 8 (4 proj.) | `Ini : Event ID 80, 1 Parameters { "what?" }` |
| 1 | 81 | Set current item | `Set current item to <p0>` | Fixer élément courant à <p0> | string expression “Set current item” | 25 (4 proj.) | `Ini : Event ID 81, 1 Parameters { "installed" }` |
| 2 | 82 | Set value | `Set item value <p0>` | Fixer la valeur à <p0> | numeric expression “Set value” | 13 (3 proj.) | `Ini : Event ID 82, 1 Parameters { 1 }` |
| 3 | 83 | Save position of object | `Save position of <p0>` | Enregistrer la position de <p0> | object “Save position of object” | — |  |
| 4 | 84 | Load position of object | `Load position of <p0>` | Charger la position de <p0> | object “Load position of object” | — |  |
| 5 | 85 | Set string | `Set item string <p0>` | Fixer la chaîne à <p0> | string expression “Set string” | 10 (1 proj.) | `Ini : Event ID 85, 1 Parameters { "Arran Maclean" }` |
| 6 | 86 | Set current file | `Set current file to <p0>` | Fixer fichier courant à <p0> | string expression “Set current file” | 16 (8 proj.) | `Ini : Event ID 86, 1 Parameters { Appdrive$ + Appdir$ + "scores.ini" }` |
| 7 | 87 | Set value (item) | `Set value <p1> to item <p0>` | Fixer valeur <p1> dans élément <p0> | string expression “Enter Item Name”; numeric expression “Enter Value” | — |  |
| 8 | 88 | Set value (group - item) | `Set value <p2> to item <p1> in group <p0>` | Fixer valeur <p2> dans élément <p1> et groupe <p0> | string expression “Enter Group Name”; string expression “Enter Item Name”; numeric expression “Enter Value” | 68 (8 proj.) |  |
| 9 | 89 | Set string (item) | `Set string <p1> to item <p0>` | Fixer chaîne <p1> de l'élément <p0> | string expression “Enter Item Name”; string expression “Enter String” | — |  |
| 10 | 90 | Set string (group - item) | `Set string <p2> to item <p1> in group <p0>` | Fixer chaîne <p2> de l'élément <p1> dans le groupe <p0> | string expression “Enter Group Name”; string expression “Enter Item Name”; string expression “Enter String” | — |  |
| 11 | 91 | Delete item | `Delete item <p0>` | Détruire élément <p0> | string expression “Enter Item Name” | — |  |
| 12 | 92 | Delete item (group) | `Delete item <p1> in group <p0>` | Détruire élément <p1> dans groupe <p0> | string expression “Enter Group Name”; string expression “Enter Item Name” | — |  |
| 13 | 93 | Delete group | `Delete group <p0>` | Détruire groupe <p0> | string expression “Enter Group Name” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value | `value of(` | Récupérer valeur |  | 5 (3 proj.) | `Expression ID 80("Ini")` |
| 1 | 81 | Get string | `string of$(` | Récupérer chaîne | → string | 1 (1 proj.) | `Expression ID 81("Ini")` |
| 2 | 82 | Get value (item) | `ItemValue(` | Récupérer valeur (élément) | string “Item name” | — |  |
| 3 | 83 | Get value (group - item) | `GroupItemValue(` | Récupérer valeur (groupe - élément) | string “Group name”; string “Item name” | 62 (9 proj.) |  |
| 4 | 84 | Get string (item) | `ItemString$(` | Récupérer chaîne (élément) | string “Item name” → string | — |  |
| 5 | 85 | Get string (group - item) | `GroupItemString$(` | Récupérer chaîne (groupe - élément) | string “Group name”; string “Item name” → string | 11 (1 proj.) |  |
