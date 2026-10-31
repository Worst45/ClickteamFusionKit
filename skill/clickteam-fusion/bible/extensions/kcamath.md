# Extension kcamath

- File: `kcamath.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Distance between fixed object and another object | `<object>: Distance between fixed object and <p0> is <p1>` |  | numeric comparison “Distance between fixed object and another object” | — |  |
| 1 | -82 | Fixed Object is facing within N degrees of another object | `<object>: Fixed object is facing <p0> within <p1> degrees.` |  | numeric expression “Fixed Object is facing within N degrees of another object” | — |  |
| 2 | -83 | Compare X of Fixed object | `<object>: Fixed object X <p0>` |  | (unreliable parameters) | — |  |
| 3 | -84 | Compare Y of Fixed object | `<object>: Fixed object Y <p0>` |  | (unreliable parameters) | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set decimal offset | `Set decimal offset to 10^<p0>` |  | (unreliable parameters) | — |  |
| 1 | 81 | Set fixed object | `Set fixed object to <p0>` |  | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Factorial | `Fact(` |  | (unreliable parameters) | — |  |
| 1 | 81 | Absolute Value | `Abs(` |  | (unreliable parameters) | — |  |
| 2 | 82 | Raise Number to a Power | `Pow(` |  | number | — |  |
| 3 | 83 | Greater of Two Numbers | `Max(` |  | number | — |  |
| 4 | 84 | Lower of Two Numbers | `Min(` |  | number | — |  |
| 5 | 85 | Decimals output functions > Get decimal offset | `GetOffset(` |  |  | — |  |
| 6 | 86 | Decimals output functions > Trigonometric Functions > Tangent | `Tangent(` |  | (unreliable parameters) | — |  |
| 7 | 87 | Decimals output functions > Trigonometric Functions > Sine | `Sine(` |  | (unreliable parameters) | — |  |
| 8 | 88 | Decimals output functions > Trigonometric Functions > Cosine | `Cosine(` |  | (unreliable parameters) | — |  |
| 9 | 89 | Decimals output functions > Trigonometric Functions > ArcTangent | `ArcTan(` |  | (unreliable parameters) | — |  |
| 10 | 90 | Decimals output functions > Trigonometric Functions > ArcSine | `ArcSin(` |  | (unreliable parameters) | — |  |
| 11 | 91 | Decimals output functions > Trigonometric Functions > ArcCosine | `ArcCos(` |  | (unreliable parameters) | — |  |
| 12 | 92 | Decimals output functions > Square Root | `Sqrt(` |  | (unreliable parameters) | — |  |
| 13 | 93 | Pre-Coded Formulas > Direction from 0,0 to x,y | `Direction(` |  | number | — |  |
| 14 | 94 | Pre-Coded Formulas > Direction from fixed object to x,y | `FixedDirection(` |  | number | — |  |
| 15 | 95 | Pre-Coded Formulas > Decimal output formulas > Distance from 0,0 to x,y | `Dist(` |  | number | — |  |
| 16 | 96 | Pre-Coded Formulas > Decimal output formulas > Distance from fixed object to x,y | `FixedDist(` |  | number | — |  |
| 17 | 97 | Pre-Coded Formulas > Decimal output formulas > Angle from 0,0 to x,y | `Angle(` |  | number | — |  |
| 18 | 98 | Pre-Coded Formulas > Decimal output formulas > Angle from fixed object to x,y | `FixedAngle(` |  | number | — |  |
| 19 | 99 | Get X of Fixed Object | `XFixed(` |  |  | — |  |
| 20 | 100 | Get Y of Fixed Object | `YFixed(` |  |  | — |  |
| 21 | 101 | Get Direction of Fixed Object | `DirFixed(` |  |  | — |  |
| 22 | 102 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Circle | `CircleArea(` |  | (unreliable parameters) | — |  |
| 23 | 103 | Pre-Coded Formulas > Decimal output formulas > Geometry > Circumference of a Circle | `Circumference(` |  | (unreliable parameters) | — |  |
| 24 | 104 | Pre-Coded Formulas > Decimal output formulas > Geometry > Length of arc | `ArcLength(` |  | number | — |  |
| 25 | 105 | Pre-Coded Formulas > Decimal output formulas > Geometry > Interior angle of an N-sided polygon | `PolygonAngle(` |  | (unreliable parameters) | — |  |
| 26 | 106 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Triangle | `TriangleArea(` |  | number | — |  |
| 27 | 107 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cone | `ConeVolume(` |  |  | — |  |
| 28 | 108 | Pre-Coded Formulas > Decimal output formulas > Rotation > Set Angle value | `SetAngle(` |  | (unreliable parameters) | — |  |
| 29 | 109 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from 0,0 to x,y > New X | `NewAngleX(` |  | number | — |  |
| 30 | 110 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from 0,0 to x,y > New Y | `NewAngleY(` |  | number | — |  |
| 31 | 111 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from fixed object to x,y > New X | `NewAngleFixedX(` |  | number | — |  |
| 32 | 112 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from fixed object to x,y > New Y | `NewAngleFixedY(` |  | number | — |  |
| 33 | 113 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from 0,0 to x,y > New X | `MAngleX(` |  | number | — |  |
| 34 | 114 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from 0,0 to x,y > New Y | `MAngleY(` |  | number | — |  |
| 35 | 115 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from fixed object to x,y > New X | `MAngleFixedX(` |  | number | — |  |
| 36 | 116 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from fixed object to x,y > New Y | `MAngleFixedY(` |  | number | — |  |
| 37 | 117 | Decimals output functions > Nth Root | `Root(` |  | number | — |  |
| 38 | 118 | Decimals output functions > Logarithm | `Log(` |  | number | — |  |
| 39 | 119 | Decimals output functions > Antilogarithm (Exp) | `AntiLog(` |  | (unreliable parameters) | — |  |
| 40 | 120 | Decimals output functions > Trigonometric Functions > Secant | `Secant(` |  | (unreliable parameters) | — |  |
| 41 | 121 | Decimals output functions > Trigonometric Functions > Cosecant | `Cosecant(` |  | (unreliable parameters) | — |  |
| 42 | 122 | Decimals output functions > Trigonometric Functions > Cotangent | `Cotangent(` |  | (unreliable parameters) | — |  |
| 43 | 123 | Decimals output functions > Trigonometric Functions > Hyperbolic cosine | `SineH(` |  | (unreliable parameters) | — |  |
| 44 | 124 | Decimals output functions > Trigonometric Functions > Hyperbolic tangent | `CosineH(` |  | (unreliable parameters) | — |  |
| 45 | 125 | Decimals output functions > Trigonometric Functions > Hyperbolic sine | `TangentH(` |  | (unreliable parameters) | — |  |
| 46 | 126 | Primes > Check for prime | `IsPrime(` |  | (unreliable parameters) | — |  |
| 47 | 127 | Primes > Next prime | `NextPrime(` |  | (unreliable parameters) | — |  |
| 48 | 128 | Primes > Get nth prime | `NthPrime(` |  | (unreliable parameters) | — |  |
| 49 | 129 | Primes > Number of primes between | `NumberPrimes(` |  | number | — |  |
| 50 | 130 | Decimals output functions > Trigonometric Functions > Pi | `Pi(` |  |  | — |  |
| 51 | 131 | Conversions > Directions > Direction -> Angle | `DirToAngle(` |  | (unreliable parameters) | — |  |
| 52 | 132 | Conversions > Directions > Angle -> Direction | `AngleToDir(` |  | (unreliable parameters) | — |  |
| 53 | 133 | Conversions > Directions > Radians -> Angle | `RadiansToAngle(` |  | (unreliable parameters) | — |  |
| 54 | 134 | Conversions > Directions > Angle -> Radians | `AngleToRadians(` |  | (unreliable parameters) | — |  |
| 55 | 135 | Conversions > Directions > Radians -> Direction | `RadiansToDir(` |  | (unreliable parameters) | — |  |
| 56 | 136 | Conversions > Directions > Direction -> Radians | `DirToRadians(` |  | (unreliable parameters) | — |  |
| 57 | 137 | Lowest Common Multiple | `LowestCommonMultiple(` |  | number | — |  |
| 58 | 138 | Maximum Divisor | `MaximumCommonDivisor(` |  | number | — |  |
| 59 | 139 | Decimals output functions > Co-Logarithm | `CoLog(` |  | number | — |  |
| 60 | 140 | Conversions > Weight > Pounds -> Kilograms | `KgToPounds(` |  | (unreliable parameters) | — |  |
| 61 | 141 | Conversions > Weight > Kilograms -> Pounds | `PoundsToKg(` |  | (unreliable parameters) | — |  |
| 62 | 142 | Conversions > Distance > Centimeter -> Inches | `CmToInches(` |  | (unreliable parameters) | — |  |
| 63 | 143 | Conversions > Distance > Inches -> Centimeter | `InchesToCm(` |  | (unreliable parameters) | — |  |
| 64 | 144 | Multiplicitive Inverse | `InverseM(` |  | (unreliable parameters) | — |  |
| 65 | 145 | Conversions > Distance > Centimeter -> Feet | `CmToFeet(` |  | (unreliable parameters) | — |  |
| 66 | 146 | Conversions > Distance > Feet -> Centimeter | `FeetToCm(` |  | (unreliable parameters) | — |  |
| 67 | 147 | Conversions > Distance > Centimeter -> Yard | `CmToYards(` |  | (unreliable parameters) | — |  |
| 68 | 148 | Conversions > Distance > Yard -> Centimeter | `YardsToCm(` |  | (unreliable parameters) | — |  |
| 69 | 149 | Conversions > Distance > Kilometer -> Miles | `KmToMiles(` |  | (unreliable parameters) | — |  |
| 70 | 150 | Conversions > Distance > Miles -> Kilometer | `MilesToKm(` |  | (unreliable parameters) | — |  |
| 71 | 151 | Conversions > Temperature > Celsius -> Fahrenheit | `CelsiusToF(` |  | (unreliable parameters) | — |  |
| 72 | 152 | Conversions > Temperature > Fahrenheit -> Celsius | `FToCelsius(` |  | (unreliable parameters) | — |  |
| 73 | 153 | Conversions > Temperature > Kelvin -> Celsius | `KelvinToCelsius(` |  | (unreliable parameters) | — |  |
| 74 | 154 | Conversions > Temperature > Celsius -> Kelvin | `CelsiusToKelvin(` |  | (unreliable parameters) | — |  |
| 75 | 155 | Conversions > Temperature > Kelvin -> Fahrenheit | `KelvinToF(` |  | (unreliable parameters) | — |  |
| 76 | 156 | Conversions > Temperature > Fahrenheit -> Kelvin | `FToKelvin(` |  | (unreliable parameters) | — |  |
| 77 | 157 | Pre-Coded Formulas > Decimal output formulas > Geometry > Sum of internal angles | `SumAngles(` |  | (unreliable parameters) | — |  |
| 78 | 158 | Pre-Coded Formulas > Decimal output formulas > Geometry > External angle of a N-sided polygon | `ExtAngles(` |  | (unreliable parameters) | — |  |
| 79 | 159 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Rectangle | `RectangleArea(` |  | number | — |  |
| 80 | 160 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Hexagon | `HexagonArea(` |  | (unreliable parameters) | — |  |
| 81 | 161 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cube | `CubeVolume(` |  | (unreliable parameters) | — |  |
| 82 | 162 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Sphere | `SphereVolume(` |  | (unreliable parameters) | — |  |
| 83 | 163 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cilinder | `CilinderVolume(` |  | number | — |  |
