# Extension TreeControl

- File: `TreeControl.mfx` — installed with Fusion
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Selection Changed | `<object>: Selection Changed` | <object>: Sélection changée |  | — |  |
| 1 | -82 | On Item Created | `<object>: Item Created` | <object>: Création d'un élément |  | — |  |
| 2 | -83 | On Item Deleted | `<object>: Item Deleted` | <object>: Destruction d'un élément |  | — |  |
| 3 | -84 | Is Folder ? | `<object>: Is Folder (<p0>) ?` | <object>: Est-ce un dossier (<p0>)? | numeric expression “ID” | — |  |
| 4 | -85 | On Item Text Changed | `<object>: On Item Text Changed` | <object>: Lors du changement de texte d'un élément |  | — |  |
| 5 | -86 | Clicked with left button? | `<object>: Clicked with left button` | <object>: cliqué avec le bouton gauche |  | — |  |
| 6 | -87 | Clicked with right button? | `<object>: Clicked with right button` | <object>: cliqué avec le bouton droit |  | — |  |
| 7 | -88 | Double-clicked? | `<object>: Double-clicked` | <object>: Double-clic |  | — |  |
| 8 | -89 | Is Visible ? | `<object> is visible` | <object> est visible |  | — |  |
| 9 | -90 | Has input focus ? | `<object> has input focus` | <object> a le focus |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | New/Delete > Insert Folder | `Insert Folder (<p0>, <p1>, <p2>)` | Insérer dossier (<p0>, <p1>, <p2>) | string expression “Name”; numeric expression “Parent ID, or -1 for ROOT”; numeric expression “Insert After ID, or -1 for beginning, -2 for end” | — |  |
| 1 | 81 | New/Delete > Delete Folder/Item | `Delete Folder/Item <p0>` | Détruire dossier/élément <p0> | numeric expression “ID” | — |  |
| 2 | 82 | Edit > Set Item Text | `Set Text to <p0> : <p1>` | Fixer le texte à <p0>: <p1> | numeric expression “ID”; string expression “Name” | — |  |
| 3 | 83 | Select > Open Folder | `Open Folder <p0>` | Ouvrir le dossier <p0> | numeric expression “ID” | — |  |
| 4 | 84 | Select > Close Folder | `Close Folder <p0>` | Fermer le dossier <p0> | numeric expression “ID” | — |  |
| 5 | 85 | New/Delete > Insert Item | `Insert Item (<p0>, <p1>, <p2>)` | Insérer élément (<p0>, <p1>, <p2>) | string expression “Name”; numeric expression “Parent ID, or -1 for ROOT”; numeric expression “Insert After ID, or -1 for beginning, -2 for end” | — |  |
| 6 | 86 | Select > Select | `Select Item (<p0>)` | Sélectionner élément (<p0>) | numeric expression “ID” | — |  |
| 7 | 87 | File > Explore Path | `Explore <p0>` | Explorer <p0> | string expression “Directory Path” | — |  |
| 8 | 88 | File > Load Tree | `Load Tree (<p0>)` | Charger l'arbre (<p0>) | file name “Filename” | — |  |
| 9 | 89 | File > Save Tree | `Save Tree (<p0>)` | Enregistrer l'arbre (<p0>) | file name “Filename” | — |  |
| 10 | 90 | Visibility > Make Object Reappear | `Show Tree` | Montrer l'arbre |  | — |  |
| 11 | 91 | Visibility > Make Object Invisible | `Hide Tree` | Cacher l'arbre |  | — |  |
| 12 | 92 | Control > Highlight | `Enable Tree` | Activer l'arbre |  | — |  |
| 13 | 93 | Control > Dehighlight | `Disable Tree` | Désactiver l'arbre |  | — |  |
| 14 | 94 | Select > Select Text | `Select Text (<p0>)` | Sélectionner le texte (<p0>) | string expression “Name” | — |  |
| 15 | 95 | File > Explore Path (Only Folders) | `Explore Folders <p0>` | Explorer les dossiers <p0> | string expression “Directory Path” | — |  |
| 16 | 96 | File > Explore Path (Only Files) | `Explore Files <p0>` | Explorer les fichiers <p0> | string expression “Directory Path” | — |  |
| 17 | 97 | Size > Set Horizontal Size | `Set Width <p0>` | Fixer la largeur à <p0> | numeric expression “Size” | — |  |
| 18 | 98 | Size > Set Vertical Size | `Set Height <p0>` | Fixer la hauteur à <p0> | numeric expression “Size” | — |  |
| 19 | 99 | Edit > Set Item Data | `Set Data <p1> to <p0>` | Fixer la donnée interne à <p0> | numeric expression “ID”; numeric expression “Value” | — |  |
| 20 | 100 | Edit > Sort Children | `Sort Children of <p0> (Subdirs : <p1>)` | Trier les enfants de <p0> (sous dossier: <p1>) | numeric expression “ID”; numeric expression “Subdirs : (0) No, (1) Yes” | — |  |
| 21 | 101 | Control > Get Focus | `Get Focus` | Prendre le focus |  | — |  |
| 22 | 102 | Control > Lose Focus | `Lose Focus` | Perdre le focus |  | — |  |
| 23 | 103 | New/Delete > Reset | `Reset` | Remise à zéro |  | — |  |
| 24 | 104 | Edit > Edit Item | `Edit Item <p0>` | Editer l'élément <p0> | numeric expression “ID” | — |  |
| 25 | 105 | Control > Set background color | `<object>: Set background color to <p0>` | <object>: Fixer la couleur de fond à <p0> | color “Set background color” | — |  |
| 26 | 106 | Edit > Set Item Image | `Set Image #<p0>` | Fixer l'image #<p0> | numeric expression “ID”; numeric expression “Image Index (1-based)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Text of | `GetText$(` | Texte de | number “Identifier” → string | — |  |
| 1 | 81 | Get Folder Count | `GetNFolders(` | Nombre de dossiers |  | — |  |
| 2 | 82 | Get Item Count | `GetNItem(` | Nombre d'éléments |  | — |  |
| 3 | 83 | Get Parent ID of | `GetParentID(` | ID parent de | number “Identifier” | — |  |
| 4 | 84 | Get Child Count of | `GetNChildren(` | Nombre d'enfants de | number “Identifier” | — |  |
| 5 | 85 | Get Selected Item | `GetCurSelID(` | Elément sélectionné |  | — |  |
| 6 | 86 | Get Index of | `GetIndex(` | Index de | number “Identifier” | — |  |
| 7 | 87 | Get Type of | `GetType(` | Type de | number “Identifier” | — |  |
| 8 | 88 | Get ID from Index | `GetID(` | ID à partir d'un index | number “Index” | — |  |
| 9 | 89 | Get ID from Text | `GetIDFromText(` | ID à partir d'un texte | string “Text to find” | — |  |
| 10 | 90 | Get Index from Text | `GetIndexFromText(` | Index à partir d'un texte | string “Text to find” | — |  |
| 11 | 91 | Get Full Path of | `GetFullPath$(` | Cheminement complet de | number “Identifier” → string | — |  |
| 12 | 92 | Get First Child of | `GetFirstChild(` | Premier enfant de | number “Identifier” | — |  |
| 13 | 93 | Get Next Sibling Item of | `GetNextSiblingItem(` | Prochain élément frère de | number “Identifier” | — |  |
| 14 | 94 | Get Text from Index | `GetTextFromIndex$(` | Texte à partir d'un index | number “Index” → string | — |  |
| 15 | 95 | Get Data of | `GetData(` | Donnée interne de | number “Identifier” | — |  |
| 16 | 96 | Size > Get Width | `GetWidth(` | Largeur |  | — |  |
| 17 | 97 | Size > Get Height | `GetHeight(` | Hauteur |  | — |  |
| 18 | 98 | Get Last Created Item | `GetLastCreatedID(` | Dernier élément créé |  | — |  |
| 19 | 99 | Get Previous Sibling Item of | `GetPrevSiblingItem(` | Elément frère précédent de | number | — |  |
| 20 | 100 | Get Image of | `GetImage(` | Image de | number “Identifier” | — |  |
