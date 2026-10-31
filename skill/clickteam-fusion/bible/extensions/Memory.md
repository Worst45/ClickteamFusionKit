# Extension Memory

- Fichier : `Memory.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | This process > Write byte | `Write byte <p0> to <p1> in this process` |  | expression numérique « Byte to write » ; expression numérique « Address » | — |  |
| 1 | 81 | This process > Write short | `Write short <p0> to <p1> in this process` |  | expression numérique « Short to write » ; expression numérique « Address » | — |  |
| 2 | 82 | This process > Write integer | `Write integer <p0> to <p1> in this process` |  | expression numérique « Integer to write » ; expression numérique « Address » | — |  |
| 3 | 83 | This process > Write float | `Write float <p0> to <p1> in this process` |  | expression numérique « Float to write » ; expression numérique « Address » | — |  |
| 4 | 84 | This process > Write string | `Write string <p0> to <p1> in this process` |  | expression chaîne « String to write » ; expression numérique « Address » | — |  |
| 5 | 85 | This process > Write entity | `Write entity at <p0> with size <p1> to <p2> in this process` |  | expression numérique « Source address » ; expression numérique « Size » ; expression numérique « Destination address » | — |  |
| 6 | 86 | This process > Create thread | `Create thread at <p0> with parameter <p1>` |  | expression numérique « Address » ; expression numérique « Parameter » | — |  |
| 7 | 87 | Other processes > Open by name | `Open process <p0>` |  | expression chaîne « Process name » | — |  |
| 8 | 88 | Other processes > Close | `Close process` |  |  | — |  |
| 9 | 89 | Other processes > Write byte | `Write byte <p0> to <p1> in another process` |  | expression numérique « Byte to write » ; expression numérique « Address » | — |  |
| 10 | 90 | Other processes > Write short | `Write short <p0> to <p1> in another process` |  | expression numérique « Short to write » ; expression numérique « Address » | — |  |
| 11 | 91 | Other processes > Write integer | `Write integer <p0> to <p1> in another process` |  | expression numérique « Integer to write » ; expression numérique « Address » | — |  |
| 12 | 92 | Other processes > Write float | `Write float <p0> to <p1> in another process` |  | expression numérique « Float to write » ; expression numérique « Address » | — |  |
| 13 | 93 | Other processes > Write string | `Write string <p0> to <p1> in another process` |  | expression chaîne « String to write » ; expression numérique « Address » | — |  |
| 14 | 94 | Other processes > Write entity | `Write entity at <p0> with size <p1> to <p2> in another process` |  | expression numérique « Source address » ; expression numérique « Size » ; expression numérique « Destination address » | — |  |
| 15 | 95 | Other processes > Create thread | `Create thread at <p0> with parameter <p1> in another process` |  | expression numérique « Address » ; expression numérique « Parameter » | — |  |
| 16 | 96 | This process > Make memory executable | `Make memory at <p0> (size <p1>) executable in this process` |  | expression numérique « Address » ; expression numérique « Size » | — |  |
| 17 | 97 | Other processes > Make memory executable | `Make memory at <p0> (size <p1>) executable in another process` |  | expression numérique « Address » ; expression numérique « Size » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | This process > Read byte | `ReadByte(` |  | nombre « Address » | — |  |
| 1 | 81 | This process > Read short | `ReadShort(` |  | nombre « Address » | — |  |
| 2 | 82 | This process > Read integer | `ReadInteger(` |  | nombre « Address » | — |  |
| 3 | 83 | This process > Read float | `ReadFloat(` |  | nombre « Address » | — |  |
| 4 | 84 | This process > Read string | `ReadString$(` |  | nombre « Address » → chaîne | — |  |
| 5 | 85 | Other processes > Read byte | `ReadProcessByte(` |  | nombre « Address » | — |  |
| 6 | 86 | Other processes > Read short | `ReadProcessShort(` |  | nombre « Address » | — |  |
| 7 | 87 | Other processes > Read integer | `ReadProcessInteger(` |  | nombre « Address » | — |  |
| 8 | 88 | Other processes > Read float | `ReadProcessFloat(` |  | nombre « Address » | — |  |
| 9 | 89 | Other processes > Read string | `ReadProcessString$(` |  | nombre « Address » → chaîne | — |  |
| 10 | 90 | This process > Allocate memory | `Allocate(` |  | nombre « Size » | — |  |
| 11 | 91 | Other processes > Allocate memory | `ProcessAllocate(` |  | nombre « Size » | — |  |
