# Extension B2D

- File: `B2D.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Collision > On Contact Point Response > Generic | `<object>: On Contact Point Response` |  |  | — |  |
| 1 | -82 | Collision > On Contact Point Response > One Type | `<object>: On Contact Point Response for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 2 | -83 | Collision > On Contact Point Response > Two Types | `<object>: On Contact Point Response Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 3 | -84 | On Event > On Body Leave World | `<object>: On Body Leaving World` |  |  | — |  |
| 4 | -85 | On Event > On Joint Removed | `<object>: On Joint Destroyed` |  |  | — |  |
| 5 | -86 | World > Is Sleeping Allowed | `<object>: World - Sleeping is Allowed` |  |  | — |  |
| 6 | -87 | World > Is CCD Enabled | `<object>: World - CCD is Enabled` |  |  | — |  |
| 7 | -88 | World > Is Warm Starting Enabled | `<object>: World - Warm Starting is Enabled` |  |  | — |  |
| 8 | -89 | World > Is Position Correction Enabled | `<object>: World - Position Correction is Enabled` |  |  | — |  |
| 9 | -90 | Body > Is Body Sleeping > Use Body ID | `<object>: Body - Body (<p0>) is Sleeping` |  | numeric expression “Body ID” | — |  |
| 10 | -91 | Body > Is Body Frozen > Use Body ID | `<object>: Body - Body (<p0>) is Frozen` |  | numeric expression “Body ID” | — |  |
| 11 | -92 | On Event > On Shape Test | `<object>: On Shape Test` |  |  | — |  |
| 12 | -93 | Collision > On Collision Begin > Generic | `<object>: On Collision Begin` |  |  | — |  |
| 13 | -94 | Collision > On Collision Begin > One Type | `<object>: On Collision Begin for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 14 | -95 | Collision > On Collision Begin > Two Types | `<object>: On Collision Begin Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 15 | -96 | Collision > On Collision End > Generic | `<object>: On Collision End` |  |  | — |  |
| 16 | -97 | Collision > On Collision End > One Type | `<object>: On Collision End for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 17 | -98 | Collision > On Collision End > Two Types | `<object>: On Collision End Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 18 | -99 | Collision > On Contact Evaluation > Generic | `<object>: On Collision Evaluation` |  |  | — |  |
| 19 | -100 | Collision > On Contact Evaluation > One Type | `<object>: On Collision Evaluation for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 20 | -101 | Collision > On Contact Evaluation > Two Types | `<object>: On Collision Evaluation Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 21 | -102 | Collision > On Contact Point Add > Generic | `<object>: On Contact Point Add` |  |  | — |  |
| 22 | -103 | Collision > On Contact Point Add > One Type | `<object>: On Contact Point Add for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 23 | -104 | Collision > On Contact Point Add > Two Types | `<object>: On Contact Point Add Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 24 | -105 | Collision > On Contact Point Persist > Generic | `<object>: On Contact Point Persist` |  |  | — |  |
| 25 | -106 | Collision > On Contact Point Persist > One Type | `<object>: On Contact Point Persist for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 26 | -107 | Collision > On Contact Point Persist > Two Types | `<object>: On Contact Point Persist Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 27 | -108 | Collision > On Contact Point Remove > Generic | `<object>: On Contact Point Remove` |  |  | — |  |
| 28 | -109 | Collision > On Contact Point Remove > One Type | `<object>: On Contact Point Remove for Type (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 29 | -110 | Collision > On Contact Point Remove > Two Types | `<object>: On Contact Point Remove Between Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 30 | -111 | Collision > Body is Touching another Body > Use 2 Body ID's | `<object>: Body (<p0>) is Touching Body (<p1>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID” | — |  |
| 31 | -112 | Collision > Shape is Touching another Shape > Use 2 Body ID's | `<object>: Shape (<p1>) of Body (<p0>) is Touching Shape (<p3>) of Body (<p2>)` |  | numeric expression “First Body ID”; numeric expression “First Shape ID”; numeric expression “Second Body ID”; numeric expression “Second Shape ID” | — |  |
| 32 | -113 | Collision > Body is Touching Type > Use Body ID | `<object>: Body (<p0>) is Touching Type (<p1>)` |  | numeric expression “Body ID”; numeric expression “Collision Type” | — |  |
| 33 | -114 | Collision > Shape is Touching Type > Use Body ID | `<object>: Shape (<p1>) of Body (<p0>) is Touching Type (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Collision Type” | — |  |
| 34 | -115 | Collision > Body is Touching another Body > Use Object and Body ID | `<object>: Body of (<p0>) is Touching Body (<p1>)` |  | object “Object”; numeric expression “Body ID” | — |  |
| 35 | -116 | Collision > Shape is Touching another Shape > Use Object and Body ID | `<object>: Shape (<p1>) of Body of (<p0>) is Touching Shape (<p3>) of Body (<p2>)` |  | object “Object”; numeric expression “First Shape ID”; numeric expression “Body ID”; numeric expression “Second Shape ID” | — |  |
| 36 | -117 | Collision > Body is Touching Type > Use Object | `<object>: Body of (<p0>) is Touching Type (<p1>)` |  | object “Object”; numeric expression “Collision Type” | — |  |
| 37 | -118 | Collision > Shape is Touching Type > Use Object | `<object>: Shape (<p1>) of Body of (<p0>) is Touching Type (<p2>)` |  | object “Object”; numeric expression “Shape ID”; numeric expression “Collision Type” | — |  |
| 38 | -119 | Body > Is Body Sleeping > Use Object | `<object>: Body - Body (<p0>) is Sleeping` |  | object “Object” | — |  |
| 39 | -120 | Body > Is Body Frozen > Use Object | `<object>: Body - Body (<p0>) is Frozen` |  | object “Object” | — |  |
| 40 | -121 | On Event > On Body Fall Asleep | `<object>: On Body Fall Asleep` |  |  | — |  |
| 41 | -122 | On Event > On Body Wake Up | `<object>: On Body Wake Up` |  |  | — |  |
| 42 | -123 | Body > Is Body Static > Use Body ID | `<object>: Body - Body (<p0>) is Static` |  | numeric expression “Body ID” | — |  |
| 43 | -124 | Body > Is Body Static > Use Object | `<object>: Body - Body (<p0>) is Static` |  | object “Object” | — |  |
| 44 | -125 | Body > Is Body a Bullet > Use Body ID | `<object>: Body - Body (<p0>) is a Bullet` |  | numeric expression “Body ID” | — |  |
| 45 | -126 | Body > Is Body a Bullet > Use Object | `<object>: Body - Body (<p0>) is a Bullet` |  | object “Object” | — |  |
| 46 | -127 | Shape > Is Shape a Sensor > Use Body ID | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Sensor` |  | numeric expression “Body ID”; numeric expression “Shape ID” | — |  |
| 47 | -128 | Shape > Is Shape a Sensor > Use Object | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Sensor` |  | object “Object”; numeric expression “Shape ID” | — |  |
| 48 | -129 | Shape > Is Shape a Polygon > Use Body ID | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Polygon` |  | numeric expression “Body ID”; numeric expression “Shape ID” | — |  |
| 49 | -130 | Shape > Is Shape a Polygon > Use Object | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Polygon` |  | object “Object”; numeric expression “Shape ID” | — |  |
| 50 | -131 | Shape > Is Shape a Circle > Use Body ID | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Circle` |  | numeric expression “Body ID”; numeric expression “Shape ID” | — |  |
| 51 | -132 | Shape > Is Shape a Circle > Use Object | `<object>: Shape - Shape (<p1>) of Body (<p0>) is a Circle` |  | object “Object”; numeric expression “Shape ID” | — |  |
| 52 | -133 | Shape > Is Shape an Edge > Use Body ID | `<object>: Shape - Shape (<p1>) of Body (<p0>) is an Edge` |  | numeric expression “Body ID”; numeric expression “Shape ID” | — |  |
| 53 | -134 | Shape > Is Shape an Edge > Use Object | `<object>: Shape - Shape (<p1>) of Body (<p0>) is an Edge` |  | object “Object”; numeric expression “Shape ID” | — |  |
| 54 | -135 | Body > Is Body ID Valid | `<object>: Body - Body ID (<p0>) is Valid` |  | numeric expression “Body ID” | — |  |
| 55 | -136 | Joint > Is Joint ID Valid | `<object>: Joint - Joint ID (<p0>) is Valid` |  | numeric expression “Joint ID” | — |  |
| 56 | -137 | Controller > Is Controller ID Valid | `<object>: Controller - Controller ID (<p0>) is Valid` |  | numeric expression “Controller ID” | — |  |
| 57 | -138 | On Enumeration > On Body | `<object>: Enumertion - On Body` |  |  | — |  |
| 58 | -139 | On Enumeration > On Shape > On Shape | `<object>: Enumertion - On Shape` |  |  | — |  |
| 59 | -140 | On Enumeration > On Joint > On Joint | `<object>: Enumertion - On Joint` |  |  | — |  |
| 61 | -142 | On Enumeration > On Shape > On Polygon Shape | `<object>: Enumertion - On Polygon Shape` |  |  | — |  |
| 62 | -143 | On Enumeration > On Shape > On Circle Shape | `<object>: Enumertion - On Circle Shape` |  |  | — |  |
| 63 | -144 | On Enumeration > On Shape > On Edge Shape | `<object>: Enumertion - On Edge Shape` |  |  | — |  |
| 64 | -145 | On Enumeration > On Joint > On Revolute Joint | `<object>: Enumertion - On Revolute Joint` |  |  | — |  |
| 65 | -146 | On Enumeration > On Joint > On Prismatic Joint | `<object>: Enumertion - On Prismatic Joint` |  |  | — |  |
| 66 | -147 | On Enumeration > On Joint > On Distance Joint | `<object>: Enumertion - On Distance Joint` |  |  | — |  |
| 67 | -148 | On Enumeration > On Joint > On Pulley Joint | `<object>: Enumertion - On Pulley Joint` |  |  | — |  |
| 68 | -149 | On Enumeration > On Joint > On Line Joint | `<object>: Enumertion - On Line Joint` |  |  | — |  |
| 69 | -150 | On Enumeration > On Joint > On Gear Joint | `<object>: Enumertion - On Gear Joint` |  |  | — |  |
| 70 | -151 | On Enumeration > On Joint > On Mouse Joint | `<object>: Enumertion - On Mouse Joint` |  |  | — |  |
| 71 | -152 | On Event > On Body Lose Attachment | `<object>: On Body Lost Attachment` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | World > Update World | `World - Update` |  |  | — |  |
| 1 | 81 | Body > Creation > Quick > Create Body at Object | `Quick Create Body at (<p0>), offset (<p1>,<p2>), rotation (<p3>), destruction (<p4>)` |  | object “Object”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Rotation (-1: Disable, 0: Not Object, 1: Fast, 2: Quality)”; numeric expression “Link Destruction” | — |  |
| 2 | 82 | Shape > Creation > Quick > Create Box > By Object | `Quick Add Box to Body (<p0>), size (<p1>,<p2>), offset (<p3>,<p4>), angle (<p5>), density (<p6>), friction (<p7>), elasticity (<p8>)` |  | object “Object”; numeric expression “Width”; numeric expression “Height”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 3 | 83 | World > Reset World | `Reset World` |  |  | — |  |
| 4 | 84 | World > Set Gravity | `World - Set Gravity to (<p0>,<p1>)` |  | numeric expression “Gravity X”; numeric expression “Gravity Y” | — |  |
| 5 | 85 | World > Set Timestep | `World - Set Timestep to (<p0>)` |  | numeric expression “Timestep” | — |  |
| 6 | 86 | World > Set Position Iterations | `World - Set Position Iteration Count to (<p0>)` |  | numeric expression “Iterations” | — |  |
| 7 | 87 | World > Set Velocity Iterations | `World - Set Velocity Iteration Count to (<p0>)` |  | numeric expression “Iterations” | — |  |
| 8 | 88 | World > Enable/Disable CCD | `World - Enable CCD (<p0>)` |  | numeric expression “1: Enable, 0: Disable” | — |  |
| 9 | 89 | World > Enable/Disable Position Correction | `World - Enable Warm Starting (<p0>)` |  | numeric expression “1: Enable, 0: Disable” | — |  |
| 10 | 90 | World > Refilter All | `World - Refilter` |  |  | — |  |
| 11 | 91 | Body > Creation > Quick > Create Body | `Quick Create Body at (<p0>,<p1>), angle (<p2>)` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 12 | 92 | Body > Creation > Begin Body | `Begin Body` |  |  | — |  |
| 13 | 93 | Body > Creation > Definition > Load Body Definition | `Load Body Definition (<p0>)` |  | numeric expression “Body Definition ID” | — |  |
| 14 | 94 | Body > Creation > Definition > Store Current Data as Body Definition | `Store Current Body Data in Body Definition (<p0>)` |  | numeric expression “Body Definition ID” | — |  |
| 15 | 95 | Body > Creation > Definition > Remove Body Definition | `Remove Body Definition (<p0>)` |  | numeric expression “Body Definition ID” | — |  |
| 16 | 96 | Body > Creation > Set Custom Mass Data | `Body - Set Mass Data to mass (<p0>), inertia (<p1>), center (<p2>,<p3>)` |  | numeric expression “Mass”; numeric expression “Interia”; numeric expression “Center of Mass X”; numeric expression “Center of Mass Y” | — |  |
| 17 | 97 | Body > Creation > Set Linear Damping | `Body - Set Linear Damping to (<p0>)` |  | numeric expression “Damping” | — |  |
| 18 | 98 | Body > Creation > Set Angular Damping | `Body - Set Angular Damping to (<p0>)` |  | numeric expression “Damping” | — |  |
| 19 | 99 | Body > Creation > Set Sleepflag | `Body - Set Sleepflag to (<p0>)` |  | numeric expression “0: Disable Sleeping, 1: Enable Sleeping, 2: Start Asleep” | — |  |
| 20 | 100 | Body > Creation > Set Fixed Rotation | `Body - Set Fixed Rotation to (<p0>)` |  | numeric expression “1: Disable Rotation, 0: Enable Rotation” | — |  |
| 21 | 101 | Body > Creation > Set Bullet | `Body - Set Bullet to (<p0>)` |  | numeric expression “0: Disable Bullet, 1: Enable Bullet” | — |  |
| 22 | 102 | Body > Creation > Create Body > Create Body at Object | `Create Body at (<p0>), offset (<p1>,<p2>), rotation (<p3>), destruction (<p4>)` |  | object “Object”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Rotation (0: No Rotation, 1: Fast, 2: Quality”; numeric expression “Link Destruction” | — |  |
| 23 | 103 | Body > Creation > Create Body > Create Body | `Create Body at (<p0>,<p1>) , angle (<p2>)` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 24 | 104 | Body > Creation > Remove Body > By Body ID | `Remove Body (<p0>)` |  | numeric expression “Body ID” | — |  |
| 25 | 105 | Body > Creation > Remove Body > By Object | `Remove Body of (<p0>)` |  | object “Object” | — |  |
| 26 | 106 | Shape > Creation > Quick > Create Circle > By Object | `Quick Add Circle to Body (<p0>), diameter (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | object “Object”; numeric expression “Diameter”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 27 | 107 | Shape > Creation > Quick > Create Polygon > By Object | `Quick Add Polygon to Body (<p0>), verices (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | object “Object”; string expression “Vertices (CSV String)”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 28 | 108 | Shape > Creation > Quick > Create Edge Chain > By Object | `Quick Add Edge Chain to Body (<p0>), vertices (<p1>), closed (<p2>), offset (<p3>,<p4>), friction (<p5>), elasticity (<p6>)` |  | object “Object”; string expression “Vertices (CSV String)”; numeric expression “0: Open Edge, 1: Closed Edge”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 29 | 109 | Shape > Creation > Quick > Create Box > By Body ID | `Quick Add Box to Body (<p0>), size (<p1>,<p2>), offset (<p3>,<p4>), angle (<p5>), density (<p6>), friction (<p7>), elasticity (<p8>)` |  | numeric expression “Body ID”; numeric expression “Width”; numeric expression “Height”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 30 | 110 | Shape > Creation > Quick > Create Circle > By Body ID | `Quick Add Circle to Body (<p0>), diameter (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | numeric expression “Body ID”; numeric expression “Diameter”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 31 | 111 | Shape > Creation > Quick > Create Polygon > By Body ID | `Quick Add Polygon to Body (<p0>), verices (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | numeric expression “Body ID”; string expression “Vertices (CSV String)”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 32 | 112 | Shape > Creation > Quick > Create Edge Chain > By Body ID | `Quick Add Edge Chain to Body (<p0>), verices (<p1>), closed (<p2>), offset (<p3>,<p4>), friction (<p5>), elasticity (<p6>)` |  | numeric expression “Body ID”; string expression “Vertices (CSV String)”; numeric expression “0: Open Edge, 1: Closed Edge”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 33 | 113 | Shape > Creation > Quick > Create Box > Add Object as Shape to Body | `Quick Add Object (<p0>) as Box to Body (<p1>), size (<p2>,<p3>), offset (<p4>,<p5>), angle (<p6>), density (<p7>), friction (<p8>), elasticity (<p9>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Width”; numeric expression “Height”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 34 | 114 | Shape > Creation > Quick > Create Circle > Add Object as Shape to Body | `Quick Add Object (<p0>) as Circle to Body (<p1>), diameter (<p2>), offset (<p3>,<p4>), density (<p5>), friction (<p6>), elasticity (<p7>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Diameter”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 35 | 115 | Shape > Creation > Quick > Create Polygon > Add Object as Shape to Body | `Quick Add Object (<p0>) as Polygon to Body (<p1>), verices (<p2>), offset (<p3>,<p4>), density (<p5>), friction (<p6>), elasticity (<p7>)` |  | object “Object”; numeric expression “Body ID”; string expression “Vertices (CSV String)”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Density (0 for all shapes = static body)”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 36 | 116 | Shape > Creation > Quick > Create Edge Chain > Add Object as Shape to Body | `Quick Add Object (<p0>) as Edge Chain to Body (<p1>), verices (<p2>), closed (<p3>), offset (<p4>,<p5>), friction (<p6>), elasticity (<p7>)` |  | object “Object”; numeric expression “Body ID”; string expression “Vertices (CSV String)”; numeric expression “0: Open Edge, 1: Closed Edge”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Friction”; numeric expression “Elasticity” | — |  |
| 37 | 117 | Shape > Creation > Begin > Begin Polygon Shape | `Begin Polygon Shape` |  |  | — |  |
| 38 | 118 | Shape > Creation > Begin > Begin Circle Shape | `Begin Circle Shape` |  |  | — |  |
| 39 | 119 | Shape > Creation > Begin > Begin Edge Chain | `Begin Edge Chain` |  |  | — |  |
| 40 | 120 | Shape > Creation > Definition > Load Shape Definition | `Load Shape Definition (<p0>)` |  | numeric expression “Shape Definition ID” | — |  |
| 41 | 121 | Shape > Creation > Definition > Store Current Data as Shape Definition | `Store Current Shape Data in Shape Definition (<p0>)` |  | numeric expression “Shape Definition ID” | — |  |
| 42 | 122 | Shape > Creation > Definition > Remove Shape Definition | `Remove Shape Definition (<p0>)` |  | numeric expression “Shape Definition ID” | — |  |
| 43 | 123 | Shape > Creation > Set Density | `Shape - Set Density (<p0>)` |  | numeric expression “Density” | — |  |
| 44 | 124 | Shape > Creation > Set Friction | `Shape - Set Friction (<p0>)` |  | numeric expression “Friction” | — |  |
| 45 | 125 | Shape > Creation > Set Elasticity | `Shape - Set Elasticity (<p0>)` |  | numeric expression “Elasticity” | — |  |
| 46 | 126 | Shape > Creation > Set Collision Type | `Shape - Set Collision Type (<p0>)` |  | numeric expression “Collision Type (0-31)” | — |  |
| 47 | 127 | Shape > Creation > Set Sensor | `Shape - Set Sensor (<p0>)` |  | numeric expression “0: Is solid, 1: Is sensor” | — |  |
| 48 | 128 | Shape > Creation > Circle Shape > Set Diameter | `Circle Shape - Set Diameter (<p0>)` |  | numeric expression “Diameter” | — |  |
| 49 | 129 | Shape > Creation > Create Shape > Create Shape By Object | `Add Shape to Body (<p0>)` |  | object “Object” | — |  |
| 50 | 130 | Shape > Creation > Create Shape > Create Shape By Body ID | `Add Shape to Body (<p0>)` |  | numeric expression “Body ID” | — |  |
| 51 | 131 | Shape > Creation > Create Shape > Add Object as Shape to Body | `Add Object (<p0>) as Shape to Body (<p1>)` |  | object “Object”; numeric expression “Body ID” | — |  |
| 52 | 132 | Shape > Creation > Circle Shape > Set Local Position | `Circle Shape - Set Local Position to (<p0>,<p1>)` |  | numeric expression “Local X Position”; numeric expression “Local Y Position” | — |  |
| 53 | 133 | Shape > Creation > Remove Shape > By Body ID | `Remove Shape (<p1>) from Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)” | — |  |
| 54 | 134 | Shape > Creation > Polygon Shape > Set as Box | `Polygon Shape - Set As Box, size (<p0>,<p1>), offset (<p2>,<p3>), angle (<p4>)` |  | numeric expression “Width”; numeric expression “Height”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle” | — |  |
| 55 | 135 | Shape > Creation > Polygon Shape > Precache Vertices | `Polygon Shape - Precache (<p0>) vertices` |  | numeric expression “Number of Vertices” | — |  |
| 56 | 136 | Shape > Creation > Polygon Shape > Add Vertice | `Polygon Shape - Add Vertice (<p0>,<p1>)` |  | numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 57 | 137 | Shape > Creation > Polygon Shape > Remove Vertice | `Polygon Shape - Remove Vertice (<p0>)` |  | numeric expression “Vertice ID” | — |  |
| 58 | 138 | Shape > Creation > Polygon Shape > Set Vertice | `Polygon Shape - Set Vertice (<p0>) to (<p1>,<p2>)` |  | numeric expression “Vertice ID”; numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 59 | 139 | Shape > Creation > Polygon Shape > Insert Vertice | `Polygon Shape - Insert Vertice (<p1>,<p2>) at (<p0>)` |  | numeric expression “Position”; numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 60 | 140 | Shape > Creation > Polygon Shape > Clear Vertices | `Polygon Shape - Clear Vertices` |  |  | — |  |
| 61 | 141 | Shape > Creation > Polygon Shape > Translate Vertices | `Polygon Shape - Translate Vertices by (<p0>,<p1>)` |  | numeric expression “X Translation”; numeric expression “Y Translation” | — |  |
| 62 | 142 | Shape > Creation > Polygon Shape > Read Vertices from String | `Polygon Shape - Read Vertices from String (<p0>)` |  | string expression “Vertices (CSV String)” | — |  |
| 63 | 143 | Shape > Creation > Edge Chain > Precache Vertices | `Edge Chain - Precache (<p0>) vertices` |  | numeric expression “Number of Vertices” | — |  |
| 64 | 144 | Shape > Creation > Edge Chain > Add Vertice | `Edge Chain - Add Vertice (<p0>,<p1>)` |  | numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 65 | 145 | Shape > Creation > Edge Chain > Remove Vertice | `Edge Chain - Remove Vertice (<p0>)` |  | numeric expression “Vertice ID” | — |  |
| 66 | 146 | Shape > Creation > Edge Chain > Set Vertice | `Edge Chain - Set Vertice (<p0>) to (<p1>,<p2>)` |  | numeric expression “Vertice ID”; numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 67 | 147 | Shape > Creation > Edge Chain > Insert Vertice | `Edge Chain - Insert Vertice (<p1>,<p2>) at (<p0>)` |  | numeric expression “Position”; numeric expression “Vertice X”; numeric expression “Vertice Y” | — |  |
| 68 | 148 | Shape > Creation > Edge Chain > Clear Vertices | `Edge Chain - Clear Vertices` |  |  | — |  |
| 69 | 149 | Shape > Creation > Edge Chain > Translate Vertices | `Edge Chain - Translate Vertices by (<p0>,<p1>)` |  | numeric expression “X Translation”; numeric expression “Y Translation” | — |  |
| 70 | 150 | Shape > Creation > Edge Chain > Read Vertices from String | `Edge Chain - Read Vertices from String (<p0>)` |  | string expression “Vertices (CSV String)” | — |  |
| 71 | 151 | Shape > Creation > Edge Chain > Set Loop | `Edge Chain - Set Loop (<p0>)` |  | numeric expression “0: Is Open, 1: Is Looped” | — |  |
| 72 | 152 | Shape > Creation > Remove Shape > By Object | `Remove Shape (<p1>) from Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)” | — |  |
| 73 | 153 | Shape > Creation > Filter > Set Category Bits | `Shape - Set Category Bits (<p0>)` |  | numeric expression “Binary Representation of Categories” | — |  |
| 74 | 154 | Shape > Creation > Filter > Set Mask Bits | `Shape - Set Mask Bits (<p0>)` |  | numeric expression “Binary Representation of Masks” | — |  |
| 75 | 155 | Shape > Creation > Filter > Set Group Index | `Shape - Set Group Index (<p0>)` |  | numeric expression “Group Index” | — |  |
| 76 | 156 | Shape > Creation > Filter > Add Category | `Shape - Add Category (<p0>)` |  | numeric expression “Category (0-15)” | — |  |
| 77 | 157 | Shape > Creation > Filter > Remove Category | `Shape - Remove Category (<p0>)` |  | numeric expression “Category (0-15)” | — |  |
| 78 | 158 | Shape > Creation > Filter > Add Mask | `Shape - Add Mask (<p0>)` |  | numeric expression “Mask (0-15)” | — |  |
| 79 | 159 | Shape > Creation > Filter > Remove Mask | `Shape - Remove Mask (<p0>)` |  | numeric expression “Mask (0-15)” | — |  |
| 80 | 160 | Body > Modify > Position > Set Position and Angle > By Object | `Set Position and Angle of Body (<p0>) to (<p1>,<p2>), (<p3>)` |  | object “Object”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 81 | 161 | Body > Modify > Position > Set X Position > By Object | `Set X Position of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “X Position” | — |  |
| 82 | 162 | Body > Modify > Position > Set Y Position > By Object | `Set Y Position of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Y Position” | — |  |
| 83 | 163 | Body > Modify > Position > Set Angle > By Object | `Set Angle of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Angle” | — |  |
| 84 | 164 | Body > Modify > Position > Set Position and Angle > By Body ID | `Set Position and Angle of Body (<p0>) to (<p1>,<p2>), (<p3>)` |  | numeric expression “Body ID”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 85 | 165 | Body > Modify > Position > Set X Position > By Body ID | `Set X Position of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “X Position” | — |  |
| 86 | 166 | Body > Modify > Position > Set Y Position > By Body ID | `Set Y Position of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Y Position” | — |  |
| 87 | 167 | Body > Modify > Position > Set Angle > By Body ID | `Set Angle of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Angle” | — |  |
| 88 | 168 | Body > Modify > Velocity > Set Linear Velocity > By Body ID | `Set Linear Velocity of Body (<p0>) to (<p1>,<p2>)` |  | numeric expression “Body ID”; numeric expression “X Velocity”; numeric expression “Y Velocity” | — |  |
| 89 | 169 | Body > Modify > Velocity > Set Angular Velocity > By Body ID | `Set Angular Velocity of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Angular Velocity” | — |  |
| 90 | 170 | Body > Modify > Velocity > Set X Velocity > By Body ID | `Set X Velocity of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “X Velocity” | — |  |
| 91 | 171 | Body > Modify > Velocity > Set Y Velocity > By Body ID | `Set Y Velocity of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Y Velocity” | — |  |
| 92 | 172 | Body > Modify > Velocity > Set Linear Velocity > By Object | `Set Linear Velocity of Body (<p0>) to (<p1>,<p2>)` |  | object “Object”; numeric expression “X Velocity”; numeric expression “Y Velocity” | — |  |
| 93 | 173 | Body > Modify > Velocity > Set Angular Velocity > By Object | `Set Angular Velocity of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Angular Velocity” | — |  |
| 94 | 174 | Body > Modify > Velocity > Set X Velocity > By Object | `Set X Velocity of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “X Velocity” | — |  |
| 95 | 175 | Body > Modify > Velocity > Set Y Velocity > By Object | `Set Y Velocity of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Y Velocity” | — |  |
| 96 | 176 | Body > Modify > Velocity > Apply Force > By Object | `Apply Force to Body (<p0>), force (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | object “Object”; numeric expression “X Force”; numeric expression “Y Force”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “0: Is World Coordinate, 1: Is Local Coordinate” | — |  |
| 97 | 177 | Body > Modify > Velocity > Apply Impulse > By Object | `Apply Impulse to Body (<p0>), impulse (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | object “Object”; numeric expression “X Strength”; numeric expression “Y Strength”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “0: Is World Coordinate, 1: Is Local Coordinate” | — |  |
| 98 | 178 | Body > Modify > Velocity > Apply Torque > By Object | `Apply Torque to Body (<p0>), torque (<p1>)` |  | object “Object”; numeric expression “Torque” | — |  |
| 99 | 179 | Body > Modify > Velocity > Apply Force > By Body ID | `Apply Force to Body (<p0>), force (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | numeric expression “Body ID”; numeric expression “X Force”; numeric expression “Y Force”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “0: Is World Coordinate, 1: Is Local Coordinate” | — |  |
| 100 | 180 | Body > Modify > Velocity > Apply Impulse > By Body ID | `Apply Impulse to Body (<p0>), impulse (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | numeric expression “Body ID”; numeric expression “X Strength”; numeric expression “Y Strength”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “0: Is World Coordinate, 1: Is Local Coordinate” | — |  |
| 101 | 181 | Body > Modify > Velocity > Apply Torque > By Body ID | `Apply Torque to Body (<p0>), torque (<p1>)` |  | numeric expression “Body ID”; numeric expression “Torque” | — |  |
| 102 | 182 | Body > Modify > Sleep > Enable/Disable Sleep > By Body ID | `Enable Sleep for Body (<p0>), enable (<p1>)` |  | numeric expression “Body ID”; numeric expression “0: Disable Sleep, 1: Enable Sleep” | — |  |
| 103 | 183 | Body > Modify > Sleep > Put Body to Sleep > By Body ID | `Put Body (<p0>) to Sleep` |  | numeric expression “Body ID” | — |  |
| 104 | 184 | Body > Modify > Sleep > Wake up Body > By Body ID | `Wake up Body (<p0>)` |  | numeric expression “Body ID” | — |  |
| 105 | 185 | Body > Modify > Sleep > Enable/Disable Sleep > By Object | `Enable Sleep for Body (<p0>), enable (<p1>)` |  | object “Object”; numeric expression “0: Disable Sleep, 1: Enable Sleep” | — |  |
| 106 | 186 | Body > Modify > Sleep > Put Body to Sleep > By Object | `Put Body (<p0>) to Sleep` |  | object “Object” | — |  |
| 107 | 187 | Body > Modify > Sleep > Wake up Body > By Object | `Wake up Body (<p0>)` |  | object “Object” | — |  |
| 108 | 188 | Body > Modify > Mass > Set Mass Data > By Object | `Set Mass Data of Body (<p0>) to mass (<p1>), inertia (<p2>), center (<p3>,<p4>)` |  | object “Object”; numeric expression “Mass”; numeric expression “Inertia”; numeric expression “Center X”; numeric expression “Center Y” | — |  |
| 109 | 189 | Body > Modify > Mass > Set Mass > By Object | `Set Mass of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Mass” | — |  |
| 110 | 190 | Body > Modify > Mass > Set Inertia > By Object | `Set Inertia of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Inertia” | — |  |
| 111 | 191 | Body > Modify > Mass > Set Center of Mass > By Object | `Set Center of Mass of Body (<p0>) to (<p1>,<p2>)` |  | object “Object”; numeric expression “Center X”; numeric expression “Center Y” | — |  |
| 112 | 192 | Body > Modify > Mass > Set Mass Data > By Body ID | `Set Mass Data of Body (<p0>) to mass (<p1>), inertia (<p2>), center (<p3>,<p4>)` |  | numeric expression “Body ID”; numeric expression “Mass”; numeric expression “Inertia”; numeric expression “Center X”; numeric expression “Center Y” | — |  |
| 113 | 193 | Body > Modify > Mass > Set Mass > By Body ID | `Set Mass of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Mass” | — |  |
| 114 | 194 | Body > Modify > Mass > Set Inertia > By Body ID | `Set Inertia of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Inertia” | — |  |
| 115 | 195 | Body > Modify > Mass > Set Center of Mass > By Body ID | `Set Center of Mass of Body (<p0>) to (<p1>,<p2>)` |  | numeric expression “Body ID”; numeric expression “Center X”; numeric expression “Center Y” | — |  |
| 116 | 196 | Body > Modify > Mass > Set Mass from Shapes > By Object | `Set Mass Data of Body (<p0>) from Shapes` |  | object “Object” | — |  |
| 117 | 197 | Body > Modify > Mass > Set Mass from Shapes > By Body ID | `Set Mass Data of Body (<p0>) from Shapes` |  | numeric expression “Body ID” | — |  |
| 118 | 198 | Body > Modify > Set Bullet > By Object | `Set Bullet of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “0: Disable Bullet, 1: Enable Bullet” | — |  |
| 119 | 199 | Body > Modify > Set Bullet > By Body ID | `Set Bullet of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “0: Disable Bullet, 1: Enable Bullet” | — |  |
| 120 | 200 | Shape > Modify > Set Friction > By Object | `Set Friction of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Friction” | — |  |
| 121 | 201 | Shape > Modify > Set Elasticity > By Object | `Set Elasticity of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Elasticity” | — |  |
| 122 | 202 | Shape > Modify > Set Collision Type > By Object | `Set Collision Type of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Collision Type (0-31)” | — |  |
| 123 | 203 | Shape > Modify > Set Friction > By Body ID | `Set Friction of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Friction” | — |  |
| 124 | 204 | Shape > Modify > Set Elasticity > By Body ID | `Set Elasticity of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Elasticity” | — |  |
| 125 | 205 | Shape > Modify > Set Collision Type > By Body ID | `Set Collision Type of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Collision Type (0-31)” | — |  |
| 126 | 206 | Shape > Modify > Filter > Set Group Index > By Object | `Set Group Index of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Group Index” | — |  |
| 127 | 207 | Shape > Modify > Filter > Set Category Bits > By Object | `Set Category Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category Bits” | — |  |
| 128 | 208 | Shape > Modify > Filter > Set Mask Bits > By Object | `Set Mask Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask Bits” | — |  |
| 129 | 209 | Shape > Modify > Filter > Add Category > By Object | `Add Category (<p2>) to Shape (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category (0-15)” | — |  |
| 130 | 210 | Shape > Modify > Filter > Remove Category > By Object | `Remove Category (<p2>) from Shape (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category (0-15)” | — |  |
| 131 | 211 | Shape > Modify > Filter > Add Mask > By Object | `Add Mask (<p2>) to Shape (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask (0-15)” | — |  |
| 132 | 212 | Shape > Modify > Filter > Remove Mask > By Object | `Remove Mask (<p2>) from Shape (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask (0-15)” | — |  |
| 133 | 213 | Shape > Modify > Filter > Set Group Index > By Body ID | `Set Group Index of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Group Index” | — |  |
| 134 | 214 | Shape > Modify > Filter > Set Category Bits > By Body ID | `Set Category Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category Bits” | — |  |
| 135 | 215 | Shape > Modify > Filter > Set Mask Bits > By Body ID | `Set Mask Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask Bits” | — |  |
| 136 | 216 | Shape > Modify > Filter > Add Category > By Body ID | `Add Category (<p2>) to Shape (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category (0-15)” | — |  |
| 137 | 217 | Shape > Modify > Filter > Remove Category > By Body ID | `Remove Category (<p2>) from Shape (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Category (0-15)” | — |  |
| 138 | 218 | Shape > Modify > Filter > Add Mask > By Body ID | `Add Mask (<p2>) to Shape (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask (0-15)” | — |  |
| 139 | 219 | Shape > Modify > Filter > Remove Mask > By Body ID | `Remove Mask (<p2>) from Shape (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Mask (0-15)” | — |  |
| 140 | 220 | Shape > Modify > Refilter Contacts > By Object | `Refilter Contacts for Shape (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)” | — |  |
| 141 | 221 | Shape > Modify > Refilter Contacts > By Body ID | `Refilter Contacts for Shape (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)” | — |  |
| 142 | 222 | Joint > Creation > Quick > Create Mouse Joint > Using Object | `Quick Add Mouse Joint to Body (<p0>), Anchor (<p1>,<p2>), Max Force (<p3>)` |  | object “Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “Max Force” | — |  |
| 143 | 223 | Joint > Creation > Quick > Create Mouse Joint > Using Body ID | `Quick Add Mouse Joint to Body (<p0>), Anchor (<p1>,<p2>), Max Force (<p3>)` |  | numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “Max Force” | — |  |
| 144 | 224 | Joint > Creation > Remove Joint > By Joint ID | `Remove Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 145 | 225 | Joint > Modify > Mouse Joint > Set Target > By Joint ID | `Set Target of Mouse Joint (<p0>) to (<p1>,<p2>)` |  | numeric expression “Joint ID”; numeric expression “Target X”; numeric expression “Target Y” | — |  |
| 146 | 226 | Joint > Creation > Quick > Create Revolute Joint > Using Object and Body ID | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>), Reverse (<p6>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “0: Disable Collision, 1: Enable Collision”; numeric expression “1: Reverse Body Order” | — |  |
| 147 | 227 | Joint > Creation > Quick > Create Prismatic Joint > Using Object and Body ID | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>), Reverse (<p7>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision”; numeric expression “1: Reverse Body Order” | — |  |
| 148 | 228 | Joint > Creation > Quick > Create Distance Joint > Using Object and Body ID | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>), Reverse (<p9>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “First Anchor X”; numeric expression “First Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Second Anchor X”; numeric expression “Second Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “0: Disable Collision, 1: Enable Collision”; numeric expression “1: Reverse Body Order” | — |  |
| 149 | 229 | Joint > Creation > Quick > Create Line Joint > Using Object and Body ID | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>), Reverse (<p7>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision”; numeric expression “1: Reverse Body Order” | — |  |
| 150 | 230 | Joint > Creation > Quick > Create Pulley Joint > Using Object and Body ID | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D), Reverse (%E)` |  | (unreliable parameters) | — |  |
| 151 | 231 | Joint > Creation > Quick > Create Revolute Joint > Using 2 Body ID's | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 152 | 232 | Joint > Creation > Quick > Create Prismatic Joint > Using 2 Body ID's | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 153 | 233 | Joint > Creation > Quick > Create Distance Joint > Using 2 Body ID's | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID”; numeric expression “First Anchor X”; numeric expression “First Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Second Anchor X”; numeric expression “Second Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 154 | 234 | Joint > Creation > Quick > Create Line Joint > Using 2 Body ID's | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 155 | 235 | Joint > Creation > Quick > Create Pulley Joint > Using 2 Body ID's | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D)` |  | (unreliable parameters) | — |  |
| 156 | 236 | Joint > Creation > Quick > Create Revolute Joint > Using 2 Objects | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>)` |  | object “First Object”; object “Second Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 157 | 237 | Joint > Creation > Quick > Create Prismatic Joint > Using 2 Objects | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | object “First Object”; object “Second Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 158 | 238 | Joint > Creation > Quick > Create Distance Joint > Using 2 Objects | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>)` |  | object “First Object”; object “Second Object”; numeric expression “First Anchor X”; numeric expression “First Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Second Anchor X”; numeric expression “Second Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 159 | 239 | Joint > Creation > Quick > Create Line Joint > Using 2 Objects | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | object “First Object”; object “Second Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to First Body, 2: Local to Second Body”; numeric expression “Translation Angle”; numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 160 | 240 | Joint > Creation > Quick > Create Pulley Joint > Using 2 Objects | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D)` |  | (unreliable parameters) | — |  |
| 161 | 241 | Joint > Creation > Quick > Create Gear Joint > Using 2 Body ID's | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | numeric expression “First Body ID”; numeric expression “First Joint ID”; numeric expression “Second Body ID”; numeric expression “Second Joint ID”; numeric expression “Ratio” | — |  |
| 162 | 242 | Joint > Creation > Begin > Begin Revolute Joint | `Begin Revolute Joint` |  |  | — |  |
| 163 | 243 | Joint > Creation > Begin > Begin Prismatic Joint | `Begin Prismatic Joint` |  |  | — |  |
| 164 | 244 | Joint > Creation > Begin > Begin Distance Joint | `Begin Distance Joint` |  |  | — |  |
| 165 | 245 | Joint > Creation > Begin > Begin Line Joint | `Begin Line Joint` |  |  | — |  |
| 166 | 246 | Joint > Creation > Begin > Begin Pulley Joint | `Begin Pulley Joint` |  |  | — |  |
| 167 | 247 | Joint > Creation > Begin > Begin Mouse Joint | `Begin Mouse Joint` |  |  | — |  |
| 168 | 248 | Joint > Creation > Begin > Gear Joint | `Begin Gear Joint` |  |  | — |  |
| 169 | 249 | Joint > Creation > Definition > Load Joint Definition | `Load Joint Definition (<p0>)` |  | numeric expression “Definition ID” | — |  |
| 170 | 250 | Joint > Creation > Definition > Store Current Data as Joint Definition | `Store Current Joint Data in Joint Definition (<p0>)` |  | numeric expression “Definition ID” | — |  |
| 171 | 251 | Joint > Creation > Definition > Remove Joint Definition | `Remove Joint Definition (<p0>)` |  | numeric expression “Definition ID” | — |  |
| 172 | 252 | Joint > Creation > Create Joint > Create Joint at Body by Body ID | `Create Joint at Body (<p0>)` |  | numeric expression “Body ID” | — |  |
| 173 | 253 | Joint > Creation > Create Joint > Create Joint at Body by Object | `Create Joint at Body (<p0>)` |  | object “Object” | — |  |
| 174 | 254 | Joint > Creation > Create Joint > Create Joint Between two Body ID's | `Create Joint Between Bodies (<p0>) ad (<p1>)` |  | numeric expression “First Body ID”; numeric expression “Second Body ID” | — |  |
| 175 | 255 | Joint > Creation > Create Joint > Create Joint Between two Objects | `Create Joint Between Bodies (<p0>) and (<p1>)` |  | object “First Object”; object “Second Object” | — |  |
| 176 | 256 | Joint > Creation > Enable/Disable Internal Collision | `Joint - Enable Internal Collision (<p0>)` |  | numeric expression “0: Disable Collision, 1: Enable Collision” | — |  |
| 177 | 257 | Joint > Creation > Quick > Create Gear Joint > Using 2 Objects | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | object “First Object”; numeric expression “First Joint ID”; object “Second Object”; numeric expression “Second Joint ID”; numeric expression “Ratio” | — |  |
| 178 | 258 | Joint > Creation > Revolute Joint > Set First Body Anchor | `Revolute Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 179 | 259 | Joint > Creation > Revolute Joint > Set Second Body Anchor | `Revolute Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 180 | 260 | Joint > Creation > Revolute Joint > Set Reference Angle | `Revolute Joint - Set Reference Angle to (<p0>)` |  | numeric expression “Reference Angle” | — |  |
| 181 | 261 | Joint > Creation > Revolute Joint > Enable/Disable Limits | `Revolute Joint - Enable Limits (<p0>)` |  | numeric expression “0: Disabe Limits, 1: Enable Limits” | — |  |
| 182 | 262 | Joint > Creation > Revolute Joint > Enable/Disable Motor | `Revolute Joint - Enable Motor (<p0>)` |  | numeric expression “0: Disabe Motor, 1: Enable Motor” | — |  |
| 183 | 263 | Joint > Creation > Revolute Joint > Set Limits | `Revolute Joint - Set Limits to (<p0>,<p1>)` |  | numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 184 | 264 | Joint > Creation > Revolute Joint > Set Motor | `Revolute Joint - Set Motor to Speed (<p0>), Max Torque (<p1>)` |  | numeric expression “Speed”; numeric expression “Max Torque” | — |  |
| 185 | 265 | Joint > Creation > Create Joint > Create Joint Between Object and Body ID | `Create Joint Between Bodies (<p0>) and (<p1>), reverse (<p2>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “1: Reverse Body Order” | — |  |
| 186 | 266 | Collisions > Register Collision for Types | `Register Collision for Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 187 | 267 | Collisions > Disable Collision for Types | `Disable Collision for Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 188 | 268 | Collisions > Reset Collision for Types | `Reset Collision for Types (<p0>) and (<p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” | — |  |
| 189 | 269 | Attached Objects > Attach Object to Body | `Attach Object (<p0>) to Body (<p1>), Offset (<p2>,<p3>) Angle Offset (<p4>) is Local (<p5>), rotation (<p6>) destruction (<p7>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle Offset”; numeric expression “0: Object Current Position, 1: Local Position”; numeric expression “Rotation (0: None, 1: Fast, 2: Quality)”; numeric expression “Link Destruction” | — |  |
| 190 | 270 | Attached Objects > Detach Object | `Detach Object (<p0>)` |  | object “Object” | — |  |
| 191 | 271 | Debug Draw > Start Debug Draw in Overlay | `Start Debug Draw in Overlay (<p0>)` |  | numeric expression “Overlay Adress” | — |  |
| 192 | 272 | Debug Draw > Stop Debug Draw | `Stop Debug Draw` |  |  | — |  |
| 193 | 273 | Debug Draw > Set Flags > Set Flags | `Set Debug Draw Flags to (<p0>)` |  | numeric expression “Debug Draw Flags” | — |  |
| 194 | 274 | Joint > Creation > Quick > Create Gear Joint > Using Object and Body ID | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | object “First Object”; numeric expression “First Joint ID”; object “Second Body ID”; numeric expression “Second Joint ID”; numeric expression “Ratio” | — |  |
| 195 | 275 | Joint > Creation > Prismatic Joint > Set First Body Anchor | `Prismatic Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 196 | 276 | Joint > Creation > Prismatic Joint > Set Second Body Anchor | `Prismatic Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 197 | 277 | Joint > Creation > Prismatic Joint > Set Reference Angle | `Prismatic Joint - Set Reference Angle to (<p0>)` |  | numeric expression “Reference Angle” | — |  |
| 198 | 278 | Joint > Creation > Prismatic Joint > Enable/Disable Limits | `Prismatic Joint - Enable Limits (<p0>)` |  | numeric expression “0: Disabe Limits, 1: Enable Limits” | — |  |
| 199 | 279 | Joint > Creation > Prismatic Joint > Enable/Disable Motor | `Prismatic Joint - Enable Motor (<p0>)` |  | numeric expression “0: Disabe Motor, 1: Enable Motor” | — |  |
| 200 | 280 | Joint > Creation > Prismatic Joint > Set Limits | `Prismatic Joint - Set Limits to (<p0>,<p1>)` |  | numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 201 | 281 | Joint > Creation > Prismatic Joint > Set Motor | `Prismatic Joint - Set Motor to Speed (<p0>), Max Force (<p1>)` |  | numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 202 | 282 | Joint > Creation > Prismatic Joint > Set Translation Angle | `Prismatic Joint - Set Transtation Angle to (<p0>), Local to (<p1>)` |  | numeric expression “Translation Angle”; numeric expression “0: World Angle, 1: Local to First Body, 2: Local to Second Body” | — |  |
| 203 | 283 | Joint > Creation > Line Joint > Set First Body Anchor | `Line Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 204 | 284 | Joint > Creation > Line Joint > Set Second Body Anchor | `Line Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 205 | 285 | World > Enable/Disable Automatic Update | `World - Enable Automatic Update (<p0>)` |  | numeric expression “1: Enable, 0: Disable” | — |  |
| 206 | 286 | Joint > Creation > Line Joint > Enable/Disable Limits | `Line Joint - Enable Limits (<p0>)` |  | numeric expression “0: Disabe Limits, 1: Enable Limits” | — |  |
| 207 | 287 | Joint > Creation > Line Joint > Enable/Disable Motor | `Line Joint - Enable Motor (<p0>)` |  | numeric expression “0: Disabe Motor, 1: Enable Motor” | — |  |
| 208 | 288 | Joint > Creation > Line Joint > Set Limits | `Line Joint - Set Limits to (<p0>,<p1>)` |  | numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 209 | 289 | Joint > Creation > Line Joint > Set Motor | `Line Joint - Set Motor to Speed (<p0>), Max Force (<p1>)` |  | numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 210 | 290 | Joint > Creation > Line Joint > Set Translation Angle | `Line Joint - Set Transtation Angle to (<p0>), Local to (<p1>)` |  | numeric expression “Translation Angle”; numeric expression “0: World Angle, 1: Local to First Body, 2: Local to Second Body” | — |  |
| 211 | 291 | Joint > Creation > Distance Joint > Set First Body Anchor | `Distance Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 212 | 292 | Joint > Creation > Distance Joint > Set Second Body Anchor | `Distance Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 213 | 293 | Joint > Creation > Distance Joint > Set Length | `Distance Joint - Set Length to (<p0>), absolute (<p1>)` |  | numeric expression “Length”; numeric expression “0: Additional Length, 1: Absolute Length” | — |  |
| 214 | 294 | Joint > Creation > Distance Joint > Set Frequency | `Distance Joint - Set Frequency to (<p0>)` |  | numeric expression “Frequency” | — |  |
| 215 | 295 | Joint > Creation > Distance Joint > Set Damping Ratio | `Distance Joint - Set Damping to (<p0>)` |  | numeric expression “Damping” | — |  |
| 216 | 296 | Joint > Creation > Mouse Joint > Set Anchor | `Mouse Joint - Set Anchor to (<p0>,<p1>), is Local (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate” | — |  |
| 217 | 297 | Joint > Creation > Mouse Joint > Set Damping Ratio | `Mouse Joint - Set Frequency to (<p0>)` |  | numeric expression “Frequency” | — |  |
| 218 | 298 | Joint > Creation > Mouse Joint > Set Frequency | `Mouse Joint - Set Damping to (<p0>)` |  | numeric expression “Damping” | — |  |
| 219 | 299 | Joint > Creation > Mouse Joint > Set Max Force | `Mouse Joint - Set Max Force to (<p0>)` |  | numeric expression “Max Force” | — |  |
| 220 | 300 | Joint > Creation > Gear Joint > Set First Joint | `Gear Joint - Set First Joint to (<p0>), from Body (<p1>)` |  | numeric expression “Joint”; numeric expression “0: Joint ID, 1: Body Joint Number” | — |  |
| 221 | 301 | Joint > Creation > Gear Joint > Set Second Joint | `Gear Joint - Set Second Joint to (<p0>), from Body (<p1>)` |  | numeric expression “Joint”; numeric expression “0: Joint ID, 1: Body Joint Number” | — |  |
| 222 | 302 | Joint > Creation > Gear Joint > Set Ratio | `Gear Joint - Set Ratio to (<p0>)` |  | numeric expression “Ratio” | — |  |
| 223 | 303 | Joint > Creation > Pulley Joint > Set First Body Anchor | `Pulley Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 224 | 304 | Joint > Creation > Pulley Joint > Set Second Body Anchor | `Pulley Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 225 | 305 | Joint > Creation > Pulley Joint > Set First Ground Anchor | `Pulley Joint - Set First Ground Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 226 | 306 | Joint > Creation > Pulley Joint > Set Second Ground Anchor | `Pulley Joint - Set Second Ground Anchor to (<p0>,<p1>), Local to (<p2>)` |  | numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body” | — |  |
| 227 | 307 | Joint > Creation > Pulley Joint > Set First Max Length | `Pulley Joint - Set First Max Length to (<p0>), absolute (<p1>)` |  | numeric expression “Max Length”; numeric expression “0: Additional Length, 1: Absolute Length” | — |  |
| 228 | 308 | Joint > Creation > Pulley Joint > Set Second Max Length | `Pulley Joint - Set Second Max Length to (<p0>), absolute (<p1>)` |  | numeric expression “Max Length”; numeric expression “0: Additional Length, 1: Absolute Length” | — |  |
| 229 | 309 | Joint > Creation > Pulley Joint > Set Ratio | `Pulley Joint - Set Ratio to (<p0>)` |  | numeric expression “Ratio” | — |  |
| 230 | 310 | Joint > Modify > Revolute Joint > Set Motor > By Joint ID | `Revolute Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Torque (<p2>)` |  | numeric expression “Joint ID”; numeric expression “Speed”; numeric expression “Max Torque” | — |  |
| 231 | 311 | Joint > Modify > Revolute Joint > Disable Motor > By Joint ID | `Revolute Joint - Disable Motor for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 232 | 312 | Joint > Modify > Revolute Joint > Set Limits > By Joint ID | `Revolute Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | numeric expression “Joint ID”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 233 | 313 | Joint > Modify > Revolute Joint > Disable Limits > By Joint ID | `Revolute Joint - Disable Limits for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 234 | 314 | Joint > Modify > Prismatic Joint > Set Motor > By Joint ID | `Prismatic Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Force (<p2>)` |  | numeric expression “Joint ID”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 235 | 315 | Joint > Modify > Prismatic Joint > Disable Motor > By Joint ID | `Prismatic Joint - Disable Motor for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 236 | 316 | Joint > Modify > Prismatic Joint > Set Limits > By Joint ID | `Prismatic Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | numeric expression “Joint ID”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 237 | 317 | Joint > Modify > Prismatic Joint > Disable Limits > By Joint ID | `Prismatic Joint - Disable Limits for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 238 | 318 | Joint > Modify > Line Joint > Set Motor > By Joint ID | `Line Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Force (<p2>)` |  | numeric expression “Joint ID”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 239 | 319 | Joint > Modify > Line Joint > Disable Motor > By Joint ID | `Line Joint - Disable Motor for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 240 | 320 | Joint > Modify > Line Joint > Set Limits > By Joint ID | `Line Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | numeric expression “Joint ID”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 241 | 321 | Joint > Modify > Line Joint > Disable Limits > By Joint ID | `Line Joint - Disable Limits for Joint (<p0>)` |  | numeric expression “Joint ID” | — |  |
| 242 | 322 | Ray Cast > Do Single Shape Ray Cast | `Do Single Shape Ray Cast Between Points (<p0>,<p1>) and (<p2>,<p3>)` |  | numeric expression “Start X”; numeric expression “Start Y”; numeric expression “End X”; numeric expression “End Y” | — |  |
| 243 | 323 | Ray Cast > Do Multi Shape Ray Cast | `Do Multi-Shape Ray Cast Between Points (<p0>,<p1>) and (<p2>,<p3>)` |  | numeric expression “Start X”; numeric expression “Start Y”; numeric expression “End X”; numeric expression “End Y”; numeric expression “Max Shapes” | — |  |
| 244 | 324 | Ray Cast > Filter > Set Target Collision Type | `Set Raycast Target Collision Type to (<p0>)` |  | numeric expression “Collision Type” | — |  |
| 245 | 325 | Ray Cast > Filter > Remove Target Collision Type | `Remove Raycast Target Collision Type` |  |  | — |  |
| 246 | 326 | Ray Cast > Filter > Set Target Mask Bits | `Set Raycast Mask Bits to (<p0>)` |  | numeric expression “Mask Bits” | — |  |
| 247 | 327 | Ray Cast > Filter > Remove Target Mask Bits | `Remove Raycast Mask` |  |  | — |  |
| 248 | 328 | Body > Creation > Set Automatic Mass Data | `Body - Set Automatic Mass Data` |  |  | — |  |
| 249 | 329 | Joint > Creation > Quick > Create Revolute Joint > Using Single Object | `Quick Add Revolute Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>)` |  | object “Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate” | — |  |
| 250 | 330 | Joint > Creation > Quick > Create Prismatic Joint > Using Single Object | `Quick Add Prismatic Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | object “Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Translation Angle” | — |  |
| 251 | 331 | Joint > Creation > Quick > Create Distance Joint > Using Single Object | `Quick Add Distance Joint To Body (<p0>), First Anchor (<p1>,<p2>), is Local (<p3>), Second Anchor (<p4>,<p5>), is Local (<p6>)` |  | object “Object”; numeric expression “First Anchor X”; numeric expression “First Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Second Anchor X”; numeric expression “Second Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate” | — |  |
| 252 | 332 | Joint > Creation > Quick > Create Line Joint > Using Single Object | `Quick Add Line Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | object “Object”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Translation Angle” | — |  |
| 253 | 333 | Joint > Creation > Quick > Create Revolute Joint > Using single Body ID | `Quick Add Revolute Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>)` |  | numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate” | — |  |
| 254 | 334 | Joint > Creation > Quick > Create Prismatic Joint > Using single Body ID | `Quick Add Prismatic Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Translation Angle” | — |  |
| 255 | 335 | Joint > Creation > Quick > Create Distance Joint > Using single Body ID | `Quick Add Distance Joint To Body (<p0>), First Anchor (<p1>,<p2>), is Local (<p3>), Second Anchor (<p4>,<p5>), is Local (<p6>)` |  | numeric expression “Body ID”; numeric expression “First Anchor X”; numeric expression “First Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Second Anchor X”; numeric expression “Second Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate” | — |  |
| 256 | 336 | Joint > Creation > Quick > Create Line Joint > Using Single Body ID | `Quick Add Line Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | numeric expression “Body ID”; numeric expression “Anchor X”; numeric expression “Anchor Y”; numeric expression “0: World Coordinate, 1: Local Coordinate”; numeric expression “Translation Angle” | — |  |
| 257 | 337 | Shape > Creation > Create Shape > Create Shape Definition by Object | `Add Shape Definition (<p1>) to Body (<p0>)` |  | object “Object”; numeric expression “Shape Definition ID” | — |  |
| 258 | 338 | Shape > Creation > Create Shape > Create Shape Definition by Body ID | `Add Shape Definition (<p1>) to Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Shape Definition ID” | — |  |
| 259 | 339 | Shape > Creation > Create Shape > Add Object as Shape Definition to Body | `Add Object (<p0>) as Shape Definition (<p2>) to Body (<p1>)` |  | object “Object”; numeric expression “Body ID”; numeric expression “Shape Definition ID” | — |  |
| 260 | 340 | Body > Creation > Create Body > Create Body from Definition at Object | `Create Body from Definition (<p0>) at (<p1>), offset (<p2>,<p3>), rotation (<p4>), destruction (<p5>)` |  | numeric expression “Definition ID”; object “Object”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Rotation (0: No Rotation, 1: Fast, 2: Quality”; numeric expression “Link Destruction” | — |  |
| 261 | 341 | Body > Creation > Create Body > Create Body from Definition | `Create Body from Definition (<p0>) at (<p1>,<p2>) , angle (<p3>)` |  | numeric expression “Definition ID”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 262 | 342 | Joint > Creation > Create Joint > Create Joint from Definitioin at Body by Body ID | `Create Joint from Definition (<p0>) at Body (<p1>)` |  | numeric expression “Definition ID”; numeric expression “Body ID” | — |  |
| 263 | 343 | Joint > Creation > Create Joint > Create Joint from Definitioin at Body by Object | `Create Joint from Definition (<p0>) at Body (<p1>)` |  | numeric expression “Definition ID”; object “Object” | — |  |
| 264 | 344 | Joint > Creation > Create Joint > Create Joint from Definitioin Between two Body ID's | `Create Joint from Definition (<p0>) Between Bodies (<p1>) ad (<p2>)` |  | numeric expression “Definition ID”; numeric expression “First Body ID”; numeric expression “Second Body ID” | — |  |
| 265 | 345 | Joint > Creation > Create Joint > Create Joint from Definitioin Between two Objects | `Create Joint from Definition (<p0>) Between Bodies (<p1>) and (<p2>)` |  | numeric expression “Definition ID”; object “First Object”; object “Second Object” | — |  |
| 266 | 346 | Joint > Creation > Create Joint > Create Joint from Definitioin Between Object and Body ID | `Create Joint from Definition (<p0>) Between Bodies (<p1>) and (<p2>), reverse (<p3>)` |  | numeric expression “Definition ID”; object “Object”; numeric expression “Body ID”; numeric expression “1: Reverse Body Order” | — |  |
| 267 | 347 | Debug Draw > Set Flags > Draw Shapes | `Debug Draw - Draw Shapes (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 268 | 348 | Debug Draw > Set Flags > Draw Joints | `Debug Draw - Draw Joints (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 269 | 349 | Debug Draw > Set Flags > Draw Core Shapes | `Debug Draw - Draw Core Shapes (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 270 | 350 | Debug Draw > Set Flags > Draw Aligned Bounding Boxes | `Debug Draw - Draw Aligned Bounding Boxes (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 271 | 351 | Debug Draw > Set Flags > Draw Oriented Bounding Boxes | `Debug Draw - Draw Oriented Bounding Boxes (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 272 | 352 | Debug Draw > Set Flags > Draw Pairs | `Debug Draw - Draw Pairs (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 273 | 353 | Debug Draw > Set Flags > Draw Center of Mass | `Debug Draw - Draw Center of Mass (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 274 | 354 | Joint > Modify > Revolute Joint > Set Motor > By Object | `Revolute Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Torque (<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Torque” | — |  |
| 275 | 355 | Joint > Modify > Revolute Joint > Disable Motor > By Object | `Revolute Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 276 | 356 | Joint > Modify > Revolute Joint > Set Limits > By Object | `Revolute Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 277 | 357 | Joint > Modify > Revolute Joint > Disable Limits > By Object | `Revolute Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 278 | 358 | Joint > Modify > Prismatic Joint > Set Motor > By Object | `Prismatic Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 279 | 359 | Joint > Modify > Prismatic Joint > Disable Motor > By Object | `Prismatic Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 280 | 360 | Joint > Modify > Prismatic Joint > Set Limits > By Object | `Prismatic Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 281 | 361 | Joint > Modify > Prismatic Joint > Disable Limits > By Object | `Prismatic Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 282 | 362 | Joint > Modify > Line Joint > Set Motor > By Object | `Line Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 283 | 363 | Joint > Modify > Line Joint > Disable Motor > By Object | `Line Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 284 | 364 | Joint > Modify > Line Joint > Set Limits > By Object | `Line Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p1>,<p2>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 285 | 365 | Joint > Modify > Line Joint > Disable Limits > By Object | `Line Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |
| 286 | 366 | Joint > Modify > Mouse Joint > Set Target > By Object | `Set Target of Mouse Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | object “Object”; numeric expression “Joint Number”; numeric expression “Target X”; numeric expression “Target Y” | — |  |
| 287 | 367 | Joint > Modify > Revolute Joint > Set Motor > By Body ID | `Revolute Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Torque (<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Torque” | — |  |
| 288 | 368 | Joint > Modify > Revolute Joint > Disable Motor > By Body ID | `Revolute Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 289 | 369 | Joint > Modify > Revolute Joint > Set Limits > By Body ID | `Revolute Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 290 | 370 | Joint > Modify > Revolute Joint > Disable Limits > By Body ID | `Revolute Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 291 | 371 | Joint > Modify > Prismatic Joint > Set Motor > By Body ID | `Prismatic Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 292 | 372 | Joint > Modify > Prismatic Joint > Disable Motor > By Body ID | `Prismatic Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 293 | 373 | Joint > Modify > Prismatic Joint > Set Limits > By Body ID | `Prismatic Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 294 | 374 | Joint > Modify > Prismatic Joint > Disable Limits > By Body ID | `Prismatic Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 295 | 375 | Joint > Modify > Line Joint > Set Limits > By Body ID | `Line Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Speed”; numeric expression “Max Force” | — |  |
| 296 | 376 | Joint > Modify > Line Joint > Disable Limits > By Body ID | `Line Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 297 | 377 | Joint > Modify > Line Joint > Set Motor > By Body ID | `Line Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p1>,<p2>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Lower Limit”; numeric expression “Upper Limit” | — |  |
| 298 | 378 | Joint > Modify > Line Joint > Disable Motor > By Body ID | `Line Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 299 | 379 | Joint > Modify > Mouse Joint > Set Target > By Body ID | `Set Target of Mouse Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | numeric expression “Body ID”; numeric expression “Joint Number”; numeric expression “Target X”; numeric expression “Target Y” | — |  |
| 300 | 380 | Test For Shapes > At Point | `Test For Shapes at Point (<p0>,<p1>)` |  | numeric expression “Point X”; numeric expression “Point Y” | — |  |
| 301 | 381 | Test For Shapes > In Zone | `Test For Shapes in Zone (<p0>,<p1>) to (<p2>,<p3>)` |  | numeric expression “Min X”; numeric expression “Min Y”; numeric expression “Max X”; numeric expression “Max Y” | — |  |
| 302 | 382 | Shape > Modify > Set Density > By Object | `Set Density of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “Density” | — |  |
| 303 | 383 | Shape > Modify > Set Density > By Body ID | `Set Density of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “Density” | — |  |
| 304 | 384 | Collisions > On Collision Evaluation > Sensor Current Collision | `Sensor Current Collision` |  |  | — |  |
| 305 | 385 | Controller > Create Controller > Create Buoyancy Controller | `Create Buoyancy Controller, Angle (<p0>), Height (<p1>), Density (<p2>), Velocity (<p3>,<p4>), Linear Drag (<p5>), Angular Drag(<p6>)` |  | numeric expression “Surface Angle”; numeric expression “Surface Height”; numeric expression “Fluid Density”; numeric expression “Fluid X Velocity”; numeric expression “Fluid Y Velocity”; numeric expression “Fluid Linear Drag”; numeric expression “Fluid Angular Drag” | — |  |
| 306 | 386 | Controller > Add Body to Controller > By Object | `Add Body (<p0>) to Controller (<p1>)` |  | object “Object”; numeric expression “Controller ID” | — |  |
| 307 | 387 | Controller > Add Body to Controller > By Body ID | `Add Body (<p0>) to Controller (<p1>)` |  | numeric expression “Body ID”; numeric expression “Controller ID” | — |  |
| 308 | 388 | Controller > Remove Body from Controller > By Object | `Remove Body (<p0>) from Controller (<p1>)` |  | object “Object”; numeric expression “Controller ID” | — |  |
| 309 | 389 | Controller > Remove Body from Controller > By Body ID | `Remove Body (<p0>) from Controller (<p1>)` |  | numeric expression “Body ID”; numeric expression “Controller ID” | — |  |
| 310 | 390 | Controller > Clear Bodies for Controller | `Clear Bodies for Controller (<p0>)` |  | numeric expression “Controller ID” | — |  |
| 311 | 391 | Controller > Remove Controller | `Remove Controller (<p0>)` |  | numeric expression “Controller ID” | — |  |
| 312 | 392 | Shape > Modify > Set Sensor > By Body ID | `Set Sensor of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID (-1 = all)”; numeric expression “0: is Solid, 1: is Sensor” | — |  |
| 313 | 393 | Shape > Modify > Set Sensor > By Object | `Set Sensor of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | object “Object”; numeric expression “Shape ID (-1 = all)”; numeric expression “0: is Solid, 1: is Sensor” | — |  |
| 314 | 394 | Controller > Create Controller > Create Constant Force Controller | `Create Constant Force Controller, Force (<p0>,<p1>)` |  | numeric expression “X Force”; numeric expression “Y Force” | — |  |
| 315 | 395 | Controller > Create Controller > Create Constant Acceleration Controller | `Create Constant Acceleration Controller, Force (<p0>,<p1>)` |  | numeric expression “X Force”; numeric expression “Y Force” | — |  |
| 316 | 396 | Controller > Create Controller > Create Tensor Damping Controller | `Create Tensor Damping Controller, Model (<p0>,<p1>,<p2>,<p3>), Max Timestep (<p4>)` |  | numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2”; numeric expression “Max Timestep” | — |  |
| 317 | 397 | Controller > Create Controller > Create Gravity Controller | `Create Gravity Controller, Strength (<p0>), Inverse Square (<p1>), Max Force (<p2>)` |  | numeric expression “Gravity Strength”; numeric expression “1: gravity is proportional to r^-2, otherwise r^-1”; numeric expression “Max Force (0 = disable)” | — |  |
| 318 | 398 | World > Set World Boundaries (Reset needed) | `World - Set Boundaries to Min (<p0>,<p1>), Max (<p2>,<p3>)` |  | numeric expression “Boundary Min X”; numeric expression “Boundary Min Y”; numeric expression “Boundary Max X”; numeric expression “Boundary Max Y” | — |  |
| 321 | 401 | Debug Draw > Set Flags > Draw Controllers | `Debug Draw - Draw Controllers (<p0>)` |  | numeric expression “1: Draw, 0: Don't Draw” | — |  |
| 322 | 402 | Shape > Creation > Load Shape Data from String | `Load Shape Data from String (<p0>)` |  | string expression “Shape String” | — |  |
| 323 | 403 | Shape > Creation > Definition > Set Shape Definition from String | `Set Shape Definition (<p0>) from String (<p1>)` |  | numeric expression “Shape Definition ID”; string expression “Shape String” | — |  |
| 324 | 404 | Body > Creation > Load Body Data from String | `Load Body Data from String (<p0>)` |  | string expression “Body String” | — |  |
| 325 | 405 | Body > Creation > Definition > Set Body Definition from String | `Set Body Definition (<p0>) from String (<p1>)` |  | numeric expression “Body Definition ID”; string expression “Body String” | — |  |
| 326 | 406 | Body > Creation > Quick > Create Body at Object from String | `Quick Create Body from String (<p0>) at (<p1>), offset (<p2>,<p3>), rotation (<p4>), destruction (<p5>)` |  | string expression “Body String”; object “Object”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Rotation (-1: Disable, 0: Not Object, 1: Fast, 2: Quality)”; numeric expression “Link Destruction” | — |  |
| 327 | 407 | Body > Creation > Quick > Create Body from String | `Quick Create Body from String (<p0>) at (<p1>,<p2>), angle (<p3>)` |  | string expression “Body String”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Angle” | — |  |
| 328 | 408 | Shape > Creation > Quick > Create from String > By Object | `Quick Add Shape to Body (<p0>) from String (<p1>)` |  | object “Object”; string expression “Shape String” | — |  |
| 329 | 409 | Shape > Creation > Quick > Create from String > By Body ID | `Quick Add Shape to Body (<p0>) from String (<p1>)` |  | numeric expression “Body ID”; string expression “Shape String” | — |  |
| 330 | 410 | Body > Modify > Damping > Set Linear Damping > By Object | `Set Linear Damping of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Linear Damping” | — |  |
| 331 | 411 | Body > Modify > Damping > Set Linear Damping > By Body ID | `Set Linear Damping of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Linear Damping” | — |  |
| 332 | 412 | Body > Modify > Damping > Set Angular Damping > By Object | `Set Angular Damping of Body (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Angular Damping” | — |  |
| 333 | 413 | Body > Modify > Damping > Set Angular Damping > By Body ID | `Set Angular Damping of Body (<p0>) to (<p1>)` |  | numeric expression “Body ID”; numeric expression “Angular Damping” | — |  |
| 334 | 414 | Controller > Modify Controller > Buoyancy Controller > Set Surface Angle | `Set Surface Angle of Buoyancy Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Surface Angle” | — |  |
| 335 | 415 | Controller > Modify Controller > Buoyancy Controller > Set Surface Height | `Set Surface Height of Buoyancy Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Surface Height” | — |  |
| 336 | 416 | Controller > Modify Controller > Buoyancy Controller > Set Fluid Density | `Set Fluid Density of Buoyancy Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Density” | — |  |
| 337 | 417 | Controller > Modify Controller > Buoyancy Controller > Set Fluid Velocity | `Set Fluid Velocity of Buoyancy Controller (<p0>) to (<p1>,<p2>)` |  | numeric expression “Controller ID”; numeric expression “X Velocity”; numeric expression “Y Velocity” | — |  |
| 338 | 418 | Controller > Modify Controller > Buoyancy Controller > Set Linear Drag | `Set Linear Drag of Buoyancy Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Linear Drag” | — |  |
| 339 | 419 | Controller > Modify Controller > Buoyancy Controller > Set Angular Drag | `Set Angular Drag of Buoyancy Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Angular Drag” | — |  |
| 340 | 420 | Controller > Modify Controller > Constant Acceleration Controller > Set Acceleration | `Set Acceleration of Constant Acceleration Controller (<p0>) to (<p1>,<p2>)` |  | numeric expression “Controller ID”; numeric expression “X Acceleration”; numeric expression “Y Acceleration” | — |  |
| 341 | 421 | Controller > Modify Controller > Constant Force Controller > Set Force | `Set Force of Constant Force Controller (<p0>) to (<p1>,<p2>)` |  | numeric expression “Controller ID”; numeric expression “X Force”; numeric expression “Y Force” | — |  |
| 342 | 422 | Controller > Modify Controller > Gravity Controller > Set Gravity Strength | `Set Gravity of Gravity Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Gravity Strength” (unreliable parameters) | — |  |
| 343 | 423 | Controller > Modify Controller > Gravity Controller > Set Max Force | `Set Max Force of Gravity Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Max Force” | — |  |
| 344 | 424 | Controller > Modify Controller > Tensor Damping Controller > Set Max Timestep | `Set Max Timestep of Tensor Damping Controller (<p0>) to (<p1>)` |  | numeric expression “Controller ID”; numeric expression “Max Timestep” | — |  |
| 345 | 425 | Controller > Modify Controller > Tensor Damping Controller > Set Tensor Model | `Set Model of Tensor Damping Controller (<p0>) to (<p1>,<p2>,<p3>,<p4>)` |  | numeric expression “Controller ID”; numeric expression “X1”; numeric expression “Y1”; numeric expression “X2”; numeric expression “Y2” | — |  |
| 346 | 426 | Attached Objects > Modify Attachment > Set Offset | `Set Offset of Attachment for (<p0>) to (<p1>,<p2>), (<p3>)` |  | object “Object”; numeric expression “X Offset”; numeric expression “Y Offset”; numeric expression “Angle Offset” | — |  |
| 347 | 427 | Attached Objects > Modify Attachment > Set Rotation | `Set Rotation of Attachment for (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Rotation (0: None, 1: Fast, 2: Quality)” | — |  |
| 348 | 428 | Attached Objects > Modify Attachment > Set Killflag | `Set Killflag of Attachment for (<p0>) to (<p1>)` |  | object “Object”; numeric expression “Link Destruction” | — |  |
| 349 | 429 | Enumeration > Enumerate Bodies | `Enumerate Bodies` |  |  | — |  |
| 350 | 430 | Enumeration > Enumerate Shapes | `Enumerate Shapes` |  |  | — |  |
| 351 | 431 | Enumeration > Enumerate Joints | `Enumerate Joints` |  |  | — |  |
| 353 | 433 | Enumeration > Enumerate All | `Enumerate All` |  |  | — |  |
| 354 | 434 | Joint > Creation > Remove Joint > By Body ID | `Remove Joint (<p1>) of Body (<p0>)` |  | numeric expression “Body ID”; numeric expression “Joint Number” | — |  |
| 355 | 435 | Joint > Creation > Remove Joint > By Object | `Remove Joint (<p1>) of Body (<p0>)` |  | object “Object”; numeric expression “Joint Number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Body > Get ID of Last Created Body | `LastBodyID(` |  |  | — |  |
| 1 | 81 | Body > Get Y Velocity | `BodyVelocityY(` |  | number “Body ID” | — |  |
| 2 | 82 | Joint > Get ID of Last Created Joint | `LastJointID(` |  |  | — |  |
| 3 | 83 | World > Get Gravity X | `GravityX(` |  |  | — |  |
| 4 | 84 | World > Get Gravity Y | `GravityY(` |  |  | — |  |
| 5 | 85 | World > Get Boundary Left X | `BoundaryMinX(` |  |  | — |  |
| 6 | 86 | World > Get Boundary Top Y | `BoundaryMinY(` |  |  | — |  |
| 7 | 87 | World > Get Boundary Right X | `BoundaryMaxX(` |  |  | — |  |
| 8 | 88 | World > Get Boundary Bottom Y | `BoundaryMaxY(` |  |  | — |  |
| 9 | 89 | World > Get Timestep | `TimeStep(` |  |  | — |  |
| 10 | 90 | World > Get Unit Scale | `UnitScale(` |  |  | — |  |
| 11 | 91 | World > Get Position Iteration Count | `PositionIterations(` |  |  | — |  |
| 12 | 92 | World > Get Velocity Iteration Count | `VelocityIterations(` |  |  | — |  |
| 13 | 93 | World > Get Max Bodies | `MaxBodies(` |  |  | — |  |
| 14 | 94 | World > Get Max Joints | `MaxJoints(` |  |  | — |  |
| 15 | 95 | World > Get Max Body Definitions | `MaxBodyDefs(` |  |  | — |  |
| 16 | 96 | World > Get Max Joint Definitions | `MaxJointDefs(` |  |  | — |  |
| 17 | 97 | World > Get Max Shape Definitions | `MaxShapeDefs(` |  |  | — |  |
| 18 | 98 | Simulation Statistics > Get Proxy Count | `NumProxies(` |  |  | — |  |
| 19 | 99 | Simulation Statistics > Get Max Proxies | `MaxProxies(` |  |  | — |  |
| 20 | 100 | Simulation Statistics > Get Pair Count | `NumPairs(` |  |  | — |  |
| 21 | 101 | Simulation Statistics > Get Max Pairs | `MaxPairs(` |  |  | — |  |
| 22 | 102 | Simulation Statistics > Get Body Count | `NumBodies(` |  |  | — |  |
| 23 | 103 | Simulation Statistics > Get Joint Count | `NumJoints(` |  |  | — |  |
| 24 | 104 | Simulation Statistics > Get Contact Count | `NumContacts(` |  |  | — |  |
| 25 | 105 | Body > Get X Velocity | `BodyVelocityX(` |  | number “Body ID” | — |  |
| 26 | 106 | Body > Get Angular Velocity | `BodyAngularVelocity(` |  | number “Body ID” | — |  |
| 27 | 107 | On Event > Get Event Body ID | `EventBodyID(` |  |  | — |  |
| 28 | 108 | On Event > Get Event Joint ID | `EventJointID(` |  |  | — |  |
| 29 | 109 | Body > Get Body ID from Object | `BodyFixedID(` |  | number “Fixed Value of Object” | — |  |
| 30 | 110 | Body > Get Body ID from Index | `BodyIndexID(` |  | number “Index” | — |  |
| 31 | 111 | On Collision > Get First Body ID | `CollBody1(` |  |  | — |  |
| 32 | 112 | On Collision > Get Second Body ID | `CollBody2(` |  |  | — |  |
| 33 | 113 | On Collision > Get First Shape ID | `CollShape1(` |  |  | — |  |
| 34 | 114 | On Collision > Get Second Shape ID | `CollShape2(` |  |  | — |  |
| 35 | 115 | On Collision > Contact Response > Get Collision Angle | `CollAngle(` |  |  | — |  |
| 36 | 116 | On Collision > Contact Response > Get Normal Impulse | `CollNormalImpulse(` |  |  | — |  |
| 37 | 117 | On Collision > Contact Response > Get Tangent Impulse | `CollTangentImpulse(` |  |  | — |  |
| 38 | 118 | On Collision > Contact Response > Get Contact Point X | `CollPointX(` |  |  | — |  |
| 39 | 119 | On Collision > Contact Response > Get Contact Point Y | `CollPointY(` |  |  | — |  |
| 40 | 120 | Joint > Get Joint ID from Index | `JointIndexID(` |  | number “Index” | — |  |
| 41 | 121 | Body > Conversions > Local Point to World X | `LocalToWorldX(` |  | number “Body ID”; number “X”; number “Y” | — |  |
| 42 | 122 | Body > Conversions > Local Point to World Y | `LocalToWorldY(` |  | number “Body ID”; number “X”; number “Y” | — |  |
| 43 | 123 | Body > Conversions > World Point to Local X | `WorldToLocalX(` |  | number “Body ID”; number “X”; number “Y” | — |  |
| 44 | 124 | Body > Conversions > World Point to Local Y | `WorldToLocalY(` |  | number “Body ID”; number “X”; number “Y” | — |  |
| 45 | 125 | Body > Conversions > Last Conversion X | `LastConvX(` |  |  | — |  |
| 46 | 126 | Body > Conversions > Last Conversion Y | `LastConvY(` |  |  | — |  |
| 47 | 127 | Body > Get X Position | `BodyX(` |  | number “Body ID” | — |  |
| 48 | 128 | Body > Get Y Position | `BodyY(` |  | number “Body ID” | — |  |
| 49 | 129 | Body > Get Angle | `BodyAngle(` |  | number “Body ID” | — |  |
| 50 | 130 | Body > Get Mass | `BodyMass(` |  | number “Body ID” | — |  |
| 51 | 131 | Body > Get Inertia | `BodyInertia(` |  | number “Body ID” | — |  |
| 52 | 132 | Body > Get CoM X | `BodyCoMX(` |  | number “Body ID” | — |  |
| 53 | 133 | Body > Get CoM Y | `BodyCoMY(` |  | number “Body ID” | — |  |
| 54 | 134 | Body > Shapes > Get Number of Shapes | `BodyNumShapes(` |  | number “Body ID” | — |  |
| 55 | 135 | Body > Joints > Get Number of Attached Joints | `BodyNumJoints(` |  | number “Body ID” | — |  |
| 56 | 136 | Body > Joints > Get Joint ID | `BodyJointID(` |  | number “Body ID”; number “Joint Number” | — |  |
| 57 | 137 | Ray Cast > Get Number of Hits | `RayNumHits(` |  |  | — |  |
| 58 | 138 | Ray Cast > Get Body ID | `RayBodyID(` |  | number “Hit Number” | — |  |
| 59 | 139 | Ray Cast > Get Shape ID | `RayShapeID(` |  | number “Hit Number” | — |  |
| 60 | 140 | Ray Cast > Get Target X | `RayPointX(` |  |  | — |  |
| 61 | 141 | Ray Cast > Get Target Y | `RayPointY(` |  |  | — |  |
| 62 | 142 | Ray Cast > Get Hit Angle | `RayPointAngle(` |  |  | — |  |
| 63 | 143 | Body > Shapes > Get Type | `ShapeType(` |  | number “Body ID”; number “Shape Number” | — |  |
| 64 | 144 | Body > Shapes > Get Friction | `ShapeFriction(` |  | number “Body ID”; number “Shape Number” | — |  |
| 65 | 145 | Body > Shapes > Get Elasticity | `ShapeElasticity(` |  | number “Body ID”; number “Shape Number” | — |  |
| 66 | 146 | Body > Shapes > Get Density | `ShapeDensity(` |  | number “Body ID”; number “Shape Number” | — |  |
| 67 | 147 | Body > Shapes > Get Collision Type | `ShapeCollType(` |  | number “Body ID”; number “Shape Number” | — |  |
| 68 | 148 | Body > Shapes > Get Group Index | `ShapeGroupIndex(` |  | number “Body ID”; number “Shape Number” | — |  |
| 69 | 149 | Body > Shapes > Get Category Bits | `ShapeCategory(` |  | number “Body ID”; number “Shape Number” | — |  |
| 70 | 150 | Body > Shapes > Get Mask Bits | `ShapeMask(` |  | number “Body ID”; number “Shape Number” | — |  |
| 71 | 151 | Body > Shapes > Polygon Shape > Get Number of Vertices | `PolygonShapeNumVerts(` |  | number “Body ID”; number “Shape Number” | — |  |
| 72 | 152 | Body > Shapes > Polygon Shape > Get Vertex X | `PolygonShapeVertexX(` |  | number “Body ID”; number “Shape Number”; number “Vertex Number” | — |  |
| 73 | 153 | Body > Shapes > Polygon Shape > Get Vertex Y | `PolygonShapeVertexY(` |  | number “Body ID”; number “Shape Number”; number “Vertex Number” | — |  |
| 74 | 154 | Body > Shapes > Polygon Shape > Get Centroid X | `PolygonShapeCentroidX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 75 | 155 | Body > Shapes > Polygon Shape > Get Centroid Y | `PolygonShapeCentroidY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 76 | 156 | Joint > Get First Body ID | `JointBody1(` |  | number “Joint ID” | — |  |
| 77 | 157 | Joint > Get Second Body ID | `JointBody2(` |  | number “Joint ID” | — |  |
| 78 | 158 | Joint > Get Type | `JointType(` |  | number “Joint ID” | — |  |
| 79 | 159 | Joint > Get First Anchor X | `JointAnchor1X(` |  | number “Joint ID” | — |  |
| 80 | 160 | Joint > Get First Anchor Y | `JointAnchor1Y(` |  | number “Joint ID” | — |  |
| 81 | 161 | Joint > Get Second Anchor X | `JointAnchor2X(` |  | number “Joint ID” | — |  |
| 82 | 162 | Joint > Get Second Anchor Y | `JointAnchor2Y(` |  | number “Joint ID” | — |  |
| 83 | 163 | Joint > Get Reaction Force | `JointReactionForce(` |  | number “Joint ID” | — |  |
| 84 | 164 | Joint > Get Reaction X Force | `JointReactionForceX(` |  | number “Joint ID” | — |  |
| 85 | 165 | Joint > Get Reaction Y Force | `JointReactionForceY(` |  | number “Joint ID” | — |  |
| 86 | 166 | Joint > Get Reaction Torque | `JointReactionTorque(` |  | number “Joint ID” | — |  |
| 87 | 167 | Joint > Revolute Joint > Get Angle | `RevoluteJointAngle(` |  | number “Joint ID” | — |  |
| 88 | 168 | Joint > Revolute Joint > Get Speed | `RevoluteJointSpeed(` |  | number “Joint ID” | — |  |
| 89 | 169 | Joint > Revolute Joint > Get Upper Limit | `RevoluteJointUpperLimit(` |  | number “Joint ID” | — |  |
| 90 | 170 | Joint > Revolute Joint > Get Lower Limit | `RevoluteJointLowerLimit(` |  | number “Joint ID” | — |  |
| 91 | 171 | Joint > Revolute Joint > Get Motor Speed | `RevoluteJointMotorSpeed(` |  | number “Joint ID” | — |  |
| 92 | 172 | Joint > Revolute Joint > Get Motor Torque | `RevoluteJointMotorTorque(` |  | number “Joint ID” | — |  |
| 93 | 173 | Joint > Prismatic Joint > Get Translation | `PrismaticJointTranslation(` |  | number “Joint ID” | — |  |
| 94 | 174 | Joint > Prismatic Joint > Get Speed | `PrismaticJointSpeed(` |  | number “Joint ID” | — |  |
| 95 | 175 | Joint > Prismatic Joint > Get Upper Limit | `PrismaticJointUpperLimit(` |  | number “Joint ID” | — |  |
| 96 | 176 | Joint > Prismatic Joint > Get Lower Limit | `PrismaticJointLowerLimit(` |  | number “Joint ID” | — |  |
| 97 | 177 | Joint > Prismatic Joint > Get Motor Speed | `PrismaticJointMotorSpeed(` |  | number “Joint ID” | — |  |
| 98 | 178 | Joint > Prismatic Joint > Get Motor Force | `PrismaticJointMotorForce(` |  | number “Joint ID” | — |  |
| 99 | 179 | Joint > Pulley Joint > Get First Ground Anchor X | `PulleyJointGround1X(` |  | number “Joint ID” | — |  |
| 100 | 180 | Joint > Pulley Joint > Get First Ground Anchor Y | `PulleyJointGround1Y(` |  | number “Joint ID” | — |  |
| 101 | 181 | Joint > Pulley Joint > Get Second Ground Anchor X | `PulleyJointGround2X(` |  | number “Joint ID” | — |  |
| 102 | 182 | Joint > Pulley Joint > Get Second Ground Anchor Y | `PulleyJointGround2Y(` |  | number “Joint ID” | — |  |
| 103 | 183 | Joint > Pulley Joint > Get First Length | `PulleyJointLength1(` |  | number “Joint ID” | — |  |
| 104 | 184 | Joint > Pulley Joint > Get Second Length | `PulleyJointLength2(` |  | number “Joint ID” | — |  |
| 105 | 185 | Joint > Pulley Joint > Get Ratio | `PulleyJointRatio(` |  | number “Joint ID” | — |  |
| 106 | 186 | Joint > Gear Joint > Get Ratio | `GearJointRatio(` |  | number “Joint ID” | — |  |
| 107 | 187 | Joint > Line Joint > Get Translation | `LineJointTranslation(` |  | number “Joint ID” | — |  |
| 108 | 188 | Joint > Line Joint > Get Speed | `LineJointSpeed(` |  | number “Joint ID” | — |  |
| 109 | 189 | Joint > Line Joint > Get Upper Limit | `LineJointUpperLimit(` |  | number “Joint ID” | — |  |
| 110 | 190 | Joint > Line Joint > Get Lower Limit | `LineJointLowerLimit(` |  | number “Joint ID” | — |  |
| 111 | 191 | Joint > Line Joint > Get Motor Speed | `LineJointMotorSpeed(` |  | number “Joint ID” | — |  |
| 112 | 192 | Joint > Line Joint > Get Motor Force | `LineJointMotorForce(` |  | number “Joint ID” | — |  |
| 113 | 193 | Body > Shapes > Circle Shape > Get Radius | `CircleShapeRadius(` |  | number “Body ID”; number “Shape Number” | — |  |
| 114 | 194 | Body > Shapes > Circle Shape > Get Center X | `CircleShapeCenterX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 115 | 195 | Body > Shapes > Circle Shape > Get Center Y | `CircleShapeCenterY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 116 | 196 | Body > Shapes > Edge > Get First Vertex X | `EdgeFirstX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 117 | 197 | Body > Shapes > Edge > Get First Vertex Y | `EdgeFirstY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 118 | 198 | Body > Shapes > Edge > Get Second Vertex X | `EdgeSecondX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 119 | 199 | Body > Shapes > Edge > Get Second Vertex Y | `EdgeSecondY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 120 | 200 | On Event > Get Event Shape ID | `EventShapeID(` |  |  | — |  |
| 121 | 201 | On Collision > Get First Collision Type | `CollType1(` |  |  | — |  |
| 122 | 202 | On Collision > Get Second Collision Type | `CollType2(` |  |  | — |  |
| 123 | 203 | Body > Shapes > Bounding Box > Get Min X | `ShapeBBMinX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 124 | 204 | Body > Shapes > Bounding Box > Get Min Y | `ShapeBBMinY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 125 | 205 | Body > Shapes > Bounding Box > Get Max X | `ShapeBBMaxX(` |  | number “Body ID”; number “Shape Number” | — |  |
| 126 | 206 | Body > Shapes > Bounding Box > Get Max Y | `ShapeBBMaxY(` |  | number “Body ID”; number “Shape Number” | — |  |
| 127 | 207 | Controller > Get ID of Last Created Controller | `LastControllerID(` |  |  | — |  |
| 128 | 208 | Body > Shapes > Get Sensor | `ShapeSensor(` |  | number “Body ID”; number “Shape Number” | — |  |
| 129 | 209 | Controller > Get Number of Controllers | `NumControllers(` |  |  | — |  |
| 130 | 210 | Controller > Get Controller ID from Index | `ControllerIndexID(` |  | number “Index” | — |  |
| 131 | 211 | Controller > Get Number of Bodies | `ControllerNumBodies(` |  | number “Controller ID” | — |  |
| 132 | 212 | Controller > Get Body ID | `ControllerBodyID(` |  | number “Controller ID” | — |  |
| 133 | 213 | On Collision > Contact Point > Get Collision Velocity X | `CollVelocityX(` |  |  | — |  |
| 134 | 214 | On Collision > Contact Point > Get Collision Velocity Y | `CollVelocityY(` |  |  | — |  |
| 135 | 215 | On Collision > Contact Point > Get Collision Friction | `CollFriction(` |  |  | — |  |
| 136 | 216 | On Collision > Contact Point > Get Collision Elasticity | `CollElasticity(` |  |  | — |  |
| 137 | 217 | On Collision > Contact Point > Get Collision Separation | `CollSeparation(` |  |  | — |  |
| 138 | 218 | Body > Shapes > Polygon Shape > Get Vertex Angle | `PolygonShapeVertexAngle(` |  | number “Body ID”; number “Shape Number”; number “Vertex Number” | — |  |
| 139 | 219 | Body > Shapes > Edge > Get First Vertex Angle | `EdgeFirstAngle(` |  | number “Body ID”; number “Shape Number” | — |  |
| 140 | 220 | Body > Shapes > Edge > Get Second Vertex Angle | `EdgeSecondAngle(` |  | number “Body ID”; number “Shape Number” | — |  |
| 141 | 221 | On Enumeration > Get Body ID | `EnumBodyID(` |  |  | — |  |
| 142 | 222 | On Enumeration > Get Shape ID | `EnumShapeID(` |  |  | — |  |
| 143 | 223 | On Enumeration > Get Joint ID | `EnumJointID(` |  |  | — |  |
| 144 | 224 | Body > Get X Velocity At World Point | `BodyVelocityAtWorldPointX(` |  | number “Body ID”; number “X Coordinate”; number “Y Coordinate” | — |  |
| 145 | 225 | Body > Get Y Velocity At World Point | `BodyVelocityAtWorldPointY(` |  | number “Body ID”; number “X Coordinate”; number “Y Coordinate” | — |  |
| 146 | 226 | Body > Get X Velocity At Local Point | `BodyVelocityAtLocalPointX(` |  | number “Body ID”; number “X Coordinate”; number “Y Coordinate” | — |  |
| 147 | 227 | Body > Get Y Velocity At Local Point | `BodyVelocityAtLocalPointY(` |  | number “Body ID”; number “X Coordinate”; number “Y Coordinate” | — |  |
