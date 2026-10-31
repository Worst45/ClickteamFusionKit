# Extension kclist

- Fichier : `kclist.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « List », « Liste »
- Usage dans le corpus : 219 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is visible ? | `<objet>: Visible` | <objet>: Visible |  | — |  |
| 1 | -82 | Is enabled ? | `<objet>: Enable` | <objet>: Activé |  | — |  |
| 2 | -83 | Double clicked ? | `<objet>: Double clicked` | <objet>: Double clic |  | 3 (3 proj.) | `Play List: Event ID -83, 0 Parameters` |
| 3 | -84 | Selection changed ? | `<objet>: Selection changed` | <objet>: Sélection modifiée |  | 19 (6 proj.) | `Directories and Files: Event ID -84, 0 Parameters` |
| 4 | -85 | Has focus ? | `<objet>: Has Focus` | <objet>: A le focus |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Files > Load list file | `Load list file <p0>` | Charger le fichier liste <p0> | (paramètres non fiables) | — |  |
| 1 | 81 | Files > Load drives list | `Load drive list` | Charger la liste de lecteurs |  | — |  |
| 2 | 82 | Files > Load directory list | `Load directory list from <p0>` | Charger le répertoire depuis <p0> | (paramètres non fiables) | — |  |
| 3 | 83 | Files > Load Filelist | `Load filelist from <p0>` | Charger la liste des fichiers de <p0> | (paramètres non fiables) | 4 (4 proj.) | `Play List : Event ID 83, 1 Parameters { Apppath$ + "Data\*.*" }` |
| 4 | 84 | Files > Save list file | `Save list file <p0>` | Enregistrer le fichier liste <p0> | (paramètres non fiables) | — |  |
| 5 | 85 | Reset | `Reset` | Remise à zéro |  | 16 (8 proj.) | `Selected Files : Event ID 85, 0 Parameters` |
| 6 | 86 | Add a line | `Add line <p0>` | Ajouter la ligne <p0> | (paramètres non fiables) | 47 (11 proj.) | `Selected Files : Event ID 86, 1 Parameters { Expression ID 91("Explorer")LoopIndex("GetSel")) }` |
| 7 | 87 | Insert a line | `Insert line <p0> at line <p1>` | Insérer la ligne <p1> à la ligne <p0> | (paramètres non fiables) | — |  |
| 8 | 88 | Delete a line | `Delete line <p0>` | Détruire la ligne <p0> | (paramètres non fiables) | — |  |
| 9 | 89 | Set current line | `Set current line <p0>` | Fixer la ligne courante <p0> | (paramètres non fiables) | 45 (8 proj.) | `FIELD 2 : Event ID 89, 1 Parameters { Expression ID 80("FIELD 1") }` |
| 10 | 90 | Visibility > Make Object Reappear | `Show` | Montrer |  | 8 (4 proj.) |  |
| 11 | 91 | Visibility > Make Object Invisible | `Hide` | Cacher |  | 8 (4 proj.) |  |
| 12 | 92 | Control > Get Focus | `Get focus` | Prendre le focus |  | 4 (4 proj.) |  |
| 13 | 93 | Control > Enable | `Enable` | Activer |  | — |  |
| 14 | 94 | Control > Disable | `Disable` | Désactiver |  | — |  |
| 19 | 99 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (paramètres non fiables) | — |  |
| 20 | 100 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (paramètres non fiables) | — |  |
| 21 | 101 | Control > Lose Focus | `Lose focus` | Perdre le focus |  | — |  |
| 22 | 102 | Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  | — |  |
| 23 | 103 | Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (paramètres non fiables) | — |  |
| 24 | 104 | Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  | — |  |
| 25 | 105 | Color > Set text color | `Set text color to <p0>` | Fixer la couleur de texte à <p0> | (paramètres non fiables) | — |  |
| 26 | 106 | Color > Set background color | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (paramètres non fiables) | — |  |
| 27 | 107 | Fonts > List fonts | `List fonts` | Lister les polices |  | — |  |
| 28 | 108 | Fonts > List font sizes | `List font sizes for <p0>` | Lister les tailles de polices pour <p0> | (paramètres non fiables) | — |  |
| 29 | 109 | Set line data | `Set line <p0> data to <p1>` | Fixer les données de la ligne <p0> à <p1> | (paramètres non fiables) | — |  |
| 30 | 110 | Change a line | `Change line <p0> to <p1>` | Changer ligne <p0> en <p1> | (paramètres non fiables) | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current line number | `List Select(` | Numéro de la ligne courante |  | 48 (7 proj.) | `Expression ID 80("Directories and Files")` |
| 1 | 81 | Get current line | `List Select$(` | Ligne courante |  | 12 (6 proj.) | `Expression ID 81("Play List")` |
| 2 | 82 | Get current line (directory) | `List SelDir$(` | Ligne courante (répertoire) |  | 1 (1 proj.) | `Expression ID 82("Directories and Files")` |
| 3 | 83 | Get current line (drive) | `List SelDrv$(` | Ligne courante (lecteur) |  | — |  |
| 4 | 84 | Get line | `List Line Text$(` | Récupérer la ligne | (paramètres non fiables) | 1 (1 proj.) | `Expression ID 84("List Line Number")` |
| 5 | 85 | Get line (directory) | `List Line Dir$(` | Récupérer la ligne (répertoire) | (paramètres non fiables) | — |  |
| 6 | 86 | Get line (drive) | `List Line Drv$(` | Récupérer la ligne (lecteur) | (paramètres non fiables) | — |  |
| 7 | 87 | Get number of lines | `List Nb Lines(` | Nombre de lignes |  | 3 (3 proj.) |  |
| 10 | 90 | Get X Size | `List X Size(` | Taille en X |  | — |  |
| 11 | 91 | Get Y Size | `List Y Size(` | Taille en Y |  | — |  |
| 12 | 92 | Get Text Color | `GetTextColor(` | Couleur de texte |  | — |  |
| 13 | 93 | Get Background Color | `GetBkdColor(` | Couleur de fond |  | — |  |
| 14 | 94 | Find String | `FindString(` | Chercher une chaîne | nombre « String to find » (paramètres non fiables) | — |  |
| 15 | 95 | Find String Exact | `FindStringExact(` | Chercher une chaîne exacte | nombre « String to find » (paramètres non fiables) | — |  |
| 16 | 96 | Get index of last line inserted | `List LastIndex(` | Index de la dernière ligne insérée |  | — |  |
| 17 | 97 | Get line data | `List Data(` | Récupérer la donnée de la ligne | (paramètres non fiables) | — |  |
