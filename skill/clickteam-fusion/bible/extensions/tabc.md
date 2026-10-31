# Extension tabc

- Fichier : `tabc.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Tab changed ? | `<objet>: On tab changed` |  |  | — |  |
| 1 | -82 | LMB clicked ? | `<objet>: On left mouse button clicked` |  |  | — |  |
| 2 | -83 | LMB double-clicked ? | `<objet>: On left mouse button double-clicked` |  |  | — |  |
| 3 | -84 | RMB clicked ? | `<objet>: On right mouse button clicked` |  |  | — |  |
| 4 | -85 | RMB double-clicked ? | `<objet>: On right mouse button double-clicked` |  |  | — |  |
| 5 | -86 | Tab changed by user ? | `<objet>: On tab changed by user` |  |  | — |  |
| 6 | -87 | Tab changed to (by caption) ? | `<objet>: On tab changed to <p0>` |  | expression chaîne « Caption » | — |  |
| 7 | -88 | Tab changed to (by index) ? | `<objet>: On tab index changed to <p0>` |  | expression numérique « Index » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Modify tabs > Insert tab | `Insert tab with caption <p0>, icon <p1> at <p2>` |  | expression chaîne « Caption » ; expression numérique « Icon index (-1: None) » ; expression numérique « Index (-1: Add to the end) » | — |  |
| 1 | 81 | Modify tabs > Delete tab | `Delete tab at <p1>` |  | expression numérique « Index » | — |  |
| 2 | 82 | Modify tabs > Delete all tabs | `Delete all tabs` |  |  | — |  |
| 3 | 83 | Set current tab | `Set current tab to <p0>` |  | expression numérique « Index » | — |  |
| 4 | 84 | Modify tabs > Set tab caption | `Set caption of tab <p0> to <p1>` |  | expression numérique « Index » ; expression chaîne « Caption » | — |  |
| 5 | 85 | Window settings > Set width | `Set width to <p0>` |  | expression numérique « Width » | — |  |
| 6 | 86 | Window settings > Set visibility | `Set visibility to <p0>` |  | expression numérique « Visiblity (0 = Hide, 1 = Show) » | — |  |
| 7 | 87 | Modify tabs > Hightlight tab | `Hightlight tab <p0>: <p1>` |  | expression numérique « Index » ; expression numérique « Highlight (0 = False, 1 = True) » | — |  |
| 8 | 88 | Tab settings > Set minimal tab width | `Set minimal tab width to <p0>` |  | expression numérique « Width » | — |  |
| 9 | 89 | Tab settings > Set padding | `Set padding to (<p0>,<p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 10 | 90 | Tab settings > Set tab size | `Set tab size to (<p0>,<p1>)` |  | expression numérique « Width » ; expression numérique « Height » | — |  |
| 11 | 91 | Deselect all | `Deselect all` |  |  | — |  |
| 14 | 94 | Modify tabs > Insert tabs from list | `Insert tabs from list <p0> at <p1>` |  | expression chaîne « Semicolon-separated list » ; expression numérique « Index (-1: Add to the end) » | — |  |
| 15 | 95 | Window settings > Set height | `Set height to <p0>` |  | expression numérique « Height » | — |  |
| 16 | 96 | Window settings > Set style | `Set style to <p0>` |  | expression numérique « Style (See "Styles", merge with "or" operator) » | — |  |
| 18 | 98 | Modify icons > Set icon from image | `Set icon <p0> from image <p1>, transparent color = <p2>` |  | expression numérique « Index (-1: Add to the end) » ; nom de fichier « Image path » ; couleur « Transparent color (-1: First pixel color) » | — |  |
| 19 | 99 | Modify icons > Set icon from active | `Set icon <p0> from active object <p1>` |  | expression numérique « Index (-1: Add to the end) » ; objet « Object » | — |  |
| 20 | 100 | Modify icons > Remove icon | `Remove icon <p0>` |  | expression numérique « Index » | — |  |
| 21 | 101 | Modify icons > Remove all icons | `Remove all icons` |  |  | — |  |
| 22 | 102 | Modify icons > Set icon from overlay | `Set icon <p0> from overlay address <p1>` |  | expression numérique « Index (-1: Add to the end) » ; expression numérique « Overlay address » | — |  |
| 23 | 103 | Window settings > Force redraw | `Force redraw` |  |  | — |  |
| 24 | 104 | Modify tabs > Set tab icon | `Set icon of tab <p0> to <p1>` |  | expression numérique « Index » ; expression numérique « Icon index (-1: None) » | — |  |
| 25 | 105 | Modify icons > Set icons from active (horizontal sequence) | `Set icons at <p0> from active object <p1>` |  | expression numérique « Starting index (-1: Add to the end) » ; objet « Object » | — |  |
| 26 | 106 | Modify tabs > Insert tabs with icons | `Insert tabs with icons from list <p0> at <p1>` |  | expression chaîne « List (icon1;text1;icon2;...) » ; expression numérique « Index (-1: Add to the end) » | — |  |
| 27 | 107 | Modify tabs > Set tab parameter | `Set parameter of tab <p0> to <p1>` |  | expression numérique « Index » ; expression numérique « Parameter » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get current tab | `CurTab(` |  |  | — |  |
| 1 | 81 | Get tab caption | `TabCaption$(` |  | nombre « Index » → chaîne | — |  |
| 2 | 82 | Get tab count | `TabCount(` |  |  | — |  |
| 3 | 83 | Get row count | `RowCount(` |  |  | — |  |
| 5 | 85 | Size > Get width | `⡗` |  |  | — |  |
| 6 | 86 | Size > Get height | `⡈` |  |  | — |  |
| 7 | 87 | Styles > Tabs at bottom | `StBottom(` |  |  | — |  |
| 8 | 88 | Styles > Tabs as buttons | `StButtons(` |  |  | — |  |
| 9 | 89 | Styles > Fixed tab width | `StFixed(` |  |  | — |  |
| 10 | 90 | Styles > Flat buttons | `StFlat(` |  |  | — |  |
| 11 | 91 | Styles > Multi-line | `StMulti(` |  |  | — |  |
| 12 | 92 | Styles > Vertical tabs | `StVertical(` |  |  | — |  |
| 13 | 93 | Styles > Vertical: right side | `StRight(` |  |  | — |  |
| 14 | 94 | Styles > Single-line | `StSingle(` |  |  | — |  |
| 15 | 95 | Styles > Tabs as tabs | `StTabs(` |  |  | — |  |
| 16 | 96 | Styles > No tab stretching | `StNoStretch(` |  |  | — |  |
| 17 | 97 | Get tab icon | `TabIcon(` |  | nombre « Index » | — |  |
| 18 | 98 | Find tab from caption | `FindTab(` |  | chaîne « Caption » | — |  |
| 19 | 99 | Get tab X | `TabX(` |  | nombre « Index (-1: Last) » | — |  |
| 20 | 100 | Get tab Y | `TabY(` |  | nombre « Index (-1: Last) » | — |  |
| 21 | 101 | Get tab width | `TabW(` |  | nombre « Index (-1: Last) » | — |  |
| 22 | 102 | Get tab height | `TabH(` |  | nombre « Index (-1: Last) » | — |  |
| 23 | 103 | Get tab parameter | `TabParam(` |  | nombre « Index » | — |  |
