# Extension ColourConv

- Fichier : `ColourConv.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set RGB > from integer | `<objet> : Set RGB to <p0>` |  | expression numérique « Enter integer value in the form: BLUE*65536 + GREEN*256 + RED » | — |  |
| 1 | 81 | Set RGB > from separates | `<objet> : Set RGB to <p0>, <p1>, <p2>` |  | expression numérique « Amount of RED (0-255) » ; expression numérique « Amount of GREEN (0-255) » ; expression numérique « Amount of BLUE (0-255) » | — |  |
| 2 | 82 | Set RGB > from hexadecimal | `<objet> : Set RGB from hex <p0>` |  | expression chaîne « Enter hexadecimal code in the form RRGGBB (no leading # or 0x) » | — |  |
| 3 | 83 | Set HSL (0-240) > from integer | `<objet> : Set HSL to <p0>` |  | expression numérique « Enter integer value in the form: Luminance*58081 + Saturation*241 + Hue » | — |  |
| 4 | 84 | Set HSL (0-240) > from separates | `<objet> : Set HSL to <p0>, <p1>, <p2>` |  | expression numérique « Hue (0-240) » ; expression numérique « Saturation (0-240) » ; expression numérique « Luminance (0-240) » | — |  |
| 5 | 85 | Set HSL (0-255) > from integer | `<objet> : Set HSL (0-255) to <p0>` |  | expression numérique « Enter integer value in the form: Luminance*65536 + Saturation*256 + Hue » | — |  |
| 6 | 86 | Set HSL (0-255) > from separates | `<objet> : Set HSL (0-255) to <p0>, <p1>, <p2>` |  | expression numérique « Hue (0-255) » ; expression numérique « Saturation (0-255) » ; expression numérique « Luminance (0-255) » | — |  |
| 7 | 87 | Set CMYK > from integer | `<objet> : Set CMYK to <p0>` |  | expression numérique « Enter integer value in the form: Black*16777216 + Yellow*65536 + Magenta*256 + Cyan » | — |  |
| 8 | 88 | Set CMYK > from separates | `<objet> : Set CMYK to <p0>, <p1>, <p2>, <p3>` |  | expression numérique « Cyan (0-255) » ; expression numérique « Magenta (0-255) » ; expression numérique « Yellow (0-255) » ; expression numérique « K (Black) (0-255) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Colour Numbers > Get HSL (0-240) | `GetHSL(` |  | nombre « Hue » ; nombre « Saturation » ; nombre « Luminance » | — |  |
| 1 | 81 | Colour Numbers > Get CMYK | `GetCMYK(` |  | nombre « Cyan » ; nombre « Magenta » ; nombre « Yellow » ; nombre « Black » | — |  |
| 2 | 82 | Colour Numbers > Get Cyan from CMYK value | `GetCyan(` |  | nombre « CMYK » | — |  |
| 3 | 83 | Colour Numbers > Get Magenta from CMYK value | `GetMagenta(` |  | nombre « CMYK » | — |  |
| 4 | 84 | Colour Numbers > Get Yellow from CMYK value | `GetYellow(` |  | nombre « CMYK » | — |  |
| 5 | 85 | Colour Numbers > Get Black from CMYK value | `GetBlack(` |  | nombre « CMYK » | — |  |
| 6 | 86 | Colour Numbers > Get Hue from HSL value (240) | `GetHue(` |  | nombre « HSL » | — |  |
| 7 | 87 | Colour Numbers > Get Sat from HSL value (240) | `GetSat(` |  | nombre « HSL » | — |  |
| 8 | 88 | Colour Numbers > Get Lum from HSL value (240) | `GetLum(` |  | nombre « HSL » | — |  |
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
| 26 | 106 | From expression > Get RGB to HSL | `RGBtoHSL(` |  | nombre « RGB » | — |  |
| 27 | 107 | From expression > Get RGB to HSL (255) | `RGBtoHSLB(` |  | nombre « RGB » | — |  |
| 28 | 108 | From expression > Get RGB to CMYK | `RGBtoCMYK(` |  | nombre « RGB » | — |  |
| 29 | 109 | From expression > Get HSL to RGB | `HSLtoRGB(` |  | nombre « HSL » | — |  |
| 30 | 110 | From expression > Get HSL (255) to RGB | `HSLBtoRGB(` |  | nombre « HSL » | — |  |
| 31 | 111 | From expression > Get CMYK to RGB | `CMYKtoRGB(` |  | nombre « CMYK » | — |  |
| 32 | 112 | Blend Colour > Blend RGB | `BlendRGB(` |  | nombre « Start colour » ; nombre « End colour » ; nombre « Blend coefficient » | — |  |
| 33 | 113 | Blend Colour > Blend CMYK | `BlendCMYK(` |  | nombre « Start colour » ; nombre « End colour » ; nombre « Blend coefficient » | — |  |
| 34 | 114 | Blend Colour > Blend one colour component | `Blend(` |  | nombre « Start colour » ; nombre « End colour » ; nombre « Blend coefficient » | — |  |
