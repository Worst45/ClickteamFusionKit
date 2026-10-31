# Extension IconView

- File: `IconView.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On left-click | `<object> : On Left-Click` |  |  | — |  |
| 1 | -82 | On right-click | `<object> : On Right-Click` |  |  | — |  |
| 2 | -83 | On double-click | `<object> : On double-click` |  |  | — |  |
| 3 | -84 | On label edit started | `<object> : On label edit started` |  |  | — |  |
| 4 | -85 | On label edit ended | `<object> : On label edit ended` |  |  | — |  |
| 5 | -86 | Is icon selected? | `<object> : Icon <p0> is selected` |  | numeric expression “Enter icon number” | — |  |
| 6 | -87 | Is icon highlighted? | `<object> : Icon <p0> is highlighted` |  | numeric expression “Enter icon number” | — |  |
| 7 | -88 | Drag started | `<object> : On Drag Started` |  |  | — |  |
| 8 | -89 | Drag ended | `<object> : On Drag Ended` |  |  | — |  |
| 9 | -90 | On right double-click | `<object> : On Right double-click` |  |  | — |  |
| 10 | -91 | On return pressed | `<object> : On return pressed` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dimensions > Set width | `Set width to <p0>` |  | numeric expression “Enter width” | — |  |
| 1 | 81 | Dimensions > Set height | `Set height to <p0>` |  | numeric expression “Enter height” | — |  |
| 2 | 82 | Position > Set X co-ordinate | `Set X to <p0>` |  | numeric expression “Enter X co-ordinate” | — |  |
| 3 | 83 | Position > Set Y co-ordinate | `Set Y to <p0>` |  | numeric expression “Enter Y co-ordinate” | — |  |
| 4 | 84 | Icons > Add icon | `Add icon <p0> with text <p1>` |  | numeric expression “Enter index of icon in image list (0-based)”; string expression “Enter text” | — |  |
| 5 | 85 | Image list > Set image list from BMP file | `Set image list to file <p0> (small images: <p1>)` |  | string expression “Enter large images bitmap file”; string expression “Enter small images bitmap file (optional)” | — |  |
| 6 | 86 | Icons > Set label text | `Set label at <p0> to <p1>` |  | numeric expression “Enter icon number”; string expression “Enter new text” | — |  |
| 7 | 87 | Icons > Clear all icons | `Clear all icons` |  |  | — |  |
| 8 | 88 | Icons > Delete icon | `Delete icon at <p0>` |  | numeric expression “Enter icon number” | — |  |
| 9 | 89 | Appearance > Set background colour | `Set background colour to <p0>` |  | numeric expression “Enter background colour (e.g. GetRGB(255,255,255))” | — |  |
| 10 | 90 | Appearance > Set view style | `Set view to <p0>` |  | numeric expression “Enter view (1 = icons, 2 = small icons, 3 = list)” | — |  |
| 11 | 91 | Icons > Arrange icons | `Arrange icons` |  |  | — |  |
| 12 | 92 | Icons > Force label edit | `Edit icon number <p0>` |  | numeric expression “Enter icon number” | — |  |
| 13 | 93 | Appearance > Set icon spacing | `Set icon spacing to <p0> x <p1>` |  | numeric expression “Enter horizontal spacing (from top-left of icon)”; numeric expression “Enter vertical spacing (from top-left of icon)” | — |  |
| 14 | 94 | Icons > Move icon | `Move icon number <p0> to ( <p1>, <p2>)` |  | numeric expression “Enter icon number”; numeric expression “Enter X to move to”; numeric expression “Enter Y to move to” | — |  |
| 15 | 95 | Icons > Select icon | `Select icon number <p0>` |  | numeric expression “Enter icon number to select” | — |  |
| 16 | 96 | Icons > Focus icon | `Focus icon number <p0>` |  | numeric expression “Enter icon number to focus” | — |  |
| 17 | 97 | Icons > Unselect icon | `Unselect icon number <p0>` |  | numeric expression “Enter icon number to unselect” | — |  |
| 18 | 98 | Appearance > Set label text colour | `Set text colour to <p0>` |  | numeric expression “Enter text colour (e.g. GetRGB(0,0,0))” | — |  |
| 19 | 99 | Appearance > Set label colour | `Set label colour to <p0>` |  | numeric expression “Enter label colour (e.g. GetRGB(255,255,255))” | — |  |
| 20 | 100 | Icons > Dehighlight icon | `Dehighlight icon number <p0>` |  | numeric expression “Enter icon number to dehighlight” | — |  |
| 21 | 101 | Icons > Highlight icon | `Highlight icon number <p0>` |  | numeric expression “Enter icon number to highlight” | — |  |
| 22 | 102 | Event > On label edit ended > Cancel edit changes | `Cancel edit changes` |  |  | — |  |
| 23 | 103 | Window > Focus On | `Focus On` |  |  | — |  |
| 24 | 104 | Window > Focus Off | `Focus Off` |  |  | — |  |
| 25 | 105 | Window > Show | `Show` |  |  | — |  |
| 26 | 106 | Window > Hide | `Hide` |  |  | — |  |
| 27 | 107 | Image list > Add file's associated icon to image list | `Add to imagelist associated icon for <p0>` |  | string expression “Enter filename to get icon from” | — |  |
| 28 | 108 | Image list > Add BMP file to image list | `Add file <p0> to image list (small images: <p1>)` |  | string expression “Enter BMP file for large images”; string expression “Enter BMP file for small images (optional)” | — |  |
| 29 | 109 | Icons > Insert icon | `Insert icon <p0> with text <p1> to position <p2>` |  | numeric expression “Enter index of icon in image list (0-based)”; string expression “Enter text of label”; numeric expression “Enter position to place icon in” | — |  |
| 30 | 110 | Image list > Save image list to BMP file | `Save image list to <p0> (small images to <p1>)` |  | string expression “Enter BMP file to save large image list to”; string expression “Enter BMP file to save small image list to (optional)” | — |  |
| 31 | 111 | Image list > Attach imagelist to Listview object | `Attach Icon View's imagelist to <p0>` |  | object “Select a Listview object to attach imagelist to” | — |  |
| 32 | 112 | Image list > Set icon number at Listview line | `Set icon to <p2> at line <p1> in <p0>` |  | object “Select Listview object to modify”; numeric expression “Enter line to set image for (0-based)”; numeric expression “Enter icon index in imagelist (0-based)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dimensions > Get width | `ivWidth(` |  |  | — |  |
| 1 | 81 | Dimensions > Get heigh | `ivHeight(` |  |  | — |  |
| 2 | 82 | Position > Get X co-ordinate | `ivGetX(` |  |  | — |  |
| 3 | 83 | Position > Get Y co-ordinate | `ivGetY(` |  |  | — |  |
| 4 | 84 | Icons > Get number of icons | `ivNumIcons(` |  |  | — |  |
| 5 | 85 | Icons > Get label | `ivLabelAt$(` |  | number → string | — |  |
| 6 | 86 | Selection > Get focused icon number | `ivFocusedIcon(` |  |  | — |  |
| 7 | 87 | Selection > Get selection length | `ivSelCount(` |  |  | — |  |
| 8 | 88 | Find > Find text | `ivFind(` |  | string; number | — |  |
| 11 | 91 | Selection > Get selected icon no. | `ivSelIconAt(` |  | number | — |  |
| 12 | 92 | Event > On label edit ended > Get new label text | `ivEditLabel$(` |  | → string | — |  |
| 13 | 93 | Image list > Get last added icon index | `ivLastIconIndex(` |  |  | — |  |
| 14 | 94 | Icons > Get image index at | `ivGetIcon(` |  | number | — |  |
