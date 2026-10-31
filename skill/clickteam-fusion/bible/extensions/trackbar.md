# Extension trackbar

- File: `trackbar.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is visible? | `Is <object> visible` |  |  | — |  |
| 1 | -82 | Is enabled? | `Is <object> enabled` |  |  | — |  |
| 2 | -83 | Has input focus? | `<object> has input focus` |  |  | — |  |
| 3 | -84 | Value changed? | `<object> value has changed` |  |  | — |  |
| 6 | -87 | Thumb released? | `<object> thumb Released` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Visibility > Make object reappear | `Reappear` |  |  | — |  |
| 1 | 81 | Visibility > Make object invisible | `Invisible` |  |  | — |  |
| 2 | 82 | Enable > On | `Enabled` |  |  | — |  |
| 3 | 83 | Enable > Off | `Disabled` |  |  | — |  |
| 5 | 85 | Position > Set horizontal position | `Set x <p0>` |  | numeric expression “Set x %0” | — |  |
| 6 | 86 | Position > Set vertical position | `Set y <p0>` |  | numeric expression “Set y %0” | — |  |
| 8 | 88 | Size > Set horizontal size | `Set x size <p0>` |  | numeric expression “Set x size %0” | — |  |
| 9 | 89 | Size > Set vertical size | `Set y size <p0>` |  | numeric expression “Set y size %0” | — |  |
| 10 | 90 | Focus > On | `Focus on` |  |  | — |  |
| 11 | 91 | Focus > Off | `Focus off` |  |  | — |  |
| 12 | 92 | Selection > Set starting position | `Selection: set starting position <p0>` |  | numeric expression “Selection: set starting position %0” | — |  |
| 13 | 93 | Selection > Set ending position | `Selection: set ending position <p0>` |  | numeric expression “Selection: set ending position %0” | — |  |
| 14 | 94 | Selection > Clear selection | `Selection: clear` |  |  | — |  |
| 15 | 95 | Set thumb position | `Set thumb position: <p0>` |  | numeric expression “Set thumb position: %0” | — |  |
| 16 | 96 | Set range... | `Set range <p0> to <p1>` |  | numeric expression “Set range”; numeric expression “Set range” | — |  |
| 17 | 97 | Colour > Use system colours | `Use systemcolours` |  |  | — |  |
| 18 | 98 | Colour > Choose colour | `Colour: <p0>` |  | color “Colour: %0” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current value | `value(` |  |  | — |  |
| 1 | 81 | Size > Get horizontal size | `sizex(` |  |  | — |  |
| 2 | 82 | Size > Get vertical size | `sizey(` |  |  | — |  |
| 3 | 83 | Position > Get X | `⡸` |  |  | — |  |
| 4 | 84 | Position > Get Y | `⡹` |  |  | — |  |
