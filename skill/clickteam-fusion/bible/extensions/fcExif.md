# Extension fcExif

- Fichier : `fcExif.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | On Load > File contain an EXIF structure | `<objet> : On Load - File contain an EXIF structure` |  |  | — |  |
| 1 | -82 | On Load > File does not contain any EXIF structure | `<objet> : On Load - File does not contain an EXIF structure` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Open a JPG File | `Load JPG file <p0>` |  | nom de fichier « Select a JPG file » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Misc > Get Version | `getVersion$(` |  | → chaîne | — |  |
| 1 | 81 | Camera > Get Camera Maker | `getCameraMaker$(` |  | → chaîne | — |  |
| 2 | 82 | Camera > Get Camera Model | `getCameraModel$(` |  | → chaîne | — |  |
| 3 | 83 | Photography > Get Date and Time | `getPhotographyDateTime$(` |  | → chaîne | — |  |
| 4 | 84 | Photography > Get Height | `getPhotographyHeight(` |  |  | — |  |
| 5 | 85 | Photography > Get Width | `getPhotographyWidth(` |  |  | — |  |
| 6 | 86 | Photography > Get Orientation | `getPhotographyOrientation(` |  |  | — |  |
| 7 | 87 | Photography > Get Color Mode | `getPhotographyColorMode(` |  |  | — |  |
| 8 | 88 | Misc > Get Process | `getProcess(` |  |  | — |  |
| 9 | 89 | Camera > Get Flash Mode | `getFlashMode(` |  |  | — |  |
| 10 | 90 | Focal > Get Focal Length | `getFocalLengthF(` |  |  | — |  |
| 11 | 91 | Exposure > Get Exposure Time | `getExposureTimeF(` |  |  | — |  |
| 12 | 92 | Focal > Get Aperture | `getApertureF(` |  |  | — |  |
| 13 | 93 | Focal > Get Distance | `getDistanceF(` |  |  | — |  |
| 14 | 94 | Camera > Get CCD Width | `getCCDWidthF(` |  |  | — |  |
| 15 | 95 | Exposure > Get Exposure Bias | `getExposureBiasF(` |  |  | — |  |
| 16 | 96 | Camera > Get White Balance | `getWhiteBalance(` |  |  | — |  |
| 17 | 97 | Camera > Get Metering Mode | `getMeteringMode(` |  |  | — |  |
| 18 | 98 | Exposure > Get Exposure Program | `getExposureProgram(` |  |  | — |  |
| 19 | 99 | Misc > Get ISO Equivalent | `getISOEquivalent(` |  |  | — |  |
| 20 | 100 | Photography > Get Compression Level | `getCompressionLevel(` |  |  | — |  |
| 21 | 101 | Focal > Get Focal Plane X Resolution | `getFocalPlaneXResF(` |  |  | — |  |
| 22 | 102 | Focal > Get Focal Plane Y Resolution | `getFocalPlaneYResF(` |  |  | — |  |
| 23 | 103 | Focal > Get Focal Plane Units | `getFocalPlaneUnitsF(` |  |  | — |  |
| 24 | 104 | Photography > Get X Resolution | `getXResF(` |  |  | — |  |
| 25 | 105 | Photography > Get Y Resolution | `getYResF(` |  |  | — |  |
| 26 | 106 | Photography > Get Resolution Unit | `getResolutionUnitF(` |  |  | — |  |
| 27 | 107 | Photography > Get Brightness | `getBrightnessF(` |  |  | — |  |
| 28 | 108 | Misc > Get Comments | `getComments$(` |  | → chaîne | — |  |
