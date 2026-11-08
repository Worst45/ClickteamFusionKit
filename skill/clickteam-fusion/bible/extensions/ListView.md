# Extension ListView

- File: `ListView.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked on a column? | `<object>: Click with left button` | <object>: Clic avec le bouton gauche |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Edit > Insert line | `<object> : Insert line <p1> at position <p0>` | <object>: Insérer ligne <p1> en position <p0> | numeric expression “Enter the number of the line (zero based)”; string expression “Enter the name” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Coordinates > Get line at click | `ItemClick(` | Ligne sous clic |  |
