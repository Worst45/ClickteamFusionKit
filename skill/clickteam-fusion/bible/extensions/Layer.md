# Extension Layer

- Fichier : `Layer.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Objet Calque », « Layer object »
- Usage dans le corpus : 100 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Select by Fixed Value > Is Object at Back? | `<objet>: <p0> At Back?` | <objet>: <p0> au fond? | expression numérique « Enter Fixed Value » | — |  |
| 1 | -82 | Select by Fixed Value > Is Object at Front? | `<objet>: <p0> At Front?` | <objet>: <p0> devant? | expression numérique « Enter Fixed Value » | — |  |
| 2 | -83 | Select by Fixed Value > Is Object A above Object B? | `<objet>: <p0> Above <p1>?` | <objet>: <p0> devant <p1>? | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 3 | -84 | Select by Fixed Value > Is Object A below Object B? | `<objet>: <p0> Below <p1>?` | <objet>: <p0> derrière <p1>? | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 4 | -85 | Select by Fixed Value > Is Object A between Object B and C? | `<objet>: <p0> Between <p1> and <p2>?` | <objet>: <p0> entre <p1> et <p2>? | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 5 | -86 | Select by Object Picker > Is Object at Back? | `<objet>: <p0> At Back?` | <objet>: <p0> au fond? | objet « Select an Object » | — |  |
| 6 | -87 | Select by Object Picker > Is Object at Front? | `<objet>: <p0> At Front?` | <objet>: <p0> devant? | objet « Select an Object » | — |  |
| 7 | -88 | Select by Object Picker > Is Object A above Object B? | `<objet>: <p0> Above <p1>?` | <objet>: <p0> devant <p1>? | objet « Select Object A » ; objet « Select Object B » | — |  |
| 8 | -89 | Select by Object Picker > Is Object A below Object B? | `<objet>: <p0> Below <p1>?` | <objet>: <p0> derrière <p1>? | objet « Select Object A » ; objet « Select Object B » | — |  |
| 9 | -90 | Select by Object Picker > Is Object A between Object B and C? | `<objet>: <p0> Between <p1> and <p2>?` | <objet>: <p0> entre <p1> et <p2>? | objet « Select Object A » ; objet « Select Object B » ; objet « Select Object C » | — |  |
| 10 | -91 | Layers > By Index > Is Layer Visible? | `<objet>: Layer <p0> is visible?` | <objet>: Le calque <p0> est visible? | type 71 « Layer index (1-based) » | — |  |
| 11 | -92 | Layers > By Name > Is Layer Visible? | `<objet>: Layer <p0> is visible?` | <objet>: Le calque <p0> est visible? | expression chaîne « Layer name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select by Fixed Value > Send Object Back One | `Send <p0> Back One` | Envoyer <p0> derrière Un | expression numérique « Enter Fixed Value » | — |  |
| 1 | 81 | Select by Fixed Value > Bring Object Forward One | `Bring <p0> Forward One` | Passer <p0> devant Un | expression numérique « Enter Fixed Value » | — |  |
| 2 | 82 | Select by Fixed Value > Swap two Objects | `Swap <p0> and <p1>` | Echanger % et <p1> | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 3 | 83 | Select by Fixed Value > Store Fixed Value | `Store Fixed Value for <p0>` | Stocker la valeur fixe de <p0> | objet « Select Object A » | — |  |
| 4 | 84 | Select by Fixed Value > Bring Object to Front | `Bring <p0> to Front` | Passer <p0> devant | expression numérique « Enter Fixed Value » | — |  |
| 5 | 85 | Select by Fixed Value > Send Object to Back | `Send <p0> to Back` | Envoyer % au fond | expression numérique « Enter Fixed Value » | — |  |
| 6 | 86 | Select by Fixed Value > Send Object Back N | `Send <p0> Back <p1>` | Envoyer <p0> derrière <p1> | expression numérique « Enter Fixed Value » ; expression numérique « How many levels? » | — |  |
| 7 | 87 | Select by Fixed Value > Bring Object Forward N | `Bring <p0> Forward <p1>` | Passer <p0> devant <p1> | expression numérique « Enter Fixed Value » ; expression numérique « How many levels? » | — |  |
| 8 | 88 | Sort > Reverse all Objects | `Reverse all` | Inverser tout |  | — |  |
| 9 | 89 | Select by Fixed Value > Move Above Object B | `Move <p0> Above <p1>` | Passer <p0> devant <p1> | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 10 | 90 | Select by Fixed Value > Move Below Object B | `Move <p0> Below <p1>` | Passe <p0> derrière <p1> | expression numérique « Enter Fixed Value » ; expression numérique « Enter Fixed Value » | — |  |
| 11 | 91 | Select by Fixed Value > Move To Level N | `Move <p0> to Level <p1>` | Passer <p0> au niveau <p1> | expression numérique « Enter Fixed Value » ; expression numérique « Enter Level Number » | — |  |
| 12 | 92 | Sort > By X(Increasing) | `Increasing X Sort` | Tri en X croissant |  | — |  |
| 13 | 93 | Sort > By Y(Increasing) | `Increasing Y Sort` | Tri en Y croissant |  | — |  |
| 14 | 94 | Sort > By X(Decreasing) | `Decreasing X Sort` | Tri décroissant en X |  | — |  |
| 15 | 95 | Sort > By Y(Decreasing) | `Decreasing Y Sort` | Tri décroissant en Y |  | 6 (6 proj.) |  |
| 16 | 96 | Select by Object Picker > Send Object Back One | `Send <p0> Back One` | Envoyer <p0> derrière Un | objet « Select an Object » | — |  |
| 17 | 97 | Select by Object Picker > Bring Object Forward One | `Bring <p0> Forward One` | Passer <p0> devant Un | objet « Select an Object » | — |  |
| 18 | 98 | Select by Object Picker > Swap two Objects | `Swap <p0> and <p1>` | Echanger % et <p1> | objet « Select Object A » ; objet « Select Object B » | — |  |
| 19 | 99 | Select by Object Picker > Bring Object to Front | `Bring <p0> to Front` | Passer <p0> devant | objet « Select an Object » | — |  |
| 20 | 100 | Select by Object Picker > Send Object to Back | `Send <p0> to Back` | Envoyer % au fond | objet « Select an Object » | — |  |
| 21 | 101 | Select by Object Picker > Send Object Back N | `Send <p0> Back <p1>` | Envoyer <p0> derrière <p1> | objet « Select Object A » ; expression numérique « How many levels? » | — |  |
| 22 | 102 | Select by Object Picker > Bring Object Forward N | `Bring <p0> Forward <p1>` | Passer <p0> devant <p1> | objet « Select Object A » ; expression numérique « How many levels? » | — |  |
| 23 | 103 | Select by Object Picker > Move Above Object B | `Move <p0> Above <p1>` | Passer <p0> devant <p1> | objet « Select Object A » ; objet « Select Object B » | — |  |
| 24 | 104 | Select by Object Picker > Move Below Object B | `Move <p0> Below <p1>` | Passe <p0> derrière <p1> | objet « Select Object A » ; objet « Select Object B » | — |  |
| 25 | 105 | Select by Object Picker > Move To Level N | `Move <p0> to Level <p1>` | Passer <p0> au niveau <p1> | objet « Select Object A » ; expression numérique « Enter Level Number » | — |  |
| 26 | 106 | Sort > By ALT Value(Increasing) | `Increasing Sort by <p0> : non-alts default to <p1>` | Tri croissant par <p0> : pas de valeur par défaut à <p1> | valeur modifiable « Select an Alterable Value » ; expression numérique « Default Value to sort by for Objects with no Alterable Value ability (i.e. Counter, String) » | — |  |
| 27 | 107 | Sort > By ALT Value(Decreasing) | `Decreasing Sort by <p0> : non-alts default to <p1>` | Tri décroissant par <p0> : pas de valeur par défaut à <p1> | valeur modifiable « Select an Alterable Value » ; expression numérique « Default Value to sort by for Objects with no Alterable Value ability (i.e. Counter, String) » | — |  |
| 28 | 108 | Layers > By Index > Position > Set X Position | `Set X layer <p0> to <p1>` | Fixer X du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « X Position » | — |  |
| 29 | 109 | Layers > By Index > Position > Set Y Position | `Set Y layer <p0> to <p1>` | Fixer Y du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « Y Position » | — |  |
| 30 | 110 | Layers > By Index > Position > Set Position | `Set position of layer <p0> to (<p1>, <p2>)` | Fixer position du calque <p0> à (<p1>, <p2>) | type 71 « Layer index (1-based) » ; expression numérique « X Position » ; expression numérique « Y Position » | 1 (1 proj.) |  |
| 31 | 111 | Layers > By Index > Visibility > Show | `Show layer <p0>` | Montrer calque <p0> | type 71 « Layer index (1-based) » | 29 (10 proj.) |  |
| 32 | 112 | Layers > By Index > Visibility > Hide | `Hide layer <p0>` | Cacher calque <p0> | type 71 « Layer index (1-based) » | 50 (10 proj.) |  |
| 33 | 113 | Layers > By Name > Position > Set X Position | `Set X layer <p0> to <p1>` | Fixer X du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « X Position » | 7 (2 proj.) |  |
| 34 | 114 | Layers > By Name > Position > Set Y Position | `Set Y layer <p0> to <p1>` | Fixer Y du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « Y Position » | — |  |
| 35 | 115 | Layers > By Name > Position > Set Position | `Set position of layer <p0> to (<p1>, <p2>)` | Fixer position du calque <p0> à (<p1>, <p2>) | expression chaîne « Layer name » ; expression numérique « X Position » ; expression numérique « Y Position » | — |  |
| 36 | 116 | Layers > By Name > Visibility > Show | `Show layer <p0>` | Montrer calque <p0> | expression chaîne « Layer name » | — |  |
| 37 | 117 | Layers > By Name > Visibility > Hide | `Hide layer <p0>` | Cacher calque <p0> | expression chaîne « Layer name » | — |  |
| 38 | 118 | Layers > By Index > Set Current Layer | `Set Current Layer to Layer <p0>` | Changer calque courant pour calque <p0> | type 71 « Layer index (1-based) » | — |  |
| 39 | 119 | Layers > By Name > Set Current Layer | `Set Current Layer to Layer <p0>` | Changer calque courant pour calque <p0> | expression chaîne « Layer name » | — |  |
| 40 | 120 | Layers > By Index > Scrolling > Set X coefficient | `Set X coefficient of layer <p0> to <p1>` | Fixer coefficient X du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « X coefficient » | — |  |
| 41 | 121 | Layers > By Index > Scrolling > Set Y coefficient | `Set Y coefficient of layer <p0> to <p1>` | Fixer coefficient Y du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « Y coefficient » | — |  |
| 42 | 122 | Layers > By Name > Scrolling > Set X coefficient | `Set X coefficient of layer <p0> to <p1>` | Fixer coefficient X du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « X coefficient » | — |  |
| 43 | 123 | Layers > By Name > Scrolling > Set Y coefficient | `Set Y coefficient of layer <p0> to <p1>` | Fixer coefficient Y du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « Y coefficient » | — |  |
| 44 | 124 | Layers > By Index > Effect > Set effect | `Set effect of layer <p0> to <p1>` | Fixer effet du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; effet « Set effect » | — |  |
| 45 | 125 | Layers > By Index > Effect > Set effect parameter | `Set effect parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à <p2> | type 71 « Layer index (1-based) » ; expression chaîne « Parameter name » ; expression numérique « Parameter value » | 5 (1 proj.) |  |
| 46 | 126 | Layers > By Index > Effect > Set alpha-blending coefficient | `Set alpha-blending coefficient of layer <p0> to <p1>` | Fixer coefficient de semi-transparence du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « Alpha-blending coefficient (0-255) » | — |  |
| 47 | 127 | Layers > By Index > Effect > Set RGB coefficient | `Set RGB coefficient of layer <p0> to <p1>` | Fixer coefficient RVB du calque <p0> à <p1> | type 71 « Layer index (1-based) » ; expression numérique « RGB coefficient » | — |  |
| 48 | 128 | Layers > By Name > Effect > Set effect | `Set effect of layer <p0> to <p1>` | Fixer effet du calque <p0> à <p1> | expression chaîne « Layer name » ; effet « Set effect » | — |  |
| 49 | 129 | Layers > By Name > Effect > Set effect parameter | `Set effect parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à <p2> | expression chaîne « Layer name » ; expression chaîne « Parameter name » ; expression numérique « Parameter value » | — |  |
| 50 | 130 | Layers > By Name > Effect > Set alpha-blending coefficient | `Set alpha-blending coefficient of layer <p0> to <p1>` | Fixer coefficient de semi-transparence du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « Alpha-blending coefficient (0-255) » | — |  |
| 51 | 131 | Layers > By Name > Effect > Set RGB coefficient | `Set RGB coefficient of layer <p0> to <p1>` | Fixer coefficient RVB du calque <p0> à <p1> | expression chaîne « Layer name » ; expression numérique « RGB coefficient » | — |  |
| 52 | 132 | Layers > By Index > Effect > Set effect image parameter | `Set effect image parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à image <p2> | type 71 « Layer index (1-based) » ; expression chaîne « Parameter name » ; nom de fichier « #Title#Please choose a graphic file.#Filter#All files\|*.*\| » | — |  |
| 53 | 133 | Layers > By Name > Effect > Set effect image parameter | `Set effect image parameter <p1> of layer <p0> to <p2>` | Fixer paramètre effet <p1> du calque <p0> à image <p2> | expression chaîne « Layer name » ; expression chaîne « Parameter name » ; nom de fichier « #Title#Please choose a graphic file.#Filter#All files\|*.*\| » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Fixed Value | `lyrGetFV(` | Valeur fixe | chaîne « Object's name » | — |  |
| 1 | 81 | Get Fixed Value of Top Object | `lyrGetTopFV(` | Valeur fixe de l'objet d'avant-plan |  | — |  |
| 2 | 82 | Get Fixed Value of Bottom Object | `lyrGetBottomFV(` | Valeur fixe de l'objet de fond |  | — |  |
| 3 | 83 | Get Level N Description | `lyrGetDesc$(` | Description niveau N | nombre « Level number » → chaîne | — |  |
| 4 | 84 | Get 10 Level Descriptions | `lyrGetTenDesc$(` | Description niveau 10 | nombre « Level number » → chaîne | — |  |
| 5 | 85 | Get Number of Levels | `lyrGetNumLvls(` | Nombre de niveaux |  | — |  |
| 6 | 86 | Get Object's Level | `lyrGetLevel(` | Niveau de l'objet | nombre « Enter Fixed Value » | — |  |
| 7 | 87 | Get Fixed Value from Level N | `lyrGetLevelFV(` | Valeur fixe de niveau N | nombre « Level number » | — |  |
| 8 | 88 | Layers > By Index > Get Layer X Position | `lyrGetLayerXPos(` | Position en X du calque | nombre « Layer index (1-based) » | 1 (1 proj.) |  |
| 9 | 89 | Layers > By Index > Get Layer Y Position | `lyrGetLayerYPos(` | Position en Y du calque | nombre « Layer index (1-based) » | 1 (1 proj.) |  |
| 10 | 90 | Layers > By Name > Get Layer X Position | `lyrGetLayerBnXPos(` | Position en X du calque | chaîne « Layer name » | — |  |
| 11 | 91 | Layers > By Name > Get Layer Y Position | `lyrGetLayerBnYPos(` | Position en Y du calque | chaîne « Layer name » | — |  |
| 12 | 92 | Layers > Get Layer Count | `lyrGetLayerCount(` | Nombre de calques |  | — |  |
| 13 | 93 | Layers > By Index > Get Layer Name | `lyrGetLayerName$(` | Nom du calque | nombre « Layer index (1-based) » → chaîne | — |  |
| 14 | 94 | Layers > By Name > Get Layer Index | `lyrGetLayerIndex(` | Index du calque | chaîne « Layer name » | — |  |
| 15 | 95 | Layers > Get Current Layer | `lyrGetCurrentLayer(` | Calque courant |  | — |  |
| 16 | 96 | Layers > By Index > Get scrolling X coefficient | `lyrGetLayerXCoef(` | Coefficient scrolling en X | nombre « Layer index (1-based) » | — |  |
| 17 | 97 | Layers > By Index > Get scrolling Y coefficient | `lyrGetLayerYCoef(` | Coefficient scrolling en Y | nombre « Layer index (1-based) » | — |  |
| 18 | 98 | Layers > By Name > Get scrolling X coefficient | `lyrGetLayerBnXCoef(` | Coefficient scrolling en X | chaîne « Layer name » | — |  |
| 19 | 99 | Layers > By Name > Get scrolling Y coefficient | `lyrGetLayerBnYCoef(` | Coefficient scrolling en Y | chaîne « Layer name » | — |  |
| 20 | 100 | Layers > By Index > Effect parameter | `lyrGetLayerEffectParam(` | Paramètre Effet | nombre « Layer index (1-based) » ; chaîne « Parameter name » | — |  |
| 21 | 101 | Layers > By Index > Alpha-blending coefficient | `lyrGetLayerAlpha(` | Coefficient de semi-transparence | nombre « Layer index (1-based) » | — |  |
| 22 | 102 | Layers > By Index > RGB coefficient | `lyrGetLayerRGB(` | Coefficient RGB | nombre « Layer index (1-based) » | — |  |
| 23 | 103 | Layers > By Name > Get effect parameter | `lyrGetLayerBnEffectParam(` | Récupérer paramètre Effet | chaîne « Layer name » ; chaîne « Parameter name » | — |  |
| 24 | 104 | Layers > By Name > Get alpha-blending coefficient | `lyrGetLayerBnAlpha(` | Récupérer coefficient de semi-transparence | chaîne « Layer name » | — |  |
| 25 | 105 | Layers > By Name > Get RGB coefficient | `lyrGetLayerBnRGB(` | Récupérer coefficient RGB | chaîne « Layer name » | — |  |
