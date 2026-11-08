# Extension kcdraw

- File: `kcdraw.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Enter the paper | `Mouse enter in <object>` | La souris entre dans <p0> |  |
| 1 | -82 | Exit the paper | `Mouse exit of <object>` | La souris sort de <p0> |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Change mode > Interactive | `Change to interactive mode` | Passer en mode interactif |  |
| 1 | 81 | Change mode > Passive | `Change to passive mode` | Passer en mode passif |  |
| 2 | 82 | Change tool > Brush | `Change tool to brush` | Sélectionner l'outil brosse |  |
| 3 | 83 | Change tool > Line | `Change tool to line` | Sélectionner l'outil ligne |  |
| 4 | 84 | Change tool > Rectangle | `Change tool to rectangle` | Sélectionner l'outil rectangle |  |
| 5 | 85 | Change tool > Ellipse | `Change tool to ellipse` | Sélectionner l'outil ellipse |  |
| 6 | 86 | Change tool > Shape | `Change tool to shape` | Sélectionner l'outil forme |  |
| 7 | 87 | Change tool > Polygon | `Change tool to polygon` | Sélectionner l'outil polygône |  |
| 8 | 88 | Change tool > Fill | `Change tool to fill` | Sélectionner l'outil remplissage |  |
| 9 | 89 | Change tool > Color picker | `Change tool to color picker` | Sélectionner l'outil sélecteur de couleur |  |
| 10 | 90 | Change tool > Eraser | `Change tool to eraser` | Sélectionner l'outil gomme |  |
| 11 | 91 | Change fill color | `Set fill color : <p0>` | Fixer la couleur de remplissage: <p0> | (unreliable parameters) |
| 12 | 92 | Change outline color | `Set outline color : <p0>` | Fixer la couleur de bordure: <p0> | (unreliable parameters) |
| 13 | 93 | Change paper color | `Set paper color : <p0>` | Fixer la couleur de papier: <p0> | (unreliable parameters) |
| 14 | 94 | Query fill color | `Query fill color` | Demander la couleur de remplissage |  |
| 15 | 95 | Query outline color | `Query outline color` | Demander la couleur de bordure |  |
| 16 | 96 | Query paper color | `Query paper color` | Demander la couleur de papier |  |
| 17 | 97 | Clear paper | `Clear paper` | Effacer le papier |  |
| 18 | 98 | Move tool | `Move tool to point(<p0>, <p1>)` | Bouger l'outil au point (<p0>, <p1>) | (unreliable parameters) |
| 19 | 99 | Tools settings > Brush > Continuous | `Change brush style to continuous` | Changer le style de brosse à continue |  |
| 20 | 100 | Tools settings > Brush > Discontinuous | `Change brush style to discontinuous` | Changer le style de brosse à discontinu |  |
| 21 | 101 | Tools settings > Brush > One Touch | `Change brush style to one touch` | Changer le style de brosse à "une touche" |  |
| 22 | 102 | Tools settings > Line > Thickness | `Change line thickness to <p0>` | Changer l'épaisseur de ligne à <p0> | (unreliable parameters) |
| 23 | 103 | Tools settings > Rectangle > Outlined | `Change rectangle style to outlined` | Changer le style rectangle à détouré |  |
| 24 | 104 | Tools settings > Rectangle > Filled | `Change rectangle style to filled` | Changer le style rectangle à rempli |  |
| 25 | 105 | Tools settings > Rectangle > Outlined + Filled | `Change rectangle style to outlined + filled` | Changer le style rectangle à détouré + rempli |  |
| 26 | 106 | Tools settings > Rectangle > Thickness | `Change rectangle thickness to <p0>` | Changer l'épaisseur de rectangle à <p0> | (unreliable parameters) |
| 27 | 107 | Tools settings > Ellipse > Outlined | `Change ellipse style to outlined` | Changer le style de l'ellipse à détouré |  |
| 28 | 108 | Tools settings > Ellipse > Filled | `Change ellipse style to filled` | Changer le style de l'ellipse à rempli |  |
| 29 | 109 | Tools settings > Ellipse > Outlined + Filled | `Change ellipse style to outlined + filled` | Changer le style de l'ellipse à détouré + rempli |  |
| 30 | 110 | Tools settings > Ellipse > Thickness | `Change ellipse thickness to <p0>` | Changer l'épaisseur de l'ellipse à <p0> | (unreliable parameters) |
| 31 | 111 | Tools settings > Shape > Outlined | `Change shape style to outlined` | Changer le style de forme à détouré |  |
| 32 | 112 | Tools settings > Shape > Filled | `Change shape style to filled` | Changer le style de forme à rempli |  |
| 33 | 113 | Tools settings > Shape > Outlined + Filled | `Change shape style to outlined + filled` | Changer le style de forme à détouré + rempli |  |
| 34 | 114 | Tools settings > Shape > Thickness | `Change shape thickness to <p0>` | Changer l'épaisseur de forme à <p0> | (unreliable parameters) |
| 35 | 115 | Tools settings > Polygon > Outlined | `Change polygon style to outlined` | Changer le style de polygône à détouré |  |
| 36 | 116 | Tools settings > Polygon > Filled | `Change polygon style to filled` | Changer le style de polygône à rempli |  |
| 37 | 117 | Tools settings > Polygon > Outlined + Filled | `Change polygon style to outlined + filled` | Changer le style de polygône à détouré + rempli |  |
| 38 | 118 | Tools settings > Polygon > Thickness | `Change polygon thickness to <p0>` | Changer l'épaisseur de polygône à <p0> | (unreliable parameters) |
| 39 | 119 | Draw > Point | `Draw a point` | Dessiner un point |  |
| 40 | 120 | Draw > Line | `Draw a line to point (<p0>, <p1>)` | Dessiner une ligne au point (<p0>, <p1>) | (unreliable parameters) |
| 41 | 121 | Draw > Rectangle | `Draw a rectangle to point (<p0>, <p1>)` | Dessiner un rectangle au point (<p0>, <p1>) | (unreliable parameters) |
| 42 | 122 | Draw > Ellipse | `Draw a ellipse to point (<p0>, <p1>)` | Dessiner une ellipse au point (<p0>, <p1>) | (unreliable parameters) |
| 43 | 123 | Draw > Fill | `Fill` | Remplissage |  |
| 44 | 124 | Tools settings > Change all thicknesses | `Change all thicknesses to <p0>` | Changer toutes les épaisseurs à <p0> | (unreliable parameters) |
| 45 | 125 | Save tool | `Save current tool` | Sauve l'outil courant |  |
| 46 | 126 | Restore tool | `Restore last saved tool` | Restaure le dernier outil sauvé |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Mode | `Mode of $(` | Mode |  |
| 1 | 81 | Tool | `Current tool of $(` | Outil | (unreliable parameters) |
| 2 | 82 | Fill color | `Current fill color of(` | Couleur remplissage |  |
| 3 | 83 | Outline color | `Current outline color of(` | Couleur de bordure |  |
| 4 | 84 | Paper color | `Paper color of(` | Couleur de papier |  |
| 5 | 85 | Tools settings > Brush > Style | `Brush style $(` | Style | (unreliable parameters) |
| 6 | 86 | Tools settings > Line > Thickness | `Line thickness(` | Epaisseur |  |
| 7 | 87 | Tools settings > Rectangle > Style | `Rectangle style $(` | Style | (unreliable parameters) |
| 8 | 88 | Tools settings > Rectangle > Thickness | `Rectangle thickness(` | Epaisseur |  |
| 9 | 89 | Tools settings > Ellipse > Style | `Ellipse style $(` | Style | (unreliable parameters) |
| 10 | 90 | Tools settings > Ellipse > Thickness | `Ellipse thickness(` | Epaisseur |  |
| 11 | 91 | Tools settings > Shape > Style | `Shape style $(` | Style | (unreliable parameters) |
| 12 | 92 | Tools settings > Shape > Thickness | `Shape thickness (` | Epaisseur |  |
| 13 | 93 | Tools settings > Polygon > Style | `Polygon style $(` | Style | (unreliable parameters) |
| 14 | 94 | Tools settings > Polygon > Thickness | `Polygon thickness (` | Epaisseur |  |
