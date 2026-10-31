# Extension fcVectorialShape

- File: `fcVectorialShape.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Import > On Attribute | `<object>: On Import Attribute <p0>` |  | string expression “SVG Attribute” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Presets > from points > Line (2 pts) | `Preset line from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 1 | 81 | Outline > Set 1st thickness | `Set 1st thickness to <p0>px` |  | numeric expression “Thickness (float)” | — |  |
| 2 | 82 | Outline > Set 1st color RGB | `Set 1st color to <p0>` |  | color “Color (Use GetRGB function)” | — |  |
| 3 | 83 | Outline > Set 1st alpha | `Set 1st alpha to <p0>` |  | numeric expression “Alpha channel: 0-255 (0=invisible)” | — |  |
| 4 | 84 | Transforms > Position (from barycenter) | `Set position from barycenter to (<p0>,<p1>)` |  | numeric expression “X position (float)”; numeric expression “Y position (float)” | — |  |
| 5 | 85 | Points > Set position of a point | `Set point <p0> to (<p1>,<p2>)` |  | numeric expression “Point ID”; numeric expression “Point: X coordinate (float)”; numeric expression “Point: Y coordinate (float)” | — |  |
| 6 | 86 | Points > Set position of first point | `Set first point to (<p0>,<p1>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)” | — |  |
| 7 | 87 | Points > Set position of last point | `Set last point to (<p0>,<p1>)` |  | numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 8 | 88 | Outline > Set start cap | `Set start cap to <p0>` |  | numeric expression “Cap ( 0:flat,1:square,2:round,3:triangle,16:no anchor,17:square,18:round,19:diamond,20:arrow )” | — |  |
| 9 | 89 | Outline > Set end cap | `Set end cap to <p0>` |  | numeric expression “Cap ( 0:flat,1:square,2:round,3:triangle,16:no anchor,17:square,18:round,19:diamond,20:arrow )” | — |  |
| 10 | 90 | Outline > Set dash style | `Set dash style to <p0>` |  | numeric expression “Dash style ( 0:solid,1:dash,2:dot,3:dash-dot,4:dash-dot-dot )” | — |  |
| 11 | 91 | Outline > Set dash cap | `Set dash cap to <p0>` |  | numeric expression “Dash cap style ( 0:flat,1:square,2:round,3:triangle )” | — |  |
| 12 | 92 | Outline > Set dash offset | `Set dash offset to <p0>` |  | numeric expression “Dash offset (float)” | — |  |
| 13 | 93 | Transforms > Rotation (from origin) | `Rotation by <p0>°` |  | numeric expression “Transformation Rotation degrees (float)” | — |  |
| 14 | 94 | Transforms > Scaling (from origin) | `Scaling by (<p0>,<p1>)` |  | numeric expression “Transformation Scale X (1.0=normal size) (float)”; numeric expression “Transformation Scale Y (1.0=normal size) (float)” | — |  |
| 15 | 95 | Transforms > Translation (from origin) | `Translation by (<p0>,<p1>)` |  | numeric expression “Transformation Translation X (float)”; numeric expression “Transformation Translation Y (float)” | — |  |
| 16 | 96 | Transforms > Set origin | `Set transformation origin to (<p0>,<p1>)` |  | numeric expression “Transformation Origin X”; numeric expression “Transformation Origin Y” | — |  |
| 17 | 97 | Transforms > Position (from a point) | `Set position from point <p2> to (<p0>,<p1>)` |  | numeric expression “X position (float)”; numeric expression “Y position (float)”; numeric expression “Point ID” | — |  |
| 18 | 98 | Transforms > Flipping (from origin) | `Flipping (<p0>H,<p1>V)` |  | numeric expression “Flip horizontally (0=no, 1=yes)”; numeric expression “Flip vertically (0=no, 1=yes)” | — |  |
| 19 | 99 | Shape > Set tension | `Set tension to <p0>` |  | numeric expression “Tension (float)” | — |  |
| 20 | 100 | Shape > Set closed state | `Set closed state to <p0>` |  | numeric expression “Closed state (0=opened, 1=closed)” | — |  |
| 21 | 101 | Presets > from points > Simple curve (3 pts) | `Preset simple curve (3 points) - tension=<p6>` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)”; numeric expression “Third point: X coordinate (float)”; numeric expression “Third point: Y coordinate (float)”; numeric expression “Tension (float)” | — |  |
| 22 | 102 | Presets > from rectangle > Rectangle (4 pts) | `Preset rectangle from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)” | — |  |
| 23 | 103 | Presets > from points > Simple poly (4 pts) | `Preset simple poly (4 points)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)”; numeric expression “Third point: X coordinate (float)”; numeric expression “Third point: Y coordinate (float)”; numeric expression “Fourth point: X coordinate (float)”; numeric expression “Fourth point: Y coordinate (float)” | — |  |
| 24 | 104 | Presets > from rectangle > Triangle iso (3 pts) | `Preset triangle iso from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)” | — |  |
| 25 | 105 | Presets > from points > Triangle (3 pts) | `Preset triangle (<p0>,<p1>),(<p2>,<p3>),(<p4>,<p5>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)”; numeric expression “Third point: X coordinate (float)”; numeric expression “Third point: Y coordinate (float)” | — |  |
| 26 | 106 | Presets > None (0 pts) | `Clear all points` |  |  | — |  |
| 27 | 107 | Presets > from center > Star (X pts) | `Preset star <p4> to (<p0>,<p1>)` |  | numeric expression “Point: X coordinate (float)”; numeric expression “Point: Y coordinate (float)”; numeric expression “Inner Ray (float)”; numeric expression “Outer Ray (float)”; numeric expression “Number of points” | — |  |
| 28 | 108 | Presets > from rectangle > Rectangle round (8 pts) | `Preset rounded rectangle from (<p0>,<p1>) to (<p2>,<p3>) - ray=<p4>` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)”; numeric expression “Ray (float)” | — |  |
| 29 | 109 | Presets > from rectangle > House (5 pts) | `Preset house from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)” | — |  |
| 30 | 110 | Presets > from rectangle > Link auto (4 pts) | `Preset link auto from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 31 | 111 | Outline > Set 2nd color RGB | `Set 2nd color to <p0>` |  | color “Color (Use GetRGB function)” | — |  |
| 32 | 112 | Outline > Set 2nd alpha | `Set 2nd alpha to <p0>` |  | numeric expression “Alpha channel: 0-255 (0=invisible)” | — |  |
| 33 | 113 | Transforms > Orientation (from origin) | `Orientation to <p0>°` |  | numeric expression “Transformation Orientation degrees (float)” | — |  |
| 34 | 114 | Presets > from rectangle > Diamond (4 pts) | `Preset diamond from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)” | — |  |
| 35 | 115 | Presets > from center > Circle (4 pts) | `Preset circle to (<p0>,<p1>) - ray=<p2>` |  | numeric expression “X position (float)”; numeric expression “Y position (float)”; numeric expression “Ray (float)” | — |  |
| 36 | 116 | Presets > from center > Ellipse (4 pts) | `Preset ellipse to (<p0>,<p1>) - rayX=<p2> - rayY=<p3>` |  | numeric expression “X position (float)”; numeric expression “Y position (float)”; numeric expression “Ray X (float)”; numeric expression “Ray Y (float)” | — |  |
| 37 | 117 | Presets > from rectangle > Ellipse (4 pts) | `Preset ellipse from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)” | — |  |
| 38 | 118 | Presets > from rectangle > Regular polygon (X pts) | `Preset regular poly from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)”; numeric expression “Number of points” | — |  |
| 39 | 119 | Presets > from rectangle > Link vertical (4 pts) | `Preset link vertical from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 40 | 120 | Presets > from rectangle > Link horizontal (4 pts) | `Preset link horizontal from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 41 | 121 | Points > Set number of points | `Set the number of points to <p0>` |  | numeric expression “Number of points” | — |  |
| 42 | 122 | Points > Delete X last points | `Delete <p0> last point(s)` |  | numeric expression “Number of points” | — |  |
| 43 | 123 | Points > Delete X first points | `Delete <p0> first point(s)` |  | numeric expression “Number of points” | — |  |
| 44 | 124 | Points > Insert a point before another | `Insert point (<p1>,<p2>) before point <p0>` |  | numeric expression “Insert point before Point ID”; numeric expression “Point: X coordinate (float)”; numeric expression “Point: Y coordinate (float)” | — |  |
| 45 | 125 | Transforms > Position (from origin) | `Set position from origin to (<p0>,<p1>)` |  | numeric expression “X position (float)”; numeric expression “Y position (float)” | — |  |
| 46 | 126 | Fill (beta) > Mode > Set fill mode | `Set fill mode to <p0>` |  | numeric expression “Fill mode (0=none, 1=solid, 2=motif, 3=texture, 4=linear gradient; 5=shape gradient)” | — |  |
| 47 | 127 | Fill (beta) > Set fill color RGB | `Set fill color <p0> to <p1>` |  | numeric expression “Color number (1-based)”; color “Color (Use GetRGB function)” | — |  |
| 48 | 128 | Fill (beta) > Set fill alpha | `Set fill alpha <p0> to <p1>` |  | numeric expression “Color number (1-based)”; numeric expression “Alpha channel: 0-255 (0=invisible)” | — |  |
| 51 | 131 | Fill (beta) > Set fill collision | `Set fill mask state to <p0>` |  | numeric expression “Fill mask (0=no collision with fill, 1=collision with fill)” | — |  |
| 52 | 132 | Fill (beta) > Mode > 2: Set fill pattern type | `Set pattern type to <p0>` |  | numeric expression “Fill pattern type (0-52)” | — |  |
| 53 | 133 | Fill (beta) > Mode > 4: Set fill linear start | `Set linear fill start to (<p0>,<p1>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)” | — |  |
| 54 | 134 | Fill (beta) > Mode > 4: Set fill linear end | `Set linear fill end to (<p0>,<p1>)` |  | numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 55 | 135 | Fill (beta) > Mode > 4: Set fill linear start+end | `Set linear fill from (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 56 | 136 | Transforms > Set mode | `Set transformation mode to <p0>` |  | numeric expression “Tansformation mode (0=none, 1=points, 2=fill, 3=points+fill)” | — |  |
| 57 | 137 | Shape > Set fine collision on/off | `Set fine collision test to <p0>` |  | numeric expression “Collision tests (0=off, 1=on)” | — |  |
| 58 | 138 | Fill (beta) > Mode > 3: Set fill texture image | `Set fill texture image to <p0>` |  | string expression “Texture image” | — |  |
| 59 | 139 | Fill (beta) > Mode > 3: Set fill texture tile | `Set fill texture tile to (<p0>,<p1>) sized to (<p2>,<p3>)` |  | numeric expression “Tile X position (in the texture image)”; numeric expression “Tile Y position (in the texture image)”; numeric expression “Tile width”; numeric expression “Tile height” | — |  |
| 60 | 140 | Fill (beta) > Mode > 3: Set fill texture wrap mode | `Set fill texture tile wrap mode to <p0>` |  | numeric expression “Tile wrap mode (0=normal, 1=flipX, 2=flipY, 3=flipXY, 4=clamp)” | — |  |
| 61 | 141 | Outline > Set start/end caps | `Set start cap to <p0> and end cap to <p1>` |  | numeric expression “Cap ( 0:flat,1:square,2:round,3:triangle,16:no anchor,17:square,18:round,19:diamond,20:arrow )”; numeric expression “Cap ( 0:flat,1:square,2:round,3:triangle,16:no anchor,17:square,18:round,19:diamond,20:arrow )” | — |  |
| 62 | 142 | Export > Collision Mask to BMP | `Save Collision Mask as BMP to file <p0>` |  | string expression “BMP file path” | — |  |
| 63 | 143 | Export > String to File | `Save string <p0> to file <p1>` |  | string expression “String”; string expression “File path” | — |  |
| 64 | 144 | Export > Shape to SVG | `Save Shape as SVG to file <p0>` |  | string expression “SVG file path” | — |  |
| 65 | 145 | Import > Points from SVG points List String | `Import SVG points list <p0>` |  | string expression “SVG Points List (example: "1.2,4, 5.51,6.2, ...")” | — |  |
| 66 | 146 | Import > SVG Element from SVG source String | `Import SVG Element #<p1> from SVG source <p0>` |  | string expression “SVG source”; numeric expression “SVG Element Index (0=none, 1=first one, 2=second, ...)” | — |  |
| 67 | 147 | Import > SVG Element from SVG File | `Import SVG Element #<p1> from SVG File <p0>` |  | string expression “SVG file path”; numeric expression “SVG Element Index (0=none, 1=first one, 2=second, ...)” | — |  |
| 68 | 148 | Shape > Set styles to default | `Set styles to default` |  |  | — |  |
| 69 | 149 | Export > Set SVG Optional Attributes | `Set SVG Optional Attributes to <p0>` |  | string expression “SVG Optional Attributes (attribute="value")” | — |  |
| 70 | 150 | Points > Set position of a new point | `Set a new point to (<p0>,<p1>)` |  | numeric expression “X position (float)”; numeric expression “Y position (float)” | — |  |
| 71 | 151 | Points > Set number of points to display | `Set the number of points to display to <p0>` |  | numeric expression “Number of points to display (-1=auto)” | — |  |
| 72 | 152 | Shape > Refine the shape | `Refine the shape <p0> times for minimum sized segments <p1>px` |  | numeric expression “Number of loops (points doubled per loop)”; numeric expression “Minimum distance between segment” | — |  |
| 73 | 153 | Shape > Constrain into a rectangle | `Constrain the shape into rectangle (<p0>,<p1>)-(<p2>,<p3>)` |  | numeric expression “First point: X coordinate (float)”; numeric expression “First point: Y coordinate (float)”; numeric expression “Second point: X coordinate (float)”; numeric expression “Second point: Y coordinate (float)” | — |  |
| 74 | 154 | Text > Set font name | `Set text font name to <p0>` |  | string expression “Enter the name of the font” | — |  |
| 75 | 155 | Text > Set font size | `Set text font size to <p0>` |  | numeric expression “Enter the new size of the font” | — |  |
| 76 | 156 | Text > Set font color | `Set text font color to <p0>` |  | color “Color (Use GetRGB function)” | — |  |
| 77 | 157 | Text > Set font alpha | `Set text font alpha to <p0>` |  | numeric expression “Alpha channel: 0-255 (0=invisible)” | — |  |
| 78 | 158 | Text > Set bounding box | `Set text bounding box from point ID <p0> to point ID <p1>` |  | numeric expression “First Point ID”; numeric expression “Second Point ID” | — |  |
| 79 | 159 | Text > Set text | `Set text to <p0>` |  | string expression “Enter new text” | — |  |
| 80 | 160 | Text > Set margin | `Set text bounding box margin to <p0>px` |  | numeric expression “Bounding Box Marge (float)” | — |  |
| 81 | 161 | Text > Set antialias method | `Set text antialias method to <p0>` |  | numeric expression “Antialias method 0-5 (0=System, 1=None HQ, 2=None, 3=AA HQ, 4=AA, 5=ClearType)” | — |  |
| 82 | 162 | Text > Set alignement | `Set text bounding box alignment to (<p0>,<p1>)` |  | numeric expression “Text bounding box horizontal alignement (0=Left, 1=Center, 2=Right)”; numeric expression “Text bounding box vertical alignement (0=Top, 1=Center, 2=Bottom)” | — |  |
| 83 | 163 | Text > Set wrap mode | `Set text bounding box wrap mode to <p0>` |  | numeric expression “Bounding box text wrap mode (0=Wrap, 1=No wrap)” | — |  |
| 84 | 164 | Presets > from misc > Bubble box (7 pts) | `Preset bubble box from (<p0>,<p1>) to (<p2>,<p3>) with arrow to (<p4>,<p5>) on side <p7>` |  | numeric expression “Top Left: X coordinate (float)”; numeric expression “Top Left Y coordinate (float)”; numeric expression “Bottom Right: X coordinate (float)”; numeric expression “Bottom Right: Y coordinate (float)”; numeric expression “Point: X coordinate (float)”; numeric expression “Point: Y coordinate (float)”; numeric expression “Arrow base Width (float)”; numeric expression “Side (-1=auto, 0=top, 1=right, 2=bottom, 3=left)” | — |  |
| 85 | 165 | Outline > Set 2nd relative thickness | `Set 2nd relative thickness to <p0>px` |  | numeric expression “Relative thickness (float)” | — |  |
| 86 | 166 | Shape > [HWA] Set transparent color | `[HWA] Set transparent color to <p0>` |  | color “Color (Use GetRGB function)” | — |  |
| 87 | 167 | Points > Delete a point | `Delete Point ID<p0>` |  | numeric expression “Point ID” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Points > Get X coordinate of a point | `getXOfPointF(` |  | number “Point ID” | — |  |
| 1 | 81 | Points > Get Y coordinate of a point | `getYOfPointF(` |  | number “Point ID” | — |  |
| 2 | 82 | Calculations > Size and Angle > Get total size | `getSizeTotalF(` |  |  | — |  |
| 3 | 83 | Calculations > Bounding box > Get bounding box width | `getBoxWidthF(` |  |  | — |  |
| 4 | 84 | Calculations > Bounding box > Get bounding box height | `getBoxHeightF(` |  |  | — |  |
| 5 | 85 | Calculations > Size and Angle > Get angle between 2 points | `getAngle2PointsF(` |  | number “First Point ID”; number “Second Point ID” | — |  |
| 6 | 86 | Calculations > Size and Angle > Get angle between coordinates | `getAngleCoordsF(` |  | number “X1”; number “Y1”; number “X2”; number “Y2” | — |  |
| 7 | 87 | Outline > Get 1st color RGB | `get1stColorRGB(` |  |  | — |  |
| 8 | 88 | Outline > Get 1st alpha | `get1stAlpha(` |  |  | — |  |
| 9 | 89 | Outline > Get thickness | `getThicknessF(` |  |  | — |  |
| 10 | 90 | Outline > Get dash style | `getDashStyle(` |  |  | — |  |
| 11 | 91 | Outline > Get dash offset | `getDashOffsetF(` |  |  | — |  |
| 12 | 92 | Points > Get number of points | `getNbPoints(` |  |  | — |  |
| 13 | 93 | Shape > Get tension | `getTension(` |  |  | — |  |
| 14 | 94 | Shape > Get closed state | `getIsClosed(` |  |  | — |  |
| 15 | 95 | Calculations > Size and Angle > Get size between 2 points | `getSize2PointsF(` |  | number “First Point ID”; number “Second Point ID” | — |  |
| 16 | 96 | Calculations > Bounding box > Get bounding box center X | `getXOfCenterF(` |  |  | — |  |
| 17 | 97 | Calculations > Bounding box > Get bounding box center Y | `getYOfCenterF(` |  |  | — |  |
| 18 | 98 | Calculations > Barycenter > Get X of barycenter | `getXOfBarycenterF(` |  |  | — |  |
| 19 | 99 | Calculations > Barycenter > Get Y of barycenter | `getYOfBarycenterF(` |  |  | — |  |
| 20 | 100 | Calculations > Size and Angle > Get size between coordinates | `getSizeCoordsF(` |  | number “X1”; number “Y1”; number “X2”; number “Y2” | — |  |
| 21 | 101 | Calculations > Bounding box > Get minimum X coordinate | `getMinXF(` |  |  | — |  |
| 22 | 102 | Calculations > Bounding box > Get minimum Y coordinate | `getMinYF(` |  |  | — |  |
| 23 | 103 | Calculations > Bounding box > Get maximum X coordinate | `getMaxXF(` |  |  | — |  |
| 24 | 104 | Calculations > Bounding box > Get maximum Y coordinate | `getMaxYF(` |  |  | — |  |
| 25 | 105 | Outline > Get 2nd color RGB | `get2ndColorRGB(` |  |  | — |  |
| 26 | 106 | Outline > Get 2nd alpha | `get2ndAlpha(` |  |  | — |  |
| 27 | 107 | Calculations > Points > Get nearest point ID from coordinates | `getNearestPointID(` |  | number “X position (float)”; number “Y position (float)” | — |  |
| 28 | 108 | Fill (beta) > Mode > Get fill mode | `getFillMode(` |  |  | — |  |
| 29 | 109 | Fill (beta) > Get fill color RGB | `getFillColorRGB(` |  | number “Color number (1-based)” | — |  |
| 30 | 110 | Fill (beta) > Get fill alpha | `getFillAlpha(` |  | number “Color number (1-based)” | — |  |
| 31 | 111 | Calculations > Area > Get area (from first point) | `getAreaFromFirstPointF(` |  |  | — |  |
| 32 | 112 | Calculations > Area > Get area (from barycenter) | `getAreaFromBarycenterF(` |  |  | — |  |
| 33 | 113 | Export > Get SVG points list | `getExportSVGPointsList$(` |  | → string | — |  |
| 34 | 114 | Export > Get SVG polyline element | `getExportSVGPolylineElement$(` |  | → string | — |  |
| 35 | 115 | Export > Get SVG polygon element | `getExportSVGPolygonElement$(` |  | → string | — |  |
| 36 | 116 | Export > Get SVG automatic element | `getExportSVGAutoElement$(` |  | → string | — |  |
| 37 | 117 | Export > Get SVG header | `getExportSVGHeader$(` |  | number “SVG Width”; number “SVG Height” → string | — |  |
| 38 | 118 | Export > Get SVG footer | `getExportSVGFooter$(` |  | → string | — |  |
| 39 | 119 | Export > Get SVG graphic start | `getExportSVGGraphicStart$(` |  | number “Transformation Translation X (float)”; number “Transformation Translation Y (float)” → string | — |  |
| 40 | 120 | Export > Get SVG graphic end | `getExportSVGGraphicEnd$(` |  | → string | — |  |
| 41 | 121 | Import > Get Number of elements in SVG String | `getNumElementsFromSVG(` |  | string “SVG source” | — |  |
| 42 | 122 | Import > Get Number of elements in SVG File | `getNumElementsFromSVGFile(` |  | string “SVG file path” | — |  |
| 43 | 123 | Import > String from File | `getStringFromFile$(` |  | string “File path” → string | — |  |
| 44 | 124 | Import > On Import Attribute > Get Value | `getImportAttributeValue$(` |  | → string | — |  |
| 45 | 125 | Import > On Import Attribute > Get Index | `getImportIndex(` |  |  | — |  |
| 46 | 126 | Import > On Import Attribute > Get Attribute | `getImportAttribute$(` |  | → string | — |  |
| 47 | 127 | Calculations > Points > Get most far point ID from coordinates | `getMostFarPointID(` |  | number “X position (float)”; number “Y position (float)” | — |  |
| 48 | 128 | Calculations > Points > Get nearest point ID from angle | `getNearestPointIDAngle(` |  | number “X position (float)”; number “Y position (float)”; number “Angle (float)” | — |  |
| 49 | 129 | Calculations > Area > Get area (from bounding box) | `getAreaFromBoundingBoxF(` |  |  | — |  |
| 50 | 130 | Text > Get font name | `getTextFontName$(` |  | → string | — |  |
| 51 | 131 | Text > Get font size | `getTextFontSizeF(` |  |  | — |  |
| 52 | 132 | Text > Get font color | `getTextFontColor(` |  |  | — |  |
| 53 | 133 | Text > Get font alpha | `getTextFontAlpha(` |  |  | — |  |
| 54 | 134 | Text > Get Top Left Point ID | `getTextBBTLPointID(` |  |  | — |  |
| 55 | 135 | Text > Get Bottom Right Point ID | `getTextBBBRPointID(` |  |  | — |  |
| 56 | 136 | Text > Get text | `getText$(` |  | → string | — |  |
| 57 | 137 | Text > Get marge | `getTextBBMarginF(` |  |  | — |  |
| 58 | 138 | Text > Get antialias method | `getTextAntiAliasMethod(` |  |  | — |  |
| 59 | 139 | Text > Get horizontal alignment | `getTextBBAlignH(` |  |  | — |  |
| 60 | 140 | Text > Get vertical alignment | `getTextBBAlignV(` |  |  | — |  |
| 61 | 141 | Text > Get wrap mode | `getTextBBWrapMode(` |  |  | — |  |
| 62 | 142 | Calculations > Sides > Get Side from coordinates | `getSideFromCoords(` |  | number “Point: X coordinate (float)”; number “Point: Y coordinate (float)”; number “X position (float)”; number “Y position (float)” | — |  |
| 63 | 143 | Calculations > Sides > Get Side from points | `getSideFromPoint(` |  | number “Point ID”; number “X position (float)”; number “Y position (float)” | — |  |
| 64 | 144 | Calculations > Points > Get X middle of 2 points | `getXMiddleOf2PointsF(` |  | number “First Point ID”; number “Second Point ID” | — |  |
| 65 | 145 | Calculations > Points > Get Y middle of 2 points | `getYMiddleOf2PointsF(` |  | number “First Point ID”; number “Second Point ID” | — |  |
