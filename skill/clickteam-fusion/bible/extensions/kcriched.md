# Extension kcriched

- Fichier : `kcriched.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Rich Edit Object », « Objet Rich Edit »
- Usage dans le corpus : 157 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Is object visible? | `<objet> is visible` | <objet> est visible |  | — |  |
| 1 | -82 | Is object enabled? | `<objet> is enabled` | <objet> est activé |  | — |  |
| 2 | -83 | Is object read-only? | `<objet> is read-only` | <objet> est en lecture seule |  | — |  |
| 3 | -84 | Has the object the input focus? | `<objet> has the input focus` | <objet> a le focus |  | — |  |
| 4 | -85 | Has the text been modified? | `<objet> has been modified` | <objet> a été modifié |  | 6 (1 proj.) | `Rich Edit Object: Event ID -85, 0 Parameters` |
| 5 | -86 | Undo > Is UNDO available? | `<objet> can perform UNDO` | <objet>: Peut faire un pas d'UNDO |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -86, 0 Parameters` |
| 6 | -87 | Is text available in the clipboard? | `<objet>Text is available in the clipboard` | <objet>: Du texte est disponible dans le presse-papier |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -87, 0 Parameters` |
| 7 | -88 | Character > Is bold? | `<objet> Character is bold` | <objet>: Le caractère est en gras |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -88, 0 Parameters` |
| 8 | -89 | Character > Is italic? | `<objet> Character is italic` | <objet>: La caractère est en italique |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -89, 0 Parameters` |
| 9 | -90 | Character > Is underlined? | `<objet> Character is underlined` | <objet>: Le caractère est souligné |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -90, 0 Parameters` |
| 10 | -91 | Character > Is striked out? | `<objet> Character is striked out` | <objet>: Le caracère est barré |  | 2 (1 proj.) | `Rich Edit Object: Event ID -91, 0 Parameters` |
| 11 | -92 | Paragraph > Is aligned on the left? | `<objet>Paragraph is aligned on the left` | <objet>: Le paragraphe est aligné à gauche |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -92, 0 Parameters` |
| 12 | -93 | Paragraph > Is centered? | `<objet>Paragraph is centered` | <objet>: Le paragraphe est centré |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -93, 0 Parameters` |
| 13 | -94 | Paragraph > Is aligned on the right? | `<objet>Paragraph is aligned on the right` | <objet>: Le paragraphe est aligné à droite |  | 4 (2 proj.) | `NOT Rich Edit Object: Event ID -94, 0 Parameters` |
| 14 | -95 | Paragraph > Bullet selected? | `<objet>Paragraph has a bullet` | <objet>: le paragraphe a une puce |  | 2 (1 proj.) | `Rich Edit Object: Event ID -95, 0 Parameters` |
| 15 | -96 | Mouse > Clicked with left button? | `<objet> clicked (left button)` | <objet>: cliqué (bouton gauche) |  | — |  |
| 16 | -97 | Mouse > Clicked with right button? | `<objet> clicked (right button)` | <objet>: cliqué (bouton droit) |  | — |  |
| 17 | -98 | Mouse > Double-clicked? | `<objet> double-clicked` | <objet>: double-cliqué |  | — |  |
| 18 | -99 | Mouse > Link clicked? (2.0) | `<objet>: <p0> clicked` | <objet>: <p0> cliqué | (paramètres non fiables) | — |  |
| 19 | -100 | Mouse > Any link clicked? (2.0) | `<objet>: link clicked` | <objet>: Clic sur un lien |  | — |  |
| 20 | -101 | Undo > Is REDO available? (2.0) | `<objet> can perform REDO` | <objet>: peut faire un pas de REDO |  | 2 (1 proj.) | `NOT Rich Edit Object: Event ID -101, 0 Parameters` |
| 21 | -102 | Character > Is link? (2.0) | `<objet> Character is link` | <objet>: Le caractère est un lien |  | — |  |
| 22 | -103 | Character > Is protected? | `<objet> Character is protected` | <objet>: Le caractère est protégé |  | — |  |
| 23 | -104 | Scrolling > Is line visible? | `<objet> line <p0> is visible` | <objet>: La ligne <p0> est visible | (paramètres non fiables) | — |  |
| 24 | -105 | Scrolling > Is line entirely visible | `<objet> line <p0> is entirely visible` | <objet>: La ligne <p0> est entièrement visible | (paramètres non fiables) | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Files > Load ASCII text | `Load text <p0>` | Charger le texte <p0> | (paramètres non fiables) | 7 (7 proj.) | `Rich Edit Object : Event ID 80, 1 Parameters { FileToOpen }` |
| 1 | 81 | Files > Load RTF text | `Load RTF text <p0>` | Charger texte RTF <p0> | (paramètres non fiables) | 4 (3 proj.) | `TextRichEdit : Event ID 81, 1 Parameters { Appdrive$ + Appdir$ + "combodescription.rtf" }` |
| 2 | 82 | Files > Save ASCII text | `Save text <p0>` | Enregistrer le texte <p0> | (paramètres non fiables) | 3 (1 proj.) | `Rich Edit Object : Event ID 82, 1 Parameters { string$("Filename") }` |
| 3 | 83 | Files > Save RTF text | `Save RTF text <p0>` | Enregistrer texte RTF <p0> | (paramètres non fiables) | 3 (1 proj.) | `Rich Edit Object : Event ID 83, 1 Parameters { string$("Filename") }` |
| 4 | 84 | Files > Load ASCII text from selector | `Load ASCII text from selector` | Charger du texte ASCII avec un sélecteur |  | 1 (1 proj.) | `Rich Edit Object : Event ID 84, 0 Parameters` |
| 5 | 85 | Files > Load RTF text from selector | `Load RTF text from selector` | Charger du texte RTF avec un sélecteur |  | 1 (1 proj.) | `Rich Edit Object : Event ID 85, 0 Parameters` |
| 6 | 86 | Files > Save ASCII text from selector | `Save ASCII text with selector` | Enregistrer texte ASCII avec un sélecteur |  | — |  |
| 7 | 87 | Files > Save RTF text from selector | `Save RTF Text with selector` | Enregistrer texte RTF avec un sélecteur |  | — |  |
| 8 | 88 | Block > Replace selection | `Replace selection with <p0>` | Remplacer la sélection avec <p0> | (paramètres non fiables) | — |  |
| 9 | 89 | Block > Cut | `Cut` | Couper |  | 1 (1 proj.) | `Rich Edit Object : Event ID 89, 0 Parameters` |
| 10 | 90 | Block > Copy | `Copy` | Copier |  | 1 (1 proj.) | `Rich Edit Object : Event ID 90, 0 Parameters` |
| 11 | 91 | Block > Paste | `Paste` | Coller |  | 1 (1 proj.) | `Rich Edit Object : Event ID 91, 0 Parameters` |
| 12 | 92 | Block > Clear | `Clear` | Effacer |  | 1 (1 proj.) | `Rich Edit Object : Event ID 92, 0 Parameters` |
| 16 | 96 | Size > Set width | `Set width to <p0>` | Fixer la largeur à <p0> | (paramètres non fiables) | 2 (1 proj.) | `Rich Edit Object : Event ID 96, 1 Parameters { Expression ID 87("Window Control") }` |
| 17 | 97 | Size > Set height | `Set height to <p0>` | Changer la hauteur à <p0> | (paramètres non fiables) | 2 (1 proj.) | `Rich Edit Object : Event ID 97, 1 Parameters { Expression ID 88("Window Control") }` |
| 18 | 98 | Visibility > Show object | `Show` | Montrer |  | — |  |
| 19 | 99 | Visibility > Hide object | `Hide` | Cacher |  | — |  |
| 20 | 100 | Control > Read only > On | `Set read only ON` | Mode lecture seule ON |  | — |  |
| 21 | 101 | Control > Read only > Off | `Set read only OFF` | Mode lecture seule OFF |  | — |  |
| 22 | 102 | Control > Window > Enabled | `Enable window` | Activer la fenêtre |  | — |  |
| 23 | 103 | Control > Window > Disabled | `Disable window` | Désactiver la fenêtre |  | — |  |
| 24 | 104 | Control > Goto > Character number... | `Goto character number <p0>` | Aller au caractère numéro <p0> | (paramètres non fiables) | — |  |
| 25 | 105 | Control > Goto > Line number... | `Goto line number <p0>` | Aller à la ligne <p0> | (paramètres non fiables) | 2 (2 proj.) | `Rich Edit Object : Event ID 105, 1 Parameters { Expression ID 86("Line number") }` |
| 26 | 106 | Control > Find > Find text | `Find <p0> (options : <p1>)` | Chercher <p0> (options: <p1>) | (paramètres non fiables) | — |  |
| 27 | 107 | Control > Find > Find next | `Find next` | Cherche texte |  | — |  |
| 28 | 108 | Control > Find > Find and select text | `Find and select <p0> (options : <p1>)` | Chercher et sélectionner <p0> (options: <p1>) | (paramètres non fiables) | 1 (1 proj.) | `Rich Edit Object : Event ID 108, 2 Parameters { Expression ID 80("Edit"), 0 }` |
| 29 | 109 | Control > Find > Find and select next | `Find and select next` | Chercher et sélectionner suivant |  | 1 (1 proj.) | `Rich Edit Object : Event ID 109, 0 Parameters` |
| 30 | 110 | Control > Window > Set focus | `Set focus` | Mettre le focus |  | — |  |
| 31 | 111 | Block > Select text | `Select characters from <p0> to <p1>` | Sélectionner les caractères de <p0> à <p1> | (paramètres non fiables) | 5 (5 proj.) |  |
| 32 | 112 | Control > Background > Set color from string | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (paramètres non fiables) | — |  |
| 33 | 113 | Control > Undo > Undo | `Undo` | Annuler |  | 2 (2 proj.) | `Rich Edit Object : Event ID 113, 0 Parameters` |
| 34 | 114 | Control > Undo > Clear UNDO buffer | `Clear UNDO buffer` | Effacer le buffer UNDO |  | — |  |
| 35 | 115 | Control > Format > Bold > On | `Bold on` | Gras ON |  | 2 (2 proj.) | `Rich Edit Object : Event ID 115, 0 Parameters` |
| 36 | 116 | Control > Format > Bold > Off | `Bold off` | Gras OFF |  | 2 (2 proj.) | `Rich Edit Object : Event ID 116, 0 Parameters` |
| 37 | 117 | Control > Format > Italic > On | `Italic on` | Italique ON |  | 2 (2 proj.) | `Rich Edit Object : Event ID 117, 0 Parameters` |
| 38 | 118 | Control > Format > Italic > Off | `Italic off` | Italique OFF |  | 2 (2 proj.) | `Rich Edit Object : Event ID 118, 0 Parameters` |
| 39 | 119 | Control > Format > Underline > On | `Underline on` | Souligné ON |  | 2 (2 proj.) | `Rich Edit Object : Event ID 119, 0 Parameters` |
| 40 | 120 | Control > Format > Underline > Off | `Underline off` | Souligné OFF |  | 2 (2 proj.) | `Rich Edit Object : Event ID 120, 0 Parameters` |
| 41 | 121 | Control > Format > Strike > On | `Strike out on` | Barré ON |  | 1 (1 proj.) | `Rich Edit Object : Event ID 121, 0 Parameters` |
| 42 | 122 | Control > Format > Strike > Off | `Strike out off` | Barré OFF |  | 1 (1 proj.) | `Rich Edit Object : Event ID 122, 0 Parameters` |
| 43 | 123 | Control > Format > Font > Set font from selector | `Set font` | Changer la police |  | 1 (1 proj.) | `Rich Edit Object : Event ID 123, 0 Parameters` |
| 44 | 124 | Control > Format > Font > Set font color from string | `Set font color to <p0>` | Changer la couleur de police à <p0> | (paramètres non fiables) | — |  |
| 45 | 125 | Control > Format > Font > Set font color from selector | `Set font color from selector` | Changer la couleur de la police avec un sélecteur |  | 2 (2 proj.) | `Rich Edit Object : Event ID 125, 0 Parameters` |
| 46 | 126 | Control > Append Text | `Append '<p0>' to text` | Ajouter '<p0>' au texte | (paramètres non fiables) | — |  |
| 47 | 127 | Paragraph > Align > Left | `Align paragraph to the left` | Aligner le paragraphe à gauche |  | 2 (2 proj.) | `Rich Edit Object : Event ID 127, 0 Parameters` |
| 48 | 128 | Paragraph > Align > Center | `Center paragraph` | Centrer le paragraphe |  | 2 (2 proj.) | `Rich Edit Object : Event ID 128, 0 Parameters` |
| 49 | 129 | Paragraph > Align > Right | `Align paragraph to the right` | Aligner le paragraphe à droite |  | 2 (2 proj.) | `Rich Edit Object : Event ID 129, 0 Parameters` |
| 50 | 130 | Paragraph > Bullets > Off | `Bullets off` | Puces OFF |  | 1 (1 proj.) | `Rich Edit Object : Event ID 130, 0 Parameters` |
| 51 | 131 | Paragraph > Bullets > On | `Bullets on` | Puces ON |  | 1 (1 proj.) | `Rich Edit Object : Event ID 131, 0 Parameters` |
| 52 | 132 | Block > Select all | `Select all` | Tout sélectionner |  | — |  |
| 53 | 133 | Paragraph > Indent | `Indent first line of <p0> and next lines of <p1>` | Indenter la première ligne de <p0> et les lignes suivantes de <p1> | (paramètres non fiables) | 2 (1 proj.) | `Rich Edit Object : Event ID 133, 2 Parameters { 10, 10 }` |
| 54 | 134 | Control > Scrolling > Scroll up | `Scroll up` | Défilement vers le haut |  | — |  |
| 55 | 135 | Control > Scrolling > Scroll down | `Scroll down` | Défilement vers le bas |  | — |  |
| 56 | 136 | Control > Scrolling > Scroll left | `Scroll left` | Défilement vers la gauche |  | — |  |
| 57 | 137 | Control > Scrolling > Scroll right | `Scroll right` | Défilement vers la droite |  | — |  |
| 58 | 138 | Control > Format > Font > Set font name | `Set font name to <p0>` | Changer le nom de la police à <p0> | (paramètres non fiables) | 1 (1 proj.) | `Rich Edit Object : Event ID 138, 1 Parameters { NewFontName }` |
| 59 | 139 | Control > Format > Font > Set font size | `Set font size to <p0>` | Changer la taille de la police à <p0> | (paramètres non fiables) | 1 (1 proj.) | `Rich Edit Object : Event ID 139, 1 Parameters { NewFontSize }` |
| 60 | 140 | Control > Format > Font > Set font color from integer | `Set font color to <p0>` | Changer la couleur de police à <p0> | (paramètres non fiables) | — |  |
| 61 | 141 | Control > Background > Set color from integer | `Set background color to <p0>` | Fixer la couleur de fond à <p0> | (paramètres non fiables) | — |  |
| 62 | 142 | Block > Unselect block | `Deselect block` | Désélectionner le bloc |  | — |  |
| 63 | 143 | Control > Scrolling > Scroll To Top | `Scroll To Top` | Défiler jusqu'au début |  | — |  |
| 64 | 144 | Control > Scrolling > Scroll To Line | `Scroll To Line <p0>` | Défiler jusqu'à la ligne <p0> | (paramètres non fiables) | — |  |
| 65 | 145 | Control > Scrolling > Scroll To End | `Scroll To End` | Défiler jusqu'à la fin |  | — |  |
| 66 | 146 | Files > Print text | `Print text` | Imprimer le texte |  | — |  |
| 67 | 147 | Control > Format > Link (2.0) > On | `Link on` | Lien ON |  | — |  |
| 68 | 148 | Control > Format > Link (2.0) > Off | `Link off` | Lien OFF |  | — |  |
| 69 | 149 | Control > Undo > Redo (2.0) | `Redo` | Redo |  | 1 (1 proj.) | `Rich Edit Object : Event ID 149, 0 Parameters` |
| 70 | 150 | Control > Set RTF Text | `Set RTF text to <p0>` | Changer le texte RTF à <p0> | (paramètres non fiables) | — |  |
| 71 | 151 | Control > Format > Protection > On | `Protection on` | Protection ON |  | — |  |
| 72 | 152 | Control > Format > Protection > Off | `Protection off` | Protection OFF |  | — |  |
| 73 | 153 | Control > Modified > Yes | `Modified` | Modifié |  | — |  |
| 74 | 154 | Control > Modified > No | `Unmodified` | Non-modifié |  | 5 (1 proj.) | `Rich Edit Object : Event ID 154, 0 Parameters` |
| 75 | 155 | Control > Auto Focus > On | `Auto Focus ON` | Auto Focus ON |  | — |  |
| 76 | 156 | Control > Auto Focus > Off | `Auto Focus OFF` | Auto Focus OFF |  | — |  |
| 77 | 157 | Control > Set Text | `Set text to <p0>` | Changer le texte en <p0> | (paramètres non fiables) | — |  |
| 78 | 158 | Control > Print > Set left margin | `Set left margin to <p0> mm` | Mettre la marge à gauche à <p0> mm | (paramètres non fiables) | — |  |
| 79 | 159 | Control > Print > Set right margin | `Set right margin to <p0> mm` | Mettre la marge à droite à <p0> mm | (paramètres non fiables) | — |  |
| 80 | 160 | Control > Print > Set top margin | `Set top margin to <p0> mm` | Mettre la marge en haut à <p0> mm | (paramètres non fiables) | — |  |
| 81 | 161 | Control > Print > Set bottom margin | `Set bottom margin to <p0> mm` | Mettre la marge en bas à <p0> mm | (paramètres non fiables) | — |  |
| -56 | 24 | ? | ? |  |  | 2 (2 proj.) |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Caret > Get caret position | `GetChar(` | Position du curseur |  | 3 (1 proj.) | `Expression ID 80("Rich Edit Object")` |
| 1 | 81 | Caret > Get caret line | `GetLine(` | Ligne avec le curseur |  | 1 (1 proj.) | `Expression ID 81("Rich Edit Object")` |
| 2 | 82 | Position > Get X Position | `GetXPos(` | Position X |  | — |  |
| 3 | 83 | Position > Get Y Position | `GetYPos(` | Position Y |  | — |  |
| 4 | 84 | Size > Get width | `GetWidth(` | Largeur |  | 1 (1 proj.) | `Expression ID 84("Rich Edit Object")` |
| 5 | 85 | Size > Get height | `GetHeight(` | Hauteur |  | 1 (1 proj.) | `Expression ID 85("Rich Edit Object")` |
| 6 | 86 | Text > Get text | `GetText$(` | Récupérer le texte | nombre « First character number » | 4 (4 proj.) | `Expression ID 86("Rich Edit Object")` |
| 7 | 87 | Text > Get selection | `GetSelection$(` | Sélection |  | 12 (7 proj.) | `Expression ID 87("Rich Edit Object")` |
| 8 | 88 | Font > Get font name | `GetFontName$(` | Nom de la police |  | 3 (2 proj.) | `Expression ID 88("Rich Edit Object")` |
| 9 | 89 | Font > Get font size | `GetFontSize(` | Taille de la police |  | 2 (1 proj.) | `Expression ID 89("Rich Edit Object")` |
| 10 | 90 | Font > Get font color | `GetFontColor(` | Couleur de la police |  | 2 (1 proj.) | `Expression ID 90("Rich Edit Object")` |
| 11 | 91 | Scrolling > Get first visible line | `GetFirstLine(` | Première ligne visible |  | — |  |
| 12 | 92 | Scrolling > Get line count | `GetLineCount(` | Nombre de lignes |  | — |  |
| 13 | 93 | Link (2.0) > Get link text | `GetLinkText$(` | Texte du lien |  | — |  |
| 14 | 94 | Text > Get RTF text | `GetRTFText$(` | Texte RTF | nombre « First character number » | — |  |
| 15 | 95 | Text > Get RTF selection | `GetRTFSelection$(` | Sélection RTF |  | — |  |
| 16 | 96 | Text > Get total number of characters | `GetNChars(` | Nombre total de caractères |  | 9 (5 proj.) |  |
| 17 | 97 | Link (2.0) > Get link position | `GetLinkPos(` | Position du lien |  | — |  |
