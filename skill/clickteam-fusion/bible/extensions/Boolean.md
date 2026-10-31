# Extension Boolean

- Fichier : `Boolean.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Test Boolean Expression | `<objet>: Test(<p0>)` |  | expression chaîne « Enter Boolean Expression » | — |  |
| 1 | -82 | Has an Error Ocurred? | `<objet>: Has Error <p0> Occured in <p1>?` |  | expression numérique « Enter Error Number (0 = Any Error) » ; expression numérique « Enter Buffer Number (0-10; 0 = Any Buffer) » | — |  |
| 2 | -83 | Is Truth Slot Activated? | `<objet>: Is Truth Slot <p0> Activated?` |  | expression numérique « Enter Truth Slot Number (0-99) » | — |  |
| 3 | -84 | Flags > Is Flag On? | `<objet>: Is Flag <p0> On?` |  | expression numérique « Enter Flag Number (0-99) » | — |  |
| 4 | -85 | Flags > Is Flag Off? | `<objet>: Is Flag <p0> Off?` |  | expression numérique « Enter Flag Number (0-99) » | — |  |
| 5 | -86 | If-Then-Else > If(Expression)-Then | `<objet>: If(<p0>) Then` |  | expression chaîne « Enter Boolean Expression » | — |  |
| 6 | -87 | If-Then-Else > Then | `<objet>: Then` |  |  | — |  |
| 7 | -88 | If-Then-Else > Else | `<objet>: Else` |  |  | — |  |
| 8 | -89 | If-Then-Else > End If | `<objet>: End If` |  |  | — |  |
| 9 | -90 | If-Then-Else > Nested Ifs > Then If(Expression)-Then | `<objet>: Then If(<p0>) Then` |  | expression chaîne « Enter Boolean Expression » | — |  |
| 10 | -91 | If-Then-Else > Nested Ifs > Else If(Expression)-Then | `<objet>: Else If(<p0>) Then` |  | expression chaîne « Enter Boolean Expression » | — |  |
| 11 | -92 | If-Then-Else > If(Conditions)-Then [Open] | `<objet>: If(` |  |  | — |  |
| 12 | -93 | If-Then-Else > Nested Ifs > Then If(Conditions)-Then [Open] | `<objet>: Then If(` |  |  | — |  |
| 13 | -94 | If-Then-Else > Nested Ifs > Else If(Conditions)-Then [Open] | `<objet>: Else If(` |  |  | — |  |
| 14 | -95 | If-Then-Else > If(Conditions)-Then [Close] (needed for all [Open]) | `<objet>: ) Then` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set String Indicator | `Set String Indicator to <p0>` |  | expression chaîne « Enter a Character » | — |  |
| 1 | 81 | Clear Errors | `Clear All Errors` |  |  | — |  |
| 2 | 82 | Activate Truth Slot | `Activate Truth Slot <p0>` |  | expression numérique « Enter a Truth Slot Number (0-99) » | — |  |
| 3 | 83 | Flags > Set Flag On | `Set Flag <p0> On` |  | expression numérique « Enter a Flag Number (0-99) » | — |  |
| 4 | 84 | Flags > Set Flag Off | `Set Flag <p0> Off` |  | expression numérique « Enter a Flag Number (0-99) » | — |  |
| 5 | 85 | Flags > Toggle Flag | `Toggle Flag <p0>` |  | expression numérique « Enter a Flag Number (0-99) » | — |  |
| 6 | 86 | Flags > Set Flag by Value | `Set Flag <p0>'s Value to <p1>` |  | expression numérique « Enter a Flag Number (0-99) » ; expression numérique « Enter a Value (0 for Off or 1 for On) » | — |  |
| 7 | 87 | End All Ifs | `End All Ifs` |  |  | — |  |
| 8 | 88 | Null Action (Does nothing) | `Null Action` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Evaluate Boolean Expression | `EvaluateBoolean(` |  | chaîne | — |  |
| 1 | 81 | Retrieve String Indicator | `GetIndicator$(` |  | → chaîne | — |  |
| 2 | 82 | Get the Last Error Message | `GetError$(` |  | nombre → chaîne | — |  |
| 3 | 83 | Get the Current Buffer Slot | `GetCurrentBuffer(` |  |  | — |  |
| 4 | 84 | Get the Value of a Truth Slot | `GetTruthValue(` |  | nombre | — |  |
| 5 | 85 | Get the Value of a Flag | `GetFlagValue(` |  | nombre | — |  |
| 6 | 86 | Immediate If > Return String | `IIfString$(` |  | chaîne ; chaîne ; chaîne → chaîne | — |  |
| 7 | 87 | Immediate If > Return Integer | `IIfInteger(` |  | chaîne ; nombre ; nombre | — |  |
| 8 | 88 | Immediate If > Return Float (Decimal Number) | `IIfFloat(` |  | chaîne ; nombre ; nombre | — |  |
