# Extension Int64

- Fichier : `Int64.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stored number comparisons > Stored number is equal to... | `<objet> : Stored number = <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 1 | -82 | Stored number comparisons > Stored number is different to... | `<objet> : Stored number <> <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 2 | -83 | Stored number comparisons > Stored number is greater than... | `<objet> : Stored number > <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 3 | -84 | Stored number comparisons > Stored number is less than... | `<objet> : Stored number < <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 4 | -85 | Stored number comparisons > Stored number is greater or equal to... | `<objet> : Stored number >= <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 5 | -86 | Stored number comparisons > Stored number is less or equal to... | `<objet> : Stored number <= <p0>` |  | expression chaîne « Enter 64 bit integer (as string » | — |  |
| 6 | -87 | Comparisons > Equals... | `<objet> : <p0> = <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 7 | -88 | Comparisons > Not equal... | `<objet> : <p0> <> <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 8 | -89 | Comparisons > Greater than... | `<objet> : <p0> > <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 9 | -90 | Comparisons > Less than... | `<objet> : <p0> < <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 10 | -91 | Comparisons > Greater or equal... | `<objet> : <p0> >= <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 11 | -92 | Comparisons > Less or equal... | `<objet> : <p0> <= <p1>` |  | expression chaîne « Enter 64 bit integer (as string) » ; expression chaîne « Enter 64 bit integer (as string) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set stored number | `Set stored number to <p0>` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 1 | 81 | Stored value > Add | `Add <p0> to stored number` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 2 | 82 | Stored value > Subtract | `Subtract <p0> from stored number` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 3 | 83 | Stored value > Multiply | `Multiply stored number by <p0>` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 4 | 84 | Stored value > Divide | `Divide stored number by <p0>` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 5 | 85 | Stored value > Modulus | `Mod stored number by <p0>` |  | expression chaîne « Enter 64 bit integer (as string) » | — |  |
| 6 | 86 | Stored value > Power | `Power stored number by <p0>` |  | expression numérique « Enter positive integer to power by » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get stored number (string) | `Stored$(` |  | → chaîne | — |  |
| 1 | 81 | Get stored number (truncated 32 bit int) | `Stored(` |  |  | — |  |
| 2 | 82 | Add | `Add$(` |  | chaîne ; chaîne → chaîne | — |  |
| 3 | 83 | Subtract | `Sub$(` |  | chaîne ; chaîne → chaîne | — |  |
| 4 | 84 | Multiply | `Mult$(` |  | chaîne ; chaîne → chaîne | — |  |
| 5 | 85 | Divide | `Div$(` |  | chaîne ; chaîne → chaîne | — |  |
| 6 | 86 | Modulus | `Modulus$(` |  | chaîne ; chaîne → chaîne | — |  |
| 7 | 87 | Power | `Power$(` |  | chaîne ; nombre → chaîne | — |  |
