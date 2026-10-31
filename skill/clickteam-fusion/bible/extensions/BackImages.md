# Extension BackImages

- Fichier : `BackImages.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Image exists in slot... | `<objet>: Image exists in slot <p0>` |  | expression numérique « Enter Slot » | — |  |
| 1 | -82 | Resamples images | `<objet>: Resamples images` |  |  | — |  |
| 2 | -83 | Patterns images | `<objet>: Patterns images` |  |  | — |  |
| 3 | -84 | Compare to displayed image slot | `<objet>: Displayed slot <p0>` |  | comparaison numérique « Enter Slot » | — |  |
| 4 | -85 | Autoresizes object | `<objet>: Autoresizes object` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Display Image from slot... | `Display Image from slot <p0>` |  | expression numérique « Enter Slot » | — |  |
| 1 | 81 | Images > External Images > Load Image from file... | `Load Image from file <p0> into slot <p1>` |  | nom de fichier « #Title#Choose your image...#Filter#Images (*.BMP;*.JPG;*.GIF;*.PNG)\|*.BMP;*.JPG;*.GIF;*.PNG\|All files\|*.*\| » ; expression numérique « Enter Slot » | — |  |
| 2 | 82 | Images > External Images > Load Image from Overlay... | `Load Image from Overlay at <p0> into slot <p1>` |  | expression numérique « Enter Fixed value of Overlay object » ; expression numérique « Enter Slot » | — |  |
| 3 | 83 | Images > Copy Images between slots... | `Copy Image from slot <p0> into slot <p1>` |  | expression numérique « Enter Slot » ; expression numérique « Enter Slot » | — |  |
| 4 | 84 | Images > Swap Images between slots... | `Swap Images between slots <p0> and <p1>` |  | expression numérique « Enter Slot » ; expression numérique « Enter Slot » | — |  |
| 5 | 85 | Images > Clear Image from slot... | `Clear Image from slot <p0>` |  | expression numérique « Enter Slot » | — |  |
| 6 | 86 | Set X Coordinate... | `Set X Position to <p0>` |  | expression numérique « Enter X Coordinate » | — |  |
| 7 | 87 | Set Y Coordinate... | `Set Y Position to <p0>` |  | expression numérique « Enter Y Coordinate » | — |  |
| 8 | 88 | Set Width... | `Set Width to <p0>` |  | expression numérique « Enter Width » | — |  |
| 9 | 89 | Set Height... | `Set Height to <p0>` |  | expression numérique « Enter Height » | — |  |
| 10 | 90 | Set Resample mode > Off | `Set Resample mode: Off` |  |  | — |  |
| 11 | 91 | Set Resample mode > On | `Set Resample mode: On` |  |  | — |  |
| 12 | 92 | Set Resample mode > Set | `Set Resample mode to <p0>` |  | expression numérique « 0 = Off, 1 = On » | — |  |
| 13 | 93 | Set Resample Width... | `Set Resample Width to <p0>` |  | expression numérique « Enter Resample Width » | — |  |
| 14 | 94 | Set Resample Height... | `Set Resample Height to <p0>` |  | expression numérique « Enter Resample Height » | — |  |
| 15 | 95 | Set Pattern mode > Off | `Set Pattern mode: Off` |  |  | — |  |
| 16 | 96 | Set Pattern mode > On | `Set Pattern mode: On` |  |  | — |  |
| 17 | 97 | Set Pattern mode > Set | `Set Pattern mode to <p0>` |  | expression numérique « 0 = Off, 1 = On » | — |  |
| 18 | 98 | Set Alignment mode > Top left | `Set Alignment to top left` |  |  | — |  |
| 19 | 99 | Set Alignment mode > Top centre | `Set Alignment to top centre` |  |  | — |  |
| 20 | 100 | Set Alignment mode > Top right | `Set Alignment to top right` |  |  | — |  |
| 21 | 101 | Set Alignment mode > Centre left | `Set Alignment to centre left` |  |  | — |  |
| 22 | 102 | Set Alignment mode > Centre | `Set Alignment to centre` |  |  | — |  |
| 23 | 103 | Set Alignment mode > Centre right | `Set Alignment to centre right` |  |  | — |  |
| 24 | 104 | Set Alignment mode > Bottom left | `Set Alignment to bottom left` |  |  | — |  |
| 25 | 105 | Set Alignment mode > Bottom centre | `Set Alignment to bottom centre` |  |  | — |  |
| 26 | 106 | Set Alignment mode > Bottom right | `Set Alignment to bottom right` |  |  | — |  |
| 27 | 107 | Set Alignment mode > Set | `Set Alignment to <p0>` |  | expression numérique « 0 = TL, 1 = TC, 2 = TR, 3 = CL, 4 = C, 5 = CR, 6 = BL, 7 = BC, 8 = BR » | — |  |
| 28 | 108 | Images > External Images > Load Image from Overlay into alpha channel... | `Load Image from Overlay at <p0> into alpha channel at slot <p1>` |  | expression numérique « Enter Fixed value of Overlay object » ; expression numérique « Enter Slot » | — |  |
| 29 | 109 | Images > External Images > Load Image into Overlay... | `Load Image from slot <p1> into Overlay at <p0>` |  | expression numérique « Enter Fixed value of Overlay object » ; expression numérique « Enter Slot » | — |  |
| 30 | 110 | Images > External Images > Load Alpha channel from Image into Overlay... | `Load Alpha channel from Image at slot <p1> into Overlay at <p0>` |  | expression numérique « Enter Fixed value of Overlay object » ; expression numérique « Enter Slot » | — |  |
| 31 | 111 | Images > Set Transparent Colour... | `Set Transparent Colour to <p1> for Image at <p0>` |  | expression numérique « Enter Slot » ; couleur « Set Transparent Colour » | — |  |
| 32 | 112 | Set Efficiency mode > High RAM  Low CPU | `Set Efficiency mode to High RAM & Low CPU` |  |  | — |  |
| 33 | 113 | Set Efficiency mode > Low RAM  High CPU | `Set Efficiency mode to Low RAM & High CPU` |  |  | — |  |
| 34 | 114 | Set Efficiency mode > Set | `Set Efficiency mode to <p0>` |  | expression numérique « Enter Efficiency mode (0 = High RAM & Low CPU, 1 = Low RAM & High CPU) » | — |  |
| 35 | 115 | Visibility > Make Object Invisible | `Make invisible` |  |  | — |  |
| 36 | 116 | Visibility > Make Object Reappear | `Reappear` |  |  | — |  |
| 37 | 117 | Visibility > Flash Object | `Flash during <p0>` |  | temps « Flash Object » | — |  |
| 38 | 118 | Visibility > Change ink effect | `Set ink effect to <p0>` |  | effet d'encre « Change ink effect » | — |  |
| 39 | 119 | Visibility > Set semi-transparency | `Set semi-transparency to <p0>` |  | expression numérique « Please enter a value between 0 and 128 » | — |  |
| 40 | 120 | Set Autosize mode > Off | `Set Autosize mode: Off` |  |  | — |  |
| 41 | 121 | Set Autosize mode > On | `Set Autosize mode: On` |  |  | — |  |
| 42 | 122 | Set Autosize mode > Set | `Set Autosize mode to <p0>` |  | expression numérique « 0 = Off, 1 = On » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Get Displayed Image slot | `DisplayedSlot(` |  |  | — |  |
| 1 | 81 | Images > Get Image Original Width | `SlotImageWidth(` |  | nombre « Enter Slot » | — |  |
| 2 | 82 | Images > Get Image Original Height | `SlotImageHeight(` |  | nombre « Enter Slot » | — |  |
| 3 | 83 | Get X Coordinate | `PosX(` |  |  | — |  |
| 4 | 84 | Get Y Coordinate | `PosY(` |  |  | — |  |
| 5 | 85 | Get Width | `Width(` |  |  | — |  |
| 6 | 86 | Get Height | `Height(` |  |  | — |  |
| 7 | 87 | Get Resample Width | `ResampleWidth(` |  |  | — |  |
| 8 | 88 | Get Resample Height | `ResampleHeight(` |  |  | — |  |
| 9 | 89 | Get Alignment mode | `AlignmentMode(` |  |  | — |  |
| 10 | 90 | Images > Get Transparent Colour | `SlotImageTransColour(` |  | nombre « Enter Slot » | — |  |
