# Extension nvar

- Fichier : `nvar.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exist > Key exist | `<objet>: Key <p0> exist` |  | expression chaîne « Key » | — |  |
| 1 | -82 | Key exist > Number of keys starts with substring | `<objet>: <p1> keys starts with <p0>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « Number of keys starts with substring » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 2 | -83 | Key exist > Number of keys ends with substring | `<objet>: <p1> keys ends with <p0>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « Number of keys ends with substring » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 3 | -84 | Key exist > Number of keys contains substring | `<objet>: <p1> keys contains <p0>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « Number of keys contains substring » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 4 | -85 | Key exist > Last key exist | `<objet>: Last key exist result` |  |  | — |  |
| 5 | -86 | Array modified | `<objet>: Array was modified` |  |  | — |  |
| 6 | -87 | Array is empty | `<objet>: Array is empty` |  |  | — |  |
| 7 | -88 | File progress > File is loading | `<objet>: File is loading` |  |  | — |  |
| 8 | -89 | File progress > File is saving | `<objet>: File is saving` |  |  | — |  |
| 9 | -90 | File progress > Done loading file | `<objet>: Done loading` |  |  | — |  |
| 10 | -91 | File progress > Done saving file | `<objet>: Done saving` |  |  | — |  |
| 11 | -92 | Error occured | `<objet>: Error occured` |  |  | — |  |
| 12 | -93 | On iterate loop | `<objet>: OnIterateLoop` |  |  | — |  |
| 13 | -94 | Item status > Item contains value | `<objet>: Item <p0> contains value` |  | expression chaîne « Key » | — |  |
| 14 | -95 | Item status > Item contains string | `<objet>: Item <p0> contains string` |  | expression chaîne « Key » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Items > Add/modify value | `Set key <p0> to <p1>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 1 | 81 | Items > Modify value > Add to value | `Add <p1> to value with key <p0>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 2 | 82 | Items > Modify value > Subtract from value | `Subtract <p1> from value with key <p0>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 3 | 83 | Items > Modify value > Multiply value | `Multiply value at key <p0> with <p1>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 4 | 84 | Items > Modify value > Divide from value | `Divide value with key <p0> with <p1>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 5 | 85 | Items > Modify value > Mod value | `Mod value with key <p0> with <p1>` |  | expression chaîne « Key » ; expression numérique « Value » | — |  |
| 6 | 86 | Items > Modify value > Use operator on value | `Use operator <p1> on value with key <p0> operand <p1>` |  | expression chaîne « Key » ; expression chaîne « Operator (+ - * / %%) » ; expression numérique « Value » | — |  |
| 7 | 87 | Items > Set at address > Set value at address | `Set value to <p0> at address <p1>` |  | expression numérique « ID of array to Replicate from » ; expression numérique « Value » | — |  |
| 8 | 88 | Items > Add/Modify string | `Set key <p0> to <p1>` |  | expression chaîne « Key » ; expression chaîne « String » | — |  |
| 9 | 89 | Items > Set at address > Set string at address | `Set string to <p0> at address <p1>` |  | expression numérique « ID of array to Replicate from » ; expression chaîne « String » | — |  |
| 10 | 90 | Items > Delete variable | `Delete variable with key <p0>` |  | expression chaîne « Key » | — |  |
| 11 | 91 | Array > Clear array | `Clear array` |  |  | — |  |
| 12 | 92 | Array > Crop > Crop array according to keys starting with | `Crop array where keys starts with <p0>, case insensitive = <p1>` |  | expression chaîne « Key » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 13 | 93 | Array > Crop > Crop array according to keys ending with | `Crop array where keys ends with <p0>, case insensitive = <p1>` |  | expression chaîne « Key » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 14 | 94 | Array > Crop > Crop array according to keys containing | `Crop array where keys contains <p0>, case insensitive = <p1>` |  | expression chaîne « Key » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 15 | 95 | Array > Replicate > Replicate all | `Replicate all from array <p0>` |  | expression numérique « ID of array to Replicate from » | — |  |
| 16 | 96 | Array > Replicate > Replicate array according to keys starting with | `Replicate all with keys starting with <p0> from array <p1>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 17 | 97 | Array > Replicate > Replicate array according to keys ending with | `Replicate all with keys ending with <p0> from array <p1>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 18 | 98 | Array > Replicate > Replicate array according to keys containing | `Replicate all with keys containing <p0> to array <p1>, case insensitive = <p2>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » | — |  |
| 19 | 99 | Clear error | `Clear error` |  |  | — |  |
| 20 | 100 | Iterate array | `Iterate array from index <p0> to <p1>` |  | expression numérique « Start index (zero based) » ; expression numérique « End index (zero based) » | — |  |
| 21 | 101 | File communication > INI > Save as INI with delimiter | `Save as INI file <p0>, creation order = <p1>, own thread <p2>, delimiter <p3>, value tag <p4>, default group <p5>` |  | expression chaîne « Filename » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression numérique « Operate in own thread (0=no, 1=yes) » ; expression chaîne « Delimiter » ; expression chaîne « Tag to represent values (default "#") » ; expression chaîne « Default group » | — |  |
| 22 | 102 | File communication > INI > Load from INI with delimiter | `Load from INI file <p0>, own thread <p1>, delimiter <p2>, value tag <p3>` |  | expression chaîne « Filename » ; expression numérique « Operate in own thread (0=no, 1=yes) » ; expression chaîne « Delimiter » ; expression chaîne « Tag to represent values (default "#") » | — |  |
| 23 | 103 | Modified flag > Set modified flag on | `Set modified flag on` |  |  | — |  |
| 24 | 104 | Modified flag > Set modified flag off | `Set modified flag off` |  |  | — |  |
| 25 | 105 | File communication > Array file > Save as NVO array file | `Save as array file <p0>, creation order = <p1>, own thread <p2>` |  | expression chaîne « Filename » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 26 | 106 | File communication > Array file > Load from NVO array file | `Load from array file <p0>, own thread <p1>` |  | expression chaîne « Filename » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 27 | 107 | File communication > Array file > Save as encrypted NVO array file | `Save as encrypted array file <p0>, creation order = <p1>, key <p2>, own thread <p3>` |  | expression chaîne « Filename » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression chaîne « Key to encrypt/decrypt with » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 28 | 108 | File communication > Array file > Load from encrypted NVO array file | `Load from encrypted array file <p0>, key <p1>, own thread <p2>` |  | expression chaîne « Filename » ; expression chaîne « Key to encrypt/decrypt with » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 29 | 109 | File communication > INI > Save as INI | `Save as INI file <p0>, section <p1>, value tag <p2>, creation order = <p3>, own thread <p4>` |  | expression chaîne « Filename » ; expression chaîne « INI-file section » ; expression chaîne « Tag to represent values (default "#") » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 30 | 110 | File communication > INI > Load from INI | `Load from INI file <p0>, section <p1>, value tag <p2>, own thread <p3>, value tag <p4>` |  | expression chaîne « Filename » ; expression chaîne « INI-file section » ; expression chaîne « Tag to represent values (default "#") » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 31 | 111 | File communication > CSV > Save as comma separated values | `Save as CSV file <p0>, creation order = <p1> , own thread <p2>` |  | expression chaîne « Filename » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 32 | 112 | File communication > CSV > Load from comma separated values | `Load from CSV file <p0>, own thread <p1>` |  | expression chaîne « Filename » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 33 | 113 | File communication > XML > Save as XML | `Save as XML file <p0>, creation order = <p1>, own thread <p2>` |  | expression chaîne « Filename » ; expression numérique « Save creation order (1) or alphabeticly order (0) » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 34 | 114 | File communication > XML > Load from XML | `Load from XML file <p0>, own thread <p1>` |  | expression chaîne « Filename » ; expression numérique « Operate in own thread (0=no, 1=yes) » | — |  |
| 35 | 115 | Array > Merge > Merge all | `Merge all from array <p0>, replace = <p1>` |  | expression numérique « ID of array to Replicate from » ; expression numérique « Replace values if same key? (0 = no, 1 = yes) » | — |  |
| 36 | 116 | Array > Merge > Merge array according to keys starting with | `Merge all with keys starting with <p0> from array <p1>, case insensitive = <p2>, replace = <p3>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » ; expression numérique « Replace values if same key? (0 = no, 1 = yes) » | — |  |
| 37 | 117 | Array > Merge > Merge array according to keys ending with | `Merge all with keys ending with <p0> from array <p1>, case insensitive = <p2>, replace = <p3>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » ; expression numérique « Replace values if same key? (0 = no, 1 = yes) » | — |  |
| 38 | 118 | Array > Merge > Merge array according to keys containing | `Merge all with keys containing <p0> to array <p1>, case insensitive = <p2>, replace = <p3>` |  | expression chaîne « Key » ; expression numérique « ID of array to Replicate from » ; expression numérique « Case insensitive (0 = no, 1 = yes) » ; expression numérique « Replace values if same key? (0 = no, 1 = yes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Value > Get value | `GetValue(` |  | chaîne | — |  |
| 1 | 81 | String > Get string | `GetString(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Address > Get address of first index | `FirstAddress(` |  |  | — |  |
| 3 | 83 | Address > Get address of last index | `LastAddress(` |  |  | — |  |
| 4 | 84 | Address > Get address from key | `AddressOfKey(` |  | chaîne | — |  |
| 5 | 85 | Value > Get value from address | `ValueAtAddress(` |  | nombre | — |  |
| 6 | 86 | String > Get string from address | `StringAtAddress(` |  | nombre → chaîne | — |  |
| 7 | 87 | Key > Get key from address | `KeyFromAddress(` |  | nombre → chaîne | — |  |
| 8 | 88 | Address > Get address of "Last key exist" result | `LastKeyExistsAddress(` |  |  | — |  |
| 9 | 89 | Address > Get address of nth elements starting with substring | `NthStartsWith(` |  | nombre ; chaîne ; nombre | — |  |
| 10 | 90 | Address > Get address of nth elements ending with substring | `NthEndsWith(` |  | nombre ; chaîne ; nombre | — |  |
| 11 | 91 | Address > Get address of nth elements containing a substring | `NthContains(` |  | nombre ; chaîne ; nombre | — |  |
| 12 | 92 | Address > Get address of previous element | `PrevAddress(` |  | nombre | — |  |
| 13 | 93 | Address > Get address of next element | `NextAddress(` |  | nombre | — |  |
| 14 | 94 | Get file progress in percentage | `FileProgress(` |  |  | — |  |
| 15 | 95 | Get error number | `ErrorNumber(` |  |  | — |  |
| 17 | 97 | Key > Get number of keys starting with substring | `NSubStrStartsWith(` |  | chaîne ; nombre | — |  |
| 18 | 98 | Key > Get number of keys ending with substring | `NSubStrEndsWith(` |  | chaîne ; nombre | — |  |
| 19 | 99 | Key > Get number of keys containing a substring | `NSubStrContains(` |  | chaîne ; nombre | — |  |
| 20 | 100 | Get number of elements in the array | `NuberOfElements(` |  |  | — |  |
| 21 | 101 | Get ID of the array | `ArrayID(` |  |  | — |  |
| 22 | 102 | Value > Get value from "Last key exist" condition | `ValueFromLastKeyExist(` |  |  | — |  |
| 23 | 103 | String > Get string from "Last key exist" condition | `StringFromLastKeyExist(` |  | → chaîne | — |  |
| 24 | 104 | Iterating > Get value | `IterateValue(` |  |  | — |  |
| 25 | 105 | Iterating > Get string | `IterateString(` |  | → chaîne | — |  |
| 26 | 106 | Iterating > Get key | `IterateKey(` |  | → chaîne | — |  |
| 27 | 107 | Value > Get value from index | `ValueFromIndex(` |  | nombre | — |  |
| 28 | 108 | String > Get string from index | `StringFromIndex(` |  | nombre → chaîne | — |  |
| 29 | 109 | Key > Get key from index | `KeyFromIndex(` |  | nombre → chaîne | — |  |
| 30 | 110 | Get total number of arrays | `TotNVOs(` |  |  | — |  |
