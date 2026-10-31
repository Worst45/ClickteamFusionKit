# Extension EasyXML

- Fichier : `EasyXML.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Load Sucessful? | `<objet> Load Sucessful` |  |  | — |  |
| 1 | -82 | Auto Parse > On Element | `<objet> On Element` |  |  | — |  |
| 2 | -83 | Auto Parse > On Comment | `<objet> On Comment` |  |  | — |  |
| 3 | -84 | Auto Parse > On Unknown | `<objet> On Unknown` |  |  | — |  |
| 4 | -85 | Auto Parse > On Text | `<objet> On Text` |  |  | — |  |
| 5 | -86 | Node > Node Has Children? | `<objet> Node Has Children` |  |  | — |  |
| 6 | -87 | Error > On Error | `<objet> On Error` |  |  | — |  |
| 7 | -88 | Auto Parse > On Attribute | `<objet> On Attribute` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load File | `Load File <p0>` |  | expression chaîne « Filename » | — |  |
| 1 | 81 | Save File | `Save File to <p0>` |  | expression chaîne « Filename » | — |  |
| 2 | 82 | Parse | `Parse <p0>` |  | expression chaîne « Data  » | — |  |
| 3 | 83 | BlowFish > Set Key | `Set Key to <p0>` |  | expression chaîne « Key » | — |  |
| 4 | 84 | BlowFish > Load Encrypted File | `Load Encrypted File <p0>` |  | expression chaîne « Filename » | — |  |
| 5 | 85 | BlowFish > Save Encrypted File | `Save Encrypted File to <p0>` |  | expression chaîne « Filename » | — |  |
| 6 | 86 | Auto Parse > Start Parsing | `Start Parsing` |  |  | — |  |
| 7 | 87 | Auto Parse > Stop Parsing | `Stop Parsing` |  |  | — |  |
| 8 | 88 | Node > Set Value | `Set Value to <p0>` |  | expression chaîne « Value » | — |  |
| 9 | 89 | Node > Root Node | `Root Node` |  |  | — |  |
| 10 | 90 | Node > First Child | `First Child` |  |  | — |  |
| 11 | 91 | Node > Find Child | `Find Child with value <p0>` |  | expression chaîne « Value » | — |  |
| 12 | 92 | Node > Last Child | `Last Child` |  |  | — |  |
| 13 | 93 | Node > Next Sibling | `Next Sibling` |  |  | — |  |
| 14 | 94 | Node > Find Sibling | `Find Sibling with value <p0>` |  | expression chaîne « Value » | — |  |
| 15 | 95 | Node > Previous Sibling | `Previous Sibling` |  |  | — |  |
| 16 | 96 | Node > Parent Node | `Parent Node` |  |  | — |  |
| 17 | 97 | Node > Delete Children | `Delete Children` |  |  | — |  |
| 18 | 98 | Node > Delete Child | `Delete Child with value <p0>` |  | expression chaîne « Value » | — |  |
| 19 | 99 | Element > Add Element | `Add Element with name <p0>` |  | expression chaîne « Name » | — |  |
| 20 | 100 | Element > Set Name | `Set Name of element to <p0>` |  | expression chaîne « Name » | — |  |
| 21 | 101 | Element > Set Attribute string | `Set Attribute <p0> to <p1>` |  | expression chaîne « Attribute name » ; expression chaîne « Value » | — |  |
| 22 | 102 | Element > Set Attribute value | `Set Attribute <p0> to <p1>` |  | expression chaîne « Attribute name » ; expression numérique « Value » | — |  |
| 23 | 103 | Comment > Add Comment | `Add Comment with text <p0>` |  | expression chaîne « Comment Text » | — |  |
| 24 | 104 | Comment > Set Comment text | `Set Comment text to <p0>` |  | expression chaîne « Comment Text » | — |  |
| 25 | 105 | Text > Add Text | `Add Text with text <p0>` |  | expression chaîne « Text » | — |  |
| 26 | 106 | Text > Set Text | `Set Text to text <p0>` |  | expression chaîne « Text » | — |  |
| 27 | 107 | Error > Clear Error | `Clear Error` |  |  | — |  |
| 28 | 108 | Node > Node from index | `Node from index <p0>` |  | expression numérique « Index » | — |  |
| 29 | 109 | Node > Sibling from index | `Sibling from index <p0>` |  | expression numérique « Index » | — |  |
| 30 | 110 | Node > Child from index | `Child from index <p0>` |  | expression numérique « Index » | — |  |
| 31 | 111 | Element > Remove Attribute | `Remove Attribute <p0>` |  | expression chaîne « Attribute » | — |  |
| 32 | 112 | Node > Delete Node | `Delete Node` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `XmlFileName$(` |  | → chaîne | — |  |
| 1 | 81 | Auto Parse > Get Node Index | `XmlAutoNodeIndex(` |  |  | — |  |
| 2 | 82 | Node > Get Node Value | `XmlNodeValue$(` |  | → chaîne | — |  |
| 3 | 83 | Node > Get Node Type | `XmlNodeType(` |  |  | — |  |
| 4 | 84 | Element > Get Element Name | `XmlElemName$(` |  | → chaîne | — |  |
| 5 | 85 | Element > Get Attribute String | `XmlElemAttribStr$(` |  | chaîne → chaîne | — |  |
| 6 | 86 | Element > Get Attribute Value | `XmlElemAttribVal(` |  | chaîne | — |  |
| 7 | 87 | Element > Parent > Get Parent Name | `XmlParentName$(` |  | → chaîne | — |  |
| 8 | 88 | Element > Parent > Get Parent Attribute String | `XmlParentAttribStr$(` |  | chaîne → chaîne | — |  |
| 9 | 89 | Element > Parent > Get Parent Attribute Value | `XmlParentAttribVal(` |  | chaîne | — |  |
| 10 | 90 | Comment > Get Comment string | `GetComStr$(` |  | → chaîne | — |  |
| 11 | 91 | Text > Get Text | `GetTextVal$(` |  | → chaîne | — |  |
| 12 | 92 | Unknown > Get Unknown Text | `GetUnknownText$(` |  | → chaîne | — |  |
| 13 | 93 | Error > Get Error string | `GetErrorStr$(` |  | → chaîne | — |  |
| 14 | 94 | Error > Get Error ID | `GetErrorID(` |  |  | — |  |
| 15 | 95 | Error > Get Error Row | `GetErrorRow(` |  |  | — |  |
| 16 | 96 | Error > Get Error Column | `GetErrorColumn(` |  |  | — |  |
| 17 | 97 | Get Text | `GetDocText$(` |  | → chaîne | — |  |
| 18 | 98 | Element > Get Child Text | `GetChildText$(` |  | → chaîne | — |  |
| 19 | 99 | Element > Get Number of Children | `GetChildNum(` |  |  | — |  |
| 20 | 100 | Element > Parent > Get Number of Children | `GetParChildNum(` |  |  | — |  |
| 21 | 101 | Get Total Nodes | `GetTotalNodes(` |  |  | — |  |
| 22 | 102 | Node > Get Node Index | `XmlNodeIndex(` |  |  | — |  |
| 23 | 103 | Node > Get Node Relative Index | `XmlNodeRelIndex(` |  |  | — |  |
| 24 | 104 | Node > Get Node Depth | `XmlNodeDepth(` |  |  | — |  |
| 25 | 105 | Element > Get Attribute Index | `XmlAttribIndex(` |  |  | — |  |
| 26 | 106 | Element > Get Attribute Name | `XmlAttribName$(` |  | nombre → chaîne | — |  |
| 27 | 107 | Element > Get Attribute Total | `XmlAttribTotal(` |  |  | — |  |
