# Extension ValuePacker

- File: `ValuePacker.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is a specific bit set? | `<object>: Bit <p0> is set` |  | numeric expression “Bit number (0-31)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set value | `Set value to <p0>` |  | numeric expression “Set value” |
| 1 | 81 | Pack n-bit value | `Pack <p1>-bit value <p0> at bit <p2>` |  | numeric expression “Set value”; numeric expression “Number of bits (1-32)”; numeric expression “Starting at bit (0-31)” |
| 2 | 82 | Set bit | `Set bit <p0>` |  | numeric expression “Bit number (0-31)” |
| 3 | 83 | Clear bit | `Clear bit <p0>` |  | numeric expression “Bit number (0-31)” |
| 4 | 84 | Toggle bit | `Toggle bit <p0>` |  | numeric expression “Bit number (0-31)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get value | `Value(` |  |  |
| 1 | 81 | Get packed n-bit value | `Packed Value(` |  | number “First bit”; number “Number of bits” |
| 2 | 82 | Get bit | `Bit(` |  | number “Bit number” |
