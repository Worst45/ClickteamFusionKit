# Extension Layer

- File: `Layer.mfx` — installed with Fusion
- Name(s) shown in projects: “Objet Calque”, “Layer object”
- Usage in the corpus: 100 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Select by Fixed Value > Is Object at Back? | `<object>: <p0> At Back?` | <object>: <p0> au fond? | numeric expression “Enter Fixed Value” | — |  |
| 1 | -82 | Select by Fixed Value > Is Object at Front? | `<object>: <p0> At Front?` | <object>: <p0> devant? | numeric expression “Enter Fixed Value” | — |  |
| 2 | -83 | Select by Fixed Value > Is Object A above Object B? | `<object>: <p0> Above <p1>?` | <object>: <p0> devant <p1>? | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 3 | -84 | Select by Fixed Value > Is Object A below Object B? | `<object>: <p0> Below <p1>?` | <object>: <p0> derrière <p1>? | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 4 | -85 | Select by Fixed Value > Is Object A between Object B and C? | `<object>: <p0> Between <p1> and <p2>?` | <object>: <p0> entre <p1> et <p2>? | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 5 | -86 | Select by Object Picker > Is Object at Back? | `<object>: <p0> At Back?` | <object>: <p0> au fond? | object “Select an Object” | — |  |
| 6 | -87 | Select by Object Picker > Is Object at Front? | `<object>: <p0> At Front?` | <object>: <p0> devant? | object “Select an Object” | — |  |
| 7 | -88 | Select by Object Picker > Is Object A above Object B? | `<object>: <p0> Above <p1>?` | <object>: <p0> devant <p1>? | object “Select Object A”; object “Select Object B” | — |  |
| 8 | -89 | Select by Object Picker > Is Object A below Object B? | `<object>: <p0> Below <p1>?` | <object>: <p0> derrière <p1>? | object “Select Object A”; object “Select Object B” | — |  |
| 9 | -90 | Select by Object Picker > Is Object A between Object B and C? | `<object>: <p0> Between <p1> and <p2>?` | <object>: <p0> entre <p1> et <p2>? | object “Select Object A”; object “Select Object B”; object “Select Object C” | — |  |
| 10 | -91 | Layers > By Index > Is Layer Visible? | `<object>: Layer <p0> is visible?` | <object>: Le calque <p0> est visible? | type 71 “Layer index (1-based)” | — |  |
| 11 | -92 | Layers > By Name > Is Layer Visible? | `<object>: Layer <p0> is visible?` | <object>: Le calque <p0> est visible? | string expression “Layer name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select by Fixed Value > Send Object Back One | `Send <p0> Back One` | Envoyer <p0> derrière Un | numeric expression “Enter Fixed Value” | — |  |
| 1 | 81 | Select by Fixed Value > Bring Object Forward One | `Bring <p0> Forward One` | Passer <p0> devant Un | numeric expression “Enter Fixed Value” | — |  |
| 2 | 82 | Select by Fixed Value > Swap two Objects | `Swap <p0> and <p1>` | Echanger % et <p1> | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 3 | 83 | Select by Fixed Value > Store Fixed Value | `Store Fixed Value for <p0>` | Stocker la valeur fixe de <p0> | object “Select Object A” | — |  |
| 4 | 84 | Select by Fixed Value > Bring Object to Front | `Bring <p0> to Front` | Passer <p0> devant | numeric expression “Enter Fixed Value” | — |  |
| 5 | 85 | Select by Fixed Value > Send Object to Back | `Send <p0> to Back` | Envoyer % au fond | numeric expression “Enter Fixed Value” | — |  |
| 6 | 86 | Select by Fixed Value > Send Object Back N | `Send <p0> Back <p1>` | Envoyer <p0> derrière <p1> | numeric expression “Enter Fixed Value”; numeric expression “How many levels?” | — |  |
| 7 | 87 | Select by Fixed Value > Bring Object Forward N | `Bring <p0> Forward <p1>` | Passer <p0> devant <p1> | numeric expression “Enter Fixed Value”; numeric expression “How many levels?” | — |  |
| 8 | 88 | Sort > Reverse all Objects | `Reverse all` | Inverser tout |  | — |  |
| 9 | 89 | Select by Fixed Value > Move Above Object B | `Move <p0> Above <p1>` | Passer <p0> devant <p1> | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 10 | 90 | Select by Fixed Value > Move Below Object B | `Move <p0> Below <p1>` | Passe <p0> derrière <p1> | numeric expression “Enter Fixed Value”; numeric expression “Enter Fixed Value” | — |  |
| 11 | 91 | Select by Fixed Value > Move To Level N | `Move <p0> to Level <p1>` | Passer <p0> au niveau <p1> | numeric expression “Enter Fixed Value”; numeric expression “Enter Level Number” | — |  |
| 12 | 92 | Sort > By X(Increasing) | `Increasing X Sort` | Tri en X croissant |  | — |  |
| 13 | 93 | Sort > By Y(Increasing) | `Increasing Y Sort` | Tri en Y croissant |  | — |  |
| 14 | 94 | Sort > By X(Decreasing) | `Decreasing X Sort` | Tri décroissant en X |  | — |  |
| 15 | 95 | Sort > By Y(Decreasing) | `Decreasing Y Sort` | Tri décroissant en Y |  | 6 (6 proj.) |  |
| 16 | 96 | Select by Object Picker > Send Object Back One | `Send <p0> Back One` | Envoyer <p0> derrière Un | object “Select an Object” | — |  |
| 17 | 97 | Select by Object Picker > Bring Object Forward One | `Bring <p0> Forward One` | Passer <p0> devant Un | object “Select an Object” | — |  |
| 18 | 98 | Select by Object Picker > Swap two Objects | `Swap <p0> and <p1>` | Echanger % et <p1> | object “Select Object A”; object “Select Object B” | — |  |
| 19 | 99 | Select by Object Picker > Bring Object to Front | `Bring <p0> to Front` | Passer <p0> devant | object “Select an Object” | — |  |
| 20 | 100 | Select by Object Picker > Send Object to Back | `Send <p0> to Back` | Envoyer % au fond | object “Select an Object” | — |  |
| 21 | 101 | Select by Object Picker > Send Object Back N | `Send <p0> Back <p1>` | Envoyer <p0> derrière <p1> | object “Select Object A”; numeric expression “How many levels?” | — |  |
| 22 | 102 | Select by Object Picker > Bring Object Forward N | `Bring <p0> Forward <p1>` | Passer <p0> devant <p1> | object “Select Object A”; numeric expression “How many levels?” | — |  |
| 23 | 103 | Select by Object Picker > Move Above Object B | `Move <p0> Above <p1>` | Passer <p0> devant <p1> | object “Select Object A”; object “Select Object B” | — |  |
| 24 | 104 | Select by Object Picker > Move Below Object B | `Move <p0> Below <p1>` | Passe <p0> derrière <p1> | object “Select Object A”; object “Select Object B” | — |  |
| 25 | 105 | Select by Object Picker > Move To Level N | `Move <p0> to Level <p1>` | Passer <p0> au niveau <p1> | object “Select Object A”; numeric expression “Enter Level Number” | — |  |
| 26 | 106 | Sort > By ALT Value(Increasing) | `Increasing Sort by <p0> : non-alts default to <p1>` | Tri croissant par <p0> : pas de valeur par défaut à <p1> | alterable value “Select an Alterable Value”; numeric expression “Default Value to sort by for Objects with no Alterable Value ability (i.e. Counter, String)” | — |  |
| 27 | 107 | Sort > By ALT Value(Decreasing) | `Decreasing Sort by <p0> : non-alts default to <p1>` | Tri décroissant par <p0> : pas de valeur par défaut à <p1> | alterable value “Select an Alterable Value”; numeric expression “Default Value to sort by for Objects with no Alterable Value ability (i.e. Counter, String)” | — |  |
| 28 | 108 | Layers > By Index > Position > Set X Position | `Set X layer <p0> to <p1>` | Fixer X du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “X Position” | — |  |
| 29 | 109 | Layers > By Index > Position > Set Y Position | `Set Y layer <p0> to <p1>` | Fixer Y du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “Y Position” | — |  |
| 30 | 110 | Layers > By Index > Position > Set Position | `Set position of layer <p0> to (<p1>, <p2>)` | Fixer position du calque <p0> à (<p1>, <p2>) | type 71 “Layer index (1-based)”; numeric expression “X Position”; numeric expression “Y Position” | 1 (1 proj.) |  |
| 31 | 111 | Layers > By Index > Visibility > Show | `Show layer <p0>` | Montrer calque <p0> | type 71 “Layer index (1-based)” | 29 (10 proj.) |  |
| 32 | 112 | Layers > By Index > Visibility > Hide | `Hide layer <p0>` | Cacher calque <p0> | type 71 “Layer index (1-based)” | 50 (10 proj.) |  |
| 33 | 113 | Layers > By Name > Position > Set X Position | `Set X layer <p0> to <p1>` | Fixer X du calque <p0> à <p1> | string expression “Layer name”; numeric expression “X Position” | 7 (2 proj.) |  |
| 34 | 114 | Layers > By Name > Position > Set Y Position | `Set Y layer <p0> to <p1>` | Fixer Y du calque <p0> à <p1> | string expression “Layer name”; numeric expression “Y Position” | — |  |
| 35 | 115 | Layers > By Name > Position > Set Position | `Set position of layer <p0> to (<p1>, <p2>)` | Fixer position du calque <p0> à (<p1>, <p2>) | string expression “Layer name”; numeric expression “X Position”; numeric expression “Y Position” | — |  |
| 36 | 116 | Layers > By Name > Visibility > Show | `Show layer <p0>` | Montrer calque <p0> | string expression “Layer name” | — |  |
| 37 | 117 | Layers > By Name > Visibility > Hide | `Hide layer <p0>` | Cacher calque <p0> | string expression “Layer name” | — |  |
| 38 | 118 | Layers > By Index > Set Current Layer | `Set Current Layer to Layer <p0>` | Changer calque courant pour calque <p0> | type 71 “Layer index (1-based)” | — |  |
| 39 | 119 | Layers > By Name > Set Current Layer | `Set Current Layer to Layer <p0>` | Changer calque courant pour calque <p0> | string expression “Layer name” | — |  |
| 40 | 120 | Layers > By Index > Scrolling > Set X coefficient | `Set X coefficient of layer <p0> to <p1>` | Fixer coefficient X du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “X coefficient” | — |  |
| 41 | 121 | Layers > By Index > Scrolling > Set Y coefficient | `Set Y coefficient of layer <p0> to <p1>` | Fixer coefficient Y du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “Y coefficient” | — |  |
| 42 | 122 | Layers > By Name > Scrolling > Set X coefficient | `Set X coefficient of layer <p0> to <p1>` | Fixer coefficient X du calque <p0> à <p1> | string expression “Layer name”; numeric expression “X coefficient” | — |  |
| 43 | 123 | Layers > By Name > Scrolling > Set Y coefficient | `Set Y coefficient of layer <p0> to <p1>` | Fixer coefficient Y du calque <p0> à <p1> | string expression “Layer name”; numeric expression “Y coefficient” | — |  |
| 44 | 124 | Layers > By Index > Effect > Set effect | `Set effect of layer <p0> to <p1>` | Fixer effet du calque <p0> à <p1> | type 71 “Layer index (1-based)”; effect “Set effect” | — |  |
| 45 | 125 | Layers > By Index > Effect > Set effect parameter | `Set effect parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à <p2> | type 71 “Layer index (1-based)”; string expression “Parameter name”; numeric expression “Parameter value” | 5 (1 proj.) |  |
| 46 | 126 | Layers > By Index > Effect > Set alpha-blending coefficient | `Set alpha-blending coefficient of layer <p0> to <p1>` | Fixer coefficient de semi-transparence du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “Alpha-blending coefficient (0-255)” | — |  |
| 47 | 127 | Layers > By Index > Effect > Set RGB coefficient | `Set RGB coefficient of layer <p0> to <p1>` | Fixer coefficient RVB du calque <p0> à <p1> | type 71 “Layer index (1-based)”; numeric expression “RGB coefficient” | — |  |
| 48 | 128 | Layers > By Name > Effect > Set effect | `Set effect of layer <p0> to <p1>` | Fixer effet du calque <p0> à <p1> | string expression “Layer name”; effect “Set effect” | — |  |
| 49 | 129 | Layers > By Name > Effect > Set effect parameter | `Set effect parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à <p2> | string expression “Layer name”; string expression “Parameter name”; numeric expression “Parameter value” | — |  |
| 50 | 130 | Layers > By Name > Effect > Set alpha-blending coefficient | `Set alpha-blending coefficient of layer <p0> to <p1>` | Fixer coefficient de semi-transparence du calque <p0> à <p1> | string expression “Layer name”; numeric expression “Alpha-blending coefficient (0-255)” | — |  |
| 51 | 131 | Layers > By Name > Effect > Set RGB coefficient | `Set RGB coefficient of layer <p0> to <p1>` | Fixer coefficient RVB du calque <p0> à <p1> | string expression “Layer name”; numeric expression “RGB coefficient” | — |  |
| 52 | 132 | Layers > By Index > Effect > Set effect image parameter | `Set effect image parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à image <p2> | type 71 “Layer index (1-based)”; string expression “Parameter name”; file name “#Title#Please choose a graphic file.#Filter#All files\|*.*\|” | — |  |
| 53 | 133 | Layers > By Name > Effect > Set effect image parameter | `Set effect image parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à image <p2> | string expression “Layer name”; string expression “Parameter name”; file name “#Title#Please choose a graphic file.#Filter#All files\|*.*\|” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Fixed Value | `lyrGetFV(` | Valeur fixe | string “Object's name” | — |  |
| 1 | 81 | Get Fixed Value of Top Object | `lyrGetTopFV(` | Valeur fixe de l'objet d'avant-plan |  | — |  |
| 2 | 82 | Get Fixed Value of Bottom Object | `lyrGetBottomFV(` | Valeur fixe de l'objet de fond |  | — |  |
| 3 | 83 | Get Level N Description | `lyrGetDesc$(` | Description niveau N | number “Level number” → string | — |  |
| 4 | 84 | Get 10 Level Descriptions | `lyrGetTenDesc$(` | Description niveau 10 | number “Level number” → string | — |  |
| 5 | 85 | Get Number of Levels | `lyrGetNumLvls(` | Nombre de niveaux |  | — |  |
| 6 | 86 | Get Object's Level | `lyrGetLevel(` | Niveau de l'objet | number “Enter Fixed Value” | — |  |
| 7 | 87 | Get Fixed Value from Level N | `lyrGetLevelFV(` | Valeur fixe de niveau N | number “Level number” | — |  |
| 8 | 88 | Layers > By Index > Get Layer X Position | `lyrGetLayerXPos(` | Position en X du calque | number “Layer index (1-based)” | 1 (1 proj.) |  |
| 9 | 89 | Layers > By Index > Get Layer Y Position | `lyrGetLayerYPos(` | Position en Y du calque | number “Layer index (1-based)” | 1 (1 proj.) |  |
| 10 | 90 | Layers > By Name > Get Layer X Position | `lyrGetLayerBnXPos(` | Position en X du calque | string “Layer name” | — |  |
| 11 | 91 | Layers > By Name > Get Layer Y Position | `lyrGetLayerBnYPos(` | Position en Y du calque | string “Layer name” | — |  |
| 12 | 92 | Layers > Get Layer Count | `lyrGetLayerCount(` | Nombre de calques |  | — |  |
| 13 | 93 | Layers > By Index > Get Layer Name | `lyrGetLayerName$(` | Nom du calque | number “Layer index (1-based)” → string | — |  |
| 14 | 94 | Layers > By Name > Get Layer Index | `lyrGetLayerIndex(` | Index du calque | string “Layer name” | — |  |
| 15 | 95 | Layers > Get Current Layer | `lyrGetCurrentLayer(` | Calque courant |  | — |  |
| 16 | 96 | Layers > By Index > Get scrolling X coefficient | `lyrGetLayerXCoef(` | Coefficient scrolling en X | number “Layer index (1-based)” | — |  |
| 17 | 97 | Layers > By Index > Get scrolling Y coefficient | `lyrGetLayerYCoef(` | Coefficient scrolling en Y | number “Layer index (1-based)” | — |  |
| 18 | 98 | Layers > By Name > Get scrolling X coefficient | `lyrGetLayerBnXCoef(` | Coefficient scrolling en X | string “Layer name” | — |  |
| 19 | 99 | Layers > By Name > Get scrolling Y coefficient | `lyrGetLayerBnYCoef(` | Coefficient scrolling en Y | string “Layer name” | — |  |
| 20 | 100 | Layers > By Index > Effect parameter | `lyrGetLayerEffectParam(` | Paramètre Effet | number “Layer index (1-based)”; string “Parameter name” | — |  |
| 21 | 101 | Layers > By Index > Alpha-blending coefficient | `lyrGetLayerAlpha(` | Coefficient de semi-transparence | number “Layer index (1-based)” | — |  |
| 22 | 102 | Layers > By Index > RGB coefficient | `lyrGetLayerRGB(` | Coefficient RGB | number “Layer index (1-based)” | — |  |
| 23 | 103 | Layers > By Name > Get effect parameter | `lyrGetLayerBnEffectParam(` | Récupérer paramètre Effet | string “Layer name”; string “Parameter name” | — |  |
| 24 | 104 | Layers > By Name > Get alpha-blending coefficient | `lyrGetLayerBnAlpha(` | Récupérer coefficient de semi-transparence | string “Layer name” | — |  |
| 25 | 105 | Layers > By Name > Get RGB coefficient | `lyrGetLayerBnRGB(` | Récupérer coefficient RGB | string “Layer name” | — |  |
