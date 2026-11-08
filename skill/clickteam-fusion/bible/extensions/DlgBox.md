# Extension DlgBox

- File: `DlgBox.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Dialog > Is Opened | `DialogBox: This object is not compatible with this version of MMF` | Est ouvert |  |
| 3 | -84 | Dialog > Closed by OK | `<object>: closed by OK` | <object>: fermé par OK | (checked by hand) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Dialog Box > Open Modal | `Open modal` | Ouvrir modal |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Dialog > Title | `DialogBox: This object is not compatible with this version of MMF` | Titre | → string |
