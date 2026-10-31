# Extension MagicDeque

- Fichier : `MagicDeque.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Compare value > Compare value at Element, Array | `<objet> : Value <p0> in Array <p1> is <p2>` |  | expression numérique « Element in Array » ; expression numérique « Array in MagicDeque » ; comparaison numérique « Compare the value... » | — |  |
| 1 | -82 | Compare value > Compare value at Element | `<objet> : Value <p0> is <p1>` |  | expression numérique « Element in Array » ; comparaison numérique « Compare the value... » | — |  |
| 2 | -83 | Compare value > Compare value at current position | `<objet> : Value at current position is <p0>` |  | comparaison numérique « Compare the value... » | — |  |
| 3 | -84 | Compare string > Compare string at Element, Array | `<objet> : String <p0> in Array <p1> is <p2>` |  | expression numérique « Element in Array » ; expression numérique « Array in MagicDeque » ; expression chaîne « String is equal to...? » | — |  |
| 4 | -85 | Compare string > Compare string at Element | `<objet> : String <p0> is <p1>` |  | expression numérique « Element in Array » ; expression chaîne « String is equal to...? » | — |  |
| 5 | -86 | Compare string > Compare string at current position | `<objet> : String at current position is <p0>` |  | expression chaîne « String is equal to...? » | — |  |
| 6 | -87 | Compare current Element position... | `<objet> : Current Element position <p1>` |  | comparaison numérique « Compare current Element position... » | — |  |
| 7 | -88 | Compare current Array position... | `<objet> : Current Array Position <p1>` |  | comparaison numérique « Compare current Array position... » | — |  |
| 8 | -89 | At the end of the Array? | `<objet> : At end of Array` |  |  | — |  |
| 9 | -90 | At the end of the MagicDeque? | `<objet> : At end of MagicDeque` |  |  | — |  |
| 10 | -91 | Compare number of arrays | `<objet> : Number of Arrays is <p0>` |  | comparaison numérique « Compare the number of Arrays » | — |  |
| 11 | -92 | Compare no. of elements in Array | `<objet> : Array <p0> size is <p1>` |  | expression numérique « Enter Array position » ; comparaison numérique « Compare size of Array » | — |  |
| 12 | -93 | Compare no. of elements in current Array | `<objet> : Current Array size is <p0>` |  | comparaison numérique « Compare size of Array » | — |  |
| 13 | -94 | MagicDeque is empty? | `<objet> : MagicDeque is empty?` |  |  | — |  |
| 14 | -95 | Array is empty? | `<objet> : Array <p0> is empty?` |  | expression numérique « Enter Array position » | — |  |
| 15 | -96 | Element, Array is string? | `<objet> : Element <p0> in Array <p1> is a string` |  | expression numérique « Element » ; expression numérique « Array » | — |  |
| 16 | -97 | Element is string? | `<objet> : Element <p0> is a string` |  | expression numérique « Element » | — |  |
| 17 | -98 | Current Element is string? | `<objet> : Current Element is a string` |  |  | — |  |
| 18 | -99 | Element, Array is value? | `<objet> : Element <p0> in Array <p1> is a value` |  | expression numérique « Element » ; expression numérique « Array » | — |  |
| 19 | -100 | Element is value? | `<objet> : Element <p0> is a value` |  | expression numérique « Element » | — |  |
| 20 | -101 | Current Element is value? | `<objet> : Current Element is a value` |  |  | — |  |
| 21 | -102 | For each Array in MagicDeque | `<objet> : For each array in MagicDeque (<p0> )` |  | expression chaîne « Enter identifier of the For each...Loop » | — |  |
| 22 | -103 | For each Element in Array | `<objet> : For each Element in Array (<p0> )` |  | expression chaîne « Enter identifier of the For each...Loop » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Select Array position | `<objet> : Select Array position <p0>` |  | expression numérique « Enter position of Array » | — |  |
| 1 | 81 | Select Element position | `<objet> : Select Element position <p0>` |  | expression numérique « Enter position of Element » | — |  |
| 2 | 82 | Increment Array position by 1 | `<objet> : Add 1 to Array position` |  |  | — |  |
| 3 | 83 | Increment Element position by 1 | `<objet> : Add 1 to Element position` |  |  | — |  |
| 4 | 84 | Arrays > Push array | `<objet> : Push array` |  |  | — |  |
| 5 | 85 | Arrays > Shift array | `<objet> : Shift array` |  |  | — |  |
| 6 | 86 | Arrays > Insert array | `<objet> : Insert array at <p0>` |  | expression numérique « Enter position to insert at (arrays will be pushed up if necessary) » | — |  |
| 7 | 87 | Arrays > Pop array | `<objet> : Pop array` |  |  | — |  |
| 8 | 88 | Arrays > Unshift array | `<objet> : Unshift array` |  |  | — |  |
| 9 | 89 | Arrays > Delete array | `<objet> : Delete array at <p0>` |  | expression numérique « Enter array to delete » | — |  |
| 10 | 90 | Arrays > Delete range | `<objet> : Delete arrays from <p0> to <p1>` |  | expression numérique « Enter start array (inclusive) » ; expression numérique « Enter end array (inclusive) » | — |  |
| 11 | 91 | Arrays > Erase everything | `<objet> : Erase everything` |  |  | — |  |
| 12 | 92 | Arrays > Erase empty arrays | `<objet> : Erase empty arrays` |  |  | — |  |
| 13 | 93 | Arrays > Shuffle arrays | `<objet> : Shuffle arrays` |  |  | — |  |
| 14 | 94 | Arrays > Reverse arrays | `<objet> : Reverse arrays` |  |  | — |  |
| 15 | 95 | Current Array > Strings > Push string | `<objet> : Push string <p0>` |  | expression chaîne « Enter string to push onto end of array » | — |  |
| 16 | 96 | Current Array > Strings > Shift string | `<objet> : Shift string <p0>` |  | expression chaîne « Enter string to shift onto start of array » | — |  |
| 17 | 97 | Current Array > Strings > Insert string | `<objet> : Insert string <p0> at <p1>` |  | expression chaîne « Enter string to insert into array » ; expression numérique « Enter position to insert at (elements will be pushed up if necessary) » | — |  |
| 18 | 98 | Current Array > Strings > Insert at current pos | `<objet> : Insert string <p0> at current position` |  | expression chaîne « Enter string to insert into array » | — |  |
| 19 | 99 | Current Array > Strings > Change string | `<objet> : Change string at <p1> to <p0>` |  | expression chaîne « Enter string to change to » ; expression numérique « Enter position of string » | — |  |
| 20 | 100 | Current Array > Strings > Change string at current | `<objet> : Change string at current pos to <p0>` |  | expression chaîne « Enter string to change to » | — |  |
| 21 | 101 | Current Array > Values > Push value | `<objet> : Push value <p0>` |  | expression numérique « Enter value to push onto end of array » | — |  |
| 22 | 102 | Current Array > Values > Shift value | `<objet> : Shift value <p0>` |  | expression numérique « Enter value to shift onto start of array » | — |  |
| 23 | 103 | Current Array > Values > Insert value | `<objet> : Insert value <p0> at <p1>` |  | expression numérique « Enter value to insert into array » ; expression numérique « Enter position to insert at (elements will be pushed up if necessary) » | — |  |
| 24 | 104 | Current Array > Values > Insert at current pos | `<objet> : Insert value <p0> at current position` |  | expression numérique « Enter value to insert into array » | — |  |
| 25 | 105 | Current Array > Values > Change value | `<objet> : Change value at <p1> to <p0>` |  | expression numérique « Enter value to change to » ; expression numérique « Enter position of string » | — |  |
| 26 | 106 | Current Array > Values > Change value at current | `<objet> : Change value at current pos to <p0>` |  | expression numérique « Enter value to change to » | — |  |
| 27 | 107 | Current Array > Pop element | `<objet> : Pop element` |  |  | — |  |
| 28 | 108 | Current Array > Unshift element | `<objet> : Unshift element` |  |  | — |  |
| 29 | 109 | Current Array > Delete element | `<objet> : Delete element at <p0>` |  | expression numérique « Enter element to delete » | — |  |
| 30 | 110 | Current Array > Delete at current pos | `<objet> : Delete element at current position` |  |  | — |  |
| 31 | 111 | Current Array > Delete range | `<objet> : Delete elements from <p0> to <p1>` |  | expression numérique « Enter start position (0 is the beginning, 1 is after first) » ; expression numérique « Enter end position (1 is after first, if both params same nothing deleted) » | — |  |
| 32 | 112 | Current Array > Erase elements | `<objet> : Erase elements` |  |  | — |  |
| 33 | 113 | Current Array > Shuffle elements | `<objet> : Shuffle elements` |  |  | — |  |
| 34 | 114 | Current Array > Reverse elements | `<objet> : Reverse elements` |  |  | — |  |
| 35 | 115 | Select Array > Strings > Push string | `<objet> : At Array <p1>, Push string <p0>` |  | expression chaîne « Enter string to push onto end of array » ; expression numérique « Enter Array position » | — |  |
| 36 | 116 | Select Array > Strings > Shift string | `<objet> : At Array <p1>, Shift string <p0>` |  | expression chaîne « Enter string to shift onto start of array » ; expression numérique « Enter Array position » | — |  |
| 37 | 117 | Select Array > Strings > Insert string | `<objet> : At Array <p2>, Insert string <p0> at <p1>` |  | expression chaîne « Enter string to insert into array » ; expression numérique « Enter position to insert at (elements will be pushed up if necessary) » ; expression numérique « Enter Array position » | — |  |
| 38 | 118 | Select Array > Strings > Change string | `<objet> : At Array <p2>, Change string at <p1> to <p0>` |  | expression chaîne « Enter string to change to » ; expression numérique « Enter position of string » ; expression numérique « Enter Array position » | — |  |
| 39 | 119 | Select Array > Values > Push value | `<objet> : At Array <p1>, Push value <p0>` |  | expression numérique « Enter value to push onto end of array » ; expression numérique « Enter Array position » | — |  |
| 40 | 120 | Select Array > Values > Shift value | `<objet> : At Array <p1>, Shift value <p0>` |  | expression numérique « Enter value to shift onto start of array » ; expression numérique « Enter Array position » | — |  |
| 41 | 121 | Select Array > Values > Insert value | `<objet> : At Array <p2>, Insert value <p0> at <p1>` |  | expression numérique « Enter value to insert into array » ; expression numérique « Enter position to insert at » ; expression numérique « Enter Array position » | — |  |
| 42 | 122 | Select Array > Values > Change value | `<objet> : At Array <p2>, Change value at <p1> to <p0>` |  | expression numérique « Enter value to change to » ; expression numérique « Enter position of string » ; expression numérique « Enter Array position » | — |  |
| 43 | 123 | Select Array > Pop element | `<objet> : At Array <p0>, Pop element` |  | expression numérique « Enter Array position » | — |  |
| 44 | 124 | Select Array > Unshift element | `<objet> : At Array <p0>, Unshift element` |  | expression numérique « Enter Array position » | — |  |
| 45 | 125 | Select Array > Delete element | `<objet> : At Array <p1>, Delete element at <p0>` |  | expression numérique « Enter element to delete » ; expression numérique « Enter Array position » | — |  |
| 46 | 126 | Select Array > Delete range | `<objet> : At Array <p2>, Delete elements from <p0> to <p1>` |  | expression numérique « Enter start position (inclusive) » ; expression numérique « Enter end position (inclusive) » ; expression numérique « Enter Array position » | — |  |
| 47 | 127 | Select Array > Erase elements | `<objet> : At Array <p0>, Erase elements` |  | expression numérique « Enter Array position » | — |  |
| 48 | 128 | Select Array > Shuffle elements | `<objet> : At Array <p0>, Shuffle elements` |  | expression numérique « Enter Array position » | — |  |
| 49 | 129 | Select Array > Reverse elements | `<objet> : At Array <p0>, Reverse elements` |  | expression numérique « Enter Array position » | — |  |
| 50 | 130 | Sort > Options > Sort as Strings | `<objet> : Sort as Strings` |  |  | — |  |
| 51 | 131 | Sort > Options > Sort Numbers | `<objet> : Sort numbers` |  |  | — |  |
| 52 | 132 | Sort > Options > Case Sensitive (a>A) | `<objet> : Case Sensitive Sort (a>A)` |  |  | — |  |
| 53 | 133 | Sort > Options > Case Insensitive (a=A) | `<objet> : Case Insensitive Sort (a=A)` |  |  | — |  |
| 54 | 134 | Sort > One Array, ascending | `<objet> : Sort Array <p0>, ascending sort` |  | expression numérique « Enter Array position » | — |  |
| 55 | 135 | Sort > One Array, descending | `<objet> : Sort Array <p0>, descending sort` |  | expression numérique « Enter Array position » | — |  |
| 56 | 136 | Sort > All Arrays individually, ascending | `<objet> : Sort all Arrays individually, ascending sort` |  |  | — |  |
| 57 | 137 | Sort > All Arrays individually, descending | `<objet> : Sort all Arrays individually, descending sort` |  |  | — |  |
| 58 | 138 | Sort > All Arrays based on element, ascending | `<objet> : Sort all Arrays, ascending sort based on element <p0>` |  | expression numérique « Enter element to sort by » | — |  |
| 59 | 139 | Sort > All Arrays based on element, descending | `<objet> : Sort all Arrays, descending sort based on element <p0>` |  | expression numérique « Enter element to sort by » | — |  |
| 60 | 140 | Sort > All Arrays based on element, ascending (from end) | `<objet> : Sort all Arrays, ascending sort based on element <p0> from the end` |  | expression numérique « Enter element to sort by, from end of the array » | — |  |
| 61 | 141 | Sort > All Arrays based on element, descending (from end) | `<objet> : Sort Y dimension, descending sort based on element <p0> from the end` |  | expression numérique « Enter element to sort by, from end of the array » | — |  |
| 62 | 142 | File > Save to file | `<objet> : Save to file <p0>` |  | nom de fichier « Select a MagicDeque file » | — |  |
| 63 | 143 | File > Load from file | `<objet> : Load from file <p0>` |  | nom de fichier « Select a MagicDeque file » | — |  |
| 64 | 144 | File > Save to file  encrypt | `<objet> : Save to encrypted file <p0>` |  | nom de fichier « Select a MagicDeque file » | — |  |
| 65 | 145 | File > Load from file  decrypt | `<objet> : Load from encrypted file <p0>` |  | nom de fichier « Select a MagicDeque file » | — |  |
| 66 | 146 | File > Enter encryption key | `<objet> : Set encryption key to <p0>` |  | expression chaîne « Enter an encryption key (long strings are better) » | — |  |
| 67 | 147 | File > Save CSV file | `<objet> : Save to file <p0> (as CSV)` |  | nom de fichier « Select a Comma Separated Values file » | — |  |
| 68 | 148 | File > Load CSV file | `<objet> : Load file <p0> (as CSV)` |  | nom de fichier « Select a Comma Separated Values file » | — |  |
| 69 | 149 | For each...Loop > Iterate through Arrays | `<objet> : Start For each...Loop <p0> , iterating through Arrays` |  | expression chaîne « Enter the For each...Loop's identifier » | — |  |
| 70 | 150 | For each...Loop > Iterate through Elements in an Array | `<objet> : Start For each...Loop <p0> , iterating through Array <p1>'s Elements` |  | expression chaîne « Enter the For each...Loop's identifier » ; expression numérique « Enter Array position » | — |  |
| 71 | 151 | Arrays > Move an array | `<objet> : Move array <p0> to position <p1>` |  | expression numérique « Enter the element to move » ; expression numérique « Enter the position to move to » | — |  |
| 72 | 152 | Current Array > Move an element | `<objet> : Move element <p0> to position <p1>` |  | expression numérique « Enter the element to move » ; expression numérique « Enter the position to move to » | — |  |
| 73 | 153 | Select Array > Move an element | `<objet> : At Array <p2> , Move element <p0> to position <p1>` |  | expression numérique « Enter the element to move » ; expression numérique « Enter the position to move to » ; expression numérique « Enter Array position » | — |  |
| 74 | 154 | Set random seed | `<objet> : Set random seed to <p0>` |  | expression numérique « Enter the seed to use » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get number of arrays | `MDSize(` |  |  | — |  |
| 1 | 81 | Get size of current Array | `CurrentArraySize(` |  |  | — |  |
| 2 | 82 | Get size of an Array | `ArraySize(` |  | nombre | — |  |
| 3 | 83 | Get current Element position | `ElementPos(` |  |  | — |  |
| 4 | 84 | Get current Array position | `ArrayPos(` |  |  | — |  |
| 5 | 85 | Strings > Get string | `Get$(` |  | → chaîne | — |  |
| 6 | 86 | Strings > Get string at Element | `GetElement$(` |  | nombre → chaîne | — |  |
| 7 | 87 | Strings > Get string at Element, Array | `GetElementArray$(` |  | nombre ; nombre → chaîne | — |  |
| 8 | 88 | Strings > Pop string | `Pop$(` |  | → chaîne | — |  |
| 9 | 89 | Strings > Pop string at Array | `PopArray$(` |  | nombre → chaîne | — |  |
| 10 | 90 | Strings > Unshift string | `Unshift$(` |  | → chaîne | — |  |
| 11 | 91 | Strings > Unshift string at Array | `UnshiftArray$(` |  | nombre → chaîne | — |  |
| 12 | 92 | Values > Get value | `Get(` |  |  | — |  |
| 13 | 93 | Values > Get value at Element | `GetElement(` |  | nombre | — |  |
| 14 | 94 | Values > Get value at Element, Array | `GetElementArray(` |  | nombre ; nombre | — |  |
| 15 | 95 | Values > Pop value | `Pop(` |  |  | — |  |
| 16 | 96 | Values > Pop value at Array | `PopArray(` |  | nombre | — |  |
| 17 | 97 | Values > Unshift value | `Unshift(` |  |  | — |  |
| 18 | 98 | Values > Unshift value at Array | `UnshiftArray(` |  | nombre | — |  |
| 19 | 99 | Get For Each Element...Loop's position | `ForEachElement(` |  | chaîne | — |  |
| 20 | 100 | Get For Each Array...Loop's position | `ForEachArray(` |  | chaîne | — |  |
| 21 | 101 | Number of Occurences > Values in an array | `OccsInArray(` |  | nombre ; nombre | — |  |
| 22 | 102 | Number of Occurences > Values across arrays | `OccsAcrossArrays(` |  | nombre ; nombre | — |  |
| 23 | 103 | Number of Occurences > Strings in an array | `StrOccsInArray(` |  | chaîne ; nombre | — |  |
| 24 | 104 | Number of Occurences > Strings across arrays | `StrOccsAcrossArrays(` |  | chaîne ; nombre | — |  |
| 25 | 105 | Find > Find value in array | `FindInArray(` |  | nombre ; nombre ; nombre | — |  |
| 26 | 106 | Find > Find value across arrays | `FindAcrossArrays(` |  | nombre ; nombre ; nombre | — |  |
| 27 | 107 | Find > Find string in array | `FindStrInArray(` |  | chaîne ; nombre ; nombre | — |  |
| 28 | 108 | Find > Find string across arrays | `FindStrAcrossArrays(` |  | chaîne ; nombre ; nombre | — |  |
