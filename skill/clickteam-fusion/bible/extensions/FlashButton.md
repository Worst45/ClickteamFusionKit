# Extension FlashButton

- File: `FlashButton.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Button Clicked | `<object> Button Clicked (<p0>)` |  | string expression “Button ID Name” |
| 1 | -82 | Button Enabled | `<object> Button Enabled (<p0>)` |  | string expression “Button ID Name” |
| 2 | -83 | Button Disabled | `<object> Button Disabled (<p0>)` |  | string expression “Button ID Name” |
| 3 | -84 | Button Visible | `<object> Button Visible (<p0>)` |  | string expression “Button ID Name” |
| 4 | -85 | Button Invisible | `<object> Button Invisible (<p0>)` |  | string expression “Button ID Name” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set Button Text | `Set Button Text (<p0>)` |  | string expression “Button Text” |
| 1 | 81 | Set Tooltip Text | `Set Tooltip Text (<p0>)` |  | string expression “Tooltip Text” |
| 2 | 82 | Customize > Set Button Font Name | `Set Button Font Name (<p0>)` |  | string expression “Font Name (Default = Tahoma)” |
| 3 | 83 | Customize > Set Button Font Color | `Set Button Font Color (<p0>)` |  | string expression “Font Hex Color (Example = 0xFF0000 = Red)” |
| 4 | 84 | Customize > Set Button Font Size | `Set Button Font Size (<p0>)` |  | numeric expression “Font Size (Default = 10)” |
| 5 | 85 | Customize > Set Tooltip Font Name | `Set Tooltip Font Name (<p0>)` |  | string expression “Font Name (Default = Tahoma)” |
| 6 | 86 | Customize > Set Tooltip Font Color | `Set Tooltip Font Color (<p0>)` |  | string expression “Font Hex Color (Example = 0xFF0000 = Red)” |
| 7 | 87 | Customize > Set Tooltip Font Size | `Set Tooltip Font Size (<p0>)` |  | numeric expression “Font Size (Default = 10)” |
| 8 | 88 | Customize > Set Button Position | `Set Button Position - X(<p0>), Y(<p1>)` |  | numeric expression “X”; numeric expression “Y” |
| 9 | 89 | Customize > Set Button Dimensions | `Set Button Dimensions - Width(<p0>), Height(<p1>)` |  | numeric expression “Width”; numeric expression “Height” |
| 10 | 90 | Customize > Set Button ID Name | `Set Button ID Name (<p0>)` |  | string expression “Button ID Name” |
| 11 | 91 | Customize > Set Button Style | `Set Button Style - Color Content Brightness(<p0>), Border Color Brightness Offset(<p1>), Border Color Brightness Range(<p2>), Shadow Alpha(<p3>), Corner Height(<p4>)` |  | numeric expression “Color Content Brightness (0 - 1.0)”; numeric expression “Border Color Brightness Offset (0 - 1.0)”; numeric expression “Border Color Brightness Range (0 - 1.0)”; numeric expression “Shadow Alpha (0 - 1.0)”; numeric expression “Corner Height (0 - 20) - (0 = Square Button, 20 = Round Button)” |
| 12 | 92 | Customize > Set Tooltip Style | `Set Tooltip Style - Corner Height(<p0>)` |  | numeric expression “Corner Height” |
| 13 | 93 | Customize > Set Button Foreground Color | `Set Button Foreground Color (<p0>)` |  | string expression “Button Foreground Hex Color (Example = 0xFF0000 = Red)” |
| 14 | 94 | Customize > Set Button Background Color | `Set Button Background Color (<p0>)` |  | string expression “Button Background Hex Color (Example = 0xFF0000 = Red)” |
| 15 | 95 | Customize > Set Tooltip Foreground Color | `Set Tooltip Foreground Color (<p0>)` |  | string expression “Tooltip Foreground Hex Color (Example = 0xFF0000 = Red)” |
| 16 | 96 | Customize > Set Tooltip Background Color | `Set Tooltip Background Color (<p0>)` |  | string expression “Tooltip Background Hex Color (Example = 0xFF0000 = Red)” |
| 17 | 97 | Button State > Enable Button | `Enable Button - ID(<p0>)` |  | string expression “Button ID Name” |
| 18 | 98 | Button State > Disable Button | `Disable Button - ID(<p0>)` |  | string expression “Button ID Name” |
| 19 | 99 | Button State > Make Visible | `Make Visible - ID(<p0>)` |  | string expression “Button ID Name” |
| 20 | 100 | Button State > Make Invisible | `Make Invisible - ID(<p0>)` |  | string expression “Button ID Name” |
| 21 | 101 | Set Button Image | `Set Button Image (<p0>)` |  | string expression “Image URL” |
| 22 | 102 | Create Button | `Create Button` |  |  |
| 23 | 103 | Remove Button | `Remove Button - ID(<p0>)` |  | string expression “Button ID Name” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Button Text | `ButtonText$(` |  | → string |
| 1 | 81 | Tooltip Text | `TooltipText$(` |  | → string |
| 2 | 82 | Customizations > Button Font Name | `ButtonFontName$(` |  | → string |
| 3 | 83 | Customizations > Button Font Color | `ButtonFontColor$(` |  | → string |
| 4 | 84 | Customizations > Button Font Size | `ButtonFontSize(` |  |  |
| 5 | 85 | Customizations > Tooltip Font Name | `TooltipFontName$(` |  | → string |
| 6 | 86 | Customizations > Tooltip Font Color | `TooltipFontColor$(` |  | → string |
| 7 | 87 | Customizations > Tooltip Font Size | `TooltipFontSize(` |  |  |
| 8 | 88 | Customizations > Button X Position | `ButtonXPosition(` |  |  |
| 9 | 89 | Customizations > Button X Position | `ButtonYPosition(` |  |  |
| 10 | 90 | Customizations > Button Width | `ButtonWidth(` |  |  |
| 11 | 91 | Customizations > Button Height | `ButtonHeight(` |  |  |
| 12 | 92 | Customizations > Button ID Name | `ButtonIDName$(` |  | → string |
| 13 | 93 | Customizations > Button Foreground Color | `ButtonForegroundColor$(` |  | → string |
| 14 | 94 | Customizations > Button Background Color | `ButtonBackgroundColor$(` |  | → string |
| 15 | 95 | Customizations > Color Content Brightness | `ColorContentBrightness(` |  |  |
| 16 | 96 | Customizations > Border Color Brightness Offset | `BorderColorBrightnessOffset(` |  |  |
| 17 | 97 | Customizations > Border Color Brightness Range | `BorderColorBrightnessRange(` |  |  |
| 18 | 98 | Customizations > Shadow Alpha | `ShadowAlpha(` |  |  |
| 19 | 99 | Customizations > Button Corner Height | `ButtonCornerHeight(` |  |  |
| 20 | 100 | Customizations > Tooltip Corner Height | `TooltipCornerHeight(` |  |  |
| 21 | 101 | Customizations > Tooltip Foreground Color | `TooltipForegroundColor$(` |  | → string |
| 22 | 102 | Customizations > Tooltip Background Color | `TooltipBackgroundColor$(` |  | → string |
| 23 | 103 | Button Image URL | `ButtonImageURL$(` |  | → string |
