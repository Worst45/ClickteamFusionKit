# Extension Registry++

- File: `Registry++.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Sub-Key Exists | `<object>: Sub-Key <p1> Exists in Slot <p0>` |  | string expression “Data Slot”; string expression “Name of Sub-Key” | — |  |
| 1 | -82 | Value Exists | `<object>: Value <p1> Exists in Slot <p0>` |  | string expression “Data Slot”; string expression “Name of Value” | — |  |
| 2 | -83 | Any Key Exists > HKEY_CLASSES_ROOT | `<object>: Key HKEY_CLASSES_ROOT\<p0> Exists` |  | string expression “Full Path to Key (Using Backslashes)” | — |  |
| 3 | -84 | Any Key Exists > HKEY_CURRENT_USER | `<object>: Key HKEY_CURRENT_USER\<p0> Exists` |  | string expression “Full Path to Key (Using Backslashes)” | — |  |
| 4 | -85 | Any Key Exists > HKEY_LOCAL_MACHINE | `<object>: Key HKEY_LOCAL_MACHINE\<p0> Exists` |  | string expression “Full Path to Key (Using Backslashes)” | — |  |
| 5 | -86 | Any Key Exists > HKEY_CURRENT_CONFIG | `<object>: Key HKEY_CURRENT_CONFIG\<p0> Exists` |  | string expression “Full Path to Key (Using Backslashes)” | — |  |
| 6 | -87 | Any Key Exists > HKEY_USERS | `<object>: Key HKEY_USERS\<p0> Exists` |  | string expression “Path to Key (Using Backslashes)” | — |  |
| 7 | -88 | Any Value Exists > HKEY_CLASSES_ROOT | `<object>: Value <p1> Exists in Key HKEY_CLASSES_ROOT\<p0>` |  | string expression “Path to Key (Using Backslashes)”; string expression “Value Name” | — |  |
| 8 | -89 | Any Value Exists > HKEY_CURRENT_USER | `<object>: Value <p1> Exists in Key HKEY_CURRENT_USER\<p0>` |  | string expression “Path to Key (Using Backslashes)”; string expression “Value Name” | — |  |
| 9 | -90 | Any Value Exists > HKEY_LOCAL_MACHINE | `<object>: Value <p1> Exists in Key HKEY_LOCAL_MACHINE\<p0>` |  | string expression “Path to Key (Using Backslashes)”; string expression “Value Name” | — |  |
| 10 | -91 | Any Value Exists > HKEY_CURRENT_CONFIG | `<object>: Value <p1> Exists in Key HKEY_CURRENT_CONFIG\<p0>` |  | string expression “Path to Key (Using Backslashes)”; string expression “Value Name” | — |  |
| 11 | -92 | Any Value Exists > HKEY_USERS | `<object>: Value <p1> Exists in Key HKEY_USERS\<p0>` |  | string expression “Path to Key (Using Backslashes)”; string expression “Value Name” | — |  |
| 12 | -93 | On Sub-Key Create | `<object>: On Sub-Key <p1> Created in Slot <p0>` |  | string expression “Data Slot (Blank = Any Slot)”; string expression “Sub-Key Name (Blank = Any Key)” | — |  |
| 13 | -94 | On Sub-Key Open | `<object>: On Sub-Key <p1> Opened in Slot <p0>` |  | string expression “Data Slot (Blank = Any Slot)”; string expression “Sub-Key Name (Blank = Any Key)” | — |  |
| 14 | -95 | Enumeration > On Sub-Key | `<object>: On Sub-Key Enumeration` |  |  | — |  |
| 15 | -96 | Enumeration > On Value | `<object>: On Value Enumeration` |  |  | — |  |
| 16 | -97 | On Error | `<object>: On Error` |  |  | — |  |
| 17 | -98 | Data Slot Exists | `<object>: Data Slot <p0> Exists` |  | string expression “Data Slot” | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Keys > Set Root Key > HKEY_CLASSES_ROOT | `Set Root Key of Slot <p0> to HKEY_CLASSES_ROOT` |  | string expression “Data Slot” | — |  |
| 1 | 81 | Keys > Set Root Key > HKEY_CURRENT_USER | `Set Root Key of Slot <p0> to HKEY_CURRENT_USER` |  | string expression “Data Slot” | — |  |
| 2 | 82 | Keys > Set Root Key > HKEY_LOCAL_MACHINE | `Set Root Key of Slot <p0> to HKEY_LOCAL_MACHINE` |  | string expression “Data Slot” | — |  |
| 3 | 83 | Keys > Set Root Key > HKEY_CURRENT_CONFIG | `Set Root Key of Slot <p0> to HKEY_CURRENT_CONFIG` |  | string expression “Data Slot” | — |  |
| 4 | 84 | Keys > Set Root Key > HKEY_USERS | `Set Root Key of Slot <p0> to HKEY_USERS` |  | string expression “Data Slot” | — |  |
| 5 | 85 | Keys > Navigate to Key > HKEY_CLASSES_ROOT | `Navigate to HKEY_CLASSES_ROOT\<p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 6 | 86 | Keys > Navigate to Key > HKEY_CURRENT_USER | `Navigate to HKEY_CURRENT_USER\<p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 7 | 87 | Keys > Navigate to Key > HKEY_LOCAL_MACHINE | `Navigate to HKEY_LOCAL_MACHINE\<p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 8 | 88 | Keys > Navigate to Key > HKEY_CURRENT_CONFIG | `Navigate to HKEY_CURRENT_CONFIG\<p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 9 | 89 | Keys > Navigate to Key > HKEY_USERS | `Navigate to HKEY_USERS\<p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 10 | 90 | Keys > Create Sub-Key | `Create Sub-Key <p1> in Data Slot <p0> (Open Key = <p2>)` |  | string expression “Data Slot”; string expression “Name of Key”; numeric expression “Open Key? (0=No, 1=Yes)” | — |  |
| 11 | 91 | Keys > Open Sub-Key | `Open Sub-Key <p1> in Data Slot <p0>` |  | string expression “Data Slot”; string expression “Name of Key” | — |  |
| 12 | 92 | Keys > Delete Sub-Key | `Delete Sub-Key <p1> in Data Slot <p0>` |  | string expression “Data Slot”; string expression “Name of Sub-Key”; numeric expression “Delete Key if Not Empty? (0=No, 1=Yes)” | — |  |
| 13 | 93 | Values > Set DWORD Value | `Set DWORD Value <p1> to <p2> in Data Slot <p0>` |  | string expression “Data Slot”; string expression “Name of DWORD Value”; numeric expression “Value to Set” | — |  |
| 14 | 94 | Values > Set String Value | `Set String Value <p1> to <p2> in Data Slot <p0>` |  | string expression “Data Slot”; string expression “Name of String Value”; string expression “Value to Set” | — |  |
| 15 | 95 | Values > Set Default Value | `Set Default Value of Slot <p0> to <p1>` |  | string expression “Data Slot”; string expression “Value to Set” | — |  |
| 16 | 96 | Values > Delete Value | `Delete Value <p1> in Data Slot <p0>` |  | string expression “Data Slot”; string expression “Name of Value to Delete” | — |  |
| 17 | 97 | Enumeration > Enumerate Sub-Keys | `Enumerate Sub-Keys in Slot <p0>` |  | string expression “Data Slot” | — |  |
| 18 | 98 | Enumeration > Enumerate Values | `Enumerate Values in Slot <p0>` |  | string expression “Data Slot” | — |  |
| 19 | 99 | Files > Save Key | `Save Data Slot <p0> to <p1>` |  | string expression “Data Slot”; file name “File” | — |  |
| 20 | 100 | Keys > Set Root Key > Custom... | `Set Root Key of Slot <p0> to <p1>` |  | string expression “Data Slot”; string expression “Root Key (as String)” | — |  |
| 21 | 101 | Keys > Navigate to Key > Custom... | `Navigate to <p1> in Data Slot <p0> (Create = <p2>)` |  | string expression “Data Slot”; string expression “Full Path to Key (Using Backslashes)”; numeric expression “Create Non-Existant Keys? (0=No, 1=Yes)” | — |  |
| 22 | 102 | Data Slots > Create Local Slot | `Create Data Slot <p0>` |  | string expression “Data Slot” | — |  |
| 23 | 103 | Data Slots > Create Remote Slot | `Create Remote Data Slot <p0> on Computer <p1>` |  | string expression “Data Slot”; string expression “Computer Name” | — |  |
| 24 | 104 | Data Slots > Copy Slot | `Copy Data Slot <p0> to Slot <p1>` |  | string expression “Source Slot”; string expression “Destination Slot” | — |  |
| 25 | 105 | Data Slots > Duplicate Slot | `Create Data Slot <p1> from Slot <p0>` |  | string expression “Source Slot”; string expression “New Slot to Create” | — |  |
| 26 | 106 | Data Slots > Delete Slot | `Delete Data Slot <p0>` |  | string expression “Data Slot” | — |  |
| 27 | 107 | Data Slots > Delete All Slots | `Delete All Data Slots` |  |  | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Data Slots > Registry Path of Data Slot | `SlotPath$(` |  | string “Data Slot” → string | — |  |
| 1 | 81 | Data Slots > Number of Levels of Data Slot | `SlotNumLevels(` |  | string “Data Slot” | — |  |
| 2 | 82 | Keys > Information > Number of Sub-Keys in Key | `KeyNumSubKeys(` |  | string “Data Slot” | — |  |
| 3 | 83 | Keys > Information > Number of Values in Key | `KeyNumValues(` |  | string “Data Slot” | — |  |
| 4 | 84 | Keys > Information > Length of Longest Sub-Key Name | `KeyLongestSubKey(` |  | string “Data Slot” | — |  |
| 5 | 85 | Keys > Information > Length of Longest Value Name | `KeyLongestValue(` |  | string “Data Slot” | — |  |
| 6 | 86 | Keys > Enumeration > Enumerated Sub-Key | `KeyEnumName$(` |  | → string | — |  |
| 7 | 87 | Keys > Enumeration > Enumeration Index | `KeyEnumIndex(` |  |  | — |  |
| 8 | 88 | Values > Get Data Type | `ValDataType$(` |  | string “Data Slot”; string “Value Name” → string | — |  |
| 9 | 89 | Values > Get DWORD Value | `ValDWORD(` |  | string “Data Slot”; string “Value Name” | — |  |
| 10 | 90 | Values > Get String Value | `ValString$(` |  | string “Data Slot”; string “Value Name” → string | — |  |
| 11 | 91 | Values > Get Default Value | `ValDefString$(` |  | string “Data Slot” → string | — |  |
| 12 | 92 | Values > Enumeration > Enumerated Value | `ValEnumName$(` |  | → string | — |  |
| 13 | 93 | Values > Enumeration > Enumeration Index | `ValEnumIndex(` |  |  | — |  |
| 14 | 94 | Error String | `ErrorString$(` |  | → string | — |  |
| 15 | 95 | Data Slots > Total Number of Data Slots | `TotalSlots(` |  |  | — |  |
