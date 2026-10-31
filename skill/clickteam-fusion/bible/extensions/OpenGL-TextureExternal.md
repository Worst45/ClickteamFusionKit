# Extension OpenGL-TextureExternal

- File: `OpenGL-TextureExternal.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On texture loaded | `<object>: On texture loaded` |  |  | — |  |
| 1 | -82 | On loading failed | `<object>: On loading failed` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load texture from file... | `Load texture from file <p0> with name <p1>` |  | file name “File to load...”; string expression “Texture name...”; numeric expression “Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )...”; numeric expression “Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )...”; numeric expression “Texture mipmap ( 0 = no, 1 = yes )...” | — |  |
| 1 | 81 | Unload texture... | `Unload texture <p0>` |  | string expression “Texture name...” | — |  |
| 2 | 82 | Unload all textures | `Unload all loaded textures` |  |  | — |  |
| 3 | 83 | Load texture from object... | `Load texture from object <p0> with name <p1>` |  | object “Object...”; string expression “Texture name...”; numeric expression “Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )...”; numeric expression “Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )...”; numeric expression “Texture mipmap ( 0 = no, 1 = yes )...” | — |  |
| 4 | 84 | Load texture from object ( fixed value )... | `Load texture from object <p0> with name <p1>` |  | numeric expression “Fixed value of object...”; string expression “Texture name...”; numeric expression “Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )...”; numeric expression “Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )...”; numeric expression “Texture mipmap ( 0 = no, 1 = yes )...” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get handle | `Handle(` |  | string “Texture name” | — |  |
| 1 | 81 | Get name | `Name$(` |  | number “Texture handle” → string | — |  |
| 2 | 82 | Get handle from last loaded | `LoadedHandle(` |  |  | — |  |
| 3 | 83 | Get name from last loaded | `LoadedName$(` |  | → string | — |  |
| 4 | 84 | Number of textures | `Textures(` |  |  | — |  |
| 5 | 85 | Get texture width | `Width$(` |  | string “Texture name” | — |  |
| 6 | 86 | Get texture height | `Height$(` |  | string “Texture name” | — |  |
