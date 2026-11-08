# Extension ishelllink

- File: `ishelllink.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | On failure | `<object> on failure` |  |  |
| 1 | -82 | On error | `<object> on error` |  |  |
| 2 | -83 | File > Is dirty? (needs to be saved) | `<object> is dirty?` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Clear last HRESULT code | `<object> Clear last error` |  |  |
| 1 | 81 | File > Load | `<object> load from file=<p0>` |  | file name “#Title#Select shell link to load#Filter#Shell link files (*.lnk)\|*.lnk\|All files (*.*)\|*.*\|” |
| 2 | 82 | File > Save to | `<object> save to file=<p0>` |  | file name “#Title#Select file to save shell file in#Filter#Shell link files (*.lnk)\|*.lnk\|All files (*.*)\|*.*\|” |
| 3 | 83 | Content > Resolve path | `<object> resolve shell link` |  |  |
| 4 | 84 | Content > Set arguments | `<object> set arguments, args=<p0>` |  | string expression “Shell link arguments” |
| 5 | 85 | Content > Set description | `<object> set description, desc=<p0>` |  | string expression “Shell link description” |
| 6 | 86 | Content > Set hot key | `<object> set hot key, hotkey=<p0>` |  | numeric expression “Shell link hot key, see MSDN for details” |
| 7 | 87 | Content > Set icon location | `<object> set icon location, file=<p0>, icon=<p1>` |  | file name “#Title#Select link icon location#Filter#All files (*.*)\|*.*\|”; numeric expression “Index of icon to use” |
| 8 | 88 | Content > Set path | `<object> set target, path=<p0>` |  | string expression “#Title#Select shell link's target file#Filter#All files (*.*)\|*.*\|” |
| 9 | 89 | Content > Set relative path | `<object> set relative path, ref file=<p0>` |  | string expression “#Title#Select reference file#Filter#All files (*.*)\|*.*\|” |
| 10 | 90 | Content > Set show cmd | `<object> set show cmd, cmd=<p0>` |  | numeric expression “Show window command, see MSDN for details” |
| 11 | 91 | Content > Set working directory | `<object> set working directory, dir=<p0>` |  | string expression “Shell link target's initial working directory” |
| 12 | 92 | Reset | `<object> reset` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get last HRESULT code | `getLastHResultCode(` |  |  |
| 1 | 81 | Content > Get arguments | `getArguments$(` |  | → string |
| 2 | 82 | Content > Get description | `getDescription$(` |  | → string |
| 3 | 83 | Content > Get hot key | `getHotKey(` |  |  |
| 4 | 84 | Content > Get icon location path | `getIconLocationPath$(` |  | → string |
| 5 | 85 | Content > Get icon index | `getIconLocationIndex(` |  |  |
| 6 | 86 | Content > Get raw path | `getRawPath$(` |  | → string |
| 7 | 87 | Content > Get show cmd | `getShowCmd(` |  |  |
| 8 | 88 | Content > Get working directory | `getWorkingDirectory$(` |  | → string |
