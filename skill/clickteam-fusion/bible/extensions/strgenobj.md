# Extension strgenobj

- Fichier : `strgenobj.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | String Generated? | `<objet>: String Generated?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Generate String | `Generate String - Length(<p0>), Letters?(<p1>), Numbers?(<p2>), Symbols?(<p3>)` |  | expression numérique « Length Of String - (In Characters) » ; expression numérique « Include Letters? - (0 = No, 1 = Yes) » ; expression numérique « Include Numbers? - (0 = No, 1 = Yes) » ; expression numérique « Include Symbols? - (0 = No, 1 = Yes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Last Generated String | `GetLastGeneratedString$(` |  | → chaîne | — |  |
