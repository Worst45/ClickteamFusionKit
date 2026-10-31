# Extension KcVideo

- Fichier : `KcVideo.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Video at start position ? | `<objet>: start of video?` |  |  | — |  |
| 1 | -82 | Is Video at end position ? | `<objet>: end of video?` |  |  | — |  |
| 2 | -83 | Mouse clicks within the Video window ? | `User <p0> within <objet>` |  | clic « Mouse clicks within the Video window ? » | — |  |
| 3 | -84 | Compare to current frame ? | `<objet>: current frame <p0>` |  | comparaison numérique « Compare to current frame ? » | — |  |
| 4 | -85 | Compare to current time position ? | `<objet>: current time <p0>` |  | comparaison de temps « Compare to current time position ? » | — |  |
| 5 | -86 | Check whether a file is open ? | `<objet>: file is opened?` |  |  | — |  |
| 6 | -87 | Is visible ? | `<objet>: visible` |  |  | — |  |
| 7 | -88 | Is Video an Indeo? | `<objet>: is an Indeo Video?` |  |  | — |  |
| 8 | -89 | Is AltLine Mode? | `<objet>: Is AltLine?` |  |  | — |  |
| 9 | -90 | Is Video an Indio? | `<objet>: Is an Indio Video?` |  |  | — |  |
| 10 | -91 | Is Video an DIVX v4/3 | `<objet>: Is an DIVX Video?` |  |  | — |  |
| 11 | -92 | Is Video paused ? | `<objet>: video paused?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play > Forward | `Play video` |  |  | — |  |
| 1 | 81 | Stop | `Stop video` |  |  | — |  |
| 2 | 82 | Pause | `Pause video` |  |  | — |  |
| 3 | 83 | Resume | `Resume video` |  |  | — |  |
| 6 | 86 | Play > A new file | `New file <p0>` |  | nom de fichier « \|*.MPG;*.DAT;*.AVI;*.MOV\|Video Files(*.mpg;*.mpeg;*.dat;*.avi;*.mov) » | — |  |
| 7 | 87 | Play > A new file via a file selector | `New file from selector` |  |  | — |  |
| 8 | 88 | Visibility > Make Object Invisible | `Hide` |  |  | — |  |
| 9 | 89 | Visibility > Make Object Reappear | `Show` |  |  | — |  |
| 10 | 90 | Set Video Play Position to... > Beginning | `Goto beginning` |  |  | — |  |
| 11 | 91 | Set Video Play Position to... > End | `Goto end` |  |  | — |  |
| 12 | 92 | Set Video Play Position to... > A Frame Number | `Goto frame <p0>` |  | expression numérique « Select New Frame » | — |  |
| 13 | 93 | Set Video Play Position to... > A Time Position | `Goto time <p0>` |  | expression numérique « Select New Time (second) » | — |  |
| 14 | 94 | Size/Position > Set Horizontal and Vertical size | `Set horizontal size to <p0>, and vertical size to <p1>` |  | expression numérique « Set horizontal size » ; expression numérique « Set vertical size » | — |  |
| 15 | 95 | Size/Position > Set Horizontal size | `Set horizontal size to <p0>` |  | expression numérique « Set horizontal size » | — |  |
| 16 | 96 | Size/Position > Set Vertical size | `Set vertical size to <p0>` |  | expression numérique « Set vertical size » | — |  |
| 17 | 97 | Window Size and Color > Full Screen | `Set <objet> Full Video` |  |  | — |  |
| 18 | 98 | Window Size and Color > Normal Size | `Set <objet> Normal Video` |  |  | — |  |
| 19 | 99 | Center Video | `Center Video` |  |  | — |  |
| 20 | 100 | Indeo Options > Set RGB Trans Fill | `Set Indeo TransFill RGB(<p0>)` |  | couleur « Red Transfill, 0 to 255, Green Transfill, 0 to 255, Blue Transfill, 0 to 255 » | — |  |
| 21 | 101 | Indeo Options > Toggle AltLine | `Toggle Indeo AltLine` |  |  | — |  |
| 22 | 102 | Indeo Options > Set Contrast | `Set Indeo Contrast to <p0>` |  | expression numérique « Contrast, 0 to 256 » | — |  |
| 23 | 103 | Indeo Options > Set Brightness | `Set Indeo Brightness to <p0>` |  | expression numérique « Brightness, 0 to 256 » | — |  |
| 24 | 104 | Indeo Options > Set Saturation | `Set Indeo Saturation to <p0>` |  | expression numérique « Saturation, 0 to 256 » | — |  |
| 25 | 105 | Indeo Options > Set Numeric Password | `Set Indeo Password to <p0>` |  | expression numérique « Numeric Password » | — |  |
| 26 | 106 | Window Size and Color > Toggle Aspect Ratio | `Toggle (Keep Aspect Ratio)` |  |  | — |  |
| 27 | 107 | Window Size and Color > Set Background Color | `Set Background color to <p0>` |  | couleur « Red Transfill, 0 to 255, Green Transfill, 0 to 255, Blue Transfill, 0 to 255 » | — |  |
| 28 | 108 | Indio Options > Set Indio Password | `Set Indio Password to <p0>` |  | expression chaîne « Numeric Password » | — |  |
| 30 | 110 | Divx Ver 4/3 Options > Set Contrast | `Set DIVX Contrast to <p0>` |  | expression numérique « Divx - Contrast, 0 to 256 » | — |  |
| 31 | 111 | Divx Ver 4/3 Options > Set Brightness | `Set DIVX Brightness to <p0>` |  | expression numérique « Divx - Brightness, 0 to 256 » | — |  |
| 32 | 112 | Divx Ver 4/3 Options > Set Saturation | `Set DIVX Saturation to <p0>` |  | expression numérique « Divx - Saturation, 0 to 256 » | — |  |
| 33 | 113 | Size/Position > Set Horizontal position | `Set horizontal position to <p0>` |  | expression numérique « Set horizontal position » | — |  |
| 34 | 114 | Size/Position > Set Vertical position | `Set vertical position to <p0>` |  | expression numérique « Set vertical position » | — |  |
| 35 | 115 | Sound > Set Volume | `Set Volume to <p0>` |  | expression numérique « New Volume, 0 to 100 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current frame number | `Video Frame(` |  |  | — |  |
| 1 | 81 | Total number of frames | `Video Total Frames(` |  |  | — |  |
| 2 | 82 | Current time position | `Video Time(` |  |  | — |  |
| 3 | 83 | Total time | `Video Total Time(` |  |  | — |  |
| 4 | 84 | Horizontal size | `Video X Size(` |  |  | — |  |
| 5 | 85 | Vertical size | `Video Y Size(` |  |  | — |  |
| 6 | 86 | Last Error Number | `Last Error(` |  |  | — |  |
| 7 | 87 | Get Indeo Password | `IndeoKey(` |  |  | — |  |
| 8 | 88 | Get Indeo Contrast | `GetIndeoContrast(` |  |  | — |  |
| 9 | 89 | Get Indeo Brightness | `GetIndeoBrightness(` |  |  | — |  |
| 10 | 90 | Get Indeo Saturation | `GetIndeoSaturation(` |  |  | — |  |
| 11 | 91 | Get Divx Contrast | `GetDivxContrast(` |  |  | — |  |
| 12 | 92 | Get Divx Brightness | `GetDivxBrightness(` |  |  | — |  |
| 13 | 93 | Get Divx Saturation | `GetDivxSaturation(` |  |  | — |  |
| 14 | 94 | Get Indio Password | `GetIndioKey$(` |  | → chaîne | — |  |
| 15 | 95 | Get Volume | `GetVolume(` |  |  | — |  |
| 16 | 96 | Get Video Rate | `GetVideoRate(` |  |  | — |  |
