# Extension PowerRegistry

- File: `PowerRegistry.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Key exists | `<object>: Current key exists` |  |  | — |  |
| 1 | -82 | Value exists | `<object> : Value <p0> exists in current key` |  | string expression “Value name” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Root Key > HKEY_CLASSES_ROOT | `Set root key to HKEY_CLASSES_ROOT` |  |  | — |  |
| 1 | 81 | Set Root Key > HKEY_CURRENT_USER | `Set root key to HKEY_CURRENT_USER` |  |  | — |  |
| 2 | 82 | Set Root Key > HKEY_LOCAL_MACHINE | `Set root key to HKEY_LOCAL_MACHINE` |  |  | — |  |
| 3 | 83 | Set Root Key > HKEY_USERS | `Set root key to HKEY_USERS` |  |  | — |  |
| 4 | 84 | Set Root Key > HKEY_CURRENT_CONFIG | `Set root key to HKEY_CURRENT_CONFIG` |  |  | — |  |
| 5 | 85 | Current Key > Open Key | `Open key <p0>` |  | string expression “Open key” | — |  |
| 6 | 86 | Current Key > Create Key | `Create key <p0>` |  | string expression “Create key” | — |  |
| 7 | 87 | Current Key > Set String Value | `Set string value <p0> to <p1>` |  | string expression “Value name”; string expression “Set String Value” | — |  |
| 8 | 88 | Current Key > Set Binary Value | `Set binary value <p0> to <p1>` |  | string expression “Value name”; string expression “Set Binary Value (Put ASCII)” | — |  |
| 9 | 89 | Current Key > Set DWORD Value | `Set DWORD value <p0> to <p1>` |  | string expression “Value name”; numeric expression “Set Value” | — |  |
| 10 | 90 | Current Key > Delete Key | `Delete key <p0>` |  | string expression “Key name” | — |  |
| 11 | 91 | Current Key > Delete Value | `Delete value <p0>` |  | string expression “Value name” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current Key > Get Current Root Key | `RegRootKey$(` |  | → string | — |  |
| 1 | 81 | Current Key > Get Current Key | `RegKey$(` |  | → string | — |  |
| 2 | 82 | Current Key > Get String\Binary Value | `RegGetStr$(` |  | string “Value name” → string | — |  |
| 3 | 83 | Current Key > Get DWORD Value | `RegGetDWORD$(` |  | string “Value name” | — |  |
