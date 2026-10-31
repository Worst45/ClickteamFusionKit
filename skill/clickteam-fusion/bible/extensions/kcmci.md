# Extension kcmci

- File: `kcmci.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to returned number | `Return value<p0>` | Valeur de retour <p0> | (unreliable parameters) | — |  |
| 1 | -82 | Compare to returned string | `Return string<p0>` | Chaîne de retour <p0> | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Send a command | `Send <p0>` | Envoyer <p0> | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Return value | `Return(` | Valeur de retour |  | — |  |
| 1 | 81 | Return string | `Return string$(` | Chaîne de retour |  | — |  |
| 2 | 82 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  | — |  |
