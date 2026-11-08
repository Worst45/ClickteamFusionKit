# Extension PopupMenu

- File: `PopupMenu.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | -81 | Item Selected (ID) | `<object>: Item <p0> Selected` | <object>: Elément <p0> sélectionné | numeric expression “Item ID” |
| 1 | -82 | Item Selected (Text) | `<object>: <p0> selected` | <object>: <p0> est sélectionné | string expression “Item String” |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Add Item | `<object>: Add Item (<p0>, <p1>, <p2>)` | <object>: Ajouter élément (<p0>, <p1>, <p2>) | numeric expression “Menu Index”; numeric expression “Item ID”; string expression “Item String” |
| 1 | 81 | Add Menu | `<object>: Add Menu (<p0>, <p1>, <p2>)` | <object>: Ajouter menu (<p0>, <p1>, <p2>) | numeric expression “Menu Index”; numeric expression “SubMenu Index”; string expression “Item String” |
| 2 | 82 | Add Separator | `<object>: Add Separator (<p0>)` | <object>: Ajouter séparateur (<p0>) | numeric expression “Menu Index” |
| 3 | 83 | Create Menu | `<object>: Create Menu` | <object>: Créer menu |  |
| 4 | 84 | Delete Item | `<object>: Delete Item (<p0>)` | <object>: Détruire élément (<p0>) | numeric expression “Item ID” |
| 5 | 85 | Set Item Text | `<object>: Set Item Text (<p0>, <p1>)` | <object>: Fixer le texte de l'élément (<p0>, <p1>) | numeric expression “Item ID”; string expression “Item String” |
| 6 | 86 | Enable / Disable | `<object>: Set Enable (<p0>, <p1>)` | <object>: Activer (<p0>, <p1>) | numeric expression “Item ID”; numeric expression “1 to enable, 0 to disable” |
| 7 | 87 | Check / Uncheck | `<object>: Set Check (<p0>, <p1>)` | <object>: Cocher (<p0>, <p1>) | numeric expression “Item ID”; numeric expression “1 to check, 0 to uncheck” |
| 8 | 88 | Show At | `<object>: Show Menu at <p0>` | <object>: Montrer menu à <p0> | position “Position” |
| 9 | 89 | Show At Mouse | `<object>: Show Menu` | <object>: Montrer menu |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Get Item Text | `GetItemText(` | Texte d'un élément | number “Item identifier” → string |
| 1 | 81 | Get Last Selected Item | `GetSelectedItem(` | Dernier élément sélectionné |  |
| 2 | 82 | Get Menu Count | `GetMenuCount(` | Nombre de menus |  |
