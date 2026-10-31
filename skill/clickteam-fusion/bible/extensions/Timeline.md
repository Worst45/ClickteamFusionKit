# Extension Timeline

- Fichier : `Timeline.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Event | `<objet>: On Event <p0>` |  | expression chaîne « Event Name » | — |  |
| 1 | -82 | Value Exists in Event | `<objet>: Value <p2> Exists in Event <p1>, Position <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « Value Name » | — |  |
| 2 | -83 | String Exists in Event | `<objet>: String <p2> Exists in Event <p1>, Position <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « Value Name » | — |  |
| 3 | -84 | On Save/Load Error | `<objet>: On Save/Load Error` |  |  | — |  |
| 4 | -85 | Position Exists in Timeline | `<objet>: Position <p0> Exists in Timeline` |  | expression numérique « Position in Timeline » | — |  |
| 5 | -86 | Event (Name) Exists at Position | `<objet>: Event(s) <p1> Exist(s) at Position <p0>` |  | expression numérique « Position in Timeline » ; expression chaîne « Event(s) Name » | — |  |
| 6 | -87 | On Position Change | `<objet>: On Position Change` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add Event | `Add Event <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression chaîne « Event Name » | — |  |
| 1 | 81 | Set Value in Event | `Set Value <p2> to <p3> in Event <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « Value Name » ; expression numérique « Value » | — |  |
| 2 | 82 | Set String in Event | `Set String <p2> to <p3> in Event <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « String Name » ; expression chaîne « String » | — |  |
| 3 | 83 | Copy Event | `Copy Event <p1> Position <p0> to before <p3> Position <p2>` |  | expression numérique « Position in Timeline (Source) » ; expression numérique « Event Index (Source) » ; expression numérique « Position in Timeline (Target) » ; expression numérique « Event Index to Insert Before (Target) » | — |  |
| 4 | 84 | Move Event | `Move Event <p1> Position <p0> to before <p3> Position <p2>` |  | expression numérique « Position in Timeline (Source) » ; expression numérique « Event Index (Source) » ; expression numérique « Position in Timeline (Target) » ; expression numérique « Event Index to Insert Before (Target) » | — |  |
| 5 | 85 | Remove Event | `Remove Event <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » | — |  |
| 6 | 86 | Remove Position | `Remove Position <p0>` |  | expression numérique « Position in Timeline » | — |  |
| 7 | 87 | Remove Value from Event | `Remove Value <p2> from <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « Value Name » | — |  |
| 8 | 88 | Remove String from Event | `Remove String <p2> from <p1> at <p0>` |  | expression numérique « Position in Timeline » ; expression numérique « Event Index » ; expression chaîne « String Name » | — |  |
| 9 | 89 | Copy Position | `Copy Position <p0> onto <p1> (Replace = <p2>)` |  | expression numérique « Position in Timeline (Source) » ; expression numérique « Position in Timeline (Target) » ; expression numérique « Replace (erase original content of) Target Position? 1 = yes, anything else = no » | — |  |
| 10 | 90 | Move Position | `Move Position <p0> onto <p1> (Replace = <p2>)` |  | expression numérique « Position in Timeline (Source) » ; expression numérique « Position in Timeline (Target) » ; expression numérique « Replace (erase original content of) Target Position? 1 = yes, anything else = no » | — |  |
| 11 | 91 | Set Time | `Set Time to <p0>` |  | expression numérique « Time to Set to (in frames) (positive only) » | — |  |
| 12 | 92 | Set Time Speed | `Set Time Speed to <p0>` |  | expression numérique « Time Speed (0 = stopped, negative numbers = backwards in time (until 0), positive = forward in time » | — |  |
| 13 | 93 | Enable/Disable Event Triggering | `Allow Event Triggering = <p0>` |  | expression numérique « 1 = allow, anything else = disable » | — |  |
| 14 | 94 | Load Timeline from String | `Load Timeline from String <p0> (Keep Current Timeline = <p1>)` |  | expression chaîne « Enter the Timeline as a String » ; expression numérique « Keep Current Timeline Data? 1 = yes, anything else = no » | — |  |
| 15 | 95 | Save Timeline to File | `Save Timeline to File <p0>` |  | expression chaîne « Enter the Filepath to Save to » | — |  |
| 16 | 96 | Load Timeline from File | `Load Timeline from File <p0> (Keep Current Timeline = <p1>)` |  | expression chaîne « Enter the Filepath to Load from » ; expression numérique « Keep Current Timeline Data? 1 = yes (append), anything else = no » | — |  |
| 17 | 97 | Move to Position | `Move to Positition <p0>` |  | expression numérique « Position in Timeline to Move to » | — |  |
| 18 | 98 | Enable/Disable Position Change Triggering | `Allow Position Change Triggering = <p0>` |  | expression numérique « 1 = allow, anything else = disable » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Time | `Time(` |  |  | — |  |
| 1 | 81 | Get Time Speed | `TimeSpeed(` |  |  | — |  |
| 2 | 82 | Get Current Event Name | `CurrentEvent$(` |  | → chaîne | — |  |
| 3 | 83 | Get Current Event Index | `CurrentEvent(` |  |  | — |  |
| 4 | 84 | Get Number of Events at Position | `EventsAt(` |  | nombre « Position in Timeline » | — |  |
| 5 | 85 | Get Event Name At Position  Index | `EventIDAt$(` |  | nombre « Position in Timeline » ; nombre « Event Index » → chaîne | — |  |
| 6 | 86 | Get Attached Value | `Value(` |  | nombre « Position in Timeline » ; nombre « Event Index » ; chaîne « Value Name » | — |  |
| 7 | 87 | Get Attached String | `String$(` |  | nombre « Position in Timeline » ; nombre « Event Index » ; chaîne « String Name » → chaîne | — |  |
| 8 | 88 | Get Timeline as String | `Timeline$(` |  | → chaîne | — |  |
| 9 | 89 | Get Error String | `Error$(` |  | → chaîne | — |  |
| 10 | 90 | Advanced > Get Number of Values at Position  Index | `ValCount(` |  | nombre « Position in Timeline » ; nombre « Event Index » | — |  |
| 11 | 91 | Advanced > Get Number of Strings at Position  Index | `StrCount(` |  | nombre « Position in Timeline » ; nombre « Event Index » | — |  |
| 12 | 92 | Advanced > Get Value Name by ID at Position  Index | `ValNameByID$(` |  | nombre « Position in Timeline » ; nombre « Event Index » ; nombre « Value ID » → chaîne | — |  |
| 13 | 93 | Advanced > Get String Name by ID at Position  Index | `StrNameByID$(` |  | nombre « Position in Timeline » ; nombre « Event Index » ; nombre « String ID » → chaîne | — |  |
