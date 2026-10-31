# Extension MagicDeque

- File: `MagicDeque.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare value > Compare value at Element, Array | `<object> : Value <p0> in Array <p1> is <p2>` |  | numeric expression “Element in Array”; numeric expression “Array in MagicDeque”; numeric comparison “Compare the value...” | — |  |
| 1 | -82 | Compare value > Compare value at Element | `<object> : Value <p0> is <p1>` |  | numeric expression “Element in Array”; numeric comparison “Compare the value...” | — |  |
| 2 | -83 | Compare value > Compare value at current position | `<object> : Value at current position is <p0>` |  | numeric comparison “Compare the value...” | — |  |
| 3 | -84 | Compare string > Compare string at Element, Array | `<object> : String <p0> in Array <p1> is <p2>` |  | numeric expression “Element in Array”; numeric expression “Array in MagicDeque”; string expression “String is equal to...?” | — |  |
| 4 | -85 | Compare string > Compare string at Element | `<object> : String <p0> is <p1>` |  | numeric expression “Element in Array”; string expression “String is equal to...?” | — |  |
| 5 | -86 | Compare string > Compare string at current position | `<object> : String at current position is <p0>` |  | string expression “String is equal to...?” | — |  |
| 6 | -87 | Compare current Element position... | `<object> : Current Element position <p1>` |  | numeric comparison “Compare current Element position...” | — |  |
| 7 | -88 | Compare current Array position... | `<object> : Current Array Position <p1>` |  | numeric comparison “Compare current Array position...” | — |  |
| 8 | -89 | At the end of the Array? | `<object> : At end of Array` |  |  | — |  |
| 9 | -90 | At the end of the MagicDeque? | `<object> : At end of MagicDeque` |  |  | — |  |
| 10 | -91 | Compare number of arrays | `<object> : Number of Arrays is <p0>` |  | numeric comparison “Compare the number of Arrays” | — |  |
| 11 | -92 | Compare no. of elements in Array | `<object> : Array <p0> size is <p1>` |  | numeric expression “Enter Array position”; numeric comparison “Compare size of Array” | — |  |
| 12 | -93 | Compare no. of elements in current Array | `<object> : Current Array size is <p0>` |  | numeric comparison “Compare size of Array” | — |  |
| 13 | -94 | MagicDeque is empty? | `<object> : MagicDeque is empty?` |  |  | — |  |
| 14 | -95 | Array is empty? | `<object> : Array <p0> is empty?` |  | numeric expression “Enter Array position” | — |  |
| 15 | -96 | Element, Array is string? | `<object> : Element <p0> in Array <p1> is a string` |  | numeric expression “Element”; numeric expression “Array” | — |  |
| 16 | -97 | Element is string? | `<object> : Element <p0> is a string` |  | numeric expression “Element” | — |  |
| 17 | -98 | Current Element is string? | `<object> : Current Element is a string` |  |  | — |  |
| 18 | -99 | Element, Array is value? | `<object> : Element <p0> in Array <p1> is a value` |  | numeric expression “Element”; numeric expression “Array” | — |  |
| 19 | -100 | Element is value? | `<object> : Element <p0> is a value` |  | numeric expression “Element” | — |  |
| 20 | -101 | Current Element is value? | `<object> : Current Element is a value` |  |  | — |  |
| 21 | -102 | For each Array in MagicDeque | `<object> : For each array in MagicDeque (<p0> )` |  | string expression “Enter identifier of the For each...Loop” | — |  |
| 22 | -103 | For each Element in Array | `<object> : For each Element in Array (<p0> )` |  | string expression “Enter identifier of the For each...Loop” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select Array position | `<object> : Select Array position <p0>` |  | numeric expression “Enter position of Array” | — |  |
| 1 | 81 | Select Element position | `<object> : Select Element position <p0>` |  | numeric expression “Enter position of Element” | — |  |
| 2 | 82 | Increment Array position by 1 | `<object> : Add 1 to Array position` |  |  | — |  |
| 3 | 83 | Increment Element position by 1 | `<object> : Add 1 to Element position` |  |  | — |  |
| 4 | 84 | Arrays > Push array | `<object> : Push array` |  |  | — |  |
| 5 | 85 | Arrays > Shift array | `<object> : Shift array` |  |  | — |  |
| 6 | 86 | Arrays > Insert array | `<object> : Insert array at <p0>` |  | numeric expression “Enter position to insert at (arrays will be pushed up if necessary)” | — |  |
| 7 | 87 | Arrays > Pop array | `<object> : Pop array` |  |  | — |  |
| 8 | 88 | Arrays > Unshift array | `<object> : Unshift array` |  |  | — |  |
| 9 | 89 | Arrays > Delete array | `<object> : Delete array at <p0>` |  | numeric expression “Enter array to delete” | — |  |
| 10 | 90 | Arrays > Delete range | `<object> : Delete arrays from <p0> to <p1>` |  | numeric expression “Enter start array (inclusive)”; numeric expression “Enter end array (inclusive)” | — |  |
| 11 | 91 | Arrays > Erase everything | `<object> : Erase everything` |  |  | — |  |
| 12 | 92 | Arrays > Erase empty arrays | `<object> : Erase empty arrays` |  |  | — |  |
| 13 | 93 | Arrays > Shuffle arrays | `<object> : Shuffle arrays` |  |  | — |  |
| 14 | 94 | Arrays > Reverse arrays | `<object> : Reverse arrays` |  |  | — |  |
| 15 | 95 | Current Array > Strings > Push string | `<object> : Push string <p0>` |  | string expression “Enter string to push onto end of array” | — |  |
| 16 | 96 | Current Array > Strings > Shift string | `<object> : Shift string <p0>` |  | string expression “Enter string to shift onto start of array” | — |  |
| 17 | 97 | Current Array > Strings > Insert string | `<object> : Insert string <p0> at <p1>` |  | string expression “Enter string to insert into array”; numeric expression “Enter position to insert at (elements will be pushed up if necessary)” | — |  |
| 18 | 98 | Current Array > Strings > Insert at current pos | `<object> : Insert string <p0> at current position` |  | string expression “Enter string to insert into array” | — |  |
| 19 | 99 | Current Array > Strings > Change string | `<object> : Change string at <p1> to <p0>` |  | string expression “Enter string to change to”; numeric expression “Enter position of string” | — |  |
| 20 | 100 | Current Array > Strings > Change string at current | `<object> : Change string at current pos to <p0>` |  | string expression “Enter string to change to” | — |  |
| 21 | 101 | Current Array > Values > Push value | `<object> : Push value <p0>` |  | numeric expression “Enter value to push onto end of array” | — |  |
| 22 | 102 | Current Array > Values > Shift value | `<object> : Shift value <p0>` |  | numeric expression “Enter value to shift onto start of array” | — |  |
| 23 | 103 | Current Array > Values > Insert value | `<object> : Insert value <p0> at <p1>` |  | numeric expression “Enter value to insert into array”; numeric expression “Enter position to insert at (elements will be pushed up if necessary)” | — |  |
| 24 | 104 | Current Array > Values > Insert at current pos | `<object> : Insert value <p0> at current position` |  | numeric expression “Enter value to insert into array” | — |  |
| 25 | 105 | Current Array > Values > Change value | `<object> : Change value at <p1> to <p0>` |  | numeric expression “Enter value to change to”; numeric expression “Enter position of string” | — |  |
| 26 | 106 | Current Array > Values > Change value at current | `<object> : Change value at current pos to <p0>` |  | numeric expression “Enter value to change to” | — |  |
| 27 | 107 | Current Array > Pop element | `<object> : Pop element` |  |  | — |  |
| 28 | 108 | Current Array > Unshift element | `<object> : Unshift element` |  |  | — |  |
| 29 | 109 | Current Array > Delete element | `<object> : Delete element at <p0>` |  | numeric expression “Enter element to delete” | — |  |
| 30 | 110 | Current Array > Delete at current pos | `<object> : Delete element at current position` |  |  | — |  |
| 31 | 111 | Current Array > Delete range | `<object> : Delete elements from <p0> to <p1>` |  | numeric expression “Enter start position (0 is the beginning, 1 is after first)”; numeric expression “Enter end position (1 is after first, if both params same nothing deleted)” | — |  |
| 32 | 112 | Current Array > Erase elements | `<object> : Erase elements` |  |  | — |  |
| 33 | 113 | Current Array > Shuffle elements | `<object> : Shuffle elements` |  |  | — |  |
| 34 | 114 | Current Array > Reverse elements | `<object> : Reverse elements` |  |  | — |  |
| 35 | 115 | Select Array > Strings > Push string | `<object> : At Array <p1>, Push string <p0>` |  | string expression “Enter string to push onto end of array”; numeric expression “Enter Array position” | — |  |
| 36 | 116 | Select Array > Strings > Shift string | `<object> : At Array <p1>, Shift string <p0>` |  | string expression “Enter string to shift onto start of array”; numeric expression “Enter Array position” | — |  |
| 37 | 117 | Select Array > Strings > Insert string | `<object> : At Array <p2>, Insert string <p0> at <p1>` |  | string expression “Enter string to insert into array”; numeric expression “Enter position to insert at (elements will be pushed up if necessary)”; numeric expression “Enter Array position” | — |  |
| 38 | 118 | Select Array > Strings > Change string | `<object> : At Array <p2>, Change string at <p1> to <p0>` |  | string expression “Enter string to change to”; numeric expression “Enter position of string”; numeric expression “Enter Array position” | — |  |
| 39 | 119 | Select Array > Values > Push value | `<object> : At Array <p1>, Push value <p0>` |  | numeric expression “Enter value to push onto end of array”; numeric expression “Enter Array position” | — |  |
| 40 | 120 | Select Array > Values > Shift value | `<object> : At Array <p1>, Shift value <p0>` |  | numeric expression “Enter value to shift onto start of array”; numeric expression “Enter Array position” | — |  |
| 41 | 121 | Select Array > Values > Insert value | `<object> : At Array <p2>, Insert value <p0> at <p1>` |  | numeric expression “Enter value to insert into array”; numeric expression “Enter position to insert at”; numeric expression “Enter Array position” | — |  |
| 42 | 122 | Select Array > Values > Change value | `<object> : At Array <p2>, Change value at <p1> to <p0>` |  | numeric expression “Enter value to change to”; numeric expression “Enter position of string”; numeric expression “Enter Array position” | — |  |
| 43 | 123 | Select Array > Pop element | `<object> : At Array <p0>, Pop element` |  | numeric expression “Enter Array position” | — |  |
| 44 | 124 | Select Array > Unshift element | `<object> : At Array <p0>, Unshift element` |  | numeric expression “Enter Array position” | — |  |
| 45 | 125 | Select Array > Delete element | `<object> : At Array <p1>, Delete element at <p0>` |  | numeric expression “Enter element to delete”; numeric expression “Enter Array position” | — |  |
| 46 | 126 | Select Array > Delete range | `<object> : At Array <p2>, Delete elements from <p0> to <p1>` |  | numeric expression “Enter start position (inclusive)”; numeric expression “Enter end position (inclusive)”; numeric expression “Enter Array position” | — |  |
| 47 | 127 | Select Array > Erase elements | `<object> : At Array <p0>, Erase elements` |  | numeric expression “Enter Array position” | — |  |
| 48 | 128 | Select Array > Shuffle elements | `<object> : At Array <p0>, Shuffle elements` |  | numeric expression “Enter Array position” | — |  |
| 49 | 129 | Select Array > Reverse elements | `<object> : At Array <p0>, Reverse elements` |  | numeric expression “Enter Array position” | — |  |
| 50 | 130 | Sort > Options > Sort as Strings | `<object> : Sort as Strings` |  |  | — |  |
| 51 | 131 | Sort > Options > Sort Numbers | `<object> : Sort numbers` |  |  | — |  |
| 52 | 132 | Sort > Options > Case Sensitive (a>A) | `<object> : Case Sensitive Sort (a>A)` |  |  | — |  |
| 53 | 133 | Sort > Options > Case Insensitive (a=A) | `<object> : Case Insensitive Sort (a=A)` |  |  | — |  |
| 54 | 134 | Sort > One Array, ascending | `<object> : Sort Array <p0>, ascending sort` |  | numeric expression “Enter Array position” | — |  |
| 55 | 135 | Sort > One Array, descending | `<object> : Sort Array <p0>, descending sort` |  | numeric expression “Enter Array position” | — |  |
| 56 | 136 | Sort > All Arrays individually, ascending | `<object> : Sort all Arrays individually, ascending sort` |  |  | — |  |
| 57 | 137 | Sort > All Arrays individually, descending | `<object> : Sort all Arrays individually, descending sort` |  |  | — |  |
| 58 | 138 | Sort > All Arrays based on element, ascending | `<object> : Sort all Arrays, ascending sort based on element <p0>` |  | numeric expression “Enter element to sort by” | — |  |
| 59 | 139 | Sort > All Arrays based on element, descending | `<object> : Sort all Arrays, descending sort based on element <p0>` |  | numeric expression “Enter element to sort by” | — |  |
| 60 | 140 | Sort > All Arrays based on element, ascending (from end) | `<object> : Sort all Arrays, ascending sort based on element <p0> from the end` |  | numeric expression “Enter element to sort by, from end of the array” | — |  |
| 61 | 141 | Sort > All Arrays based on element, descending (from end) | `<object> : Sort Y dimension, descending sort based on element <p0> from the end` |  | numeric expression “Enter element to sort by, from end of the array” | — |  |
| 62 | 142 | File > Save to file | `<object> : Save to file <p0>` |  | file name “Select a MagicDeque file” | — |  |
| 63 | 143 | File > Load from file | `<object> : Load from file <p0>` |  | file name “Select a MagicDeque file” | — |  |
| 64 | 144 | File > Save to file  encrypt | `<object> : Save to encrypted file <p0>` |  | file name “Select a MagicDeque file” | — |  |
| 65 | 145 | File > Load from file  decrypt | `<object> : Load from encrypted file <p0>` |  | file name “Select a MagicDeque file” | — |  |
| 66 | 146 | File > Enter encryption key | `<object> : Set encryption key to <p0>` |  | string expression “Enter an encryption key (long strings are better)” | — |  |
| 67 | 147 | File > Save CSV file | `<object> : Save to file <p0> (as CSV)` |  | file name “Select a Comma Separated Values file” | — |  |
| 68 | 148 | File > Load CSV file | `<object> : Load file <p0> (as CSV)` |  | file name “Select a Comma Separated Values file” | — |  |
| 69 | 149 | For each...Loop > Iterate through Arrays | `<object> : Start For each...Loop <p0> , iterating through Arrays` |  | string expression “Enter the For each...Loop's identifier” | — |  |
| 70 | 150 | For each...Loop > Iterate through Elements in an Array | `<object> : Start For each...Loop <p0> , iterating through Array <p1>'s Elements` |  | string expression “Enter the For each...Loop's identifier”; numeric expression “Enter Array position” | — |  |
| 71 | 151 | Arrays > Move an array | `<object> : Move array <p0> to position <p1>` |  | numeric expression “Enter the element to move”; numeric expression “Enter the position to move to” | — |  |
| 72 | 152 | Current Array > Move an element | `<object> : Move element <p0> to position <p1>` |  | numeric expression “Enter the element to move”; numeric expression “Enter the position to move to” | — |  |
| 73 | 153 | Select Array > Move an element | `<object> : At Array <p2> , Move element <p0> to position <p1>` |  | numeric expression “Enter the element to move”; numeric expression “Enter the position to move to”; numeric expression “Enter Array position” | — |  |
| 74 | 154 | Set random seed | `<object> : Set random seed to <p0>` |  | numeric expression “Enter the seed to use” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of arrays | `MDSize(` |  |  | — |  |
| 1 | 81 | Get size of current Array | `CurrentArraySize(` |  |  | — |  |
| 2 | 82 | Get size of an Array | `ArraySize(` |  | number | — |  |
| 3 | 83 | Get current Element position | `ElementPos(` |  |  | — |  |
| 4 | 84 | Get current Array position | `ArrayPos(` |  |  | — |  |
| 5 | 85 | Strings > Get string | `Get$(` |  | → string | — |  |
| 6 | 86 | Strings > Get string at Element | `GetElement$(` |  | number → string | — |  |
| 7 | 87 | Strings > Get string at Element, Array | `GetElementArray$(` |  | number; number → string | — |  |
| 8 | 88 | Strings > Pop string | `Pop$(` |  | → string | — |  |
| 9 | 89 | Strings > Pop string at Array | `PopArray$(` |  | number → string | — |  |
| 10 | 90 | Strings > Unshift string | `Unshift$(` |  | → string | — |  |
| 11 | 91 | Strings > Unshift string at Array | `UnshiftArray$(` |  | number → string | — |  |
| 12 | 92 | Values > Get value | `Get(` |  |  | — |  |
| 13 | 93 | Values > Get value at Element | `GetElement(` |  | number | — |  |
| 14 | 94 | Values > Get value at Element, Array | `GetElementArray(` |  | number; number | — |  |
| 15 | 95 | Values > Pop value | `Pop(` |  |  | — |  |
| 16 | 96 | Values > Pop value at Array | `PopArray(` |  | number | — |  |
| 17 | 97 | Values > Unshift value | `Unshift(` |  |  | — |  |
| 18 | 98 | Values > Unshift value at Array | `UnshiftArray(` |  | number | — |  |
| 19 | 99 | Get For Each Element...Loop's position | `ForEachElement(` |  | string | — |  |
| 20 | 100 | Get For Each Array...Loop's position | `ForEachArray(` |  | string | — |  |
| 21 | 101 | Number of Occurences > Values in an array | `OccsInArray(` |  | number; number | — |  |
| 22 | 102 | Number of Occurences > Values across arrays | `OccsAcrossArrays(` |  | number; number | — |  |
| 23 | 103 | Number of Occurences > Strings in an array | `StrOccsInArray(` |  | string; number | — |  |
| 24 | 104 | Number of Occurences > Strings across arrays | `StrOccsAcrossArrays(` |  | string; number | — |  |
| 25 | 105 | Find > Find value in array | `FindInArray(` |  | number; number; number | — |  |
| 26 | 106 | Find > Find value across arrays | `FindAcrossArrays(` |  | number; number; number | — |  |
| 27 | 107 | Find > Find string in array | `FindStrInArray(` |  | string; number; number | — |  |
| 28 | 108 | Find > Find string across arrays | `FindStrAcrossArrays(` |  | string; number; number | — |  |
