# Extension B2D

- Fichier : `B2D.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Collision > On Contact Point Response > Generic | `<objet>: On Contact Point Response` |  |  | — |  |
| 1 | -82 | Collision > On Contact Point Response > One Type | `<objet>: On Contact Point Response for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 2 | -83 | Collision > On Contact Point Response > Two Types | `<objet>: On Contact Point Response Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 3 | -84 | On Event > On Body Leave World | `<objet>: On Body Leaving World` |  |  | — |  |
| 4 | -85 | On Event > On Joint Removed | `<objet>: On Joint Destroyed` |  |  | — |  |
| 5 | -86 | World > Is Sleeping Allowed | `<objet>: World - Sleeping is Allowed` |  |  | — |  |
| 6 | -87 | World > Is CCD Enabled | `<objet>: World - CCD is Enabled` |  |  | — |  |
| 7 | -88 | World > Is Warm Starting Enabled | `<objet>: World - Warm Starting is Enabled` |  |  | — |  |
| 8 | -89 | World > Is Position Correction Enabled | `<objet>: World - Position Correction is Enabled` |  |  | — |  |
| 9 | -90 | Body > Is Body Sleeping > Use Body ID | `<objet>: Body - Body (<p0>) is Sleeping` |  | expression numérique « Body ID » | — |  |
| 10 | -91 | Body > Is Body Frozen > Use Body ID | `<objet>: Body - Body (<p0>) is Frozen` |  | expression numérique « Body ID » | — |  |
| 11 | -92 | On Event > On Shape Test | `<objet>: On Shape Test` |  |  | — |  |
| 12 | -93 | Collision > On Collision Begin > Generic | `<objet>: On Collision Begin` |  |  | — |  |
| 13 | -94 | Collision > On Collision Begin > One Type | `<objet>: On Collision Begin for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 14 | -95 | Collision > On Collision Begin > Two Types | `<objet>: On Collision Begin Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 15 | -96 | Collision > On Collision End > Generic | `<objet>: On Collision End` |  |  | — |  |
| 16 | -97 | Collision > On Collision End > One Type | `<objet>: On Collision End for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 17 | -98 | Collision > On Collision End > Two Types | `<objet>: On Collision End Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 18 | -99 | Collision > On Contact Evaluation > Generic | `<objet>: On Collision Evaluation` |  |  | — |  |
| 19 | -100 | Collision > On Contact Evaluation > One Type | `<objet>: On Collision Evaluation for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 20 | -101 | Collision > On Contact Evaluation > Two Types | `<objet>: On Collision Evaluation Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 21 | -102 | Collision > On Contact Point Add > Generic | `<objet>: On Contact Point Add` |  |  | — |  |
| 22 | -103 | Collision > On Contact Point Add > One Type | `<objet>: On Contact Point Add for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 23 | -104 | Collision > On Contact Point Add > Two Types | `<objet>: On Contact Point Add Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 24 | -105 | Collision > On Contact Point Persist > Generic | `<objet>: On Contact Point Persist` |  |  | — |  |
| 25 | -106 | Collision > On Contact Point Persist > One Type | `<objet>: On Contact Point Persist for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 26 | -107 | Collision > On Contact Point Persist > Two Types | `<objet>: On Contact Point Persist Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 27 | -108 | Collision > On Contact Point Remove > Generic | `<objet>: On Contact Point Remove` |  |  | — |  |
| 28 | -109 | Collision > On Contact Point Remove > One Type | `<objet>: On Contact Point Remove for Type (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 29 | -110 | Collision > On Contact Point Remove > Two Types | `<objet>: On Contact Point Remove Between Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 30 | -111 | Collision > Body is Touching another Body > Use 2 Body ID's | `<objet>: Body (<p0>) is Touching Body (<p1>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » | — |  |
| 31 | -112 | Collision > Shape is Touching another Shape > Use 2 Body ID's | `<objet>: Shape (<p1>) of Body (<p0>) is Touching Shape (<p3>) of Body (<p2>)` |  | expression numérique « First Body ID » ; expression numérique « First Shape ID » ; expression numérique « Second Body ID » ; expression numérique « Second Shape ID » | — |  |
| 32 | -113 | Collision > Body is Touching Type > Use Body ID | `<objet>: Body (<p0>) is Touching Type (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Collision Type » | — |  |
| 33 | -114 | Collision > Shape is Touching Type > Use Body ID | `<objet>: Shape (<p1>) of Body (<p0>) is Touching Type (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID » ; expression numérique « Collision Type » | — |  |
| 34 | -115 | Collision > Body is Touching another Body > Use Object and Body ID | `<objet>: Body of (<p0>) is Touching Body (<p1>)` |  | objet « Object » ; expression numérique « Body ID » | — |  |
| 35 | -116 | Collision > Shape is Touching another Shape > Use Object and Body ID | `<objet>: Shape (<p1>) of Body of (<p0>) is Touching Shape (<p3>) of Body (<p2>)` |  | objet « Object » ; expression numérique « First Shape ID » ; expression numérique « Body ID » ; expression numérique « Second Shape ID » | — |  |
| 36 | -117 | Collision > Body is Touching Type > Use Object | `<objet>: Body of (<p0>) is Touching Type (<p1>)` |  | objet « Object » ; expression numérique « Collision Type » | — |  |
| 37 | -118 | Collision > Shape is Touching Type > Use Object | `<objet>: Shape (<p1>) of Body of (<p0>) is Touching Type (<p2>)` |  | objet « Object » ; expression numérique « Shape ID » ; expression numérique « Collision Type » | — |  |
| 38 | -119 | Body > Is Body Sleeping > Use Object | `<objet>: Body - Body (<p0>) is Sleeping` |  | objet « Object » | — |  |
| 39 | -120 | Body > Is Body Frozen > Use Object | `<objet>: Body - Body (<p0>) is Frozen` |  | objet « Object » | — |  |
| 40 | -121 | On Event > On Body Fall Asleep | `<objet>: On Body Fall Asleep` |  |  | — |  |
| 41 | -122 | On Event > On Body Wake Up | `<objet>: On Body Wake Up` |  |  | — |  |
| 42 | -123 | Body > Is Body Static > Use Body ID | `<objet>: Body - Body (<p0>) is Static` |  | expression numérique « Body ID » | — |  |
| 43 | -124 | Body > Is Body Static > Use Object | `<objet>: Body - Body (<p0>) is Static` |  | objet « Object » | — |  |
| 44 | -125 | Body > Is Body a Bullet > Use Body ID | `<objet>: Body - Body (<p0>) is a Bullet` |  | expression numérique « Body ID » | — |  |
| 45 | -126 | Body > Is Body a Bullet > Use Object | `<objet>: Body - Body (<p0>) is a Bullet` |  | objet « Object » | — |  |
| 46 | -127 | Shape > Is Shape a Sensor > Use Body ID | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Sensor` |  | expression numérique « Body ID » ; expression numérique « Shape ID » | — |  |
| 47 | -128 | Shape > Is Shape a Sensor > Use Object | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Sensor` |  | objet « Object » ; expression numérique « Shape ID » | — |  |
| 48 | -129 | Shape > Is Shape a Polygon > Use Body ID | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Polygon` |  | expression numérique « Body ID » ; expression numérique « Shape ID » | — |  |
| 49 | -130 | Shape > Is Shape a Polygon > Use Object | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Polygon` |  | objet « Object » ; expression numérique « Shape ID » | — |  |
| 50 | -131 | Shape > Is Shape a Circle > Use Body ID | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Circle` |  | expression numérique « Body ID » ; expression numérique « Shape ID » | — |  |
| 51 | -132 | Shape > Is Shape a Circle > Use Object | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is a Circle` |  | objet « Object » ; expression numérique « Shape ID » | — |  |
| 52 | -133 | Shape > Is Shape an Edge > Use Body ID | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is an Edge` |  | expression numérique « Body ID » ; expression numérique « Shape ID » | — |  |
| 53 | -134 | Shape > Is Shape an Edge > Use Object | `<objet>: Shape - Shape (<p1>) of Body (<p0>) is an Edge` |  | objet « Object » ; expression numérique « Shape ID » | — |  |
| 54 | -135 | Body > Is Body ID Valid | `<objet>: Body - Body ID (<p0>) is Valid` |  | expression numérique « Body ID » | — |  |
| 55 | -136 | Joint > Is Joint ID Valid | `<objet>: Joint - Joint ID (<p0>) is Valid` |  | expression numérique « Joint ID » | — |  |
| 56 | -137 | Controller > Is Controller ID Valid | `<objet>: Controller - Controller ID (<p0>) is Valid` |  | expression numérique « Controller ID » | — |  |
| 57 | -138 | On Enumeration > On Body | `<objet>: Enumertion - On Body` |  |  | — |  |
| 58 | -139 | On Enumeration > On Shape > On Shape | `<objet>: Enumertion - On Shape` |  |  | — |  |
| 59 | -140 | On Enumeration > On Joint > On Joint | `<objet>: Enumertion - On Joint` |  |  | — |  |
| 61 | -142 | On Enumeration > On Shape > On Polygon Shape | `<objet>: Enumertion - On Polygon Shape` |  |  | — |  |
| 62 | -143 | On Enumeration > On Shape > On Circle Shape | `<objet>: Enumertion - On Circle Shape` |  |  | — |  |
| 63 | -144 | On Enumeration > On Shape > On Edge Shape | `<objet>: Enumertion - On Edge Shape` |  |  | — |  |
| 64 | -145 | On Enumeration > On Joint > On Revolute Joint | `<objet>: Enumertion - On Revolute Joint` |  |  | — |  |
| 65 | -146 | On Enumeration > On Joint > On Prismatic Joint | `<objet>: Enumertion - On Prismatic Joint` |  |  | — |  |
| 66 | -147 | On Enumeration > On Joint > On Distance Joint | `<objet>: Enumertion - On Distance Joint` |  |  | — |  |
| 67 | -148 | On Enumeration > On Joint > On Pulley Joint | `<objet>: Enumertion - On Pulley Joint` |  |  | — |  |
| 68 | -149 | On Enumeration > On Joint > On Line Joint | `<objet>: Enumertion - On Line Joint` |  |  | — |  |
| 69 | -150 | On Enumeration > On Joint > On Gear Joint | `<objet>: Enumertion - On Gear Joint` |  |  | — |  |
| 70 | -151 | On Enumeration > On Joint > On Mouse Joint | `<objet>: Enumertion - On Mouse Joint` |  |  | — |  |
| 71 | -152 | On Event > On Body Lose Attachment | `<objet>: On Body Lost Attachment` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | World > Update World | `World - Update` |  |  | — |  |
| 1 | 81 | Body > Creation > Quick > Create Body at Object | `Quick Create Body at (<p0>), offset (<p1>,<p2>), rotation (<p3>), destruction (<p4>)` |  | objet « Object » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Rotation (-1: Disable, 0: Not Object, 1: Fast, 2: Quality) » ; expression numérique « Link Destruction » | — |  |
| 2 | 82 | Shape > Creation > Quick > Create Box > By Object | `Quick Add Box to Body (<p0>), size (<p1>,<p2>), offset (<p3>,<p4>), angle (<p5>), density (<p6>), friction (<p7>), elasticity (<p8>)` |  | objet « Object » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 3 | 83 | World > Reset World | `Reset World` |  |  | — |  |
| 4 | 84 | World > Set Gravity | `World - Set Gravity to (<p0>,<p1>)` |  | expression numérique « Gravity X » ; expression numérique « Gravity Y » | — |  |
| 5 | 85 | World > Set Timestep | `World - Set Timestep to (<p0>)` |  | expression numérique « Timestep » | — |  |
| 6 | 86 | World > Set Position Iterations | `World - Set Position Iteration Count to (<p0>)` |  | expression numérique « Iterations » | — |  |
| 7 | 87 | World > Set Velocity Iterations | `World - Set Velocity Iteration Count to (<p0>)` |  | expression numérique « Iterations » | — |  |
| 8 | 88 | World > Enable/Disable CCD | `World - Enable CCD (<p0>)` |  | expression numérique « 1: Enable, 0: Disable » | — |  |
| 9 | 89 | World > Enable/Disable Position Correction | `World - Enable Warm Starting (<p0>)` |  | expression numérique « 1: Enable, 0: Disable » | — |  |
| 10 | 90 | World > Refilter All | `World - Refilter` |  |  | — |  |
| 11 | 91 | Body > Creation > Quick > Create Body | `Quick Create Body at (<p0>,<p1>), angle (<p2>)` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 12 | 92 | Body > Creation > Begin Body | `Begin Body` |  |  | — |  |
| 13 | 93 | Body > Creation > Definition > Load Body Definition | `Load Body Definition (<p0>)` |  | expression numérique « Body Definition ID » | — |  |
| 14 | 94 | Body > Creation > Definition > Store Current Data as Body Definition | `Store Current Body Data in Body Definition (<p0>)` |  | expression numérique « Body Definition ID » | — |  |
| 15 | 95 | Body > Creation > Definition > Remove Body Definition | `Remove Body Definition (<p0>)` |  | expression numérique « Body Definition ID » | — |  |
| 16 | 96 | Body > Creation > Set Custom Mass Data | `Body - Set Mass Data to mass (<p0>), inertia (<p1>), center (<p2>,<p3>)` |  | expression numérique « Mass » ; expression numérique « Interia » ; expression numérique « Center of Mass X » ; expression numérique « Center of Mass Y » | — |  |
| 17 | 97 | Body > Creation > Set Linear Damping | `Body - Set Linear Damping to (<p0>)` |  | expression numérique « Damping » | — |  |
| 18 | 98 | Body > Creation > Set Angular Damping | `Body - Set Angular Damping to (<p0>)` |  | expression numérique « Damping » | — |  |
| 19 | 99 | Body > Creation > Set Sleepflag | `Body - Set Sleepflag to (<p0>)` |  | expression numérique « 0: Disable Sleeping, 1: Enable Sleeping, 2: Start Asleep » | — |  |
| 20 | 100 | Body > Creation > Set Fixed Rotation | `Body - Set Fixed Rotation to (<p0>)` |  | expression numérique « 1: Disable Rotation, 0: Enable Rotation » | — |  |
| 21 | 101 | Body > Creation > Set Bullet | `Body - Set Bullet to (<p0>)` |  | expression numérique « 0: Disable Bullet, 1: Enable Bullet » | — |  |
| 22 | 102 | Body > Creation > Create Body > Create Body at Object | `Create Body at (<p0>), offset (<p1>,<p2>), rotation (<p3>), destruction (<p4>)` |  | objet « Object » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Rotation (0: No Rotation, 1: Fast, 2: Quality » ; expression numérique « Link Destruction » | — |  |
| 23 | 103 | Body > Creation > Create Body > Create Body | `Create Body at (<p0>,<p1>) , angle (<p2>)` |  | expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 24 | 104 | Body > Creation > Remove Body > By Body ID | `Remove Body (<p0>)` |  | expression numérique « Body ID » | — |  |
| 25 | 105 | Body > Creation > Remove Body > By Object | `Remove Body of (<p0>)` |  | objet « Object » | — |  |
| 26 | 106 | Shape > Creation > Quick > Create Circle > By Object | `Quick Add Circle to Body (<p0>), diameter (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | objet « Object » ; expression numérique « Diameter » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 27 | 107 | Shape > Creation > Quick > Create Polygon > By Object | `Quick Add Polygon to Body (<p0>), verices (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | objet « Object » ; expression chaîne « Vertices (CSV String) » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 28 | 108 | Shape > Creation > Quick > Create Edge Chain > By Object | `Quick Add Edge Chain to Body (<p0>), vertices (<p1>), closed (<p2>), offset (<p3>,<p4>), friction (<p5>), elasticity (<p6>)` |  | objet « Object » ; expression chaîne « Vertices (CSV String) » ; expression numérique « 0: Open Edge, 1: Closed Edge » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 29 | 109 | Shape > Creation > Quick > Create Box > By Body ID | `Quick Add Box to Body (<p0>), size (<p1>,<p2>), offset (<p3>,<p4>), angle (<p5>), density (<p6>), friction (<p7>), elasticity (<p8>)` |  | expression numérique « Body ID » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 30 | 110 | Shape > Creation > Quick > Create Circle > By Body ID | `Quick Add Circle to Body (<p0>), diameter (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | expression numérique « Body ID » ; expression numérique « Diameter » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 31 | 111 | Shape > Creation > Quick > Create Polygon > By Body ID | `Quick Add Polygon to Body (<p0>), verices (<p1>), offset (<p2>,<p3>), density (<p4>), friction (<p5>), elasticity (<p6>)` |  | expression numérique « Body ID » ; expression chaîne « Vertices (CSV String) » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 32 | 112 | Shape > Creation > Quick > Create Edge Chain > By Body ID | `Quick Add Edge Chain to Body (<p0>), verices (<p1>), closed (<p2>), offset (<p3>,<p4>), friction (<p5>), elasticity (<p6>)` |  | expression numérique « Body ID » ; expression chaîne « Vertices (CSV String) » ; expression numérique « 0: Open Edge, 1: Closed Edge » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 33 | 113 | Shape > Creation > Quick > Create Box > Add Object as Shape to Body | `Quick Add Object (<p0>) as Box to Body (<p1>), size (<p2>,<p3>), offset (<p4>,<p5>), angle (<p6>), density (<p7>), friction (<p8>), elasticity (<p9>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Width » ; expression numérique « Height » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 34 | 114 | Shape > Creation > Quick > Create Circle > Add Object as Shape to Body | `Quick Add Object (<p0>) as Circle to Body (<p1>), diameter (<p2>), offset (<p3>,<p4>), density (<p5>), friction (<p6>), elasticity (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Diameter » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 35 | 115 | Shape > Creation > Quick > Create Polygon > Add Object as Shape to Body | `Quick Add Object (<p0>) as Polygon to Body (<p1>), verices (<p2>), offset (<p3>,<p4>), density (<p5>), friction (<p6>), elasticity (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression chaîne « Vertices (CSV String) » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Density (0 for all shapes = static body) » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 36 | 116 | Shape > Creation > Quick > Create Edge Chain > Add Object as Shape to Body | `Quick Add Object (<p0>) as Edge Chain to Body (<p1>), verices (<p2>), closed (<p3>), offset (<p4>,<p5>), friction (<p6>), elasticity (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression chaîne « Vertices (CSV String) » ; expression numérique « 0: Open Edge, 1: Closed Edge » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Friction » ; expression numérique « Elasticity » | — |  |
| 37 | 117 | Shape > Creation > Begin > Begin Polygon Shape | `Begin Polygon Shape` |  |  | — |  |
| 38 | 118 | Shape > Creation > Begin > Begin Circle Shape | `Begin Circle Shape` |  |  | — |  |
| 39 | 119 | Shape > Creation > Begin > Begin Edge Chain | `Begin Edge Chain` |  |  | — |  |
| 40 | 120 | Shape > Creation > Definition > Load Shape Definition | `Load Shape Definition (<p0>)` |  | expression numérique « Shape Definition ID » | — |  |
| 41 | 121 | Shape > Creation > Definition > Store Current Data as Shape Definition | `Store Current Shape Data in Shape Definition (<p0>)` |  | expression numérique « Shape Definition ID » | — |  |
| 42 | 122 | Shape > Creation > Definition > Remove Shape Definition | `Remove Shape Definition (<p0>)` |  | expression numérique « Shape Definition ID » | — |  |
| 43 | 123 | Shape > Creation > Set Density | `Shape - Set Density (<p0>)` |  | expression numérique « Density » | — |  |
| 44 | 124 | Shape > Creation > Set Friction | `Shape - Set Friction (<p0>)` |  | expression numérique « Friction » | — |  |
| 45 | 125 | Shape > Creation > Set Elasticity | `Shape - Set Elasticity (<p0>)` |  | expression numérique « Elasticity » | — |  |
| 46 | 126 | Shape > Creation > Set Collision Type | `Shape - Set Collision Type (<p0>)` |  | expression numérique « Collision Type (0-31) » | — |  |
| 47 | 127 | Shape > Creation > Set Sensor | `Shape - Set Sensor (<p0>)` |  | expression numérique « 0: Is solid, 1: Is sensor » | — |  |
| 48 | 128 | Shape > Creation > Circle Shape > Set Diameter | `Circle Shape - Set Diameter (<p0>)` |  | expression numérique « Diameter » | — |  |
| 49 | 129 | Shape > Creation > Create Shape > Create Shape By Object | `Add Shape to Body (<p0>)` |  | objet « Object » | — |  |
| 50 | 130 | Shape > Creation > Create Shape > Create Shape By Body ID | `Add Shape to Body (<p0>)` |  | expression numérique « Body ID » | — |  |
| 51 | 131 | Shape > Creation > Create Shape > Add Object as Shape to Body | `Add Object (<p0>) as Shape to Body (<p1>)` |  | objet « Object » ; expression numérique « Body ID » | — |  |
| 52 | 132 | Shape > Creation > Circle Shape > Set Local Position | `Circle Shape - Set Local Position to (<p0>,<p1>)` |  | expression numérique « Local X Position » ; expression numérique « Local Y Position » | — |  |
| 53 | 133 | Shape > Creation > Remove Shape > By Body ID | `Remove Shape (<p1>) from Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » | — |  |
| 54 | 134 | Shape > Creation > Polygon Shape > Set as Box | `Polygon Shape - Set As Box, size (<p0>,<p1>), offset (<p2>,<p3>), angle (<p4>)` |  | expression numérique « Width » ; expression numérique « Height » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle » | — |  |
| 55 | 135 | Shape > Creation > Polygon Shape > Precache Vertices | `Polygon Shape - Precache (<p0>) vertices` |  | expression numérique « Number of Vertices » | — |  |
| 56 | 136 | Shape > Creation > Polygon Shape > Add Vertice | `Polygon Shape - Add Vertice (<p0>,<p1>)` |  | expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 57 | 137 | Shape > Creation > Polygon Shape > Remove Vertice | `Polygon Shape - Remove Vertice (<p0>)` |  | expression numérique « Vertice ID » | — |  |
| 58 | 138 | Shape > Creation > Polygon Shape > Set Vertice | `Polygon Shape - Set Vertice (<p0>) to (<p1>,<p2>)` |  | expression numérique « Vertice ID » ; expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 59 | 139 | Shape > Creation > Polygon Shape > Insert Vertice | `Polygon Shape - Insert Vertice (<p1>,<p2>) at (<p0>)` |  | expression numérique « Position » ; expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 60 | 140 | Shape > Creation > Polygon Shape > Clear Vertices | `Polygon Shape - Clear Vertices` |  |  | — |  |
| 61 | 141 | Shape > Creation > Polygon Shape > Translate Vertices | `Polygon Shape - Translate Vertices by (<p0>,<p1>)` |  | expression numérique « X Translation » ; expression numérique « Y Translation » | — |  |
| 62 | 142 | Shape > Creation > Polygon Shape > Read Vertices from String | `Polygon Shape - Read Vertices from String (<p0>)` |  | expression chaîne « Vertices (CSV String) » | — |  |
| 63 | 143 | Shape > Creation > Edge Chain > Precache Vertices | `Edge Chain - Precache (<p0>) vertices` |  | expression numérique « Number of Vertices » | — |  |
| 64 | 144 | Shape > Creation > Edge Chain > Add Vertice | `Edge Chain - Add Vertice (<p0>,<p1>)` |  | expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 65 | 145 | Shape > Creation > Edge Chain > Remove Vertice | `Edge Chain - Remove Vertice (<p0>)` |  | expression numérique « Vertice ID » | — |  |
| 66 | 146 | Shape > Creation > Edge Chain > Set Vertice | `Edge Chain - Set Vertice (<p0>) to (<p1>,<p2>)` |  | expression numérique « Vertice ID » ; expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 67 | 147 | Shape > Creation > Edge Chain > Insert Vertice | `Edge Chain - Insert Vertice (<p1>,<p2>) at (<p0>)` |  | expression numérique « Position » ; expression numérique « Vertice X » ; expression numérique « Vertice Y » | — |  |
| 68 | 148 | Shape > Creation > Edge Chain > Clear Vertices | `Edge Chain - Clear Vertices` |  |  | — |  |
| 69 | 149 | Shape > Creation > Edge Chain > Translate Vertices | `Edge Chain - Translate Vertices by (<p0>,<p1>)` |  | expression numérique « X Translation » ; expression numérique « Y Translation » | — |  |
| 70 | 150 | Shape > Creation > Edge Chain > Read Vertices from String | `Edge Chain - Read Vertices from String (<p0>)` |  | expression chaîne « Vertices (CSV String) » | — |  |
| 71 | 151 | Shape > Creation > Edge Chain > Set Loop | `Edge Chain - Set Loop (<p0>)` |  | expression numérique « 0: Is Open, 1: Is Looped » | — |  |
| 72 | 152 | Shape > Creation > Remove Shape > By Object | `Remove Shape (<p1>) from Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » | — |  |
| 73 | 153 | Shape > Creation > Filter > Set Category Bits | `Shape - Set Category Bits (<p0>)` |  | expression numérique « Binary Representation of Categories » | — |  |
| 74 | 154 | Shape > Creation > Filter > Set Mask Bits | `Shape - Set Mask Bits (<p0>)` |  | expression numérique « Binary Representation of Masks » | — |  |
| 75 | 155 | Shape > Creation > Filter > Set Group Index | `Shape - Set Group Index (<p0>)` |  | expression numérique « Group Index » | — |  |
| 76 | 156 | Shape > Creation > Filter > Add Category | `Shape - Add Category (<p0>)` |  | expression numérique « Category (0-15) » | — |  |
| 77 | 157 | Shape > Creation > Filter > Remove Category | `Shape - Remove Category (<p0>)` |  | expression numérique « Category (0-15) » | — |  |
| 78 | 158 | Shape > Creation > Filter > Add Mask | `Shape - Add Mask (<p0>)` |  | expression numérique « Mask (0-15) » | — |  |
| 79 | 159 | Shape > Creation > Filter > Remove Mask | `Shape - Remove Mask (<p0>)` |  | expression numérique « Mask (0-15) » | — |  |
| 80 | 160 | Body > Modify > Position > Set Position and Angle > By Object | `Set Position and Angle of Body (<p0>) to (<p1>,<p2>), (<p3>)` |  | objet « Object » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 81 | 161 | Body > Modify > Position > Set X Position > By Object | `Set X Position of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « X Position » | — |  |
| 82 | 162 | Body > Modify > Position > Set Y Position > By Object | `Set Y Position of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Y Position » | — |  |
| 83 | 163 | Body > Modify > Position > Set Angle > By Object | `Set Angle of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Angle » | — |  |
| 84 | 164 | Body > Modify > Position > Set Position and Angle > By Body ID | `Set Position and Angle of Body (<p0>) to (<p1>,<p2>), (<p3>)` |  | expression numérique « Body ID » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 85 | 165 | Body > Modify > Position > Set X Position > By Body ID | `Set X Position of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « X Position » | — |  |
| 86 | 166 | Body > Modify > Position > Set Y Position > By Body ID | `Set Y Position of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Y Position » | — |  |
| 87 | 167 | Body > Modify > Position > Set Angle > By Body ID | `Set Angle of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Angle » | — |  |
| 88 | 168 | Body > Modify > Velocity > Set Linear Velocity > By Body ID | `Set Linear Velocity of Body (<p0>) to (<p1>,<p2>)` |  | expression numérique « Body ID » ; expression numérique « X Velocity » ; expression numérique « Y Velocity » | — |  |
| 89 | 169 | Body > Modify > Velocity > Set Angular Velocity > By Body ID | `Set Angular Velocity of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Angular Velocity » | — |  |
| 90 | 170 | Body > Modify > Velocity > Set X Velocity > By Body ID | `Set X Velocity of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « X Velocity » | — |  |
| 91 | 171 | Body > Modify > Velocity > Set Y Velocity > By Body ID | `Set Y Velocity of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Y Velocity » | — |  |
| 92 | 172 | Body > Modify > Velocity > Set Linear Velocity > By Object | `Set Linear Velocity of Body (<p0>) to (<p1>,<p2>)` |  | objet « Object » ; expression numérique « X Velocity » ; expression numérique « Y Velocity » | — |  |
| 93 | 173 | Body > Modify > Velocity > Set Angular Velocity > By Object | `Set Angular Velocity of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Angular Velocity » | — |  |
| 94 | 174 | Body > Modify > Velocity > Set X Velocity > By Object | `Set X Velocity of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « X Velocity » | — |  |
| 95 | 175 | Body > Modify > Velocity > Set Y Velocity > By Object | `Set Y Velocity of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Y Velocity » | — |  |
| 96 | 176 | Body > Modify > Velocity > Apply Force > By Object | `Apply Force to Body (<p0>), force (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | objet « Object » ; expression numérique « X Force » ; expression numérique « Y Force » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « 0: Is World Coordinate, 1: Is Local Coordinate » | — |  |
| 97 | 177 | Body > Modify > Velocity > Apply Impulse > By Object | `Apply Impulse to Body (<p0>), impulse (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | objet « Object » ; expression numérique « X Strength » ; expression numérique « Y Strength » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « 0: Is World Coordinate, 1: Is Local Coordinate » | — |  |
| 98 | 178 | Body > Modify > Velocity > Apply Torque > By Object | `Apply Torque to Body (<p0>), torque (<p1>)` |  | objet « Object » ; expression numérique « Torque » | — |  |
| 99 | 179 | Body > Modify > Velocity > Apply Force > By Body ID | `Apply Force to Body (<p0>), force (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | expression numérique « Body ID » ; expression numérique « X Force » ; expression numérique « Y Force » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « 0: Is World Coordinate, 1: Is Local Coordinate » | — |  |
| 100 | 180 | Body > Modify > Velocity > Apply Impulse > By Body ID | `Apply Impulse to Body (<p0>), impulse (<p1>,<p2>), position (<p3>,<p4>), is local (<p5>)` |  | expression numérique « Body ID » ; expression numérique « X Strength » ; expression numérique « Y Strength » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « 0: Is World Coordinate, 1: Is Local Coordinate » | — |  |
| 101 | 181 | Body > Modify > Velocity > Apply Torque > By Body ID | `Apply Torque to Body (<p0>), torque (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Torque » | — |  |
| 102 | 182 | Body > Modify > Sleep > Enable/Disable Sleep > By Body ID | `Enable Sleep for Body (<p0>), enable (<p1>)` |  | expression numérique « Body ID » ; expression numérique « 0: Disable Sleep, 1: Enable Sleep » | — |  |
| 103 | 183 | Body > Modify > Sleep > Put Body to Sleep > By Body ID | `Put Body (<p0>) to Sleep` |  | expression numérique « Body ID » | — |  |
| 104 | 184 | Body > Modify > Sleep > Wake up Body > By Body ID | `Wake up Body (<p0>)` |  | expression numérique « Body ID » | — |  |
| 105 | 185 | Body > Modify > Sleep > Enable/Disable Sleep > By Object | `Enable Sleep for Body (<p0>), enable (<p1>)` |  | objet « Object » ; expression numérique « 0: Disable Sleep, 1: Enable Sleep » | — |  |
| 106 | 186 | Body > Modify > Sleep > Put Body to Sleep > By Object | `Put Body (<p0>) to Sleep` |  | objet « Object » | — |  |
| 107 | 187 | Body > Modify > Sleep > Wake up Body > By Object | `Wake up Body (<p0>)` |  | objet « Object » | — |  |
| 108 | 188 | Body > Modify > Mass > Set Mass Data > By Object | `Set Mass Data of Body (<p0>) to mass (<p1>), inertia (<p2>), center (<p3>,<p4>)` |  | objet « Object » ; expression numérique « Mass » ; expression numérique « Inertia » ; expression numérique « Center X » ; expression numérique « Center Y » | — |  |
| 109 | 189 | Body > Modify > Mass > Set Mass > By Object | `Set Mass of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Mass » | — |  |
| 110 | 190 | Body > Modify > Mass > Set Inertia > By Object | `Set Inertia of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Inertia » | — |  |
| 111 | 191 | Body > Modify > Mass > Set Center of Mass > By Object | `Set Center of Mass of Body (<p0>) to (<p1>,<p2>)` |  | objet « Object » ; expression numérique « Center X » ; expression numérique « Center Y » | — |  |
| 112 | 192 | Body > Modify > Mass > Set Mass Data > By Body ID | `Set Mass Data of Body (<p0>) to mass (<p1>), inertia (<p2>), center (<p3>,<p4>)` |  | expression numérique « Body ID » ; expression numérique « Mass » ; expression numérique « Inertia » ; expression numérique « Center X » ; expression numérique « Center Y » | — |  |
| 113 | 193 | Body > Modify > Mass > Set Mass > By Body ID | `Set Mass of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Mass » | — |  |
| 114 | 194 | Body > Modify > Mass > Set Inertia > By Body ID | `Set Inertia of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Inertia » | — |  |
| 115 | 195 | Body > Modify > Mass > Set Center of Mass > By Body ID | `Set Center of Mass of Body (<p0>) to (<p1>,<p2>)` |  | expression numérique « Body ID » ; expression numérique « Center X » ; expression numérique « Center Y » | — |  |
| 116 | 196 | Body > Modify > Mass > Set Mass from Shapes > By Object | `Set Mass Data of Body (<p0>) from Shapes` |  | objet « Object » | — |  |
| 117 | 197 | Body > Modify > Mass > Set Mass from Shapes > By Body ID | `Set Mass Data of Body (<p0>) from Shapes` |  | expression numérique « Body ID » | — |  |
| 118 | 198 | Body > Modify > Set Bullet > By Object | `Set Bullet of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « 0: Disable Bullet, 1: Enable Bullet » | — |  |
| 119 | 199 | Body > Modify > Set Bullet > By Body ID | `Set Bullet of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « 0: Disable Bullet, 1: Enable Bullet » | — |  |
| 120 | 200 | Shape > Modify > Set Friction > By Object | `Set Friction of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Friction » | — |  |
| 121 | 201 | Shape > Modify > Set Elasticity > By Object | `Set Elasticity of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Elasticity » | — |  |
| 122 | 202 | Shape > Modify > Set Collision Type > By Object | `Set Collision Type of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Collision Type (0-31) » | — |  |
| 123 | 203 | Shape > Modify > Set Friction > By Body ID | `Set Friction of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Friction » | — |  |
| 124 | 204 | Shape > Modify > Set Elasticity > By Body ID | `Set Elasticity of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Elasticity » | — |  |
| 125 | 205 | Shape > Modify > Set Collision Type > By Body ID | `Set Collision Type of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Collision Type (0-31) » | — |  |
| 126 | 206 | Shape > Modify > Filter > Set Group Index > By Object | `Set Group Index of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Group Index » | — |  |
| 127 | 207 | Shape > Modify > Filter > Set Category Bits > By Object | `Set Category Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category Bits » | — |  |
| 128 | 208 | Shape > Modify > Filter > Set Mask Bits > By Object | `Set Mask Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask Bits » | — |  |
| 129 | 209 | Shape > Modify > Filter > Add Category > By Object | `Add Category (<p2>) to Shape (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category (0-15) » | — |  |
| 130 | 210 | Shape > Modify > Filter > Remove Category > By Object | `Remove Category (<p2>) from Shape (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category (0-15) » | — |  |
| 131 | 211 | Shape > Modify > Filter > Add Mask > By Object | `Add Mask (<p2>) to Shape (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask (0-15) » | — |  |
| 132 | 212 | Shape > Modify > Filter > Remove Mask > By Object | `Remove Mask (<p2>) from Shape (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask (0-15) » | — |  |
| 133 | 213 | Shape > Modify > Filter > Set Group Index > By Body ID | `Set Group Index of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Group Index » | — |  |
| 134 | 214 | Shape > Modify > Filter > Set Category Bits > By Body ID | `Set Category Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category Bits » | — |  |
| 135 | 215 | Shape > Modify > Filter > Set Mask Bits > By Body ID | `Set Mask Bits of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask Bits » | — |  |
| 136 | 216 | Shape > Modify > Filter > Add Category > By Body ID | `Add Category (<p2>) to Shape (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category (0-15) » | — |  |
| 137 | 217 | Shape > Modify > Filter > Remove Category > By Body ID | `Remove Category (<p2>) from Shape (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Category (0-15) » | — |  |
| 138 | 218 | Shape > Modify > Filter > Add Mask > By Body ID | `Add Mask (<p2>) to Shape (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask (0-15) » | — |  |
| 139 | 219 | Shape > Modify > Filter > Remove Mask > By Body ID | `Remove Mask (<p2>) from Shape (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Mask (0-15) » | — |  |
| 140 | 220 | Shape > Modify > Refilter Contacts > By Object | `Refilter Contacts for Shape (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » | — |  |
| 141 | 221 | Shape > Modify > Refilter Contacts > By Body ID | `Refilter Contacts for Shape (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » | — |  |
| 142 | 222 | Joint > Creation > Quick > Create Mouse Joint > Using Object | `Quick Add Mouse Joint to Body (<p0>), Anchor (<p1>,<p2>), Max Force (<p3>)` |  | objet « Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « Max Force » | — |  |
| 143 | 223 | Joint > Creation > Quick > Create Mouse Joint > Using Body ID | `Quick Add Mouse Joint to Body (<p0>), Anchor (<p1>,<p2>), Max Force (<p3>)` |  | expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « Max Force » | — |  |
| 144 | 224 | Joint > Creation > Remove Joint > By Joint ID | `Remove Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 145 | 225 | Joint > Modify > Mouse Joint > Set Target > By Joint ID | `Set Target of Mouse Joint (<p0>) to (<p1>,<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Target X » ; expression numérique « Target Y » | — |  |
| 146 | 226 | Joint > Creation > Quick > Create Revolute Joint > Using Object and Body ID | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>), Reverse (<p6>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « 0: Disable Collision, 1: Enable Collision » ; expression numérique « 1: Reverse Body Order » | — |  |
| 147 | 227 | Joint > Creation > Quick > Create Prismatic Joint > Using Object and Body ID | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>), Reverse (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » ; expression numérique « 1: Reverse Body Order » | — |  |
| 148 | 228 | Joint > Creation > Quick > Create Distance Joint > Using Object and Body ID | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>), Reverse (<p9>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « First Anchor X » ; expression numérique « First Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Second Anchor X » ; expression numérique « Second Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « 0: Disable Collision, 1: Enable Collision » ; expression numérique « 1: Reverse Body Order » | — |  |
| 149 | 229 | Joint > Creation > Quick > Create Line Joint > Using Object and Body ID | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>), Reverse (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » ; expression numérique « 1: Reverse Body Order » | — |  |
| 150 | 230 | Joint > Creation > Quick > Create Pulley Joint > Using Object and Body ID | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D), Reverse (%E)` |  | (paramètres non fiables) | — |  |
| 151 | 231 | Joint > Creation > Quick > Create Revolute Joint > Using 2 Body ID's | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 152 | 232 | Joint > Creation > Quick > Create Prismatic Joint > Using 2 Body ID's | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 153 | 233 | Joint > Creation > Quick > Create Distance Joint > Using 2 Body ID's | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » ; expression numérique « First Anchor X » ; expression numérique « First Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Second Anchor X » ; expression numérique « Second Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 154 | 234 | Joint > Creation > Quick > Create Line Joint > Using 2 Body ID's | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 155 | 235 | Joint > Creation > Quick > Create Pulley Joint > Using 2 Body ID's | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D)` |  | (paramètres non fiables) | — |  |
| 156 | 236 | Joint > Creation > Quick > Create Revolute Joint > Using 2 Objects | `Quick Add Revolute Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Collide (<p5>)` |  | objet « First Object » ; objet « Second Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 157 | 237 | Joint > Creation > Quick > Create Prismatic Joint > Using 2 Objects | `Quick Add Prismatic Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | objet « First Object » ; objet « Second Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 158 | 238 | Joint > Creation > Quick > Create Distance Joint > Using 2 Objects | `Quick Add Distance Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), Collide (<p8>)` |  | objet « First Object » ; objet « Second Object » ; expression numérique « First Anchor X » ; expression numérique « First Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Second Anchor X » ; expression numérique « Second Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 159 | 239 | Joint > Creation > Quick > Create Line Joint > Using 2 Objects | `Quick Add Line Joint Between Bodies (<p0>) and (<p1>), Anchor (<p2>,<p3>), Local to (<p4>), Angle (<p5>), Collide (<p6>)` |  | objet « First Object » ; objet « Second Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to First Body, 2: Local to Second Body » ; expression numérique « Translation Angle » ; expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 160 | 240 | Joint > Creation > Quick > Create Pulley Joint > Using 2 Objects | `Quick Add Pulley Joint Between Bodies (<p0>) and (<p1>), First Anchor (<p2>,<p3>), is Local (<p4>), Second Anchor (<p5>,<p6>), is Local (<p7>), First Ground Anchor (<p8>,<p9>), Second Ground Anchor (%A,%B), Ratio (%C), Collide (%D)` |  | (paramètres non fiables) | — |  |
| 161 | 241 | Joint > Creation > Quick > Create Gear Joint > Using 2 Body ID's | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | expression numérique « First Body ID » ; expression numérique « First Joint ID » ; expression numérique « Second Body ID » ; expression numérique « Second Joint ID » ; expression numérique « Ratio » | — |  |
| 162 | 242 | Joint > Creation > Begin > Begin Revolute Joint | `Begin Revolute Joint` |  |  | — |  |
| 163 | 243 | Joint > Creation > Begin > Begin Prismatic Joint | `Begin Prismatic Joint` |  |  | — |  |
| 164 | 244 | Joint > Creation > Begin > Begin Distance Joint | `Begin Distance Joint` |  |  | — |  |
| 165 | 245 | Joint > Creation > Begin > Begin Line Joint | `Begin Line Joint` |  |  | — |  |
| 166 | 246 | Joint > Creation > Begin > Begin Pulley Joint | `Begin Pulley Joint` |  |  | — |  |
| 167 | 247 | Joint > Creation > Begin > Begin Mouse Joint | `Begin Mouse Joint` |  |  | — |  |
| 168 | 248 | Joint > Creation > Begin > Gear Joint | `Begin Gear Joint` |  |  | — |  |
| 169 | 249 | Joint > Creation > Definition > Load Joint Definition | `Load Joint Definition (<p0>)` |  | expression numérique « Definition ID » | — |  |
| 170 | 250 | Joint > Creation > Definition > Store Current Data as Joint Definition | `Store Current Joint Data in Joint Definition (<p0>)` |  | expression numérique « Definition ID » | — |  |
| 171 | 251 | Joint > Creation > Definition > Remove Joint Definition | `Remove Joint Definition (<p0>)` |  | expression numérique « Definition ID » | — |  |
| 172 | 252 | Joint > Creation > Create Joint > Create Joint at Body by Body ID | `Create Joint at Body (<p0>)` |  | expression numérique « Body ID » | — |  |
| 173 | 253 | Joint > Creation > Create Joint > Create Joint at Body by Object | `Create Joint at Body (<p0>)` |  | objet « Object » | — |  |
| 174 | 254 | Joint > Creation > Create Joint > Create Joint Between two Body ID's | `Create Joint Between Bodies (<p0>) ad (<p1>)` |  | expression numérique « First Body ID » ; expression numérique « Second Body ID » | — |  |
| 175 | 255 | Joint > Creation > Create Joint > Create Joint Between two Objects | `Create Joint Between Bodies (<p0>) and (<p1>)` |  | objet « First Object » ; objet « Second Object » | — |  |
| 176 | 256 | Joint > Creation > Enable/Disable Internal Collision | `Joint - Enable Internal Collision (<p0>)` |  | expression numérique « 0: Disable Collision, 1: Enable Collision » | — |  |
| 177 | 257 | Joint > Creation > Quick > Create Gear Joint > Using 2 Objects | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | objet « First Object » ; expression numérique « First Joint ID » ; objet « Second Object » ; expression numérique « Second Joint ID » ; expression numérique « Ratio » | — |  |
| 178 | 258 | Joint > Creation > Revolute Joint > Set First Body Anchor | `Revolute Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 179 | 259 | Joint > Creation > Revolute Joint > Set Second Body Anchor | `Revolute Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 180 | 260 | Joint > Creation > Revolute Joint > Set Reference Angle | `Revolute Joint - Set Reference Angle to (<p0>)` |  | expression numérique « Reference Angle » | — |  |
| 181 | 261 | Joint > Creation > Revolute Joint > Enable/Disable Limits | `Revolute Joint - Enable Limits (<p0>)` |  | expression numérique « 0: Disabe Limits, 1: Enable Limits » | — |  |
| 182 | 262 | Joint > Creation > Revolute Joint > Enable/Disable Motor | `Revolute Joint - Enable Motor (<p0>)` |  | expression numérique « 0: Disabe Motor, 1: Enable Motor » | — |  |
| 183 | 263 | Joint > Creation > Revolute Joint > Set Limits | `Revolute Joint - Set Limits to (<p0>,<p1>)` |  | expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 184 | 264 | Joint > Creation > Revolute Joint > Set Motor | `Revolute Joint - Set Motor to Speed (<p0>), Max Torque (<p1>)` |  | expression numérique « Speed » ; expression numérique « Max Torque » | — |  |
| 185 | 265 | Joint > Creation > Create Joint > Create Joint Between Object and Body ID | `Create Joint Between Bodies (<p0>) and (<p1>), reverse (<p2>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « 1: Reverse Body Order » | — |  |
| 186 | 266 | Collisions > Register Collision for Types | `Register Collision for Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 187 | 267 | Collisions > Disable Collision for Types | `Disable Collision for Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 188 | 268 | Collisions > Reset Collision for Types | `Reset Collision for Types (<p0>) and (<p1>)` |  | expression numérique « First Collision Type » ; expression numérique « Second Collision Type » | — |  |
| 189 | 269 | Attached Objects > Attach Object to Body | `Attach Object (<p0>) to Body (<p1>), Offset (<p2>,<p3>) Angle Offset (<p4>) is Local (<p5>), rotation (<p6>) destruction (<p7>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle Offset » ; expression numérique « 0: Object Current Position, 1: Local Position » ; expression numérique « Rotation (0: None, 1: Fast, 2: Quality) » ; expression numérique « Link Destruction » | — |  |
| 190 | 270 | Attached Objects > Detach Object | `Detach Object (<p0>)` |  | objet « Object » | — |  |
| 191 | 271 | Debug Draw > Start Debug Draw in Overlay | `Start Debug Draw in Overlay (<p0>)` |  | expression numérique « Overlay Adress » | — |  |
| 192 | 272 | Debug Draw > Stop Debug Draw | `Stop Debug Draw` |  |  | — |  |
| 193 | 273 | Debug Draw > Set Flags > Set Flags | `Set Debug Draw Flags to (<p0>)` |  | expression numérique « Debug Draw Flags » | — |  |
| 194 | 274 | Joint > Creation > Quick > Create Gear Joint > Using Object and Body ID | `Quick Add Gear Joint Between Body (<p0>), Joint (<p1>) and Body (<p2>), Joint (<p3>), Ratio (<p4>)` |  | objet « First Object » ; expression numérique « First Joint ID » ; objet « Second Body ID » ; expression numérique « Second Joint ID » ; expression numérique « Ratio » | — |  |
| 195 | 275 | Joint > Creation > Prismatic Joint > Set First Body Anchor | `Prismatic Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 196 | 276 | Joint > Creation > Prismatic Joint > Set Second Body Anchor | `Prismatic Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 197 | 277 | Joint > Creation > Prismatic Joint > Set Reference Angle | `Prismatic Joint - Set Reference Angle to (<p0>)` |  | expression numérique « Reference Angle » | — |  |
| 198 | 278 | Joint > Creation > Prismatic Joint > Enable/Disable Limits | `Prismatic Joint - Enable Limits (<p0>)` |  | expression numérique « 0: Disabe Limits, 1: Enable Limits » | — |  |
| 199 | 279 | Joint > Creation > Prismatic Joint > Enable/Disable Motor | `Prismatic Joint - Enable Motor (<p0>)` |  | expression numérique « 0: Disabe Motor, 1: Enable Motor » | — |  |
| 200 | 280 | Joint > Creation > Prismatic Joint > Set Limits | `Prismatic Joint - Set Limits to (<p0>,<p1>)` |  | expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 201 | 281 | Joint > Creation > Prismatic Joint > Set Motor | `Prismatic Joint - Set Motor to Speed (<p0>), Max Force (<p1>)` |  | expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 202 | 282 | Joint > Creation > Prismatic Joint > Set Translation Angle | `Prismatic Joint - Set Transtation Angle to (<p0>), Local to (<p1>)` |  | expression numérique « Translation Angle » ; expression numérique « 0: World Angle, 1: Local to First Body, 2: Local to Second Body » | — |  |
| 203 | 283 | Joint > Creation > Line Joint > Set First Body Anchor | `Line Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 204 | 284 | Joint > Creation > Line Joint > Set Second Body Anchor | `Line Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 205 | 285 | World > Enable/Disable Automatic Update | `World - Enable Automatic Update (<p0>)` |  | expression numérique « 1: Enable, 0: Disable » | — |  |
| 206 | 286 | Joint > Creation > Line Joint > Enable/Disable Limits | `Line Joint - Enable Limits (<p0>)` |  | expression numérique « 0: Disabe Limits, 1: Enable Limits » | — |  |
| 207 | 287 | Joint > Creation > Line Joint > Enable/Disable Motor | `Line Joint - Enable Motor (<p0>)` |  | expression numérique « 0: Disabe Motor, 1: Enable Motor » | — |  |
| 208 | 288 | Joint > Creation > Line Joint > Set Limits | `Line Joint - Set Limits to (<p0>,<p1>)` |  | expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 209 | 289 | Joint > Creation > Line Joint > Set Motor | `Line Joint - Set Motor to Speed (<p0>), Max Force (<p1>)` |  | expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 210 | 290 | Joint > Creation > Line Joint > Set Translation Angle | `Line Joint - Set Transtation Angle to (<p0>), Local to (<p1>)` |  | expression numérique « Translation Angle » ; expression numérique « 0: World Angle, 1: Local to First Body, 2: Local to Second Body » | — |  |
| 211 | 291 | Joint > Creation > Distance Joint > Set First Body Anchor | `Distance Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 212 | 292 | Joint > Creation > Distance Joint > Set Second Body Anchor | `Distance Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 213 | 293 | Joint > Creation > Distance Joint > Set Length | `Distance Joint - Set Length to (<p0>), absolute (<p1>)` |  | expression numérique « Length » ; expression numérique « 0: Additional Length, 1: Absolute Length » | — |  |
| 214 | 294 | Joint > Creation > Distance Joint > Set Frequency | `Distance Joint - Set Frequency to (<p0>)` |  | expression numérique « Frequency » | — |  |
| 215 | 295 | Joint > Creation > Distance Joint > Set Damping Ratio | `Distance Joint - Set Damping to (<p0>)` |  | expression numérique « Damping » | — |  |
| 216 | 296 | Joint > Creation > Mouse Joint > Set Anchor | `Mouse Joint - Set Anchor to (<p0>,<p1>), is Local (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » | — |  |
| 217 | 297 | Joint > Creation > Mouse Joint > Set Damping Ratio | `Mouse Joint - Set Frequency to (<p0>)` |  | expression numérique « Frequency » | — |  |
| 218 | 298 | Joint > Creation > Mouse Joint > Set Frequency | `Mouse Joint - Set Damping to (<p0>)` |  | expression numérique « Damping » | — |  |
| 219 | 299 | Joint > Creation > Mouse Joint > Set Max Force | `Mouse Joint - Set Max Force to (<p0>)` |  | expression numérique « Max Force » | — |  |
| 220 | 300 | Joint > Creation > Gear Joint > Set First Joint | `Gear Joint - Set First Joint to (<p0>), from Body (<p1>)` |  | expression numérique « Joint » ; expression numérique « 0: Joint ID, 1: Body Joint Number » | — |  |
| 221 | 301 | Joint > Creation > Gear Joint > Set Second Joint | `Gear Joint - Set Second Joint to (<p0>), from Body (<p1>)` |  | expression numérique « Joint » ; expression numérique « 0: Joint ID, 1: Body Joint Number » | — |  |
| 222 | 302 | Joint > Creation > Gear Joint > Set Ratio | `Gear Joint - Set Ratio to (<p0>)` |  | expression numérique « Ratio » | — |  |
| 223 | 303 | Joint > Creation > Pulley Joint > Set First Body Anchor | `Pulley Joint - Set First Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 224 | 304 | Joint > Creation > Pulley Joint > Set Second Body Anchor | `Pulley Joint - Set Second Body Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 225 | 305 | Joint > Creation > Pulley Joint > Set First Ground Anchor | `Pulley Joint - Set First Ground Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 226 | 306 | Joint > Creation > Pulley Joint > Set Second Ground Anchor | `Pulley Joint - Set Second Ground Anchor to (<p0>,<p1>), Local to (<p2>)` |  | expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local to Own Body, 2: Local to Other Body » | — |  |
| 227 | 307 | Joint > Creation > Pulley Joint > Set First Max Length | `Pulley Joint - Set First Max Length to (<p0>), absolute (<p1>)` |  | expression numérique « Max Length » ; expression numérique « 0: Additional Length, 1: Absolute Length » | — |  |
| 228 | 308 | Joint > Creation > Pulley Joint > Set Second Max Length | `Pulley Joint - Set Second Max Length to (<p0>), absolute (<p1>)` |  | expression numérique « Max Length » ; expression numérique « 0: Additional Length, 1: Absolute Length » | — |  |
| 229 | 309 | Joint > Creation > Pulley Joint > Set Ratio | `Pulley Joint - Set Ratio to (<p0>)` |  | expression numérique « Ratio » | — |  |
| 230 | 310 | Joint > Modify > Revolute Joint > Set Motor > By Joint ID | `Revolute Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Torque (<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Speed » ; expression numérique « Max Torque » | — |  |
| 231 | 311 | Joint > Modify > Revolute Joint > Disable Motor > By Joint ID | `Revolute Joint - Disable Motor for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 232 | 312 | Joint > Modify > Revolute Joint > Set Limits > By Joint ID | `Revolute Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 233 | 313 | Joint > Modify > Revolute Joint > Disable Limits > By Joint ID | `Revolute Joint - Disable Limits for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 234 | 314 | Joint > Modify > Prismatic Joint > Set Motor > By Joint ID | `Prismatic Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Force (<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 235 | 315 | Joint > Modify > Prismatic Joint > Disable Motor > By Joint ID | `Prismatic Joint - Disable Motor for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 236 | 316 | Joint > Modify > Prismatic Joint > Set Limits > By Joint ID | `Prismatic Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 237 | 317 | Joint > Modify > Prismatic Joint > Disable Limits > By Joint ID | `Prismatic Joint - Disable Limits for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 238 | 318 | Joint > Modify > Line Joint > Set Motor > By Joint ID | `Line Joint - Set Motor of Joint (<p0>) to Speed (<p1>), Force (<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 239 | 319 | Joint > Modify > Line Joint > Disable Motor > By Joint ID | `Line Joint - Disable Motor for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 240 | 320 | Joint > Modify > Line Joint > Set Limits > By Joint ID | `Line Joint - Set Limits of Joint (<p0>) to (<p1>,<p2>)` |  | expression numérique « Joint ID » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 241 | 321 | Joint > Modify > Line Joint > Disable Limits > By Joint ID | `Line Joint - Disable Limits for Joint (<p0>)` |  | expression numérique « Joint ID » | — |  |
| 242 | 322 | Ray Cast > Do Single Shape Ray Cast | `Do Single Shape Ray Cast Between Points (<p0>,<p1>) and (<p2>,<p3>)` |  | expression numérique « Start X » ; expression numérique « Start Y » ; expression numérique « End X » ; expression numérique « End Y » | — |  |
| 243 | 323 | Ray Cast > Do Multi Shape Ray Cast | `Do Multi-Shape Ray Cast Between Points (<p0>,<p1>) and (<p2>,<p3>)` |  | expression numérique « Start X » ; expression numérique « Start Y » ; expression numérique « End X » ; expression numérique « End Y » ; expression numérique « Max Shapes » | — |  |
| 244 | 324 | Ray Cast > Filter > Set Target Collision Type | `Set Raycast Target Collision Type to (<p0>)` |  | expression numérique « Collision Type » | — |  |
| 245 | 325 | Ray Cast > Filter > Remove Target Collision Type | `Remove Raycast Target Collision Type` |  |  | — |  |
| 246 | 326 | Ray Cast > Filter > Set Target Mask Bits | `Set Raycast Mask Bits to (<p0>)` |  | expression numérique « Mask Bits » | — |  |
| 247 | 327 | Ray Cast > Filter > Remove Target Mask Bits | `Remove Raycast Mask` |  |  | — |  |
| 248 | 328 | Body > Creation > Set Automatic Mass Data | `Body - Set Automatic Mass Data` |  |  | — |  |
| 249 | 329 | Joint > Creation > Quick > Create Revolute Joint > Using Single Object | `Quick Add Revolute Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>)` |  | objet « Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » | — |  |
| 250 | 330 | Joint > Creation > Quick > Create Prismatic Joint > Using Single Object | `Quick Add Prismatic Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | objet « Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Translation Angle » | — |  |
| 251 | 331 | Joint > Creation > Quick > Create Distance Joint > Using Single Object | `Quick Add Distance Joint To Body (<p0>), First Anchor (<p1>,<p2>), is Local (<p3>), Second Anchor (<p4>,<p5>), is Local (<p6>)` |  | objet « Object » ; expression numérique « First Anchor X » ; expression numérique « First Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Second Anchor X » ; expression numérique « Second Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » | — |  |
| 252 | 332 | Joint > Creation > Quick > Create Line Joint > Using Single Object | `Quick Add Line Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | objet « Object » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Translation Angle » | — |  |
| 253 | 333 | Joint > Creation > Quick > Create Revolute Joint > Using single Body ID | `Quick Add Revolute Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>)` |  | expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » | — |  |
| 254 | 334 | Joint > Creation > Quick > Create Prismatic Joint > Using single Body ID | `Quick Add Prismatic Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Translation Angle » | — |  |
| 255 | 335 | Joint > Creation > Quick > Create Distance Joint > Using single Body ID | `Quick Add Distance Joint To Body (<p0>), First Anchor (<p1>,<p2>), is Local (<p3>), Second Anchor (<p4>,<p5>), is Local (<p6>)` |  | expression numérique « Body ID » ; expression numérique « First Anchor X » ; expression numérique « First Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Second Anchor X » ; expression numérique « Second Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » | — |  |
| 256 | 336 | Joint > Creation > Quick > Create Line Joint > Using Single Body ID | `Quick Add Line Joint To Body (<p0>), Anchor (<p1>,<p2>), is Local (<p3>), Angle (<p4>)` |  | expression numérique « Body ID » ; expression numérique « Anchor X » ; expression numérique « Anchor Y » ; expression numérique « 0: World Coordinate, 1: Local Coordinate » ; expression numérique « Translation Angle » | — |  |
| 257 | 337 | Shape > Creation > Create Shape > Create Shape Definition by Object | `Add Shape Definition (<p1>) to Body (<p0>)` |  | objet « Object » ; expression numérique « Shape Definition ID » | — |  |
| 258 | 338 | Shape > Creation > Create Shape > Create Shape Definition by Body ID | `Add Shape Definition (<p1>) to Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Shape Definition ID » | — |  |
| 259 | 339 | Shape > Creation > Create Shape > Add Object as Shape Definition to Body | `Add Object (<p0>) as Shape Definition (<p2>) to Body (<p1>)` |  | objet « Object » ; expression numérique « Body ID » ; expression numérique « Shape Definition ID » | — |  |
| 260 | 340 | Body > Creation > Create Body > Create Body from Definition at Object | `Create Body from Definition (<p0>) at (<p1>), offset (<p2>,<p3>), rotation (<p4>), destruction (<p5>)` |  | expression numérique « Definition ID » ; objet « Object » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Rotation (0: No Rotation, 1: Fast, 2: Quality » ; expression numérique « Link Destruction » | — |  |
| 261 | 341 | Body > Creation > Create Body > Create Body from Definition | `Create Body from Definition (<p0>) at (<p1>,<p2>) , angle (<p3>)` |  | expression numérique « Definition ID » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 262 | 342 | Joint > Creation > Create Joint > Create Joint from Definitioin at Body by Body ID | `Create Joint from Definition (<p0>) at Body (<p1>)` |  | expression numérique « Definition ID » ; expression numérique « Body ID » | — |  |
| 263 | 343 | Joint > Creation > Create Joint > Create Joint from Definitioin at Body by Object | `Create Joint from Definition (<p0>) at Body (<p1>)` |  | expression numérique « Definition ID » ; objet « Object » | — |  |
| 264 | 344 | Joint > Creation > Create Joint > Create Joint from Definitioin Between two Body ID's | `Create Joint from Definition (<p0>) Between Bodies (<p1>) ad (<p2>)` |  | expression numérique « Definition ID » ; expression numérique « First Body ID » ; expression numérique « Second Body ID » | — |  |
| 265 | 345 | Joint > Creation > Create Joint > Create Joint from Definitioin Between two Objects | `Create Joint from Definition (<p0>) Between Bodies (<p1>) and (<p2>)` |  | expression numérique « Definition ID » ; objet « First Object » ; objet « Second Object » | — |  |
| 266 | 346 | Joint > Creation > Create Joint > Create Joint from Definitioin Between Object and Body ID | `Create Joint from Definition (<p0>) Between Bodies (<p1>) and (<p2>), reverse (<p3>)` |  | expression numérique « Definition ID » ; objet « Object » ; expression numérique « Body ID » ; expression numérique « 1: Reverse Body Order » | — |  |
| 267 | 347 | Debug Draw > Set Flags > Draw Shapes | `Debug Draw - Draw Shapes (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 268 | 348 | Debug Draw > Set Flags > Draw Joints | `Debug Draw - Draw Joints (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 269 | 349 | Debug Draw > Set Flags > Draw Core Shapes | `Debug Draw - Draw Core Shapes (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 270 | 350 | Debug Draw > Set Flags > Draw Aligned Bounding Boxes | `Debug Draw - Draw Aligned Bounding Boxes (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 271 | 351 | Debug Draw > Set Flags > Draw Oriented Bounding Boxes | `Debug Draw - Draw Oriented Bounding Boxes (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 272 | 352 | Debug Draw > Set Flags > Draw Pairs | `Debug Draw - Draw Pairs (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 273 | 353 | Debug Draw > Set Flags > Draw Center of Mass | `Debug Draw - Draw Center of Mass (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 274 | 354 | Joint > Modify > Revolute Joint > Set Motor > By Object | `Revolute Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Torque (<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Torque » | — |  |
| 275 | 355 | Joint > Modify > Revolute Joint > Disable Motor > By Object | `Revolute Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 276 | 356 | Joint > Modify > Revolute Joint > Set Limits > By Object | `Revolute Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 277 | 357 | Joint > Modify > Revolute Joint > Disable Limits > By Object | `Revolute Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 278 | 358 | Joint > Modify > Prismatic Joint > Set Motor > By Object | `Prismatic Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 279 | 359 | Joint > Modify > Prismatic Joint > Disable Motor > By Object | `Prismatic Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 280 | 360 | Joint > Modify > Prismatic Joint > Set Limits > By Object | `Prismatic Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 281 | 361 | Joint > Modify > Prismatic Joint > Disable Limits > By Object | `Prismatic Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 282 | 362 | Joint > Modify > Line Joint > Set Motor > By Object | `Line Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 283 | 363 | Joint > Modify > Line Joint > Disable Motor > By Object | `Line Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 284 | 364 | Joint > Modify > Line Joint > Set Limits > By Object | `Line Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p1>,<p2>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 285 | 365 | Joint > Modify > Line Joint > Disable Limits > By Object | `Line Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |
| 286 | 366 | Joint > Modify > Mouse Joint > Set Target > By Object | `Set Target of Mouse Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | objet « Object » ; expression numérique « Joint Number » ; expression numérique « Target X » ; expression numérique « Target Y » | — |  |
| 287 | 367 | Joint > Modify > Revolute Joint > Set Motor > By Body ID | `Revolute Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Torque (<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Torque » | — |  |
| 288 | 368 | Joint > Modify > Revolute Joint > Disable Motor > By Body ID | `Revolute Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 289 | 369 | Joint > Modify > Revolute Joint > Set Limits > By Body ID | `Revolute Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 290 | 370 | Joint > Modify > Revolute Joint > Disable Limits > By Body ID | `Revolute Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 291 | 371 | Joint > Modify > Prismatic Joint > Set Motor > By Body ID | `Prismatic Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 292 | 372 | Joint > Modify > Prismatic Joint > Disable Motor > By Body ID | `Prismatic Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 293 | 373 | Joint > Modify > Prismatic Joint > Set Limits > By Body ID | `Prismatic Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 294 | 374 | Joint > Modify > Prismatic Joint > Disable Limits > By Body ID | `Prismatic Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 295 | 375 | Joint > Modify > Line Joint > Set Limits > By Body ID | `Line Joint - Set Motor of Joint (<p1>) of Body (<p0>) to Speed (<p2>), Force (<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Speed » ; expression numérique « Max Force » | — |  |
| 296 | 376 | Joint > Modify > Line Joint > Disable Limits > By Body ID | `Line Joint - Disable Motor for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 297 | 377 | Joint > Modify > Line Joint > Set Motor > By Body ID | `Line Joint - Set Limits of Joint (<p1>) of Body (<p0>) to (<p1>,<p2>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Lower Limit » ; expression numérique « Upper Limit » | — |  |
| 298 | 378 | Joint > Modify > Line Joint > Disable Motor > By Body ID | `Line Joint - Disable Limits for Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 299 | 379 | Joint > Modify > Mouse Joint > Set Target > By Body ID | `Set Target of Mouse Joint (<p1>) of Body (<p0>) to (<p2>,<p3>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » ; expression numérique « Target X » ; expression numérique « Target Y » | — |  |
| 300 | 380 | Test For Shapes > At Point | `Test For Shapes at Point (<p0>,<p1>)` |  | expression numérique « Point X » ; expression numérique « Point Y » | — |  |
| 301 | 381 | Test For Shapes > In Zone | `Test For Shapes in Zone (<p0>,<p1>) to (<p2>,<p3>)` |  | expression numérique « Min X » ; expression numérique « Min Y » ; expression numérique « Max X » ; expression numérique « Max Y » | — |  |
| 302 | 382 | Shape > Modify > Set Density > By Object | `Set Density of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Density » | — |  |
| 303 | 383 | Shape > Modify > Set Density > By Body ID | `Set Density of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « Density » | — |  |
| 304 | 384 | Collisions > On Collision Evaluation > Sensor Current Collision | `Sensor Current Collision` |  |  | — |  |
| 305 | 385 | Controller > Create Controller > Create Buoyancy Controller | `Create Buoyancy Controller, Angle (<p0>), Height (<p1>), Density (<p2>), Velocity (<p3>,<p4>), Linear Drag (<p5>), Angular Drag(<p6>)` |  | expression numérique « Surface Angle » ; expression numérique « Surface Height » ; expression numérique « Fluid Density » ; expression numérique « Fluid X Velocity » ; expression numérique « Fluid Y Velocity » ; expression numérique « Fluid Linear Drag » ; expression numérique « Fluid Angular Drag » | — |  |
| 306 | 386 | Controller > Add Body to Controller > By Object | `Add Body (<p0>) to Controller (<p1>)` |  | objet « Object » ; expression numérique « Controller ID » | — |  |
| 307 | 387 | Controller > Add Body to Controller > By Body ID | `Add Body (<p0>) to Controller (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Controller ID » | — |  |
| 308 | 388 | Controller > Remove Body from Controller > By Object | `Remove Body (<p0>) from Controller (<p1>)` |  | objet « Object » ; expression numérique « Controller ID » | — |  |
| 309 | 389 | Controller > Remove Body from Controller > By Body ID | `Remove Body (<p0>) from Controller (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Controller ID » | — |  |
| 310 | 390 | Controller > Clear Bodies for Controller | `Clear Bodies for Controller (<p0>)` |  | expression numérique « Controller ID » | — |  |
| 311 | 391 | Controller > Remove Controller | `Remove Controller (<p0>)` |  | expression numérique « Controller ID » | — |  |
| 312 | 392 | Shape > Modify > Set Sensor > By Body ID | `Set Sensor of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | expression numérique « Body ID » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « 0: is Solid, 1: is Sensor » | — |  |
| 313 | 393 | Shape > Modify > Set Sensor > By Object | `Set Sensor of Shape (<p1>) of Body (<p0>) to (<p2>)` |  | objet « Object » ; expression numérique « Shape ID (-1 = all) » ; expression numérique « 0: is Solid, 1: is Sensor » | — |  |
| 314 | 394 | Controller > Create Controller > Create Constant Force Controller | `Create Constant Force Controller, Force (<p0>,<p1>)` |  | expression numérique « X Force » ; expression numérique « Y Force » | — |  |
| 315 | 395 | Controller > Create Controller > Create Constant Acceleration Controller | `Create Constant Acceleration Controller, Force (<p0>,<p1>)` |  | expression numérique « X Force » ; expression numérique « Y Force » | — |  |
| 316 | 396 | Controller > Create Controller > Create Tensor Damping Controller | `Create Tensor Damping Controller, Model (<p0>,<p1>,<p2>,<p3>), Max Timestep (<p4>)` |  | expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » ; expression numérique « Max Timestep » | — |  |
| 317 | 397 | Controller > Create Controller > Create Gravity Controller | `Create Gravity Controller, Strength (<p0>), Inverse Square (<p1>), Max Force (<p2>)` |  | expression numérique « Gravity Strength » ; expression numérique « 1: gravity is proportional to r^-2, otherwise r^-1 » ; expression numérique « Max Force (0 = disable) » | — |  |
| 318 | 398 | World > Set World Boundaries (Reset needed) | `World - Set Boundaries to Min (<p0>,<p1>), Max (<p2>,<p3>)` |  | expression numérique « Boundary Min X » ; expression numérique « Boundary Min Y » ; expression numérique « Boundary Max X » ; expression numérique « Boundary Max Y » | — |  |
| 321 | 401 | Debug Draw > Set Flags > Draw Controllers | `Debug Draw - Draw Controllers (<p0>)` |  | expression numérique « 1: Draw, 0: Don't Draw » | — |  |
| 322 | 402 | Shape > Creation > Load Shape Data from String | `Load Shape Data from String (<p0>)` |  | expression chaîne « Shape String » | — |  |
| 323 | 403 | Shape > Creation > Definition > Set Shape Definition from String | `Set Shape Definition (<p0>) from String (<p1>)` |  | expression numérique « Shape Definition ID » ; expression chaîne « Shape String » | — |  |
| 324 | 404 | Body > Creation > Load Body Data from String | `Load Body Data from String (<p0>)` |  | expression chaîne « Body String » | — |  |
| 325 | 405 | Body > Creation > Definition > Set Body Definition from String | `Set Body Definition (<p0>) from String (<p1>)` |  | expression numérique « Body Definition ID » ; expression chaîne « Body String » | — |  |
| 326 | 406 | Body > Creation > Quick > Create Body at Object from String | `Quick Create Body from String (<p0>) at (<p1>), offset (<p2>,<p3>), rotation (<p4>), destruction (<p5>)` |  | expression chaîne « Body String » ; objet « Object » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Rotation (-1: Disable, 0: Not Object, 1: Fast, 2: Quality) » ; expression numérique « Link Destruction » | — |  |
| 327 | 407 | Body > Creation > Quick > Create Body from String | `Quick Create Body from String (<p0>) at (<p1>,<p2>), angle (<p3>)` |  | expression chaîne « Body String » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Angle » | — |  |
| 328 | 408 | Shape > Creation > Quick > Create from String > By Object | `Quick Add Shape to Body (<p0>) from String (<p1>)` |  | objet « Object » ; expression chaîne « Shape String » | — |  |
| 329 | 409 | Shape > Creation > Quick > Create from String > By Body ID | `Quick Add Shape to Body (<p0>) from String (<p1>)` |  | expression numérique « Body ID » ; expression chaîne « Shape String » | — |  |
| 330 | 410 | Body > Modify > Damping > Set Linear Damping > By Object | `Set Linear Damping of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Linear Damping » | — |  |
| 331 | 411 | Body > Modify > Damping > Set Linear Damping > By Body ID | `Set Linear Damping of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Linear Damping » | — |  |
| 332 | 412 | Body > Modify > Damping > Set Angular Damping > By Object | `Set Angular Damping of Body (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Angular Damping » | — |  |
| 333 | 413 | Body > Modify > Damping > Set Angular Damping > By Body ID | `Set Angular Damping of Body (<p0>) to (<p1>)` |  | expression numérique « Body ID » ; expression numérique « Angular Damping » | — |  |
| 334 | 414 | Controller > Modify Controller > Buoyancy Controller > Set Surface Angle | `Set Surface Angle of Buoyancy Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Surface Angle » | — |  |
| 335 | 415 | Controller > Modify Controller > Buoyancy Controller > Set Surface Height | `Set Surface Height of Buoyancy Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Surface Height » | — |  |
| 336 | 416 | Controller > Modify Controller > Buoyancy Controller > Set Fluid Density | `Set Fluid Density of Buoyancy Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Density » | — |  |
| 337 | 417 | Controller > Modify Controller > Buoyancy Controller > Set Fluid Velocity | `Set Fluid Velocity of Buoyancy Controller (<p0>) to (<p1>,<p2>)` |  | expression numérique « Controller ID » ; expression numérique « X Velocity » ; expression numérique « Y Velocity » | — |  |
| 338 | 418 | Controller > Modify Controller > Buoyancy Controller > Set Linear Drag | `Set Linear Drag of Buoyancy Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Linear Drag » | — |  |
| 339 | 419 | Controller > Modify Controller > Buoyancy Controller > Set Angular Drag | `Set Angular Drag of Buoyancy Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Angular Drag » | — |  |
| 340 | 420 | Controller > Modify Controller > Constant Acceleration Controller > Set Acceleration | `Set Acceleration of Constant Acceleration Controller (<p0>) to (<p1>,<p2>)` |  | expression numérique « Controller ID » ; expression numérique « X Acceleration » ; expression numérique « Y Acceleration » | — |  |
| 341 | 421 | Controller > Modify Controller > Constant Force Controller > Set Force | `Set Force of Constant Force Controller (<p0>) to (<p1>,<p2>)` |  | expression numérique « Controller ID » ; expression numérique « X Force » ; expression numérique « Y Force » | — |  |
| 342 | 422 | Controller > Modify Controller > Gravity Controller > Set Gravity Strength | `Set Gravity of Gravity Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Gravity Strength » (paramètres non fiables) | — |  |
| 343 | 423 | Controller > Modify Controller > Gravity Controller > Set Max Force | `Set Max Force of Gravity Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Max Force » | — |  |
| 344 | 424 | Controller > Modify Controller > Tensor Damping Controller > Set Max Timestep | `Set Max Timestep of Tensor Damping Controller (<p0>) to (<p1>)` |  | expression numérique « Controller ID » ; expression numérique « Max Timestep » | — |  |
| 345 | 425 | Controller > Modify Controller > Tensor Damping Controller > Set Tensor Model | `Set Model of Tensor Damping Controller (<p0>) to (<p1>,<p2>,<p3>,<p4>)` |  | expression numérique « Controller ID » ; expression numérique « X1 » ; expression numérique « Y1 » ; expression numérique « X2 » ; expression numérique « Y2 » | — |  |
| 346 | 426 | Attached Objects > Modify Attachment > Set Offset | `Set Offset of Attachment for (<p0>) to (<p1>,<p2>), (<p3>)` |  | objet « Object » ; expression numérique « X Offset » ; expression numérique « Y Offset » ; expression numérique « Angle Offset » | — |  |
| 347 | 427 | Attached Objects > Modify Attachment > Set Rotation | `Set Rotation of Attachment for (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Rotation (0: None, 1: Fast, 2: Quality) » | — |  |
| 348 | 428 | Attached Objects > Modify Attachment > Set Killflag | `Set Killflag of Attachment for (<p0>) to (<p1>)` |  | objet « Object » ; expression numérique « Link Destruction » | — |  |
| 349 | 429 | Enumeration > Enumerate Bodies | `Enumerate Bodies` |  |  | — |  |
| 350 | 430 | Enumeration > Enumerate Shapes | `Enumerate Shapes` |  |  | — |  |
| 351 | 431 | Enumeration > Enumerate Joints | `Enumerate Joints` |  |  | — |  |
| 353 | 433 | Enumeration > Enumerate All | `Enumerate All` |  |  | — |  |
| 354 | 434 | Joint > Creation > Remove Joint > By Body ID | `Remove Joint (<p1>) of Body (<p0>)` |  | expression numérique « Body ID » ; expression numérique « Joint Number » | — |  |
| 355 | 435 | Joint > Creation > Remove Joint > By Object | `Remove Joint (<p1>) of Body (<p0>)` |  | objet « Object » ; expression numérique « Joint Number » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Body > Get ID of Last Created Body | `LastBodyID(` |  |  | — |  |
| 1 | 81 | Body > Get Y Velocity | `BodyVelocityY(` |  | nombre « Body ID » | — |  |
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
| 25 | 105 | Body > Get X Velocity | `BodyVelocityX(` |  | nombre « Body ID » | — |  |
| 26 | 106 | Body > Get Angular Velocity | `BodyAngularVelocity(` |  | nombre « Body ID » | — |  |
| 27 | 107 | On Event > Get Event Body ID | `EventBodyID(` |  |  | — |  |
| 28 | 108 | On Event > Get Event Joint ID | `EventJointID(` |  |  | — |  |
| 29 | 109 | Body > Get Body ID from Object | `BodyFixedID(` |  | nombre « Fixed Value of Object » | — |  |
| 30 | 110 | Body > Get Body ID from Index | `BodyIndexID(` |  | nombre « Index » | — |  |
| 31 | 111 | On Collision > Get First Body ID | `CollBody1(` |  |  | — |  |
| 32 | 112 | On Collision > Get Second Body ID | `CollBody2(` |  |  | — |  |
| 33 | 113 | On Collision > Get First Shape ID | `CollShape1(` |  |  | — |  |
| 34 | 114 | On Collision > Get Second Shape ID | `CollShape2(` |  |  | — |  |
| 35 | 115 | On Collision > Contact Response > Get Collision Angle | `CollAngle(` |  |  | — |  |
| 36 | 116 | On Collision > Contact Response > Get Normal Impulse | `CollNormalImpulse(` |  |  | — |  |
| 37 | 117 | On Collision > Contact Response > Get Tangent Impulse | `CollTangentImpulse(` |  |  | — |  |
| 38 | 118 | On Collision > Contact Response > Get Contact Point X | `CollPointX(` |  |  | — |  |
| 39 | 119 | On Collision > Contact Response > Get Contact Point Y | `CollPointY(` |  |  | — |  |
| 40 | 120 | Joint > Get Joint ID from Index | `JointIndexID(` |  | nombre « Index » | — |  |
| 41 | 121 | Body > Conversions > Local Point to World X | `LocalToWorldX(` |  | nombre « Body ID » ; nombre « X » ; nombre « Y » | — |  |
| 42 | 122 | Body > Conversions > Local Point to World Y | `LocalToWorldY(` |  | nombre « Body ID » ; nombre « X » ; nombre « Y » | — |  |
| 43 | 123 | Body > Conversions > World Point to Local X | `WorldToLocalX(` |  | nombre « Body ID » ; nombre « X » ; nombre « Y » | — |  |
| 44 | 124 | Body > Conversions > World Point to Local Y | `WorldToLocalY(` |  | nombre « Body ID » ; nombre « X » ; nombre « Y » | — |  |
| 45 | 125 | Body > Conversions > Last Conversion X | `LastConvX(` |  |  | — |  |
| 46 | 126 | Body > Conversions > Last Conversion Y | `LastConvY(` |  |  | — |  |
| 47 | 127 | Body > Get X Position | `BodyX(` |  | nombre « Body ID » | — |  |
| 48 | 128 | Body > Get Y Position | `BodyY(` |  | nombre « Body ID » | — |  |
| 49 | 129 | Body > Get Angle | `BodyAngle(` |  | nombre « Body ID » | — |  |
| 50 | 130 | Body > Get Mass | `BodyMass(` |  | nombre « Body ID » | — |  |
| 51 | 131 | Body > Get Inertia | `BodyInertia(` |  | nombre « Body ID » | — |  |
| 52 | 132 | Body > Get CoM X | `BodyCoMX(` |  | nombre « Body ID » | — |  |
| 53 | 133 | Body > Get CoM Y | `BodyCoMY(` |  | nombre « Body ID » | — |  |
| 54 | 134 | Body > Shapes > Get Number of Shapes | `BodyNumShapes(` |  | nombre « Body ID » | — |  |
| 55 | 135 | Body > Joints > Get Number of Attached Joints | `BodyNumJoints(` |  | nombre « Body ID » | — |  |
| 56 | 136 | Body > Joints > Get Joint ID | `BodyJointID(` |  | nombre « Body ID » ; nombre « Joint Number » | — |  |
| 57 | 137 | Ray Cast > Get Number of Hits | `RayNumHits(` |  |  | — |  |
| 58 | 138 | Ray Cast > Get Body ID | `RayBodyID(` |  | nombre « Hit Number » | — |  |
| 59 | 139 | Ray Cast > Get Shape ID | `RayShapeID(` |  | nombre « Hit Number » | — |  |
| 60 | 140 | Ray Cast > Get Target X | `RayPointX(` |  |  | — |  |
| 61 | 141 | Ray Cast > Get Target Y | `RayPointY(` |  |  | — |  |
| 62 | 142 | Ray Cast > Get Hit Angle | `RayPointAngle(` |  |  | — |  |
| 63 | 143 | Body > Shapes > Get Type | `ShapeType(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 64 | 144 | Body > Shapes > Get Friction | `ShapeFriction(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 65 | 145 | Body > Shapes > Get Elasticity | `ShapeElasticity(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 66 | 146 | Body > Shapes > Get Density | `ShapeDensity(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 67 | 147 | Body > Shapes > Get Collision Type | `ShapeCollType(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 68 | 148 | Body > Shapes > Get Group Index | `ShapeGroupIndex(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 69 | 149 | Body > Shapes > Get Category Bits | `ShapeCategory(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 70 | 150 | Body > Shapes > Get Mask Bits | `ShapeMask(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 71 | 151 | Body > Shapes > Polygon Shape > Get Number of Vertices | `PolygonShapeNumVerts(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 72 | 152 | Body > Shapes > Polygon Shape > Get Vertex X | `PolygonShapeVertexX(` |  | nombre « Body ID » ; nombre « Shape Number » ; nombre « Vertex Number » | — |  |
| 73 | 153 | Body > Shapes > Polygon Shape > Get Vertex Y | `PolygonShapeVertexY(` |  | nombre « Body ID » ; nombre « Shape Number » ; nombre « Vertex Number » | — |  |
| 74 | 154 | Body > Shapes > Polygon Shape > Get Centroid X | `PolygonShapeCentroidX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 75 | 155 | Body > Shapes > Polygon Shape > Get Centroid Y | `PolygonShapeCentroidY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 76 | 156 | Joint > Get First Body ID | `JointBody1(` |  | nombre « Joint ID » | — |  |
| 77 | 157 | Joint > Get Second Body ID | `JointBody2(` |  | nombre « Joint ID » | — |  |
| 78 | 158 | Joint > Get Type | `JointType(` |  | nombre « Joint ID » | — |  |
| 79 | 159 | Joint > Get First Anchor X | `JointAnchor1X(` |  | nombre « Joint ID » | — |  |
| 80 | 160 | Joint > Get First Anchor Y | `JointAnchor1Y(` |  | nombre « Joint ID » | — |  |
| 81 | 161 | Joint > Get Second Anchor X | `JointAnchor2X(` |  | nombre « Joint ID » | — |  |
| 82 | 162 | Joint > Get Second Anchor Y | `JointAnchor2Y(` |  | nombre « Joint ID » | — |  |
| 83 | 163 | Joint > Get Reaction Force | `JointReactionForce(` |  | nombre « Joint ID » | — |  |
| 84 | 164 | Joint > Get Reaction X Force | `JointReactionForceX(` |  | nombre « Joint ID » | — |  |
| 85 | 165 | Joint > Get Reaction Y Force | `JointReactionForceY(` |  | nombre « Joint ID » | — |  |
| 86 | 166 | Joint > Get Reaction Torque | `JointReactionTorque(` |  | nombre « Joint ID » | — |  |
| 87 | 167 | Joint > Revolute Joint > Get Angle | `RevoluteJointAngle(` |  | nombre « Joint ID » | — |  |
| 88 | 168 | Joint > Revolute Joint > Get Speed | `RevoluteJointSpeed(` |  | nombre « Joint ID » | — |  |
| 89 | 169 | Joint > Revolute Joint > Get Upper Limit | `RevoluteJointUpperLimit(` |  | nombre « Joint ID » | — |  |
| 90 | 170 | Joint > Revolute Joint > Get Lower Limit | `RevoluteJointLowerLimit(` |  | nombre « Joint ID » | — |  |
| 91 | 171 | Joint > Revolute Joint > Get Motor Speed | `RevoluteJointMotorSpeed(` |  | nombre « Joint ID » | — |  |
| 92 | 172 | Joint > Revolute Joint > Get Motor Torque | `RevoluteJointMotorTorque(` |  | nombre « Joint ID » | — |  |
| 93 | 173 | Joint > Prismatic Joint > Get Translation | `PrismaticJointTranslation(` |  | nombre « Joint ID » | — |  |
| 94 | 174 | Joint > Prismatic Joint > Get Speed | `PrismaticJointSpeed(` |  | nombre « Joint ID » | — |  |
| 95 | 175 | Joint > Prismatic Joint > Get Upper Limit | `PrismaticJointUpperLimit(` |  | nombre « Joint ID » | — |  |
| 96 | 176 | Joint > Prismatic Joint > Get Lower Limit | `PrismaticJointLowerLimit(` |  | nombre « Joint ID » | — |  |
| 97 | 177 | Joint > Prismatic Joint > Get Motor Speed | `PrismaticJointMotorSpeed(` |  | nombre « Joint ID » | — |  |
| 98 | 178 | Joint > Prismatic Joint > Get Motor Force | `PrismaticJointMotorForce(` |  | nombre « Joint ID » | — |  |
| 99 | 179 | Joint > Pulley Joint > Get First Ground Anchor X | `PulleyJointGround1X(` |  | nombre « Joint ID » | — |  |
| 100 | 180 | Joint > Pulley Joint > Get First Ground Anchor Y | `PulleyJointGround1Y(` |  | nombre « Joint ID » | — |  |
| 101 | 181 | Joint > Pulley Joint > Get Second Ground Anchor X | `PulleyJointGround2X(` |  | nombre « Joint ID » | — |  |
| 102 | 182 | Joint > Pulley Joint > Get Second Ground Anchor Y | `PulleyJointGround2Y(` |  | nombre « Joint ID » | — |  |
| 103 | 183 | Joint > Pulley Joint > Get First Length | `PulleyJointLength1(` |  | nombre « Joint ID » | — |  |
| 104 | 184 | Joint > Pulley Joint > Get Second Length | `PulleyJointLength2(` |  | nombre « Joint ID » | — |  |
| 105 | 185 | Joint > Pulley Joint > Get Ratio | `PulleyJointRatio(` |  | nombre « Joint ID » | — |  |
| 106 | 186 | Joint > Gear Joint > Get Ratio | `GearJointRatio(` |  | nombre « Joint ID » | — |  |
| 107 | 187 | Joint > Line Joint > Get Translation | `LineJointTranslation(` |  | nombre « Joint ID » | — |  |
| 108 | 188 | Joint > Line Joint > Get Speed | `LineJointSpeed(` |  | nombre « Joint ID » | — |  |
| 109 | 189 | Joint > Line Joint > Get Upper Limit | `LineJointUpperLimit(` |  | nombre « Joint ID » | — |  |
| 110 | 190 | Joint > Line Joint > Get Lower Limit | `LineJointLowerLimit(` |  | nombre « Joint ID » | — |  |
| 111 | 191 | Joint > Line Joint > Get Motor Speed | `LineJointMotorSpeed(` |  | nombre « Joint ID » | — |  |
| 112 | 192 | Joint > Line Joint > Get Motor Force | `LineJointMotorForce(` |  | nombre « Joint ID » | — |  |
| 113 | 193 | Body > Shapes > Circle Shape > Get Radius | `CircleShapeRadius(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 114 | 194 | Body > Shapes > Circle Shape > Get Center X | `CircleShapeCenterX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 115 | 195 | Body > Shapes > Circle Shape > Get Center Y | `CircleShapeCenterY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 116 | 196 | Body > Shapes > Edge > Get First Vertex X | `EdgeFirstX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 117 | 197 | Body > Shapes > Edge > Get First Vertex Y | `EdgeFirstY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 118 | 198 | Body > Shapes > Edge > Get Second Vertex X | `EdgeSecondX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 119 | 199 | Body > Shapes > Edge > Get Second Vertex Y | `EdgeSecondY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 120 | 200 | On Event > Get Event Shape ID | `EventShapeID(` |  |  | — |  |
| 121 | 201 | On Collision > Get First Collision Type | `CollType1(` |  |  | — |  |
| 122 | 202 | On Collision > Get Second Collision Type | `CollType2(` |  |  | — |  |
| 123 | 203 | Body > Shapes > Bounding Box > Get Min X | `ShapeBBMinX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 124 | 204 | Body > Shapes > Bounding Box > Get Min Y | `ShapeBBMinY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 125 | 205 | Body > Shapes > Bounding Box > Get Max X | `ShapeBBMaxX(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 126 | 206 | Body > Shapes > Bounding Box > Get Max Y | `ShapeBBMaxY(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 127 | 207 | Controller > Get ID of Last Created Controller | `LastControllerID(` |  |  | — |  |
| 128 | 208 | Body > Shapes > Get Sensor | `ShapeSensor(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 129 | 209 | Controller > Get Number of Controllers | `NumControllers(` |  |  | — |  |
| 130 | 210 | Controller > Get Controller ID from Index | `ControllerIndexID(` |  | nombre « Index » | — |  |
| 131 | 211 | Controller > Get Number of Bodies | `ControllerNumBodies(` |  | nombre « Controller ID » | — |  |
| 132 | 212 | Controller > Get Body ID | `ControllerBodyID(` |  | nombre « Controller ID » | — |  |
| 133 | 213 | On Collision > Contact Point > Get Collision Velocity X | `CollVelocityX(` |  |  | — |  |
| 134 | 214 | On Collision > Contact Point > Get Collision Velocity Y | `CollVelocityY(` |  |  | — |  |
| 135 | 215 | On Collision > Contact Point > Get Collision Friction | `CollFriction(` |  |  | — |  |
| 136 | 216 | On Collision > Contact Point > Get Collision Elasticity | `CollElasticity(` |  |  | — |  |
| 137 | 217 | On Collision > Contact Point > Get Collision Separation | `CollSeparation(` |  |  | — |  |
| 138 | 218 | Body > Shapes > Polygon Shape > Get Vertex Angle | `PolygonShapeVertexAngle(` |  | nombre « Body ID » ; nombre « Shape Number » ; nombre « Vertex Number » | — |  |
| 139 | 219 | Body > Shapes > Edge > Get First Vertex Angle | `EdgeFirstAngle(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 140 | 220 | Body > Shapes > Edge > Get Second Vertex Angle | `EdgeSecondAngle(` |  | nombre « Body ID » ; nombre « Shape Number » | — |  |
| 141 | 221 | On Enumeration > Get Body ID | `EnumBodyID(` |  |  | — |  |
| 142 | 222 | On Enumeration > Get Shape ID | `EnumShapeID(` |  |  | — |  |
| 143 | 223 | On Enumeration > Get Joint ID | `EnumJointID(` |  |  | — |  |
| 144 | 224 | Body > Get X Velocity At World Point | `BodyVelocityAtWorldPointX(` |  | nombre « Body ID » ; nombre « X Coordinate » ; nombre « Y Coordinate » | — |  |
| 145 | 225 | Body > Get Y Velocity At World Point | `BodyVelocityAtWorldPointY(` |  | nombre « Body ID » ; nombre « X Coordinate » ; nombre « Y Coordinate » | — |  |
| 146 | 226 | Body > Get X Velocity At Local Point | `BodyVelocityAtLocalPointX(` |  | nombre « Body ID » ; nombre « X Coordinate » ; nombre « Y Coordinate » | — |  |
| 147 | 227 | Body > Get Y Velocity At Local Point | `BodyVelocityAtLocalPointY(` |  | nombre « Body ID » ; nombre « X Coordinate » ; nombre « Y Coordinate » | — |  |
