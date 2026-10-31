# Extension datagrid

- File: `datagrid.mfx` — installed with Fusion
- Name(s) shown in projects: “Objet Tableur”
- Usage in the corpus: 69 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked with left button? | `<object> : Click with left button` | <object>: Clic avec le bouton gauche |  | 1 (1 proj.) | `DataGrid Object: Event ID -81, 0 Parameters` |
| 1 | -82 | Click > Clicked with right button? | `<object> : Click with right button` | <object>: Clic avec le bouton droit |  | 1 (1 proj.) | `DataGrid Object: Event ID -82, 0 Parameters` |
| 2 | -83 | Click > Double click? | `<object> : Double click?` | <object>: Double clic? |  | 1 (1 proj.) | `DataGrid Object: Event ID -83, 0 Parameters` |
| 3 | -84 | Window > Is object enabled? | `Is <object> enabled?` | <object> est-il activé? |  | — |  |
| 4 | -85 | Window > Is object visible? | `Is <object> visible ?` | <object> est-il visible? |  | — |  |
| 5 | -86 | Enumeration > On enumeration | `On enumeration` | Lors d'énumération |  | 5 (1 proj.) | `DataGrid Object: Event ID -86, 0 Parameters` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Show | `Show` | Montrer |  | 1 (1 proj.) | `DataGrid Object : Event ID 80, 0 Parameters` |
| 1 | 81 | Window > Hide | `Hide` | Cacher |  | 1 (1 proj.) | `DataGrid Object : Event ID 81, 0 Parameters` |
| 2 | 82 | Window > Set width | `Set width to <p0>` | Fixer la largeur à <p0> | numeric expression “Set width” | — |  |
| 3 | 83 | Window > Set height | `Set height to <p0>` | Fixer la hauteur à <p0> | numeric expression “Set height” | — |  |
| 4 | 84 | Window > Enable | `Enable` | Activer |  | 1 (1 proj.) | `DataGrid Object : Event ID 84, 0 Parameters` |
| 5 | 85 | Window > Disable | `Disable` | Désactiver |  | 1 (1 proj.) | `DataGrid Object : Event ID 85, 0 Parameters` |
| 6 | 86 | Enumeration > Enumerate selected cells | `Enumerate selected cells` | Enumérer les cellules sélectionnées |  | 5 (1 proj.) | `DataGrid Object : Event ID 86, 0 Parameters` |
| 7 | 87 | Enumeration > Enumerate all cells | `Enumerate all cells` | Enumérer toutes les cellules |  | — |  |
| 8 | 88 | Cell > Set cell text | `Set cell (<p0>, <p1>) text to <p2>` | Fixer le texte de la cellule (<p0>, <p1>) à <p2> | numeric expression “Enter line number”; numeric expression “Enter column number”; string expression “Enter cell text” | — |  |
| 9 | 89 | Edit > Insert line | `Insert line <p0> with title <p1>` | Insérer ligne <p0> avec titre <p1> | numeric expression “Enter line number”; string expression “Enter line's title” | 1 (1 proj.) | `DataGrid Object : Event ID 89, 2 Parameters { value("Selected Line"), "Line" }` |
| 10 | 90 | Edit > Insert column | `Insert column <p0> with title <p1>` | Insérer colonne <p0> avec titre <p1> | numeric expression “Enter column number”; string expression “Enter column's title” | 1 (1 proj.) | `DataGrid Object : Event ID 90, 2 Parameters { value("Selected Column"), "Column" }` |
| 11 | 91 | Edit > Set line height | `Set height of line <p0> to <p1>` | Fixer la hauteur de la ligne <p0> à <p1> | numeric expression “Enter line number”; numeric expression “Enter new line height” | — |  |
| 12 | 92 | Edit > Set column width | `Set width of column <p0> to <p1>` | Fixer la largeur de la colonne <p0> à <p1> | numeric expression “Enter column number”; numeric expression “Enter new column width” | — |  |
| 13 | 93 | Edit > Delete line | `Delete line <p0>` | Détruire ligne <p0> | numeric expression “Enter line number” | 1 (1 proj.) | `DataGrid Object : Event ID 93, 1 Parameters { value("Selected Line") }` |
| 14 | 94 | Edit > Delete column | `Delete column <p0>` | Détruire colonne <p0> | numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 94, 1 Parameters { value("Selected Column") }` |
| 15 | 95 | Edit > Delete all | `Delete all` | Détruire tout |  | 1 (1 proj.) | `DataGrid Object : Event ID 95, 0 Parameters` |
| 16 | 96 | Edit > Print | `Print` | Imprimer |  | 1 (1 proj.) | `DataGrid Object : Event ID 96, 0 Parameters` |
| 17 | 97 | Grid > Set horizontal grid lines > On | `Horizontal grid ON` | Grille horizontale ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 97, 0 Parameters` |
| 18 | 98 | Grid > Set horizontal grid lines > Off | `Horizontal grid OFF` | Grille horizontale OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 98, 0 Parameters` |
| 19 | 99 | Grid > Set vertical grid lines > On | `Vertical grid ON` | Grille verticale ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 99, 0 Parameters` |
| 20 | 100 | Grid > Set vertical grid lines > Off | `Vertical grid OFF` | Grille verticale OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 100, 0 Parameters` |
| 21 | 101 | Grid > Display horizontal title line > On | `Horizontal title ON` | Titre horizontal ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 101, 0 Parameters` |
| 22 | 102 | Grid > Display horizontal title line > Off | `Horizontal title OFF` | Titre horizontal OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 102, 0 Parameters` |
| 23 | 103 | Grid > Display vertical title line > On | `Vertical title ON` | Titres verticaux ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 103, 0 Parameters` |
| 24 | 104 | Grid > Display vertical title line > Off | `Vertical title OFF` | Titres verticaux OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 104, 0 Parameters` |
| 25 | 105 | Grid > Editable > On | `Grid editable ON` | Grille éditable ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 105, 0 Parameters` |
| 26 | 106 | Grid > Editable > Off | `Grid editable OFF` | Grille éditable OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 106, 0 Parameters` |
| 27 | 107 | Grid > Enable selection > On | `Grid selectable ON` | Grille sélectionnable ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 107, 0 Parameters` |
| 28 | 108 | Grid > Enable selection > Off | `Grid Selectable OFF` | Grille sélectionnable OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 108, 0 Parameters` |
| 29 | 109 | Grid > Set line resize > On | `Line resize ON` | Redimensionnnement de ligne ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 109, 0 Parameters` |
| 30 | 110 | Grid > Set line resize > Off | `Line resize OFF` | Redimensionnement de ligne OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 110, 0 Parameters` |
| 31 | 111 | Grid > Set column resize > On | `Column resize ON` | Redimensionnement de colonne ON |  | 1 (1 proj.) | `DataGrid Object : Event ID 111, 0 Parameters` |
| 32 | 112 | Grid > Set column resize > Off | `Column resize OFF` | Redimensionnement de colonne OFF |  | 1 (1 proj.) | `DataGrid Object : Event ID 112, 0 Parameters` |
| 33 | 113 | Cell > Align text on the left | `Align text in cell (<p0>, <p1> ) to the left` | Aligner le text de la cellule (<p0>, <p1>) à gauche | numeric expression “Enter line number”; numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 113, 2 Parameters { Expression ID 95("DataGrid Object"), Expression ID 96("DataGrid Object") }` |
| 34 | 114 | Cell > Center text | `Center text in cell (<p0>, <p1> )` | Centrer le texte dans cellule (<p0>, <p1>) | numeric expression “Enter line number”; numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 114, 2 Parameters { Expression ID 95("DataGrid Object"), Expression ID 96("DataGrid Object") }` |
| 35 | 115 | Cell > Align text on the right | `Align text in cell (<p0>, <p1> ) to the right` | Aligner le texte de la cellule (<p0>, <p1>) à droite | numeric expression “Enter line number”; numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 115, 2 Parameters { Expression ID 95("DataGrid Object"), Expression ID 96("DataGrid Object") }` |
| 36 | 116 | Cell > Center text vertically | `Center vertically text in cell (<p0>, <p1> )` | Centrer le texte verticalement dans la cellule (<p0>, <p1>) | numeric expression “Enter line number”; numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 116, 2 Parameters { Expression ID 95("DataGrid Object"), Expression ID 96("DataGrid Object") }` |
| 37 | 117 | Cell > Align text on top | `Align text in cell (<p0>, <p1> ) on top` | Aligner le texte de la cellule (<p0>, <p1>) en haut | numeric expression “Enter line number”; numeric expression “Enter column number” | 1 (1 proj.) | `DataGrid Object : Event ID 117, 2 Parameters { Expression ID 95("DataGrid Object"), Expression ID 96("DataGrid Object") }` |
| 38 | 118 | Cell > Set background color | `Set back color of cell (<p0>, <p1> ) to <p2>` | Fixer la couleur de fond de la cellule (<p0>, <p1> ) à <p2> | numeric expression “Enter line number”; numeric expression “Enter column number”; color “Set background color” | — |  |
| 39 | 119 | Cell > Set font color | `Set font color of cell (<p0>, <p1> ) to <p2>` | Fixer la couleur de texte de la cellule (<p0>, <p1> ) à <p2> | numeric expression “Enter line number”; numeric expression “Enter column number”; color “Set font color” | — |  |
| 40 | 120 | File > Save | `Save <p0>` | Enregistrer <p0> | file name “Enter the name of the file” | 1 (1 proj.) | `DataGrid Object : Event ID 120, 1 Parameters { Expression ID 95("File") }` |
| 41 | 121 | File > Load | `Load <p0>` | Charger <p0> | file name “Enter the name of the file” | 1 (1 proj.) | `DataGrid Object : Event ID 121, 1 Parameters { Expression ID 95("File") }` |
| 42 | 122 | File > Save ascii | `Save ascii file <p0> with delimitor <p1>` | Enregistrer fichier ascii <p0> avec délimiteur <p1> | file name “Enter the name of the file”; string expression “Save ascii” | 1 (1 proj.) | `DataGrid Object : Event ID 122, 2 Parameters { Expression ID 95("File"), "" }` |
| 43 | 123 | File > Load ascii | `Load ascii file <p0> with delimitor <p1>` | Charger fichier ascii <p0> avec délimiteur <p1> | file name “Enter the name of the file”; string expression “Load ascii” | 1 (1 proj.) | `DataGrid Object : Event ID 123, 2 Parameters { Expression ID 95("File"), "" }` |
| 44 | 124 | Cell > Ensure cell is visible | `Ensure cell (<p0>, <p1> ) is visible` | Faire en sorte que la cellule (<p0>, <p1>) soit visible | numeric expression “Enter line number”; numeric expression “Enter column number” | — |  |
| 45 | 125 | Cell > Select cells | `Select cells from (<p0>, <p1> ) to (<p2>, <p3> )` | Sélectionner les cellules depuis (<p0>, <p1> ) à (<p2>, <p3> ) | numeric expression “Enter the line number of the top left cell to select”; numeric expression “Enter the column number of the top left cell to select”; numeric expression “Enter the line number of the bottom right cell to select”; numeric expression “Enter the column number of the bottom right cell to select” | — |  |
| 46 | 126 | File > Load from array object | `Load  "<p0>" from array object` | Charger "<p0>" d'un objet Tableau | file name “Enter the name of the file” | — |  |
| 47 | 127 | File > Save to array object | `Save "<p0>" to array object, type <p1>` | Enregistrer "<p0>" vers objet Tableau, type <p1> | file name “Enter the name of the file”; numeric expression “Save to array object” | — |  |
| 48 | 128 | Cell > Unselect cells | `Unselect cells` | Désélectionner les cellules |  | — |  |
| 49 | 129 | Edit > Autosize line | `Autosize line <p0>` | Auto-dimensionnement ligne <p0> | numeric expression “Enter line number” | — |  |
| 50 | 130 | Edit > Autosize column | `Autosize column <p0>` | Auto-dimensionnement colonne <p0> | numeric expression “Enter column number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Indexes > Get line at click | `LineClick(` | Ligne sous clic |  | 1 (1 proj.) | `Expression ID 80("DataGrid Object")` |
| 1 | 81 | Indexes > Get column at click | `ColumnClick(` | Colonne sous le clic |  | 1 (1 proj.) | `Expression ID 81("DataGrid Object")` |
| 2 | 82 | Indexes > Get line at coordinate | `Line(` | Ligne à une coordonnée | number “X Coordinate”; number “Y Coordinate” | 1 (1 proj.) | `Expression ID 82("DataGrid Object")` |
| 3 | 83 | Indexes > Get column at coordinate | `Column(` | Colonne à une coordonnée | number “X Coordinate”; number “Y Coordinate” | 1 (1 proj.) | `Expression ID 83("DataGrid Object")` |
| 4 | 84 | Indexes > Get cell X left coordinate | `dgXLeft(` | Coordonnée X gauche d'une cellule | number “Line number”; number “Column number” | — |  |
| 5 | 85 | Indexes > Get cell Y top coordinate | `dgYTop(` | Coordonnée Y haute d'une cellule | number “Line number”; number “Column number” | — |  |
| 6 | 86 | Indexes > Get cell X right coordinate | `dgXRight(` | Coordonnée X droite d'une cellule | number “Line number”; number “Column number” | — |  |
| 7 | 87 | Indexes > Get cell Y bottom coordinate | `dgYBottom(` | Coordonnée Y basse d'une cellule | number “Line number”; number “Column number” | — |  |
| 8 | 88 | Size > Get width | `Width(` | Largeur |  | — |  |
| 9 | 89 | Size > Get height | `Height(` | Hauteur |  | — |  |
| 10 | 90 | Information > Get cell text | `Text$(` | Texte d'une cellule | number “Enter line number”; number “Enter column number” → string | 1 (1 proj.) | `Expression ID 90("DataGrid Object")` |
| 11 | 91 | Information > Get number of lines | `NLines(` | Nombre de lignes |  | 1 (1 proj.) | `Expression ID 91("DataGrid Object")` |
| 12 | 92 | Information > Get number of columns | `NColumns(` | Nombre de colonnes |  | 1 (1 proj.) | `Expression ID 92("DataGrid Object")` |
| 13 | 93 | Information > Get line height | `LineSize(` | Hauteur d'une ligne | number “Line number” | 1 (1 proj.) | `Expression ID 93("DataGrid Object")` |
| 14 | 94 | Information > Get column width | `ColumnSize(` | Largeur d'une colonne | number “Column number” | 1 (1 proj.) | `Expression ID 94("DataGrid Object")` |
| 15 | 95 | Enumeration > Get enumerated line | `EnumLine(` | Ligne énumérée |  | 5 (1 proj.) | `Expression ID 95("DataGrid Object")` |
| 16 | 96 | Enumeration > Get enumerated column | `EnumColumn(` | Colonne enumérée |  | 5 (1 proj.) | `Expression ID 96("DataGrid Object")` |
| 17 | 97 | Indexes > Get selected line | `SelLine(` | Ligne sélectionnée |  | 1 (1 proj.) | `Expression ID 97("DataGrid Object")` |
| 18 | 98 | Indexes > Get selected column | `SelColumn(` | Colonne sélectionnée |  | 1 (1 proj.) | `Expression ID 98("DataGrid Object")` |
