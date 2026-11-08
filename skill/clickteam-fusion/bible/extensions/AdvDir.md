# Extension AdvDir

- File: `AdvDir.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Compare distance between two points | `The distance between <p0> and <p1> is lower or equal to <p2>` |  | position “First position”; position “Second position”; numeric expression “Value to compare with” |
| 1 | -82 | Compare direction between two points | `The direction between <p0> and <p1> is closer than <p3> to <p2>` |  | position “First position”; position “Second position”; numeric expression “Direction”; numeric expression “Offset value” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Set number of directions | `<object> : Set number of directions to <p0>` |  | numeric expression “Enter a direction value” |
| 1 | 81 | Get object distances and fixed values | `Find distance and fixed of <p0> to <p1>` |  | object “Object”; position “Position” |
| 2 | 82 | Add object to existing data | `Add distance and fixed of <p0> to <p1> to existing data` |  | object “Object” |
| 3 | 83 | Reset object data | `Reset object data` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get number of directions | `GetNumDir(` |  |  |
| 1 | 81 | Distance and direction between two points > Float values (decimals) > Direction between two points ( x1, y1, x2, y2 ) | `AdvDirection(` |  | number; number; number; number |
| 2 | 82 | Distance and direction between two points > Float values (decimals) > Distance between two points ( x1, y1, x2, y2 ) | `AdvDistance(` |  | number; number; number; number |
| 3 | 83 | Distance and direction between two points > Long values (no decimals) > Direction between two points ( x1, y1, x2, y2 ) | `LongDir(` |  | number; number; number; number |
| 4 | 84 | Distance and direction between two points > Long values (no decimals) > Distance between two points ( x1, y1, x2, y2 ) | `LongDist(` |  | number; number; number; number |
| 5 | 85 | Rotate ( dir, dirtrt, speed ) | `Rotate(` |  | number; number; number |
| 6 | 86 | Difference between two directions > Absolute (positive only) ( dir1, dir2 ) | `DirDiffAbs(` |  | number; number |
| 7 | 87 | Difference between two directions > Not absolute ( dir 1, dir2 ) | `DirDiff(` |  | number; number |
| 8 | 88 | Stored objects > Get fixed (0 = Closest object, 1 = Second closest, etc) | `GetFixedObj(` |  | number |
| 9 | 89 | Stored objects > Get distance | `GetDistObj(` |  | number |
| 10 | 90 | Get movement > Get X movement from a speed and a direction ( dir, speed ) | `XMovement(` |  | number; number |
| 11 | 91 | Get movement > Get Y movement from a speed and a direction ( dir, speed ) | `YMovement(` |  | number; number |
| 12 | 92 | Convert direction to a different base ( dir, newbase ) | `DirBase(` |  | number; number |
