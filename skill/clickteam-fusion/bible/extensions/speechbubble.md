# Extension speechbubble

- File: `speechbubble.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Settings > Colors > Outline | `<object>Set outline color to <p0>` |  | color “Outline Color” | — |  |
| 1 | 81 | Settings > Outline thickness | `<object>Set outline thickness to <p0>` |  | numeric expression “Outline thickness” | — |  |
| 2 | 82 | Settings > Colors > Fill | `<object>Set fill color to <p0>` |  | color “Fill Colour” | — |  |
| 3 | 83 | Settings > Shadow > Color | `<object>Set shadow color to <p0>` |  | color “Color” | — |  |
| 4 | 84 | Settings > Font > Set Font Color | `<object>Set font color to <p0>` |  | color “Color” | — |  |
| 5 | 85 | Settings > Shadow > Opacity | `<object>Set shadows oppacity to <p0>` |  | numeric expression “Opacity 0% = transparent , 100% = opaque” | — |  |
| 6 | 86 | Set Width | `<object>Set width to <p0>` |  | numeric expression “Width in pixels” | — |  |
| 7 | 87 | Target Position > Set Position... | `<object>Set target position to <p0>` |  | position “Target Position” | — |  |
| 8 | 88 | Target Position > Set X Coordinate... | `<object>Set target X position to <p0>` |  | numeric expression “Set X Coordinate...” | — |  |
| 9 | 89 | Target Position > Set Y Coordinate... | `<object>Set target Y position to <p0>` |  | numeric expression “Set Y Coordinate...” | — |  |
| 10 | 90 | Set Text | `<object>Set text to <p0>` |  | string expression “Text that is shown in the speech bubble” | — |  |
| 11 | 91 | Set Margin > Set Left | `<object>Set left margin to <p0>` |  | numeric expression “Pixels” | — |  |
| 12 | 92 | Set Margin > Set Right | `<object>Set right margin to <p0>` |  | numeric expression “Pixels” | — |  |
| 13 | 93 | Set Margin > Set Top | `<object>Set top margin to <p0>` |  | numeric expression “Pixels” | — |  |
| 14 | 94 | Set Margin > Set Bottom | `<object>Set bottom margin to <p0>` |  | numeric expression “Pixels” | — |  |
| 15 | 95 | Force Update ( shouldn't be needed ) | `<object>Update` |  |  | — |  |
| 16 | 96 | Arrow > Set Arrow size | `<object>Set Arrow size to <p0>` |  | numeric expression “Size” | — |  |
| 17 | 97 | Arrow > Visibility > Hide | `<object>Show arrow` |  |  | — |  |
| 18 | 98 | Arrow > Visibility > Show | `<object>Show arrow` |  |  | — |  |
| 19 | 99 | Settings > Font > Set Font... | `<object>Set font to ( <p0>, size <p1> (bool bold <p2>, italic <p3>)` |  | string expression “Font name”; numeric expression “Size”; numeric expression “Bold ? 1 = yes  0 = no”; numeric expression “Italic ? 1 = yes  0 = no” | — |  |
| 20 | 100 | Settings > Set Corner radius | `<object>Set corner radius to <p0>` |  | numeric expression “Size” | — |  |
| 21 | 101 | Hotspot > Custom... | `<object>Set hotspot to ( <p0>, <p1> )` |  | numeric expression “Set X Coordinate...”; numeric expression “Set Y Coordinate...” | — |  |
| 22 | 102 | Hotspot > Top-left | `<object>Set hotspot to top-left` |  |  | — |  |
| 23 | 103 | Hotspot > Top-center | `<object>Set hotspot to top-center` |  |  | — |  |
| 24 | 104 | Hotspot > Top-right | `<object>Set hotspot to top-right` |  |  | — |  |
| 25 | 105 | Hotspot > Left-center | `<object>Set hotspot to left-center` |  |  | — |  |
| 26 | 106 | Hotspot > Center | `<object>Set hotspot to center` |  |  | — |  |
| 27 | 107 | Hotspot > Right-center | `<object>Set hotspot to right-center` |  |  | — |  |
| 28 | 108 | Hotspot > Bottom-left | `<object>Set hotspot to bottom-left` |  |  | — |  |
| 29 | 109 | Hotspot > Bottom-center | `<object>Set hotspot to bottom-center` |  |  | — |  |
| 31 | 111 | Settings > Font > Align > Left | `<object> Allign text to the left` |  |  | — |  |
| 32 | 112 | Settings > Font > Align > Centre | `<object> Allign text to the center` |  |  | — |  |
| 33 | 113 | Settings > Font > Align > Right | `<object> Allign text to the right` |  |  | — |  |
| 34 | 114 | Arrow > Position > Custom... | `<object> Set arrow origin to (<p0>,<p1>)` |  | numeric expression “Set X Coordinate...”; numeric expression “Set Y Coordinate...” | — |  |
| 35 | 115 | Arrow > Position > Top-left | `<object> Set arrow origin to top-left` |  |  | — |  |
| 36 | 116 | Arrow > Position > Top-center | `<object> Set arrow origin to top-center` |  |  | — |  |
| 37 | 117 | Arrow > Position > Top-right | `<object> Set arrow origin to top-right` |  |  | — |  |
| 38 | 118 | Arrow > Position > Left-center | `<object> Set arrow origin to left-center` |  |  | — |  |
| 39 | 119 | Arrow > Position > Center | `<object> Set arrow origin to centre` |  |  | — |  |
| 40 | 120 | Arrow > Position > Right-center | `<object> Set arrow origin to right-center` |  |  | — |  |
| 41 | 121 | Arrow > Position > Bottom-left | `<object> Set arrow origin to bottom-left` |  |  | — |  |
| 42 | 122 | Arrow > Position > Bottom-center | `<object> Set arrow origin to bottom-center` |  |  | — |  |
| 43 | 123 | Arrow > Position > Bottom-right | `<object> Set arrow origin to bottom-right` |  |  | — |  |
| 44 | 124 | Arrow > Position > Auto-Decide | `<object> Set arrow origin ( auto )` |  |  | — |  |
| 45 | 125 | Settings > Shadow > X offset | `<object> Set Shadow X offset to <p0>` |  | numeric expression “X offset” | — |  |
| 46 | 126 | Settings > Shadow > Y offset | `<object> Set Shadow Y offset to <p0>` |  | numeric expression “Y offset” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get margin left | `Marginleft(` |  |  | — |  |
| 1 | 81 | Get margin right | `Marginright(` |  |  | — |  |
| 2 | 82 | Get margin top | `Margintop(` |  |  | — |  |
| 3 | 83 | Get margin bottom | `Marginbottom(` |  |  | — |  |
| 4 | 84 | Get fill color | `Fill(` |  |  | — |  |
| 5 | 85 | Get outline color | `Outline(` |  |  | — |  |
| 6 | 86 | Get outline thickness | `Outlinesize(` |  |  | — |  |
| 7 | 87 | Get shadow color | `Shadow(` |  |  | — |  |
| 8 | 88 | Get font color | `Fontcolor(` |  |  | — |  |
| 9 | 89 | Get shadow opacity | `ShadowOpacity(` |  |  | — |  |
| 10 | 90 | Get width | `Width(` |  |  | — |  |
| 11 | 91 | Find width of text ( without word wrap ) | `FindWidth(` |  |  | — |  |
| 12 | 92 | Get text | `GetText$(` |  | → string | — |  |
| 13 | 93 | Get corner radius | `CornerRadius(` |  |  | — |  |
| 14 | 94 | Get height | `Height(` |  |  | — |  |
