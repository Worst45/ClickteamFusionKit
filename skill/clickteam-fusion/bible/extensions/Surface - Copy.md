# Extension Surface - Copy

- File: `Surface - Copy.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Image > Has alpha channel? | `<object>: Image has alpha channel` |  |  | — |  |
| 1 | -82 | Input / Output > Image in clipboard? | `Image available in clipboard` |  |  | — |  |
| 2 | -83 | Input / Output > Loading failed? | `<object>: On loading failed` |  |  | — |  |
| 3 | -84 | Input / Output > Saving failed? | `<object>: On saving failed` |  |  | — |  |
| 4 | -85 | Input / Output > Loading succeeded? | `<object>: On loading succeeded` |  |  | — |  |
| 5 | -86 | Input / Output > Saving succeeded? | `<object>: On saving succeeded` |  |  | — |  |
| 6 | -87 | Image > Pixel is equal to color? | `<object>: RGB at (<p0>,<p1>) = <p2>` |  | numeric expression “X”; numeric expression “Y”; color “Color” | — |  |
| 7 | -88 | Image > Set editing image (inline) | `<object>: Select image <p0>` |  | numeric expression “Image” | — |  |
| 8 | -89 | On callback | `<object>: On callback <p0>` |  | string expression “Callback” | — |  |
| 9 | -90 | Image > Compare to current image | `<object>: Current image <p0>` |  | numeric comparison “Image” | — |  |
| 10 | -91 | Image > Compare to editing image | `<object>: Editing image <p0>` |  | numeric comparison “Image” | — |  |
| 14 | -95 | Fill data > Fill data exists? | `<object>: Fill data <p0> exists` |  | string expression “Fill data name” | — |  |
| 15 | -96 | Input / Output > Buffer is locked? | `<object>: Buffer is locked` |  |  | — |  |
| 16 | -97 | Image > Point is inside image? | `<object>: (<p0>,<p1>) is inside image` |  | numeric expression “X”; numeric expression “Y” | — |  |
| 17 | -98 | Input / Output > File I/O in progress? | `<object>: File I/O is in progress` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Blit > From the surface > Image | `Blit onto image <p0>` |  | numeric expression “Target” | — |  |
| 1 | 81 | Images > Set current image | `Set current image to <p0>` |  | numeric expression “Image” | — |  |
| 2 | 82 | With color > Set pixel | `Set pixel at (<p0>,<p1>) to <p2>` |  | numeric expression “X”; numeric expression “Y”; color “Color” | — |  |
| 3 | 83 | With color > Clear | `Clear with color <p0>` |  | color “Color” | — |  |
| 4 | 84 | Alpha channel > Create | `Create alpha channel, keep transparency = <p0>` |  | numeric expression “Keep transparency? (0: No, 1: Yes)” | — |  |
| 5 | 85 | Alpha channel > Set pixel | `Set alpha at (<p0>,<p1>) to <p2>` |  | numeric expression “X”; numeric expression “Y”; numeric expression “Alpha (0-255)” | — |  |
| 6 | 86 | Alpha channel > Clear | `Clear alpha with <p0>` |  | numeric expression “Alpha (0-255)” | — |  |
| 7 | 87 | Alpha channel > Draw rectangle | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with value <p4> on the alpha channel` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Alpha (0-255)” | — |  |
| 8 | 88 | With color > Draw ellipse > Via bounding box | `Draw ellipse (<p0>,<p1>,<p2>,<p3>) with color <p4>, outline <p5> color <p6>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; color “Fill color (-1: None)”; numeric expression “Outline thickness”; color “Outline color” | — |  |
| 9 | 89 | With color > Draw rectangle > Via bounding box | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with color <p4>, outline <p5> color <p6>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; color “Fill color (-1: None)”; numeric expression “Outline thickness”; color “Outline color” | — |  |
| 10 | 90 | With color > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with color <p4> and thickness <p5>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; color “Color”; numeric expression “Thickness” | — |  |
| 11 | 91 | Images > Delete image | `Delete image <p0>` |  | numeric expression “Image” | — |  |
| 12 | 92 | Images > Insert image | `Insert image at <p0> with dimensions (<p1>,<p2>)` |  | numeric expression “Image”; numeric expression “Width”; numeric expression “Height” | — |  |
| 13 | 93 | Transform > Resize | `Resize image to (<p0>,<p1>)` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 14 | 94 | Input / Output > Save to file | `Save image to file <p0>, override extension = <p1>` |  | file name “File”; string expression “Override extension (Specify if path does not include an extension like "png")” | — |  |
| 16 | 96 | With color > Flood fill | `Flood fill at (<p0>,<p1>) with color <p2> and tolerance <p3>` |  | numeric expression “X”; numeric expression “Y”; color “Color”; numeric expression “Tolerance (0-255)” | — |  |
| 17 | 97 | Images > Add image | `Add image with dimensions (<p0>,<p1>)` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 18 | 98 | Images > Delete all images | `Delete all images` |  |  | — |  |
| 19 | 99 | Blit > From the surface > Alpha channel | `Blit onto image <p0>'s alpha channel` |  | numeric expression “Target image” | — |  |
| 20 | 100 | With color > Replace color | `Replace <p0> with <p1>` |  | color “Old color”; color “New color” | — |  |
| 21 | 101 | Transform > Reverse X | `Reverse X` |  |  | — |  |
| 22 | 102 | Transform > Reverse Y | `Reverse Y` |  |  | — |  |
| 23 | 103 | Transform > Minimize | `Minimize` |  |  | — |  |
| 24 | 104 | Settings > Set transparent color | `Set transparent color to <p0>, replace old color = <p1>` |  | color “Transparent color”; numeric expression “Replace old color? (0: No, 1: Yes)” | — |  |
| 25 | 105 | Alpha channel > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with value <p4> on the alpha channel` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Alpha (0-255)” | — |  |
| 26 | 106 | Adjust > Perform operation > With color for RGB | `Perform <p0> with color <p1>` |  | string expression “Operator (+  -  *  /  **  %%  <  >  &  \|  ^  <<  >>  =)”; color “Color” | — |  |
| 27 | 107 | Display settings > Force redraw | `Force redraw` |  |  | — |  |
| 28 | 108 | Images > Copy image > From another image | `Copy image <p0> from <p1>` |  | numeric expression “Destination image”; numeric expression “Source image” | — |  |
| 29 | 109 | Images > Set editing image | `Set editing image to <p0>` |  | numeric expression “Image” | — |  |
| 30 | 110 | With color > Draw polygon | `Draw polygon at (<p0>,<p1>) with color <p2>, outline <p3> color <p4>` |  | numeric expression “X”; numeric expression “Y”; color “Fill color (-1: None)”; numeric expression “Outline thickness”; color “Outline color” | — |  |
| 31 | 111 | Polygons > Insert point | `Insert point (<p1>,<p2>) at <p0>` |  | numeric expression “Index (-1: Append)”; numeric expression “X”; numeric expression “Y” | — |  |
| 32 | 112 | Polygons > Remove all points | `Remove all points` |  |  | — |  |
| 33 | 113 | Polygons > Add points from string | `Add points from string <p0>` |  | string expression “List of points X1,Y1,X2,Y2...” | — |  |
| 34 | 114 | Polygons > Move points | `Move all points by (<p0>,<p1>) pixels` |  | numeric expression “X Offset”; numeric expression “Y Offset” | — |  |
| 35 | 115 | Polygons > Rotate points | `Rotate all points around (<p0>,<p1>) by <p2> degrees` |  | numeric expression “Pivot point X”; numeric expression “Pivot point Y”; numeric expression “Angle (Degrees)” | — |  |
| 36 | 116 | Polygons > Remove point | `Remove point <p0>` |  | numeric expression “Point index” | — |  |
| 37 | 117 | Blit > Transparency > Set transparency | `Set blit transparency to <p0>` |  | numeric expression “Blit transparency (0: Opaque, 1: Transparent)” | — |  |
| 38 | 118 | Blit > Transparency > Set alpha mode | `Set blit alpha mode to <p0>` |  | numeric expression “Alpha mode (0: None, 1: Copy alpha, 2: Compose alpha)” | — |  |
| 39 | 119 | Blit > Effect > Semi-transparency... > Set semi-transparency | `Set blit semi-transparency to <p0>` |  | numeric expression “Semi-transparency (0-128, Make sure to enable the 'Semi-transparency' blit effect!)” | — |  |
| 40 | 120 | Blit > Effect > Set by index | `Set blit effect to <p0>` |  | numeric expression “Blit effect (0: None, 1: Semi-transparency, 2: Invert, 3: XOR, 4: AND, 5: OR, 9: Add, 10: Mono, 11: Sub, 12: HWA Tint)” | — |  |
| 41 | 121 | Blit > Destination > Set position | `Set blit destination position to (<p0>,<p1>)` |  | numeric expression “Destination X”; numeric expression “Destination Y” | — |  |
| 42 | 122 | General settings > Set use absolute coords | `Set use absolute coords to <p0>` |  | numeric expression “Use absolute coordinates? (0: No, 1: Yes)” | — |  |
| 43 | 123 | Fill data > Color > Create | `Create color fill data <p0> with color <p1>` |  | string expression “Fill data name”; color “Color” | — |  |
| 44 | 124 | With fill data > Draw rectangle > Via bounding box | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with fill data <p4>, outline <p5> data <p6>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; string expression “Fill data (Empty: None)”; numeric expression “Outline thickness”; string expression “Outline data (Empty: None)” | — |  |
| 45 | 125 | Fill data > Tiled image > Create | `Create tiled image fill data <p0> with image <p1> and offset (<p2>,<p3>)` |  | string expression “Fill data name”; numeric expression “Image”; numeric expression “X Offset”; numeric expression “Y Offset” | — |  |
| 46 | 126 | Fill data > Linear gradient > Create | `Create linear gradient fill data <p0> with colors (<p1>,<p2>), vertical = <p3>` |  | string expression “Fill data name”; color “Color A”; color “Color B”; numeric expression “Vertical? (0: No, 1: Yes)” | — |  |
| 47 | 127 | Input / Output > Load from clipboard | `Load image from the clipboard` |  |  | — |  |
| 48 | 128 | Input / Output > Save to clipboard | `Save image to the clipboard` |  |  | — |  |
| 49 | 129 | Blit > Onto the surface > External > Active object > At destination | `Blit Active object <p0>` |  | object “Object” | — |  |
| 50 | 130 | With fill data > Draw ellipse > Via bounding box | `Draw ellipse (<p0>,<p1>,<p2>,<p3>) with fill data <p4>, outline <p5> data <p6>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; string expression “Fill data (Empty: None)”; numeric expression “Outline thickness”; string expression “Outline data (Empty: None)” | — |  |
| 51 | 131 | With fill data > Draw polygon | `Draw polygon at (<p0>,<p1>) with fill data <p2>, outline <p3> data <p4>` |  | numeric expression “X”; numeric expression “Y”; string expression “Fill data (Empty: None)”; numeric expression “Outline thickness”; string expression “Outline data (Empty: None)” | — |  |
| 52 | 132 | With color > Draw text | `Draw text <p4> at (<p0>,<p1>,<p2>,<p3>) with color <p5>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2 (Leave zero to use X1)”; numeric expression “Y2 (Leave zero to use Y1)”; string expression “Text”; color “Color” | — |  |
| 53 | 133 | Text > Set horizontal align | `Set horizontal text align to <p0>` |  | numeric expression “Text alignment (Left: 0, Center: 1, Right: 2)” | — |  |
| 54 | 134 | Text > Set vertical align | `Set vertical text align to <p0>` |  | numeric expression “Text alignment (Top: 0, Center: 1, Bottom: 2)” | — |  |
| 55 | 135 | Text > Set multi-line | `Set text multi-line to <p0>` |  | numeric expression “Multi-line (0: No, 1: Yes)” | — |  |
| 56 | 136 | Text > Set font face | `Set text font face to <p0>` |  | string expression “Font” | — |  |
| 57 | 137 | Text > Set font size | `Set text font size to <p0> pt` |  | numeric expression “Font size (points)” | — |  |
| 58 | 138 | Text > Set font quality | `Set text font quality to <p0>` |  | numeric expression “Font quality (0: Don't care, 1: Draft, 2: Proof, 3: Aliased, 4: Anti-aliased, 5: ClearType)” | — |  |
| 59 | 139 | Text > Set font weight | `Set text font weight to <p0>` |  | numeric expression “Font weight (0-9, 1: Thin, 5: Medium, 7: Bold)” | — |  |
| 60 | 140 | Text > Set font decoration | `Set text font decoration to <p0>` |  | numeric expression “Font decoration, add together (1: Italic, 2: Underline, 4: Strike-out)” | — |  |
| 61 | 141 | Adjust > Apply matrix | `Apply convolution matrix (<p3>,<p4>,<p5>¦<p6>,<p7>,<p8>¦<p9>,%A,%B), divisor = <p0>, offset = <p1>, iterate <p2> times` |  | numeric expression “Divisor”; numeric expression “Offset”; numeric expression “Iterations”; numeric expression “X1Y1 (X__\|___\|___)”; numeric expression “X1Y2 (_X_\|___\|___)”; numeric expression “X1Y3 (__X\|___\|___)”; numeric expression “X2Y1 (___\|X__\|___)”; numeric expression “X2Y2 (___\|_X_\|___)”; numeric expression “X2Y3 (___\|__X\|___)”; numeric expression “X3Y1 (___\|___\|X__)”; numeric expression “X3Y2 (___\|___\|_X_)”; numeric expression “X3Y3 (___\|___\|__X)” | — |  |
| 62 | 142 | Blit > Onto the surface > External > Background | `Blit the background` |  |  | — |  |
| 63 | 143 | Blit > Onto the surface > Image | `Blit image <p0>` |  | numeric expression “Source” | — |  |
| 64 | 144 | Blit > From the surface > External > Add backdrop | `Add backdrop <p0>` |  | paste “Options” | — |  |
| 65 | 145 | Blit > From the surface > External > Background | `Blit onto the background` |  |  | — |  |
| 66 | 146 | Blit > Destination > Set dimensions | `Set blit destination dimensions to (<p0>,<p1>)` |  | numeric expression “Destination width”; numeric expression “Destination height” | — |  |
| 67 | 147 | Blit > Onto the surface > Alpha channel | `Blit image <p0>'s alpha channel` |  | numeric expression “Source” | — |  |
| 68 | 148 | Input / Output > Export as Overlay | `Export image as Overlay` |  |  | — |  |
| 69 | 149 | With fill data > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with fill data <p4> and thickness <p5>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; string expression “Fill data”; numeric expression “Thickness” | — |  |
| 70 | 150 | Blit > Onto the surface > External > Overlay | `Blit Overlay at <p0>` |  | numeric expression “Overlay address” | — |  |
| 71 | 151 | Blit > From the surface > External > Overlay | `Blit onto Overlay at <p0>` |  | numeric expression “Overlay address” | — |  |
| 72 | 152 | Fill data > Color > Set color | `Set color of fill data <p0> to <p1>` |  | string expression “Fill data name”; color “Color” | — |  |
| 73 | 153 | Fill data > Linear gradient > Set colors | `Set colors of fill data <p0> to (<p1>,<p2>)` |  | string expression “Fill data name”; color “Color A”; color “Color B” | — |  |
| 74 | 154 | Fill data > Linear gradient > Set vertical | `Set vertical flag of fill data <p0> to <p1>` |  | string expression “Fill data name”; numeric expression “Vertical? (0: No, 1: Yes)” | — |  |
| 75 | 155 | Fill data > Tiled image > Set origin | `Set origin of fill data <p0> to (<p1>,<p2>)` |  | string expression “Fill data name”; numeric expression “X Origin”; numeric expression “Y Origin” | — |  |
| 76 | 156 | Fill data > Tiled image > Set tiled image | `Set image of fill data <p0> to <p1>` |  | string expression “Fill data name”; numeric expression “Image” | — |  |
| 77 | 157 | Fill data > Delete | `Delete fill data <p0>` |  | string expression “Fill data name” | — |  |
| 78 | 158 | Transform > Resize canvas | `Resize canvas to (<p0>,<p1>,<p2>,<p3>)` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 79 | 159 | With fill data > Clear | `Clear with fill data <p0>` |  | string expression “Fill data” | — |  |
| 80 | 160 | Transform > Rotate | `Rotate image by <p0> degrees` |  | numeric expression “Angle (Degrees)” | — |  |
| 81 | 161 | General settings > Set linear resampling | `Set linear resampling to <p0>` |  | numeric expression “Use linear resampling in actions if available? (0: No, 1: Yes)” | — |  |
| 82 | 162 | Blit > Onto the surface > Advanced > Binary surface | `Blit binary surface at <p0>` |  | numeric expression “Surface address” | — |  |
| 83 | 163 | Blit > From the surface > Advanced > Binary surface | `Blit onto binary surface at <p0>` |  | numeric expression “Surface address” | — |  |
| 84 | 164 | Text > Set clipping | `Set text clipping to <p0>` |  | numeric expression “Clipping (0: No, 1: Yes)” | — |  |
| 85 | 165 | Text > Set add ellipsis | `Set text add ellipsis to <p0>` |  | numeric expression “Add ellipsis (0: No, 1: Yes)” | — |  |
| 86 | 166 | Text > Set word break | `Set text word break to <p0>` |  | numeric expression “Word break (0: No, 1: Yes)” | — |  |
| 87 | 167 | Blit > Onto the surface > Advanced > Window handle | `Blit window at <p0>` |  | numeric expression “Window handle (0: Whole desktop)” | — |  |
| 88 | 168 | Blit > From the surface > Advanced > Window handle | `Blit onto window at <p0>` |  | numeric expression “Window handle (0: Whole desktop)” | — |  |
| 89 | 169 | Blit > From the surface > External > Surface | `Blit onto image <p1> of Surface <p0>` |  | object “Surface object”; numeric expression “Image” | — |  |
| 90 | 170 | Blit > Onto the surface > External > Surface | `Blit image <p1> of Surface <p0>` |  | object “Surface object”; numeric expression “Image” | — |  |
| 91 | 171 | Images > Swap two images | `Swap images <p0> and <p1>` |  | numeric expression “Image A”; numeric expression “Image B” | — |  |
| 92 | 172 | Adjust > Move color channels | `Move channels (r,g,b,a) to (<p0>,<p1>,<p2>,<p3>)` |  | string expression “New channel for red (r, g, b, a)”; string expression “New channel for green (r, g, b, a)”; string expression “New channel for blue (r, g, b, a)”; string expression “New channel for alpha, if any (r, g, b, a)” | — |  |
| 93 | 173 | Transform > Scroll | `Scroll (<p0>,<p1>), wrap = <p2>` |  | numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Wrap pixels? (0: No, 1: Yes)” | — |  |
| 94 | 174 | Callback > Return color | `Return <p0> to callback` |  | color “Color” | — |  |
| 95 | 175 | Callback > Loop through image | `Loop through image with callback <p1> and flags <p0>` |  | numeric expression “Flags, add together (1: Get color, 2: Set color, 4: Store position, 8: Get alpha, 16: Set alpha)”; string expression “Callback” | — |  |
| 96 | 176 | Settings > Set clipping rectangle | `Set clipping rectangle to (<p0>,<p1>,<p2>,<p3>)` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 97 | 177 | Settings > Clear clipping rectangle | `Clear clipping rectangle` |  |  | — |  |
| 98 | 178 | Adjust > Invert image | `Invert image` |  |  | — |  |
| 99 | 179 | Polygons > Create star | `Create star, inner radius = <p0>, outer radius = <p1>, spikes = <p2>` |  | numeric expression “Inner radius”; numeric expression “Outer radius”; numeric expression “Number of spikes” | — |  |
| 100 | 180 | Polygons > Scale points | `Scale all points by (<p2>,<p3>) from (<p0>,<p1>)` |  | numeric expression “Scale center X”; numeric expression “Scale center Y”; numeric expression “X scale factor (1.0: None)”; numeric expression “Y scale factor (1.0: None)” | — |  |
| 101 | 181 | With color > Draw ellipse > Via center and size | `Draw ellipse at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>, outline <p5> color <p6>` |  | numeric expression “Center X”; numeric expression “Center Y”; numeric expression “Width”; numeric expression “Height”; color “Fill color (-1: None)”; numeric expression “Outline thickness”; color “Outline color” | — |  |
| 102 | 182 | With fill data > Draw ellipse > Via center and size | `Draw ellipse at (<p0>,<p1>) with size (<p2>,<p3>) and fill data <p4>, outline <p5> data <p6>` |  | numeric expression “Center X”; numeric expression “Center Y”; numeric expression “Width”; numeric expression “Height”; string expression “Fill data (Empty: None)”; numeric expression “Outline thickness”; string expression “Outline data (Empty: None)” | — |  |
| 103 | 183 | Polygons > Create regular polygon | `Create regular polygon, radius = <p0>, edges = <p1>` |  | numeric expression “Radius”; numeric expression “Number of edges” | — |  |
| 104 | 184 | Display settings > Skip redraw | `Skip redraw` |  |  | — |  |
| 105 | 185 | Blit > Destination > Set all | `Set blit destination, position = (<p0>,<p1>), dimensions = (<p2>,<p3>), stretch mode = <p4>` |  | numeric expression “Destination X”; numeric expression “Destination Y”; numeric expression “Destination width”; numeric expression “Destination height”; numeric expression “Stretch mode (0: No stretching, 1: No resampling, 2: Resampling, 3: Opaque resampling)” | — |  |
| 106 | 186 | Adjust > Convert to grayscale | `Convert to grayscale` |  |  | — |  |
| 107 | 187 | Fill data > Radial gradient > Create | `Create radial gradient fill data <p0> with colors (<p1>,<p2>)` |  | string expression “Fill data name”; color “Color A”; color “Color B” | — |  |
| 109 | 189 | General settings > Set display editing image | `Set display editing image to <p0>` |  | numeric expression “Display editing image? (0: No, 1: Yes)” | — |  |
| 110 | 190 | General settings > Set select new images | `Set select new images to <p0>` |  | numeric expression “Display editing image? (0: No, 1: Yes)” | — |  |
| 111 | 191 | Display settings > Set transparent | `Set transparent to <p0>` |  | numeric expression “Display transparent? (0: No, 1: Yes)” | — |  |
| 112 | 192 | Input / Output > Lock buffer | `Lock buffer` |  |  | — |  |
| 113 | 193 | Input / Output > Unlock buffer | `Unlock buffer` |  |  | — |  |
| 114 | 194 | Blit > Source > Set position | `Set blit source position to (<p0>,<p1>)` |  | numeric expression “Source X”; numeric expression “Source Y” | — |  |
| 115 | 195 | Blit > Source > Set dimensions | `Set blit source dimensions to (<p0>,<p1>)` |  | numeric expression “Source width”; numeric expression “Source height” | — |  |
| 116 | 196 | Blit > Destination > Set stretch mode | `Set blit stretch mode to <p0>` |  | numeric expression “Stretch mode (0: No stretching, 1: No resampling, 2: Resampling, 3: Opaque resampling)” | — |  |
| 117 | 197 | Blit > Source > Set region flag | `Set blit region flag to <p0>` |  | numeric expression “Use specified source region? (0: No, 1: Yes)” | — |  |
| 118 | 198 | Text > Set angle | `Set text angle to <p0>` |  | numeric expression “Angle (Degrees)” | — |  |
| 119 | 199 | With color > Draw rectangle > Via position and size | `Draw rectangle at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>, outline <p5> color <p6>` |  | numeric expression “X”; numeric expression “Y”; numeric expression “Width”; numeric expression “Height”; color “Fill color (-1: None)”; numeric expression “Outline thickness”; color “Outline color” | — |  |
| 120 | 200 | With fill data > Draw rectangle > Via position and size | `Draw rectangle at (<p0>,<p1>) with size (<p2>,<p3>) and fill data <p4>, outline <p5> data <p6>` |  | numeric expression “X”; numeric expression “Y”; numeric expression “Width”; numeric expression “Height”; string expression “Fill data (Empty: None)”; numeric expression “Outline thickness”; string expression “Outline data (Empty: None)” | — |  |
| 121 | 201 | Images > Copy image > From Surface object | `Copy image <p0> from image <p2> of Surface <p1>` |  | numeric expression “Destination image”; object “Surface object”; numeric expression “Source image” | — |  |
| 122 | 202 | Blit > Onto the surface > External > Active object > At its position | `Blit Active object <p0> at its position` |  | object “Object” | — |  |
| 123 | 203 | Adjust > Perform operation > With value for... | `Perform <p0> with <p1> for channels <p2>` |  | string expression “Operator (+  -  *  /  **  %%  <  >  &  \|  ^  <<  >>  =)”; numeric expression “Operand”; string expression “Channels, add together (r, g, b, a)” | — |  |
| 124 | 204 | Blit > From the surface > From the alpha channel > Alpha channel | `Blit alpha channel onto image <p0>'s alpha channel` |  | numeric expression “Target image” | — |  |
| 125 | 205 | Blit > Onto the surface > Onto the alpha channel > Alpha channel | `Blit image <p0>'s alpha channel onto the alpha channel` |  | numeric expression “Source image” | — |  |
| 126 | 206 | Blit > Effect > Set by name | `Set blit effect to <p0>` |  | string expression “Blit effect (Semi-transparency, Invert, XOR, AND, OR, Add, Mono, Sub, Tint)” | — |  |
| 127 | 207 | Alpha channel > Remove | `Remove alpha channel` |  |  | — |  |
| 128 | 208 | Input / Output > Write bytes | `Write bytes at <p0> with size <p2> into the buffer at <p1>` |  | numeric expression “Source address”; numeric expression “Buffer offset”; numeric expression “Size in bytes” | — |  |
| 129 | 209 | Images > References > Add reference | `Add image reference for <p0>` |  | numeric expression “Binary surface address” | — |  |
| 130 | 210 | Images > References > Insert reference | `Insert image reference for <p1> at <p0>` |  | numeric expression “Image”; numeric expression “Binary surface address” | — |  |
| 131 | 211 | Images > Copy image > From binary surface | `Copy image <p0> from binary surface <p1>` |  | numeric expression “Destination image”; numeric expression “Binary surface address” | — |  |
| 132 | 212 | Images > References > Set binary address | `Set binary address of image <p0> to <p1>` |  | numeric expression “Image”; numeric expression “Binary surface address” | — |  |
| 133 | 213 | Images > References > Set reference state | `Set reference state of image <p0> to <p1>` |  | numeric expression “Image”; numeric expression “State (0: Local image, 1: Reference)” | — |  |
| 134 | 214 | General settings > Set keep points after drawing | `Set keep points after drawing to <p0>` |  | numeric expression “Keep points after drawing? (0: No, 1: Yes)” | — |  |
| 135 | 215 | General settings > Set threaded file input/output | `Set threaded file input/output to <p0>` |  | numeric expression “Threaded file input/output? (0: No, 1: Yes)” | — |  |
| 136 | 216 | Blit > Effect > Set callback (overrides effect) | `Set blit callback to <p0>` |  | string expression “Blit callback (Overrides ink effect, empty: None)” | — |  |
| 137 | 217 | Callback > Loop through area | `Loop through (<p0>,<p1>,<p2>,<p3>) with callback <p5> and flags <p4>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Flags, add together (1: Get color, 2: Set color, 4: Store position, 8: Get alpha, 16: Set alpha)”; string expression “Callback” | — |  |
| 138 | 218 | Callback > Return alpha | `Return alpha <p0> to callback` |  | numeric expression “Alpha (0-255)” | — |  |
| 139 | 219 | Display settings > Set scale | `Set scale to <p0>, quality = <p1>` |  | numeric expression “Scale value (1.0: Normal dimension)”; numeric expression “Quality (0: Speed, 1: Quality)” | — |  |
| 140 | 220 | Display settings > Set X scale | `Set X scale to <p0>, quality = <p1>` |  | numeric expression “Scale value (1.0: Normal dimension)”; numeric expression “Quality (0: Speed, 1: Quality)” | — |  |
| 141 | 221 | Display settings > Set Y scale | `Set Y scale to <p0>, quality = <p1>` |  | numeric expression “Scale value (1.0: Normal dimension)”; numeric expression “Quality (0: Speed, 1: Quality)” | — |  |
| 142 | 222 | Polygons > Add point | `Add point (<p0>,<p1>)` |  | numeric expression “X”; numeric expression “Y” | — |  |
| 143 | 223 | Settings > Set hot spot | `Set hot spot to (<p0>,<p1>) px` |  | numeric expression “Hot spot X”; numeric expression “Hot spot Y” | — |  |
| 144 | 224 | Settings > Set hot spot (percent) | `Set hot spot to (<p0>,<p1>) percent` |  | numeric expression “Hot spot X (Percent)”; numeric expression “Hot spot Y (Percent)” | — |  |
| 145 | 225 | Fill data > Callback > Create | `Create callback fill data <p0>` |  | string expression “Fill data name” | — |  |
| 146 | 226 | Blit > Source > Set all | `Set blit source, position = (<p0>,<p1>), dimensions = (<p2>,<p3>), region flag = <p4>` |  | numeric expression “Source X”; numeric expression “Source Y”; numeric expression “Source width”; numeric expression “Source height”; numeric expression “Use specified source region? (0: No, 1: Yes)” | — |  |
| 147 | 227 | Blit > Angle > Set angle | `Set blit angle to <p0>` |  | numeric expression “Angle (Degrees)” | — |  |
| 148 | 228 | Blit > Hot spot > Set pixels | `Set blit hot spot to (<p0>,<p1>) px` |  | numeric expression “Hot spot X”; numeric expression “Hot spot Y” | — |  |
| 150 | 230 | Blit > Hot spot > Set percent | `Set blit hot spot to (<p0>,<p1>) percent` |  | numeric expression “Hot spot X (Percent)”; numeric expression “Hot spot Y (Percent)” | — |  |
| 151 | 231 | Blit > Angle > Set rotation quality | `Set blit rotation quality to <p0>` |  | numeric expression “Rotation quality (0: None, 1: Linear resampling)” | — |  |
| 152 | 232 | Display settings > Set angle | `Set angle to <p0>, quality = <p1>` |  | numeric expression “Angle (Degrees)”; numeric expression “Quality (0: Speed, 1: Quality)” | — |  |
| 153 | 233 | Input / Output > Load from file | `Load image from file <p0>` |  | file name “File” | — |  |
| 154 | 234 | Settings > Convert to HWA texture | `Convert to HWA texture` |  |  | — |  |
| 155 | 235 | Settings > Convert to HWA target | `Convert to HWA target` |  |  | — |  |
| 156 | 236 | Settings > Convert to bitmap | `Convert to bitmap` |  |  | — |  |
| 157 | 237 | Blit > Effect > Tint... > Set tint (HWA only) | `Set blit tint to (<p0>, <p1>)` |  | color “Color multiplier”; numeric expression “Alpha multiplier (0-255)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Image count | `ImageCount(` |  |  | — |  |
| 1 | 81 | Editing image > Index | `EditImage(` |  |  | — |  |
| 2 | 82 | Current image > Index | `CurrentImage(` |  |  | — |  |
| 3 | 83 | Editing image > RGB at | `RGBAt(` |  | number “X”; number “Y” | — |  |
| 4 | 84 | Editing image > Width | `Width(` |  |  | — |  |
| 5 | 85 | Editing image > Height | `Height(` |  |  | — |  |
| 6 | 86 | Last added image | `LastImage(` |  |  | — |  |
| 7 | 87 | Input / Output > Overlay address | `ExportedOvlAddr(` |  |  | — |  |
| 8 | 88 | Current image > Width | `CurrentWidth(` |  |  | — |  |
| 9 | 89 | Current image > Height | `CurrentHeight(` |  |  | — |  |
| 10 | 90 | Editing image > Red at | `RedAt(` |  | number “X”; number “Y” | — |  |
| 11 | 91 | Editing image > Green at | `GreenAt(` |  | number “X”; number “Y” | — |  |
| 12 | 92 | Editing image > Blue at | `BlueAt(` |  | number “X”; number “Y” | — |  |
| 13 | 93 | Editing image > Alpha at | `AlphaAt(` |  | number “X”; number “Y” | — |  |
| 14 | 94 | Any image > RGB at | `ImgRGBAt(` |  | number “Image”; number “X”; number “Y” | — |  |
| 15 | 95 | Any image > Width | `ImgWidth(` |  | number “Image” | — |  |
| 16 | 96 | Any image > Height | `ImgHeight(` |  | number “Image” | — |  |
| 17 | 97 | Callback > X position | `CallbackX(` |  |  | — |  |
| 18 | 98 | Callback > Y position | `CallbackY(` |  |  | — |  |
| 23 | 103 | Tools > Color from RGB | `RGB(` |  | number “R⡂”; number “G⡂”; number “B⡂” | — |  |
| 24 | 104 | Tools > Blend two colors | `Blend(` |  | number “Color A”; number “Color B”; number “Blend (0-255)” | — |  |
| 25 | 105 | Tools > Invert color | `Invert(` |  | number “Color” | — |  |
| 26 | 106 | Tools > Multiply two colors | `Multiply(` |  | number “Color A”; number “Color B” | — |  |
| 27 | 107 | Editing image > Transparent color | `TranspColor(` |  |  | — |  |
| 28 | 108 | Input / Output > Files > Filter count | `FilterCount(` |  |  | — |  |
| 29 | 109 | Input / Output > Files > Filter name | `Filter$(` |  | number “Index” → string | — |  |
| 30 | 110 | Input / Output > Files > Filter extension name | `FilterExt$(` |  | number “Filter index”; number “Extension index” → string | — |  |
| 31 | 111 | Input / Output > Files > Filter extension count | `FilterExtCount(` |  | number “Index” | — |  |
| 32 | 112 | Input / Output > Files > Filter can save | `FilterCanSave(` |  | number “Index” | — |  |
| 33 | 113 | Input / Output > Buffer address | `BufferAddr(` |  |  | — |  |
| 34 | 114 | Input / Output > Buffer pitch | `BufferPitch(` |  |  | — |  |
| 35 | 115 | Input / Output > Files > Filter extension list | `FilterAllExts$(` |  | number “Filter index” → string | — |  |
| 36 | 116 | Flood fill > Area X1 | `FloodX1(` |  |  | — |  |
| 37 | 117 | Flood fill > Area Y1 | `FloodY1(` |  |  | — |  |
| 38 | 118 | Flood fill > Area X2 | `FloodX2(` |  |  | — |  |
| 39 | 119 | Flood fill > Area Y2 | `FloodY2(` |  |  | — |  |
| 40 | 120 | Fill data > Fill data from index | `FillData$(` |  | number “Index” → string | — |  |
| 41 | 121 | Fill data > Fill data count | `FillDataCount(` |  |  | — |  |
| 42 | 122 | Fill data > Color | `FillDataColor(` |  | string “Fill data” | — |  |
| 43 | 123 | Fill data > Linear gradient > Color A | `FillDataColorA(` |  | string “Fill data” | — |  |
| 44 | 124 | Fill data > Linear gradient > Color B | `FillDataColorB(` |  | string “Fill data” | — |  |
| 45 | 125 | Fill data > Tiled image | `FillDataImage(` |  | string “Fill data” | — |  |
| 46 | 126 | Any image > Red at | `ImgRedAt(` |  | number “Image”; number “X”; number “Y” | — |  |
| 47 | 127 | Any image > Green at | `ImgGreenAt(` |  | number “Image”; number “X”; number “Y” | — |  |
| 48 | 128 | Any image > Blue at | `ImgBlueAt(` |  | number “Image”; number “X”; number “Y” | — |  |
| 49 | 129 | Any image > Alpha at | `ImgAlphaAt(` |  | number “Image”; number “X”; number “Y” | — |  |
| 50 | 130 | Tools > Color from HEX | `HEX2RGB(` |  | string “HEX string” | — |  |
| 51 | 131 | Tools > Random color | `RandomColor(` |  |  | — |  |
| 52 | 132 | Editing image > Binary address | `BinaryAddr(` |  |  | — |  |
| 53 | 133 | Any image > Binary address | `ImgBinaryAddr(` |  | number “Image” | — |  |
| 54 | 134 | Callback > Source color | `CallbackSrcCol(` |  |  | — |  |
| 55 | 135 | Callback > Destination color | `CallbackDestCol(` |  |  | — |  |
| 56 | 136 | Binary surfaces > Object | `ObjBinaryAddr(` |  | number “Fixed value”; number “Parameter” | — |  |
| 57 | 137 | Binary surfaces > Background | `BackgroundBinaryAddr(` |  |  | — |  |
| 58 | 138 | Callback > Source alpha | `CallbackSrcAlpha(` |  |  | — |  |
| 59 | 139 | Window handles > Frame window | `FrameWindowHandle(` |  |  | — |  |
| 60 | 140 | Any image > Hot spot X | `ImgHotX(` |  | number “Image” | — |  |
| 61 | 141 | Any image > Hot spot Y | `ImgHotY(` |  | number “Image” | — |  |
| 62 | 142 | Editing image > Hot spot X | `HotX(` |  |  | — |  |
| 63 | 143 | Editing image > Hot spot Y | `HotY(` |  |  | — |  |
| 64 | 144 | Any image > Transparent color | `TranspColor(` |  |  | — |  |
| 65 | 145 | Callback > Destination alpha | `CallbackDestAlpha(` |  |  | — |  |
| 66 | 146 | Tools > Add two colors | `Add(` |  | number “Color A”; number “Color B” | — |  |
| 67 | 147 | Tools > Subtract two colors | `Subtract(` |  | number “Color A”; number “Color B” | — |  |
| 68 | 148 | Binary surfaces > Transformed Surface | `TransformedSurfaceAddr(` |  |  | — |  |
| 69 | 149 | Scale / Angle > X scale | `XScale(` |  |  | — |  |
| 70 | 150 | Scale / Angle > Y scale | `YScale(` |  |  | — |  |
| 71 | 151 | Scale / Angle > Angle | `Angle(` |  |  | — |  |
