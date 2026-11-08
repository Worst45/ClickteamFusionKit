# Extension Lens

- File: `Lens.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Update > Manual update | `Update` |  |  |
| 1 | 81 | Load image | `Load image: <p0>` |  | string expression “Load lens image” |
| 2 | 82 | Stretch | `Stretch to <p0>, <p1>` |  | numeric expression “X size”; numeric expression “Y size” |
| 3 | 83 | Set height multiplier | `Set height multiplier: <p0>` |  | numeric expression “Enter debth multiplier. (float value)” |
| 4 | 84 | Set Angle | `Set angle to <p0>` |  | numeric expression “Set angle” |
| 5 | 85 | Scroll | `Scroll <p0>, <p1>` |  | numeric expression “Scroll X amount”; numeric expression “Scroll Y amount” |
| 6 | 86 | Import > Import active image | `Import active: <p0>` |  | object “Select the object” |
| 7 | 87 | Import > Import overlay image | `Import overlay from adress: <p0>` |  | numeric expression “Enter the memory adress of the overlay object” |
| 8 | 88 | Update > Auto update on | `Auto update on` |  |  |
| 9 | 89 | Update > Auto update off | `Auto update off` |  |  |
| 10 | 90 | Render mode > Refraction | `Rendermode: Refraction` |  |  |
| 11 | 91 | Render mode > Zoom | `Rendermode: Zoom` |  |  |
| 12 | 92 | Hotspot > Center | `Hotspot: Center` |  |  |
| 13 | 93 | Hotspot > Top left | `Hotspot: Top left` |  |  |
| 14 | 94 | Hotspot > Top center | `Hotspot: Top center` |  |  |
| 15 | 95 | Hotspot > Top right | `Hotspot: Top right` |  |  |
| 16 | 96 | Hotspot > Left center | `Hotspot: Left center` |  |  |
| 17 | 97 | Hotspot > Right center | `Hotspot: Right center` |  |  |
| 18 | 98 | Hotspot > Bottom left | `Hotspot: Bottom left` |  |  |
| 19 | 99 | Hotspot > Bottom center | `Hotspot: Bottom center` |  |  |
| 20 | 100 | Hotspot > Bottom right | `Hotspot: Bottom right` |  |  |
| 21 | 101 | Hotspot > Custom | `Hotspot: <p0>, <p1>` |  | numeric expression “X”; numeric expression “Y” |
| 22 | 102 | Origin > Center | `Origin: Center` |  |  |
| 23 | 103 | Origin > Top left | `Origin: Top left` |  |  |
| 24 | 104 | Origin > Top center | `Origin: Top center` |  |  |
| 25 | 105 | Origin > Top right | `Origin: Top right` |  |  |
| 26 | 106 | Origin > Left center | `Origin: Left center` |  |  |
| 27 | 107 | Origin > Right center | `Origin: Right center` |  |  |
| 28 | 108 | Origin > Bottom left | `Origin: Bottom left` |  |  |
| 29 | 109 | Origin > Bottom center | `Origin: Bottom center` |  |  |
| 30 | 110 | Origin > Bottom right | `Origin: Bottom right` |  |  |
| 31 | 111 | Origin > Custom | `Origin: <p0>, <p1>` |  | numeric expression “X”; numeric expression “Y” |
| 32 | 112 | Offsets > Set source X offset | `Set X offset to: <p0>` |  | numeric expression “Enter an X offset value” |
| 33 | 113 | Offsets > Set source Y offset | `Set Y offset to: <p0>` |  | numeric expression “Enter a Y offset value” |
| 34 | 114 | Offsets > X offset multiplier | `Set X offfset multiplier to: <p0>` |  | numeric expression “Enter an offset multiplier (float - can be negative)” |
| 35 | 115 | Offsets > Y offset multiplier | `Set Y offfset multiplier to: <p0>` |  | numeric expression “Enter an offset multiplier (float - can be negative)” |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get X size | `SizeX(` |  |  |
| 1 | 81 | Get Y size | `SizeY(` |  |  |
| 2 | 82 | Get height multiplier | `HeightMultiplier(` |  |  |
| 3 | 83 | Get angle | `GetAngle(` |  |  |
| 4 | 84 | Get Hotspot X | `HotspotX(` |  |  |
| 5 | 85 | Get Hotspot Y | `HotSpotY(` |  |  |
| 6 | 86 | Get Origin X | `OriginX(` |  |  |
| 7 | 87 | Get Origin Y | `OriginY(` |  |  |
| 8 | 88 | Get source X offset | `OffsetX(` |  |  |
| 9 | 89 | Get source Y offset | `OffsetY(` |  |  |
| 10 | 90 | Get X offset multiplier | `OffsetXmultiplier(` |  |  |
| 11 | 91 | Get Y offset multiplier | `OffsetYmultiplier(` |  |  |
