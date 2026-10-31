# Extension kcshape

- File: `kcshape.mfx` — installed with Fusion
- Name(s) shown in projects: “Window Shape”
- Usage in the corpus: 2 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set standard shape | `Set standard shape` | Fixer forme standard |  | — |  |
| 1 | 81 | Set rounded rectangle shape | `Set rounded rectangle shape (<p0>,<p1>)` | Fixer forme rectangle arrondi (<p0>, <p1>) | numeric expression “Corner width”; numeric expression “Corner height” | — |  |
| 2 | 82 | Set elliptical shape | `Set elliptical shape` | Fixer forme elliptique |  | — |  |
| 3 | 83 | Set image shape | `Set shape from image <p0>` | Fixer forme à partir de l'image <p0> | numeric expression “Image number (0-based)” | — |  |
| 4 | 84 | Set shape from picture file | `Set shape from <p0>` | Fixer la forme à partir de <p0> | file name “Set shape from &picture file” | — |  |
| 5 | 85 | Get shape picture file from selector | `Get picture file from selector` | Choisir fichier image avec sélecteur de fichiers |  | — |  |
| 6 | 86 | Enable | `Enable` | Activer |  | — |  |
| 7 | 87 | Disable | `Disable` | Désactiver |  | — |  |
| 8 | 88 | Set shape from Active object | `Set shape from Active object <p0>` | Utiliser la forme de l'objet actif <p0> | string expression “Enter the name of the Active object” | 2 (1 proj.) | `Window Shape : Event ID 88, 1 Parameters { "Mystic Globe" }` |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Picture filename | `Filename$(` |  | → string | — |  |
| 1 | 81 | Number of images | `NumberOfImages(` | Nombre d'images |  | — |  |
| 2 | 82 | Current image number | `CurrentImage(` | Numéro d'image courante |  | — |  |
| 3 | 83 | Width | `Width(` | Largeur |  | — |  |
| 4 | 84 | Height | `Height(` | Hauteur |  | — |  |
