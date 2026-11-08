# Extension OpenGL-Camera

- File: `OpenGL-Camera.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Perspective > Set FOV... | `Set FOV to <p0>` |  | numeric expression “Set angle...” |
| 1 | 81 | Perspective > Set near clipping distance... | `Set near clipping distance to <p0>` |  | numeric expression “Set distance...” |
| 2 | 82 | Perspective > Set far clipping distance... | `Set far clipping distance to <p0>` |  | numeric expression “Set distance...” |
| 3 | 83 | Position > Set X coordinate... | `Set X position to <p0>` |  | numeric expression “Set X coordinate...” |
| 4 | 84 | Position > Set Y coordinate... | `Set Y position to <p0>` |  | numeric expression “Set Y coordinate...” |
| 5 | 85 | Position > Set Z coordinate... | `Set Z position to <p0>` |  | numeric expression “Set Z coordinate...” |
| 6 | 86 | Orientation > Set pitch... | `Set pitch to <p0>` |  | numeric expression “Set angle...” |
| 7 | 87 | Orientation > Set yaw... | `Set yaw to <p0>` |  | numeric expression “Set angle...” |
| 8 | 88 | Orientation > Set roll... | `Set roll to <p0>` |  | numeric expression “Set angle...” |
| 9 | 89 | Orientation > Look at... | `Look at <p0>, <p1>, <p2>` |  | numeric expression “Set X coordinate...”; numeric expression “Set Y coordinate...”; numeric expression “Set Z coordinate...” |
| 10 | 90 | Move > Forward... | `Move forward <p0> units` |  | numeric expression “Set distance...” |
| 11 | 91 | Move > Backwards... | `Move backwards <p0> units` |  | numeric expression “Set distance...” |
| 12 | 92 | Move > Left... | `Move left <p0> units` |  | numeric expression “Set distance...” |
| 13 | 93 | Move > Right... | `Move right <p0> units` |  | numeric expression “Set distance...” |
| 14 | 94 | Move > Up... | `Move up <p0> units` |  | numeric expression “Set distance...” |
| 15 | 95 | Move > Down... | `Move down <p0> units` |  | numeric expression “Set distance...” |
| 16 | 96 | Apply camera | `Apply camera` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Perspective > Get FOV | `FOV(` |  |  |
| 1 | 81 | Perspective > Get near clipping distance | `Near(` |  |  |
| 2 | 82 | Perspective > Get far clipping distance | `Far(` |  |  |
| 3 | 83 | Get X position | `⡘` |  |  |
| 4 | 84 | Get Y position | `⡙` |  |  |
| 5 | 85 | Get Z position | `⡚` |  |  |
| 6 | 86 | Get pitch | `Pitch(` |  |  |
| 7 | 87 | Get yaw | `Yaw(` |  |  |
| 8 | 88 | Get roll | `Roll(` |  |  |
