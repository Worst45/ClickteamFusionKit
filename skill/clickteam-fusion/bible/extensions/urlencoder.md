# Extension urlencoder

- File: `urlencoder.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Encode Spaces as '+' | `Encode Spaces as '+'` |  |  |
| 1 | 81 | Encode Spaces as '%20' | `Encode Spaces as '%<p2>0'` |  |  |
| 2 | 82 | Encode Control Characters (:/?=#) | `Encode Control Characters` |  |  |
| 3 | 83 | Don't Encode Control Characters (:/?=#) | `Don't Encode Control Characters` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Encode URL | `urlEncode$(` |  | string “Enter URL or URL Part” → string |
| 1 | 81 | Misc. > Get MD5 Hash | `MD5$(` |  | string “Enter String to be Hashed” → string |
