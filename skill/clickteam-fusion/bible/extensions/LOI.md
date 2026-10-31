# Extension LOI

- Fichier : `LOI.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | isListEmpty | `<objet>: isListEmpty` |  |  | — |  |
| 1 | -82 | onError | `<objet> : On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add to list | `Add <p0> to list` |  | expression numérique « Value » | — |  |
| 1 | 81 | Delete from list | `Delete item <p0> from list` |  | expression numérique « Index » | — |  |
| 2 | 82 | Change item | `Change item <p1> to <p0>` |  | expression numérique « Value » ; expression numérique « Index » | — |  |
| 3 | 83 | Insert item | `Insert value <p0> at <p1>` |  | expression numérique « Value » ; expression numérique « Index » | — |  |
| 4 | 84 | Reset | `Reset` |  |  | — |  |
| 5 | 85 | Sort > ASC | `Sort Asc` |  |  | — |  |
| 6 | 86 | Sort > DESC | `Sort Desc` |  |  | — |  |
| 7 | 87 | Swap two items | `Swap <p0> with <p1>` |  | expression numérique « Index » ; expression numérique « Index » | — |  |
| 8 | 88 | Append File to List | `Append <p0> to List` |  | expression chaîne « Path to file » | — |  |
| 9 | 89 | Save List to File | `Save List to <p0>` |  | expression chaîne « Path to file » | — |  |
| 10 | 90 | Load List from File | `Load List from <p0>` |  | expression chaîne « Path to file » | — |  |
| 11 | 91 | Increment item | `Increment item <p0>` |  | expression numérique « Index » | — |  |
| 12 | 92 | Decrement item | `Decrement item <p0>` |  | expression numérique « Index » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Size of list | `GetSize(` |  |  | — |  |
| 1 | 81 | Get last error | `GetError$(` |  | → chaîne | — |  |
| 2 | 82 | Get value from list | `GetValue(` |  | nombre « Index » | — |  |
| 3 | 83 | Get value from list and delete it | `GetValueD(` |  | nombre « Index » | — |  |
| 4 | 84 | Get last value from list | `GetLast(` |  |  | — |  |
