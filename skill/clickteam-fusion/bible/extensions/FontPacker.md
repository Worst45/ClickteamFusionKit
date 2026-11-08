# Extension FontPacker

- File: `FontPacker.mfx` — installed with Fusion
- Exporters: available in Android; **not in HTML5** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On Internal Fonts Read | `<object>: On Internal Fonts Read` |  |  |
| 1 | -82 | On Packed Fonts Read | `<object>: On Packed Fonts Read` |  |  |
| 2 | -83 | Is Internal Font Available | `<object>: Is Internal font <p0> available?` |  | string expression “Font Name” |
| 3 | -84 | Is Packed Font Available | `<object>: Is Packed font <p0> available?` |  | string expression “Font Name” |
| 4 | -85 | On Error | `<object>: On Error Ocurred` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Read Internal fonts | `<object>: Read Internal Fonts` |  |  |
| 1 | 81 | Read Packed Fonts | `<object>: Read Packed Fonts` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Internal Fonts Quantity | `IntenalFontsQty(` |  |  |
| 1 | 81 | Internal Font Name | `IntenalFontName$(` |  | number → string |
| 2 | 82 | Packed Fonts Quantity | `PackedFontsQty(` |  |  |
| 3 | 83 | Packed Font Name | `PackedFontName$(` |  | number → string |
| 4 | 84 | Read Default Font Size | `FontDefaultSize(` |  |  |
| 5 | 85 | Read Default Font Style | `FontDefaultStyle(` |  |  |
| 6 | 86 | Last error Ocurred | `LastError(` |  |  |
