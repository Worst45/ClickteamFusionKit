# Extension kclist

- File: `kclist.mfx` — installed with Fusion
- Exporters: available in HTML5, Android (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is visible ? | `<object>: Visible` | <object>: Visible |  |
| 1 | -82 | Is enabled ? | `<object>: Enable` | <object>: Activé |  |
| 2 | -83 | Double clicked ? | `<object>: Double clicked` | <object>: Double clic |  |
| 3 | -84 | Selection changed ? | `<object>: Selection changed` | <object>: Sélection modifiée |  |
| 4 | -85 | Has focus ? | `<object>: Has Focus` | <object>: A le focus |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Files > Load list file | `Load list file <p0>` | Charger le fichier liste <p0> | (unreliable parameters) |
| 1 | 81 | Files > Load drives list | `Load drive list` | Charger la liste de lecteurs |  |
| 2 | 82 | Files > Load directory list | `Load directory list from <p0>` | Charger le répertoire depuis <p0> | (unreliable parameters) |
| 3 | 83 | Files > Load Filelist | `Load filelist from <p0>` | Charger la liste des fichiers de <p0> | (unreliable parameters) |
| 4 | 84 | Files > Save list file | `Save list file <p0>` | Enregistrer le fichier liste <p0> | (unreliable parameters) |
| 5 | 85 | Reset | `Reset` | Remise à zéro |  |
| 6 | 86 | Add a line | `Add line <p0>` | Ajouter la ligne <p0> | (unreliable parameters) |
| 7 | 87 | Insert a line | `Insert line <p0> at line <p1>` | Insérer la ligne <p1> à la ligne <p0> | (unreliable parameters) |
| 8 | 88 | Delete a line | `Delete line <p0>` | Détruire la ligne <p0> | (unreliable parameters) |
| 9 | 89 | Set current line | `Set current line <p0>` | Fixer la ligne courante <p0> | (unreliable parameters) |
| 10 | 90 | Visibility > Make Object Reappear | `Show` | Montrer |  |
| 11 | 91 | Visibility > Make Object Invisible | `Hide` | Cacher |  |
| 12 | 92 | Control > Get Focus | `Get focus` | Prendre le focus |  |
| 13 | 93 | Control > Enable | `Enable` | Activer |  |
| 14 | 94 | Control > Disable | `Disable` | Désactiver |  |
| 19 | 99 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) |
| 20 | 100 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) |
| 21 | 101 | Control > Lose Focus | `Lose focus` | Perdre le focus |  |
| 22 | 102 | Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  |
| 23 | 103 | Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (unreliable parameters) |
| 24 | 104 | Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  |
| 25 | 105 | Color > Set text color | `Set text color to <p0>` | Fixer la couleur de texte à <p0> | (unreliable parameters) |
| 26 | 106 | Color > Set background color | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (unreliable parameters) |
| 27 | 107 | Fonts > List fonts | `List fonts` | Lister les polices |  |
| 28 | 108 | Fonts > List font sizes | `List font sizes for <p0>` | Lister les tailles de polices pour <p0> | (unreliable parameters) |
| 29 | 109 | Set line data | `Set line <p0> data to <p1>` | Fixer les données de la ligne <p0> à <p1> | (unreliable parameters) |
| 30 | 110 | Change a line | `Change line <p0> to <p1>` | Changer ligne <p0> en <p1> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get current line number | `List Select(` | Numéro de la ligne courante |  |
| 1 | 81 | Get current line | `List Select$(` | Ligne courante |  |
| 2 | 82 | Get current line (directory) | `List SelDir$(` | Ligne courante (répertoire) |  |
| 3 | 83 | Get current line (drive) | `List SelDrv$(` | Ligne courante (lecteur) |  |
| 4 | 84 | Get line | `List Line Text$(` | Récupérer la ligne | (unreliable parameters) |
| 5 | 85 | Get line (directory) | `List Line Dir$(` | Récupérer la ligne (répertoire) | (unreliable parameters) |
| 6 | 86 | Get line (drive) | `List Line Drv$(` | Récupérer la ligne (lecteur) | (unreliable parameters) |
| 7 | 87 | Get number of lines | `List Nb Lines(` | Nombre de lignes |  |
| 10 | 90 | Get X Size | `List X Size(` | Taille en X |  |
| 11 | 91 | Get Y Size | `List Y Size(` | Taille en Y |  |
| 12 | 92 | Get Text Color | `GetTextColor(` | Couleur de texte |  |
| 13 | 93 | Get Background Color | `GetBkdColor(` | Couleur de fond |  |
| 14 | 94 | Find String | `FindString(` | Chercher une chaîne | number “String to find” (unreliable parameters) |
| 15 | 95 | Find String Exact | `FindStringExact(` | Chercher une chaîne exacte | number “String to find” (unreliable parameters) |
| 16 | 96 | Get index of last line inserted | `List LastIndex(` | Index de la dernière ligne insérée |  |
| 17 | 97 | Get line data | `List Data(` | Récupérer la donnée de la ligne | (unreliable parameters) |
