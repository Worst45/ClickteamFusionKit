# Extension kchisc

- File: `kchisc.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Has player a hiscore? | `<p0> has a hiscore` | <p0> a un hi-score | (unreliable parameters) |
| 1 | -82 | Is visible ? | `Hiscore table <object> is visible` | Le tableau de hi-scores <object> est visible |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Ask for a player's name | `Ask <p0> name` | Demander le nom de <p0> | (unreliable parameters) |
| 1 | 81 | Visibility > Make object invisible | `Hide` | Cacher |  |
| 2 | 82 | Visibility > Make object reappear | `Show` | Montrer |  |
| 3 | 83 | Reset | `Reset` | Remise à zéro |  |
| 4 | 84 | Change one name | `Change name <p0> to <p1>` | Changer le nom <p0> en <p1> | (unreliable parameters) |
| 5 | 85 | Change one score | `Change score <p0> to <p1>` | Changer le score <p0> en <p1> | (unreliable parameters) |
| 6 | 86 | Position > Select position... | `Set position to <p0>` | Fixer la position à <p0> | (unreliable parameters) |
| 7 | 87 | Position > Set Horizontal Position | `Set horizontal position to <p0>` | Fixer la position horizontale à <p0> | (unreliable parameters) |
| 8 | 88 | Position > Set Vertical Position | `Set vertical position to <p0>` | Fixer la position verticale à <p0> | (unreliable parameters) |
| 9 | 89 | Insert a hiscore | `Insert hiscore <p0> and name <p1>` | Insérer hi-score <p0> et le nom <p1> | (unreliable parameters) |
| 10 | 90 | File > Set current file | `Set current file to <p0>` | Fixer fichier courant à <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Hiscore value | `Hiscore(` | Valeur d'un hi-score | (unreliable parameters) |
| 1 | 81 | Hiscore name | `Hiscore name$(` | Nom d'un hi-score | (unreliable parameters) |
| 2 | 82 | X Position of hiscore table | `Hiscore X pos(` | Position en X du tableau de hi-scores |  |
| 3 | 83 | Y Position of hiscore table | `Hiscore Y pos(` | Position en Y du tableau de hi-scores |  |
