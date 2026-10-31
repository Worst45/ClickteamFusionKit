# Extension XNAEdit

- Fichier : `XNAEdit.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is object visible? | `<objet> is visible` |  |  | — |  |
| 1 | -82 | Is object enabled? | `<objet> is enabled` |  |  | — |  |
| 2 | -83 | Has the text been modified? | `<objet>: The text has been modified` |  |  | — |  |
| 3 | -84 | Has the object focus? | `<objet> has focus` |  |  | — |  |
| 4 | -85 | Keyboard has just been closed | `<objet>: keyboard has just been closed` |  |  | — |  |
| 5 | -86 | Editing has been cancelled | `<objet>: editing has been cancelled` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Hide | `Hide` |  |  | — |  |
| 1 | 81 | Window > Show | `Show` |  |  | — |  |
| 2 | 82 | Window > Set width | `Set width to <p0>` |  | expression numérique « Enter new width » | — |  |
| 3 | 83 | Window > Set height | `Set height to <p0>` |  | expression numérique « Enter new height » | — |  |
| 4 | 84 | Text > Set text | `Set text to <p0>` |  | expression chaîne « Enter new text » | — |  |
| 5 | 85 | Colors > Set text color | `Set text color to <p0>` |  | couleur « Set text color » | — |  |
| 6 | 86 | Colors > Set background color | `Set background color to <p0>` |  | couleur « Set background color » | — |  |
| 7 | 87 | Text > Set title | `Set title to <p0>` |  | expression chaîne « Enter the new title » | — |  |
| 8 | 88 | Text > Set comment | `Set comment to <p0>` |  | expression chaîne « Enter the new comment » | — |  |
| 9 | 89 | Open keyboard | `Open keyboard` |  |  | — |  |
| 10 | 90 | Window > Set enabled / disabled | `Set enabled to <p0>` |  | expression numérique « Enter 0 to disable, 1 to enable » | — |  |
| 11 | 91 | Text > Set modified flag | `Set modified flag to <p0>` |  | expression numérique « Enter 0 or 1 » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get width | `Width(` |  |  | — |  |
| 1 | 81 | Size > Get height | `Height(` |  |  | — |  |
| 2 | 82 | Get text | `Text$(` |  | → chaîne | — |  |
