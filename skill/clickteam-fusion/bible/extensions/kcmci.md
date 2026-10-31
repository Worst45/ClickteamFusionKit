# Extension kcmci

- Fichier : `kcmci.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to returned number | `Return value<p0>` | Valeur de retour <p0> | (paramètres non fiables) | — |  |
| 1 | -82 | Compare to returned string | `Return string<p0>` | Chaîne de retour <p0> | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Send a command | `Send <p0>` | Envoyer <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Return value | `Return(` | Valeur de retour |  | — |  |
| 1 | 81 | Return string | `Return string$(` | Chaîne de retour |  | — |  |
| 2 | 82 | Last error number | `Last Error(` | Dernier numéro de message d'erreur |  | — |  |
