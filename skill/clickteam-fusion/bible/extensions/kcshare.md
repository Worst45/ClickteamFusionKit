# Extension kcshare

- File: `kcshare.mfx` — installed with Fusion
- Name(s) shown in projects: “Shared Data”
- Usage in the corpus: 12 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | is Equal | `<object>: Condition example <p0>=<p1>` | <object>: Condition example <p0>=<p1> | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set shared value | `Shared value <p0>=<p1>` | Valeur partagée <p0>=<p1> | (unreliable parameters) | — |  |
| 1 | 81 | Set shared value from string | `Shared value <p0>=val(<p1>)` | Valeur partagée <p0>=val(<p1>) | (unreliable parameters) | — |  |
| 2 | 82 | Set shared string | `Shared string <p0>=<p1>` | Chaîne partagée <p0>=<p1> | (unreliable parameters) | 8 (4 proj.) | `Shared Data : Event ID 82, 2 Parameters { 0, "" }` |
| 3 | 83 | Set shared string from value | `Shared string <p0>=str$(<p1>)` | Chaîne partagée <p0>=str$(<p1>) | (unreliable parameters) | — |  |
| 4 | 84 | Reset | `Reset` | Remise à zéro |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get shared value | `Shared Value(` | Valeur partagée | (unreliable parameters) | — |  |
| 1 | 81 | Get string from shared value | `Shared Value$(` | Chaîne à partir de valeur partagée | (unreliable parameters) | — |  |
| 2 | 82 | Get shared String | `Shared String$(` | Chaîne partagée | (unreliable parameters) | 4 (4 proj.) | `Expression ID 82("Shared Data")` |
| 3 | 83 | Get value from shared string | `Shared String(` | Valeur à partir de chaîne partagée | (unreliable parameters) | — |  |
