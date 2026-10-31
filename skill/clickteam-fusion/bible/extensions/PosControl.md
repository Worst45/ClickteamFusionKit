# Extension PosControl

- File: `PosControl.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stored Objects > Object is Stored | `<object>: Object <p0> is Stored` |  | object “Object” | — |  |
| 1 | -82 | Attach Objects > Object is Parent | `<object>: Object <p0> is an Attachment Parent` |  | object “Object” | — |  |
| 2 | -83 | Attach Objects > Object is Child | `<object>: Object <p0> is an Attachment Child` |  | object “Object” | — |  |
| 3 | -84 | Track Movement > On Object Movement | `<object>: On Movement of <p0>` |  | object “Object” | — |  |
| 4 | -85 | Track Movement > Object has Tracker | `<object>: Object <p0> has Tracker` |  | object “Object” | — |  |
| 5 | -86 | Bounding Box > Contains Point | `<object>: Bounding Box of <p0> Contains Point (<p1>,<p2>)` |  | object “Object”; numeric expression “X”; numeric expression “Y” | — |  |
| 6 | -87 | Bounding Box > Contains Rectangle | `<object>: Bounding Box of <p0> Contains Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | object “Object”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 7 | -88 | Bounding Box > Overlaps Rectangle | `<object>: Bounding Box of <p0> Overlaps Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | object “Object”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 8 | -89 | Bounding Box > Is Inside Rectangle | `<object>: Bounding Box of <p0> is Inside Rectangle (<p1>,<p2>)-(<p3>,<p4>)` |  | object “Object”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 9 | -90 | Force Position > On Position Force | `<object>: On Position Force` |  |  | — |  |
| 10 | -91 | Force Position > Last Force Had Effect | `<object>: Last Position Force Had Effect` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Store Object | `Store Object <p0>` |  | object “Object”; numeric expression “Store Object if Duplicate? (0=No, 1=Yes)” | — |  |
| 1 | 81 | Stored Objects > Remove All | `Remove All Stored Objects` |  |  | — |  |
| 2 | 82 | Align in Frame > Single Object > Align Left | `Align Object <p0> to the Left (Border: <p1>)` |  | object “Object”; numeric expression “Left Border” | — |  |
| 3 | 83 | Align in Frame > Single Object > Align Horz Center | `Horizontally Center Object <p0> (Borders: <p1>, <p2>)` |  | object “Object”; numeric expression “Left Border”; numeric expression “Right Border” | — |  |
| 4 | 84 | Align in Frame > Single Object > Align Right | `Align Object <p0> to the Right (Border: <p1>)` |  | object “Object”; numeric expression “Right Border” | — |  |
| 5 | 85 | Align in Frame > Single Object > Align Top | `Align Object <p0> to the Top (Border: <p1>)` |  | object “Object”; numeric expression “Top Border” | — |  |
| 6 | 86 | Align in Frame > Single Object > Align Vert Center | `Vertically Center Object <p0> (Borders: <p1>, <p2>)` |  | object “Object”; numeric expression “Top Border”; numeric expression “Bottom Border” | — |  |
| 7 | 87 | Align in Frame > Single Object > Align Bottom | `Align Object <p0> to the Bottom (Border: <p1>)` |  | object “Object”; numeric expression “Bottom Border” | — |  |
| 8 | 88 | Align in Frame > Stored Objects > Align Left | `Align Stored Objects to the Left (Group: <p0>) (Border: <p1>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Left Border” | — |  |
| 9 | 89 | Align in Frame > Stored Objects > Align Horz Center | `Horizontally Center Stored Objects (Group: <p0>) (Borders: <p1>, <p2>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Left Border”; numeric expression “Right Border” | — |  |
| 10 | 90 | Align in Frame > Stored Objects > Align Right | `Align Stored Objects to the Right (Group: <p0>) (Border: <p1>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Right Border” | — |  |
| 11 | 91 | Align in Frame > Stored Objects > Align Top | `Align Stored Objects to the Top (Group: <p0>) (Border: <p1>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Top Border” | — |  |
| 12 | 92 | Align in Frame > Stored Objects > Align Vert Center | `Vertically Center Stored Objects (Group: <p0>) (Borders: <p1>, <p2>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Top Border”; numeric expression “Bottom Border” | — |  |
| 13 | 93 | Align in Frame > Stored Objects > Align Bottom | `Align Stored Objects to the Bottom (Group: <p0>) (Border: <p1>)` |  | numeric expression “Use Objects as Group? (0=No, 1=Yes)”; numeric expression “Bottom Border” | — |  |
| 14 | 94 | Align Objects > Left | `Align Left Borders of Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 15 | 95 | Align Objects > Horz Center | `Horizontally Center Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 16 | 96 | Align Objects > Right | `Align Right Borders of Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 17 | 97 | Align Objects > Top | `Align Top Borders of Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 18 | 98 | Align Objects > Vert Center | `Vertically Center Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 19 | 99 | Align Objects > Bottom | `Align Bottom Borders of Stored Objects with Master Object <p0>` |  | object “Master Object” | — |  |
| 20 | 100 | Attach Objects > Attach Single Object | `Attach <p1> to <p0>` |  | object “Parent Object”; object “Child Object” | — |  |
| 21 | 101 | Attach Objects > Attach Stored Objects | `Attach all Stored Objects to <p0>` |  | object “Parent Object” | — |  |
| 22 | 102 | Attach Objects > Detach Single Object | `Detach <p0> from Parent` |  | object “Object” | — |  |
| 23 | 103 | Attach Objects > Detach Children | `Detach all Children of <p0>` |  | object “Object” | — |  |
| 24 | 104 | Attach Objects > Detach All Objects | `Detach all Attached Objects` |  |  | — |  |
| 25 | 105 | Attach Objects > Update Attachments | `Update Attached Objects` |  |  | — |  |
| 26 | 106 | Track Movement > Create Tracker (Single Object) | `Create Movement Tracker for <p0>` |  | object “Object” | — |  |
| 27 | 107 | Track Movement > Create Tracker (Stored Objects) | `Create Movement Trackers for all Stored Objects` |  |  | — |  |
| 28 | 108 | Track Movement > Remove Tracker (Single Object) | `Remove Movement Tracker from <p0>` |  | object “Object” | — |  |
| 29 | 109 | Track Movement > Remove Tracker (All Objects) | `Remove all Movement Trackers` |  |  | — |  |
| 30 | 110 | Track Movement > Test for Movement | `Test Objects for Movement` |  |  | — |  |
| 31 | 111 | Force Position > Single Object > Into Rectangle | `Force Object <p0> Into Rectangle (<p1>,<p2>)-(<p3>,<p4>) With Method <p5>` |  | object “Object”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Method (0=Coordinates, 1=Bounding Box)” | — |  |
| 32 | 112 | Force Position > Single Object > Out of Rectangle | `Force Object <p0> Out of Rectangle (<p1>,<p2>)-(<p3>,<p4>) With Method <p5>` |  | object “Object”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Method (0=Coordinates, 1=Bounding Box)” | — |  |
| 33 | 113 | Force Position > Stored Objects > Into Rectangle | `Force All Stored Objects Into Rectangle (<p0>,<p1>)-(<p2>,<p3>) With Method <p4>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Method (0=Coordinates, 1=Bounding Box)” | — |  |
| 34 | 114 | Force Position > Stored Objects > Out of Rectangle | `Force All Stored Objects Out of Rectangle (<p0>,<p1>)-(<p2>,<p3>) With Method <p4>` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Method (0=Coordinates, 1=Bounding Box)” | — |  |
| 35 | 115 | Set Hotspots > Set X Hotspot | `Set X Hotspot of <p0> to <p1>` |  | object “Object”; numeric expression “X Hotspot” | — |  |
| 36 | 116 | Set Hotspots > Set Y Hotspot | `Set Y Hotspot of <p0> to <p1>` |  | object “Object”; numeric expression “Y Hotspot” | — |  |
| 37 | 117 | Position Objects > Position Single Object | `Set Position of <p0> to (<p1>,<p2>)` |  | object “Object”; numeric expression “X”; numeric expression “Y” | — |  |
| 38 | 118 | Position Objects > Move Single Object | `Move <p0> by (<p1>,<p2>)` |  | object “Object”; numeric expression “X Movement”; numeric expression “Y Movement” | — |  |
| 39 | 119 | Position Objects > Position Stored Objects | `Set Positions of All Stored Objects to (<p1>,<p2>)` |  | numeric expression “X”; numeric expression “Y” | — |  |
| 40 | 120 | Position Objects > Move Stored Objects | `Move All Stored Objects by (<p1>,<p2>)` |  | numeric expression “X Movement”; numeric expression “Y Movement” | — |  |
| 41 | 121 | Snap to Grid > Snap Single Object | `Snap <p0> to a <p1> x <p2> Grid` |  | object “Object”; numeric expression “Grid Cell Width”; numeric expression “Grid Cell Height” | — |  |
| 42 | 122 | Snap to Grid > Snap Stored Objects | `Snap All Stored Objects to a <p1> x <p2> Grid` |  | numeric expression “Grid Cell Width”; numeric expression “Grid Cell Height” | — |  |
| 43 | 123 | Align By Percent > Horizontally | `Position <p0> <p1>%% Horizontally Between <p2> and <p3>` |  | object “Object”; numeric expression “Percentage (0-100)”; numeric expression “Left Border”; numeric expression “Right Border” | — |  |
| 44 | 124 | Align By Percent > Vertically | `Position <p0> <p1>%% Vertically Between <p2> and <p3>` |  | object “Object”; numeric expression “Percentage (0-100)”; numeric expression “Top Border”; numeric expression “Bottom Border” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stored Objects > Pick or Count > Index to Fixed Value | `StoredAt(` |  | number “Index” | — |  |
| 1 | 81 | Stored Objects > Pick or Count > Fixed Value to Index | `FixedToIndex(` |  | number “Fixed Value” | — |  |
| 2 | 82 | Stored Objects > Pick or Count > Total Stored Objects | `TotalStored(` |  |  | — |  |
| 3 | 83 | Stored Objects > Pick or Count > Stored Objects at Position | `StoredAtPos(` |  | number “X”; number “Y” | — |  |
| 4 | 84 | Stored Objects > Pick or Count > Stored Objects on Point | `StoredOnPoint(` |  | number “X”; number “Y” | — |  |
| 5 | 85 | Stored Objects > Pick or Count > Stored Objects in Rectangle | `StoredInRect(` |  | number “Left Side”; number “Right Side”; number “Top Side”; number “Bottom Side” | — |  |
| 6 | 86 | Stored Objects > Object Groups > Left Border | `StoredGrpLeftBd(` |  |  | — |  |
| 7 | 87 | Stored Objects > Object Groups > Top Border | `StoredGrpTopBd(` |  |  | — |  |
| 8 | 88 | Stored Objects > Object Groups > Right Border | `StoredGrpRightBd(` |  |  | — |  |
| 9 | 89 | Stored Objects > Object Groups > Bottom Border | `StoredGrpBtmBd(` |  |  | — |  |
| 10 | 90 | Stored Objects > Distance > Find Nearest Object | `StoredNearest(` |  | number “Fixed Value of Object” | — |  |
| 11 | 91 | Stored Objects > Distance > Find Farthest Object | `StoredFarthest(` |  | number “Fixed Value of Object” | — |  |
| 12 | 92 | Stored Objects > Distance > Nearest Object Distance | `StoredNearestDist(` |  | number “Fixed Value of Object” | — |  |
| 13 | 93 | Stored Objects > Distance > Farthest Object Distance | `StoredFarthestDist(` |  | number “Fixed Value of Object” | — |  |
| 14 | 94 | Align in Frame > Calculate Left | `CalcAlignLeft(` |  | number “Fixed Value of Object”; number “Left Border” | — |  |
| 15 | 95 | Align in Frame > Calculate Horz Center | `CalcAlignHCenter(` |  | number “Fixed Value of Object”; number “Left Border”; number “Right Border” | — |  |
| 16 | 96 | Align in Frame > Calculate Right | `CalcAlignRight(` |  | number “Fixed Value of Object”; number “Right Border” | — |  |
| 17 | 97 | Align in Frame > Calculate Top | `CalcAlignTop(` |  | number “Fixed Value of Object”; number “Top Border” | — |  |
| 18 | 98 | Align in Frame > Calculate Vert Center | `CalcAlignVCenter(` |  | number “Fixed Value of Object”; number “Top Border”; number “Bottom Border” | — |  |
| 19 | 99 | Align in Frame > Calculate Bottom | `CalcAlignBottom(` |  | number “Fixed Value of Object”; number “Bottom Border” | — |  |
| 20 | 100 | Attach Objects > Get Parent | `AttGetParent(` |  | number “Fixed Value of Child” | — |  |
| 21 | 101 | Attach Objects > Get Child | `AttGetChild(` |  | number “Fixed Value of Parent”; number “Index of Child” | — |  |
| 22 | 102 | Attach Objects > X-Offset from Parent | `AttXOffset(` |  | number “Fixed Value of Child” | — |  |
| 23 | 103 | Attach Objects > Y-Offset from Parent | `AttYOffset(` |  | number “Fixed Value of Child” | — |  |
| 24 | 104 | Attach Objects > Distance from Parent | `AttDistance(` |  | number “Fixed Value of Child” | — |  |
| 25 | 105 | Attach Objects > Number of Children | `AttNumChildren(` |  | number “Fixed Value of Parent” | — |  |
| 26 | 106 | Track Movement > Get X-Movement | `MvXMove(` |  | number “Fixed Value of Object” | — |  |
| 27 | 107 | Track Movement > Get Y-Movement | `MvYMove(` |  | number “Fixed Value of Object” | — |  |
| 28 | 108 | Track Movement > Get Distance Moved | `MvMoveDist(` |  | number “Fixed Value of Object” | — |  |
| 29 | 109 | Track Movement > Get Angle Moved | `MvMoveAngle(` |  | number “Fixed Value of Object” | — |  |
| 30 | 110 | Get Hotspots > Get X Hotspot | `XHotspot(` |  | number “Fixed Value of Object” | — |  |
| 31 | 111 | Get Hotspots > Get Y Hotspot | `YHotspot(` |  | number “Fixed Value of Object” | — |  |
