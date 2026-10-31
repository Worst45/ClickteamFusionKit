# Extension array3d

- Fichier : `array3d.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | X is inside array | `X( <p0> ) is inside array` |  | expression numérique « X is inside array » | — |  |
| 1 | -82 | Y is inside array | `Y( <p0> ) is inside array` |  | expression numérique « Y is inside array » | — |  |
| 2 | -83 | Z is inside array | `Z( <p0> ) is inside array` |  | expression numérique « Z is inside array » | — |  |
| 3 | -84 | XY is inside array | `XY( <p0>, <p1> ) is inside array` |  | expression numérique « X is inside array » ; expression numérique « Y is inside array » | — |  |
| 4 | -85 | XYZ is inside array | `XYZ( <p0>, <p1>, <p2> ) is inside array` |  | expression numérique « X is inside array » ; expression numérique « Y is inside array » ; expression numérique « Z is inside array » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Position > Set X | `Set X to <p0>` |  | expression numérique « Set X » | — |  |
| 1 | 81 | Set Position > Set Y | `Set Y to <p0>` |  | expression numérique « Set Y » | — |  |
| 2 | 82 | Set Position > Set Z | `Set Z to <p0>` |  | expression numérique « Set Z » | — |  |
| 3 | 83 | Set Position > Set XY | `Set XY to <p0>, <p1>` |  | expression numérique « Set X » ; expression numérique « Set Y » | — |  |
| 4 | 84 | Set Position > Set XYZ | `Set XYZ to <p0>, <p1>, <p2>` |  | expression numérique « Set X » ; expression numérique « Set Y » ; expression numérique « Set Z » | — |  |
| 5 | 85 | Set Size > Set X Size | `Set X Size to <p0>,` |  | expression numérique « Set X » | — |  |
| 6 | 86 | Set Size > Set Y Size | `Set Y Size to <p0>,` |  | expression numérique « Set Y » | — |  |
| 7 | 87 | Set Size > Set Z Size | `Set Z Size to <p0>,` |  | expression numérique « Set Z » | — |  |
| 8 | 88 | Set Size > Set XY Size | `Set XY Size to <p0>, <p1>` |  | expression numérique « Set X » ; expression numérique « Set Y » | — |  |
| 9 | 89 | Set Size > Set XYZ Size | `Set XYZ Size to <p0>, <p1>, <p2>` |  | expression numérique « Set X » ; expression numérique « Set Y » ; expression numérique « Set Z » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | 1D Array > Get Position | `GetPos(` |  |  | — |  |
| 1 | 81 | 1D Array > Get Position ( X ) | `GetPosX(` |  | nombre | — |  |
| 2 | 82 | 1D Array > Get Position ( X, Y ) | `GetPosXY(` |  | nombre ; nombre | — |  |
| 3 | 83 | 1D Array > Get Position ( X, Y, Z ) | `GetPosXYZ(` |  | nombre ; nombre ; nombre | — |  |
| 4 | 84 | 1D Array > Get Size | `GetSize(` |  |  | — |  |
| 5 | 85 | 3D Array > Get X Position | `GetX(` |  |  | — |  |
| 6 | 86 | 3D Array > Get Y Position | `GetY(` |  |  | — |  |
| 7 | 87 | 3D Array > Get Z Position | `GetZ(` |  |  | — |  |
| 8 | 88 | 3D Array > Get X Size | `GetXSize(` |  |  | — |  |
| 9 | 89 | 3D Array > Get Y Size | `GetYSize(` |  |  | — |  |
| 10 | 90 | 3D Array > Get Z Size | `GetZSize(` |  |  | — |  |
| 11 | 91 | 1D to 3D Array > Get X from single value | `GetXSV(` |  | nombre | — |  |
| 12 | 92 | 1D to 3D Array > Get Y from single value | `GetYSV(` |  | nombre | — |  |
| 13 | 93 | 1D to 3D Array > Get Z from single value | `GetZSV(` |  | nombre | — |  |
