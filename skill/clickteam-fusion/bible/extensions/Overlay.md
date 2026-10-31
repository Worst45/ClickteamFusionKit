# Extension Overlay

- File: `Overlay.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Match Color | `<object>: <p0>, <p1> matches <p2>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; color “Match Color” | — |  |
| 1 | -82 | Match Color using RGB | `<object>: <p0>, <p1> matches RGB(<p2>, <p3>, <p4>)` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 2 | -83 | Is X,Y outside Overlay? | `<object>: <p0>, <p1> is out of bounds` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate” | — |  |
| 3 | -84 | Is Overlay Visible? | `<object>: Is Visible` |  |  | — |  |
| 4 | -85 | Compare Color to RGB Value | `<object>: <p0>, <p1> is equal to RGB(<p2>, <p3>, <p4>)` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 5 | -86 | Has Overlay Finished Auto-Inking? | `<object>: Auto-Inking Has Finished` |  |  | — |  |
| 6 | -87 | Is Overlay Auto-Inking? | `<object>: Is Auto-Inking` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Show Overlay | `Show Overlay` |  |  | — |  |
| 1 | 81 | Settings > Hide Overlay | `Hide Overlay` |  |  | — |  |
| 2 | 82 | Use Color Chooser > Clear Overlay | `Clear <object> with <p0>` |  | color “Clear Overlay” | — |  |
| 3 | 83 | Use Color Chooser > Change Old Color to New Color | `Replace <p0> with <p1>` |  | color “Change Old Color to New Color”; color “Change Old Color to New Color” | — |  |
| 4 | 84 | Use Color Chooser > Set Pixel | `Set <p0>, <p1> to <p2>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; color “Set Pixel” | — |  |
| 5 | 85 | Use Color Chooser > Draw Line | `Draw Line with <p4>` |  | numeric expression “Enter starting X coordinate”; numeric expression “Enter starting Y coordinate”; numeric expression “Enter ending X coordinate”; numeric expression “Enter ending Y coordinate”; color “Draw Line” | — |  |
| 6 | 86 | Use Color Chooser > Draw Rectangle | `Draw Rectangle with <p4>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter Width”; numeric expression “Enter Height”; color “Draw Rectangle” | — |  |
| 7 | 87 | Use Color Chooser > Draw Ellipse | `Draw Ellipse with <p4>` |  | numeric expression “Enter X coordinate for the center”; numeric expression “Enter Y coordinate for the center”; numeric expression “Enter Width”; numeric expression “Enter Height”; color “Draw Ellipse” | — |  |
| 8 | 88 | Use RGB > Clear Overlay | `Clear <object> with RGB(<p0>, <p1>, <p2>)` |  | numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 9 | 89 | Use RGB > Change Old Color to New Color | `Replace RGB(<p0>, <p1>, <p2>) with RGB(<p3>, <p4>, <p5>)` |  | numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 10 | 90 | Use RGB > Set Pixel | `Set <p0>, <p1> to RGB(<p2>, <p3>, <p4>)` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 11 | 91 | Use RGB > Draw Line | `Draw Line with RGB(<p4>, <p5>, <p6>)` |  | numeric expression “Enter starting X coordinate”; numeric expression “Enter starting Y coordinate”; numeric expression “Enter ending X coordinate”; numeric expression “Enter ending Y coordinate”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 12 | 92 | Use RGB > Draw Rectangle | `Draw Rectangle with RGB(<p4>, <p5>, <p6>)` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter Width”; numeric expression “Enter Height”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 13 | 93 | Use RGB > Draw Ellipse | `Draw Ellipse with RGB(<p4>, <p5>, <p6>)` |  | numeric expression “Enter X coordinate for the center”; numeric expression “Enter Y coordinate for the center”; numeric expression “Enter Width”; numeric expression “Enter Height”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 14 | 94 | Files > Load Image | `Load Image <p0>` |  | file name “Enter the Filename of the Image to Load” | — |  |
| 15 | 95 | Settings > Turn Stretching On | `Stretching Enabled` |  |  | — |  |
| 16 | 96 | Settings > Turn Stretching Off | `Stretching Disabled` |  |  | — |  |
| 17 | 97 | Use Color Chooser > Flood Fill | `Flood Fill <p2> at <p0>, <p1>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; color “Flood Fill” | — |  |
| 18 | 98 | Use RGB > Flood Fill | `Flood Fill RGB(<p2>, <p3>, <p4>) at <p0>, <p1>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter R value (0-255)”; numeric expression “Enter G value (0-255)”; numeric expression “Enter B value (0-255)” | — |  |
| 19 | 99 | Files > Save Image | `Save Image <p0>` |  | file name “Enter the Filename of the Image to Load” | — |  |
| 20 | 100 | Position and Size > Set Position in Frame | `Set Position of Overlay to <p0>` |  | position “Select the Position of the Overlay” | — |  |
| 21 | 101 | Position and Size > Set X Position in Frame | `Set X Position of Overlay to <p0>` |  | numeric expression “Enter X coordinate” | — |  |
| 22 | 102 | Position and Size > Set Y Position in Frame | `Set Y Position of Overlay to <p0>` |  | numeric expression “Enter Y coordinate” | — |  |
| 23 | 103 | Settings > Turn Automatic Display Update On | `Automatic Display Updating Enabled` |  |  | — |  |
| 24 | 104 | Settings > Turn Automatic Display Update Off | `Automatic Display Updating Disabled` |  |  | — |  |
| 25 | 105 | Settings > Turn Immediate Display Update On | `Immediate Display Updating Enabled` |  |  | — |  |
| 26 | 106 | Settings > Turn Immediate Display Update Off | `Immediate Display Updating Disabled` |  |  | — |  |
| 27 | 107 | Settings > Set Functions to Use Absoulte Positions | `Use of Absolute Positions Enabled` |  |  | — |  |
| 28 | 108 | Settings > Set Functions to Use Relative Positions | `Use of Relative Positions Enabled` |  |  | — |  |
| 29 | 109 | Settings > Draw in Opaque Mode | `Opaque Mode Enabled` |  |  | — |  |
| 30 | 110 | Settings > Draw in Transparent Mode | `Transparent Mode Enabled` |  |  | — |  |
| 31 | 111 | Update Display | `Update Display` |  |  | — |  |
| 32 | 112 | Use GetRGB (allows thickness and borders) > Clear Overlay | `Clear <object> with color index <p0>` |  | numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)” | — |  |
| 33 | 113 | Use GetRGB (allows thickness and borders) > Change Old Color to New Color | `Replace color index <p0> with <p1>` |  | numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)”; numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)” | — |  |
| 34 | 114 | Use GetRGB (allows thickness and borders) > Set Pixel | `Set <p0>, <p1> to color index <p2>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)” | — |  |
| 35 | 115 | Use GetRGB (allows thickness and borders) > Draw Line | `Draw Line with color index <p5> and thickness <p4>` |  | numeric expression “Enter starting X coordinate”; numeric expression “Enter starting Y coordinate”; numeric expression “Enter ending X coordinate”; numeric expression “Enter ending Y coordinate”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)” | — |  |
| 36 | 116 | Use GetRGB (allows thickness and borders) > Draw Rectangle | `Draw Rectangle with color index <p4> and outline <p6>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter Width”; numeric expression “Enter Height”; numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 37 | 117 | Use GetRGB (allows thickness and borders) > Draw Ellipse | `Draw Ellipse with color index <p4> and outline <p6>` |  | numeric expression “Enter X coordinate for the center”; numeric expression “Enter Y coordinate for the center”; numeric expression “Enter Width”; numeric expression “Enter Height”; numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 38 | 118 | Use GetRGB (allows thickness and borders) > Flood Fill | `Flood Fill color index <p2> at <p0>, <p1>` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate”; numeric expression “Enter Color Index (use MMF's GetRGB(R,G,B) function)” | — |  |
| 39 | 119 | Use GetRGB (allows thickness and borders) > Draw Polygon | `Draw Polygon with color index <p1> and outline <p3>` |  | string expression “Enter Points of Vertices of Polygon: "(x1,y1) (x1,y1)"...”; numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 40 | 120 | Position and Size > Resize Overlay | `Resize to <p0> by <p1>` |  | numeric expression “Enter Width”; numeric expression “Enter Height” | — |  |
| 41 | 121 | Use GetRGB (allows thickness and borders) > Plotting > Add Point to Plot | `Add Point ( <p0> , <p1> ) to Plot` |  | numeric expression “Enter X coordinate”; numeric expression “Enter Y coordinate” | — |  |
| 42 | 122 | Use GetRGB (allows thickness and borders) > Plotting > Plot Ploygon | `Plot Polygon with color index <p0> and outline <p2>` |  | numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 43 | 123 | Use GetRGB (allows thickness and borders) > Plotting > Clear Points | `Clear Points` |  |  | — |  |
| 44 | 124 | Pasting > Paste Object into Overlay | `Paste <p0> into Overlay` |  | object “Enter the Object” | — |  |
| 45 | 125 | Settings > Keep Points After Plotting Polygon | `Keep Points After Plotting Polygon` |  |  | — |  |
| 46 | 126 | Settings > Remove Points After Plotting Polygon | `Remove Points After Plotting Polygon` |  |  | — |  |
| 47 | 127 | Ink Effect > Set Ink Effect to None | `Set Ink Effect to None` |  |  | — |  |
| 48 | 128 | Ink Effect > Set Ink Effect to Semi-transparency | `Set Ink Effect to Semi-transparency with Value <p0>` |  | numeric expression “Enter Ink Effect Value (0-128)” | — |  |
| 49 | 129 | Ink Effect > Set Ink Effect to Invert | `Set Ink Effect to Invert` |  |  | — |  |
| 50 | 130 | Ink Effect > Set Ink Effect to Xor | `Set Ink Effect to Xor` |  |  | — |  |
| 51 | 131 | Ink Effect > Set Ink Effect to And | `Set Ink Effect to And` |  |  | — |  |
| 52 | 132 | Ink Effect > Set Ink Effect to Or | `Set Ink Effect to Or` |  |  | — |  |
| 53 | 133 | Ink Effect > Set Ink Effect to And Not | `Set Ink Effect to And Not` |  |  | — |  |
| 54 | 134 | Ink Effect > Enable Anti-Aliasing | `Enable Anti-Aliasing` |  |  | — |  |
| 55 | 135 | Ink Effect > Disable Anti-Aliasing | `Disable Anti-Aliasing` |  |  | — |  |
| 56 | 136 | Ink Effect > Set Ink Effect Value | `Set Ink Effect Value to <p0>` |  | numeric expression “Enter Ink Effect Value (0-128)” | — |  |
| 57 | 137 | Ink Effect > Start Auto-Inking | `Start Auto-Inking with Speed <p0>` |  | numeric expression “Enter Auto-Inking Speed (can be negative and/or floating point)” | — |  |
| 58 | 138 | Ink Effect > Stop Auto-Inking | `Stop Auto-Inking` |  |  | — |  |
| 59 | 139 | Ink Effect > Reverse Auto-Inking | `Reverse Direction of Auto-Inking` |  |  | — |  |
| 60 | 140 | Ink Effect > Set Ink Effect by Number | `Set Ink Effect to <p0>` |  | numeric expression “Enter the Number of the Ink Effect” | — |  |
| 61 | 141 | Use GetRGB (allows thickness and borders) > Draw Shape | `Draw Shape with color index <p1> and outline <p3>` |  | string expression “Enter Points of Vertices of Polygon: "(x1,y1) (x1,y1)"...”; numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 62 | 142 | Use GetRGB (allows thickness and borders) > Plotting > Plot Shape | `Plot Shape with color index <p0> and outline <p2>` |  | numeric expression “Enter Color Index of Fill (use the No Fill Color for no fill)”; numeric expression “Enter Thickness of Line or Outline”; numeric expression “Enter Color Index of Outline” | — |  |
| 63 | 143 | Pasting > Paste Overlay into Overlay | `Paste Overlay <p0> into Overlay` |  | numeric expression “Enter the Fixed Value of the Source Overlay”; numeric expression “Enter the X Coordinate of the Region of the Source to Paste”; numeric expression “Enter the Y Coordinate of the Region of the Source to Paste”; numeric expression “Enter the Width of the Region of the Source to Paste”; numeric expression “Enter the Height of the Region of the Source to Paste”; numeric expression “Enter the X Coordinate of the Region of the Destination in which to Paste”; numeric expression “Enter the Y Coordinate of the Region of the Destination in which to Paste”; numeric expression “Enter the Width of the Region of the Destination in which to Paste”; numeric expression “Enter the Height of the Region of the Destination in which to Paste” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Red(x,y) | `ovlGetRed(` |  | number; number | — |  |
| 1 | 81 | Get Green(x,y) | `ovlGetGreen(` |  | number; number | — |  |
| 2 | 82 | Get Blue(x,y) | `ovlGetBlue(` |  | number; number | — |  |
| 3 | 83 | Get Color$(x,y) | `ovlGetColor$(` |  | number; number → string | — |  |
| 4 | 84 | Get RGB$(x,y) | `ovlGetRGB$(` |  | number; number → string | — |  |
| 5 | 85 | Get X Position of Overlay | `ovlGetXPosition(` |  |  | — |  |
| 6 | 86 | Get Y Position of Overlay | `ovlGetYPosition(` |  |  | — |  |
| 7 | 87 | Make Color Range Value | `ovlColorRange(` |  | number; number | — |  |
| 8 | 88 | Get No Fill Color | `ovlNoFillColor(` |  |  | — |  |
| 9 | 89 | Get Width of Overlay | `ovlGetWidth(` |  |  | — |  |
| 10 | 90 | Get Height of Overlay | `ovlGetHeight(` |  |  | — |  |
| 11 | 91 | Get Ink Effect Value | `ovlGetInkValue(` |  |  | — |  |
| 12 | 92 | Get Auto-Inking Speed | `ovlGetInkSpeed(` |  |  | — |  |
| 13 | 93 | Get Ink Effect | `ovlGetInkEffect(` |  |  | — |  |
| 14 | 94 | Get Address of Overlay | `ovlAddress(` |  |  | — |  |
| 15 | 95 | Get ColorIndex(x,y) | `ovlGetColorIndex(` |  | number; number | — |  |
