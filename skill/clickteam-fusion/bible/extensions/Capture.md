# Extension Capture

- Fichier : `Capture.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Screen Capture object »
- Usage dans le corpus : 6 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Output > Set Filename | `Set filename to <p0>` | Fixer le nom de fichier à <p0> | (paramètres non fiables) | — |  |
| 1 | 81 | Output > Set Filename from Selector | `Set filename from selector` | Fixer le nom de fichier avec un sélecteur |  | 2 (1 proj.) | `Screen Capture object : Event ID 81, 0 Parameters` |
| 2 | 82 | Output > Increment filename | `Increment filename` | Incrémenter le nom de fichier |  | — |  |
| 3 | 83 | Capture > Screen | `Capture Screen` | Capturer l'écran |  | — |  |
| 4 | 84 | Capture > Active Window | `Capture Active Window` | Capturer la fenêtre active |  | — |  |
| 5 | 85 | Capture > Frame | `Capture Frame Area` | Capturer la surface de la scène |  | 2 (1 proj.) | `Screen Capture object : Event ID 85, 0 Parameters` |
| 6 | 86 | Capture > Set Area Origin | `Set Area Origin to (<p0>, <p1>)` | Fixer la position de la zone à (<p0>, <p1>) | (paramètres non fiables) | — |  |
| 7 | 87 | Capture > Set Area Dimensions | `Set Area Dimensions to (<p0>, <p1>)` | Fixer les dimensions de la zone à (<p0>, <p1>) | (paramètres non fiables) | — |  |
| 8 | 88 | Automatic capture > Start | `Start automatic capture` | Lancer la capture automatique |  | — |  |
| 9 | 89 | Automatic capture > Stop | `Stop automatic capture` | Arrêter la capture automatique |  | — |  |
| 10 | 90 | Output > Set output to clipboard | `Set output to clipboard` | Diriger la sortie vers le presse-papier |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `Filename$(` |  |  | 2 (1 proj.) | `Expression ID 80("Screen Capture object")` |
