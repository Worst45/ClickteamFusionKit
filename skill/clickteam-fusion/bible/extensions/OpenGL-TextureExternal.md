# Extension OpenGL-TextureExternal

- Fichier : `OpenGL-TextureExternal.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On texture loaded | `<objet>: On texture loaded` |  |  | — |  |
| 1 | -82 | On loading failed | `<objet>: On loading failed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load texture from file... | `Load texture from file <p0> with name <p1>` |  | nom de fichier « File to load... » ; expression chaîne « Texture name... » ; expression numérique « Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )... » ; expression numérique « Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )... » ; expression numérique « Texture mipmap ( 0 = no, 1 = yes )... » | — |  |
| 1 | 81 | Unload texture... | `Unload texture <p0>` |  | expression chaîne « Texture name... » | — |  |
| 2 | 82 | Unload all textures | `Unload all loaded textures` |  |  | — |  |
| 3 | 83 | Load texture from object... | `Load texture from object <p0> with name <p1>` |  | objet « Object... » ; expression chaîne « Texture name... » ; expression numérique « Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )... » ; expression numérique « Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )... » ; expression numérique « Texture mipmap ( 0 = no, 1 = yes )... » | — |  |
| 4 | 84 | Load texture from object ( fixed value )... | `Load texture from object <p0> with name <p1>` |  | expression numérique « Fixed value of object... » ; expression chaîne « Texture name... » ; expression numérique « Texture filter ( 0 = none, 1 = minifying, 2 = magnification, 3 = both )... » ; expression numérique « Texture repeat ( 0 = none, 1 = horizontal, 2 = vertical, 3 = both )... » ; expression numérique « Texture mipmap ( 0 = no, 1 = yes )... » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get handle | `Handle(` |  | chaîne « Texture name » | — |  |
| 1 | 81 | Get name | `Name$(` |  | nombre « Texture handle » → chaîne | — |  |
| 2 | 82 | Get handle from last loaded | `LoadedHandle(` |  |  | — |  |
| 3 | 83 | Get name from last loaded | `LoadedName$(` |  | → chaîne | — |  |
| 4 | 84 | Number of textures | `Textures(` |  |  | — |  |
| 5 | 85 | Get texture width | `Width$(` |  | chaîne « Texture name » | — |  |
| 6 | 86 | Get texture height | `Height$(` |  | chaîne « Texture name » | — |  |
