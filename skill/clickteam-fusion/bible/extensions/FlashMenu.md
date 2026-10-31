# Extension FlashMenu

- File: `FlashMenu.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Menu Item Clicked | `<object> Menu Item Clicked (<p0>)` |  | string expression “Menu Item Text” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Default Menu Items > Forward and Back | `Default Item (Forward and Back) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 1 | 81 | Default Menu Items > Rewind | `Default Item (Rewind) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 2 | 82 | Default Menu Items > Play | `Default Item (Play) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 3 | 83 | Default Menu Items > Loop | `Default Item (Loop) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 4 | 84 | Default Menu Items > Print | `Default Item (Print) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 5 | 85 | Default Menu Items > Quality | `Default Item (Quality) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 6 | 86 | Default Menu Items > Save | `Default Item (Save) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 7 | 87 | Default Menu Items > Zoom | `Default Item (Zoom) - (<p0>)` |  | numeric expression “Hide or Show - (0 = Hide, 1 = Show)” | — |  |
| 8 | 88 | Default Menu Items > Hide All | `Default Items - Hide All` |  |  | — |  |
| 9 | 89 | Default Menu Items > Show All | `Default Items - Show All` |  |  | — |  |
| 10 | 90 | Add New Menu Item | `Add New Menu Item (<p0>), State (<p1>), Separator (<p2>)` |  | string expression “Menu Item Text”; numeric expression “Menu Item State - (0 = Disabled, 1 = Enabled)”; numeric expression “Menu Item - Add Separator Before? - (0 = No, 1 = Yes)” | — |  |
| 11 | 91 | Show New Menu | `Show New Menu` |  |  | — |  |
