# Extension Int64

- File: `Int64.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Stored number comparisons > Stored number is equal to... | `<object> : Stored number = <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 1 | -82 | Stored number comparisons > Stored number is different to... | `<object> : Stored number <> <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 2 | -83 | Stored number comparisons > Stored number is greater than... | `<object> : Stored number > <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 3 | -84 | Stored number comparisons > Stored number is less than... | `<object> : Stored number < <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 4 | -85 | Stored number comparisons > Stored number is greater or equal to... | `<object> : Stored number >= <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 5 | -86 | Stored number comparisons > Stored number is less or equal to... | `<object> : Stored number <= <p0>` |  | string expression “Enter 64 bit integer (as string” |
| 6 | -87 | Comparisons > Equals... | `<object> : <p0> = <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |
| 7 | -88 | Comparisons > Not equal... | `<object> : <p0> <> <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |
| 8 | -89 | Comparisons > Greater than... | `<object> : <p0> > <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |
| 9 | -90 | Comparisons > Less than... | `<object> : <p0> < <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |
| 10 | -91 | Comparisons > Greater or equal... | `<object> : <p0> >= <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |
| 11 | -92 | Comparisons > Less or equal... | `<object> : <p0> <= <p1>` |  | string expression “Enter 64 bit integer (as string)”; string expression “Enter 64 bit integer (as string)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set stored number | `Set stored number to <p0>` |  | string expression “Enter 64 bit integer (as string)” |
| 1 | 81 | Stored value > Add | `Add <p0> to stored number` |  | string expression “Enter 64 bit integer (as string)” |
| 2 | 82 | Stored value > Subtract | `Subtract <p0> from stored number` |  | string expression “Enter 64 bit integer (as string)” |
| 3 | 83 | Stored value > Multiply | `Multiply stored number by <p0>` |  | string expression “Enter 64 bit integer (as string)” |
| 4 | 84 | Stored value > Divide | `Divide stored number by <p0>` |  | string expression “Enter 64 bit integer (as string)” |
| 5 | 85 | Stored value > Modulus | `Mod stored number by <p0>` |  | string expression “Enter 64 bit integer (as string)” |
| 6 | 86 | Stored value > Power | `Power stored number by <p0>` |  | numeric expression “Enter positive integer to power by” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get stored number (string) | `Stored$(` |  | → string |
| 1 | 81 | Get stored number (truncated 32 bit int) | `Stored(` |  |  |
| 2 | 82 | Add | `Add$(` |  | string; string → string |
| 3 | 83 | Subtract | `Sub$(` |  | string; string → string |
| 4 | 84 | Multiply | `Mult$(` |  | string; string → string |
| 5 | 85 | Divide | `Div$(` |  | string; string → string |
| 6 | 86 | Modulus | `Modulus$(` |  | string; string → string |
| 7 | 87 | Power | `Power$(` |  | string; number → string |
