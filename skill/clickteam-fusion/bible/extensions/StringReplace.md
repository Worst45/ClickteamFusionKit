# Extension StringReplace

- File: `StringReplace.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set case sensitivity and match limit | `Case senstive = <p0>, Max matches = <p1>` |  | numeric expression “Case sensitive? (0=No, 1=Yes)”; numeric expression “Maximum number of matches (negative = infinite)” |
| 1 | 81 | Add to Auto replace... > Add string to replace with string | `Add pattern: <p0> gets replaced by <p1>` |  | string expression “String to replace”; string expression “String to replace with” |
| 2 | 82 | Add to Auto replace... > Add string to replace with macro | `Add pattern: <p0> gets replaced by <p1> (as a macro)` |  | string expression “String to replace”; string expression “String to replace with” |
| 3 | 83 | Add to Auto replace... > Add string to replace with global string | `Add pattern: <p0> gets replaced by Global String <p1>` |  | string expression “String to replace”; numeric expression “Global String number” |
| 4 | 84 | Add to Auto replace... > Add string to replace with global value | `Add pattern: <p0> gets replaced by Global Value <p1>` |  | string expression “String to replace”; numeric expression “Global Value number” |
| 5 | 85 | Add to Auto replace... > Add string to replace with array reference | `Add pattern: <p0> gets replaced by <p1> element (<p2>,<p3>,<p4>)` |  | string expression “String to replace”; string expression “Array object name”; numeric expression “X Position”; numeric expression “Y Position”; numeric expression “Z Position” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Automatic Replace | `ReplaceAuto$(` |  | string “source” → string |
| 1 | 81 | Replace Substring | `ReplaceSubstring$(` |  | string “source”; string “string to find”; string “string to replace with” → string |
