# Extension minimap

- File: `minimap.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Working Area | `Set Working Area - Position (<p0>, <p1>) - Size (<p2>, <p3>)` |  | numeric expression “Work Area X”; numeric expression “Work Area Y”; numeric expression “Work Area Width”; numeric expression “Work Area Height” |
| 1 | 81 | Drawing > Clear | `Clear Minimap` |  |  |
| 2 | 82 | Drawing > Blit X,Y | `Blit at (<p0>, <p1>) - Type (<p2>) - Size (<p3>) - Color (<p4>)` |  | numeric expression “X Position to Blit”; numeric expression “Y Position to Blit”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” |
| 3 | 83 | Drawing > Blit Object | `Blit (<p0>) - Type (<p1>) - Size (<p2>) - Color (<p3>)` |  | object “Object to Blit”; numeric expression “Shape: 0=Rectangle, 1=Circle, 2=Cross”; numeric expression “Size of Dot to Blit”; color “Color of Dot to Blit” |
| 4 | 84 | Appearence > Set Background Color | `Set Background Color (<p0>)` |  | color “Background Color” |
| 5 | 85 | Appearence > Set Border Color | `Set Border Color (<p0>)` |  | color “Border Color” |
| 6 | 86 | Appearence > Set Border Thickness | `Set Background Thickness (<p0>)` |  | numeric expression “Thickness of Border” |
| 7 | 87 | Appearence > Show/Hide Background | `Set Background Visibility State (<p0>)` |  | numeric expression “Background Visibility State (0=Hidden, 1=Visible)” |
