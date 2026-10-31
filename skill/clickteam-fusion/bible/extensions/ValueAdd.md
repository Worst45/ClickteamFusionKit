# Extension ValueAdd

- File: `ValueAdd.mfx` — third-party extension (shipped with a downloaded project)
- Name(s) shown in projects: “Value-Add Object”
- Usage in the corpus: 30 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare to Value | `<object>: Ext. Alt. Value <p1> of <p0> <p2>` |  | object “Object”; string expression “Extended Alt. Value Name”; numeric comparison “To Compare Against” | 8 (1 proj.) |  |
| 1 | -82 | Compare to String | `<object>: Ext. Alt. String <p1> of <p0> <p2>` |  | object “Object”; string expression “Extended Alt. Sring Name”; string comparison “To Compare Against” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Value | `<object>: Set Ext. Alt. Value <p1> of <p0> to <p2>` |  | object “Object”; string expression “Extended Alt. Value's Name”; numeric expression “New Value” | 14 (1 proj.) |  |
| 1 | 81 | Spread Value | `<object>: Spread Value <p2> (+<p3>) in Ext. Alt. Value <p1> of <p0>` |  | object “Object”; string expression “Extended Alt. Value's Name”; numeric expression “Start Value”; numeric expression “Step Value” | 1 (1 proj.) |  |
| 2 | 82 | Set String | `<object>: Set Ext. Alt. String <p1> of <p0> to <p2>` |  | object “Object”; string expression “Extended Alt. String's Name”; string expression “New Value” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Value | `alt(` |  | number “Fixed Value of Object”; string “Extended Alt. Value's Name” | 7 (1 proj.) |  |
| 1 | 81 | Get String | `alt$(` |  | number “Fixed Value of Object”; string “Extended Alt. String's Name” → string | — |  |
