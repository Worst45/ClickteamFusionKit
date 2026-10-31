# Extension String

- Fichier : `String.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Loop Trigger | `<objet>: Loop trigger #<p0>` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Compare Loop Position... | `<objet>: Loop #<p0> position <p1>` |  | (paramètres non fiables) | — |  |
| 2 | -83 | Loop is Infinite | `<objet>: Loop #<p0> is Infinite` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start Loop | `Start Loop #<p0> for <p1> loop(s).` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Single Loop | `Trigger Loop #<p0> Once.` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Stop Loop | `Stop Loop #<p0>.` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Advanced > Adjust Loop Position | `Adjust Loop #<p0>'s Position to <p1>.` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Advanced > Redraw Frame | `Redraw Frame on Screen.` |  |  | — |  |
| 5 | 85 | Advanced > Set Loop Pause | `Set Loop Pause to <p0> millisecond(s).` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Loop Step | `Loop Step(` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Get Number of Loop Steps | `Number of Steps(` |  | (paramètres non fiables) | — |  |
