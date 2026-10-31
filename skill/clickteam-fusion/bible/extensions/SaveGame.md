# Extension SaveGame

- Fichier : `SaveGame.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On create and load object (type) | `<objet>: On create and load object - type <p0>` |  | expression numérique « Object type » | — |  |
| 1 | -82 | On create and load object | `<objet>: On create and load object` |  |  | — |  |
| 2 | -83 | On save file successful | `<objet>: On save file successful` |  |  | — |  |
| 3 | -84 | On load file successful | `<objet>: On load file successful` |  |  | — |  |
| 4 | -85 | On save file failed | `<objet>: On save file failed` |  |  | — |  |
| 5 | -86 | On load file failed | `<objet>: On load file failed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Save object to memory | `Save <p0> as object type <p1> to memory` |  | objet « Choose an ACTIVE OBJECT » ; expression numérique « Object type » | — |  |
| 1 | 81 | Save memory to disk | `Save memory to <p0>` |  | nom de fichier « Filename » | — |  |
| 2 | 82 | Load file into memory | `Load <p0> to memory` |  | nom de fichier « Filename » | — |  |
| 3 | 83 | Create and load objects from memory | `Create and load objects from memory` |  |  | — |  |
| 4 | 84 | Clear memory (see docs) | `Clear memory` |  |  | — |  |
| 5 | 85 | Set string | `Set string <p0> to <p1>` |  | expression chaîne « String name » ; expression chaîne « String » | — |  |
| 6 | 86 | Set value | `Set value <p0> to <p1>` |  | expression chaîne « Value name » ; expression numérique « Value » | — |  |
| 7 | 87 | On create and load object: Setup created object | `Setup <p0>` |  | objet « Choose an ACTIVE OBJECT » | — |  |
| 8 | 88 | Set auto-clear on | `Set auto-clear on` |  |  | — |  |
| 9 | 89 | Set auto-clear off | `Set auto-clear off` |  |  | — |  |
| 10 | 90 | Setup existing object from memory | `Setup <p0> from memory` |  | objet | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | On create and load object: Get type | `GetObjType(` |  |  | — |  |
| 1 | 81 | Get string | `GetStr$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Get value | `GetVal(` |  | chaîne | — |  |
| 3 | 83 | On create and load object: Get fixed value (of original object) | `GetFixed(` |  |  | — |  |
