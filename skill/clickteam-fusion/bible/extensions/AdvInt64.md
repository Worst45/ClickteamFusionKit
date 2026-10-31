# Extension AdvInt64

- Fichier : `AdvInt64.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Unsigned > Variable A == Variable B | `<p0> == <p1> (Unsigned)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 1 | -82 | Unsigned > Variable A >= Variable B | `<p0> >= <p1> (Unsigned)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 2 | -83 | Unsigned > Variable A > Variable B | `<p0> > <p1> (Unsigned)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 3 | -84 | Unsigned > Variable A <= Variable B | `<p0> <= <p1> (Unsigned)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 4 | -85 | Unsigned > Variable A < Variable B | `<p0> < <p1> (Unsigned)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 5 | -86 | Signed > Variable A == Variable B | `<p0> == <p1> (Signed)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 6 | -87 | Signed > Variable A >= Variable B | `<p0> >= <p1> (Signed)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 7 | -88 | Signed > Variable A > Variable B | `<p0> > <p1> (Signed)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 8 | -89 | Signed > Variable A <= Variable B | `<p0> <= <p1> (Signed)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 9 | -90 | Signed > Variable A < Variable B | `<p0> < <p1> (Signed)` |  | expression chaîne « Variable A » ; expression chaîne « Variable B » | — |  |
| 10 | -91 | Unsigned > On Variable Loop | `<objet>: On Unsigned Variable Loop` |  |  | — |  |
| 11 | -92 | Signed > On Variable Loop | `<objet>: On Signed Variable Loop` |  |  | — |  |
| 12 | -93 | Unsigned Variable Exists | `<objet>: Unsigned Variable <p0> Exists` |  | expression chaîne « Variable Name » | — |  |
| 13 | -94 | Signed Variable Exists | `<objet>: Signed Variable <p0> Exists` |  | expression chaîne « Variable Name » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Unsigned > Set Variable | `Unsigned: Set <p0> to <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Set the Variable to » | — |  |
| 1 | 81 | Unsigned > Add to Variable | `Unsigned: Add <p1> to <p0>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Add to the Variable » | — |  |
| 2 | 82 | Unsigned > Subtract from Variable | `Unsigned: Subtract <p1> from <p0>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Subtract from the Variable » | — |  |
| 3 | 83 | Unsigned > Multiply Variable | `Unsigned: Multiply <p0> by <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Multiply the Variable by » | — |  |
| 4 | 84 | Unsigned > Divide Variable | `Unsigned: Divide <p0> by <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Divide the Variable by » | — |  |
| 5 | 85 | Unsigned > Raise Variable to Power | `Unsigned: Raise <p0> to the power of <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Raise the Variable to the Power of » | — |  |
| 6 | 86 | Unsigned > Perform Modulo on Variable | `Unsigned: Set <p0> to <p0> mod <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to perform the Modulo operator with the Variable » | — |  |
| 7 | 87 | Unsigned > Set Byte in Variable | `Unsigned: Set Byte <p1> in <p0> to <p2>` |  | expression chaîne « Name of Variable » ; expression numérique « Byte to Adjust (0-7) » ; expression numérique « Unsigned Byte Value (0-255) » | — |  |
| 8 | 88 | Unsigned > Delete Variable | `Unsigned: Delete <p0>` |  | expression chaîne « Name of Variable to Delete » | — |  |
| 9 | 89 | Unsigned > Delete All Variables | `Unsigned: Delete All Variables` |  |  | — |  |
| 10 | 90 | Signed > Set Variable | `Signed: Set <p0> to <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Set the Variable to » | — |  |
| 11 | 91 | Signed > Add to Variable | `Signed: Add <p1> to <p0>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Add to the Variable » | — |  |
| 12 | 92 | Signed > Subtract from Variable | `Signed: Subtract <p1> from <p0>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Subtract from the Variable » | — |  |
| 13 | 93 | Signed > Multiply Variable | `Signed: Multiply <p0> by <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Multiply the Variable by » | — |  |
| 14 | 94 | Signed > Divide Variable | `Signed: Divide <p0> by <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Divide the Variable by » | — |  |
| 15 | 95 | Signed > Raise Variable to Power | `Signed: Raise <p0> to the power of <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to Raise the Variable to the Power of » | — |  |
| 16 | 96 | Signed > Perform Modulo on Variable | `Signed: Set <p0> to <p0> mod <p1>` |  | expression chaîne « Name of Variable to Modify » ; expression chaîne « Value to perform the Modulo operator with the Variable » | — |  |
| 17 | 97 | Signed > Set Byte in Variable | `Signed: Set Byte <p1> in <p0> to <p2>` |  | expression chaîne « Name of Variable » ; expression numérique « Byte to Adjust (0-7) » ; expression numérique « Unsigned Byte Value (0-255) » | — |  |
| 18 | 98 | Signed > Delete Variable | `Signed: Delete <p0>` |  | expression chaîne « Name of Variable to Delete » | — |  |
| 19 | 99 | Signed > Delete All Variables | `Signed: Delete All Variables` |  |  | — |  |
| 20 | 100 | Loop Through Variables | `Loop Through Variables (Mode=<p0>)` |  | expression numérique « 0 = unsigned, 1 = signed, anything else = both » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Unsigned Variable | `GetUnsignedVar$(` |  | chaîne « Variable Name » → chaîne | — |  |
| 1 | 81 | Get Signed Variable | `GetSignedVar$(` |  | chaîne « Variable Name » → chaîne | — |  |
| 2 | 82 | Get Unsigned Variable Byte | `GetUnsignedVarByte(` |  | chaîne « Variable Name » ; nombre « Byte to Get (0-7) » | — |  |
| 3 | 83 | Get Signed Variable Byte | `GetSignedVarByte(` |  | chaîne « Variable Name » ; nombre « Byte to Get (0-7) » | — |  |
| 4 | 84 | Loop: Get Unsigned Variable Name | `GetUnsignedVarName$(` |  | → chaîne | — |  |
| 5 | 85 | Loop: Get Signed Variable Name | `GetSignedVarName$(` |  | → chaîne | — |  |
| 6 | 86 | Quick Expressions > Unsigned > A + B | `UAdd$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 7 | 87 | Quick Expressions > Unsigned > A - B | `USub$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 8 | 88 | Quick Expressions > Unsigned > A * B | `UMul$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 9 | 89 | Quick Expressions > Unsigned > A / B | `UDiv$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 10 | 90 | Quick Expressions > Unsigned > A ^ B | `UPow$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 11 | 91 | Quick Expressions > Unsigned > A % B | `UMod$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 12 | 92 | Quick Expressions > Signed > A + B | `SAdd$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 13 | 93 | Quick Expressions > Signed > A - B | `SSub$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 14 | 94 | Quick Expressions > Signed > A * B | `SMul$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 15 | 95 | Quick Expressions > Signed > A / B | `SDiv$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 16 | 96 | Quick Expressions > Signed > A ^ B | `SPow$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
| 17 | 97 | Quick Expressions > Signed > A % B | `SMod$(` |  | chaîne « A » ; chaîne « B » → chaîne | — |  |
