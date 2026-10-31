# Extension DlgBox

- File: `DlgBox.mfx` — installed with Fusion
- Name(s) shown in projects: “DialogBox”, “Boîte de Dialogue”
- Usage in the corpus: 36 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Dialog > Is Opened | `DialogBox: This object is not compatible with this version of MMF` | Est ouvert |  | 2 (2 proj.) | `DialogBox Features: Event ID -81, 0 Parameters` |
| 3 | -84 | Dialog > Closed by OK | `<object>: closed by OK` | <object>: fermé par OK | (checked by hand) | 7 (7 proj.) | `DialogBox Example: Event ID -84, 0 Parameters` |
| -54 | -27 | ? | ? |  |  | 1 (1 proj.) | `Alterable Value A of DialogBox Features = 1` |
| 4 | -85 | ? | ? |  |  | 1 (1 proj.) | `DialogBox Example: Event ID -85, 0 Parameters` |
| 11 | -92 | ? | ? |  |  | 1 (1 proj.) | `DialogBox: Event ID -92, 1 Parameters { "Cancel" }` |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialog Box > Open Modal | `Open modal` | Ouvrir modal |  | 6 (6 proj.) |  |
| -49 | 31 | ? | ? |  |  | 1 (1 proj.) | `DialogBox Features : Set Alterable Value A to 1` |
| 1 | 81 | ? | ? |  |  | 3 (2 proj.) | `DialogBox Features : Event ID 81, 0 Parameters` |
| 2 | 82 | ? | ? |  |  | 5 (2 proj.) | `DialogBox Example : Event ID 82, 0 Parameters` |
| 28 | 108 | ? | ? |  |  | 2 (1 proj.) | `DialogBox Features : Event ID 108, 3 Parameters { "Sld1", 0, 100 }` |
| 29 | 109 | ? | ? |  |  | 3 (2 proj.) | `DialogBox Features : Event ID 109, 2 Parameters { "Pgb1", Expression ID 108("DialogBox Features")"Pgb1") + 1 }` |
| 30 | 110 | ? | ? |  |  | 2 (2 proj.) | `DialogBox Features : Event ID 110, 3 Parameters { "Pgb1", 0, 100 }` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dialog > Title | `DialogBox: This object is not compatible with this version of MMF` | Titre | → string | — |  |
| 28 | 108 | ? | ? |  |  | 2 (1 proj.) | `Expression ID 108("DialogBox Features")` |
