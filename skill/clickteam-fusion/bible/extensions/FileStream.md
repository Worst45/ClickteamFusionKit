# Extension FileStream

- Fichier : `FileStream.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<objet>: On Error` |  |  | — |  |
| 1 | -82 | File is Open | `<objet>: File in Slot <p0> is Open` |  | expression numérique « Slot to Check » | — |  |
| 2 | -83 | File is OK | `<objet>: File in Slot <p0> is OK` |  | expression numérique « Slot to Check » | — |  |
| 3 | -84 | File Exists/has Read Access | `<objet>: File path <p0> exists/is readable` |  | expression chaîne « File to check for Existence/Read Access » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open File Stream | `Open File Stream on <p0> in Slot <p1> with flags <p2>` |  | expression chaîne « File to Open » ; expression numérique « Slot to open File in (will close old stream in slot) » ; expression numérique « Flags (add together): 1 = read, 2 = write, 4 = clear file contents, 8 = append to file » | — |  |
| 1 | 81 | Close File Stream | `Close File Stream on <p0>` |  | expression numérique « Slot to Close » | — |  |
| 2 | 82 | Set Byte | `Set Byte to <p2> at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression numérique « New Value of Byte » | — |  |
| 3 | 83 | Set Short | `Set Short to <p2> at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression numérique « New Value of Short » | — |  |
| 4 | 84 | Set Int | `Set Int to <p2> at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression numérique « New Value of Int » | — |  |
| 5 | 85 | Set Float | `Set Float to <p2> at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression numérique « New Value of Float » | — |  |
| 6 | 86 | Set Double | `Set Double to <p2> at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression numérique « New Value of Double » | — |  |
| 7 | 87 | Set String | `Set String to <p2> (Null Terminate = <p3>) at <p1> in Slot <p0>` |  | expression numérique « Slot » ; expression numérique « Position in File (be careful not to exceed the file size) » ; expression chaîne « New Value of String » ; expression numérique « Null Terminate? 0 = No, anything else = Yes » | — |  |
| 8 | 88 | Clear Error State | `Clear Error State in Slot <p0>` |  | expression numérique « Slot » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Signed Byte | `ByteAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 1 | 81 | Get Signed Short | `ShortAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 2 | 82 | Get Int | `IntAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 3 | 83 | Get Float | `FloatAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 4 | 84 | Get Double | `DoubleAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 5 | 85 | Get String | `StringAt$(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » ; nombre « Length (-1 for Null Terminated) » → chaîne | — |  |
| 6 | 86 | Get Read Cursor Position | `ReadCursorPos(` |  | nombre « Slot » | — |  |
| 7 | 87 | Get Write Cursor Position | `WriteCursorPos(` |  | nombre « Slot » | — |  |
| 8 | 88 | Get File Size | `FileSize(` |  | nombre « Slot » | — |  |
| 9 | 89 | Get Unsigned Byte | `UnsignedByteAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
| 10 | 90 | Get Unsigned Short | `UnsignedShortAt(` |  | nombre « Slot » ; nombre « Position in File (be careful not to exceed the file size) » | — |  |
