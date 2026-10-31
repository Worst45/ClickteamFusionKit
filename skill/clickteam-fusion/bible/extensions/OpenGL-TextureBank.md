# Extension OpenGL-TextureBank

- Fichier : `OpenGL-TextureBank.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | A texture is loaded? ( Index ) | `<objet>: Texture <p0> is loaded` |  | expression numérique « Texture index » | — |  |
| 1 | -82 | A texture is loaded? ( Name ) | `<objet>: Texture <p0> is loaded` |  | expression chaîne « Texture name » | — |  |
| 2 | -83 | On texture loaded | `<objet>: On texture loaded` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | By index > Minifying filter... | `Texture <p0> minifying filter: <p1>` |  | expression numérique « Texture index » ; expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 1 | 81 | By index > Magnification filter... | `Texture <p0> magnification filter: <p1>` |  | expression numérique « Texture index » ; expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 2 | 82 | By index > Horizontal repeat... | `Texture <p0> horizontal repeat: <p1>` |  | expression numérique « Texture index » ; expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 3 | 83 | By index > Vertical repeat... | `Texture <p0> vertical repeat: <p1>` |  | expression numérique « Texture index » ; expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 4 | 84 | By index > Load texture... | `Load texture <p0>` |  | expression numérique « Texture index » | — |  |
| 5 | 85 | By index > Unload texture... | `Unload texture <p0>` |  | expression numérique « Texture index » | — |  |
| 6 | 86 | By name > Minifying filter... | `Texture <p0> minifying filter: <p1>` |  | expression chaîne « Texture name » ; expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 7 | 87 | By name > Magnification filter... | `Texture <p0> magnification filter: <p1>` |  | expression chaîne « Texture name » ; expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 8 | 88 | By name > Horizontal repeat... | `Texture <p0> horizontal repeat: <p1>` |  | expression chaîne « Texture name » ; expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 9 | 89 | By name > Vertical repeat... | `Texture <p0> vertical repeat: <p1>` |  | expression chaîne « Texture name » ; expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 10 | 90 | By name > Load texture... | `Load texture <p0>` |  | expression chaîne « Texture name » | — |  |
| 11 | 91 | By name > Unload texture... | `Unload texture <p0>` |  | expression chaîne « Texture name » | — |  |
| 12 | 92 | All > Minifying filter... | `All textures minifying filter: <p0>` |  | expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 13 | 93 | All > Magnification filter... | `All textures magnification filter: <p0>` |  | expression numérique « 0 = Nearest, 1 = Linear filter » | — |  |
| 14 | 94 | All > Horizontal repeat... | `All textures horizontal repeat: <p0>` |  | expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 15 | 95 | All > Vertical repeat... | `All textures vertical repeat: <p0>` |  | expression numérique « 0 = Clamp, 1 = Repeat » | — |  |
| 16 | 96 | All > Load textures | `Load all textures` |  |  | — |  |
| 17 | 97 | All > Unload textures | `Unload all textures` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get handle > From index | `HandleFromIndex(` |  | nombre « Texture index » | — |  |
| 1 | 81 | Get handle > From name | `HandleFromName(` |  | chaîne « Texture name » | — |  |
| 2 | 82 | Get handle > Last loaded | `LoadedHandle(` |  |  | — |  |
| 3 | 83 | Get name > From index | `NameFromIndex$(` |  | nombre « Texture index » → chaîne | — |  |
| 4 | 84 | Get name > From handle | `NameFromHandle$(` |  | nombre « Texture handle » → chaîne | — |  |
| 5 | 85 | Get name > Last loaded | `LoadedName$(` |  | → chaîne | — |  |
| 6 | 86 | Get index > From name | `IndexFromName(` |  | chaîne « Texture name » | — |  |
| 7 | 87 | Get index > From handle | `IndexFromHandle(` |  | nombre « Texture handle » | — |  |
| 8 | 88 | Get index > Last loaded | `LoadedIndex(` |  |  | — |  |
| 9 | 89 | Number of textures | `Textures(` |  |  | — |  |
| 10 | 90 | Number of loaded textures | `LoadedTextures(` |  |  | — |  |
| 11 | 91 | Get width > From index | `WidthFromIndex(` |  | nombre « Texture index » | — |  |
| 12 | 92 | Get width > From name | `WidthFromName(` |  | chaîne « Texture name » | — |  |
| 13 | 93 | Get height > From index | `HeightFromIndex(` |  | nombre « Texture index » | — |  |
| 14 | 94 | Get height > From name | `HeightFromName(` |  | chaîne « Texture name » | — |  |
