# Extension StaticText

- Fichier : `StaticText.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Texte Statique »
- Usage dans le corpus : 92 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Click > Clicked with left button? | `<objet>: Click with left button` | <objet>: Clic avec le bouton gauche |  | 2 (2 proj.) |  |
| 1 | -82 | Click > Clicked with right button? | `<objet>: Click with right button` | <objet>: Clic avec le bouton droit |  | — |  |
| 2 | -83 | Click > Double click? | `<objet>: Double click` | <objet>: Double clic |  | — |  |
| 3 | -84 | Window > Is object visible? | `<objet>: Is object visible?` | <objet>: L'objet est-il visible? |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Window > Hide | `<objet>: Hide` | <objet>: Cacher |  | — |  |
| 1 | 81 | Window > Show | `<objet>: Show` | <objet>: Montrer |  | 3 (3 proj.) |  |
| 2 | 82 | Window > Set width | `<objet>: Set width to <p0>` | <objet>: Fixer la taille à <p0> | expression numérique « Enter new width » | — |  |
| 3 | 83 | Window > Set height | `<objet>: Set height to <p0>` | <objet>: Fixer la hauteur à <p0> | expression numérique « Enter new height » | — |  |
| 4 | 84 | Set text | `<objet>: Set text to <p0>` | <objet>: Fixer le texte à <p0> | expression chaîne « Enter new text » | 50 (13 proj.) |  |
| 5 | 85 | Colors > Set text color | `<objet>: Set text color to <p0>` | <objet>: Fixer la couleur de texte à <p0> | couleur « Set text color » | — |  |
| 6 | 86 | Colors > Set background color | `<objet>: Set background color to <p0>` | <objet>: Fixer la couleur de fond à <p0> | couleur « Set background color » | — |  |
| -79 | 1 | ? | ? |  |  | 12 (5 proj.) |  |
| -56 | 24 | ? | ? |  |  | 18 (5 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Size > Get width | `Width(` | Largeur |  | — |  |
| 1 | 81 | Size > Get height | `Height(` | Hauteur |  | — |  |
| 2 | 82 | Get text | `Text$(` | Récupérer le texte | → chaîne | 5 (3 proj.) |  |
| -64 | 16 | ? | ? |  |  | 2 (2 proj.) |  |
