# Extension ListView

- Fichier : `ListView.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « List View »
- Usage dans le corpus : 51 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked on a column? | `<objet>: Click with left button` | <objet>: Clic avec le bouton gauche |  | 1 (1 proj.) | `List View: Event ID -81, 0 Parameters` |
| 1 | -82 | ? | ? |  |  | 1 (1 proj.) | `List View: Event ID -82, 0 Parameters` |
| 2 | -83 | ? | ? |  |  | 1 (1 proj.) | `List View: Event ID -83, 0 Parameters` |
| 3 | -84 | ? | ? |  |  | 1 (1 proj.) | `List View: Event ID -84, 0 Parameters` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Edit > Insert line | `<objet> : Insert line <p1> at position <p0>` | <objet>: Insérer ligne <p1> en position <p0> | expression numérique « Enter the number of the line (zero based) » ; expression chaîne « Enter the name » | 1 (1 proj.) | `List View : Event ID 80, 2 Parameters { value("Item"), "Item" }` |
| -76 | 4 | ? | ? |  |  | 2 (1 proj.) | `List View : Stop` |
| -75 | 5 | ? | ? |  |  | 1 (1 proj.) | `List View : Start` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 82, 4 Parameters { value("Column Clicked"), "Column", 64, 1 }` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 83, 1 Parameters { value("Item") }` |
| 4 | 84 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 84, 1 Parameters { value("Column Clicked") }` |
| 5 | 85 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 85, 1 Parameters { Expression ID 81("List View") }` |
| 6 | 86 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 86, 1 Parameters { Expression ID 81("List View") }` |
| 9 | 89 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 89, 1 Parameters { Expression ID 95("File") }` |
| 10 | 90 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 90, 1 Parameters { Expression ID 95("File") }` |
| 11 | 91 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 91, 2 Parameters { value("Item"), value("Column") }` |
| 12 | 92 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 92, 0 Parameters` |
| 13 | 93 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 93, 0 Parameters` |
| 14 | 94 | ? | ? |  |  | 2 (1 proj.) | `List View : Event ID 94, 1 Parameters { Expression ID 87("List View") - 8 }` |
| 15 | 95 | ? | ? |  |  | 2 (1 proj.) | `List View : Event ID 95, 1 Parameters { Expression ID 88("List View") - 8 }` |
| 16 | 96 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 96, 0 Parameters` |
| 17 | 97 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 97, 0 Parameters` |
| 18 | 98 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 98, 0 Parameters` |
| 20 | 100 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 100, 1 Parameters { Expression ID 95("File") }` |
| 21 | 101 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 101, 2 Parameters { Expression ID 95("File"), 1 }` |
| 22 | 102 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 102, 2 Parameters { Expression ID 95("File"), "" }` |
| 23 | 103 | ? | ? |  |  | 1 (1 proj.) | `List View : Event ID 103, 1 Parameters { Expression ID 95("File") }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Get line at click | `ItemClick(` | Ligne sous clic |  | 3 (1 proj.) | `Expression ID 80("List View")` |
| 1 | 81 | ? | ? |  |  | 6 (1 proj.) | `Expression ID 81("List View")` |
| 2 | 82 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 82("List View")` |
| 3 | 83 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 83("List View")` |
| 4 | 84 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 84("List View")` |
| 5 | 85 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 85("List View")` |
| 6 | 86 | ? | ? |  |  | 3 (1 proj.) | `Expression ID 86("List View")` |
| 7 | 87 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 87("List View")` |
| 8 | 88 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 88("List View")` |
| 9 | 89 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 89("List View")` |
| 10 | 90 | ? | ? |  |  | 1 (1 proj.) | `Expression ID 90("List View")` |
