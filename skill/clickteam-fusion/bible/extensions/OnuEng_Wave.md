# Extension OnuEng_Wave

- File: `OnuEng_Wave.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Filetypes | `Set Engineer Filetypes` |  | string expression “File types (space seperated, include .) (eg ".it .xm .mod .s3m")” |
| 1 | 81 | Enable Caching | `Enable Caching` |  |  |
| 2 | 82 | Disable Caching | `Disable Caching` |  |  |
