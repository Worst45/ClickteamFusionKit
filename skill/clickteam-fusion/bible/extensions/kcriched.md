# Extension kcriched

- File: `kcriched.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Is object visible? | `<object> is visible` | <object> est visible |  |
| 1 | -82 | Is object enabled? | `<object> is enabled` | <object> est activé |  |
| 2 | -83 | Is object read-only? | `<object> is read-only` | <object> est en lecture seule |  |
| 3 | -84 | Has the object the input focus? | `<object> has the input focus` | <object> a le focus |  |
| 4 | -85 | Has the text been modified? | `<object> has been modified` | <object> a été modifié |  |
| 5 | -86 | Undo > Is UNDO available? | `<object> can perform UNDO` | <object>: Peut faire un pas d'UNDO |  |
| 6 | -87 | Is text available in the clipboard? | `<object>Text is available in the clipboard` | <object>: Du texte est disponible dans le presse-papier |  |
| 7 | -88 | Character > Is bold? | `<object> Character is bold` | <object>: Le caractère est en gras |  |
| 8 | -89 | Character > Is italic? | `<object> Character is italic` | <object>: La caractère est en italique |  |
| 9 | -90 | Character > Is underlined? | `<object> Character is underlined` | <object>: Le caractère est souligné |  |
| 10 | -91 | Character > Is striked out? | `<object> Character is striked out` | <object>: Le caracère est barré |  |
| 11 | -92 | Paragraph > Is aligned on the left? | `<object>Paragraph is aligned on the left` | <object>: Le paragraphe est aligné à gauche |  |
| 12 | -93 | Paragraph > Is centered? | `<object>Paragraph is centered` | <object>: Le paragraphe est centré |  |
| 13 | -94 | Paragraph > Is aligned on the right? | `<object>Paragraph is aligned on the right` | <object>: Le paragraphe est aligné à droite |  |
| 14 | -95 | Paragraph > Bullet selected? | `<object>Paragraph has a bullet` | <object>: le paragraphe a une puce |  |
| 15 | -96 | Mouse > Clicked with left button? | `<object> clicked (left button)` | <object>: cliqué (bouton gauche) |  |
| 16 | -97 | Mouse > Clicked with right button? | `<object> clicked (right button)` | <object>: cliqué (bouton droit) |  |
| 17 | -98 | Mouse > Double-clicked? | `<object> double-clicked` | <object>: double-cliqué |  |
| 18 | -99 | Mouse > Link clicked? (2.0) | `<object>: <p0> clicked` | <object>: <p0> cliqué | (unreliable parameters) |
| 19 | -100 | Mouse > Any link clicked? (2.0) | `<object>: link clicked` | <object>: Clic sur un lien |  |
| 20 | -101 | Undo > Is REDO available? (2.0) | `<object> can perform REDO` | <object>: peut faire un pas de REDO |  |
| 21 | -102 | Character > Is link? (2.0) | `<object> Character is link` | <object>: Le caractère est un lien |  |
| 22 | -103 | Character > Is protected? | `<object> Character is protected` | <object>: Le caractère est protégé |  |
| 23 | -104 | Scrolling > Is line visible? | `<object> line <p0> is visible` | <object>: La ligne <p0> est visible | (unreliable parameters) |
| 24 | -105 | Scrolling > Is line entirely visible | `<object> line <p0> is entirely visible` | <object>: La ligne <p0> est entièrement visible | (unreliable parameters) |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Files > Load ASCII text | `Load text <p0>` | Charger le texte <p0> | (unreliable parameters) |
| 1 | 81 | Files > Load RTF text | `Load RTF text <p0>` | Charger texte RTF <p0> | (unreliable parameters) |
| 2 | 82 | Files > Save ASCII text | `Save text <p0>` | Enregistrer le texte <p0> | (unreliable parameters) |
| 3 | 83 | Files > Save RTF text | `Save RTF text <p0>` | Enregistrer texte RTF <p0> | (unreliable parameters) |
| 4 | 84 | Files > Load ASCII text from selector | `Load ASCII text from selector` | Charger du texte ASCII avec un sélecteur |  |
| 5 | 85 | Files > Load RTF text from selector | `Load RTF text from selector` | Charger du texte RTF avec un sélecteur |  |
| 6 | 86 | Files > Save ASCII text from selector | `Save ASCII text with selector` | Enregistrer texte ASCII avec un sélecteur |  |
| 7 | 87 | Files > Save RTF text from selector | `Save RTF Text with selector` | Enregistrer texte RTF avec un sélecteur |  |
| 8 | 88 | Block > Replace selection | `Replace selection with <p0>` | Remplacer la sélection avec <p0> | (unreliable parameters) |
| 9 | 89 | Block > Cut | `Cut` | Couper |  |
| 10 | 90 | Block > Copy | `Copy` | Copier |  |
| 11 | 91 | Block > Paste | `Paste` | Coller |  |
| 12 | 92 | Block > Clear | `Clear` | Effacer |  |
| 16 | 96 | Size > Set width | `Set width to <p0>` | Fixer la largeur à <p0> | (unreliable parameters) |
| 17 | 97 | Size > Set height | `Set height to <p0>` | Changer la hauteur à <p0> | (unreliable parameters) |
| 18 | 98 | Visibility > Show object | `Show` | Montrer |  |
| 19 | 99 | Visibility > Hide object | `Hide` | Cacher |  |
| 20 | 100 | Control > Read only > On | `Set read only ON` | Mode lecture seule ON |  |
| 21 | 101 | Control > Read only > Off | `Set read only OFF` | Mode lecture seule OFF |  |
| 22 | 102 | Control > Window > Enabled | `Enable window` | Activer la fenêtre |  |
| 23 | 103 | Control > Window > Disabled | `Disable window` | Désactiver la fenêtre |  |
| 24 | 104 | Control > Goto > Character number... | `Goto character number <p0>` | Aller au caractère numéro <p0> | (unreliable parameters) |
| 25 | 105 | Control > Goto > Line number... | `Goto line number <p0>` | Aller à la ligne <p0> | (unreliable parameters) |
| 26 | 106 | Control > Find > Find text | `Find <p0> (options : <p1>)` | Chercher <p0> (options: <p1>) | (unreliable parameters) |
| 27 | 107 | Control > Find > Find next | `Find next` | Cherche texte |  |
| 28 | 108 | Control > Find > Find and select text | `Find and select <p0> (options : <p1>)` | Chercher et sélectionner <p0> (options: <p1>) | (unreliable parameters) |
| 29 | 109 | Control > Find > Find and select next | `Find and select next` | Chercher et sélectionner suivant |  |
| 30 | 110 | Control > Window > Set focus | `Set focus` | Mettre le focus |  |
| 31 | 111 | Block > Select text | `Select characters from <p0> to <p1>` | Sélectionner les caractères de <p0> à <p1> | (unreliable parameters) |
| 32 | 112 | Control > Background > Set color from string | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (unreliable parameters) |
| 33 | 113 | Control > Undo > Undo | `Undo` | Annuler |  |
| 34 | 114 | Control > Undo > Clear UNDO buffer | `Clear UNDO buffer` | Effacer le buffer UNDO |  |
| 35 | 115 | Control > Format > Bold > On | `Bold on` | Gras ON |  |
| 36 | 116 | Control > Format > Bold > Off | `Bold off` | Gras OFF |  |
| 37 | 117 | Control > Format > Italic > On | `Italic on` | Italique ON |  |
| 38 | 118 | Control > Format > Italic > Off | `Italic off` | Italique OFF |  |
| 39 | 119 | Control > Format > Underline > On | `Underline on` | Souligné ON |  |
| 40 | 120 | Control > Format > Underline > Off | `Underline off` | Souligné OFF |  |
| 41 | 121 | Control > Format > Strike > On | `Strike out on` | Barré ON |  |
| 42 | 122 | Control > Format > Strike > Off | `Strike out off` | Barré OFF |  |
| 43 | 123 | Control > Format > Font > Set font from selector | `Set font` | Changer la police |  |
| 44 | 124 | Control > Format > Font > Set font color from string | `Set font color to <p0>` | Changer la couleur de police à <p0> | (unreliable parameters) |
| 45 | 125 | Control > Format > Font > Set font color from selector | `Set font color from selector` | Changer la couleur de la police avec un sélecteur |  |
| 46 | 126 | Control > Append Text | `Append '<p0>' to text` | Ajouter '<p0>' au texte | (unreliable parameters) |
| 47 | 127 | Paragraph > Align > Left | `Align paragraph to the left` | Aligner le paragraphe à gauche |  |
| 48 | 128 | Paragraph > Align > Center | `Center paragraph` | Centrer le paragraphe |  |
| 49 | 129 | Paragraph > Align > Right | `Align paragraph to the right` | Aligner le paragraphe à droite |  |
| 50 | 130 | Paragraph > Bullets > Off | `Bullets off` | Puces OFF |  |
| 51 | 131 | Paragraph > Bullets > On | `Bullets on` | Puces ON |  |
| 52 | 132 | Block > Select all | `Select all` | Tout sélectionner |  |
| 53 | 133 | Paragraph > Indent | `Indent first line of <p0> and next lines of <p1>` | Indenter la première ligne de <p0> et les lignes suivantes de <p1> | (unreliable parameters) |
| 54 | 134 | Control > Scrolling > Scroll up | `Scroll up` | Défilement vers le haut |  |
| 55 | 135 | Control > Scrolling > Scroll down | `Scroll down` | Défilement vers le bas |  |
| 56 | 136 | Control > Scrolling > Scroll left | `Scroll left` | Défilement vers la gauche |  |
| 57 | 137 | Control > Scrolling > Scroll right | `Scroll right` | Défilement vers la droite |  |
| 58 | 138 | Control > Format > Font > Set font name | `Set font name to <p0>` | Changer le nom de la police à <p0> | (unreliable parameters) |
| 59 | 139 | Control > Format > Font > Set font size | `Set font size to <p0>` | Changer la taille de la police à <p0> | (unreliable parameters) |
| 60 | 140 | Control > Format > Font > Set font color from integer | `Set font color to <p0>` | Changer la couleur de police à <p0> | (unreliable parameters) |
| 61 | 141 | Control > Background > Set color from integer | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (unreliable parameters) |
| 62 | 142 | Block > Unselect block | `Deselect block` | Désélectionner le bloc |  |
| 63 | 143 | Control > Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  |
| 64 | 144 | Control > Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (unreliable parameters) |
| 65 | 145 | Control > Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  |
| 66 | 146 | Files > Print text | `Print text` | Imprimer le texte |  |
| 67 | 147 | Control > Format > Link (2.0) > On | `Link on` | Lien ON |  |
| 68 | 148 | Control > Format > Link (2.0) > Off | `Link off` | Lien OFF |  |
| 69 | 149 | Control > Undo > Redo (2.0) | `Redo` | Redo |  |
| 70 | 150 | Control > Set RTF Text | `Set RTF text to <p0>` | Changer le texte RTF à <p0> | (unreliable parameters) |
| 71 | 151 | Control > Format > Protection > On | `Protection on` | Protection ON |  |
| 72 | 152 | Control > Format > Protection > Off | `Protection off` | Protection OFF |  |
| 73 | 153 | Control > Modified > Yes | `Modified` | Modifié |  |
| 74 | 154 | Control > Modified > No | `Unmodified` | Non-modifié |  |
| 75 | 155 | Control > Auto Focus > On | `Auto Focus ON` | Auto Focus ON |  |
| 76 | 156 | Control > Auto Focus > Off | `Auto Focus OFF` | Auto Focus OFF |  |
| 77 | 157 | Control > Set Text | `Set text to <p0>` | Changer le texte en <p0> | (unreliable parameters) |
| 78 | 158 | Control > Print > Set left margin | `Set left margin to <p0> mm` | Mettre la marge à gauche à <p0> mm | (unreliable parameters) |
| 79 | 159 | Control > Print > Set right margin | `Set right margin to <p0> mm` | Mettre la marge à droite à <p0> mm | (unreliable parameters) |
| 80 | 160 | Control > Print > Set top margin | `Set top margin to <p0> mm` | Mettre la marge en haut à <p0> mm | (unreliable parameters) |
| 81 | 161 | Control > Print > Set bottom margin | `Set bottom margin to <p0> mm` | Mettre la marge en bas à <p0> mm | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Caret > Get caret position | `GetChar(` | Position du curseur |  |
| 1 | 81 | Caret > Get caret line | `GetLine(` | Ligne avec le curseur |  |
| 2 | 82 | Position > Get X Position | `GetXPos(` | Position X |  |
| 3 | 83 | Position > Get Y Position | `GetYPos(` | Position Y |  |
| 4 | 84 | Size > Get width | `GetWidth(` | Largeur |  |
| 5 | 85 | Size > Get height | `GetHeight(` | Hauteur |  |
| 6 | 86 | Text > Get text | `GetText$(` | Récupérer le texte | number “First character number” |
| 7 | 87 | Text > Get selection | `GetSelection$(` | Sélection |  |
| 8 | 88 | Font > Get font name | `GetFontName$(` | Nom de la police |  |
| 9 | 89 | Font > Get font size | `GetFontSize(` | Taille de la police |  |
| 10 | 90 | Font > Get font color | `GetFontColor(` | Couleur de la police |  |
| 11 | 91 | Scrolling > Get first visible line | `GetFirstLine(` | Première ligne visible |  |
| 12 | 92 | Scrolling > Get line count | `GetLineCount(` | Nombre de lignes |  |
| 13 | 93 | Link (2.0) > Get link text | `GetLinkText$(` | Texte du lien |  |
| 14 | 94 | Text > Get RTF text | `GetRTFText$(` | Texte RTF | number “First character number” |
| 15 | 95 | Text > Get RTF selection | `GetRTFSelection$(` | Sélection RTF |  |
| 16 | 96 | Text > Get total number of characters | `GetNChars(` | Nombre total de caractères |  |
| 17 | 97 | Link (2.0) > Get link position | `GetLinkPos(` | Position du lien |  |
