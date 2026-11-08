# Extension Boolean

- File: `Boolean.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Test Boolean Expression | `<object>: Test(<p0>)` |  | string expression “Enter Boolean Expression” |
| 1 | -82 | Has an Error Ocurred? | `<object>: Has Error <p0> Occured in <p1>?` |  | numeric expression “Enter Error Number (0 = Any Error)”; numeric expression “Enter Buffer Number (0-10; 0 = Any Buffer)” |
| 2 | -83 | Is Truth Slot Activated? | `<object>: Is Truth Slot <p0> Activated?` |  | numeric expression “Enter Truth Slot Number (0-99)” |
| 3 | -84 | Flags > Is Flag On? | `<object>: Is Flag <p0> On?` |  | numeric expression “Enter Flag Number (0-99)” |
| 4 | -85 | Flags > Is Flag Off? | `<object>: Is Flag <p0> Off?` |  | numeric expression “Enter Flag Number (0-99)” |
| 5 | -86 | If-Then-Else > If(Expression)-Then | `<object>: If(<p0>) Then` |  | string expression “Enter Boolean Expression” |
| 6 | -87 | If-Then-Else > Then | `<object>: Then` |  |  |
| 7 | -88 | If-Then-Else > Else | `<object>: Else` |  |  |
| 8 | -89 | If-Then-Else > End If | `<object>: End If` |  |  |
| 9 | -90 | If-Then-Else > Nested Ifs > Then If(Expression)-Then | `<object>: Then If(<p0>) Then` |  | string expression “Enter Boolean Expression” |
| 10 | -91 | If-Then-Else > Nested Ifs > Else If(Expression)-Then | `<object>: Else If(<p0>) Then` |  | string expression “Enter Boolean Expression” |
| 11 | -92 | If-Then-Else > If(Conditions)-Then [Open] | `<object>: If(` |  |  |
| 12 | -93 | If-Then-Else > Nested Ifs > Then If(Conditions)-Then [Open] | `<object>: Then If(` |  |  |
| 13 | -94 | If-Then-Else > Nested Ifs > Else If(Conditions)-Then [Open] | `<object>: Else If(` |  |  |
| 14 | -95 | If-Then-Else > If(Conditions)-Then [Close] (needed for all [Open]) | `<object>: ) Then` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set String Indicator | `Set String Indicator to <p0>` |  | string expression “Enter a Character” |
| 1 | 81 | Clear Errors | `Clear All Errors` |  |  |
| 2 | 82 | Activate Truth Slot | `Activate Truth Slot <p0>` |  | numeric expression “Enter a Truth Slot Number (0-99)” |
| 3 | 83 | Flags > Set Flag On | `Set Flag <p0> On` |  | numeric expression “Enter a Flag Number (0-99)” |
| 4 | 84 | Flags > Set Flag Off | `Set Flag <p0> Off` |  | numeric expression “Enter a Flag Number (0-99)” |
| 5 | 85 | Flags > Toggle Flag | `Toggle Flag <p0>` |  | numeric expression “Enter a Flag Number (0-99)” |
| 6 | 86 | Flags > Set Flag by Value | `Set Flag <p0>'s Value to <p1>` |  | numeric expression “Enter a Flag Number (0-99)”; numeric expression “Enter a Value (0 for Off or 1 for On)” |
| 7 | 87 | End All Ifs | `End All Ifs` |  |  |
| 8 | 88 | Null Action (Does nothing) | `Null Action` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Evaluate Boolean Expression | `EvaluateBoolean(` |  | string |
| 1 | 81 | Retrieve String Indicator | `GetIndicator$(` |  | → string |
| 2 | 82 | Get the Last Error Message | `GetError$(` |  | number → string |
| 3 | 83 | Get the Current Buffer Slot | `GetCurrentBuffer(` |  |  |
| 4 | 84 | Get the Value of a Truth Slot | `GetTruthValue(` |  | number |
| 5 | 85 | Get the Value of a Flag | `GetFlagValue(` |  | number |
| 6 | 86 | Immediate If > Return String | `IIfString$(` |  | string; string; string → string |
| 7 | 87 | Immediate If > Return Integer | `IIfInteger(` |  | string; number; number |
| 8 | 88 | Immediate If > Return Float (Decimal Number) | `IIfFloat(` |  | string; number; number |
