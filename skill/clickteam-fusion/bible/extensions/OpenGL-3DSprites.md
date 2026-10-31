# Extension OpenGL-3DSprites

- Fichier : `OpenGL-3DSprites.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Objects > On object loop | `<objet>: On object loop` |  |  | — |  |
| 1 | -82 | Objects > On animation finished | `<objet>: On animation finished` |  |  | — |  |
| 2 | -83 | Sprites > On texture handle request | `<objet>: On texture handle request` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sprites > New sprite... | `New sprite <p0> ( directions = <p1>, frames = <p2> )` |  | expression chaîne « Sprite name... » ; expression numérique « Number of directions... » ; expression numérique « Number of frames per direction... » ; expression numérique « Width... » ; expression numérique « Height... » ; expression numérique « Hotspot X... » ; expression numérique « Hotspot Y... » | — |  |
| 1 | 81 | Sprites > Select sprite... | `Select sprite <p0>` |  | expression chaîne « Sprite name... » | — |  |
| 2 | 82 | Sprites > Set texture handle... | `Set texture handle of direction <p0>, frame <p1> to <p2>` |  | expression numérique « Direction... » ; expression numérique « Frame... » ; expression numérique « Texture handle... » | — |  |
| 3 | 83 | Sprites > Set angle offset... | `Set angle offset to <p0>` |  | expression numérique « Angle... » | — |  |
| 4 | 84 | Sprites > Delete sprite | `Delete selected sprite` |  |  | — |  |
| 5 | 85 | Sprites > Delete all sprites | `Delete all sprites` |  |  | — |  |
| 6 | 86 | Objects > Add object... | `Add object with sprite <p0>` |  | expression chaîne « Sprite name... » | — |  |
| 7 | 87 | Objects > Remove object | `Remove object` |  |  | — |  |
| 8 | 88 | Objects > Remove all objects | `Remove all objects` |  |  | — |  |
| 9 | 89 | Objects > Object selection > Select object... | `Select object with ID <p0>` |  | expression numérique « Object ID... » | — |  |
| 10 | 90 | Objects > Object selection > Loop through objects | `Loop through objects` |  |  | — |  |
| 11 | 91 | Objects > Visibility > Show | `Show object` |  |  | — |  |
| 12 | 92 | Objects > Visibility > Hide | `Hide object` |  |  | — |  |
| 13 | 93 | Objects > Visibility > Blend mode > Alpha | `Set object blend mode to Alpha` |  |  | — |  |
| 14 | 94 | Objects > Visibility > Blend mode > Addative | `Set object blend mode to Addative` |  |  | — |  |
| 15 | 95 | Objects > Visibility > Transparency... | `Set object transparency to <p0>` |  | expression numérique « Transparency... » | — |  |
| 16 | 96 | Objects > Position > Set X coordinate... | `Set object X position to <p0>` |  | expression numérique « X coordinate... » | — |  |
| 17 | 97 | Objects > Position > Set Y coordinate... | `Set object Y position to <p0>` |  | expression numérique « Y coordinate... » | — |  |
| 18 | 98 | Objects > Position > Set Z coordinate... | `Set object Z position to <p0>` |  | expression numérique « Z coordinate... » | — |  |
| 19 | 99 | Objects > Set angle... | `Set object angle to <p0>` |  | expression numérique « Angle... » | — |  |
| 20 | 100 | Objects > Scale > Set X scale... | `Set object X scale to <p0>` |  | expression numérique « X scale... » | — |  |
| 21 | 101 | Objects > Scale > Set Y scale... | `Set object Y scale to <p0>` |  | expression numérique « Y scale... » | — |  |
| 22 | 102 | Objects > Scale > Uniform scale... | `Set object uniform scale to <p0>` |  | expression numérique « Uniform scale... » | — |  |
| 23 | 103 | Objects > Animation > Start... | `Start object animation from <p0> to <p1>, loop <p3> times` |  | expression numérique « Animation start ( -1 = current frame )... » ; expression numérique « Animation end ( -1 = last frame )... » ; expression numérique « Animation speed... » ; expression numérique « Animation loopcount ( -1 = infinit )... » | — |  |
| 24 | 104 | Objects > Animation > Stop | `Stop object animation` |  |  | — |  |
| 25 | 105 | Objects > Animation > Set frame... | `Set object animation frame to <p0>` |  | expression numérique « Frame... » | — |  |
| 26 | 106 | Objects > Render objects | `Render objects` |  |  | — |  |
| 27 | 107 | Properties > Depth sorting > Enable | `Enable depth sorting` |  |  | — |  |
| 28 | 108 | Properties > Depth sorting > Disable | `Disable depth sorting` |  |  | — |  |
| 29 | 109 | Sprites > Texture handle request > Pass texture handle... | `Pass requested texture handle: <p0>` |  | expression numérique « Texture handle... » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Sprites > Number of sprites | `NumSprites(` |  |  | — |  |
| 1 | 81 | Sprites > Sprite name | `SpriteName$(` |  | → chaîne | — |  |
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
