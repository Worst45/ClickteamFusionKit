# Extension maskedit

- File: `maskedit.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Window > Is Edit Mask Visible? | `<object>: Edit Mask is Visible` |  |  | — |  |
| 1 | -82 | Window > Is Edit Mask Enabled? | `<object>: Edit Mask is Enabled` |  |  | — |  |
| 2 | -83 | Window > Does Edit Mask Have Focus? | `<object>: Edit Mask has Focus` |  |  | — |  |
| 3 | -84 | On Successful Modification | `<object>: On Successful Modification` |  |  | — |  |
| 4 | -85 | On Unsuccessful Modification | `<object>: On Unsuccessful Modification` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Set X Position | `Set X Position to <p0>` |  | numeric expression “X Position” | — |  |
| 1 | 81 | Window > Set Y Position | `Set Y Position to <p0>` |  | numeric expression “Y Position” | — |  |
| 2 | 82 | Window > Set Width | `Set Width to <p0>` |  | numeric expression “Width” | — |  |
| 3 | 83 | Window > Set Height | `Set Height to <p0>` |  | numeric expression “Height” | — |  |
| 4 | 84 | Window > Enable | `Enable` |  |  | — |  |
| 5 | 85 | Window > Disable | `Disable` |  |  | — |  |
| 6 | 86 | Window > Show | `Show` |  |  | — |  |
| 7 | 87 | Window > Hide | `Hide` |  |  | — |  |
| 8 | 88 | Window > Set Focus On | `Set Focus On` |  |  | — |  |
| 9 | 89 | Window > Set Focus Off | `Set Focus Off` |  |  | — |  |
| 10 | 90 | Set Mask | `Set Mask to <p0>` |  | string expression “Mask” | — |  |
| 11 | 91 | Set Data | `Set Data to <p0>` |  | string expression “Data” | — |  |
| 12 | 92 | Set Prompt Character | `Set Prompt Character to <p0>` |  | string expression “Prompt Character (Default '_')” | — |  |
| 13 | 93 | Set Font | `Set Font to <p0>, Size <p1>` |  | string expression “Font Name”; numeric expression “Font Size” | — |  |
| 14 | 94 | Set Text Color | `Set Text Color to <p0>` |  | color “Text Color” | — |  |
| 15 | 95 | Set Background Color | `Set Background Color to <p0>` |  | color “Background Color” | — |  |
| 16 | 96 | Go to Position | `Go to Position <p0>` |  | numeric expression “Position” | — |  |
| 17 | 97 | Set Cell (Character) | `Set Cell <p0> to <p1> (Character)` |  | numeric expression “Cell”; string expression “Character” | — |  |
| 18 | 98 | Set Cell (Number) | `Set Cell <p0> to <p1> (Number)` |  | numeric expression “Cell”; numeric expression “Number” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Get X Position | `getX(` |  |  | — |  |
| 1 | 81 | Window > Get Y Position | `getY(` |  |  | — |  |
| 2 | 82 | Window > Get Width | `getW(` |  |  | — |  |
| 3 | 83 | Window > Get Height | `getH(` |  |  | — |  |
| 4 | 84 | Get Data | `getData$(` |  | → string | — |  |
| 5 | 85 | Get Text | `getText$(` |  | → string | — |  |
| 6 | 86 | Get Character at Cell | `getCell$(` |  | number → string | — |  |
| 7 | 87 | Get Token (String) | `getToken$(` |  | number → string | — |  |
| 8 | 88 | Get Number at Cell | `getCellV(` |  | number | — |  |
| 9 | 89 | Window > Get Window Handle (Advanced) | `hwnd(` |  |  | — |  |
