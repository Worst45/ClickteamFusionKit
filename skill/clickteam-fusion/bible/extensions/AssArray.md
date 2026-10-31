# Extension AssArray

- Fichier : `AssArray.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key Exists? > Does a Certain Key Exist? | `<objet>: Key <p0> exists` |  | expression chaîne « Enter the Key » | — |  |
| 1 | -82 | Key Exists? > Result of Last 'Key Exists' Condition | `<objet>: Result of Last 'Key Exists' Condition` |  |  | — |  |
| 2 | -83 | Is the Array Empty? | `<objet>: Array is Empty` |  |  | — |  |
| 3 | -84 | Has an Error Occured? | `<objet>: On Error` |  |  | — |  |
| 4 | -85 | Key Exists? > Do So Many Keys Starting With a Substring Exist? | `<objet>: At Least <p0> Keys Starting With <p1>` |  | expression chaîne « Enter the Substring » ; expression numérique « Enter Least Number of Keys, Starting with the Substring, to Find » | — |  |
| 5 | -86 | Key Exists? > Do So Many Keys Ending With a Substring Exist? | `<objet>: At Least <p0> Keys Ending With <p1>` |  | expression chaîne « Enter the Substring » ; expression numérique « Enter Least Number of Keys, Ending with the Substring, to Find » | — |  |
| 6 | -87 | Key Exists? > Do So Many Keys Containing a Substring Exist? | `<objet>: At Least <p0> Keys Containing <p1>` |  | expression chaîne « Enter the Substring » ; expression numérique « Enter Least Number of Keys, Containing the Substring, to Find » | — |  |
| 7 | -88 | File Progress > File is Loading | `<objet>: File is Loading` |  |  | — |  |
| 8 | -89 | File Progress > File is Saving | `<objet>: File is Saving` |  |  | — |  |
| 9 | -90 | Has the Array Been Modified? | `<objet>: Array has Been Modified` |  |  | — |  |
| 10 | -91 | File Progress > File is Done Loading | `<objet>: File is Done Loading` |  |  | — |  |
| 11 | -92 | File Progress > File is Done Saving | `<objet>: File is Done Saving` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Modify/Add a Value | `Set Value at Key <p0> to <p1>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 1 | 81 | Modify/Add a String | `Set String at Key <p0> to <p1>` |  | expression chaîne « Enter the Key » ; expression chaîne « Enter the String » | — |  |
| 2 | 82 | Delete a Key | `Delete the Key <p0>` |  | expression chaîne « Enter the Key » | — |  |
| 3 | 83 | Clear the Array | `Clear the Array` |  |  | — |  |
| 4 | 84 | INI Files > Load INI > Load an INI into Strings | `Load INI File <p0> into Strings` |  | expression chaîne « Enter the File to Load » | — |  |
| 5 | 85 | INI Files > Load INI > Load an INI into Strings and Keep Group Info | `Load INI File <p0> into Strings and Delimit Groups with <p1>` |  | expression chaîne « Enter the File to Load » ; expression chaîne « Enter the Delimiter » | — |  |
| 6 | 86 | INI Files > Save INI > Save an INI from Strings | `Save INI File <p0> from Strings` |  | expression chaîne « Enter the File to Save » | — |  |
| 7 | 87 | INI Files > Save INI > Save an INI from Strings and Keep Group Info | `Save INI File <p0> from Strings with Keys Delimited to Groups with <p1>` |  | expression chaîne « Enter the File to Save » ; expression chaîne « Enter the Delimiter » | — |  |
| 8 | 88 | Associative Array Files > Save an Associative Array File | `Save Associative Array File <p0> using Method <p1>` |  | expression chaîne « Enter the File to Save » ; expression numérique « Enter the Method to use (0 to 126) » | — |  |
| 9 | 89 | Associative Array Files > Load an Associative Array File | `Load Associative Array File <p0> using Method <p1>` |  | expression chaîne « Enter the File to Load » ; expression numérique « Enter the Method to use (0 to 126) » | — |  |
| 10 | 90 | Addresses > Modify/Add a Value at an Address | `Set Value at Address <p0> to <p1>` |  | expression numérique « Enter the Address » ; expression numérique « Enter the Value » | — |  |
| 11 | 91 | Addresses > Modify/Add a String at an Address | `Set String at Address <p0> to <p1>` |  | expression numérique « Enter the Address » ; expression chaîne « Enter the String » | — |  |
| 12 | 92 | INI Files > Load INI > Load an INI into Values | `Load INI File <p0> into Values` |  | expression chaîne « Enter the File to Load » | — |  |
| 13 | 93 | INI Files > Load INI > Load an INI into Values and Keep Group Info | `Load INI File <p0> into Values and Delimit Groups with <p1>` |  | expression chaîne « Enter the File to Load » ; expression chaîne « Enter the Delimiter » | — |  |
| 14 | 94 | INI Files > Save INI > Save an INI from Values | `Save INI File <p0> from Values` |  | expression chaîne « Enter the File to Save » | — |  |
| 15 | 95 | INI Files > Save INI > Save an INI from Values and Keep Group Info | `Save INI File <p0> from Values with Keys Delimited to Groups with <p1>` |  | expression chaîne « Enter the File to Save » ; expression chaîne « Enter the Delimiter » | — |  |
| 16 | 96 | INI Files > Load INI > Load an INI into Strings and into Values | `Load INI File <p0> into Strings and into Values` |  | expression chaîne « Enter the File to Load » | — |  |
| 17 | 97 | INI Files > Load INI > Load an INI into Strings and into Values and Keep Group Info | `Load INI File <p0> into Strings and into Values and Delimit Groups with <p1>` |  | expression chaîne « Enter the File to Load » ; expression chaîne « Enter the Delimiter » | — |  |
| 18 | 98 | INI Files > Save INI > Save an INI from Strings with Exclusion | `Save INI File <p0> from Strings, unless String is <p1>` |  | expression chaîne « Enter the File to Save » ; expression chaîne « Enter the Exclusion String (Keys with this String will Save their Values Instead) » | — |  |
| 19 | 99 | INI Files > Save INI > Save an INI from Strings with Exclusion and Keep Group Info | `Save INI File <p0> from Strings, unless String is <p2>, with Keys Delimited to Groups with <p1>` |  | expression chaîne « Enter the File to Save » ; expression chaîne « Enter the Delimiter » ; expression chaîne « Enter the Exclusion String (Keys with this String will Save their Values Instead) » | — |  |
| 20 | 100 | INI Files > Save INI > Save an INI from Values with Exclusion | `Save INI File <p0> from Values, unless Value is <p1>` |  | expression chaîne « Enter the File to Save » ; expression numérique « Enter the Exclusion Value (Keys with this Value will Save their Strings Instead) » | — |  |
| 21 | 101 | INI Files > Save INI > Save an INI from Values with Exclusion and Keep Group Info | `Save INI File <p0> from Values, unless Value is <p2>, with Keys Delimited to Groups with <p1>` |  | expression chaîne « Enter the File to Save » ; expression chaîne « Enter the Delimiter » ; expression numérique « Enter the Exclusion Value (Keys with this Value will Save their Strings Instead) » | — |  |
| 22 | 102 | List Files > Load a List File | `Load List File <p0>` |  | expression chaîne « Enter the File to Load » | — |  |
| 23 | 103 | List Files > Save a List File | `Save List File <p0>` |  | expression chaîne « Enter the File to Save » | — |  |
| 24 | 104 | File Progress > Set File Loading Interval | `Set File Loading Interval to <p0> milliseconds` |  | expression numérique « Enter Interval (in milliseconds) to Spend Loading/Saving Files per Loop » | — |  |
| 25 | 105 | File Progress > Set File Saving Interval | `Set File Saving Interval to <p0> milliseconds` |  | expression numérique « Enter Interval (in milliseconds) to Spend Loading/Saving Files per Loop » | — |  |
| 26 | 106 | File Progress > Set to Load Entire File All at Once | `Set to Load Entire File All at Once` |  |  | — |  |
| 27 | 107 | File Progress > Set to Save Entire File All at Once | `Set to Save Entire File All at Once` |  |  | — |  |
| 28 | 108 | Modify a Value > Add to a Value | `Add <p1> to Value at Key <p0>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 29 | 109 | Modify a Value > Subtract from a Value | `Subtract <p1> from Value at Key <p0>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 30 | 110 | Modify a Value > Multiply a Value | `Mutiply Value at Key <p0> by <p1>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 31 | 111 | Modify a Value > Divide a Value | `Divide Value at Key <p0> by <p1>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 32 | 112 | Modify a Value > Modulus a Value | `Modulus Value at Key <p0> by <p1>` |  | expression chaîne « Enter the Key » ; expression numérique « Enter the Value » | — |  |
| 33 | 113 | Modify a Value > Operate on a Value | `Use operation <p1> on Value at Key <p0> with operand <p2>` |  | expression chaîne « Enter the Key » ; expression chaîne « Enter the Operation (+ - * / %) » ; expression numérique « Enter the Value » | — |  |
| 34 | 114 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  | — |  |
| 35 | 115 | Crop the Array > Crop with Respect to the Start of Keys | `Crop Array with Respect to Keys Starting with <p1> (Include = <p0>)` |  | expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 36 | 116 | Crop the Array > Crop with Respect to the End of Keys | `Crop Array with Respect to Keys Ending with <p1> (Include = <p0>)` |  | expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 37 | 117 | Crop the Array > Crop with Respect to the Contents of Keys | `Crop Array with Respect to Keys Containing <p1> (Include = <p0>)` |  | expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 38 | 118 | Copy an Array > Copy All Keys | `Copy All of the Keys in Array <p0>` |  | expression numérique « Enter Fixed Value of Array from which to Copy » | — |  |
| 39 | 119 | Copy an Array > Copy with Respect to the Start of Keys | `Copy from Array <p0> with Respect to Keys Starting with <p2> (Include = <p1>)` |  | expression numérique « Enter Fixed Value of Array from which to Copy » ; expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 40 | 120 | Copy an Array > Copy with Respect to the End of Keys | `Copy from Array <p0> with Respect to Keys Ending with <p2> (Include = <p1>)` |  | expression numérique « Enter Fixed Value of Array from which to Copy » ; expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 41 | 121 | Copy an Array > Copy with Respect to the Contents of Keys | `Copy from Array <p0> with Respect to Keys Containing <p2> (Include = <p1>)` |  | expression numérique « Enter Fixed Value of Array from which to Copy » ; expression numérique « Enter Include (0 to Exclude Keys; 1 to Include Keys) » ; expression chaîne « Enter the Substring » | — |  |
| 42 | 122 | Associative Array Files > Encrypted Files > Save an Encrypted Associative Array File | `Save Encrypyted Associative Array File <p0> using Method <p1>` |  | expression chaîne « Enter the File to Save » ; expression numérique « Enter the Method to use (0 to 126) » | — |  |
| 43 | 123 | Associative Array Files > Encrypted Files > Load an Encrypted Associative Array File | `Load Encrypyted Associative Array File <p0> using Method <p1>` |  | expression chaîne « Enter the File to Load » ; expression numérique « Enter the Method to use (0 to 126) » | — |  |
| 44 | 124 | Associative Array Files > Encrypted Files > Set Encryption Key | `Set Encryption Key to <p0>` |  | expression chaîne « Enter Encryption Key » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get a Value from a Key | `GetValue(` |  | chaîne | — |  |
| 1 | 81 | Get a String from a Key | `GetString$(` |  | chaîne → chaîne | — |  |
| 2 | 82 | Get the Value from the Key Found in Last 'Key Exists' Condition | `GetValueAtFoundKey(` |  |  | — |  |
| 3 | 83 | Get the String from the Key Found in Last 'Key Exists' Condition | `GetStringAtFoundKey$(` |  | → chaîne | — |  |
| 4 | 84 | Get the Number of Elements in the Array | `GetSize(` |  |  | — |  |
| 5 | 85 | Get the Current Error Number | `GetError(` |  |  | — |  |
| 6 | 86 | Addresses > Get the Address of a Key | `GetAddress(` |  | chaîne | — |  |
| 7 | 87 | Addresses > Get the Address of the Key Found in Last 'Key Exists' Condition | `GetAddressOfFoundKey(` |  |  | — |  |
| 8 | 88 | Addresses > Get a Value from an Address | `GetValueAtAddress(` |  | nombre | — |  |
| 9 | 89 | Addresses > Get a String from an Address | `GetStringAtAddress$(` |  | nombre → chaîne | — |  |
| 10 | 90 | Addresses > Get a Key from an Address | `GetKeyAtAddress$(` |  | nombre → chaîne | — |  |
| 11 | 91 | Addresses > Get Address of Next Element in Array | `GetNextAddress(` |  | nombre | — |  |
| 12 | 92 | Addresses > Get Address of Previous Element in Array | `GetPreviousAddress(` |  | nombre | — |  |
| 13 | 93 | Addresses > Get Address of First Element in Array | `GetFirstAddress(` |  |  | — |  |
| 14 | 94 | Addresses > Get Address of Last Element in Array | `GetLastAddress(` |  |  | — |  |
| 15 | 95 | Get the Number of Keys Starting with a Substring | `GetNumKeysStart(` |  | chaîne | — |  |
| 16 | 96 | Get the Number of Keys Ending with a Substring | `GetNumKeysEnd(` |  | chaîne | — |  |
| 17 | 97 | Get the Number of Keys Containing a Substring | `GetNumKeysContain(` |  | chaîne | — |  |
| 18 | 98 | Addresses > Get the Address of the nth Key Starting With a Substring | `GetAddyKeysStart(` |  | chaîne ; nombre ; nombre | — |  |
| 19 | 99 | Addresses > Get the Address of the nth Key Ending With a Substring | `GetAddyKeysEnd(` |  | chaîne ; nombre ; nombre | — |  |
| 20 | 100 | Addresses > Get the Address of the nth Key Containing a Substring | `GetAddyKeysContain(` |  | chaîne ; nombre ; nombre | — |  |
| 21 | 101 | File Progress > Get File Progress (percentage) | `GetFileProgress(` |  |  | — |  |
| 22 | 102 | File Progress > Get File Loading Interval | `GetLoadInterval(` |  |  | — |  |
| 23 | 103 | File Progress > Get File Saving Interval | `GetSaveInterval(` |  |  | — |  |
| 24 | 104 | Get the Current Expression Error Number | `GetExpressionError(` |  |  | — |  |
| 25 | 105 | Get the Array's Address | `GetArrayAddress(` |  |  | — |  |
