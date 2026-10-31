# Extension LuaMMF2

- Fichier : `LuaMMF2.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<objet> On Function <p0>` |  | expression chaîne « Function name » | — |  |
| 1 | -82 | On Error | `<objet> On Error` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Run File | `Run File <p0>` |  | expression chaîne « Filename » | — |  |
| 1 | 81 | Run Script | `Run Script <p0>` |  | expression chaîne « Script » | — |  |
| 2 | 82 | MMF Functions > Set Return | `Return <p0>` |  | expression chaîne « Return » | — |  |
| 3 | 83 | Lua Functions > Call Function | `Call Function <p0> with <p1> with <p2> returns` |  | expression chaîne « Function name » ; expression chaîne « Parameter list » ; expression numérique « Return count » | — |  |
| 4 | 84 | Public Variables > Set Public Variable by value | `Set Public Variable <p0> to value <p1>` |  | expression chaîne « Variable » ; expression numérique « Value » | — |  |
| 5 | 85 | Public Variables > Set Public Variable by string | `Set Public Variable <p0> to string <p1>` |  | expression chaîne « Variable » ; expression chaîne « String » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | MMF Functions > Get Parameter Count | `LuaParamCount(` |  |  | — |  |
| 1 | 81 | MMF Functions > Get String Parameter | `LuaStrParam(` |  | nombre « Parameter index » → chaîne | — |  |
| 2 | 82 | MMF Functions > Get Value Parameter | `LuaValParam(` |  | nombre « Parameter index » | — |  |
| 3 | 83 | Lua Functions > Get Return Count | `LuaRetCount(` |  |  | — |  |
| 4 | 84 | Lua Functions > Get String Return | `LuaStrRet(` |  | nombre « Return index » → chaîne | — |  |
| 5 | 85 | Lua Functions > Get Value Return | `LuaValRet(` |  | nombre « Return index » | — |  |
| 6 | 86 | Public Variables > Get Public Variable as string | `LuaPublicS(` |  | chaîne « Variable name » → chaîne | — |  |
| 7 | 87 | Public Variables > Get Public Variable as value | `LuaPublicV(` |  | chaîne « Variable name » | — |  |
| 8 | 88 | Error > Get Error Message | `LuaError(` |  | → chaîne | — |  |
