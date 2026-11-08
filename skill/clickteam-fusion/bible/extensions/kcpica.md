# Extension kcpica

- File: `kcpica.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 (guessed) | -81 | A picture is loaded ? |  | Une image est chargée? |  |
| 1 (guessed) | -82 | Is flipped horizontally ? |  | Est-elle inversée horizontalement? |  |
| 2 (guessed) | -83 | Is flipped vertically ? |  | Est-elle inversée verticalement? |  |
| 3 (guessed) | -84 | Is wrap mode ON ? |  | Mode "Bouclerr" ON? |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 (guessed) | 80 | New picture | `New picture: <p0>` | Nouvelle image: <p0> |  |
| 1 (guessed) | 81 | New picture from selector |  | Nouvelle image à partir d'un sélecteur |  |
| 2 (guessed) | 82 | Hot Spot > Custom... |  |  |  |
| 3 (guessed) | 83 | Size > Set Size... |  |  |  |
| 4 (guessed) | 84 | Rotation > Set Angle... |  |  |  |
| 5 (guessed) | 85 | Set Semitransparency Ratio... |  |  |  |
| 6 (guessed) | 86 | Hot Spot > Top-left |  |  |  |
| 7 (guessed) | 87 | Hot Spot > Top-center |  |  |  |
| 8 (guessed) | 88 | Hot Spot > Top-right |  |  |  |
| 9 (guessed) | 89 | Hot Spot > Left-center |  |  |  |
| 10 (guessed) | 90 | Hot Spot > Center |  |  |  |
| 11 (guessed) | 91 | Hot Spot > Right-center |  |  |  |
| 12 (guessed) | 92 | Hot Spot > Bottom-left |  |  |  |
| 13 (guessed) | 93 | Hot Spot > Bottom-center |  |  |  |
| 14 (guessed) | 94 | Hot Spot > Bottom-right |  |  |  |
| 15 (guessed) | 95 | Flip > Horizontally |  |  |  |
| 16 (guessed) | 96 | Flip > Vertically |  |  |  |
| 17 (guessed) | 97 | Rotation > Link to object's direction |  |  |  |
| 18 (guessed) | 98 | Rotation > Unlink from object's direction |  |  |  |
| 19 (guessed) | 99 | Rotation > Look in direction of... |  |  |  |
| 20 (guessed) | 100 | Offset > Horizontally |  |  |  |
| 21 (guessed) | 101 | Offset > Vertically |  |  |  |
| 22 (guessed) | 102 | Size > Resize mode > Fast |  | Rapide |  |
| 23 (guessed) | 103 | Size > Resize mode > Resample |  | Ré-échant. |  |
| 24 (guessed) | 104 | Offset > Wrap mode > On (default) |  |  |  |
| 25 (guessed) | 105 | Offset > Wrap mode > Off |  |  |  |
| 26 (guessed) | 106 | Create Backdrop Object |  | Créer un objet décor |  |
| 27 (guessed) | 107 | Size > Auto-Resize > On |  |  |  |
| 28 (guessed) | 108 | Size > Auto-Resize > Off |  |  |  |
| 29 (guessed) | 109 | Size > Zoom > Percentage |  | Pourcentage |  |
| 30 (guessed) | 110 | Size > Zoom > Width |  | &Largeur |  |
| 31 (guessed) | 111 | Size > Zoom > Height |  | &Hauteur |  |
| 32 (guessed) | 112 | Size > Zoom > Rectangle |  |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 (guessed) | 80 | Get picture name |  | Nom de l'image |  |
| 1 (guessed) | 81 | Get Original Width |  | Largeur originale |  |
| 2 (guessed) | 82 | Get Original Height |  | Hauteur originale |  |
| 3 (guessed) | 83 | Get Resized Width |  | Largeur redimensionnée |  |
| 4 (guessed) | 84 | Get Resized Height |  | Hauteur redimensionnée |  |
| 5 (guessed) | 85 | Get Screen Width |  | Largeur à l'écran |  |
| 6 (guessed) | 86 | Get Screen Height |  | Hauteur à l'écran |  |
| 7 (guessed) | 87 | Get Hot Spot X |  | Point chaud en X |  |
| 8 (guessed) | 88 | Get Hot Spot Y |  | Point chaud en Y |  |
| 9 (guessed) | 89 | Get Angle |  | Angle |  |
| 10 (guessed) | 90 | Get Semitransparency ratio |  | Ratio de semi-transparence |  |
| 11 (guessed) | 91 | Get Horizontal Offset |  | Décalage horizontal |  |
| 12 (guessed) | 92 | Get Vertical Offset |  | Décalage vertical |  |
| 13 (guessed) | 93 | Get Horizontal Zoom Factor |  | Facteur de zoom horizontal |  |
| 14 (guessed) | 94 | Get Vertical Zoom Factor |  | Facteur de zoom vertical |  |
