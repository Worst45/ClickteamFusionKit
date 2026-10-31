# Extension diction

- Fichier : `diction.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Word exists | `<objet>: Word <p0> exists` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add word | `<objet>: Add word <p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Remove word | `<objet>: Remove word <p0>` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Remove all words | `<objet>: Remove all words` |  |  | — |  |
| 3 | 83 | File > Save as CSV | `<objet>: Save as CSV <p0>` |  | (paramètres non fiables) | — |  |
| 4 | 84 | File > Load from CSV | `<objet>: Load from CSV <p0>` |  | (paramètres non fiables) | — |  |
| 5 | 85 | File > Save as MMF Array | `<objet>: Save as MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | File > Load from MMF Array | `<objet>: Load from MMF Array <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | File > Save as Dynamic Array | `<objet>: Save as Dynamic Array <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | File > Load from Dynamic Array | `<objet>: Load from Dynamic Array <p0>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | File > Save as INI | `<objet>: Save as INI <p0>` |  | (paramètres non fiables) | — |  |
| 10 | 90 | File > Load from INI | `<objet>: Load from INI <p0>` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Settings > Hash Table > Set table size | `<objet>: Set table size to <p0>` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Settings > String Comparisons > Case Insensitive (A == a) | `<objet>: Comparisons are case insensitive` |  |  | — |  |
| 13 | 93 | Settings > String Comparisons > Case Sensitive (A < a) | `<objet>: Comparisons are case sensitive` |  |  | — |  |
| 14 | 94 | Settings > Search Mode > Literal | `<objet>: Disable wildcards` |  |  | — |  |
| 15 | 95 | Settings > Search Mode > Wildcards | `<objet>: Enable wildcards` |  |  | — |  |
| 16 | 96 | Settings > Duplicate Words > Disallow duplicates | `<objet>: Disallow duplicates` |  |  | — |  |
| 17 | 97 | Settings > Duplicate Words > Allow duplicates | `<objet>: Allow duplicates` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of words | `countWords(` |  |  | — |  |
| 1 | 81 | Get hash table size | `tableSize(` |  |  | — |  |
