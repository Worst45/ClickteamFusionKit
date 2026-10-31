# Extension OpenGL-LightingAdvanced

- File: `OpenGL-LightingAdvanced.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is a light enabled? | `<object>: Light <p0> is enabled` |  | numeric expression “Light source ( 0 - 7 )...” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set global ambient color... | `Set global ambient color to <p0>` |  | color “Ambient color...” | — |  |
| 1 | 81 | Enable > Light... | `Enable light <p0>` |  | color “Light source ( 0 - 7 )...” | — |  |
| 2 | 82 | Enable > Lights... | `Enable lights <p0> to <p1>` |  | numeric expression “From light source ( 0 - 7 )...”; numeric expression “To light source ( 0 - 7 )...” | — |  |
| 3 | 83 | Enable > All lights | `Enable all lights` |  |  | — |  |
| 7 | 87 | Set type of light... | `Set light <p0> type to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Type ( 0 = Directional, 1 = Positional, 2 = Spotlight )...” | — |  |
| 8 | 88 | Set ambient color... | `Set light <p0> ambient color to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; color “Ambient color...” | — |  |
| 9 | 89 | Set diffuse color... | `Set light <p0> diffuse color to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; color “Diffuse color...” | — |  |
| 10 | 90 | Set specular color... | `Set light <p0> specular color to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; color “Specular color...” | — |  |
| 11 | 91 | Position > Set X coordinate... | `Set light <p0> X coordinate to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “X coordinate...” | — |  |
| 12 | 92 | Position > Set Y coordinate... | `Set light <p0> Y coordinate to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Y coordinate...” | — |  |
| 13 | 93 | Position > Set Z coordinate... | `Set light <p0> Z coordinate to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Z coordinate...” | — |  |
| 14 | 94 | Spotlight > Set direction... | `Set light <p0> spotlight direction to <p1>, <p2>, <p3>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “X coordinate...”; numeric expression “Y coordinate...”; numeric expression “Z coordinate...” | — |  |
| 15 | 95 | Spotlight > Set exponent... | `Set light <p0> spotlight exponent to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Exponent...” | — |  |
| 16 | 96 | Spotlight > Set cutoff... | `Set light <p0> spotlight cutoff to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Cutoff...” | — |  |
| 17 | 97 | Attenuation > Set constant... | `Set light <p0> constant attenuation to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Constant value...” | — |  |
| 18 | 98 | Attenuation > Set linear... | `Set light <p0> linear attenuation to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Linear value...” | — |  |
| 19 | 99 | Attenuation > Set quadratic... | `Set light <p0> quadratic attenuation to <p1>` |  | numeric expression “Light source ( 0 - 7 )...”; numeric expression “Quadratic value...” | — |  |
| 20 | 100 | Apply lights | `Apply lights` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get global ambient color | `GlobalAmbient(` |  |  | — |  |
| 1 | 81 | Get ambient color | `Ambient(` |  | number “Light source” | — |  |
| 2 | 82 | Get diffuse color | `Diffuse(` |  | number “Light source” | — |  |
| 3 | 83 | Get specular color | `Specular(` |  | number “Light source” | — |  |
| 4 | 84 | Position > Get X coordinate | `⡘` |  | number “Light source” | — |  |
| 5 | 85 | Position > Get Y coordinate | `⡙` |  | number “Light source” | — |  |
| 6 | 86 | Position > Get Z coordinate | `⡚` |  | number “Light source” | — |  |
| 7 | 87 | Spotlight > Direction > Get X value | `SpotDirX(` |  | number “Light source” | — |  |
| 8 | 88 | Spotlight > Direction > Get Y value | `SpotDirY(` |  | number “Light source” | — |  |
| 9 | 89 | Spotlight > Direction > Get Z value | `SpotDirZ(` |  | number “Light source” | — |  |
| 10 | 90 | Spotlight > Get exponent | `Exponent(` |  | number “Light source” | — |  |
| 11 | 91 | Spotlight > Get cutoff | `Cutoff(` |  | number “Light source” | — |  |
| 12 | 92 | Attenuation > Get constant | `Constant(` |  | number “Light source” | — |  |
| 13 | 93 | Attenuation > Get linear | `Linear(` |  | number “Light source” | — |  |
| 14 | 94 | Attenuation > Get quadratic | `Quadratic(` |  | number “Light source” | — |  |
