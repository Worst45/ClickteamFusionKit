# Extension AdvDir

- Fichier : `AdvDir.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare distance between two points | `The distance between <p0> and <p1> is lower or equal to <p2>` |  | position « First position » ; position « Second position » ; expression numérique « Value to compare with » | — |  |
| 1 | -82 | Compare direction between two points | `The direction between <p0> and <p1> is closer than <p3> to <p2>` |  | position « First position » ; position « Second position » ; expression numérique « Direction » ; expression numérique « Offset value » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set number of directions | `<objet> : Set number of directions to <p0>` |  | expression numérique « Enter a direction value » | — |  |
| 1 | 81 | Get object distances and fixed values | `Find distance and fixed of <p0> to <p1>` |  | objet « Object » ; position « Position » | — |  |
| 2 | 82 | Add object to existing data | `Add distance and fixed of <p0> to <p1> to existing data` |  | objet « Object » | — |  |
| 3 | 83 | Reset object data | `Reset object data` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of directions | `GetNumDir(` |  |  | — |  |
| 1 | 81 | Distance and direction between two points > Float values (decimals) > Direction between two points ( x1, y1, x2, y2 ) | `AdvDirection(` |  | nombre ; nombre ; nombre ; nombre | — |  |
| 2 | 82 | Distance and direction between two points > Float values (decimals) > Distance between two points ( x1, y1, x2, y2 ) | `AdvDistance(` |  | nombre ; nombre ; nombre ; nombre | — |  |
| 3 | 83 | Distance and direction between two points > Long values (no decimals) > Direction between two points ( x1, y1, x2, y2 ) | `LongDir(` |  | nombre ; nombre ; nombre ; nombre | — |  |
| 4 | 84 | Distance and direction between two points > Long values (no decimals) > Distance between two points ( x1, y1, x2, y2 ) | `LongDist(` |  | nombre ; nombre ; nombre ; nombre | — |  |
| 5 | 85 | Rotate ( dir, dirtrt, speed ) | `Rotate(` |  | nombre ; nombre ; nombre | — |  |
| 6 | 86 | Difference between two directions > Absolute (positive only) ( dir1, dir2 ) | `DirDiffAbs(` |  | nombre ; nombre | — |  |
| 7 | 87 | Difference between two directions > Not absolute ( dir 1, dir2 ) | `DirDiff(` |  | nombre ; nombre | — |  |
| 8 | 88 | Stored objects > Get fixed (0 = Closest object, 1 = Second closest, etc) | `GetFixedObj(` |  | nombre | — |  |
| 9 | 89 | Stored objects > Get distance | `GetDistObj(` |  | nombre | — |  |
| 10 | 90 | Get movement > Get X movement from a speed and a direction ( dir, speed ) | `XMovement(` |  | nombre ; nombre | — |  |
| 11 | 91 | Get movement > Get Y movement from a speed and a direction ( dir, speed ) | `YMovement(` |  | nombre ; nombre | — |  |
| 12 | 92 | Convert direction to a different base ( dir, newbase ) | `DirBase(` |  | nombre ; nombre | — |  |
