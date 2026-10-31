# Extension EasyXML

- File: `EasyXML.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Load Sucessful? | `<object> Load Sucessful` |  |  | — |  |
| 1 | -82 | Auto Parse > On Element | `<object> On Element` |  |  | — |  |
| 2 | -83 | Auto Parse > On Comment | `<object> On Comment` |  |  | — |  |
| 3 | -84 | Auto Parse > On Unknown | `<object> On Unknown` |  |  | — |  |
| 4 | -85 | Auto Parse > On Text | `<object> On Text` |  |  | — |  |
| 5 | -86 | Node > Node Has Children? | `<object> Node Has Children` |  |  | — |  |
| 6 | -87 | Error > On Error | `<object> On Error` |  |  | — |  |
| 7 | -88 | Auto Parse > On Attribute | `<object> On Attribute` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load File | `Load File <p0>` |  | string expression “Filename” | — |  |
| 1 | 81 | Save File | `Save File to <p0>` |  | string expression “Filename” | — |  |
| 2 | 82 | Parse | `Parse <p0>` |  | string expression “Data ” | — |  |
| 3 | 83 | BlowFish > Set Key | `Set Key to <p0>` |  | string expression “Key” | — |  |
| 4 | 84 | BlowFish > Load Encrypted File | `Load Encrypted File <p0>` |  | string expression “Filename” | — |  |
| 5 | 85 | BlowFish > Save Encrypted File | `Save Encrypted File to <p0>` |  | string expression “Filename” | — |  |
| 6 | 86 | Auto Parse > Start Parsing | `Start Parsing` |  |  | — |  |
| 7 | 87 | Auto Parse > Stop Parsing | `Stop Parsing` |  |  | — |  |
| 8 | 88 | Node > Set Value | `Set Value to <p0>` |  | string expression “Value” | — |  |
| 9 | 89 | Node > Root Node | `Root Node` |  |  | — |  |
| 10 | 90 | Node > First Child | `First Child` |  |  | — |  |
| 11 | 91 | Node > Find Child | `Find Child with value <p0>` |  | string expression “Value” | — |  |
| 12 | 92 | Node > Last Child | `Last Child` |  |  | — |  |
| 13 | 93 | Node > Next Sibling | `Next Sibling` |  |  | — |  |
| 14 | 94 | Node > Find Sibling | `Find Sibling with value <p0>` |  | string expression “Value” | — |  |
| 15 | 95 | Node > Previous Sibling | `Previous Sibling` |  |  | — |  |
| 16 | 96 | Node > Parent Node | `Parent Node` |  |  | — |  |
| 17 | 97 | Node > Delete Children | `Delete Children` |  |  | — |  |
| 18 | 98 | Node > Delete Child | `Delete Child with value <p0>` |  | string expression “Value” | — |  |
| 19 | 99 | Element > Add Element | `Add Element with name <p0>` |  | string expression “Name” | — |  |
| 20 | 100 | Element > Set Name | `Set Name of element to <p0>` |  | string expression “Name” | — |  |
| 21 | 101 | Element > Set Attribute string | `Set Attribute <p0> to <p1>` |  | string expression “Attribute name”; string expression “Value” | — |  |
| 22 | 102 | Element > Set Attribute value | `Set Attribute <p0> to <p1>` |  | string expression “Attribute name”; numeric expression “Value” | — |  |
| 23 | 103 | Comment > Add Comment | `Add Comment with text <p0>` |  | string expression “Comment Text” | — |  |
| 24 | 104 | Comment > Set Comment text | `Set Comment text to <p0>` |  | string expression “Comment Text” | — |  |
| 25 | 105 | Text > Add Text | `Add Text with text <p0>` |  | string expression “Text” | — |  |
| 26 | 106 | Text > Set Text | `Set Text to text <p0>` |  | string expression “Text” | — |  |
| 27 | 107 | Error > Clear Error | `Clear Error` |  |  | — |  |
| 28 | 108 | Node > Node from index | `Node from index <p0>` |  | numeric expression “Index” | — |  |
| 29 | 109 | Node > Sibling from index | `Sibling from index <p0>` |  | numeric expression “Index” | — |  |
| 30 | 110 | Node > Child from index | `Child from index <p0>` |  | numeric expression “Index” | — |  |
| 31 | 111 | Element > Remove Attribute | `Remove Attribute <p0>` |  | string expression “Attribute” | — |  |
| 32 | 112 | Node > Delete Node | `Delete Node` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `XmlFileName$(` |  | → string | — |  |
| 1 | 81 | Auto Parse > Get Node Index | `XmlAutoNodeIndex(` |  |  | — |  |
| 2 | 82 | Node > Get Node Value | `XmlNodeValue$(` |  | → string | — |  |
| 3 | 83 | Node > Get Node Type | `XmlNodeType(` |  |  | — |  |
| 4 | 84 | Element > Get Element Name | `XmlElemName$(` |  | → string | — |  |
| 5 | 85 | Element > Get Attribute String | `XmlElemAttribStr$(` |  | string → string | — |  |
| 6 | 86 | Element > Get Attribute Value | `XmlElemAttribVal(` |  | string | — |  |
| 7 | 87 | Element > Parent > Get Parent Name | `XmlParentName$(` |  | → string | — |  |
| 8 | 88 | Element > Parent > Get Parent Attribute String | `XmlParentAttribStr$(` |  | string → string | — |  |
| 9 | 89 | Element > Parent > Get Parent Attribute Value | `XmlParentAttribVal(` |  | string | — |  |
| 10 | 90 | Comment > Get Comment string | `GetComStr$(` |  | → string | — |  |
| 11 | 91 | Text > Get Text | `GetTextVal$(` |  | → string | — |  |
| 12 | 92 | Unknown > Get Unknown Text | `GetUnknownText$(` |  | → string | — |  |
| 13 | 93 | Error > Get Error string | `GetErrorStr$(` |  | → string | — |  |
| 14 | 94 | Error > Get Error ID | `GetErrorID(` |  |  | — |  |
| 15 | 95 | Error > Get Error Row | `GetErrorRow(` |  |  | — |  |
| 16 | 96 | Error > Get Error Column | `GetErrorColumn(` |  |  | — |  |
| 17 | 97 | Get Text | `GetDocText$(` |  | → string | — |  |
| 18 | 98 | Element > Get Child Text | `GetChildText$(` |  | → string | — |  |
| 19 | 99 | Element > Get Number of Children | `GetChildNum(` |  |  | — |  |
| 20 | 100 | Element > Parent > Get Number of Children | `GetParChildNum(` |  |  | — |  |
| 21 | 101 | Get Total Nodes | `GetTotalNodes(` |  |  | — |  |
| 22 | 102 | Node > Get Node Index | `XmlNodeIndex(` |  |  | — |  |
| 23 | 103 | Node > Get Node Relative Index | `XmlNodeRelIndex(` |  |  | — |  |
| 24 | 104 | Node > Get Node Depth | `XmlNodeDepth(` |  |  | — |  |
| 25 | 105 | Element > Get Attribute Index | `XmlAttribIndex(` |  |  | — |  |
| 26 | 106 | Element > Get Attribute Name | `XmlAttribName$(` |  | number → string | — |  |
| 27 | 107 | Element > Get Attribute Total | `XmlAttribTotal(` |  |  | — |  |
