# Extension IIF

- File: `IIF.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Return Types... > Integers > Compare Integers(n,operator,n,true,false) | `CompareIntegers(` |  | number; string; number; number; number | — |  |
| 1 | 81 | Return Types... > Integers > Compare Strings(a,operator,a,true,false) | `CompareStrings(` |  | string; string; string; number; number | — |  |
| 2 | 82 | Return Types... > Integers > Compare Floats(n.n,operator,n.n,true,false) | `CompareFloats(` |  | number; string; number; number; number | — |  |
| 3 | 83 | Return Types... > Strings > Compare Integers$(n,operator,n,true,false) | `CompareIntegers$(` |  | number; string; number; string; string → string | — |  |
| 4 | 84 | Return Types... > Strings > Compare Strings$(a,operator,a,true,false) | `CompareStrings$(` |  | string; string; string; string; string → string | — |  |
| 5 | 85 | Return Types... > Strings > Compare Floats$(n.n,operator,n.n,true,false) | `CompareFloats$(` |  | number; string; number; string; string → string | — |  |
| 6 | 86 | Return Types... > Floats > Compare IntegersF(n,operator,n,true,false) | `CompareIntegersF(` |  | number; string; number; number; number | — |  |
| 7 | 87 | Return Types... > Floats > Compare StringsF(a,operator,a,true,false) | `CompareStringsF(` |  | string; string; string; number; number | — |  |
| 8 | 88 | Return Types... > Floats > Compare FloatsF(n.n,operator,n.n,true,false) | `CompareFloatsF(` |  | number; string; number; number; number | — |  |
| 9 | 89 | Return Types... > Integers > Compare Bool(b,true,false) | `CompareBool(` |  | number; number; number | — |  |
| 10 | 90 | Return Types... > Strings > Compare Bool$(b,true,false) | `CompareBool$(` |  | number; string; string → string | — |  |
| 11 | 91 | Return Types... > Floats > Compare BoolF(b,true,false) | `CompareBoolF(` |  | number; number; number | — |  |
| 12 | 92 | Return Types... > Bool > Compare IntegersB(n,operator,n) | `CompareIntegersB(` |  | number; string; number | — |  |
| 13 | 93 | Return Types... > Bool > Compare StringsB(a,operator,a) | `CompareStringsB(` |  | string; string; string | — |  |
| 14 | 94 | Return Types... > Bool > Compare FloatsB(n.n,operator,n.n) | `CompareFloatsB(` |  | number; string; number | — |  |
| 15 | 95 | Result of Last Comparison | `LastCompare(` |  |  | — |  |
