# Extension TreeControl

- Fichier : `TreeControl.mfx` — installée avec Fusion
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Selection Changed | `<objet>: Selection Changed` | <objet>: Sélection changée |  | — |  |
| 1 | -82 | On Item Created | `<objet>: Item Created` | <objet>: Création d'un élément |  | — |  |
| 2 | -83 | On Item Deleted | `<objet>: Item Deleted` | <objet>: Destruction d'un élément |  | — |  |
| 3 | -84 | Is Folder ? | `<objet>: Is Folder (<p0>) ?` | <objet>: Est-ce un dossier (<p0>)? | expression numérique « ID » | — |  |
| 4 | -85 | On Item Text Changed | `<objet>: On Item Text Changed` | <objet>: Lors du changement de texte d'un élément |  | — |  |
| 5 | -86 | Clicked with left button? | `<objet>: Clicked with left button` | <objet>: cliqué avec le bouton gauche |  | — |  |
| 6 | -87 | Clicked with right button? | `<objet>: Clicked with right button` | <objet>: cliqué avec le bouton droit |  | — |  |
| 7 | -88 | Double-clicked? | `<objet>: Double-clicked` | <objet>: Double-clic |  | — |  |
| 8 | -89 | Is Visible ? | `<objet> is visible` | <objet> est visible |  | — |  |
| 9 | -90 | Has input focus ? | `<objet> has input focus` | <objet> a le focus |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New/Delete > Insert Folder | `Insert Folder (<p0>, <p1>, <p2>)` | Insérer dossier (<p0>, <p1>, <p2>) | expression chaîne « Name » ; expression numérique « Parent ID, or -1 for ROOT » ; expression numérique « Insert After ID, or -1 for beginning, -2 for end » | — |  |
| 1 | 81 | New/Delete > Delete Folder/Item | `Delete Folder/Item <p0>` | Détruire dossier/élément <p0> | expression numérique « ID » | — |  |
| 2 | 82 | Edit > Set Item Text | `Set Text to <p0> : <p1>` | Fixer le texte à <p0>: <p1> | expression numérique « ID » ; expression chaîne « Name » | — |  |
| 3 | 83 | Select > Open Folder | `Open Folder <p0>` | Ouvrir le dossier <p0> | expression numérique « ID » | — |  |
| 4 | 84 | Select > Close Folder | `Close Folder <p0>` | Fermer le dossier <p0> | expression numérique « ID » | — |  |
| 5 | 85 | New/Delete > Insert Item | `Insert Item (<p0>, <p1>, <p2>)` | Insérer élément (<p0>, <p1>, <p2>) | expression chaîne « Name » ; expression numérique « Parent ID, or -1 for ROOT » ; expression numérique « Insert After ID, or -1 for beginning, -2 for end » | — |  |
| 6 | 86 | Select > Select | `Select Item (<p0>)` | Sélectionner élément (<p0>) | expression numérique « ID » | — |  |
| 7 | 87 | File > Explore Path | `Explore <p0>` | Explorer <p0> | expression chaîne « Directory Path » | — |  |
| 8 | 88 | File > Load Tree | `Load Tree (<p0>)` | Charger l'arbre (<p0>) | nom de fichier « Filename » | — |  |
| 9 | 89 | File > Save Tree | `Save Tree (<p0>)` | Enregistrer l'arbre (<p0>) | nom de fichier « Filename » | — |  |
| 10 | 90 | Visibility > Make Object Reappear | `Show Tree` | Montrer l'arbre |  | — |  |
| 11 | 91 | Visibility > Make Object Invisible | `Hide Tree` | Cacher l'arbre |  | — |  |
| 12 | 92 | Control > Highlight | `Enable Tree` | Activer l'arbre |  | — |  |
| 13 | 93 | Control > Dehighlight | `Disable Tree` | Désactiver l'arbre |  | — |  |
| 14 | 94 | Select > Select Text | `Select Text (<p0>)` | Sélectionner le texte (<p0>) | expression chaîne « Name » | — |  |
| 15 | 95 | File > Explore Path (Only Folders) | `Explore Folders <p0>` | Explorer les dossiers <p0> | expression chaîne « Directory Path » | — |  |
| 16 | 96 | File > Explore Path (Only Files) | `Explore Files <p0>` | Explorer les fichiers <p0> | expression chaîne « Directory Path » | — |  |
| 17 | 97 | Size > Set Horizontal Size | `Set Width <p0>` | Fixer la largeur à <p0> | expression numérique « Size » | — |  |
| 18 | 98 | Size > Set Vertical Size | `Set Height <p0>` | Fixer la hauteur à <p0> | expression numérique « Size » | — |  |
| 19 | 99 | Edit > Set Item Data | `Set Data <p1> to <p0>` | Fixer la donnée interne à <p0> | expression numérique « ID » ; expression numérique « Value » | — |  |
| 20 | 100 | Edit > Sort Children | `Sort Children of <p0> (Subdirs : <p1>)` | Trier les enfants de <p0> (sous dossier: <p1>) | expression numérique « ID » ; expression numérique « Subdirs : (0) No, (1) Yes » | — |  |
| 21 | 101 | Control > Get Focus | `Get Focus` | Prendre le focus |  | — |  |
| 22 | 102 | Control > Lose Focus | `Lose Focus` | Perdre le focus |  | — |  |
| 23 | 103 | New/Delete > Reset | `Reset` | Remise à zéro |  | — |  |
| 24 | 104 | Edit > Edit Item | `Edit Item <p0>` | Editer l'élément <p0> | expression numérique « ID » | — |  |
| 25 | 105 | Control > Set background color | `<objet>: Set background color to <p0>` | <objet>: Fixer la couleur de fond à <p0> | couleur « Set background color » | — |  |
| 26 | 106 | Edit > Set Item Image | `Set Image #<p0>` | Fixer l'image #<p0> | expression numérique « ID » ; expression numérique « Image Index (1-based) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Text of | `GetText$(` | Texte de | nombre « Identifier » → chaîne | — |  |
| 1 | 81 | Get Folder Count | `GetNFolders(` | Nombre de dossiers |  | — |  |
| 2 | 82 | Get Item Count | `GetNItem(` | Nombre d'éléments |  | — |  |
| 3 | 83 | Get Parent ID of | `GetParentID(` | ID parent de | nombre « Identifier » | — |  |
| 4 | 84 | Get Child Count of | `GetNChildren(` | Nombre d'enfants de | nombre « Identifier » | — |  |
| 5 | 85 | Get Selected Item | `GetCurSelID(` | Elément sélectionné |  | — |  |
| 6 | 86 | Get Index of | `GetIndex(` | Index de | nombre « Identifier » | — |  |
| 7 | 87 | Get Type of | `GetType(` | Type de | nombre « Identifier » | — |  |
| 8 | 88 | Get ID from Index | `GetID(` | ID à partir d'un index | nombre « Index » | — |  |
| 9 | 89 | Get ID from Text | `GetIDFromText(` | ID à partir d'un texte | chaîne « Text to find » | — |  |
| 10 | 90 | Get Index from Text | `GetIndexFromText(` | Index à partir d'un texte | chaîne « Text to find » | — |  |
| 11 | 91 | Get Full Path of | `GetFullPath$(` | Cheminement complet de | nombre « Identifier » → chaîne | — |  |
| 12 | 92 | Get First Child of | `GetFirstChild(` | Premier enfant de | nombre « Identifier » | — |  |
| 13 | 93 | Get Next Sibling Item of | `GetNextSiblingItem(` | Prochain élément frère de | nombre « Identifier » | — |  |
| 14 | 94 | Get Text from Index | `GetTextFromIndex$(` | Texte à partir d'un index | nombre « Index » → chaîne | — |  |
| 15 | 95 | Get Data of | `GetData(` | Donnée interne de | nombre « Identifier » | — |  |
| 16 | 96 | Size > Get Width | `GetWidth(` | Largeur |  | — |  |
| 17 | 97 | Size > Get Height | `GetHeight(` | Hauteur |  | — |  |
| 18 | 98 | Get Last Created Item | `GetLastCreatedID(` | Dernier élément créé |  | — |  |
| 19 | 99 | Get Previous Sibling Item of | `GetPrevSiblingItem(` | Elément frère précédent de | nombre | — |  |
| 20 | 100 | Get Image of | `GetImage(` | Image de | nombre « Identifier » | — |  |
