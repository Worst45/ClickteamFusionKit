# Extension tabc

- File: `tabc.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Tab changed ? | `<object>: On tab changed` |  |  |
| 1 | -82 | LMB clicked ? | `<object>: On left mouse button clicked` |  |  |
| 2 | -83 | LMB double-clicked ? | `<object>: On left mouse button double-clicked` |  |  |
| 3 | -84 | RMB clicked ? | `<object>: On right mouse button clicked` |  |  |
| 4 | -85 | RMB double-clicked ? | `<object>: On right mouse button double-clicked` |  |  |
| 5 | -86 | Tab changed by user ? | `<object>: On tab changed by user` |  |  |
| 6 | -87 | Tab changed to (by caption) ? | `<object>: On tab changed to <p0>` |  | string expression “Caption” |
| 7 | -88 | Tab changed to (by index) ? | `<object>: On tab index changed to <p0>` |  | numeric expression “Index” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Modify tabs > Insert tab | `Insert tab with caption <p0>, icon <p1> at <p2>` |  | string expression “Caption”; numeric expression “Icon index (-1: None)”; numeric expression “Index (-1: Add to the end)” |
| 1 | 81 | Modify tabs > Delete tab | `Delete tab at <p1>` |  | numeric expression “Index” |
| 2 | 82 | Modify tabs > Delete all tabs | `Delete all tabs` |  |  |
| 3 | 83 | Set current tab | `Set current tab to <p0>` |  | numeric expression “Index” |
| 4 | 84 | Modify tabs > Set tab caption | `Set caption of tab <p0> to <p1>` |  | numeric expression “Index”; string expression “Caption” |
| 5 | 85 | Window settings > Set width | `Set width to <p0>` |  | numeric expression “Width” |
| 6 | 86 | Window settings > Set visibility | `Set visibility to <p0>` |  | numeric expression “Visiblity (0 = Hide, 1 = Show)” |
| 7 | 87 | Modify tabs > Hightlight tab | `Hightlight tab <p0>: <p1>` |  | numeric expression “Index”; numeric expression “Highlight (0 = False, 1 = True)” |
| 8 | 88 | Tab settings > Set minimal tab width | `Set minimal tab width to <p0>` |  | numeric expression “Width” |
| 9 | 89 | Tab settings > Set padding | `Set padding to (<p0>,<p1>)` |  | numeric expression “Width”; numeric expression “Height” |
| 10 | 90 | Tab settings > Set tab size | `Set tab size to (<p0>,<p1>)` |  | numeric expression “Width”; numeric expression “Height” |
| 11 | 91 | Deselect all | `Deselect all` |  |  |
| 14 | 94 | Modify tabs > Insert tabs from list | `Insert tabs from list <p0> at <p1>` |  | string expression “Semicolon-separated list”; numeric expression “Index (-1: Add to the end)” |
| 15 | 95 | Window settings > Set height | `Set height to <p0>` |  | numeric expression “Height” |
| 16 | 96 | Window settings > Set style | `Set style to <p0>` |  | numeric expression “Style (See "Styles", merge with "or" operator)” |
| 18 | 98 | Modify icons > Set icon from image | `Set icon <p0> from image <p1>, transparent color = <p2>` |  | numeric expression “Index (-1: Add to the end)”; file name “Image path”; color “Transparent color (-1: First pixel color)” |
| 19 | 99 | Modify icons > Set icon from active | `Set icon <p0> from active object <p1>` |  | numeric expression “Index (-1: Add to the end)”; object “Object” |
| 20 | 100 | Modify icons > Remove icon | `Remove icon <p0>` |  | numeric expression “Index” |
| 21 | 101 | Modify icons > Remove all icons | `Remove all icons` |  |  |
| 22 | 102 | Modify icons > Set icon from overlay | `Set icon <p0> from overlay address <p1>` |  | numeric expression “Index (-1: Add to the end)”; numeric expression “Overlay address” |
| 23 | 103 | Window settings > Force redraw | `Force redraw` |  |  |
| 24 | 104 | Modify tabs > Set tab icon | `Set icon of tab <p0> to <p1>` |  | numeric expression “Index”; numeric expression “Icon index (-1: None)” |
| 25 | 105 | Modify icons > Set icons from active (horizontal sequence) | `Set icons at <p0> from active object <p1>` |  | numeric expression “Starting index (-1: Add to the end)”; object “Object” |
| 26 | 106 | Modify tabs > Insert tabs with icons | `Insert tabs with icons from list <p0> at <p1>` |  | string expression “List (icon1;text1;icon2;...)”; numeric expression “Index (-1: Add to the end)” |
| 27 | 107 | Modify tabs > Set tab parameter | `Set parameter of tab <p0> to <p1>` |  | numeric expression “Index”; numeric expression “Parameter” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get current tab | `CurTab(` |  |  |
| 1 | 81 | Get tab caption | `TabCaption$(` |  | number “Index” → string |
| 2 | 82 | Get tab count | `TabCount(` |  |  |
| 3 | 83 | Get row count | `RowCount(` |  |  |
| 5 | 85 | Size > Get width | `⡗` |  |  |
| 6 | 86 | Size > Get height | `⡈` |  |  |
| 7 | 87 | Styles > Tabs at bottom | `StBottom(` |  |  |
| 8 | 88 | Styles > Tabs as buttons | `StButtons(` |  |  |
| 9 | 89 | Styles > Fixed tab width | `StFixed(` |  |  |
| 10 | 90 | Styles > Flat buttons | `StFlat(` |  |  |
| 11 | 91 | Styles > Multi-line | `StMulti(` |  |  |
| 12 | 92 | Styles > Vertical tabs | `StVertical(` |  |  |
| 13 | 93 | Styles > Vertical: right side | `StRight(` |  |  |
| 14 | 94 | Styles > Single-line | `StSingle(` |  |  |
| 15 | 95 | Styles > Tabs as tabs | `StTabs(` |  |  |
| 16 | 96 | Styles > No tab stretching | `StNoStretch(` |  |  |
| 17 | 97 | Get tab icon | `TabIcon(` |  | number “Index” |
| 18 | 98 | Find tab from caption | `FindTab(` |  | string “Caption” |
| 19 | 99 | Get tab X | `TabX(` |  | number “Index (-1: Last)” |
| 20 | 100 | Get tab Y | `TabY(` |  | number “Index (-1: Last)” |
| 21 | 101 | Get tab width | `TabW(` |  | number “Index (-1: Last)” |
| 22 | 102 | Get tab height | `TabH(` |  | number “Index (-1: Last)” |
| 23 | 103 | Get tab parameter | `TabParam(` |  | number “Index” |
