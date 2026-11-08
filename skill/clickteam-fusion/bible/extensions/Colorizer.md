# Extension Colorizer

- File: `Colorizer.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Options > Colorize mode > Set New Red out of Old Red | `Set New Red out of Old Red to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old red, 2 = Old red * 2, etc.” |
| 1 | 81 | Options > Colorize mode > Set New Red out of Old Green | `Set New Red out of Old Green to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old green, 2 = Old green * 2, etc.” |
| 2 | 82 | Options > Colorize mode > Set New Red out of Old Blue | `Set New Red out of Old Blue to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old blue, 2 = Old blue * 2, etc.” |
| 3 | 83 | Options > Colorize mode > Set New Green out of Old Red | `Set New Green out of Old Red to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old red, 2 = Old red * 2, etc.” |
| 4 | 84 | Options > Colorize mode > Set New Green out of Old Green | `Set New Green out of Old Green to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old green, 2 = Old green * 2, etc.” |
| 5 | 85 | Options > Colorize mode > Set New Green out of Old Blue | `Set New Green out of Old Blue to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old blue, 2 = Old blue * 2, etc.” |
| 6 | 86 | Options > Colorize mode > Set New Blue out of Old Red | `Set New Blue out of Old Red to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old red, 2 = Old red * 2, etc.” |
| 7 | 87 | Options > Colorize mode > Set New Blue out of Old Green | `Set New Blue out of Old Green to <p0>` |  | numeric expression “Float; 0 = No effect, 1 = Old blue, 2 = Old blue * 2, etc.” |
| 8 | 88 | Options > Colorize mode > Set New Blue out of Old Blue | `Set New Blue out of Old Blue to <p0>` |  | numeric expression “float, 0 = no effect 1= old blue 2= 2 times old blue etc.” |
| 9 | 89 | Options > Set Value for Hue Mode | `Set Hue to <p0>` |  | numeric expression “Integer, Hue shift, 0-360” |
| 10 | 90 | Options > Set Values for HSL Mode | `Set HSL to (<p0>, <p1>, <p2>)` |  | numeric expression “Integer, Hue shift, 0-360”; numeric expression “Integer, Saturation offset, (240)”; numeric expression “Integer, Luminance offset, (240)” |
| 11 | 91 | Resize | `Resize to <p0> * <p1>` |  | numeric expression “Width”; numeric expression “Height” |
| 12 | 92 | Load a Preset File | `Load Preset File from <p0>` |  | file name “File” |
| 13 | 93 | Save a Preset File | `Save Preset File to <p0>` |  | file name “File” |
| 14 | 94 | Change mode to > Colorize Mode | `Change Mode to Colorize Mode` |  |  |
| 15 | 95 | Change mode to > Hue Mode | `Change Mode to Hue Mode` |  |  |
| 16 | 96 | Change mode to > HSL Mode | `Change Mode to HSL Mode` |  |  |
| 17 | 97 | Fading > Fade Red of Red | `Fade Red of Red from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 18 | 98 | Fading > Fade Red of Green | `Fade Red of Green from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 19 | 99 | Fading > Fade Red of Blue | `Fade Red of Blue from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 20 | 100 | Fading > Fade Green of Red | `Fade Green of Red from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 21 | 101 | Fading > Fade Green of Green | `Fade Green of Green from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 22 | 102 | Fading > Fade Green of Blue | `Fade Green of Blue from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 23 | 103 | Fading > Fade Blue of Red | `Fade Blue of Red from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 24 | 104 | Fading > Fade Blue of Green | `Fade Blue of Green from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 25 | 105 | Fading > Fade Blue of Blue | `Fade Blue of Blue from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 26 | 106 | Fading > Fade H | `Fade Hue from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 27 | 107 | Fading > Fade S | `Fade Saturation from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 28 | 108 | Fading > Fade L | `Fade Luminance from <p0> to <p1> in <p2> frames` |  | numeric expression “From Value”; numeric expression “To Value”; numeric expression “Number of frames” |
| 29 | 109 | Load Mask from Overlay or Surface | `Load Mask from Overlay or Surface (<p0>)` |  | numeric expression “Overlay or Surface Fixed Value” |
| 30 | 110 | Update Colorizer in Manual Updating Mode | `Update Colorizer` |  |  |
| 31 | 111 | Change Threshold Value for Masking | `Change Threshold Value to <p0>` |  | numeric expression “Enter Value” |
| 32 | 112 | Change Mask Mode | `Change Mask Mode to <p0> (0 = Off; 1 = On; 2 = On with Alpha)` |  | numeric expression “0 = Off; 1 = On; 2 = On with Alpha; Anything Else = Unchanged” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Width | `Width(` |  |  |
| 1 | 81 | Get Height | `Height(` |  |  |
| 2 | 82 | Get Red of Red | `RR(` |  |  |
| 3 | 83 | Get Red of Green | `RG(` |  |  |
| 4 | 84 | Get Red of Blue | `RB(` |  |  |
| 5 | 85 | Get Green of Red | `GR(` |  |  |
| 6 | 86 | Get Green of Green | `GG(` |  |  |
| 7 | 87 | Get Green of Blue | `GB(` |  |  |
| 8 | 88 | Get Blue of Red | `BR(` |  |  |
| 9 | 89 | Get Blue of Green | `BG(` |  |  |
| 10 | 90 | Get Blue of Blue | `BB(` |  |  |
| 11 | 91 | Get H | `⡈` |  |  |
| 12 | 92 | Get S | `⡓` |  |  |
| 13 | 93 | Get L | `⡌` |  |  |
