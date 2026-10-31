# Extension OpenGL-MS3D

- Fichier : `OpenGL-MS3D.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Models > On model loaded | `<objet>: On model loaded` |  |  | — |  |
| 1 | -82 | Models > On loading failed | `<objet>: On model loading failed` |  |  | — |  |
| 2 | -83 | Models > On texture handle request | `<objet>: On texture handle request` |  |  | — |  |
| 3 | -84 | Objects > On object loop | `<objet>: On object loop` |  |  | — |  |
| 4 | -85 | Objects > On animation finished | `<objet>: On animation finished` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
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
| 9 | 89 | Models > Load model from file... | `Load model from file <p0>` |  | nom de fichier « Filename... » | — |  |
| 10 | 90 | Models > Load internal model... | `Load internal model <p0>` |  | expression chaîne « Model name... » | — |  |
| 11 | 91 | Models > Load all internal models | `Load all internal models` |  |  | — |  |
| 12 | 92 | Models > Texture handle request > Pass texture handle... | `Pass requested texture handle: <p0>` |  | expression numérique « Texture handle... » | — |  |
| 13 | 93 | Models > Select model... | `Select model <p0>` |  | expression chaîne « Model name... » | — |  |
| 14 | 94 | Models > Delete model | `Delete selected model` |  |  | — |  |
| 15 | 95 | Models > Delete all models | `Delete all models` |  |  | — |  |
| 16 | 96 | Models > Group > Material... | `Set group <p0> material to <p1>` |  | expression chaîne « Group name... » ; expression chaîne « Material name... » | — |  |
| 17 | 97 | Models > Material > Ambient color... | `Set material <p0> ambient color to <p1>` |  | expression chaîne « Material name... » ; couleur « Ambient color... » | — |  |
| 18 | 98 | Models > Material > Diffuse color... | `Set material <p0> diffuse color to <p1>` |  | expression chaîne « Material name... » ; couleur « Diffuse color... » | — |  |
| 19 | 99 | Models > Material > Specular color... | `Set material <p0> specular color to <p1>` |  | expression chaîne « Material name... » ; couleur « Specular color... » | — |  |
| 20 | 100 | Models > Material > Emissive color... | `Set material <p0> emissive color to <p1>` |  | expression chaîne « Material name... » ; couleur « Emissive color... » | — |  |
| 21 | 101 | Models > Material > Shininess... | `Set material <p0> shininess to <p1>` |  | expression chaîne « Material name... » ; expression numérique « Shininess... » | — |  |
| 22 | 102 | Models > Material > Transparency... | `Set material <p0> transparence to <p1>` |  | expression chaîne « Material name... » ; expression numérique « Transparency... » | — |  |
| 23 | 103 | Models > Material > Sphere map > Enable... | `Set material <p0> sphere map: Enabled` |  | expression chaîne « Material name... » | — |  |
| 24 | 104 | Models > Material > Sphere map > Disable... | `Set material <p0> sphere map: Disabled` |  | expression chaîne « Material name... » | — |  |
| 25 | 105 | Models > Material > Texture handle... | `Set material <p0> texture handle to <p1>` |  | expression chaîne « Material name... » ; expression numérique « Texture handle... » | — |  |
| 26 | 106 | Objects > Add object... | `Add object with model <p0>` |  | expression chaîne « Model name... » | — |  |
| 27 | 107 | Objects > Remove object | `Remove object` |  |  | — |  |
| 28 | 108 | Objects > Remove all objects | `Remove all objects` |  |  | — |  |
| 29 | 109 | Objects > Object selection > Select object... | `Select object with ID <p0>` |  | expression numérique « Object ID... » | — |  |
| 30 | 110 | Objects > Object selection > Loop through objects | `Loop through objects` |  |  | — |  |
| 31 | 111 | Objects > Visibility > Show | `Show object` |  |  | — |  |
| 32 | 112 | Objects > Visibility > Hide | `Hide object` |  |  | — |  |
| 33 | 113 | Objects > Position > Set X coordinate... | `Set object X position to <p0>` |  | expression numérique « X coordinate... » | — |  |
| 34 | 114 | Objects > Position > Set Y coordinate... | `Set object Y position to <p0>` |  | expression numérique « Y coordinate... » | — |  |
| 35 | 115 | Objects > Position > Set Z coordinate... | `Set object Z position to <p0>` |  | expression numérique « Z coordinate... » | — |  |
| 36 | 116 | Objects > Orientation > Set pitch... | `Set object pitch to <p0>` |  | expression numérique « Pitch... » | — |  |
| 37 | 117 | Objects > Orientation > Set yaw... | `Set object yaw to <p0>` |  | expression numérique « Yaw... » | — |  |
| 38 | 118 | Objects > Orientation > Set roll... | `Set object roll to <p0>` |  | expression numérique « Roll... » | — |  |
| 39 | 119 | Objects > Scale > Set X scale... | `Set object X scale to <p0>` |  | expression numérique « X scale... » | — |  |
| 40 | 120 | Objects > Scale > Set Y scale... | `Set object Y scale to <p0>` |  | expression numérique « Y scale... » | — |  |
| 41 | 121 | Objects > Scale > Set Z scale... | `Set object Z scale to <p0>` |  | expression numérique « Z scale... » | — |  |
| 42 | 122 | Objects > Scale > Uniform scale... | `Set object uniform scale to <p0>` |  | expression numérique « Uniform scale... » | — |  |
| 43 | 123 | Objects > Animation > Start... | `Start object animation from <p0> to <p1>, loop <p3> times` |  | expression numérique « Animation start ( -1 = current frame )... » ; expression numérique « Animation end ( -1 = last frame )... » ; expression numérique « Animation speed... » ; expression numérique « Animation loopcount ( -1 = infinit )... » | — |  |
| 44 | 124 | Objects > Animation > Stop | `Stop object animation` |  |  | — |  |
| 45 | 125 | Objects > Animation > Set frame... | `Set object animation frame to <p0>` |  | expression numérique « Animation frame... » | — |  |
| 46 | 126 | Objects > Joint > Attach object... | `Attach object with ID <p0> to joint <p1>` |  | expression numérique « Object ID... » ; expression chaîne « Joint name... » | — |  |
| 47 | 127 | Objects > Joint > Detach object... | `Detach object from joint <p0>` |  | expression chaîne « Joint name... » | — |  |
| 48 | 128 | Objects > Render objects | `Render objects` |  |  | — |  |
| 49 | 129 | Models > Group > Show... | `Show group <p0>` |  | expression chaîne « Group name... » | — |  |
| 50 | 130 | Models > Group > Hide... | `Hide group <p0>` |  | expression chaîne « Group name... » | — |  |
| 51 | 131 | Models > Material > Texture coord offset > S coordinate... | `Set material <p0> texture S coordinate offset to <p1>` |  | expression chaîne « Material name... » ; expression numérique « Set texture S coordinate offset... » | — |  |
| 52 | 132 | Models > Material > Texture coord offset > T coordinate... | `Set material <p0> texture T coordinate offset to <p1>` |  | expression chaîne « Material name... » ; expression numérique « Set texture T coordinate offset... » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Models > Texture handle request > Texture name | `RequestedTexture$(` |  | → chaîne | — |  |
| 1 | 81 | Models > Number of models | `NumModels(` |  |  | — |  |
| 2 | 82 | Models > Model name | `ModelName$(` |  | → chaîne | — |  |
| 3 | 83 | Models > Group > Material | `Material$(` |  | chaîne « Group name » → chaîne | — |  |
| 4 | 84 | Models > Material > Ambient color | `Ambient(` |  | chaîne « Material name » | — |  |
| 5 | 85 | Models > Material > Diffuse color | `Diffuse(` |  | chaîne « Material name » | — |  |
| 6 | 86 | Models > Material > Specular color | `Specular(` |  | chaîne « Material name » | — |  |
| 7 | 87 | Models > Material > Emissive color | `Emissive(` |  | chaîne « Material name » | — |  |
| 8 | 88 | Models > Material > Shininess | `Shininess(` |  | chaîne « Material name » | — |  |
| 9 | 89 | Models > Material > Transparency | `Transparency(` |  | chaîne « Material name » | — |  |
| 10 | 90 | Models > Material > Texture name | `Texture$(` |  | chaîne « Material name » → chaîne | — |  |
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
| 25 | 105 | Models > Material > Texture coord offset > S coordinate | `TexCoordOffsetS(` |  | chaîne « Material name » | — |  |
| 26 | 106 | Models > Material > Texture coord offset > T coordinate | `TexCoordOffsetT(` |  | chaîne « Material name » | — |  |
| 27 | 107 | Models > Texture handle request > Loading model name | `LoadingModel$(` |  | → chaîne | — |  |
