# Extension KcArray

- File: `KcArray.mfx` — installed with Fusion
- Name(s) shown in projects: “Tableau”, “Array”
- Usage in the corpus: 1214 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is the index to the X dimension at end? | `<object>: Index to the X dimension at end` | <object>: Index de la dimension X à la fin |  | — |  |
| 1 | -82 | Is the index to the Y dimension at end? | `<object>: Index to the Y dimension at end` | <object>: Index de la dimension Y à la fin |  | — |  |
| 2 | -83 | Is the index to the Z dimension at end? | `<object>: Index to the Z dimension at end` | <object>: Index de la dimension Z à la fin |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change Current Position > Set X dimension index to... | `Set X dimension index to <p0>` | Fixer l'index de la dimension X à <p0> | numeric expression “Set X dimension index to...” | 6 (4 proj.) | `SEAT ARRAY : Event ID 80, 1 Parameters { 1 + Alterable Value B("SEAT-MAKER") }` |
| 1 | 81 | Change Current Position > Set Y dimension index to... | `Set Y dimension index to <p0>` | Fixer l'index de la dimension Y à <p0> | numeric expression “Set Y dimension index to...” | 14 (10 proj.) | `SEAT ARRAY : Event ID 81, 1 Parameters { 1 + Alterable Value A("SEAT-MAKER") }` |
| 2 | 82 | Change Current Position > Set Z dimension index to... | `Set Z dimension index to <p0>` | Fixer l'index de la dimension Z à <p0> | numeric expression “Set Z dimension index to...” | 3 (1 proj.) | `SEAT ARRAY : Event ID 82, 1 Parameters { 1 }` |
| 3 | 83 | Change Current Position > Add 1 to X dimension index | `Add 1 to X dimension index` | Ajouter 1 à l'index de la dimension X |  | 5 (3 proj.) |  |
| 4 | 84 | Change Current Position > Add 1 to Y dimension index | `Add 1 to Y dimension index` | Ajouter 1 à l'index de la dimension Y |  | 9 (9 proj.) |  |
| 5 | 85 | Change Current Position > Add 1 to Z dimension index | `Add 1 to Z dimension index` | Ajouter 1 à l'index de la dimension Z |  | — |  |
| 6 | 86 | Write > Write Value to current position | `Write Value <p0> to current array position` | Ecrire la valeur <p0> à la position courante | numeric expression “Write Value to current position” | 5 (2 proj.) | `SEAT ARRAY : Event ID 86, 1 Parameters { 1 + Random(6) }` |
| 7 | 87 | Write > Write String to current position | `Write String <p0> to current array position` | Ecrire la chaîne <p0> à la position courante | string expression “Write String to current position” | — |  |
| 8 | 88 | Clear array | `Clear array` | Effacer le tableau |  | 3 (1 proj.) |  |
| 9 | 89 | Files > Load array from file | `Load array from file <p0>` | Charger le tableau d'un fichier <p0> | file name “Please select an array file” | 47 (14 proj.) | `SEAT ARRAY : Event ID 89, 1 Parameters { Appdrive$ + Appdir$ + "flight.arr" }` |
| 10 | 90 | Files > Load array from file via a file selector | `Load array from file via a file selector` | Charger le tableau d'un fichier avec un sélecteur de fichiers |  | — |  |
| 11 | 91 | Files > Save array to file | `Save array to file <p0>` | Enregistrer le tableau dans le fichier <p0> | file name “Please select an array file” | 13 (6 proj.) | `SEAT ARRAY : Event ID 91, 1 Parameters { Appdrive$ + Appdir$ + "flight.arr" }` |
| 12 | 92 | Files > Save array to file via a file selector | `Save array to file via a file selector` | Enregistrer le tableau dans un fichier avec un sélecteur |  | — |  |
| 13 | 93 | Write > Write Value to X | `Write Value <p0> to (<p1>)` | Ecrire valeur <p0> en (<p1>) | numeric expression “Enter value to write”; numeric expression “Enter X index” | 19 (2 proj.) |  |
| 14 | 94 | Write > Write Value to XY | `Write Value <p0> to (<p1>, <p2>)` | Ecrire valeur <p0> en (<p1>, <p2>) | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” | 50 (3 proj.) |  |
| 15 | 95 | Write > Write Value to XYZ | `Write Value <p0> to (<p1>, <p2>, <p3>)` | Ecrire valeur <p0> en (<p1>, <p2>, <p3>) | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” | 243 (10 proj.) |  |
| 16 | 96 | Write > Write String to X | `Write String <p0> to (<p1>)` | Ecrire chaîne <p0> en (<p1>) | string expression “Enter string to write”; numeric expression “Enter X index” | 6 (2 proj.) | `Array : Event ID 96, 2 Parameters { Dropped$(LoopIndex("OnDrop")), LoopIndex("OnDrop") }` |
| 17 | 97 | Write > Write String to XY | `Write String <p0> to (<p1>, <p2>)` | Ecrire chaîne <p0> en (<p1>, <p2>) | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” | 23 (4 proj.) |  |
| 18 | 98 | Write > Write String to XYZ | `Write String <p0> to (<p1>, <p2>, <p3>)` | Ecrire chaîne <p0> en (<p1>, <p2>, <p3>) | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” | — |  |
| -18 | 62 | ? | ? |  |  | 18 (5 proj.) |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current position of X index | `index x(` | Position courante de l'index X |  | — |  |
| 1 | 81 | Current position of Y index | `index y(` | Position courante de l'index Y |  | 35 (9 proj.) |  |
| 2 | 82 | Current position of Z index | `index z(` | Position courante de l'index Z |  | — |  |
| 3 | 83 | Read Value from current position | `current value(` | Lire la valeur à la position courante |  | 4 (1 proj.) | `Expression ID 83("SEAT ARRAY")` |
| 4 | 84 | Read String from current position | `current str$(` | Lire la chaîne à la position courante | → string | 2 (2 proj.) |  |
| 5 | 85 | Read Value from X position | `ValueAtX(` | Lire la valeur à la position X | number “Enter X offset” | 17 (3 proj.) |  |
| 6 | 86 | Read Value from XY position | `ValueAtXY(` | Lire la valeur à la position XY | number “Enter X offset”; number “Enter Y offset” | 24 (3 proj.) |  |
| 7 | 87 | Read Value from XYZ position | `ValueAtXYZ(` | Lire la valeur à la position XYZ | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” | 529 (10 proj.) |  |
| 8 | 88 | Read String from X position | `StrAtX(` | Lire la chaîne à la position en X | number “Enter X offset” → string | 6 (2 proj.) | `Expression ID 88("Array")` |
| 9 | 89 | Read String from XY position | `StrAtXY(` | Lire la chaîne à la position en XY | number “Enter X offset”; number “Enter Y offset” → string | 111 (12 proj.) |  |
| 10 | 90 | Read String from XYZ position | `StrAtXYZ(` | Lire la chaîne à la position XYZ | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” → string | — |  |
| 11 | 91 | X dimension | `DimX(` | Dimension X |  | 2 (2 proj.) |  |
| 12 | 92 | Y dimension | `DimY(` | Dimension Y |  | 20 (12 proj.) |  |
| 13 | 93 | Z dimension | `DimZ(` | Dimension Z |  | — |  |
