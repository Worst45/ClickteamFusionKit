# Extension OpenGL-TextureBank

- File: `OpenGL-TextureBank.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | A texture is loaded? ( Index ) | `<object>: Texture <p0> is loaded` |  | numeric expression “Texture index” | — |  |
| 1 | -82 | A texture is loaded? ( Name ) | `<object>: Texture <p0> is loaded` |  | string expression “Texture name” | — |  |
| 2 | -83 | On texture loaded | `<object>: On texture loaded` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | By index > Minifying filter... | `Texture <p0> minifying filter: <p1>` |  | numeric expression “Texture index”; numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 1 | 81 | By index > Magnification filter... | `Texture <p0> magnification filter: <p1>` |  | numeric expression “Texture index”; numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 2 | 82 | By index > Horizontal repeat... | `Texture <p0> horizontal repeat: <p1>` |  | numeric expression “Texture index”; numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 3 | 83 | By index > Vertical repeat... | `Texture <p0> vertical repeat: <p1>` |  | numeric expression “Texture index”; numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 4 | 84 | By index > Load texture... | `Load texture <p0>` |  | numeric expression “Texture index” | — |  |
| 5 | 85 | By index > Unload texture... | `Unload texture <p0>` |  | numeric expression “Texture index” | — |  |
| 6 | 86 | By name > Minifying filter... | `Texture <p0> minifying filter: <p1>` |  | string expression “Texture name”; numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 7 | 87 | By name > Magnification filter... | `Texture <p0> magnification filter: <p1>` |  | string expression “Texture name”; numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 8 | 88 | By name > Horizontal repeat... | `Texture <p0> horizontal repeat: <p1>` |  | string expression “Texture name”; numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 9 | 89 | By name > Vertical repeat... | `Texture <p0> vertical repeat: <p1>` |  | string expression “Texture name”; numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 10 | 90 | By name > Load texture... | `Load texture <p0>` |  | string expression “Texture name” | — |  |
| 11 | 91 | By name > Unload texture... | `Unload texture <p0>` |  | string expression “Texture name” | — |  |
| 12 | 92 | All > Minifying filter... | `All textures minifying filter: <p0>` |  | numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 13 | 93 | All > Magnification filter... | `All textures magnification filter: <p0>` |  | numeric expression “0 = Nearest, 1 = Linear filter” | — |  |
| 14 | 94 | All > Horizontal repeat... | `All textures horizontal repeat: <p0>` |  | numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 15 | 95 | All > Vertical repeat... | `All textures vertical repeat: <p0>` |  | numeric expression “0 = Clamp, 1 = Repeat” | — |  |
| 16 | 96 | All > Load textures | `Load all textures` |  |  | — |  |
| 17 | 97 | All > Unload textures | `Unload all textures` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get handle > From index | `HandleFromIndex(` |  | number “Texture index” | — |  |
| 1 | 81 | Get handle > From name | `HandleFromName(` |  | string “Texture name” | — |  |
| 2 | 82 | Get handle > Last loaded | `LoadedHandle(` |  |  | — |  |
| 3 | 83 | Get name > From index | `NameFromIndex$(` |  | number “Texture index” → string | — |  |
| 4 | 84 | Get name > From handle | `NameFromHandle$(` |  | number “Texture handle” → string | — |  |
| 5 | 85 | Get name > Last loaded | `LoadedName$(` |  | → string | — |  |
| 6 | 86 | Get index > From name | `IndexFromName(` |  | string “Texture name” | — |  |
| 7 | 87 | Get index > From handle | `IndexFromHandle(` |  | number “Texture handle” | — |  |
| 8 | 88 | Get index > Last loaded | `LoadedIndex(` |  |  | — |  |
| 9 | 89 | Number of textures | `Textures(` |  |  | — |  |
| 10 | 90 | Number of loaded textures | `LoadedTextures(` |  |  | — |  |
| 11 | 91 | Get width > From index | `WidthFromIndex(` |  | number “Texture index” | — |  |
| 12 | 92 | Get width > From name | `WidthFromName(` |  | string “Texture name” | — |  |
| 13 | 93 | Get height > From index | `HeightFromIndex(` |  | number “Texture index” | — |  |
| 14 | 94 | Get height > From name | `HeightFromName(` |  | string “Texture name” | — |  |
