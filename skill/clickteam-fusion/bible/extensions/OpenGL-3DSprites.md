# Extension OpenGL-3DSprites

- File: `OpenGL-3DSprites.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Objects > On object loop | `<object>: On object loop` |  |  | — |  |
| 1 | -82 | Objects > On animation finished | `<object>: On animation finished` |  |  | — |  |
| 2 | -83 | Sprites > On texture handle request | `<object>: On texture handle request` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sprites > New sprite... | `New sprite <p0> ( directions = <p1>, frames = <p2> )` |  | string expression “Sprite name...”; numeric expression “Number of directions...”; numeric expression “Number of frames per direction...”; numeric expression “Width...”; numeric expression “Height...”; numeric expression “Hotspot X...”; numeric expression “Hotspot Y...” | — |  |
| 1 | 81 | Sprites > Select sprite... | `Select sprite <p0>` |  | string expression “Sprite name...” | — |  |
| 2 | 82 | Sprites > Set texture handle... | `Set texture handle of direction <p0>, frame <p1> to <p2>` |  | numeric expression “Direction...”; numeric expression “Frame...”; numeric expression “Texture handle...” | — |  |
| 3 | 83 | Sprites > Set angle offset... | `Set angle offset to <p0>` |  | numeric expression “Angle...” | — |  |
| 4 | 84 | Sprites > Delete sprite | `Delete selected sprite` |  |  | — |  |
| 5 | 85 | Sprites > Delete all sprites | `Delete all sprites` |  |  | — |  |
| 6 | 86 | Objects > Add object... | `Add object with sprite <p0>` |  | string expression “Sprite name...” | — |  |
| 7 | 87 | Objects > Remove object | `Remove object` |  |  | — |  |
| 8 | 88 | Objects > Remove all objects | `Remove all objects` |  |  | — |  |
| 9 | 89 | Objects > Object selection > Select object... | `Select object with ID <p0>` |  | numeric expression “Object ID...” | — |  |
| 10 | 90 | Objects > Object selection > Loop through objects | `Loop through objects` |  |  | — |  |
| 11 | 91 | Objects > Visibility > Show | `Show object` |  |  | — |  |
| 12 | 92 | Objects > Visibility > Hide | `Hide object` |  |  | — |  |
| 13 | 93 | Objects > Visibility > Blend mode > Alpha | `Set object blend mode to Alpha` |  |  | — |  |
| 14 | 94 | Objects > Visibility > Blend mode > Addative | `Set object blend mode to Addative` |  |  | — |  |
| 15 | 95 | Objects > Visibility > Transparency... | `Set object transparency to <p0>` |  | numeric expression “Transparency...” | — |  |
| 16 | 96 | Objects > Position > Set X coordinate... | `Set object X position to <p0>` |  | numeric expression “X coordinate...” | — |  |
| 17 | 97 | Objects > Position > Set Y coordinate... | `Set object Y position to <p0>` |  | numeric expression “Y coordinate...” | — |  |
| 18 | 98 | Objects > Position > Set Z coordinate... | `Set object Z position to <p0>` |  | numeric expression “Z coordinate...” | — |  |
| 19 | 99 | Objects > Set angle... | `Set object angle to <p0>` |  | numeric expression “Angle...” | — |  |
| 20 | 100 | Objects > Scale > Set X scale... | `Set object X scale to <p0>` |  | numeric expression “X scale...” | — |  |
| 21 | 101 | Objects > Scale > Set Y scale... | `Set object Y scale to <p0>` |  | numeric expression “Y scale...” | — |  |
| 22 | 102 | Objects > Scale > Uniform scale... | `Set object uniform scale to <p0>` |  | numeric expression “Uniform scale...” | — |  |
| 23 | 103 | Objects > Animation > Start... | `Start object animation from <p0> to <p1>, loop <p3> times` |  | numeric expression “Animation start ( -1 = current frame )...”; numeric expression “Animation end ( -1 = last frame )...”; numeric expression “Animation speed...”; numeric expression “Animation loopcount ( -1 = infinit )...” | — |  |
| 24 | 104 | Objects > Animation > Stop | `Stop object animation` |  |  | — |  |
| 25 | 105 | Objects > Animation > Set frame... | `Set object animation frame to <p0>` |  | numeric expression “Frame...” | — |  |
| 26 | 106 | Objects > Render objects | `Render objects` |  |  | — |  |
| 27 | 107 | Properties > Depth sorting > Enable | `Enable depth sorting` |  |  | — |  |
| 28 | 108 | Properties > Depth sorting > Disable | `Disable depth sorting` |  |  | — |  |
| 29 | 109 | Sprites > Texture handle request > Pass texture handle... | `Pass requested texture handle: <p0>` |  | numeric expression “Texture handle...” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sprites > Number of sprites | `NumSprites(` |  |  | — |  |
| 1 | 81 | Sprites > Sprite name | `SpriteName$(` |  | → string | — |  |
| 2 | 82 | Sprites > Number of directions | `NumDirs(` |  |  | — |  |
| 3 | 83 | Sprites > Number of frames | `NumFrames(` |  |  | — |  |
| 4 | 84 | Sprites > Angle offset | `AngleOffset(` |  |  | — |  |
| 5 | 85 | Objects > Number of objects | `NumObjects(` |  |  | — |  |
| 6 | 86 | Objects > Object ID | `ObjectID(` |  |  | — |  |
| 7 | 87 | Objects > Visibility > Get transparency | `Transparency(` |  |  | — |  |
| 8 | 88 | Objects > Position > Get X position | `⡘` |  |  | — |  |
| 9 | 89 | Objects > Position > Get Y position | `⡙` |  |  | — |  |
| 10 | 90 | Objects > Position > Get Z position | `⡚` |  |  | — |  |
| 11 | 91 | Objects > Get angle | `Angle(` |  |  | — |  |
| 12 | 92 | Objects > Scale > Get X scale | `XScale(` |  |  | — |  |
| 13 | 93 | Objects > Scale > Get Y scale | `YScale(` |  |  | — |  |
| 14 | 94 | Objects > Animation > Current frame | `AnimFrame(` |  |  | — |  |
| 15 | 95 | Objects > Binding > Get ID | `BindID(` |  |  | — |  |
| 16 | 96 | Sprites > Texture handle request > Texture index | `RequestedTexture(` |  |  | — |  |
