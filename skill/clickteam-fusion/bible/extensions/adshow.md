# Extension adshow

- File: `adshow.mfx` — installed with Fusion
- Name(s) shown in projects: “Active Direct Show”
- Usage in the corpus: 4 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Playing | `<object>: Is Playing ?` | <object>: En train de jouer? |  | — |  |
| 1 | -82 | Compare Time Position | `<object>: Compare Time Position (<p0>)` | <object>: Comparer à la position temps (<p0>) | time comparison “Position (ms)” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load | `<object>: Load Video (<p0>)` | <object>: Charger vidéo (<p0>) | file name “Pathname” | 1 (1 proj.) |  |
| 1 | 81 | Close | `<object>: Close Video` | <object>: Fermer la vidéo |  | — |  |
| 2 | 82 | Play | `<object>: Play Video` | <object>: Jouer vidéo |  | 1 (1 proj.) |  |
| 3 | 83 | Stop | `<object>: Stop Video` | <object>: Arrêter la vidéo |  | 2 (1 proj.) |  |
| 4 | 84 | Size > Set Width | `<object>: Set Width (<p0>)` | <object>: Fixer la largeur (<p0>) | numeric expression “Width” | — |  |
| 5 | 85 | Size > Set Height | `<object>: Set Height (<p0>)` | <object>: Fixer hauteur (<p0>) | numeric expression “Height” | — |  |
| 6 | 86 | Set Position | `<object>: Set Position (<p0>)` | <object>: Fixer la position (<p0>) | numeric expression “Position (ms)” | — |  |
| 7 | 87 | Mute Audio | `<object>: Mute Audio` | <object>: Couper le son |  | — |  |
| 8 | 88 | Resume Audio | `<object>: Resume Audio` | <object>: Remettre le son |  | — |  |
| 9 | 89 | Set Rate | `<object>: Set Rate (<p0>)` | <object>: Fixer la vitesse (<p0>) | numeric expression “Speed Ratio (100 is normal, for 2x enter 200)” | — |  |
| 10 | 90 | Set Volume | `<object>: Set Volume (<p0>)` | <object>: Fixer le volume (<p0>) | numeric expression “Volume: 0 to 1000” | — |  |
| 11 | 91 | Set Loop > On | `<object>: Set Loop On` | <object>: Boucle ON |  | — |  |
| 12 | 92 | Set Loop > Off | `<object>: Set Loop Off` | <object>: Boucle OFF |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get Width | `GetWidth(` | Largeur |  | — |  |
| 1 | 81 | Size > Get Height | `GetHeight(` | Hauteur |  | — |  |
| 2 | 82 | Get Duration | `GetDuration(` | Durée |  | — |  |
| 3 | 83 | Get Current Position | `GetPosition(` | Position courante |  | — |  |
| 4 | 84 | Size > Get Source Width | `GetSourceWidth(` | Largeur de la source |  | — |  |
| 5 | 85 | Size > Get Source Height | `GetSourceHeight(` | Hauteur de la source |  | — |  |
| 6 | 86 | Get Rate | `GetRate(` | Vitesse |  | — |  |
| 7 | 87 | Get Volume | `GetVolume(` | Volume |  | — |  |
