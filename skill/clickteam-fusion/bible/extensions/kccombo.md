# Extension kccombo

- Fichier : `kccombo.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Combo Box », « Boîte Combo »
- Usage dans le corpus : 137 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is visible ? | `<objet>: Visible` | <objet>: Visible |  | — |  |
| 1 | -82 | Is enabled ? | `<objet>: Enabled` | <objet>: Activé |  | — |  |
| 2 | -83 | Double clicked ? | `<objet>: Double clicked` | <objet>: Double clic |  | — |  |
| 3 | -84 | Selection changed ? | `<objet>: Selection changed` | <objet>: Sélection modifiée |  | 20 (10 proj.) | `Combo Box: Event ID -84, 0 Parameters` |
| 4 | -85 | Has focus ? | `<objet>: Has Focus` | <objet>: A le focus |  | 1 (1 proj.) | `Combo Box: Event ID -85, 0 Parameters` |
| 5 | -86 | Is list dropped ? | `<objet>: List dropped` | <objet>: Liste ouverte |  | 5 (2 proj.) | `Combo Box: Event ID -86, 0 Parameters` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Files > Load list file | `Load list file <p0>` | Charger le fichier liste <p0> | (paramètres non fiables) | 2 (1 proj.) | `Combo Box : Event ID 80, 1 Parameters { Expression ID 95("File") }` |
| 1 | 81 | Files > Load drives list | `Load drive list` | Charger la liste de lecteurs |  | — |  |
| 2 | 82 | Files > Load directory list | `Load directory list from <p0>` | Charger le répertoire depuis <p0> | (paramètres non fiables) | — |  |
| 3 | 83 | Files > Load Filelist | `Load filelist from <p0>` | Charger la liste des fichiers de <p0> | (paramètres non fiables) | — |  |
| 4 | 84 | Files > Save list file | `Save list file <p0>` | Enregistrer le fichier liste <p0> | (paramètres non fiables) | 1 (1 proj.) | `Combo Box : Event ID 84, 1 Parameters { Appdrive$ + Appdir$ + "Mycombo.txt" }` |
| 5 | 85 | Reset | `Reset` | Remise à zéro |  | 12 (9 proj.) | `Combo Box : Event ID 85, 0 Parameters` |
| 6 | 86 | Add a line | `Add line <p0>` | Ajouter la ligne <p0> | (paramètres non fiables) | 21 (9 proj.) | `Combo Box : Event ID 86, 1 Parameters { "This is the line you just added" }` |
| 7 | 87 | Insert a line | `Insert line <p0> at line <p1>` | Insérer la ligne <p1> à la ligne <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Delete a line | `Delete line <p0>` | Détruire la ligne <p0> | (paramètres non fiables) | — |  |
| 9 | 89 | Set current line | `Set current line <p0>` | Fixer la ligne courante <p0> | (paramètres non fiables) | 8 (2 proj.) | `Fonts : Event ID 89, 1 Parameters { Expression ID 95("Fonts")"Arial", 0) }` |
| 10 | 90 | Visibility > Make Object Reappear | `Show` | Montrer |  | 2 (1 proj.) |  |
| 11 | 91 | Visibility > Make Object Invisible | `Hide` | Cacher |  | 4 (1 proj.) |  |
| 12 | 92 | Control > Get Focus | `Get focus` | Prendre le focus |  | — |  |
| 13 | 93 | Control > Enable | `Enable` | Activer |  | — |  |
| 14 | 94 | Control > Disable | `Disable` | Désactiver |  | — |  |
| 19 | 99 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | — |  |
| 20 | 100 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | — |  |
| 21 | 101 | Control > Lose Focus | `Lose focus` | Perdre le focus |  | — |  |
| 22 | 102 | Set edit text | `Set edit text to <p0>` | Changer le texte édité en <p0> | (paramètres non fiables) | 2 (1 proj.) | `Combo Box : Event ID 102, 1 Parameters { "Click to the right to see the contents!" }` |
| 23 | 103 | Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  | — |  |
| 24 | 104 | Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (paramètres non fiables) | — |  |
| 25 | 105 | Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  | — |  |
| 26 | 106 | Color > Set text color | `Set text color to <p0>` | Fixer la couleur de texte à <p0> | (paramètres non fiables) | — |  |
| 27 | 107 | Color > Set background color | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (paramètres non fiables) | — |  |
| 28 | 108 | Fonts > List fonts | `List fonts` | Lister les polices |  | 1 (1 proj.) | `Fonts : Event ID 108, 0 Parameters` |
| 29 | 109 | Fonts > List font sizes | `List font sizes for <p0>` | Lister les tailles de polices pour <p0> | (paramètres non fiables) | 1 (1 proj.) | `FontSizes : Event ID 109, 1 Parameters { Expression ID 81("Fonts") }` |
| 30 | 110 | Set line data | `Set line <p0> data to <p1>` | Fixer les données de la ligne <p0> à <p1> | (paramètres non fiables) | — |  |
| 31 | 111 | Change a line | `Change line <p0> to <p1>` | Changer ligne <p0> en <p1> | (paramètres non fiables) | — |  |
| -18 | 62 | ? | ? |  |  | 4 (2 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current line number | `Combo Select(` | Numéro de la ligne courante |  | 18 (8 proj.) |  |
| 1 | 81 | Get current line | `Combo Select$(` | Ligne courante |  | 15 (4 proj.) | `Expression ID 81("Combo Box")` |
| 2 | 82 | Get current line (directory) | `Combo SelDir$(` | Ligne courante (répertoire) |  | — |  |
| 3 | 83 | Get current line (drive) | `Combo SelDrv$(` | Ligne courante (lecteur) |  | — |  |
| 4 | 84 | Get line | `Combo Line Text$(` | Récupérer la ligne | (paramètres non fiables) | — |  |
| 5 | 85 | Get line (directory) | `Combo Line Dir$(` | Récupérer la ligne (répertoire) | (paramètres non fiables) | — |  |
| 6 | 86 | Get line (drive) | `Combo Line Drv$(` | Récupérer la ligne (lecteur) | (paramètres non fiables) | — |  |
| 7 | 87 | Get number of lines | `Combo Nb Lines(` | Nombre de lignes |  | — |  |
| 10 | 90 | Get X Size | `Combo X Size(` | Taille en X |  | — |  |
| 11 | 91 | Get Y Size | `Combo Y Size(` | Taille en Y |  | — |  |
| 12 | 92 | Get Edit text | `Edit text$(` | Texte édité |  | 16 (1 proj.) |  |
| 13 | 93 | Get Text Color | `GetTextColor(` | Couleur de texte |  | — |  |
| 14 | 94 | Get Background Color | `GetBkdColor(` | Couleur de fond |  | — |  |
| 15 | 95 | Find String | `FindString(` | Chercher une chaîne | nombre « String to find » (paramètres non fiables) | 3 (1 proj.) | `Expression ID 95("Fonts")` |
| 16 | 96 | Find String Exact | `FindStringExact(` | Chercher une chaîne exacte | nombre « String to find » (paramètres non fiables) | 1 (1 proj.) | `Expression ID 96("FontSizes")` |
| 17 | 97 | Get index of last line inserted | `Combo LastIndex(` | Index de la dernière ligne insérée |  | — |  |
| 18 | 98 | Get line data | `Combo Data(` | Récupérer la donnée de la ligne | (paramètres non fiables) | — |  |
