# Extension GMaps

- File: `GMaps.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Map Available | `<object>: On Map Available` |  |  | — |  |
| 1 | -82 | On Location Change | `<object>: On Location Change` |  |  | — |  |
| 2 | -83 | On Map Click | `<object>: On Map Click` |  |  | — |  |
| 3 | -84 | On Camera Update | `<object>: On Camera Update` |  |  | — |  |
| 4 | -85 | With Identified Marker > On Marker Click | `<object>: On Marker Click with Id: <p0>` |  | numeric expression “Id Marker” | — |  |
| 5 | -86 | With Identified Marker > On Marker Info Click | `<object>: On Marker Info Click with Id: <p0>` |  | numeric expression “Id Marker” | — |  |
| 6 | -87 | With Identified Marker > On Marker Drag | `<object>: On Marker Drag with Id: <p0>` |  | numeric expression “Id Marker” | — |  |
| 7 | -88 | Is Zoom Control Enabled | `<object>: is Zoom Bar Enabled` |  |  | — |  |
| 8 | -89 | Is Traffic Enabled | `<object>: is Traffic Enabled` |  |  | — |  |
| 9 | -90 | Is Compass Enabled | `<object>: is Compass Enabled` |  |  | — |  |
| 10 | -91 | Is My Location Enabled | `<object>: is Mylocation Enabled` |  |  | — |  |
| 11 | -92 | Gestures ... > Is Rotate Gesture Enabled | `<object>: is Rotate Gesture Enabled` |  |  | — |  |
| 12 | -93 | Gestures ... > Is Scroll Gesture Enabled | `<object>: is Scroll Gesture Enabled` |  |  | — |  |
| 13 | -94 | Gestures ... > Is Tilt Gesture Enabled | `<object>: is Tilt Gesture Enabled` |  |  | — |  |
| 14 | -95 | Gestures ... > Is Zoom Gesture Enabled | `<object>: is Zoom Gesture Enabled` |  |  | — |  |
| 15 | -96 | On Error | `<object>: On Error` |  |  | — |  |
| 16 | -97 | On Any Marker Click | `<object>: On Any Marker Click` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start Location Listener | `<object>: Start Location Listener with interval <p0> seconds or radius <p1> meters` |  | numeric expression “Interval in seconds”; numeric expression “Radius in meters” | — |  |
| 1 | 81 | Stop Location Listener | `<object>: Stop Location Listener` |  |  | — |  |
| 2 | 82 | Center at My Location | `<object>: Center at My Location` |  |  | — |  |
| 3 | 83 | Camera > Set Camera to | `<object>: Set Camera to Lat:<p0>, Long:<p1>` |  | numeric expression “Latitude”; numeric expression “Longitude” | — |  |
| 4 | 84 | Camera > Set Camera Zoom | `<object>: Set Camera Zoom to <p0>` |  | numeric expression “Zoom factor from 0.0 to 19.0” | — |  |
| 5 | 85 | Camera > Set Camera Bearing | `<object>: Set Camera Bearing to <p0> degree` |  | numeric expression “Bearing degrees (0.0 point North)” | — |  |
| 6 | 86 | Camera > Set Camera Tilt | `<object>: Set Camera Tilt to <p0> degree` |  | numeric expression “Camera position in degree from ground (0.0 to 90.0)” | — |  |
| 7 | 87 | Camera > Scroll Camera By | `<object>: Scroll Camera by x:<p0>, y:<p1>` |  | numeric expression “X pixel”; numeric expression “Y pixel” | — |  |
| 8 | 88 | Map > Set MapType | `<object>: Set Map Type to <p0>` |  | numeric expression “Map type (0:None, 1: Normal, 2:Satellite, 3: Terrain, 4:Hybrid)” | — |  |
| 9 | 89 | Map > Set Traffic Enable | `<object>: Set Traffic to <p0>` |  | numeric expression “Traffic (0:Off, 1:On)” | — |  |
| 10 | 90 | Map > Set Compass Enable | `<object>: Set Compass Enable to <p0>` |  | numeric expression “Compass Enabled (0: Off, 1:On)” | — |  |
| 11 | 91 | Map > Set My Location Enable | `<object>: Set My Location Enable to <p0>` |  | numeric expression “MyLocation Enabled (0: Off, 1:On)” | — |  |
| 12 | 92 | Map > Set Animation | `<object>: Set Animation to <p0>, with interval <p1> msec and Zoom <p2>` |  | numeric expression “Animation Enabled (0: Off, 1:On)”; numeric expression “Interval time in milliseconds”; numeric expression “Zoom value (0.0 to 19.0)” | — |  |
| 13 | 93 | Map > Set Zoom Bar Enable | `<object>: Set Zoom Bar Enable to <p0>` |  | numeric expression “Zoom (0: Default, 1:Off)” | — |  |
| 14 | 94 | Map > Set Scroll Enable | `<object>: Set Scroll to <p0>` |  | numeric expression “Scroll (0:Default, 1:Off)” | — |  |
| 15 | 95 | Map > Set Gesture Enable | `<object>: Set Gesture to <p0>` |  | numeric expression “Gesture (0:Default, 1:Off)” | — |  |
| 16 | 96 | Map > Set Tilt Enable | `<object>: Set Tilt to <p0>` |  | numeric expression “Tilt (0:Default, 1:Off)” | — |  |
| 17 | 97 | Map > Set Zoom Gesture Enable | `<object>: Set Zoom Gesture Enable to <p0>` |  | numeric expression “Zoom (0: Default, 1:Off)” | — |  |
| 18 | 98 | Map > Set Map Width | `<object>: Set Map Width to <p0>` |  | numeric expression “Pixel Width” | — |  |
| 19 | 99 | Map > Set Map Height | `<object>: Set Map Height to <p0>` |  | numeric expression “Pixel Height” | — |  |
| 20 | 100 | Map > Clear Map | `<object>: Clear Map` |  |  | — |  |
| 21 | 101 | Markers ... > Set Marker to ... | `<object>: Set Marker to <p0>, <p1>` |  | numeric expression “Latitude”; numeric expression “Longitude” | — |  |
| 22 | 102 | Markers ... > Set Marker Info | `<object>: Set Marker Info to Title <p0> and Snippet <p1>` |  | string expression “Marker Title”; string expression “Marker Snippet Text” | — |  |
| 23 | 103 | Markers ... > Set Marker Draggable | `<object>: Set Marker Draggable to <p0>` |  | numeric expression “Draggable (0: No, 1: Yes)” | — |  |
| 24 | 104 | Markers ... > Set Marker Visible | `<object>: Set Marker Visible to <p0>` |  | numeric expression “Visible (0: No, 1: Yes)” | — |  |
| 25 | 105 | Markers ... > Set Marker Icon | `<object>: Set Marker Icon to <p0>` |  | numeric expression “Image Number (One Based) 0:Google Default Marker 1: to above are Internal images” | — |  |
| 26 | 106 | Markers ... > Add Marker as ... | `<object>: Add Marker with Id:<p0>` |  | numeric expression “Id Number” | — |  |
| 27 | 107 | Markers ... > Delete Marker | `<object>: Delete Marker with Id:<p0>` |  | numeric expression “Id Number” | — |  |
| 28 | 108 | Markers ... > Delete All Marker | `<object>: Delete All Marker` |  |  | — |  |
| 29 | 109 | Markers ... > Add Marker with Color | `<object>: Add Marker with Id:<p0> and Colorize <p1>` |  | numeric expression “Id Number”; numeric expression “Colorize range 0-360 (0:Red, 60:Yellow, 120:Green, 180:Cyan ,240:Blue, 300:Magenta)” | — |  |
| 30 | 110 | Markers ... > Update All Marker | `<object>: Update All Marker` |  |  | — |  |
| 31 | 111 | Circle > Set Circle to ... | `<object>: Set Circle to <p0>, <p1>` |  | numeric expression “Latitude”; numeric expression “Longitude” | — |  |
| 32 | 112 | Circle > Set Circle Radio | `<object>: Set Circle radio to <p0> meters` |  | numeric expression “Circle radio value (specify in meters)” | — |  |
| 33 | 113 | Circle > Set Circle Fill Color | `<object>: Set Circle fill color <p0> and alpha <p1>` |  | color “Add Color”; numeric expression “Alpha value (0:transp, 256:opaque)” | — |  |
| 34 | 114 | Circle > Set Circle Stroke Color | `<object>: Set Circle stroke color <p0> and alpha <p1>` |  | color “Add Color”; numeric expression “Alpha value (0:transp, 256:opaque)” | — |  |
| 35 | 115 | Circle > Set Circle Stroke Width | `<object>: Set Circle stroke width <p0>` |  | numeric expression “Stroke width (in pixels)” | — |  |
| 36 | 116 | Circle > Add Circle as ... | `<object>: Add Circle with Id:<p0>` |  | numeric expression “Id Number” | — |  |
| 37 | 117 | Circle > Delete All Circle | `<object>: Delete All Circle` |  |  | — |  |
| 39 | 119 | Circle > Delete Circle | `<object>: Delete Circle with Id:<p0>` |  | numeric expression “Id Number” | — |  |
| 40 | 120 | Circle > Update All Circle | `<object>: Update All Circle` |  |  | — |  |
| 41 | 121 | Markers ... > Goto Marker ... | `<object>: Goto Marker with Id:<p0>` |  | numeric expression “Id Number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error | `Error(` |  |  | — |  |
| 1 | 81 | Map > Read Type | `MapType(` |  |  | — |  |
| 2 | 82 | Map > My Location Latitude | `MyLocLat(` |  |  | — |  |
| 3 | 83 | Map > My Location Longitude | `MyLocLong(` |  |  | — |  |
| 4 | 84 | Camera > Camera Latitude | `CamLat(` |  |  | — |  |
| 5 | 85 | Camera > Camera Longitude | `CamLong(` |  |  | — |  |
| 6 | 86 | Camera > Camera Zoom | `CamZoom(` |  |  | — |  |
| 7 | 87 | Camera > Camera Bearing | `CamBearing(` |  |  | — |  |
| 8 | 88 | Camera > Camera Tilt | `CamTilt(` |  |  | — |  |
| 9 | 89 | Marker Drag Id > Marker Latitude | `DragMarkerLat(` |  |  | — |  |
| 10 | 90 | Marker Drag Id > Marker Longitude | `DragMarkerLong(` |  |  | — |  |
| 11 | 91 | Marker Id > Marker Id Latitude | `MarkerLat(` |  | number “Index value” | — |  |
| 12 | 92 | Marker Id > Marker Id Longitude | `MarkerLong(` |  | number “Index value” | — |  |
| 13 | 93 | Marker Id > Marker Id Title | `MarkerTitle$(` |  | number “Index value” → string | — |  |
| 14 | 94 | Marker Id > Marker Id Snippet | `MarkerSnippet$(` |  | number “Index value” → string | — |  |
| 15 | 95 | Circle Id > Circle Id Latitude | `CircleLat(` |  | number “Index value” | — |  |
| 16 | 96 | Circle Id > Circle Id Longitude | `CircleLong(` |  | number “Index value” | — |  |
| 17 | 97 | Circle Id > Circle Id Radio | `CircleRadio(` |  | number “Index value” | — |  |
| 18 | 98 | On Click > Click Latitude | `OnClickLat(` |  |  | — |  |
| 19 | 99 | On Click > Click Longitude | `OnClickLong(` |  |  | — |  |
| 20 | 100 | Google Map License | `GoogleMapLicense$(` |  | → string | — |  |
| 21 | 101 | Last Marker Click > Last Marker Id | `LastMarkerClickId(` |  |  | — |  |
| 22 | 102 | Last Marker Click > Last Marker Latitude | `LastMarkerClickLat(` |  |  | — |  |
| 23 | 103 | Last Marker Click > Last Marker Longitude | `LastMarkerClickLong(` |  |  | — |  |
| 24 | 104 | Get Distance > Using Markers Id | `DistanceMarkers(` |  | number “Orig. Marker Id”; number “Dest. Marker Id”; number “0:Walk/1:Drive” | — |  |
| 25 | 105 | Get Distance > From Geolocation | `GeolocDistance(` |  | number “Orig. Latitude”; number “Orig. Longitude”; number “Dest. Latitude”; number “Dest. Latitude”; number “0:Walk/1:Drive” | — |  |
