# Extension Timeline

- File: `Timeline.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Event | `<object>: On Event <p0>` |  | string expression “Event Name” |
| 1 | -82 | Value Exists in Event | `<object>: Value <p2> Exists in Event <p1>, Position <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “Value Name” |
| 2 | -83 | String Exists in Event | `<object>: String <p2> Exists in Event <p1>, Position <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “Value Name” |
| 3 | -84 | On Save/Load Error | `<object>: On Save/Load Error` |  |  |
| 4 | -85 | Position Exists in Timeline | `<object>: Position <p0> Exists in Timeline` |  | numeric expression “Position in Timeline” |
| 5 | -86 | Event (Name) Exists at Position | `<object>: Event(s) <p1> Exist(s) at Position <p0>` |  | numeric expression “Position in Timeline”; string expression “Event(s) Name” |
| 6 | -87 | On Position Change | `<object>: On Position Change` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add Event | `Add Event <p1> at <p0>` |  | numeric expression “Position in Timeline”; string expression “Event Name” |
| 1 | 81 | Set Value in Event | `Set Value <p2> to <p3> in Event <p1> at <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “Value Name”; numeric expression “Value” |
| 2 | 82 | Set String in Event | `Set String <p2> to <p3> in Event <p1> at <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “String Name”; string expression “String” |
| 3 | 83 | Copy Event | `Copy Event <p1> Position <p0> to before <p3> Position <p2>` |  | numeric expression “Position in Timeline (Source)”; numeric expression “Event Index (Source)”; numeric expression “Position in Timeline (Target)”; numeric expression “Event Index to Insert Before (Target)” |
| 4 | 84 | Move Event | `Move Event <p1> Position <p0> to before <p3> Position <p2>` |  | numeric expression “Position in Timeline (Source)”; numeric expression “Event Index (Source)”; numeric expression “Position in Timeline (Target)”; numeric expression “Event Index to Insert Before (Target)” |
| 5 | 85 | Remove Event | `Remove Event <p1> at <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index” |
| 6 | 86 | Remove Position | `Remove Position <p0>` |  | numeric expression “Position in Timeline” |
| 7 | 87 | Remove Value from Event | `Remove Value <p2> from <p1> at <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “Value Name” |
| 8 | 88 | Remove String from Event | `Remove String <p2> from <p1> at <p0>` |  | numeric expression “Position in Timeline”; numeric expression “Event Index”; string expression “String Name” |
| 9 | 89 | Copy Position | `Copy Position <p0> onto <p1> (Replace = <p2>)` |  | numeric expression “Position in Timeline (Source)”; numeric expression “Position in Timeline (Target)”; numeric expression “Replace (erase original content of) Target Position? 1 = yes, anything else = no” |
| 10 | 90 | Move Position | `Move Position <p0> onto <p1> (Replace = <p2>)` |  | numeric expression “Position in Timeline (Source)”; numeric expression “Position in Timeline (Target)”; numeric expression “Replace (erase original content of) Target Position? 1 = yes, anything else = no” |
| 11 | 91 | Set Time | `Set Time to <p0>` |  | numeric expression “Time to Set to (in frames) (positive only)” |
| 12 | 92 | Set Time Speed | `Set Time Speed to <p0>` |  | numeric expression “Time Speed (0 = stopped, negative numbers = backwards in time (until 0), positive = forward in time” |
| 13 | 93 | Enable/Disable Event Triggering | `Allow Event Triggering = <p0>` |  | numeric expression “1 = allow, anything else = disable” |
| 14 | 94 | Load Timeline from String | `Load Timeline from String <p0> (Keep Current Timeline = <p1>)` |  | string expression “Enter the Timeline as a String”; numeric expression “Keep Current Timeline Data? 1 = yes, anything else = no” |
| 15 | 95 | Save Timeline to File | `Save Timeline to File <p0>` |  | string expression “Enter the Filepath to Save to” |
| 16 | 96 | Load Timeline from File | `Load Timeline from File <p0> (Keep Current Timeline = <p1>)` |  | string expression “Enter the Filepath to Load from”; numeric expression “Keep Current Timeline Data? 1 = yes (append), anything else = no” |
| 17 | 97 | Move to Position | `Move to Positition <p0>` |  | numeric expression “Position in Timeline to Move to” |
| 18 | 98 | Enable/Disable Position Change Triggering | `Allow Position Change Triggering = <p0>` |  | numeric expression “1 = allow, anything else = disable” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Time | `Time(` |  |  |
| 1 | 81 | Get Time Speed | `TimeSpeed(` |  |  |
| 2 | 82 | Get Current Event Name | `CurrentEvent$(` |  | → string |
| 3 | 83 | Get Current Event Index | `CurrentEvent(` |  |  |
| 4 | 84 | Get Number of Events at Position | `EventsAt(` |  | number “Position in Timeline” |
| 5 | 85 | Get Event Name At Position  Index | `EventIDAt$(` |  | number “Position in Timeline”; number “Event Index” → string |
| 6 | 86 | Get Attached Value | `Value(` |  | number “Position in Timeline”; number “Event Index”; string “Value Name” |
| 7 | 87 | Get Attached String | `String$(` |  | number “Position in Timeline”; number “Event Index”; string “String Name” → string |
| 8 | 88 | Get Timeline as String | `Timeline$(` |  | → string |
| 9 | 89 | Get Error String | `Error$(` |  | → string |
| 10 | 90 | Advanced > Get Number of Values at Position  Index | `ValCount(` |  | number “Position in Timeline”; number “Event Index” |
| 11 | 91 | Advanced > Get Number of Strings at Position  Index | `StrCount(` |  | number “Position in Timeline”; number “Event Index” |
| 12 | 92 | Advanced > Get Value Name by ID at Position  Index | `ValNameByID$(` |  | number “Position in Timeline”; number “Event Index”; number “Value ID” → string |
| 13 | 93 | Advanced > Get String Name by ID at Position  Index | `StrNameByID$(` |  | number “Position in Timeline”; number “Event Index”; number “String ID” → string |
