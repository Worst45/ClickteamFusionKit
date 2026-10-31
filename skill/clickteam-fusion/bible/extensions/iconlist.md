# Extension iconlist

- Fichier : `iconlist.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Got focus? | `<objet> Has focus?` |  |  | — |  |
| 1 | -82 | Selection changed | `<objet> Selection changed` |  |  | — |  |
| 2 | -83 | Double click | `<objet> Double click` |  |  | — |  |
| 3 | -84 | Is enabled? | `<objet> Is highlighted?` |  |  | — |  |
| 4 | -85 | Is visible? | `<objet> Is visible?` |  |  | — |  |
| 5 | -86 | Dropdown opened | `<objet> Dropdown just opened` |  |  | — |  |
| 6 | -87 | Dropdown closed | `<objet> Dropdown just closed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Set current line | `Set line: <p0>` |  | expression numérique « Line number » | — |  |
| 1 | 81 | Add a line | `Add line: <p0> with image: <p1>` |  | expression chaîne « Line text » ; expression numérique « Line image number » | — |  |
| 2 | 82 | Insert line at | `Insert line with text: <p0> with image: <p1> after: <p2>` |  | expression chaîne « Line text » ; expression numérique « Line image number » ; expression numérique « Line to insert after » | — |  |
| 3 | 83 | Delete a line | `Delete line: <p0>` |  | expression numérique « Line number » | — |  |
| 4 | 84 | Edit line text | `Edit line text: <p1> with line text: <p0>` |  | expression chaîne « Line text » ; expression numérique « Line number to edit » | — |  |
| 5 | 85 | Edit line image | `Edit line image: <p1> with line image: <p0>` |  | expression numérique « Image number » ; expression numérique « Line number to edit » | — |  |
| 6 | 86 | Reset | `Reset` |  |  | — |  |
| 7 | 87 | Position > Set X | `Set X to: <p0>` |  | expression numérique « X Coordinate » | — |  |
| 8 | 88 | Position > Set Y | `Set Y to: <p0>` |  | expression numérique « Y Coordinate » | — |  |
| 9 | 89 | Size > Set width | `Set width to: <p0>` |  | expression numérique « Width » | — |  |
| 10 | 90 | Size > Set height | `Set height to: <p0>` |  | expression numérique « Height » | — |  |
| 11 | 91 | Control > Give focus | `Get focus` |  |  | — |  |
| 12 | 92 | Control > Lose focus | `Lose focus` |  |  | — |  |
| 13 | 93 | Control > Dehighlight | `Dehighlight` |  |  | — |  |
| 14 | 94 | Control > Highlight | `Highlight` |  |  | — |  |
| 15 | 95 | Visibility > Show | `Show control` |  |  | — |  |
| 16 | 96 | Visibility > Hide | `Hide control` |  |  | — |  |
| 17 | 97 | Images > Add associated icon | `Add icon to imagelist from file: <p0>` |  | expression chaîne « File path » | — |  |
| 18 | 98 | Control > Show dropdown | `Show dropdown part` |  |  | — |  |
| 19 | 99 | Control > Hide dropdown | `Hide dropdown part` |  |  | — |  |
| 20 | 100 | Images > Delete image | `Remove: <p0> from imagelist` |  | expression numérique « Image index number to remove » | — |  |
| 21 | 101 | Images > Clear all images | `Clear imagelist` |  |  | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Current line number | `get Line Number(` |  |  | — |  |
| 1 | 81 | Current line text | `get Line Text$(` |  | → chaîne | — |  |
| 2 | 82 | Current line image | `get Line Image(` |  |  | — |  |
| 3 | 83 | Get line text | `get Line$(` |  | nombre → chaîne | — |  |
| 4 | 84 | Number of lines | `get Number Lines(` |  |  | — |  |
| 8 | 88 | Get line image | `get Image Line(` |  | nombre | — |  |
| 9 | 89 | Images > Get number of images | `get Number Images(` |  |  | — |  |
| 11 | 91 | Images > Get width | `get Image Width(` |  |  | — |  |
| 12 | 92 | Images > Get height | `get Image Height(` |  |  | — |  |
