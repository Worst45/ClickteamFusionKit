# Extension DlgBox

- Fichier : `DlgBox.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « DialogBox », « Boîte de Dialogue »
- Usage dans le corpus : 36 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Dialog > Is Opened | `DialogBox: This object is not compatible with this version of MMF` | Est ouvert |  | 2 (2 proj.) | `DialogBox Features: Event ID -81, 0 Parameters` |
| -54 | -27 | ? | ? |  |  | 1 (1 proj.) | `Alterable Value A of DialogBox Features = 1` |
| 3 | -84 | ? | ? |  |  | 7 (7 proj.) | `DialogBox Example: Event ID -84, 0 Parameters` |
| 4 | -85 | ? | ? |  |  | 1 (1 proj.) | `DialogBox Example: Event ID -85, 0 Parameters` |
| 11 | -92 | ? | ? |  |  | 1 (1 proj.) | `DialogBox: Event ID -92, 1 Parameters { "Cancel" }` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialog Box > Open Modal | `DialogBox: This object is not compatible with this version of MMF` | Ouvrir modal |  | 6 (6 proj.) |  |
| -49 | 31 | ? | ? |  |  | 1 (1 proj.) | `DialogBox Features : Set Alterable Value A to 1` |
| 1 | 81 | ? | ? |  |  | 3 (2 proj.) | `DialogBox Features : Event ID 81, 0 Parameters` |
| 2 | 82 | ? | ? |  |  | 5 (2 proj.) | `DialogBox Example : Event ID 82, 0 Parameters` |
| 28 | 108 | ? | ? |  |  | 2 (1 proj.) | `DialogBox Features : Event ID 108, 3 Parameters { "Sld1", 0, 100 }` |
| 29 | 109 | ? | ? |  |  | 3 (2 proj.) | `DialogBox Features : Event ID 109, 2 Parameters { "Pgb1", Expression ID 108("DialogBox Features")"Pgb1") + 1 }` |
| 30 | 110 | ? | ? |  |  | 2 (2 proj.) | `DialogBox Features : Event ID 110, 3 Parameters { "Pgb1", 0, 100 }` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialog > Title | `DialogBox: This object is not compatible with this version of MMF` | Titre | → chaîne | — |  |
| 28 | 108 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 108("DialogBox Features")` |
