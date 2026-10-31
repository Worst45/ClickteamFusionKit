# Extension Custom

- Fichier : `Custom.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Function | `<objet>: On Function <p0>` |  | expression chaîne « Enter the Function Name » | — |  |
| 1 | -82 | On Error | `<objet>: On Error` |  |  | — |  |
| 2 | -83 | On Creation of an Instance | `<objet>: On Creation of an Instance` |  |  | — |  |
| 3 | -84 | On Destruction of an Instance | `<objet>: On Destruction of an Instance` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Specify an Instance > Call a Function | `Call Function <p1> with Parameters <p2> and with Return Type <p3> for Instance <p0> and Store Result in Slot <p4>` |  | expression chaîne « Enter the Instance Name » ; expression chaîne « Enter the Function Name » ; expression chaîne « Enter the Parameter List » ; expression numérique « Enter the Return Type (0=void; 1=integer; 2=float; 3=string) » ; expression numérique « Enter a Slot Number (0-10) » | — |  |
| 1 | 81 | Specify an Instance > Set an Integer Variable | `Set Member Integer <p1> of Instance <p0> to <p2>` |  | expression chaîne « Enter the Instance Name » ; expression chaîne « Enter the Variable Name » ; expression numérique « Enter an Integer » | — |  |
| 2 | 82 | Specify an Instance > Set a Float Variable | `Set Member Float <p1> of Instance <p0> to <p2>` |  | expression chaîne « Enter the Instance Name » ; expression chaîne « Enter the Variable Name » ; expression numérique « Enter a Float » | — |  |
| 3 | 83 | Specify an Instance > Set a String Variable | `Set Member String <p1> of Instance <p0> to <p2>` |  | expression chaîne « Enter the Instance Name » ; expression chaîne « Enter the Variable Name » ; expression chaîne « Enter a String » | — |  |
| 4 | 84 | Current Instance > Call a Function | `Call Function <p0> with Parameters <p1> and with Return Type <p3> for Current Instance and Store Result in Slot <p4>` |  | expression chaîne « Enter the Function Name » ; expression chaîne « Enter the Parameter List » ; expression numérique « Enter the Return Type (0=void; 1=integer; 2=float; 3=string) » ; expression numérique « Enter a Slot Number (0-10) » | — |  |
| 5 | 85 | Current Instance > Set an Integer Variable | `Set Member Integer <p0> of Current Instance to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter an Integer » | — |  |
| 6 | 86 | Current Instance > Set a Float Variable | `Set Member Float <p0> of Current Instance to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter a Float » | — |  |
| 7 | 87 | Current Instance > Set a String Variable | `Set Member String <p0> of Current Instance to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression chaîne « Enter a String » | — |  |
| 8 | 88 | Create Instance | `Create Instance <p0> with Parameters <p1>` |  | expression chaîne « Enter the Instance Name » ; expression chaîne « Enter the Parameter List » | — |  |
| 9 | 89 | Destroy Instance | `Destroy Instance <p0>` |  | expression chaîne « Enter the Instance Name » | — |  |
| 10 | 90 | Returns and Loops > Return | `Return from Current Function` |  |  | — |  |
| 11 | 91 | Returns and Loops > Return an Integer | `Return from Current Function with Integer <p0>` |  | expression numérique « Enter an Integer » | — |  |
| 12 | 92 | Returns and Loops > Return a Float | `Return from Current Function with Float <p0>` |  | expression numérique « Enter a Float » | — |  |
| 13 | 93 | Returns and Loops > Return a String | `Return from Current Function with String <p0>` |  | expression chaîne « Enter a String » | — |  |
| 14 | 94 | Global Variables > Create a Global Variable | `Create Global Variable <p0>` |  | expression chaîne « Enter the Variable Name » | — |  |
| 15 | 95 | Global Variables > Set an Integer Variable | `Set Global Integer <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter an Integer » | — |  |
| 16 | 96 | Global Variables > Set a Float Variable | `Set Global Float <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter a Float » | — |  |
| 17 | 97 | Global Variables > Set a String Variable | `Set Global String <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression chaîne « Enter a String » | — |  |
| 18 | 98 | Local Variables > Create a Local Variable | `Create Local Variable <p0>` |  | expression chaîne « Enter the Variable Name » | — |  |
| 19 | 99 | Local Variables > Set an Integer Variable | `Set Local Integer <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter an Integer » | — |  |
| 20 | 100 | Local Variables > Set a Float Variable | `Set Local Float <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression numérique « Enter a Float » | — |  |
| 21 | 101 | Local Variables > Set a String Variable | `Set Local String <p0> to <p1>` |  | expression chaîne « Enter the Variable Name » ; expression chaîne « Enter a String » | — |  |
| 22 | 102 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  | — |  |
| 23 | 103 | Returns and Loops > Set Function to Loop | `Loop Current Function` |  |  | — |  |
| 24 | 104 | Set Default Instance | `Set Default Instance to <p0>` |  | expression chaîne « Enter the Instance Name » | — |  |
| 25 | 105 | Errors > Generate an Error | `Generate Error <p0>` |  | expression numérique « Enter Error Code to Generate » | — |  |
| 26 | 106 | Destroy All Instances | `Destroy All Instances` |  |  | — |  |
| 27 | 107 | Miscellaneous > Count Selected Objects | `Count all Selected <p0>` |  | objet « Choose the Object » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Slot Data > Get an Integer from a Slot | `IntegerSlot(` |  | nombre | — |  |
| 1 | 81 | Slot Data > Get a Float from a Slot | `FloatSlot(` |  | nombre | — |  |
| 2 | 82 | Slot Data > Get a String from a Slot | `StringSlot$(` |  | nombre → chaîne | — |  |
| 3 | 83 | Specify an Instance > Get an Integer Variable | `IntOfInstance(` |  | chaîne ; chaîne | — |  |
| 4 | 84 | Specify an Instance > Get a Float Variable | `FloatOfInstance(` |  | chaîne ; chaîne | — |  |
| 5 | 85 | Specify an Instance > Get a String Variable | `StringOfInstance$(` |  | chaîne ; chaîne → chaîne | — |  |
| 6 | 86 | Current Instance > Get an Integer Variable | `IntOfCurrInstance(` |  | chaîne | — |  |
| 7 | 87 | Current Instance > Get a Float Variable | `FloatOfCurrInstance(` |  | chaîne | — |  |
| 8 | 88 | Current Instance > Get a String Variable | `StringOfCurrInstance$(` |  | chaîne → chaîne | — |  |
| 9 | 89 | Global Variables > Get an Integer Variable | `GlobalInt(` |  | chaîne | — |  |
| 10 | 90 | Global Variables > Get a Float Variable | `GlobalFloat(` |  | chaîne | — |  |
| 11 | 91 | Global Variables > Get a String Variable | `GlobalString$(` |  | chaîne → chaîne | — |  |
| 12 | 92 | Local Variables > Get an Integer Variable | `LocalInt(` |  | chaîne | — |  |
| 13 | 93 | Local Variables > Get a Float Variable | `LocalFloat(` |  | chaîne | — |  |
| 14 | 94 | Local Variables > Get a String Variable | `LocalString$(` |  | chaîne → chaîne | — |  |
| 15 | 95 | Miscellaneous > Get Loop Index of Current Function | `FunctionLoopNumber(` |  |  | — |  |
| 16 | 96 | Errors > Get Current Error Code | `Error(` |  |  | — |  |
| 17 | 97 | Miscellaneous > Format a String | `FormatString$(` |  | chaîne → chaîne | — |  |
| 18 | 98 | Miscellaneous > Unformat a String | `UnformatString$(` |  | chaîne → chaîne | — |  |
| 19 | 99 | Current Instance > Get Name of Instance | `GetInstanceName$(` |  | → chaîne | — |  |
| 20 | 100 | Miscellaneous > Get Return Type of Current Function | `GetReturnType(` |  |  | — |  |
| 21 | 101 | Errors > Get Current Expression Error Code | `ExpressionError(` |  |  | — |  |
| 22 | 102 | Miscellaneous > Get Number of Parameters of Current Function | `NumberOfParameters(` |  |  | — |  |
| 24 | 104 | Miscellaneous > Get Number of Selected Objects | `CountSelected(` |  | nombre | — |  |
