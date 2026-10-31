# Extension StickyObject

- File: `StickyObject.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On broken connection | `<object> On broken connection` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Relative attach two objects | `Flexible attach object <p0> to parent: <p1>` |  | object “Select child object”; object “Select parent object”; numeric expression “Rotate with parent: 0=no change, 1=based on directions (32), 2=based on angles (360)”; numeric expression “Change dir with parent: 0=no change, 1= change dir, 2=change angle, 3=both” | — |  |
| 1 | 81 | Static attach two objects | `Static attach object <p0> and <p1>` |  | object “Select child object”; object “Select parent object”; numeric expression “Rotate with parent: 0=no change, 1=based on directions (32), 2=based on angles (360)”; numeric expression “Change dir with parent: 0=no change, 1= change dir, 2=change angle, 3=both” | — |  |
| 2 | 82 | Detach all objects | `Deattach all objects` |  |  | — |  |
| 3 | 83 | Detach object | `Deattach <p0>` |  | object “Select object to deattach” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of attached objects | `NumAttached(` |  |  | — |  |
| 1 | 81 | Get fixed of remainder after deletion | `FixedOfRemainder(` |  |  | — |  |
