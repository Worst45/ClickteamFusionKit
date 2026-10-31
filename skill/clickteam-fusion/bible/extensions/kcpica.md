# Extension kcpica

- Fichier : `kcpica.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Active Picture »
- Usage dans le corpus : 25 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 (supposé) | -81 | A picture is loaded ? |  | Une image est chargée? |  | — |  |
| 1 (supposé) | -82 | Is flipped horizontally ? |  | Est-elle inversée horizontalement? |  | — |  |
| 2 (supposé) | -83 | Is flipped vertically ? |  | Est-elle inversée verticalement? |  | — |  |
| 3 (supposé) | -84 | Is wrap mode ON ? |  | Mode "Bouclerr" ON? |  | — |  |
| -57 | -24 | ? | ? |  |  | 1 (1 proj.) | `Active Picture 2: Flag 0 is off` |
| -56 | -25 | ? | ? |  |  | 1 (1 proj.) | `Active Picture 2: Flag 0 is on` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 (supposé) | 80 | New picture |  |  |  | 7 (2 proj.) | `Active Picture : Event ID 80, 1 Parameters { Apppath$ + "GingerDude.png" }` |
| 1 (supposé) | 81 | New picture from selector |  | Nouvelle image à partir d'un sélecteur |  | — |  |
| 2 (supposé) | 82 | Hot Spot > Custom... |  |  |  | — |  |
| 3 (supposé) | 83 | Size > Set Size... |  |  |  | — |  |
| 4 (supposé) | 84 | Rotation > Set Angle... |  |  |  | 2 (1 proj.) | `Active Picture 2 : Event ID 84, 1 Parameters { Expression ID 89("Active Picture 2") + 1 }` |
| 5 (supposé) | 85 | Set Semitransparency Ratio... |  |  |  | — |  |
| 6 (supposé) | 86 | Hot Spot > Top-left |  |  |  | — |  |
| 7 (supposé) | 87 | Hot Spot > Top-center |  |  |  | — |  |
| 8 (supposé) | 88 | Hot Spot > Top-right |  |  |  | — |  |
| 9 (supposé) | 89 | Hot Spot > Left-center |  |  |  | — |  |
| 10 (supposé) | 90 | Hot Spot > Center |  |  |  | 2 (1 proj.) | `Active Picture 5 : Event ID 90, 0 Parameters` |
| 11 (supposé) | 91 | Hot Spot > Right-center |  |  |  | — |  |
| 12 (supposé) | 92 | Hot Spot > Bottom-left |  |  |  | — |  |
| 13 (supposé) | 93 | Hot Spot > Bottom-center |  |  |  | — |  |
| 14 (supposé) | 94 | Hot Spot > Bottom-right |  |  |  | — |  |
| 15 (supposé) | 95 | Flip > Horizontally |  |  |  | 1 (1 proj.) | `Active Picture 4 : Event ID 95, 0 Parameters` |
| 16 (supposé) | 96 | Flip > Vertically |  |  |  | 1 (1 proj.) | `Active Picture 4 : Event ID 96, 0 Parameters` |
| 17 (supposé) | 97 | Rotation > Link to object's direction |  |  |  | — |  |
| 18 (supposé) | 98 | Rotation > Unlink from object's direction |  |  |  | — |  |
| 19 (supposé) | 99 | Rotation > Look in direction of... |  |  |  | — |  |
| 20 (supposé) | 100 | Offset > Horizontally |  |  |  | 1 (1 proj.) | `Active Picture 3 : Event ID 100, 1 Parameters { Expression ID 91("Active Picture 3") + 1 }` |
| 21 (supposé) | 101 | Offset > Vertically |  |  |  | — |  |
| 22 (supposé) | 102 | Size > Resize mode > Fast |  | Rapide |  | — |  |
| 23 (supposé) | 103 | Size > Resize mode > Resample |  | Ré-échant. |  | — |  |
| 24 (supposé) | 104 | Offset > Wrap mode > On (default) |  |  |  | — |  |
| 25 (supposé) | 105 | Offset > Wrap mode > Off |  |  |  | — |  |
| 26 (supposé) | 106 | Create Backdrop Object |  | Créer un objet décor |  | — |  |
| 27 (supposé) | 107 | Size > Auto-Resize > On |  |  |  | — |  |
| 28 (supposé) | 108 | Size > Auto-Resize > Off |  |  |  | — |  |
| 29 (supposé) | 109 | Size > Zoom > Percentage |  | Pourcentage |  | 2 (1 proj.) | `Active Picture 5 : Event ID 109, 1 Parameters { 150 }` |
| 30 (supposé) | 110 | Size > Zoom > Width |  | &Largeur |  | — |  |
| 31 (supposé) | 111 | Size > Zoom > Height |  | &Hauteur |  | — |  |
| 32 (supposé) | 112 | Size > Zoom > Rectangle |  |  |  | — |  |
| -45 | 35 | ? | ? |  |  | 1 (1 proj.) | `Active Picture 2 : Set Flag 0 on` |
| -44 | 36 | ? | ? |  |  | 1 (1 proj.) | `Active Picture 2 : Set Flag 0 off` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 (supposé) | 80 | Get picture name |  | Nom de l'image |  | — |  |
| 1 (supposé) | 81 | Get Original Width |  | Largeur originale |  | — |  |
| 2 (supposé) | 82 | Get Original Height |  | Hauteur originale |  | — |  |
| 3 (supposé) | 83 | Get Resized Width |  | Largeur redimensionnée |  | — |  |
| 4 (supposé) | 84 | Get Resized Height |  | Hauteur redimensionnée |  | — |  |
| 5 (supposé) | 85 | Get Screen Width |  | Largeur à l'écran |  | — |  |
| 6 (supposé) | 86 | Get Screen Height |  | Hauteur à l'écran |  | — |  |
| 7 (supposé) | 87 | Get Hot Spot X |  | Point chaud en X |  | — |  |
| 8 (supposé) | 88 | Get Hot Spot Y |  | Point chaud en Y |  | — |  |
| 9 (supposé) | 89 | Get Angle |  | Angle |  | 4 (1 proj.) | `Expression ID 89("Active Picture 2")` |
| 10 (supposé) | 90 | Get Semitransparency ratio |  | Ratio de semi-transparence |  | — |  |
| 11 (supposé) | 91 | Get Horizontal Offset |  | Décalage horizontal |  | 1 (1 proj.) | `Expression ID 91("Active Picture 3")` |
| 12 (supposé) | 92 | Get Vertical Offset |  | Décalage vertical |  | — |  |
| 13 (supposé) | 93 | Get Horizontal Zoom Factor |  | Facteur de zoom horizontal |  | — |  |
| 14 (supposé) | 94 | Get Vertical Zoom Factor |  | Facteur de zoom vertical |  | — |  |
