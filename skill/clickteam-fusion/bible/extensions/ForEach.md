# Extension ForEach

- File: `ForEach.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On ForEach loop | `<object> : On ForEach loop: <p0>` |  | string expression “Enter ForEach loop's name” | — |  |
| 1 | -82 | ForEach loop is paused | `<object> : ForEach loop: <p0> is paused` |  | string expression “Enter ForEach loop's name” | — |  |
| 2 | -83 | Object is part of ForEach loop | `<object> : Object <p0> is part of ForEach loop: <p1>` |  | object “Select object...”; string expression “Enter ForEach loop's name” | — |  |
| 3 | -84 | Groups > Object is part of group | `<object> : Object <p0> is part of group: <p1>` |  | object “Select object...”; string expression “Enter group's name” | — |  |
| 4 | -85 | On ForEach loop for object | `<object> : On ForEach loop: <p0> for object <p1>` |  | string expression “Enter ForEach loop's name”; object “Select object...” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Start ForEach loop for object... | `Start ForEach loop: <p0> for object <p1>` |  | string expression “Enter ForEach loop's name”; object “Select object...” | — |  |
| 1 | 81 | Pause ForEach loop... | `Pause ForEach loop: <p0>` |  | string expression “Enter ForEach loop's name” | — |  |
| 2 | 82 | Resume ForEach loop... | `Resume ForEach loop: <p0>` |  | string expression “Enter ForEach loop's name” | — |  |
| 3 | 83 | Set ForEach loop's iteration... | `Set ForEach loop: <p0>'s iteration to: <p1>` |  | string expression “Enter ForEach loop's name”; numeric expression “Enter iteration index of loop” | — |  |
| 4 | 84 | Groups > Start ForEach loop for group... | `Start ForEach loop: <p0> for group: <p1>` |  | string expression “Enter ForEach loop's name”; string expression “Enter group's name” | — |  |
| 5 | 85 | Groups > Add object(s) to group... | `Add object(s) <p0> to group: <p1>` |  | object “Select object...”; string expression “Enter group's name” | — |  |
| 6 | 86 | Groups > Add object to group by Fixed Value... | `Add object's Fixed Value: <p0> to group: <p1>` |  | numeric expression “Enter an object's Fixed Value”; string expression “Enter group's name” | — |  |
| 7 | 87 | Groups > Remove object(s) from group... | `Remove object(s) <p0> from group: <p1>` |  | object “Select object...”; string expression “Enter group's name” | — |  |
| 8 | 88 | Groups > Remove object from group by Fixed Value... | `Remove object's Fixed Value: <p0> from group: <p1>` |  | numeric expression “Enter an object's Fixed Value”; string expression “Enter group's name” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get ForEach loop's current iterating Fixed Value | `LoopFV(` |  | string “Enter ForEach loop's name” | — |  |
| 1 | 81 | Get ForEach's current iteration | `LoopIteration(` |  | string “Enter ForEach loop's name” | — |  |
| 2 | 82 | Get ForEach's maximum iteration | `LoopMaxIteration(` |  | string “Enter ForEach loop's name” | — |  |
| 3 | 83 | Groups > Get number of objects in group | `GroupSize(` |  | string “Enter group's name” | — |  |
