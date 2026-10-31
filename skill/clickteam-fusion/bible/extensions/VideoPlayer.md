# Extension VideoPlayer

- Fichier : `VideoPlayer.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Create Video Player | `Create Video Player (<p0>,<p1>)` |  | expression numérique « Player Width » ; expression numérique « Player Height » | — |  |
| 1 | 81 | Load Video | `Load Video (<p0>)` |  | expression chaîne « Video URL » | — |  |
| 2 | 82 | Load Preview Image | `Load Preview Image (<p0>)` |  | expression chaîne « Preview Image URL » | — |  |
| 3 | 83 | Set X Position | `Set X Position (<p0>)` |  | expression numérique « Player X Position » | — |  |
| 4 | 84 | Set Y Position | `Set Y Position (<p0>)` |  | expression numérique « Player Y Position » | — |  |
| 5 | 85 | Show Player | `Show Player` |  |  | — |  |
| 6 | 86 | Hide Player | `Hide Player` |  |  | — |  |
| 7 | 87 | Set Volume | `Set Volume (<p0>)` |  | expression numérique « Player Volume » | — |  |
| 8 | 88 | Control > Play Video | `Play Video` |  |  | — |  |
| 9 | 89 | Control > Pause Video | `Pause Video` |  |  | — |  |
| 10 | 90 | Control > Stop Video | `Stop Video` |  |  | — |  |
| 11 | 91 | Control > Seek To Position | `Seek To Position` |  | expression numérique « Video Position (Percentage) » | — |  |
| 12 | 92 | Options > Double Clicks | `Double Clicks (<p0>)` |  | expression numérique « Enabled? (0 = False, 1 = True) » | — |  |
| 13 | 93 | Options > Placement | `Placement (<p0>)` |  | expression numérique « Control Placement (0 = Below Video, 1 = Over Video) » | — |  |
| 14 | 94 | Options > Auto Hide Controls | `Auto Hide Controls (<p0>)` |  | expression numérique « Auto Hide Controls? (0 = False, 1 = True) » | — |  |
| 15 | 95 | Options > Auto Play | `Auto Play (<p0>)` |  | expression numérique « Auto Play? (0 = False, 1 = True) » | — |  |
| 16 | 96 | Options > Fade Out Time | `Fade Out Time (<p0>)` |  | expression numérique « Controls Fade Out Time (in Milliseconds) » | — |  |
| 17 | 97 | Options > Left Control Padding | `Left Control Padding (<p0>)` |  | expression numérique « Control Padding Left Side (in Pixels) » | — |  |
| 18 | 98 | Options > Right Control Padding | `Right Control Padding (<p0>)` |  | expression numérique « Control Padding Right Side (in Pixels) » | — |  |
| 19 | 99 | Main Bar > Bar Background Color | `Bar Background Color (<p0>)` |  | couleur « Bar Background Color » | — |  |
| 20 | 100 | Main Bar > Bar Background Alpha | `Bar Background Alpha (<p0>)` |  | expression numérique « Bar Background Alpha » | — |  |
| 21 | 101 | Main Bar > Bar Knob Outline Color | `Bar Knob Outline Color (<p0>)` |  | couleur « Bar Knob Outline Color » | — |  |
| 22 | 102 | Main Bar > Bar Knob Outline Alpha | `Bar Knob Outline Alpha (<p0>)` |  | expression numérique « Bar Knob Outline Alpha » | — |  |
| 23 | 103 | Main Bar > Bar Loading Background Color | `Bar Loading Background Color (<p0>)` |  | couleur « Bar Loading Background Color » | — |  |
| 24 | 104 | Main Bar > Bar Playing Background Color | `Bar Playing Background Color (<p0>)` |  | couleur « Bar Playing Background Color » | — |  |
| 25 | 105 | Background > Background Top Color | `Background Top Color (<p0>)` |  | couleur « Background Top Color » | — |  |
| 26 | 106 | Background > Background Top Alpha | `Background Top Alpha (<p0>)` |  | expression numérique « Background Top Alpha » | — |  |
| 27 | 107 | Background > Background Bottom Color | `Background Bottom Color (<p0>)` |  | couleur « Background Bottom Color » | — |  |
| 28 | 108 | Background > Background Bottom Alpha | `Background Bottom Alpha (<p0>)` |  | expression numérique « Background Bottom Alpha » | — |  |
| 29 | 109 | Controls > Controls Background Color | `Controls Background Color (<p0>)` |  | couleur « Controls Background Color » | — |  |
| 30 | 110 | Controls > Controls Background Alpha | `Controls Background Alpha (<p0>)` |  | expression numérique « Controls Background Alpha » | — |  |
| 31 | 111 | Controls > Controls Icon Color | `Controls Icon Color (<p0>)` |  | couleur « Controls Icon Color » | — |  |
| 32 | 112 | Controls > Controls RollOver Glow Color | `Controls RollOver Glow Color (<p0>)` |  | couleur « Controls RollOver Color » | — |  |
| 33 | 113 | Controls > Controls RollOver Glow Alpha | `Controls RollOver Glow Alpha (<p0>)` |  | expression numérique « Controls RollOver Glow Alpha » | — |  |
| 34 | 114 | Timer And Icon > Play Icon Color | `Play Icon Color (<p0>)` |  | couleur « Play Icon Color » | — |  |
| 35 | 115 | Timer And Icon > Play Icon Alpha | `Play Icon Alpha (<p0>)` |  | expression numérique « Play Icon Alpha » | — |  |
| 36 | 116 | Timer And Icon > Timer Background Color | `Timer Background Color (<p0>)` |  | couleur « Timer Background Color » | — |  |
| 37 | 117 | Timer And Icon > Timer Background Alpha | `Timer Background Alpha (<p0>)` |  | expression numérique « Timer Background Alpha » | — |  |
| 38 | 118 | Timer And Icon > Timer CountUp Color | `Timer CountUp Color (<p0>)` |  | couleur « Timer CountUp Color » | — |  |
| 39 | 119 | Timer And Icon > Timer CountDown Color | `Timer CountDown Color (<p0>)` |  | couleur « Timer CountDown Color » | — |  |
