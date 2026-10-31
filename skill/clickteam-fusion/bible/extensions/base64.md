# Extension base64

- Fichier : `base64.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Evaluated condition | `<objet>: <p0> == <p1>` |  | expression numérique « First number » ; expression numérique « Second number » | — |  |
| 1 | -82 | Triggered condition | `<objet> : On trigger` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | This is a submenu > Trigger condition | `Trigger condition` |  |  | — |  |
| 1 | 81 | Dummy action | `Dummy action` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Encode | `encode$(` |  | chaîne « String to encode » → chaîne | — |  |
| 1 | 81 | Decode | `decode$(` |  | chaîne « String to decode » → chaîne | — |  |
