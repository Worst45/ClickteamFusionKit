# Extension FlashFx

- File: `FlashFx.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Stage > On stage event | `<object>: On stage event <p0>` |  | string expression “Event (mouseUp, mouseDown, rollOut, rollOver, keyUp, keyDown...)” | — |  |
| 1 | -82 | Stage > Compare to property | `<object>: Event <p0> = <p1>` |  | string expression “Event property”; string expression “Value” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Stage > Set scale mode | `Set stage scale mode to <p0>` |  | string expression “Scale mode (exactFit, noBorder, noScale, showAll)” | — |  |
| 1 | 81 | Stage > Set display state | `Set stage display state to <p0>` |  | string expression “Display state (normal, fullScreen)” | — |  |
| 2 | 82 | Stage > Set align | `Set stage alignment to <p0>` |  | string expression “Alignment (Default: Center, Combine L, R, T, B)” | — |  |
| 3 | 83 | Stage > Add event listener | `Add stage event listener <p0>` |  | string expression “Event (mouseUp, mouseDown, rollOut, rollOver, keyUp, keyDown...)” | — |  |
| 5 | 85 | Object > Set blend mode | `Set blend mode of <p0> to <p1>` |  | object “Object”; string expression “Blend mode (normal, layer, multiply, screen, lighten, darken, difference, add, subtract, invert, alpha, erase, overlay, hardlight)” | — |  |
