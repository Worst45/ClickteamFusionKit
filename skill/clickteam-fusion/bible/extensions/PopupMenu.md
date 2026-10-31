# Extension PopupMenu

- Fichier : `PopupMenu.mfx` — installée avec Fusion
- Nom(s) affiché(s) dans les projets : « Popup Menu »
- Usage dans le corpus : 39 fois
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Item Selected (ID) | `<objet>: Item <p0> Selected` | <objet>: Elément <p0> sélectionné | expression numérique « Item ID » | 4 (1 proj.) | `Popup Menu: Event ID -81, 1 Parameters { 1 }` |
| 1 | -82 | Item Selected (Text) | `<objet>: <p0> selected` | <objet>: <p0> est sélectionné | expression chaîne « Item String » | 4 (1 proj.) | `Popup Menu: Event ID -82, 1 Parameters { "Create" }` |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Add Item | `<objet>: Add Item (<p0>, <p1>, <p2>)` | <objet>: Ajouter élément (<p0>, <p1>, <p2>) | expression numérique « Menu Index » ; expression numérique « Item ID » ; expression chaîne « Item String » | — |  |
| 1 | 81 | Add Menu | `<objet>: Add Menu (<p0>, <p1>, <p2>)` | <objet>: Ajouter menu (<p0>, <p1>, <p2>) | expression numérique « Menu Index » ; expression numérique « SubMenu Index » ; expression chaîne « Item String » | — |  |
| 2 | 82 | Add Separator | `<objet>: Add Separator (<p0>)` | <objet>: Ajouter séparateur (<p0>) | expression numérique « Menu Index » | — |  |
| 3 | 83 | Create Menu | `<objet>: Create Menu` | <objet>: Créer menu |  | — |  |
| 4 | 84 | Delete Item | `<objet>: Delete Item (<p0>)` | <objet>: Détruire élément (<p0>) | expression numérique « Item ID » | — |  |
| 5 | 85 | Set Item Text | `<objet>: Set Item Text (<p0>, <p1>)` | <objet>: Fixer le texte de l'élément (<p0>, <p1>) | expression numérique « Item ID » ; expression chaîne « Item String » | — |  |
| 6 | 86 | Enable / Disable | `<objet>: Set Enable (<p0>, <p1>)` | <objet>: Activer (<p0>, <p1>) | expression numérique « Item ID » ; expression numérique « 1 to enable, 0 to disable » | 12 (1 proj.) | `Popup Menu : Event ID 86, 2 Parameters { 3, 1 }` |
| 7 | 87 | Check / Uncheck | `<objet>: Set Check (<p0>, <p1>)` | <objet>: Cocher (<p0>, <p1>) | expression numérique « Item ID » ; expression numérique « 1 to check, 0 to uncheck » | 17 (1 proj.) | `Popup Menu : Event ID 87, 2 Parameters { 3, 1 }` |
| 8 | 88 | Show At | `<objet>: Show Menu at <p0>` | <objet>: Montrer menu à <p0> | position « Position » | 1 (1 proj.) | `Popup Menu : Event ID 88, 1 Parameters { (0,22) from Display }` |
| 9 | 89 | Show At Mouse | `<objet>: Show Menu` | <objet>: Montrer menu |  | 1 (1 proj.) | `Popup Menu : Event ID 89, 0 Parameters` |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Item Text | `GetItemText(` | Texte d'un élément | nombre « Item identifier » → chaîne | — |  |
| 1 | 81 | Get Last Selected Item | `GetSelectedItem(` | Dernier élément sélectionné |  | — |  |
| 2 | 82 | Get Menu Count | `GetMenuCount(` | Nombre de menus |  | — |  |
