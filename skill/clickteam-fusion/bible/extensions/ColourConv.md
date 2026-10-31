# Extension ColourConv

- File: `ColourConv.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set RGB > from integer | `<object> : Set RGB to <p0>` |  | numeric expression “Enter integer value in the form: BLUE*65536 + GREEN*256 + RED” | — |  |
| 1 | 81 | Set RGB > from separates | `<object> : Set RGB to <p0>, <p1>, <p2>` |  | numeric expression “Amount of RED (0-255)”; numeric expression “Amount of GREEN (0-255)”; numeric expression “Amount of BLUE (0-255)” | — |  |
| 2 | 82 | Set RGB > from hexadecimal | `<object> : Set RGB from hex <p0>` |  | string expression “Enter hexadecimal code in the form RRGGBB (no leading # or 0x)” | — |  |
| 3 | 83 | Set HSL (0-240) > from integer | `<object> : Set HSL to <p0>` |  | numeric expression “Enter integer value in the form: Luminance*58081 + Saturation*241 + Hue” | — |  |
| 4 | 84 | Set HSL (0-240) > from separates | `<object> : Set HSL to <p0>, <p1>, <p2>` |  | numeric expression “Hue (0-240)”; numeric expression “Saturation (0-240)”; numeric expression “Luminance (0-240)” | — |  |
| 5 | 85 | Set HSL (0-255) > from integer | `<object> : Set HSL (0-255) to <p0>` |  | numeric expression “Enter integer value in the form: Luminance*65536 + Saturation*256 + Hue” | — |  |
| 6 | 86 | Set HSL (0-255) > from separates | `<object> : Set HSL (0-255) to <p0>, <p1>, <p2>` |  | numeric expression “Hue (0-255)”; numeric expression “Saturation (0-255)”; numeric expression “Luminance (0-255)” | — |  |
| 7 | 87 | Set CMYK > from integer | `<object> : Set CMYK to <p0>` |  | numeric expression “Enter integer value in the form: Black*16777216 + Yellow*65536 + Magenta*256 + Cyan” | — |  |
| 8 | 88 | Set CMYK > from separates | `<object> : Set CMYK to <p0>, <p1>, <p2>, <p3>` |  | numeric expression “Cyan (0-255)”; numeric expression “Magenta (0-255)”; numeric expression “Yellow (0-255)”; numeric expression “K (Black) (0-255)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Colour Numbers > Get HSL (0-240) | `GetHSL(` |  | number “Hue”; number “Saturation”; number “Luminance” | — |  |
| 1 | 81 | Colour Numbers > Get CMYK | `GetCMYK(` |  | number “Cyan”; number “Magenta”; number “Yellow”; number “Black” | — |  |
| 2 | 82 | Colour Numbers > Get Cyan from CMYK value | `GetCyan(` |  | number “CMYK” | — |  |
| 3 | 83 | Colour Numbers > Get Magenta from CMYK value | `GetMagenta(` |  | number “CMYK” | — |  |
| 4 | 84 | Colour Numbers > Get Yellow from CMYK value | `GetYellow(` |  | number “CMYK” | — |  |
| 5 | 85 | Colour Numbers > Get Black from CMYK value | `GetBlack(` |  | number “CMYK” | — |  |
| 6 | 86 | Colour Numbers > Get Hue from HSL value (240) | `GetHue(` |  | number “HSL” | — |  |
| 7 | 87 | Colour Numbers > Get Sat from HSL value (240) | `GetSat(` |  | number “HSL” | — |  |
| 8 | 88 | Colour Numbers > Get Lum from HSL value (240) | `GetLum(` |  | number “HSL” | — |  |
| 9 | 89 | From set colour > Get Red | `Red(` |  |  | — |  |
| 10 | 90 | From set colour > Get Green | `Green(` |  |  | — |  |
| 11 | 91 | From set colour > Get Blue | `Blue(` |  |  | — |  |
| 12 | 92 | From set colour > Get Hue | `Hue(` |  |  | — |  |
| 13 | 93 | From set colour > Get Saturation | `Sat(` |  |  | — |  |
| 14 | 94 | From set colour > Get Luminance | `Lum(` |  |  | — |  |
| 15 | 95 | From set colour > Get Hue (255) | `HueB(` |  |  | — |  |
| 16 | 96 | From set colour > Get Sat (255) | `SatB(` |  |  | — |  |
| 17 | 97 | From set colour > Get Lum (255) | `LumB(` |  |  | — |  |
| 18 | 98 | From set colour > Get Cyan | `Cyan(` |  |  | — |  |
| 19 | 99 | From set colour > Get Magenta | `Magenta(` |  |  | — |  |
| 20 | 100 | From set colour > Get Yellow | `Yellow(` |  |  | — |  |
| 21 | 101 | From set colour > Get Black | `Black(` |  |  | — |  |
| 22 | 102 | From set colour > Get RGB | `RGB(` |  |  | — |  |
| 23 | 103 | From set colour > Get HSL | `HSL(` |  |  | — |  |
| 24 | 104 | From set colour > Get HSL (255) | `HSLB(` |  |  | — |  |
| 25 | 105 | From set colour > Get CMYK | `CMYK(` |  |  | — |  |
| 26 | 106 | From expression > Get RGB to HSL | `RGBtoHSL(` |  | number “RGB” | — |  |
| 27 | 107 | From expression > Get RGB to HSL (255) | `RGBtoHSLB(` |  | number “RGB” | — |  |
| 28 | 108 | From expression > Get RGB to CMYK | `RGBtoCMYK(` |  | number “RGB” | — |  |
| 29 | 109 | From expression > Get HSL to RGB | `HSLtoRGB(` |  | number “HSL” | — |  |
| 30 | 110 | From expression > Get HSL (255) to RGB | `HSLBtoRGB(` |  | number “HSL” | — |  |
| 31 | 111 | From expression > Get CMYK to RGB | `CMYKtoRGB(` |  | number “CMYK” | — |  |
| 32 | 112 | Blend Colour > Blend RGB | `BlendRGB(` |  | number “Start colour”; number “End colour”; number “Blend coefficient” | — |  |
| 33 | 113 | Blend Colour > Blend CMYK | `BlendCMYK(` |  | number “Start colour”; number “End colour”; number “Blend coefficient” | — |  |
| 34 | 114 | Blend Colour > Blend one colour component | `Blend(` |  | number “Start colour”; number “End colour”; number “Blend coefficient” | — |  |
