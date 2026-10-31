# Extension kcedit

- File: `kcedit.mfx` — installed with Fusion
- Name(s) shown in projects: “Edit Box”
- Usage in the corpus: 181 times
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is entry zone visible? | `<object>: is visible` | <object>: est visible |  | — |  |
| 1 | -82 | Is entry zone enabled? | `<object>: is enabled` | <object>: est activé |  | — |  |
| 2 | -83 | Is undo information available? | `<object>: undo infomation available` | <object>: de l'UNDO est disponible |  | — |  |
| 3 | -84 | Has entry zone been modified? | `<object>: has been modified` | <object>: a été modifiée |  | 2 (1 proj.) | `SEAT LETTER: Event ID -84, 0 Parameters` |
| 4 | -85 | Does entry zone have input focus? | `<object>: have input focus` | <object>: a le focus |  | 10 (4 proj.) | `SEAT LETTER: Event ID -85, 0 Parameters` |
| 5 | -86 | Is text a number? | `<object>: text is a number` | <object>: le texte est un nombre |  | — |  |
| 6 | -87 | Is text selected? | `<object>: some text is selected` | <object>: du texte est sélectionné |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Files > Load text file | `Load text file <p0>` | Charger le fichier texte <p0> | (unreliable parameters) | — |  |
| 1 | 81 | Files > Load text file via a file selector | `Load text file via a file selector` | Charger un texte avec un sélecteur de fichier |  | 2 (2 proj.) | `Edit Object 4 : Event ID 81, 0 Parameters` |
| 2 | 82 | Files > Save text file | `Save text file <p0>` | Enregistrer le fichier texte <p0> | (unreliable parameters) | — |  |
| 3 | 83 | Files > Save text file via a file selector | `Save text file via a file selector` | Enregistrer le fichier texte avec un sélecteur |  | 2 (2 proj.) | `Edit Object 4 : Event ID 83, 0 Parameters` |
| 4 | 84 | Editing > Set text | `Set text <p0>` | Changer le texte <p0> | (unreliable parameters) | 54 (16 proj.) | `Edit : Event ID 84, 1 Parameters { "http://www.clickteam.com" }` |
| 5 | 85 | Editing > Block > Replace selection | `Replace selection by <p0>` | Remplacer la sélection par <p0> | (unreliable parameters) | 4 (1 proj.) | `SQL STRING : Event ID 85, 1 Parameters { "SELECT * FROM ORDERS" }` |
| 6 | 86 | Editing > Block > Cut | `Cut` | Couper |  | — |  |
| 7 | 87 | Editing > Block > Copy | `Copy` | Copier |  | — |  |
| 8 | 88 | Editing > Block > Paste | `Paste` | Coller |  | — |  |
| 9 | 89 | Editing > Block > Clear | `Clear` | Effacer |  | — |  |
| 10 | 90 | Editing > Undo > Undo | `Undo` | Annuler |  | 1 (1 proj.) | `Edit Object 4 : Event ID 90, 0 Parameters` |
| 11 | 91 | Editing > Undo > Clear undo buffer | `Clear undo buffer` | Effacer le tampon Undo |  | — |  |
| 12 | 92 | Visibility > Make Object Reappear | `Show` | Montrer |  | 4 (1 proj.) | `SEAT LETTER : Event ID 92, 0 Parameters` |
| 13 | 93 | Visibility > Make Object Invisible | `Hide` | Cacher |  | 4 (1 proj.) | `SEAT LETTER : Event ID 93, 0 Parameters` |
| 14 | 94 | Control > Aspect > Set font via a selector | `Set font via a selector` | Changer la police avec un sélecteur |  | — |  |
| 15 | 95 | Control > Aspect > Set background color via a selector | `Set background color via a selector` | Fixer la couleur de fond avec un sélecteur |  | — |  |
| 16 | 96 | Control > Focus > On | `Set focus on` | Mettre le focus |  | 10 (5 proj.) | `SEAT LETTER : Event ID 96, 0 Parameters` |
| 17 | 97 | Control > Enabled > On | `Highlight` | Sélectionner |  | 2 (1 proj.) | `User ID : Event ID 97, 0 Parameters` |
| 18 | 98 | Control > Enabled > Off | `Dehighlight` | Désélectionner |  | 2 (1 proj.) | `User ID : Event ID 98, 0 Parameters` |
| 19 | 99 | Control > Read only > On | `Read only on` | Mode lecture seule ON |  | — |  |
| 20 | 100 | Control > Read only > Off | `Read only off` | Mode lecture seule OFF |  | — |  |
| 21 | 101 | Control > Force text modified flag > On | `Text modified flag on` | Drapeau "texte modifié" ON |  | — |  |
| 22 | 102 | Control > Force text modified flag > Off | `Text modified flag off` | Drapeau "texte modifié" OFF |  | 2 (1 proj.) | `SEAT LETTER : Event ID 102, 0 Parameters` |
| 23 | 103 | Control > Limit text size | `Limit text size to <p0>` | Limiter la taille du texte à <p0> | (unreliable parameters) | 1 (1 proj.) |  |
| 28 | 108 | Size > Set Horizontal Size | `Set horizontal size to <p0>` | Fixer la taille horizontale à <p0> | (unreliable parameters) | — |  |
| 29 | 109 | Size > Set Vertical Size | `Set vertical size to <p0>` | Fixer la taille verticale à <p0> | (unreliable parameters) | 2 (1 proj.) | `Edit : Event ID 109, 1 Parameters { 448 }` |
| 30 | 110 | Control > Focus > Off | `Set focus off` | Enlever le focus |  | 2 (1 proj.) | `Scale X : Event ID 110, 0 Parameters` |
| 31 | 111 | Editing > Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  | — |  |
| 32 | 112 | Editing > Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (unreliable parameters) | — |  |
| 33 | 113 | Editing > Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  | — |  |
| 34 | 114 | Control > Aspect > Set text color | `Set text color to <p0>` | Fixer la couleur de texte à <p0> | (unreliable parameters) | — |  |
| 35 | 115 | Control > Aspect > Set background color | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (unreliable parameters) | — |  |
| 36 | 116 | Editing > Caret > Insert text at caret position | `Insert text <p0> at caret position <p1>` | Insérer texte <p0> à la position du curseur <p1> | (unreliable parameters) | — |  |
| 37 | 117 | Editing > Caret > Set Caret Position | `Set caret position to <p0>` | Mettre le curseur à la position <p0> | (unreliable parameters) | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get text | `Edittext$(` | Récupérer le texte |  | 67 (17 proj.) | `Expression ID 80("Edit")` |
| 1 | 81 | Get selected text | `Editselect$(` | Texte sélectionné |  | — |  |
| 4 | 84 | Size > Get X Size | `Edit X size(` | Taille en X |  | — |  |
| 5 | 85 | Size > Get Y Size | `Edit Y size(` | Taille en Y |  | — |  |
| 6 | 86 | Get numeric value | `Edit Value(` | Valeur numérique |  | 10 (3 proj.) | `Expression ID 86("ROW")` |
| 7 | 87 | Get first visible line | `EditFirstLine(` | Première ligne visible |  | — |  |
| 8 | 88 | Get line count | `EditLineCount(` | Nombre de lignes |  | — |  |
| 9 | 89 | Color > Get Text Color | `GetTextColor(` | Couleur de texte |  | — |  |
| 10 | 90 | Color > Get Background Color | `GetBkdColor(` | Couleur de fond |  | — |  |
| 11 | 91 | Get Last Caret Position | `GetLastCaretPos(` | Dernière position du curseur |  | — |  |
