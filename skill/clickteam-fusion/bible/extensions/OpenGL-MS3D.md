# Extension OpenGL-MS3D

- File: `OpenGL-MS3D.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Models > On model loaded | `<object>: On model loaded` |  |  | — |  |
| 1 | -82 | Models > On loading failed | `<object>: On model loading failed` |  |  | — |  |
| 2 | -83 | Models > On texture handle request | `<object>: On texture handle request` |  |  | — |  |
| 3 | -84 | Objects > On object loop | `<object>: On object loop` |  |  | — |  |
| 4 | -85 | Objects > On animation finished | `<object>: On animation finished` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Properties > Mode > Fill | `Mode: Fill` |  |  | — |  |
| 1 | 81 | Properties > Mode > Lines | `Mode: Lines` |  |  | — |  |
| 2 | 82 | Properties > Mode > Points | `Mode: Points` |  |  | — |  |
| 3 | 83 | Properties > Shading > None | `Shading: None` |  |  | — |  |
| 4 | 84 | Properties > Shading > Flat | `Shading: Flat` |  |  | — |  |
| 5 | 85 | Properties > Shading > Gouraud | `Shading: Gouraud` |  |  | — |  |
| 6 | 86 | Properties > Culling > None | `Culling: None` |  |  | — |  |
| 7 | 87 | Properties > Culling > Back faces | `Culling: Back faces` |  |  | — |  |
| 8 | 88 | Properties > Culling > Front faces | `Culling: Front faces` |  |  | — |  |
| 9 | 89 | Models > Load model from file... | `Load model from file <p0>` |  | file name “Filename...” | — |  |
| 10 | 90 | Models > Load internal model... | `Load internal model <p0>` |  | string expression “Model name...” | — |  |
| 11 | 91 | Models > Load all internal models | `Load all internal models` |  |  | — |  |
| 12 | 92 | Models > Texture handle request > Pass texture handle... | `Pass requested texture handle: <p0>` |  | numeric expression “Texture handle...” | — |  |
| 13 | 93 | Models > Select model... | `Select model <p0>` |  | string expression “Model name...” | — |  |
| 14 | 94 | Models > Delete model | `Delete selected model` |  |  | — |  |
| 15 | 95 | Models > Delete all models | `Delete all models` |  |  | — |  |
| 16 | 96 | Models > Group > Material... | `Set group <p0> material to <p1>` |  | string expression “Group name...”; string expression “Material name...” | — |  |
| 17 | 97 | Models > Material > Ambient color... | `Set material <p0> ambient color to <p1>` |  | string expression “Material name...”; color “Ambient color...” | — |  |
| 18 | 98 | Models > Material > Diffuse color... | `Set material <p0> diffuse color to <p1>` |  | string expression “Material name...”; color “Diffuse color...” | — |  |
| 19 | 99 | Models > Material > Specular color... | `Set material <p0> specular color to <p1>` |  | string expression “Material name...”; color “Specular color...” | — |  |
| 20 | 100 | Models > Material > Emissive color... | `Set material <p0> emissive color to <p1>` |  | string expression “Material name...”; color “Emissive color...” | — |  |
| 21 | 101 | Models > Material > Shininess... | `Set material <p0> shininess to <p1>` |  | string expression “Material name...”; numeric expression “Shininess...” | — |  |
| 22 | 102 | Models > Material > Transparency... | `Set material <p0> transparence to <p1>` |  | string expression “Material name...”; numeric expression “Transparency...” | — |  |
| 23 | 103 | Models > Material > Sphere map > Enable... | `Set material <p0> sphere map: Enabled` |  | string expression “Material name...” | — |  |
| 24 | 104 | Models > Material > Sphere map > Disable... | `Set material <p0> sphere map: Disabled` |  | string expression “Material name...” | — |  |
| 25 | 105 | Models > Material > Texture handle... | `Set material <p0> texture handle to <p1>` |  | string expression “Material name...”; numeric expression “Texture handle...” | — |  |
| 26 | 106 | Objects > Add object... | `Add object with model <p0>` |  | string expression “Model name...” | — |  |
| 27 | 107 | Objects > Remove object | `Remove object` |  |  | — |  |
| 28 | 108 | Objects > Remove all objects | `Remove all objects` |  |  | — |  |
| 29 | 109 | Objects > Object selection > Select object... | `Select object with ID <p0>` |  | numeric expression “Object ID...” | — |  |
| 30 | 110 | Objects > Object selection > Loop through objects | `Loop through objects` |  |  | — |  |
| 31 | 111 | Objects > Visibility > Show | `Show object` |  |  | — |  |
| 32 | 112 | Objects > Visibility > Hide | `Hide object` |  |  | — |  |
| 33 | 113 | Objects > Position > Set X coordinate... | `Set object X position to <p0>` |  | numeric expression “X coordinate...” | — |  |
| 34 | 114 | Objects > Position > Set Y coordinate... | `Set object Y position to <p0>` |  | numeric expression “Y coordinate...” | — |  |
| 35 | 115 | Objects > Position > Set Z coordinate... | `Set object Z position to <p0>` |  | numeric expression “Z coordinate...” | — |  |
| 36 | 116 | Objects > Orientation > Set pitch... | `Set object pitch to <p0>` |  | numeric expression “Pitch...” | — |  |
| 37 | 117 | Objects > Orientation > Set yaw... | `Set object yaw to <p0>` |  | numeric expression “Yaw...” | — |  |
| 38 | 118 | Objects > Orientation > Set roll... | `Set object roll to <p0>` |  | numeric expression “Roll...” | — |  |
| 39 | 119 | Objects > Scale > Set X scale... | `Set object X scale to <p0>` |  | numeric expression “X scale...” | — |  |
| 40 | 120 | Objects > Scale > Set Y scale... | `Set object Y scale to <p0>` |  | numeric expression “Y scale...” | — |  |
| 41 | 121 | Objects > Scale > Set Z scale... | `Set object Z scale to <p0>` |  | numeric expression “Z scale...” | — |  |
| 42 | 122 | Objects > Scale > Uniform scale... | `Set object uniform scale to <p0>` |  | numeric expression “Uniform scale...” | — |  |
| 43 | 123 | Objects > Animation > Start... | `Start object animation from <p0> to <p1>, loop <p3> times` |  | numeric expression “Animation start ( -1 = current frame )...”; numeric expression “Animation end ( -1 = last frame )...”; numeric expression “Animation speed...”; numeric expression “Animation loopcount ( -1 = infinit )...” | — |  |
| 44 | 124 | Objects > Animation > Stop | `Stop object animation` |  |  | — |  |
| 45 | 125 | Objects > Animation > Set frame... | `Set object animation frame to <p0>` |  | numeric expression “Animation frame...” | — |  |
| 46 | 126 | Objects > Joint > Attach object... | `Attach object with ID <p0> to joint <p1>` |  | numeric expression “Object ID...”; string expression “Joint name...” | — |  |
| 47 | 127 | Objects > Joint > Detach object... | `Detach object from joint <p0>` |  | string expression “Joint name...” | — |  |
| 48 | 128 | Objects > Render objects | `Render objects` |  |  | — |  |
| 49 | 129 | Models > Group > Show... | `Show group <p0>` |  | string expression “Group name...” | — |  |
| 50 | 130 | Models > Group > Hide... | `Hide group <p0>` |  | string expression “Group name...” | — |  |
| 51 | 131 | Models > Material > Texture coord offset > S coordinate... | `Set material <p0> texture S coordinate offset to <p1>` |  | string expression “Material name...”; numeric expression “Set texture S coordinate offset...” | — |  |
| 52 | 132 | Models > Material > Texture coord offset > T coordinate... | `Set material <p0> texture T coordinate offset to <p1>` |  | string expression “Material name...”; numeric expression “Set texture T coordinate offset...” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Models > Texture handle request > Texture name | `RequestedTexture$(` |  | → string | — |  |
| 1 | 81 | Models > Number of models | `NumModels(` |  |  | — |  |
| 2 | 82 | Models > Model name | `ModelName$(` |  | → string | — |  |
| 3 | 83 | Models > Group > Material | `Material$(` |  | string “Group name” → string | — |  |
| 4 | 84 | Models > Material > Ambient color | `Ambient(` |  | string “Material name” | — |  |
| 5 | 85 | Models > Material > Diffuse color | `Diffuse(` |  | string “Material name” | — |  |
| 6 | 86 | Models > Material > Specular color | `Specular(` |  | string “Material name” | — |  |
| 7 | 87 | Models > Material > Emissive color | `Emissive(` |  | string “Material name” | — |  |
| 8 | 88 | Models > Material > Shininess | `Shininess(` |  | string “Material name” | — |  |
| 9 | 89 | Models > Material > Transparency | `Transparency(` |  | string “Material name” | — |  |
| 10 | 90 | Models > Material > Texture name | `Texture$(` |  | string “Material name” → string | — |  |
| 11 | 91 | Models > Animation > Number of frames | `AnimNumFrames(` |  |  | — |  |
| 12 | 92 | Objects > Number of objects | `NumObjects(` |  |  | — |  |
| 13 | 93 | Objects > Object ID | `ObjectID(` |  |  | — |  |
| 14 | 94 | Objects > Position > Get X position | `⡘` |  |  | — |  |
| 15 | 95 | Objects > Position > Get Y position | `⡙` |  |  | — |  |
| 16 | 96 | Objects > Position > Get Z position | `⡚` |  |  | — |  |
| 17 | 97 | Objects > Orientation > Get pitch | `Pitch(` |  |  | — |  |
| 18 | 98 | Objects > Orientation > Get yaw | `Yaw(` |  |  | — |  |
| 19 | 99 | Objects > Orientation > Get roll | `Roll(` |  |  | — |  |
| 20 | 100 | Objects > Scale > Get X scale | `XScale(` |  |  | — |  |
| 21 | 101 | Objects > Scale > Get Y scale | `YScale(` |  |  | — |  |
| 22 | 102 | Objects > Scale > Get Z scale | `ZScale(` |  |  | — |  |
| 23 | 103 | Objects > Animation > Current frame | `AnimFrame(` |  |  | — |  |
| 24 | 104 | Objects > Binding > Get ID | `BindID(` |  |  | — |  |
| 25 | 105 | Models > Material > Texture coord offset > S coordinate | `TexCoordOffsetS(` |  | string “Material name” | — |  |
| 26 | 106 | Models > Material > Texture coord offset > T coordinate | `TexCoordOffsetT(` |  | string “Material name” | — |  |
| 27 | 107 | Models > Texture handle request > Loading model name | `LoadingModel$(` |  | → string | — |  |
