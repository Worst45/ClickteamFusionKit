# Extension ExpEval

- Fichier : `ExpEval.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Error (immediate) | `<objet>: On Error` |  |  | — |  |
| 1 | -82 | Error Has Occured (not immediate) | `<objet>: Error Has Occured` |  |  | — |  |
| 2 | -83 | On Function | `<objet>: On Function <p0>` |  | expression chaîne « Enter the Name of the Function » | — |  |
| 3 | -84 | On Operation | `<objet>: On Operator <p0>` |  | expression chaîne « Enter the Operator (No Letters or Numbers) » | — |  |
| 4 | -85 | First Iteration | `<objet>: First Iteration of Current MMF Function or Operator` |  |  | — |  |
| 5 | -86 | Set to Iterate | `<objet>: Current MMF Function or Operator is Set to Iterate` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Clear Errors | `Clear Errors` |  |  | — |  |
| 1 | 81 | Set String Indicator | `Set String Indicator Character to <p0>` |  | expression chaîne « Enter the String Indicator Character » | — |  |
| 2 | 82 | Define a Function | `<p0> ( <p1> Parameters ) := <p2>` |  | expression chaîne « Enter the Name of the Function » ; expression numérique « Enter the Number of Parameters » ; expression chaîne « Enter the Expression (Parameters are p1, p2, p3, etc.) » | — |  |
| 3 | 83 | Define an Operator | `p1 <p0> p2 := <p1> at Precedence Level <p2>` |  | expression chaîne « Enter the Operator (No Letters or Numbers) » ; expression chaîne « Enter the Expression (Parameters are p1 and p2) » ; expression numérique « Enter the Operator Precedence Number » | — |  |
| 4 | 84 | MMF Functions and Operators > Define an MMF Function | `<p0> ( <p1> Parameters )--Evaluate Parameters?: <p2>` |  | expression chaîne « Enter the Name of the Function » ; expression numérique « Enter the Number of Parameters » ; expression numérique « Have Object Evaluate Parameters? (0 = No; 1 = Yes) » | — |  |
| 5 | 85 | MMF Functions and Operators > Define an MMF Operator | `p1 <p0> p2 at Precedence Level <p1>--Evaluate Parameters?: <p2>` |  | expression chaîne « Enter the Operator (No Letters or Numbers) » ; expression numérique « Enter the Operator Precedence Number » ; expression numérique « Have Object Evaluate Parameters? (0 = No; 1 = Yes) » | — |  |
| 6 | 86 | MMF Functions and Operators > Return a Value | `Return <p0>` |  | expression chaîne « Enter the Value to be Returned » | — |  |
| 7 | 87 | MMF Functions and Operators > Generate an Error | `Generate Error: <p0>` |  | expression chaîne « Enter the Error Message » | — |  |
| 8 | 88 | Evaluate an Expression | `Evaluate <p0>` |  | expression chaîne « Enter the Expression to Evaluate » | — |  |
| 9 | 89 | MMF Functions and Operators > Looping > Iterate Current MMF Function or Operator | `Iterate Current MMF Function or Operator` |  |  | — |  |
| 10 | 90 | MMF Functions and Operators > Looping > Redraw Frame | `Redraw Frame` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Evaluate Expression | `Evaluate$(` |  | chaîne → chaîne | — |  |
| 1 | 81 | Get Last Error Message | `LastError$(` |  | → chaîne | — |  |
| 2 | 82 | Get String Indicator | `StringIndicator$(` |  | → chaîne | — |  |
| 3 | 83 | Get Current Loop Index | `CurrentLoopIndex(` |  |  | — |  |
| 4 | 84 | Expression Analysis > Convert Expression to Lowercase | `LowerCase$(` |  | chaîne → chaîne | — |  |
| 5 | 85 | Expression Analysis > Remove Whitespace from an Expression | `RemoveWhiteSpace$(` |  | chaîne → chaîne | — |  |
| 6 | 86 | Expression Analysis > Find in Expression | `FindInExpression(` |  | chaîne ; chaîne ; nombre ; nombre | — |  |
| 7 | 87 | Convert Integer to String of So Many Digits | `StrDigits$(` |  | nombre ; nombre → chaîne | — |  |
| 8 | 88 | Convert ExpEval String to MMF String | `ConvertString$(` |  | chaîne → chaîne | — |  |
