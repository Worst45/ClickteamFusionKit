# Extension INI++15

- Fichier : `INI++15.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Current group > Group exists | `<objet>: Current group exists` |  |  | — |  |
| 1 | -82 | Current group > Group has Item | `<objet>: Current group has item <p0>` |  | expression chaîne « Item name » | — |  |
| 2 | -83 | Current group > Item has hashed value | `<objet>: <p0> in current group is equal to <p2> with default value <p1> (hashed)` |  | expression chaîne « Item name » ; expression chaîne « Default string (if item does not exist) » ; expression chaîne « String to compare to » | — |  |
| 3 | -84 | Group exists | `<objet>: Group <p0> exists` |  | expression chaîne « Group name » | — |  |
| 4 | -85 | Group has item | `<objet>: Group <p0> has item <p1>` |  | expression chaîne « Group name » ; expression chaîne « Item name » | — |  |
| 5 | -86 | Item has hashed value | `<objet>: <p1> in <p0> is equal to <p3> with default value <p2> (hashed)` |  | expression chaîne « Group name » ; expression chaîne « Item name » ; expression chaîne « Default value (if item does not exist) » ; expression chaîne « String to compare to » | — |  |
| 6 | -87 | Extra Functions > Is Wildcat Match? | `<objet>: Wildcat match <p1> to pattern <p0>` |  | expression chaîne « Pattern (. or * allowed) » ; expression chaîne « String » ; expression numérique « Case Sensitive? ( 0 = No , 1 = Yes ) » | — |  |
| 7 | -88 | Dialog box > On open | `<objet>: On Dialog Box Opened` |  |  | — |  |
| 8 | -89 | Dialog box > On close | `<objet>: On Dialog Box Closed` |  |  | — |  |
| 9 | -90 | Dialog box > On modified | `<objet>: On Dialog Box Modified` |  |  | — |  |
| 10 | -91 | On Data Modified | `<objet>: On Data Modified` |  |  | — |  |
| 11 | -92 | On Save | `<objet>: On Save` |  |  | — |  |
| 12 | -93 | On New Item | `<objet>: On New Item` |  |  | — |  |
| 13 | -94 | Search Results > On Results Found | `<objet>: On Search Results Found` |  |  | — |  |
| 14 | -95 | Search Results > On No Results Found | `<objet>: On No Search Results Found` |  |  | — |  |
| 15 | -96 | On Merge | `<objet>: On Merge` |  |  | — |  |
| 16 | -97 | Extra Functions > On uncompression OK | `<objet>: File was uncompressed` |  |  | — |  |
| 17 | -98 | Extra Functions > On uncompression fail | `<objet>: File failed to be uncompressed` |  |  | — |  |
| 18 | -99 | Undo > Has Undo | `Is undo available?` |  |  | — |  |
| 19 | -100 | Undo > Has Redo | `Is redo available?` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set Current Group | `Set current group to <p0>` |  | expression chaîne « Group name » ; expression numérique « Ensure new group? ( 0 = No, 1 = Yes. If unsure, choose 0 ) » | — |  |
| 1 | 81 | Current Group > Set Value | `Set item <p0> to value <p2> (Setting = <p1>)` |  | expression chaîne « Item name » ; expression numérique « Type (0 = Integer [Whole numbers] , 1 = Floating Point [Decimal Points]) » ; expression numérique « Value to set to » | — |  |
| 2 | 82 | Current Group > Set String | `Set item <p0> to string <p1>` |  | expression chaîne « Item name » ; expression chaîne « String to set to » | — |  |
| 3 | 83 | Current Group > Set String (MD5 Hashed) | `Set item <p0> to <p1> (Hashed)` |  | expression chaîne « Item name » ; expression chaîne « String to set to » | — |  |
| 4 | 84 | Current Group > Save Object | `Save <p0> (Save: Position = <p1>, Alt Values = <p2>)` |  | objet « Object to save » ; expression numérique « Save position? (0 = No, 1 = Yes) » ; expression numérique « Save alt values? (0 = No, 1 = Yes) » | — |  |
| 5 | 85 | Current Group > Load Object | `Load <p0>` |  | objet « Object to load » | — |  |
| 6 | 86 | Current Group > Save Position | `Save position <p1> to item <p0>` |  | expression chaîne « Item name » ; position « Position » | — |  |
| 7 | 87 | Current Group > Save global values | `Save global values` |  |  | — |  |
| 8 | 88 | Current Group > Load global values | `Load global values` |  |  | — |  |
| 9 | 89 | Current Group > Delete group | `Delete current group` |  |  | — |  |
| 10 | 90 | Current Group > Delete item | `Delete <p0> in current group` |  | expression chaîne « Item name » | — |  |
| 11 | 91 | Current Group > Rename group | `Rename current group to <p0> (Setting = <p1>)` |  | expression chaîne « New name » ; expression numérique « Overwrite Mode ( 0 = Overwrite , 1 = Merge , 2 = Never overwrite ) » | — |  |
| 12 | 92 | Current Group > Rename item | `Rename item <p0> to <p1> (Setting = <p2>)` |  | expression chaîne « Old name » ; expression chaîne « New name » ; expression numérique « Allow overwriting? ( 0 = No , 1 = Yes ) » | — |  |
| 13 | 93 | Current Group > Move Item to another Group | `Move <p0> to group <p1>` |  | expression chaîne « Item name » ; expression chaîne « New group name » ; expression numérique « Allow overwrites? (0 = No, 1 = Yes) » | — |  |
| 14 | 94 | Setting Items > Set Value | `Set item <p1> in group <p0> to value <p3> (Setting = <p2>)` |  | expression chaîne « Group name » ; expression chaîne « Item name » ; expression numérique « Type (0 = Integer [Whole numbers] , 1 = Floating Point [Decimal Points]) » ; expression numérique « Value » | — |  |
| 15 | 95 | Setting Items > Set String | `Set item <p1> in group <p0> to <p2>` |  | expression chaîne « Group » ; expression chaîne « Item » ; expression chaîne « String to set to » | — |  |
| 16 | 96 | Setting Items > Set String (MD5 Hashed) | `Set item <p1> in group <p0> to <p2> (Hashed)` |  | expression chaîne « Group » ; expression chaîne « Item » ; expression chaîne « Value » | — |  |
| 17 | 97 | Setting Items > Objects  Positions > Save Object | `Save object <p0> into group <p1> (Pos = <p2>, Alt Values = <p3>)` |  | objet « Object » ; expression chaîne « Group » ; expression numérique « Save position? (0 = No, 1 = Yes) » ; expression numérique « Save alt values? (0 = No, 1 = Yes) » | — |  |
| 18 | 98 | Setting Items > Objects  Positions > Load Object | `Load object <p0> from group <p1>` |  | objet « Object » ; expression chaîne « Group » | — |  |
| 19 | 99 | Setting Items > Objects  Positions > Save Position | `Save position <p2> into group <p0>, item <p1>` |  | expression chaîne « Group name » ; expression chaîne « Item name » ; position « Position » | — |  |
| 20 | 100 | Setting Items > Global Values > Save Global Values | `Save global values to group <p0>` |  | expression chaîne « Group » | — |  |
| 21 | 101 | Setting Items > Global Values > Load Global Values | `Load global values from group <p0>` |  | expression chaîne « Group » | — |  |
| 22 | 102 | Moving and Copying > Rename Group | `Rename group with name <p0> to <p1>` |  | expression chaîne « Old Group Name » ; expression chaîne « New Group Name » ; expression numérique « Overwrite Mode ( 0 = Overwrite , 1 = Merge , 2 = Never overwrite ) » | — |  |
| 23 | 103 | Moving and Copying > Rename item | `Move <p0> -> <p1> to <p0> -> <p1> (Overwrite = <p3>)` |  | expression chaîne « Group Name » ; expression chaîne « Old item name » ; expression chaîne « New item name » ; expression numérique « Allow overwrite? (0 = No, 1 = Yes) » | — |  |
| 24 | 104 | Moving and Copying > Move Item | `Move <p0> -> <p1> to <p2> -> <p3> (Overwriting=<p4>)` |  | expression chaîne « Old Group Name » ; expression chaîne « Old item name » ; expression chaîne « New group name » ; expression chaîne « New item name » ; expression numérique « Allow overwrite? (0 = No, 1 = Yes) » | — |  |
| 25 | 105 | Moving and Copying > Move Item between groups | `Move <p1> from group <p0> to <p2>` |  | expression chaîne « Old Group Name » ; expression chaîne « Item name » ; expression chaîne « New group name » ; expression numérique « Allow overwrite? (0 = No, 1 = Yes) » | — |  |
| 26 | 106 | Moving and Copying > Copy Group | `Copy group from <p0> to <p1> (Mode = <p2>)` |  | expression chaîne « Source group name » ; expression chaîne « Destination group name » ; expression numérique « Overwrite Mode ( 0 = Replace old group , 1 = Merge with old group ) » | — |  |
| 27 | 107 | Moving and Copying > Copy Item | `Copy item <p0> -> <p1> to <p2> -> <p3>` |  | expression chaîne « Source group » ; expression chaîne « Source item » ; expression chaîne « Destination group » ; expression chaîne « Destination item » | — |  |
| 28 | 108 | Deleting > Delete group | `Delete group <p0>` |  | expression chaîne « Group to delete » | — |  |
| 29 | 109 | Deleting > Delete item | `Delete item <p1> in group <p0>` |  | expression chaîne « Group » ; expression chaîne « Item » | — |  |
| 30 | 110 | Deleting > Delete item in all groups | `Delete item <p0> from all groups` |  | expression chaîne « Item name » | — |  |
| 31 | 111 | Deleting > Delete by pattern | `Delete all items with pattern ( <p0> ,<p1> , <p2> )` |  | expression chaîne « Pattern for groups » ; expression chaîne « Pattern for items » ; expression chaîne « Pattern for values » ; expression numérique « Case Sensitive ( 0 = No , 1 = Yes ) » | — |  |
| 32 | 112 | Deleting > Clear all | `Clear all` |  |  | — |  |
| 33 | 113 | Searching > Perform Search | `Find items matching ( <p0>, <p1> , <p2> ). <p3>` |  | expression chaîne « Group condition (Use '.', '*' or start with a '!' for 'not') » ; expression chaîne « Item condition (Use '.', '*' or start with a '!' for 'not') » ; expression chaîne « Value condition (Use '.', '*' or start with a '!' for 'not') » (paramètres non fiables) | — |  |
| 34 | 114 | Searching > Advanced Searching > Find 'Repeats' of Item | `Find repeats of <p0>-><p1>` |  | expression chaîne « Group » ; expression chaîne « Item » | — |  |
| 35 | 115 | Searching > Clear Results | `Clear Results` |  |  | — |  |
| 36 | 116 | Searching > Search and put result in Ini file | `Search for (<p1>,<p2>,<p3>) and put result into file <p0>` |  | nom de fichier « #Title#Destination Path#Filter#Ini Files\|*.ini\|All files\|*.*\| » ; expression chaîne « Group condition » ; expression chaîne « Item condition » ; expression chaîne « Value condition » ; expression numérique « Case sensitive? (0 = No, 1 = Yes) » | — |  |
| 37 | 117 | Searching > Search and put result in Ini++ object | `Search for (<p1>,<p2>,<p3>) and put result into object <p0>` |  | (paramètres non fiables) | — |  |
| 38 | 118 | Merging > Merge (with file) | `Merge from file <p0>` |  | nom de fichier « #Title#File to merge from#Filter#Ini Files\|*.ini\|All files\|*.*\| » ; expression numérique « Allow overwrites ( 0 = No , 1 = Yes ) » | — |  |
| 39 | 119 | Merging > Merge Group (with file) | `Merge group <p1> from file <p0>` |  | nom de fichier « #Title#File to merge from#Filter#Ini Files\|*.ini\|All files\|*.*\| » ; expression chaîne « Source Group name » ; expression chaîne « Destination Group name » ; expression numérique « Allow overwrites ( 0 = No , 1 = Yes ) » | — |  |
| 40 | 120 | Merging > Merge (with other Ini++ object) | `Merge from object <p0>` |  | (paramètres non fiables) | — |  |
| 41 | 121 | Merging > Merge Group (with other Ini++ object) | `Merge group <p1> from object <p0>` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Loading and Saving > Save file | `Save Ini` |  |  | — |  |
| 45 | 125 | Loading and Saving > Export > Save as | `Save Ini As <p0>` |  | nom de fichier « Path » | — |  |
| 46 | 126 | Loading and Saving > Export > Backup to | `Backup Ini To <p0> (Compressed = <p1>, Key = <p2>)` |  | nom de fichier « #Title#File to backup to#Filter#Ini Files\|*.ini\|All files\|*.*\| » ; expression numérique « Compressed? ( 0 = No , 1 = Yes ) » ; expression chaîne « Encrypted? (Type key or use blank string for none) » | — |  |
| 47 | 127 | Loading and Saving > Close | `Close Ini` |  |  | — |  |
| 48 | 128 | Loading and Saving > Load From String | `Load <p0> into Ini` |  | expression chaîne « Text (in Ini format) to load » ; expression numérique « Mode ( 0 = Replace , 1 = Merge ) » | — |  |
| 49 | 129 | Loading and Saving > Settings > Set auto load/save | `Set autosave to <p0>` |  | expression numérique « Auto Save (0 = Off , 1 = On) » ; expression numérique « Auto Load ( 0 = Off , 1 = On ) » | — |  |
| 50 | 130 | Loading and Saving > Settings > Set compression | `Set compression to <p0>` |  | expression numérique « 0 = Off , 1 = On » | — |  |
| 51 | 131 | Loading and Saving > Settings > Set encryption | `Set Encryption to <p0>` |  | expression chaîne « Type the key, or an empty string to not use encryption » | — |  |
| 52 | 132 | Loading and Saving > Settings > Set read only | `Set Read Only to <p0>` |  | expression numérique « 0 = No , 1 = Yes » | — |  |
| 53 | 133 | Advanced Features > Advanced Settings > Set case sensitivity | `Set Case Sensitive to <p0>` |  | expression numérique « 0 = Not case sensitive , 1 = Case sensitive » | — |  |
| 54 | 134 | Advanced Features > Advanced Settings > Escape character settings | `Use escape characters ( <p0> , <p1> , <p2> )` |  | expression numérique « Use in groups ( 0 = No , 1 = Yes ) » ; expression numérique « Use in item names ( 0 = No , 1 = Yes ) » ; expression numérique « Use in item values ( 0 = No , 1 = Yes ) » | — |  |
| 55 | 135 | Advanced Features > Advanced Settings > Enable/Disable 'always quote strings' | `Quote strings = <p0>` |  | expression numérique « 0 = No , 1 = Yes » | — |  |
| 56 | 136 | Advanced Features > Advanced Settings > Set repeat modes | `Set repeat modes to ( <p0> , <p1> , <p2> )` |  | expression numérique « For groups ( 0 = First , 1 = Last , 2 = Rename , 3 = Merge ) » ; expression numérique « For items ( 0 = First , 1 = Last , 2 = Rename  ) » ; expression numérique « Save repeated items as original? (0 = No, 1 = Yes) » | — |  |
| 57 | 137 | Advanced Features > Advanced Settings > Set new line string | `Set new line string to <p0>` |  | expression chaîne « Type the new line string or type an empty string to use the Standard mode » | — |  |
| 58 | 138 | Advanced Features > Advanced Settings > Set default directory | `Set default directory to <p0>` |  | expression chaîne « Default directory » | — |  |
| 59 | 139 | Advanced Features > Extra Functions > Compress file | `Compress <p0> to <p1>` |  | nom de fichier « #Title#Source#Filter#All files\|*.*\| » ; nom de fichier « #Title#Destination#Filter#All files\|*.*\| » | — |  |
| 60 | 140 | Advanced Features > Extra Functions > Decompress file | `Decompress <p0> to <p1>` |  | nom de fichier « #Title#Source#Filter#All files\|*.*\| » ; nom de fichier « #Title#Destination#Filter#All files\|*.*\| » | — |  |
| 61 | 141 | Advanced Features > Dialog Box > Open Dialog | `Open dialog with title <p0> (Settings: <p1>)` |  | expression chaîne « Title for dialog box » (paramètres non fiables) | — |  |
| 62 | 142 | Advanced Features > Add Repeated Item | `Add repeated (<p0>,<p1>,<p2>) with mode <p3>` |  | expression chaîne « Group Name » ; expression chaîne « Item Name » ; expression chaîne « String to set to (Use Str$(...) if you wish to set to a value) » ; expression numérique « Mode ( 0 = New item ; 1 = New group ) » | — |  |
| 63 | 143 | Advanced Features > Dialog Box > Close dialog | `Close dialog` |  |  | — |  |
| 64 | 144 | Advanced Features > Dialog Box > Refresh Dialog | `Refresh dialog (Mode = <p0>)` |  | expression numérique « Mode (0 for full refresh, 1 for 'quick' item name refresh) » | — |  |
| 65 | 145 | Loading and Saving > Export > Import/Export CSV | `CSV Import/Export (<p0>) to file <p1>, seperator <p2>` |  | expression numérique « Import = 0, Export = 1 » ; nom de fichier « #Title#Path to save to#Filter#CSV Files\|*.csv\|All files\|*.*\| » ; expression chaîne « Group to save. Leave blank to save/load all. » ; expression chaîne « Seperator symbol » | — |  |
| 66 | 146 | Loading and Saving > Export > Import/Export CSV Array | `CSV Array Import/Export (<p1>) to file <p1>, seperator <p2>` |  | expression numérique « 0 = Import, 1 = Export » ; nom de fichier « #Title#Path to load from#Filter#CSV Files\|*.csv\|All files\|*.*\| » ; expression chaîne « Seperator symbol » | — |  |
| 67 | 147 | Advanced Features > Chart Object > Put data into chart object | `Put data into chart object <p0> from group <p1>` |  | (paramètres non fiables) | — |  |
| 68 | 148 | Searching > Advanced Searching > Find 'Subgroups' | `Find subgroups of '<p0>' (Levels = <p1>)` |  | expression chaîne « Group to find subgroups of » ; expression numérique « Number of levels (0 for unlimited. n for at most n levels, -n means exactly n levels) » | — |  |
| 69 | 149 | Advanced Features > Advanced Settings > Group settings (Subgroups, Empty groups) | `Subgroups enabled = <p0>, Empty Groups allowed = <p1>.` |  | expression numérique « Enable subgroup loading and saving? (0 = No, 1 = Yes) » ; expression numérique « Allow empty groups? (0 = No, 1 = Yes) » | — |  |
| 70 | 150 | Loading and Saving > Change global data slot | `Name of data slot` |  | expression chaîne « Changed global data slot to %0 » | — |  |
| 71 | 151 | Reorder a group | `<p0> group <p1>` |  | (paramètres non fiables) | — |  |
| 72 | 152 | Advanced Features > Set part in item | `Set part <p2> of the item <p1> from group <p0> to <p3>` |  | expression chaîne « Group to apply to » ; expression chaîne « Item » ; expression numérique « Part to set » ; expression chaîne « String to set to » | — |  |
| 73 | 153 | Advanced Features > Array > Get data from array | `Load data from array '<p0>' into group '<p1>'` |  | (paramètres non fiables) | — |  |
| 74 | 154 | Advanced Features > Array > Put data into array (numerical only) | `Put data into array '<p0>' from group '<p1>'` |  | (paramètres non fiables) | — |  |
| 75 | 155 | Advanced Features > Chart Object > Get data from chart object | `Get data from chart object <p0> into group <p1>` |  | (paramètres non fiables) | — |  |
| 76 | 156 | Advanced Features > Chart Object > Get settings from chart object | `Get properties from chart object <p0> into <p1>` |  | (paramètres non fiables) | — |  |
| 77 | 157 | Advanced Features > Chart Object > Put settings into chart object | `Put properties to chart object <p0> from group <p1>` |  | (paramètres non fiables) | — |  |
| 78 | 158 | Loading and Saving > New/Load/Change file | `<p0> : <p1>` |  | nom de fichier « #Title#File to load#Filter#Ini Files\|*.ini\|All files\|*.*\| » (paramètres non fiables) | — |  |
| 79 | 159 | Advanced Features > Undo > Perform Undo | `Perform undo` |  |  | — |  |
| 80 | 160 | Advanced Features > Undo > Perform Redo | `Perform redo` |  |  | — |  |
| 81 | 161 | Advanced Features > Undo > Clear stack(s) | `Clear undo/redo stack. Mode = <p0>` |  | expression numérique « Which? (1 = Undo Stack, 2 = Redo Stack, 3 = Both) » | — |  |
| 82 | 162 | Advanced Features > Undo > Manual mode (Advanced) > Force add new undo block | `Add a new undo stack block` |  |  | — |  |
| 83 | 163 | Advanced Features > Undo > Manual mode (Advanced) > Set mode | `Set automatic mode to <p0>` |  | expression numérique « 1 = Automatic, 2 = Manual » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current group > Get Item Value ( item , default value) | `GetItemValueG(` |  | chaîne ; nombre | — |  |
| 1 | 81 | Current group > Get Item String ( item . default string) | `GetItemStringG$(` |  | chaîne ; chaîne → chaîne | — |  |
| 2 | 82 | Current group > Get position X ( item ) | `PosXG(` |  | chaîne | — |  |
| 3 | 83 | Current group > Get position Y ( item ) | `PosYG(` |  | chaîne | — |  |
| 4 | 84 | Current group > Get N-th Item name ( n ) | `NthItemG$(` |  | nombre → chaîne | — |  |
| 5 | 85 | Current group > Get N-th Item value ( n ) | `NthItemValueG(` |  | nombre | — |  |
| 6 | 86 | Current group > Get N-th Item string ( n ) | `NthItemStringG$(` |  | nombre → chaîne | — |  |
| 7 | 87 | Current group > Get Item Count | `ItemCountG(` |  |  | — |  |
| 8 | 88 | Get Item Value (group , item , default value) | `GetItemValue(` |  | chaîne ; chaîne ; nombre | — |  |
| 9 | 89 | Get Item String (group , item , default string) | `GetItemString$(` |  | chaîne ; chaîne ; chaîne → chaîne | — |  |
| 10 | 90 | Get X Position (group , item) | `PosX(` |  | chaîne ; chaîne | — |  |
| 11 | 91 | Get Y Position (group , item) | `PosY(` |  | chaîne ; chaîne | — |  |
| 12 | 92 | List Groups and Items > Get N-th Group name ( n ) | `NthGroup$(` |  | nombre → chaîne | — |  |
| 13 | 93 | List Groups and Items > Get N-th Item name ( group , n ) | `NthItemName$(` |  | chaîne ; nombre → chaîne | — |  |
| 14 | 94 | List Groups and Items > Get N-th Item string ( group , n ) | `NthItemString$(` |  | chaîne ; nombre → chaîne | — |  |
| 15 | 95 | List Groups and Items > Get N-th Item value ( group , n ) | `NthItemValue(` |  | chaîne ; nombre | — |  |
| 16 | 96 | Counting and Calculations > Get Group Count | `GroupCount(` |  |  | — |  |
| 17 | 97 | Counting and Calculations > Get Item Count (Group) | `ItemCount(` |  | chaîne | — |  |
| 18 | 98 | Counting and Calculations > Get Total Item Count | `TotalItems(` |  |  | — |  |
| 19 | 99 | Search Results > Number of search results | `SearchResultsCount(` |  |  | — |  |
| 20 | 100 | Search Results > Get N-th Search Result Group ( n ) | `SearchGroup$(` |  | nombre → chaîne | — |  |
| 21 | 101 | Search Results > Get N-th Search Result Item Name ( n ) | `SearchItemName$(` |  | nombre → chaîne | — |  |
| 22 | 102 | Search Results > Get N-th Search Result Item Value ( n ) | `SearchItemValue(` |  | nombre | — |  |
| 23 | 103 | Search Results > Get N-th Search Result Item String ( n ) | `SearchItemString$(` |  | nombre → chaîne | — |  |
| 24 | 104 | Search Results > Get N-th Search Result Path ( n , separator ) | `SearchItemPath$(` |  | nombre ; chaîne → chaîne | — |  |
| 25 | 105 | Get INI as String | `WriteStream$(` |  | → chaîne | — |  |
| 26 | 106 | Extra Functions > Hash String ( string ) | `Hash$(` |  | chaîne → chaîne | — |  |
| 28 | 108 | Extra Functions > Escape String ( string ) | `Escape$(` |  | chaîne → chaîne | — |  |
| 29 | 109 | Extra Functions > Unescape String ( string ) | `Unescape$(` |  | chaîne → chaîne | — |  |
| 30 | 110 | Counting and Calculations > Perform Calculations (Click for info) | `Calc(` |  | chaîne ; chaîne | — |  |
| 31 | 111 | Counting and Calculations > Find Max or Min Group (Click for info) | `CalcStr$(` |  | chaîne ; chaîne → chaîne | — |  |
| 32 | 112 | List Groups and Items > Get N-th Sorted Item name ( group , n ) | `NthSortedName$(` |  | chaîne ; nombre → chaîne | — |  |
| 33 | 113 | List Groups and Items > Get N-th Sorted Item Value ( group , n ) | `NthSortedItem(` |  | chaîne ; nombre | — |  |
| 34 | 114 | Get INI as CSV String | `GetCSV$(` |  | chaîne ; chaîne → chaîne | — |  |
| 35 | 115 | List Groups and Items > Get N-th Item used in any group ( n ) | `NthOverallItem$(` |  | nombre → chaîne | — |  |
| 36 | 116 | Counting and Calculations > Get number of unique item names | `UniqueItemCount(` |  |  | — |  |
| 37 | 117 | Get part in item (group, item, index, default) | `GetItemPart$(` |  | chaîne ; chaîne ; nombre ; chaîne → chaîne | — |  |
| 38 | 118 | Current group > Get current group name | `CurrentGroupName$(` |  | → chaîne | — |  |
| 39 | 119 | Current group > Get current group as string | `CurrentGroupString$(` |  | → chaîne | — |  |
| 40 | 120 | Get current file name | `Filename$(` |  | → chaîne | — |  |
