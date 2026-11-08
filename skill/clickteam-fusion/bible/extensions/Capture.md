# Extension Capture

- File: `Capture.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Output > Set Filename | `Set filename to <p0>` | Fixer le nom de fichier à <p0> | (unreliable parameters) |
| 1 | 81 | Output > Set Filename from Selector | `Set filename from selector` | Fixer le nom de fichier avec un sélecteur |  |
| 2 | 82 | Output > Increment filename | `Increment filename` | Incrémenter le nom de fichier |  |
| 3 | 83 | Capture > Screen | `Capture Screen` | Capturer l'écran |  |
| 4 | 84 | Capture > Active Window | `Capture Active Window` | Capturer la fenêtre active |  |
| 5 | 85 | Capture > Frame | `Capture Frame Area` | Capturer la surface de la scène |  |
| 6 | 86 | Capture > Set Area Origin | `Set Area Origin to (<p0>, <p1>)` | Fixer la position de la zone à (<p0>, <p1>) | (unreliable parameters) |
| 7 | 87 | Capture > Set Area Dimensions | `Set Area Dimensions to (<p0>, <p1>)` | Fixer les dimensions de la zone à (<p0>, <p1>) | (unreliable parameters) |
| 8 | 88 | Automatic capture > Start | `Start automatic capture` | Lancer la capture automatique |  |
| 9 | 89 | Automatic capture > Stop | `Stop automatic capture` | Arrêter la capture automatique |  |
| 10 | 90 | Output > Set output to clipboard | `Set output to clipboard` | Diriger la sortie vers le presse-papier |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `Filename$(` |  |  |
