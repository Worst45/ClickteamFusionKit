# Extension Surface

- Fichier : `Surface.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Image > Has alpha channel? | `<objet>: Image has alpha channel` |  |  | — |  |
| 1 | -82 | Input / Output > Image in clipboard? | `Image available in clipboard` |  |  | — |  |
| 2 | -83 | Input / Output > Loading failed? | `<objet>: On loading failed` |  |  | — |  |
| 3 | -84 | Input / Output > Saving failed? | `<objet>: On saving failed` |  |  | — |  |
| 4 | -85 | Input / Output > Loading succeeded? | `<objet>: On loading succeeded` |  |  | — |  |
| 5 | -86 | Input / Output > Saving succeeded? | `<objet>: On saving succeeded` |  |  | — |  |
| 6 | -87 | Image > Pixel is equal to color? | `<objet>: RGB at (<p0>,<p1>) = <p2>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Color » | — |  |
| 7 | -88 | Image > Select image (inline) | `<objet>: Select image <p0>` |  | expression numérique « Image » | — |  |
| 8 | -89 | On callback | `<objet>: On callback <p0>` |  | expression chaîne « Callback » | — |  |
| 9 | -90 | Image > Compare to displayed image | `<objet>: Displayed image <p0>` |  | comparaison numérique « Image » | — |  |
| 10 | -91 | Image > Compare to selected image | `<objet>: Selected image <p0>` |  | comparaison numérique « Image » | — |  |
| 14 | -95 | Patterns > Pattern exists? | `<objet>: Pattern <p0> exists` |  | expression chaîne « Pattern name » | — |  |
| 15 | -96 | Input / Output > Buffer is locked? | `<objet>: Buffer is locked` |  |  | — |  |
| 16 | -97 | Image > Point is inside image? | `<objet>: (<p0>,<p1>) is inside image` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 17 | -98 | Input / Output > File I/O in progress? | `<objet>: File I/O is in progress` |  |  | — |  |
| 18 | -99 | Input / Output > File is being saved? | `<objet>: File is being saved` |  |  | — |  |
| 19 | -100 | Input / Output > File is being loaded? | `<objet>: File is being loaded` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | - Selected image - | `Blit onto image <p0>` |  | expression numérique « Target » | — |  |
| 1 | 81 | Display settings > Set image to display | `Display image <p0>` |  | expression numérique « Image » | — |  |
| 2 | 82 | With color > Set pixel | `Set pixel at (<p0>,<p1>) to <p2>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Color » | — |  |
| 3 | 83 | With color > Clear | `Clear with color <p0>` |  | couleur « Color » | — |  |
| 4 | 84 | Alpha channel > Create | `Create alpha channel, keep transparency = <p0>` |  | expression numérique « Keep transparency? (0: No, 1: Yes) » | — |  |
| 5 | 85 | Alpha channel > Set pixel | `Set alpha at (<p0>,<p1>) to <p2>` |  | expression numérique « X » ; expression numérique « Y » ; expression numérique « Alpha (0-255) » | — |  |
| 6 | 86 | Alpha channel > Clear | `Clear alpha with <p0>` |  | expression numérique « Alpha (0-255) » | — |  |
| 7 | 87 | Alpha channel > Draw rectangle | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with value <p4> on the alpha channel` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Alpha (0-255) » | — |  |
| 8 | 88 | With color > Draw ellipse > Via bounding box | `Draw ellipse (<p0>,<p1>,<p2>,<p3>) with color <p4>, outline thickness <p5> outline color <p6>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; couleur « Fill color (-1: None) » ; expression numérique « Outline thickness » ; couleur « Outline color » | — |  |
| 9 | 89 | With color > Draw rectangle > Via bounding box | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with color <p4>, outline thickness <p5> outline color <p6>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; couleur « Fill color (-1: None) » ; expression numérique « Outline thickness » ; couleur « Outline color » | — |  |
| 10 | 90 | With color > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with color <p4> and thickness <p5>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; couleur « Color » ; expression numérique « Thickness » | — |  |
| 11 | 91 | Images > Delete image | `Delete image <p0>` |  | expression numérique « Image » | — |  |
| 12 | 92 | Images > Insert image | `Insert image at <p0> with dimensions (<p1>,<p2>)` |  | expression numérique « Image » ; expression numérique « Width » ; expression numérique « Height » | — |  |
| 13 | 93 | Transformations > Resize | `Resize image to (<p0>,<p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 14 | 94 | Input / Output > Save to file | `Save image to file <p0>, override extension = <p1>` |  | nom de fichier « File » ; expression chaîne « Override extension (Specify if path does not include an extension like "png" » | — |  |
| 16 | 96 | With color > Flood fill | `Flood fill at (<p0>,<p1>) with color <p2> and tolerance <p3>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Color » ; expression numérique « Tolerance (0-255) » | — |  |
| 17 | 97 | Images > Add image | `Add image with dimensions (<p0>,<p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 18 | 98 | Images > Delete all images | `Delete all images` |  |  | — |  |
| 19 | 99 | Blitting > Onto... > Alpha channel | `Blit onto image <p0>'s alpha channel` |  | expression numérique « Target image » | — |  |
| 20 | 100 | With color > Replace color | `Replace <p0> with <p1>` |  | couleur « Old color » ; couleur « New color » | — |  |
| 21 | 101 | Transformations > Flip horizontally | `Flip horizontally` |  |  | — |  |
| 22 | 102 | Transformations > Flip vertically | `Flip vertically` |  |  | — |  |
| 23 | 103 | Transformations > Minimize canvas | `Minimize` |  |  | — |  |
| 24 | 104 | Settings > Set transparent color | `Set transparent color to <p0>, replace old color = <p1>` |  | couleur « Transparent color » ; expression numérique « Replace old color? (0: No, 1: Yes) » | — |  |
| 25 | 105 | Alpha channel > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with value <p4> on the alpha channel` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Alpha (0-255) » | — |  |
| 26 | 106 | Adjustments > Perform operation > With color for RGB | `Perform <p0> with color <p1>` |  | expression chaîne « Operator (+  -  *  /  **  %%  <  >  &  \|  ^  <<  >>  =) » ; couleur « Color » | — |  |
| 27 | 107 | Display settings > Force redraw | `Force redraw` |  |  | — |  |
| 28 | 108 | Images > Copy image > From another image | `Copy image <p0> from <p1>` |  | expression numérique « Destination image » ; expression numérique « Source image » | — |  |
| 29 | 109 | Images > Select image | `Select image <p0>` |  | expression numérique « Image » | — |  |
| 30 | 110 | With color > Draw polygon > With outline | `Draw polygon at (<p0>,<p1>) with color <p2>, outline thickness <p3>, outline color <p4>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Fill color (-1: None) » ; expression numérique « Outline thickness » ; couleur « Outline color » | — |  |
| 31 | 111 | Points > Insert point | `Insert point (<p1>,<p2>) at <p0>` |  | expression numérique « Index (-1: Append) » ; expression numérique « X » ; expression numérique « Y » | — |  |
| 32 | 112 | Points > Remove all points | `Remove all points` |  |  | — |  |
| 33 | 113 | Points > Add points from string | `Add points from string <p0>` |  | expression chaîne « List of points X1,Y1,X2,Y2... » | — |  |
| 34 | 114 | Points > Move points | `Move all points by (<p0>,<p1>) pixels` |  | expression numérique « X Offset » ; expression numérique « Y Offset » | — |  |
| 35 | 115 | Points > Rotate points | `Rotate all points around (<p0>,<p1>) by <p2> degrees` |  | expression numérique « Pivot point X » ; expression numérique « Pivot point Y » ; expression numérique « Angle (Degrees) » | — |  |
| 36 | 116 | Points > Remove point | `Remove point <p0>` |  | expression numérique « Point index » | — |  |
| 40 | 120 | Blitting > Effect > Set by index | `Set blit effect to <p0>` |  | expression numérique « Blit effect (0: None, 1: Semi-transparency, 2: Invert, 3: XOR, 4: AND, 5: OR, 9: Add, 10: Mono, 11: Subtract) » | — |  |
| 41 | 121 | Blitting > Destination > Set position | `Set blit destination position to (<p0>,<p1>)` |  | expression numérique « Destination X » ; expression numérique « Destination Y » | — |  |
| 42 | 122 | General settings > Set use absolute coords | `Set use absolute coords to <p0>` |  | expression numérique « Use absolute coordinates? (0: No, 1: Yes) » | — |  |
| 43 | 123 | Patterns > Color > Create | `Create color pattern <p0> with color <p1>` |  | expression chaîne « Pattern name » ; couleur « Color » | — |  |
| 44 | 124 | With pattern > Draw rectangle > Via bounding box | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with fill pattern <p4>, outline thickness <p5>, outline pattern <p6>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression chaîne « Pattern (Empty: None) » ; expression numérique « Outline thickness » ; expression chaîne « Outline pattern (Empty: None) » | — |  |
| 45 | 125 | Patterns > Tiled image > Create | `Create tiled image pattern <p0> with image <p1> and offset (<p2>,<p3>)` |  | expression chaîne « Pattern name » ; expression numérique « Image » ; expression numérique « X Offset » ; expression numérique « Y Offset » | — |  |
| 46 | 126 | Patterns > Linear gradient > Create | `Create linear gradient pattern <p0> with colors (<p1>,<p2>), vertical = <p3>` |  | expression chaîne « Pattern name » ; couleur « Color A » ; couleur « Color B » ; expression numérique « Vertical? (0: No, 1: Yes) » | — |  |
| 47 | 127 | Input / Output > Load from clipboard | `Load image from the clipboard` |  |  | — |  |
| 48 | 128 | Input / Output > Save to clipboard | `Save image to the clipboard` |  |  | — |  |
| 49 | 129 | Blitting > From... > External > Active object > At destination | `Blit Active object <p0>` |  | objet « Object » | — |  |
| 50 | 130 | With pattern > Draw ellipse > Via bounding box | `Draw ellipse (<p0>,<p1>,<p2>,<p3>) with pattern <p4>, outline thickness <p5>, outline pattern <p6>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression chaîne « Pattern (Empty: None) » ; expression numérique « Outline thickness » ; expression chaîne « Outline pattern (Empty: None) » | — |  |
| 51 | 131 | With pattern > Draw polygon | `Draw polygon at (<p0>,<p1>) with pattern <p2>, outline thickness <p3>, outline pattern <p4>` |  | expression numérique « X » ; expression numérique « Y » ; expression chaîne « Pattern (Empty: None) » ; expression numérique « Outline thickness » ; expression chaîne « Outline pattern (Empty: None) » | — |  |
| 52 | 132 | With color > Draw text | `Draw text <p4> at (<p0>,<p1>,<p2>,<p3>) with color <p5>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 (Leave zero to use X1) » ; expression numérique « Y2 (Leave zero to use Y1) » ; expression chaîne « Text » ; couleur « Color » | — |  |
| 53 | 133 | Text > Set horizontal align | `Set horizontal text align to <p0>` |  | expression numérique « Text alignment (Left: 0, Center: 1, Right: 2) » | — |  |
| 54 | 134 | Text > Set vertical align | `Set vertical text align to <p0>` |  | expression numérique « Text alignment (Top: 0, Center: 1, Bottom: 2) » | — |  |
| 55 | 135 | Text > Set multi-line | `Set text multi-line to <p0>` |  | expression numérique « Multi-line (0: No, 1: Yes) » | — |  |
| 56 | 136 | Text > Set font face | `Set text font face to <p0>` |  | expression chaîne « Font » | — |  |
| 57 | 137 | Text > Set font size | `Set text font size to <p0> pt` |  | expression numérique « Font size (points) » | — |  |
| 58 | 138 | Text > Set font quality | `Set text font quality to <p0>` |  | expression numérique « Font quality (0: Don't care, 1: Draft, 2: Proof, 3: Aliased, 4: Anti-aliased, 5: ClearType) » | — |  |
| 59 | 139 | Text > Set font weight | `Set text font weight to <p0>` |  | expression numérique « Font weight (0-9, 1: Thin, 5: Medium, 7: Bold) » | — |  |
| 60 | 140 | Text > Set font decoration | `Set text font decoration to <p0>` |  | expression numérique « Font decoration, add together (1: Italic, 2: Underline, 4: Strike-out) » | — |  |
| 61 | 141 | Adjustments > Apply convolution matrix | `Apply convolution matrix (<p3>,<p4>,<p5>¦<p6>,<p7>,<p8>¦<p9>,%A,%B), divisor = <p0>, offset = <p1>, iterate <p2> times` |  | expression numérique « Divisor » ; expression numérique « Offset » ; expression numérique « Iterations » ; expression numérique « X1Y1 (X__\|___\|___) » ; expression numérique « X1Y2 (_X_\|___\|___) » ; expression numérique « X1Y3 (__X\|___\|___) » ; expression numérique « X2Y1 (___\|X__\|___) » ; expression numérique « X2Y2 (___\|_X_\|___) » ; expression numérique « X2Y3 (___\|__X\|___) » ; expression numérique « X3Y1 (___\|___\|X__) » ; expression numérique « X3Y2 (___\|___\|_X_) » ; expression numérique « X3Y3 (___\|___\|__X) » | — |  |
| 62 | 142 | Blitting > From... > External > Background | `Blit the background` |  |  | — |  |
| 63 | 143 | Blitting > From... > Image | `Blit image <p0>` |  | expression numérique « Source » | — |  |
| 64 | 144 | Blitting > Onto... > External > Add backdrop | `Add backdrop <p0>` |  | coller « Options » | — |  |
| 65 | 145 | Blitting > Onto... > External > Background | `Blit onto the background` |  |  | — |  |
| 66 | 146 | Blitting > Destination > Set dimensions | `Set blit destination dimensions to (<p0>,<p1>)` |  | expression numérique « Destination width » ; expression numérique « Destination height » | — |  |
| 67 | 147 | Blitting > From... > Alpha channel | `Blit image <p0>'s alpha channel` |  | expression numérique « Source » | — |  |
| 68 | 148 | Input / Output > Advanced > Export as Overlay | `Export image as Overlay` |  |  | — |  |
| 69 | 149 | With pattern > Draw line | `Draw line (<p0>,<p1>,<p2>,<p3>) with pattern <p4> and thickness <p5>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression chaîne « Pattern » ; expression numérique « Thickness » | — |  |
| 70 | 150 | Blitting > From... > External > Overlay | `Blit Overlay at <p0>` |  | expression numérique « Overlay address » | — |  |
| 71 | 151 | Blitting > Onto... > External > Overlay | `Blit onto Overlay at <p0>` |  | expression numérique « Overlay address » | — |  |
| 72 | 152 | Patterns > Color > Set color | `Set color of pattern <p0> to <p1>` |  | expression chaîne « Pattern name » ; couleur « Color » | — |  |
| 73 | 153 | Patterns > Linear gradient > Set colors | `Set colors of pattern <p0> to (<p1>,<p2>)` |  | expression chaîne « Pattern name » ; couleur « Color A » ; couleur « Color B » | — |  |
| 74 | 154 | Patterns > Linear gradient > Set vertical | `Set vertical flag of pattern <p0> to <p1>` |  | expression chaîne « Pattern name » ; expression numérique « Vertical? (0: No, 1: Yes) » | — |  |
| 75 | 155 | Patterns > Tiled image > Set origin | `Set origin of pattern <p0> to (<p1>,<p2>)` |  | expression chaîne « Pattern name » ; expression numérique « X Origin » ; expression numérique « Y Origin » | — |  |
| 76 | 156 | Patterns > Tiled image > Set tiled image | `Set image of pattern <p0> to <p1>` |  | expression chaîne « Pattern name » ; expression numérique « Image » | — |  |
| 77 | 157 | Patterns > Delete | `Delete pattern <p0>` |  | expression chaîne « Pattern name » | — |  |
| 78 | 158 | Transformations > Resize canvas | `Resize canvas to (<p0>,<p1>,<p2>,<p3>)` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 79 | 159 | With pattern > Clear | `Clear with pattern <p0>` |  | expression chaîne « Pattern » | — |  |
| 80 | 160 | Transformations > Rotate | `Rotate image by <p0> degrees` |  | expression numérique « Angle (Degrees) » | — |  |
| 81 | 161 | General settings > Set linear resampling | `Set linear resampling to <p0>` |  | expression numérique « Use linear resampling in actions if available? (0: No, 1: Yes) » | — |  |
| 82 | 162 | Blitting > From... > Advanced > Image reference | `Blit image referenced at <p0>` |  | expression numérique « Reference value » | — |  |
| 83 | 163 | Blitting > Onto... > Advanced > Image reference | `Blit onto image referenced at <p0>` |  | expression numérique « Reference value » | — |  |
| 84 | 164 | Text > Set clipping | `Set text clipping to <p0>` |  | expression numérique « Clipping (0: No, 1: Yes) » | — |  |
| 85 | 165 | Text > Set add ellipsis | `Set text add ellipsis to <p0>` |  | expression numérique « Add ellipsis (0: No, 1: Yes) » | — |  |
| 86 | 166 | Text > Set word break | `Set text word break to <p0>` |  | expression numérique « Word break (0: No, 1: Yes) » | — |  |
| 87 | 167 | Blitting > From... > Advanced > Window handle | `Blit window at <p0>` |  | expression numérique « Window handle (0: Whole desktop) » | — |  |
| 88 | 168 | Blitting > Onto... > Advanced > Window handle | `Blit onto window at <p0>` |  | expression numérique « Window handle (0: Whole desktop) » | — |  |
| 89 | 169 | Blitting > Onto... > External > Surface | `Blit onto image <p1> of Surface <p0>` |  | objet « Surface object » ; expression numérique « Image » | — |  |
| 90 | 170 | Blitting > From... > External > Surface | `Blit image <p1> of Surface <p0>` |  | objet « Surface object » ; expression numérique « Image » | — |  |
| 91 | 171 | Images > Swap two images | `Swap images <p0> and <p1>` |  | expression numérique « Image A » ; expression numérique « Image B » | — |  |
| 92 | 172 | Adjustments > Move color channels | `Move channels (r,g,b,a) to (<p0>,<p1>,<p2>,<p3>)` |  | expression chaîne « New channel for red (r, g, b, a) » ; expression chaîne « New channel for green (r, g, b, a) » ; expression chaîne « New channel for blue (r, g, b, a) » ; expression chaîne « New channel for alpha, if any (r, g, b, a) » | — |  |
| 93 | 173 | Transformations > Scroll | `Scroll (<p0>,<p1>), wrap = <p2>` |  | expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Wrap pixels? (0: No, 1: Yes) » | — |  |
| 94 | 174 | Callbacks > Return color | `Return <p0> to callback` |  | couleur « Color » | — |  |
| 95 | 175 | Callbacks > Loop through image | `Loop through image with callback <p1> and flags <p0>` |  | expression numérique « Flags, add together (1: Get color, 2: Set color, 4: Store position, 8: Get alpha, 16: Set alpha) » ; expression chaîne « Callback » | — |  |
| 96 | 176 | Settings > Set clipping rectangle | `Set clipping rectangle to (<p0>,<p1>,<p2>,<p3>)` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 97 | 177 | Settings > Clear clipping rectangle | `Clear clipping rectangle` |  |  | — |  |
| 98 | 178 | Adjustments > Invert colors | `Invert image` |  |  | — |  |
| 99 | 179 | Points > Create star | `Create star, inner radius = <p0>, outer radius = <p1>, spikes = <p2>` |  | expression numérique « Inner radius » ; expression numérique « Outer radius » ; expression numérique « Number of spikes » | — |  |
| 100 | 180 | Points > Scale points | `Scale all points by (<p2>,<p3>) from (<p0>,<p1>)` |  | expression numérique « Scale center X » ; expression numérique « Scale center Y » ; expression numérique « X scale factor (1.0: None) » ; expression numérique « Y scale factor (1.0: None) » | — |  |
| 101 | 181 | With color > Draw ellipse > Via center and size | `Draw ellipse at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>, outline thickness <p5>, outline pattern <p6>` |  | expression numérique « Center X » ; expression numérique « Center Y » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill color (-1: None) » ; expression numérique « Outline thickness » ; couleur « Outline color » | — |  |
| 102 | 182 | With pattern > Draw ellipse > Via center and size | `Draw ellipse at (<p0>,<p1>) with size (<p2>,<p3>) and pattern <p4>, outline thickness <p5>, outline pattern <p6>` |  | expression numérique « Center X » ; expression numérique « Center Y » ; expression numérique « Width » ; expression numérique « Height » ; expression chaîne « Pattern (Empty: None) » ; expression numérique « Outline thickness » ; expression chaîne « Outline pattern (Empty: None) » | — |  |
| 103 | 183 | Points > Create regular polygon | `Create regular polygon, radius = <p0>, edges = <p1>` |  | expression numérique « Radius » ; expression numérique « Number of edges » | — |  |
| 104 | 184 | Display settings > Skip redraw | `Skip redraw` |  |  | — |  |
| 105 | 185 | Blitting > Destination > Set all | `Set blit destination, position = (<p0>,<p1>), dimensions = (<p2>,<p3>), stretch mode = <p4>` |  | expression numérique « Destination X » ; expression numérique « Destination Y » ; expression numérique « Destination width » ; expression numérique « Destination height » ; expression numérique « Stretch mode (0: No stretching, 1: No resampling, 2: Resampling, 3: Opaque resampling) » | — |  |
| 106 | 186 | Adjustments > Convert to grayscale | `Convert to grayscale` |  |  | — |  |
| 107 | 187 | Patterns > Radial gradient > Create | `Create radial gradient pattern <p0> with colors (<p1>,<p2>)` |  | expression chaîne « Pattern name » ; couleur « Color A » ; couleur « Color B » | — |  |
| 109 | 189 | General settings > Set display selected image | `Set display selected image to <p0>` |  | expression numérique « Display selected image? (0: No, 1: Yes) » | — |  |
| 110 | 190 | General settings > Set select new images | `Set select new images to <p0>` |  | expression numérique « Display selected image? (0: No, 1: Yes) » | — |  |
| 111 | 191 | Display settings > Set transparent | `Set transparent to <p0>` |  | expression numérique « Display transparent? (0: No, 1: Yes) » | — |  |
| 112 | 192 | Input / Output > Advanced > Lock buffer | `Lock buffer` |  |  | — |  |
| 113 | 193 | Input / Output > Advanced > Unlock buffer | `Unlock buffer` |  |  | — |  |
| 114 | 194 | Blitting > Source > Set position | `Set blit source position to (<p0>,<p1>)` |  | expression numérique « Source X » ; expression numérique « Source Y » | — |  |
| 115 | 195 | Blitting > Source > Set dimensions | `Set blit source dimensions to (<p0>,<p1>)` |  | expression numérique « Source width » ; expression numérique « Source height » | — |  |
| 116 | 196 | Blitting > Destination > Set stretch mode | `Set blit stretch mode to <p0>` |  | expression numérique « Stretch mode (0: No stretching, 1: No resampling, 2: Resampling, 3: Opaque resampling) » | — |  |
| 117 | 197 | Blitting > Source > Set region flag | `Set blit region flag to <p0>` |  | expression numérique « Use specified source region? (0: No, 1: Yes) » | — |  |
| 118 | 198 | Text > Set angle | `Set text angle to <p0>` |  | expression numérique « Angle (Degrees) » | — |  |
| 119 | 199 | With color > Draw rectangle > Via position and size | `Draw rectangle at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>, outline thickness <p5>, outline color <p6>` |  | expression numérique « X » ; expression numérique « Y » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill color (-1: None) » ; expression numérique « Outline thickness » ; couleur « Outline color » | — |  |
| 120 | 200 | With pattern > Draw rectangle > Via position and size | `Draw rectangle at (<p0>,<p1>) with size (<p2>,<p3>) and pattern <p4>, outline thickness <p5>, outline color <p6>` |  | expression numérique « X » ; expression numérique « Y » ; expression numérique « Width » ; expression numérique « Height » ; expression chaîne « Pattern (Empty: None) » ; expression numérique « Outline thickness » ; expression chaîne « Outline pattern (Empty: None) » | — |  |
| 121 | 201 | Images > Copy image > From Surface object | `Copy image <p0> from image <p2> of Surface <p1>` |  | expression numérique « Destination image » ; objet « Surface object » ; expression numérique « Source image » | — |  |
| 122 | 202 | Blitting > From... > External > Active object > At its position | `Blit Active object <p0> at its position` |  | objet « Object » | — |  |
| 123 | 203 | Adjustments > Perform operation > With value for... | `Perform <p0> with <p1> for channels <p2>` |  | expression chaîne « Operator (+  -  *  /  **  %%  <  >  &  \|  ^  <<  >>  =) » ; expression numérique « Operand » ; expression chaîne « Channels, add together (r, g, b, a) » | — |  |
| 124 | 204 | Blitting > Onto... > Onto alpha channel > Alpha channel | `Blit alpha channel onto image <p0>'s alpha channel` |  | expression numérique « Target image » | — |  |
| 125 | 205 | Blitting > From... > From alpha channel > Alpha channel | `Blit image <p0>'s alpha channel onto the alpha channel` |  | expression numérique « Source image » | — |  |
| 126 | 206 | Blitting > Effect > Set by name | `Set blit effect to <p0>` |  | expression chaîne « Blit effect (Semi-transparency, Invert, XOR, AND, OR, Add, Mono, Sub, Tint) » | — |  |
| 127 | 207 | Alpha channel > Remove | `Remove alpha channel` |  |  | — |  |
| 128 | 208 | Input / Output > Advanced > Write bytes | `Write bytes at <p0> with size <p2> into the buffer at <p1>` |  | expression numérique « Source address » ; expression numérique « Buffer offset » ; expression numérique « Size in bytes » | — |  |
| 129 | 209 | Images > References > Add reference | `Add image reference for <p0>` |  | expression numérique « Reference value » | — |  |
| 130 | 210 | Images > References > Insert reference | `Insert image reference for <p1> at <p0>` |  | expression numérique « Image » ; expression numérique « Reference value » | — |  |
| 131 | 211 | Images > Copy image > From image reference | `Copy image <p0> from image referenced at <p1>` |  | expression numérique « Destination image » ; expression numérique « Reference value » | — |  |
| 132 | 212 | Images > References > Set reference value | `Set reference value of image <p0> to <p1>` |  | expression numérique « Image » ; expression numérique « Reference value » | — |  |
| 133 | 213 | Images > References > Set reference state | `Set reference state of image <p0> to <p1>` |  | expression numérique « Image » ; expression numérique « State (0: Local image, 1: Reference) » | — |  |
| 134 | 214 | General settings > Set keep points after drawing | `Set keep points after drawing to <p0>` |  | expression numérique « Keep points after drawing? (0: No, 1: Yes) » | — |  |
| 135 | 215 | General settings > Set background file input/output | `Set background file input/output to <p0>` |  | expression numérique « Background file input/output? (0: No, 1: Yes) » | — |  |
| 136 | 216 | Blitting > Effect > Set callback (overrides effect) | `Set blit callback to <p0>` |  | expression chaîne « Blit callback (Overrides ink effect, empty: None) » | — |  |
| 137 | 217 | Callbacks > Loop through area | `Loop through (<p0>,<p1>,<p2>,<p3>) with callback <p5> and flags <p4>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Flags, add together (1: Get color, 2: Set color, 4: Store position, 8: Get alpha, 16: Set alpha) » ; expression chaîne « Callback » | — |  |
| 138 | 218 | Callbacks > Return alpha | `Return alpha <p0> to callback` |  | expression numérique « Alpha (0-255) » | — |  |
| 139 | 219 | Display settings > Set scale | `Set scale to <p0>, quality = <p1>` |  | expression numérique « Scale value (1.0: Normal dimension) » ; expression numérique « Quality (0: Speed, 1: Quality) » | — |  |
| 140 | 220 | Display settings > Set X scale | `Set X scale to <p0>, quality = <p1>` |  | expression numérique « Scale value (1.0: Normal dimension) » ; expression numérique « Quality (0: Speed, 1: Quality) » | — |  |
| 141 | 221 | Display settings > Set Y scale | `Set Y scale to <p0>, quality = <p1>` |  | expression numérique « Scale value (1.0: Normal dimension) » ; expression numérique « Quality (0: Speed, 1: Quality) » | — |  |
| 142 | 222 | Points > Add point | `Add point (<p0>,<p1>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 143 | 223 | Settings > Set hot spot | `Set hot spot to (<p0>,<p1>) px` |  | expression numérique « Hot spot X » ; expression numérique « Hot spot Y » | — |  |
| 144 | 224 | Settings > Set hot spot (percent) | `Set hot spot to (<p0>,<p1>) percent` |  | expression numérique « Hot spot X (Percent) » ; expression numérique « Hot spot Y (Percent) » | — |  |
| 145 | 225 | Patterns > Callback > Create | `Create callback pattern <p0>` |  | expression chaîne « Pattern name » | — |  |
| 146 | 226 | Blitting > Source > Set all | `Set blit source, position = (<p0>,<p1>), dimensions = (<p2>,<p3>), region flag = <p4>` |  | expression numérique « Source X » ; expression numérique « Source Y » ; expression numérique « Source width » ; expression numérique « Source height » ; expression numérique « Use specified source region? (0: No, 1: Yes) » | — |  |
| 147 | 227 | Blitting > Destination > Set angle | `Set blit angle to <p0>` |  | expression numérique « Angle (Degrees) » | — |  |
| 148 | 228 | Blitting > Destination > Set pixels | `Set blit hot spot to (<p0>,<p1>) px` |  | expression numérique « Hot spot X » ; expression numérique « Hot spot Y » | — |  |
| 150 | 230 | Blitting > Destination > Set percent | `Set blit hot spot to (<p0>,<p1>) percent` |  | expression numérique « Hot spot X (Percent) » ; expression numérique « Hot spot Y (Percent) » | — |  |
| 151 | 231 | Blitting > Destination > Set quality | `Set blit rotation quality to <p0>` |  | expression numérique « Rotation quality (0: None, 1: Linear resampling) » | — |  |
| 152 | 232 | Display settings > Set angle | `Set angle to <p0>, quality = <p1>` |  | expression numérique « Angle (Degrees) » ; expression numérique « Quality (0: Speed, 1: Quality) » | — |  |
| 153 | 233 | Input / Output > Load from file | `Load image from file <p0>` |  | nom de fichier « File » | — |  |
| 154 | 234 | Settings > Convert to HWA texture | `Convert to HWA texture` |  |  | — |  |
| 155 | 235 | Settings > Convert to HWA target | `Convert to HWA target` |  |  | — |  |
| 156 | 236 | Settings > Convert to bitmap | `Convert to bitmap` |  |  | — |  |
| 157 | 237 | Blitting > Effect > Set tint | `Set blit tint to <p0>` |  | couleur « Color multiplier » | — |  |
| 158 | 238 | With color > Draw ellipse > Via bounding box | `Draw ellipse (<p0>,<p1>,<p2>,<p3>) with color <p4>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; couleur « Fill color » | — |  |
| 159 | 239 | With color > Draw rectangle > Via bounding box | `Draw rectangle (<p0>,<p1>,<p2>,<p3>) with color <p4>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; couleur « Fill color » | — |  |
| 160 | 240 | With color > Draw polygon > Simple | `Draw polygon at (<p0>,<p1>) with color <p2>` |  | expression numérique « X » ; expression numérique « Y » ; couleur « Fill color » | — |  |
| 161 | 241 | Adjustments > Apply color matrix | `Apply color matrix R (<p0>,<p1>,<p2>), G (<p3>,<p4>,<p5>), B (<p6>,<p7>,<p8>)` |  | expression numérique « Red coefficient for new red (Default: 1) » ; expression numérique « Green coefficient for new red (Default: 0) » ; expression numérique « Blue coefficient for new red (Default: 0) » ; expression numérique « Red coefficient for new green (Default: 0) » ; expression numérique « Green coefficient for new green  (Default: 1) » ; expression numérique « Blue coefficient for new green (Default: 0) » ; expression numérique « Red coefficient for new blue (Default: 0) » ; expression numérique « Green coefficient for new blue (Default: 0) » ; expression numérique « Blue coefficient for new blue  (Default: 1) » | — |  |
| 162 | 242 | Input / Output > Quick store | `Store image` |  |  | — |  |
| 163 | 243 | Input / Output > Quick restore | `Restore image` |  |  | — |  |
| 164 | 244 | Adjustments > Apply brightness | `Apply brightness <p0> to image` |  | expression numérique « Brightness (0.0: No change, 1.0: Entire image will be white) » | — |  |
| 165 | 245 | Adjustments > Apply contrast | `Apply contrast <p0> to image` |  | expression numérique « Contrast (1.0: No change) » | — |  |
| 166 | 246 | With color > Draw rectangle > Via position and size | `Draw rectangle at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>` |  | expression numérique « X » ; expression numérique « Y » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill color » | — |  |
| 167 | 247 | With color > Draw ellipse > Via center and size | `Draw ellipse at (<p0>,<p1>) with size (<p2>,<p3>) and color <p4>` |  | expression numérique « Center X » ; expression numérique « Center Y » ; expression numérique « Width » ; expression numérique « Height » ; couleur « Fill color » | — |  |
| 168 | 248 | Blitting > Effect > Set alpha | `Set blit alpha to <p0>` |  | expression numérique « Alpha value (0-255) » | — |  |
| 169 | 249 | Blitting > Push settings | `Push blit settings` |  |  | — |  |
| 170 | 250 | Blitting > Pop settings | `Pop blit settings` |  |  | — |  |
| 171 | 251 | Blitting > Alpha composition > Enable | `Enable blit alpha composition` |  |  | — |  |
| 172 | 252 | Blitting > Alpha composition > Disable | `Disable blit alpha composition` |  |  | — |  |
| 173 | 253 | Blitting > Transparency > Enable | `Enable blit transparency` |  |  | — |  |
| 174 | 254 | Blitting > Transparency > Disable | `Disable blit transparency` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Image count | `ImageCount(` |  |  | — |  |
| 1 | 81 | Selected image > Index | `SelImage(` |  |  | — |  |
| 2 | 82 | Displayed image > Index | `DisplayImage(` |  |  | — |  |
| 3 | 83 | Selected image > RGB at | `RGBAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 4 | 84 | Selected image > Width | `Width(` |  |  | — |  |
| 5 | 85 | Selected image > Height | `Height(` |  |  | — |  |
| 6 | 86 | Last added image | `LastImage(` |  |  | — |  |
| 7 | 87 | Input / Output > Overlay address | `ExportedOvlAddr(` |  |  | — |  |
| 8 | 88 | Displayed image > Width | `DisplayWidth(` |  |  | — |  |
| 9 | 89 | Displayed image > Height | `DisplayHeight(` |  |  | — |  |
| 10 | 90 | Selected image > Red at | `RedAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 11 | 91 | Selected image > Green at | `GreenAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 12 | 92 | Selected image > Blue at | `BlueAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 13 | 93 | Selected image > Alpha at | `AlphaAt(` |  | nombre « X » ; nombre « Y » | — |  |
| 14 | 94 | Any image > RGB at | `ImgRGBAt(` |  | nombre « Image » ; nombre « X » ; nombre « Y » | — |  |
| 15 | 95 | Any image > Width | `ImgWidth(` |  | nombre « Image » | — |  |
| 16 | 96 | Any image > Height | `ImgHeight(` |  | nombre « Image » | — |  |
| 17 | 97 | Callback > X position | `CallbackX(` |  |  | — |  |
| 18 | 98 | Callback > Y position | `CallbackY(` |  |  | — |  |
| 23 | 103 | Tools > Color from RGB | `RGB(` |  | nombre « R » ; nombre « G » ; nombre « B » | — |  |
| 24 | 104 | Tools > Blend two colors | `Blend(` |  | nombre « Color A » ; nombre « Color B » ; nombre « Blend (0-255) » | — |  |
| 25 | 105 | Tools > Invert color | `Invert(` |  | nombre « Color » | — |  |
| 26 | 106 | Tools > Multiply two colors | `Multiply(` |  | nombre « Color A » ; nombre « Color B » | — |  |
| 27 | 107 | Selected image > Transparent color | `TranspColor(` |  |  | — |  |
| 28 | 108 | Input / Output > Files > Filter count | `FilterCount(` |  |  | — |  |
| 29 | 109 | Input / Output > Files > Filter name | `Filter$(` |  | nombre « Index » → chaîne | — |  |
| 30 | 110 | Input / Output > Files > Filter extension name | `FilterExt$(` |  | nombre « Filter index » ; nombre « Extension index » → chaîne | — |  |
| 31 | 111 | Input / Output > Files > Filter extension count | `FilterExtCount(` |  | nombre « Index » | — |  |
| 32 | 112 | Input / Output > Files > Filter can save | `FilterCanSave(` |  | nombre « Index » | — |  |
| 33 | 113 | Input / Output > Buffer address | `BufferAddr(` |  |  | — |  |
| 34 | 114 | Input / Output > Buffer pitch | `BufferPitch(` |  |  | — |  |
| 35 | 115 | Input / Output > Files > Filter extension list | `FilterAllExts$(` |  | nombre « Filter index » → chaîne | — |  |
| 36 | 116 | Flood fill > Area X1 | `FloodX1(` |  |  | — |  |
| 37 | 117 | Flood fill > Area Y1 | `FloodY1(` |  |  | — |  |
| 38 | 118 | Flood fill > Area X2 | `FloodX2(` |  |  | — |  |
| 39 | 119 | Flood fill > Area Y2 | `FloodY2(` |  |  | — |  |
| 40 | 120 | Pattern > Pattern from index | `Pattern$(` |  | nombre « Index » → chaîne | — |  |
| 41 | 121 | Pattern > Pattern count | `PatternCount(` |  |  | — |  |
| 42 | 122 | Pattern > Color | `PatternColor(` |  | chaîne « Pattern » | — |  |
| 43 | 123 | Pattern > Linear gradient > Color A | `PatternColorA(` |  | chaîne « Pattern » | — |  |
| 44 | 124 | Pattern > Linear gradient > Color B | `PatternColorB(` |  | chaîne « Pattern » | — |  |
| 45 | 125 | Pattern > Tiled image | `PatternImage(` |  | chaîne « Pattern » | — |  |
| 46 | 126 | Any image > Red at | `ImgRedAt(` |  | nombre « Image » ; nombre « X » ; nombre « Y » | — |  |
| 47 | 127 | Any image > Green at | `ImgGreenAt(` |  | nombre « Image » ; nombre « X » ; nombre « Y » | — |  |
| 48 | 128 | Any image > Blue at | `ImgBlueAt(` |  | nombre « Image » ; nombre « X » ; nombre « Y » | — |  |
| 49 | 129 | Any image > Alpha at | `ImgAlphaAt(` |  | nombre « Image » ; nombre « X » ; nombre « Y » | — |  |
| 50 | 130 | Tools > Color from HEX | `HEX2RGB(` |  | chaîne « HEX string » | — |  |
| 51 | 131 | Tools > Random color | `RandomColor(` |  |  | — |  |
| 52 | 132 | Selected image > Reference value | `SelImgRef(` |  |  | — |  |
| 53 | 133 | Any image > Reference value | `ImgRef(` |  | nombre « Image » | — |  |
| 54 | 134 | Callback > Source color | `CallbackSrcCol(` |  |  | — |  |
| 55 | 135 | Callback > Destination color | `CallbackDestCol(` |  |  | — |  |
| 56 | 136 | Image references > Object | `ObjImgRef(` |  | nombre « Fixed value » ; nombre « Parameter » | — |  |
| 57 | 137 | Image references > Background | `BgImgRef(` |  |  | — |  |
| 58 | 138 | Callback > Source alpha | `CallbackSrcAlpha(` |  |  | — |  |
| 59 | 139 | Window handles > Frame window | `FrameWindowHandle(` |  |  | — |  |
| 60 | 140 | Any image > Hot spot X | `ImgHotX(` |  | nombre « Image » | — |  |
| 61 | 141 | Any image > Hot spot Y | `ImgHotY(` |  | nombre « Image » | — |  |
| 62 | 142 | Selected image > Hot spot X | `HotX(` |  |  | — |  |
| 63 | 143 | Selected image > Hot spot Y | `HotY(` |  |  | — |  |
| 64 | 144 | Any image > Transparent color | `TranspColor(` |  |  | — |  |
| 65 | 145 | Callback > Destination alpha | `CallbackDestAlpha(` |  |  | — |  |
| 66 | 146 | Tools > Add two colors | `Add(` |  | nombre « Color A » ; nombre « Color B » | — |  |
| 67 | 147 | Tools > Subtract two colors | `Subtract(` |  | nombre « Color A » ; nombre « Color B » | — |  |
| 68 | 148 | Image references > Transformed Surface | `TransformedSurfaceAddr(` |  |  | — |  |
| 69 | 149 | Scale / Angle > X scale | `XScale(` |  |  | — |  |
| 70 | 150 | Scale / Angle > Y scale | `YScale(` |  |  | — |  |
| 71 | 151 | Scale / Angle > Angle | `Angle(` |  |  | — |  |
| 75 | 155 | Tools > Compose two colors > Composed color | `ComposedColor(` |  | nombre « Color A » ; nombre « Alpha A (0-255) » ; nombre « Color B » ; nombre « Alpha B (0-255) » | — |  |
| 76 | 156 | Tools > Compose two colors > Composed alpha | `ComposedAlpha(` |  | nombre « Alpha A (0-255) » ; nombre « Alpha B (0-255) » | — |  |
