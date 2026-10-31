# Extension mini_map

- File: `mini_map.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Working Area | `Set Working Area - Position (<p0>, <p1>) - Size (<p2>, <p3>)` |  | numeric expression “Work Area X”; numeric expression “Work Area Y”; numeric expression “Work Area Width”; numeric expression “Work Area Height” | — |  |
| 1 | 81 | Drawing > Clear | `Clear Minimap` |  |  | — |  |
| 2 | 82 | Drawing > Blit X,Y | `Blit at (<p0>, <p1>) - Type (<p2>) - Size (<p3>) - Color (<p4>)` |  | numeric expression “X Position to Blit”; numeric expression “Y Position to Blit”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” | — |  |
| 3 | 83 | Drawing > Blit Object | `Blit (<p0>) - Type (<p1>) - Size (<p2>) - Color (<p3>)` |  | object “Object to Blit”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” | — |  |
| 4 | 84 | Appearence > Set Background Color | `Set Background Color (<p0>)` |  | color “Background Color” | — |  |
| 5 | 85 | Appearence > Set Border Color | `Set Border Color (<p0>)` |  | color “Border Color” | — |  |
| 6 | 86 | Appearence > Set Border Thickness | `Set Background Thickness (<p0>)` |  | numeric expression “Thickness of Border” | — |  |
| 7 | 87 | Appearence > Show/Hide Background | `Set Background Visibility State (<p0>)` |  | numeric expression “Background Visibility State (0=Hidden, 1=Visible)” | — |  |
| 8 | 88 | Drawing > Advanced > Minimap Coordinates > Blit Line | `Blit Line (Minimap) - (<p0>, <p1>) to (<p2>, <p3>) - Thickness (<p4>) - Color (<p5>)` |  | numeric expression “X Position in Minimap Coordinates”; numeric expression “Y Position in Minimap Coordinates”; numeric expression “Second X Position in Minimap Coordinates”; numeric expression “Second Y Position in Minimap Coordinates”; numeric expression “Thickness”; color “Color” | — |  |
| 9 | 89 | Drawing > Advanced > Minimap Coordinates > Blit Rectangle | `Blit Rectangle (Minimap) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | numeric expression “X Position in Minimap Coordinates”; numeric expression “Y Position in Minimap Coordinates”; numeric expression “Width”; numeric expression “Height”; color “Fill Color”; numeric expression “Thickness of Border”; color “Border Color” | — |  |
| 10 | 90 | Drawing > Advanced > Minimap Coordinates > Blit Ellipse | `Blit Ellipse (Minimap) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | numeric expression “X Position in Minimap Coordinates”; numeric expression “Y Position in Minimap Coordinates”; numeric expression “Width”; numeric expression “Height”; color “Fill Color”; numeric expression “Thickness of Border”; color “Border Color” | — |  |
| 11 | 91 | Drawing > Advanced > Global Coordinates > Blit Line | `Blit Line (Global) - (<p0>, <p1>) to (<p2>, <p3>) - Thickness (<p4>) - Color (<p5>)` |  | numeric expression “X Position in Global Coordinates”; numeric expression “Y Position in Global Coordinates”; numeric expression “Second X Position in Global Coordinates”; numeric expression “Second Y Position in Global Coordinates”; numeric expression “Thickness”; color “Color” | — |  |
| 12 | 92 | Drawing > Advanced > Global Coordinates > Blit Rectangle | `Blit Rectangle (Global) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | numeric expression “X Position in Global Coordinates”; numeric expression “Y Position in Global Coordinates”; numeric expression “Width”; numeric expression “Height”; color “Fill Color”; numeric expression “Thickness of Border”; color “Border Color” | — |  |
| 13 | 93 | Drawing > Advanced > Global Coordinates > Blit Ellipse | `Blit Ellipse (Global) - Position (<p0>, <p1>) - Size (<p2>, <p3>) - Fill Color (<p4>) - Border Thickness (<p5>) - Border Color (<p6>)` |  | numeric expression “X Position in Global Coordinates”; numeric expression “Y Position in Global Coordinates”; numeric expression “Width”; numeric expression “Height”; color “Fill Color”; numeric expression “Thickness of Border”; color “Border Color” | — |  |
| 14 | 94 | Position  Size > Resize Minimap | `Resize Minimap (<p0>, <p1>)` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 15 | 95 | Position  Size > Set Position | `Set Position (<p0>, <p1>)` |  | numeric expression “X Position”; numeric expression “Y Position” | — |  |
| 16 | 96 | Drawing > Flash X,Y | `Flash at (<p0>, <p1>) for (<p2>) loops - Type (<p3>) - Size (<p4>) - Color (<p5>)` |  | numeric expression “X Position to Blit”; numeric expression “Y Position to Blit”; numeric expression “Duration (In MMF Loops)”; numeric expression “Blink Duration (In MMF Loops)”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” | — |  |
| 17 | 97 | Drawing > Flash Object | `Flash (<p0>) for (<p1>) loops - Type (<p2>) - Size (<p3>) - Color (<p4>)` |  | object “Object to Blit”; numeric expression “Duration (In MMF Loops)”; numeric expression “Blink Duration (In MMF Loops)”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Conversions > Convert X to Minimap X | `XtoMapX(` |  | number “X Position” | — |  |
| 1 | 81 | Conversions > Convert Y to Minimap Y | `YtoMapY(` |  | number “Y Position” | — |  |
| 2 | 82 | Conversions > Convert Minimap X to X | `MapXtoX(` |  | number “X Position” | — |  |
| 3 | 83 | Conversions > Convert Minimap Y to Y | `MapYtoY(` |  | number “Y Position” | — |  |
