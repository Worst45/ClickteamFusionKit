# Extension GMaps

- Fichier : `GMaps.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)
- conditions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- actions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)
- expressions : extraction en mode « menu ressources » (numéros possiblement supposés, voir colonne Code)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Map Available | `<objet>: On Map Available` |  |  | — |  |
| 1 | -82 | On Location Change | `<objet>: On Location Change` |  |  | — |  |
| 2 | -83 | On Map Click | `<objet>: On Map Click` |  |  | — |  |
| 3 | -84 | On Camera Update | `<objet>: On Camera Update` |  |  | — |  |
| 4 | -85 | With Identified Marker > On Marker Click | `<objet>: On Marker Click with Id: <p0>` |  | expression numérique « Id Marker » | — |  |
| 5 | -86 | With Identified Marker > On Marker Info Click | `<objet>: On Marker Info Click with Id: <p0>` |  | expression numérique « Id Marker » | — |  |
| 6 | -87 | With Identified Marker > On Marker Drag | `<objet>: On Marker Drag with Id: <p0>` |  | expression numérique « Id Marker » | — |  |
| 7 | -88 | Is Zoom Control Enabled | `<objet>: is Zoom Bar Enabled` |  |  | — |  |
| 8 | -89 | Is Traffic Enabled | `<objet>: is Traffic Enabled` |  |  | — |  |
| 9 | -90 | Is Compass Enabled | `<objet>: is Compass Enabled` |  |  | — |  |
| 10 | -91 | Is My Location Enabled | `<objet>: is Mylocation Enabled` |  |  | — |  |
| 11 | -92 | Gestures ... > Is Rotate Gesture Enabled | `<objet>: is Rotate Gesture Enabled` |  |  | — |  |
| 12 | -93 | Gestures ... > Is Scroll Gesture Enabled | `<objet>: is Scroll Gesture Enabled` |  |  | — |  |
| 13 | -94 | Gestures ... > Is Tilt Gesture Enabled | `<objet>: is Tilt Gesture Enabled` |  |  | — |  |
| 14 | -95 | Gestures ... > Is Zoom Gesture Enabled | `<objet>: is Zoom Gesture Enabled` |  |  | — |  |
| 15 | -96 | On Error | `<objet>: On Error` |  |  | — |  |
| 16 | -97 | On Any Marker Click | `<objet>: On Any Marker Click` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start Location Listener | `<objet>: Start Location Listener with interval <p0> seconds or radius <p1> meters` |  | expression numérique « Interval in seconds » ; expression numérique « Radius in meters » | — |  |
| 1 | 81 | Stop Location Listener | `<objet>: Stop Location Listener` |  |  | — |  |
| 2 | 82 | Center at My Location | `<objet>: Center at My Location` |  |  | — |  |
| 3 | 83 | Camera > Set Camera to | `<objet>: Set Camera to Lat:<p0>, Long:<p1>` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 4 | 84 | Camera > Set Camera Zoom | `<objet>: Set Camera Zoom to <p0>` |  | expression numérique « Zoom factor from 0.0 to 19.0 » | — |  |
| 5 | 85 | Camera > Set Camera Bearing | `<objet>: Set Camera Bearing to <p0> degree` |  | expression numérique « Bearing degrees (0.0 point North) » | — |  |
| 6 | 86 | Camera > Set Camera Tilt | `<objet>: Set Camera Tilt to <p0> degree` |  | expression numérique « Camera position in degree from ground (0.0 to 90.0) » | — |  |
| 7 | 87 | Camera > Scroll Camera By | `<objet>: Scroll Camera by x:<p0>, y:<p1>` |  | expression numérique « X pixel » ; expression numérique « Y pixel » | — |  |
| 8 | 88 | Map > Set MapType | `<objet>: Set Map Type to <p0>` |  | expression numérique « Map type (0:None, 1: Normal, 2:Satellite, 3: Terrain, 4:Hybrid) » | — |  |
| 9 | 89 | Map > Set Traffic Enable | `<objet>: Set Traffic to <p0>` |  | expression numérique « Traffic (0:Off, 1:On) » | — |  |
| 10 | 90 | Map > Set Compass Enable | `<objet>: Set Compass Enable to <p0>` |  | expression numérique « Compass Enabled (0: Off, 1:On) » | — |  |
| 11 | 91 | Map > Set My Location Enable | `<objet>: Set My Location Enable to <p0>` |  | expression numérique « MyLocation Enabled (0: Off, 1:On) » | — |  |
| 12 | 92 | Map > Set Animation | `<objet>: Set Animation to <p0>, with interval <p1> msec and Zoom <p2>` |  | expression numérique « Animation Enabled (0: Off, 1:On) » ; expression numérique « Interval time in milliseconds » ; expression numérique « Zoom value (0.0 to 19.0) » | — |  |
| 13 | 93 | Map > Set Zoom Bar Enable | `<objet>: Set Zoom Bar Enable to <p0>` |  | expression numérique « Zoom (0: Default, 1:Off) » | — |  |
| 14 | 94 | Map > Set Scroll Enable | `<objet>: Set Scroll to <p0>` |  | expression numérique « Scroll (0:Default, 1:Off) » | — |  |
| 15 | 95 | Map > Set Gesture Enable | `<objet>: Set Gesture to <p0>` |  | expression numérique « Gesture (0:Default, 1:Off) » | — |  |
| 16 | 96 | Map > Set Tilt Enable | `<objet>: Set Tilt to <p0>` |  | expression numérique « Tilt (0:Default, 1:Off) » | — |  |
| 17 | 97 | Map > Set Zoom Gesture Enable | `<objet>: Set Zoom Gesture Enable to <p0>` |  | expression numérique « Zoom (0: Default, 1:Off) » | — |  |
| 18 | 98 | Map > Set Map Width | `<objet>: Set Map Width to <p0>` |  | expression numérique « Pixel Width » | — |  |
| 19 | 99 | Map > Set Map Height | `<objet>: Set Map Height to <p0>` |  | expression numérique « Pixel Height » | — |  |
| 20 | 100 | Map > Clear Map | `<objet>: Clear Map` |  |  | — |  |
| 21 | 101 | Markers ... > Set Marker to ... | `<objet>: Set Marker to <p0>, <p1>` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 22 | 102 | Markers ... > Set Marker Info | `<objet>: Set Marker Info to Title <p0> and Snippet <p1>` |  | expression chaîne « Marker Title » ; expression chaîne « Marker Snippet Text » | — |  |
| 23 | 103 | Markers ... > Set Marker Draggable | `<objet>: Set Marker Draggable to <p0>` |  | expression numérique « Draggable (0: No, 1: Yes) » | — |  |
| 24 | 104 | Markers ... > Set Marker Visible | `<objet>: Set Marker Visible to <p0>` |  | expression numérique « Visible (0: No, 1: Yes) » | — |  |
| 25 | 105 | Markers ... > Set Marker Icon | `<objet>: Set Marker Icon to <p0>` |  | expression numérique « Image Number (One Based) 0:Google Default Marker 1: to above are Internal images » | — |  |
| 26 | 106 | Markers ... > Add Marker as ... | `<objet>: Add Marker with Id:<p0>` |  | expression numérique « Id Number » | — |  |
| 27 | 107 | Markers ... > Delete Marker | `<objet>: Delete Marker with Id:<p0>` |  | expression numérique « Id Number » | — |  |
| 28 | 108 | Markers ... > Delete All Marker | `<objet>: Delete All Marker` |  |  | — |  |
| 29 | 109 | Markers ... > Add Marker with Color | `<objet>: Add Marker with Id:<p0> and Colorize <p1>` |  | expression numérique « Id Number » ; expression numérique « Colorize range 0-360 (0:Red, 60:Yellow, 120:Green, 180:Cyan ,240:Blue, 300:Magenta) » | — |  |
| 30 | 110 | Markers ... > Update All Marker | `<objet>: Update All Marker` |  |  | — |  |
| 31 | 111 | Circle > Set Circle to ... | `<objet>: Set Circle to <p0>, <p1>` |  | expression numérique « Latitude » ; expression numérique « Longitude » | — |  |
| 32 | 112 | Circle > Set Circle Radio | `<objet>: Set Circle radio to <p0> meters` |  | expression numérique « Circle radio value (specify in meters) » | — |  |
| 33 | 113 | Circle > Set Circle Fill Color | `<objet>: Set Circle fill color <p0> and alpha <p1>` |  | couleur « Add Color » ; expression numérique « Alpha value (0:transp, 256:opaque) » | — |  |
| 34 | 114 | Circle > Set Circle Stroke Color | `<objet>: Set Circle stroke color <p0> and alpha <p1>` |  | couleur « Add Color » ; expression numérique « Alpha value (0:transp, 256:opaque) » | — |  |
| 35 | 115 | Circle > Set Circle Stroke Width | `<objet>: Set Circle stroke width <p0>` |  | expression numérique « Stroke width (in pixels) » | — |  |
| 36 | 116 | Circle > Add Circle as ... | `<objet>: Add Circle with Id:<p0>` |  | expression numérique « Id Number » | — |  |
| 37 | 117 | Circle > Delete All Circle | `<objet>: Delete All Circle` |  |  | — |  |
| 39 | 119 | Circle > Delete Circle | `<objet>: Delete Circle with Id:<p0>` |  | expression numérique « Id Number » | — |  |
| 40 | 120 | Circle > Update All Circle | `<objet>: Update All Circle` |  |  | — |  |
| 41 | 121 | Markers ... > Goto Marker ... | `<objet>: Goto Marker with Id:<p0>` |  | expression numérique « Id Number » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
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
| 11 | 91 | Marker Id > Marker Id Latitude | `MarkerLat(` |  | nombre « Index value » | — |  |
| 12 | 92 | Marker Id > Marker Id Longitude | `MarkerLong(` |  | nombre « Index value » | — |  |
| 13 | 93 | Marker Id > Marker Id Title | `MarkerTitle$(` |  | nombre « Index value » → chaîne | — |  |
| 14 | 94 | Marker Id > Marker Id Snippet | `MarkerSnippet$(` |  | nombre « Index value » → chaîne | — |  |
| 15 | 95 | Circle Id > Circle Id Latitude | `CircleLat(` |  | nombre « Index value » | — |  |
| 16 | 96 | Circle Id > Circle Id Longitude | `CircleLong(` |  | nombre « Index value » | — |  |
| 17 | 97 | Circle Id > Circle Id Radio | `CircleRadio(` |  | nombre « Index value » | — |  |
| 18 | 98 | On Click > Click Latitude | `OnClickLat(` |  |  | — |  |
| 19 | 99 | On Click > Click Longitude | `OnClickLong(` |  |  | — |  |
| 20 | 100 | Google Map License | `GoogleMapLicense$(` |  | → chaîne | — |  |
| 21 | 101 | Last Marker Click > Last Marker Id | `LastMarkerClickId(` |  |  | — |  |
| 22 | 102 | Last Marker Click > Last Marker Latitude | `LastMarkerClickLat(` |  |  | — |  |
| 23 | 103 | Last Marker Click > Last Marker Longitude | `LastMarkerClickLong(` |  |  | — |  |
| 24 | 104 | Get Distance > Using Markers Id | `DistanceMarkers(` |  | nombre « Orig. Marker Id » ; nombre « Dest. Marker Id » ; nombre « 0:Walk/1:Drive » | — |  |
| 25 | 105 | Get Distance > From Geolocation | `GeolocDistance(` |  | nombre « Orig. Latitude » ; nombre « Orig. Longitude » ; nombre « Dest. Latitude » ; nombre « Dest. Latitude » ; nombre « 0:Walk/1:Drive » | — |  |
