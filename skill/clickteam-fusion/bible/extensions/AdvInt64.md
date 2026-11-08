# Extension AdvInt64

- File: `AdvInt64.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Unsigned > Variable A == Variable B | `<p0> == <p1> (Unsigned)` |  | string expression “Variable A”; string expression “Variable B” |
| 1 | -82 | Unsigned > Variable A >= Variable B | `<p0> >= <p1> (Unsigned)` |  | string expression “Variable A”; string expression “Variable B” |
| 2 | -83 | Unsigned > Variable A > Variable B | `<p0> > <p1> (Unsigned)` |  | string expression “Variable A”; string expression “Variable B” |
| 3 | -84 | Unsigned > Variable A <= Variable B | `<p0> <= <p1> (Unsigned)` |  | string expression “Variable A”; string expression “Variable B” |
| 4 | -85 | Unsigned > Variable A < Variable B | `<p0> < <p1> (Unsigned)` |  | string expression “Variable A”; string expression “Variable B” |
| 5 | -86 | Signed > Variable A == Variable B | `<p0> == <p1> (Signed)` |  | string expression “Variable A”; string expression “Variable B” |
| 6 | -87 | Signed > Variable A >= Variable B | `<p0> >= <p1> (Signed)` |  | string expression “Variable A”; string expression “Variable B” |
| 7 | -88 | Signed > Variable A > Variable B | `<p0> > <p1> (Signed)` |  | string expression “Variable A”; string expression “Variable B” |
| 8 | -89 | Signed > Variable A <= Variable B | `<p0> <= <p1> (Signed)` |  | string expression “Variable A”; string expression “Variable B” |
| 9 | -90 | Signed > Variable A < Variable B | `<p0> < <p1> (Signed)` |  | string expression “Variable A”; string expression “Variable B” |
| 10 | -91 | Unsigned > On Variable Loop | `<object>: On Unsigned Variable Loop` |  |  |
| 11 | -92 | Signed > On Variable Loop | `<object>: On Signed Variable Loop` |  |  |
| 12 | -93 | Unsigned Variable Exists | `<object>: Unsigned Variable <p0> Exists` |  | string expression “Variable Name” |
| 13 | -94 | Signed Variable Exists | `<object>: Signed Variable <p0> Exists` |  | string expression “Variable Name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Unsigned > Set Variable | `Unsigned: Set <p0> to <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Set the Variable to” |
| 1 | 81 | Unsigned > Add to Variable | `Unsigned: Add <p1> to <p0>` |  | string expression “Name of Variable to Modify”; string expression “Value to Add to the Variable” |
| 2 | 82 | Unsigned > Subtract from Variable | `Unsigned: Subtract <p1> from <p0>` |  | string expression “Name of Variable to Modify”; string expression “Value to Subtract from the Variable” |
| 3 | 83 | Unsigned > Multiply Variable | `Unsigned: Multiply <p0> by <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Multiply the Variable by” |
| 4 | 84 | Unsigned > Divide Variable | `Unsigned: Divide <p0> by <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Divide the Variable by” |
| 5 | 85 | Unsigned > Raise Variable to Power | `Unsigned: Raise <p0> to the power of <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Raise the Variable to the Power of” |
| 6 | 86 | Unsigned > Perform Modulo on Variable | `Unsigned: Set <p0> to <p0> mod <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to perform the Modulo operator with the Variable” |
| 7 | 87 | Unsigned > Set Byte in Variable | `Unsigned: Set Byte <p1> in <p0> to <p2>` |  | string expression “Name of Variable”; numeric expression “Byte to Adjust (0-7)”; numeric expression “Unsigned Byte Value (0-255)” |
| 8 | 88 | Unsigned > Delete Variable | `Unsigned: Delete <p0>` |  | string expression “Name of Variable to Delete” |
| 9 | 89 | Unsigned > Delete All Variables | `Unsigned: Delete All Variables` |  |  |
| 10 | 90 | Signed > Set Variable | `Signed: Set <p0> to <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Set the Variable to” |
| 11 | 91 | Signed > Add to Variable | `Signed: Add <p1> to <p0>` |  | string expression “Name of Variable to Modify”; string expression “Value to Add to the Variable” |
| 12 | 92 | Signed > Subtract from Variable | `Signed: Subtract <p1> from <p0>` |  | string expression “Name of Variable to Modify”; string expression “Value to Subtract from the Variable” |
| 13 | 93 | Signed > Multiply Variable | `Signed: Multiply <p0> by <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Multiply the Variable by” |
| 14 | 94 | Signed > Divide Variable | `Signed: Divide <p0> by <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Divide the Variable by” |
| 15 | 95 | Signed > Raise Variable to Power | `Signed: Raise <p0> to the power of <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to Raise the Variable to the Power of” |
| 16 | 96 | Signed > Perform Modulo on Variable | `Signed: Set <p0> to <p0> mod <p1>` |  | string expression “Name of Variable to Modify”; string expression “Value to perform the Modulo operator with the Variable” |
| 17 | 97 | Signed > Set Byte in Variable | `Signed: Set Byte <p1> in <p0> to <p2>` |  | string expression “Name of Variable”; numeric expression “Byte to Adjust (0-7)”; numeric expression “Unsigned Byte Value (0-255)” |
| 18 | 98 | Signed > Delete Variable | `Signed: Delete <p0>` |  | string expression “Name of Variable to Delete” |
| 19 | 99 | Signed > Delete All Variables | `Signed: Delete All Variables` |  |  |
| 20 | 100 | Loop Through Variables | `Loop Through Variables (Mode=<p0>)` |  | numeric expression “0 = unsigned, 1 = signed, anything else = both” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Unsigned Variable | `GetUnsignedVar$(` |  | string “Variable Name” → string |
| 1 | 81 | Get Signed Variable | `GetSignedVar$(` |  | string “Variable Name” → string |
| 2 | 82 | Get Unsigned Variable Byte | `GetUnsignedVarByte(` |  | string “Variable Name”; number “Byte to Get (0-7)” |
| 3 | 83 | Get Signed Variable Byte | `GetSignedVarByte(` |  | string “Variable Name”; number “Byte to Get (0-7)” |
| 4 | 84 | Loop: Get Unsigned Variable Name | `GetUnsignedVarName$(` |  | → string |
| 5 | 85 | Loop: Get Signed Variable Name | `GetSignedVarName$(` |  | → string |
| 6 | 86 | Quick Expressions > Unsigned > A + B | `UAdd$(` |  | string “A”; string “B” → string |
| 7 | 87 | Quick Expressions > Unsigned > A - B | `USub$(` |  | string “A”; string “B” → string |
| 8 | 88 | Quick Expressions > Unsigned > A * B | `UMul$(` |  | string “A”; string “B” → string |
| 9 | 89 | Quick Expressions > Unsigned > A / B | `UDiv$(` |  | string “A”; string “B” → string |
| 10 | 90 | Quick Expressions > Unsigned > A ^ B | `UPow$(` |  | string “A”; string “B” → string |
| 11 | 91 | Quick Expressions > Unsigned > A % B | `UMod$(` |  | string “A”; string “B” → string |
| 12 | 92 | Quick Expressions > Signed > A + B | `SAdd$(` |  | string “A”; string “B” → string |
| 13 | 93 | Quick Expressions > Signed > A - B | `SSub$(` |  | string “A”; string “B” → string |
| 14 | 94 | Quick Expressions > Signed > A * B | `SMul$(` |  | string “A”; string “B” → string |
| 15 | 95 | Quick Expressions > Signed > A / B | `SDiv$(` |  | string “A”; string “B” → string |
| 16 | 96 | Quick Expressions > Signed > A ^ B | `SPow$(` |  | string “A”; string “B” → string |
| 17 | 97 | Quick Expressions > Signed > A % B | `SMod$(` |  | string “A”; string “B” → string |
