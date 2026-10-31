# Extension LSOSave

- Fichier : `LSOSave.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stored Objects > Object is Stored (Selector) | `<objet>: Object <p0> is Stored` |  | objet « Object » | — |  |
| 1 | -82 | Stored Objects > Object is Stored (Fixed) | `<objet>: Object <p0> is Stored` |  | expression numérique « Fixed Value » | — |  |
| 2 | -83 | Object Properties > Object has Property (Selector) | `<objet>: Object <p0> has Property <p1>` |  | objet « Object » ; expression chaîne « Property Name » | — |  |
| 3 | -84 | Object Properties > Object has Property (Fixed) | `<objet>: Object <p0> has Property <p1>` |  | expression numérique « Fixed Value » ; expression chaîne « Property Name » | — |  |
| 4 | -85 | Level Properties > Property Exists | `<objet>: Level Property <p0> Exists` |  | expression chaîne « Property Name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Add Object (Selector) | `Add Object of Type <p0> from <p1>` |  | expression chaîne « Type of Object » ; objet « Object » | — |  |
| 1 | 81 | Stored Objects > Add Object (Fixed) | `Add Object of Type <p0> from <p1>` |  | expression chaîne « Type of Object » ; expression numérique « Fixed Value » | — |  |
| 2 | 82 | Stored Objects > Remove Object (Selector) | `Remove Object <p0> (Destroy=<p1>)` |  | objet « Object » ; expression numérique « Destroy Object in Frame? (0=No, 1=Yes) » | — |  |
| 3 | 83 | Stored Objects > Remove Object (Fixed) | `Remove Object <p0> (Destroy=<p1>)` |  | expression numérique « Fixed Value » ; expression numérique « Destroy Object in Frame? (0=No, 1=Yes) » | — |  |
| 4 | 84 | Stored Objects > Remove all Objects of Type | `Remove all Objects of Type <p0> (Destroy=<p1>)` |  | expression chaîne « Type » ; expression numérique « Destroy Objects in Frame? (0=No, 1=Yes) » | — |  |
| 5 | 85 | Stored Objects > Remove all Objects | `Remove all Objects (Destroy=<p0>)` |  | expression numérique « Destroy Objects in Frame? (0=No, 1=Yes) » | — |  |
| 6 | 86 | Object Properties > Add/Set Properties > Value, Single Object (Selector) | `Set Value Property <p1> to <p2> for Object <p0>` |  | objet « Object » ; expression chaîne « Name of Property » ; expression numérique « Value to Set » | — |  |
| 7 | 87 | Object Properties > Add/Set Properties > Value, Single Object (Fixed) | `Set Value Property <p1> to <p2> for Object <p0>` |  | expression numérique « Fixed Value » ; expression chaîne « Name of Property » ; expression numérique « Value to Set » | — |  |
| 8 | 88 | Object Properties > Add/Set Properties > Value, All Objects of Type | `Set Value Property <p1> to <p2> for all Objects of Type <p0>` |  | expression chaîne « Object Type » ; expression chaîne « Name of Property » ; expression numérique « Value to Set » | — |  |
| 9 | 89 | Object Properties > Add/Set Properties > Value, All Stored Objects | `Set Value Property <p1> to <p2> for all Stored Objects` |  | expression chaîne « Name of Property » ; expression numérique « Value to Set » | — |  |
| 10 | 90 | Object Properties > Add/Set Properties > String, Single Object (Selector) | `Set String Property <p1> to <p2> for Object <p0>` |  | objet « Object » ; expression chaîne « Name of Property » ; expression chaîne « String to Set » | — |  |
| 11 | 91 | Object Properties > Add/Set Properties > String, Single Object (Fixed) | `Set String Property <p1> to <p2> for Object <p0>` |  | expression numérique « Fixed Value » ; expression chaîne « Name of Property » ; expression chaîne « String to Set » | — |  |
| 12 | 92 | Object Properties > Add/Set Properties > String, All Objects of Type | `Set String Property <p1> to <p2> for all Objects of Type <p0>` |  | expression chaîne « Object Type » ; expression chaîne « Name of Property » ; expression chaîne « String to Set » | — |  |
| 13 | 93 | Object Properties > Add/Set Properties > String, All Stored Objects | `Set String Property <p1> to <p2> for all Stored Objects` |  | expression chaîne « Name of Property » ; expression chaîne « String to Set » | — |  |
| 14 | 94 | Object Properties > Remove Properties > Single Object (Selector) | `Remove Property <p1> from Object <p0>` |  | objet « Object » ; expression chaîne « Name of Property (Leave Blank to Remove All Properties) » | — |  |
| 15 | 95 | Object Properties > Remove Properties > Single Object (Fixed) | `Remove Property <p1> from Object <p0>` |  | expression numérique « Fixed Value » ; expression chaîne « Name of Property (Leave Blank to Remove All Properties) » | — |  |
| 16 | 96 | Object Properties > Remove Properties > All Objects of Type | `Remove Property <p1> from all Objects of Type <p0>` |  | expression chaîne « Object Type » ; expression chaîne « Name of Property (Leave Blank to Remove All Properties) » | — |  |
| 17 | 97 | Object Properties > Remove Properties > All Stored Objects | `Remove Property <p0> from all Stored Objects` |  | expression chaîne « Name of Property (Leave Blank to Remove All Properties) » | — |  |
| 18 | 98 | Level Properties > Add/Set Value Property | `Set Level Value Property <p0> to <p1>` |  | expression chaîne « Name of Property » ; expression numérique « Value to Set » | — |  |
| 19 | 99 | Level Properties > Add/Set String Property | `Set Level String Property <p0> to <p1>` |  | expression chaîne « Name of Property » ; expression chaîne « String to Set » | — |  |
| 20 | 100 | Level Properties > Remove Property | `Remove Level Property <p0>` |  | expression chaîne « Name of Property » | — |  |
| 21 | 101 | Level Properties > Remove all Properties | `Remove all Level Properties` |  |  | — |  |
| 22 | 102 | File Communication > Save to File | `Save Level to <p0>` |  | nom de fichier « File » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Total Number of Objects | `TotalObjs(` |  |  | — |  |
| 1 | 81 | Stored Objects > Total Objects of Type | `TotalOfType(` |  | chaîne « Object Type » | — |  |
| 2 | 82 | Stored Objects > Number of Object Types | `TotalTypes(` |  |  | — |  |
| 3 | 83 | Stored Objects > Get Object At | `ObjAt(` |  | nombre « Position » | — |  |
| 4 | 84 | Stored Objects > Object Information > Object Type | `ObjType$(` |  | nombre « Fixed Value » → chaîne | — |  |
| 5 | 85 | Stored Objects > Object Information > Stored Index | `ObjIndex(` |  | nombre « Fixed Value » | — |  |
| 6 | 86 | Stored Objects > Object Information > X-Position When Added | `ObjStartX(` |  | nombre « Fixed Value » | — |  |
| 7 | 87 | Stored Objects > Object Information > Y-Position When Added | `ObjStartY(` |  | nombre « Fixed Value » | — |  |
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
