# Extension ExpEval

- File: `ExpEval.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error (immediate) | `<object>: On Error` |  |  | — |  |
| 1 | -82 | Error Has Occured (not immediate) | `<object>: Error Has Occured` |  |  | — |  |
| 2 | -83 | On Function | `<object>: On Function <p0>` |  | string expression “Enter the Name of the Function” | — |  |
| 3 | -84 | On Operation | `<object>: On Operator <p0>` |  | string expression “Enter the Operator (No Letters or Numbers)” | — |  |
| 4 | -85 | First Iteration | `<object>: First Iteration of Current MMF Function or Operator` |  |  | — |  |
| 5 | -86 | Set to Iterate | `<object>: Current MMF Function or Operator is Set to Iterate` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Clear Errors | `Clear Errors` |  |  | — |  |
| 1 | 81 | Set String Indicator | `Set String Indicator Character to <p0>` |  | string expression “Enter the String Indicator Character” | — |  |
| 2 | 82 | Define a Function | `<p0> ( <p1> Parameters ) := <p2>` |  | string expression “Enter the Name of the Function”; numeric expression “Enter the Number of Parameters”; string expression “Enter the Expression (Parameters are p1, p2, p3, etc.)” | — |  |
| 3 | 83 | Define an Operator | `p1 <p0> p2 := <p1> at Precedence Level <p2>` |  | string expression “Enter the Operator (No Letters or Numbers)”; string expression “Enter the Expression (Parameters are p1 and p2)”; numeric expression “Enter the Operator Precedence Number” | — |  |
| 4 | 84 | MMF Functions and Operators > Define an MMF Function | `<p0> ( <p1> Parameters )--Evaluate Parameters?: <p2>` |  | string expression “Enter the Name of the Function”; numeric expression “Enter the Number of Parameters”; numeric expression “Have Object Evaluate Parameters? (0 = No; 1 = Yes)” | — |  |
| 5 | 85 | MMF Functions and Operators > Define an MMF Operator | `p1 <p0> p2 at Precedence Level <p1>--Evaluate Parameters?: <p2>` |  | string expression “Enter the Operator (No Letters or Numbers)”; numeric expression “Enter the Operator Precedence Number”; numeric expression “Have Object Evaluate Parameters? (0 = No; 1 = Yes)” | — |  |
| 6 | 86 | MMF Functions and Operators > Return a Value | `Return <p0>` |  | string expression “Enter the Value to be Returned” | — |  |
| 7 | 87 | MMF Functions and Operators > Generate an Error | `Generate Error: <p0>` |  | string expression “Enter the Error Message” | — |  |
| 8 | 88 | Evaluate an Expression | `Evaluate <p0>` |  | string expression “Enter the Expression to Evaluate” | — |  |
| 9 | 89 | MMF Functions and Operators > Looping > Iterate Current MMF Function or Operator | `Iterate Current MMF Function or Operator` |  |  | — |  |
| 10 | 90 | MMF Functions and Operators > Looping > Redraw Frame | `Redraw Frame` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Evaluate Expression | `Evaluate$(` |  | string → string | — |  |
| 1 | 81 | Get Last Error Message | `LastError$(` |  | → string | — |  |
| 2 | 82 | Get String Indicator | `StringIndicator$(` |  | → string | — |  |
| 3 | 83 | Get Current Loop Index | `CurrentLoopIndex(` |  |  | — |  |
| 4 | 84 | Expression Analysis > Convert Expression to Lowercase | `LowerCase$(` |  | string → string | — |  |
| 5 | 85 | Expression Analysis > Remove Whitespace from an Expression | `RemoveWhiteSpace$(` |  | string → string | — |  |
| 6 | 86 | Expression Analysis > Find in Expression | `FindInExpression(` |  | string; string; number; number | — |  |
| 7 | 87 | Convert Integer to String of So Many Digits | `StrDigits$(` |  | number; number → string | — |  |
| 8 | 88 | Convert ExpEval String to MMF String | `ConvertString$(` |  | string → string | — |  |
