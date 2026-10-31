# Extension LSOLoad

- File: `LSOLoad.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Load (Success) | `<object>: On Successful Load` |  |  | — |  |
| 1 | -82 | On Load (Failure) | `<object>: On Failed Load` |  |  | — |  |
| 2 | -83 | Stored Objects > Object is Stored (Selector) | `<object>: On Object Loop` |  |  | — |  |
| 3 | -84 | Stored Objects > Object is Stored (Fixed) | `<object>: Object <p0> is Stored` |  | object “Object” | — |  |
| 4 | -85 | Object Properties > Object has Property (Selector) | `<object>: Object <p0> is Stored` |  | numeric expression “Fixed Value” | — |  |
| 5 | -86 | Object Properties > Object has Property (Fixed) | `<object>: Object <p0> has Property <p1>` |  | object “Object”; string expression “Property Name” | — |  |
| 6 | -87 | Level Properties > Property Exists | `<object>: Object <p0> has Property <p1>` |  | numeric expression “Fixed Value”; string expression “Property Name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load File | `Load Level from <p0>` |  | file name “File” | — |  |
| 1 | 81 | Clear Loaded Data | `Clear all Loaded Data` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Total Number of Objects | `TotalObjs(` |  |  | — |  |
| 1 | 81 | Stored Objects > Total Objects of Type | `TotalOfType(` |  | string “Object Type” | — |  |
| 2 | 82 | Stored Objects > Number of Object Types | `TotalTypes(` |  |  | — |  |
| 3 | 83 | Stored Objects > Get Object At | `ObjAt(` |  | number “Position” | — |  |
| 4 | 84 | Stored Objects > Object Information > Object Type | `ObjType$(` |  | number “Fixed Value” → string | — |  |
| 5 | 85 | Stored Objects > Object Information > Stored Index | `ObjIndex(` |  | number “Fixed Value” | — |  |
| 6 | 86 | Stored Objects > Object Information > X-Position | `ObjX(` |  | number “Fixed Value” | — |  |
| 7 | 87 | Stored Objects > Object Information > Y-Position | `ObjY(` |  | number “Fixed Value” | — |  |
| 8 | 88 | Object Properties > Value Property | `ValProp(` |  | number “Fixed Value”; string “Name of Property” | — |  |
| 9 | 89 | Object Properties > String Property | `StrProp$(` |  | number “Fixed Value”; string “Name of Property” → string | — |  |
| 10 | 90 | Object Properties > Total/Count > Number of Properties in Object | `ObjNumProps(` |  | number “Fixed Value” | — |  |
| 11 | 91 | Object Properties > Total/Count > Total Number of Properties | `TotalNumProps(` |  |  | — |  |
| 12 | 92 | Object Properties > Total/Count > Number of Value Properties in Object | `ObjNumValProps(` |  | number “Fixed Value” | — |  |
| 13 | 93 | Object Properties > Total/Count > Total Number of Value Properties | `TotalNumValProps(` |  |  | — |  |
| 14 | 94 | Object Properties > Total/Count > Number of String Properties in Object | `ObjNumStrProps(` |  | number “Fixed Value” | — |  |
| 15 | 95 | Object Properties > Total/Count > Total Number of String Properties | `TotalNumStrProps(` |  |  | — |  |
| 16 | 96 | Object Properties > Iteration > Value Property At (for Single Object) | `ObjValPropAt$(` |  | number “Fixed Value”; number “Index” → string | — |  |
| 17 | 97 | Object Properties > Iteration > String Property At (for Single Object) | `ObjStrPropAt$(` |  | number “Fixed Value”; number “Index” → string | — |  |
| 18 | 98 | Object Properties > Iteration > Value Property At (for Object Type) | `ObjTypeValPropAt$(` |  | string “Object Type”; number “Index” → string | — |  |
| 19 | 99 | Object Properties > Iteration > String Property At (for Object Type) | `ObjTypeStrPropAt$(` |  | string “Object Type”; number “Index” → string | — |  |
| 20 | 100 | Object Properties > Iteration > Value Property At (for All Objects) | `ValPropAt$(` |  | number “Index” → string | — |  |
| 21 | 101 | Object Properties > Iteration > String Property At (for All Objects) | `StrPropAt$(` |  | number “Index” → string | — |  |
| 22 | 102 | Level Properties > Value Property | `LevValProp(` |  | string “Property Name” | — |  |
| 23 | 103 | Level Properties > String Property | `LevStrProp$(` |  | string “Property Name” → string | — |  |
| 24 | 104 | Level Properties > Total Number of Properties | `TotalLevProps(` |  |  | — |  |
| 25 | 105 | Level Properties > Total Value Properties | `TotalLevValProps(` |  |  | — |  |
| 26 | 106 | Level Properties > Total String Properties | `TotalLevStrProps(` |  |  | — |  |
| 27 | 107 | Level Properties > Value Property At | `LevValPropAt$(` |  | number “Index” → string | — |  |
| 28 | 108 | Level Properties > String Property At | `LevStrPropAt$(` |  | number “Index” → string | — |  |
