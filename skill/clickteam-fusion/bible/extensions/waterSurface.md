# Extension waterSurface

- Fichier : `waterSurface.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Ripples > Spawn Ripple | `Spawn Ripple at (<p0>, <p1>) - Strength (<p2>) - Dir (<p3>, <p4>)` |  | expression numérique « x » ; expression numérique « y » ; expression numérique « strength » ; expression numérique « xDir » ; expression numérique « yDir » | — |  |
| 1 | 81 | Waves > Set Wave Speed | `Set Wave Speed (<p0>)` |  | expression numérique « Wave Speed (default = 4.0) » | — |  |
| 2 | 82 | Waves > Set Horizontal Wave Strength | `Set Horizontal Wave Strength (<p0>)` |  | expression numérique « Wave Strength (float) » | — |  |
| 3 | 83 | Waves > Set Vertical Wave Strength | `Set Vertical Wave Strength (<p0>)` |  | expression numérique « Wave Strength (float) » | — |  |
| 4 | 84 | Appearance > Set Water Tint | `Set Water Tint (<p0>)` |  | couleur « Color » | — |  |
| 5 | 85 | Ripples > Set Falloff | `Set Ripple Falloff (<p0>)` |  | expression numérique « Falloff (1-8) » | — |  |
| 6 | 86 | Ripples > Use Ripples | `Use Ripples (<p0>)` |  | expression numérique « State (1=on, 0=off) » | — |  |
| 7 | 87 | Waves > Use Waves | `Use Waves (<p0>)` |  | expression numérique « State (1=on, 0=off) » | — |  |
| 8 | 88 | Waves > Set Horizontal Wave Length | `Set Horizontal Wave Length (<p0>)` |  | expression numérique « Length (1-6) » | — |  |
| 9 | 89 | Waves > Set Vertical Wave Length | `Set Vertical Wave Length (<p0>)` |  | expression numérique « Length (1-6) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Temp | `xxx_temp(` |  |  | — |  |
