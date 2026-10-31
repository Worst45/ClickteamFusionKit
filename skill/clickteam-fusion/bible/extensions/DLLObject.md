# Extension DLLObject

- Fichier : `DLLObject.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error | `<objet> On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Load DLL | `Load <p0>` |  | expression chaîne « Load DLL » | — |  |
| 1 | 81 | Unload DLL | `Unload DLL` |  |  | — |  |
| 2 | 82 | Call Function | `Call Function <p0>` |  | expression chaîne « Call Function » | — |  |
| 3 | 83 | Return Value > No Return Value | `No Return Value` |  |  | — |  |
| 4 | 84 | Return Value > Return Integer | `Return Integer` |  |  | — |  |
| 5 | 85 | Return Value > Return String | `Return String` |  |  | — |  |
| 6 | 86 | Return Value > Return Float | `Return Float` |  |  | — |  |
| 7 | 87 | Arguments > No Arguments (clear all) | `Reset Argument List` |  |  | — |  |
| 8 | 88 | Arguments > Set Argument to Integer | `Set Argument <p0> to (<p1>) (Integer)` |  | expression numérique « Which argument? (1 based) » ; expression numérique « Argument value » | — |  |
| 9 | 89 | Arguments > Set Argument to Float | `Set Argument <p0> to (<p1>) (Float)` |  | expression numérique « Which argument? (1 based) » ; expression numérique « Argument value » | — |  |
| 10 | 90 | Arguments > Set Argument to String | `Set Argument <p0> to (<p1>) (String)` |  | expression numérique « Which argument? (1 based) » ; expression chaîne « Argument value » | — |  |
| 11 | 91 | Arguments > Add Argument Integer | `Add Integer Argument (<p0>)` |  | expression numérique « Argument value » | — |  |
| 12 | 92 | Arguments > Add Argument Float | `Add Float Argument (<p0>)` |  | expression numérique « Argument value » | — |  |
| 13 | 93 | Arguments > Add Argument String | `Add String Argument (<p0>)` |  | expression chaîne « Argument value » | — |  |
| 16 | 96 | Arguments > Set Argument to Integer Buffer | `Set Argument <p0> to Integer Buffer (<p1>)` |  | expression numérique « Which argument? (1 based) » ; expression numérique « Argument value » | — |  |
| 17 | 97 | Arguments > Add Argument Integer Buffer | `Add Integer Buffer Argument (<p0>)` |  | expression numérique « Argument value » | — |  |
| 19 | 99 | Calling Convention > __cdecl (C/C++ DLLs) | `Function uses __cdecl convention` |  |  | — |  |
| 20 | 100 | Calling Convention > __stdcall (Win32, default) | `Function uses __stdcall convention` |  |  | — |  |
| 22 | 102 | Arguments > Set Argument to Float Buffer | `Set Argument <p0> to Float Buffer (<p1>)` |  | expression numérique « Which argument? (1 based) » ; expression numérique « Argument value » | — |  |
| 23 | 103 | Arguments > Add Argument Float Buffer | `Add Float Buffer Argument (<p0>)` |  | expression numérique « Argument value » | — |  |
| 24 | 104 | Arguments > Set Argument to Double Buffer | `Set Argument <p0> to Double Buffer (<p1>)` |  | expression numérique « Which argument? (1 based) » ; expression chaîne « Argument value » | — |  |
| 25 | 105 | Arguments > Add Argument Double Buffer | `Add Double Buffer Argument (<p0>)` |  | expression chaîne « Argument value » | — |  |
| 26 | 106 | Arguments > Set Argument to String Buffer | `Set Argument <p0> to String Buffer (<p2> bytes, initial value <p1> )` |  | expression numérique « Which argument? (1 based) » ; expression chaîne « Argument value » ; expression numérique « Size in bytes » | — |  |
| 27 | 107 | Arguments > Add Argument String Buffer | `Add String Buffer Argument (<p1> bytes, initial value <p0> )` |  | expression chaîne « Argument value » ; expression numérique « Size in bytes » | — |  |
| 28 | 108 | Arguments > Set Argument to Double | `Set Argument <p0> to (<p1>) (Double)` |  | expression numérique « Which argument? (1 based) » ; expression chaîne « Argument value » | — |  |
| 29 | 109 | Arguments > Add Argument Double | `Add Double Argument (<p0>)` |  | expression chaîne « Argument value » | — |  |
| 30 | 110 | Return Value > Return Double | `Return Double` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Arguments > Integer | `GetArgInt(` |  | nombre « argument id » | — |  |
| 1 | 81 | Arguments > Float | `GetArgFloat(` |  | nombre « argument id » | — |  |
| 2 | 82 | Arguments > String | `GetArgString$(` |  | nombre « argument id » → chaîne | — |  |
| 3 | 83 | Return Value > Integer | `GetReturnInt(` |  |  | — |  |
| 4 | 84 | Return Value > Float | `GetReturnFloat(` |  |  | — |  |
| 5 | 85 | Return Value > String | `GetReturnString$(` |  | → chaîne | — |  |
| 6 | 86 | On Error > Get Error Message | `GetErrorMessage$(` |  | → chaîne | — |  |
| 15 | 95 | Function > Return Integer | `ReturnInt(` |  | chaîne « function name » | — |  |
| 16 | 96 | Function > Return Float | `ReturnFloat(` |  | chaîne « function name » | — |  |
| 17 | 97 | Function > Return String | `ReturnString$(` |  | chaîne « function name » → chaîne | — |  |
| 18 | 98 | Window Handle > Get Main Handle | `GetMainHwnd(` |  |  | — |  |
| 19 | 99 | Window Handle > Get Frame Handle | `GetFrameHwnd(` |  |  | — |  |
| 20 | 100 | Return Value > Double | `GetReturnDouble$(` |  | → chaîne | — |  |
| 21 | 101 | Arguments > Double | `GetArgDouble$(` |  | nombre « argument id » → chaîne | — |  |
| 22 | 102 | Function > Return Double | `ReturnDouble$(` |  | chaîne « function name » → chaîne | — |  |
