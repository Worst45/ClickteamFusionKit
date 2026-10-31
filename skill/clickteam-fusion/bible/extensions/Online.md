# Extension Online

- Fichier : `Online.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is the index to the X dimension at end? | `<objet>: Index to the X dimension at end` |  |  | — |  |
| 1 | -82 | Is the index to the Y dimension at end? | `<objet>: Index to the Y dimension at end` |  |  | — |  |
| 2 | -83 | Is the index to the Z dimension at end? | `<objet>: Index to the Z dimension at end` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Change Current Position > Set X dimension index to... | `Set X dimension index to <p0>` |  | expression numérique « Set X dimension index to... » | — |  |
| 1 | 81 | Change Current Position > Set Y dimension index to... | `Set Y dimension index to <p0>` |  | expression numérique « Set Y dimension index to... » | — |  |
| 2 | 82 | Change Current Position > Set Z dimension index to... | `Set Z dimension index to <p0>` |  | expression numérique « Set Z dimension index to... » | — |  |
| 3 | 83 | Change Current Position > Add 1 to X dimension index | `Add 1 to X dimension index` |  |  | — |  |
| 4 | 84 | Change Current Position > Add 1 to Y dimension index | `Add 1 to Y dimension index` |  |  | — |  |
| 5 | 85 | Change Current Position > Add 1 to Z dimension index | `Add 1 to Z dimension index` |  |  | — |  |
| 6 | 86 | Write > Write Value to current position | `Write Value <p0> to current array position` |  | expression numérique « Write Value to current position » | — |  |
| 7 | 87 | Write > Write String to current position | `Write String <p0> to current array position` |  | expression chaîne « Write String to current position » | — |  |
| 8 | 88 | Clear array | `Clear array` |  |  | — |  |
| 9 | 89 | Files > Load array from file | `Load array from file <p0>` |  | nom de fichier « Please select an array file » | — |  |
| 10 | 90 | Files > Load array from file via a file selector | `Load array from file via a file selector` |  |  | — |  |
| 11 | 91 | Files > Save array to file | `Save array to file <p0>` |  | nom de fichier « Please select an array file » | — |  |
| 12 | 92 | Files > Save array to file via a file selector | `Save array to file via a file selector` |  |  | — |  |
| 13 | 93 | Write > Write Value to X | `Write Value <p0> to (<p1>)` |  | expression numérique « Enter value to write » ; expression numérique « Enter X index » | — |  |
| 14 | 94 | Write > Write Value to XY | `Write Value <p0> to (<p1>, <p2>)` |  | expression numérique « Enter value to write » ; expression numérique « Enter X index » ; expression numérique « Enter Y index » | — |  |
| 15 | 95 | Write > Write Value to XYZ | `Write Value <p0> to (<p1>, <p2>, <p3>)` |  | expression numérique « Enter value to write » ; expression numérique « Enter X index » ; expression numérique « Enter Y index » ; expression numérique « Enter Z index » | — |  |
| 16 | 96 | Write > Write String to X | `Write String <p0> to (<p1>)` |  | expression chaîne « Enter string to write » ; expression numérique « Enter X index » | — |  |
| 17 | 97 | Write > Write String to XY | `Write String <p0> to (<p1>, <p2>)` |  | expression chaîne « Enter string to write » ; expression numérique « Enter X index » ; expression numérique « Enter Y index » | — |  |
| 18 | 98 | Write > Write String to XYZ | `Write String <p0> to (<p1>, <p2>, <p3>)` |  | expression chaîne « Enter string to write » ; expression numérique « Enter X index » ; expression numérique « Enter Y index » ; expression numérique « Enter Z index » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current position of X index | `index x(` |  |  | — |  |
| 1 | 81 | Current position of Y index | `index y(` |  |  | — |  |
| 2 | 82 | Current position of Z index | `index z(` |  |  | — |  |
| 3 | 83 | Read Value from current position | `current value(` |  |  | — |  |
| 4 | 84 | Read String from current position | `current str$(` |  | → chaîne | — |  |
| 5 | 85 | Read Value from X position | `ValueAtX(` |  | nombre « Enter X offset » | — |  |
| 6 | 86 | Read Value from XY position | `ValueAtXY(` |  | nombre « Enter X offset » ; nombre « Enter Y offset » | — |  |
| 7 | 87 | Read Value from XYZ position | `ValueAtXYZ(` |  | nombre « Enter X offset » ; nombre « Enter Y offset » ; nombre « Enter Z offset » | — |  |
| 8 | 88 | Read String from X position | `StrAtX(` |  | nombre « Enter X offset » → chaîne | — |  |
| 9 | 89 | Read String from XY position | `StrAtXY(` |  | nombre « Enter X offset » ; nombre « Enter Y offset » → chaîne | — |  |
| 10 | 90 | Read String from XYZ position | `StrAtXYZ(` |  | nombre « Enter X offset » ; nombre « Enter Y offset » ; nombre « Enter Z offset » → chaîne | — |  |
| 11 | 91 | X dimension | `DimX(` |  |  | — |  |
| 12 | 92 | Y dimension | `DimY(` |  |  | — |  |
| 13 | 93 | Z dimension | `DimZ(` |  |  | — |  |
