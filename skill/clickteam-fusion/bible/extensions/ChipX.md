# Extension ChipX

- File: `ChipX.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Body in Layer | `<object> Body <p0> is in Layer <p1>` |  | numeric expression “Body ID”; numeric expression “Layer (0-31)” |
| 1 | -82 | On Collision | `<object> On Collision` |  |  |
| 2 | -83 | On Collision - 1 Type | `<object> On Collision (<p0>)` |  | numeric expression “Collision Type” |
| 3 | -84 | On Collision - 2 Types | `<object> On Collision (<p0>, <p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | World > Reset World | `World - Reset` |  |  |
| 1 | 81 | World > Set Gravity | `World - Set Gravity (<p0>, <p1>)` |  | numeric expression “Gravity X (default 0.0)”; numeric expression “Gravity Y (default 100.0)” |
| 2 | 82 | World > Resize Static Hash | `World - Resize Static Hash (<p0>, <p1>)` |  | numeric expression “Estimated average size of all objects (Default 50.0)”; numeric expression “Estimated number of objects * 10 (Default 1000)” |
| 3 | 83 | World > Resize Active Hash | `World - Resize Active Hash (<p0>, <p1>)` |  | numeric expression “Estimated average size of all objects (Default 50.0)”; numeric expression “Estimated number of objects * 10 (Default 1000)” |
| 4 | 84 | World > Set Timestep | `World - Set Timestep (<p0>)` |  | numeric expression “Timestep (1.0/FPS - Default 0.02)” |
| 5 | 85 | World > Update | `World - Update` |  |  |
| 6 | 86 | Body > Create > Add Body | `Body - Create - Position (<p0>, <p1>) - Mass (<p2>)` |  | numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Mass” |
| 7 | 87 | Body > Create > Add Rectangle | `Body <p0> - Add Rectangle - Position (<p1>, <p2>) - Size (<p3>, <p4>) - Angle (<p5>) - Friction (<p6>) - Elasticity (<p7>)` |  | numeric expression “Body ID”; numeric expression “Relative X Positon”; numeric expression “Relative Y Positon”; numeric expression “Width”; numeric expression “Height”; numeric expression “Angle”; numeric expression “Friction (Default 1.0)”; numeric expression “Elasticity (Default 0.0)” |
| 8 | 88 | Body > Create > Add Line Segment | `Body <p0> - Add Line Segment - Position (<p1>, <p2> - <p3>, <p4>) - Thickness (<p5>) - Friction (<p6>) - Elasticity (<p7>)` |  | numeric expression “Body ID”; numeric expression “First Relative X Positon”; numeric expression “First Relative Y Positon”; numeric expression “Second Relative X Positon”; numeric expression “Second Relative Y Positon”; numeric expression “Thickness”; numeric expression “Friction (Default 1.0)”; numeric expression “Elasticity (Default 0.0)” |
| 9 | 89 | Body > Create > Add Circle | `Body <p0> - Add Circle - Position (<p1>, <p2>) - Diameter (<p3>) - Friction (<p4>) - Elasticity (<p5>)` |  | numeric expression “Body ID”; numeric expression “Relative X Positon”; numeric expression “Relative Y Positon”; numeric expression “Diameter”; numeric expression “Friction (Default 1.0)”; numeric expression “Elasticity (Default 0.0)” |
| 10 | 90 | Body > Create > Add Poly | `Body <p0> - Add Polygon - Position (<p1>, <p2>) - Edges (<p3>) - Diameter (<p4>) - Friction (<p5>) - Elasticity (<p6>)` |  | numeric expression “Body ID”; numeric expression “Relative X Positon”; numeric expression “Relative Y Positon”; numeric expression “Edges”; numeric expression “Diameter”; numeric expression “Friction (Default 1.0)”; numeric expression “Elasticity (Default 0.0)” |
| 11 | 91 | Body > Create > Add Custom Shape > Begin Custom Shape | `Body <p0> - Custom Begin - Position (<p1>, <p2>) - Friction (<p3>) - Elasticity (<p4>)` |  | numeric expression “Body ID”; numeric expression “Relative X Positon”; numeric expression “Relative Y Positon”; numeric expression “Friction (Default 1.0)”; numeric expression “Elasticity (Default 0.0)” |
| 12 | 92 | Body > Create > Add Custom Shape > End Custom Shape | `Body - Custom End` |  |  |
| 13 | 93 | Body > Create > Add Custom Shape > Add Vertex | `Body - Custom Add Vertex - Position(<p0>, <p1>)` |  | numeric expression “Relative X Positon”; numeric expression “Relative Y Positon” |
| 14 | 94 | Body > Remove Body | `Body <p0> - Remove` |  | numeric expression “Body ID” |
| 15 | 95 | Body > Modify > Apply Torque | `Body <p0> - Apply Torque (<p1>)` |  | numeric expression “Body ID”; numeric expression “Torque” |
| 16 | 96 | Body > Modify > Set X Position | `Body <p0> - Set X Position (<p1>)` |  | numeric expression “Body ID”; numeric expression “X Position” |
| 17 | 97 | Body > Modify > Set Y Position | `Body <p0> - Set Y Position (<p1>)` |  | numeric expression “Body ID”; numeric expression “Y Position” |
| 18 | 98 | Body > Modify > Set Angle | `Body <p0> - Set Angle (<p1>)` |  | numeric expression “Body ID”; numeric expression “Angle” |
| 19 | 99 | Body > Modify > Set Angular Velocity | `Body <p0> - Set Angular Velocity (<p1>)` |  | numeric expression “Body ID”; numeric expression “Angular Velocity” |
| 20 | 100 | Body > Modify > Apply Force | `Body <p0> - Apply Force (<p1>, <p2>) - Offset (<p3>, <p4>)` |  | numeric expression “Body ID”; numeric expression “X Force”; numeric expression “Y Force”; numeric expression “X Offset”; numeric expression “Y Offset” |
| 21 | 101 | Body > Modify > Set X Velocity | `Body <p0> - Set X Velocity (<p1>)` |  | numeric expression “Body ID”; numeric expression “X Velocity” |
| 22 | 102 | Body > Modify > Set Y Velocity | `Body <p0> - Set Y Velocity (<p1>)` |  | numeric expression “Body ID”; numeric expression “Y Velocity” |
| 23 | 103 | Joint > Add Pin Joint | `Joint - Add Pin Joint - Body (<p0>) at (<p2>, <p3>) - Body (<p1>) at (<p4>, <p5>)` |  | numeric expression “ID of First Body”; numeric expression “ID of Second Body”; numeric expression “X Position of First Anchor (in Relative Coordinates)”; numeric expression “Y Position of First Anchor (in Relative Coordinates)”; numeric expression “X Position of Second Anchor (in Relative Coordinates)”; numeric expression “Y Position of Second Anchor (in Relative Coordinates)” |
| 24 | 104 | Joint > Add Pivot Joint | `Joint - Add Pivot Joint - Bodies (<p0>, <p1>) - Anchor (<p2>, <p3>)` |  | numeric expression “ID of First Body”; numeric expression “ID of Second Body”; numeric expression “X Position of Anchor (in Global Coordinates)”; numeric expression “Y Position of Anchor (in Global Coordinates)” |
| 25 | 105 | Joint > Add Slider Joint | `Joint - Add Slider Joint - Body (<p0>) at (<p2>, <p3>) - Body (<p1>) at (<p4>, <p5>) - Limits (<p6>, <p7>)` |  | numeric expression “ID of First Body”; numeric expression “ID of Second Body”; numeric expression “X Position of First Anchor (in Relative Coordinates)”; numeric expression “Y Position of First Anchor (in Relative Coordinates)”; numeric expression “X Position of Second Anchor (in Relative Coordinates)”; numeric expression “Y Position of Second Anchor (in Relative Coordinates)”; numeric expression “Joint Min Limit”; numeric expression “Joint Max Limit” |
| 26 | 106 | Joint > Remove Joint | `Joint <p0> - Remove` |  | numeric expression “Joint ID” |
| 27 | 107 | Body > Layer > Add Body to Layer | `Body <p0> - Add to Layer (<p1>)` |  | numeric expression “Body ID”; numeric expression “Layer (0-31)” |
| 28 | 108 | Body > Layer > Remove Body from Layer | `Body <p0> - Remove from Layer (<p1>)` |  | numeric expression “Body ID”; numeric expression “Layer (0-31)” |
| 29 | 109 | Body > Layer > Set Body Layer Value (Advanced) | `Body <p0> - Set Layers (<p1>)` |  | numeric expression “Body ID”; numeric expression “Layer Value (Binary Representation of Layers)” |
| 30 | 110 | Body > Set Collision Type | `Body <p0> - Set Collision Type (<p1>)` |  | numeric expression “Body ID”; numeric expression “Collision Type” |
| 31 | 111 | Collision > Register Collision | `Register Collision - Types (<p0>, <p1>) - Method (<p2>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type”; numeric expression “Method (0: No Collision, 1: Enable Testing)” |
| 32 | 112 | Collision > Unregister Collision | `Unregister Collision - Types (<p0>, <p1>)` |  | numeric expression “First Collision Type”; numeric expression “Second Collision Type” |
| 33 | 113 | Collision > Set Threshold | `Set Collision Threshold (<p0>)` |  | numeric expression “Threshold (Minimum Impact Force for Collision to Trigger)” |
| 34 | 114 | Joint > Add Damped Spring Joint | `Joint - Add Damped Spring Joint - Body (<p0>) at (<p2>, <p3>) - Body (<p1>) at (<p4>, <p5>) - Rest Length (<p6>) - Spring Constant (<p7>) - Damping Constant (<p8>)` |  | numeric expression “ID of First Body”; numeric expression “ID of Second Body”; numeric expression “X Position of First Anchor (in Relative Coordinates)”; numeric expression “Y Position of First Anchor (in Relative Coordinates)”; numeric expression “X Position of Second Anchor (in Relative Coordinates)”; numeric expression “Y Position of Second Anchor (in Relative Coordinates)”; numeric expression “Rest Length”; numeric expression “Spring Constant (Force/Distance)”; numeric expression “Damping Constant” |
| 35 | 115 | Body > Modify > Set Surface Velocity | `Body <p0> - Set Surface Velocity - Angle (<p1>) - Velocity (<p2>)` |  | numeric expression “Body ID”; numeric expression “Angle”; numeric expression “Velocity” |
| 36 | 116 | Active Object > Attach Active Object to Body | `Attach <p0> to Body (<p1>) - Kill (<p2>) - Rotation (<p3>)` |  | object “Attach Active Object to Body”; numeric expression “Body ID”; numeric expression “Destroy Active when Body is Removed? (1=true, 0=false)”; numeric expression “Rotation (-1=No Rotation, 0=Maximum Speed, 1=Maximum Quality)” |
| 37 | 117 | Active Object > Detach Active Object | `Detach <p0>` |  | object “Detach Active Object” |
| 38 | 118 | Body > Modify > Shapes > Set Surface Velocity | `Body <p0> - Shape <p1> - Set Surface Velocity - Angle (<p3>) - Force (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Angle”; numeric expression “Velocity” |
| 39 | 119 | Body > Modify > Shapes > Set Friction | `Body <p0> - Shape <p1> - Set Friction (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Friction (Default 1.0)” |
| 40 | 120 | Body > Modify > Shapes > Set Elasticity | `Body <p0> - Shape <p1> - Set Elasticity (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Elasticity (Default 0.0)” |
| 41 | 121 | Body > Modify > Shapes > Remove All Shapes | `Body <p0> - Remove All Shapes` |  | numeric expression “Body ID” |
| 42 | 122 | Body > Modify > Shapes > Remove Shape | `Body <p0> - Remove Shape <p1>` |  | numeric expression “Body ID”; numeric expression “Shape ID” |
| 43 | 123 | Body > Modify > Set Mass | `Body <p0> - Set Mass (<p1>)` |  | numeric expression “Body ID”; numeric expression “Mass” |
| 44 | 124 | Body > Modify > Shapes > Remove All Shapes in Zone | `Body <p0> - Remove All Shapes in Zone (<p1>, <p2> - <p3>, <p4>)` |  | numeric expression “Body ID”; numeric expression “X - Left”; numeric expression “Y - Top”; numeric expression “X - Right”; numeric expression “Y - Bottom” |
| 45 | 125 | Body > Modify > Add Dampening | `Body <p0> - Add Dampening (<p1>, <p2>)` |  | numeric expression “Body ID”; numeric expression “X Dampen Value”; numeric expression “Y Dampen Value” |
| 46 | 126 | Body > Modify > Remove Dampening | `Body <p0> - Remove Dampening` |  | numeric expression “Body ID” |
| 47 | 127 | Body > Modify > Shapes > Add Shape to Layer | `Body <p0> - Shape <p1> - Add to Layer (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Layer (0-31)” |
| 48 | 128 | Body > Modify > Shapes > Remove Shape from Layer | `Body <p0> - Shape <p1> - Remove From Layer (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Layer (0-31)” |
| 49 | 129 | Body > Modify > Shapes > Set Shape Layer Value (Advanced) | `Body <p0> - Shape <p1> - Set Layers (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Layer Value (Binary Representation of Layers)” |
| 50 | 130 | Body > Modify > Shapes > Set Collision Type | `Body <p0> - Shape <p1> - Set Collision Type (<p2>)` |  | numeric expression “Body ID”; numeric expression “Shape ID”; numeric expression “Collision Type” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | World > Get Gravity X | `WorldGravityX(` |  |  |
| 1 | 81 | World > Get Gravity Y | `WorldGravityY(` |  |  |
| 2 | 82 | Body > Get ID of Last Added Body | `BodyLastID(` |  |  |
| 3 | 83 | Body > Get X Position | `BodyX(` |  | number “Body ID” |
| 4 | 84 | Body > Get Y Position | `BodyY(` |  | number “Body ID” |
| 5 | 85 | Body > Get Angle | `BodyAngle(` |  | number “Body ID” |
| 6 | 86 | Body > Get Angular Velocity | `BodyAngularVelocity(` |  | number “Body ID” |
| 7 | 87 | Body > Get X Velocity | `BodyXVelocity(` |  | number “Body ID” |
| 8 | 88 | Body > Get Y Velocity | `BodyYVelocity(` |  | number “Body ID” |
| 9 | 89 | Joint > Get ID of Last Added Joint | `JointLastID(` |  |  |
| 10 | 90 | Joint > Get ID of First Body | `JointFirstBodyID(` |  | number “Joint ID” |
| 11 | 91 | Joint > Get ID of Second Body | `JointSecondBodyID(` |  | number “Joint ID” |
| 12 | 92 | Joint > Get X of First Anchor | `JointFirstAnchorX(` |  | number “Joint ID” |
| 13 | 93 | Joint > Get Y of First Anchor | `JointFirstAnchorY(` |  | number “Joint ID” |
| 14 | 94 | Joint > Get X of Second Anchor | `JointSecondAnchorX(` |  | number “Joint ID” |
| 15 | 95 | Joint > Get Y of Second Anchor | `JointSecondAnchorY(` |  | number “Joint ID” |
| 16 | 96 | Body > Get Layer Value | `BodyLayers(` |  | number “Body ID” |
| 17 | 97 | Body > Get Collision Type | `BodyCollType(` |  | number “Body ID” |
| 18 | 98 | On Collision > Get Type of First Body | `CollisionType1(` |  |  |
| 19 | 99 | On Collision > Get Type of Second Body | `CollisionType2(` |  |  |
| 20 | 100 | On Collision > Get ID of First Body | `CollisionBody1(` |  |  |
| 21 | 101 | On Collision > Get ID of Second Body | `CollisionBody2(` |  |  |
| 22 | 102 | On Collision > Get Impact Force | `CollisionImpact(` |  |  |
| 23 | 103 | On Collision > Get Impact Angle | `CollisionImpactAngle(` |  |  |
| 24 | 104 | Collision > Get Threshold | `CollisionThreshold(` |  |  |
| 25 | 105 | Body > Shapes > Get Number of Shapes in Body | `BodyNumShapes(` |  | number “Body ID” |
| 26 | 106 | Body > Shapes > Get Shape Type | `ShapeType(` |  | number “Body ID”; number “Shape ID” |
| 27 | 107 | Body > Shapes > Get X Position | `ShapeX(` |  | number “Body ID”; number “Shape ID” |
| 28 | 108 | Body > Shapes > Get Y Position | `ShapeY(` |  | number “Body ID”; number “Shape ID” |
| 29 | 109 | Body > Shapes > Get Second X Position | `ShapeX2(` |  | number “Body ID”; number “Shape ID” |
| 30 | 110 | Body > Shapes > Get Second Y Position | `ShapeY2(` |  | number “Body ID”; number “Shape ID” |
| 31 | 111 | Body > Shapes > Get Radius | `ShapeRadius(` |  | number “Body ID”; number “Shape ID” |
| 32 | 112 | Body > Shapes > Get Number of Points in Shape | `ShapeNumPoints(` |  | number “Body ID”; number “Shape ID” |
| 33 | 113 | Body > Shapes > Get Point X | `ShapePointX(` |  | number “Body ID”; number “Shape ID”; number “Point ID” |
| 34 | 114 | Body > Shapes > Get Point Y | `ShapePointY(` |  | number “Body ID”; number “Shape ID”; number “Point ID” |
| 35 | 115 | Body > Get Number of Bodies | `NumBodies(` |  |  |
| 36 | 116 | Body > Get Body ID of Active | `ActiveBodyID(` |  | number “Fixed Value of Active Object” |
