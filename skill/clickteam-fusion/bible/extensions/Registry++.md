# Extension Registry++

- Fichier : `Registry++.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Sub-Key Exists | `<objet>: Sub-Key <p1> Exists in Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Sub-Key » | — |  |
| 1 | -82 | Value Exists | `<objet>: Value <p1> Exists in Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Value » | — |  |
| 2 | -83 | Any Key Exists > HKEY_CLASSES_ROOT | `<objet>: Key HKEY_CLASSES_ROOT\<p0> Exists` |  | expression chaîne « Full Path to Key (Using Backslashes) » | — |  |
| 3 | -84 | Any Key Exists > HKEY_CURRENT_USER | `<objet>: Key HKEY_CURRENT_USER\<p0> Exists` |  | expression chaîne « Full Path to Key (Using Backslashes) » | — |  |
| 4 | -85 | Any Key Exists > HKEY_LOCAL_MACHINE | `<objet>: Key HKEY_LOCAL_MACHINE\<p0> Exists` |  | expression chaîne « Full Path to Key (Using Backslashes) » | — |  |
| 5 | -86 | Any Key Exists > HKEY_CURRENT_CONFIG | `<objet>: Key HKEY_CURRENT_CONFIG\<p0> Exists` |  | expression chaîne « Full Path to Key (Using Backslashes) » | — |  |
| 6 | -87 | Any Key Exists > HKEY_USERS | `<objet>: Key HKEY_USERS\<p0> Exists` |  | expression chaîne « Path to Key (Using Backslashes) » | — |  |
| 7 | -88 | Any Value Exists > HKEY_CLASSES_ROOT | `<objet>: Value <p1> Exists in Key HKEY_CLASSES_ROOT\<p0>` |  | expression chaîne « Path to Key (Using Backslashes) » ; expression chaîne « Value Name » | — |  |
| 8 | -89 | Any Value Exists > HKEY_CURRENT_USER | `<objet>: Value <p1> Exists in Key HKEY_CURRENT_USER\<p0>` |  | expression chaîne « Path to Key (Using Backslashes) » ; expression chaîne « Value Name » | — |  |
| 9 | -90 | Any Value Exists > HKEY_LOCAL_MACHINE | `<objet>: Value <p1> Exists in Key HKEY_LOCAL_MACHINE\<p0>` |  | expression chaîne « Path to Key (Using Backslashes) » ; expression chaîne « Value Name » | — |  |
| 10 | -91 | Any Value Exists > HKEY_CURRENT_CONFIG | `<objet>: Value <p1> Exists in Key HKEY_CURRENT_CONFIG\<p0>` |  | expression chaîne « Path to Key (Using Backslashes) » ; expression chaîne « Value Name » | — |  |
| 11 | -92 | Any Value Exists > HKEY_USERS | `<objet>: Value <p1> Exists in Key HKEY_USERS\<p0>` |  | expression chaîne « Path to Key (Using Backslashes) » ; expression chaîne « Value Name » | — |  |
| 12 | -93 | On Sub-Key Create | `<objet>: On Sub-Key <p1> Created in Slot <p0>` |  | expression chaîne « Data Slot (Blank = Any Slot) » ; expression chaîne « Sub-Key Name (Blank = Any Key) » | — |  |
| 13 | -94 | On Sub-Key Open | `<objet>: On Sub-Key <p1> Opened in Slot <p0>` |  | expression chaîne « Data Slot (Blank = Any Slot) » ; expression chaîne « Sub-Key Name (Blank = Any Key) » | — |  |
| 14 | -95 | Enumeration > On Sub-Key | `<objet>: On Sub-Key Enumeration` |  |  | — |  |
| 15 | -96 | Enumeration > On Value | `<objet>: On Value Enumeration` |  |  | — |  |
| 16 | -97 | On Error | `<objet>: On Error` |  |  | — |  |
| 17 | -98 | Data Slot Exists | `<objet>: Data Slot <p0> Exists` |  | expression chaîne « Data Slot » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Keys > Set Root Key > HKEY_CLASSES_ROOT | `Set Root Key of Slot <p0> to HKEY_CLASSES_ROOT` |  | expression chaîne « Data Slot » | — |  |
| 1 | 81 | Keys > Set Root Key > HKEY_CURRENT_USER | `Set Root Key of Slot <p0> to HKEY_CURRENT_USER` |  | expression chaîne « Data Slot » | — |  |
| 2 | 82 | Keys > Set Root Key > HKEY_LOCAL_MACHINE | `Set Root Key of Slot <p0> to HKEY_LOCAL_MACHINE` |  | expression chaîne « Data Slot » | — |  |
| 3 | 83 | Keys > Set Root Key > HKEY_CURRENT_CONFIG | `Set Root Key of Slot <p0> to HKEY_CURRENT_CONFIG` |  | expression chaîne « Data Slot » | — |  |
| 4 | 84 | Keys > Set Root Key > HKEY_USERS | `Set Root Key of Slot <p0> to HKEY_USERS` |  | expression chaîne « Data Slot » | — |  |
| 5 | 85 | Keys > Navigate to Key > HKEY_CLASSES_ROOT | `Navigate to HKEY_CLASSES_ROOT\<p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 6 | 86 | Keys > Navigate to Key > HKEY_CURRENT_USER | `Navigate to HKEY_CURRENT_USER\<p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 7 | 87 | Keys > Navigate to Key > HKEY_LOCAL_MACHINE | `Navigate to HKEY_LOCAL_MACHINE\<p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 8 | 88 | Keys > Navigate to Key > HKEY_CURRENT_CONFIG | `Navigate to HKEY_CURRENT_CONFIG\<p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 9 | 89 | Keys > Navigate to Key > HKEY_USERS | `Navigate to HKEY_USERS\<p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 10 | 90 | Keys > Create Sub-Key | `Create Sub-Key <p1> in Data Slot <p0> (Open Key = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Key » ; expression numérique « Open Key? (0=No, 1=Yes) » | — |  |
| 11 | 91 | Keys > Open Sub-Key | `Open Sub-Key <p1> in Data Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Key » | — |  |
| 12 | 92 | Keys > Delete Sub-Key | `Delete Sub-Key <p1> in Data Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Sub-Key » ; expression numérique « Delete Key if Not Empty? (0=No, 1=Yes) » | — |  |
| 13 | 93 | Values > Set DWORD Value | `Set DWORD Value <p1> to <p2> in Data Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of DWORD Value » ; expression numérique « Value to Set » | — |  |
| 14 | 94 | Values > Set String Value | `Set String Value <p1> to <p2> in Data Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of String Value » ; expression chaîne « Value to Set » | — |  |
| 15 | 95 | Values > Set Default Value | `Set Default Value of Slot <p0> to <p1>` |  | expression chaîne « Data Slot » ; expression chaîne « Value to Set » | — |  |
| 16 | 96 | Values > Delete Value | `Delete Value <p1> in Data Slot <p0>` |  | expression chaîne « Data Slot » ; expression chaîne « Name of Value to Delete » | — |  |
| 17 | 97 | Enumeration > Enumerate Sub-Keys | `Enumerate Sub-Keys in Slot <p0>` |  | expression chaîne « Data Slot » | — |  |
| 18 | 98 | Enumeration > Enumerate Values | `Enumerate Values in Slot <p0>` |  | expression chaîne « Data Slot » | — |  |
| 19 | 99 | Files > Save Key | `Save Data Slot <p0> to <p1>` |  | expression chaîne « Data Slot » ; nom de fichier « File » | — |  |
| 20 | 100 | Keys > Set Root Key > Custom... | `Set Root Key of Slot <p0> to <p1>` |  | expression chaîne « Data Slot » ; expression chaîne « Root Key (as String) » | — |  |
| 21 | 101 | Keys > Navigate to Key > Custom... | `Navigate to <p1> in Data Slot <p0> (Create = <p2>)` |  | expression chaîne « Data Slot » ; expression chaîne « Full Path to Key (Using Backslashes) » ; expression numérique « Create Non-Existant Keys? (0=No, 1=Yes) » | — |  |
| 22 | 102 | Data Slots > Create Local Slot | `Create Data Slot <p0>` |  | expression chaîne « Data Slot » | — |  |
| 23 | 103 | Data Slots > Create Remote Slot | `Create Remote Data Slot <p0> on Computer <p1>` |  | expression chaîne « Data Slot » ; expression chaîne « Computer Name » | — |  |
| 24 | 104 | Data Slots > Copy Slot | `Copy Data Slot <p0> to Slot <p1>` |  | expression chaîne « Source Slot » ; expression chaîne « Destination Slot » | — |  |
| 25 | 105 | Data Slots > Duplicate Slot | `Create Data Slot <p1> from Slot <p0>` |  | expression chaîne « Source Slot » ; expression chaîne « New Slot to Create » | — |  |
| 26 | 106 | Data Slots > Delete Slot | `Delete Data Slot <p0>` |  | expression chaîne « Data Slot » | — |  |
| 27 | 107 | Data Slots > Delete All Slots | `Delete All Data Slots` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Data Slots > Registry Path of Data Slot | `SlotPath$(` |  | chaîne « Data Slot » → chaîne | — |  |
| 1 | 81 | Data Slots > Number of Levels of Data Slot | `SlotNumLevels(` |  | chaîne « Data Slot » | — |  |
| 2 | 82 | Keys > Information > Number of Sub-Keys in Key | `KeyNumSubKeys(` |  | chaîne « Data Slot » | — |  |
| 3 | 83 | Keys > Information > Number of Values in Key | `KeyNumValues(` |  | chaîne « Data Slot » | — |  |
| 4 | 84 | Keys > Information > Length of Longest Sub-Key Name | `KeyLongestSubKey(` |  | chaîne « Data Slot » | — |  |
| 5 | 85 | Keys > Information > Length of Longest Value Name | `KeyLongestValue(` |  | chaîne « Data Slot » | — |  |
| 6 | 86 | Keys > Enumeration > Enumerated Sub-Key | `KeyEnumName$(` |  | → chaîne | — |  |
| 7 | 87 | Keys > Enumeration > Enumeration Index | `KeyEnumIndex(` |  |  | — |  |
| 8 | 88 | Values > Get Data Type | `ValDataType$(` |  | chaîne « Data Slot » ; chaîne « Value Name » → chaîne | — |  |
| 9 | 89 | Values > Get DWORD Value | `ValDWORD(` |  | chaîne « Data Slot » ; chaîne « Value Name » | — |  |
| 10 | 90 | Values > Get String Value | `ValString$(` |  | chaîne « Data Slot » ; chaîne « Value Name » → chaîne | — |  |
| 11 | 91 | Values > Get Default Value | `ValDefString$(` |  | chaîne « Data Slot » → chaîne | — |  |
| 12 | 92 | Values > Enumeration > Enumerated Value | `ValEnumName$(` |  | → chaîne | — |  |
| 13 | 93 | Values > Enumeration > Enumeration Index | `ValEnumIndex(` |  |  | — |  |
| 14 | 94 | Error String | `ErrorString$(` |  | → chaîne | — |  |
| 15 | 95 | Data Slots > Total Number of Data Slots | `TotalSlots(` |  |  | — |  |
