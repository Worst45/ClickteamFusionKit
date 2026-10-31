# Extension AdvMenu

- Fichier : `AdvMenu.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Error Handling > On Error | `<objet>: On Error <p0>` |  | expression numérique « Error Code (Use -1 for Any Error) » | — |  |
| 1 | -82 | Popup Menus > On Popup Item Selected | `<objet>: On Item <p0> Selected from Menu <p1>` |  | expression numérique « Item Identifier (Use -1 for Any ID) » ; expression chaîne « Menu Name (Leave Blank for Any Menu) » | — |  |
| 3 | -84 | Stored Menus > Menu Exists | `<objet>: Menu <p0> is a Stored Menu` |  | expression chaîne « Menu Name » | — |  |
| 4 | -85 | Stored Menus > Submenu Exists | `<objet>: Menu <p0> has Submenu <p1>` |  | expression chaîne « Menu Name » ; expression chaîne « Submenu to Test For » | — |  |
| 5 | -86 | Stored Menus > Menu is Popup | `<objet>: Menu <p0> is a Popup Menu` |  | expression chaîne « Menu Name » | — |  |
| 6 | -87 | Stored Menus > Menu Auto-Dismisses | `<objet>: Menu <p0> Auto-Dismisses` |  | expression chaîne « Menu Name » | — |  |
| 7 | -88 | Stored Menus > Menu is Modeless | `<objet>: Menu <p0> is Modeless` |  | expression chaîne « Menu Name » | — |  |
| 8 | -89 | Menu Items > Item is Enabled | `<objet>: Item <p0> is Enabled in Menu <p2>` |  | expression numérique « Item to Test (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 9 | -90 | Menu Items > Item is Checked | `<objet>: Item <p0> is Checked in Menu <p2>` |  | expression numérique « Item to Test (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 10 | -91 | Menu Items > Item has Icon > Item Icon | `<objet>: Item <p0> has an Item Icon in Menu <p2>` |  | expression numérique « Item to Test (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 11 | -92 | Menu Items > Item has Icon > Checked Icon | `<objet>: Item <p0> has a Checked Icon in Menu <p2>` |  | expression numérique « Item to Test (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 12 | -93 | Menu Items > Item has Icon > Unchecked Icon | `<objet>: Item <p0> has an Unchecked Icon in Menu <p2>` |  | expression numérique « Item to Test (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 13 | -94 | Popup Menus > On Item Right-Clicked | `<objet>: On Item <p0> Right-Clicked in Menu <p1>` |  | expression numérique « Item Identifier (Use -1 for Any ID) » ; expression chaîne « Menu Name (Leave Blank for Any Menu) » | — |  |
| 14 | -95 | Popup Menus > Popup is Open | `<objet>: Popup Menu <p0> is Open` |  | expression chaîne « Menu Name (Leave Blank for Any Menu) » | — |  |
| 15 | -96 | Application Menus > On Menu Bar Item Selected | `<objet>: On Item <p0> Selected From Menu Bar` |  | expression numérique « Item Identifier (Use -1 for Any ID) » | — |  |
| 16 | -97 | Application Menus > On Window Menu Item Selected | `<objet>: On Item <p0> Selected From Window Menu` |  | expression numérique « Item Identifier (Use -1 for Any ID) » | — |  |
| 17 | -98 | Miscellaneous > On Item Rollover | `<objet>: On Item <p0> Rolled Over in Menu <p1>` |  | expression numérique « Item Identifier (Use -1 for Any ID) » ; expression chaîne « Menu Name (Leave Blank for Any Menu) » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Create/Delete Menus > Create Popup Menu | `Create Popup Menu <p0>` |  | expression chaîne « Name of New Menu » | — |  |
| 1 | 81 | Create/Delete Menus > Create Menu Bar | `Create Menu Bar <p0>` |  | expression chaîne « Name of New Menu » | — |  |
| 2 | 82 | Application Menus > Load Menu Bar | `Create Menu <p0> From the Application's Menu Bar` |  | expression chaîne « Name of New Menu » | — |  |
| 3 | 83 | Application Menus > Load Window Menu | `Create Menu <p0> From the Application's Window Menu` |  | expression chaîne « Name of New Menu » | — |  |
| 4 | 84 | Create/Delete Menus > Delete Menu | `Delete Menu <p0> (Delete in Memory = <p1>)` |  | expression chaîne « Name of Menu to Delete » ; expression numérique « Delete in Memory? (Advanced, Default=0) » | — |  |
| 5 | 85 | Create/Delete Menus > Delete All Menus | `Delete all Stored Menus (Delete in Memory = <p0>)` |  | expression numérique « Delete in Memory? (Advanced, Default=0) » | — |  |
| 6 | 86 | Create/Delete Items > Add Item | `Add New Item with ID <p0> and Text <p1> to <p2> (Submenu <p3>), at <p4>` |  | expression numérique « Identifier of New Item (Must be 1 or Greater) » ; expression chaîne « Text of New Item » ; expression chaîne « Menu to Add Item To » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Position of New Item (To Append, Put -1 Here and 1 for the Next Param) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Keyboard Accelerator (Leave Blank for None) » | — |  |
| 7 | 87 | Popup Menus > Display Popup Menu | `Display Menu <p0> at (<p1>,<p2>)` |  | expression chaîne « Menu to Display » ; expression numérique « X Position on Screen (Use -1 for Mouse Position) » ; expression numérique « Y Position on Screen (Use -1 for Mouse Position) » ; expression numérique « Horizontal Alignment (0=Left, 1=Center, 2=Right) » ; expression numérique « Vertical Alignment (0=Top, 1=Middle, 2=Bottom) » ; expression numérique « Compensation Direction (0=Horz. 1=Vert.) » ; expression numérique « Horizontal Animation (0=None, 1=LTR, 2=RTL) » ; expression numérique « Vertical Animation (0=None, 1=TTB, 2=BTT) » ; expression numérique « Allow Right-Click Select? (0=No, 1=Yes) » ; expression numérique « Show If Other Menus are Open? (0=No, 1=Yes) » ; expression numérique « Right-to-Left Layout? (0=No, 1=Yes) » ; expression numérique « Make Compatible with the System Tray? (0=No, 1=Yes) » | — |  |
| 8 | 88 | Create/Delete Items > Add Submenu | `Add New Submenu <p1> with ID <p0> (Text <p2>) to <p3> (Submenu <p4>)` |  | expression numérique « Identifier of New Submenu (Must be 1 or Greater) » ; expression chaîne « Name of New Submenu » ; expression chaîne « Text of New Submenu » ; expression chaîne « Menu to Add Submenu To » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Position of New Submenu (To Append, Put -1 Here and 1 for the Next Param) » ; expression numérique « Position Method (0=Identifier, 1=Position) » | — |  |
| 9 | 89 | Create/Delete Items > Add Separator | `Add New Separator with ID <p0> to <p1> (Submenu <p2>) at <p3>` |  | expression numérique « Identifier of New Separator (Must be 1 or Greater) » ; expression chaîne « Menu to Add Separator To » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Position of New Separator (To Append, Put -1 Here and 1 for the Next Param) » ; expression numérique « Position Method (0=Identifier, 1=Position) » | — |  |
| 10 | 90 | Create/Delete Items > Add Line Break | `Add New Line Break with ID <p0> to <p1> (Submenu <p2>) at <p3> (Style <p5>)` |  | expression numérique « Identifier of New Line Break (Must be 1 or Greater) » ; expression chaîne « Menu to Add Line Break To » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Position of New Line Break (To Append, Put -1 Here and 1 for the Next Param) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression numérique « Style (0=No Bar, 1=Bar) » | — |  |
| 11 | 91 | Create/Delete Items > Delete Item | `Delete Item <p0> from <p2> (Submenu <p3>)` |  | expression numérique « Item to Delete (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu to Delete From » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 12 | 92 | Manage Stored Menus > Set Default Item | `Set Item <p0> as the Default Item of <p2> (Submenu <p3>)` |  | expression numérique « Item to Set as Default (Use -1 for No Default Item) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu to Modify » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 13 | 93 | Manage Stored Menus > Set Background Color > Solid Color | `Set Background Color of <p0> (Submenu <p1>) to <p2>` |  | expression chaîne « Menu to Modify » ; expression chaîne « Submenu of Menu » ; expression numérique « Background Color (Use GetRGB() if Necessary) » ; expression numérique « Apply to Submenus? (0=No, 1=Yes) » | — |  |
| 14 | 94 | Manage Stored Menus > Set Auto-Dismiss | `Set Auto-Dismiss Option of <p0> to <p1>` |  | expression chaîne « Menu to Modify » ; expression numérique « Use Auto-Dismiss? (0=No, 1=Yes) » | — |  |
| 15 | 95 | Manage Stored Menus > Set Modality | `Set Modality Option of <p0> to <p1>` |  | expression chaîne « Menu to Modify » ; expression numérique « Modeless Menu? (0=No, 1=Yes) » | — |  |
| 16 | 96 | Manage Stored Menus > Set Checkmark Space | `Set Checkmark Space Option of <p0> (Submenu <p1>) to <p2>` |  | expression chaîne « Menu to Modify » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Remove Checkmark Space? (0=Never, 1=Always, 2=Only if has Icon) » ; expression numérique « Apply to Submenus? (0=No, 1=Yes) » | — |  |
| 17 | 97 | Manage Stored Menus > Set Maximum Height | `Set Maximum Height of <p0> (Submenu <p1>) to <p2>` |  | expression chaîne « Menu to Modify » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Maximum Height (Use 0 for Screen Height) » ; expression numérique « Apply to Submenus? (0=No, 1=Yes) » | — |  |
| 18 | 98 | Manage Stored Menus > Exclusion Rectangle > Set Exclusion Rectangle | `Set Exclusion Rectangle of <p0> to (<p1>, <p2>) - (<p3>, <p4>)` |  | expression chaîne « Menu to Modify » ; expression numérique « Left Boundry » ; expression numérique « Top Boundry » ; expression numérique « Right Boundry » ; expression numérique « Bottom Boundry » | — |  |
| 19 | 99 | Manage Stored Menus > Exclusion Rectangle > Remove Exclusion Rectangle | `Remove Exclusion Rectangle from <p0>` |  | expression chaîne « Menu to Use » | — |  |
| 20 | 100 | Manage Menu Items > Set Text | `Set Text of Item <p0> to <p2> for <p4> (Submenu <p5>)` |  | expression numérique « Item to Modify (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Text » ; expression chaîne « Keyboard Accelerator (Leave Blank for None) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 21 | 101 | Manage Menu Items > Set ID | `Set Identifier of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | expression numérique « Item to Modify (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression numérique « New Identifier (Must be 1 or Greater) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 22 | 102 | Manage Menu Items > Set Enabled | `Set State of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | expression numérique « Item to Modify (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression numérique « State (0=Disabled, 1=Enabled, 2=Toggle) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 23 | 103 | Manage Menu Items > Set Check | `Set Check of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | expression numérique « Item to Check (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression numérique « Check (0=Unchecked, 1=Checked, 2=Toggle) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 24 | 104 | Manage Menu Items > Set Radio Check | `Radio Check Item <p0> in Group <p1> to <p2>, for <p4> (Submenu <p5>)` |  | expression numérique « Item to Check » ; expression numérique « First Item in Radio Group » ; expression numérique « Last Item in Radio Group » ; expression numérique « Position Method for Previous 3 (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 25 | 105 | Manage Menu Items > Set Highlight | `Set Highlight of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | expression numérique « Item to Highlight (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression numérique « Highlight (0=Unhighlighted, 1=Highlighted, 2=Toggle) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 26 | 106 | Manage Menu Items > Item Icons > Set Item Icon > From OS Icon | `Load OS Icon <p0> for Item <p1> in <p3> (Submenu <p4>)` |  | expression numérique « OS Icon (Use the Object's Expressions) » ; expression numérique « Item to Set Icon of (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 27 | 107 | Manage Menu Items > Item Icons > Set Item Icon > From Bitmap/Bank | `Load Icon from <p0> for Item <p1> in <p3> (Submenu <p4>)` |  | expression chaîne « Full Path to Bitmap, or 1-Based Number of Icon Bank Slot » ; expression numérique « Item to Set Icon of (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Use 1st Pixel for Transparency? (0=No, 1=Yes) » | — |  |
| 28 | 108 | Manage Menu Items > Item Icons > Set Item Icon > Remove Item Icon | `Remove Icon from Item <p0> in <p2> (Submenu <p3>)` |  | expression numérique « Item to Remove Icon from (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » | — |  |
| 29 | 109 | Manage Menu Items > Item Icons > Set Check Icons | `Load Checkmark Icons for Item <p1> in <p3> (Submenu <p4>)` |  | expression chaîne « Full Path to "Checked" Bitmap (Leave Blank for Default) » ; expression chaîne « Full Path to "Unchecked" Bitmap (Leave Blank for None) » ; expression numérique « Item to Set Icon of (Next Parameter Determines Meaning) » ; expression numérique « Position Method (0=Identifier, 1=Position) » ; expression chaîne « Menu Containing Item » ; expression chaîne « Submenu of Menu (Leave Blank for Root Menu) » ; expression numérique « Use 1st Pixel for Transparency? (0=No, 1=Yes) » | — |  |
| 30 | 110 | Popup Menus > Close Popup Menu | `Close Active Popup Menu(s)` |  |  | — |  |
| 31 | 111 | Application Menus > Assign Menu Bar | `Assign Menu Bar <p0> to the Application Window` |  | expression chaîne « Menu Bar » ; expression numérique « Delete Old Menu in Memory? (Advanced, Default=0) » | — |  |
| 32 | 112 | Application Menus > Remove Menu Bar | `Remove the Menu Bar from the Application Window` |  | expression numérique « Delete Old Menu in Memory? (Advanced, Default=0) » | — |  |
| 33 | 113 | Application Menus > Revert Window Menu | `Revert the Application's Window Menu` |  |  | — |  |
| 34 | 114 | Manage Menu Items > Item Icons > Icon Bank > Add to Bank | `Add Icon <p0> to Icon Bank` |  | expression chaîne « Full Path to Bitmap File » ; expression numérique « Use 1st Pixel for Transparency? (0=No, 1=Yes) » | — |  |
| 35 | 115 | Manage Menu Items > Item Icons > Icon Bank > Remove from Bank | `Remove Icon <p0> from Icon Bank` |  | expression numérique « Index of Icon in Bank (1-Based) » | — |  |
| 36 | 116 | Manage Menu Items > Item Icons > Icon Bank > Clear Bank | `Clear Icon Bank` |  |  | — |  |
| 37 | 117 | Manage Stored Menus > Set Background Color > Bitmap Pattern | `Set Background of <p0> (Submenu <p1>) to Pattern <p2>` |  | expression chaîne « Menu to Modify » ; expression chaîne « Submenu of Menu » ; expression chaîne « Full Path to Bitmap File to use as Pattern » ; expression numérique « Apply to Submenus? (0=No, 1=Yes) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Error Handling > Error Number | `LastError(` |  |  | — |  |
| 1 | 81 | Error Handling > Error String | `LastError$(` |  | → chaîne | — |  |
| 2 | 82 | Stored Menus > Default Item | `DefaultItem(` |  | chaîne « Menu Name » ; chaîne « Submenu of Menu » ; nombre « Position Method » | — |  |
| 3 | 83 | Stored Menus > Maximum Height | `MaxHeight(` |  | chaîne « Menu Name » ; chaîne « Submenu of Menu » | — |  |
| 4 | 84 | Stored Menus > Exclusion Rectangle > Left Side | `ExcRectLeft(` |  | chaîne « Menu Name » | — |  |
| 5 | 85 | Stored Menus > Exclusion Rectangle > Top Side | `ExcRectTop(` |  | chaîne « Menu Name » | — |  |
| 6 | 86 | Stored Menus > Exclusion Rectangle > Right Side | `ExcRectRight(` |  | chaîne « Menu Name » | — |  |
| 7 | 87 | Stored Menus > Exclusion Rectangle > Bottom Side | `ExcRectBottom(` |  | chaîne « Menu Name » | — |  |
| 8 | 88 | Stored Menus > Stored Menu at | `StoredMenuAt$(` |  | nombre « Index » → chaîne | — |  |
| 9 | 89 | Stored Menus > Stored Submenu at | `StoredSubmenuAt$(` |  | chaîne « Menu Name » ; nombre « Index of Submenu » → chaîne | — |  |
| 10 | 90 | Stored Menus > Total Stored Menus | `TotalStoredMenus(` |  |  | — |  |
| 11 | 91 | Stored Menus > Total Menu Items | `TotalItems(` |  | chaîne « Menu Name » ; chaîne « Submenu of Menu » | — |  |
| 12 | 92 | Stored Menus > Item Grand Total | `GrandTotalItems(` |  | chaîne « Menu Name » | — |  |
| 13 | 93 | Stored Menus > Total Submenus | `TotalSubmenus(` |  | chaîne « Menu Name » | — |  |
| 14 | 94 | Menu Items > ID to Position | `IDToPos(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « Item Identifier » | — |  |
| 15 | 95 | Menu Items > Position to ID | `PosToID(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « 0-Based Position » | — |  |
| 16 | 96 | Menu Items > Text of Item | `ItemText$(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « Item » ; nombre « Position Method » → chaîne | — |  |
| 17 | 97 | Menu Items > Item Type | `ItemType(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « Item » ; nombre « Position Method » | — |  |
| 18 | 98 | Menu Items > Contained Submenu | `ItemSubmenu$(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « Item » ; nombre « Position Method » → chaîne | — |  |
| 19 | 99 | Menu Items > Item Rectangle > Left Side | `ItemRectLeft(` |  | chaîne « Popup Menu Name » ; chaîne « Submenu of Menu » ; nombre « Item Position » | — |  |
| 20 | 100 | Menu Items > Item Rectangle > Top Side | `ItemRectTop(` |  | chaîne « Popup Menu Name » ; chaîne « Submenu of Menu » ; nombre « Item Position » | — |  |
| 21 | 101 | Menu Items > Item Rectangle > Right Side | `ItemRectRight(` |  | chaîne « Popup Menu Name » ; chaîne « Submenu of Menu » ; nombre « Item Position » | — |  |
| 22 | 102 | Menu Items > Item Rectangle > Bottom Side | `ItemRectBottom(` |  | chaîne « Popup Menu Name » ; chaîne « Submenu of Menu » ; nombre « Item Position » | — |  |
| 23 | 103 | Menu Items > Item at Point | `ItemAtPoint(` |  | chaîne « Popup Menu Name » ; chaîne « Submenu of Menu » ; nombre « X Position (On Screen) » ; nombre « Y Position (On Screen) » | — |  |
| 24 | 104 | Popup Menus > Last Popup Menu | `LastPopupMenu$(` |  | → chaîne | — |  |
| 25 | 105 | Popup Menus > Last Selected Item | `LastPopupItem(` |  |  | — |  |
| 26 | 106 | Application Menus > Last Selected Menu Bar Item | `LastMenuBarItem(` |  |  | — |  |
| 27 | 107 | Application Menus > Last Selected Window Menu Item | `LastWindowMenuItem(` |  |  | — |  |
| 28 | 108 | OS Item Icons > Window Menu Close Button | `OSIconWMClose(` |  |  | — |  |
| 29 | 109 | OS Item Icons > Window Menu Minimize Button | `OSIconWMMini(` |  |  | — |  |
| 30 | 110 | OS Item Icons > Window Menu Maximize Button | `OSIconWMMaxi(` |  |  | — |  |
| 31 | 111 | OS Item Icons > Window Menu Restore Button | `OSIconWMRest(` |  |  | — |  |
| 32 | 112 | OS Item Icons > Menu Bar Close Button | `OSIconMBClose(` |  |  | — |  |
| 33 | 113 | OS Item Icons > MB Close Button, Disabled | `OSIconMBCloseD(` |  |  | — |  |
| 34 | 114 | OS Item Icons > Menu Bar Minimize Button | `OSIconMBMini(` |  |  | — |  |
| 35 | 115 | OS Item Icons > MB Minimize Button, Disabled | `OSIconMBMiniD(` |  |  | — |  |
| 36 | 116 | OS Item Icons > Menu Bar Restore Button | `OSIconMBRest(` |  |  | — |  |
| 37 | 117 | Window Menu IDs > Close | `WMIDClose(` |  |  | — |  |
| 38 | 118 | Window Menu IDs > Minimize | `WMIDMinimize(` |  |  | — |  |
| 39 | 119 | Window Menu IDs > Maximize | `WMIDMaximize(` |  |  | — |  |
| 40 | 120 | Window Menu IDs > Restore | `WMIDRestore(` |  |  | — |  |
| 41 | 121 | Window Menu IDs > Move | `WMIDMove(` |  |  | — |  |
| 42 | 122 | Window Menu IDs > Size | `WMIDSize(` |  |  | — |  |
| 43 | 123 | Window Menu IDs > Next Window | `WMIDNextWnd(` |  |  | — |  |
| 44 | 124 | Window Menu IDs > Previous Window | `WMIDPrevWnd(` |  |  | — |  |
| 45 | 125 | Window Menu IDs > Start Menu | `WMIDStartMenu(` |  |  | — |  |
| 46 | 126 | Window Menu IDs > Screensaver | `WMIDScrnSvr(` |  |  | — |  |
| 47 | 127 | Stored Menus > Checkmark Space | `CheckSpace(` |  | chaîne « Menu Name » ; chaîne « Submenu of Menu » | — |  |
| 48 | 128 | Popup Menus > Last Right-Clicked Item | `LastPopupRightClick(` |  |  | — |  |
| 49 | 129 | Menu Items > Accelerator Text | `ItemKeyAccelText$(` |  | chaîne « Menu Containing the Item » ; chaîne « Submenu of Menu » ; nombre « Item » ; nombre « Position Method » → chaîne | — |  |
| 50 | 130 | Miscellaneous > Convert Frame to Screen X | `FrameToScreenX(` |  | nombre « X-Coordinate (In Frame) » ; nombre « Type XMouse Here » | — |  |
| 51 | 131 | Miscellaneous > Convert Frame to Screen Y | `FrameToScreenY(` |  | nombre « Y-Coordinate (In Frame) » ; nombre « Type YMouse Here » | — |  |
| 52 | 132 | Miscellaneous > Last Rolled-Over Item | `LastRolloverItem(` |  |  | — |  |
| 53 | 133 | Miscellaneous > Menu of Rolled-Over Item | `LastRolloverMenu(` |  | → chaîne | — |  |
| 54 | 134 | Popup Menus > Last Right-Clicked Menu | `LastPopupRCMenu(` |  | → chaîne | — |  |
