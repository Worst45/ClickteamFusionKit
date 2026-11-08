# Extension ColorDialog

- File: `ColorDialog.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Dialog is Closed by OK | `<object>: Closed by OK` |  |  |
| 1 | -82 | Dialog is Closed by Cancel | `<object>: Closed by Cancel` |  |  |
| 2 | -83 | Has an Error Occurred? | `<object>: On Error` |  |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Open Dialog > Open the Color Dialog | `Open Color Dialog` |  |  |
| 1 | 81 | Open Dialog > Open the Color Dialog at Position | `Open Color Dialog at ( <p0> , <p1> )` |  | numeric expression “Enter X Position, (0,0) is Top Left of Monitor Display”; numeric expression “Enter Y Position, (0,0) is Top Left of Monitor Display” |
| 2 | 82 | Settings > Restore Custom Colors on Cancel | `Set 'Restore Custom Colors on Cancel' to State <p0>` |  | numeric expression |
| 3 | 83 | Settings > Dialog Fully Open by Default | `Set 'Dialog Fully Open by Default' to State <p0>` |  | numeric expression |
| 4 | 84 | Settings > Cannot Fully Open Dialog | `Set 'Cannot Fully Open Dialog' to State <p0>` |  | numeric expression |
| 5 | 85 | Settings > Round to Solid Colors (256 color mode) | `Set 'Round to Solid Colors (256 color mode)' to State <p0>` |  | numeric expression |
| 6 | 86 | Custom Colors > Set a Custom Color by RGB | `Set Custom Color <p0> to RGB( <p1> , <p2> , <p3> )` |  | numeric expression “Enter Index of Custom Color (1-16)”; numeric expression “Enter Red Value (0-255)”; numeric expression “Enter Green Value (0-255)”; numeric expression “Enter Blue Value (0-255)” |
| 7 | 87 | Custom Colors > Set a Custom Color by Color Reference | `Set Custom Color <p0> to Color <p1>` |  | numeric expression “Enter Index of Custom Color (1-16)”; numeric expression “Enter Color Reference, Use GetRGB(R,G,B)” |
| 8 | 88 | Custom Colors > Back-up Current Custom Colors | `Back-up Custom Colors` |  |  |
| 9 | 89 | Custom Colors > Restore Current Custom Colors | `Restore Custom Colors` |  |  |
| 10 | 90 | Errors > Clear Expression Error Code | `Clear Expression Error Code` |  |  |
| 11 | 91 | Selected Color > Set Selected Color by RGB | `Set Selected Color to RGB( <p0>, <p1> , <p2> )` |  | numeric expression “Enter Red Value (0-255)”; numeric expression “Enter Green Value (0-255)”; numeric expression “Enter Blue Value (0-255)” |
| 12 | 92 | Selected Color > Set Selected Color by Color Reference | `Set Selected Color to Color <p0>` |  | numeric expression “Enter Color Reference, Use GetRGB(R,G,B)” |
| 13 | 93 | Settings > Set Dialog Window's Title | `Set Color Dialog Window's Title to <p0>` |  | string expression “Enter Title for Color Dialog Window” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Selected Color | `SelectedColor(` |  |  |
| 1 | 81 | Get a Custom Color | `CustomColor(` |  | number |
| 2 | 82 | Settings > Get State of 'Restore Custom Colors on Cancel' | `RestoreState(` |  |  |
| 3 | 83 | Settings > Get State of 'Dialog Fully Open by Default' | `FullOpenState(` |  |  |
| 4 | 84 | Settings > Get State of 'Cannot Fully Open Dialog' | `NoFullOpenState(` |  |  |
| 5 | 85 | Settings > Get State of 'Round to Solid Colors (256 color mode)' | `SolidColorsState(` |  |  |
| 6 | 86 | Errors > Get Error Code | `ErrorCode(` |  |  |
| 7 | 87 | Errors > Get Expression Error Code | `ExpressionErrorCode(` |  |  |
| 8 | 88 | Settings > Get Dialog Window's Title | `DialogTitle$(` |  | → string |
| 9 | 89 | Get Last State of Dialog Openness | `DialogLastOpen(` |  |  |
| 10 | 90 | Color Conversions > Reference <-> RGB Values > Convert RGB values to Color Reference | `RGBToRef(` |  | number; number; number |
| 11 | 91 | Color Conversions > Reference <-> RGB Values > Get Red Value from Color Reference | `RefToRed(` |  | number |
| 12 | 92 | Color Conversions > Reference <-> RGB Values > Get Green Value from Color Reference | `RefToGreen(` |  | number |
| 13 | 93 | Color Conversions > Reference <-> RGB Values > Get Blue Value from Color Reference | `RefToBlue(` |  | number |
| 14 | 94 | Color Conversions > Reference <-> Color Names > Get Name of Color from Color Reference | `RefToName$(` |  | number → string |
| 15 | 95 | Color Conversions > RGB Values <-> Color Names > Get Name of Color from RGB Values | `RGBToName$(` |  | number; number; number → string |
| 16 | 96 | Color Conversions > Reference <-> Color Names > Get Color Reference from Name of Color | `NameToRef(` |  | string |
| 17 | 97 | Color Conversions > Reference <-> Hex String > Convert Color Reference to Hex String | `RefToHex$(` |  | number → string |
| 18 | 98 | Color Conversions > Hex String <-> RGB Values > Convert RGB values to Hex String | `RGBToHex$(` |  | number; number; number → string |
| 19 | 99 | Color Conversions > Reference <-> Hex String > Convert Hex String to Color Reference | `HexToRef(` |  | string |
| 20 | 100 | Color Conversions > Hex String <-> RGB Values > Get Red Value from Hex String | `HexToRed(` |  | string |
| 21 | 101 | Color Conversions > Hex String <-> RGB Values > Get Green Value from Hex String | `HexToGreen(` |  | string |
| 22 | 102 | Color Conversions > Hex String <-> RGB Values > Get Blue Value from Hex String | `HexToBlue(` |  | string |
