# Extension MoveSafely2

- Fichier : `MoveSafely2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Safety procedure | `On Safety` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Safety Procedure > Prepare | `Prepare Safety` |  |  | — |  |
| 1 | 81 | Safety Procedure > Commence | `Commence Safety Procedure` |  |  | — |  |
| 2 | 82 | Safety Procedure > Stop ( Push out of obstacle ) | `Stop Safety Procedure and push out` |  |  | — |  |
| 3 | 83 | Add a new protected object/s | `Add object (<p0>) to protection` |  | objet « Select Object » ; expression numérique « Pixel Distance of each 'step' » | — |  |
| 4 | 84 | Safety Procedure > Stop ( Keep in obstacle        ) | `Stop Safety Procedure and keep in obstacle` |  |  | — |  |
| 6 | 86 | Release all objects | `Release protected objects` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current object X | `GetX` |  |  | — |  |
| 1 | 81 | Get current object Y | `GetY` |  |  | — |  |
| 2 | 82 | Get current object Fixed Value | `GetFixed(` |  |  | — |  |
| 3 | 83 | Get Number of loops | `Numberofobjects(` |  |  | — |  |
| 4 | 84 | Get loop index | `Getloopindex(` |  |  | — |  |
