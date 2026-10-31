# Extension AnimInfo

- Fichier : `AnimInfo.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Animation > Current Animation | `Anim(` |  | nombre « Fixed Value of Object » | — |  |
| 1 | 81 | Animation > Animation State | `AnimState(` |  | nombre « Fixed Value of Object » | — |  |
| 2 | 82 | Animation > Current Direction | `CurrentDir(` |  | nombre « Fixed Value of Object » | — |  |
| 3 | 83 | Animation > Previous Direction | `PreviousDir(` |  | nombre « Fixed Value of Object » | — |  |
| 4 | 84 | Animation > Direction Offset | `DirOffset(` |  | nombre « Fixed Value of Object » ; nombre « Direction Number » | — |  |
| 5 | 85 | Speed > Current Speed | `CurrentSpeed(` |  | nombre « Fixed Value of Object » | — |  |
| 6 | 86 | Speed > Minimum Speed | `MinSpeed(` |  | nombre « Fixed Value of Object » | — |  |
| 7 | 87 | Speed > Maximum Speed | `MaxSpeed(` |  | nombre « Fixed Value of Object » | — |  |
| 8 | 88 | Speed > Speed Counter | `SpeedCounter(` |  | nombre « Fixed Value of Object » | — |  |
| 9 | 89 | Frame > Current Frame | `CurrentFrame(` |  | nombre « Fixed Value of Object » | — |  |
| 10 | 90 | Frame > Number of Frames | `TotalFrames(` |  | nombre « Fixed Value of Object » | — |  |
| 11 | 91 | Looping > Repeat Count | `LoopRepeatCount(` |  | nombre « Fixed Value of Object » | — |  |
| 12 | 92 | Looping > Loop Frame | `LoopFrame(` |  | nombre « Fixed Value of Object » | — |  |
| 13 | 93 | Force Flags > Animation Forced | `AnimForced(` |  | nombre « Fixed Value of Object » | — |  |
| 14 | 94 | Force Flags > Direction Forced | `DirForced(` |  | nombre « Fixed Value of Object » | — |  |
| 15 | 95 | Force Flags > Speed Forced | `SpeedForced(` |  | nombre « Fixed Value of Object » | — |  |
| 16 | 96 | Force Flags > Frame Forced | `FrameForced(` |  | nombre « Fixed Value of Object » | — |  |
