# Extension BitMask

- File: `BitMask.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Bit mask on two numbers (first,second,mask) | `BitMask(` |  | number; number; string |
| 1 | 81 | Bit mask on one number (number,mask) | `SingleMask(` |  | number; string |
| 2 | 82 | Get Nth Bit | `NthBit(` |  | number; number |
