# Extension MMKXMLParser

- File: `MMKXMLParser.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Element Exists | `XML Parser: This object is not compatible with this version of MMF` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Element Manipulation > Root > Set Root Name | `XML Parser: This object is not compatible with this version of MMF` |  | string expression “Root Element name” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Name > Root | `XML Parser: This object is not compatible with this version of MMF` |  | → string |
