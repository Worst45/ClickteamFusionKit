# Extension fcAVIs

- File: `fcAVIs.mfx` — third-party extension (shipped with a downloaded project)
- Usage in the corpus: none
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export shows `Expression ID 83("Ini")"Game", "sound")`)

## Conditions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | -81 | Has one or more image | `<object> has one or more image` |  |  | — |  |
| 1 | -82 | Has a sound strip | `<object> has a sound strip` |  |  | — |  |
| 2 | -83 | On error | `<object>: On Error` |  |  | — |  |
| 3 | -84 | On successful conversion | `<object>: On Successful Conversion` |  |  | — |  |
| 4 | -85 | Is processing | `<object> is processing` |  |  | — |  |
| 5 | -86 | On processed image | `<object>: On Processed Image` |  |  | — |  |

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video images > Add an image at the end | `Add image <p0> at the end of the video` |  | string expression “Select a picture file (*.bmp;*.gif;*.jpg)” | — |  |
| 1 | 81 | Video images > Delete all images | `Delete all images of the video` |  |  | — |  |
| 2 | 82 | Process > Convert sequence to AVI | `Convert images+sound to AVI file <p0>` |  | string expression “Video file to save after conversion (*.avi)” | — |  |
| 3 | 83 | Sound strip > Set sound strip of the video | `Set the video sound strip to <p0>` |  | string expression “Select a sound file (*.wav)” | — |  |
| 4 | 84 | Sound strip > Delete sound strip of the video | `Delete sound strip of the video` |  |  | — |  |
| 7 | 87 | Video images > Delete last image | `Delete last image of the video` |  |  | — |  |
| 8 | 88 | Process > Stop conversion | `Stop conversion and Free memory` |  |  | — |  |
| 9 | 89 | Video images > Set images period | `Set images period to <p0>ms` |  | numeric expression “Time between 2 images in milliseconds” | — |  |
| 10 | 90 | Process > Compress video | `Compress video (<p0>)` |  | numeric expression “Compress video (0=Off, 1=On, 2=Use dialog if necessary)” | — |  |
| 11 | 91 | Process > Pause conversion | `Pause conversion` |  |  | — |  |
| 12 | 92 | Process > Resume conversion | `Resume conversion paused` |  |  | — |  |
| 13 | 93 | Process > Set FourCC code to use | `Set compression using FourCC: <p0>` |  | string expression “FourCC (case sensitive) For example: "DIVX", "MPG4", "XVID" (leave blank for a dialog)” | — |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters | Usage | Real example (Nebula rendering) |
|---|---|---|---|---|---|---|---|
| 0 | 80 | Video images > Count images | `countImages(` |  |  | — |  |
| 1 | 81 | Video images > Get last image path | `getLastImagePath$(` |  | → string | — |  |
| 2 | 82 | Sound strip > Get sound strip path | `getSoundPath$(` |  | → string | — |  |
| 3 | 83 | Video images > Get first image path | `getFirstImagePath$(` |  | → string | — |  |
| 4 | 84 | Video images > Get an image path | `getImagePath$(` |  | number “Image number” → string | — |  |
| 5 | 85 | Error > Get last error num | `getLastError(` |  |  | — |  |
| 6 | 86 | Error > Get last error string | `getLastError$(` |  | → string | — |  |
| 7 | 87 | Process > Get process image | `getProcessedImage(` |  |  | — |  |
| 8 | 88 | Process > Get process percentage | `getProcessedPercent(` |  |  | — |  |
| 9 | 89 | Video images > Get images period | `getImagesPeriod(` |  |  | — |  |
| 10 | 90 | Process > Get video file name | `getVideoFileName$(` |  | → string | — |  |
