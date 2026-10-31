# Extension LuaPlus

- Fichier : `LuaPlus.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On error | `<objet>: On error` |  |  | — |  |
| 1 | -82 | On function | `<objet> : On function <p0>` |  | expression chaîne « Function name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run file | `Run file <p0>` |  | nom de fichier « File to run » | — |  |
| 1 | 81 | Run string | `Run string <p0>` |  | expression chaîne « String to run » | — |  |
| 2 | 82 | MMF functions > Register function | `Register function <p0> (minimum amount of parameters = <p1>)` |  | expression chaîne « Function name » ; expression numérique « Minimum amount of parameters » | — |  |
| 3 | 83 | MMF functions > Push string return value | `Push string return value <p0>` |  | expression chaîne « Value » | — |  |
| 4 | 84 | MMF functions > Push numeric return value | `Push numeric return value <p0>` |  | expression numérique « Value » | — |  |
| 5 | 85 | MMF functions > Push boolean return value | `Push boolean return value <p0>` |  | expression numérique « Value (0 or 1) » | — |  |
| 6 | 86 | Lua functions > Push string parameter | `Push string parameter <p0>` |  | expression chaîne « Value » | — |  |
| 7 | 87 | Lua functions > Push numeric parameter | `Push numeric parameter <p0>` |  | expression numérique « Value » | — |  |
| 8 | 88 | Lua functions > Push boolean parameter | `Push boolean parameter <p0>` |  | expression numérique « Value (0 or 1) » | — |  |
| 9 | 89 | Lua functions > Call function > In this thread | `Call Lua function <p0> in this thread` |  | expression chaîne « Function name » | — |  |
| 10 | 90 | Variables > Set string variable | `Set string variable <p0> to <p1>` |  | expression chaîne « Variable name » ; expression chaîne « Value » | — |  |
| 11 | 91 | Variables > Set numeric variable | `Set numeric variable <p0> to <p1>` |  | expression chaîne « Variable name » ; expression numérique « Value » | — |  |
| 12 | 92 | Variables > Set boolean variable | `Set boolean variable <p0> to <p1>` |  | expression chaîne « Variable name » ; expression numérique « Value (0 or 1) » | — |  |
| 13 | 93 | Stack > Push string | `Push string <p0> onto stack` |  | expression chaîne « Value » | — |  |
| 14 | 94 | Stack > Push number | `Push number <p0> onto stack` |  | expression numérique « Value » | — |  |
| 15 | 95 | Stack > Push boolean | `Push boolean <p0> onto stack` |  | expression numérique « Value (0 or 1) » | — |  |
| 16 | 96 | Stack > Pop and discard item | `Pop and discard item from stack` |  |  | — |  |
| 17 | 97 | Stack > Clear stack | `Clear stack` |  |  | — |  |
| 18 | 98 | MMF interface > Enable | `Enable MMF interface` |  |  | — |  |
| 19 | 99 | MMF interface > Export object | `Export object <p0> to slot <p1>` |  | objet « Object to export » ; expression numérique « Slot » | — |  |
| 20 | 100 | Lua functions > Call function > In a new thread | `Call Lua function <p0> in a new thread` |  | expression chaîne « Function name » | — |  |
| 21 | 101 | Lua libraries > Open base | `Open library: base` |  |  | — |  |
| 22 | 102 | Lua libraries > Open table | `Open library: table` |  |  | — |  |
| 23 | 103 | Lua libraries > Open I/O | `Open library: I/O` |  |  | — |  |
| 24 | 104 | Lua libraries > Open OS | `Open library: OS` |  |  | — |  |
| 25 | 105 | Lua libraries > Open string | `Open library: string` |  |  | — |  |
| 26 | 106 | Lua libraries > Open math | `Open library: math` |  |  | — |  |
| 27 | 107 | Lua libraries > Open debug | `Open library: debug` |  |  | — |  |
| 28 | 108 | Lua libraries > Open package | `Open library: package` |  |  | — |  |
| 29 | 109 | Lua libraries > Open all libs | `Open all libs` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get last error | `LastError$(` |  | → chaîne | — |  |
| 1 | 81 | MMF functions > Get number of parameters | `ToMMF_ParamCount(` |  |  | — |  |
| 2 | 82 | MMF functions > Get string parameter | `ToMMF_StringParameter$(` |  | nombre « Index » → chaîne | — |  |
| 3 | 83 | MMF functions > Get numeric parameter | `ToMMF_NumericParameter(` |  | nombre « Index » | — |  |
| 4 | 84 | MMF functions > Get boolean parameter | `ToMMF_BooleanParameter(` |  | nombre « Index » | — |  |
| 5 | 85 | Lua functions > Get number of return values | `FromLua_ReturnCount(` |  |  | — |  |
| 6 | 86 | Lua functions > Get string return value | `FromLua_StringReturn$(` |  | nombre « Index » → chaîne | — |  |
| 7 | 87 | Lua functions > Get numeric return value | `FromLua_NumericReturn(` |  | nombre « Index » | — |  |
| 8 | 88 | Lua functions > Get boolean return value | `FromLua_BooleanReturn(` |  | nombre « Index » | — |  |
| 9 | 89 | Variables > Get string variable | `StringVariable$(` |  | chaîne « Name » → chaîne | — |  |
| 10 | 90 | Variables > Get numeric variable | `NumericVariable(` |  | chaîne « Name » | — |  |
| 11 | 91 | Variables > Get boolean variable | `BooleanVariable(` |  | chaîne « Name » | — |  |
| 12 | 92 | Stack > Pop string | `PopString$(` |  | → chaîne | — |  |
| 13 | 93 | Stack > Pop number | `PopNumber(` |  |  | — |  |
| 14 | 94 | Stack > Pop boolean | `PopBoolean(` |  |  | — |  |
| 15 | 95 | Stack > Grab string | `GrabString$(` |  | → chaîne (paramètres non fiables) | — |  |
| 16 | 96 | Stack > Grab number | `GrabNumber(` |  | (paramètres non fiables) | — |  |
| 17 | 97 | Stack > Grab boolean | `GrabBoolean(` |  | (paramètres non fiables) | — |  |
| 18 | 98 | Stack > Get size | `StackSize(` |  |  | — |  |
| 19 | 99 | Lua functions > Call function > Number return > Previously pushed parameters | `LuaFunction(` |  | chaîne « Function name » | — |  |
| 20 | 100 | Lua functions > Call function > String return > Previously pushed parameters | `LuaFunction$(` |  | chaîne « Function name » → chaîne | — |  |
| 21 | 101 | Lua functions > Call function > Number return > Number parameter | `LuaFunctionN(` |  | chaîne « Function name » ; nombre « Parameter » | — |  |
| 22 | 102 | Lua functions > Call function > Number return > String parameter | `LuaFunctionS(` |  | chaîne « Function name » ; chaîne « Parameter » | — |  |
| 23 | 103 | Lua functions > Call function > String return > Number parameter | `LuaFunctionN$(` |  | chaîne « Function name » ; nombre « Parameter » → chaîne | — |  |
| 24 | 104 | Lua functions > Call function > String return > String parameter | `LuaFunctionS$(` |  | chaîne « Function name » ; chaîne « Parameter » → chaîne | — |  |
