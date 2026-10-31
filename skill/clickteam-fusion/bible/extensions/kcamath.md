# Extension kcamath

- Fichier : `kcamath.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Distance between fixed object and another object | `<objet>: Distance between fixed object and <p0> is <p1>` |  | comparaison numérique « Distance between fixed object and another object » | — |  |
| 1 | -82 | Fixed Object is facing within N degrees of another object | `<objet>: Fixed object is facing <p0> within <p1> degrees.` |  | expression numérique « Fixed Object is facing within N degrees of another object » | — |  |
| 2 | -83 | Compare X of Fixed object | `<objet>: Fixed object X <p0>` |  | (paramètres non fiables) | — |  |
| 3 | -84 | Compare Y of Fixed object | `<objet>: Fixed object Y <p0>` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set decimal offset | `Set decimal offset to 10^<p0>` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Set fixed object | `Set fixed object to <p0>` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Factorial | `Fact(` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Absolute Value | `Abs(` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Raise Number to a Power | `Pow(` |  | nombre | — |  |
| 3 | 83 | Greater of Two Numbers | `Max(` |  | nombre | — |  |
| 4 | 84 | Lower of Two Numbers | `Min(` |  | nombre | — |  |
| 5 | 85 | Decimals output functions > Get decimal offset | `GetOffset(` |  |  | — |  |
| 6 | 86 | Decimals output functions > Trigonometric Functions > Tangent | `Tangent(` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Decimals output functions > Trigonometric Functions > Sine | `Sine(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Decimals output functions > Trigonometric Functions > Cosine | `Cosine(` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Decimals output functions > Trigonometric Functions > ArcTangent | `ArcTan(` |  | (paramètres non fiables) | — |  |
| 10 | 90 | Decimals output functions > Trigonometric Functions > ArcSine | `ArcSin(` |  | (paramètres non fiables) | — |  |
| 11 | 91 | Decimals output functions > Trigonometric Functions > ArcCosine | `ArcCos(` |  | (paramètres non fiables) | — |  |
| 12 | 92 | Decimals output functions > Square Root | `Sqrt(` |  | (paramètres non fiables) | — |  |
| 13 | 93 | Pre-Coded Formulas > Direction from 0,0 to x,y | `Direction(` |  | nombre | — |  |
| 14 | 94 | Pre-Coded Formulas > Direction from fixed object to x,y | `FixedDirection(` |  | nombre | — |  |
| 15 | 95 | Pre-Coded Formulas > Decimal output formulas > Distance from 0,0 to x,y | `Dist(` |  | nombre | — |  |
| 16 | 96 | Pre-Coded Formulas > Decimal output formulas > Distance from fixed object to x,y | `FixedDist(` |  | nombre | — |  |
| 17 | 97 | Pre-Coded Formulas > Decimal output formulas > Angle from 0,0 to x,y | `Angle(` |  | nombre | — |  |
| 18 | 98 | Pre-Coded Formulas > Decimal output formulas > Angle from fixed object to x,y | `FixedAngle(` |  | nombre | — |  |
| 19 | 99 | Get X of Fixed Object | `XFixed(` |  |  | — |  |
| 20 | 100 | Get Y of Fixed Object | `YFixed(` |  |  | — |  |
| 21 | 101 | Get Direction of Fixed Object | `DirFixed(` |  |  | — |  |
| 22 | 102 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Circle | `CircleArea(` |  | (paramètres non fiables) | — |  |
| 23 | 103 | Pre-Coded Formulas > Decimal output formulas > Geometry > Circumference of a Circle | `Circumference(` |  | (paramètres non fiables) | — |  |
| 24 | 104 | Pre-Coded Formulas > Decimal output formulas > Geometry > Length of arc | `ArcLength(` |  | nombre | — |  |
| 25 | 105 | Pre-Coded Formulas > Decimal output formulas > Geometry > Interior angle of an N-sided polygon | `PolygonAngle(` |  | (paramètres non fiables) | — |  |
| 26 | 106 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Triangle | `TriangleArea(` |  | nombre | — |  |
| 27 | 107 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cone | `ConeVolume(` |  |  | — |  |
| 28 | 108 | Pre-Coded Formulas > Decimal output formulas > Rotation > Set Angle value | `SetAngle(` |  | (paramètres non fiables) | — |  |
| 29 | 109 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from 0,0 to x,y > New X | `NewAngleX(` |  | nombre | — |  |
| 30 | 110 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from 0,0 to x,y > New Y | `NewAngleY(` |  | nombre | — |  |
| 31 | 111 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from fixed object to x,y > New X | `NewAngleFixedX(` |  | nombre | — |  |
| 32 | 112 | Pre-Coded Formulas > Decimal output formulas > Rotation > New angle using distance from fixed object to x,y > New Y | `NewAngleFixedY(` |  | nombre | — |  |
| 33 | 113 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from 0,0 to x,y > New X | `MAngleX(` |  | nombre | — |  |
| 34 | 114 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from 0,0 to x,y > New Y | `MAngleY(` |  | nombre | — |  |
| 35 | 115 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from fixed object to x,y > New X | `MAngleFixedX(` |  | nombre | — |  |
| 36 | 116 | Pre-Coded Formulas > Decimal output formulas > Rotation > Modify angle using distance from fixed object to x,y > New Y | `MAngleFixedY(` |  | nombre | — |  |
| 37 | 117 | Decimals output functions > Nth Root | `Root(` |  | nombre | — |  |
| 38 | 118 | Decimals output functions > Logarithm | `Log(` |  | nombre | — |  |
| 39 | 119 | Decimals output functions > Antilogarithm (Exp) | `AntiLog(` |  | (paramètres non fiables) | — |  |
| 40 | 120 | Decimals output functions > Trigonometric Functions > Secant | `Secant(` |  | (paramètres non fiables) | — |  |
| 41 | 121 | Decimals output functions > Trigonometric Functions > Cosecant | `Cosecant(` |  | (paramètres non fiables) | — |  |
| 42 | 122 | Decimals output functions > Trigonometric Functions > Cotangent | `Cotangent(` |  | (paramètres non fiables) | — |  |
| 43 | 123 | Decimals output functions > Trigonometric Functions > Hyperbolic cosine | `SineH(` |  | (paramètres non fiables) | — |  |
| 44 | 124 | Decimals output functions > Trigonometric Functions > Hyperbolic tangent | `CosineH(` |  | (paramètres non fiables) | — |  |
| 45 | 125 | Decimals output functions > Trigonometric Functions > Hyperbolic sine | `TangentH(` |  | (paramètres non fiables) | — |  |
| 46 | 126 | Primes > Check for prime | `IsPrime(` |  | (paramètres non fiables) | — |  |
| 47 | 127 | Primes > Next prime | `NextPrime(` |  | (paramètres non fiables) | — |  |
| 48 | 128 | Primes > Get nth prime | `NthPrime(` |  | (paramètres non fiables) | — |  |
| 49 | 129 | Primes > Number of primes between | `NumberPrimes(` |  | nombre | — |  |
| 50 | 130 | Decimals output functions > Trigonometric Functions > Pi | `Pi(` |  |  | — |  |
| 51 | 131 | Conversions > Directions > Direction -> Angle | `DirToAngle(` |  | (paramètres non fiables) | — |  |
| 52 | 132 | Conversions > Directions > Angle -> Direction | `AngleToDir(` |  | (paramètres non fiables) | — |  |
| 53 | 133 | Conversions > Directions > Radians -> Angle | `RadiansToAngle(` |  | (paramètres non fiables) | — |  |
| 54 | 134 | Conversions > Directions > Angle -> Radians | `AngleToRadians(` |  | (paramètres non fiables) | — |  |
| 55 | 135 | Conversions > Directions > Radians -> Direction | `RadiansToDir(` |  | (paramètres non fiables) | — |  |
| 56 | 136 | Conversions > Directions > Direction -> Radians | `DirToRadians(` |  | (paramètres non fiables) | — |  |
| 57 | 137 | Lowest Common Multiple | `LowestCommonMultiple(` |  | nombre | — |  |
| 58 | 138 | Maximum Divisor | `MaximumCommonDivisor(` |  | nombre | — |  |
| 59 | 139 | Decimals output functions > Co-Logarithm | `CoLog(` |  | nombre | — |  |
| 60 | 140 | Conversions > Weight > Pounds -> Kilograms | `KgToPounds(` |  | (paramètres non fiables) | — |  |
| 61 | 141 | Conversions > Weight > Kilograms -> Pounds | `PoundsToKg(` |  | (paramètres non fiables) | — |  |
| 62 | 142 | Conversions > Distance > Centimeter -> Inches | `CmToInches(` |  | (paramètres non fiables) | — |  |
| 63 | 143 | Conversions > Distance > Inches -> Centimeter | `InchesToCm(` |  | (paramètres non fiables) | — |  |
| 64 | 144 | Multiplicitive Inverse | `InverseM(` |  | (paramètres non fiables) | — |  |
| 65 | 145 | Conversions > Distance > Centimeter -> Feet | `CmToFeet(` |  | (paramètres non fiables) | — |  |
| 66 | 146 | Conversions > Distance > Feet -> Centimeter | `FeetToCm(` |  | (paramètres non fiables) | — |  |
| 67 | 147 | Conversions > Distance > Centimeter -> Yard | `CmToYards(` |  | (paramètres non fiables) | — |  |
| 68 | 148 | Conversions > Distance > Yard -> Centimeter | `YardsToCm(` |  | (paramètres non fiables) | — |  |
| 69 | 149 | Conversions > Distance > Kilometer -> Miles | `KmToMiles(` |  | (paramètres non fiables) | — |  |
| 70 | 150 | Conversions > Distance > Miles -> Kilometer | `MilesToKm(` |  | (paramètres non fiables) | — |  |
| 71 | 151 | Conversions > Temperature > Celsius -> Fahrenheit | `CelsiusToF(` |  | (paramètres non fiables) | — |  |
| 72 | 152 | Conversions > Temperature > Fahrenheit -> Celsius | `FToCelsius(` |  | (paramètres non fiables) | — |  |
| 73 | 153 | Conversions > Temperature > Kelvin -> Celsius | `KelvinToCelsius(` |  | (paramètres non fiables) | — |  |
| 74 | 154 | Conversions > Temperature > Celsius -> Kelvin | `CelsiusToKelvin(` |  | (paramètres non fiables) | — |  |
| 75 | 155 | Conversions > Temperature > Kelvin -> Fahrenheit | `KelvinToF(` |  | (paramètres non fiables) | — |  |
| 76 | 156 | Conversions > Temperature > Fahrenheit -> Kelvin | `FToKelvin(` |  | (paramètres non fiables) | — |  |
| 77 | 157 | Pre-Coded Formulas > Decimal output formulas > Geometry > Sum of internal angles | `SumAngles(` |  | (paramètres non fiables) | — |  |
| 78 | 158 | Pre-Coded Formulas > Decimal output formulas > Geometry > External angle of a N-sided polygon | `ExtAngles(` |  | (paramètres non fiables) | — |  |
| 79 | 159 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Rectangle | `RectangleArea(` |  | nombre | — |  |
| 80 | 160 | Pre-Coded Formulas > Decimal output formulas > Geometry > Area of... > Hexagon | `HexagonArea(` |  | (paramètres non fiables) | — |  |
| 81 | 161 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cube | `CubeVolume(` |  | (paramètres non fiables) | — |  |
| 82 | 162 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Sphere | `SphereVolume(` |  | (paramètres non fiables) | — |  |
| 83 | 163 | Pre-Coded Formulas > Decimal output formulas > Geometry > Volume of... > Cilinder | `CilinderVolume(` |  | nombre | — |  |
