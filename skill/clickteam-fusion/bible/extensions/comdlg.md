# Extension comdlg

- File: `comdlg.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | After Open Dialog | `<object>: Open Dialog - OK` |  |  |
| 1 | -82 | After Save Dialog | `<object>: Save Dialog - OK` |  |  |
| 2 | -83 | Open Cancelled | `<object>: Open Dialog - Cancel` |  |  |
| 3 | -84 | Save Cancelled | `<object>: Save Dialog - Cancel` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Show Open Dialog | `<object>: Show Open Dialog` |  |  |
| 1 | 81 | Show Save Dialog | `<object>: Show Save Dialog` |  |  |
| 2 | 82 | Filters > Clear Filters | `<object>: Reset Filters` |  |  |
| 3 | 83 | Filters > Add Filter | `<object>: Add Filter <p0> for <p1>` |  | (unreliable parameters) |
| 4 | 84 | Set Default Filename | `<object>: Set Filename to <p0>` |  | (unreliable parameters) |
| 5 | 85 | Set Initial Directory | `<object>: Set Initial Directory to <p0>` |  | (unreliable parameters) |
| 6 | 86 | Set Dialog Title | `<object>: Set Dialog Title to <p0>` |  | (unreliable parameters) |
| 7 | 87 | Set Default Extension | `<object>: Set Default Filename Extension to <p0>` |  | (unreliable parameters) |
| 8 | 88 | Preferences > File Must Exist > Enable | `<object>: Enable File Must Exist` |  |  |
| 9 | 89 | Preferences > File Must Exist > Disable | `<object>: Disable File Must Exist` |  |  |
| 10 | 90 | Preferences > Hide Read Only > Enable | `<object>: Enable Hide Read Only` |  |  |
| 11 | 91 | Preferences > Hide Read Only > Disable | `<object>: Disable Hide Read Only` |  |  |
| 12 | 92 | Preferences > No Change Directory > Enable | `<object>: Enable No Change Directory` |  |  |
| 13 | 93 | Preferences > No Change Directory > Disable | `<object>: Disable No Change Directory` |  |  |
| 14 | 94 | Preferences > Overwrite Prompt > Enable | `<object>: Enable Overwrite Prompt` |  |  |
| 15 | 95 | Preferences > Overwrite Prompt > Disable | `<object>: Disable Overwrite Prompt` |  |  |
| 16 | 96 | Preferences > Path Must Exist > Enable | `<object>: Enable Path Must Exist` |  |  |
| 17 | 97 | Preferences > Path Must Exist > Disable | `<object>: Disable Path Must Exist` |  |  |
| 18 | 98 | Preferences > Create Prompt > Enable | `<object>: Enable Create Prompt` |  |  |
| 19 | 99 | Preferences > Create Prompt > Disable | `<object>: Disable Create Prompt` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Filename | `GetFilename$(` |  |  |
| 1 | 81 | Return Open Dialog | `OpenDialog$(` |  |  |
| 2 | 82 | Return Save Dialog | `SaveDialog$(` |  |  |
| 3 | 83 | Get File Title | `GetFileTitle$(` |  |  |
