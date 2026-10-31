# Extension gstorex

- Fichier : `gstorex.mfx` — extension tierce (fournie avec un projet téléchargé)
- Nom(s) affiché(s) dans les projets : « Global Store X »
- Usage dans le corpus : 8 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare value | `<objet>: Integer number <p0> <p1>` |  | expression numérique « (remember base) » ; comparaison numérique « Compare with... » | — |  |
| 1 | -82 | Compare bool | `<objet>: Bool number <p0> <p1>` |  | expression numérique « (remember base) » ; comparaison numérique « Compare with... » | — |  |
| 2 | -83 | Compare short | `<objet>: Short number <p0> <p1>` |  | expression numérique « (remember base) » ; comparaison numérique « Compare with... » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Integers > Set integer | `Set integer number <p0> to <p1>` |  | expression numérique « (remember base) » ; expression numérique « Set integer » | 3 (1 proj.) |  |
| 1 | 81 | Bools > Set bool | `Set bool number <p0> to <p1>` |  | expression numérique « (remember base) » ; expression numérique « Set bool » | — |  |
| 2 | 82 | Strings > Set string | `Set string number <p0> to <p1>` |  | expression numérique « (remember base) » ; expression chaîne « Set string » | — |  |
| 3 | 83 | Integers > Add integer | `Add integer <p0> with <p1>` |  | expression numérique « (remember base) » ; expression numérique « Add integer » | — |  |
| 4 | 84 | Bools > Set range | `Set bools from <p0> to <p1> to <p2>` |  | expression numérique « From... (remember base) » ; expression numérique « To... (remember base) » ; expression numérique « Set range » | — |  |
| 5 | 85 | Strings > Add string | `Add string <p0> with <p1>` |  | expression numérique « Add string » ; expression chaîne « Add string » | — |  |
| 6 | 86 | Integers > Sub integer | `Sub integer <p0> with <p1>` |  | expression numérique « (remember base) » ; expression numérique « Sub integer » | — |  |
| 7 | 87 | Bools > Clear | `Clear array of bools` |  |  | — |  |
| 8 | 88 | Integers > Set range | `Set integers from <p0> to <p1> to <p2>` |  | expression numérique « From... (remember base) » ; expression numérique « To... (remember base) » ; expression numérique « Set range » | — |  |
| 9 | 89 | Strings > Set range | `Set strings from <p0> to <p1> to <p2>` |  | expression numérique « From... (remember base) » ; expression numérique « To... (remember base) » ; expression chaîne « Set range » | — |  |
| 10 | 90 | Integers > Clear | `Clear array of integers` |  |  | — |  |
| 11 | 91 | Integers > Resize | `Resize array of integers to <p0>` |  | expression numérique « Size » | — |  |
| 12 | 92 | Integers > Expand | `Expand array of integers to <p0>` |  | expression numérique « Size » | — |  |
| 13 | 93 | Strings > Clear | `Clear array of strings` |  |  | — |  |
| 14 | 94 | Strings > Resize | `Resize array of strings to <p0>` |  | expression numérique « Size » | — |  |
| 15 | 95 | Strings > Expand | `Expand array of strings to <p0>` |  | expression numérique « Size » | — |  |
| 16 | 96 | Bools > Resize | `Resize array of bools to <p0>` |  | expression numérique « Size » | — |  |
| 17 | 97 | Bools > Expand | `Expand array of bools to <p0>` |  | expression numérique « Size » | — |  |
| 18 | 98 | Integers > Save values (ini) | `Save values to <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 19 | 99 | Strings > Save strings (ini) | `Save strings to <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 20 | 100 | Bools > Save bools (ini) | `Save bools to <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 21 | 101 | Save all (ini) | `Save all to <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 22 | 102 | Integers > Load values (ini) | `Load values from <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 23 | 103 | Strings > Load strings (ini) | `Load strings from <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 24 | 104 | Bools > Load bools (ini) | `Load bools from <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 25 | 105 | Load all (ini) | `Load all from <p0>, group <p1> (ini)` |  | nom de fichier « All files » ; expression chaîne « Select groupname » | — |  |
| 26 | 106 | Integers > Save values (binary) | `Save values to <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 27 | 107 | Strings > Save strings (binary) | `Save strings to <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 28 | 108 | Bools > Save bools (binary) | `Save bools to <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 29 | 109 | Save all (binary) | `Save all to <p0> (binary)` |  | nom de fichier « All files » | 1 (1 proj.) |  |
| 30 | 110 | Integers > Load values (binary) | `Load values from <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 31 | 111 | Strings > Load strings (binary) | `Load strings from <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 32 | 112 | Bools > Load bools (binary) | `Load bools from <p0> (binary)` |  | nom de fichier « All files » | — |  |
| 33 | 113 | Load all (binary) | `Load all from <p0> (binary)` |  | nom de fichier « All files » | 1 (1 proj.) |  |
| 34 | 114 | Shorts > Set short | `Set short number <p0> to <p1>` |  | expression numérique « (remember base) » ; expression numérique « Set short » | — |  |
| 35 | 115 | Shorts > Add short | `Add short <p0> with <p1>` |  | expression numérique « (remember base) » ; expression numérique « Add short » | — |  |
| 36 | 116 | Shorts > Sub short | `Sub short <p0> with <p1>` |  | expression numérique « (remember base) » ; expression numérique « Sub short » | — |  |
| 37 | 117 | Shorts > Set range | `Set shorts from <p0> to <p1> to <p2>` |  | expression numérique « From... (remember base) » ; expression numérique « To... (remember base) » ; expression numérique « Set range » | — |  |
| 38 | 118 | Shorts > Clear | `Clear array of shorts` |  |  | — |  |
| 39 | 119 | Shorts > Resize | `Resize array of shorts to <p0>` |  | expression numérique « Size » | — |  |
| 40 | 120 | Shorts > Expand | `Expand array of shorts to <p0>` |  | expression numérique « Size » | — |  |
| 41 | 121 | Shorts > Save shorts (ini) | `Save shorts to <p0>, group <p1> (ini)` |  | nom de fichier « Save shorts (ini) » | — |  |
| 42 | 122 | Shorts > Load shorts (ini) | `Load shorts from <p0>, group <p1> (ini)` |  | nom de fichier « Load shorts (ini) » | — |  |
| 43 | 123 | Shorts > Save shorts (binary) |  |  | nom de fichier « Save shorts (binary) » | — |  |
| 44 | 124 | Shorts > Load shorts (binary) |  |  | nom de fichier « Load shorts (binary) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Integers > Get integer | `GetInt(` |  | nombre | 3 (1 proj.) |  |
| 1 | 81 | Bools > Get bool | `GetBool(` |  | nombre | — |  |
| 2 | 82 | Strings > Get string | `GetString$(` |  | nombre → chaîne | — |  |
| 3 | 83 | Integers > Get valuearray size | `GetValueSize(` |  |  | — |  |
| 4 | 84 | Strings > Get stringarray size | `GetStringSize(` |  |  | — |  |
| 5 | 85 | Integers > Get value base | `GetValueBase(` |  |  | — |  |
| 6 | 86 | Strings > Get string base | `GetStringBase(` |  |  | — |  |
| 7 | 87 | Bools > Get boolarray size | `GetBoolSize(` |  |  | — |  |
| 8 | 88 | Bools > Get bool base | `GetBoolBase(` |  |  | — |  |
| 9 | 89 | Shorts > Get short | `GetShort(` |  | nombre | — |  |
| 10 | 90 | Shorts > Get shortarray size | `GetShortSize(` |  |  | — |  |
| 11 | 91 | Shorts > Get short base | `GetShortBase(` |  |  | — |  |
