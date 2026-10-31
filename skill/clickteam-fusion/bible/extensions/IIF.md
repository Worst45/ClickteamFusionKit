# Extension IIF

- Fichier : `IIF.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Return Types... > Integers > Compare Integers(n,operator,n,true,false) | `CompareIntegers(` |  | nombre ; chaîne ; nombre ; nombre ; nombre | — |  |
| 1 | 81 | Return Types... > Integers > Compare Strings(a,operator,a,true,false) | `CompareStrings(` |  | chaîne ; chaîne ; chaîne ; nombre ; nombre | — |  |
| 2 | 82 | Return Types... > Integers > Compare Floats(n.n,operator,n.n,true,false) | `CompareFloats(` |  | nombre ; chaîne ; nombre ; nombre ; nombre | — |  |
| 3 | 83 | Return Types... > Strings > Compare Integers$(n,operator,n,true,false) | `CompareIntegers$(` |  | nombre ; chaîne ; nombre ; chaîne ; chaîne → chaîne | — |  |
| 4 | 84 | Return Types... > Strings > Compare Strings$(a,operator,a,true,false) | `CompareStrings$(` |  | chaîne ; chaîne ; chaîne ; chaîne ; chaîne → chaîne | — |  |
| 5 | 85 | Return Types... > Strings > Compare Floats$(n.n,operator,n.n,true,false) | `CompareFloats$(` |  | nombre ; chaîne ; nombre ; chaîne ; chaîne → chaîne | — |  |
| 6 | 86 | Return Types... > Floats > Compare IntegersF(n,operator,n,true,false) | `CompareIntegersF(` |  | nombre ; chaîne ; nombre ; nombre ; nombre | — |  |
| 7 | 87 | Return Types... > Floats > Compare StringsF(a,operator,a,true,false) | `CompareStringsF(` |  | chaîne ; chaîne ; chaîne ; nombre ; nombre | — |  |
| 8 | 88 | Return Types... > Floats > Compare FloatsF(n.n,operator,n.n,true,false) | `CompareFloatsF(` |  | nombre ; chaîne ; nombre ; nombre ; nombre | — |  |
| 9 | 89 | Return Types... > Integers > Compare Bool(b,true,false) | `CompareBool(` |  | nombre ; nombre ; nombre | — |  |
| 10 | 90 | Return Types... > Strings > Compare Bool$(b,true,false) | `CompareBool$(` |  | nombre ; chaîne ; chaîne → chaîne | — |  |
| 11 | 91 | Return Types... > Floats > Compare BoolF(b,true,false) | `CompareBoolF(` |  | nombre ; nombre ; nombre | — |  |
| 12 | 92 | Return Types... > Bool > Compare IntegersB(n,operator,n) | `CompareIntegersB(` |  | nombre ; chaîne ; nombre | — |  |
| 13 | 93 | Return Types... > Bool > Compare StringsB(a,operator,a) | `CompareStringsB(` |  | chaîne ; chaîne ; chaîne | — |  |
| 14 | 94 | Return Types... > Bool > Compare FloatsB(n.n,operator,n.n) | `CompareFloatsB(` |  | nombre ; chaîne ; nombre | — |  |
| 15 | 95 | Result of Last Comparison | `LastCompare(` |  |  | — |  |
