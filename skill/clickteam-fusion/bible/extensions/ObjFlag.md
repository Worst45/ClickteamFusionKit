# Extension ObjFlag

- Fichier : `ObjFlag.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set flag | `Set flag <p1> of <p0> to <p2>` |  | objet « Object » ; expression numérique « Flag (0-31) » ; expression numérique « Value (0-1) » | — |  |
| 1 | 81 | Set all flags | `Set flags of <p0> to <p1>` |  | objet « Object » ; expression numérique « Flags (bitmask) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get all flags | `Flags(` |  | nombre « Fixed value » | — |  |
