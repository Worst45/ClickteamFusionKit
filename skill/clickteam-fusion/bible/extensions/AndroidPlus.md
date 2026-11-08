# Extension AndroidPlus

- File: `AndroidPlus.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)
- conditions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- actions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)
- expressions: extracted in “resource menu” mode (numbers possibly guessed, see the Code column)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is Display set to Center | `<object>: Is Display set to Center?` |  |  | — |  |
| 1 | -82 | Is Display set to Adjust window | `<object>: Is Display set to Adjust window?` |  |  | — |  |
| 2 | -83 | Is Display set to Fit inside Bars | `<object>: Is Display set to Fit inside Bars?` |  |  | — |  |
| 3 | -84 | Is Display set to Fit inside and Adjust window | `<object>: Is Display set to Fit inside Bars and Adjust Windows?` |  |  | — |  |
| 4 | -85 | Is Display set to Fit Outside | `<object>: Is Display set to Fit outside?` |  |  | — |  |
| 5 | -86 | Is Display set to Stretch to fill | `<object>: Is Display set to Stretch to fill?` |  |  | — |  |
| 6 | -87 | Is Touch mode enabled | `<object>: Is Touch mode enable?` |  |  | — |  |
| 7 | -88 | Is Device a Tablet | `<object>: Is Device a tablet?` |  |  | — |  |
| 8 | -89 | Is Device Natural Landscape | `<object>: Is Device natural landscape?` |  |  | — |  |
| 9 | -90 | On Return from Share | `<object>: On return from share OK` |  |  | — |  |
| 10 | -91 | On Locale List Read | `<object>: On read locale list` |  |  | — |  |
| 11 | -92 | On Timezone List Read | `<object>: On read TimeZone list` |  |  | — |  |
| 12 | -93 | Is Expansion Available | `<object>: Is Expansion available?` |  |  | — |  |
| 13 | -94 | App Returning from Pause | `<object>: On App return from pause?` |  |  | — |  |
| 14 | -95 | On Return from Share w/Result | `<object>: On return from share w/result: <p0>` |  | numeric expression “Share with Result (0:OK, 1:Canceled, 2:First_User)” | — |  |
| 15 | -96 | On Account dialog OK | `<object>: On Account dialog OK/Read` |  |  | — |  |
| 16 | -97 | On Account dialog Cancel | `<object>: On Account dialog Cancel` |  |  | — |  |
| 17 | -98 | Is Battery Opt. Ignored? | `<object>: Is Battery opt. ignored?` |  |  | — |  |
| 18 | -99 | Is Assets Expansion Available | `<object>: Is Assets Expansion available?` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Save Display Mode | `Save Display Mode` |  |  | — |  |
| 1 | 81 | Set Display Mode | `Set Display Mode to <p0>` |  | numeric expression “Display Mode (0:Center, 1:Adjust window, 2:Fit Inside bars, 3:Fit inside bars and adjust, 4:Fit outside, 5:Stretch to fill, 6: Square, 7:Square and Adjust)” | — |  |
| 2 | 82 | Restore Display Mode | `Restore Display Mode` |  |  | — |  |
| 3 | 83 | Refresh Display | `Refresh Display` |  |  | — |  |
| 4 | 84 | Disable All Views | `Disable All Views` |  |  | — |  |
| 5 | 85 | Enable All Views | `Enable All Views` |  |  | — |  |
| 6 | 86 | Joysticks ... > Start/Stop Joysticks | `Start/Stop Joysticks with <p0> and mode <p1>` |  | numeric expression “Start/Stop value (0:Off, 1:On)”; numeric expression “Auto-release (0:No-Default, 1:Yes)” | — |  |
| 7 | 87 | Joysticks ... > Emulate Joystick | `Emulate joystick <p0> with value <p1>` |  | numeric expression “Joystick Number (from 1 to 4)”; numeric expression “Joystick Value (1:top, 2:bottom, 4:left, 8:right, 16:fire-1, 32:fire-2 )” | — |  |
| 8 | 88 | Joysticks ... > Release Joystick | `Release joystick <p0>` |  | numeric expression “Joystick Number (from 1 to 4)” | — |  |
| 9 | 89 | Preferences > Set Preferences Name | `Set Preference name to <p0>` |  | string expression “Filename for preferences (only name no path)” | — |  |
| 10 | 90 | Preferences > Save String | `Save String with Name <p0> and value <p1>` |  | string expression “Name for value”; string expression “String to save” | — |  |
| 11 | 91 | Preferences > Save Integer | `Save Integer with Name <p0> and value <p1>` |  | string expression “Name for value”; numeric expression “Integer to save” | — |  |
| 12 | 92 | Preferences > Save Float | `Save Float with Name <p0> and value <p1>` |  | string expression “Name for value”; numeric expression “Float to save” | — |  |
| 13 | 93 | Preferences > Save Boolean | `Save Boolean with Name <p0> and value <p1>` |  | string expression “Name for value”; numeric expression “Boolean value (0:False, 1:True)” | — |  |
| 14 | 94 | Share ... > Share an Image with Text | `Share Image with name <p0> and text <p1>` |  | string expression “Image name or URL”; string expression “Text to share ...” | — |  |
| 15 | 95 | Share ... > Share only a Text | `Share text <p0>` |  | string expression “Text to share ...” | — |  |
| 16 | 96 | Settings ... > Set Process Brightness | `Set Process Brightness to <p0>` |  | numeric expression “Process Brightness value (0:Dark, 100:Bright)” | — |  |
| 17 | 97 | Settings ... > Set System Brightness | `Set System Brightness to <p0>` |  | numeric expression “System Brightness value (0:Dark, 100:Bright)” | — |  |
| 18 | 98 | Settings ... > Read Locale List | `Read Locale List` |  |  | — |  |
| 19 | 99 | Settings ... > Set Language | `Set Language to <p0>` |  | string expression “Set Locale (locale_lang, e.g. en_US)” | — |  |
| 20 | 100 | Settings ... > Read Timezone List | `Read Timezone List` |  |  | — |  |
| 21 | 101 | Settings ... > Change Date and Time | `Open Date/Time Settings` |  |  | — |  |
| 22 | 102 | Device ... > Start Sleep Process | `Start sleep process in <p0>` |  | numeric expression “Delay in seconds before sleep process” | — |  |
| 23 | 103 | Device ... > Inject Key | `Inject key <p0>` |  | numeric expression “Android key value” | — |  |
| 24 | 104 | Start an APK | `Start APK with package name: <p0>` |  | string expression “Package name” | — |  |
| 25 | 105 | Device ... > Flashlight On/Off | `Set flashlight to <p0>` |  | numeric expression “Flashlight (0:OFF, 1:ON)” | — |  |
| 27 | 107 | Device ... > Set layout to Portrait | `Set layout to Portrait (sensor: <p0>)` |  | numeric expression “Layout (0:No-Sensor, 1:Sensor)” | — |  |
| 28 | 108 | Device ... > Set layout to Landscape | `Set layout to Landscape (sensor: <p0>)` |  | numeric expression “Layout (0:No-Sensor, 1:Sensor)” | — |  |
| 29 | 109 | Device ... > Set layout to Any | `Set layout to Any` |  |  | — |  |
| 30 | 110 | Device ... > Set Volume | `Set device volume to <p0>` |  | numeric expression “Device volume (0:mute, 100:full)” | — |  |
| 31 | 111 | Device ... > Set Immersive Mode | `Set Immersive mode to <p0>` |  | numeric expression “Immersive mode (0:Off, 1:On-Sticky, 2: On-Reg. Immersive)” | — |  |
| 32 | 112 | Action bar ... > Set Bar Color | `Set action bar color to <p0>` |  | color “Action bar color (int: color value)” | — |  |
| 33 | 113 | Action bar ... > Set Text Color | `Set action bar text color to <p0>` |  | color “Text Action bar color (int:color value)” | — |  |
| 34 | 114 | Status bar ... > Set Status Bar Color | `Set status bar color to <p0>` |  | color “Status bar color (int:color value)” | — |  |
| 35 | 115 | Action bar ... > Display Title | `Set display title mode to <p0>` |  | numeric expression “Mode (0:Show - default, 1:Off)” | — |  |
| 36 | 116 | Action bar ... > Display Logo | `Set display logo mode to <p0>` |  | numeric expression “Mode (0:Show - default, 1:Off)” | — |  |
| 37 | 117 | Action bar ... > Display HomeUp | `Set display HomeUp mode to <p0>` |  | numeric expression “Mode (0:Off - default, 1:On)” | — |  |
| 38 | 118 | Action bar ... > Set Title Text | `Set action bar title to <p0>` |  | string expression “String Title” | — |  |
| 39 | 119 | Menu ... > Set Text Color | `Set menu text color to <p0>` |  | color “Menu Text Color” | — |  |
| 40 | 120 | Menu ... > Display in Action Bar | `Set menu display mode to <p0>` |  | numeric expression “Mode (0:As Submenu-default, 1:As Actionbar)” | — |  |
| 41 | 121 | Action bar ... > Set Icon image | `Set Icon to <p0>` |  | string expression “Icon String (check help for tips)” | — |  |
| 42 | 122 | Action bar ... > Set Logo image | `Set Logo to <p0>` |  | string expression “Logo String (check help for tips)” | — |  |
| 43 | 123 | Action bar ... > Set Home Image | `Set Home Logo to <p0>` |  | string expression “Home Logo String (check help for tips)” | — |  |
| 44 | 124 | Action bar ... > Set Menu Image | `Set Menu Logo to <p0>` |  | string expression “Menu Logo String (check help for tips)” | — |  |
| 45 | 125 | Set Shortcut Install | `Create shortcut with name <p0>` |  | string expression “String text for title shortcut” | — |  |
| 46 | 126 | Toast Message ... > Set Aligment | `Set toast message alignment to <p0>` |  | numeric expression “Aligment mode (0: DEFAULT, 1: HORZ CENTER, 2:VERT CENTER, 4:LEFT, 8:TOP, 16:RIGHT, 32:BOTTOM” | — |  |
| 47 | 127 | Toast Message ... > Set Duration | `Set toast message duration mode to <p0>` |  | numeric expression “Duration Mode (0:short 1:long)” | — |  |
| 48 | 128 | Toast Message ... > Set Horizontal Offset | `Set toast message horizontal offset to <p0>` |  | numeric expression “Horizontal offset value” | — |  |
| 49 | 129 | Toast Message ... > Set Vertical Offset | `Set toast message vertical offset to <p0>` |  | numeric expression “Vertical offset value” | — |  |
| 50 | 130 | Toast Message ... > Show Message | `Show toast message with text <p0>` |  | string expression “Message text” | — |  |
| 51 | 131 | Open Google Account Dialog | `Open/Ask google email account` |  |  | — |  |
| 52 | 132 | Device ... > Request to Ignore Battery Optimizations | `Request to ignore battery optimizations` |  |  | — |  |
| 53 | 133 | JVM Memory Info ... > Free Unused Memory | `Free unused memory` |  |  | — |  |
| 54 | 134 | JVM Memory Info ... > Refresh JVM Memory Info Every ... | `Refresh JVM memory info every <p0> ms` |  | numeric expression “Refresh JVM Memory Info Every ... (ms)” | — |  |
| 55 | 135 | JVM Memory Info ... > Stop Refreshing JVM Memory Info | `Stop refreshing JVM memory info` |  |  | — |  |
| 56 | 136 | Status bar ... > Set Status Bar Color and Alpha | `Set status bar color to <p0> and alpha <p1>` |  | color “Status bar color (int:color value)”; numeric expression “Status bar alpha coefficient (0 - 255:Opaque)” | — |  |
| 57 | 137 | Device ... > Set UI limits Mode | `Set UI limit mode to <p0>` |  | numeric expression “UI Limit mode (0:With limits - default, 1:No limits)” | — |  |
| 58 | 138 | Set OS Display Freq. | `Set OS Game frequency to <p0>` |  | numeric expression “Frequency (normally 90 or 120)” | — |  |
| 59 | 139 | Device ... > Set Edge to Edge | `Set edge to edge mode to <p0>` |  | numeric expression “Edge to Edge (1:ON, 0:As SET 2:OFF)” | — |  |
| 60 | 140 | Device ... > Set DisplayCutouts | `Set display cutouts mode to <p0>` |  | numeric expression “DisplayCutouts (0:Use device default, 1:Short Edges, 2:Never, 3:Force On(Devices 30+)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Display Mode | `GetDisplayMode(` |  |  | — |  |
| 1 | 81 | Get Saved Display Mode | `GetSaveDisplayMode(` |  |  | — |  |
| 2 | 82 | Get Original Display Mode | `GetOriginalDisplayMode(` |  |  | — |  |
| 3 | 83 | Get Device Screen size in inches | `GetScreenSizeInches(` |  |  | — |  |
| 4 | 84 | Get Device Screen width  in inches | `GetScreenSizeWidth(` |  |  | — |  |
| 5 | 85 | Get Device Screen height  in inches | `GetScreenSizeHeight(` |  |  | — |  |
| 6 | 86 | Get Device Screen Horizontal DPI | `GetScreenDPIHorizontal(` |  |  | — |  |
| 7 | 87 | Get Device Screen Vertical DPI | `GetScreenDPIVertical(` |  |  | — |  |
| 8 | 88 | Get Device Screen DPI Density | `GetScreenDensityDPI(` |  |  | — |  |
| 9 | 89 | Get Device Screen Density Ratio | `GetScreenDensityRatio(` |  |  | — |  |
| 10 | 90 | Preferences > Get Preference String | `GetPrefString$(` |  | string “field value” → string | — |  |
| 11 | 91 | Preferences > Get Preference Integer | `GetPrefInteger(` |  | string “field value” | — |  |
| 12 | 92 | Preferences > Get Preference Float | `GetPrefFloat(` |  | string “field value” | — |  |
| 13 | 93 | Preferences > Get Preference Boolean | `GetPrefBoolean(` |  | string “field value” | — |  |
| 14 | 94 | Settings > Get Process Brightness | `GetProcessBright(` |  |  | — |  |
| 15 | 95 | Settings > Get System Brightness | `GetSystemBright(` |  |  | — |  |
| 16 | 96 | Settings > Get Locale Qty | `GetLocaleQty(` |  |  | — |  |
| 17 | 97 | Settings > Get Locale Language | `GetLocale$(` |  | number “index value” → string | — |  |
| 18 | 98 | Settings > Get Locale Country | `GetLocaleCountry$(` |  | number “index value” → string | — |  |
| 19 | 99 | Settings > Get Default Language | `GetDefaultLocale$(` |  | → string | — |  |
| 20 | 100 | Settings > Get Timezone Qty | `GetTimezoneQty(` |  |  | — |  |
| 21 | 101 | Settings > Get Timezone ID | `GetTimezoneID$(` |  | number “index value” → string | — |  |
| 22 | 102 | Settings > Get Timezone GMT | `GetTimezoneGMT$(` |  | number “index value” → string | — |  |
| 23 | 103 | Settings > Get Default Timezone ID | `GetDefaultTimezoneID$(` |  | → string | — |  |
| 24 | 104 | Settings > Get Default Timezone GMT | `GetDefaultTimezoneGMT$(` |  | → string | — |  |
| 25 | 105 | Get Unique Hardware ID | `GetUniqueHardwareID$(` |  | → string | — |  |
| 26 | 106 | Device ... > Get Volume | `GetDeviceVolume(` |  |  | — |  |
| 27 | 107 | Colors ... > Make Darker | `DarkerColor(` |  | number “Color to convert” | — |  |
| 28 | 108 | Colors ... > Make Lighter | `LighterColor(` |  | number “Color to convert” | — |  |
| 29 | 109 | Action Bar ... > Height | `ActionbarHeight(` |  |  | — |  |
| 30 | 110 | Action Bar ... > Color | `ActionbarColor(` |  |  | — |  |
| 31 | 111 | Google Email Account | `GetGoogleAccountemail$(` |  | → string | — |  |
| 32 | 112 | JVM Memory Info ... > Total (MB) | `TotalJVMMemoryMB(` |  |  | — |  |
| 33 | 113 | JVM Memory Info ... > Free (MB) | `FreeJVMMemoryMB(` |  |  | — |  |
| 34 | 114 | JVM Memory Info ... > Used (MB) | `UsedJVMMemoryMB(` |  |  | — |  |
| 35 | 115 | JVM Memory Info ... > Max (MB) | `MaxJVMMemoryMB(` |  |  | — |  |
| 36 | 116 | JVM Memory Info ... > Native (MB) | `NativeMemoryMB(` |  |  | — |  |
| 37 | 117 | Get Screen View width in pixels | `GetScreenViewWidth(` |  |  | — |  |
| 38 | 118 | Get Screen View height in pixels | `GetScreenViewHeight(` |  |  | — |  |
| 39 | 119 | Get Keyboard height in pixels | `GetVirtualKeyboardHeight(` |  |  | — |  |
| 40 | 120 | Settings > Get Default Country | `GetDefaultCountry$(` |  | → string | — |  |
| 41 | 121 | Window Insets ... > Get Safe Area Left | `SafeAreaLeft(` |  |  | — |  |
| 42 | 122 | Window Insets ... > Get Safe Area Top | `SafeAreaTop(` |  |  | — |  |
| 43 | 123 | Window Insets ... > Get Safe Area Right | `SafeAreaRight(` |  |  | — |  |
| 44 | 124 | Window Insets ... > Get Safe Area Bottom | `SafeAreaBottom(` |  |  | — |  |
| 45 | 125 | Settings > Get OS Display Mode | `GetOSGameMode(` |  |  | — |  |
| 46 | 126 | Settings > Get OS Display Freq. | `GetOSGameFreq(` |  |  | — |  |
