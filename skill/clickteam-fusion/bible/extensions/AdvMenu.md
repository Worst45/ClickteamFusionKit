# Extension AdvMenu

- File: `AdvMenu.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Error Handling > On Error | `<object>: On Error <p0>` |  | numeric expression “Error Code (Use -1 for Any Error)” |
| 1 | -82 | Popup Menus > On Popup Item Selected | `<object>: On Item <p0> Selected from Menu <p1>` |  | numeric expression “Item Identifier (Use -1 for Any ID)”; string expression “Menu Name (Leave Blank for Any Menu)” |
| 3 | -84 | Stored Menus > Menu Exists | `<object>: Menu <p0> is a Stored Menu` |  | string expression “Menu Name” |
| 4 | -85 | Stored Menus > Submenu Exists | `<object>: Menu <p0> has Submenu <p1>` |  | string expression “Menu Name”; string expression “Submenu to Test For” |
| 5 | -86 | Stored Menus > Menu is Popup | `<object>: Menu <p0> is a Popup Menu` |  | string expression “Menu Name” |
| 6 | -87 | Stored Menus > Menu Auto-Dismisses | `<object>: Menu <p0> Auto-Dismisses` |  | string expression “Menu Name” |
| 7 | -88 | Stored Menus > Menu is Modeless | `<object>: Menu <p0> is Modeless` |  | string expression “Menu Name” |
| 8 | -89 | Menu Items > Item is Enabled | `<object>: Item <p0> is Enabled in Menu <p2>` |  | numeric expression “Item to Test (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 9 | -90 | Menu Items > Item is Checked | `<object>: Item <p0> is Checked in Menu <p2>` |  | numeric expression “Item to Test (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 10 | -91 | Menu Items > Item has Icon > Item Icon | `<object>: Item <p0> has an Item Icon in Menu <p2>` |  | numeric expression “Item to Test (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 11 | -92 | Menu Items > Item has Icon > Checked Icon | `<object>: Item <p0> has a Checked Icon in Menu <p2>` |  | numeric expression “Item to Test (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 12 | -93 | Menu Items > Item has Icon > Unchecked Icon | `<object>: Item <p0> has an Unchecked Icon in Menu <p2>` |  | numeric expression “Item to Test (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 13 | -94 | Popup Menus > On Item Right-Clicked | `<object>: On Item <p0> Right-Clicked in Menu <p1>` |  | numeric expression “Item Identifier (Use -1 for Any ID)”; string expression “Menu Name (Leave Blank for Any Menu)” |
| 14 | -95 | Popup Menus > Popup is Open | `<object>: Popup Menu <p0> is Open` |  | string expression “Menu Name (Leave Blank for Any Menu)” |
| 15 | -96 | Application Menus > On Menu Bar Item Selected | `<object>: On Item <p0> Selected From Menu Bar` |  | numeric expression “Item Identifier (Use -1 for Any ID)” |
| 16 | -97 | Application Menus > On Window Menu Item Selected | `<object>: On Item <p0> Selected From Window Menu` |  | numeric expression “Item Identifier (Use -1 for Any ID)” |
| 17 | -98 | Miscellaneous > On Item Rollover | `<object>: On Item <p0> Rolled Over in Menu <p1>` |  | numeric expression “Item Identifier (Use -1 for Any ID)”; string expression “Menu Name (Leave Blank for Any Menu)” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Create/Delete Menus > Create Popup Menu | `Create Popup Menu <p0>` |  | string expression “Name of New Menu” |
| 1 | 81 | Create/Delete Menus > Create Menu Bar | `Create Menu Bar <p0>` |  | string expression “Name of New Menu” |
| 2 | 82 | Application Menus > Load Menu Bar | `Create Menu <p0> From the Application's Menu Bar` |  | string expression “Name of New Menu” |
| 3 | 83 | Application Menus > Load Window Menu | `Create Menu <p0> From the Application's Window Menu` |  | string expression “Name of New Menu” |
| 4 | 84 | Create/Delete Menus > Delete Menu | `Delete Menu <p0> (Delete in Memory = <p1>)` |  | string expression “Name of Menu to Delete”; numeric expression “Delete in Memory? (Advanced, Default=0)” |
| 5 | 85 | Create/Delete Menus > Delete All Menus | `Delete all Stored Menus (Delete in Memory = <p0>)` |  | numeric expression “Delete in Memory? (Advanced, Default=0)” |
| 6 | 86 | Create/Delete Items > Add Item | `Add New Item with ID <p0> and Text <p1> to <p2> (Submenu <p3>), at <p4>` |  | numeric expression “Identifier of New Item (Must be 1 or Greater)”; string expression “Text of New Item”; string expression “Menu to Add Item To”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Position of New Item (To Append, Put -1 Here and 1 for the Next Param)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Keyboard Accelerator (Leave Blank for None)” |
| 7 | 87 | Popup Menus > Display Popup Menu | `Display Menu <p0> at (<p1>,<p2>)` |  | string expression “Menu to Display”; numeric expression “X Position on Screen (Use -1 for Mouse Position)”; numeric expression “Y Position on Screen (Use -1 for Mouse Position)”; numeric expression “Horizontal Alignment (0=Left, 1=Center, 2=Right)”; numeric expression “Vertical Alignment (0=Top, 1=Middle, 2=Bottom)”; numeric expression “Compensation Direction (0=Horz. 1=Vert.)”; numeric expression “Horizontal Animation (0=None, 1=LTR, 2=RTL)”; numeric expression “Vertical Animation (0=None, 1=TTB, 2=BTT)”; numeric expression “Allow Right-Click Select? (0=No, 1=Yes)”; numeric expression “Show If Other Menus are Open? (0=No, 1=Yes)”; numeric expression “Right-to-Left Layout? (0=No, 1=Yes)”; numeric expression “Make Compatible with the System Tray? (0=No, 1=Yes)” |
| 8 | 88 | Create/Delete Items > Add Submenu | `Add New Submenu <p1> with ID <p0> (Text <p2>) to <p3> (Submenu <p4>)` |  | numeric expression “Identifier of New Submenu (Must be 1 or Greater)”; string expression “Name of New Submenu”; string expression “Text of New Submenu”; string expression “Menu to Add Submenu To”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Position of New Submenu (To Append, Put -1 Here and 1 for the Next Param)”; numeric expression “Position Method (0=Identifier, 1=Position)” |
| 9 | 89 | Create/Delete Items > Add Separator | `Add New Separator with ID <p0> to <p1> (Submenu <p2>) at <p3>` |  | numeric expression “Identifier of New Separator (Must be 1 or Greater)”; string expression “Menu to Add Separator To”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Position of New Separator (To Append, Put -1 Here and 1 for the Next Param)”; numeric expression “Position Method (0=Identifier, 1=Position)” |
| 10 | 90 | Create/Delete Items > Add Line Break | `Add New Line Break with ID <p0> to <p1> (Submenu <p2>) at <p3> (Style <p5>)` |  | numeric expression “Identifier of New Line Break (Must be 1 or Greater)”; string expression “Menu to Add Line Break To”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Position of New Line Break (To Append, Put -1 Here and 1 for the Next Param)”; numeric expression “Position Method (0=Identifier, 1=Position)”; numeric expression “Style (0=No Bar, 1=Bar)” |
| 11 | 91 | Create/Delete Items > Delete Item | `Delete Item <p0> from <p2> (Submenu <p3>)` |  | numeric expression “Item to Delete (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu to Delete From”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 12 | 92 | Manage Stored Menus > Set Default Item | `Set Item <p0> as the Default Item of <p2> (Submenu <p3>)` |  | numeric expression “Item to Set as Default (Use -1 for No Default Item)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu to Modify”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 13 | 93 | Manage Stored Menus > Set Background Color > Solid Color | `Set Background Color of <p0> (Submenu <p1>) to <p2>` |  | string expression “Menu to Modify”; string expression “Submenu of Menu”; numeric expression “Background Color (Use GetRGB() if Necessary)”; numeric expression “Apply to Submenus? (0=No, 1=Yes)” |
| 14 | 94 | Manage Stored Menus > Set Auto-Dismiss | `Set Auto-Dismiss Option of <p0> to <p1>` |  | string expression “Menu to Modify”; numeric expression “Use Auto-Dismiss? (0=No, 1=Yes)” |
| 15 | 95 | Manage Stored Menus > Set Modality | `Set Modality Option of <p0> to <p1>` |  | string expression “Menu to Modify”; numeric expression “Modeless Menu? (0=No, 1=Yes)” |
| 16 | 96 | Manage Stored Menus > Set Checkmark Space | `Set Checkmark Space Option of <p0> (Submenu <p1>) to <p2>` |  | string expression “Menu to Modify”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Remove Checkmark Space? (0=Never, 1=Always, 2=Only if has Icon)”; numeric expression “Apply to Submenus? (0=No, 1=Yes)” |
| 17 | 97 | Manage Stored Menus > Set Maximum Height | `Set Maximum Height of <p0> (Submenu <p1>) to <p2>` |  | string expression “Menu to Modify”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Maximum Height (Use 0 for Screen Height)”; numeric expression “Apply to Submenus? (0=No, 1=Yes)” |
| 18 | 98 | Manage Stored Menus > Exclusion Rectangle > Set Exclusion Rectangle | `Set Exclusion Rectangle of <p0> to (<p1>, <p2>) - (<p3>, <p4>)` |  | string expression “Menu to Modify”; numeric expression “Left Boundry”; numeric expression “Top Boundry”; numeric expression “Right Boundry”; numeric expression “Bottom Boundry” |
| 19 | 99 | Manage Stored Menus > Exclusion Rectangle > Remove Exclusion Rectangle | `Remove Exclusion Rectangle from <p0>` |  | string expression “Menu to Use” |
| 20 | 100 | Manage Menu Items > Set Text | `Set Text of Item <p0> to <p2> for <p4> (Submenu <p5>)` |  | numeric expression “Item to Modify (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Text”; string expression “Keyboard Accelerator (Leave Blank for None)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 21 | 101 | Manage Menu Items > Set ID | `Set Identifier of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | numeric expression “Item to Modify (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; numeric expression “New Identifier (Must be 1 or Greater)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 22 | 102 | Manage Menu Items > Set Enabled | `Set State of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | numeric expression “Item to Modify (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; numeric expression “State (0=Disabled, 1=Enabled, 2=Toggle)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 23 | 103 | Manage Menu Items > Set Check | `Set Check of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | numeric expression “Item to Check (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; numeric expression “Check (0=Unchecked, 1=Checked, 2=Toggle)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 24 | 104 | Manage Menu Items > Set Radio Check | `Radio Check Item <p0> in Group <p1> to <p2>, for <p4> (Submenu <p5>)` |  | numeric expression “Item to Check”; numeric expression “First Item in Radio Group”; numeric expression “Last Item in Radio Group”; numeric expression “Position Method for Previous 3 (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 25 | 105 | Manage Menu Items > Set Highlight | `Set Highlight of Item <p0> to <p2> for <p3> (Submenu <p4>)` |  | numeric expression “Item to Highlight (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; numeric expression “Highlight (0=Unhighlighted, 1=Highlighted, 2=Toggle)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 26 | 106 | Manage Menu Items > Item Icons > Set Item Icon > From OS Icon | `Load OS Icon <p0> for Item <p1> in <p3> (Submenu <p4>)` |  | numeric expression “OS Icon (Use the Object's Expressions)”; numeric expression “Item to Set Icon of (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 27 | 107 | Manage Menu Items > Item Icons > Set Item Icon > From Bitmap/Bank | `Load Icon from <p0> for Item <p1> in <p3> (Submenu <p4>)` |  | string expression “Full Path to Bitmap, or 1-Based Number of Icon Bank Slot”; numeric expression “Item to Set Icon of (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Use 1st Pixel for Transparency? (0=No, 1=Yes)” |
| 28 | 108 | Manage Menu Items > Item Icons > Set Item Icon > Remove Item Icon | `Remove Icon from Item <p0> in <p2> (Submenu <p3>)` |  | numeric expression “Item to Remove Icon from (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)” |
| 29 | 109 | Manage Menu Items > Item Icons > Set Check Icons | `Load Checkmark Icons for Item <p1> in <p3> (Submenu <p4>)` |  | string expression “Full Path to "Checked" Bitmap (Leave Blank for Default)”; string expression “Full Path to "Unchecked" Bitmap (Leave Blank for None)”; numeric expression “Item to Set Icon of (Next Parameter Determines Meaning)”; numeric expression “Position Method (0=Identifier, 1=Position)”; string expression “Menu Containing Item”; string expression “Submenu of Menu (Leave Blank for Root Menu)”; numeric expression “Use 1st Pixel for Transparency? (0=No, 1=Yes)” |
| 30 | 110 | Popup Menus > Close Popup Menu | `Close Active Popup Menu(s)` |  |  |
| 31 | 111 | Application Menus > Assign Menu Bar | `Assign Menu Bar <p0> to the Application Window` |  | string expression “Menu Bar”; numeric expression “Delete Old Menu in Memory? (Advanced, Default=0)” |
| 32 | 112 | Application Menus > Remove Menu Bar | `Remove the Menu Bar from the Application Window` |  | numeric expression “Delete Old Menu in Memory? (Advanced, Default=0)” |
| 33 | 113 | Application Menus > Revert Window Menu | `Revert the Application's Window Menu` |  |  |
| 34 | 114 | Manage Menu Items > Item Icons > Icon Bank > Add to Bank | `Add Icon <p0> to Icon Bank` |  | string expression “Full Path to Bitmap File”; numeric expression “Use 1st Pixel for Transparency? (0=No, 1=Yes)” |
| 35 | 115 | Manage Menu Items > Item Icons > Icon Bank > Remove from Bank | `Remove Icon <p0> from Icon Bank` |  | numeric expression “Index of Icon in Bank (1-Based)” |
| 36 | 116 | Manage Menu Items > Item Icons > Icon Bank > Clear Bank | `Clear Icon Bank` |  |  |
| 37 | 117 | Manage Stored Menus > Set Background Color > Bitmap Pattern | `Set Background of <p0> (Submenu <p1>) to Pattern <p2>` |  | string expression “Menu to Modify”; string expression “Submenu of Menu”; string expression “Full Path to Bitmap File to use as Pattern”; numeric expression “Apply to Submenus? (0=No, 1=Yes)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Error Handling > Error Number | `LastError(` |  |  |
| 1 | 81 | Error Handling > Error String | `LastError$(` |  | → string |
| 2 | 82 | Stored Menus > Default Item | `DefaultItem(` |  | string “Menu Name”; string “Submenu of Menu”; number “Position Method” |
| 3 | 83 | Stored Menus > Maximum Height | `MaxHeight(` |  | string “Menu Name”; string “Submenu of Menu” |
| 4 | 84 | Stored Menus > Exclusion Rectangle > Left Side | `ExcRectLeft(` |  | string “Menu Name” |
| 5 | 85 | Stored Menus > Exclusion Rectangle > Top Side | `ExcRectTop(` |  | string “Menu Name” |
| 6 | 86 | Stored Menus > Exclusion Rectangle > Right Side | `ExcRectRight(` |  | string “Menu Name” |
| 7 | 87 | Stored Menus > Exclusion Rectangle > Bottom Side | `ExcRectBottom(` |  | string “Menu Name” |
| 8 | 88 | Stored Menus > Stored Menu at | `StoredMenuAt$(` |  | number “Index” → string |
| 9 | 89 | Stored Menus > Stored Submenu at | `StoredSubmenuAt$(` |  | string “Menu Name”; number “Index of Submenu” → string |
| 10 | 90 | Stored Menus > Total Stored Menus | `TotalStoredMenus(` |  |  |
| 11 | 91 | Stored Menus > Total Menu Items | `TotalItems(` |  | string “Menu Name”; string “Submenu of Menu” |
| 12 | 92 | Stored Menus > Item Grand Total | `GrandTotalItems(` |  | string “Menu Name” |
| 13 | 93 | Stored Menus > Total Submenus | `TotalSubmenus(` |  | string “Menu Name” |
| 14 | 94 | Menu Items > ID to Position | `IDToPos(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “Item Identifier” |
| 15 | 95 | Menu Items > Position to ID | `PosToID(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “0-Based Position” |
| 16 | 96 | Menu Items > Text of Item | `ItemText$(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “Item”; number “Position Method” → string |
| 17 | 97 | Menu Items > Item Type | `ItemType(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “Item”; number “Position Method” |
| 18 | 98 | Menu Items > Contained Submenu | `ItemSubmenu$(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “Item”; number “Position Method” → string |
| 19 | 99 | Menu Items > Item Rectangle > Left Side | `ItemRectLeft(` |  | string “Popup Menu Name”; string “Submenu of Menu”; number “Item Position” |
| 20 | 100 | Menu Items > Item Rectangle > Top Side | `ItemRectTop(` |  | string “Popup Menu Name”; string “Submenu of Menu”; number “Item Position” |
| 21 | 101 | Menu Items > Item Rectangle > Right Side | `ItemRectRight(` |  | string “Popup Menu Name”; string “Submenu of Menu”; number “Item Position” |
| 22 | 102 | Menu Items > Item Rectangle > Bottom Side | `ItemRectBottom(` |  | string “Popup Menu Name”; string “Submenu of Menu”; number “Item Position” |
| 23 | 103 | Menu Items > Item at Point | `ItemAtPoint(` |  | string “Popup Menu Name”; string “Submenu of Menu”; number “X Position (On Screen)”; number “Y Position (On Screen)” |
| 24 | 104 | Popup Menus > Last Popup Menu | `LastPopupMenu$(` |  | → string |
| 25 | 105 | Popup Menus > Last Selected Item | `LastPopupItem(` |  |  |
| 26 | 106 | Application Menus > Last Selected Menu Bar Item | `LastMenuBarItem(` |  |  |
| 27 | 107 | Application Menus > Last Selected Window Menu Item | `LastWindowMenuItem(` |  |  |
| 28 | 108 | OS Item Icons > Window Menu Close Button | `OSIconWMClose(` |  |  |
| 29 | 109 | OS Item Icons > Window Menu Minimize Button | `OSIconWMMini(` |  |  |
| 30 | 110 | OS Item Icons > Window Menu Maximize Button | `OSIconWMMaxi(` |  |  |
| 31 | 111 | OS Item Icons > Window Menu Restore Button | `OSIconWMRest(` |  |  |
| 32 | 112 | OS Item Icons > Menu Bar Close Button | `OSIconMBClose(` |  |  |
| 33 | 113 | OS Item Icons > MB Close Button, Disabled | `OSIconMBCloseD(` |  |  |
| 34 | 114 | OS Item Icons > Menu Bar Minimize Button | `OSIconMBMini(` |  |  |
| 35 | 115 | OS Item Icons > MB Minimize Button, Disabled | `OSIconMBMiniD(` |  |  |
| 36 | 116 | OS Item Icons > Menu Bar Restore Button | `OSIconMBRest(` |  |  |
| 37 | 117 | Window Menu IDs > Close | `WMIDClose(` |  |  |
| 38 | 118 | Window Menu IDs > Minimize | `WMIDMinimize(` |  |  |
| 39 | 119 | Window Menu IDs > Maximize | `WMIDMaximize(` |  |  |
| 40 | 120 | Window Menu IDs > Restore | `WMIDRestore(` |  |  |
| 41 | 121 | Window Menu IDs > Move | `WMIDMove(` |  |  |
| 42 | 122 | Window Menu IDs > Size | `WMIDSize(` |  |  |
| 43 | 123 | Window Menu IDs > Next Window | `WMIDNextWnd(` |  |  |
| 44 | 124 | Window Menu IDs > Previous Window | `WMIDPrevWnd(` |  |  |
| 45 | 125 | Window Menu IDs > Start Menu | `WMIDStartMenu(` |  |  |
| 46 | 126 | Window Menu IDs > Screensaver | `WMIDScrnSvr(` |  |  |
| 47 | 127 | Stored Menus > Checkmark Space | `CheckSpace(` |  | string “Menu Name”; string “Submenu of Menu” |
| 48 | 128 | Popup Menus > Last Right-Clicked Item | `LastPopupRightClick(` |  |  |
| 49 | 129 | Menu Items > Accelerator Text | `ItemKeyAccelText$(` |  | string “Menu Containing the Item”; string “Submenu of Menu”; number “Item”; number “Position Method” → string |
| 50 | 130 | Miscellaneous > Convert Frame to Screen X | `FrameToScreenX(` |  | number “X-Coordinate (In Frame)”; number “Type XMouse Here” |
| 51 | 131 | Miscellaneous > Convert Frame to Screen Y | `FrameToScreenY(` |  | number “Y-Coordinate (In Frame)”; number “Type YMouse Here” |
| 52 | 132 | Miscellaneous > Last Rolled-Over Item | `LastRolloverItem(` |  |  |
| 53 | 133 | Miscellaneous > Menu of Rolled-Over Item | `LastRolloverMenu(` |  | → string |
| 54 | 134 | Popup Menus > Last Right-Clicked Menu | `LastPopupRCMenu(` |  | → string |
