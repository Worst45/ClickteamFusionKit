# Extension kcjoy

- File: `kcjoy.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Raw X Value | `joy val x(` | Valeur brute X |  |
| 1 | 81 | Raw Y Value | `joy val y(` | Valeur brute Y |  |
| 2 | 82 | Raw Button A Value | `joy btn a(` | Valeur brute du bouton A |  |
| 3 | 83 | Raw Button B Value | `joy btn b(` | Valeur brute du bouton B |  |
| 4 | 84 | Raw Z Value | `joy val z(` | Valeur brute Z |  |
| 5 | 85 | Raw Button C Value | `joy btn c(` | Valeur brute du bouton C |  |
| 6 | 86 | Raw Button D Value | `joy btn d(` | Valeur brute du bouton D |  |
