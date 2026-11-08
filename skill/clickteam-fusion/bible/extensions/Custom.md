# Extension Custom

- File: `Custom.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Function | `<object>: On Function <p0>` |  | string expression “Enter the Function Name” |
| 1 | -82 | On Error | `<object>: On Error` |  |  |
| 2 | -83 | On Creation of an Instance | `<object>: On Creation of an Instance` |  |  |
| 3 | -84 | On Destruction of an Instance | `<object>: On Destruction of an Instance` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Specify an Instance > Call a Function | `Call Function <p1> with Parameters <p2> and with Return Type <p3> for Instance <p0> and Store Result in Slot <p4>` |  | string expression “Enter the Instance Name”; string expression “Enter the Function Name”; string expression “Enter the Parameter List”; numeric expression “Enter the Return Type (0=void; 1=integer; 2=float; 3=string)”; numeric expression “Enter a Slot Number (0-10)” |
| 1 | 81 | Specify an Instance > Set an Integer Variable | `Set Member Integer <p1> of Instance <p0> to <p2>` |  | string expression “Enter the Instance Name”; string expression “Enter the Variable Name”; numeric expression “Enter an Integer” |
| 2 | 82 | Specify an Instance > Set a Float Variable | `Set Member Float <p1> of Instance <p0> to <p2>` |  | string expression “Enter the Instance Name”; string expression “Enter the Variable Name”; numeric expression “Enter a Float” |
| 3 | 83 | Specify an Instance > Set a String Variable | `Set Member String <p1> of Instance <p0> to <p2>` |  | string expression “Enter the Instance Name”; string expression “Enter the Variable Name”; string expression “Enter a String” |
| 4 | 84 | Current Instance > Call a Function | `Call Function <p0> with Parameters <p1> and with Return Type <p3> for Current Instance and Store Result in Slot <p4>` |  | string expression “Enter the Function Name”; string expression “Enter the Parameter List”; numeric expression “Enter the Return Type (0=void; 1=integer; 2=float; 3=string)”; numeric expression “Enter a Slot Number (0-10)” |
| 5 | 85 | Current Instance > Set an Integer Variable | `Set Member Integer <p0> of Current Instance to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter an Integer” |
| 6 | 86 | Current Instance > Set a Float Variable | `Set Member Float <p0> of Current Instance to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter a Float” |
| 7 | 87 | Current Instance > Set a String Variable | `Set Member String <p0> of Current Instance to <p1>` |  | string expression “Enter the Variable Name”; string expression “Enter a String” |
| 8 | 88 | Create Instance | `Create Instance <p0> with Parameters <p1>` |  | string expression “Enter the Instance Name”; string expression “Enter the Parameter List” |
| 9 | 89 | Destroy Instance | `Destroy Instance <p0>` |  | string expression “Enter the Instance Name” |
| 10 | 90 | Returns and Loops > Return | `Return from Current Function` |  |  |
| 11 | 91 | Returns and Loops > Return an Integer | `Return from Current Function with Integer <p0>` |  | numeric expression “Enter an Integer” |
| 12 | 92 | Returns and Loops > Return a Float | `Return from Current Function with Float <p0>` |  | numeric expression “Enter a Float” |
| 13 | 93 | Returns and Loops > Return a String | `Return from Current Function with String <p0>` |  | string expression “Enter a String” |
| 14 | 94 | Global Variables > Create a Global Variable | `Create Global Variable <p0>` |  | string expression “Enter the Variable Name” |
| 15 | 95 | Global Variables > Set an Integer Variable | `Set Global Integer <p0> to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter an Integer” |
| 16 | 96 | Global Variables > Set a Float Variable | `Set Global Float <p0> to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter a Float” |
| 17 | 97 | Global Variables > Set a String Variable | `Set Global String <p0> to <p1>` |  | string expression “Enter the Variable Name”; string expression “Enter a String” |
| 18 | 98 | Local Variables > Create a Local Variable | `Create Local Variable <p0>` |  | string expression “Enter the Variable Name” |
| 19 | 99 | Local Variables > Set an Integer Variable | `Set Local Integer <p0> to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter an Integer” |
| 20 | 100 | Local Variables > Set a Float Variable | `Set Local Float <p0> to <p1>` |  | string expression “Enter the Variable Name”; numeric expression “Enter a Float” |
| 21 | 101 | Local Variables > Set a String Variable | `Set Local String <p0> to <p1>` |  | string expression “Enter the Variable Name”; string expression “Enter a String” |
| 22 | 102 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  |
| 23 | 103 | Returns and Loops > Set Function to Loop | `Loop Current Function` |  |  |
| 24 | 104 | Set Default Instance | `Set Default Instance to <p0>` |  | string expression “Enter the Instance Name” |
| 25 | 105 | Errors > Generate an Error | `Generate Error <p0>` |  | numeric expression “Enter Error Code to Generate” |
| 26 | 106 | Destroy All Instances | `Destroy All Instances` |  |  |
| 27 | 107 | Miscellaneous > Count Selected Objects | `Count all Selected <p0>` |  | object “Choose the Object” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Slot Data > Get an Integer from a Slot | `IntegerSlot(` |  | number |
| 1 | 81 | Slot Data > Get a Float from a Slot | `FloatSlot(` |  | number |
| 2 | 82 | Slot Data > Get a String from a Slot | `StringSlot$(` |  | number → string |
| 3 | 83 | Specify an Instance > Get an Integer Variable | `IntOfInstance(` |  | string; string |
| 4 | 84 | Specify an Instance > Get a Float Variable | `FloatOfInstance(` |  | string; string |
| 5 | 85 | Specify an Instance > Get a String Variable | `StringOfInstance$(` |  | string; string → string |
| 6 | 86 | Current Instance > Get an Integer Variable | `IntOfCurrInstance(` |  | string |
| 7 | 87 | Current Instance > Get a Float Variable | `FloatOfCurrInstance(` |  | string |
| 8 | 88 | Current Instance > Get a String Variable | `StringOfCurrInstance$(` |  | string → string |
| 9 | 89 | Global Variables > Get an Integer Variable | `GlobalInt(` |  | string |
| 10 | 90 | Global Variables > Get a Float Variable | `GlobalFloat(` |  | string |
| 11 | 91 | Global Variables > Get a String Variable | `GlobalString$(` |  | string → string |
| 12 | 92 | Local Variables > Get an Integer Variable | `LocalInt(` |  | string |
| 13 | 93 | Local Variables > Get a Float Variable | `LocalFloat(` |  | string |
| 14 | 94 | Local Variables > Get a String Variable | `LocalString$(` |  | string → string |
| 15 | 95 | Miscellaneous > Get Loop Index of Current Function | `FunctionLoopNumber(` |  |  |
| 16 | 96 | Errors > Get Current Error Code | `Error(` |  |  |
| 17 | 97 | Miscellaneous > Format a String | `FormatString$(` |  | string → string |
| 18 | 98 | Miscellaneous > Unformat a String | `UnformatString$(` |  | string → string |
| 19 | 99 | Current Instance > Get Name of Instance | `GetInstanceName$(` |  | → string |
| 20 | 100 | Miscellaneous > Get Return Type of Current Function | `GetReturnType(` |  |  |
| 21 | 101 | Errors > Get Current Expression Error Code | `ExpressionError(` |  |  |
| 22 | 102 | Miscellaneous > Get Number of Parameters of Current Function | `NumberOfParameters(` |  |  |
| 24 | 104 | Miscellaneous > Get Number of Selected Objects | `CountSelected(` |  | number |
