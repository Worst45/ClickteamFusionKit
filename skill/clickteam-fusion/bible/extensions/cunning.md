# Extension cunning

- File: `cunning.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Loop Trigger | `<object>: Loop trigger #<p0>` |  | (unreliable parameters) |
| 1 | -82 | Compare Loop Position... | `<object>: Loop #<p0> position <p1>` |  | (unreliable parameters) |
| 2 | -83 | Loop is Infinite | `<object>: Loop #<p0> is Infinite` |  | (unreliable parameters) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Start Loop | `Start Loop #<p0> for <p1> loop(s).` |  | (unreliable parameters) |
| 1 | 81 | Single Loop | `Trigger Loop #<p0> Once.` |  | (unreliable parameters) |
| 2 | 82 | Stop Loop | `Stop Loop #<p0>.` |  | (unreliable parameters) |
| 3 | 83 | Advanced > Adjust Loop Position | `Adjust Loop #<p0>'s Position to <p1>.` |  | (unreliable parameters) |
| 4 | 84 | Advanced > Redraw Frame | `Redraw Frame on Screen.` |  |  |
| 5 | 85 | Advanced > Set Loop Pause | `Set Loop Pause to <p0> millisecond(s).` |  | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Loop Step | `Loop Step(` |  | (unreliable parameters) |
| 1 | 81 | Get Number of Loop Steps | `Number of Steps(` |  | (unreliable parameters) |
