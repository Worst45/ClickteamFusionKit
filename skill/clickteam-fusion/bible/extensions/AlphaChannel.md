# Extension AlphaChannel

- Fichier : `AlphaChannel.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Animation > Is an animation ID playing? | `<objet> : Animation ID <p0> is playing?` |  | expression numérique « Enter the ID of the animation (0 = first) » | — |  |
| 1 | -82 | Animation > Is an animation name playing? | `<objet> : Animation <p0> is playing?` |  | expression chaîne « Enter the name of the animation » | — |  |
| 2 | -83 | Animation > Animation ID has finished | `<objet> : Animation ID <p0> has finished` |  | expression numérique « Enter the ID of the animation (0 = first) » | — |  |
| 3 | -84 | Animation > Animation name has finished | `<objet> : Animation <p0> has finished` |  | expression chaîne « Enter the name of the animation » | — |  |
| 4 | -85 | Animation > Compare to current animation frame | `<objet> : Current animation frame <p0>` |  | comparaison numérique « Compare to the current animation frame » | — |  |
| 5 | -86 | Image > Compare to current image number | `<objet> : Current image <p0>` |  | comparaison numérique « Compare to the current image number » | — |  |
| 6 | -87 | Image > Compare to current alpha number | `<objet> : Current alpha channel <p0>` |  | comparaison numérique « Compare to the current alpha number » | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Image > Change image/alpha number | `Change Image to <p0>` |  | expression numérique « Enter the number of the image » | — |  |
| 1 | 81 | Image > Change picture number | `Change Picture to <p0>` |  | expression numérique « Enter the number of the image » | — |  |
| 2 | 82 | Image > Change alpha channel number | `Change Alpha Channel to <p0>` |  | expression numérique « Enter the number of the image » | — |  |
| 3 | 83 | Animation > Start | `Start animation` |  |  | — |  |
| 4 | 84 | Animation > Stop | `Stop animation` |  |  | — |  |
| 5 | 85 | Animation > Change animation, by ID | `Change animation to ID <p0>` |  | expression numérique « Enter the ID of the animation (0 = first) » | — |  |
| 6 | 86 | Animation > Change animation, by name | `Change animation to <p0>` |  | expression chaîne « Enter the name of the animation » | — |  |
| 7 | 87 | Animation > Change animation speed | `Change animation speed to <p0>` |  | expression numérique « Enter the animation speed (5000 = 50fps) » | — |  |
| 8 | 88 | Animation > Change animation frame | `Change animation frame to <p0>` |  | expression numérique « Enter the animation frame (0 = first) » | — |  |
| 9 | 89 | Animation > Restore animation speed | `Restore animation speed` |  |  | — |  |
| 10 | 90 | Image > Load image > Load picture (BMP, GIF, JPEG) | `Load image from file <p1> into number <p0> (autogenerate alpha: <p2>)` |  | expression numérique « Enter the number to load into » ; nom de fichier « Supported image types\|*.bmp;*.dib;*.rle;*.pcx;*.gif;*.lbm;*.iff;*.jpg;*.jpeg » ; expression numérique « Autogenerate alpha channel? (0=no, 1=yes transp black, 2=transp top left pixel) » | — |  |
| 11 | 91 | Image > Load image > Load alpha (BMP, GIF, JPEG) | `Load alpha channel from image file <p1> into number <p0>` |  | expression numérique « Enter the number to load into » ; nom de fichier « Supported image types\|*.bmp;*.dib;*.rle;*.pcx;*.gif;*.lbm;*.iff;*.jpg;*.jpeg » | — |  |
| 12 | 92 | Image > Free image > Free picture number | `Free external image at number <p0>` |  | expression numérique « Enter the number to free external file from » | — |  |
| 13 | 93 | Image > Free image > Free alpha channel number | `Free external alpha channel at number <p0>` |  | expression numérique « Enter the number to free external file from » | — |  |
| 14 | 94 | Set angle | `Rotate image to <p0> degrees` |  | expression numérique « Enter new angle (decimals are allowed) » | — |  |
| 15 | 95 | Resize > Width, pixels | `Resize image width to <p0> px` |  | expression numérique « New image width, in pixels » | — |  |
| 16 | 96 | Resize > Height, pixels | `Resize image height to <p0> px` |  | expression numérique « New image height, in pixels » | — |  |
| 17 | 97 | Resize > Width, percentage | `Resize image width to <p0> %  of original` |  | expression numérique « New width, as a percentage of original » | — |  |
| 18 | 98 | Resize > Height, percentage | `Resize image height to <p0> %  of original` |  | expression numérique « New height, as a percentage of original » | — |  |
| 19 | 99 | Resize > Restore image size | `Restore image size` |  |  | — |  |
| 20 | 100 | Hotspot > Set to X,Y | `Set hotspot to ( <p0>, <p1>)` |  | expression numérique « Enter X coordinate of hotspot » ; expression numérique « Enter Y coordinate of hotspot » | — |  |
| 21 | 101 | Hotspot > Top-left | `Set hotspot to top-left` |  |  | — |  |
| 22 | 102 | Hotspot > Top-centre | `Set hotspot to top-centre` |  |  | — |  |
| 23 | 103 | Hotspot > Top-right | `Set hotspot to top-right` |  |  | — |  |
| 24 | 104 | Hotspot > Centre-left | `Set hotspot to centre-left` |  |  | — |  |
| 25 | 105 | Hotspot > Centre | `Set hotspot to centre of image` |  |  | — |  |
| 26 | 106 | Hotspot > Centre-right | `Set hotspot to centre-right` |  |  | — |  |
| 27 | 107 | Hotspot > Bottom-left | `Set hotspot to bottom-left` |  |  | — |  |
| 28 | 108 | Hotspot > Bottom-centre | `Set hotspot to bottom-centre` |  |  | — |  |
| 29 | 109 | Hotspot > Bottom-right | `Set hotspot to bottom-right` |  |  | — |  |
| 30 | 110 | Image > Free image > Free internal alpha number | `Free internal alpha channel <p0>` |  | expression numérique « Image number to free alpha from » | — |  |
| 31 | 111 | Image > Free image > Free all internal alphas | `Free all internal alpha channels` |  |  | — |  |
| 32 | 112 | Set global opacity | `Set global opacity to <p0>` |  | expression numérique « Enter opacity level (255 = opaque, 0 = invisible) » | — |  |
| 33 | 113 | Image > Load image > Load image/alpha from PNG | `Load PNG <p1> into number <p0> (force alpha: <p2> )` |  | expression numérique « Image number to load into » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » ; expression numérique « If no transparency, 1 = opaque alpha, 2 = transp black, 3 = transp top left, 0 = no action » | — |  |
| 34 | 114 | Image > Load image > Load image from PNG | `Load image from PNG <p1> into image <p0>` |  | expression numérique « Image number to load into » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » | — |  |
| 35 | 115 | Image > Load image > Load image from PNG as alpha | `Load image from PNG <p1> into alpha <p0>` |  | expression numérique « Image number to load into » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » | — |  |
| 36 | 116 | Image > Load image > Load BMP from memory | `Load BMP from address <p0> into number <p1> (img/alp: <p2> , alpha setting <p3> )` |  | expression numérique « Memory address to load from » ; expression numérique « Image number to load into » ; expression numérique « Load into image (enter 0) or alpha channel (enter 1)? » ; expression numérique « Autogenerate alpha channel? (0=no, 1=yes transp black, 2=transp top left pixel) » | — |  |
| 37 | 117 | Image > Load image > Load PNG from memory | `Load PNG from address <p0> into number <p1> (img/alp: <p2> , alpha setting <p3> )` |  | expression numérique « Memory address to load from » ; expression numérique « Image number to load into » ; expression numérique « Load image (enter 0), alpha (enter 1) or both (enter 2)? » ; expression numérique « If no transparency, 1 = opaque alpha, 2 = transp black, 3 = transp top left, 0 = no action » | — |  |
| 38 | 118 | Image > Overlay > Overlay -> Image | `Load image from Overlay address <p0> into image <p1>` |  | expression numérique « Address of the Overlay (use expression from object) » ; expression numérique « Image number to load » | — |  |
| 39 | 119 | Image > Overlay > Overlay -> Alpha | `Load image from Overlay address <p0> into alpha <p1>` |  | expression numérique « Address of the Overlay (use expression from object) » ; expression numérique « Alpha channel to load » | — |  |
| 40 | 120 | Image > Save image > Save PNG (img/alpha) | `Save PNG to <p1> from image/alpha <p0>` |  | expression numérique « Image number to save » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » | — |  |
| 41 | 121 | Image > Save image > Save PNG (image only) | `Save PNG to <p1> using alpha <p0>` |  | expression numérique « Image number to save » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » | — |  |
| 42 | 122 | Image > Save image > Save PNG (alpha only) | `Save PNG (image only) to <p1> from image <p0>` |  | expression numérique « Image number to save » ; nom de fichier « Portable Network Graphics files (*.png)\|*.png » | — |  |
| 43 | 123 | Image > Overlay > Image -> Overlay | `Save image <p1> to Overlay at address <p0>` |  | expression numérique « Address of the Overlay (use expression from object) » ; expression numérique « Image number to save » | — |  |
| 44 | 124 | Image > Overlay > Alpha -> Overlay | `Save alpha <p1> to Overlay at address <p0>` |  | expression numérique « Address of the Overlay (use expression from object) » ; expression numérique « Alpha channel to save » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Image > Current image number | `Current Image(` |  |  | — |  |
| 1 | 81 | Image > Current alpha number | `Current Alpha(` |  |  | — |  |
| 2 | 82 | Animation > Animation frame | `Current Anim Frame(` |  |  | — |  |
| 3 | 83 | Animation > Current ID | `Current Anim(` |  |  | — |  |
| 4 | 84 | Animation > Current name | `Current Anim$(` |  | → chaîne | — |  |
| 5 | 85 | Animation > Animation speed | `Current Anim Speed(` |  |  | — |  |
| 6 | 86 | Hotspot X position | `Hotspot X(` |  |  | — |  |
| 7 | 87 | Hotspot Y position | `Hotspot Y(` |  |  | — |  |
| 8 | 88 | Original width | `Original Width(` |  |  | — |  |
| 9 | 89 | Original height | `Original Height(` |  |  | — |  |
| 10 | 90 | Image > Get width of an image | `Image Width(` |  | nombre | — |  |
| 11 | 91 | Image > Get height of an image | `Image Height(` |  | nombre | — |  |
| 12 | 92 | Get angle | `Angle(` |  |  | — |  |
| 13 | 93 | Resized width | `Resized Width(` |  |  | — |  |
| 14 | 94 | Resized height | `Resized Height(` |  |  | — |  |
| 15 | 95 | Get global opacity | `Opacity(` |  |  | — |  |
