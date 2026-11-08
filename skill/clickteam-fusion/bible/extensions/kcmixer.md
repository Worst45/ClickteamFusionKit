# Extension kcmixer

- File: `kcmixer.mfx` — installed with Fusion
- Exporters: **not in HTML5 / Android** (Windows: not checked; an extension in no other exporter is usually Windows only)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Change wave left and right volume | `Change wave left and right volume to <p0>` | Changer le volume droit et gauche des échantillons à <p0> | (unreliable parameters) |
| 1 | 81 | Change wave left volume | `Change wave left volume to <p0>` | Changer le volume gauche des échantillons à <p0> | (unreliable parameters) |
| 2 | 82 | Change wave right volume | `Change wave right volume to <p0>` | Changer le volume droit des échantillons à <p0> | (unreliable parameters) |
| 3 | 83 | Change FM synthesizer left and right volume | `Change FM synthesizer left and right volume to <p0>` | Changer les volumes gauche et droite synthétiseur FM à <p0> | (unreliable parameters) |
| 4 | 84 | Change FM synthesizer left volume | `Change FM synthesizer left volume to <p0>` | Changer le volume gauche du synthétiseur FM à <p0> | (unreliable parameters) |
| 5 | 85 | Change FM synthesizer right volume | `Change FM synthesizer right volume to <p0>` | Changer le volume droit du synthétiseur FM à <p0> | (unreliable parameters) |
| 6 | 86 | Change square wave synthesizer left and right volume | `Change square wave synthesizer left and right volume to <p0>` | Changer le volume droit et gauche du synthétiseur carré à <p0> | (unreliable parameters) |
| 7 | 87 | Change square wave synthesizer left volume | `Change square wave synthesizer left volume to <p0>` | Changer le volume gauche du synthétiseur carré à <p0> | (unreliable parameters) |
| 8 | 88 | Change square wave synthesizer right volume | `Change square wave synthesizer right volume to <p0>` | Changer le volume droit du synthétiseur carré à <p0> | (unreliable parameters) |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 1 | 81 | Wave left volume | `Wave vol left(` | Volume gauche échantillons |  |
| 2 | 82 | Wave right volume | `Wave vol right(` | Volume droit échantillons |  |
| 4 | 84 | Midi FM synthesizer left volume | `FM vol left(` | Volume gauche du synthétiseur FM MIDI |  |
| 5 | 85 | Midi FM synthesizer right volume | `FM vol right(` | Volume droit du synthétiseur FM MIDI |  |
| 7 | 87 | Midi square wave synthesizer left volume | `SQ vol left(` | Volume gauche du synthétiseur carré MIDI |  |
| 8 | 88 | Midi square wave synthesizer right volume | `SQ vol right(` | Volume droit du synthétiseur carré MIDI |  |
