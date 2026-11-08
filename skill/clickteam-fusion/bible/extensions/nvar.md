# Extension nvar

- File: `nvar.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exist > Key exist | `<object>: Key <p0> exist` |  | string expression “Key” | — |  |
| 1 | -82 | Key exist > Number of keys starts with substring | `<object>: <p1> keys starts with <p0>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “Number of keys starts with substring”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 2 | -83 | Key exist > Number of keys ends with substring | `<object>: <p1> keys ends with <p0>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “Number of keys ends with substring”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 3 | -84 | Key exist > Number of keys contains substring | `<object>: <p1> keys contains <p0>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “Number of keys contains substring”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 4 | -85 | Key exist > Last key exist | `<object>: Last key exist result` |  |  | — |  |
| 5 | -86 | Array modified | `<object>: Array was modified` |  |  | — |  |
| 6 | -87 | Array is empty | `<object>: Array is empty` |  |  | — |  |
| 7 | -88 | File progress > File is loading | `<object>: File is loading` |  |  | — |  |
| 8 | -89 | File progress > File is saving | `<object>: File is saving` |  |  | — |  |
| 9 | -90 | File progress > Done loading file | `<object>: Done loading` |  |  | — |  |
| 10 | -91 | File progress > Done saving file | `<object>: Done saving` |  |  | — |  |
| 11 | -92 | Error occured | `<object>: Error occured` |  |  | — |  |
| 12 | -93 | On iterate loop | `<object>: OnIterateLoop` |  |  | — |  |
| 13 | -94 | Item status > Item contains value | `<object>: Item <p0> contains value` |  | string expression “Key” | — |  |
| 14 | -95 | Item status > Item contains string | `<object>: Item <p0> contains string` |  | string expression “Key” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Items > Add/modify value | `Set key <p0> to <p1>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 1 | 81 | Items > Modify value > Add to value | `Add <p1> to value with key <p0>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 2 | 82 | Items > Modify value > Subtract from value | `Subtract <p1> from value with key <p0>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 3 | 83 | Items > Modify value > Multiply value | `Multiply value at key <p0> with <p1>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 4 | 84 | Items > Modify value > Divide from value | `Divide value with key <p0> with <p1>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 5 | 85 | Items > Modify value > Mod value | `Mod value with key <p0> with <p1>` |  | string expression “Key”; numeric expression “Value” | — |  |
| 6 | 86 | Items > Modify value > Use operator on value | `Use operator <p1> on value with key <p0> operand <p1>` |  | string expression “Key”; string expression “Operator (+ - * / %%)”; numeric expression “Value” | — |  |
| 7 | 87 | Items > Set at address > Set value at address | `Set value to <p0> at address <p1>` |  | numeric expression “ID of array to Replicate from”; numeric expression “Value” | — |  |
| 8 | 88 | Items > Add/Modify string | `Set key <p0> to <p1>` |  | string expression “Key”; string expression “String” | — |  |
| 9 | 89 | Items > Set at address > Set string at address | `Set string to <p0> at address <p1>` |  | numeric expression “ID of array to Replicate from”; string expression “String” | — |  |
| 10 | 90 | Items > Delete variable | `Delete variable with key <p0>` |  | string expression “Key” | — |  |
| 11 | 91 | Array > Clear array | `Clear array` |  |  | — |  |
| 12 | 92 | Array > Crop > Crop array according to keys starting with | `Crop array where keys starts with <p0>, case insensitive = <p1>` |  | string expression “Key”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 13 | 93 | Array > Crop > Crop array according to keys ending with | `Crop array where keys ends with <p0>, case insensitive = <p1>` |  | string expression “Key”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 14 | 94 | Array > Crop > Crop array according to keys containing | `Crop array where keys contains <p0>, case insensitive = <p1>` |  | string expression “Key”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 15 | 95 | Array > Replicate > Replicate all | `Replicate all from array <p0>` |  | numeric expression “ID of array to Replicate from” | — |  |
| 16 | 96 | Array > Replicate > Replicate array according to keys starting with | `Replicate all with keys starting with <p0> from array <p1>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 17 | 97 | Array > Replicate > Replicate array according to keys ending with | `Replicate all with keys ending with <p0> from array <p1>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 18 | 98 | Array > Replicate > Replicate array according to keys containing | `Replicate all with keys containing <p0> to array <p1>, case insensitive = <p2>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)” | — |  |
| 19 | 99 | Clear error | `Clear error` |  |  | — |  |
| 20 | 100 | Iterate array | `Iterate array from index <p0> to <p1>` |  | numeric expression “Start index (zero based)”; numeric expression “End index (zero based)” | — |  |
| 21 | 101 | File communication > INI > Save as INI with delimiter | `Save as INI file <p0>, creation order = <p1>, own thread <p2>, delimiter <p3>, value tag <p4>, default group <p5>` |  | string expression “Filename”; numeric expression “Save creation order (1) or alphabeticly order (0)”; numeric expression “Operate in own thread (0=no, 1=yes)”; string expression “Delimiter”; string expression “Tag to represent values (default "#")”; string expression “Default group” | — |  |
| 22 | 102 | File communication > INI > Load from INI with delimiter | `Load from INI file <p0>, own thread <p1>, delimiter <p2>, value tag <p3>` |  | string expression “Filename”; numeric expression “Operate in own thread (0=no, 1=yes)”; string expression “Delimiter”; string expression “Tag to represent values (default "#")” | — |  |
| 23 | 103 | Modified flag > Set modified flag on | `Set modified flag on` |  |  | — |  |
| 24 | 104 | Modified flag > Set modified flag off | `Set modified flag off` |  |  | — |  |
| 25 | 105 | File communication > Array file > Save as NVO array file | `Save as array file <p0>, creation order = <p1>, own thread <p2>` |  | string expression “Filename”; numeric expression “Save creation order (1) or alphabeticly order (0)”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 26 | 106 | File communication > Array file > Load from NVO array file | `Load from array file <p0>, own thread <p1>` |  | string expression “Filename”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 27 | 107 | File communication > Array file > Save as encrypted NVO array file | `Save as encrypted array file <p0>, creation order = <p1>, key <p2>, own thread <p3>` |  | string expression “Filename”; numeric expression “Save creation order (1) or alphabeticly order (0)”; string expression “Key to encrypt/decrypt with”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 28 | 108 | File communication > Array file > Load from encrypted NVO array file | `Load from encrypted array file <p0>, key <p1>, own thread <p2>` |  | string expression “Filename”; string expression “Key to encrypt/decrypt with”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 29 | 109 | File communication > INI > Save as INI | `Save as INI file <p0>, section <p1>, value tag <p2>, creation order = <p3>, own thread <p4>` |  | string expression “Filename”; string expression “INI-file section”; string expression “Tag to represent values (default "#")”; numeric expression “Save creation order (1) or alphabeticly order (0)”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 30 | 110 | File communication > INI > Load from INI | `Load from INI file <p0>, section <p1>, value tag <p2>, own thread <p3>, value tag <p4>` |  | string expression “Filename”; string expression “INI-file section”; string expression “Tag to represent values (default "#")”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 31 | 111 | File communication > CSV > Save as comma separated values | `Save as CSV file <p0>, creation order = <p1> , own thread <p2>` |  | string expression “Filename”; numeric expression “Save creation order (1) or alphabeticly order (0)”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 32 | 112 | File communication > CSV > Load from comma separated values | `Load from CSV file <p0>, own thread <p1>` |  | string expression “Filename”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 33 | 113 | File communication > XML > Save as XML | `Save as XML file <p0>, creation order = <p1>, own thread <p2>` |  | string expression “Filename”; numeric expression “Save creation order (1) or alphabeticly order (0)”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 34 | 114 | File communication > XML > Load from XML | `Load from XML file <p0>, own thread <p1>` |  | string expression “Filename”; numeric expression “Operate in own thread (0=no, 1=yes)” | — |  |
| 35 | 115 | Array > Merge > Merge all | `Merge all from array <p0>, replace = <p1>` |  | numeric expression “ID of array to Replicate from”; numeric expression “Replace values if same key? (0 = no, 1 = yes)” | — |  |
| 36 | 116 | Array > Merge > Merge array according to keys starting with | `Merge all with keys starting with <p0> from array <p1>, case insensitive = <p2>, replace = <p3>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)”; numeric expression “Replace values if same key? (0 = no, 1 = yes)” | — |  |
| 37 | 117 | Array > Merge > Merge array according to keys ending with | `Merge all with keys ending with <p0> from array <p1>, case insensitive = <p2>, replace = <p3>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)”; numeric expression “Replace values if same key? (0 = no, 1 = yes)” | — |  |
| 38 | 118 | Array > Merge > Merge array according to keys containing | `Merge all with keys containing <p0> to array <p1>, case insensitive = <p2>, replace = <p3>` |  | string expression “Key”; numeric expression “ID of array to Replicate from”; numeric expression “Case insensitive (0 = no, 1 = yes)”; numeric expression “Replace values if same key? (0 = no, 1 = yes)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Value > Get value | `GetValue(` |  | string | — |  |
| 1 | 81 | String > Get string | `GetString(` |  | string → string | — |  |
| 2 | 82 | Address > Get address of first index | `FirstAddress(` |  |  | — |  |
| 3 | 83 | Address > Get address of last index | `LastAddress(` |  |  | — |  |
| 4 | 84 | Address > Get address from key | `AddressOfKey(` |  | string | — |  |
| 5 | 85 | Value > Get value from address | `ValueAtAddress(` |  | number | — |  |
| 6 | 86 | String > Get string from address | `StringAtAddress(` |  | number → string | — |  |
| 7 | 87 | Key > Get key from address | `KeyFromAddress(` |  | number → string | — |  |
| 8 | 88 | Address > Get address of "Last key exist" result | `LastKeyExistsAddress(` |  |  | — |  |
| 9 | 89 | Address > Get address of nth elements starting with substring | `NthStartsWith(` |  | number; string; number | — |  |
| 10 | 90 | Address > Get address of nth elements ending with substring | `NthEndsWith(` |  | number; string; number | — |  |
| 11 | 91 | Address > Get address of nth elements containing a substring | `NthContains(` |  | number; string; number | — |  |
| 12 | 92 | Address > Get address of previous element | `PrevAddress(` |  | number | — |  |
| 13 | 93 | Address > Get address of next element | `NextAddress(` |  | number | — |  |
| 14 | 94 | Get file progress in percentage | `FileProgress(` |  |  | — |  |
| 15 | 95 | Get error number | `ErrorNumber(` |  |  | — |  |
| 17 | 97 | Key > Get number of keys starting with substring | `NSubStrStartsWith(` |  | string; number | — |  |
| 18 | 98 | Key > Get number of keys ending with substring | `NSubStrEndsWith(` |  | string; number | — |  |
| 19 | 99 | Key > Get number of keys containing a substring | `NSubStrContains(` |  | string; number | — |  |
| 20 | 100 | Get number of elements in the array | `NuberOfElements(` |  |  | — |  |
| 21 | 101 | Get ID of the array | `ArrayID(` |  |  | — |  |
| 22 | 102 | Value > Get value from "Last key exist" condition | `ValueFromLastKeyExist(` |  |  | — |  |
| 23 | 103 | String > Get string from "Last key exist" condition | `StringFromLastKeyExist(` |  | → string | — |  |
| 24 | 104 | Iterating > Get value | `IterateValue(` |  |  | — |  |
| 25 | 105 | Iterating > Get string | `IterateString(` |  | → string | — |  |
| 26 | 106 | Iterating > Get key | `IterateKey(` |  | → string | — |  |
| 27 | 107 | Value > Get value from index | `ValueFromIndex(` |  | number | — |  |
| 28 | 108 | String > Get string from index | `StringFromIndex(` |  | number → string | — |  |
| 29 | 109 | Key > Get key from index | `KeyFromIndex(` |  | number → string | — |  |
| 30 | 110 | Get total number of arrays | `TotNVOs(` |  |  | — |  |
