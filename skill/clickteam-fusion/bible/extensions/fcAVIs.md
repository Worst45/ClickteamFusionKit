# Extension fcAVIs

- Fichier : `fcAVIs.mfx` — extension tierce (fournie avec un projet téléchargé)
- Usage dans le corpus : aucun
- Numéros dans les événements : condition = −(81 + code), action / expression = 80 + code
- Écrire une expression dans l'éditeur : nom de l'expression, puis **le nom de l'objet en 1er paramètre**, puis les paramètres du tableau — ex. `GroupItemValue( "Ini", "Game", "sound" )` (l'export MfaDump affiche `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has one or more image | `<objet> has one or more image` |  |  | — |  |
| 1 | -82 | Has a sound strip | `<objet> has a sound strip` |  |  | — |  |
| 2 | -83 | On error | `<objet>: On Error` |  |  | — |  |
| 3 | -84 | On successful conversion | `<objet>: On Successful Conversion` |  |  | — |  |
| 4 | -85 | Is processing | `<objet> is processing` |  |  | — |  |
| 5 | -86 | On processed image | `<objet>: On Processed Image` |  |  | — |  |

## Actions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video images > Add an image at the end | `Add image <p0> at the end of the video` |  | expression chaîne « Select a picture file (*.bmp;*.gif;*.jpg) » | — |  |
| 1 | 81 | Video images > Delete all images | `Delete all images of the video` |  |  | — |  |
| 2 | 82 | Process > Convert sequence to AVI | `Convert images+sound to AVI file <p0>` |  | expression chaîne « Video file to save after conversion (*.avi) » | — |  |
| 3 | 83 | Sound strip > Set sound strip of the video | `Set the video sound strip to <p0>` |  | expression chaîne « Select a sound file (*.wav) » | — |  |
| 4 | 84 | Sound strip > Delete sound strip of the video | `Delete sound strip of the video` |  |  | — |  |
| 7 | 87 | Video images > Delete last image | `Delete last image of the video` |  |  | — |  |
| 8 | 88 | Process > Stop conversion | `Stop conversion and Free memory` |  |  | — |  |
| 9 | 89 | Video images > Set images period | `Set images period to <p0>ms` |  | expression numérique « Time between 2 images in milliseconds » | — |  |
| 10 | 90 | Process > Compress video | `Compress video (<p0>)` |  | expression numérique « Compress video (0=Off, 1=On, 2=Use dialog if necessary) » | — |  |
| 11 | 91 | Process > Pause conversion | `Pause conversion` |  |  | — |  |
| 12 | 92 | Process > Resume conversion | `Resume conversion paused` |  |  | — |  |
| 13 | 93 | Process > Set FourCC code to use | `Set compression using FourCC: <p0>` |  | expression chaîne « FourCC (case sensitive) For example: "DIVX", "MPG4", "XVID" (leave blank for a dialog) » | — |  |

## Expressions

| Code | N° évén. | Menu | Texte affiché | FR | Paramètres | Usage | Exemple réel (rendu Nebula) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video images > Count images | `countImages(` |  |  | — |  |
| 1 | 81 | Video images > Get last image path | `getLastImagePath$(` |  | → chaîne | — |  |
| 2 | 82 | Sound strip > Get sound strip path | `getSoundPath$(` |  | → chaîne | — |  |
| 3 | 83 | Video images > Get first image path | `getFirstImagePath$(` |  | → chaîne | — |  |
| 4 | 84 | Video images > Get an image path | `getImagePath$(` |  | nombre « Image number » → chaîne | — |  |
| 5 | 85 | Error > Get last error num | `getLastError(` |  |  | — |  |
| 6 | 86 | Error > Get last error string | `getLastError$(` |  | → chaîne | — |  |
| 7 | 87 | Process > Get process image | `getProcessedImage(` |  |  | — |  |
| 8 | 88 | Process > Get process percentage | `getProcessedPercent(` |  |  | — |  |
| 9 | 89 | Video images > Get images period | `getImagesPeriod(` |  |  | — |  |
| 10 | 90 | Process > Get video file name | `getVideoFileName$(` |  | → chaîne | — |  |
