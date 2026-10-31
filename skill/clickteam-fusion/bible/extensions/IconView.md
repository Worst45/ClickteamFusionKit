# Extension IconView

- Fichier : `IconView.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On left-click | `<objet> : On Left-Click` |  |  | — |  |
| 1 | -82 | On right-click | `<objet> : On Right-Click` |  |  | — |  |
| 2 | -83 | On double-click | `<objet> : On double-click` |  |  | — |  |
| 3 | -84 | On label edit started | `<objet> : On label edit started` |  |  | — |  |
| 4 | -85 | On label edit ended | `<objet> : On label edit ended` |  |  | — |  |
| 5 | -86 | Is icon selected? | `<objet> : Icon <p0> is selected` |  | expression numérique « Enter icon number » | — |  |
| 6 | -87 | Is icon highlighted? | `<objet> : Icon <p0> is highlighted` |  | expression numérique « Enter icon number » | — |  |
| 7 | -88 | Drag started | `<objet> : On Drag Started` |  |  | — |  |
| 8 | -89 | Drag ended | `<objet> : On Drag Ended` |  |  | — |  |
| 9 | -90 | On right double-click | `<objet> : On Right double-click` |  |  | — |  |
| 10 | -91 | On return pressed | `<objet> : On return pressed` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dimensions > Set width | `Set width to <p0>` |  | expression numérique « Enter width » | — |  |
| 1 | 81 | Dimensions > Set height | `Set height to <p0>` |  | expression numérique « Enter height » | — |  |
| 2 | 82 | Position > Set X co-ordinate | `Set X to <p0>` |  | expression numérique « Enter X co-ordinate » | — |  |
| 3 | 83 | Position > Set Y co-ordinate | `Set Y to <p0>` |  | expression numérique « Enter Y co-ordinate » | — |  |
| 4 | 84 | Icons > Add icon | `Add icon <p0> with text <p1>` |  | expression numérique « Enter index of icon in image list (0-based) » ; expression chaîne « Enter text » | — |  |
| 5 | 85 | Image list > Set image list from BMP file | `Set image list to file <p0> (small images: <p1>)` |  | expression chaîne « Enter large images bitmap file » ; expression chaîne « Enter small images bitmap file (optional) » | — |  |
| 6 | 86 | Icons > Set label text | `Set label at <p0> to <p1>` |  | expression numérique « Enter icon number » ; expression chaîne « Enter new text » | — |  |
| 7 | 87 | Icons > Clear all icons | `Clear all icons` |  |  | — |  |
| 8 | 88 | Icons > Delete icon | `Delete icon at <p0>` |  | expression numérique « Enter icon number » | — |  |
| 9 | 89 | Appearance > Set background colour | `Set background colour to <p0>` |  | expression numérique « Enter background colour (e.g. GetRGB(255,255,255)) » | — |  |
| 10 | 90 | Appearance > Set view style | `Set view to <p0>` |  | expression numérique « Enter view (1 = icons, 2 = small icons, 3 = list) » | — |  |
| 11 | 91 | Icons > Arrange icons | `Arrange icons` |  |  | — |  |
| 12 | 92 | Icons > Force label edit | `Edit icon number <p0>` |  | expression numérique « Enter icon number » | — |  |
| 13 | 93 | Appearance > Set icon spacing | `Set icon spacing to <p0> x <p1>` |  | expression numérique « Enter horizontal spacing (from top-left of icon) » ; expression numérique « Enter vertical spacing (from top-left of icon) » | — |  |
| 14 | 94 | Icons > Move icon | `Move icon number <p0> to ( <p1>, <p2>)` |  | expression numérique « Enter icon number » ; expression numérique « Enter X to move to » ; expression numérique « Enter Y to move to » | — |  |
| 15 | 95 | Icons > Select icon | `Select icon number <p0>` |  | expression numérique « Enter icon number to select » | — |  |
| 16 | 96 | Icons > Focus icon | `Focus icon number <p0>` |  | expression numérique « Enter icon number to focus » | — |  |
| 17 | 97 | Icons > Unselect icon | `Unselect icon number <p0>` |  | expression numérique « Enter icon number to unselect » | — |  |
| 18 | 98 | Appearance > Set label text colour | `Set text colour to <p0>` |  | expression numérique « Enter text colour (e.g. GetRGB(0,0,0)) » | — |  |
| 19 | 99 | Appearance > Set label colour | `Set label colour to <p0>` |  | expression numérique « Enter label colour (e.g. GetRGB(255,255,255)) » | — |  |
| 20 | 100 | Icons > Dehighlight icon | `Dehighlight icon number <p0>` |  | expression numérique « Enter icon number to dehighlight » | — |  |
| 21 | 101 | Icons > Highlight icon | `Highlight icon number <p0>` |  | expression numérique « Enter icon number to highlight » | — |  |
| 22 | 102 | Event > On label edit ended > Cancel edit changes | `Cancel edit changes` |  |  | — |  |
| 23 | 103 | Window > Focus On | `Focus On` |  |  | — |  |
| 24 | 104 | Window > Focus Off | `Focus Off` |  |  | — |  |
| 25 | 105 | Window > Show | `Show` |  |  | — |  |
| 26 | 106 | Window > Hide | `Hide` |  |  | — |  |
| 27 | 107 | Image list > Add file's associated icon to image list | `Add to imagelist associated icon for <p0>` |  | expression chaîne « Enter filename to get icon from » | — |  |
| 28 | 108 | Image list > Add BMP file to image list | `Add file <p0> to image list (small images: <p1>)` |  | expression chaîne « Enter BMP file for large images » ; expression chaîne « Enter BMP file for small images (optional) » | — |  |
| 29 | 109 | Icons > Insert icon | `Insert icon <p0> with text <p1> to position <p2>` |  | expression numérique « Enter index of icon in image list (0-based) » ; expression chaîne « Enter text of label » ; expression numérique « Enter position to place icon in » | — |  |
| 30 | 110 | Image list > Save image list to BMP file | `Save image list to <p0> (small images to <p1>)` |  | expression chaîne « Enter BMP file to save large image list to » ; expression chaîne « Enter BMP file to save small image list to (optional) » | — |  |
| 31 | 111 | Image list > Attach imagelist to Listview object | `Attach Icon View's imagelist to <p0>` |  | objet « Select a Listview object to attach imagelist to » | — |  |
| 32 | 112 | Image list > Set icon number at Listview line | `Set icon to <p2> at line <p1> in <p0>` |  | objet « Select Listview object to modify » ; expression numérique « Enter line to set image for (0-based) » ; expression numérique « Enter icon index in imagelist (0-based) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Dimensions > Get width | `ivWidth(` |  |  | — |  |
| 1 | 81 | Dimensions > Get heigh | `ivHeight(` |  |  | — |  |
| 2 | 82 | Position > Get X co-ordinate | `ivGetX(` |  |  | — |  |
| 3 | 83 | Position > Get Y co-ordinate | `ivGetY(` |  |  | — |  |
| 4 | 84 | Icons > Get number of icons | `ivNumIcons(` |  |  | — |  |
| 5 | 85 | Icons > Get label | `ivLabelAt$(` |  | nombre → chaîne | — |  |
| 6 | 86 | Selection > Get focused icon number | `ivFocusedIcon(` |  |  | — |  |
| 7 | 87 | Selection > Get selection length | `ivSelCount(` |  |  | — |  |
| 8 | 88 | Find > Find text | `ivFind(` |  | chaîne ; nombre | — |  |
| 11 | 91 | Selection > Get selected icon no. | `ivSelIconAt(` |  | nombre | — |  |
| 12 | 92 | Event > On label edit ended > Get new label text | `ivEditLabel$(` |  | → chaîne | — |  |
| 13 | 93 | Image list > Get last added icon index | `ivLastIconIndex(` |  |  | — |  |
| 14 | 94 | Icons > Get image index at | `ivGetIcon(` |  | nombre | — |  |
