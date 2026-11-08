# Extension OpenGL-Base

- File: `OpenGL-Base.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is visible? | `<object>: Is visible` |  |  |
| 1 | -82 | Is double buffered? | `<object>: Is double buffered` |  |  |
| 2 | -83 | Has stereo buffers? | `<object>: Has stereo buffers` |  |  |
| 3 | -84 | On create window success | `<object>: On create window success` |  |  |
| 4 | -85 | On create window failure | `<object>: On create window failure` |  |  |
| 5 | -86 | On redraw | `<object>: On redraw` |  |  |
| 6 | -87 | Is V-Sync supported? | `<object>: V-Sync is supported` |  |  |
| 7 | -88 | Is V-Sync enabled? | `<object>: V-Sync is enabled` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Position > Set X coordinate... | `Set X position to <p0>` |  | numeric expression “Set X coordinate...” |
| 1 | 81 | Position > Set Y coordinate... | `Set Y position to <p0>` |  | numeric expression “Set Y coordinate...” |
| 2 | 82 | Size > Set width... | `Set width to <p0>` |  | numeric expression “Set width...” |
| 3 | 83 | Size > Set height... | `Set height to <p0>` |  | numeric expression “Set height...” |
| 4 | 84 | Visibility > Show | `Show window` |  |  |
| 5 | 85 | Visibility > Hide | `Hide window` |  |  |
| 6 | 86 | Pixel format descriptor > Double buffer... | `Double buffer: <p0>` |  | (unreliable parameters) |
| 7 | 87 | Pixel format descriptor > Stereo buffer... | `Stereo buffer: <p0>` |  | (unreliable parameters) |
| 8 | 88 | Pixel format descriptor > Color bits... | `Color bits: <p0>` |  | numeric expression “Color bits...” |
| 9 | 89 | Pixel format descriptor > Alpha bits... | `Alpha bits: <p0>` |  | numeric expression “Alpha bits...” |
| 10 | 90 | Pixel format descriptor > Depth bits... | `Depth bits: <p0>` |  | numeric expression “Depth bits...” |
| 11 | 91 | Pixel format descriptor > Accum bits... | `Accum bits: <p0>` |  | numeric expression “Accum bits...” |
| 12 | 92 | Pixel format descriptor > Stencil bits... | `Stencil bits: <p0>` |  | numeric expression “Stencil bits...” |
| 13 | 93 | Create window | `Create window` |  |  |
| 14 | 94 | Make current | `Make current` |  |  |
| 15 | 95 | Auto swap buffers > Enable | `Enable auto swap buffers` |  |  |
| 16 | 96 | Auto swap buffers > Disable | `Disable auto swap buffers` |  |  |
| 17 | 97 | Swap buffers | `Swap buffers` |  |  |
| 18 | 98 | Auto redraw > Enable | `Enable auto redraw` |  |  |
| 19 | 99 | Auto redraw > Disable | `Disable auto redraw` |  |  |
| 20 | 100 | Force redraw | `Force redraw` |  |  |
| 21 | 101 | V-Sync > Enable | `Enable V-Sync` |  |  |
| 22 | 102 | V-Sync > Disable | `Disable V-Sync` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get X position | `⡘` |  |  |
| 1 | 81 | Get Y position | `⡙` |  |  |
| 2 | 82 | Get width | `Width(` |  |  |
| 3 | 83 | Get height | `Height(` |  |  |
| 4 | 84 | Pixel format descriptor > Get color bits | `ColorBits(` |  |  |
| 5 | 85 | Pixel format descriptor > Get alpha bits | `AlphaBits(` |  |  |
| 6 | 86 | Pixel format descriptor > Get depth bits | `DepthBits(` |  |  |
| 7 | 87 | Pixel format descriptor > Get accum bits | `AccumBits(` |  |  |
| 8 | 88 | Pixel format descriptor > Get stencil bits | `StencilBits(` |  |  |
| 9 | 89 | Handles > Get window handle | `hWnd(` |  |  |
| 10 | 90 | Handles > Get device context handle | `hDC(` |  |  |
| 11 | 91 | Handles > Get rendering context handle | `hRC(` |  |  |
| 12 | 92 | Error > Get error number | `Error(` |  |  |
| 13 | 93 | Error > Get error string | `ErrorString$(` |  | → string |
