# Extension dynamicgrid

- File: `dynamicgrid.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Grid Size | `Set Grid Size = <p0> x <p1>` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 1 | 81 | Set Cell Size | `Set Cell Size = <p0> x <p1>` |  | numeric expression “Width”; numeric expression “Height” | — |  |
| 2 | 82 | Vertical Component > Enable | `Enable Vertical Component` |  |  | — |  |
| 3 | 83 | Vertical Component > Disable | `Disable Vertical Component` |  |  | — |  |
| 4 | 84 | Horizonal Component > Enable | `Enable Horizonal Component` |  |  | — |  |
| 5 | 85 | Horizonal Component > Disable | `Disable Horizonal Component` |  |  | — |  |
| 6 | 86 | Intersect Component > Enable | `Enable Intersect Component` |  |  | — |  |
| 7 | 87 | Intersect Component > Disable | `Disable Intersect Component` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Grid Width | `Width(` |  |  | — |  |
| 1 | 81 | Grid Height | `Height(` |  |  | — |  |
| 2 | 82 | Cell Width | `CellWidth(` |  |  | — |  |
| 3 | 83 | Cell Height | `CellHeight(` |  |  | — |  |
| 4 | 84 | Components > Vertical Enabled | `VerticalEnabled(` |  |  | — |  |
| 5 | 85 | Components > Horizontal Enabled | `HorizontalEnabled(` |  |  | — |  |
| 6 | 86 | Components > Intersect Enabled | `IntersectEnabled(` |  |  | — |  |
