# Extension Keyboard

- Fichier : `Keyboard.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Upon key down | `<objet>: Upon key <p0> down` |  | expression numérique « Key number » | — |  |
| 1 | -82 | Upon key up | `<objet>: Upon key <p0> up` |  | expression numérique « Key number » | — |  |
| 2 | -83 | Repeat while key is pressed | `<objet>: Repeat while key <p0> is pressed` |  | expression numérique « Key number » | — |  |
| 3 | -84 | Upon any key down | `<objet>: Upon any key down` |  |  | — |  |
| 4 | -85 | Upon any key up | `<objet>: Upon any key up` |  |  | — |  |
| 5 | -86 | Repeat while any key is pressed | `<objet>: Repeat while any key is pressed` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Last key pressed | `LastKeyPressed(` |  |  | — |  |
| 1 | 81 | Last key released | `LastKeyReleased(` |  |  | — |  |
| 2 | 82 | Key string | `KeyString$(` |  | nombre « Key value » → chaîne | — |  |
| 3 | 83 | Key value | `KeyValue(` |  | chaîne « Key string » | — |  |
