# Extension OpenGL-LightingAdvanced

- Fichier : `OpenGL-LightingAdvanced.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is a light enabled? | `<objet>: Light <p0> is enabled` |  | expression numérique « Light source ( 0 - 7 )... » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set global ambient color... | `Set global ambient color to <p0>` |  | couleur « Ambient color... » | — |  |
| 1 | 81 | Enable > Light... | `Enable light <p0>` |  | couleur « Light source ( 0 - 7 )... » | — |  |
| 2 | 82 | Enable > Lights... | `Enable lights <p0> to <p1>` |  | expression numérique « From light source ( 0 - 7 )... » ; expression numérique « To light source ( 0 - 7 )... » | — |  |
| 3 | 83 | Enable > All lights | `Enable all lights` |  |  | — |  |
| 7 | 87 | Set type of light... | `Set light <p0> type to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Type ( 0 = Directional, 1 = Positional, 2 = Spotlight )... » | — |  |
| 8 | 88 | Set ambient color... | `Set light <p0> ambient color to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; couleur « Ambient color... » | — |  |
| 9 | 89 | Set diffuse color... | `Set light <p0> diffuse color to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; couleur « Diffuse color... » | — |  |
| 10 | 90 | Set specular color... | `Set light <p0> specular color to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; couleur « Specular color... » | — |  |
| 11 | 91 | Position > Set X coordinate... | `Set light <p0> X coordinate to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « X coordinate... » | — |  |
| 12 | 92 | Position > Set Y coordinate... | `Set light <p0> Y coordinate to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Y coordinate... » | — |  |
| 13 | 93 | Position > Set Z coordinate... | `Set light <p0> Z coordinate to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Z coordinate... » | — |  |
| 14 | 94 | Spotlight > Set direction... | `Set light <p0> spotlight direction to <p1>, <p2>, <p3>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « X coordinate... » ; expression numérique « Y coordinate... » ; expression numérique « Z coordinate... » | — |  |
| 15 | 95 | Spotlight > Set exponent... | `Set light <p0> spotlight exponent to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Exponent... » | — |  |
| 16 | 96 | Spotlight > Set cutoff... | `Set light <p0> spotlight cutoff to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Cutoff... » | — |  |
| 17 | 97 | Attenuation > Set constant... | `Set light <p0> constant attenuation to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Constant value... » | — |  |
| 18 | 98 | Attenuation > Set linear... | `Set light <p0> linear attenuation to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Linear value... » | — |  |
| 19 | 99 | Attenuation > Set quadratic... | `Set light <p0> quadratic attenuation to <p1>` |  | expression numérique « Light source ( 0 - 7 )... » ; expression numérique « Quadratic value... » | — |  |
| 20 | 100 | Apply lights | `Apply lights` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get global ambient color | `GlobalAmbient(` |  |  | — |  |
| 1 | 81 | Get ambient color | `Ambient(` |  | nombre « Light source » | — |  |
| 2 | 82 | Get diffuse color | `Diffuse(` |  | nombre « Light source » | — |  |
| 3 | 83 | Get specular color | `Specular(` |  | nombre « Light source » | — |  |
| 4 | 84 | Position > Get X coordinate | `⡘` |  | nombre « Light source » | — |  |
| 5 | 85 | Position > Get Y coordinate | `⡙` |  | nombre « Light source » | — |  |
| 6 | 86 | Position > Get Z coordinate | `⡚` |  | nombre « Light source » | — |  |
| 7 | 87 | Spotlight > Direction > Get X value | `SpotDirX(` |  | nombre « Light source » | — |  |
| 8 | 88 | Spotlight > Direction > Get Y value | `SpotDirY(` |  | nombre « Light source » | — |  |
| 9 | 89 | Spotlight > Direction > Get Z value | `SpotDirZ(` |  | nombre « Light source » | — |  |
| 10 | 90 | Spotlight > Get exponent | `Exponent(` |  | nombre « Light source » | — |  |
| 11 | 91 | Spotlight > Get cutoff | `Cutoff(` |  | nombre « Light source » | — |  |
| 12 | 92 | Attenuation > Get constant | `Constant(` |  | nombre « Light source » | — |  |
| 13 | 93 | Attenuation > Get linear | `Linear(` |  | nombre « Light source » | — |  |
| 14 | 94 | Attenuation > Get quadratic | `Quadratic(` |  | nombre « Light source » | — |  |
