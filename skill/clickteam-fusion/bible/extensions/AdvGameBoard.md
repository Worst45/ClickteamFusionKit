# Extension AdvGameBoard

- File: `AdvGameBoard.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On found connected bricks | `<object>: On found connected` |  |  | — |  |
| 1 | -82 | On found brick | `<object>: On found brick` |  |  | — |  |
| 2 | -83 | On looped brick (extra looping) | `<object>: On found looped` |  |  | — |  |
| 3 | -84 | No connected found | `<object>: No connected found` |  |  | — |  |
| 4 | -85 | Gravity check > Brick at x,y can fall up | `<object>: Brick at <p0>, <p1> can fall up` |  | numeric expression “Enter X of brick”; numeric expression “Enter Y of brick” | — |  |
| 5 | -86 | Gravity check > Brick at x,y can fall down | `<object>: Brick at <p0>, <p1> can fall down` |  | numeric expression “Enter X of brick”; numeric expression “Enter Y of brick” | — |  |
| 6 | -87 | Gravity check > Brick at x,y can fall left | `<object>: Brick at <p0>, <p1> can fall left` |  | numeric expression “Enter X of brick”; numeric expression “Enter Y of brick” | — |  |
| 7 | -88 | Gravity check > Brick at x,y can fall right | `<object>: Brick at <p0>, <p1> can fall right` |  | numeric expression “Enter X of brick”; numeric expression “Enter Y of brick” | — |  |
| 8 | -89 | On Brick moved | `<object>: On brick moved` |  |  | — |  |
| 9 | -90 | On Brick deleted | `<object>: On brick deleted` |  |  | — |  |
| 10 | -91 | Position is empty | `<object>: Position <p0>, <p1> is empty` |  | numeric expression “Enter X”; numeric expression “Enter Y” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set brick at x,y | `Set brick at <p0>, <p1> to type: <p2>` |  | numeric expression “X position”; numeric expression “Y position”; numeric expression “Brick type” | — |  |
| 1 | 81 | Clear board | `Clear board` |  |  | — |  |
| 2 | 82 | Set board size | `Set board size to <p0>, <p1>` |  | numeric expression “X size”; numeric expression “Y size” | — |  |
| 3 | 83 | Search for connected > Set min. connected bricks | `Set search for min <p0> connected` |  | numeric expression “Enter a minimum value for found connected bricks” | — |  |
| 4 | 84 | Search for connected > Horizontal | `Search horizontal for type <p0>` |  | numeric expression “Bricktype” | — |  |
| 5 | 85 | Search for connected > Vertical | `Search vertical for type <p0>` |  | numeric expression “Bricktype” | — |  |
| 6 | 86 | Search for connected > Diagonal    \  (nw-se) | `Search diagonals (left - right) for type <p0>` |  | numeric expression “Bricktype” | — |  |
| 7 | 87 | Search for connected > Connected | `Search connected from position <p0>, <p1>` |  | numeric expression “Start position X”; numeric expression “Start position Y” | — |  |
| 8 | 88 | Manipulate board > Delete horizontal line | `Delete horizontal line where y=<p0> mode=<p1>` |  | numeric expression “Enter a Y coordinate for the horizontal line to be deleted”; numeric expression “Mode. 0 = normal, 1= move above downwards, 2= move below upwards.” | — |  |
| 9 | 89 | Manipulate board > Delete vertical line | `Delete vertical line where x=<p0> mode=<p1>` |  | numeric expression “Enter a X coordinate for the vertical line to be deleted”; numeric expression “Mode. 0 = normal, 1= move left bricks to the right, 2= right bricks to the left” | — |  |
| 10 | 90 | Manipulate board > Swap two bricks | `Swap brick from <p0>, <p1> with <p2>, <p3>` |  | numeric expression “Brick one, X”; numeric expression “Brick one, Y”; numeric expression “Brick two, X”; numeric expression “Brick two, Y” | — |  |
| 11 | 91 | Manipulate board > Gravity > Down: Drop x amount | `Gravity: Drop bricks <p0> slots down` |  | numeric expression “Enter the amount of slots the bricks should fall downwards” | — |  |
| 12 | 92 | Manipulate board > Gravity > Down: Drop bricks 1 slot | `Gravity: Drop bricks 1 slot down` |  |  | — |  |
| 13 | 93 | Mark brick as used | `Mark brick <p0>, <p1> as used` |  | numeric expression “Enter X”; numeric expression “Enter Y” | — |  |
| 14 | 94 | Delete marked bricks | `Delete marked bricks` |  |  | — |  |
| 15 | 95 | Manipulate board > Undo last swap (swap again) | `Undo swap (swap again)` |  |  | — |  |
| 16 | 96 | Search for connected > Diagonal    /  (ne-sw) | `Search diagonals (right - left) for type <p0>` |  | numeric expression “Bricktype” | — |  |
| 17 | 97 | On found connected/brick > Loop through found bricks | `Loop through found bricks` |  |  | — |  |
| 18 | 98 | Set fixed value of brick | `Set fixed value of brick at <p0>, <p1> to <p2>` |  | numeric expression “Enter X”; numeric expression “Enter Y”; numeric expression “Enter fixed value” | — |  |
| 19 | 99 | Import actives for board | `Import actives for board:  <p0>` |  | object “Import actives for board” | — |  |
| 20 | 100 | On found connected/brick > Mark all connected as used | `Mark all found bricks as used` |  |  | — |  |
| 21 | 101 | On found connected/brick > Mark current brick as used | `Mark current brick as used` |  |  | — |  |
| 22 | 102 | Extra looping > Loop all bricks in board | `Loop through all bricks` |  |  | — |  |
| 23 | 103 | Extra looping > Loop all bricks of type | `Loop through all bricks of type <p0>` |  | numeric expression “Enter brick type” | — |  |
| 24 | 104 | Extra looping > Loop surrounding of brick | `Loop through sorrounding bricks from <p0>, <p1>` |  | numeric expression “Enter center X”; numeric expression “Enter center Y” | — |  |
| 25 | 105 | Extra looping > Loop through horizontal line | `Loop through horizontal line (y= <p0> )` |  | numeric expression “Enter y coordinate” | — |  |
| 26 | 106 | Extra looping > Loop through vertical line | `Loop through vertical line (x= <p0> )` |  | numeric expression “Enter x coordinate” | — |  |
| 27 | 107 | Clear with type (fill) | `Clear board with type <p0>` |  | numeric expression “Enter brick type” | — |  |
| 28 | 108 | Manipulate board > Insert brick | `Insert brick at <p0>, <p1> type: <p2>` |  | numeric expression “Enter X”; numeric expression “Enter Y”; numeric expression “Enter brick type” | — |  |
| 29 | 109 | Easy grid features > Set origin | `Set origin coordinates: <p0>, <p1>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate” | — |  |
| 30 | 110 | Easy grid features > Set cell dimensions | `Set cell dimensions: <p0>, <p1>` |  | numeric expression “Enter cell width”; numeric expression “Enter cell height” | — |  |
| 31 | 111 | Move fixed values flag > ON | `Move fixed: ON` |  |  | — |  |
| 32 | 112 | Move fixed values flag > OFF | `Move pixed: OFF` |  |  | — |  |
| 33 | 113 | Manipulate board > Move brick | `Move brick from <p0>, <p1> to <p2>, <p3>` |  | numeric expression “Enter source X”; numeric expression “Enter source Y”; numeric expression “Enter target X”; numeric expression “Enter target Y” | — |  |
| 34 | 114 | Manipulate board > Gravity > Up: Drop bricks 1 slot | `Gravity: Drop bricks 1 slot up` |  |  | — |  |
| 35 | 115 | Manipulate board > Gravity > Left: Drop bricks 1 slot | `Gravity: Drop bricks 1 slot left` |  |  | — |  |
| 36 | 116 | Manipulate board > Gravity > Right: Drop bricks 1 slot | `Gravity: Drop bricks 1 slot right` |  |  | — |  |
| 37 | 117 | Manipulate board > Gravity > Up: Drop x amount | `Gravity: Drop bricks <p0> slots up` |  | numeric expression “Enter amount to drop up” | — |  |
| 38 | 118 | Manipulate board > Gravity > Left: Drop x amount | `Gravity: Drop bricks <p0> slots left` |  | numeric expression “Enter amount to drop left” | — |  |
| 39 | 119 | Manipulate board > Gravity > Right: Drop x amount | `Gravity: Drop bricks <p0> slots right` |  | numeric expression “Enter amount to drop right” | — |  |
| 40 | 120 | Easy grid features > Set value of cell | `Set cell value at <p0>, <p1> to: <p2>` |  | numeric expression “Enter X”; numeric expression “Enter Y”; numeric expression “Enter a value” | — |  |
| 41 | 121 | Manipulate board > Delete brick | `Delete brick at <p0>, <p1>` |  | numeric expression “Enter X”; numeric expression “Enter Y” | — |  |
| 42 | 122 | Manipulate board > Shift horizontal line | `Shift horizontal line <p0> slots: <p1>` |  | numeric expression “Enter Y coordinate for horizontal line”; numeric expression “Enter slots to shift left or right, positive: move right , negative: move left” | — |  |
| 43 | 123 | Manipulate board > Shift vertical line | `Shift horizontal line <p0> slots: <p1>` |  | numeric expression “Enter X coordinate for vertical line”; numeric expression “Enter slots to shift up or down, positive: move down , negative: move up” | — |  |
| 44 | 124 | Easy grid features > Position bricks to grid | `Position bricks to grid` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get brick at x,y | `BrickAt(` |  | number; number | — |  |
| 1 | 81 | Board X size | `XSize(` |  |  | — |  |
| 2 | 82 | Board Y size | `YSize(` |  |  | — |  |
| 3 | 83 | On found connected > Get number of connected bricks | `NumConnected(` |  |  | — |  |
| 4 | 84 | On found connected > Get X of brick at index | `GetBrickX(` |  | number | — |  |
| 5 | 85 | On found connected > Get Y of brick at index | `GetBrickY(` |  | number | — |  |
| 6 | 86 | On found connected > Get found brick type | `SystemBrickType(` |  |  | — |  |
| 7 | 87 | Count bricks in horizontal line | `NumBricksHorizontal(` |  | number | — |  |
| 8 | 88 | Count bricks in vertical line | `NumBricksVertical(` |  | number | — |  |
| 9 | 89 | Count surrounding of type | `CountSurrounding(` |  | number; number; number | — |  |
| 10 | 90 | Count total bricks | `CountTotal(` |  |  | — |  |
| 11 | 91 | On found connected > Get fixed value of brick at index | `BrickFixed(` |  | number | — |  |
| 12 | 92 | On found brick > Get X of brick | `FoundBrickX(` |  |  | — |  |
| 13 | 93 | On found brick > Get Y of brick | `FoundBrickY(` |  |  | — |  |
| 14 | 94 | On found brick > Get brick type | `FoundBrickType(` |  |  | — |  |
| 15 | 95 | On found brick > Get fixed value of brick | `FoundBrickFixed(` |  |  | — |  |
| 16 | 96 | Get fixed value at x,y | `FixedAt(` |  | number; number | — |  |
| 17 | 97 | On found brick > Get loop index | `BrickLoopIndex(` |  |  | — |  |
| 18 | 98 | Search board > Find X from fixed value | `FindXfromFixed(` |  | number | — |  |
| 19 | 99 | Search board > Find Y from fixed value | `FindYfromFixed(` |  | number | — |  |
| 20 | 100 | Search board > Find brick type from fixed value | `FindBrickfromFixed(` |  | number | — |  |
| 21 | 101 | On looped brick > Get X of brick | `LoopBrickX(` |  |  | — |  |
| 22 | 102 | On looped brick > Get Y of brick | `LoopBrickY(` |  |  | — |  |
| 23 | 103 | On looped brick > Get brick type | `LoopBrickType(` |  |  | — |  |
| 24 | 104 | On looped brick > Get fixed value of brick | `LoopBrickFixed(` |  |  | — |  |
| 25 | 105 | On looped brick > Get loop index | `LoopedIndex(` |  |  | — |  |
| 26 | 106 | Easy grid features > Get X from X-coordinate | `XofBrickX(` |  | number | — |  |
| 27 | 107 | Easy grid features > Get Y from Y-coordinate | `YofBrickY(` |  | number | — |  |
| 28 | 108 | Easy grid features > Snap X-coordinate to grid | `SnapX(` |  | number | — |  |
| 29 | 109 | Easy grid features > Snap Y-coordinate to grid | `SnapY(` |  | number | — |  |
| 30 | 110 | Easy grid features > Get info > Get origin X coordinate | `OriginX(` |  |  | — |  |
| 31 | 111 | Easy grid features > Get info > Get origin Y coordinate | `OriginY(` |  |  | — |  |
| 32 | 112 | Easy grid features > Get info > Get cell width | `CellWidth(` |  |  | — |  |
| 33 | 113 | Easy grid features > Get info > Get cell height | `CellHeight(` |  |  | — |  |
| 34 | 114 | Easy grid features > Get cell value from x,y | `CellValue(` |  | number; number | — |  |
| 35 | 115 | Easy grid features > Get X-coordinate of cell | `XofCell(` |  | number | — |  |
| 36 | 116 | Easy grid features > Get Y-coordinate of cell | `YofCell(` |  | number | — |  |
| 37 | 117 | On moved brick > Get fixed value of brick | `MovedFixed(` |  |  | — |  |
| 38 | 118 | On moved brick > Get new X-coordinate | `MovedNewX(` |  |  | — |  |
| 39 | 119 | On moved brick > Get new Y-coordinate | `MovedNewY(` |  |  | — |  |
| 40 | 120 | On moved brick > Get old X-coordinate | `MovedOldX(` |  |  | — |  |
| 41 | 121 | On moved brick > Get old Y-coordinate | `MovedOldY(` |  |  | — |  |
| 42 | 122 | On deleted brick > Get fixed value of brick | `DeletedFixed(` |  |  | — |  |
| 43 | 123 | On deleted brick > Get X-coordinate | `DeletedX(` |  |  | — |  |
| 44 | 124 | On deleted brick > Get Y-coordinate | `DeletedY(` |  |  | — |  |
