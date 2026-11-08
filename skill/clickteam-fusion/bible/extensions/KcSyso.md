# Extension KcSyso

- File: `KcSyso.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Environment Variable |  |  |  |
| 1 | 81 | Computer Name |  |  |  |
| 2 | 82 | User Name |  |  |  |
| 3 | 83 | System Default Language ID |  |  |  |
| 4 | 84 | User Default Language ID |  |  |  |
| 5 | 85 | Windows Version (index) |  |  |  |
| 6 | 86 | Windows Version (text) |  | Version de Windows (texte) |  |
| 7 | 87 | System Default Language Name |  |  |  |
| 8 | 88 | User Default Language Name |  |  |  |
