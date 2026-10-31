# Extension LineSurface

- File: `LineSurface.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set centre coordinate | `Set centre coordinates to <p0>, <p1>` |  | numeric expression “X coordinate”; numeric expression “Y coordinate” | — |  |
| 1 | 81 | Draw line | `Draw line from <p0>, <p1> to <p2>, <p3> with thickness <p4> and colour <p5>` |  | numeric expression “Start X coordinate”; numeric expression “Start Y coordinate”; numeric expression “End X coordinate”; numeric expression “End Y coordinate”; numeric expression “Thickness”; color “Colour” | — |  |
| 2 | 82 | Clear surface | `Clear surface` |  |  | — |  |
