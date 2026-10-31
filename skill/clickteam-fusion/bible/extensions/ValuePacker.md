# Extension ValuePacker

- Fichier : `ValuePacker.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is a specific bit set? | `<objet>: Bit <p0> is set` |  | expression numérique « Bit number (0-31) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set value | `Set value to <p0>` |  | expression numérique « Set value » | — |  |
| 1 | 81 | Pack n-bit value | `Pack <p1>-bit value <p0> at bit <p2>` |  | expression numérique « Set value » ; expression numérique « Number of bits (1-32) » ; expression numérique « Starting at bit (0-31) » | — |  |
| 2 | 82 | Set bit | `Set bit <p0>` |  | expression numérique « Bit number (0-31) » | — |  |
| 3 | 83 | Clear bit | `Clear bit <p0>` |  | expression numérique « Bit number (0-31) » | — |  |
| 4 | 84 | Toggle bit | `Toggle bit <p0>` |  | expression numérique « Bit number (0-31) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get value | `Value(` |  |  | — |  |
| 1 | 81 | Get packed n-bit value | `Packed Value(` |  | nombre « First bit » ; nombre « Number of bits » | — |  |
| 2 | 82 | Get bit | `Bit(` |  | nombre « Bit number » | — |  |
