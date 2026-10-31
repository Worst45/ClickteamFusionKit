# Extension BinaryArray

- Fichier : `BinaryArray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Workspace exists | `<objet> : Workspace exists` |  | expression chaîne « Workspace name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | File > Load file > Uncompressed | `Load file <p0>` |  | nom de fichier « File path » | — |  |
| 1 | 81 | File > Save file > Uncompressed | `Save file to <p0>` |  | expression chaîne « File path » | — |  |
| 2 | 82 | File > Load workspace file > Uncompressed | `Load workspace file <p0>` |  | nom de fichier « File path » | — |  |
| 3 | 83 | File > Save workspace file > Uncompressed | `Save all workspaces to <p0>` |  | expression chaîne « File path » | — |  |
| 4 | 84 | Workspace > Switch | `Switch workspace to <p0>` |  | expression chaîne « Workspace name » | — |  |
| 5 | 85 | Write > Byte | `Write byte <p1> to <p0>` |  | expression numérique « Position » ; expression numérique « Value » | — |  |
| 6 | 86 | Write > Integer | `Write integer <p1> to <p0>` |  | expression numérique « Position » ; expression numérique « Value » | — |  |
| 7 | 87 | Write > String | `Write string <p1> to <p0>` |  | expression numérique « Position » ; expression chaîne « Value » | — |  |
| 8 | 88 | Write > Terminated string | `Write terminated string <p1> to <p0>` |  | expression numérique « Position » ; expression chaîne « Value » | — |  |
| 9 | 89 | Write > Float | `Write float <p1> to <p0>` |  | expression numérique « Position » ; expression numérique « Value » | — |  |
| 10 | 90 | Workspace > Resize | `Resize to <p0>` |  | expression numérique « Size » | — |  |
| 11 | 91 | Settings > Set virtual width/height | `Set virtual size to <p0> , <p1>` |  | expression numérique « X size » ; expression numérique « Y size » | — |  |
| 12 | 92 | Workspace > Create | `Create workspace <p0>` |  | expression chaîne « Name » | — |  |
| 13 | 93 | Workspace > Delete | `Delete workspace <p0>` |  | expression chaîne « Name » | — |  |
| 14 | 94 | Settings > Set default size | `Set default size to <p0>` |  | expression numérique « New size » | — |  |
| 15 | 95 | Workspace > Delete all | `Delete all workspaces` |  |  | — |  |
| 16 | 96 | Workspace > Copy | `Copy current workspace to <p0>` |  | expression chaîne « Destination name » | — |  |
| 17 | 97 | File > Load file > Compressed | `Load compressed file <p0>` |  | nom de fichier « File path » | — |  |
| 18 | 98 | File > Save file > Compressed | `Save compressed file to <p0>` |  | expression chaîne « File path » | — |  |
| 19 | 99 | File > Load workspace file > Compressed | `Load compressed workspace file <p0>` |  | nom de fichier « File path » | — |  |
| 20 | 100 | File > Save workspace file > Compressed | `Save all workspaces compressed to <p0>` |  | expression chaîne « File path » | — |  |
| 21 | 101 | Write > Range | `Modify range at <p0> with size <p1> to <p2>` |  | expression numérique « Position » ; expression numérique « Size » ; expression numérique « New value » | — |  |
| 22 | 102 | Write > Short | `Write short <p1> to <p0>` |  | expression numérique « Position » ; expression numérique « Value » | — |  |
| 23 | 103 | Write > Entity | `Write entity at <p0> from <p1> with size <p2>` |  | expression numérique « Position » ; expression numérique « Source position » ; expression numérique « Size » | — |  |
| 24 | 104 | Settings > Use big-endian | `Use big endian` |  |  | — |  |
| 25 | 105 | Settings > Use little-endian | `Use little endian` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Read > Byte > Unsigned | `Byte(` |  | nombre « Position » | — |  |
| 1 | 81 | Read > Byte > Signed | `SignedByte(` |  | nombre « Position » | — |  |
| 2 | 82 | Read > Integer > Unsigned | `Integer(` |  | nombre « Position » | — |  |
| 3 | 83 | Read > String > With size | `String$(` |  | nombre « Position » ; nombre « Size » → chaîne | — |  |
| 4 | 84 | Read > String > Null terminated | `TerminatedString$(` |  | nombre « Position » → chaîne | — |  |
| 5 | 85 | Combine > X/Y coordinates | `CombineXY(` |  | nombre « X » ; nombre « Y » | — |  |
| 6 | 86 | Combine > X/Y/Z coordinates | `CombineXYZ(` |  | nombre « X » ; nombre « Y » ; nombre « Z » | — |  |
| 7 | 87 | Read > Float | `Float(` |  | nombre « Position » | — |  |
| 8 | 88 | Read > Short > Unsigned | `Short(` |  | nombre « Position » | — |  |
| 9 | 89 | Read > Short > Signed | `SignedShort(` |  | nombre « Position » | — |  |
| 10 | 90 | Get array size | `Size(` |  |  | — |  |
| 11 | 91 | Get number of workspaces | `WorkspaceCount(` |  |  | — |  |
| 12 | 92 | Read > Integer > Signed | `SignedInteger(` |  | nombre « Position » | — |  |
