# Extension PosControl

- Fichier : `PosControl.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stored Objects > Object is Stored | `<objet>: Object <p0> is Stored` |  | objet « Object » | — |  |
| 1 | -82 | Attach Objects > Object is Parent | `<objet>: Object <p0> is an Attachment Parent` |  | objet « Object » | — |  |
| 2 | -83 | Attach Objects > Object is Child | `<objet>: Object <p0> is an Attachment Child` |  | objet « Object » | — |  |
| 3 | -84 | Track Movement > On Object Movement | `<objet>: On Movement of <p0>` |  | objet « Object » | — |  |
| 4 | -85 | Track Movement > Object has Tracker | `<objet>: Object <p0> has Tracker` |  | objet « Object » | — |  |
| 5 | -86 | Bounding Box > Contains Point | `<objet>: Bounding Box of <p0> Contains Point (<p1>,<p2>)` |  | objet « Object » ; expression numérique « X » ; expression numérique « Y » | — |  |
| 6 | -87 | Bounding Box > Contains Rectangle | `<objet>: Bounding Box of <p0> Contains Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | objet « Object » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 7 | -88 | Bounding Box > Overlaps Rectangle | `<objet>: Bounding Box of <p0> Overlaps Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | objet « Object » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 8 | -89 | Bounding Box > Is Inside Rectangle | `<objet>: Bounding Box of <p0> is Inside Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | objet « Object » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 9 | -90 | Force Position > On Position Force | `<objet>: On Position Force` |  |  | — |  |
| 10 | -91 | Force Position > Last Force Had Effect | `<objet>: Last Position Force Had Effect` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Store Object | `Store Object <p0>` |  | objet « Object » ; expression numérique « Store Object if Duplicate? (0=No, 1=Yes) » | — |  |
| 1 | 81 | Stored Objects > Remove All | `Remove All Stored Objects` |  |  | — |  |
| 2 | 82 | Align in Frame > Single Object > Align Left | `Align Object <p0> to the Left (Border: <p1>)` |  | objet « Object » ; expression numérique « Left Border » | — |  |
| 3 | 83 | Align in Frame > Single Object > Align Horz Center | `Horizontally Center Object <p0> (Borders: <p1>, <p2>)` |  | objet « Object » ; expression numérique « Left Border » ; expression numérique « Right Border » | — |  |
| 4 | 84 | Align in Frame > Single Object > Align Right | `Align Object <p0> to the Right (Border: <p1>)` |  | objet « Object » ; expression numérique « Right Border » | — |  |
| 5 | 85 | Align in Frame > Single Object > Align Top | `Align Object <p0> to the Top (Border: <p1>)` |  | objet « Object » ; expression numérique « Top Border » | — |  |
| 6 | 86 | Align in Frame > Single Object > Align Vert Center | `Vertically Center Object <p0> (Borders: <p1>, <p2>)` |  | objet « Object » ; expression numérique « Top Border » ; expression numérique « Bottom Border » | — |  |
| 7 | 87 | Align in Frame > Single Object > Align Bottom | `Align Object <p0> to the Bottom (Border: <p1>)` |  | objet « Object » ; expression numérique « Bottom Border » | — |  |
| 8 | 88 | Align in Frame > Stored Objects > Align Left | `Align Stored Objects to the Left (Group: <p0>) (Border: <p1>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Left Border » | — |  |
| 9 | 89 | Align in Frame > Stored Objects > Align Horz Center | `Horizontally Center Stored Objects (Group: <p0>) (Borders: <p1>, <p2>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Left Border » ; expression numérique « Right Border » | — |  |
| 10 | 90 | Align in Frame > Stored Objects > Align Right | `Align Stored Objects to the Right (Group: <p0>) (Border: <p1>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Right Border » | — |  |
| 11 | 91 | Align in Frame > Stored Objects > Align Top | `Align Stored Objects to the Top (Group: <p0>) (Border: <p1>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Top Border » | — |  |
| 12 | 92 | Align in Frame > Stored Objects > Align Vert Center | `Vertically Center Stored Objects (Group: <p0>) (Borders: <p1>, <p2>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Top Border » ; expression numérique « Bottom Border » | — |  |
| 13 | 93 | Align in Frame > Stored Objects > Align Bottom | `Align Stored Objects to the Bottom (Group: <p0>) (Border: <p1>)` |  | expression numérique « Use Objects as Group? (0=No, 1=Yes) » ; expression numérique « Bottom Border » | — |  |
| 14 | 94 | Align Objects > Left | `Align Left Borders of Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 15 | 95 | Align Objects > Horz Center | `Horizontally Center Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 16 | 96 | Align Objects > Right | `Align Right Borders of Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 17 | 97 | Align Objects > Top | `Align Top Borders of Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 18 | 98 | Align Objects > Vert Center | `Vertically Center Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 19 | 99 | Align Objects > Bottom | `Align Bottom Borders of Stored Objects with Master Object <p0>` |  | objet « Master Object » | — |  |
| 20 | 100 | Attach Objects > Attach Single Object | `Attach <p1> to <p0>` |  | objet « Parent Object » ; objet « Child Object » | — |  |
| 21 | 101 | Attach Objects > Attach Stored Objects | `Attach all Stored Objects to <p0>` |  | objet « Parent Object » | — |  |
| 22 | 102 | Attach Objects > Detach Single Object | `Detach <p0> from Parent` |  | objet « Object » | — |  |
| 23 | 103 | Attach Objects > Detach Children | `Detach all Children of <p0>` |  | objet « Object » | — |  |
| 24 | 104 | Attach Objects > Detach All Objects | `Detach all Attached Objects` |  |  | — |  |
| 25 | 105 | Attach Objects > Update Attachments | `Update Attached Objects` |  |  | — |  |
| 26 | 106 | Track Movement > Create Tracker (Single Object) | `Create Movement Tracker for <p0>` |  | objet « Object » | — |  |
| 27 | 107 | Track Movement > Create Tracker (Stored Objects) | `Create Movement Trackers for all Stored Objects` |  |  | — |  |
| 28 | 108 | Track Movement > Remove Tracker (Single Object) | `Remove Movement Tracker from <p0>` |  | objet « Object » | — |  |
| 29 | 109 | Track Movement > Remove Tracker (All Objects) | `Remove all Movement Trackers` |  |  | — |  |
| 30 | 110 | Track Movement > Test for Movement | `Test Objects for Movement` |  |  | — |  |
| 31 | 111 | Force Position > Single Object > Into Rectangle | `Force Object <p0> Into Rectangle (<p1>,<p2>)-(<p3>,<p4>) With Method <p5>` |  | objet « Object » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Method (0=Coordinates, 1=Bounding Box) » | — |  |
| 32 | 112 | Force Position > Single Object > Out of Rectangle | `Force Object <p0> Out of Rectangle (<p1>,<p2>)-(<p3>,<p4>) With Method <p5>` |  | objet « Object » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Method (0=Coordinates, 1=Bounding Box) » | — |  |
| 33 | 113 | Force Position > Stored Objects > Into Rectangle | `Force All Stored Objects Into Rectangle (<p0>,<p1>)-(<p2>,<p3>) With Method <p4>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Method (0=Coordinates, 1=Bounding Box) » | — |  |
| 34 | 114 | Force Position > Stored Objects > Out of Rectangle | `Force All Stored Objects Out of Rectangle (<p0>,<p1>)-(<p2>,<p3>) With Method <p4>` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Method (0=Coordinates, 1=Bounding Box) » | — |  |
| 35 | 115 | Set Hotspots > Set X Hotspot | `Set X Hotspot of <p0> to <p1>` |  | objet « Object » ; expression numérique « X Hotspot » | — |  |
| 36 | 116 | Set Hotspots > Set Y Hotspot | `Set Y Hotspot of <p0> to <p1>` |  | objet « Object » ; expression numérique « Y Hotspot » | — |  |
| 37 | 117 | Position Objects > Position Single Object | `Set Position of <p0> to (<p1>,<p2>)` |  | objet « Object » ; expression numérique « X » ; expression numérique « Y » | — |  |
| 38 | 118 | Position Objects > Move Single Object | `Move <p0> by (<p1>,<p2>)` |  | objet « Object » ; expression numérique « X Movement » ; expression numérique « Y Movement » | — |  |
| 39 | 119 | Position Objects > Position Stored Objects | `Set Positions of All Stored Objects to (<p1>,<p2>)` |  | expression numérique « X » ; expression numérique « Y » | — |  |
| 40 | 120 | Position Objects > Move Stored Objects | `Move All Stored Objects by (<p1>,<p2>)` |  | expression numérique « X Movement » ; expression numérique « Y Movement » | — |  |
| 41 | 121 | Snap to Grid > Snap Single Object | `Snap <p0> to a <p1> x <p2> Grid` |  | objet « Object » ; expression numérique « Grid Cell Width » ; expression numérique « Grid Cell Height » | — |  |
| 42 | 122 | Snap to Grid > Snap Stored Objects | `Snap All Stored Objects to a <p1> x <p2> Grid` |  | expression numérique « Grid Cell Width » ; expression numérique « Grid Cell Height » | — |  |
| 43 | 123 | Align By Percent > Horizontally | `Position <p0> <p1>%% Horizontally Between <p2> and <p3>` |  | objet « Object » ; expression numérique « Percentage (0-100) » ; expression numérique « Left Border » ; expression numérique « Right Border » | — |  |
| 44 | 124 | Align By Percent > Vertically | `Position <p0> <p1>%% Vertically Between <p2> and <p3>` |  | objet « Object » ; expression numérique « Percentage (0-100) » ; expression numérique « Top Border » ; expression numérique « Bottom Border » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Pick or Count > Index to Fixed Value | `StoredAt(` |  | nombre « Index » | — |  |
| 1 | 81 | Stored Objects > Pick or Count > Fixed Value to Index | `FixedToIndex(` |  | nombre « Fixed Value » | — |  |
| 2 | 82 | Stored Objects > Pick or Count > Total Stored Objects | `TotalStored(` |  |  | — |  |
| 3 | 83 | Stored Objects > Pick or Count > Stored Objects at Position | `StoredAtPos(` |  | nombre « X » ; nombre « Y » | — |  |
| 4 | 84 | Stored Objects > Pick or Count > Stored Objects on Point | `StoredOnPoint(` |  | nombre « X » ; nombre « Y » | — |  |
| 5 | 85 | Stored Objects > Pick or Count > Stored Objects in Rectangle | `StoredInRect(` |  | nombre « Left Side » ; nombre « Right Side » ; nombre « Top Side » ; nombre « Bottom Side » | — |  |
| 6 | 86 | Stored Objects > Object Groups > Left Border | `StoredGrpLeftBd(` |  |  | — |  |
| 7 | 87 | Stored Objects > Object Groups > Top Border | `StoredGrpTopBd(` |  |  | — |  |
| 8 | 88 | Stored Objects > Object Groups > Right Border | `StoredGrpRightBd(` |  |  | — |  |
| 9 | 89 | Stored Objects > Object Groups > Bottom Border | `StoredGrpBtmBd(` |  |  | — |  |
| 10 | 90 | Stored Objects > Distance > Find Nearest Object | `StoredNearest(` |  | nombre « Fixed Value of Object » | — |  |
| 11 | 91 | Stored Objects > Distance > Find Farthest Object | `StoredFarthest(` |  | nombre « Fixed Value of Object » | — |  |
| 12 | 92 | Stored Objects > Distance > Nearest Object Distance | `StoredNearestDist(` |  | nombre « Fixed Value of Object » | — |  |
| 13 | 93 | Stored Objects > Distance > Farthest Object Distance | `StoredFarthestDist(` |  | nombre « Fixed Value of Object » | — |  |
| 14 | 94 | Align in Frame > Calculate Left | `CalcAlignLeft(` |  | nombre « Fixed Value of Object » ; nombre « Left Border » | — |  |
| 15 | 95 | Align in Frame > Calculate Horz Center | `CalcAlignHCenter(` |  | nombre « Fixed Value of Object » ; nombre « Left Border » ; nombre « Right Border » | — |  |
| 16 | 96 | Align in Frame > Calculate Right | `CalcAlignRight(` |  | nombre « Fixed Value of Object » ; nombre « Right Border » | — |  |
| 17 | 97 | Align in Frame > Calculate Top | `CalcAlignTop(` |  | nombre « Fixed Value of Object » ; nombre « Top Border » | — |  |
| 18 | 98 | Align in Frame > Calculate Vert Center | `CalcAlignVCenter(` |  | nombre « Fixed Value of Object » ; nombre « Top Border » ; nombre « Bottom Border » | — |  |
| 19 | 99 | Align in Frame > Calculate Bottom | `CalcAlignBottom(` |  | nombre « Fixed Value of Object » ; nombre « Bottom Border » | — |  |
| 20 | 100 | Attach Objects > Get Parent | `AttGetParent(` |  | nombre « Fixed Value of Child » | — |  |
| 21 | 101 | Attach Objects > Get Child | `AttGetChild(` |  | nombre « Fixed Value of Parent » ; nombre « Index of Child » | — |  |
| 22 | 102 | Attach Objects > X-Offset from Parent | `AttXOffset(` |  | nombre « Fixed Value of Child » | — |  |
| 23 | 103 | Attach Objects > Y-Offset from Parent | `AttYOffset(` |  | nombre « Fixed Value of Child » | — |  |
| 24 | 104 | Attach Objects > Distance from Parent | `AttDistance(` |  | nombre « Fixed Value of Child » | — |  |
| 25 | 105 | Attach Objects > Number of Children | `AttNumChildren(` |  | nombre « Fixed Value of Parent » | — |  |
| 26 | 106 | Track Movement > Get X-Movement | `MvXMove(` |  | nombre « Fixed Value of Object » | — |  |
| 27 | 107 | Track Movement > Get Y-Movement | `MvYMove(` |  | nombre « Fixed Value of Object » | — |  |
| 28 | 108 | Track Movement > Get Distance Moved | `MvMoveDist(` |  | nombre « Fixed Value of Object » | — |  |
| 29 | 109 | Track Movement > Get Angle Moved | `MvMoveAngle(` |  | nombre « Fixed Value of Object » | — |  |
| 30 | 110 | Get Hotspots > Get X Hotspot | `XHotspot(` |  | nombre « Fixed Value of Object » | — |  |
| 31 | 111 | Get Hotspots > Get Y Hotspot | `YHotspot(` |  | nombre « Fixed Value of Object » | — |  |
