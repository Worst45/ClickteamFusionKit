# Extension ultimatefullscreen

- File: `ultimatefullscreen.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is fullscreen | `<object>: Is fullscreen` |  |  |
| 1 | -82 | Is windowed | `<object>: Is windowed` |  |  |
| 2 | -83 | On fullscreen | `<object>: On fullscreen` |  |  |
| 3 | -84 | On windowed | `<object>: On windowed` |  |  |
| 4 | -85 | On change window mode | `<object>: On change window mode` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Go fullscreen | `Go fullscreen` |  |  |
| 1 | 81 | Go windowed | `Go windowed` |  |  |
| 2 | 82 | Misc. > Apply fullscreen settings to windowed size | `Apply fullscreen settings to windowed size` |  |  |
| 3 | 83 | Misc. > Don't apply fullscreen settings to windowed size (default) | `Don't apply fullscreen settings to windowed size` |  |  |
| 4 | 84 | Automatic adjustments > Set fullscreen type | `Set fullscreen type to <p0>` |  | numeric expression “Fullscreen type: 0=Best fit, 1=Best pixel perfect fit (integer-only scale), 2=One-to-one, 3=Match width(vert-), 4=Match height(hor+), 5=Manual settings” |
| 5 | 85 | Automatic adjustments > Set game scale | `Set game scale to <p0>` |  | numeric expression “Game scale (1.0=default)” |
| 6 | 86 | Manual adjustments > Set manual fullscreen position | `Set manual fullscreen position to (<p0>, <p1>)` |  | numeric expression “Manual fullscreen X coordinate”; numeric expression “Manual fullscreen Y coordinate” |
| 7 | 87 | Manual adjustments > Set manual fullscreen size | `Set manual fullscreen size to (<p0>, <p1>)` |  | numeric expression “Manual fullscreen width”; numeric expression “Manual fullscreen height” |
| 8 | 88 | Manual adjustments > Reset manual fullscreen settings to default | `Reset manual fullscreen settings to default` |  |  |
| 9 | 89 | Misc. > Listen for screen maximize (default) | `Listen for screen maximize` |  |  |
| 10 | 90 | Misc. > Don't listen for screen maximize | `Don't listen for screen maximize` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Game rectangle > Game rectangle X (after scaling) | `GameRectX(` |  |  |
| 1 | 81 | Game rectangle > Game rectangle Y (after scaling) | `GameRectY(` |  |  |
| 2 | 82 | Game rectangle > Game rectangle width  (after scaling) | `GameRectWidth(` |  |  |
| 3 | 83 | Game rectangle > Game rectangle height (after scaling) | `GameRectHeight(` |  |  |
| 4 | 84 | Manual settings > Manual Game rectangle X | `ManualGameRectX(` |  |  |
| 5 | 85 | Manual settings > Manual Game rectangle Y | `ManualGameRectY(` |  |  |
| 6 | 86 | Manual settings > Manual Game rectangle width | `ManualGameRectWidth(` |  |  |
| 7 | 87 | Manual settings > Manual Game rectangle height | `ManualGameRectHeight(` |  |  |
| 8 | 88 | Cropping > Cropped game width  (before scaling) | `CroppedGameWidth(` |  |  |
| 9 | 89 | Cropping > Cropped game height (before scaling) | `CroppedGameHeight(` |  |  |
| 10 | 90 | Fullscreen type | `FullscreenType(` |  |  |
| 11 | 91 | Game scale | `GameScale(` |  |  |
