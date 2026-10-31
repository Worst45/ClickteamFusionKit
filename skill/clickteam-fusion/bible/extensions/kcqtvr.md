# Extension kcqtvr

- File: `kcqtvr.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Mouse clicks within the QuickTime VR Window ? | `21User <p0> within <p1>` | L'utilisateur <p0> au milieu de <object> | (unreliable parameters) | — |  |
| 1 | -82 | Check whether a file is open ? | `<object>: a file is opened` | <object>: Un fichier est ouvert |  | — |  |
| 2 | -83 | Is visible ? | `<object>: visible` | <object>: visible |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play > A new file | `New file <p0>` | Nouveau fichier <p0> | (unreliable parameters) | — |  |
| 1 | 81 | Play > A new file via a file selector | `New file from selector` | Nouveau fichier avec sélecteur |  | — |  |
| 2 | 82 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 3 | 83 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 4 | 84 | Position > Set Position | `Set position at <p0>` | Fixer la position à <p0> | (unreliable parameters) | — |  |
| 5 | 85 | Position > Set X Position | `Set X coordinate at <p0>` | Fixer la coordonnée en X à <p0> | (unreliable parameters) | — |  |
| 6 | 86 | Position > Set Y Position | `Set X coordinate at <p0>` | Fixer la coordonnée en X à <p0> | (unreliable parameters) | — |  |
| 7 | 87 | Size > Set Horizontal size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) | — |  |
| 8 | 88 | Size > Set Vertical size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | X position | `QTVR X(` | Position en X |  | — |  |
| 1 | 81 | Y position | `QTVR Y(` | Position en Y |  | — |  |
| 2 | 82 | Horizontal size | `QTVR X Size(` | Ligne horizontale |  | — |  |
| 3 | 83 | Vertical size | `QTVR Y Size(` | Taille verticale |  | — |  |
| 4 | 84 | Last error number | `QTVR Error(` | Dernier numéro de message d'erreur |  | — |  |
