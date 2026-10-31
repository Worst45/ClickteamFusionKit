# Extension fts

- Fichier : `fts.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set time/date data | `Set time/date data: <p0> , <p1> , <p2> , <p3> , <p4> ,  <p5>` |  | expression numérique « Year 1900 -> » ; expression numérique « Month » ; expression numérique « Day of month » ; expression numérique « Hour 0-24 » ; expression numérique « Minute » ; expression numérique « Secound » | — |  |
| 1 | 81 | Set local | `Set local to <p0>` |  | expression chaîne « Country code » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Formatted time string small | `ftss$(` |  | chaîne → chaîne | — |  |
| 1 | 81 | Formatted time string | `fts$(` |  | chaîne ; nombre ; nombre ; nombre ; nombre ; nombre ; nombre → chaîne | — |  |
