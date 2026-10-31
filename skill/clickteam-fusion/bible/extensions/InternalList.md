# Extension InternalList

- File: `InternalList.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Item Exists in List | `<object>: Item <p0> is in List` |  | string expression “Item String” | — |  |
| 1 | -82 | On Custom Sort | `<object>: On Custom Sort` |  |  | — |  |
| 2 | -83 | On Error | `<object>: On Error` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Insert Item | `Insert Item <p0> before <p1>, <p2> times` |  | string expression “Item String”; numeric expression “Insert Before”; numeric expression “Number of Times to Insert” | — |  |
| 1 | 81 | Change Item | `Change Item <p0> to <p1>` |  | numeric expression “Index”; string expression “New Item String” | — |  |
| 2 | 82 | Copy Items | `Copy Items [<p0>, <p1>) to <p2>, Overwrite = <p3>` |  | numeric expression “Start (included)”; numeric expression “End (excluded)”; numeric expression “Copy to before”; numeric expression “0 = Insert, anything else = Overwrite” | — |  |
| 3 | 83 | Delete Items | `Delete Items [<p0>, <p1>)` |  | numeric expression “Start (included)”; numeric expression “End (excluded)” | — |  |
| 4 | 84 | Clear List | `Clear List` |  |  | — |  |
| 5 | 85 | Save List to File | `Save List to File <p0> with item Delimiter <p1> and Escape with <p2>` |  | string expression “File Path to Save to”; string expression “Item Delimiter (escaped from items)”; string expression “Escape Character(s) (escaped from items)” | — |  |
| 6 | 86 | Load List from File | `Load List from File <p0> with item Delimiter <p1> and Escape with <p2>, and Insert before <p3>` |  | string expression “File Path to Load from”; string expression “Item Delimiter (escaped from items)”; string expression “Escape Character(s) (escaped from items)”; numeric expression “Insert Before” | — |  |
| 7 | 87 | Load List from String | `Load List from String <p0> with item Delimiter <p1> and Escape with <p2>, and Insert before <p3>` |  | string expression “String to Load from”; string expression “Item Delimiter (escaped from items)”; string expression “Escape Character(s) (escaped from items)”; numeric expression “Insert Before” | — |  |
| 8 | 88 | Sort List in Range | `Sort List in range [<p0>, <p1>) with Sort Order <p2>` |  | numeric expression “Start (included)”; numeric expression “End (excluded)”; numeric expression “0 = a, b, c; 1 = c, b, a; anything else = Custom Sort” | — |  |
| 9 | 89 | Custom Sort: Return True/False | `Set Custom Sort Return to <p0>` |  | numeric expression “0 = false, anything else = true” | — |  |
| 10 | 90 | Reserve More Space | `Reserve space for at least <p0> total items` |  | numeric expression “Minimum Space Wanted” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Item | `Item$(` |  | number “Item Index” → string | — |  |
| 1 | 81 | Get Number of Items | `Items(` |  |  | — |  |
| 2 | 82 | Get Number of Item Occurrences | `ItemOccurrences(` |  | string “Item String” | — |  |
| 3 | 83 | Get Index of Item by Occurrence | `IndexByOccurrence(` |  | string “Item String”; number “Occurrence # (1-based)” | — |  |
| 4 | 84 | Get List as String | `List$(` |  | string “Item Delimiter (escaped from items)”; string “Escape Character(s) (escaped from items)” → string | — |  |
| 5 | 85 | Custom Sort: Get String A | `SortStrA$(` |  | → string | — |  |
| 6 | 86 | Custom Sort: Get String B | `SortStrB$(` |  | → string | — |  |
| 7 | 87 | Get Capacity | `Capacity(` |  |  | — |  |
