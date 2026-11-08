# Extension iconlist

- File: `iconlist.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Got focus? | `<object> Has focus?` |  |  |
| 1 | -82 | Selection changed | `<object> Selection changed` |  |  |
| 2 | -83 | Double click | `<object> Double click` |  |  |
| 3 | -84 | Is enabled? | `<object> Is highlighted?` |  |  |
| 4 | -85 | Is visible? | `<object> Is visible?` |  |  |
| 5 | -86 | Dropdown opened | `<object> Dropdown just opened` |  |  |
| 6 | -87 | Dropdown closed | `<object> Dropdown just closed` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set current line | `Set line: <p0>` |  | numeric expression “Line number” |
| 1 | 81 | Add a line | `Add line: <p0> with image: <p1>` |  | string expression “Line text”; numeric expression “Line image number” |
| 2 | 82 | Insert line at | `Insert line with text: <p0> with image: <p1> after: <p2>` |  | string expression “Line text”; numeric expression “Line image number”; numeric expression “Line to insert after” |
| 3 | 83 | Delete a line | `Delete line: <p0>` |  | numeric expression “Line number” |
| 4 | 84 | Edit line text | `Edit line text: <p1> with line text: <p0>` |  | string expression “Line text”; numeric expression “Line number to edit” |
| 5 | 85 | Edit line image | `Edit line image: <p1> with line image: <p0>` |  | numeric expression “Image number”; numeric expression “Line number to edit” |
| 6 | 86 | Reset | `Reset` |  |  |
| 7 | 87 | Position > Set X | `Set X to: <p0>` |  | numeric expression “X Coordinate” |
| 8 | 88 | Position > Set Y | `Set Y to: <p0>` |  | numeric expression “Y Coordinate” |
| 9 | 89 | Size > Set width | `Set width to: <p0>` |  | numeric expression “Width” |
| 10 | 90 | Size > Set height | `Set height to: <p0>` |  | numeric expression “Height” |
| 11 | 91 | Control > Give focus | `Get focus` |  |  |
| 12 | 92 | Control > Lose focus | `Lose focus` |  |  |
| 13 | 93 | Control > Dehighlight | `Dehighlight` |  |  |
| 14 | 94 | Control > Highlight | `Highlight` |  |  |
| 15 | 95 | Visibility > Show | `Show control` |  |  |
| 16 | 96 | Visibility > Hide | `Hide control` |  |  |
| 17 | 97 | Images > Add associated icon | `Add icon to imagelist from file: <p0>` |  | string expression “File path” |
| 18 | 98 | Control > Show dropdown | `Show dropdown part` |  |  |
| 19 | 99 | Control > Hide dropdown | `Hide dropdown part` |  |  |
| 20 | 100 | Images > Delete image | `Remove: <p0> from imagelist` |  | numeric expression “Image index number to remove” |
| 21 | 101 | Images > Clear all images | `Clear imagelist` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Current line number | `get Line Number(` |  |  |
| 1 | 81 | Current line text | `get Line Text$(` |  | → string |
| 2 | 82 | Current line image | `get Line Image(` |  |  |
| 3 | 83 | Get line text | `get Line$(` |  | number → string |
| 4 | 84 | Number of lines | `get Number Lines(` |  |  |
| 8 | 88 | Get line image | `get Image Line(` |  | number |
| 9 | 89 | Images > Get number of images | `get Number Images(` |  |  |
| 11 | 91 | Images > Get width | `get Image Width(` |  |  |
| 12 | 92 | Images > Get height | `get Image Height(` |  |  |
