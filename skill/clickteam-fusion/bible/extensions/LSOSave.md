# Extension LSOSave

- File: `LSOSave.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stored Objects > Object is Stored (Selector) | `<object>: Object <p0> is Stored` |  | object “Object” | — |  |
| 1 | -82 | Stored Objects > Object is Stored (Fixed) | `<object>: Object <p0> is Stored` |  | numeric expression “Fixed Value” | — |  |
| 2 | -83 | Object Properties > Object has Property (Selector) | `<object>: Object <p0> has Property <p1>` |  | object “Object”; string expression “Property Name” | — |  |
| 3 | -84 | Object Properties > Object has Property (Fixed) | `<object>: Object <p0> has Property <p1>` |  | numeric expression “Fixed Value”; string expression “Property Name” | — |  |
| 4 | -85 | Level Properties > Property Exists | `<object>: Level Property <p0> Exists` |  | string expression “Property Name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Add Object (Selector) | `Add Object of Type <p0> from <p1>` |  | string expression “Type of Object”; object “Object” | — |  |
| 1 | 81 | Stored Objects > Add Object (Fixed) | `Add Object of Type <p0> from <p1>` |  | string expression “Type of Object”; numeric expression “Fixed Value” | — |  |
| 2 | 82 | Stored Objects > Remove Object (Selector) | `Remove Object <p0> (Destroy=<p1>)` |  | object “Object”; numeric expression “Destroy Object in Frame? (0=No, 1=Yes)” | — |  |
| 3 | 83 | Stored Objects > Remove Object (Fixed) | `Remove Object <p0> (Destroy=<p1>)` |  | numeric expression “Fixed Value”; numeric expression “Destroy Object in Frame? (0=No, 1=Yes)” | — |  |
| 4 | 84 | Stored Objects > Remove all Objects of Type | `Remove all Objects of Type <p0> (Destroy=<p1>)` |  | string expression “Type”; numeric expression “Destroy Objects in Frame? (0=No, 1=Yes)” | — |  |
| 5 | 85 | Stored Objects > Remove all Objects | `Remove all Objects (Destroy=<p0>)` |  | numeric expression “Destroy Objects in Frame? (0=No, 1=Yes)” | — |  |
| 6 | 86 | Object Properties > Add/Set Properties > Value, Single Object (Selector) | `Set Value Property <p1> to <p2> for Object <p0>` |  | object “Object”; string expression “Name of Property”; numeric expression “Value to Set” | — |  |
| 7 | 87 | Object Properties > Add/Set Properties > Value, Single Object (Fixed) | `Set Value Property <p1> to <p2> for Object <p0>` |  | numeric expression “Fixed Value”; string expression “Name of Property”; numeric expression “Value to Set” | — |  |
| 8 | 88 | Object Properties > Add/Set Properties > Value, All Objects of Type | `Set Value Property <p1> to <p2> for all Objects of Type <p0>` |  | string expression “Object Type”; string expression “Name of Property”; numeric expression “Value to Set” | — |  |
| 9 | 89 | Object Properties > Add/Set Properties > Value, All Stored Objects | `Set Value Property <p1> to <p2> for all Stored Objects` |  | string expression “Name of Property”; numeric expression “Value to Set” | — |  |
| 10 | 90 | Object Properties > Add/Set Properties > String, Single Object (Selector) | `Set String Property <p1> to <p2> for Object <p0>` |  | object “Object”; string expression “Name of Property”; string expression “String to Set” | — |  |
| 11 | 91 | Object Properties > Add/Set Properties > String, Single Object (Fixed) | `Set String Property <p1> to <p2> for Object <p0>` |  | numeric expression “Fixed Value”; string expression “Name of Property”; string expression “String to Set” | — |  |
| 12 | 92 | Object Properties > Add/Set Properties > String, All Objects of Type | `Set String Property <p1> to <p2> for all Objects of Type <p0>` |  | string expression “Object Type”; string expression “Name of Property”; string expression “String to Set” | — |  |
| 13 | 93 | Object Properties > Add/Set Properties > String, All Stored Objects | `Set String Property <p1> to <p2> for all Stored Objects` |  | string expression “Name of Property”; string expression “String to Set” | — |  |
| 14 | 94 | Object Properties > Remove Properties > Single Object (Selector) | `Remove Property <p1> from Object <p0>` |  | object “Object”; string expression “Name of Property (Leave Blank to Remove All Properties)” | — |  |
| 15 | 95 | Object Properties > Remove Properties > Single Object (Fixed) | `Remove Property <p1> from Object <p0>` |  | numeric expression “Fixed Value”; string expression “Name of Property (Leave Blank to Remove All Properties)” | — |  |
| 16 | 96 | Object Properties > Remove Properties > All Objects of Type | `Remove Property <p1> from all Objects of Type <p0>` |  | string expression “Object Type”; string expression “Name of Property (Leave Blank to Remove All Properties)” | — |  |
| 17 | 97 | Object Properties > Remove Properties > All Stored Objects | `Remove Property <p0> from all Stored Objects` |  | string expression “Name of Property (Leave Blank to Remove All Properties)” | — |  |
| 18 | 98 | Level Properties > Add/Set Value Property | `Set Level Value Property <p0> to <p1>` |  | string expression “Name of Property”; numeric expression “Value to Set” | — |  |
| 19 | 99 | Level Properties > Add/Set String Property | `Set Level String Property <p0> to <p1>` |  | string expression “Name of Property”; string expression “String to Set” | — |  |
| 20 | 100 | Level Properties > Remove Property | `Remove Level Property <p0>` |  | string expression “Name of Property” | — |  |
| 21 | 101 | Level Properties > Remove all Properties | `Remove all Level Properties` |  |  | — |  |
| 22 | 102 | File Communication > Save to File | `Save Level to <p0>` |  | file name “File” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Total Number of Objects | `TotalObjs(` |  |  | — |  |
| 1 | 81 | Stored Objects > Total Objects of Type | `TotalOfType(` |  | string “Object Type” | — |  |
| 2 | 82 | Stored Objects > Number of Object Types | `TotalTypes(` |  |  | — |  |
| 3 | 83 | Stored Objects > Get Object At | `ObjAt(` |  | number “Position” | — |  |
| 4 | 84 | Stored Objects > Object Information > Object Type | `ObjType$(` |  | number “Fixed Value” → string | — |  |
| 5 | 85 | Stored Objects > Object Information > Stored Index | `ObjIndex(` |  | number “Fixed Value” | — |  |
| 6 | 86 | Stored Objects > Object Information > X-Position When Added | `ObjStartX(` |  | number “Fixed Value” | — |  |
| 7 | 87 | Stored Objects > Object Information > Y-Position When Added | `ObjStartY(` |  | number “Fixed Value” | — |  |
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
