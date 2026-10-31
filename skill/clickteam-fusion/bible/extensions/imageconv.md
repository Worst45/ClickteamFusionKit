# Extension imageconv

- File: `imageconv.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | File saved | `<object> Image saved successfully` |  |  | — |  |
| 2 | -83 | File loaded | `<object> Image loaded successfully` |  |  | — |  |
| 3 | -84 | Image > Is transparent | `<object> Image is transparent` |  |  | — |  |
| 4 | -85 | Image type > Is BMP | `<object> Image is a BMP` |  |  | — |  |
| 5 | -86 | Image type > Is GIF | `<object> Image is a GIF` |  |  | — |  |
| 6 | -87 | Image type > Is ICO | `<object> Image is a ICO` |  |  | — |  |
| 7 | -88 | Image type > Is JPEG | `<object> Image is a JPEG` |  |  | — |  |
| 8 | -89 | Image type > Is PNG | `<object> Image is a PNG` |  |  | — |  |
| 9 | -90 | Image type > Is TGA | `<object> Image is a TGA` |  |  | — |  |
| 11 | -92 | Resources > Icons > Icon loaded | `<object> Icon loaded successfully` |  |  | — |  |
| 12 | -93 | Image > Has alpha channel | `<object> The image has an alpha channel` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 1 | 81 | Save > ICO | `Convert to ICO: <p0>` |  | file name “Output file” | — |  |
| 2 | 82 | Save > TGA | `Convert to TGA: <p0>` |  | file name “Output file” | — |  |
| 4 | 84 | Save > JPEG | `Convert to JPG: <p0>` |  | file name “Output file” | — |  |
| 5 | 85 | Save > PNG | `Convert to PNG: <p0>` |  | file name “Output file” | — |  |
| 6 | 86 | Save > BMP | `Convert to BMP: <p0>` |  | file name “Output file” | — |  |
| 7 | 87 | Load file | `Load image: <p0>` |  | file name “File to load” | — |  |
| 8 | 88 | Transformations > JPEG > Set JPG quality | `Set JPG quality to: <p0>` |  | numeric expression “Quality (1-99)” | — |  |
| 9 | 89 | Transformations > Colours > Grayscale | `Transformation: Grayscale` |  |  | — |  |
| 10 | 90 | Transformations > Rotate > Flip image | `Transformation: Flip image` |  |  | — |  |
| 11 | 91 | Transformations > Rotate > Mirror image | `Transformation: Mirror image` |  |  | — |  |
| 12 | 92 | Transformations > Colours > Negative | `Transformation: Negative` |  |  | — |  |
| 14 | 94 | Transformations > Resize | `Resize image to: <p0>, <p1>` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 15 | 95 | Transformations > Rotate > Anti-clockwise 90° | `Rotate image 90° anti-clockwise` |  |  | — |  |
| 16 | 96 | Clipboard > Set clipboard text | `Set clipboard text: <p0>` |  | string expression “Clipboard text” | — |  |
| 18 | 98 | Clipboard > Load from clipboard | `Get image from clipboard` |  |  | — |  |
| 19 | 99 | Transformations > Rotate > Clockwise 90° | `Rotate image 90° clockwise` |  |  | — |  |
| 20 | 100 | Transformations > JPEG > Set JPG scaling | `Set JPG scaling quality to: <p0>` |  | numeric expression “2, 4, 6, 8” | — |  |
| 21 | 101 | Transformations > Rotate > Rotate by angle | `Rotate image by angle: <p0>` |  | numeric expression “Rotation angle” | — |  |
| 22 | 102 | Resources > Icons > Get icon from file | `Extract icon number: <p1> from file <p0>` |  | string expression “File to extract from”; numeric expression “Icon number” | — |  |
| 23 | 103 | Effects > Blurs > Guassian > Guassian blur 3x3 | `Apply Guassian Blur 3x3` |  |  | — |  |
| 26 | 106 | Effects > Filters > Soften | `Effect: Soften image` |  |  | — |  |
| 27 | 107 | Effects > Filters > Sharpen | `Effect: Sharpen image` |  |  | — |  |
| 28 | 108 | Effects > Blurs > Guassian > Guassian blur 5x5 | `Apply Guassian Blur 5x5` |  |  | — |  |
| 29 | 109 | Effects > Filters > Add noise | `Effect: Add noise` |  |  | — |  |
| 30 | 110 | Effects > Filters > Erode | `Effect: Erode image` |  |  | — |  |
| 31 | 111 | Effects > Filters > Dilate | `Effect: Dilate image` |  |  | — |  |
| 32 | 112 | Effects > Colour > Set gamma | `Set gamma level to: <p0>` |  | numeric expression “Gamma level: 0.5-5” | — |  |
| 33 | 113 | Effects > Colour > Set lighting | `Set contrast to: <p0> and brightness to: <p1>` |  | numeric expression “Contrast level: -100 - 100”; numeric expression “Brightness level: -255 - 255” | — |  |
| 34 | 114 | Effects > Filters > Edge | `Effect: Edge image` |  |  | — |  |
| 35 | 115 | Effects > Blurs > Blur | `Blur: Blur image` |  |  | — |  |
| 36 | 116 | Effects > Circle effects > Swirl | `Circle Transformation: Swirl` |  |  | — |  |
| 37 | 117 | Effects > Circle effects > Punch | `Circle Transformation: Punch` |  |  | — |  |
| 38 | 118 | Effects > Circle effects > Pinch | `Circle Transformation: Punch` |  |  | — |  |
| 39 | 119 | Effects > Circle effects > Cylinder | `Circle Transformation: Cylinder` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Clipboard > Get text | `get Clipboard Text$(` |  | → string | — |  |
| 1 | 81 | Image > Get height | `get Height(` |  |  | — |  |
| 2 | 82 | Image > Get width | `get Width(` |  |  | — |  |
| 3 | 83 | Image > JPEG > Get quality | `get JPEG Quality(` |  |  | — |  |
| 4 | 84 | Image > JPEG > Get scale | `get JPEG Scale(` |  |  | — |  |
| 5 | 85 | Image > Get BPP | `get BPP(` |  |  | — |  |
