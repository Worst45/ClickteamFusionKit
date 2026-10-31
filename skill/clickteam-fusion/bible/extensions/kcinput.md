# Extension kcinput

- Fichier : `kcinput.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | OK Button Clicked | `<objet>: OK Button Clicked` |  |  | — |  |
| 1 | -82 | Cancel Button Clicked | `<objet>: Cancel Button Clicked` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialogs > Open Input String Dialog | `Open Input Dialog (String, Title=<p0>, Description=<p1>)` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Dialogs > Open Input Number Dialog | `Open Input Dialog (Number, Title=<p0>, Description=<p1>)` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Dialogs > Open Input Username and Password Dialog | `Open Input Dialog (Username/Password, Title=<p0>, Description=<p1>)` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Dialogs > Open Input Multiline Dialog | `Open Input Dialog (Multiline, Title=<p0>, Description=<p1>)` |  | (paramètres non fiables) | — |  |
| 4 | 84 | Dialogs > Open Input Multiline Dialog (With Horizontal Scrollbar) | `Open Input Dialog (Multiline+HS, Title=<p0>, Description=<p1>)` |  | (paramètres non fiables) | — |  |
| 5 | 85 | Change Control's values > Set Input String | `Set Input String to <p0>` |  | (paramètres non fiables) | — |  |
| 6 | 86 | Change Control's values > Set Input Number | `Set Input Number to <p0>` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Change Control's values > Set Input2 String (Password Box) | `Set Input2 String to <p0>` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Change Control's values > Set Input Character Limit | `Set Input Limit to <p0>` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Change Control's values > Set Input2 Character Limit (Password Box) | `Set Input2 Limit to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Input String | `Input$(` |  |  | — |  |
| 1 | 81 | Get Input Number | `Input(` |  |  | — |  |
| 2 | 82 | Get Input2 String (Password) | `Input Pass$(` |  |  | — |  |
