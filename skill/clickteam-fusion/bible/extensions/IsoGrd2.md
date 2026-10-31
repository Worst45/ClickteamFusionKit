# Extension IsoGrd2

- Fichier : `IsoGrd2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Cells > X,Y is over cell | `<objet> : <p0>, <p1> is over cell <p2>, <p3>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter column of cell » ; expression numérique « Enter row of cell » | — |  |
| 1 | -82 | Cells > X,Y is in column | `<objet> : <p0>, <p1> is over column <p2>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter column number » | — |  |
| 2 | -83 | Cells > X,Y is in row | `<objet> : <p0>, <p1> is over row <p2>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter row number » | — |  |
| 3 | -84 | Movement > Cell can be moved in to | `<objet> : Cell <p0>, <p1> can be moved into from height <p2>` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter height entering from » | — |  |
| 4 | -85 | Movement > On Object arrived at new cell | `<objet> : On Object Arrived at new cell` |  |  | — |  |
| 5 | -86 | Levels > X,Y is over cell level | `<objet> : <p0>, <p1> is over cell <p2>, <p3> on level <p4>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » | — |  |
| 6 | -87 | Levels > Cell level is used | `<objet> : Cell <p0>, <p1> level <p2> is used` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » | — |  |
| 7 | -88 | Loading > On Cell Loaded | `<objet> : On Cell loaded` |  |  | — |  |
| 8 | -89 | Loading > On Used Level Loaded | `<objet> : On Used Level loaded` |  |  | — |  |
| 9 | -90 | Loading > On Level Value Loaded | `<objet> : On Level Value Loaded` |  |  | — |  |
| 10 | -91 | Movement > Object is moving | `<objet> : Object is moving` |  |  | — |  |
| 11 | -92 | Movement > Cell can be jumped in to | `<objet> : Cell <p0>, <p1> can be jumped in to from cell <p2>, <p3> height <p4>` |  | expression numérique « Enter target column » ; expression numérique « Enter target row » ; expression numérique « Enter current column » ; expression numérique « Enter current row » ; expression numérique « Enter height » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Set cell size | `Set cell size to <p0>x <p1>` |  | expression numérique « Enter cell width » ; expression numérique « Enter cell height » | — |  |
| 1 | 81 | Cells > Cell values > Add to > Cell value A | `Add <p2> to value A of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 2 | 82 | Cells > Cell values > Add to > Cell value B | `Add <p2> to value B of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 3 | 83 | Cells > Cell values > Add to > Cell value C | `Add <p2> to value C of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 4 | 84 | Cells > Cell values > Subtract from > Cell value A | `Subtract <p2> from value A of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 5 | 85 | Cells > Cell values > Subtract from > Cell value B | `Subtract <p2> from value B of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 6 | 86 | Cells > Cell values > Subtract from > Cell value C | `Subtract <p2> from value C of cell <p0>, <p1>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 7 | 87 | Cells > Cell values > Set > Cell value A | `Set value A of cell <p0>, <p1> to <p2>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 8 | 88 | Cells > Cell values > Set > Cell value B | `Set value B of cell <p0>, <p1> to <p2>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 9 | 89 | Cells > Cell values > Set > Cell value C | `Set value C of cell <p0>, <p1> to <p2>` |  | expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter value » | — |  |
| 10 | 90 | Cells > Clear all cell A values | `Clear all cell A values` |  |  | — |  |
| 11 | 91 | Cells > Clear all cell B values | `Clear all cell B values` |  |  | — |  |
| 12 | 92 | Cells > Clear all cell C values | `Clear all cell C values` |  |  | — |  |
| 13 | 93 | Levels > Set height of one level | `Set level height to <p0> pixels` |  | expression numérique « Enter the pixel height of one level » | — |  |
| 14 | 94 | Levels > Set headroom required | `Set required headroom to <p0> levels` |  | expression numérique « Enter headroom, in levels (e.g. 2) » | — |  |
| 15 | 95 | Levels > Set maximum height of step up | `Set maximum step up height to <p0> levels` |  | expression numérique « Enter how many levels can be jumped up in one go (e.g. 1) » | — |  |
| 16 | 96 | Levels > Set maximum height of step down | `Set maximum step down height to <p0> levels` |  | expression numérique « Enter how many levels can be jumped down in one go (e.g. 1) » | — |  |
| 17 | 97 | Levels > Level usage > Set a cell level to used | `Set level used at cell <p0>, <p1> height <p2>` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » | — |  |
| 18 | 98 | Levels > Level usage > Set a cell level to unused | `Set level unused at cell <p0>, <p1> height <p2>` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » | — |  |
| 19 | 99 | Levels > Level usage > Set a cell level from value | `Set level at cell <p0>, <p1> height <p2> to <p3>` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » ; expression numérique « Enter 0=Unused, 1=Used » | — |  |
| 20 | 100 | Levels > Level usage > Reset all levels to unused | `Reset all levels to unused` |  |  | — |  |
| 21 | 101 | Grid > Limit columns | `Limit columns to <p0>` |  | expression numérique « Enter number or columns » | — |  |
| 22 | 102 | Grid > Limit rows | `Limit rows to <p0>` |  | expression numérique « Enter number of rows » | — |  |
| 23 | 103 | Grid > Limit levels | `Limit levels to <p0>` |  | expression numérique « Enter number of levels » | — |  |
| 24 | 104 | Grid > Set Grid Origin | `Set grid origin to <p0>, <p1>` |  | expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » | — |  |
| 25 | 105 | Movement > Slide object into cell | `Move <p0> to cell <p1>, <p2> height <p3> (for <p4>)` |  | objet « Pick object to slide in to cell » ; expression numérique « Enter column to move into » ; expression numérique « Enter row to move in to » ; expression numérique « Enter level to move in to » ; expression numérique « Enter how long movement should take (MMF loops) » | — |  |
| 26 | 106 | Movement > Put object in cell | `Put <p0> in cell <p1>, <p2> height <p3>` |  | objet « Pick object to put in cell » ; expression numérique « Enter column to put object in » ; expression numérique « Enter row to put object in » ; expression numérique « Enter level to put object in » | — |  |
| 27 | 107 | Movement > Slide object N cells towards X,Y | `Move <p0>  <p1> cells towards <p2>, <p3> (for <p4>)` |  | objet « Pick object to slide in to cell » ; expression numérique « Enter number of cells to slide » ; expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » ; expression numérique « Enter how long movement should take (MMF loops) » | — |  |
| 28 | 108 | Movement > Put object N cells towards X,Y | `Put <p0>  <p1> cells towards <p2>, <p3>` |  | objet « Pick object to put in cell » ; expression numérique « Enter how many cells to move » ; expression numérique « Enter X co-ordinate » ; expression numérique « Enter Y co-ordinate » | — |  |
| 29 | 109 | Files > Save World | `Save world to <p0>` |  | nom de fichier « Select file to save to » | — |  |
| 30 | 110 | Files > Load World | `Load world from <p0>` |  | nom de fichier « Select file to load from » | — |  |
| 31 | 111 | Levels > Level values > Set level value | `Set <p3> to level <p2> cell ( <p0>, <p1>)` |  | expression numérique « Enter column » ; expression numérique « Enter row » ; expression numérique « Enter level » ; expression numérique « Enter value » | — |  |
| 32 | 112 | Levels > Level values > Clear all level values | `Clear all level values` |  |  | — |  |
| 33 | 113 | Movement > Jump object into cell | `Jump <p0> in to cell <p1>, <p2> height <p3> jumping up <p4> (for <p5>)` |  | objet « Select object » ; expression numérique « Enter cell column » ; expression numérique « Enter cell row » ; expression numérique « Enter height » ; expression numérique « Enter jump height (pixels) » ; expression numérique « Enter how long movement should take (MMF loops) » | — |  |
| 34 | 114 | Levels > Level usage > Set range to used | `Set range <p0>, <p1>, <p2> to <p3>, <p4>, <p5> used` |  | expression numérique « Enter lower column » ; expression numérique « Enter lower row » ; expression numérique « Enter lower level » ; expression numérique « Enter higher column » ; expression numérique « Enter higher row » ; expression numérique « Enter higher level » | — |  |
| 35 | 115 | Levels > Level usage > Set range to unused | `Set range <p0>, <p1>, <p2> to <p3>, <p4>, <p5> unused` |  | expression numérique « Enter lower column » ; expression numérique « Enter lower row » ; expression numérique « Enter lower level » ; expression numérique « Enter higher column » ; expression numérique « Enter higher row » ; expression numérique « Enter higher level » | — |  |
| 36 | 116 | Movement > Jump options > Allow jumps to fall to zero | `Allow jumps to fall to zero` |  |  | — |  |
| 37 | 117 | Movement > Jump options > Disallow jumps to fall to zero | `Disallow jumps to fall to zero` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Cells > Get cell width | `CellWidth(` |  |  | — |  |
| 1 | 81 | Cells > Get cell height | `CellHeight(` |  |  | — |  |
| 2 | 82 | Cells > Cell values > Get cell value A | `CellValueA(` |  | nombre ; nombre | — |  |
| 3 | 83 | Cells > Cell values > Get cell value B | `CellValueB(` |  | nombre ; nombre | — |  |
| 4 | 84 | Cells > Cell values > Get cell value C | `CellValueC(` |  | nombre ; nombre | — |  |
| 5 | 85 | Levels > Get level height | `LevelHeight(` |  |  | — |  |
| 6 | 86 | Levels > Get required headroom | `Headroom(` |  |  | — |  |
| 7 | 87 | Levels > Get maximum step up height | `MaxStepUp(` |  |  | — |  |
| 8 | 88 | Levels > Get maximum step down height | `MaxStepDown(` |  |  | — |  |
| 9 | 89 | Levels > Get level usage as value (0/1) | `LevUsed(` |  | nombre ; nombre ; nombre | — |  |
| 10 | 90 | Levels > Get layer value for cell level | `Layer(` |  | nombre ; nombre ; nombre | — |  |
| 11 | 91 | Grid > Get Grid X origin | `GridXorigin(` |  |  | — |  |
| 12 | 92 | Grid > Get Grid Y origin | `GridYorigin(` |  |  | — |  |
| 13 | 93 | Grid > Get column limit | `ColLimit(` |  |  | — |  |
| 14 | 94 | Grid > Get row limit | `RowLimit(` |  |  | — |  |
| 15 | 95 | Grid > Get level limit | `LevLimit(` |  |  | — |  |
| 16 | 96 | Positions > Conversions > Get X co-ordinate of cell | `XofCell(` |  | nombre ; nombre | — |  |
| 17 | 97 | Positions > Conversions > Get Y co-ordinate of cell | `YofCell(` |  | nombre ; nombre | — |  |
| 18 | 98 | Positions > Conversions > Get Y co-ordinate of cell level | `YofCellLevel(` |  | nombre ; nombre ; nombre | — |  |
| 19 | 99 | Positions > Conversions > Get column from X,Y | `Colat(` |  | nombre ; nombre | — |  |
| 20 | 100 | Positions > Conversions > Get row from X,Y | `Rowat(` |  | nombre ; nombre | — |  |
| 21 | 101 | Positions > Snap > Snap X co-ordinate to grid | `SnapX(` |  | nombre ; nombre | — |  |
| 22 | 102 | Positions > Snap > Snap Y co-ordinate to grid | `SnapY(` |  | nombre ; nombre | — |  |
| 23 | 103 | Positions > Snap > Snap Y co-ordinate to grid level | `SnapYlev(` |  | nombre ; nombre ; nombre | — |  |
| 24 | 104 | File loading > Get loaded cell column | `LoadCol(` |  |  | — |  |
| 25 | 105 | File loading > Get loaded cell row | `LoadRow(` |  |  | — |  |
| 26 | 106 | File loading > Get loaded cell level | `LoadLev(` |  |  | — |  |
| 27 | 107 | Trigonometry > Angle between two points | `GetAngle(` |  | nombre ; nombre ; nombre ; nombre | — |  |
| 28 | 108 | Trigonometry > X position ahead of... | `AheadX(` |  | nombre ; nombre ; nombre | — |  |
| 29 | 109 | Trigonometry > Y position ahead of... | `AheadY(` |  | nombre ; nombre ; nombre | — |  |
| 30 | 110 | Movement > Get level offset to movable cell | `GetOffset(` |  |  | — |  |
| 31 | 111 | Positions > Conversions > Get row from X,Y level | `RowatLev(` |  | nombre ; nombre ; nombre | — |  |
| 32 | 112 | Positions > Conversions > Get column from X,Y level | `ColatLev(` |  | nombre ; nombre ; nombre | — |  |
| 33 | 113 | Levels > Get level value | `LevelValue(` |  | nombre ; nombre ; nombre | — |  |
| 34 | 114 | Movement > Get jump level offset | `JumpOffset(` |  |  | — |  |
| 35 | 115 | Movement > Get move time for level offset | `MoveTime(` |  | nombre ; nombre | — |  |
