# Extension windowscrollbar

- File: `windowscrollbar.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<object> on error` |  |  | — |  |
| 1 | -82 | HSB (horizontal scrollbar) > On scroll | `<object> on HSB scroll` |  |  | — |  |
| 2 | -83 | VSB (vertical scrollbar) > On scroll | `<object> on VSB scroll` |  |  | — |  |
| 3 | -84 | HSB (horizontal scrollbar) > Need HSB? | `<object> need HSB?` |  |  | — |  |
| 4 | -85 | VSB (vertical scrollbar) > Need VSB? | `<object> need VSB?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HSB (horizontal scrollbar) > Show HSB | `<object> show HSB <p0> (boolean)` |  | numeric expression “0 == hide, anything else == show” | — |  |
| 1 | 81 | VSB (vertical scrollbar) > Show VSB | `<object> show VSB <p0> (boolean)` |  | numeric expression “0 == hide, anything else == show” | — |  |
| 2 | 82 | HSB (horizontal scrollbar) > Set HSB pos | `<object> set HSB pos to <p0>` |  | numeric expression “Position” | — |  |
| 3 | 83 | VSB (vertical scrollbar) > Set VSB pos | `<object> set VSB pos to <p0>` |  | numeric expression “Position” | — |  |
| 4 | 84 | HSB (horizontal scrollbar) > Set HSB range | `<object> set HSB range from <p0> to <p1>` |  | numeric expression “Min (left)”; numeric expression “Max (right)” | — |  |
| 5 | 85 | VSB (vertical scrollbar) > Set VSB range | `<object> set VSB range from <p0> to <p1>` |  | numeric expression “Min (top)”; numeric expression “Max (bottom)” | — |  |
| 6 | 86 | HSB (horizontal scrollbar) > Set HSB page | `<object> set HSB page to <p0>` |  | numeric expression “Page” | — |  |
| 7 | 87 | VSB (vertical scrollbar) > Set VSB page | `<object> set VSB page to <p0>` |  | numeric expression “Page” | — |  |
| 8 | 88 | Clear last error | `<object> clear last error` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | HSB (horizontal scrollbar) > Get HSB pos | `getHSBPos(` |  |  | — |  |
| 1 | 81 | VSB (vertical scrollbar) > Get VSB pos | `getVSBPos(` |  |  | — |  |
| 2 | 82 | HSB (horizontal scrollbar) > Get HSB page | `getHSBPage(` |  |  | — |  |
| 3 | 83 | VSB (vertical scrollbar) > Get VSB page | `getVSBPage(` |  |  | — |  |
| 4 | 84 | HSB (horizontal scrollbar) > Get HSB min | `getHSBMin(` |  |  | — |  |
| 5 | 85 | VSB (vertical scrollbar) > Get VSB min | `getVSBMin(` |  |  | — |  |
| 6 | 86 | HSB (horizontal scrollbar) > Get HSB max | `getHSBMax(` |  |  | — |  |
| 7 | 87 | VSB (vertical scrollbar) > Get VSB max | `getVSBMax(` |  |  | — |  |
| 8 | 88 | Get last error | `getLastError(` |  |  | — |  |
| 9 | 89 | HSB (horizontal scrollbar) > Get HSB height | `getHSBHeight(` |  |  | — |  |
| 10 | 90 | VSB (vertical scrollbar) > Get VSB width | `getVSBWidth(` |  |  | — |  |
