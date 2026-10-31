# Extension kctray

- File: `kctray.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Tray Icon Object Conditions | `Never-you-mind.` |  | (unreliable parameters) | — |  |
| 1 | -82 | User clicks on tray icon... | `<object>: User <p0> on tray icon.` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Tray Icon Object Actions | `Does nothing.` |  |  | — |  |
| 1 | 81 | Icon > Change Icon Image | `Change Icon to <p0>.` |  | (unreliable parameters) | — |  |
| 2 | 82 | Tool Tip > Change Tool Tip | `Change Tool Tip to <p0>.` |  | (unreliable parameters) | — |  |
| 3 | 83 | Icon > Reset Icon Image | `Reset Icon.` |  |  | — |  |
| 4 | 84 | Tool Tip > Reset Tool Tip | `Reset Tool Tip.` |  |  | — |  |
| 5 | 85 | Window > Enable Auto-hide | `Enable Auto-hide mode.` |  | (unreliable parameters) | — |  |
| 6 | 86 | Window > Disable Auto-hide | `Disable Auto-hide mode.` |  |  | — |  |
| 7 | 87 | Window > Minimize/Hide Window | `Minimize/Hide window.` |  |  | — |  |
| 8 | 88 | Window > Restore/Show Window | `Restore/Show window.` |  |  | — |  |
| 9 | 89 | Window > Hide mode > Set minimize and hide mode. | `Set Minimize and Hide mode.` |  |  | — |  |
| 10 | 90 | Window > Hide mode > Set instant Hide mode. | `Set Instant Hide mode.` |  |  | — |  |
