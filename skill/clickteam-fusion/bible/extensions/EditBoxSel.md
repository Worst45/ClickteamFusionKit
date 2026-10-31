# Extension EditBoxSel

- Fichier : `EditBoxSel.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set caret/selection | `Set selection of <p0> to (<p1>,<p2>)` |  | objet « Edit Box » ; expression numérique « Selection start (0 = Whole text) » ; expression numérique « Selection end (-1 = Whole text if start is 0, else same as start) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get caret/selection start | `SelStart(` |  | nombre « Fixed value of Edit Box » | — |  |
| 1 | 81 | Get selection end | `SelEnd(` |  | nombre « Fixed value of Edit Box » | — |  |
