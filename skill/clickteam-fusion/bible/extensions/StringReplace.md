# Extension StringReplace

- Fichier : `StringReplace.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set case sensitivity and match limit | `Case senstive = <p0>, Max matches = <p1>` |  | expression numérique « Case sensitive? (0=No, 1=Yes) » ; expression numérique « Maximum number of matches (negative = infinite) » | — |  |
| 1 | 81 | Add to Auto replace... > Add string to replace with string | `Add pattern: <p0> gets replaced by <p1>` |  | expression chaîne « String to replace » ; expression chaîne « String to replace with » | — |  |
| 2 | 82 | Add to Auto replace... > Add string to replace with macro | `Add pattern: <p0> gets replaced by <p1> (as a macro)` |  | expression chaîne « String to replace » ; expression chaîne « String to replace with » | — |  |
| 3 | 83 | Add to Auto replace... > Add string to replace with global string | `Add pattern: <p0> gets replaced by Global String <p1>` |  | expression chaîne « String to replace » ; expression numérique « Global String number » | — |  |
| 4 | 84 | Add to Auto replace... > Add string to replace with global value | `Add pattern: <p0> gets replaced by Global Value <p1>` |  | expression chaîne « String to replace » ; expression numérique « Global Value number » | — |  |
| 5 | 85 | Add to Auto replace... > Add string to replace with array reference | `Add pattern: <p0> gets replaced by <p1> element (<p2>,<p3>,<p4>)` |  | expression chaîne « String to replace » ; expression chaîne « Array object name » ; expression numérique « X Position » ; expression numérique « Y Position » ; expression numérique « Z Position » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Automatic Replace | `ReplaceAuto$(` |  | chaîne « source » → chaîne | — |  |
| 1 | 81 | Replace Substring | `ReplaceSubstring$(` |  | chaîne « source » ; chaîne « string to find » ; chaîne « string to replace with » → chaîne | — |  |
