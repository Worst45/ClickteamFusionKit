# Extension kcqtvr

- Fichier : `kcqtvr.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Mouse clicks within the QuickTime VR Window ? | `21User <p0> within <p1>` | L'utilisateur <p0> au milieu de <objet> | (paramètres non fiables) | — |  |
| 1 | -82 | Check whether a file is open ? | `<objet>: a file is opened` | <objet>: Un fichier est ouvert |  | — |  |
| 2 | -83 | Is visible ? | `<objet>: visible` | <objet>: visible |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Play > A new file | `New file <p0>` | Nouveau fichier <p0> | (paramètres non fiables) | — |  |
| 1 | 81 | Play > A new file via a file selector | `New file from selector` | Nouveau fichier avec sélecteur |  | — |  |
| 2 | 82 | Visibility > Make Object Invisible | `Hide` | Cacher |  | — |  |
| 3 | 83 | Visibility > Make Object Reappear | `Show` | Montrer |  | — |  |
| 4 | 84 | Position > Set Position | `Set position at <p0>` | Fixer la position à <p0> | (paramètres non fiables) | — |  |
| 5 | 85 | Position > Set X Position | `Set X coordinate at <p0>` | Fixer la coordonnée en X à <p0> | (paramètres non fiables) | — |  |
| 6 | 86 | Position > Set Y Position | `Set X coordinate at <p0>` | Fixer la coordonnée en X à <p0> | (paramètres non fiables) | — |  |
| 7 | 87 | Size > Set Horizontal size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Size > Set Vertical size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | X position | `QTVR X(` | Position en X |  | — |  |
| 1 | 81 | Y position | `QTVR Y(` | Position en Y |  | — |  |
| 2 | 82 | Horizontal size | `QTVR X Size(` | Ligne horizontale |  | — |  |
| 3 | 83 | Vertical size | `QTVR Y Size(` | Taille verticale |  | — |  |
| 4 | 84 | Last error number | `QTVR Error(` | Dernier numéro de message d'erreur |  | — |  |
