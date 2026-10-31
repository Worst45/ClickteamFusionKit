# Extension sfunc

- Fichier : `sfunc.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Loop | `<objet> On Loop <p0>` |  | expression chaîne « Loop Name » | — |  |
| 1 | -82 | On Local Function | `<objet> On Local Function <p0>` |  | expression chaîne « Local Function Name » | — |  |
| 2 | -83 | On Global Function | `<objet> On Global Function <p0>` |  | expression chaîne « Global Function Name » | — |  |
| 3 | -84 | Error? | `<objet> Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Call Loop (start,end,step) | `Call Loop <p0> from <p1> to <p2> step <p3>` |  | expression chaîne « Loop Name » ; expression numérique « Start Value » ; expression numérique « End Value » ; expression numérique « Step Value » | — |  |
| 1 | 81 | Call Local Function | `Call Local Function <p0>` |  | expression chaîne « Local Function Name » | — |  |
| 2 | 82 | Call Global Function | `Call Global Function <p0>-><p1>` |  | expression chaîne « Target Object Name » ; expression chaîne « Global Function Name » | — |  |
| 3 | 83 | Clear Last Error | `Clear Last Error` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Loop Index | `Index(` |  | chaîne | — |  |
| 1 | 81 | Expression | `ProcessExpression$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | IF Expression (test,true,false) | `IF Expression(` |  | chaîne ; chaîne ; chaîne → chaîne | — |  |
| 3 | 83 | Quote (string) | `Quote(` |  | chaîne → chaîne | — |  |
| 4 | 84 | Get Error Code | `Err(` |  |  | — |  |
| 5 | 85 | Get Error Message | `ErrMsg(` |  | → chaîne | — |  |
