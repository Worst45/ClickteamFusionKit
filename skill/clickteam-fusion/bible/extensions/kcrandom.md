# Extension kcrandom

- Fichier : `kcrandom.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Random Event | `<p0> percent of the time.` |  | (paramètres non fiables) | — |  |
| 1 | -82 | Random Event Group | `<objet>: A <p0> percent chance in group.` |  | (paramètres non fiables) | — |  |
| 2 | -83 | Custom Random Event Group | `<objet>: A <p0> percent chance in group <p1>.` |  | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New Random Seed | `New Randomizer Seed.` |  |  | — |  |
| 1 | 81 | Set Random Seed | `Set Randomizer Seed to <p0>.` |  | (paramètres non fiables) | — |  |
| 2 | 82 | Activate Random Event Group | `Activate Random Event Group.` |  | (paramètres non fiables) | — |  |
| 3 | 83 | Activate Custom Random Event Group | `Activate Random Event Group <p0>.` |  | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Random Number | `RandomNum(` |  | (paramètres non fiables) | — |  |
| 1 | 81 | Random Number (range) | `RandomRange(` |  | nombre | — |  |
| 2 | 82 | Get Last Seed | `GetSeed(` |  |  | — |  |
| 3 | 83 | Random Letter | `RandomLetter$(` |  |  | — |  |
| 4 | 84 | Random Alphanumeric Character | `RandomAlphanum$(` |  |  | — |  |
| 5 | 85 | Random Character | `RandomCharacter$(` |  |  | — |  |
| 6 | 86 | Character/String functions > Ascii to Char | `AsciiToChar$(` |  | (paramètres non fiables) | — |  |
| 7 | 87 | Character/String functions > Char to Ascii | `CharToAscii(` |  | (paramètres non fiables) | — |  |
| 8 | 88 | Character/String functions > To Uppercase | `toUpper$(` |  | (paramètres non fiables) | — |  |
| 9 | 89 | Character/String functions > To Lowercase | `toLower$(` |  | (paramètres non fiables) | — |  |
