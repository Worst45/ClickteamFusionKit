# Extension LSOLoad

- Fichier : `LSOLoad.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Load (Success) | `<objet>: On Successful Load` |  |  | — |  |
| 1 | -82 | On Load (Failure) | `<objet>: On Failed Load` |  |  | — |  |
| 2 | -83 | Stored Objects > Object is Stored (Selector) | `<objet>: On Object Loop` |  |  | — |  |
| 3 | -84 | Stored Objects > Object is Stored (Fixed) | `<objet>: Object <p0> is Stored` |  | objet « Object » | — |  |
| 4 | -85 | Object Properties > Object has Property (Selector) | `<objet>: Object <p0> is Stored` |  | expression numérique « Fixed Value » | — |  |
| 5 | -86 | Object Properties > Object has Property (Fixed) | `<objet>: Object <p0> has Property <p1>` |  | objet « Object » ; expression chaîne « Property Name » | — |  |
| 6 | -87 | Level Properties > Property Exists | `<objet>: Object <p0> has Property <p1>` |  | expression numérique « Fixed Value » ; expression chaîne « Property Name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load File | `Load Level from <p0>` |  | nom de fichier « File » | — |  |
| 1 | 81 | Clear Loaded Data | `Clear all Loaded Data` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Total Number of Objects | `TotalObjs(` |  |  | — |  |
| 1 | 81 | Stored Objects > Total Objects of Type | `TotalOfType(` |  | chaîne « Object Type » | — |  |
| 2 | 82 | Stored Objects > Number of Object Types | `TotalTypes(` |  |  | — |  |
| 3 | 83 | Stored Objects > Get Object At | `ObjAt(` |  | nombre « Position » | — |  |
| 4 | 84 | Stored Objects > Object Information > Object Type | `ObjType$(` |  | nombre « Fixed Value » → chaîne | — |  |
| 5 | 85 | Stored Objects > Object Information > Stored Index | `ObjIndex(` |  | nombre « Fixed Value » | — |  |
| 6 | 86 | Stored Objects > Object Information > X-Position | `ObjX(` |  | nombre « Fixed Value » | — |  |
| 7 | 87 | Stored Objects > Object Information > Y-Position | `ObjY(` |  | nombre « Fixed Value » | — |  |
| 8 | 88 | Object Properties > Value Property | `ValProp(` |  | nombre « Fixed Value » ; chaîne « Name of Property » | — |  |
| 9 | 89 | Object Properties > String Property | `StrProp$(` |  | nombre « Fixed Value » ; chaîne « Name of Property » → chaîne | — |  |
| 10 | 90 | Object Properties > Total/Count > Number of Properties in Object | `ObjNumProps(` |  | nombre « Fixed Value » | — |  |
| 11 | 91 | Object Properties > Total/Count > Total Number of Properties | `TotalNumProps(` |  |  | — |  |
| 12 | 92 | Object Properties > Total/Count > Number of Value Properties in Object | `ObjNumValProps(` |  | nombre « Fixed Value » | — |  |
| 13 | 93 | Object Properties > Total/Count > Total Number of Value Properties | `TotalNumValProps(` |  |  | — |  |
| 14 | 94 | Object Properties > Total/Count > Number of String Properties in Object | `ObjNumStrProps(` |  | nombre « Fixed Value » | — |  |
| 15 | 95 | Object Properties > Total/Count > Total Number of String Properties | `TotalNumStrProps(` |  |  | — |  |
| 16 | 96 | Object Properties > Iteration > Value Property At (for Single Object) | `ObjValPropAt$(` |  | nombre « Fixed Value » ; nombre « Index » → chaîne | — |  |
| 17 | 97 | Object Properties > Iteration > String Property At (for Single Object) | `ObjStrPropAt$(` |  | nombre « Fixed Value » ; nombre « Index » → chaîne | — |  |
| 18 | 98 | Object Properties > Iteration > Value Property At (for Object Type) | `ObjTypeValPropAt$(` |  | chaîne « Object Type » ; nombre « Index » → chaîne | — |  |
| 19 | 99 | Object Properties > Iteration > String Property At (for Object Type) | `ObjTypeStrPropAt$(` |  | chaîne « Object Type » ; nombre « Index » → chaîne | — |  |
| 20 | 100 | Object Properties > Iteration > Value Property At (for All Objects) | `ValPropAt$(` |  | nombre « Index » → chaîne | — |  |
| 21 | 101 | Object Properties > Iteration > String Property At (for All Objects) | `StrPropAt$(` |  | nombre « Index » → chaîne | — |  |
| 22 | 102 | Level Properties > Value Property | `LevValProp(` |  | chaîne « Property Name » | — |  |
| 23 | 103 | Level Properties > String Property | `LevStrProp$(` |  | chaîne « Property Name » → chaîne | — |  |
| 24 | 104 | Level Properties > Total Number of Properties | `TotalLevProps(` |  |  | — |  |
| 25 | 105 | Level Properties > Total Value Properties | `TotalLevValProps(` |  |  | — |  |
| 26 | 106 | Level Properties > Total String Properties | `TotalLevStrProps(` |  |  | — |  |
| 27 | 107 | Level Properties > Value Property At | `LevValPropAt$(` |  | nombre « Index » → chaîne | — |  |
| 28 | 108 | Level Properties > String Property At | `LevStrPropAt$(` |  | nombre « Index » → chaîne | — |  |
