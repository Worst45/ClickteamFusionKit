# Extension 3dmesh

- File: `3dmesh.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Mesh is loaded | `<object>: Mesh is loaded` |  |  |
| 1 | -82 | Animation is playing | `<object>: Animation <p0> is playing` |  | string expression “Animation name” |
| 2 | -83 | Animation looping is enabled | `<object>: Animation looping is enabled` |  |  |
| 3 | -84 | Animation ended | `<object>: Animation <p0> ended` |  | string expression “Animation name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Load mesh | `Load mesh <p0>` |  | file name “Mesh file” |
| 1 | 81 | Set rotation > X | `Set X rotation to <p0>` |  | numeric expression “Rotation degrees” |
| 2 | 82 | Set rotation > Y | `Set Y rotation to <p0>` |  | numeric expression “Rotation degrees” |
| 3 | 83 | Set rotation > Z | `Set Z rotation to <p0>` |  | numeric expression “Rotation degrees” |
| 4 | 84 | Set scale > X | `Set X scale to <p0>` |  | numeric expression “Scale factor (1.0 is default)” |
| 5 | 85 | Set scale > Y | `Set Y scale to <p0>` |  | numeric expression “Scale factor (1.0 is default)” |
| 6 | 86 | Set scale > Z | `Set Z scale to <p0>` |  | numeric expression “Scale factor (1.0 is default)” |
| 7 | 87 | Texture > Enable flag > Wireframe | `Enable wireframe` |  |  |
| 8 | 88 | Texture > Enable flag > Gouraud | `Enable gouraud` |  |  |
| 9 | 89 | Texture > Enable flag > Bilinear | `Enable bilinear` |  |  |
| 10 | 90 | Texture > Enable flag > Trilinear | `Enable trilinear` |  |  |
| 11 | 91 | Texture > Disable flag > Wireframe | `Disable wireframe` |  |  |
| 12 | 92 | Texture > Disable flag > Gouraud | `Disable gouraud` |  |  |
| 13 | 93 | Texture > Disable flag > Bilinear | `Disable bilinear` |  |  |
| 14 | 94 | Texture > Disable flag > Trilinear | `Disable trilinear` |  |  |
| 15 | 95 | Texture > Set material type | `Set material type to <p0>` |  | numeric expression “Material type index” |
| 16 | 96 | Texture > Set primary texture | `Set primary texture to <p0>` |  | file name “Texture file” |
| 17 | 97 | Texture > Set secondary texture | `Set secondary texture to <p0>` |  | file name “Texture file” |
| 18 | 98 | Animation > Set | `Set animation to <p0>` |  | string expression “Animation name” |
| 19 | 99 | Animation > Resume | `Resume animation` |  |  |
| 20 | 100 | Animation > Stop | `Stop animation` |  |  |
| 21 | 101 | Animation > Pause | `Pause animation` |  |  |
| 22 | 102 | Animation > Set frame | `Set animation frame to <p0>` |  | numeric expression “Frame” |
| 23 | 103 | Animation > Set speed | `Set animation speed to <p0> fps` |  | numeric expression “Frames/second” |
| 24 | 104 | Animation > Set range | `Set animation range to <p0>-<p1>` |  | numeric expression “Frame 1”; numeric expression “Frame 2” |
| 25 | 105 | Animation > Enable looping | `Enable animation looping` |  |  |
| 26 | 106 | Animation > Disable looping | `Disable animation looping` |  |  |
| 27 | 107 | Camera > Set distance | `Set camera distance to <p0>` |  | numeric expression “Distance” |
| 28 | 108 | Camera > Set X offset | `Set camera X offset to <p0>` |  | numeric expression “Offset” |
| 29 | 109 | Camera > Set Y offset | `Set camera Y offset to <p0>` |  | numeric expression “Offset” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Rotation > X | `RotationX(` |  |  |
| 1 | 81 | Rotation > Y | `RotationY(` |  |  |
| 2 | 82 | Rotation > Z | `RotationZ(` |  |  |
| 3 | 83 | Scale > X | `ScaleX(` |  |  |
| 4 | 84 | Scale > Y | `ScaleY(` |  |  |
| 5 | 85 | Scale > Z | `ScaleZ(` |  |  |
| 6 | 86 | Material type | `MaterialType(` |  |  |
| 7 | 87 | Animation > Count | `AnimationCount(` |  |  |
| 8 | 88 | Animation > Name | `AnimationName$(` |  | number “Animation index” → string |
| 9 | 89 | Animation > Current animation | `CurrentAnimation$(` |  | → string |
| 10 | 90 | Animation > Frame | `AnimationFrame(` |  |  |
| 11 | 91 | Animation > Speed | `AnimationSpeed(` |  |  |
| 12 | 92 | Animation > Range start | `AnimationRangeStart(` |  |  |
| 13 | 93 | Animation > Range stop | `AnimationRangeStop(` |  |  |
| 14 | 94 | Camera > Distance | `CameraDistance(` |  |  |
| 15 | 95 | Camera > X offset | `CameraOffsetX(` |  |  |
| 16 | 96 | Camera > Y offset | `CameraOffsetY(` |  |  |
| 17 | 97 | Joints > X position | `JointX(` |  | number “Joint index” |
| 18 | 98 | Joints > Y position | `JointY(` |  | number “Joint index” |
| 19 | 99 | Joints > Joint count | `JointCount(` |  |  |
| 20 | 100 | Joints > Joint number | `JointNumber(` |  | string “Joint name” |
| 21 | 101 | Joints > Joint name | `JointName$(` |  | number “Joint index” → string |
