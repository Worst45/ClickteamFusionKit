# Extension KcArray

- File: `KcArray.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is the index to the X dimension at end? | `<object>: Index to the X dimension at end` | <object>: Index de la dimension X à la fin |  |
| 1 | -82 | Is the index to the Y dimension at end? | `<object>: Index to the Y dimension at end` | <object>: Index de la dimension Y à la fin |  |
| 2 | -83 | Is the index to the Z dimension at end? | `<object>: Index to the Z dimension at end` | <object>: Index de la dimension Z à la fin |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Change Current Position > Set X dimension index to... | `Set X dimension index to <p0>` | Fixer l'index de la dimension X à <p0> | numeric expression “Set X dimension index to...” |
| 1 | 81 | Change Current Position > Set Y dimension index to... | `Set Y dimension index to <p0>` | Fixer l'index de la dimension Y à <p0> | numeric expression “Set Y dimension index to...” |
| 2 | 82 | Change Current Position > Set Z dimension index to... | `Set Z dimension index to <p0>` | Fixer l'index de la dimension Z à <p0> | numeric expression “Set Z dimension index to...” |
| 3 | 83 | Change Current Position > Add 1 to X dimension index | `Add 1 to X dimension index` | Ajouter 1 à l'index de la dimension X |  |
| 4 | 84 | Change Current Position > Add 1 to Y dimension index | `Add 1 to Y dimension index` | Ajouter 1 à l'index de la dimension Y |  |
| 5 | 85 | Change Current Position > Add 1 to Z dimension index | `Add 1 to Z dimension index` | Ajouter 1 à l'index de la dimension Z |  |
| 6 | 86 | Write > Write Value to current position | `Write Value <p0> to current array position` | Ecrire la valeur <p0> à la position courante | numeric expression “Write Value to current position” |
| 7 | 87 | Write > Write String to current position | `Write String <p0> to current array position` | Ecrire la chaîne <p0> à la position courante | string expression “Write String to current position” |
| 8 | 88 | Clear array | `Clear array` | Effacer le tableau |  |
| 9 | 89 | Files > Load array from file | `Load array from file <p0>` | Charger le tableau d'un fichier <p0> | file name “Please select an array file” |
| 10 | 90 | Files > Load array from file via a file selector | `Load array from file via a file selector` | Charger le tableau d'un fichier avec un sélecteur de fichiers |  |
| 11 | 91 | Files > Save array to file | `Save array to file <p0>` | Enregistrer le tableau dans le fichier <p0> | file name “Please select an array file” |
| 12 | 92 | Files > Save array to file via a file selector | `Save array to file via a file selector` | Enregistrer le tableau dans un fichier avec un sélecteur |  |
| 13 | 93 | Write > Write Value to X | `Write Value <p0> to (<p1>)` | Ecrire valeur <p0> en (<p1>) | numeric expression “Enter value to write”; numeric expression “Enter X index” |
| 14 | 94 | Write > Write Value to XY | `Write Value <p0> to (<p1>, <p2>)` | Ecrire valeur <p0> en (<p1>, <p2>) | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” |
| 15 | 95 | Write > Write Value to XYZ | `Write Value <p0> to (<p1>, <p2>, <p3>)` | Ecrire valeur <p0> en (<p1>, <p2>, <p3>) | numeric expression “Enter value to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” |
| 16 | 96 | Write > Write String to X | `Write String <p0> to (<p1>)` | Ecrire chaîne <p0> en (<p1>) | string expression “Enter string to write”; numeric expression “Enter X index” |
| 17 | 97 | Write > Write String to XY | `Write String <p0> to (<p1>, <p2>)` | Ecrire chaîne <p0> en (<p1>, <p2>) | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index” |
| 18 | 98 | Write > Write String to XYZ | `Write String <p0> to (<p1>, <p2>, <p3>)` | Ecrire chaîne <p0> en (<p1>, <p2>, <p3>) | string expression “Enter string to write”; numeric expression “Enter X index”; numeric expression “Enter Y index”; numeric expression “Enter Z index” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Current position of X index | `index x(` | Position courante de l'index X |  |
| 1 | 81 | Current position of Y index | `index y(` | Position courante de l'index Y |  |
| 2 | 82 | Current position of Z index | `index z(` | Position courante de l'index Z |  |
| 3 | 83 | Read Value from current position | `current value(` | Lire la valeur à la position courante |  |
| 4 | 84 | Read String from current position | `current str$(` | Lire la chaîne à la position courante | → string |
| 5 | 85 | Read Value from X position | `ValueAtX(` | Lire la valeur à la position X | number “Enter X offset” |
| 6 | 86 | Read Value from XY position | `ValueAtXY(` | Lire la valeur à la position XY | number “Enter X offset”; number “Enter Y offset” |
| 7 | 87 | Read Value from XYZ position | `ValueAtXYZ(` | Lire la valeur à la position XYZ | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” |
| 8 | 88 | Read String from X position | `StrAtX(` | Lire la chaîne à la position en X | number “Enter X offset” → string |
| 9 | 89 | Read String from XY position | `StrAtXY(` | Lire la chaîne à la position en XY | number “Enter X offset”; number “Enter Y offset” → string |
| 10 | 90 | Read String from XYZ position | `StrAtXYZ(` | Lire la chaîne à la position XYZ | number “Enter X offset”; number “Enter Y offset”; number “Enter Z offset” → string |
| 11 | 91 | X dimension | `DimX(` | Dimension X |  |
| 12 | 92 | Y dimension | `DimY(` | Dimension Y |  |
| 13 | 93 | Z dimension | `DimZ(` | Dimension Z |  |
